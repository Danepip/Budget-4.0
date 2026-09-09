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
            throw new Error("Remplacement de l'historique bloque. Les transactions absentes de cette copie locale ne seront pas supprimees du cloud. Utilisez Fusionner avec le cloud pour verifier la restauration.");
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

  function transactionSignature(row) {
    // A possible correspondence, never proof that two purchases are the same.
    return stableStringify([row.entry_date, row.category, row.amount]);
  }

  function planMerge(localSnapshot, remoteSnapshot) {
    const local = canonicalSnapshot(localSnapshot);
    const remote = canonicalSnapshot(remoteSnapshot);
    const items = [];
    let identical = 0;
    const candidates = new Map();
    remote.budget_transactions.forEach(row => {
      const signature = transactionSignature(row);
      candidates.set(signature, [...(candidates.get(signature) || []), row]);
    });
    Object.keys(schemas).forEach(table => {
      indexRows(table, local[table]);
      const remoteIndex = indexRows(table, remote[table]);
      local[table].forEach(row => {
        if (table === 'budget_transactions' && !uuidPattern.test(row.id)) {
          throw new Error('Identifiant local invalide. Fusion annulee.');
        }
        const existing = remoteIndex.get(rowKey(table, row));
        if (existing && stableStringify(existing) === stableStringify(row)) {
          identical++;
          return;
        }
        items.push({
          index: items.length, table, row, existing: existing || null,
          kind: existing ? 'conflict' : 'new',
          candidates: !existing && table === 'budget_transactions'
            ? clone(candidates.get(transactionSignature(row)) || []) : [],
        });
      });
    });
    return { local, remote, items, identical };
  }

  function resolveMerge(plan, decisions = {}) {
    const merged = canonicalSnapshot(plan.remote);
    const matchedIds = new Set();
    // Already-identified rows cannot also absorb a different imported transaction.
    const originalIds = new Set(plan.local.budget_transactions.map(row => row.id));
    const stats = { added: 0, updated: 0, kept: plan.identical, matched: 0, ignored: 0 };
    plan.items.forEach(item => {
      const choice = decisions[item.index] || (item.kind === 'new' && !item.candidates.length ? 'local' : '');
      if (!choice) throw new Error('Choisissez une action pour chaque correspondance ou difference.');
      if (choice === 'keep') {
        if (item.existing) stats.kept++; else stats.ignored++;
        return;
      }
      if (choice.startsWith('match:')) {
        const id = choice.slice(6);
        if (!item.candidates.some(row => row.id === id) || matchedIds.has(id) || originalIds.has(id)) {
          throw new Error('Une transaction cloud ne peut correspondre qu\'a une seule ligne importee.');
        }
        matchedIds.add(id);
        stats.matched++;
        return;
      }
      if (choice !== 'local') throw new Error('Choix de fusion invalide.');
      const key = rowKey(item.table, item.row);
      merged[item.table] = merged[item.table].filter(row => rowKey(item.table, row) !== key);
      merged[item.table].push(clone(item.row));
      if (item.existing) stats.updated++; else stats.added++;
    });
    const changes = buildChanges(plan.remote, merged, plan.remote);
    if (changes.some(change => !change.after)) throw new Error('Une fusion ne doit jamais supprimer de ligne cloud.');
    return { snapshot: merged, changes, stats };
  }

  function classifyError(error) {
    const code = String(error?.code || '');
    if (code === '40001') return 'conflict';
    if (['42501', '28000', '28P01', 'PGRST301'].includes(code)) return 'access';
    const status = Number(error?.status || error?.statusCode || 0);
    const message = String(error?.message || error || '');
    if (status === 408 || status === 429 || status >= 500 ||
        /failed to fetch|fetch failed|network|connection lost|timeout|timed out|offline|r[eé]seau|change pendant le chargement/i.test(message)) return 'retry';
    return 'blocked';
  }

  function summarizeSnapshot(snapshot) {
    const canonical = canonicalSnapshot(snapshot);
    const months = {};
    canonical.budget_transactions.forEach(row => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(row.entry_date || '')) return;
      const month = row.entry_date.slice(0, 7);
      months[month] = (months[month] || 0) + 1;
    });
    return {
      counts: Object.fromEntries(Object.entries(canonical).map(([table, rows]) => [table, rows.length])),
      months: Object.fromEntries(Object.keys(months).sort().map(month => [month, months[month]])),
    };
  }

  const api = { schemas, uuidPattern, canonicalRow, canonicalSnapshot, buildChanges, applyChanges, hasChanges, stableStringify, planMerge, resolveMerge, classifyError, summarizeSnapshot };
  scope.BUDGET_CLOUD_SYNC = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
