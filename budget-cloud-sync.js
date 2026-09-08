(function attachBudgetCloudSync(scope) {
  const schemas = {
    budget_transactions: { keys: ["id"], fields: { id: "", entry_date: null, category: "", amount: null, funding_source: "cash" } },
    budget_categories: { keys: ["name"], fields: { name: "", group_key: null, position: 0 } },
    budget_category_groups: { keys: ["group_key"], fields: { group_key: "", label: "", plan_group: "expenses", tone: "default", description: "", position: 0 } },
    budget_plan_rows: { keys: ["plan_id", "label"], fields: { plan_id: "legacy-main-plan", plan_name: "Plan principal", plan_start_date: null, plan_end_date: null, plan_sort_order: 0, label: "", plan_amount: null, plan_period: "monthly", position: 0 } },
    budget_recurring_templates: { keys: ["template_id"], fields: { template_id: "", label: "", category: "", amount: null, period: "monthly", start_date: null, auto_create: false, generated_keys: [], dismissed_keys: [], sort_order: 0 } },
    budget_card_tracker_state: { keys: [], fields: { payload: { people: [] } } },
  };
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  const clone = value => JSON.parse(JSON.stringify(value));

  function stableStringify(value) {
    if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
    if (value && typeof value === "object") {
      return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(",")}}`;
    }
    return JSON.stringify(value);
  }

  function canonicalRow(table, row) {
    if (row === null || row === undefined) return null;
    const schema = schemas[table];
    if (!schema) throw new Error("Collection cloud inconnue.");
    const result = {};
    Object.entries(schema.fields).forEach(([key, fallback]) => {
      const value = row[key] === undefined ? fallback : row[key];
      result[key] = key === "funding_source" ? (value === "savings" ? "savings" : "cash") : clone(value);
    });
    return result;
  }

  function rowKey(table, row) {
    return stableStringify(Object.fromEntries(schemas[table].keys.map(key => [key, row[key]])));
  }

  function canonicalSnapshot(snapshot = {}) {
    return Object.fromEntries(Object.keys(schemas).map(table => [table,
      (snapshot[table] || []).map(row => canonicalRow(table, row)),
    ]));
  }

  function indexRows(table, rows) {
    const index = new Map();
    rows.forEach(row => {
      const key = rowKey(table, row);
      if (index.has(key)) throw new Error("Doublon d'identifiant dans les donnees locales. Publication annulee.");
      index.set(key, row);
    });
    return index;
  }

  function buildChanges(localBefore, localAfter, remoteBefore, options = {}) {
    const before = canonicalSnapshot(localBefore);
    const after = canonicalSnapshot(localAfter);
    const remote = canonicalSnapshot(remoteBefore);
    const allowedDeletes = new Set(options.deletedTransactionIds || []);
    const tables = options.onlyTables || Object.keys(schemas);
    const changes = [];
    tables.forEach(table => {
      const oldRows = indexRows(table, before[table]);
      const newRows = indexRows(table, after[table]);
      const remoteRows = indexRows(table, remote[table]);
      new Set([...oldRows.keys(), ...newRows.keys()]).forEach(key => {
        const previous = oldRows.get(key) || null;
        const next = newRows.get(key) || null;
        if (stableStringify(previous) === stableStringify(next)) return;
        if (table === "budget_transactions") {
          if (next && !uuidPattern.test(next.id)) throw new Error("Identifiant de transaction invalide. Aucune donnee cloud n'a ete modifiee.");
          if (!next && !allowedDeletes.has(previous.id)) {
            throw new Error("Remplacement de l'historique bloque. Les transactions absentes de cette copie locale ne seront pas supprimees du cloud.");
          }
        }
        changes.push({ table, key: JSON.parse(key), before: remoteRows.get(key) || null, after: next });
      });
    });
    return changes;
  }

  function applyChanges(snapshot, changes) {
    const result = canonicalSnapshot(snapshot);
    changes.forEach(change => {
      const key = stableStringify(change.key);
      result[change.table] = result[change.table].filter(row => rowKey(change.table, row) !== key);
      if (change.after) result[change.table].push(canonicalRow(change.table, change.after));
    });
    return result;
  }

  function hasChanges(baseline, current) {
    const before = canonicalSnapshot(baseline);
    const after = canonicalSnapshot(current);
    return Object.keys(schemas).some(table => {
      const oldRows = indexRows(table, before[table]);
      const newRows = indexRows(table, after[table]);
      return oldRows.size !== newRows.size || [...newRows].some(([key, row]) => stableStringify(row) !== stableStringify(oldRows.get(key)));
    });
  }

  const api = { schemas, uuidPattern, canonicalRow, canonicalSnapshot, buildChanges, applyChanges, hasChanges, stableStringify };
  scope.BUDGET_CLOUD_SYNC = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
