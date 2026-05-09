(function attachBudgetCategoryRules(globalScope) {
  const GROUP_ORDER = [
    "income",
    "savings",
    "debt",
    "housing",
    "communications",
    "food",
    "insurance",
    "transportation",
    "childcare",
    "education",
    "recreation",
    "personalcare",
    "clothing",
    "medical",
    "pets",
    "fees",
    "gifts",
    "custom",
  ];

  const GROUP_META = {
    income: {
      label: "Revenu",
      description: "Entrées d'argent du foyer",
      tone: "positive",
    },
    savings: {
      label: "Épargnes",
      description: "Réserve, objectifs et accumulation",
      tone: "neutral",
    },
    debt: {
      label: "Remboursement de dettes",
      description: "Carte de crédit, prêt et obligations",
      tone: "negative",
    },
    housing: {
      label: "Logement",
      description: "Loyer, hypothèque et habitation",
      tone: "negative",
    },
    communications: {
      label: "Communications",
      description: "Téléphone, internet et services numériques",
      tone: "neutral",
    },
    food: {
      label: "Alimentation",
      description: "Épicerie et restauration",
      tone: "neutral",
    },
    insurance: {
      label: "Assurances",
      description: "Protections et couvertures",
      tone: "negative",
    },
    transportation: {
      label: "Transport",
      description: "Auto, carburant et déplacements",
      tone: "negative",
    },
    childcare: {
      label: "Soins aux enfants",
      description: "Dépenses reliées aux enfants",
      tone: "neutral",
    },
    education: {
      label: "Études",
      description: "Frais scolaires et apprentissage",
      tone: "neutral",
    },
    recreation: {
      label: "Loisirs",
      description: "Sorties, sport, voyage et divertissement",
      tone: "neutral",
    },
    personalcare: {
      label: "Soins personnels",
      description: "Coiffure, cosmétiques et entretien personnel",
      tone: "neutral",
    },
    clothing: {
      label: "Vêtements",
      description: "Vêtements, accessoires et chaussures",
      tone: "neutral",
    },
    medical: {
      label: "Soins médicaux",
      description: "Santé et soins spécialisés",
      tone: "negative",
    },
    pets: {
      label: "Animaux",
      description: "Dépenses reliées aux animaux",
      tone: "neutral",
    },
    fees: {
      label: "Frais",
      description: "Cotisations, membres et frais divers",
      tone: "neutral",
    },
    gifts: {
      label: "Cadeaux et dons",
      description: "Cadeaux, accueil et dons",
      tone: "neutral",
    },
    custom: {
      label: "Autres postes",
      description: "Lignes à classer ou à personnaliser",
      tone: "default",
    },
  };

  const CATEGORY_RULES = [
    {
      id: "income_1",
      labels: ["Income 1"],
      parent: "income",
      flowType: "income",
      includeInIncome: true,
      includeInExpenses: false,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["income", "salary"],
      notes: "Revenu principal du foyer.",
    },
    {
      id: "income_2",
      labels: ["Income 2"],
      parent: "income",
      flowType: "income",
      includeInIncome: true,
      includeInExpenses: false,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["income", "partner"],
      notes: "Deuxieme revenu du foyer.",
    },
    {
      id: "income_summary",
      labels: ["Income"],
      parent: "income",
      flowType: "dynamic",
      includeInIncome: true,
      includeInExpenses: false,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["income", "summary"],
      notes: "Income reel si transaction, ligne derivee si planGroup=derived.",
      dynamicResolver: "incomeLine",
    },
    {
      id: "savings",
      labels: ["Savings"],
      parent: "savings",
      flowType: "savings",
      includeInIncome: false,
      includeInExpenses: false,
      includeInSavings: true,
      includeInParentTotals: true,
      alertGroup: "savings",
      suggestionTags: ["savings", "emergency-fund"],
      notes: "Epargne reguliere.",
    },
    {
      id: "seasonal_savings",
      labels: ["Savings for seasonal exp."],
      parent: "savings",
      flowType: "savings",
      includeInIncome: false,
      includeInExpenses: false,
      includeInSavings: true,
      includeInParentTotals: true,
      alertGroup: "savings",
      suggestionTags: ["savings", "seasonal"],
      notes: "Epargne pour depenses saisonnieres.",
    },
    {
      id: "total_savings",
      labels: ["Total Savings"],
      parent: "savings",
      flowType: "summary",
      includeInIncome: false,
      includeInExpenses: false,
      includeInSavings: false,
      includeInParentTotals: false,
      alertGroup: "savings",
      suggestionTags: ["summary"],
      notes: "Ligne derivee du budget planifie.",
    },
    {
      id: "expenses_summary",
      labels: ["Expenses", "Total Expenses"],
      parent: "custom",
      flowType: "summary",
      includeInIncome: false,
      includeInExpenses: false,
      includeInSavings: false,
      includeInParentTotals: false,
      alertGroup: null,
      suggestionTags: ["summary"],
      notes: "Ligne derivee de depenses totales.",
    },
    {
      id: "cash_summary",
      labels: ["Cash short/extra"],
      parent: "custom",
      flowType: "summary",
      includeInIncome: false,
      includeInExpenses: false,
      includeInSavings: false,
      includeInParentTotals: false,
      alertGroup: null,
      suggestionTags: ["summary", "cash"],
      notes: "Ligne derivee de cash net.",
    },
    {
      id: "credit_card",
      labels: ["Credit card"],
      parent: "debt",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "debt",
      suggestionTags: ["debt", "credit-card"],
      notes: "Remboursement de carte de credit.",
    },
    {
      id: "student_loans",
      labels: ["Student loans"],
      parent: "debt",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "debt",
      suggestionTags: ["debt", "student-loan"],
      notes: "Pret etudiant.",
    },
    {
      id: "payment_obligations",
      labels: ["Payment Obligations"],
      parent: "debt",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "debt",
      suggestionTags: ["debt", "obligation"],
      notes: "Obligations de paiement liees aux dettes.",
    },
    {
      id: "rent",
      labels: ["Rent"],
      parent: "housing",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "housing",
      suggestionTags: ["housing", "rent"],
      notes: "Loyer.",
    },
    {
      id: "mortgage",
      labels: ["Mortgage"],
      parent: "housing",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "housing",
      suggestionTags: ["housing", "mortgage"],
      notes: "Paiement hypothecaire.",
    },
    {
      id: "association_fees",
      labels: ["Association fees"],
      parent: "dynamic",
      flowType: "dynamic",
      includeInIncome: false,
      includeInExpenses: false,
      includeInSavings: false,
      includeInParentTotals: false,
      alertGroup: null,
      suggestionTags: ["special-case", "association-fees"],
      notes: "Cas special: positif => Revenu, negatif => pas de parent mais compte dans Expenses.",
      dynamicResolver: "associationFees",
    },
    {
      id: "home_insurance",
      labels: ["Home insurance"],
      parent: "housing",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "housing",
      suggestionTags: ["housing", "insurance"],
      notes: "Assurance maison.",
    },
    {
      id: "home_improvements",
      labels: ["Home improvements"],
      parent: "housing",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "housing",
      suggestionTags: ["housing", "maintenance"],
      notes: "Renovation ou entretien habitation.",
    },
    {
      id: "cellular_telephone",
      labels: ["Cellular telephone"],
      parent: "communications",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "communications",
      suggestionTags: ["communications", "phone"],
      notes: "Telephone mobile.",
    },
    {
      id: "internet",
      labels: ["Internet"],
      parent: "communications",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "communications",
      suggestionTags: ["communications", "internet"],
      notes: "Connexion internet.",
    },
    {
      id: "subscriptions",
      labels: [
        "Subscriptions (chatgpt; Windows)",
        "Entertainement  (Netflix ; Prime ; Spotify; IPTV)",
      ],
      parent: "communications",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "communications",
      suggestionTags: ["communications", "subscriptions"],
      notes: "Services numeriques et abonnements.",
    },
    {
      id: "groceries",
      labels: ["Groceries"],
      parent: "food",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "food",
      suggestionTags: ["food", "groceries"],
      notes: "Epicerie.",
    },
    {
      id: "dining_out",
      labels: ["Dining out"],
      parent: "food",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "food",
      suggestionTags: ["food", "restaurant"],
      notes: "Restaurant et repas exterieurs.",
    },
    {
      id: "vehicle_lease",
      labels: ["Vehicle lease"],
      parent: "transportation",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "transportation",
      suggestionTags: ["transportation", "car-payment"],
      notes: "Location ou financement auto.",
    },
    {
      id: "car_insurance",
      labels: ["Car insurance"],
      parent: "transportation",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "transportation",
      suggestionTags: ["transportation", "insurance"],
      notes: "Assurance auto.",
    },
    {
      id: "gas_fuel",
      labels: ["Gas/fuel"],
      parent: "transportation",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "transportation",
      suggestionTags: ["transportation", "fuel"],
      notes: "Essence et carburant.",
    },
    {
      id: "car_maintenance",
      labels: ["Car Maintenance"],
      parent: "transportation",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "transportation",
      suggestionTags: ["transportation", "maintenance"],
      notes: "Entretien du vehicule.",
    },
    {
      id: "car_wash",
      labels: ["Car wash"],
      parent: "transportation",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "transportation",
      suggestionTags: ["transportation", "maintenance"],
      notes: "Lavage ou petit entretien auto.",
    },
    {
      id: "parking",
      labels: ["Parking"],
      parent: "transportation",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "transportation",
      suggestionTags: ["transportation", "parking"],
      notes: "Stationnement.",
    },
    {
      id: "taxis",
      labels: ["Taxis"],
      parent: "transportation",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "transportation",
      suggestionTags: ["transportation", "mobility"],
      notes: "Taxi et transport ponctuel.",
    },
    {
      id: "baby",
      labels: ["Baby"],
      parent: "childcare",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["childcare", "kids"],
      notes: "Depenses liees aux enfants.",
    },
    {
      id: "education",
      labels: ["Education"],
      parent: "education",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["education", "school"],
      notes: "Etudes et frais d'apprentissage.",
    },
    {
      id: "vacations_travel",
      labels: ["Vacations/Travel"],
      parent: "recreation",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["recreation", "travel"],
      notes: "Vacances et voyages.",
    },
    {
      id: "concerts_clubs",
      labels: ["Concerts/clubs"],
      parent: "recreation",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["recreation", "events"],
      notes: "Evenements et sorties.",
    },
    {
      id: "sports",
      labels: ["Sports"],
      parent: "recreation",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["recreation", "sports"],
      notes: "Sport et activites.",
    },
    {
      id: "gym_membership",
      labels: ["Gym membership( Accessories)"],
      parent: "recreation",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["recreation", "fitness"],
      notes: "Abonnement sport ou accessoires.",
    },
    {
      id: "alcohol",
      labels: ["Alcohol"],
      parent: "recreation",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["recreation", "alcohol"],
      notes: "Alcool.",
    },
    {
      id: "hobbies",
      labels: [
        "Hobbies (e.g crafts, baking...)",
        "Hobbies (e.g crafts, baking…)",
        "Hobbies (e.g crafts, bakingâ€¦)",
      ],
      parent: "recreation",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["recreation", "hobbies"],
      notes: "Loisirs et activites creatives.",
    },
    {
      id: "cosmetics",
      labels: ["Cosmetics"],
      parent: "personalcare",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["personalcare", "cosmetics"],
      notes: "Cosmetiques et soins de la peau.",
    },
    {
      id: "salon_services",
      labels: ["Salon services ( Haircuts- Hair styles)"],
      parent: "personalcare",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["personalcare", "haircut"],
      notes: "Coiffure et soins salon.",
    },
    {
      id: "clothing",
      labels: ["Clothing, including shoes"],
      parent: "clothing",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["clothing", "fashion"],
      notes: "Vetements et chaussures.",
    },
    {
      id: "health",
      labels: ["Health"],
      parent: "medical",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["medical", "health"],
      notes: "Depenses de sante.",
    },
    {
      id: "hospital_insurance",
      labels: ["Hospital insurance"],
      parent: "insurance",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: "insurance",
      suggestionTags: ["insurance", "medical"],
      notes: "Assurance hospitalisation ou dentaire.",
    },
    {
      id: "membership",
      labels: ["Membership(Card; costco)"],
      parent: "fees",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["fees", "membership"],
      notes: "Cotisation ou frais de membre.",
    },
    {
      id: "professional_dues",
      labels: ["Professional dues"],
      parent: "fees",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["fees", "professional"],
      notes: "Cotisations professionnelles.",
    },
    {
      id: "gifts",
      labels: [
        "Gifts - hostess/housewarming",
        "Gifts – hostess/housewarming",
        "Gifts â€“ hostess/housewarming",
      ],
      parent: "gifts",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["gifts", "donations"],
      notes: "Cadeaux, accueil et dons.",
    },
    {
      id: "lottery",
      labels: ["Lottery tickets/gambling/bingo"],
      parent: "recreation",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["recreation", "lottery", "gambling"],
      notes: "Loterie, jeux et bingo.",
    },
    {
      id: "other",
      labels: ["other"],
      parent: "custom",
      flowType: "expense",
      includeInIncome: false,
      includeInExpenses: true,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["custom"],
      notes: "Ligne personnalisable ou non classee.",
    },
  ];

  const RULE_INDEX = new Map();

  CATEGORY_RULES.forEach((rule) => {
    rule.labels.forEach((label) => {
      RULE_INDEX.set(normalizeBudgetCategoryKey(label), rule);
    });
  });

  function normalizeBudgetCategoryKey(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[–—−]/g, "-")
      .replace(/…/g, "...")
      .trim()
      .toLowerCase();
  }

  function cloneRule(rule) {
    return {
      ...rule,
      labels: Array.isArray(rule.labels) ? [...rule.labels] : [],
      suggestionTags: Array.isArray(rule.suggestionTags) ? [...rule.suggestionTags] : [],
    };
  }

  function createFallbackRule(label, planGroup = "", amountValue = null) {
    const normalizedPlanGroup = String(planGroup || "").trim().toLowerCase();
    const amount = Number(amountValue);

    if (normalizedPlanGroup === "income") {
      return materializeResolvedRule({
        id: "fallback-income",
        labels: [label],
        parent: "income",
        flowType: "income",
        includeInIncome: true,
        includeInExpenses: false,
        includeInSavings: false,
        includeInParentTotals: true,
        alertGroup: null,
        suggestionTags: ["income", "fallback"],
        notes: "Fallback depuis planGroup income.",
      }, label);
    }

    if (normalizedPlanGroup === "savings") {
      return materializeResolvedRule({
        id: "fallback-savings",
        labels: [label],
        parent: "savings",
        flowType: "savings",
        includeInIncome: false,
        includeInExpenses: false,
        includeInSavings: true,
        includeInParentTotals: true,
        alertGroup: "savings",
        suggestionTags: ["savings", "fallback"],
        notes: "Fallback depuis planGroup savings.",
      }, label);
    }

    if (normalizedPlanGroup === "expenses") {
      return materializeResolvedRule({
        id: "fallback-expense",
        labels: [label],
        parent: "custom",
        flowType: "expense",
        includeInIncome: false,
        includeInExpenses: true,
        includeInSavings: false,
        includeInParentTotals: true,
        alertGroup: null,
        suggestionTags: ["custom", "fallback"],
        notes: "Fallback depuis planGroup expenses.",
      }, label);
    }

    if (Number.isFinite(amount) && amount < 0) {
      return materializeResolvedRule({
        id: "fallback-negative-expense",
        labels: [label],
        parent: "custom",
        flowType: "expense",
        includeInIncome: false,
        includeInExpenses: true,
        includeInSavings: false,
        includeInParentTotals: true,
        alertGroup: null,
        suggestionTags: ["custom", "fallback", "negative"],
        notes: "Fallback negatif: traite comme depense.",
      }, label);
    }

    return materializeResolvedRule({
      id: "fallback-custom",
      labels: [label],
      parent: "custom",
      flowType: "custom",
      includeInIncome: false,
      includeInExpenses: false,
      includeInSavings: false,
      includeInParentTotals: true,
      alertGroup: null,
      suggestionTags: ["custom", "fallback"],
      notes: "Aucune regle explicite encore definie.",
    }, label);
  }

  function materializeResolvedRule(rule, label) {
    const clonedRule = cloneRule(rule);
    const normalizedKey = normalizeBudgetCategoryKey(label || clonedRule.labels[0] || clonedRule.id);
    const parentMeta = clonedRule.parent && GROUP_META[clonedRule.parent]
      ? GROUP_META[clonedRule.parent]
      : null;

    return {
      ...clonedRule,
      normalizedKey,
      label: label || clonedRule.labels[0] || clonedRule.id,
      parentMeta,
      parentLabel: parentMeta ? parentMeta.label : "",
    };
  }

  function resolveAssociationFeesRule(baseRule, amountValue) {
    const amount = Number(amountValue);
    if (Number.isFinite(amount) && amount > 0) {
      return materializeResolvedRule(
        {
          ...baseRule,
          parent: "income",
          flowType: "income",
          includeInIncome: true,
          includeInExpenses: false,
          includeInSavings: false,
          includeInParentTotals: true,
          alertGroup: null,
          notes: "Association fees positif: traite comme revenu.",
        },
        baseRule.labels[0]
      );
    }

    if (Number.isFinite(amount) && amount < 0) {
      const resolved = materializeResolvedRule(
        {
          ...baseRule,
          parent: "",
          flowType: "expense",
          includeInIncome: false,
          includeInExpenses: true,
          includeInSavings: false,
          includeInParentTotals: false,
          alertGroup: null,
          notes: "Association fees negatif: pas de parent, mais compte dans Expenses.",
        },
        baseRule.labels[0]
      );
      resolved.parentMeta = null;
      resolved.parentLabel = "";
      return resolved;
    }

    const neutralRule = materializeResolvedRule(
      {
        ...baseRule,
        parent: "",
        flowType: "neutral",
        includeInIncome: false,
        includeInExpenses: false,
        includeInSavings: false,
        includeInParentTotals: false,
        alertGroup: null,
        notes: "Association fees sans montant exploitable.",
      },
      baseRule.labels[0]
    );
    neutralRule.parentMeta = null;
    neutralRule.parentLabel = "";
    return neutralRule;
  }

  function resolveIncomeLineRule(baseRule, planGroup) {
    const normalizedPlanGroup = String(planGroup || "").trim().toLowerCase();

    if (normalizedPlanGroup === "derived") {
      return materializeResolvedRule(
        {
          ...baseRule,
          flowType: "summary",
          includeInIncome: false,
          includeInExpenses: false,
          includeInSavings: false,
          includeInParentTotals: false,
          notes: "Income de synthese du budget planifie.",
        },
        baseRule.labels[0]
      );
    }

    return materializeResolvedRule(
      {
        ...baseRule,
        flowType: "income",
        includeInIncome: true,
        includeInExpenses: false,
        includeInSavings: false,
        includeInParentTotals: true,
        notes: "Income reel issu des transactions.",
      },
      baseRule.labels[0]
    );
  }

  function resolveBudgetCategoryRule(label, options = {}) {
    const normalizedKey = normalizeBudgetCategoryKey(label);
    const baseRule = RULE_INDEX.get(normalizedKey);

    if (!baseRule) {
      return createFallbackRule(label, options.planGroup, options.amount);
    }

    if (baseRule.dynamicResolver === "associationFees") {
      return resolveAssociationFeesRule(baseRule, options.amount);
    }

    if (baseRule.dynamicResolver === "incomeLine") {
      return resolveIncomeLineRule(baseRule, options.planGroup);
    }

    return materializeResolvedRule(baseRule, label);
  }

  globalScope.BUDGET_CATEGORY_RULES = {
    GROUP_ORDER,
    GROUP_META,
    CATEGORY_RULES,
    normalizeBudgetCategoryKey,
    resolveBudgetCategoryRule,
  };
})(typeof window !== "undefined" ? window : globalThis);
