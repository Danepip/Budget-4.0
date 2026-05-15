const STORAGE_KEY = "budget-2025-card-view-v2";
const STARTUP_STATE_KEY = "budget-2025-card-view-startup-v1";
const SETTINGS_KEY = "budget-2025-card-view-settings-v1";
const RECURRING_TEMPLATES_KEY = "budget-2025-card-view-recurring-v1";
const HISTORY_STATE_KEY = "budget-2025-card-view-history-v1";
const HISTORY_STACK_LIMIT = 20;
const HISTORY_EVENT_LIMIT = 8;
const RECURRING_TEMPLATE_LIMIT = 12;
const MAX_RECURRING_OCCURRENCES_PER_TEMPLATE = 48;
const MAX_RECURRING_TRACKED_KEYS = 180;

const JOURNAL_SHEET_NAME = "Journalier";
const RECAP_SHEET_NAME = "Récapitulatif";
const ANALYSIS_VIEW_NAME = "Comparaisons";
const ANALYSIS_CATEGORY_COLORS = [
  "#78be20",
  "#f59f00",
  "#ffe066",
  "#1f6a8a",
  "#5f6fd5",
  "#13b0a5",
  "#1b84d6",
  "#d856d9",
  "#ff8c42",
  "#7d59d1",
  "#3fbf8b",
  "#9fb640",
];
const TCD_SHEET_NAME = "TCD";
const APP_TAB_DASHBOARD = "dashboard";
const APP_TAB_PLAN = "plan";
const APP_TAB_TRANSACTIONS = "transactions";
const APP_TAB_FORM = "form";
const APP_TAB_RECURRING = "recurring";
const APP_TAB_ANALYSIS = "analysis";
const APP_TAB_SHARE = "share";
const SUPPORTED_UI_LANGUAGES = ["fr", "en"];
const SUPPORTED_UI_THEMES = ["auto", "light", "dark"];
const SUPPORTED_TRANSACTION_VIEWS = ["cards", "compact"];
const UI_STRINGS = {
  fr: {
    "hero.badge": "Budget",
    "hero.kicker": "Vue simplifiée",
    "hero.periodActive": "Période active",
    "hero.fileActive": "Fichier actif",
    "hero.mode": "Mode",
    "nav.kicker": "Navigation simple",
    "tab.dashboard.label": "Accueil",
    "tab.dashboard.meta": "Vue budget",
    "tab.plan.label": "Budget",
    "tab.plan.meta": "Plan mensuel",
    "tab.transactions.label": "Transactions",
    "tab.transactions.meta": "Liste des écritures",
    "tab.form.label": "Formulaire",
    "tab.form.meta": "Nouvelle transaction",
    "tab.recurring.label": "Récurrentes",
    "tab.recurring.meta": "Modèles et règles",
    "tab.analysis.label": "Analyse",
    "tab.analysis.meta": "Comparaisons",
    "tab.share.label": "Paramètres",
    "tab.share.meta": "Cloud et options",
    "tab.dashboard.title": "Tableau de bord",
    "tab.dashboard.description": "Une lecture rapide de votre budget pour voir les soldes, les tendances et la période active.",
    "tab.plan.title": "Budget planifié",
    "tab.plan.description": "Fixez ici vos montants cibles pour comparer le plan et le réel sans toucher aux transactions.",
    "tab.transactions.title": "Transactions",
    "tab.transactions.description": "Une liste claire de vos écritures pour filtrer, relire et choisir rapidement ce que vous voulez corriger.",
    "tab.transactions.viewLabel": "Mode d'affichage",
    "tab.transactions.viewCards": "Cartes",
    "tab.transactions.viewCompact": "Compacte",
    "tab.form.title": "Formulaire",
    "tab.form.description": "Un espace dédié à la création et à la modification d'une transaction, sans distraction autour.",
    "tab.recurring.title": "Transactions récurrentes",
    "tab.recurring.description": "Gérez ici vos modèles rapides, règles automatiques et validations en attente, sans alourdir le formulaire.",
    "tab.analysis.title": "Analyse",
    "tab.analysis.description": "Des comparaisons claires entre revenu, dépenses, épargne et cash pour comprendre votre rythme.",
    "tab.share.title": "Paramètres",
    "tab.share.description": "Langue, cloud, installation, sauvegardes et préférences de l'application.",
    "startup.title": "Bienvenue dans BUDEGETAPP",
    "startup.description": "Commencez avec un modèle local, importez votre fichier Excel ou rejoignez un budget partagé.",
    "startup.note": "Vous pourrez activer le partage plus tard et exporter en Excel à tout moment.",
    "startup.startLocal": "Commencer sans fichier",
    "startup.importExcel": "Importer un fichier Excel",
    "startup.joinShared": "Rejoindre un espace partagé",
    "startup.restoreDraft": "Restaurer mon brouillon local",
    "startup.localReadyTitle": "Votre budget local est prêt.",
    "startup.localReadyBody": "Ajoutez maintenant votre première transaction depuis le formulaire ou le bouton Nouvelle transaction.",
    "welcome.kicker": "Bienvenue",
    "welcome.title": "Démarrez votre budget comme vous voulez",
    "welcome.description": "Commencez avec un modèle local, importez votre fichier Excel ou rejoignez directement un espace partagé.",
    "welcome.pointOffline": "Hors ligne prêt",
    "welcome.pointShareLater": "Partage activable plus tard",
    "welcome.pointExportAnytime": "Export Excel à tout moment",
    "toolbar.filePickerLabel": "Charger Budget_2025 Final",
    "toolbar.filePickerHint": ".xlsx recommandé",
    "toolbar.year": "Année",
    "toolbar.month": "Mois",
    "toolbar.period": "Période",
    "toolbar.search": "Recherche",
    "toolbar.monthHint": "Tous les mois par défaut",
    "toolbar.searchPlaceholderJournal": "Catégorie, date, valeur...",
    "toolbar.searchPlaceholderRecap": "Chercher un poste ou une catégorie du récap...",
    "toolbar.searchPlaceholderAnalysis": "Période, indicateur, valeur...",
    "toolbar.openSource": "Lier la source",
    "toolbar.sourceProtected": "Source protégée",
    "toolbar.sourceLinked": "Relier la source",
    "toolbar.saveSource": "Enregistrer la source",
    "toolbar.sourcePreserved": "Source préservée",
    "toolbar.saveDraft": "Sauvegarde locale",
    "toolbar.restoreDraft": "Restaurer",
    "toolbar.restart": "Recommencer",
    "toolbar.addRecord": "Nouvelle fiche",
    "toolbar.newTransaction": "Nouvelle transaction",
    "toolbar.editBudget": "Éditer le budget",
    "toolbar.exportExcel": "Exporter Excel",
    "toolbar.exportJournal": "Exporter Journalier",
    "toolbar.exportComplete": "Exporter classeur complet",
    "toolbar.openSourceTitleReady": "Ouvre le classeur avec autorisation d'écriture directe",
    "toolbar.saveSourceTitleReady": "Écrit les changements dans le fichier d'origine sans passer par une copie exportée",
    "toolbar.saveDraftTitleReady": "Mémorise vos données actuelles dans le navigateur pour reprendre plus tard",
    "toolbar.saveDraftTitleMissing": "Chargez ou restaurez un budget avant d'enregistrer un brouillon local",
    "toolbar.restoreDraftTitleReady": "Recharge le dernier brouillon local mémorisé dans l'application",
    "toolbar.restoreDraftTitleMissing": "Aucun brouillon local disponible pour le moment",
    "toolbar.restartTitle": "Revient à l'écran de départ sans supprimer le brouillon local",
    "share.kicker": "Supabase Beta",
    "share.title": "Budget partagé en ligne",
    "share.emailLabel": "Email pour lien magique",
    "share.codeLabel": "Code de l'espace partagé",
    "share.collaborationKicker": "Collaboration live",
    "share.collaborationTitle": "Présence en ligne",
    "share.alertsKicker": "Alertes par e-mail",
    "share.alertsTitle": "Surveillance du budget",
    "share.alertsEnable": "Activer les alertes",
    "share.alertsRecipient": "Email destinataire",
    "share.alertsCooldown": "Délai anti-spam (heures)",
    "share.settingsKicker": "Paramètres",
    "share.settingsTitle": "Préférences de l'application",
    "share.historyKicker": "Historique local",
    "share.historyTitle": "Dernières actions",
    "share.install": "Installer l'app",
    "share.installed": "App installée",
    "share.magicLink": "Lien magique",
    "share.signOut": "Déconnexion",
    "share.createSpace": "Créer un espace",
    "share.join": "Rejoindre",
    "share.publishLocal": "Publier local",
    "share.restoreAndPublish": "Restaurer et publier",
    "share.reloadCloud": "Recharger cloud",
    "share.connecting": "Connexion...",
    "share.pleaseWait": "Patientez...",
    "settings.autoRestore": "Restaurer automatiquement le brouillon",
    "settings.showAlerts": "Afficher les alertes Budget-fra",
    "settings.showSuggestions": "Afficher les suggestions intelligentes",
    "settings.language": "Langue",
    "settings.theme": "Thème",
    "settings.statusOn": "Le brouillon local se recharge automatiquement au prochain lancement si vous ne recommencez pas.",
    "settings.statusOff": "Le prochain lancement reviendra à l'écran de bienvenue tant que vous ne restaurez pas le brouillon.",
    "settings.hintOn": "Les suggestions intelligentes sont visibles dans l'accueil et l'analyse, en plus des alertes.",
    "settings.hintOff": "Les suggestions restent discrètes pour garder l'application légère. Vous pouvez les réactiver ici.",
    "history.undo": "Annuler la dernière action",
    "history.statusReady": "La dernière action peut encore être annulée sur cet appareil.",
    "history.statusEmpty": "Aucune action récente à annuler pour le moment.",
    "history.empty": "Aucune action mémorisée pour le moment.",
    "cloud.codePlaceholderSignedIn": "code à partager",
    "cloud.codePlaceholderSignedOut": "entrez le code puis connectez-vous",
    "cloud.codeTitleSignedIn": "Collez le code de partage reçu, puis touchez Rejoindre",
    "cloud.codeTitleSignedOut": "Vous pouvez déjà saisir le code. Connectez-vous ensuite avec Lien magique pour rejoindre l'espace",
    "cloud.joinTitleSignedOut": "Connectez-vous d'abord avec Lien magique, puis rejoignez l'espace avec ce code",
    "cloud.joinTitleNoCode": "Entrez un code de partage pour rejoindre un espace",
    "cloud.joinTitleReady": "Rejoindre cet espace partagé",
    "cloud.identityConnected": "Compte : {email}",
    "cloud.identityDisconnected": "Compte : non connecté",
    "cloud.spaceSelected": "Espace : {name}",
    "cloud.spaceNone": "Espace : aucun",
    "cloud.joinCodeSelected": "Code de partage : {code}",
    "cloud.joinCodeNone": "Code de partage : à créer ou rejoindre",
    "cloud.lastPull": "Dernier chargement : {value}",
    "cloud.lastPullNone": "Dernier chargement : aucun",
    "cloud.lastPush": "Dernière publication : {value}",
    "cloud.lastPushNone": "Dernière publication : aucune",
    "cloud.collabNotReady": "Supabase doit être configuré pour activer la présence en ligne.",
    "cloud.collabNotSignedIn": "Connectez-vous à un espace partagé pour voir qui est en ligne et qui modifie l'application.",
    "cloud.collabNoSpace": "Présence prête. Créez ou rejoignez un espace partagé pour collaborer en direct.",
    "cloud.collabAlone": "Vous êtes seul en ligne pour le moment.",
    "cloud.collabOthers": "{count} autre{plural} utilisateur{plural} en ligne maintenant.",
    "cloud.presenceYou": "Vous",
    "cloud.presenceInTab": "dans {tab}",
    "cloud.presenceEmptyTitle": "Aucune présence active",
    "cloud.presenceEmptyBody": "Connectez-vous à un espace partagé pour lancer la collaboration en direct.",
    "cloud.livePrefix": "Activité en direct : {message}",
    "cloud.liveEmpty": "Aucune activité en direct pour le moment.",
    "cloud.recurringSchemaOutdated": "Les récurrentes partagées nécessitent le schéma Supabase à jour. Relancez le script supabase/schema.sql.",
    "alerts.statusNotConfigured": "La fonction d'alerte email n'est pas configurée côté Supabase.",
    "alerts.statusNotReady": "Supabase doit être configuré pour activer les alertes email.",
    "alerts.statusDisabled": "Alertes email désactivées.",
    "alerts.statusSignIn": "Alertes email prêtes. Connectez-vous puis publiez un budget pour surveiller les dépassements.",
    "alerts.statusNoSpace": "Alertes email actives. Créez ou rejoignez un espace partagé pour lancer la surveillance.",
    "alerts.statusNoRecipient": "Alertes email actives. Ajoutez un email destinataire ou laissez la connexion fournir votre adresse.",
    "alerts.statusRecipient": "Alertes email actives vers {email}. Délai actuel : {hours} h.",
    "alerts.hintRecipient": "Les alertes se basent sur les lignes rouges du comparatif courant.",
    "alerts.hintNoRecipient": "Laissez l'email vide pour utiliser l'adresse du compte connecté. Les alertes se basent sur les lignes rouges du comparatif courant.",
    "draft.none": "Aucun brouillon local mémorisé.",
    "draft.cloud": "Mode cloud partagé actif.{suffix}",
    "draft.local": "Mode autonome local actif.{suffix}",
    "draft.backup": "Brouillon local prêt en secours.{suffix}",
    "draft.available": "Brouillon local disponible.{suffix} Cliquez sur Restaurer pour reprendre vos données.",
    "stats.transactions": "Transactions",
    "stats.fields": "Champs",
    "stats.periods": "Périodes",
    "stats.charts": "Graphiques",
    "stats.monthsAvailable": "Mois disponibles",
    "stats.noSheet": "Aucune",
    "stats.readyImport": "Prêt pour l'import",
    "stats.loadOrLinkSource": "Chargez ou liez la source",
    "stats.loadFile": "Chargez un fichier",
    "stats.recapView": "Vue récap - {period}",
    "stats.analysisView": "Vue analyse - {period}",
    "stats.journalView": "Vue Journalier",
    "stats.journalViewPeriod": "Vue Journalier - {period}",
    "capability.nativeExcelShare": "Partage natif Excel",
    "capability.exportWorkbook": "Export vers le classeur",
    "capability.supabaseActive": "Supabase partagé actif",
    "capability.sourceLinkedAuto": "Source liée - sauvegarde automatique active",
    "capability.localStandaloneExport": "Mode autonome - export copie locale",
    "capability.sourcePreservedCopy": "Source préservée - export copie uniquement",
    "capability.exportOrLink": "Export ou liaison source",
    "workbook.sharedCloud": "{name} - cloud partagé",
    "workbook.localData": "Données locales",
    "workbook.noFile": "Aucun fichier",
    "workbook.localDataNamed": "{name} - données locales",
    "workbook.protectedSource": "{name} - source protégée",
    "workbook.linkedSource": "{name} - source liée",
    "cards.kickerBudget": "Budget",
    "cards.titlePlanVsActual": "Plan vs réel",
    "cards.captionPlanVsActual": "Réglez vos montants cibles à gauche, puis vérifiez à droite comment ils se comparent au réel sur la période choisie.",
    "cards.kickerRecap": "Récapitulatif",
    "cards.titleRecap": "Vue récap du budget",
    "cards.captionRecap": "Synthèse reconstruite depuis TCD et vos transactions Journalier, avec un filtre par année et par mois pour comparer les périodes disponibles.",
    "cards.kickerAnalysis": "Comparaisons",
    "cards.titleAnalysis": "Revenu, dépenses et épargne en perspective",
    "cards.captionAnalysis": "Cette vue ajoute des comparaisons et des graphiques pertinents à partir de Journalier pour suivre l'équilibre entre revenu, dépenses, épargne et cash.",
    "cards.kickerRecurring": "Récurrentes",
    "cards.titleRecurring": "Modèles et validations récurrentes",
    "cards.captionRecurring": "Regroupez ici vos modèles rapides, règles automatiques et écritures dues à valider avant ajout au journal.",
    "cards.kickerJournal": "Journalier",
    "cards.titleJournal": "Les écritures deviennent des fiches",
    "cards.captionJournal": "Cette vue utilise Journalier!D:F, garde la liste des catégories de Journalier!B et reprend le même filtre année/mois que le récapitulatif.",
    "filters.allYears": "Toutes les années",
    "filters.allMonths": "Tous les mois",
    "filters.allPeriod": "Toute la période",
    "filter.monthsTrigger.all": "Tous les mois",
    "form.kickerPlannedBudget": "Budget planifié",
    "form.kickerForm": "Formulaire",
    "form.save": "Enregistrer",
    "form.saveRecurringTemplate": "Enregistrer comme modèle",
    "form.reset": "Réinitialiser",
    "form.newRecord": "Nouvelle fiche",
    "form.startFirst": "Démarrez d'abord votre budget local ou importez votre fichier Excel.",
    "form.readOnlyRecap": "Vue récap",
    "form.readOnlyAnalysis": "Vue comparaisons",
    "form.readOnlySubtitle": "Lecture seule dans l'application.",
    "form.editTransaction": "Modifier la transaction",
    "form.newTransaction": "Nouvelle transaction",
    "form.saveBudget": "Enregistrer le budget",
    "form.reloadValues": "Recharger les valeurs",
    "form.monthlyBudget": "Budget mensuel",
    "form.monthlyBudgetEmpty": "Commencez avec un modèle local ou importez votre budget pour fixer les montants cibles.",
    "form.startBudgetTitle": "Commencez votre budget",
    "form.startBudgetDescription": "Le formulaire Date / Categories / Value sera activé dès que vous créerez un modèle local, importerez Excel ou rejoindrez un espace partagé.",
    "form.startBudgetNote": "Le modèle local suffit pour commencer tout de suite, même sans fichier Excel.",
    "form.readOnlyRecapBody": "Cette vue n'édite pas directement la feuille récapitulative d'Excel. Elle reconstruit une synthèse lisible à partir de {recap}, {tcd} et de vos transactions {journal}. Pour modifier les données, revenez sur la vue Journalier.",
    "form.readOnlyAnalysisBody": "Cette vue ajoute des comparaisons et des graphiques à partir des écritures de {journal}. Elle est destinée à l'analyse. Pour modifier les données, revenez sur la vue Journalier.",
    "form.subtitleWorkbook": "Ajoutez ou modifiez vos transactions. Les vues de récapitulatif et de comparaison se recalculent aussitôt.",
    "form.subtitleCloud": "Mode cloud partagé. Ajoutez ou modifiez vos transactions, Supabase les republie pour les autres personnes.",
    "form.subtitleLocal": "Mode autonome local. Ajoutez ou modifiez vos transactions, les graphiques se mettent à jour aussitôt et l'export reste disponible.",
    "form.editingWorkbook": "Saisie directe de Journalier!D:F avec catégories prédéfinies depuis la colonne B.",
    "form.editingCloud": "Mode cloud partagé : chaque enregistrement met à jour vos vues locales et synchronise Supabase.",
    "form.editingLocal": "Mode autonome local : vos catégories, récapitulatifs et graphiques se mettent à jour à chaque enregistrement.",
    "form.manageCategories": "Gérer les catégories",
    "categories.modalTitle": "Gérer les catégories",
    "categories.modalDescription": "Créez ici une sous-catégorie dans une grande catégorie existante, ou ajoutez une nouvelle grande catégorie avec ses sous-catégories.",
    "categories.addCategoryTitle": "Ajouter une sous-catégorie",
    "categories.parentLabel": "Grande catégorie",
    "categories.newCategoryLabel": "Nouvelle catégorie",
    "categories.newCategoryPlaceholder": "Ex. Péage",
    "categories.addCategoryAction": "Ajouter la catégorie",
    "categories.createGroupTitle": "Créer une grande catégorie",
    "categories.groupNameLabel": "Nom de la grande catégorie",
    "categories.groupNamePlaceholder": "Ex. Voyages",
    "categories.groupTypeLabel": "Type budgétaire",
    "categories.groupCategoriesLabel": "Sous-catégories",
    "categories.groupCategoriesHint": "Une ligne par sous-catégorie.",
    "categories.groupCategoriesPlaceholder": "Ex. Hôtel\nRestaurant\nExcursions",
    "categories.groupCreateAction": "Créer la grande catégorie",
    "categories.typeExpenses": "Dépenses",
    "categories.typeIncome": "Revenu",
    "categories.typeSavings": "Épargne",
    "categories.close": "Fermer",
    "categories.missingParent": "Choisissez d'abord une grande catégorie.",
    "categories.missingCategory": "Saisissez le nom de la nouvelle catégorie.",
    "categories.categoryExists": "Cette catégorie existe déjà dans le budget.",
    "categories.groupExists": "Cette grande catégorie existe déjà.",
    "categories.missingGroupName": "Saisissez le nom de la grande catégorie.",
    "categories.missingGroupCategories": "Ajoutez au moins une sous-catégorie.",
    "categories.groupCategoryExists": "Une ou plusieurs sous-catégories existent déjà : {labels}.",
    "categories.createdCategory": "Catégorie créée : {category} dans {parent}.",
    "categories.createdGroup": "Grande catégorie créée : {group} ({count} {itemWord}).",
    "categories.customExpenseDescription": "Dépenses personnalisées",
    "categories.customIncomeDescription": "Revenus personnalisés",
    "categories.customSavingsDescription": "Épargne personnalisée",
    "recurring.confirmUseSameMonth": "Le modèle récurrent « {label} » a déjà été utilisé pour {month}. Voulez-vous l'utiliser quand même ?",
    "recurring.useCancelled": "Utilisation du modèle récurrent annulée.",
    "recurring.confirmCreateAndOpen": "Voulez-vous créer ce modèle récurrent et ouvrir l'onglet Récurrentes ?",
    "recurring.createCancelled": "Création du modèle récurrent annulée.",
    "recurring.createButton": "Créer une récurrente",
    "recurring.createUnavailable": "Chargez ou restaurez un budget avant de créer une récurrente.",
    "recurring.createFlowHint": "Remplissez la transaction dans Formulaire, puis cliquez sur Enregistrer comme modèle.",
    "export.journalPreparing": "Préparation d'une copie Journalier",
    "export.journalShared": "Copie Journalier exportée et partagée depuis l'app mobile",
    "export.journalSuccess": "Copie Journalier exportée sans toucher au classeur source",
    "export.completePreparing": "Préparation du classeur complet de l'application",
    "export.completeShared": "Classeur complet exporté et partagé depuis l'app mobile",
    "export.completeSuccess": "Classeur complet exporté avec toutes les informations de l'application",
    "export.choicePrompt": "Exporter Excel\n1 - Exporter Journalier\n2 - Exporter classeur complet\nLaissez vide pour annuler.",
    "export.choiceInvalid": "Choix d'export invalide.",
    "language.fr": "Français",
    "language.en": "English",
    "theme.auto": "Auto",
    "theme.light": "Clair",
    "theme.dark": "Sombre",
  },
  en: {
    "hero.badge": "Budget",
    "hero.kicker": "Simplified view",
    "hero.periodActive": "Active period",
    "hero.fileActive": "Active file",
    "hero.mode": "Mode",
    "nav.kicker": "Simple navigation",
    "tab.dashboard.label": "Home",
    "tab.dashboard.meta": "Budget view",
    "tab.plan.label": "Budget",
    "tab.plan.meta": "Monthly plan",
    "tab.transactions.label": "Transactions",
    "tab.transactions.meta": "Entries list",
    "tab.form.label": "Form",
    "tab.form.meta": "New transaction",
    "tab.recurring.label": "Recurring",
    "tab.recurring.meta": "Templates and rules",
    "tab.analysis.label": "Analysis",
    "tab.analysis.meta": "Comparisons",
    "tab.share.label": "Settings",
    "tab.share.meta": "Cloud and options",
    "tab.dashboard.title": "Dashboard",
    "tab.dashboard.description": "A quick view of your budget to see balances, trends, and the active period.",
    "tab.plan.title": "Planned budget",
    "tab.plan.description": "Set your target amounts here to compare plan and actual without touching transactions.",
    "tab.transactions.title": "Transactions",
    "tab.transactions.description": "A clear list of your entries to filter, review, and quickly choose what you want to correct.",
    "tab.transactions.viewLabel": "View mode",
    "tab.transactions.viewCards": "Cards",
    "tab.transactions.viewCompact": "Compact",
    "tab.form.title": "Form",
    "tab.form.description": "A dedicated space to create and edit a transaction without distractions.",
    "tab.recurring.title": "Recurring transactions",
    "tab.recurring.description": "Manage your quick templates, automatic rules, and pending validations here without cluttering the form.",
    "tab.analysis.title": "Analysis",
    "tab.analysis.description": "Clear comparisons between income, expenses, savings, and cash to understand your rhythm.",
    "tab.share.title": "Settings",
    "tab.share.description": "Language, cloud, install, backups, and app preferences live here.",
    "startup.title": "Welcome to BUDEGETAPP",
    "startup.description": "Start with a local template, import your Excel file, or join a shared budget.",
    "startup.note": "You can enable sharing later and export to Excel at any time.",
    "startup.startLocal": "Start without a file",
    "startup.importExcel": "Import an Excel file",
    "startup.joinShared": "Join a shared space",
    "startup.restoreDraft": "Restore my local draft",
    "startup.localReadyTitle": "Your local budget is ready.",
    "startup.localReadyBody": "Now add your first transaction from the form or the New transaction button.",
    "welcome.kicker": "Welcome",
    "welcome.title": "Start your budget your way",
    "welcome.description": "Begin with a local template, import your Excel file, or jump straight into a shared space.",
    "welcome.pointOffline": "Offline ready",
    "welcome.pointShareLater": "Sharing can be enabled later",
    "welcome.pointExportAnytime": "Excel export anytime",
    "toolbar.filePickerLabel": "Load Budget_2025 Final",
    "toolbar.filePickerHint": ".xlsx recommended",
    "toolbar.year": "Year",
    "toolbar.month": "Month",
    "toolbar.period": "Period",
    "toolbar.search": "Search",
    "toolbar.monthHint": "All months by default",
    "toolbar.searchPlaceholderJournal": "Category, date, value...",
    "toolbar.searchPlaceholderRecap": "Search a recap item or category...",
    "toolbar.searchPlaceholderAnalysis": "Period, metric, value...",
    "toolbar.openSource": "Link source",
    "toolbar.sourceProtected": "Protected source",
    "toolbar.sourceLinked": "Relink source",
    "toolbar.saveSource": "Save source",
    "toolbar.sourcePreserved": "Source preserved",
    "toolbar.saveDraft": "Local backup",
    "toolbar.restoreDraft": "Restore",
    "toolbar.restart": "Restart",
    "toolbar.addRecord": "New record",
    "toolbar.newTransaction": "New transaction",
    "toolbar.editBudget": "Edit budget",
    "toolbar.exportExcel": "Export Excel",
    "toolbar.exportJournal": "Export Journal",
    "toolbar.exportComplete": "Export full workbook",
    "toolbar.openSourceTitleReady": "Open the workbook with direct write permission",
    "toolbar.saveSourceTitleReady": "Write changes into the original file without exporting a copy first",
    "toolbar.saveDraftTitleReady": "Save your current data in the browser so you can continue later",
    "toolbar.saveDraftTitleMissing": "Load or restore a budget before saving a local draft",
    "toolbar.restoreDraftTitleReady": "Reload the latest local draft saved in the app",
    "toolbar.restoreDraftTitleMissing": "No local draft available right now",
    "toolbar.restartTitle": "Return to the welcome screen without deleting the local draft",
    "share.kicker": "Supabase Beta",
    "share.title": "Shared budget online",
    "share.emailLabel": "Email for magic link",
    "share.codeLabel": "Shared space code",
    "share.collaborationKicker": "Live collaboration",
    "share.collaborationTitle": "Online presence",
    "share.alertsKicker": "Email alerts",
    "share.alertsTitle": "Budget monitoring",
    "share.alertsEnable": "Enable alerts",
    "share.alertsRecipient": "Recipient email",
    "share.alertsCooldown": "Anti-spam delay (hours)",
    "share.settingsKicker": "Settings",
    "share.settingsTitle": "App preferences",
    "share.historyKicker": "Local history",
    "share.historyTitle": "Recent actions",
    "share.install": "Install app",
    "share.installed": "App installed",
    "share.magicLink": "Magic link",
    "share.signOut": "Sign out",
    "share.createSpace": "Create a space",
    "share.join": "Join",
    "share.publishLocal": "Publish local",
    "share.restoreAndPublish": "Restore and publish",
    "share.reloadCloud": "Reload cloud",
    "share.connecting": "Connecting...",
    "share.pleaseWait": "Please wait...",
    "settings.autoRestore": "Automatically restore the draft",
    "settings.showAlerts": "Show Budget-fra alerts",
    "settings.showSuggestions": "Show smart suggestions",
    "settings.language": "Language",
    "settings.theme": "Theme",
    "settings.statusOn": "The local draft will reload automatically on next launch if you do not restart.",
    "settings.statusOff": "The next launch will return to the welcome screen until you restore the draft.",
    "settings.hintOn": "Smart suggestions are visible in Home and Analysis in addition to alerts.",
    "settings.hintOff": "Suggestions stay discreet to keep the app light. You can re-enable them here.",
    "history.undo": "Undo last action",
    "history.statusReady": "The last action can still be undone on this device.",
    "history.statusEmpty": "No recent action to undo right now.",
    "history.empty": "No action recorded yet.",
    "cloud.codePlaceholderSignedIn": "share code",
    "cloud.codePlaceholderSignedOut": "enter the code then sign in",
    "cloud.codeTitleSignedIn": "Paste the received share code, then tap Join",
    "cloud.codeTitleSignedOut": "You can already enter the code. Then sign in with Magic link to join the space",
    "cloud.joinTitleSignedOut": "Sign in first with Magic link, then join the space with this code",
    "cloud.joinTitleNoCode": "Enter a share code to join a space",
    "cloud.joinTitleReady": "Join this shared space",
    "cloud.identityConnected": "Account: {email}",
    "cloud.identityDisconnected": "Account: not connected",
    "cloud.spaceSelected": "Space: {name}",
    "cloud.spaceNone": "Space: none",
    "cloud.joinCodeSelected": "Share code: {code}",
    "cloud.joinCodeNone": "Share code: create or join one",
    "cloud.lastPull": "Last load: {value}",
    "cloud.lastPullNone": "Last load: none",
    "cloud.lastPush": "Last publish: {value}",
    "cloud.lastPushNone": "Last publish: none",
    "cloud.collabNotReady": "Supabase must be configured to enable online presence.",
    "cloud.collabNotSignedIn": "Sign in to a shared space to see who is online and who is editing the app.",
    "cloud.collabNoSpace": "Presence is ready. Create or join a shared space to collaborate live.",
    "cloud.collabAlone": "You are the only one online right now.",
    "cloud.collabOthers": "{count} other user{plural} online right now.",
    "cloud.presenceYou": "You",
    "cloud.presenceInTab": "in {tab}",
    "cloud.presenceEmptyTitle": "No active presence",
    "cloud.presenceEmptyBody": "Sign in to a shared space to start live collaboration.",
    "cloud.livePrefix": "Live activity: {message}",
    "cloud.liveEmpty": "No live activity at the moment.",
    "cloud.recurringSchemaOutdated": "Shared recurring templates require the latest Supabase schema. Run the updated supabase/schema.sql script.",
    "alerts.statusNotConfigured": "The email alert function is not configured on the Supabase side.",
    "alerts.statusNotReady": "Supabase must be configured to enable email alerts.",
    "alerts.statusDisabled": "Email alerts are disabled.",
    "alerts.statusSignIn": "Email alerts are ready. Sign in and publish a budget to watch for overruns.",
    "alerts.statusNoSpace": "Email alerts are active. Create or join a shared space to start monitoring.",
    "alerts.statusNoRecipient": "Email alerts are active. Add a recipient email or let the signed-in account provide one.",
    "alerts.statusRecipient": "Email alerts are active for {email}. Current delay: {hours} h.",
    "alerts.hintRecipient": "Alerts rely on the red rows in the current comparison.",
    "alerts.hintNoRecipient": "Leave the email blank to use the signed-in account address. Alerts rely on the red rows in the current comparison.",
    "draft.none": "No local draft saved.",
    "draft.cloud": "Shared cloud mode active.{suffix}",
    "draft.local": "Local standalone mode active.{suffix}",
    "draft.backup": "Local draft ready as backup.{suffix}",
    "draft.available": "Local draft available.{suffix} Click Restore to resume your data.",
    "stats.transactions": "Transactions",
    "stats.fields": "Fields",
    "stats.periods": "Periods",
    "stats.charts": "Charts",
    "stats.monthsAvailable": "Available months",
    "stats.noSheet": "None",
    "stats.readyImport": "Ready to import",
    "stats.loadOrLinkSource": "Load or link the source",
    "stats.loadFile": "Load a file",
    "stats.recapView": "Recap view - {period}",
    "stats.analysisView": "Analysis view - {period}",
    "stats.journalView": "Journal view",
    "stats.journalViewPeriod": "Journal view - {period}",
    "capability.nativeExcelShare": "Native Excel sharing",
    "capability.exportWorkbook": "Export to workbook",
    "capability.supabaseActive": "Supabase sharing active",
    "capability.sourceLinkedAuto": "Linked source - automatic saving active",
    "capability.localStandaloneExport": "Standalone mode - local copy export",
    "capability.sourcePreservedCopy": "Source preserved - copy export only",
    "capability.exportOrLink": "Export or link source",
    "workbook.sharedCloud": "{name} - shared cloud",
    "workbook.localData": "Local data",
    "workbook.noFile": "No file",
    "workbook.localDataNamed": "{name} - local data",
    "workbook.protectedSource": "{name} - protected source",
    "workbook.linkedSource": "{name} - linked source",
    "cards.kickerBudget": "Budget",
    "cards.titlePlanVsActual": "Plan vs actual",
    "cards.captionPlanVsActual": "Set your target amounts on the left, then check on the right how they compare with the actual figures for the selected period.",
    "cards.kickerRecap": "Recap",
    "cards.titleRecap": "Budget recap view",
    "cards.captionRecap": "Summary rebuilt from TCD and your Journalier transactions, with year and month filters to compare available periods.",
    "cards.kickerAnalysis": "Comparisons",
    "cards.titleAnalysis": "Income, expenses, and savings in perspective",
    "cards.captionAnalysis": "This view adds useful comparisons and charts from Journalier to track the balance between income, expenses, savings, and cash.",
    "cards.kickerRecurring": "Recurring",
    "cards.titleRecurring": "Recurring templates and reviews",
    "cards.captionRecurring": "Keep your quick templates, automatic rules, and due entries to review in one dedicated place.",
    "cards.kickerJournal": "Journal",
    "cards.titleJournal": "Entries become cards",
    "cards.captionJournal": "This view uses Journalier!D:F, keeps the category list from Journalier!B, and uses the same year/month filter as the recap.",
    "filters.allYears": "All years",
    "filters.allMonths": "All months",
    "filters.allPeriod": "Whole period",
    "filter.monthsTrigger.all": "All months",
    "form.kickerPlannedBudget": "Planned budget",
    "form.kickerForm": "Form",
    "form.save": "Save",
    "form.saveRecurringTemplate": "Save as template",
    "form.reset": "Reset",
    "form.newRecord": "New record",
    "form.startFirst": "Start your local budget first or import your Excel file.",
    "form.readOnlyRecap": "Recap view",
    "form.readOnlyAnalysis": "Comparison view",
    "form.readOnlySubtitle": "Read-only in the app.",
    "form.editTransaction": "Edit transaction",
    "form.newTransaction": "New transaction",
    "form.saveBudget": "Save budget",
    "form.reloadValues": "Reload values",
    "form.monthlyBudget": "Monthly budget",
    "form.monthlyBudgetEmpty": "Start with a local template or import your budget to set target amounts.",
    "form.startBudgetTitle": "Start your budget",
    "form.startBudgetDescription": "The Date / Categories / Value form will become active as soon as you create a local template, import Excel, or join a shared space.",
    "form.startBudgetNote": "The local template is enough to get started right away, even without an Excel file.",
    "form.readOnlyRecapBody": "This view does not edit the Excel recap sheet directly. It rebuilds a readable summary from {recap}, {tcd}, and your {journal} transactions. To modify the data, go back to the Journal view.",
    "form.readOnlyAnalysisBody": "This view adds comparisons and charts from the entries in {journal}. It is meant for analysis. To modify the data, go back to the Journal view.",
    "form.subtitleWorkbook": "Add or edit your transactions. Recap and comparison views update right away.",
    "form.subtitleCloud": "Shared cloud mode. Add or edit your transactions and Supabase republishes them for other people.",
    "form.subtitleLocal": "Local standalone mode. Add or edit your transactions, charts refresh instantly, and export remains available.",
    "form.editingWorkbook": "Direct entry into Journalier!D:F with predefined categories from column B.",
    "form.editingCloud": "Shared cloud mode: each save updates your local views and syncs with Supabase.",
    "form.editingLocal": "Local standalone mode: your categories, recaps, and charts update every time you save.",
    "form.manageCategories": "Manage categories",
    "categories.modalTitle": "Manage categories",
    "categories.modalDescription": "Create a subcategory inside an existing main category, or add a new main category with its subcategories.",
    "categories.addCategoryTitle": "Add a subcategory",
    "categories.parentLabel": "Main category",
    "categories.newCategoryLabel": "New category",
    "categories.newCategoryPlaceholder": "Ex. Toll",
    "categories.addCategoryAction": "Add category",
    "categories.createGroupTitle": "Create a main category",
    "categories.groupNameLabel": "Main category name",
    "categories.groupNamePlaceholder": "Ex. Travel",
    "categories.groupTypeLabel": "Budget type",
    "categories.groupCategoriesLabel": "Subcategories",
    "categories.groupCategoriesHint": "One subcategory per line.",
    "categories.groupCategoriesPlaceholder": "Ex. Hotel\nDining\nExcursions",
    "categories.groupCreateAction": "Create main category",
    "categories.typeExpenses": "Expenses",
    "categories.typeIncome": "Income",
    "categories.typeSavings": "Savings",
    "categories.close": "Close",
    "categories.missingParent": "Choose a main category first.",
    "categories.missingCategory": "Enter the name of the new category.",
    "categories.categoryExists": "This category already exists in the budget.",
    "categories.groupExists": "This main category already exists.",
    "categories.missingGroupName": "Enter the name of the main category.",
    "categories.missingGroupCategories": "Add at least one subcategory.",
    "categories.groupCategoryExists": "One or more subcategories already exist: {labels}.",
    "categories.createdCategory": "Category created: {category} in {parent}.",
    "categories.createdGroup": "Main category created: {group} ({count} {itemWord}).",
    "categories.customExpenseDescription": "Custom expenses",
    "categories.customIncomeDescription": "Custom income",
    "categories.customSavingsDescription": "Custom savings",
    "recurring.confirmUseSameMonth": "The recurring template \"{label}\" was already used for {month}. Do you still want to use it?",
    "recurring.useCancelled": "Recurring template use cancelled.",
    "recurring.confirmCreateAndOpen": "Do you want to create this recurring template and open the Recurring tab?",
    "recurring.createCancelled": "Recurring template creation cancelled.",
    "recurring.createButton": "Create recurring",
    "recurring.createUnavailable": "Load or restore a budget before creating a recurring template.",
    "recurring.createFlowHint": "Fill out the transaction in Form, then click Save as template.",
    "export.journalPreparing": "Preparing the Journal export copy",
    "export.journalShared": "Journal copy exported and shared from the mobile app",
    "export.journalSuccess": "Journal copy exported without touching the source workbook",
    "export.completePreparing": "Preparing the complete app workbook",
    "export.completeShared": "Complete workbook exported and shared from the mobile app",
    "export.completeSuccess": "Complete workbook exported with all app information",
    "export.choicePrompt": "Excel export\n1 - Export Journal\n2 - Export full workbook\nLeave empty to cancel.",
    "export.choiceInvalid": "Invalid export choice.",
    "language.fr": "Français",
    "language.en": "English",
    "theme.auto": "Auto",
    "theme.light": "Light",
    "theme.dark": "Dark",
  },
};
const FALLBACK_PLAN_TEMPLATE = [
  { label: "Income 1", plan: "7873,58", period: "monthly", group: "income" },
  { label: "Income 2", plan: "0", period: "monthly", group: "income" },
  { label: "Savings", plan: "500", period: "monthly", group: "savings" },
  { label: "Savings for seasonal exp.", plan: "0", period: "monthly", group: "savings" },
  { label: "Income", plan: "7873,58", period: "monthly", group: "derived" },
  { label: "Total Savings", plan: "500", period: "monthly", group: "derived" },
  { label: "Expenses", plan: "0", period: "monthly", group: "derived" },
  { label: "Cash short/extra", plan: "7373,58", period: "monthly", group: "derived" },
];
const PLAN_PERIOD_OPTIONS = [
  { value: "weekly", label: "Par semaine", monthlyFactor: 52 / 12 },
  { value: "biweekly", label: "Aux 2 semaines", monthlyFactor: 26 / 12 },
  { value: "monthly", label: "Par mois", monthlyFactor: 1 },
];
const DEFAULT_PLAN_PERIOD = "monthly";
const PLAN_PERIOD_FACTORS = Object.fromEntries(
  PLAN_PERIOD_OPTIONS.map((option) => [option.value, option.monthlyFactor])
);
const BUDGET_RULES_API =
  typeof window !== "undefined"
    ? window.BUDGET_CATEGORY_RULES || null
    : typeof globalThis !== "undefined"
      ? globalThis.BUDGET_CATEGORY_RULES || null
      : null;
const FALLBACK_BUDGET_FRA_GROUP_ORDER = [
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
  "recréation",
  "personalcare",
  "clothing",
  "medical",
  "pets",
  "fees",
  "gifts",
  "custom",
];
const BUDGET_FRA_GROUP_ORDER = BUDGET_RULES_API?.GROUP_ORDER || FALLBACK_BUDGET_FRA_GROUP_ORDER;
const FALLBACK_BUDGET_FRA_GROUP_META = {
  income: {
    label: "Revenu",
    description: "Entrées d'argent du foyer",
    tone: "positive",
  },
  savings: {
    label: "Épargnes",
    description: "Objectifs, réserve et accumulation",
    tone: "neutral",
  },
  debt: {
    label: "Remboursement de dettes",
    description: "Carte de crédit, prêt et obligations",
    tone: "negative",
  },
  housing: {
    label: "Logement",
    description: "Habitation, loyer, hypothèque et charges",
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
    description: "Auto, carburant, stationnement et déplacements",
    tone: "negative",
  },
  childcare: {
    label: "Soins aux enfants",
    description: "Dépenses liées aux enfants",
    tone: "neutral",
  },
  education: {
    label: "Études",
    description: "Frais scolaires et apprentissage",
    tone: "neutral",
  },
  recréation: {
    label: "Loisirs",
    description: "Sorties, voyage, sport et divertissement",
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
    description: "Santé, assurance et soins spécialisés",
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
const BUDGET_FRA_GROUP_META = BUDGET_RULES_API?.GROUP_META || FALLBACK_BUDGET_FRA_GROUP_META;
const REFERENCE_BUDGET_TEMPLATE_GROUPS = [
  {
    parent: "income",
    planGroup: "income",
    items: [
      { label: "Mon revenu net", canonical: "income 1", aliases: ["Income 1", "Income"] },
      { label: "Revenu du/de la partenaire", canonical: "income 2", aliases: ["Income 2"] },
      { label: "Assurance-emploi" },
      { label: "Revenu de location" },
      { label: "Pension publique" },
      { label: "Pension de l'employeur" },
      { label: "Revenu personnel pour la retraite" },
      { label: "Epargne-etudes et prets" },
      { label: "Pension alimentaire pour enfants" },
      { label: "Allocation pour enfants" },
      { label: "Prestations d'invalidite" },
      { label: "Aide sociale" },
    ],
  },
  {
    parent: "savings",
    planGroup: "savings",
    items: [
      { label: "Savings", canonical: "savings", aliases: ["Savings"] },
      { label: "Savings for seasonal exp.", canonical: "savings for seasonal exp.", aliases: ["Savings for seasonal exp."] },
      { label: "Retraite" },
      { label: "Education (épargne)" },
      { label: "Achat d'une maison" },
      { label: "Renovations de maison" },
      { label: "Achat d'une auto" },
      { label: "Impots" },
    ],
  },
  {
    parent: "debt",
    planGroup: "expenses",
    items: [
      { label: "Carte de credit", canonical: "credit card", aliases: ["Credit card"] },
      { label: "Marge de credit" },
      { label: "Pret personnel" },
      { label: "Pret etudiant", canonical: "student loans", aliases: ["Student loans"] },
    ],
  },
  {
    parent: "housing",
    planGroup: "expenses",
    items: [
      { label: "Loyer", canonical: "rent", aliases: ["Rent"] },
      { label: "Paiement hypothecaire", canonical: "mortgage", aliases: ["Mortgage"] },
      { label: "Marge de credit hypothecaire" },
      { label: "Impots fonciers" },
      { label: "Frais de copropriete" },
      { label: "Assurance pour locataire" },
      { label: "Assurance maison", canonical: "home insurance", aliases: ["Home insurance"] },
      { label: "Meubles et appareils menagers" },
      { label: "Equipement et services pour l'exterieur" },
      { label: "Systeme de securite residentielle" },
      { label: "Electricite" },
      { label: "Eau et egouts" },
      { label: "Chauffage" },
    ],
  },
  {
    parent: "communications",
    planGroup: "expenses",
    items: [
      { label: "Telephone / Cellulaire", canonical: "cellular telephone", aliases: ["Cellular telephone"] },
      { label: "Cable ou satellite" },
      { label: "Internet", canonical: "internet", aliases: ["Internet"] },
      { label: "Forfait combine" },
      {
        label: "Services de divertissement",
        canonical: "entertainment services",
        aliases: ["Entertainement  (Netflix ; Prime ; Spotify; IPTV)"],
      },
    ],
  },
  {
    parent: "food",
    planGroup: "expenses",
    items: [
      { label: "Epicerie", canonical: "groceries", aliases: ["Groceries"] },
      { label: "Restaurant ou plats a emporter", canonical: "dining out", aliases: ["Dining out"] },
    ],
  },
  {
    parent: "insurance",
    planGroup: "expenses",
    items: [
      { label: "Vie" },
      { label: "Medicale et dentaire" },
      { label: "Invalidite ou accident" },
    ],
  },
  {
    parent: "transportation",
    planGroup: "expenses",
    items: [
      { label: "Paiement d'auto (pret / location)", canonical: "vehicle lease", aliases: ["Vehicle lease"] },
      { label: "Assurance auto", canonical: "car insurance", aliases: ["Car insurance"] },
      { label: "Essence", canonical: "gas/fuel", aliases: ["Gas/fuel"] },
      { label: "Entretien", canonical: "car maintenance", aliases: ["Car Maintenance"] },
      { label: "Permis et immatriculation d'auto" },
      { label: "Stationnement", canonical: "parking", aliases: ["Parking"] },
      { label: "Transport en commun" },
      { label: "Services de transport", canonical: "taxis", aliases: ["Taxis"] },
    ],
  },
  {
    parent: "childcare",
    planGroup: "expenses",
    items: [
      { label: "Garderie" },
      { label: "Gardiennage" },
    ],
  },
  {
    parent: "education",
    planGroup: "expenses",
    items: [
      { label: "Frais scolaires" },
      { label: "Manuels et fournitures" },
      { label: "Voyages scolaires" },
    ],
  },
  {
    parent: "recréation",
    planGroup: "expenses",
    items: [
      { label: "Vacances et voyages", canonical: "vacations/travel", aliases: ["Vacations/Travel"] },
      { label: "Abonnement a des clubs" },
      { label: "Activites et jouets pour enfants" },
      { label: "Billets pour evenements", canonical: "concerts/clubs", aliases: ["Concerts/clubs"] },
      { label: "Equipement sportif et autres activites" },
      { label: "Equipement de divertissement" },
      { label: "Alcool", canonical: "alcohol", aliases: ["Alcohol"] },
      { label: "Produits d'inhalation de fumee" },
    ],
  },
  {
    parent: "personalcare",
    planGroup: "expenses",
    items: [
      {
        label: "Coiffure",
        canonical: "salon services ( haircuts- hair styles)",
        aliases: ["Salon services ( Haircuts- Hair styles)"],
      },
      {
        label: "Cosmetiques et soins de la peau",
        canonical: "cosmetics",
        aliases: ["Cosmetics"],
      },
      { label: "Spa et soins de beaute" },
    ],
  },
  {
    parent: "clothing",
    planGroup: "expenses",
    items: [
      {
        label: "Vetements",
        canonical: "clothing, including shoes",
        aliases: ["Clothing, including shoes"],
      },
      { label: "Vetements pour enfants" },
      { label: "Accessoires" },
    ],
  },
  {
    parent: "medical",
    planGroup: "expenses",
    items: [
      { label: "Medecin / Frais medicaux" },
      { label: "Dentiste" },
      { label: "Specialistes" },
    ],
  },
  {
    parent: "pets",
    planGroup: "expenses",
    items: [
      { label: "Nourriture pour animaux" },
      { label: "Veterinaire" },
    ],
  },
  {
    parent: "fees",
    planGroup: "expenses",
    items: [
      { label: "Frais bancaires" },
      { label: "Frais de carte de credit" },
      { label: "Cotisations professionnelles", canonical: "professional dues", aliases: ["Professional dues"] },
    ],
  },
  {
    parent: "gifts",
    planGroup: "expenses",
    items: [
      {
        label: "Cadeaux",
        canonical: "gifts - hostess/housewarming",
        aliases: ["Gifts – hostess/housewarming"],
      },
      { label: "Dons" },
    ],
  },
];
const REFERENCE_BUDGET_TEMPLATE_ITEMS = REFERENCE_BUDGET_TEMPLATE_GROUPS.flatMap((group, groupIndex) =>
  group.items.map((item, itemIndex) => ({
    label: item.label,
    canonical: item.canonical || normalizeHeaderName(item.label),
    aliases: Array.isArray(item.aliases) ? item.aliases : [],
    parent: group.parent,
    planGroup: group.planGroup,
    order: groupIndex * 100 + itemIndex,
  }))
);
const REFERENCE_BUDGET_TEMPLATE_INDEX = (() => {
  const index = new Map();
  REFERENCE_BUDGET_TEMPLATE_ITEMS.forEach((item) => {
    [item.label, ...item.aliases].forEach((label) => {
      const key = normalizeHeaderName(label);
      if (key && !index.has(key)) {
        index.set(key, item);
      }
    });
  });
  return index;
})();
const BUDGET_FRA_RULES = [
  {
    key: "savings",
    title: "Épargnes",
    kind: "min",
    greenMin: 0.05,
    yellowMin: 0,
    greenLabel: "Au niveau recommandé",
    yellowLabel: "Sous la cible recommandée",
    redLabel: "Aucune épargne détectée",
  },
  {
    key: "debt",
    title: "Dettes",
    kind: "max",
    greenMax: 0.15,
    yellowMax: 0.3,
  },
  {
    key: "housing",
    title: "Logement",
    kind: "max",
    greenMax: 0.35,
    yellowMax: 0.43,
  },
  {
    key: "communications",
    title: "Communications",
    kind: "max",
    greenMax: 0.05,
    yellowMax: 0.15,
  },
  {
    key: "food",
    title: "Alimentation",
    kind: "max",
    greenMax: 0.2,
    yellowMax: 0.3,
  },
  {
    key: "insurance",
    title: "Assurances",
    kind: "max",
    greenMax: 0.03,
    yellowMax: 0.09,
  },
  {
    key: "transportation",
    title: "Transport",
    kind: "max",
    greenMax: 0.2,
    yellowMax: 0.3,
  },
];
const RECAP_RANGE_OPTIONS = [
  { value: "all", label: "Toute la période" },
  { value: "1", label: "1 mois" },
  { value: "2", label: "2 mois" },
  { value: "3", label: "3 mois" },
  { value: "6", label: "6 mois" },
  { value: "12", label: "12 mois" },
];

const DATE_COL = "D";
const CATEGORY_COL = "E";
const VALUE_COL = "F";
const CATEGORY_LIST_COL = "B";
const HEADER_ROW = 2;
const START_ROW = 3;

const state = {
  workbookName: "",
  workbook: null,
  sourceLink: null,
  sourceSafety: createEmptySourceSafety(),
  cloud: createEmptyCloudState(),
  settings: createDefaultUiSettings(),
  recurringTemplates: [],
  recurringReviewDrafts: createEmptyRecurringReviewDrafts(),
  history: createEmptyHistoryState(),
  draftSavedAt: "",
  appTab: APP_TAB_DASHBOARD,
  mode: "idle",
  activeView: JOURNAL_SHEET_NAME,
  search: "",
  editingIndex: null,
  editorMode: "create",
  planEditing: false,
  lastAction: "En attente",
  budget: createEmptyBudgetModel(),
  recap: createEmptyRecapModel(),
  recapFilters: createEmptyRecapFilters(),
};

const refs = {};
let deferredInstallPrompt = null;
let appShellReady = false;
let sourceSaveQueue = Promise.resolve();
let budgetSourcePlugin = null;
let budgetAuthPlugin = null;
let filesystemPlugin = null;
let sharePlugin = null;
let supabaseClient = null;
let supabaseAuthSubscription = null;
let supabaseRealtimeChannel = null;
let cloudRefreshTimer = null;
let cloudSyncQueue = Promise.resolve();
let recurringSupabaseSchemaReady = true;
let nativeSupabaseRedirectListenerBound = false;
let colorSchemeMedia = null;
let colorSchemeListenerBound = false;
let categoryManagerModal = null;

document.addEventListener("DOMContentLoaded", () => {
  cacheDom();
  bindEvents();
  applyStoredSettings();
  applyUiTheme();
  bindColorSchemePreferenceListener();
  applyStoredRecurringTemplates();
  applyStoredHistoryState();
  if (!isStartupWelcomeModeEnabled() && state.settings.autoRestoreDraft) {
    restoreDraft();
  }
  if (state.mode !== "budget") {
    setStartupWelcomeMode(true);
  }
  syncLibraryState();
  setupAppShell();
  void initSupabaseIntegration();
  renderAll();
});

function createEmptyBudgetModel() {
  return {
    headers: ["Date", "Categories", "Value"],
    rows: [],
    categories: [],
    clearEndRow: START_ROW,
    customGroups: [],
    categoryAssignments: [],
  };
}

function normalizeBudgetCustomGroupTone(value, fallback = "default") {
  const normalized = String(value || "").trim().toLowerCase();
  return ["positive", "neutral", "negative", "default"].includes(normalized)
    ? normalized
    : fallback;
}

function getBudgetCustomGroupPlanMode(groupKey) {
  const normalized = String(groupKey || "").trim();
  const customGroup = Array.isArray(state?.budget?.customGroups)
    ? state.budget.customGroups.find((entry) => String(entry?.key || "").trim() === normalized)
    : null;

  if (customGroup) {
    return normalizePlanGroup(customGroup.planGroup, "");
  }

  if (normalized === "income") {
    return "income";
  }

  if (normalized === "savings") {
    return "savings";
  }

  return "expenses";
}

function getDefaultCustomGroupTone(planGroup) {
  if (planGroup === "income") {
    return "positive";
  }

  if (planGroup === "savings") {
    return "neutral";
  }

  return "default";
}

function sanitizeBudgetCustomGroup(rawGroup, fallbackPosition = 0) {
  const label = String(rawGroup?.label || "").trim();
  if (!label) {
    return null;
  }

  const rawKey = String(rawGroup?.key || "").trim();
  const normalizedKey = rawKey
    ? normalizeHeaderName(rawKey).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
    : "";
  const key = normalizedKey || `custom-${normalizeHeaderName(label).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || createId()}`;
  const planGroup = getBudgetCustomGroupPlanMode(rawGroup?.planGroup || rawGroup?.mode || "expenses");
  const tone = normalizeBudgetCustomGroupTone(rawGroup?.tone, getDefaultCustomGroupTone(planGroup));
  const description = String(rawGroup?.description || "").trim();
  const position = Number.isInteger(rawGroup?.position) ? rawGroup.position : fallbackPosition;

  return {
    key,
    label,
    planGroup,
    tone,
    description,
    position,
  };
}

function sanitizeBudgetCategoryAssignment(rawAssignment) {
  const category = String(rawAssignment?.category || rawAssignment?.label || "").trim();
  const groupKey = String(rawAssignment?.groupKey || rawAssignment?.parentKey || "").trim();
  if (!category || !groupKey) {
    return null;
  }

  return {
    category,
    groupKey,
  };
}

function getBudgetCustomGroups() {
  return (Array.isArray(state?.budget?.customGroups) ? state.budget.customGroups : [])
    .map((entry, index) => sanitizeBudgetCustomGroup(entry, index))
    .filter(Boolean);
}

function getBudgetCategoryAssignments() {
  return (Array.isArray(state?.budget?.categoryAssignments) ? state.budget.categoryAssignments : [])
    .map((entry) => sanitizeBudgetCategoryAssignment(entry))
    .filter(Boolean);
}

function getBudgetCustomGroupMeta(groupKey) {
  const normalized = String(groupKey || "").trim();
  return getBudgetCustomGroups().find((entry) => entry.key === normalized) || null;
}

function getBudgetCategoryAssignment(label) {
  const normalized = normalizeHeaderName(label);
  return getBudgetCategoryAssignments().find(
    (entry) => normalizeHeaderName(entry.category) === normalized
  ) || null;
}

function getOrderedBudgetFraGroupKeys() {
  const builtIn = [...BUDGET_FRA_GROUP_ORDER];
  const custom = getBudgetCustomGroups()
    .sort((left, right) => {
      if (left.position !== right.position) {
        return left.position - right.position;
      }

      return left.label.localeCompare(right.label, getUiLocale());
    })
    .map((entry) => entry.key)
    .filter((key) => !builtIn.includes(key));

  return [...builtIn, ...custom];
}

function getBudgetMainCategoryOptions() {
  return getOrderedBudgetFraGroupKeys().map((key, index) => ({
    key,
    order: index,
    label: getBudgetFraCategoryMeta(key).label || key,
    planGroup: getBudgetCustomGroupPlanMode(key),
  }));
}

function createEmptyRecapModel() {
  return {
    available: false,
    snapshotDate: "",
    planTemplate: [],
  };
}

function createDefaultUiSettings() {
  return {
    language: "fr",
    theme: "auto",
    transactionView: "cards",
    autoRestoreDraft: true,
    showBudgetFraAlerts: true,
    showBudgetFraSuggestions: false,
  };
}

function createEmptyRecurringReviewDrafts() {
  return {};
}

function normalizeUiLanguage(value) {
  const nextValue = String(value || "").trim().toLowerCase();
  return SUPPORTED_UI_LANGUAGES.includes(nextValue) ? nextValue : "fr";
}

function normalizeUiTheme(value) {
  const nextValue = String(value || "").trim().toLowerCase();
  return SUPPORTED_UI_THEMES.includes(nextValue) ? nextValue : "auto";
}

function normalizeTransactionView(value) {
  const nextValue = String(value || "").trim().toLowerCase();
  return SUPPORTED_TRANSACTION_VIEWS.includes(nextValue) ? nextValue : "cards";
}

function getCurrentLanguage() {
  return normalizeUiLanguage(state?.settings?.language || "fr");
}

function getCurrentThemePreference() {
  return normalizeUiTheme(state?.settings?.theme || "auto");
}

function getCurrentTransactionView() {
  return normalizeTransactionView(state?.settings?.transactionView || "cards");
}

function getResolvedTheme() {
  const themePreference = getCurrentThemePreference();
  if (themePreference === "auto") {
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
  }

  return themePreference;
}

function updateThemeMetaColor(theme) {
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute("content", theme === "dark" ? "#102228" : "#18333b");
  }
}

function applyUiTheme() {
  const resolvedTheme = getResolvedTheme();
  if (document?.body) {
    document.body.dataset.theme = resolvedTheme;
    document.body.dataset.themePreference = getCurrentThemePreference();
  }

  if (document?.documentElement) {
    document.documentElement.style.colorScheme = resolvedTheme;
  }

  updateThemeMetaColor(resolvedTheme);
}

function onSystemThemePreferenceChanged() {
  if (getCurrentThemePreference() === "auto") {
    applyUiTheme();
  }
}

function bindColorSchemePreferenceListener() {
  if (!window.matchMedia || colorSchemeListenerBound) {
    return;
  }

  colorSchemeMedia = window.matchMedia("(prefers-color-scheme: dark)");
  if (typeof colorSchemeMedia.addEventListener === "function") {
    colorSchemeMedia.addEventListener("change", onSystemThemePreferenceChanged);
    colorSchemeListenerBound = true;
    return;
  }

  if (typeof colorSchemeMedia.addListener === "function") {
    colorSchemeMedia.addListener(onSystemThemePreferenceChanged);
    colorSchemeListenerBound = true;
  }
}

function isEnglishUi() {
  return getCurrentLanguage() === "en";
}

function getUiLocale() {
  return isEnglishUi() ? "en-CA" : "fr-CA";
}

function translateTemplate(template, variables = {}) {
  return String(template || "").replace(/\{(\w+)\}/g, (_, key) => {
    const value = variables[key];
    return value === undefined || value === null ? "" : String(value);
  });
}

function t(key, variables = {}) {
  const lang = getCurrentLanguage();
  const dictionary = UI_STRINGS[lang] || UI_STRINGS.fr;
  const fallback = UI_STRINGS.fr[key];
  const template = dictionary[key] ?? fallback ?? key;
  return translateTemplate(template, variables);
}

function setNodeText(target, value) {
  if (target) {
    target.textContent = value;
  }
}

function setNodePlaceholder(target, value) {
  if (target) {
    target.placeholder = value;
  }
}

function setDocumentLanguage() {
  if (document?.documentElement) {
    document.documentElement.lang = getCurrentLanguage();
  }
}

function createEmptyHistoryState() {
  return {
    undoStack: [],
    recentEvents: [],
  };
}

function isStartupWelcomeModeEnabled() {
  try {
    return localStorage.getItem(STARTUP_STATE_KEY) === "welcome";
  } catch (error) {
    console.error(error);
    return false;
  }
}

function setStartupWelcomeMode(enabled) {
  try {
    if (enabled) {
      localStorage.setItem(STARTUP_STATE_KEY, "welcome");
      return;
    }

    localStorage.removeItem(STARTUP_STATE_KEY);
  } catch (error) {
    console.error(error);
  }
}

function readStoredSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function sanitizeUiSettings(rawSettings) {
  const defaults = createDefaultUiSettings();
  return {
    language: normalizeUiLanguage(rawSettings?.language || defaults.language),
    theme: normalizeUiTheme(rawSettings?.theme || defaults.theme),
    transactionView: normalizeTransactionView(rawSettings?.transactionView || defaults.transactionView),
    autoRestoreDraft: rawSettings?.autoRestoreDraft !== false,
    showBudgetFraAlerts: rawSettings?.showBudgetFraAlerts !== false,
    showBudgetFraSuggestions: rawSettings?.showBudgetFraSuggestions === true,
  };
}

function persistUiSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
  } catch (error) {
    console.error(error);
  }
}

function applyStoredSettings() {
  state.settings = sanitizeUiSettings(readStoredSettings());
}

function normalizeRecurringTrackedKeys(values) {
  if (!Array.isArray(values)) {
    return [];
  }

  const seen = new Set();
  const normalized = values
    .map((value) => String(value || "").trim())
    .filter((value) => {
      if (!value || seen.has(value)) {
        return false;
      }

      seen.add(value);
      return true;
    });

  return normalized.slice(-MAX_RECURRING_TRACKED_KEYS);
}

function sanitizeRecurringTemplate(rawTemplate) {
  const label = String(rawTemplate?.label || rawTemplate?.category || "").trim();
  const category = String(rawTemplate?.category || rawTemplate?.label || "").trim();
  const value = normalizeAmountValue(rawTemplate?.value);
  const period = normalizePlanPeriod(rawTemplate?.period);
  const startDate = normalizeDateValue(rawTemplate?.startDate || rawTemplate?.anchorDate || "");
  const autoCreate = rawTemplate?.autoCreate === true || rawTemplate?.autoCreate === "true";
  const generatedKeys = normalizeRecurringTrackedKeys(rawTemplate?.generatedKeys);
  const dismissedKeys = normalizeRecurringTrackedKeys(rawTemplate?.dismissedKeys);

  if (!label || !category) {
    return null;
  }

  return {
    id: String(rawTemplate?.id || createId()),
    label,
    category,
    value,
    period,
    startDate,
    autoCreate,
    generatedKeys,
    dismissedKeys,
  };
}

function readStoredRecurringTemplates() {
  try {
    const raw = localStorage.getItem(RECURRING_TEMPLATES_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.map((template) => sanitizeRecurringTemplate(template)).filter(Boolean);
  } catch (error) {
    console.error(error);
    return [];
  }
}

function persistRecurringTemplates() {
  try {
    localStorage.setItem(RECURRING_TEMPLATES_KEY, JSON.stringify(state.recurringTemplates));
  } catch (error) {
    console.error(error);
  }
}

function applyStoredRecurringTemplates() {
  state.recurringTemplates = readStoredRecurringTemplates();
}

function persistRecurringTemplatesIfPossible() {
  if (!Array.isArray(state.recurringTemplates)) {
    return;
  }

  persistRecurringTemplates();
}

function sanitizeHistoryEvent(rawEvent) {
  const label = String(rawEvent?.label || "").trim();
  if (!label) {
    return null;
  }

  return {
    id: String(rawEvent?.id || createId()),
    label,
    createdAt: String(rawEvent?.createdAt || new Date().toISOString()),
  };
}

function sanitizeHistoryEntry(rawEntry) {
  const kind = String(rawEntry?.kind || "").trim();
  if (!kind) {
    return null;
  }

  return {
    id: String(rawEntry?.id || createId()),
    kind,
    createdAt: String(rawEntry?.createdAt || new Date().toISOString()),
    record: rawEntry?.record ? sanitizeBudgetRow(rawEntry.record) : null,
    records: Array.isArray(rawEntry?.records)
      ? rawEntry.records.map((record) => sanitizeBudgetRow(record)).filter((record) => record.__id)
      : [],
    previousRecord: rawEntry?.previousRecord ? sanitizeBudgetRow(rawEntry.previousRecord) : null,
    nextRecord: rawEntry?.nextRecord ? sanitizeBudgetRow(rawEntry.nextRecord) : null,
    index: Number.isInteger(rawEntry?.index) ? rawEntry.index : null,
    recurringKeys: Array.isArray(rawEntry?.recurringKeys)
      ? rawEntry.recurringKeys.map((key) => String(key || "").trim()).filter(Boolean)
      : [],
    templateChanges: Array.isArray(rawEntry?.templateChanges)
      ? rawEntry.templateChanges
        .map((change) => ({
          templateId: String(change?.templateId || "").trim(),
          previousValue: normalizeAmountValue(change?.previousValue),
          nextValue: normalizeAmountValue(change?.nextValue),
        }))
        .filter((change) => change.templateId)
      : [],
    previousTemplate: Array.isArray(rawEntry?.previousTemplate)
      ? rawEntry.previousTemplate.map((row) => ({
        label: String(row?.label || "").trim(),
        plan: normalizeAmountValue(row?.plan),
        period: normalizePlanPeriod(row?.period),
        group: normalizePlanGroup(row?.group, row?.label),
      })).filter((row) => row.label)
      : [],
  };
}

function readStoredHistoryState() {
  try {
    const raw = localStorage.getItem(HISTORY_STATE_KEY);
    if (!raw) {
      return createEmptyHistoryState();
    }

    const parsed = JSON.parse(raw);
    const undoStack = Array.isArray(parsed?.undoStack)
      ? parsed.undoStack.map((entry) => sanitizeHistoryEntry(entry)).filter(Boolean).slice(0, HISTORY_STACK_LIMIT)
      : [];
    const recentEvents = Array.isArray(parsed?.recentEvents)
      ? parsed.recentEvents.map((entry) => sanitizeHistoryEvent(entry)).filter(Boolean).slice(0, HISTORY_EVENT_LIMIT)
      : [];

    return {
      undoStack,
      recentEvents,
    };
  } catch (error) {
    console.error(error);
    return createEmptyHistoryState();
  }
}

function persistHistoryState() {
  try {
    localStorage.setItem(HISTORY_STATE_KEY, JSON.stringify(state.history));
  } catch (error) {
    console.error(error);
  }
}

function applyStoredHistoryState() {
  state.history = readStoredHistoryState();
}

function createFallbackPlanTemplate() {
  return FALLBACK_PLAN_TEMPLATE.map((row) => ({
    label: String(row.label || "").trim(),
    plan: normalizeAmountValue(row.plan),
    period: normalizePlanPeriod(row.period),
    group: normalizePlanGroup(row.group, row.label),
  }));
}

function buildLocalStarterPlanTemplate() {
  return resolvePlanTemplate(createFallbackPlanTemplate());
}

function buildLocalStarterCategories(planTemplate = buildLocalStarterPlanTemplate()) {
  const categories = [];
  const seen = new Set();

  planTemplate
    .filter((row) => !isDerivedPlanLabel(row.label))
    .forEach((row) => {
      const label = String(row.label || "").trim();
      const key = normalizeHeaderName(label);
      if (!label || seen.has(key)) {
        return;
      }

      categories.push(label);
      seen.add(key);
    });

  if (!seen.has("association fees")) {
    categories.push("Association fees");
  }

  return categories;
}

function buildDefaultRecurringTemplatesFromPlan(planTemplate = buildLocalStarterPlanTemplate()) {
  const today = new Date().toISOString().slice(0, 10);
  const editableRows = resolvePlanTemplate(planTemplate).filter((row) => !isDerivedPlanLabel(row.label));
  const findRow = (keys) => editableRows.find((row) => keys.includes(normalizeHeaderName(row.label)));
  const recurringRows = [
    findRow(["income 1", "mon revenu net"]),
    findRow(["rent", "loyer"]),
    findRow(["groceries", "epicerie"]),
    findRow(["savings"]),
  ].filter(Boolean);

  return recurringRows
    .map((row) => sanitizeRecurringTemplate({
      label: row.label,
      category: row.label,
      value: row.plan,
      period: row.period || DEFAULT_PLAN_PERIOD,
      startDate: today,
      autoCreate: false,
    }))
    .filter(Boolean);
}

function buildStartupGuideMarkup(options = {}) {
  const title = options.title || t("startup.title");
  const description = options.description || t("startup.description");
  const note = options.note || t("startup.note");
  const showRestore = options.showRestore !== false && hasStoredBudgetDraft();

  return `
    <div class="empty-state-copy">
      <strong>${escapeHtml(title)}</strong>
      <p>${escapeHtml(description)}</p>
    </div>
    <div class="empty-state-actions">
      <button type="button" class="button primary" data-empty-action="start-local">${escapeHtml(t("startup.startLocal"))}</button>
      <button type="button" class="button ghost" data-empty-action="import-excel">${escapeHtml(t("startup.importExcel"))}</button>
      <button type="button" class="button ghost" data-empty-action="go-share">${escapeHtml(t("startup.joinShared"))}</button>
      ${showRestore ? `<button type="button" class="button ghost" data-empty-action="restore-draft">${escapeHtml(t("startup.restoreDraft"))}</button>` : ""}
    </div>
    <p class="empty-state-note">${escapeHtml(note)}</p>
  `;
}

function buildLocalTransactionsEmptyStateMarkup() {
  return [
    `<strong>${escapeHtml(t("startup.localReadyTitle"))}</strong>`,
    `<p>${escapeHtml(t("startup.localReadyBody"))}</p>`,
  ].join("");
}

function startLocalBudgetExperience(options = {}) {
  const targetTab = normalizeAppTab(options.targetTab || APP_TAB_DASHBOARD);
  const planTemplate = buildLocalStarterPlanTemplate();
  const categories = buildLocalStarterCategories(planTemplate);
  const recurringTemplates = state.recurringTemplates.length
    ? state.recurringTemplates.slice()
    : buildDefaultRecurringTemplatesFromPlan(planTemplate);

  setStartupWelcomeMode(false);
  state.mode = "budget";
  state.workbookName = "BUDEGETAPP local.xlsx";
  state.workbook = null;
  state.sourceLink = null;
  state.sourceSafety = createEmptySourceSafety();
  state.appTab = targetTab;
  state.activeView = JOURNAL_SHEET_NAME;
  state.search = "";
  state.editingIndex = null;
  state.editorMode = "create";
  state.planEditing = false;
  state.budget = {
    headers: ["Date", "Categories", "Value"],
    rows: [],
    categories,
    clearEndRow: START_ROW + categories.length + 2,
    customGroups: [],
    categoryAssignments: [],
  };
  state.recap = {
    available: true,
    snapshotDate: formatDateForDisplay(new Date().toISOString().slice(0, 10)),
    planTemplate,
  };
  state.recapFilters = createEmptyRecapFilters();
  if (recurringTemplates.length) {
    state.recurringTemplates = recurringTemplates;
    persistRecurringTemplates();
  }

  if (refs.searchInput) {
    refs.searchInput.value = "";
  }

  if (refs.fileInput) {
    refs.fileInput.value = "";
  }

  setLastAction("Modèle local créé. Vous pouvez commencer sans fichier Excel.");
  persistDraft();
  renderAll();
}

function mergeReferenceBudgetTemplateRows(rows) {
  const mergedRows = Array.isArray(rows) ? rows.map((row) => ({ ...row })) : [];
  const seenCanonicalKeys = new Set(
    mergedRows
      .map((row) => getReferenceBudgetCanonicalKey(row.label))
      .filter(Boolean)
  );

  REFERENCE_BUDGET_TEMPLATE_ITEMS.forEach((item) => {
    if (seenCanonicalKeys.has(item.canonical)) {
      return;
    }

    mergedRows.push({
      label: item.label,
      plan: "0",
      period: DEFAULT_PLAN_PERIOD,
      group: item.planGroup,
    });
    seenCanonicalKeys.add(item.canonical);
  });

  return mergedRows;
}

function getReferenceBudgetSortOrder(label, fallback = Number.MAX_SAFE_INTEGER) {
  const item = getReferenceBudgetTemplateItem(label);
  return item ? item.order : fallback;
}

function normalizePlanPeriod(value) {
  const normalized = String(value || "").trim().toLowerCase();
  return PLAN_PERIOD_FACTORS[normalized] ? normalized : DEFAULT_PLAN_PERIOD;
}

function getPlanPeriodLabel(value) {
  const normalized = normalizePlanPeriod(value);
  if (getCurrentLanguage() === "en") {
    if (normalized === "weekly") {
      return "Per week";
    }
    if (normalized === "biweekly") {
      return "Every 2 weeks";
    }
    return "Per month";
  }

  return PLAN_PERIOD_OPTIONS.find((option) => option.value === normalized)?.label || "Par mois";
}

function inferPlanGroupFromLabel(label) {
  const normalized = normalizeHeaderName(label);

  if (normalized === "income" || normalized === "income 1" || normalized === "income 2") {
    return "income";
  }

  if (normalized === "savings" || normalized === "savings for seasonal exp.") {
    return "savings";
  }

  if (normalized === "sol" || normalized === "association fees") {
    return "neutral";
  }

  if (
    normalized === "total income" ||
    normalized === "expenses" ||
    normalized === "total expenses" ||
    normalized === "total savings" ||
    normalized === "cash short/extra"
  ) {
    return "derived";
  }

  return "expenses";
}

function normalizePlanGroup(value, label = "") {
  const normalized = String(value || "").trim().toLowerCase();
  if (
    normalized === "income" ||
    normalized === "savings" ||
    normalized === "expenses" ||
    normalized === "neutral" ||
    normalized === "derived"
  ) {
    return normalized;
  }

  return inferPlanGroupFromLabel(label);
}

function getReferenceBudgetTemplateItem(label) {
  return REFERENCE_BUDGET_TEMPLATE_INDEX.get(normalizeHeaderName(label)) || null;
}

function getReferenceBudgetCanonicalKey(label) {
  const item = getReferenceBudgetTemplateItem(label);
  return item?.canonical || normalizeHeaderName(label);
}

function createReferenceBudgetResolvedRule(item, label) {
  const parentMeta = getBudgetFraCategoryMeta(item.parent);
  const includeInIncome = item.parent === "income";
  const includeInSavings = item.parent === "savings";
  const includeInExpenses = !includeInIncome && !includeInSavings;
  const alertEligibleParents = new Set([
    "savings",
    "debt",
    "housing",
    "communications",
    "food",
    "insurance",
    "transportation",
  ]);

  return {
    id: `reference-${item.canonical}`,
    normalizedKey: getReferenceBudgetCanonicalKey(label),
    label,
    parent: item.parent,
    parentMeta,
    parentLabel: parentMeta.label,
    flowType: includeInIncome ? "income" : includeInSavings ? "savings" : "expense",
    includeInIncome,
    includeInExpenses,
    includeInSavings,
    includeInParentTotals: true,
    alertGroup: alertEligibleParents.has(item.parent) ? item.parent : null,
    suggestionTags: ["reference-budget", item.parent],
    notes: "Sous-poste issu du budget de reference.",
  };
}

function buildAvailableFormCategories() {
  const planRows = resolvePlanTemplate(state.recap.planTemplate)
    .filter((row) => !isDerivedPlanLabel(row.label));

  if (planRows.length) {
    return buildBudgetFraPlanEditorGroups(planRows)
      .map((group) => {
        const seen = new Set();
        const items = group.rows
          .map((row) => String(row.label || "").trim())
          .filter((label) => {
            if (!label) {
              return false;
            }

            const key = normalizeHeaderName(label);
            if (seen.has(key)) {
              return false;
            }

            seen.add(key);
            return true;
          });

        return {
          key: group.key,
          label: group.meta.label,
          items,
        };
      })
      .filter((group) => group.items.length);
  }

  const fallbackItems = Array.from(
    new Set(
      state.budget.categories
        .map((category) => String(category || "").trim())
        .filter(Boolean)
    )
  );

  return fallbackItems.length
    ? [{ key: "fallback", label: isEnglishUi() ? "Budget categories" : "Catégories du budget", items: fallbackItems }]
    : [];
}

function getAvailableFormCategoryCount() {
  return buildAvailableFormCategories().reduce((total, group) => total + group.items.length, 0);
}

function ensureBudgetCategoryAvailable(category) {
  const label = String(category || "").trim();
  if (!label) {
    return;
  }

  const exists = state.budget.categories.some(
    (entry) => normalizeHeaderName(entry) === normalizeHeaderName(label)
  );

  if (!exists) {
    state.budget.categories.push(label);
  }
}

function createCustomBudgetGroupKey(label) {
  const baseKey = normalizeHeaderName(label).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "custom-group";
  let nextKey = `custom-${baseKey}`;
  let suffix = 2;
  const existingKeys = new Set(getOrderedBudgetFraGroupKeys());

  while (existingKeys.has(nextKey)) {
    nextKey = `custom-${baseKey}-${suffix}`;
    suffix += 1;
  }

  return nextKey;
}

function upsertBudgetCustomGroup(nextGroup) {
  const group = sanitizeBudgetCustomGroup(nextGroup, getBudgetCustomGroups().length);
  if (!group) {
    return null;
  }

  const currentGroups = getBudgetCustomGroups();
  const existingIndex = currentGroups.findIndex((entry) => entry.key === group.key);
  if (existingIndex >= 0) {
    currentGroups.splice(existingIndex, 1, {
      ...currentGroups[existingIndex],
      ...group,
    });
  } else {
    currentGroups.push({
      ...group,
      position: currentGroups.length,
    });
  }

  state.budget.customGroups = currentGroups;
  return state.budget.customGroups.find((entry) => entry.key === group.key) || null;
}

function upsertBudgetCategoryAssignment(category, groupKey) {
  const normalizedCategory = String(category || "").trim();
  const normalizedGroupKey = String(groupKey || "").trim();
  if (!normalizedCategory || !normalizedGroupKey) {
    return null;
  }

  const assignments = getBudgetCategoryAssignments();
  const existingIndex = assignments.findIndex(
    (entry) => normalizeHeaderName(entry.category) === normalizeHeaderName(normalizedCategory)
  );
  const nextAssignment = {
    category: normalizedCategory,
    groupKey: normalizedGroupKey,
  };

  if (existingIndex >= 0) {
    assignments.splice(existingIndex, 1, nextAssignment);
  } else {
    assignments.push(nextAssignment);
  }

  state.budget.categoryAssignments = assignments;
  return nextAssignment;
}

function ensurePlanTemplateCategoryRow(category, planGroup = "expenses") {
  const label = String(category || "").trim();
  if (!label) {
    return false;
  }

  const currentRows = ensurePlanTemplateSeeded();
  const editableRows = clonePlanTemplateRows(currentRows).filter((row) => !isDerivedPlanLabel(row.label));
  const alreadyExists = editableRows.some(
    (row) => normalizeHeaderName(row.label) === normalizeHeaderName(label)
  );

  if (alreadyExists) {
    return false;
  }

  editableRows.push({
    label,
    plan: "0",
    period: DEFAULT_PLAN_PERIOD,
    group: normalizePlanGroup(planGroup, label),
  });
  state.recap.planTemplate = resolvePlanTemplate(editableRows);
  return true;
}

function getRecurringTemplates() {
  return Array.isArray(state.recurringTemplates) ? state.recurringTemplates : [];
}

function canSaveCurrentTransactionAsRecurringTemplate() {
  if (state.mode !== "budget" || state.appTab !== APP_TAB_FORM) {
    return false;
  }

  const category = String(document.getElementById("field-categories")?.value || "").trim();
  const value = String(document.getElementById("field-value")?.value || "").trim();
  return Boolean(category && value);
}

function upsertRecurringTemplate(nextTemplate) {
  const template = sanitizeRecurringTemplate(nextTemplate);
  if (!template) {
    return false;
  }

  const existingIndex = getRecurringTemplates().findIndex(
    (entry) => normalizeHeaderName(entry.label) === normalizeHeaderName(template.label)
      || normalizeHeaderName(entry.category) === normalizeHeaderName(template.category)
  );

  if (existingIndex >= 0) {
    state.recurringTemplates.splice(existingIndex, 1, {
      ...state.recurringTemplates[existingIndex],
      ...template,
      id: state.recurringTemplates[existingIndex].id,
    });
  } else {
    state.recurringTemplates.unshift(template);
  }

  state.recurringTemplates = state.recurringTemplates.slice(0, RECURRING_TEMPLATE_LIMIT);
  persistRecurringTemplates();
  return true;
}

function deleteRecurringTemplate(templateId) {
  state.recurringTemplates = getRecurringTemplates().filter((template) => template.id !== templateId);
  persistRecurringTemplates();
}

function isRecurringAutomationAvailable() {
  return state.mode === "budget";
}

function syncRecurringReviewDrafts(occurrences) {
  const nextDrafts = createEmptyRecurringReviewDrafts();
  occurrences.forEach((occurrence) => {
    if (!occurrence?.key) {
      return;
    }

    const currentDraft = state.recurringReviewDrafts?.[occurrence.key] || {};
    nextDrafts[occurrence.key] = {
      value: normalizeAmountValue(currentDraft.value ?? occurrence.value),
      updateTemplate: currentDraft.updateTemplate === true,
    };
  });
  state.recurringReviewDrafts = nextDrafts;
}

function getRecurringReviewDraft(occurrence) {
  const currentDraft = state.recurringReviewDrafts?.[occurrence?.key] || {};
  return {
    value: normalizeAmountValue(currentDraft.value ?? occurrence?.value),
    updateTemplate: currentDraft.updateTemplate === true,
  };
}

function updateRecurringReviewDraft(occurrenceKey, changes = {}) {
  if (!occurrenceKey) {
    return;
  }

  const currentDraft = state.recurringReviewDrafts?.[occurrenceKey] || {};
  state.recurringReviewDrafts = {
    ...state.recurringReviewDrafts,
    [occurrenceKey]: {
      value: Object.prototype.hasOwnProperty.call(changes, "value")
        ? normalizeAmountValue(changes.value)
        : normalizeAmountValue(currentDraft.value),
      updateTemplate: Object.prototype.hasOwnProperty.call(changes, "updateTemplate")
        ? changes.updateTemplate === true
        : currentDraft.updateTemplate === true,
    },
  };
}

function clearRecurringReviewDrafts(occurrenceKeys = []) {
  if (!occurrenceKeys.length || !state.recurringReviewDrafts) {
    return;
  }

  const nextDrafts = {
    ...state.recurringReviewDrafts,
  };
  occurrenceKeys.forEach((key) => {
    delete nextDrafts[key];
  });
  state.recurringReviewDrafts = nextDrafts;
}

function applyDraftToRecurringOccurrence(occurrence) {
  const draft = getRecurringReviewDraft(occurrence);
  return {
    ...occurrence,
    value: draft.value,
    updateTemplate: draft.updateTemplate,
  };
}

function buildRecurringOccurrenceRecord(template, occurrenceDate) {
  return {
    Date: normalizeDateValue(occurrenceDate),
    Categories: String(template?.category || "").trim(),
    Value: normalizeAmountValue(template?.value),
  };
}

function buildRecurringOccurrenceKey(template, occurrenceDate) {
  const record = buildRecurringOccurrenceRecord(template, occurrenceDate);
  return [
    String(template?.id || "").trim(),
    record.Date,
    normalizeHeaderName(record.Categories),
    normalizeAmountValue(record.Value),
  ].join("|");
}

function compareRecurringOccurrenceDate(leftDate, rightDate) {
  return String(leftDate || "").localeCompare(String(rightDate || ""));
}

function hasMatchingBudgetRow(record) {
  const targetDate = normalizeDateValue(record?.Date);
  const targetCategory = normalizeHeaderName(record?.Categories);
  const targetAmount = roundCurrencyValue(parseAmount(record?.Value));

  return state.budget.rows.some((row) => {
    const rowDate = normalizeDateValue(row?.Date);
    const rowCategory = normalizeHeaderName(row?.Categories);
    const rowAmount = roundCurrencyValue(parseAmount(row?.Value));
    return rowDate === targetDate && rowCategory === targetCategory && rowAmount === targetAmount;
  });
}

function getRecurringStartDate(template) {
  const startDate = normalizeDateValue(template?.startDate);
  return startDate || "";
}

function formatMonthYearLabelFromIso(isoDate) {
  const normalized = normalizeDateValue(isoDate);
  if (!normalized) {
    return "";
  }

  const parsed = new Date(`${normalized}T12:00:00Z`);
  if (Number.isNaN(parsed.getTime())) {
    return normalized;
  }

  return new Intl.DateTimeFormat(getUiLocale(), {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}

function countRecurringTemplateUsageInMonth(template, isoDate) {
  const normalizedDate = normalizeDateValue(isoDate);
  const targetCategory = normalizeHeaderName(template?.category || template?.label);
  if (!normalizedDate || !targetCategory) {
    return 0;
  }

  const targetMonthKey = normalizedDate.slice(0, 7);
  return state.budget.rows.reduce((count, row) => {
    const rowDate = normalizeDateValue(row?.Date);
    const rowCategory = normalizeHeaderName(row?.Categories);
    if (!rowDate || !rowCategory) {
      return count;
    }

    return rowDate.slice(0, 7) === targetMonthKey && rowCategory === targetCategory
      ? count + 1
      : count;
  }, 0);
}

function confirmRecurringTemplateUseIfNeeded(template, targetDate) {
  if (!template) {
    return true;
  }

  const normalizedDate = normalizeDateValue(targetDate);
  if (!normalizedDate) {
    return true;
  }

  const usageCount = countRecurringTemplateUsageInMonth(template, normalizedDate);
  if (!usageCount) {
    return true;
  }

  const displayLabel = getDisplayCategoryLabel(template.label) || getDisplayCategoryLabel(template.category) || template.label || template.category;
  const monthLabel = formatMonthYearLabelFromIso(normalizedDate) || normalizedDate;
  return window.confirm(t("recurring.confirmUseSameMonth", {
    label: displayLabel,
    month: monthLabel,
  }));
}

function addDaysToIsoDate(isoDate, days) {
  const base = new Date(`${normalizeDateValue(isoDate)}T00:00:00Z`);
  if (Number.isNaN(base.getTime())) {
    return "";
  }

  base.setUTCDate(base.getUTCDate() + days);
  return base.toISOString().slice(0, 10);
}

function getDaysInUtcMonth(year, monthIndex) {
  return new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
}

function addMonthsToIsoDate(isoDate, monthsToAdd, anchorDay = null) {
  const normalized = normalizeDateValue(isoDate);
  if (!normalized) {
    return "";
  }

  const [yearText, monthText, dayText] = normalized.split("-");
  const year = Number(yearText);
  const monthIndex = Number(monthText) - 1;
  const day = Number(anchorDay || dayText);
  if (!Number.isInteger(year) || !Number.isInteger(monthIndex) || !Number.isInteger(day)) {
    return "";
  }

  const totalMonths = monthIndex + monthsToAdd;
  const targetYear = year + Math.floor(totalMonths / 12);
  const targetMonthIndex = ((totalMonths % 12) + 12) % 12;
  const safeDay = Math.min(day, getDaysInUtcMonth(targetYear, targetMonthIndex));
  return new Date(Date.UTC(targetYear, targetMonthIndex, safeDay, 12)).toISOString().slice(0, 10);
}

function getNextRecurringOccurrenceDate(currentDate, period, anchorDay = null) {
  const normalizedPeriod = normalizePlanPeriod(period);
  if (normalizedPeriod === "weekly") {
    return addDaysToIsoDate(currentDate, 7);
  }

  if (normalizedPeriod === "biweekly") {
    return addDaysToIsoDate(currentDate, 14);
  }

  return addMonthsToIsoDate(currentDate, 1, anchorDay);
}

function getPendingRecurringOccurrences() {
  if (!isRecurringAutomationAvailable()) {
    return [];
  }

  const today = new Date().toISOString().slice(0, 10);
  const pending = [];

  getRecurringTemplates().forEach((template) => {
    if (!template.autoCreate) {
      return;
    }

    const startDate = getRecurringStartDate(template);
    if (!startDate || startDate > today) {
      return;
    }

    const anchorDay = Number(startDate.split("-")[2] || 1);
    const generatedKeys = new Set(normalizeRecurringTrackedKeys(template.generatedKeys));
    const dismissedKeys = new Set(normalizeRecurringTrackedKeys(template.dismissedKeys));
    let cursor = startDate;
    let iterations = 0;

    while (cursor && compareRecurringOccurrenceDate(cursor, today) <= 0 && iterations < MAX_RECURRING_OCCURRENCES_PER_TEMPLATE) {
      const record = buildRecurringOccurrenceRecord(template, cursor);
      const key = buildRecurringOccurrenceKey(template, cursor);
      const existsInBudget = hasMatchingBudgetRow(record);
      if (
        record.Date &&
        record.Categories &&
        record.Value !== "" &&
        !generatedKeys.has(key) &&
        !dismissedKeys.has(key) &&
        !existsInBudget
      ) {
        pending.push({
          key,
          templateId: template.id,
          templateLabel: template.label,
          category: record.Categories,
          date: record.Date,
          value: record.Value,
          period: template.period,
        });
      }

      cursor = getNextRecurringOccurrenceDate(cursor, template.period, anchorDay);
      iterations += 1;
    }
  });

  const sortedPending = pending.sort((left, right) => {
    const dateCompare = compareRecurringOccurrenceDate(left.date, right.date);
    if (dateCompare !== 0) {
      return dateCompare;
    }

    return String(left.templateLabel || "").localeCompare(String(right.templateLabel || ""), "fr-CA", {
      sensitivity: "base",
    });
  });

  syncRecurringReviewDrafts(sortedPending);
  return sortedPending;
}

function getPendingRecurringOccurrenceMap() {
  return new Map(getPendingRecurringOccurrences().map((occurrence) => [occurrence.key, occurrence]));
}

function updateRecurringTemplateTracking(templateId, updater) {
  const index = getRecurringTemplates().findIndex((template) => template.id === templateId);
  if (index === -1) {
    return null;
  }

  const currentTemplate = getRecurringTemplates()[index];
  const nextTemplate = sanitizeRecurringTemplate({
    ...currentTemplate,
    ...updater(currentTemplate),
    id: currentTemplate.id,
  });
  if (!nextTemplate) {
    return null;
  }

  state.recurringTemplates.splice(index, 1, nextTemplate);
  persistRecurringTemplates();
  return nextTemplate;
}

function updateRecurringTemplateSettings(templateId, changes) {
  return updateRecurringTemplateTracking(templateId, (template) => ({
    ...template,
    ...changes,
  }));
}

function markRecurringOccurrencesAsGenerated(occurrences) {
  const grouped = new Map();
  occurrences.forEach((occurrence) => {
    if (!occurrence?.templateId || !occurrence?.key) {
      return;
    }

    if (!grouped.has(occurrence.templateId)) {
      grouped.set(occurrence.templateId, []);
    }
    grouped.get(occurrence.templateId).push(occurrence.key);
  });

  grouped.forEach((keys, templateId) => {
    updateRecurringTemplateTracking(templateId, (template) => {
      const generatedKeys = normalizeRecurringTrackedKeys([...(template.generatedKeys || []), ...keys]);
      const dismissedKeys = normalizeRecurringTrackedKeys(
        (template.dismissedKeys || []).filter((key) => !keys.includes(key))
      );
      return {
        generatedKeys,
        dismissedKeys,
      };
    });
  });
}

function unmarkRecurringOccurrencesFromRecords(records) {
  const sanitizedRecords = Array.isArray(records) ? records.map((record) => sanitizeBudgetRow(record)).filter((record) => record.Date && record.Categories) : [];
  if (!sanitizedRecords.length) {
    return;
  }

  getRecurringTemplates().forEach((template) => {
    const removableKeys = sanitizedRecords
      .filter((record) => {
        const sameCategory = normalizeHeaderName(record.Categories) === normalizeHeaderName(template.category);
        const sameAmount = roundCurrencyValue(parseAmount(record.Value)) === roundCurrencyValue(parseAmount(template.value));
        return sameCategory && sameAmount;
      })
      .map((record) => buildRecurringOccurrenceKey(template, record.Date));

    if (!removableKeys.length) {
      return;
    }

    updateRecurringTemplateTracking(template.id, (currentTemplate) => ({
      generatedKeys: normalizeRecurringTrackedKeys(
        (currentTemplate.generatedKeys || []).filter((key) => !removableKeys.includes(key))
      ),
    }));
  });
}

function unmarkRecurringOccurrencesByKeys(recurringKeys = []) {
  const grouped = new Map();
  recurringKeys
    .map((key) => String(key || "").trim())
    .filter(Boolean)
    .forEach((key) => {
      const templateId = key.split("|")[0];
      if (!templateId) {
        return;
      }

      if (!grouped.has(templateId)) {
        grouped.set(templateId, []);
      }
      grouped.get(templateId).push(key);
    });

  grouped.forEach((keys, templateId) => {
    updateRecurringTemplateTracking(templateId, (template) => ({
      generatedKeys: normalizeRecurringTrackedKeys(
        (template.generatedKeys || []).filter((key) => !keys.includes(key))
      ),
    }));
  });
}

function dismissRecurringOccurrences(occurrences) {
  const grouped = new Map();
  occurrences.forEach((occurrence) => {
    if (!occurrence?.templateId || !occurrence?.key) {
      return;
    }

    if (!grouped.has(occurrence.templateId)) {
      grouped.set(occurrence.templateId, []);
    }
    grouped.get(occurrence.templateId).push(occurrence.key);
  });

  grouped.forEach((keys, templateId) => {
    updateRecurringTemplateTracking(templateId, (template) => ({
      dismissedKeys: normalizeRecurringTrackedKeys([...(template.dismissedKeys || []), ...keys]),
    }));
  });
}

function restoreFormSnapshotAfterRecurringAction(snapshot) {
  if (state.appTab === APP_TAB_FORM && state.activeView === JOURNAL_SHEET_NAME) {
    applyTransactionFormSnapshot(snapshot);
    refreshCategoryParentMeta();
  }
}

async function addRecurringOccurrencesToBudget(occurrences, options = {}) {
  if (!occurrences.length) {
    return;
  }

  const newRecords = occurrences.map((occurrence) => sanitizeBudgetRow({
    __id: createId(),
    Date: occurrence.date,
    Categories: occurrence.category,
    Value: occurrence.value,
  }));

  newRecords.forEach((record) => {
    state.budget.rows.push(record);
    ensureBudgetCategoryAvailable(record.Categories);
  });
  state.budget.clearEndRow = Math.max(state.budget.clearEndRow, START_ROW + state.budget.rows.length + 8);
  sortBudgetRowsInPlace(state.budget.rows);
  markRecurringOccurrencesAsGenerated(occurrences);
  persistDraft();

  const actionLabel = occurrences.length === 1
    ? `Transaction récurrente ajoutée : ${getDisplayCategoryLabel(occurrences[0].category) || occurrences[0].category}`
    : `${occurrences.length} transactions récurrentes ajoutées.`;
  const templateChanges = Array.isArray(options?.templateChanges)
    ? options.templateChanges
    : [];
  pushUndoEntry({
    kind: "add-recurring-batch",
    records: newRecords,
    recurringKeys: occurrences.map((occurrence) => occurrence.key).filter(Boolean),
    templateChanges,
  }, actionLabel);
  clearRecurringReviewDrafts(occurrences.map((occurrence) => occurrence.key).filter(Boolean));
  setLastAction(actionLabel);
  renderAll();
  void updateCloudPresenceTrack();
  if (canUseSupabaseCloud()) {
    try {
      await enqueueCloudSync(() => publishLocalBudgetToSupabase());
      await sendCloudActivityBroadcast(
        "saved",
        occurrences.length === 1
          ? `la transaction récurrente ${getDisplayCategoryLabel(occurrences[0].category) || occurrences[0].category}`
          : `${occurrences.length} transactions récurrentes`
      );
    } catch (error) {
      console.error(error);
      setLastAction(`${actionLabel} - synchronisation cloud en échec`);
      renderAll();
    }
  }
  await enqueueSourceSave({
    automatic: true,
    baseAction: actionLabel,
  });
}

function getResolvedBudgetCategoryRule(label, planGroup = "", amountValue = null) {
  const amount = parseAmount(amountValue);
  const referenceItem = getReferenceBudgetTemplateItem(label);

  if (referenceItem) {
    return createReferenceBudgetResolvedRule(referenceItem, label);
  }

  const assignment = getBudgetCategoryAssignment(label);
  if (assignment) {
    const parentKey = assignment.groupKey;
    const parentMeta = getBudgetFraCategoryMeta(parentKey);
    const normalizedPlanMode = getBudgetCustomGroupPlanMode(parentKey);
    const includeInIncome = normalizedPlanMode === "income";
    const includeInSavings = normalizedPlanMode === "savings";
    const includeInExpenses = !includeInIncome && !includeInSavings;
    const alertEligibleParents = new Set(BUDGET_FRA_RULES.map((rule) => rule.key));

    return {
      id: `custom-category-${normalizeHeaderName(label)}`,
      normalizedKey: normalizeHeaderName(label),
      canonicalKey: normalizeHeaderName(label),
      label: String(label || "").trim(),
      parent: parentKey,
      parentMeta,
      parentLabel: parentMeta?.label || "",
      flowType: includeInIncome ? "income" : includeInSavings ? "savings" : "expense",
      includeInIncome,
      includeInExpenses,
      includeInSavings,
      includeInParentTotals: true,
      alertGroup: alertEligibleParents.has(parentKey) ? parentKey : null,
      suggestionTags: ["custom-category", parentKey],
      notes: "Catégorie créée depuis la modale du formulaire.",
    };
  }

  if (BUDGET_RULES_API?.resolveBudgetCategoryRule) {
    return BUDGET_RULES_API.resolveBudgetCategoryRule(label, {
      planGroup,
      amount: Number.isFinite(amount) ? amount : null,
    });
  }

  return {
    parent: inferBudgetFraCategory(label, planGroup, amountValue),
    parentMeta: null,
    parentLabel: "",
    includeInIncome: false,
    includeInExpenses: false,
    includeInSavings: false,
    includeInParentTotals: false,
  };
}

function inferBudgetFraCategory(label, planGroup = "", amountValue = null) {
  if (BUDGET_RULES_API?.resolveBudgetCategoryRule) {
    return getResolvedBudgetCategoryRule(label, planGroup, amountValue).parent || "";
  }

  const normalized = normalizeHeaderName(label);
  const normalizedPlanGroup = normalizePlanGroup(planGroup, label);
  const amount = parseAmount(amountValue);

  if (
    normalized === "income" ||
    normalized === "income 1" ||
    normalized === "income 2" ||
    normalizedPlanGroup === "income"
  ) {
    return "income";
  }

  if (
    normalized === "savings" ||
    normalized === "savings for seasonal exp." ||
    normalized === "total savings" ||
    normalizedPlanGroup === "savings"
  ) {
    return "savings";
  }

  if (
    normalized === "credit card" ||
    normalized === "student loans" ||
    normalized === "payment obligations"
  ) {
    return "debt";
  }

  if (normalized === "association fees") {
    if (Number.isFinite(amount)) {
      return amount >= 0 ? "income" : "";
    }
    if (normalizedPlanGroup === "income") {
      return "income";
    }
    return "";
  }

  if (
    normalized === "rent" ||
    normalized === "mortgage" ||
    normalized === "home insurance" ||
    normalized === "home improvements"
  ) {
    return "housing";
  }

  if (
    normalized === "cellular telephone" ||
    normalized === "internet" ||
    normalized === "subscriptions (chatgpt; windows)" ||
    normalized === "entertainement  (netflix ; prime ; spotify; iptv)"
  ) {
    return "communications";
  }

  if (normalized === "groceries" || normalized === "dining out") {
    return "food";
  }

  if (normalized === "hospital insurance") {
    return "insurance";
  }

  if (
    normalized === "vehicle lease" ||
    normalized === "car insurance" ||
    normalized === "gas/fuel" ||
    normalized === "car maintenance" ||
    normalized === "car wash" ||
    normalized === "parking" ||
    normalized === "taxis"
  ) {
    return "transportation";
  }

  if (normalized === "baby") {
    return "childcare";
  }

  if (normalized === "education") {
    return "education";
  }

  if (
    normalized === "vacations/travel" ||
    normalized === "concerts/clubs" ||
    normalized === "sports" ||
    normalized === "gym membership( accessories)" ||
    normalized === "alcohol" ||
    normalized === "hobbies (e.g crafts, baking...)" ||
    normalized === "hobbies (e.g crafts, baking…)"
  ) {
    return "recréation";
  }

  if (normalized === "cosmetics" || normalized === "salon services ( haircuts- hair styles)") {
    return "personalcare";
  }

  if (normalized === "clothing, including shoes") {
    return "clothing";
  }

  if (normalized === "health") {
    return "medical";
  }

  if (normalized === "membership(card; costco)" || normalized === "professional dues") {
    return "fees";
  }

  if (normalized === "gifts – hostess/housewarming" || normalized === "gifts - hostess/housewarming") {
    return "gifts";
  }

  if (normalizedPlanGroup === "neutral" || normalized === "other") {
    return "custom";
  }

  if (normalizedPlanGroup === "expenses") {
    return "custom";
  }

  return "custom";
}

function getBudgetFraCategoryMeta(categoryKey) {
  if (!categoryKey) {
    return {
      label: "",
      description: "",
      tone: "default",
    };
  }

  const customGroup = getBudgetCustomGroupMeta(categoryKey);
  if (customGroup) {
    const fallbackDescription = customGroup.planGroup === "income"
      ? t("categories.customIncomeDescription")
      : customGroup.planGroup === "savings"
        ? t("categories.customSavingsDescription")
        : t("categories.customExpenseDescription");
    return {
      label: customGroup.label,
      description: customGroup.description || fallbackDescription,
      tone: customGroup.tone || getDefaultCustomGroupTone(customGroup.planGroup),
    };
  }

  const meta = BUDGET_FRA_GROUP_META[categoryKey] || BUDGET_FRA_GROUP_META.custom;
  if (!isEnglishUi()) {
    return meta;
  }

  const englishMetaMap = {
    income: { label: "Income", description: "Household money coming in" },
    savings: { label: "Savings", description: "Reserve, goals, and accumulation" },
    debt: { label: "Debt repayment", description: "Credit cards, loans, and obligations" },
    housing: { label: "Housing", description: "Rent, mortgage, and home costs" },
    communications: { label: "Communications", description: "Phone, internet, and digital services" },
    food: { label: "Food", description: "Groceries and dining" },
    insurance: { label: "Insurance", description: "Protection and coverage" },
    transportation: { label: "Transportation", description: "Car, fuel, and travel" },
    childcare: { label: "Childcare", description: "Child-related expenses" },
    education: { label: "Education", description: "School costs and learning" },
    "recréation": { label: "Recreation", description: "Going out, sports, travel, and entertainment" },
    recreation: { label: "Recreation", description: "Going out, sports, travel, and entertainment" },
    personalcare: { label: "Personal care", description: "Hair, cosmetics, and personal upkeep" },
    clothing: { label: "Clothing", description: "Clothes, accessories, and shoes" },
    medical: { label: "Medical care", description: "Health and specialized care" },
    pets: { label: "Pets", description: "Pet-related expenses" },
    fees: { label: "Fees", description: "Memberships and miscellaneous charges" },
    gifts: { label: "Gifts and donations", description: "Gifts, hosting, and donations" },
    custom: { label: "Other items", description: "Items to classify or customize" },
  };

  const localized = englishMetaMap[categoryKey];
  return localized ? { ...meta, ...localized } : meta;
}

function getBudgetFraRuleDisplayTitle(ruleKey) {
  if (isEnglishUi()) {
    const englishTitles = {
      income: "Income",
      savings: "Savings",
      debt: "Debt",
      housing: "Housing",
      communications: "Communications",
      food: "Food",
      insurance: "Insurance",
      transportation: "Transportation",
    };
    return englishTitles[ruleKey] || getBudgetFraCategoryMeta(ruleKey).label || "";
  }

  const frenchTitles = {
    income: "Revenu",
    savings: "Épargnes",
    debt: "Dettes",
    housing: "Logement",
    communications: "Communications",
    food: "Alimentation",
    insurance: "Assurances",
    transportation: "Transport",
  };
  return frenchTitles[ruleKey] || getBudgetFraCategoryMeta(ruleKey).label || "";
}

function formatBudgetFraRatioLabel(ratio) {
  const percentage = `${(ratio * 100).toFixed(1)} %`;
  return isEnglishUi() ? `${percentage} of income` : `${percentage} du revenu`;
}

function getBudgetFraCategoryLabel(label, planGroup = "", amountValue = null) {
  if (BUDGET_RULES_API?.resolveBudgetCategoryRule) {
    const rule = getResolvedBudgetCategoryRule(label, planGroup, amountValue);
    return getBudgetFraCategoryMeta(rule.parent).label || "";
  }

  return getBudgetFraCategoryMeta(inferBudgetFraCategory(label, planGroup, amountValue)).label;
}

function convertPlanAmountToMonthly(amountValue, periodValue) {
  const amount = parseAmount(amountValue);
  const factor = PLAN_PERIOD_FACTORS[normalizePlanPeriod(periodValue)] || 1;
  return roundCurrencyValue(amount * factor);
}

function roundCurrencyValue(value) {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function isLegacyIncomePlanLabel(label) {
  return normalizeHeaderName(label) === "income";
}

function isDerivedPlanLabel(label) {
  const normalized = normalizeHeaderName(label);
  return normalized === "income" ||
    normalized === "total income" ||
    normalized === "expenses" ||
    normalized === "total savings" ||
    normalized === "total expenses" ||
    normalized === "cash short/extra";
}

function isIncomePlanLabel(label) {
  const normalized = normalizeHeaderName(label);
  return normalized === "income" ||
    normalized === "income 1" ||
    normalized === "income 2";
}

function isSplitIncomeContributorLabel(label) {
  const normalized = normalizeHeaderName(label);
  if (normalized === "income") {
    return false;
  }

  const canonical = getReferenceBudgetCanonicalKey(label);
  return canonical === "income 1" || canonical === "income 2";
}

function isSavingsPlanLabel(label) {
  const normalized = normalizeHeaderName(label);
  return normalized === "savings" || normalized === "savings for seasonal exp.";
}

function isExpenseSummaryPlanLabel(label) {
  return normalizeHeaderName(label) === "expenses";
}

function isPlanTemplateSummaryLabel(label) {
  return isIncomePlanLabel(label) ||
    isSavingsPlanLabel(label) ||
    isExpenseSummaryPlanLabel(label) ||
    isDerivedPlanLabel(label);
}

function getBudgetSummaryPriority(label) {
  const normalized = normalizeHeaderName(label);
  if (normalized === "income") {
    return 0;
  }

  if (normalized === "expenses" || normalized === "total expenses") {
    return 1;
  }

  if (normalized === "total savings") {
    return 2;
  }

  if (normalized === "cash short/extra") {
    return 3;
  }

  return Number.POSITIVE_INFINITY;
}

function sortBudgetSummaryRows(rows) {
  return rows
    .map((row, index) => ({ row, index }))
    .sort((left, right) => {
      const priorityDiff = getBudgetSummaryPriority(left.row.label) - getBudgetSummaryPriority(right.row.label);
      if (priorityDiff !== 0) {
        return priorityDiff;
      }

      return left.index - right.index;
    })
    .map((entry) => entry.row);
}

function getBudgetSummaryCardMeta(label) {
  const normalized = normalizeHeaderName(label);

  if (normalized === "income" || normalized === "total income") {
    return { title: isEnglishUi() ? "Income" : "Revenu", tone: "income" };
  }

  if (normalized === "expenses" || normalized === "total expenses") {
    return { title: isEnglishUi() ? "Expenses" : "Dépenses", tone: "expenses" };
  }

  if (normalized === "total savings") {
    return { title: isEnglishUi() ? "Savings" : "Épargne", tone: "savings" };
  }

  if (normalized === "cash short/extra") {
    return { title: "Cash", tone: "cash" };
  }

  return { title: label, tone: "default" };
}

function getMetricDisplayLabel(label) {
  const normalized = normalizeHeaderName(label);

  if (normalized === "income") {
    return isEnglishUi() ? "Income" : "Revenu";
  }

  if (normalized === "expenses" || normalized === "total expenses") {
    return isEnglishUi() ? "Expenses" : "Dépenses";
  }

  if (normalized === "savings" || normalized === "total savings") {
    return isEnglishUi() ? "Savings" : "Épargne";
  }

  if (normalized === "seasonal savings" || normalized === "savings for seasonal exp.") {
    return isEnglishUi() ? "Seasonal savings" : "Épargne saisonnière";
  }

  if (normalized === "cash" || normalized === "cash short/extra") {
    return "Cash";
  }

  return label;
}

function getMetricIconKey(label) {
  const normalized = normalizeHeaderName(label);

  if (normalized === "income") {
    return "income";
  }

  if (normalized === "expenses" || normalized === "total expenses") {
    return "expenses";
  }

  if (normalized === "savings" || normalized === "total savings" || normalized === "seasonal savings" || normalized === "savings for seasonal exp.") {
    return "savings";
  }

  if (normalized === "cash" || normalized === "cash short/extra") {
    return "cash";
  }

  return "";
}

function getMetricIconMarkup(label) {
  const iconKey = getMetricIconKey(label);
  const iconMap = {
    income: "metric-revenu.png",
    expenses: "metric-depenses.png",
    savings: "metric-epargne.png",
    cash: "metric-cash.png",
  };

  if (iconMap[iconKey]) {
    return `<img src="${iconMap[iconKey]}" alt="" loading="lazy" decoding="async">`;
  }

  return "";
}

function buildBudgetFraPlanEditorGroups(rows) {
  const buckets = new Map();

  rows.forEach((row) => {
    const categoryKey = getPlanDisplayGroupKey(row);
    if (!buckets.has(categoryKey)) {
      buckets.set(categoryKey, []);
    }
    buckets.get(categoryKey).push(row);
  });

  return getOrderedBudgetFraGroupKeys()
    .map((key) => ({
      key,
      meta: getBudgetFraCategoryMeta(key),
      rows: (buckets.get(key) || [])
        .map((row, index) => ({
          row,
          index,
          order: getReferenceBudgetSortOrder(row.label, Number.MAX_SAFE_INTEGER),
        }))
        .sort((left, right) => {
          if (left.order !== right.order) {
            return left.order - right.order;
          }

          return left.index - right.index;
        })
        .map((entry) => entry.row),
    }))
    .filter((group) => group.rows.length);
}

function getPlanDisplayGroupKey(row) {
  const assignment = getBudgetCategoryAssignment(row?.label);
  if (assignment) {
    return assignment.groupKey;
  }

  const categoryKey = inferBudgetFraCategory(row.label, row.group, row.plan);
  if (categoryKey && getOrderedBudgetFraGroupKeys().includes(categoryKey)) {
    return categoryKey;
  }

  return "custom";
}

function computePlanGroupMonthlyTotal(rows) {
  return rows.reduce(
    (total, row) => total + convertPlanAmountToMonthly(row.plan, row.period),
    0
  );
}

function renderPlanGroupSection(categoryKey, rows, startIndex, readOnly = false, groupIndex = 0) {
  const english = getCurrentLanguage() === "en";
  const section = document.createElement("details");
  section.className = "plan-group-section budget-panel";
  section.setAttribute("data-budget-group", categoryKey);

  const meta = getBudgetFraCategoryMeta(categoryKey);
  const heading = document.createElement("summary");
  heading.className = "plan-group-header";
  heading.innerHTML = `
    <div>
      <div class="budget-kind">${english ? "Main category" : "Grande catégorie"}</div>
      <h3 class="plan-group-title">${escapeHtml(meta.label)}</h3>
    </div>
    <div class="budget-summary-side">
      <strong data-plan-group-total="${escapeHtml(categoryKey)}">${escapeHtml(
        formatCurrency(computePlanGroupMonthlyTotal(rows))
      )}</strong>
      <span>${english ? "Monthly equivalent" : "Équivalent mensuel"}</span>
    </div>
  `;

  const body = document.createElement("div");
  body.className = "plan-group-body";
  body.innerHTML = `
    <p class="budget-panel-note">${escapeHtml(meta.description || (english ? "Budget section grouped by parent category." : "Section budgétaire regroupée par parent."))}</p>
    <div class="budget-head">
      <div>${english ? "Item" : "Poste"}</div>
      <div>${english ? "Amount" : "Montant"}</div>
      <div>${english ? "Period" : "Période"}</div>
      <div>Parent</div>
      <div>${english ? "Monthly" : "Mensuel"}</div>
    </div>
  `;

  const table = document.createElement("div");
  table.className = "budget-table";

  let nextIndex = startIndex;
  rows.forEach((row) => {
    table.appendChild(renderPlanAmountField(row, nextIndex, readOnly));
    nextIndex += 1;
  });

  body.appendChild(table);
  section.append(heading, body);
  return { section, nextIndex };
}

function buildBudgetFraGroupTotals(actualMap) {
  const totals = new Map();

  actualMap.forEach((amount, key) => {
    const label = findOriginalCategoryLabel(key);
    const normalizedAmount = Number.isFinite(amount) ? amount : 0;
    const rule = getResolvedBudgetCategoryRule(label, "", normalizedAmount);
    const categoryKey = rule.parent;
    if (!categoryKey || !rule.includeInParentTotals) {
      return;
    }
    let contribution = 0;

    if (rule.includeInIncome || rule.includeInSavings) {
      contribution = Math.abs(normalizedAmount);
    } else if (rule.includeInExpenses) {
      contribution = getExpenseContributionAmount(normalizedAmount);
    }

    if (!Number.isFinite(contribution) || contribution === 0) {
      return;
    }

    totals.set(categoryKey, roundCurrencyValue((totals.get(categoryKey) || 0) + contribution));
  });

  return totals;
}

function buildBudgetFraGroupSummaries(actualMap) {
  const totals = buildBudgetFraGroupTotals(actualMap);

  return getOrderedBudgetFraGroupKeys()
    .map((key) => {
      const value = totals.get(key) || 0;
      if (value <= 0) {
        return null;
      }

      const meta = getBudgetFraCategoryMeta(key);
      return {
        key,
        label: meta.label,
        description: meta.description,
        tone: meta.tone,
        value,
      };
    })
    .filter(Boolean);
}

function buildBudgetFraRuleAlerts(actualMap, snapshot) {
  const english = isEnglishUi();
  const income = Math.max(0, roundCurrencyValue(snapshot.income));
  if (!income) {
    return [
      {
        key: "income",
        title: getBudgetFraRuleDisplayTitle("income"),
        tone: "risk",
        status: english ? "Income required" : "Revenu requis",
        detail: english
          ? "Add your income to activate Budget-fra alerts."
          : "Ajoutez votre revenu pour activer les alertes budgétaires de type Budget-fra.",
        amountLabel: formatCurrency(0),
        ratioLabel: "-",
        groupLabel: getBudgetFraCategoryMeta("income").label,
      },
    ];
  }

  const totals = buildBudgetFraGroupTotals(actualMap);

  return BUDGET_FRA_RULES.map((rule) => {
    const amount = roundCurrencyValue(totals.get(rule.key) || 0);
    const ratio = income > 0 ? amount / income : 0;
    const meta = getBudgetFraCategoryMeta(rule.key);

    if (rule.kind === "min") {
      if (amount <= 0) {
        return {
          key: rule.key,
          title: getBudgetFraRuleDisplayTitle(rule.key),
          tone: "risk",
          status: english ? "No savings detected" : rule.redLabel,
          detail: english
            ? `Recommended target: at least ${(rule.greenMin * 100).toFixed(0)}% of income.`
            : `Cible recommandée : au moins ${(rule.greenMin * 100).toFixed(0)} % du revenu.`,
          amountLabel: formatCurrency(amount),
          ratioLabel: formatBudgetFraRatioLabel(ratio),
          groupLabel: meta.label,
        };
      }

      if (ratio >= rule.greenMin) {
        return {
          key: rule.key,
          title: getBudgetFraRuleDisplayTitle(rule.key),
          tone: "good",
          status: english ? "At recommended level" : rule.greenLabel,
          detail: english
            ? `You are above the recommended threshold of ${(rule.greenMin * 100).toFixed(0)}% of income.`
            : `Vous êtes au-dessus du seuil recommandé de ${(rule.greenMin * 100).toFixed(0)} % du revenu.`,
          amountLabel: formatCurrency(amount),
          ratioLabel: formatBudgetFraRatioLabel(ratio),
          groupLabel: meta.label,
        };
      }

      return {
        key: rule.key,
        title: getBudgetFraRuleDisplayTitle(rule.key),
        tone: "warn",
        status: english ? "Below the recommended target" : rule.yellowLabel,
        detail: english
          ? `Try to reach ${(rule.greenMin * 100).toFixed(0)}% of income or more.`
          : `Essayez de viser ${(rule.greenMin * 100).toFixed(0)} % du revenu ou plus.`,
        amountLabel: formatCurrency(amount),
        ratioLabel: formatBudgetFraRatioLabel(ratio),
        groupLabel: meta.label,
      };
    }

    if (ratio <= rule.greenMax) {
      return {
        key: rule.key,
        title: getBudgetFraRuleDisplayTitle(rule.key),
        tone: "good",
        status: english ? "Within range" : "Dans la moyenne",
        detail: english
          ? `The recommended target stays below ${(rule.greenMax * 100).toFixed(0)}% of income.`
          : `La cible recommandée reste sous ${(rule.greenMax * 100).toFixed(0)} % du revenu.`,
        amountLabel: formatCurrency(amount),
        ratioLabel: formatBudgetFraRatioLabel(ratio),
        groupLabel: meta.label,
      };
    }

    if (ratio <= rule.yellowMax) {
      return {
        key: rule.key,
        title: getBudgetFraRuleDisplayTitle(rule.key),
        tone: "warn",
        status: english ? "Slightly above" : "Légèrement au-dessus",
        detail: english
          ? `The watch zone runs from ${(rule.greenMax * 100).toFixed(0)}% to ${(rule.yellowMax * 100).toFixed(0)}% of income.`
          : `La zone de vigilance va de ${(rule.greenMax * 100).toFixed(0)} % à ${(rule.yellowMax * 100).toFixed(0)} % du revenu.`,
        amountLabel: formatCurrency(amount),
        ratioLabel: formatBudgetFraRatioLabel(ratio),
        groupLabel: meta.label,
      };
    }

    return {
      key: rule.key,
      title: getBudgetFraRuleDisplayTitle(rule.key),
      tone: "risk",
      status: english ? "Above target" : "Au-dessus de la cible",
      detail: english
        ? `This category exceeds ${(rule.yellowMax * 100).toFixed(0)}% of income.`
        : `Cette catégorie dépasse ${(rule.yellowMax * 100).toFixed(0)} % du revenu.`,
      amountLabel: formatCurrency(amount),
      ratioLabel: formatBudgetFraRatioLabel(ratio),
      groupLabel: meta.label,
    };
  });
}

function buildBudgetFraSuggestions(actualMap, snapshot) {
  const english = isEnglishUi();
  const suggestions = [];
  const valueFor = (label) => Math.abs(getActualAmount(actualMap, label));
  const groupTotals = buildBudgetFraGroupTotals(actualMap);

  if (snapshot.cash < 0) {
    suggestions.push({
      title: english ? "Your budget ends in the red" : "Votre budget se termine en négatif",
      trigger: english ? "Overall balance below zero" : "Solde global inférieur à zéro",
      body: english
        ? "Prioritize debt, housing, and food categories to bring the budget back into balance."
        : "Priorisez les catégories dette, logement et alimentation pour retrouver un budget respirable.",
    });
  } else if (snapshot.cash > 0) {
    suggestions.push({
      title: english ? "There is money left to allocate" : "Il reste de l'argent à orienter",
      trigger: english ? "Positive cash over the period" : "Cash positif sur la période",
      body: english
        ? "You can direct this surplus toward savings, debt repayment, or a specific goal."
        : "Vous pouvez diriger ce surplus vers l'épargne, un remboursement de dettes ou un objectif précis.",
    });
  }

  if (snapshot.income > 0 && snapshot.totalSavings / snapshot.income < 0.05) {
    suggestions.push({
      title: english ? "Strengthen your emergency savings" : "Renforcer l'épargne de sécurité",
      trigger: english ? "Savings below 5% of income" : "Savings sous 5 % du revenu",
      body: english
        ? "Budget-fra suggests strengthening savings before adding new discretionary spending."
        : "Le fichier Budget-fra suggère de renforcer l'épargne avant d'ajouter de nouvelles dépenses discrétionnaires.",
    });
  }

  if (valueFor("Credit card") > 0) {
    suggestions.push({
      title: english ? "Credit card to watch" : "Carte de crédit à surveiller",
      trigger: "Credit card > 0",
      body: english
        ? "A useful next step would be a priority repayment reminder and a path to reduce interest costs."
        : "Une suggestion utile serait d'afficher un rappel de remboursement prioritaire et une piste pour réduire les intérêts.",
    });
  }

  if (valueFor("Groceries") > 0 || valueFor("Dining out") > 0) {
    suggestions.push({
      title: english ? "Optimize food spending" : "Optimiser l'alimentation",
      trigger: english ? "Groceries or dining present" : "Épicerie ou restaurants présents",
      body: english
        ? "We can suggest reviewing groceries, meal planning, and how often you eat out."
        : "Nous pouvons suggérer de revoir l'épicerie, les repas planifiés et la fréquence des sorties au restaurant.",
    });
  }

  if (valueFor("Mortgage") > 0 || valueFor("Rent") > 0) {
    suggestions.push({
      title: english ? "Housing weighs on the budget" : "Le logement pèse dans le budget",
      trigger: english ? "Rent or mortgage detected" : "Loyer ou hypothèque détecté",
      body: english
        ? "A next update can surface the housing target more clearly and suggest matching guidance."
        : "Une prochaine mise à jour pourra mettre en avant un rappel sur la cible logement et des conseils adaptés.",
    });
  }

  if ((groupTotals.get("transportation") || 0) > 0) {
    suggestions.push({
      title: english ? "Transportation to watch closely" : "Transport à suivre de près",
      trigger: english ? "Transportation spending detected" : "Dépenses de transport détectées",
      body: english
        ? "The Transportation group can suggest ideas around lease costs, fuel, maintenance, and mobility trade-offs."
        : "Le groupe Transport peut proposer des pistes sur la location, l'essence, l'entretien et les arbitrages de mobilité.",
    });
  }

  return suggestions.slice(0, 6);
}

function migrateLegacyIncomePlanRows(rows) {
  const normalizedRows = rows.map((row) => ({
    label: String(row?.label || "").trim(),
    plan: normalizeAmountValue(row?.plan),
    period: normalizePlanPeriod(row?.period),
    group: normalizePlanGroup(row?.group, row?.label),
  })).filter((row) => row.label);

  const hasIncome1 = normalizedRows.some((row) => normalizeHeaderName(row.label) === "income 1");
  const hasIncome2 = normalizedRows.some((row) => normalizeHeaderName(row.label) === "income 2");

  if (hasIncome1 || hasIncome2) {
    return normalizedRows;
  }

  const legacyIncomeIndex = normalizedRows.findIndex((row) => isLegacyIncomePlanLabel(row.label));
  if (legacyIncomeIndex === -1) {
    return normalizedRows;
  }

  const nextRows = normalizedRows.map((row) => ({ ...row }));
  nextRows[legacyIncomeIndex] = {
    ...nextRows[legacyIncomeIndex],
    label: "Income 1",
  };

  nextRows.splice(legacyIncomeIndex + 1, 0, {
    label: "Income 2",
    plan: "0",
    period: DEFAULT_PLAN_PERIOD,
    group: "income",
  });

  return nextRows;
}

function getPlanTemplateDedupKey(row) {
  const label = String(row?.label || "").trim();
  if (!label) {
    return "";
  }

  const normalizedLabel = normalizeHeaderName(label);
  const planGroup = normalizePlanGroup(row?.group, label);
  if (planGroup === "derived") {
    return `derived:${normalizedLabel}`;
  }

  const referenceItem = getReferenceBudgetTemplateItem(label);
  if (referenceItem?.canonical) {
    return `reference:${referenceItem.canonical}`;
  }

  return `label:${normalizedLabel}`;
}

function getPlanTemplateRowPreferenceScore(row) {
  const amount = Math.abs(parseAmount(row?.plan));
  const period = normalizePlanPeriod(row?.period);
  const label = String(row?.label || "").trim();
  const referenceItem = getReferenceBudgetTemplateItem(label);
  let score = 0;

  if (amount > 0.0001) {
    score += 100;
  }

  if (period !== DEFAULT_PLAN_PERIOD) {
    score += 10;
  }

  if (referenceItem && normalizeHeaderName(referenceItem.label) === normalizeHeaderName(label)) {
    score += 2;
  }

  return score;
}

function dedupePlanTemplateRows(rows) {
  const orderedKeys = [];
  const entries = new Map();

  rows.forEach((row, index) => {
    const normalizedRow = {
      ...row,
      label: String(row?.label || "").trim(),
      plan: normalizeAmountValue(row?.plan),
      period: normalizePlanPeriod(row?.period),
      group: normalizePlanGroup(row?.group, row?.label),
    };

    if (!normalizedRow.label) {
      return;
    }

    const key = getPlanTemplateDedupKey(normalizedRow);
    const score = getPlanTemplateRowPreferenceScore(normalizedRow);

    if (!entries.has(key)) {
      orderedKeys.push(key);
      entries.set(key, { row: normalizedRow, score, index });
      return;
    }

    const current = entries.get(key);
    if (score > current.score) {
      entries.set(key, { row: normalizedRow, score, index: current.index });
    }
  });

  return orderedKeys
    .map((key) => entries.get(key)?.row)
    .filter(Boolean);
}

function stripAutoCalculatedPlanRows(rows) {
  return rows.filter((row) => normalizePlanGroup(row.group, row.label) !== "derived");
}

function resolvePlanTemplate(rows = state.recap.planTemplate) {
  const seededRows = Array.isArray(rows) && rows.length ? rows : createFallbackPlanTemplate();
  const mergedRows = mergeReferenceBudgetTemplateRows(seededRows);
  const normalizedRows = dedupePlanTemplateRows(migrateLegacyIncomePlanRows(mergedRows)).map((row) => ({
    ...row,
    group: normalizePlanGroup(row.group, row.label),
  }));
  const manualRows = stripAutoCalculatedPlanRows(normalizedRows);
  const income = manualRows.reduce((sum, row) => {
    if (row.group !== "income") {
      return sum;
    }

    const amount = convertPlanAmountToMonthly(row.plan, row.period);
    return Number.isFinite(amount) ? sum + amount : sum;
  }, 0);
  let totalSavings = 0;
  let computedExpenses = 0;

  manualRows.forEach((row) => {
    const amount = convertPlanAmountToMonthly(row.plan, row.period);
    if (!Number.isFinite(amount)) {
      return;
    }

    if (row.group === "savings") {
      totalSavings += amount;
      return;
    }

    if (row.group !== "expenses") {
      return;
    }

    computedExpenses += amount;
  });

  const totalExpenses = computedExpenses;
  const normalizedIncome = roundCurrencyValue(Number.isFinite(income) ? income : 0);
  const normalizedTotalSavings = roundCurrencyValue(totalSavings);
  const normalizedTotalExpenses = roundCurrencyValue(totalExpenses);
  const cash = roundCurrencyValue(normalizedIncome - normalizedTotalExpenses - normalizedTotalSavings);
  return [
    ...manualRows,
    {
      label: "Income",
      plan: normalizeAmountValue(normalizedIncome),
      period: DEFAULT_PLAN_PERIOD,
      group: "derived",
    },
    {
      label: "Expenses",
      plan: normalizeAmountValue(normalizedTotalExpenses),
      period: DEFAULT_PLAN_PERIOD,
      group: "derived",
    },
    {
      label: "Total Savings",
      plan: normalizeAmountValue(normalizedTotalSavings),
      period: DEFAULT_PLAN_PERIOD,
      group: "derived",
    },
    {
      label: "Cash short/extra",
      plan: normalizeAmountValue(cash),
      period: DEFAULT_PLAN_PERIOD,
      group: "derived",
    },
  ];
}

function ensurePlanTemplateSeeded() {
  if (state.mode !== "budget") {
    return [];
  }

  if (Array.isArray(state.recap.planTemplate) && state.recap.planTemplate.length) {
    state.recap.planTemplate = resolvePlanTemplate(state.recap.planTemplate);
    return state.recap.planTemplate;
  }

  state.recap.available = true;
  state.recap.planTemplate = resolvePlanTemplate(createFallbackPlanTemplate());
  persistDraftIfPossible();
  return state.recap.planTemplate;
}

function createEmptyRecapFilters() {
  return {
    year: "all",
    month: "all",
    months: [],
    rangeMonths: "all",
  };
}

function createEmptyCloudState() {
  return {
    configured: false,
    ready: false,
    syncBusy: false,
    email: "",
    status: "Supabase non configuré.",
    session: null,
    user: null,
    space: {
      id: "",
      name: "",
      joinCode: "",
    },
    collaboration: createEmptyCloudCollaborationState(),
    alerts: createDefaultBudgetAlertSettings(),
    lastPulledAt: "",
    lastPushedAt: "",
  };
}

function createEmptyCloudCollaborationState(clientKey = createId()) {
  return {
    clientKey,
    onlineUsers: [],
    liveMessage: "",
    lastEventAt: "",
  };
}

function createDefaultBudgetAlertSettings() {
  const config = getSupabaseConfig();
  return {
    enabled: true,
    recipientEmail: String(config.budgetAlertEmail || "").trim().toLowerCase(),
    cooldownHours: Math.min(168, Math.max(1, Number(config.budgetAlertCooldownHours) || 12)),
  };
}

function sanitizeBudgetAlertSettings(rawSettings) {
  const defaults = createDefaultBudgetAlertSettings();
  return {
    enabled: rawSettings?.enabled !== false,
    recipientEmail: String(rawSettings?.recipientEmail || rawSettings?.email || defaults.recipientEmail || "")
      .trim()
      .toLowerCase(),
    cooldownHours: Math.min(
      168,
      Math.max(1, Number(rawSettings?.cooldownHours) || defaults.cooldownHours)
    ),
  };
}

function createEmptySourceSafety() {
  return {
    allowDirectWrite: false,
    reason: "Ecriture directe desactivee pour proteger l'integrite du classeur source.",
    issues: [],
  };
}

function normalizeActiveView(value) {
  if (value === RECAP_SHEET_NAME || value === ANALYSIS_VIEW_NAME) {
    return value;
  }

  return JOURNAL_SHEET_NAME;
}

function normalizeAppTab(value) {
  if (
    value === APP_TAB_DASHBOARD ||
    value === APP_TAB_PLAN ||
    value === APP_TAB_TRANSACTIONS ||
    value === APP_TAB_FORM ||
    value === APP_TAB_RECURRING ||
    value === APP_TAB_ANALYSIS ||
    value === APP_TAB_SHARE
  ) {
    return value;
  }

  return APP_TAB_DASHBOARD;
}

function getAppTabForActiveView(activeView) {
  if (activeView === RECAP_SHEET_NAME) {
    return APP_TAB_DASHBOARD;
  }

  if (activeView === ANALYSIS_VIEW_NAME) {
    return APP_TAB_ANALYSIS;
  }

  return APP_TAB_TRANSACTIONS;
}

function syncActiveViewForCurrentTab() {
  if (state.appTab === APP_TAB_DASHBOARD) {
    state.activeView = RECAP_SHEET_NAME;
    return;
  }

  if (state.appTab === APP_TAB_PLAN) {
    state.activeView = RECAP_SHEET_NAME;
    return;
  }

  if (state.appTab === APP_TAB_TRANSACTIONS || state.appTab === APP_TAB_FORM || state.appTab === APP_TAB_RECURRING) {
    state.activeView = JOURNAL_SHEET_NAME;
    return;
  }

  if (state.appTab === APP_TAB_ANALYSIS) {
    state.activeView = ANALYSIS_VIEW_NAME;
  }
}

function setAppTab(nextTab) {
  const normalizedTab = normalizeAppTab(nextTab);
  state.appTab = normalizedTab;

  if (normalizedTab !== APP_TAB_PLAN) {
    state.planEditing = false;
  }

  if (normalizedTab !== APP_TAB_SHARE) {
    syncActiveViewForCurrentTab();
    state.search = "";
    if (normalizedTab === APP_TAB_FORM) {
      if (state.editorMode !== "edit") {
        state.editorMode = "create";
        state.editingIndex = null;
      }
    } else {
      state.editorMode = "create";
      state.editingIndex = null;
    }
    if (refs.searchInput) {
      refs.searchInput.value = "";
    }
  }

  persistDraftIfPossible();
  renderAll();
  void updateCloudPresenceTrack();
}

function cacheDom() {
  refs.fileInput = document.getElementById("excel-file");
  refs.welcomeScreen = document.getElementById("welcome-screen");
  refs.appNav = document.querySelector(".app-nav");
  refs.toolbar = document.getElementById("workspace-toolbar");
  refs.toolbarPrimary = document.getElementById("toolbar-primary");
  refs.toolbarSide = document.getElementById("toolbar-side");
  refs.toolbarActions = document.getElementById("toolbar-actions");
  refs.filePickerField = document.getElementById("file-picker-field");
  refs.recapYearField = document.getElementById("recap-year-field");
  refs.recapYearSelect = document.getElementById("recap-year-select");
  refs.recapMonthField = document.getElementById("recap-month-field");
  refs.recapMonthPicker = document.getElementById("recap-month-picker");
  refs.recapMonthTrigger = document.getElementById("recap-month-trigger");
  refs.recapMonthPanel = document.getElementById("recap-month-panel");
  refs.recapMonthSelect = document.getElementById("recap-month-select");
  refs.recapRangeField = document.getElementById("recap-range-field");
  refs.recapRangeSelect = document.getElementById("recap-range-select");
  refs.searchField = document.getElementById("search-field");
  refs.searchInput = document.getElementById("search-input");
  refs.appTabTitle = document.getElementById("app-tab-title");
  refs.appTabDescription = document.getElementById("app-tab-description");
  refs.appTabButtons = Array.from(document.querySelectorAll("[data-app-tab]"));
  refs.cloudStatus = document.getElementById("cloud-status");
  refs.cloudEmailInput = document.getElementById("cloud-email");
  refs.cloudCodeInput = document.getElementById("cloud-code");
  refs.cloudMagicLinkButton = document.getElementById("cloud-magic-link");
  refs.cloudSignOutButton = document.getElementById("cloud-sign-out");
  refs.cloudCreateSpaceButton = document.getElementById("cloud-create-space");
  refs.cloudJoinSpaceButton = document.getElementById("cloud-join-space");
  refs.cloudPushButton = document.getElementById("cloud-push");
  refs.cloudPullButton = document.getElementById("cloud-pull");
  refs.cloudSpaceHint = document.getElementById("cloud-space-hint");
  refs.cloudPanel = document.getElementById("workspace-cloud");
  refs.cloudCollaborationPanel = document.getElementById("cloud-collaboration-panel");
  refs.cloudCollaborationStatus = document.getElementById("cloud-collaboration-status");
  refs.cloudPresenceList = document.getElementById("cloud-presence-list");
  refs.cloudLiveActivity = document.getElementById("cloud-live-activity");
  refs.budgetAlertPanel = document.getElementById("budget-alert-panel");
  refs.budgetAlertStatus = document.getElementById("budget-alert-status");
  refs.budgetAlertEnabled = document.getElementById("budget-alert-enabled");
  refs.budgetAlertEmail = document.getElementById("budget-alert-email");
  refs.budgetAlertCooldown = document.getElementById("budget-alert-cooldown");
  refs.budgetAlertHint = document.getElementById("budget-alert-hint");
  refs.settingsPanel = document.getElementById("app-settings-panel");
  refs.settingsStatus = document.getElementById("app-settings-status");
  refs.settingsHint = document.getElementById("app-settings-hint");
  refs.settingTheme = document.getElementById("setting-theme");
  refs.settingLanguage = document.getElementById("setting-language");
  refs.settingAutoRestore = document.getElementById("setting-auto-restore");
  refs.settingShowAlerts = document.getElementById("setting-show-alerts");
  refs.settingShowSuggestions = document.getElementById("setting-show-suggestions");
  refs.historyPanel = document.getElementById("history-panel");
  refs.historyStatus = document.getElementById("history-status");
  refs.historyList = document.getElementById("history-list");
  refs.undoLastActionButton = document.getElementById("undo-last-action");
  refs.openSourceButton = document.getElementById("open-source");
  refs.saveSourceButton = document.getElementById("save-source");
  refs.saveDraftButton = document.getElementById("save-draft");
  refs.restoreDraftButton = document.getElementById("restore-draft");
  refs.restartButton = document.getElementById("restart-app");
  refs.addButton = document.getElementById("add-record");
  refs.exportMenu = document.getElementById("export-menu");
  refs.exportButton = document.getElementById("export-workbook");
  refs.exportMenuPanel = document.getElementById("export-menu-panel");
  refs.exportJournalButton = document.getElementById("export-journal");
  refs.exportCompleteButton = document.getElementById("export-complete");
  refs.mobileFab = document.getElementById("mobile-fab");
  refs.statusStrip = document.getElementById("workspace-status");
  refs.formKicker = document.getElementById("form-kicker");
  refs.cardsGrid = document.getElementById("cards-grid");
  refs.cardsEmpty = document.getElementById("cards-empty");
  refs.recapView = document.getElementById("recap-view");
  refs.layout = document.getElementById("workspace-layout");
  refs.editorArea = document.getElementById("editor-area");
  refs.cardsArea = document.getElementById("cards-area");
  refs.transactionsViewToggle = document.getElementById("transactions-view-toggle");
  refs.form = document.getElementById("record-form");
  refs.formFields = document.getElementById("form-fields");
  refs.formActions = document.getElementById("form-actions");
  refs.formTitle = document.getElementById("form-title");
  refs.formSubtitle = document.getElementById("form-subtitle");
  refs.saveButton = document.getElementById("save-record");
  refs.saveRecurringTemplateButton = document.getElementById("save-recurring-template");
  refs.cancelButton = document.getElementById("cancel-edit");
  refs.recordsLabel = document.getElementById("records-label");
  refs.recordsCount = document.getElementById("records-count");
  refs.columnsLabel = document.getElementById("columns-label");
  refs.columnsCount = document.getElementById("columns-count");
  refs.activeSheet = document.getElementById("active-sheet");
  refs.lastAction = document.getElementById("last-action");
  refs.metricMode = document.getElementById("metric-mode");
  refs.metricFile = document.getElementById("metric-file");
  refs.metricSave = document.getElementById("metric-save");
  refs.draftStatus = document.getElementById("draft-status");
  refs.installButton = document.getElementById("install-app");
  refs.appShellStatus = document.getElementById("app-shell-status");
  refs.libraryWarning = document.getElementById("library-warning");
  refs.cardsKicker = document.getElementById("cards-kicker");
  refs.cardsTitle = document.getElementById("cards-title");
  refs.cardsCaption = document.getElementById("cards-caption");
  refs.defaultEmptyMarkup = refs.cardsEmpty.innerHTML;
}

function bindEvents() {
  refs.fileInput.addEventListener("change", onFileSelected);
  refs.appTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setAppTab(button.dataset.appTab);
    });
  });
  refs.cloudMagicLinkButton.addEventListener("click", () => {
    void onCloudMagicLinkRequested();
  });
  refs.cloudEmailInput.addEventListener("input", onCloudEmailChanged);
  refs.cloudCodeInput.addEventListener("input", onCloudCodeChanged);
  refs.cloudSignOutButton.addEventListener("click", () => {
    void onCloudSignOutRequested();
  });
  refs.cloudCreateSpaceButton.addEventListener("click", () => {
    void onCloudCreateSpaceRequested();
  });
  refs.cloudJoinSpaceButton.addEventListener("click", () => {
    void onCloudJoinSpaceRequested();
  });
  refs.cloudPushButton.addEventListener("click", () => {
    void onCloudPublishRequested();
  });
  refs.cloudPullButton.addEventListener("click", () => {
    void onCloudRefreshRequested();
  });
  refs.budgetAlertEnabled.addEventListener("change", onBudgetAlertEnabledChanged);
  refs.budgetAlertEmail.addEventListener("input", onBudgetAlertEmailChanged);
  refs.budgetAlertCooldown.addEventListener("input", onBudgetAlertCooldownChanged);
  refs.openSourceButton.addEventListener("click", onOpenSourceRequested);
  refs.saveSourceButton.addEventListener("click", () => {
    void saveSourceWorkbook();
  });
  refs.saveDraftButton.addEventListener("click", onSaveDraftRequested);
  refs.restoreDraftButton.addEventListener("click", onRestoreDraftRequested);
  refs.restartButton.addEventListener("click", onRestartRequested);
  refs.recapYearSelect.addEventListener("change", onRecapYearChanged);
  refs.recapMonthTrigger.addEventListener("click", onRecapMonthTriggerClicked);
  refs.recapMonthPanel.addEventListener("click", onRecapMonthPanelClicked);
  refs.recapMonthSelect.addEventListener("change", onRecapMonthChanged);
  refs.recapRangeSelect.addEventListener("change", onRecapRangeChanged);
  refs.searchInput.addEventListener("input", onSearchChanged);
  refs.addButton.addEventListener("click", onToolbarActionRequested);
  refs.mobileFab?.addEventListener("click", startCreateMode);
  refs.exportButton.addEventListener("click", onExportMenuToggleRequested);
  refs.exportJournalButton?.addEventListener("click", () => {
    void onExportOptionRequested("journal");
  });
  refs.exportCompleteButton?.addEventListener("click", () => {
    void onExportOptionRequested("complete");
  });
  refs.installButton.addEventListener("click", onInstallApp);
  refs.form.addEventListener("submit", onSaveRecord);
  refs.form.addEventListener("input", onPlanEditorFieldChanged);
  refs.form.addEventListener("change", onPlanEditorFieldChanged);
  refs.welcomeScreen.addEventListener("click", onEmptyStateAction);
  refs.cardsEmpty.addEventListener("click", onEmptyStateAction);
  refs.formFields.addEventListener("click", onEmptyStateAction);
  refs.formFields.addEventListener("click", onRecurringTemplateAction);
  refs.formFields.addEventListener("click", onRecurringReviewAction);
  refs.formFields.addEventListener("input", onRecurringTemplateConfigChanged);
  refs.formFields.addEventListener("change", onRecurringTemplateConfigChanged);
  refs.formFields.addEventListener("input", onRecurringReviewDraftChanged);
  refs.formFields.addEventListener("change", onRecurringReviewDraftChanged);
  refs.formActions.addEventListener("click", onRecurringTemplateAction);
  refs.cancelButton.addEventListener("click", onEditorCancelRequested);
  refs.cardsGrid.addEventListener("click", onCardAction);
  refs.cardsGrid.addEventListener("click", onRecurringTemplateAction);
  refs.cardsGrid.addEventListener("click", onRecurringReviewAction);
  refs.cardsGrid.addEventListener("input", onRecurringTemplateConfigChanged);
  refs.cardsGrid.addEventListener("change", onRecurringTemplateConfigChanged);
  refs.cardsGrid.addEventListener("input", onRecurringReviewDraftChanged);
  refs.cardsGrid.addEventListener("change", onRecurringReviewDraftChanged);
  refs.transactionsViewToggle?.addEventListener("click", onTransactionsViewToggleClicked);
  refs.settingTheme.addEventListener("change", onThemeSettingChanged);
  refs.settingAutoRestore.addEventListener("change", onAutoRestoreSettingChanged);
  refs.settingLanguage.addEventListener("change", onLanguageSettingChanged);
  refs.settingShowAlerts.addEventListener("change", onShowAlertsSettingChanged);
  refs.settingShowSuggestions.addEventListener("change", onShowSuggestionsSettingChanged);
  refs.undoLastActionButton.addEventListener("click", () => {
    void onUndoLastActionRequested();
  });
  document.addEventListener("click", onDocumentClick);
  document.addEventListener("keydown", onDocumentKeyDown);
}

function syncLibraryState() {
  const ready = Boolean(window.XLSX);
  refs.libraryWarning.classList.toggle("hidden", ready);

  if (!ready) {
    setLastAction("Bibliotheque Excel indisponible");
  }
}

function setupAppShell() {
  renderAppShellState();

  window.addEventListener("online", renderAppShellState);
  window.addEventListener("offline", renderAppShellState);
  window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
  window.addEventListener("appinstalled", onAppInstalled);

  if (window.matchMedia) {
    const standaloneMedia = window.matchMedia("(display-mode: standalone)");
    if (typeof standaloneMedia.addEventListener === "function") {
      standaloneMedia.addEventListener("change", renderAppShellState);
    } else if (typeof standaloneMedia.addListener === "function") {
      standaloneMedia.addListener(renderAppShellState);
    }
  }

  registerAppShell();
}

function onBeforeInstallPrompt(event) {
  event.preventDefault();
  deferredInstallPrompt = event;
  renderAppShellState();
}

function onAppInstalled() {
  deferredInstallPrompt = null;
  renderAppShellState();
}

async function onInstallApp() {
  if (!deferredInstallPrompt) {
    renderAppShellState();
    return;
  }

  deferredInstallPrompt.prompt();

  try {
    await deferredInstallPrompt.userChoice;
  } catch (error) {
    console.error(error);
  } finally {
    deferredInstallPrompt = null;
    renderAppShellState();
  }
}

async function registerAppShell() {
  if (!("serviceWorker" in navigator) || !window.isSecureContext) {
    renderAppShellState();
    return;
  }

  try {
    await navigator.serviceWorker.register("service-worker.js");
    await navigator.serviceWorker.ready;
    appShellReady = true;
  } catch (error) {
    console.error(error);
    appShellReady = false;
  }

  renderAppShellState();
}

function renderAppShellState() {
  if (!refs.installButton) {
    return;
  }

  const standalone = isStandaloneMode();
  document.body.classList.toggle("native-app", isNativeAppRuntime());
  document.body.classList.toggle("native-android", isAndroidNativeRuntime());
  document.body.classList.toggle("standalone-shell", standalone);

  refs.installButton.disabled = standalone || !deferredInstallPrompt;
  refs.installButton.textContent = standalone ? t("share.installed") : t("share.install");
  refs.installButton.title = standalone
    ? (getCurrentLanguage() === "en" ? "This web version is already installed." : "Cette version web est déjà installée.")
    : deferredInstallPrompt
      ? (getCurrentLanguage() === "en" ? "Install the web version on this device." : "Installer la version web sur cet appareil.")
      : (getCurrentLanguage() === "en" ? "Installation will be offered when the browser makes it available." : "L'installation sera proposée quand le navigateur la rendra disponible.");
}

function getSupabaseRuntime() {
  return window.supabase || null;
}

function getSupabaseConfig() {
  const rawConfig = window.BUDGET_SUPABASE_CONFIG || {};

  return {
    url: String(rawConfig.url || "").trim(),
    anonKey: String(rawConfig.anonKey || "").trim(),
    defaultSpaceName: String(rawConfig.defaultSpaceName || "Budget partage 2025").trim() || "Budget partage 2025",
    budgetAlertFunctionName: String(rawConfig.budgetAlertFunctionName || "budget-alert-email").trim(),
    budgetAlertEmail: String(rawConfig.budgetAlertEmail || "").trim().toLowerCase(),
    budgetAlertCooldownHours: Math.max(1, Number(rawConfig.budgetAlertCooldownHours) || 12),
  };
}

function onCloudEmailChanged(event) {
  state.cloud.email = String(event.target.value || "").trim();
  persistDraftIfPossible();
}

function onCloudCodeChanged(event) {
  state.cloud.space.joinCode = String(event.target.value || "").trim().toLowerCase();
  persistDraftIfPossible();
}

function onBudgetAlertEnabledChanged(event) {
  state.cloud.alerts.enabled = Boolean(event.target.checked);
  persistDraftIfPossible();
  renderCloudPanel();
}

function onBudgetAlertEmailChanged(event) {
  state.cloud.alerts.recipientEmail = String(event.target.value || "").trim().toLowerCase();
  persistDraftIfPossible();
  renderCloudPanel();
}

function onBudgetAlertCooldownChanged(event) {
  state.cloud.alerts.cooldownHours = Math.min(
    168,
    Math.max(1, Number(event.target.value) || createDefaultBudgetAlertSettings().cooldownHours)
  );
  persistDraftIfPossible();
  renderCloudPanel();
}

function onAutoRestoreSettingChanged(event) {
  state.settings.autoRestoreDraft = Boolean(event.target.checked);
  persistUiSettings();
  if (!state.settings.autoRestoreDraft && state.mode !== "budget") {
    setStartupWelcomeMode(true);
  }
  renderCloudPanel();
}

function onLanguageSettingChanged(event) {
  state.settings.language = normalizeUiLanguage(event.target.value);
  persistUiSettings();
  renderAll();
}

function onThemeSettingChanged(event) {
  state.settings.theme = normalizeUiTheme(event.target.value);
  persistUiSettings();
  applyUiTheme();
  renderAll();
}

function onShowAlertsSettingChanged(event) {
  state.settings.showBudgetFraAlerts = Boolean(event.target.checked);
  persistUiSettings();
  renderAll();
}

function onShowSuggestionsSettingChanged(event) {
  state.settings.showBudgetFraSuggestions = Boolean(event.target.checked);
  persistUiSettings();
  renderAll();
}

function onTransactionsViewToggleClicked(event) {
  const button = event.target.closest("[data-transaction-view]");
  if (!button) {
    return;
  }

  const nextView = normalizeTransactionView(button.dataset.transactionView);
  if (nextView === getCurrentTransactionView()) {
    return;
  }

  state.settings.transactionView = nextView;
  persistUiSettings();
  renderCards();
  renderControls();
}

function clonePlanTemplateRows(rows) {
  return (Array.isArray(rows) ? rows : [])
    .map((row) => ({
      label: String(row?.label || "").trim(),
      plan: normalizeAmountValue(row?.plan),
      period: normalizePlanPeriod(row?.period),
      group: normalizePlanGroup(row?.group, row?.label),
    }))
    .filter((row) => row.label);
}

function recordHistoryEvent(label) {
  const normalizedLabel = String(label || "").trim();
  if (!normalizedLabel) {
    return;
  }

  state.history.recentEvents.unshift({
    id: createId(),
    label: normalizedLabel,
    createdAt: new Date().toISOString(),
  });
  state.history.recentEvents = state.history.recentEvents.slice(0, HISTORY_EVENT_LIMIT);
  persistHistoryState();
}

function pushUndoEntry(entry, label) {
  const normalizedEntry = sanitizeHistoryEntry(entry);
  if (!normalizedEntry) {
    return;
  }

  state.history.undoStack.unshift(normalizedEntry);
  state.history.undoStack = state.history.undoStack.slice(0, HISTORY_STACK_LIMIT);
  recordHistoryEvent(label);
  persistHistoryState();
}

function canUndoLastAction() {
  return Array.isArray(state.history.undoStack) && state.history.undoStack.length > 0;
}

async function syncAfterUndo(actionLabel) {
  if (canUseSupabaseCloud()) {
    try {
      await enqueueCloudSync(() => publishLocalBudgetToSupabase());
    } catch (error) {
      console.error(error);
      setLastAction(`${actionLabel} - sync cloud en echec`);
      renderAll();
    }
  }

  await enqueueSourceSave({
    automatic: true,
    baseAction: actionLabel,
  });
}

async function onUndoLastActionRequested() {
  if (!canUndoLastAction()) {
    setLastAction("Aucune action recente a annuler.");
    renderAll();
    return;
  }

  const entry = state.history.undoStack.shift();
  persistHistoryState();
  if (!entry) {
    return;
  }

  let actionLabel = "Dernière action annulée";

  if (entry.kind === "create-record" && entry.record?.__id) {
    state.budget.rows = state.budget.rows.filter((row) => row.__id !== entry.record.__id);
    actionLabel = `Creation annulee: ${entry.record.Categories || entry.record.Date || "transaction"}`;
  } else if (entry.kind === "add-recurring-batch" && entry.records?.length) {
    const deletedIds = new Set(entry.records.map((record) => record.__id).filter(Boolean));
    state.budget.rows = state.budget.rows.filter((row) => !deletedIds.has(row.__id));
    if (entry.recurringKeys?.length) {
      unmarkRecurringOccurrencesByKeys(entry.recurringKeys);
    } else {
      unmarkRecurringOccurrencesFromRecords(entry.records);
    }
    if (entry.templateChanges?.length) {
      entry.templateChanges.forEach((change) => {
        updateRecurringTemplateSettings(change.templateId, {
          value: change.previousValue,
        });
      });
    }
    actionLabel = entry.records.length > 1
      ? `${entry.records.length} transactions récurrentes annulées`
      : `Transaction récurrente annulée: ${entry.records[0].Categories || entry.records[0].Date || "transaction"}`;
  } else if (entry.kind === "update-record" && entry.previousRecord?.__id) {
    const index = state.budget.rows.findIndex((row) => row.__id === entry.previousRecord.__id);
    if (index >= 0) {
      state.budget.rows.splice(index, 1, sanitizeBudgetRow(entry.previousRecord));
    }
    actionLabel = `Modification annulee: ${entry.previousRecord.Categories || entry.previousRecord.Date || "transaction"}`;
  } else if (entry.kind === "delete-record" && entry.record) {
    state.budget.rows.push(sanitizeBudgetRow(entry.record));
    ensureBudgetCategoryAvailable(entry.record.Categories);
    actionLabel = `Suppression annulee: ${entry.record.Categories || entry.record.Date || "transaction"}`;
  } else if (entry.kind === "update-plan" && entry.previousTemplate?.length) {
    state.recap.available = true;
    state.recap.planTemplate = resolvePlanTemplate(clonePlanTemplateRows(entry.previousTemplate));
    state.planEditing = false;
    actionLabel = "Budget planifié restaure";
  }

  if (state.budget.rows.length) {
    sortBudgetRowsInPlace(state.budget.rows);
  }

  state.editingIndex = null;
  state.editorMode = "create";
  persistDraft();
  recordHistoryEvent(actionLabel);
  setLastAction(actionLabel);
  renderAll();
  await syncAfterUndo(actionLabel);
}

function hasSupabaseSession() {
  return Boolean(state.cloud.user);
}

function hasCloudSpaceSelected() {
  return Boolean(state.cloud.space.id);
}

function canUseSupabaseCloud() {
  return Boolean(supabaseClient && hasSupabaseSession() && hasCloudSpaceSelected());
}

function getCloudDisplayName(emailValue = state.cloud.user?.email || state.cloud.email || "") {
  const email = String(emailValue || "").trim().toLowerCase();
  if (!email) {
    return "Collaborateur";
  }

  const localPart = email.split("@")[0] || email;
  return localPart.replace(/[._-]+/g, " ").trim() || email;
}

function getAppTabLabel(tab = state.appTab) {
  switch (normalizeAppTab(tab)) {
    case APP_TAB_DASHBOARD:
      return t("tab.dashboard.label");
    case APP_TAB_PLAN:
      return t("tab.plan.label");
    case APP_TAB_TRANSACTIONS:
      return t("tab.transactions.label");
    case APP_TAB_FORM:
      return t("tab.form.label");
    case APP_TAB_RECURRING:
      return t("tab.recurring.label");
    case APP_TAB_ANALYSIS:
      return t("tab.analysis.label");
    case APP_TAB_SHARE:
      return t("tab.share.label");
    default:
      return t("tab.plan.label");
  }
}

function buildCurrentEditActivityLabel() {
  if (state.appTab === APP_TAB_PLAN && state.planEditing) {
    return "modifie le budget";
  }

  if (state.appTab === APP_TAB_FORM) {
    if (state.editorMode === "edit" && state.editingIndex !== null) {
      const currentRow = state.budget.rows[state.editingIndex];
      const rowLabel = currentRow?.Categories || currentRow?.Date || "une transaction";
      return `modifie ${rowLabel}`;
    }

    return "prepare une nouvelle transaction";
  }

  if (state.appTab === APP_TAB_RECURRING) {
    return "gère les transactions récurrentes";
  }

  return "";
}

function buildCloudPresencePayload() {
  return {
    clientKey: state.cloud.collaboration.clientKey,
    userId: state.cloud.user?.id || "",
    email: String(state.cloud.user?.email || state.cloud.email || "").trim().toLowerCase(),
    displayName: getCloudDisplayName(),
    appTab: state.appTab,
    appTabLabel: getAppTabLabel(),
    activityLabel: buildCurrentEditActivityLabel(),
    updatedAt: new Date().toISOString(),
  };
}

async function updateCloudPresenceTrack() {
  if (!supabaseRealtimeChannel || !canUseSupabaseCloud()) {
    return;
  }

  try {
    await supabaseRealtimeChannel.track(buildCloudPresencePayload());
  } catch (error) {
    console.error(error);
  }
}

function setCloudLiveActivity(message) {
  state.cloud.collaboration.liveMessage = String(message || "").trim();
  state.cloud.collaboration.lastEventAt = new Date().toISOString();
}

function resetCloudCollaborationState() {
  const currentClientKey = state.cloud.collaboration?.clientKey || createId();
  state.cloud.collaboration = createEmptyCloudCollaborationState(currentClientKey);
}

function handleCloudPresenceSync() {
  if (!supabaseRealtimeChannel) {
    resetCloudCollaborationState();
    renderAll();
    return;
  }

  const presenceState = supabaseRealtimeChannel.presenceState();
  const entries = [];

  Object.entries(presenceState).forEach(([presenceKey, metas]) => {
    const metaList = Array.isArray(metas) ? metas : [];
    metaList.forEach((meta) => {
      entries.push({
        presenceKey,
        clientKey: String(meta?.clientKey || presenceKey || ""),
        userId: String(meta?.userId || ""),
        email: String(meta?.email || "").trim().toLowerCase(),
        displayName: String(meta?.displayName || getCloudDisplayName(meta?.email)).trim(),
        appTab: normalizeAppTab(meta?.appTab),
        appTabLabel: String(meta?.appTabLabel || getAppTabLabel(meta?.appTab)).trim(),
        activityLabel: String(meta?.activityLabel || "").trim(),
        updatedAt: String(meta?.updatedAt || ""),
      });
    });
  });

  entries.sort((left, right) => {
    const leftSelf = left.clientKey === state.cloud.collaboration.clientKey ? 0 : 1;
    const rightSelf = right.clientKey === state.cloud.collaboration.clientKey ? 0 : 1;
    if (leftSelf !== rightSelf) {
      return leftSelf - rightSelf;
    }
    return left.displayName.localeCompare(right.displayName, "fr", { sensitivity: "base" });
  });

  state.cloud.collaboration.onlineUsers = entries;
  renderAll();
}

function formatCloudCollaborationMessage(action, payload = {}) {
  const displayName = String(payload.displayName || getCloudDisplayName(payload.email)).trim() || "Quelqu'un";
  const activityLabel = String(payload.activityLabel || "").trim();

  if (action === "join") {
    return `${displayName} est en ligne.`;
  }

  if (action === "leave") {
    return `${displayName} a quitte la session.`;
  }

  if (action === "editing") {
    return activityLabel
      ? `${displayName} ${activityLabel}.`
      : `${displayName} modifie l'application.`;
  }

  if (action === "saved") {
    return activityLabel
      ? `${displayName} a enregistre ${activityLabel}.`
      : `${displayName} a enregistre une mise a jour.`;
  }

  if (action === "deleted") {
    return activityLabel
      ? `${displayName} a supprime ${activityLabel}.`
      : `${displayName} a supprime un element.`;
  }

  return `${displayName} est actif dans l'application.`;
}

function onCloudPresenceJoin({ newPresences }) {
  const entry = Array.isArray(newPresences) ? newPresences[0] : null;
  if (!entry || String(entry.clientKey || "") === state.cloud.collaboration.clientKey) {
    return;
  }

  setCloudLiveActivity(formatCloudCollaborationMessage("join", entry));
  renderAll();
}

function onCloudPresenceLeave({ leftPresences }) {
  const entry = Array.isArray(leftPresences) ? leftPresences[0] : null;
  if (!entry || String(entry.clientKey || "") === state.cloud.collaboration.clientKey) {
    return;
  }

  setCloudLiveActivity(formatCloudCollaborationMessage("leave", entry));
  renderAll();
}

function onCloudActivityBroadcast({ payload }) {
  if (!payload || String(payload.clientKey || "") === state.cloud.collaboration.clientKey) {
    return;
  }

  setCloudLiveActivity(formatCloudCollaborationMessage(payload.action, payload));
  renderAll();
}

async function sendCloudActivityBroadcast(action, activityLabel = "") {
  if (!supabaseRealtimeChannel || !canUseSupabaseCloud()) {
    return;
  }

  try {
    await supabaseRealtimeChannel.send({
      type: "broadcast",
      event: "activity",
      payload: {
        action,
        clientKey: state.cloud.collaboration.clientKey,
        userId: state.cloud.user?.id || "",
        email: String(state.cloud.user?.email || state.cloud.email || "").trim().toLowerCase(),
        displayName: getCloudDisplayName(),
        appTab: state.appTab,
        appTabLabel: getAppTabLabel(),
        activityLabel: String(activityLabel || "").trim(),
        sentAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error(error);
  }
}

function canUseBudgetAlertEmails() {
  const config = getSupabaseConfig();
  return canUseSupabaseCloud() && Boolean(config.budgetAlertFunctionName) && state.cloud.alerts.enabled;
}

function getBudgetAlertRecipientEmail() {
  const config = getSupabaseConfig();
  return String(
    state.cloud.alerts.recipientEmail ||
    config.budgetAlertEmail ||
    state.cloud.user?.email ||
    state.cloud.email ||
    ""
  ).trim().toLowerCase();
}

function isBudgetAlertSummaryLabel(label) {
  const normalized = normalizeHeaderName(label);
  return normalized === "total savings";
}

function hasLocalBudgetData() {
  return state.mode === "budget" && (
    state.budget.rows.length > 0 ||
    state.budget.categories.length > 0 ||
    state.recap.planTemplate.length > 0
  );
}

function hasStoredBudgetDraft() {
  const draft = readStoredDraft();
  return Boolean(
    draft &&
    draft.mode === "budget" &&
    (
      (Array.isArray(draft.rows) && draft.rows.length > 0) ||
      (Array.isArray(draft.categories) && draft.categories.length > 0) ||
      (Array.isArray(draft.recap?.planTemplate) && draft.recap.planTemplate.length > 0)
    )
  );
}

function ensureLocalBudgetDataReady() {
  if (hasLocalBudgetData()) {
    return true;
  }

  if (!hasStoredBudgetDraft()) {
    return false;
  }

  const restored = restoreDraft();
  if (restored) {
    renderAll();
  }

  return hasLocalBudgetData();
}

function buildSupabaseRedirectUrl() {
  if (canUseAndroidAuthRedirect()) {
    return "io.danepip.budget3://auth";
  }

  return `${window.location.origin}${window.location.pathname}`;
}

function buildUrlWithoutSupabaseAuthParams(url) {
  const nextUrl = new URL(url.toString());
  const removableQueryParams = [
    "code",
    "token_hash",
    "type",
    "error",
    "error_code",
    "error_description",
  ];

  for (const paramName of removableQueryParams) {
    nextUrl.searchParams.delete(paramName);
  }

  const hashParams = new URLSearchParams(nextUrl.hash.startsWith("#") ? nextUrl.hash.slice(1) : "");
  const removableHashParams = [
    "access_token",
    "refresh_token",
    "expires_at",
    "expires_in",
    "token_type",
    "type",
    "provider_token",
    "provider_refresh_token",
  ];

  for (const paramName of removableHashParams) {
    hashParams.delete(paramName);
  }

  const remainingHash = hashParams.toString();
  nextUrl.hash = remainingHash ? `#${remainingHash}` : "";
  return nextUrl;
}

function clearSupabaseAuthParamsFromLocation(urlValue = window.location.href) {
  const cleanedUrl = buildUrlWithoutSupabaseAuthParams(new URL(urlValue.toString()));
  const currentLocation = String(window.location.href);
  const targetLocation = String(urlValue || "");

  if (targetLocation !== currentLocation) {
    return cleanedUrl;
  }

  const nextLocation = `${cleanedUrl.pathname}${cleanedUrl.search}${cleanedUrl.hash}`;
  window.history.replaceState({}, document.title, nextLocation);
  return cleanedUrl;
}

function describeSupabaseError(error, fallbackMessage) {
  const rawMessage = String(
    error?.message ||
    error?.error_description ||
    error?.description ||
    ""
  ).trim();
  const rawCode = String(error?.code || error?.error_code || "").trim();
  const statusCode = Number(error?.status || error?.statusCode || 0);
  const haystack = `${rawMessage} ${rawCode}`.toLowerCase();

  if (
    statusCode === 429 ||
    haystack.includes("rate limit") ||
    haystack.includes("too many requests") ||
    haystack.includes("over_email_send_rate_limit") ||
    haystack.includes("over_request_rate_limit")
  ) {
    return `${fallbackMessage} Supabase limite les renvois: attendez 60 secondes avant une nouvelle demande sur le meme email. Avec le fournisseur email integre, le projet est aussi limite a 2 emails par heure.`;
  }

  if (haystack.includes("redirect") || haystack.includes("site url")) {
    return `${fallbackMessage} Verifiez aussi Site URL et Redirect URLs dans Supabase Auth.`;
  }

  if (haystack.includes("auth_required") || haystack.includes("jwt")) {
    return `${fallbackMessage} La session Supabase n'est pas reconnue. Deconnectéz-vous puis reconnectéz-vous avec le lien magique.`;
  }

  if (haystack.includes("function") && haystack.includes("create_budget_space")) {
    return `${fallbackMessage} La fonction create_budget_space n'est pas disponible ou pas a jour dans Supabase. Relancez le script schema.sql complet dans SQL Editor.`;
  }

  if (isSupabaseRecurringSchemaMissing(error)) {
    return `${fallbackMessage} ${t("cloud.recurringSchemaOutdated")}`;
  }

  if (rawMessage) {
    return `${fallbackMessage} ${rawMessage}`;
  }

  return fallbackMessage;
}

function isSupabaseRecurringSchemaMissing(error) {
  const haystack = String(
    `${error?.message || ""} ${error?.details || ""} ${error?.hint || ""} ${error?.code || ""}`
  ).toLowerCase();

  if (!haystack) {
    return false;
  }

  return [
    "budget_recurring_templates",
    "generated_keys",
    "dismissed_keys",
    "template_id",
    "start_date",
    "auto_create",
    "sort_order",
  ].some((needle) => haystack.includes(needle));
}

function buildRecurringSchemaWarningMessage() {
  return t("cloud.recurringSchemaOutdated");
}

async function consumeSupabaseAuthCallback(urlValue = window.location.href) {
  if (!supabaseClient) {
    return false;
  }

  const currentUrl = new URL(urlValue.toString());
  const queryParams = currentUrl.searchParams;
  const hashParams = new URLSearchParams(currentUrl.hash.startsWith("#") ? currentUrl.hash.slice(1) : "");
  const authCode = String(queryParams.get("code") || "").trim();
  const tokenHash = String(queryParams.get("token_hash") || "").trim();
  const otpType = String(queryParams.get("type") || hashParams.get("type") || "email").trim() || "email";
  const accessToken = String(hashParams.get("access_token") || "").trim();
  const refreshToken = String(hashParams.get("refresh_token") || "").trim();

  try {
    if (authCode && typeof supabaseClient.auth.exchangeCodeForSession === "function") {
      const { error } = await supabaseClient.auth.exchangeCodeForSession(authCode);
        if (error) {
          throw error;
        }

        clearSupabaseAuthParamsFromLocation(urlValue);
        setCloudStatus("Connexion Supabase confirmee.");
        setLastAction("Lien magique Supabase confirme");
        return true;
    }

    if (tokenHash && typeof supabaseClient.auth.verifyOtp === "function") {
      const { error } = await supabaseClient.auth.verifyOtp({
        token_hash: tokenHash,
        type: otpType,
      });
        if (error) {
          throw error;
        }

        clearSupabaseAuthParamsFromLocation(urlValue);
        setCloudStatus("Connexion Supabase confirmee.");
        setLastAction("Lien magique Supabase confirme");
        return true;
    }

    if (
      accessToken &&
      refreshToken &&
      typeof supabaseClient.auth.setSession === "function"
    ) {
      const { error } = await supabaseClient.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
        if (error) {
          throw error;
        }

        clearSupabaseAuthParamsFromLocation(urlValue);
        setCloudStatus("Connexion Supabase confirmee.");
        setLastAction("Session Supabase restauree");
        return true;
    }
  } catch (error) {
      console.error(error);
      const message = describeSupabaseError(error, "Le retour du lien magique Supabase a echoue.");
      setCloudStatus(message);
      setLastAction(message);
      clearSupabaseAuthParamsFromLocation(urlValue);
      renderAll();
      return false;
    }

    return false;
}

async function handleNativeSupabaseRedirect(urlValue) {
  const authUrl = String(urlValue || "").trim();
  if (!authUrl) {
    return false;
  }

  try {
    setCloudBusy(true);
    setCloudStatus("Finalisation de la connexion Supabase...");
    renderAll();

    const handled = await consumeSupabaseAuthCallback(authUrl);
    if (handled) {
      await syncSupabaseSession();
    }
    return handled;
  } finally {
    setCloudBusy(false);
    renderAll();
  }
}

function bindNativeSupabaseRedirectListener() {
  if (nativeSupabaseRedirectListenerBound) {
    return;
  }

  window.addEventListener("budget-auth-redirect", (event) => {
    const urlValue = String(event?.detail?.url || "").trim();
    if (!urlValue) {
      return;
    }

    void handleNativeSupabaseRedirect(urlValue);
  });

  nativeSupabaseRedirectListenerBound = true;
}

async function consumePendingNativeSupabaseRedirect() {
  if (!canUseAndroidAuthRedirect()) {
    return false;
  }

  try {
    const result = await getBudgetAuthPlugin().consumePendingAuthRedirect();
    const pendingUrl = String(result?.url || "").trim();
    if (!pendingUrl) {
      return false;
    }

    return await handleNativeSupabaseRedirect(pendingUrl);
  } catch (error) {
    console.error(error);
    return false;
  }
}

function setCloudStatus(message) {
  state.cloud.status = message;
}

function setCloudBusy(nextBusy) {
  state.cloud.syncBusy = Boolean(nextBusy);
}

function clearCloudRefreshTimer() {
  if (!cloudRefreshTimer) {
    return;
  }

  window.clearTimeout(cloudRefreshTimer);
  cloudRefreshTimer = null;
}

function queueCloudRefresh() {
  clearCloudRefreshTimer();

  if (!canUseSupabaseCloud()) {
    return;
  }

  cloudRefreshTimer = window.setTimeout(() => {
    cloudRefreshTimer = null;
    void loadBudgetFromSupabase(state.cloud.space.id, {
      silent: true,
      preserveLastAction: true,
    }).catch(() => undefined);
  }, 700);
}

async function initSupabaseIntegration() {
  const runtime = getSupabaseRuntime();
  const config = getSupabaseConfig();

  if (!runtime || !config.url || !config.anonKey) {
    state.cloud.configured = false;
    state.cloud.ready = false;
    setCloudStatus("Supabase non configuré. Renseignez supabase.config.js pour activer le partage.");
    renderAll();
    return;
  }

  try {
    supabaseClient = runtime.createClient(config.url, config.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
    state.cloud.configured = true;
    state.cloud.ready = true;
    setCloudStatus("Supabase configuré. Connectez-vous pour partager le budget.");
    bindNativeSupabaseRedirectListener();

    if (supabaseAuthSubscription?.data?.subscription?.unsubscribe) {
      supabaseAuthSubscription.data.subscription.unsubscribe();
    }

    supabaseAuthSubscription = supabaseClient.auth.onAuthStateChange((_event, session) => {
      state.cloud.session = session || null;
      state.cloud.user = session?.user || null;
      if (session?.user?.email) {
        state.cloud.email = session.user.email;
      }

      if (!state.cloud.user) {
        stopSupabaseRealtime();
        setCloudStatus("Supabase configuré. Connectez-vous pour partager le budget.");
        persistDraftIfPossible();
        renderAll();
        return;
      }

      setCloudStatus(hasCloudSpaceSelected()
        ? `Connecté à Supabase. Espace actif : ${state.cloud.space.name || state.cloud.space.joinCode || "budget partagé"}.`
        : "Connecté à Supabase. Créez ou rejoignez un espace partagé.");
      persistDraftIfPossible();
      renderAll();

      if (hasCloudSpaceSelected()) {
        void attachToCurrentCloudSpace({ silent: true, preserveLastAction: true });
      }
    });

    await consumeSupabaseAuthCallback();
    await consumePendingNativeSupabaseRedirect();
    await syncSupabaseSession();
  } catch (error) {
    console.error(error);
    state.cloud.configured = false;
    state.cloud.ready = false;
    setCloudStatus("Supabase n'a pas pu être initialisé.");
    renderAll();
  }
}

async function syncSupabaseSession() {
  if (!supabaseClient) {
    return;
  }

  const { data, error } = await supabaseClient.auth.getSession();
  if (error) {
    console.error(error);
    setCloudStatus("Connexion Supabase indisponible pour le moment.");
    renderAll();
    return;
  }

  state.cloud.session = data.session || null;
  state.cloud.user = data.session?.user || null;
  if (data.session?.user?.email) {
    state.cloud.email = data.session.user.email;
  }

  if (state.cloud.user) {
    setCloudStatus(hasCloudSpaceSelected()
      ? `Connecté à Supabase. Espace actif : ${state.cloud.space.name || state.cloud.space.joinCode || "budget partagé"}.`
      : "Connecté à Supabase. Créez ou rejoignez un espace partagé.");
    if (hasCloudSpaceSelected()) {
      await attachToCurrentCloudSpace({
        silent: true,
        preserveLastAction: true,
      });
    }
  }

  renderAll();
}

function normalizeCloudSpaceRecord(record) {
  return {
    id: String(record?.space_id || record?.id || "").trim(),
    name: String(record?.space_name || record?.name || "").trim(),
    joinCode: String(record?.join_code || record?.joinCode || "").trim(),
  };
}

function applyCloudSpaceRecord(record) {
  const normalized = normalizeCloudSpaceRecord(record);
  state.cloud.space = normalized;

  if (refs.cloudCodeInput) {
    refs.cloudCodeInput.value = normalized.joinCode;
  }
}

function persistDraftIfPossible() {
  if (state.mode === "budget") {
    persistDraft();
  }
}

async function onCloudMagicLinkRequested() {
  if (!supabaseClient || !state.cloud.ready) {
    setLastAction("Supabase n'est pas encore configuré.");
    renderAll();
    return;
  }

  const email = String(refs.cloudEmailInput.value || "").trim().toLowerCase();
  if (!email) {
    setLastAction("Saisissez votre email pour recevoir le lien magique.");
    renderAll();
    return;
  }

  try {
    state.cloud.email = email;
    setCloudBusy(true);
    setCloudStatus("Envoi du lien magique en cours...");
    renderAll();

    const { error } = await supabaseClient.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: buildSupabaseRedirectUrl(),
      },
    });

      if (error) {
        throw error;
      }

      setCloudStatus(canUseAndroidAuthRedirect()
      ? `Lien magique envoyé à ${email}. Ouvrez votre email puis revenez dans l'app Budget.`
        : `Lien magique envoyé à ${email}. Ouvrez votre email pour terminer la connexion.`);
      setLastAction(`Lien magique Supabase envoye a ${email}`);
  } catch (error) {
    console.error(error);
    const message = describeSupabaseError(error, "Le lien magique n'a pas pu être envoyé.");
    setCloudStatus(message);
    setLastAction(message);
  } finally {
    setCloudBusy(false);
    renderAll();
  }
}

async function onCloudSignOutRequested() {
  if (!supabaseClient || !hasSupabaseSession()) {
    setLastAction("Aucune session Supabase active.");
    renderAll();
    return;
  }

  try {
    setCloudBusy(true);
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      throw error;
    }

    stopSupabaseRealtime();
    state.cloud.session = null;
    state.cloud.user = null;
    setCloudStatus("Session Supabase fermee.");
    setLastAction("Déconnexion Supabase terminée");
  } catch (error) {
    console.error(error);
    setCloudStatus("La déconnexion Supabase a échoué.");
    setLastAction("Déconnexion Supabase impossible");
  } finally {
    setCloudBusy(false);
    renderAll();
  }
}

async function onCloudCreateSpaceRequested() {
  if (!supabaseClient || !hasSupabaseSession()) {
    setLastAction("Connectez-vous d'abord a Supabase.");
    renderAll();
    return;
  }

  const suggestedName = state.workbookName
    ? state.workbookName.replace(/\.(xlsx|xls|csv)$/i, "")
    : getSupabaseConfig().defaultSpaceName;
  const desiredName = String(window.prompt("Nom du budget partagé", suggestedName) || "").trim();

  if (!desiredName) {
    setLastAction("Création d'espace annulée.");
    renderAll();
    return;
  }

  try {
    setCloudBusy(true);
    setCloudStatus("Création de l'espace partagé...");
    renderAll();

    const { data, error } = await supabaseClient.rpc("create_budget_space", {
      input_space_name: desiredName,
    });

    if (error) {
      throw error;
    }

    const createdSpace = Array.isArray(data) ? data[0] : data;
    applyCloudSpaceRecord(createdSpace);
    setCloudStatus(`Espace partagé créé : ${state.cloud.space.name}.`);
    setLastAction(`Espace cloud cree: ${state.cloud.space.name}`);

    await attachToCurrentCloudSpace({
      silent: true,
      preserveLastAction: true,
    });

    if (ensureLocalBudgetDataReady()) {
      await publishLocalBudgetToSupabase();
    } else {
      setCloudStatus(`Espace partagé créé : ${state.cloud.space.name}. Chargez ou restaurez un budget local, puis cliquez sur Publier local.`);
      setLastAction(`Espace cloud cree: ${state.cloud.space.name} - aucune donnée locale détectée`);
    }
  } catch (error) {
    console.error(error);
    const message = describeSupabaseError(error, "L'espace partagé n'a pas pu être créé.");
    setCloudStatus(message);
    setLastAction(message);
  } finally {
    setCloudBusy(false);
    renderAll();
  }
}

async function onCloudJoinSpaceRequested() {
  if (!supabaseClient || !hasSupabaseSession()) {
    setLastAction("Connectez-vous d'abord a Supabase.");
    renderAll();
    return;
  }

  const joinCode = String(refs.cloudCodeInput.value || "").trim().toLowerCase();
  if (!joinCode) {
    setLastAction("Saisissez le code de l'espace partagé.");
    renderAll();
    return;
  }

  try {
    setCloudBusy(true);
    setCloudStatus("Connexion à l'espace partagé...");
    renderAll();

    const { data, error } = await supabaseClient.rpc("join_budget_space", {
      space_join_code: joinCode,
    });

    if (error) {
      throw error;
    }

    const joinedSpace = Array.isArray(data) ? data[0] : data;
    applyCloudSpaceRecord(joinedSpace);
    setCloudStatus(`Espace partagé rejoint : ${state.cloud.space.name}.`);
    setLastAction(`Espace cloud rejoint: ${state.cloud.space.name}`);

    const shouldLoadCloud = !hasLocalBudgetData() ||
      window.confirm("Charger les données de cet espace cloud et remplacer les données locales visibles ?");

    if (shouldLoadCloud) {
      await loadBudgetFromSupabase(state.cloud.space.id, {
        silent: true,
        preserveLastAction: true,
      });
    } else {
      await attachToCurrentCloudSpace({
        silent: true,
        preserveLastAction: true,
      });
    }
  } catch (error) {
    console.error(error);
    const message = describeSupabaseError(error, "Impossible de rejoindre cet espace partagé.");
    setCloudStatus(message);
    setLastAction(message);
  } finally {
    setCloudBusy(false);
    renderAll();
  }
}

async function onCloudPublishRequested() {
  if (!canUseSupabaseCloud()) {
    setLastAction("Connectez-vous et choisissez un espace cloud avant la publication.");
    renderAll();
    return;
  }

  if (!ensureLocalBudgetDataReady()) {
    setLastAction("Aucune donnée locale à publier vers Supabase.");
    setCloudStatus("Aucune donnée locale détectée. Chargez un budget ou restaurez le brouillon local avant la publication.");
    renderAll();
    return;
  }

  await publishLocalBudgetToSupabase();
}

async function onCloudRefreshRequested() {
  if (!canUseSupabaseCloud()) {
    setLastAction("Connectez-vous et choisissez un espace cloud avant de recharger.");
    renderAll();
    return;
  }

  try {
    setCloudBusy(true);
    await loadBudgetFromSupabase(state.cloud.space.id);
    setLastAction("Budget recharge depuis Supabase.");
  } catch (error) {
    console.error(error);
    setLastAction("Le rechargement depuis Supabase a echoue.");
  } finally {
    setCloudBusy(false);
    renderAll();
  }
}

async function attachToCurrentCloudSpace(options = {}) {
  if (!canUseSupabaseCloud()) {
    return;
  }

  await loadCloudSpaceMetadata(state.cloud.space.id, options);
  startSupabaseRealtime(state.cloud.space.id);
}

async function loadCloudSpaceMetadata(spaceId, options = {}) {
  if (!supabaseClient || !spaceId) {
    return;
  }

  const { data, error } = await supabaseClient
    .from("budget_spaces")
    .select("id, name, join_code")
    .eq("id", spaceId)
    .maybeSingle();

  if (error) {
    console.error(error);
    if (!options.silent) {
      setCloudStatus("Impossible de lire les informations de l'espace Supabase.");
    }
    renderAll();
    return;
  }

  if (data) {
    applyCloudSpaceRecord(data);
    if (!options.silent) {
      setCloudStatus(`Espace partage actif: ${state.cloud.space.name}.`);
    }
    persistDraftIfPossible();
    renderAll();
  }
}

function startSupabaseRealtime(spaceId) {
  if (!supabaseClient || !spaceId) {
    return;
  }

  const currentTopic = `budget-space-${spaceId}`;
  if (supabaseRealtimeChannel?.topic === currentTopic) {
    void updateCloudPresenceTrack();
    return;
  }

  stopSupabaseRealtime();

  let channel = supabaseClient
    .channel(currentTopic, {
      config: {
        presence: {
          key: state.cloud.collaboration.clientKey,
        },
      },
    })
    .on("presence", { event: "sync" }, handleCloudPresenceSync)
    .on("presence", { event: "join" }, onCloudPresenceJoin)
    .on("presence", { event: "leave" }, onCloudPresenceLeave)
    .on("broadcast", { event: "activity" }, onCloudActivityBroadcast)
    .on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "budget_transactions",
      filter: `space_id=eq.${spaceId}`,
    }, queueCloudRefresh)
    .on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "budget_categories",
      filter: `space_id=eq.${spaceId}`,
    }, queueCloudRefresh)
    .on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "budget_plan_rows",
      filter: `space_id=eq.${spaceId}`,
    }, queueCloudRefresh);

  if (recurringSupabaseSchemaReady) {
    channel = channel.on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "budget_recurring_templates",
      filter: `space_id=eq.${spaceId}`,
    }, queueCloudRefresh);
  }

  supabaseRealtimeChannel = channel.subscribe((status) => {
      if (status === "SUBSCRIBED") {
        void updateCloudPresenceTrack();
      }
    });
}

function stopSupabaseRealtime() {
  clearCloudRefreshTimer();
  resetCloudCollaborationState();

  if (!supabaseRealtimeChannel || !supabaseClient) {
    supabaseRealtimeChannel = null;
    return;
  }

  supabaseClient.removeChannel(supabaseRealtimeChannel);
  supabaseRealtimeChannel = null;
}

async function publishLocalBudgetToSupabase() {
  if (!canUseSupabaseCloud()) {
    return;
  }

  try {
    setCloudBusy(true);
    setCloudStatus(`Publication en cours vers ${state.cloud.space.name || "l'espace partage"}...`);
    renderAll();

    const spaceId = state.cloud.space.id;
    const categoriesPayload = buildSupabaseCategoryPayload(spaceId);
    const planPayload = buildSupabasePlanPayload(spaceId);
    const recurringTemplatesPayload = buildSupabaseRecurringTemplatePayload(spaceId);
    const transactionsPayload = buildSupabaseTransactionPayload(spaceId);
    let recurringSchemaOutdated = false;

    let query = supabaseClient.from("budget_transactions").delete();
    let { error } = await query.eq("space_id", spaceId);
    if (error) {
      throw error;
    }

    query = supabaseClient.from("budget_categories").delete();
    ({ error } = await query.eq("space_id", spaceId));
    if (error) {
      throw error;
    }

    query = supabaseClient.from("budget_plan_rows").delete();
    ({ error } = await query.eq("space_id", spaceId));
    if (error) {
      throw error;
    }

    query = supabaseClient.from("budget_recurring_templates").delete();
    ({ error } = await query.eq("space_id", spaceId));
    if (error) {
      if (isSupabaseRecurringSchemaMissing(error)) {
        recurringSchemaOutdated = true;
      } else {
        throw error;
      }
    }

    if (categoriesPayload.length) {
      ({ error } = await supabaseClient.from("budget_categories").insert(categoriesPayload));
      if (error) {
        throw error;
      }
    }

    if (planPayload.length) {
      ({ error } = await supabaseClient.from("budget_plan_rows").insert(planPayload));
      if (error) {
        const fallbackPayload = stripPlanPeriodsFromPayload(planPayload);
        const missingPeriodColumn =
          fallbackPayload.length &&
          /plan_period|column .*plan_period|schema cache/i.test(
            `${error?.message || ""} ${error?.details || ""} ${error?.hint || ""}`
          );

        if (!missingPeriodColumn) {
          throw error;
        }

        ({ error } = await supabaseClient.from("budget_plan_rows").insert(fallbackPayload));
        if (error) {
          throw error;
        }
      }
    }

    if (!recurringSchemaOutdated && recurringTemplatesPayload.length) {
      ({ error } = await supabaseClient.from("budget_recurring_templates").upsert(recurringTemplatesPayload, {
        onConflict: "space_id,template_id",
      }));
      if (error) {
        if (isSupabaseRecurringSchemaMissing(error)) {
          recurringSchemaOutdated = true;
        } else {
          throw error;
        }
      }
    }

    if (transactionsPayload.length) {
      ({ error } = await supabaseClient.from("budget_transactions").upsert(transactionsPayload));
      if (error) {
        throw error;
      }
    }

    state.cloud.lastPushedAt = new Date().toISOString();
    recurringSupabaseSchemaReady = !recurringSchemaOutdated;
    const successMessage = recurringSchemaOutdated
      ? `Budget publie vers ${state.cloud.space.name}. ${buildRecurringSchemaWarningMessage()}`
      : `Budget publie vers ${state.cloud.space.name}.`;
    setCloudStatus(successMessage);
    setLastAction(
      recurringSchemaOutdated
        ? `Données locales publiees vers ${state.cloud.space.name} - récurrentes partagées non synchronisées`
        : `Données locales publiees vers ${state.cloud.space.name}`
    );
    persistDraftIfPossible();
    void maybeSendBudgetAlertEmails("publication cloud");
  } catch (error) {
    console.error(error);
    const message = describeSupabaseError(error, "La publication vers Supabase a echoue.");
    setCloudStatus(message);
    setLastAction(message);
  } finally {
    setCloudBusy(false);
    renderAll();
  }
}

async function loadBudgetFromSupabase(spaceId, options = {}) {
  if (!supabaseClient || !spaceId) {
    return;
  }

  try {
    if (!options.silent) {
      setCloudStatus("Chargement des données cloud...");
      renderAll();
    }

    const [{ data: categories, error: categoriesError }, { data: planRows, error: planError }, { data: transactions, error: transactionsError }, recurringResult] = await Promise.all([
      supabaseClient
        .from("budget_categories")
        .select("name, position")
        .eq("space_id", spaceId)
        .order("position", { ascending: true })
        .order("name", { ascending: true }),
      supabaseClient
        .from("budget_plan_rows")
        .select("*")
        .eq("space_id", spaceId)
        .order("position", { ascending: true })
        .order("label", { ascending: true }),
      supabaseClient
        .from("budget_transactions")
        .select("id, entry_date, category, amount, sort_order")
        .eq("space_id", spaceId)
        .order("sort_order", { ascending: true })
        .order("entry_date", { ascending: true })
        .order("created_at", { ascending: true }),
      supabaseClient
        .from("budget_recurring_templates")
        .select("*")
        .eq("space_id", spaceId)
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: true }),
    ]);
    let recurringSchemaOutdated = false;

    if (categoriesError) {
      throw categoriesError;
    }

    if (planError) {
      throw planError;
    }

    if (transactionsError) {
      throw transactionsError;
    }

    if (recurringResult?.error) {
      if (isSupabaseRecurringSchemaMissing(recurringResult.error)) {
        recurringSchemaOutdated = true;
      } else {
        throw recurringResult.error;
      }
    }

    state.mode = "budget";
    state.workbookName = state.workbookName || state.cloud.space.name || "Budget partage cloud";
    state.workbook = null;
    state.sourceLink = null;
    state.sourceSafety = createEmptySourceSafety();
    state.activeView = normalizeActiveView(state.activeView);
    state.search = "";
    state.editingIndex = null;
    state.editorMode = "create";
    const preservedCustomGroups = getBudgetCustomGroups();
    const preservedCategoryAssignments = getBudgetCategoryAssignments();
    state.budget = {
      headers: ["Date", "Categories", "Value"],
      categories: (categories || []).map((row) => String(row.name || "").trim()).filter(Boolean),
      rows: (transactions || [])
        .map((row) => sanitizeBudgetRow({
          __id: row.id,
          Date: row.entry_date,
          Categories: row.category,
          Value: normalizeAmountValue(row.amount),
        }))
        .filter((row) => !isIgnoredBudgetTransactionRow(row)),
      clearEndRow: START_ROW + (transactions?.length || 0) + 8,
      customGroups: preservedCustomGroups,
      categoryAssignments: preservedCategoryAssignments,
    };
    state.recap = {
      available: true,
      snapshotDate: `Supabase - ${formatDraftSavedAt(new Date().toISOString())}`,
      planTemplate: (planRows || []).map((row) => ({
        label: String(row.label || "").trim(),
        plan: normalizeAmountValue(row.plan_amount),
        period: normalizePlanPeriod(row.plan_period),
        group: normalizePlanGroup(row.plan_group, row.label),
      })).filter((row) => row.label),
    };
    recurringSupabaseSchemaReady = !recurringSchemaOutdated;
    if (!recurringSchemaOutdated) {
      state.recurringTemplates = parseSupabaseRecurringTemplateRows(recurringResult?.data || []);
      persistRecurringTemplatesIfPossible();
    }
    state.cloud.lastPulledAt = new Date().toISOString();

    if (!options.preserveLastAction) {
      setLastAction(`Budget charge depuis ${state.cloud.space.name || "Supabase"}`);
    }

    setCloudStatus(
      recurringSchemaOutdated
        ? `Espace partage actif: ${state.cloud.space.name || "budget partagé"}. ${buildRecurringSchemaWarningMessage()}`
        : `Espace partage actif: ${state.cloud.space.name || "budget partagé"}.`
    );
    persistDraft();
    startSupabaseRealtime(spaceId);
    renderAll();
  } catch (error) {
    console.error(error);
    if (!options.silent) {
      setCloudStatus("Le chargement des données cloud a échoué.");
      renderAll();
    }
    throw error;
  }
}

function buildSupabaseCategoryPayload(spaceId) {
  const categories = new Set();
  const ordered = [];

  state.budget.categories.forEach((category) => {
    const normalized = String(category || "").trim();
    if (!normalized || categories.has(normalized)) {
      return;
    }

    categories.add(normalized);
    ordered.push(normalized);
  });

  state.budget.rows.forEach((row) => {
    const normalized = String(row.Categories || "").trim();
    if (!normalized || categories.has(normalized)) {
      return;
    }

    categories.add(normalized);
    ordered.push(normalized);
  });

  return ordered.map((name, index) => ({
    space_id: spaceId,
    name,
    position: index,
  }));
}

function buildSupabasePlanPayload(spaceId) {
  return resolvePlanTemplate(state.recap.planTemplate)
    .map((row, index) => ({
      space_id: spaceId,
      label: String(row.label || "").trim(),
      plan_amount: Number.isFinite(parseAmount(row.plan)) ? parseAmount(row.plan) : null,
      plan_period: normalizePlanPeriod(row.period),
      position: index,
    }))
    .filter((row) => row.label);
}

function stripPlanPeriodsFromPayload(planPayload) {
  return planPayload.map(({ plan_period: _planPeriod, ...row }) => row);
}

function buildSupabaseRecurringTemplatePayload(spaceId) {
  return getRecurringTemplates()
    .map((template, index) => ({
      space_id: spaceId,
      template_id: String(template.id || createId()).trim(),
      label: String(template.label || "").trim(),
      category: String(template.category || "").trim(),
      amount: Number.isFinite(parseAmount(template.value)) ? parseAmount(template.value) : null,
      period: normalizePlanPeriod(template.period),
      start_date: normalizeDateValue(template.startDate) || null,
      auto_create: template.autoCreate === true,
      generated_keys: normalizeRecurringTrackedKeys(template.generatedKeys),
      dismissed_keys: normalizeRecurringTrackedKeys(template.dismissedKeys),
      sort_order: index,
    }))
    .filter((row) => row.template_id && row.label && row.category);
}

function parseSupabaseRecurringTemplateRows(rows = []) {
  return (Array.isArray(rows) ? rows : [])
    .map((row) => sanitizeRecurringTemplate({
      id: row.template_id,
      label: row.label,
      category: row.category,
      value: normalizeAmountValue(row.amount),
      period: row.period,
      startDate: row.start_date,
      autoCreate: row.auto_create,
      generatedKeys: row.generated_keys,
      dismissedKeys: row.dismissed_keys,
    }))
    .filter(Boolean);
}

function buildSupabaseTransactionPayload(spaceId) {
  return state.budget.rows
    .map((row, index) => ({
      id: String(row.__id || createId()),
      space_id: spaceId,
      entry_date: normalizeDateValue(row.Date) || null,
      category: String(row.Categories || "").trim(),
      amount: Number.isFinite(parseAmount(row.Value)) ? parseAmount(row.Value) : null,
      sort_order: index,
    }))
    .filter((row) => row.category || Number.isFinite(row.amount) || row.entry_date);
}

async function syncSingleTransactionToSupabase(record) {
  if (!canUseSupabaseCloud()) {
    return;
  }

  const categoryName = String(record.Categories || "").trim();

  if (categoryName) {
    const knownCategories = buildSupabaseCategoryPayload(state.cloud.space.id);
    const targetCategory = knownCategories.find((row) => row.name === categoryName) || {
      space_id: state.cloud.space.id,
      name: categoryName,
      position: knownCategories.length,
    };

    const { error: categoryError } = await supabaseClient
      .from("budget_categories")
      .upsert(targetCategory, {
        onConflict: "space_id,name",
      });

    if (categoryError) {
      throw categoryError;
    }
  }

  const payload = {
    id: String(record.__id || createId()),
    space_id: state.cloud.space.id,
    entry_date: normalizeDateValue(record.Date) || null,
    category: categoryName,
    amount: Number.isFinite(parseAmount(record.Value)) ? parseAmount(record.Value) : null,
    sort_order: Math.max(0, state.budget.rows.findIndex((row) => row.__id === record.__id)),
  };

  const { error } = await supabaseClient
    .from("budget_transactions")
    .upsert(payload);

  if (error) {
    throw error;
  }

  state.cloud.lastPushedAt = new Date().toISOString();
  setCloudStatus(`Dernière transaction synchronisée vers ${state.cloud.space.name || "Supabase"}.`);
  persistDraftIfPossible();
  void maybeSendBudgetAlertEmails("transaction");
}

async function removeSingleTransactionFromSupabase(recordId) {
  if (!canUseSupabaseCloud()) {
    return;
  }

  const { error } = await supabaseClient
    .from("budget_transactions")
    .delete()
    .eq("space_id", state.cloud.space.id)
    .eq("id", String(recordId || ""));

  if (error) {
    throw error;
  }

  state.cloud.lastPushedAt = new Date().toISOString();
  setCloudStatus(`Suppression synchronisee vers ${state.cloud.space.name || "Supabase"}.`);
  persistDraftIfPossible();
  void maybeSendBudgetAlertEmails("suppression");
}

function buildBudgetAlertRows() {
  if (state.mode !== "budget") {
    return [];
  }

  const filteredRows = getFilteredRecapSourceRows();
  const actualMap = buildActualAmountMap(filteredRows);
  const metrics = buildRecapMetrics(actualMap);
  const periodCount = getRecapBudgetPeriodCount(filteredRows);

  return buildRecapPlanRows(actualMap, metrics, periodCount).filter((row) => {
    if (row.statusTone !== "above-budget") {
      return false;
    }

    if (isBudgetAlertSummaryLabel(row.label)) {
      return false;
    }

    return true;
  });
}

async function maybeSendBudgetAlertEmails(triggerSource = "") {
  if (!canUseBudgetAlertEmails()) {
    return;
  }

  const recipientEmail = getBudgetAlertRecipientEmail();
  if (!recipientEmail) {
    return;
  }

  const alerts = buildBudgetAlertRows();
  if (!alerts.length) {
    return;
  }

  try {
    const response = await invokeBudgetAlertFunction({
      recipientEmail,
      triggerSource,
      periodLabel: buildRecapPeriodLabel(),
      budgetPeriodCount: getRecapBudgetPeriodCount(),
      alerts: alerts.map((row) => ({
        label: row.label,
        statusLabel: row.statusLabel,
        statusTone: row.statusTone,
        planAmount: roundCurrencyValue(parseAmount(row.plan)),
        actualAmount: roundCurrencyValue(parseAmount(row.actual)),
        deltaAmount: roundCurrencyValue(parseAmount(row.delta)),
      })),
    });

    if (response?.sentCount > 0) {
      setCloudStatus(`Alerte email envoyee pour ${response.sentCount} poste(s) vers ${recipientEmail}.`);
      setLastAction(`Alerte budget email envoyee (${response.sentCount})`);
      persistDraftIfPossible();
      renderAll();
    }
  } catch (error) {
    console.error(error);
    const message = describeSupabaseError(error, "L'alerte email budget a echoue.");
    setLastAction(message);
    renderAll();
  }
}

async function invokeBudgetAlertFunction(payload) {
  const config = getSupabaseConfig();
  const functionName = String(config.budgetAlertFunctionName || "").trim();
  const accessToken = state.cloud.session?.access_token;

  if (!functionName || !config.url || !accessToken) {
    return null;
  }

  const response = await fetch(`${config.url}/functions/v1/${functionName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      spaceId: state.cloud.space.id,
      spaceName: state.cloud.space.name,
      recipientEmail: payload.recipientEmail,
      periodLabel: payload.periodLabel,
      budgetPeriodCount: payload.budgetPeriodCount,
      triggerSource: payload.triggerSource,
      cooldownHours: state.cloud.alerts.cooldownHours,
      alerts: payload.alerts,
    }),
  });

  if (!response.ok) {
    let details = "";
    try {
      details = await response.text();
    } catch (_error) {
      details = "";
    }

    throw new Error(details || `Function ${functionName} failed (${response.status})`);
  }

  try {
    return await response.json();
  } catch (_error) {
    return null;
  }
}

function enqueueCloudSync(task) {
  const nextTask = cloudSyncQueue.then(() => task());
  cloudSyncQueue = nextTask.catch(() => undefined);
  return nextTask;
}

function isStandaloneMode() {
  return window.matchMedia?.("(display-mode: standalone)")?.matches || window.navigator.standalone === true;
}

function isAppleMobileDevice() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent || "");
}

function readStoredDraft() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const draft = JSON.parse(raw);
    return draft && typeof draft === "object" ? draft : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function persistDraft() {
  if (state.mode !== "budget") {
    return;
  }

  setStartupWelcomeMode(false);
  const payload = {
    mode: state.mode,
    workbookName: state.workbookName,
    appTab: state.appTab,
    activeView: state.activeView,
    categories: state.budget.categories,
    rows: state.budget.rows,
    clearEndRow: state.budget.clearEndRow,
    customGroups: state.budget.customGroups,
    categoryAssignments: state.budget.categoryAssignments,
    recap: {
      available: state.recap.available,
      snapshotDate: state.recap.snapshotDate,
      planTemplate: state.recap.planTemplate,
    },
    cloud: {
      email: state.cloud.email,
      space: state.cloud.space,
      alerts: state.cloud.alerts,
      lastPulledAt: state.cloud.lastPulledAt,
      lastPushedAt: state.cloud.lastPushedAt,
    },
    recurringTemplates: state.recurringTemplates,
    recapFilters: state.recapFilters,
    savedAt: new Date().toISOString(),
  };

  state.draftSavedAt = payload.savedAt;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function applyStoredDraft(draft) {
  state.mode = "budget";
  state.workbookName = draft.workbookName || "";
  state.workbook = null;
  state.sourceLink = null;
  state.appTab = normalizeAppTab(draft.appTab || getAppTabForActiveView(draft.activeView));
  state.activeView = normalizeActiveView(draft.activeView);
  state.search = "";
  state.editingIndex = null;
  state.editorMode = "create";
  state.budget = {
    headers: ["Date", "Categories", "Value"],
    categories: Array.isArray(draft.categories) ? draft.categories : [],
    rows: draft.rows
      .map((row) => sanitizeBudgetRow(row))
      .filter((row) => !isIgnoredBudgetTransactionRow(row)),
    clearEndRow: Number.isFinite(draft.clearEndRow) ? draft.clearEndRow : START_ROW,
    customGroups: Array.isArray(draft.customGroups)
      ? draft.customGroups.map((entry, index) => sanitizeBudgetCustomGroup(entry, index)).filter(Boolean)
      : [],
    categoryAssignments: Array.isArray(draft.categoryAssignments)
      ? draft.categoryAssignments.map((entry) => sanitizeBudgetCategoryAssignment(entry)).filter(Boolean)
      : [],
  };
  state.recap = {
    available: Boolean(draft.recap?.available),
    snapshotDate: String(draft.recap?.snapshotDate || ""),
      planTemplate: Array.isArray(draft.recap?.planTemplate)
        ? draft.recap.planTemplate.map((row) => ({
            label: String(row?.label || ""),
            plan: normalizeAmountValue(row?.plan),
            period: normalizePlanPeriod(row?.period),
            group: normalizePlanGroup(row?.group, row?.label),
        }))
      : [],
  };
    state.recapFilters = {
      year: String(draft.recapFilters?.year || "all"),
      month: String(draft.recapFilters?.month || "all"),
      months: Array.isArray(draft.recapFilters?.months)
        ? draft.recapFilters.months.map((value) => String(value || "").padStart(2, "0")).filter(Boolean)
        : draft.recapFilters?.month && draft.recapFilters.month !== "all"
          ? [String(draft.recapFilters.month).padStart(2, "0")]
          : [],
      rangeMonths: "all",
    };
  state.cloud.email = String(draft.cloud?.email || state.cloud.email || "");
  state.cloud.space = {
    id: String(draft.cloud?.space?.id || state.cloud.space.id || ""),
    name: String(draft.cloud?.space?.name || state.cloud.space.name || ""),
    joinCode: String(draft.cloud?.space?.joinCode || draft.cloud?.space?.join_code || state.cloud.space.joinCode || ""),
  };
  state.cloud.alerts = sanitizeBudgetAlertSettings(draft.cloud?.alerts);
  state.cloud.lastPulledAt = String(draft.cloud?.lastPulledAt || state.cloud.lastPulledAt || "");
  state.cloud.lastPushedAt = String(draft.cloud?.lastPushedAt || state.cloud.lastPushedAt || "");
  state.recurringTemplates = Array.isArray(draft.recurringTemplates)
    ? draft.recurringTemplates.map((template) => sanitizeRecurringTemplate(template)).filter(Boolean)
    : state.recurringTemplates;
  state.sourceSafety = createEmptySourceSafety();
  state.draftSavedAt = String(draft.savedAt || "");

  if (refs.searchInput) {
    refs.searchInput.value = "";
  }

  if (refs.fileInput) {
    refs.fileInput.value = "";
  }
}

function restoreDraft(options = {}) {
  const manual = Boolean(options.manual);
  const draft = readStoredDraft();

  if (!draft || draft.mode !== "budget" || !Array.isArray(draft.rows)) {
    if (manual) {
      setLastAction("Aucun brouillon local à restaurer.");
    }
    return false;
  }

  applyStoredDraft(draft);
  setStartupWelcomeMode(false);
  state.lastAction = manual
    ? "Brouillon local restauré. Mode autonome actif avec vos données locales."
    : "Brouillon restauré. Mode autonome actif avec vos données locales.";
  return true;
}

function onSaveDraftRequested() {
  if (state.mode !== "budget") {
    setLastAction("Chargez ou restaurez un budget avant de sauvegarder en local.");
    renderAll();
    return;
  }

  persistDraft();
  setLastAction("Sauvegarde locale mise a jour.");
  renderAll();
}

function onRestoreDraftRequested() {
  restoreDraft({ manual: true });
  renderAll();
}

function onRestartRequested() {
  restartToWelcomeMode();
}

function restartToWelcomeMode() {
  setStartupWelcomeMode(true);
  state.workbookName = "";
  state.workbook = null;
  state.sourceLink = null;
  state.sourceSafety = createEmptySourceSafety();
  state.draftSavedAt = "";
  state.appTab = APP_TAB_DASHBOARD;
  state.mode = "idle";
  state.activeView = JOURNAL_SHEET_NAME;
  state.search = "";
  state.editingIndex = null;
  state.editorMode = "create";
  state.planEditing = false;
  state.budget = createEmptyBudgetModel();
  state.recap = createEmptyRecapModel();
  state.recapFilters = createEmptyRecapFilters();

  if (refs.searchInput) {
    refs.searchInput.value = "";
  }

  if (refs.fileInput) {
    refs.fileInput.value = "";
  }

  setRecapMonthPickerOpen(false);
  setLastAction("Ecran de depart restaure. Choisissez comment commencer.");
  renderAll();
  void updateCloudPresenceTrack();
}

async function onFileSelected(event) {
  const [file] = event.target.files || [];

  if (!file) {
    return;
  }

  if (!window.XLSX) {
    setLastAction("Import impossible: bibliotheque Excel absente");
    renderStats();
    return;
  }

  try {
    await importWorkbookFile(file, {
      sourceLink: null,
      successMessage: `Classeur charge: ${file.name}`,
    });
  } catch (error) {
    console.error(error);
    state.workbook = null;
    state.sourceLink = null;
    setLastAction("Le fichier n'a pas pu etre lu");
    renderAll();
  }
}

async function onOpenSourceRequested() {
  if (!window.XLSX) {
    setLastAction("Import impossible: bibliotheque Excel absente");
    renderStats();
    return;
  }

  if (!canUseSourceLinkPicker()) {
    setLastAction(buildSourceLinkUnavailableMessage());
    renderStats();
    return;
  }

  try {
    if (canUseAndroidSourcePicker()) {
      const sourceResult = await getBudgetSourcePlugin().pickSource();
      if (!sourceResult?.data) {
        throw new Error("Aucune donnee recue depuis la source Android");
      }

      await importWorkbookBuffer(base64ToArrayBuffer(sourceResult.data), sourceResult.name || "Budget_2025 Final.xlsx", {
        sourceLink: {
          kind: "android-document",
          uri: String(sourceResult.uri || ""),
          name: String(sourceResult.name || ""),
        },
        successMessage: `Source liee: ${sourceResult.name || "Budget_2025 Final.xlsx"}`,
      });
      return;
    }

    const [handle] = await window.showOpenFilePicker({
      multiple: false,
      types: [
        {
          description: "Classeur Excel Budget",
          accept: {
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
            "application/vnd.ms-excel": [".xls"],
          },
        },
      ],
    });

    if (!handle) {
      return;
    }

    const file = await handle.getFile();
    await importWorkbookFile(file, {
      sourceLink: {
        kind: "file-handle",
        handle,
      },
      successMessage: `Source liee: ${file.name}`,
    });
  } catch (error) {
    if (error?.name === "AbortError") {
      setLastAction("Liaison de la source annulee");
      renderStats();
      return;
    }

    console.error(error);
    setLastAction("La source n'a pas pu etre ouverte avec ecriture");
    renderStats();
  }
}

async function importWorkbookFile(file, options = {}) {
  const buffer = await file.arrayBuffer();
  await importWorkbookBuffer(buffer, file.name, options);
}

async function importWorkbookBuffer(buffer, fileName, options = {}) {
  const workbook = XLSX.read(buffer, {
    type: "array",
    cellDates: true,
    cellFormula: true,
    cellNF: true,
    cellStyles: true,
    bookFiles: true,
    bookVBA: true,
  });

  if (!isBudgetWorkbook(workbook)) {
    resetBudgetStateForInvalidWorkbook(fileName);
    return;
  }

  state.workbookName = fileName;
  state.workbook = workbook;
  state.sourceLink = options.sourceLink || null;
  state.sourceSafety = analyzeWorkbookSourceSafety(workbook, fileName);
  state.mode = "budget";
  state.activeView = JOURNAL_SHEET_NAME;
  state.search = "";
  state.editingIndex = null;
  state.editorMode = "create";
  state.budget = parseBudgetWorkbook(workbook);
  state.recap = parseRecapWorkbook(workbook);
  state.recapFilters = createEmptyRecapFilters();

  refs.searchInput.value = "";
  refs.fileInput.value = "";

  persistDraft();
  setLastAction(
    state.sourceSafety.allowDirectWrite
      ? options.successMessage || `Classeur charge: ${fileName}`
      : `${options.successMessage || `Classeur charge: ${fileName}`} - source protégée, export copie uniquement`
  );
  renderAll();
}

function resetBudgetStateForInvalidWorkbook(fileName) {
  state.workbookName = fileName;
  state.workbook = null;
  state.sourceLink = null;
  state.sourceSafety = createEmptySourceSafety();
  state.mode = "idle";
  state.activeView = JOURNAL_SHEET_NAME;
  state.search = "";
  state.editingIndex = null;
  state.editorMode = "create";
  state.budget = createEmptyBudgetModel();
  state.recap = createEmptyRecapModel();
  state.recapFilters = createEmptyRecapFilters();
  refs.searchInput.value = "";
  refs.fileInput.value = "";
  setLastAction("Ce prototype attend Budget_2025 Final.xlsx");
  renderAll();
}

function isBudgetWorkbook(workbook) {
  const sheet = workbook?.Sheets?.[JOURNAL_SHEET_NAME];
  if (!sheet) {
    return false;
  }

  const d2 = normalizeHeaderName(readCellText(sheet[`${DATE_COL}${HEADER_ROW}`]));
  const e2 = normalizeHeaderName(readCellText(sheet[`${CATEGORY_COL}${HEADER_ROW}`]));
  const f2 = normalizeHeaderName(readCellText(sheet[`${VALUE_COL}${HEADER_ROW}`]));
  const b2 = normalizeHeaderName(readCellText(sheet[`${CATEGORY_LIST_COL}${HEADER_ROW}`]));

  return d2 === "date" && e2.startsWith("categorie") && f2 === "value" && b2.startsWith("categorie");
}

function analyzeWorkbookSourceSafety(workbook, fileName) {
  const issues = [];
  const rawKeys = Array.isArray(workbook?.keys)
    ? workbook.keys
    : Object.keys(workbook?.files || {});
  const normalizedKeys = rawKeys.map((value) => String(value || ""));
  const definedNames = Array.isArray(workbook?.Workbook?.Names) ? workbook.Workbook.Names : [];
  const normalizedSheetNames = new Set((workbook?.SheetNames || []).map((value) => String(value || "").trim().toLowerCase()));

  if (
    normalizedKeys.some((value) =>
      /^xl\/(pivotTables|pivotCache|drawings|charts|slicers|externalLinks|persons|threadedComments|ctrlProps|connections)/i.test(
        value
      )
    )
  ) {
    issues.push("objets Excel avances");
  }

  if (
    definedNames.some((item) => {
      const reference = String(item?.Ref || "");
      return reference.includes("#REF!") || /\[\d+\]/.test(reference);
    })
  ) {
    issues.push("noms definis ou liaisons complexes");
  }

  if (
    normalizedSheetNames.has("journalier") &&
    normalizedSheetNames.has("recapitulatif") &&
    normalizedSheetNames.has("tcd")
  ) {
  issues.push("modele Budget structure");
  }

  if (/budget_2025 final/i.test(String(fileName || ""))) {
    issues.push("classeur source sensible");
  }

  if (!issues.length) {
    return {
      allowDirectWrite: false,
      reason: "Ecriture directe desactivee pour proteger l'integrite du classeur source.",
      issues: ["ecriture source preservee par precaution"],
    };
  }

  return {
    allowDirectWrite: false,
    reason: `Ecriture directe desactivee: ${issues.join(", ")}. Utilisez Exporter Excel sur une copie pour proteger le fichier source.`,
    issues,
  };
}

function parseBudgetWorkbook(workbook) {
  const sheet = workbook.Sheets[JOURNAL_SHEET_NAME];
  const range = XLSX.utils.decode_range(sheet["!ref"] || "A1:A1");
  const clearEndRow = range.e.r + 1;

  const categories = parseBudgetCategories(sheet, clearEndRow);
  const rows = parseBudgetRows(sheet, clearEndRow);
  sortBudgetRowsInPlace(rows);

  return {
    headers: [
      readCellText(sheet[`${DATE_COL}${HEADER_ROW}`]) || "Date",
      readCellText(sheet[`${CATEGORY_COL}${HEADER_ROW}`]) || "Categories",
      readCellText(sheet[`${VALUE_COL}${HEADER_ROW}`]) || "Value",
    ],
    rows,
    categories,
    clearEndRow,
  };
}

function parseBudgetCategories(sheet, maxRow) {
  const categories = [];

  for (let row = START_ROW; row <= maxRow; row += 1) {
    const value = String(readCellText(sheet[`${CATEGORY_LIST_COL}${row}`]) || "").trim();

    if (!value) {
      if (categories.length) {
        break;
      }
      continue;
    }

    if (!categories.includes(value)) {
      categories.push(value);
    }
  }

  return categories;
}

function parseBudgetRows(sheet, maxRow) {
  const rows = [];

  for (let row = START_ROW; row <= maxRow; row += 1) {
    const dateCell = sheet[`${DATE_COL}${row}`];
    const categoryCell = sheet[`${CATEGORY_COL}${row}`];
    const valueCell = sheet[`${VALUE_COL}${row}`];

    if (!dateCell && !categoryCell && !valueCell) {
      continue;
    }

    const dateValue = normalizeDateValue(readCellRawValue(dateCell));
    const categoryValue = String(readCellText(categoryCell) || "").trim();
    const amountValue = normalizeAmountValue(readCellRawValue(valueCell));

    if (!dateValue && !categoryValue && !amountValue) {
      continue;
    }

    const nextRow = {
      __id: createId(),
      Date: dateValue,
      Categories: categoryValue,
      Value: amountValue,
    };

    if (isIgnoredBudgetTransactionRow(nextRow)) {
      continue;
    }

    rows.push(nextRow);
  }

  return rows;
}

function isIgnoredBudgetTransactionRow(row) {
  const dateValue = normalizeDateValue(row?.Date);
  const normalizedCategory = normalizeHeaderName(row?.Categories);
  const normalizedValue = normalizeHeaderName(row?.Value);

  if (!dateValue && normalizedCategory === "categories" && (!normalizedValue || normalizedValue === "value")) {
    return true;
  }

  return false;
}

function parseRecapWorkbook(workbook) {
  const recapSheet = workbook?.Sheets?.[RECAP_SHEET_NAME];
  const tcdSheet = workbook?.Sheets?.[TCD_SHEET_NAME];

  if (!tcdSheet) {
    return createEmptyRecapModel();
  }

  return {
    available: true,
    snapshotDate: formatDateForDisplay(readCellRawValue(recapSheet?.BJ2)),
    planTemplate: parseRecapPlanTemplate(tcdSheet),
  };
}

function resolveBudgetValueColumn(sheet, preferredYear = String(new Date().getFullYear())) {
  const range = XLSX.utils.decode_range(sheet["!ref"] || "A1:A1");
  let fallbackPlanColumn = "I";
  const yearCandidates = [];

  for (let columnIndex = 7; columnIndex <= range.e.c; columnIndex += 1) {
    const columnLetter = XLSX.utils.encode_col(columnIndex);
    const row2Value = String(readCellText(sheet[`${columnLetter}2`]) || "").trim();
    const row3Value = String(readCellText(sheet[`${columnLetter}3`]) || "").trim();

    if (normalizeHeaderName(row3Value) === "plan") {
      fallbackPlanColumn = columnLetter;
    }

    if (/^\d{4}$/.test(row2Value)) {
      yearCandidates.push({ year: row2Value, columnLetter });
    }
  }

  const preferredMatch = yearCandidates.find((entry) => entry.year === String(preferredYear));
  if (preferredMatch) {
    return preferredMatch.columnLetter;
  }

  if (yearCandidates.length) {
    return yearCandidates.sort((left, right) => Number(left.year) - Number(right.year)).at(-1).columnLetter;
  }

  return fallbackPlanColumn;
}

function parseRecapPlanTemplate(sheet) {
  const range = XLSX.utils.decode_range(sheet["!ref"] || "A1:A1");
  const templateMap = new Map();
  let currentGroup = "expenses";
  const budgetValueColumn = resolveBudgetValueColumn(sheet);

  for (let row = 4; row <= range.e.r + 1; row += 1) {
    const label = String(readCellText(sheet[`H${row}`]) || "").trim();
    if (!label) {
      continue;
    }

    const normalized = normalizeHeaderName(label);
    if (normalized === "income") {
      currentGroup = "income";
    } else if (normalized === "savings") {
      currentGroup = "savings";
    } else if (normalized === "sol") {
      currentGroup = "neutral";
    } else if (normalized === "expenses") {
      currentGroup = "expenses";
    }

    if (isIgnoredRecapLabel(label)) {
      continue;
    }

    const plan = normalizeAmountValue(readCellRawValue(sheet[`${budgetValueColumn}${row}`]));
    const hasPlanValue = plan !== "";
    const existing = templateMap.get(normalized);
    const inferredGroup = inferPlanGroupFromLabel(label);
    const group = inferredGroup === "expenses" ? normalizePlanGroup(currentGroup, label) : inferredGroup;

    if (!existing || (!existing.plan && hasPlanValue)) {
      templateMap.set(normalized, { label, plan, period: DEFAULT_PLAN_PERIOD, group });
    }
  }

  return Array.from(templateMap.values());
}

function isIgnoredRecapLabel(label) {
  const normalized = normalizeHeaderName(label);
  return normalized === "sol" || normalized === "expenses";
}

function onRecapYearChanged(event) {
  state.recapFilters.year = String(event.target.value || "all");
  setRecapMonthPickerOpen(false);

  const availableMonths = getAvailableRecapMonths(state.recapFilters.year);
  state.recapFilters.months = getSelectedRecapMonths().filter((month) => availableMonths.includes(month));
  state.recapFilters.month = state.recapFilters.months[0] || "all";
  state.recapFilters.rangeMonths = "all";

  persistDraft();
  renderAll();
}

function onRecapMonthChanged(event) {
  const selectedMonths = Array.from(event.target.selectedOptions || [])
    .map((option) => String(option.value || "").padStart(2, "0"))
    .filter((value) => value !== "all");
  setSelectedRecapMonths(selectedMonths);
}

function onRecapRangeChanged(event) {
  state.recapFilters.rangeMonths = "all";
  persistDraft();
  renderAll();
}

function getSelectedRecapMonths() {
  const normalizedMonths = Array.isArray(state.recapFilters.months)
    ? state.recapFilters.months.map((value) => String(value || "").padStart(2, "0")).filter(Boolean)
    : [];

  if (normalizedMonths.length) {
    return Array.from(new Set(normalizedMonths)).sort((left, right) => Number(left) - Number(right));
  }

  if (state.recapFilters.month && state.recapFilters.month !== "all") {
    return [String(state.recapFilters.month).padStart(2, "0")];
  }

  return [];
}

function setSelectedRecapMonths(monthValues) {
  const availableMonths = getAvailableRecapMonths(state.recapFilters.year);
  const normalizedMonths = Array.from(
    new Set(
      (Array.isArray(monthValues) ? monthValues : [])
        .map((value) => String(value || "").padStart(2, "0"))
        .filter((value) => availableMonths.includes(value))
    )
  ).sort((left, right) => Number(left) - Number(right));

  state.recapFilters.months = normalizedMonths;
  state.recapFilters.month = normalizedMonths[0] || "all";
  state.recapFilters.rangeMonths = "all";
  persistDraft();
  renderAll();
}

function buildRecapMonthTriggerLabel() {
  const selectedMonths = getSelectedRecapMonths();
  if (!selectedMonths.length) {
    return "Tous les mois";
  }

  if (selectedMonths.length === 1) {
    return formatMonthLabel(selectedMonths[0]);
  }

  if (selectedMonths.length === 2) {
    return selectedMonths.map((monthValue) => formatMonthLabel(monthValue)).join(", ");
  }

  return `${formatMonthLabel(selectedMonths[0])}, ${formatMonthLabel(selectedMonths[1])} +${selectedMonths.length - 2}`;
}

function setRecapMonthPickerOpen(open) {
  const nextOpen = Boolean(open) && !refs.recapMonthTrigger.disabled;
  refs.recapMonthPicker.classList.toggle("is-open", nextOpen);
  refs.recapMonthPanel.classList.toggle("hidden", !nextOpen);
  refs.recapMonthTrigger.setAttribute("aria-expanded", nextOpen ? "true" : "false");
}

function setExportMenuOpen(open) {
  if (!refs.exportMenu || !refs.exportMenuPanel || !refs.exportButton) {
    return;
  }

  const nextOpen = Boolean(open) && !refs.exportButton.disabled;
  refs.exportMenu.classList.toggle("is-open", nextOpen);
  refs.exportMenuPanel.classList.toggle("hidden", !nextOpen);
  refs.exportButton.setAttribute("aria-expanded", nextOpen ? "true" : "false");
}

function onRecapMonthTriggerClicked(event) {
  event.preventDefault();
  if (refs.recapMonthTrigger.disabled) {
    return;
  }

  setRecapMonthPickerOpen(!refs.recapMonthPicker.classList.contains("is-open"));
}

function onExportMenuToggleRequested(event) {
  event.preventDefault();
  if (refs.exportButton?.disabled) {
    return;
  }

  if (isNativeAppRuntime()) {
    void promptNativeExportChoiceAndRun();
    return;
  }

  setExportMenuOpen(!refs.exportMenu.classList.contains("is-open"));
}

async function onExportOptionRequested(exportKind) {
  setExportMenuOpen(false);
  await exportWorkbook(exportKind);
}

async function promptNativeExportChoiceAndRun() {
  const rawChoice = window.prompt(t("export.choicePrompt"), "1");
  if (rawChoice == null) {
    return;
  }

  const normalizedChoice = String(rawChoice || "").trim();
  if (!normalizedChoice) {
    return;
  }

  if (normalizedChoice === "1") {
    await exportWorkbook("journal");
    return;
  }

  if (normalizedChoice === "2") {
    await exportWorkbook("complete");
    return;
  }

  setLastAction(t("export.choiceInvalid"));
  renderStats();
}

function onRecapMonthPanelClicked(event) {
  const optionButton = event.target.closest("[data-month-value]");
  if (!optionButton) {
    return;
  }

  const monthValue = String(optionButton.dataset.monthValue || "");
  if (monthValue === "all") {
    setSelectedRecapMonths([]);
    setRecapMonthPickerOpen(false);
    return;
  }

  const selectedMonths = new Set(getSelectedRecapMonths());
  if (selectedMonths.has(monthValue)) {
    selectedMonths.delete(monthValue);
  } else {
    selectedMonths.add(monthValue);
  }

  setSelectedRecapMonths(Array.from(selectedMonths));
  setRecapMonthPickerOpen(false);
}

function onDocumentClick(event) {
  if (refs.recapMonthPicker?.classList.contains("is-open") && !refs.recapMonthField.contains(event.target)) {
    setRecapMonthPickerOpen(false);
  }

  if (refs.exportMenu?.classList.contains("is-open") && !refs.exportMenu.contains(event.target)) {
    setExportMenuOpen(false);
  }
}

function onDocumentKeyDown(event) {
  if (event.key !== "Escape") {
    return;
  }

  setRecapMonthPickerOpen(false);
  setExportMenuOpen(false);
}

function onEmptyStateAction(event) {
  const actionButton = event.target.closest("[data-empty-action]");
  if (!actionButton) {
    return;
  }

  const action = actionButton.dataset.emptyAction;

  if (action === "start-local") {
    startLocalBudgetExperience({ targetTab: state.appTab });
    return;
  }

  if (action === "import-excel") {
    if (!window.XLSX) {
      setLastAction("Import impossible: bibliotheque Excel absente");
      renderAll();
      return;
    }

    refs.fileInput?.click();
    return;
  }

  if (action === "go-share") {
    setAppTab(APP_TAB_SHARE);
    return;
  }

  if (action === "restore-draft") {
    restoreDraft({ manual: true });
    renderAll();
  }
}

function captureCurrentTransactionFormSnapshot() {
  return {
    Date: String(document.getElementById("field-date")?.value || "").trim(),
    Categories: String(document.getElementById("field-categories")?.value || "").trim(),
    Value: String(document.getElementById("field-value")?.value || "").trim(),
  };
}

function applyTransactionFormSnapshot(snapshot) {
  const dateInput = document.getElementById("field-date");
  const categoryInput = document.getElementById("field-categories");
  const valueInput = document.getElementById("field-value");

  if (dateInput) {
    dateInput.value = String(snapshot?.Date || "").trim();
  }

  if (categoryInput) {
    categoryInput.value = getDisplayCategoryLabel(String(snapshot?.Categories || "").trim());
  }

  if (valueInput) {
    valueInput.value = String(snapshot?.Value || "").trim();
  }

  refreshCategoryParentMeta();
}

function refreshFormEditorPreservingValues(snapshot = captureCurrentTransactionFormSnapshot()) {
  if (state.appTab !== APP_TAB_FORM || state.activeView !== JOURNAL_SHEET_NAME) {
    return;
  }

  renderEditor();
  applyTransactionFormSnapshot(snapshot);
}

async function syncRecurringTemplatesIfNeeded(actionLabel, activityLabel = "les transactions récurrentes") {
  if (!canUseSupabaseCloud()) {
    return true;
  }

  try {
    await enqueueCloudSync(() => publishLocalBudgetToSupabase());
    await sendCloudActivityBroadcast("saved", activityLabel);
    return true;
  } catch (error) {
    console.error(error);
    setLastAction(`${actionLabel} - synchronisation cloud en échec`);
    renderAll();
    return false;
  }
}

async function saveCurrentTransactionAsRecurringTemplate(options = {}) {
  if (!canSaveCurrentTransactionAsRecurringTemplate()) {
    setLastAction("Saisissez au moins une categorie et une valeur avant d'enregistrer un modèle récurrent.");
    refreshCategoryParentMeta();
    return;
  }

  const snapshot = captureCurrentTransactionFormSnapshot();
  const internalCategory = getInternalCategoryLabel(snapshot.Categories);
  const anchorDate = normalizeDateValue(snapshot.Date) || new Date().toISOString().slice(0, 10);
  const saved = upsertRecurringTemplate({
    label: internalCategory,
    category: internalCategory,
    value: snapshot.Value,
    period: DEFAULT_PLAN_PERIOD,
    startDate: anchorDate,
    autoCreate: false,
  });

  if (!saved) {
    setLastAction("Le modèle récurrent n'a pas pu être enregistré.");
    refreshCategoryParentMeta();
    return;
  }

  setLastAction(`Modèle récurrent enregistre: ${snapshot.Categories}`);
  refreshFormEditorPreservingValues(snapshot);
  await syncRecurringTemplatesIfNeeded(
    `Modèle récurrent enregistre: ${snapshot.Categories}`,
    `le modèle récurrent ${snapshot.Categories}`
  );

  if (options.openRecurringTab) {
    setAppTab(APP_TAB_RECURRING);
  }
}

function applyRecurringTemplateToForm(templateId) {
  const template = getRecurringTemplates().find((entry) => entry.id === templateId);
  if (!template) {
    return;
  }

  const current = captureCurrentTransactionFormSnapshot();
  const today = new Date().toISOString().slice(0, 10);
  const targetDate = normalizeDateValue(current.Date) || today;
  if (!confirmRecurringTemplateUseIfNeeded(template, targetDate)) {
    setLastAction(t("recurring.useCancelled"));
    renderAll();
    return;
  }

  state.editorMode = "create";
  state.editingIndex = null;
  if (state.appTab !== APP_TAB_FORM) {
    setAppTab(APP_TAB_FORM);
  } else {
    renderEditor();
  }

  applyTransactionFormSnapshot({
    Date: targetDate,
    Categories: template.category,
    Value: template.value,
  });
  setLastAction(`Modèle appliqué : ${template.label}`);
}

async function onRecurringTemplateAction(event) {
  const actionButton = event.target.closest("[data-recurring-action]");
  if (!actionButton) {
    return;
  }

  const action = String(actionButton.dataset.recurringAction || "").trim();
  if (action === "create-new") {
    if (!isRecurringAutomationAvailable()) {
      setLastAction(t("recurring.createUnavailable"));
      renderAll();
      return;
    }

    startCreateMode();
    setLastAction(t("recurring.createFlowHint"));
    renderAll();
    queueMicrotask(() => {
      document.getElementById("field-categories")?.focus();
    });
    return;
  }

  if (action === "save-current") {
    if (!window.confirm(t("recurring.confirmCreateAndOpen"))) {
      setLastAction(t("recurring.createCancelled"));
      renderAll();
      return;
    }

    await saveCurrentTransactionAsRecurringTemplate({ openRecurringTab: true });
    return;
  }

  const templateId = String(actionButton.dataset.templateId || "").trim();
  if (!templateId) {
    return;
  }

  if (action === "use") {
    applyRecurringTemplateToForm(templateId);
    return;
  }

  if (action === "delete") {
    const snapshot = captureCurrentTransactionFormSnapshot();
    const template = getRecurringTemplates().find((entry) => entry.id === templateId);
    deleteRecurringTemplate(templateId);
    setLastAction("Modèle récurrent supprime.");
    refreshFormEditorPreservingValues(snapshot);
    await syncRecurringTemplatesIfNeeded(
      "Modèle récurrent supprime.",
      `le modèle récurrent ${(getDisplayCategoryLabel(template?.label) || template?.label || templateId)}`
    );
  }
}

async function onRecurringTemplateConfigChanged(event) {
  const field = event.target.closest("[data-recurring-setting]");
  if (!field) {
    return;
  }

  const templateId = String(field.dataset.templateId || "").trim();
  const setting = String(field.dataset.recurringSetting || "").trim();
  if (!templateId || !setting) {
    return;
  }

  const snapshot = captureCurrentTransactionFormSnapshot();
  let changes = null;

  if (setting === "auto") {
    changes = {
      autoCreate: field.checked === true,
    };
  } else if (setting === "period") {
    changes = {
      period: normalizePlanPeriod(field.value),
    };
  } else if (setting === "start-date") {
    changes = {
      startDate: normalizeDateValue(field.value),
      dismissedKeys: [],
      generatedKeys: [],
    };
  }

  if (!changes) {
    return;
  }

  updateRecurringTemplateSettings(templateId, changes);
  renderAll();
  restoreFormSnapshotAfterRecurringAction(snapshot);
  const template = getRecurringTemplates().find((entry) => entry.id === templateId);
  await syncRecurringTemplatesIfNeeded(
    "Règle récurrente mise à jour.",
    `la règle récurrente ${(getDisplayCategoryLabel(template?.label) || template?.label || templateId)}`
  );
}

function onRecurringReviewDraftChanged(event) {
  const field = event.target.closest("[data-recurring-draft]");
  if (!field) {
    return;
  }

  const occurrenceKey = String(field.dataset.occurrenceKey || "").trim();
  const draftField = String(field.dataset.recurringDraft || "").trim();
  if (!occurrenceKey || !draftField) {
    return;
  }

  if (draftField === "value") {
    updateRecurringReviewDraft(occurrenceKey, {
      value: field.value,
    });
    const preview = field.closest(".recurring-review-card")?.querySelector("[data-recurring-preview-amount]");
    if (preview) {
      preview.textContent = formatCurrency(field.value);
    }
    return;
  }

  if (draftField === "update-template") {
    updateRecurringReviewDraft(occurrenceKey, {
      updateTemplate: field.checked === true,
    });
  }
}

function applyRecurringTemplateValueChanges(occurrences) {
  const latestChangesByTemplate = new Map();

  occurrences.forEach((occurrence) => {
    if (!occurrence?.templateId || occurrence.updateTemplate !== true) {
      return;
    }

    const current = latestChangesByTemplate.get(occurrence.templateId);
    if (!current || compareRecurringOccurrenceDate(current.date, occurrence.date) <= 0) {
      latestChangesByTemplate.set(occurrence.templateId, occurrence);
    }
  });

  const templateChanges = [];
  latestChangesByTemplate.forEach((occurrence, templateId) => {
    const template = getRecurringTemplates().find((entry) => entry.id === templateId);
    if (!template) {
      return;
    }

    const previousValue = normalizeAmountValue(template.value);
    const nextValue = normalizeAmountValue(occurrence.value);
    if (previousValue === nextValue) {
      return;
    }

    updateRecurringTemplateSettings(templateId, {
      value: nextValue,
    });
    templateChanges.push({
      templateId,
      previousValue,
      nextValue,
    });
  });

  return templateChanges;
}

async function onRecurringReviewAction(event) {
  const actionButton = event.target.closest("[data-recurring-review-action]");
  if (!actionButton) {
    return;
  }

  event.preventDefault();
  const action = String(actionButton.dataset.recurringReviewAction || "").trim();
  const occurrenceMap = getPendingRecurringOccurrenceMap();
  const snapshot = captureCurrentTransactionFormSnapshot();

  if (action === "add-all") {
    const occurrences = Array.from(occurrenceMap.values()).map((occurrence) => applyDraftToRecurringOccurrence(occurrence));
    const templateChanges = applyRecurringTemplateValueChanges(occurrences);
    await addRecurringOccurrencesToBudget(occurrences, { templateChanges });
    restoreFormSnapshotAfterRecurringAction(snapshot);
    return;
  }

  if (action === "ignore-all") {
    const occurrences = Array.from(occurrenceMap.values());
    dismissRecurringOccurrences(occurrences);
    clearRecurringReviewDrafts(occurrences.map((occurrence) => occurrence.key).filter(Boolean));
    setLastAction(occurrences.length > 1 ? `${occurrences.length} occurrences récurrentes ignorées.` : "Occurrence récurrente ignorée.");
    renderAll();
    restoreFormSnapshotAfterRecurringAction(snapshot);
    await syncRecurringTemplatesIfNeeded(
      occurrences.length > 1 ? `${occurrences.length} occurrences récurrentes ignorées.` : "Occurrence récurrente ignorée.",
      occurrences.length > 1 ? "les validations récurrentes" : `la validation récurrente ${getDisplayCategoryLabel(occurrences[0]?.category) || occurrences[0]?.category || ""}`.trim()
    );
    return;
  }

  const occurrenceKey = String(actionButton.dataset.occurrenceKey || "").trim();
  if (!occurrenceKey || !occurrenceMap.has(occurrenceKey)) {
    return;
  }

  const occurrence = occurrenceMap.get(occurrenceKey);
  if (action === "add-one") {
    const reviewedOccurrence = applyDraftToRecurringOccurrence(occurrence);
    const templateChanges = applyRecurringTemplateValueChanges([reviewedOccurrence]);
    await addRecurringOccurrencesToBudget([reviewedOccurrence], { templateChanges });
    restoreFormSnapshotAfterRecurringAction(snapshot);
    return;
  }

  if (action === "ignore-one") {
    dismissRecurringOccurrences([occurrence]);
    clearRecurringReviewDrafts([occurrence.key]);
    setLastAction(`Occurrence ignorée : ${getDisplayCategoryLabel(occurrence.category) || occurrence.category}`);
    renderAll();
    restoreFormSnapshotAfterRecurringAction(snapshot);
    await syncRecurringTemplatesIfNeeded(
      `Occurrence ignorée : ${getDisplayCategoryLabel(occurrence.category) || occurrence.category}`,
      `la validation récurrente ${getDisplayCategoryLabel(occurrence.category) || occurrence.category}`
    );
  }
}

function renderRecurringReviewCardConfig(occurrence, english) {
  const reviewedOccurrence = applyDraftToRecurringOccurrence(occurrence);
  return `
    <div class="recurring-review-config">
      <label class="recurring-config-field">
        <span>${english ? "Amount" : "Montant"}</span>
        <input type="text" inputmode="decimal" value="${escapeHtml(normalizeAmountValue(reviewedOccurrence.value))}" data-recurring-draft="value" data-occurrence-key="${escapeHtml(occurrence.key)}">
      </label>
      <label class="recurring-config-field recurring-config-switch">
        <span>${english ? "Update template" : "Mettre à jour le modèle"}</span>
        <input type="checkbox" data-recurring-draft="update-template" data-occurrence-key="${escapeHtml(occurrence.key)}" ${reviewedOccurrence.updateTemplate ? "checked" : ""}>
      </label>
    </div>
  `;
}

function onSearchChanged(event) {
  state.search = event.target.value.trim().toLowerCase();
  renderCards();
  renderStats();
}

function startCreateMode() {
  state.editorMode = "create";
  state.editingIndex = null;
  setAppTab(APP_TAB_FORM);
  void sendCloudActivityBroadcast("editing", "prepare une nouvelle transaction");
}

function startPlanEditMode() {
  if (state.mode !== "budget") {
    setLastAction("Chargez ou restaurez un budget avant de modifier le plan.");
    renderAll();
    return;
  }

  state.planEditing = true;
  setLastAction("Edition du budget active.");
  renderAll();
  void updateCloudPresenceTrack();
  void sendCloudActivityBroadcast("editing", "modifie le budget");
}

function onToolbarActionRequested() {
  if (state.appTab === APP_TAB_PLAN) {
    startPlanEditMode();
    return;
  }

  startCreateMode();
}

function resetEditor() {
  state.editorMode = "create";
  state.editingIndex = null;
  setAppTab(APP_TAB_TRANSACTIONS);
}

function onEditorCancelRequested() {
  if (state.appTab === APP_TAB_PLAN) {
    state.planEditing = false;
    setLastAction("Modification du budget annulee.");
    renderAll();
    void updateCloudPresenceTrack();
    return;
  }

  resetEditor();
  void updateCloudPresenceTrack();
}

function onCardAction(event) {
  if (state.activeView !== JOURNAL_SHEET_NAME) {
    return;
  }

  const deleteButton = event.target.closest("[data-action='delete']");
  const editButton = event.target.closest("[data-action='edit']");
  const entry = event.target.closest("[data-entry-index]");

  if (!entry) {
    return;
  }

  const index = Number(entry.dataset.entryIndex);
  if (Number.isNaN(index)) {
    return;
  }

  if (deleteButton) {
    void deleteRecord(index);
    return;
  }

  if (editButton || entry) {
    openEditor(index);
  }
}

function openEditor(index) {
  if (!state.budget.rows[index]) {
    return;
  }

  state.editorMode = "edit";
  state.editingIndex = index;
  setAppTab(APP_TAB_FORM);
  const rowLabel = state.budget.rows[index]?.Categories || state.budget.rows[index]?.Date || "une transaction";
  void sendCloudActivityBroadcast("editing", `modifie ${rowLabel}`);
}

async function deleteRecord(index) {
  const target = state.budget.rows[index];
  if (!target) {
    return;
  }

  const title = target.Categories || `transaction ${index + 1}`;
  const confirmed = window.confirm(`Supprimer ${title} ?`);

  if (!confirmed) {
    return;
  }

  const removedRecord = sanitizeBudgetRow(target);
  state.budget.rows.splice(index, 1);

  if (state.editingIndex === index) {
    state.editingIndex = null;
    state.editorMode = "create";
  } else if (state.editingIndex !== null && state.editingIndex > index) {
    state.editingIndex -= 1;
  }

  persistDraft();
  const actionLabel = `Transaction supprimee: ${title}`;
  pushUndoEntry({
    kind: "delete-record",
    record: removedRecord,
    index,
  }, actionLabel);
  setLastAction(actionLabel);
  renderAll();
  try {
    await enqueueCloudSync(() => removeSingleTransactionFromSupabase(target.__id));
    await sendCloudActivityBroadcast("deleted", title);
  } catch (error) {
    console.error(error);
    setLastAction(`${actionLabel} - sync cloud en echec`);
    renderAll();
  }
  await enqueueSourceSave({
    automatic: true,
    baseAction: actionLabel,
  });
}

async function onSaveRecord(event) {
  event.preventDefault();

  if (state.appTab === APP_TAB_PLAN) {
    await onSavePlanTemplateRequested();
    return;
  }

  if (state.mode !== "budget") {
    return;
  }

  const formData = new FormData(refs.form);
  const nextRecord = {
    __id: createId(),
    Date: normalizeDateValue(formData.get("Date")),
    Categories: getInternalCategoryLabel(formData.get("Categories")),
    Value: normalizeAmountValue(formData.get("Value")),
  };

  if (!nextRecord.Date && !nextRecord.Categories && !nextRecord.Value) {
    setLastAction("Transaction vide ignoree");
    renderStats();
    return;
  }

  let actionLabel = "Transaction enregistree";
  let collaborationLabel = "une transaction";
  if (state.editorMode === "edit" && state.editingIndex !== null && state.budget.rows[state.editingIndex]) {
    const previousRecord = sanitizeBudgetRow(state.budget.rows[state.editingIndex]);
    nextRecord.__id = state.budget.rows[state.editingIndex].__id;
    state.budget.rows[state.editingIndex] = nextRecord;
    actionLabel = "Transaction mise a jour";
    collaborationLabel = `la transaction ${nextRecord.Categories || nextRecord.Date || ""}`.trim();
    pushUndoEntry({
      kind: "update-record",
      previousRecord,
      nextRecord,
    }, actionLabel);
    setLastAction(actionLabel);
  } else {
    state.budget.rows.push(nextRecord);
    actionLabel = "Nouvelle transaction ajoutee";
    collaborationLabel = `une transaction ${nextRecord.Categories || nextRecord.Date || ""}`.trim();
    pushUndoEntry({
      kind: "create-record",
      record: nextRecord,
    }, actionLabel);
    setLastAction(actionLabel);
  }

  ensureBudgetCategoryAvailable(nextRecord.Categories);
  sortBudgetRowsInPlace(state.budget.rows);
  state.editingIndex = null;
  state.editorMode = "create";
  setAppTab(APP_TAB_TRANSACTIONS);
  try {
    await enqueueCloudSync(() => syncSingleTransactionToSupabase(nextRecord));
    await sendCloudActivityBroadcast("saved", collaborationLabel);
  } catch (error) {
    console.error(error);
    setLastAction(`${actionLabel} - sync cloud en echec`);
    renderAll();
  }
  await enqueueSourceSave({
    automatic: true,
    baseAction: actionLabel,
  });
}

function collectPlanEditorTemplateRows() {
  const currentPlanRows = ensurePlanTemplateSeeded();
  const editableRows = currentPlanRows.filter((row) => !isDerivedPlanLabel(row.label));

  return editableRows
    .map((sourceRow) => {
      const rowKey = normalizeHeaderName(sourceRow.label);
      const amountInput = refs.form.querySelector(`[data-plan-input="true"][data-plan-key="${rowKey}"]`);
      const periodSelect = refs.form.querySelector(`[data-plan-period="true"][data-plan-key="${rowKey}"]`);
      return {
        label: String(sourceRow.label || "").trim(),
        plan: normalizeAmountValue(amountInput?.value ?? sourceRow.plan),
        period: normalizePlanPeriod(periodSelect?.value ?? sourceRow.period),
        group: normalizePlanGroup(sourceRow.group, sourceRow.label),
      };
    })
    .filter((row) => row.label);
}

function refreshPlanEditorPreview() {
  if (state.appTab !== APP_TAB_PLAN || state.mode !== "budget") {
    return;
  }

  const previewRows = resolvePlanTemplate(collectPlanEditorTemplateRows());
  const previewMap = new Map(previewRows.map((row) => [normalizeHeaderName(row.label), row]));

  Array.from(refs.form.querySelectorAll("[data-plan-row]")).forEach((rowElement) => {
    const label = String(rowElement.getAttribute("data-plan-row") || "");
    const previewRow = previewMap.get(normalizeHeaderName(label));
    if (!previewRow) {
      return;
    }

    const monthlyTarget = rowElement.querySelector("[data-plan-monthly]");
    if (monthlyTarget) {
      monthlyTarget.textContent = formatCurrency(convertPlanAmountToMonthly(previewRow.plan, previewRow.period));
    }

    const periodTarget = rowElement.querySelector("[data-plan-period-label]");
    if (periodTarget) {
      periodTarget.textContent = getPlanPeriodLabel(previewRow.period);
    }

    const parentTarget = rowElement.querySelector("[data-plan-parent-label]");
    if (parentTarget) {
      parentTarget.textContent =
        getBudgetFraCategoryLabel(previewRow.label, previewRow.group, previewRow.plan) || "Aucun parent";
      parentTarget.classList.toggle(
        "budget-parent-empty",
        !(getBudgetFraCategoryLabel(previewRow.label, previewRow.group, previewRow.plan))
      );
    }

    const amountInput = rowElement.querySelector("[data-plan-input='true']");
    if (amountInput?.readOnly) {
      amountInput.value = normalizeAmountValue(previewRow.plan);
    }
  });

  const groupedPreviewRows = buildBudgetFraPlanEditorGroups(
    previewRows.filter((row) => !isDerivedPlanLabel(row.label))
  );
  groupedPreviewRows.forEach((group) => {
    const target = refs.form.querySelector(`[data-plan-group-total="${group.key}"]`);
    if (target) {
      target.textContent = formatCurrency(computePlanGroupMonthlyTotal(group.rows));
    }
  });
}

function onPlanEditorFieldChanged(event) {
  if (state.appTab !== APP_TAB_PLAN || !state.planEditing) {
    return;
  }

  const target = event.target;
  if (!target?.matches?.("[data-plan-input='true'], [data-plan-period='true']")) {
    return;
  }

  refreshPlanEditorPreview();
}

async function onSavePlanTemplateRequested() {
  if (state.mode !== "budget") {
    setLastAction("Chargez ou restaurez un budget avant de modifier le plan.");
    renderAll();
    return;
  }

  if (!state.planEditing) {
    setLastAction("Cliquez sur Éditer le budget pour modifier le plan.");
    renderAll();
    return;
  }

  const nextEditableTemplate = collectPlanEditorTemplateRows();
  const previousTemplate = clonePlanTemplateRows(state.recap.planTemplate);

  if (!nextEditableTemplate.length) {
    setLastAction("Aucune ligne de budget à enregistrer.");
    renderAll();
    return;
  }

  state.recap.available = true;
  state.recap.planTemplate = resolvePlanTemplate(nextEditableTemplate);
  state.planEditing = false;
  persistDraft();

  const actionLabel = "Budget planifié mis à jour";
  pushUndoEntry({
    kind: "update-plan",
    previousTemplate,
  }, actionLabel);
  setLastAction(actionLabel);
  renderAll();
  void updateCloudPresenceTrack();

  if (canUseSupabaseCloud()) {
    try {
      await enqueueCloudSync(() => publishLocalBudgetToSupabase());
      await sendCloudActivityBroadcast("saved", "le budget");
    } catch (error) {
      console.error(error);
      setLastAction(`${actionLabel} - synchronisation cloud en échec`);
      renderAll();
    }
  }
}

async function exportWorkbook(exportKind = "journal") {
  if (!window.XLSX) {
    setLastAction("Export impossible : bibliothèque Excel absente");
    renderStats();
    return;
  }

  if (state.mode !== "budget") {
    setLastAction("Chargez ou restaurez des données pour exporter une copie");
    renderStats();
    return;
  }

  try {
    const exportPayload = buildExportPayload(exportKind);

    if (isNativeAppRuntime()) {
      if (!canUseNativeExcelExport()) {
        throw new Error("L'export natif n'est pas disponible sur cet appareil");
      }

      setLastAction(exportPayload.preparingMessage);
      renderStats();
      await exportWorkbookWithNativeShare(exportPayload.workbook, exportPayload.fileName);
      setLastAction(exportPayload.sharedMessage);
    } else {
      XLSX.writeFile(exportPayload.workbook, exportPayload.fileName);
      setLastAction(exportPayload.successMessage);
    }

    renderStats();
  } catch (error) {
    console.error(error);
    const errorMessage = buildExportErrorMessage(error);
    setLastAction(errorMessage);
    if (isNativeAppRuntime()) {
      window.alert(errorMessage);
    }
    renderStats();
  }
}

function buildExportPayload(exportKind = "journal") {
  const normalizedKind = String(exportKind || "").trim().toLowerCase() === "complete"
    ? "complete"
    : "journal";

  if (normalizedKind === "complete") {
    return {
      workbook: buildCompleteExportWorkbook(),
      fileName: buildCompleteExportFileName(),
      preparingMessage: t("export.completePreparing"),
      sharedMessage: t("export.completeShared"),
      successMessage: t("export.completeSuccess"),
    };
  }

  return {
    workbook: buildSimplifiedExportWorkbook(),
    fileName: buildSimplifiedExportFileName(),
    preparingMessage: t("export.journalPreparing"),
    sharedMessage: t("export.journalShared"),
    successMessage: t("export.journalSuccess"),
  };
}

function shouldUseSimplifiedSafeExport() {
  return Boolean(state.mode === "budget" && (!state.workbook || !state.sourceSafety.allowDirectWrite));
}

function enqueueSourceSave(options = {}) {
  if (!canSaveToSource()) {
    return Promise.resolve(false);
  }

  sourceSaveQueue = sourceSaveQueue
    .catch(() => false)
    .then(() => saveSourceWorkbook(options));

  return sourceSaveQueue;
}

async function saveSourceWorkbook(options = {}) {
  const automatic = Boolean(options.automatic);
  const baseAction = String(options.baseAction || "");

  if (!window.XLSX) {
    if (!automatic) {
      setLastAction("Enregistrement source impossible: bibliotheque Excel absente");
      renderStats();
    }
    return false;
  }

  if (!state.workbook || state.mode !== "budget") {
    if (!automatic) {
      setLastAction("Chargez d'abord Budget_2025 Final.xlsx");
      renderStats();
    }
    return false;
  }

  if (!canSaveToSource()) {
    if (!automatic) {
      setLastAction(buildSourceLinkUnavailableMessage());
      renderStats();
    }
    return false;
  }

  try {
    applyBudgetRowsToWorkbook(state.workbook, state.budget);
    setLastAction(
      automatic && baseAction
        ? `${baseAction} - synchronisation de la source`
        : "Ecriture en cours dans le fichier source"
    );
    renderStats();
    await saveWorkbookToLinkedSource(state.workbook, state.sourceLink);
    setLastAction(
      automatic && baseAction
        ? `${baseAction} - source mise a jour`
        : `Fichier source mis a jour: ${state.workbookName}`
    );
  } catch (error) {
    console.error(error);
    setLastAction(automatic && baseAction ? `${baseAction} - ${buildSourceSaveErrorMessage(error)}` : buildSourceSaveErrorMessage(error));
    renderStats();
    return false;
  }

  renderStats();
  return true;
}

function buildExportFileName() {
  const baseName = state.workbookName
    ? state.workbookName.replace(/\.(xlsx|xls)$/i, "")
    : "Budget_2025 Final";

  return `${sanitizeExportFileName(baseName)}-card-view.xlsx`;
}

function buildSimplifiedExportFileName() {
  const baseName = state.workbookName
    ? state.workbookName.replace(/\.(xlsx|xls)$/i, "")
    : "Budget_2025 Final";

  return `${sanitizeExportFileName(baseName)}-journalier-safe.xlsx`;
}

function buildCompleteExportFileName() {
  const baseName = state.workbookName
    ? state.workbookName.replace(/\.(xlsx|xls)$/i, "")
    : "BUDEGETAPP";

  return `${sanitizeExportFileName(baseName)}-app-complete.xlsx`;
}

function getExportSheetNames() {
  return isEnglishUi()
    ? {
        info: "Info",
        journal: JOURNAL_SHEET_NAME,
        categories: "Categories",
        plan: "Planned budget",
        metrics: "Metrics",
        details: "Transactions by category",
        groups: "Budget-fra groups",
        planActual: "Plan vs actual",
        alerts: "Budget-fra alerts",
        recurring: "Recurring templates",
        monthly: "Monthly view",
      }
    : {
        info: "Infos",
        journal: JOURNAL_SHEET_NAME,
        categories: "Catégories",
        plan: "Budget planifié",
        metrics: "Indicateurs",
        details: "Transactions catégorie",
        groups: "Groupes Budget-fra",
        planActual: "Plan vs réel",
        alerts: "Alertes Budget-fra",
        recurring: "Transactions récurrentes",
        monthly: "Lecture mensuelle",
      };
}

function buildSheetFromObjects(rows, headers = []) {
  if (Array.isArray(rows) && rows.length) {
    return XLSX.utils.json_to_sheet(rows);
  }

  if (Array.isArray(headers) && headers.length) {
    return XLSX.utils.aoa_to_sheet([headers]);
  }

  return XLSX.utils.aoa_to_sheet([]);
}

function buildJournalExportSheet() {
  const journalSheet = {};
  const lastRow = START_ROW + Math.max(state.budget.rows.length, state.budget.categories.length) + 2;

  journalSheet[`${CATEGORY_LIST_COL}${HEADER_ROW}`] = { t: "s", v: state.budget.headers[1] || "Categories" };
  journalSheet[`${DATE_COL}${HEADER_ROW}`] = { t: "s", v: state.budget.headers[0] || "Date" };
  journalSheet[`${CATEGORY_COL}${HEADER_ROW}`] = { t: "s", v: state.budget.headers[1] || "Categories" };
  journalSheet[`${VALUE_COL}${HEADER_ROW}`] = { t: "s", v: state.budget.headers[2] || "Value" };

  state.budget.categories.forEach((category, index) => {
    journalSheet[`${CATEGORY_LIST_COL}${START_ROW + index}`] = {
      t: "s",
      v: category,
    };
  });

  state.budget.rows.forEach((row, index) => {
    const sheetRow = START_ROW + index;
    const isoDate = normalizeDateValue(row.Date);
    const amountNumber = parseAmount(row.Value);

    if (isoDate) {
      journalSheet[`${DATE_COL}${sheetRow}`] = {
        t: "n",
        v: isoDateToExcelSerial(isoDate),
        z: "m/d/yyyy",
      };
    }

    if (row.Categories) {
      journalSheet[`${CATEGORY_COL}${sheetRow}`] = {
        t: "s",
        v: row.Categories,
      };
    }

    if (Number.isFinite(amountNumber)) {
      journalSheet[`${VALUE_COL}${sheetRow}`] = {
        t: "n",
        v: amountNumber,
      };
    } else if (row.Value) {
      journalSheet[`${VALUE_COL}${sheetRow}`] = {
        t: "s",
        v: row.Value,
      };
    }
  });

  journalSheet["!ref"] = `B2:F${lastRow}`;
  return journalSheet;
}

function buildExportInfoSheet(mode = "journal") {
  const english = isEnglishUi();
  const modeLabel = mode === "complete"
    ? (english ? "Complete workbook" : "Classeur complet")
    : (english ? "Journal only" : "Journalier seulement");
  const description = mode === "complete"
    ? (english
      ? "This workbook rebuilds the main app data, summaries, and comparisons from the current app state."
      : "Ce classeur reconstruit les principales données, synthèses et comparaisons depuis l'état actuel de l'application.")
    : (english
      ? "This copy preserves Journal transactions and the category list without rewriting the complex source Excel template."
      : "Cette copie préserve les transactions Journalier et la liste de catégories, sans réécrire le modèle Excel source complexe.");
  const periodNote = mode === "complete"
    ? (english
      ? "Analysis sheets below follow the current year/month filters used in the app."
      : "Les feuilles d'analyse ci-dessous suivent les filtres année/mois actuellement actifs dans l'application.")
    : "";

  return XLSX.utils.aoa_to_sheet([
    ["BUDEGETAPP"],
    [modeLabel],
    [description],
    ...(periodNote ? [[periodNote]] : []),
    [english ? "Source file" : "Fichier source", state.workbookName || "Budget_2025 Final.xlsx"],
    [english ? "Export date" : "Date export", new Date().toISOString()],
    [english ? "Filtered period" : "Période filtrée", buildRecapPeriodLabel()],
    [english ? "Language" : "Langue", getCurrentLanguage()],
    [english ? "Theme" : "Thème", getCurrentThemePreference()],
    [english ? "Journal rows" : "Lignes Journalier", state.budget.rows.length],
    [english ? "Budget categories" : "Catégories budget", state.budget.categories.length],
    [english ? "Planned budget rows" : "Lignes budget planifié", resolvePlanTemplate(state.recap.planTemplate).length],
    [english ? "Recurring templates" : "Modèles récurrents", getRecurringTemplates().length],
  ]);
}

function buildSimplifiedExportWorkbook() {
  const workbook = XLSX.utils.book_new();
  const sheetNames = getExportSheetNames();
  XLSX.utils.book_append_sheet(workbook, buildExportInfoSheet("journal"), sheetNames.info);
  XLSX.utils.book_append_sheet(workbook, buildJournalExportSheet(), sheetNames.journal);

  return workbook;
}

function buildCompleteExportSnapshot() {
  const previousSearch = state.search;
  state.search = "";

  try {
    const filteredRows = getFilteredRecapSourceRows();
    const actualMap = buildActualAmountMap(filteredRows);
    const snapshot = computeMetricSnapshot(actualMap);
    const metrics = buildRecapMetrics(actualMap);
    const detailRows = buildRecapDetailRows(actualMap);
    const budgetPeriodCount = getRecapBudgetPeriodCount(filteredRows);
    const planRows = buildRecapPlanRows(actualMap, metrics, budgetPeriodCount);
    const groupSummaries = buildBudgetFraGroupSummaries(actualMap);
    const ruleAlerts = buildBudgetFraRuleAlerts(actualMap, snapshot);
    const seriesRows = buildAnalysisSeriesRows();

    return {
      filteredRows,
      actualMap,
      snapshot,
      metrics,
      detailRows,
      budgetPeriodCount,
      planRows,
      groupSummaries,
      ruleAlerts,
      seriesRows,
    };
  } finally {
    state.search = previousSearch;
  }
}

function buildBudgetCategoryExportRows() {
  const english = isEnglishUi();
  const seen = new Set();
  const orderedCategories = [];

  [...state.budget.categories, ...state.budget.rows.map((row) => row.Categories)]
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .forEach((category) => {
      const key = normalizeHeaderName(category);
      if (!key || seen.has(key)) {
        return;
      }

      seen.add(key);
      orderedCategories.push(category);
    });

  return orderedCategories.map((category) => ({
    [english ? "Internal category" : "Catégorie interne"]: category,
    [english ? "Displayed category" : "Catégorie affichée"]: getDisplayCategoryLabel(category) || category,
    [english ? "Main category" : "Grande catégorie"]: getBudgetFraCategoryLabel(category, "", null) || (english ? "None" : "Aucune"),
  }));
}

function buildPlannedBudgetExportRows() {
  const english = isEnglishUi();

  return resolvePlanTemplate(state.recap.planTemplate).map((row) => {
    const amountValue = Number.isFinite(parseAmount(row.plan)) ? parseAmount(row.plan) : row.plan;
    return {
      [english ? "Type" : "Type"]: isDerivedPlanLabel(row.label)
        ? (english ? "Derived" : "Dérivé")
        : (english ? "Editable" : "Modifiable"),
      [english ? "Main category" : "Grande catégorie"]: getBudgetFraCategoryLabel(row.label, row.group, amountValue) || (english ? "None" : "Aucune"),
      [english ? "Internal label" : "Libellé interne"]: row.label,
      [english ? "Displayed label" : "Libellé affiché"]: getDisplayCategoryLabel(row.label) || row.label,
      [english ? "Entered amount" : "Montant saisi"]: amountValue,
      [english ? "Period" : "Période"]: getPlanPeriodLabel(row.period),
      [english ? "Monthly equivalent" : "Équivalent mensuel"]: convertPlanAmountToMonthly(row.plan, row.period),
      [english ? "Plan group" : "Groupe plan"]: normalizePlanGroup(row.group, row.label),
    };
  });
}

function buildMetricExportRows(snapshot) {
  const english = isEnglishUi();
  const comparisonRows = buildAnalysisComparisonRows(snapshot);

  return comparisonRows.map((row) => ({
    [english ? "Metric" : "Indicateur"]: getMetricDisplayLabel(row.label),
    [english ? "Value" : "Valeur"]: row.label === "Cash" ? snapshot.cash : roundCurrencyValue(parseAmount(row.value)),
    [english ? "Display value" : "Valeur affichée"]: row.displayValue,
    [english ? "Tone" : "Ton"]: row.tone,
    [english ? "Description" : "Description"]: row.caption,
  }));
}

function buildRecapDetailExportRows(detailRows) {
  const english = isEnglishUi();

  return detailRows.map((row) => ({
    [english ? "Displayed category" : "Catégorie affichée"]: getDisplayCategoryLabel(row.label) || row.label,
    [english ? "Internal category" : "Catégorie interne"]: row.label,
    [english ? "Main category" : "Grande catégorie"]: row.parentLabel,
    [english ? "Amount" : "Montant"]: roundCurrencyValue(parseAmount(row.amount)),
    [english ? "Row type" : "Type de ligne"]: row.isTotal
      ? (english ? "Total" : "Total")
      : (english ? "Category" : "Catégorie"),
  }));
}

function buildBudgetFraSummaryExportRows(groupSummaries) {
  const english = isEnglishUi();

  return groupSummaries.map((row) => ({
    [english ? "Group" : "Groupe"]: row.label,
    [english ? "Description" : "Description"]: row.description,
    [english ? "Amount" : "Montant"]: roundCurrencyValue(parseAmount(row.value)),
    [english ? "Tone" : "Ton"]: row.tone || "default",
  }));
}

function buildPlanComparisonExportRows(planRows) {
  const english = isEnglishUi();

  return planRows.map((row) => ({
    [english ? "Main category" : "Grande catégorie"]: row.parentLabel || (english ? "None" : "Sans parent"),
    [english ? "Internal label" : "Libellé interne"]: row.label,
    [english ? "Displayed label" : "Libellé affiché"]: getDisplayCategoryLabel(row.label) || row.label,
    [english ? "Plan for period" : "Budget période"]: roundCurrencyValue(parseAmount(row.plan)),
    [english ? "Monthly plan" : "Budget mensuel"]: roundCurrencyValue(parseAmount(row.monthlyPlan)),
    [english ? "Actual" : "Réel"]: roundCurrencyValue(parseAmount(row.actual)),
    [english ? "Delta" : "Écart"]: roundCurrencyValue(parseAmount(row.delta)),
    [english ? "Status" : "Statut"]: row.statusLabel,
    [english ? "Tone" : "Ton"]: row.statusTone,
    [english ? "Budget months" : "Mois comparés"]: row.budgetMonths,
    [english ? "Period" : "Période"]: row.periodLabel,
  }));
}

function buildBudgetFraAlertExportRows(alerts) {
  const english = isEnglishUi();

  return alerts.map((row) => ({
    [english ? "Group" : "Groupe"]: row.groupLabel || row.title,
    [english ? "Title" : "Titre"]: row.title,
    [english ? "Status" : "Statut"]: row.status,
    [english ? "Tone" : "Ton"]: row.tone,
    [english ? "Detail" : "Détail"]: row.detail,
    [english ? "Amount" : "Montant"]: row.amountLabel,
    [english ? "Ratio" : "Ratio"]: row.ratioLabel,
  }));
}

function buildRecurringTemplateExportRows() {
  const english = isEnglishUi();
  const pendingCounts = new Map();

  getPendingRecurringOccurrences().forEach((occurrence) => {
    if (!occurrence?.templateId) {
      return;
    }

    pendingCounts.set(occurrence.templateId, (pendingCounts.get(occurrence.templateId) || 0) + 1);
  });

  return getRecurringTemplates().map((template) => ({
    [english ? "Displayed label" : "Libellé affiché"]: getDisplayCategoryLabel(template.label) || template.label,
    [english ? "Internal label" : "Libellé interne"]: template.label,
    [english ? "Displayed category" : "Catégorie affichée"]: getDisplayCategoryLabel(template.category) || template.category,
    [english ? "Internal category" : "Catégorie interne"]: template.category,
    [english ? "Amount" : "Montant"]: Number.isFinite(parseAmount(template.value)) ? parseAmount(template.value) : template.value,
    [english ? "Period" : "Période"]: getPlanPeriodLabel(template.period),
    [english ? "Automatic rule" : "Règle automatique"]: template.autoCreate ? (english ? "Yes" : "Oui") : (english ? "No" : "Non"),
    [english ? "Start date" : "Date de départ"]: template.startDate || "",
    [english ? "Pending occurrences" : "Occurrences en attente"]: pendingCounts.get(template.id) || 0,
  }));
}

function buildMonthlySeriesExportRows(seriesRows) {
  const english = isEnglishUi();

  return seriesRows.map((row) => ({
    [english ? "Period" : "Période"]: row.label,
    [english ? "Income" : "Revenu"]: roundCurrencyValue(parseAmount(row.income)),
    [english ? "Expenses" : "Dépenses"]: roundCurrencyValue(parseAmount(row.expenses)),
    [english ? "Savings" : "Épargne"]: roundCurrencyValue(parseAmount(row.savings)),
    Cash: roundCurrencyValue(parseAmount(row.cash)),
  }));
}

function buildCompleteExportWorkbook() {
  const workbook = XLSX.utils.book_new();
  const sheetNames = getExportSheetNames();
  const exportSnapshot = buildCompleteExportSnapshot();

  XLSX.utils.book_append_sheet(workbook, buildExportInfoSheet("complete"), sheetNames.info);
  XLSX.utils.book_append_sheet(workbook, buildJournalExportSheet(), sheetNames.journal);
  XLSX.utils.book_append_sheet(
    workbook,
    buildSheetFromObjects(
      buildBudgetCategoryExportRows(),
      isEnglishUi()
        ? ["Internal category", "Displayed category", "Main category"]
        : ["Catégorie interne", "Catégorie affichée", "Grande catégorie"]
    ),
    sheetNames.categories
  );
  XLSX.utils.book_append_sheet(
    workbook,
    buildSheetFromObjects(
      buildPlannedBudgetExportRows(),
      isEnglishUi()
        ? ["Type", "Main category", "Internal label", "Displayed label", "Entered amount", "Period", "Monthly equivalent", "Plan group"]
        : ["Type", "Grande catégorie", "Libellé interne", "Libellé affiché", "Montant saisi", "Période", "Équivalent mensuel", "Groupe plan"]
    ),
    sheetNames.plan
  );
  XLSX.utils.book_append_sheet(
    workbook,
    buildSheetFromObjects(
      buildMetricExportRows(exportSnapshot.snapshot),
      isEnglishUi()
        ? ["Metric", "Value", "Display value", "Tone", "Description"]
        : ["Indicateur", "Valeur", "Valeur affichée", "Ton", "Description"]
    ),
    sheetNames.metrics
  );
  XLSX.utils.book_append_sheet(
    workbook,
    buildSheetFromObjects(
      buildRecapDetailExportRows(exportSnapshot.detailRows),
      isEnglishUi()
        ? ["Displayed category", "Internal category", "Main category", "Amount", "Row type"]
        : ["Catégorie affichée", "Catégorie interne", "Grande catégorie", "Montant", "Type de ligne"]
    ),
    sheetNames.details
  );
  XLSX.utils.book_append_sheet(
    workbook,
    buildSheetFromObjects(
      buildBudgetFraSummaryExportRows(exportSnapshot.groupSummaries),
      isEnglishUi()
        ? ["Group", "Description", "Amount", "Tone"]
        : ["Groupe", "Description", "Montant", "Ton"]
    ),
    sheetNames.groups
  );
  XLSX.utils.book_append_sheet(
    workbook,
    buildSheetFromObjects(
      buildPlanComparisonExportRows(exportSnapshot.planRows),
      isEnglishUi()
        ? ["Main category", "Internal label", "Displayed label", "Plan for period", "Monthly plan", "Actual", "Delta", "Status", "Tone", "Budget months", "Period"]
        : ["Grande catégorie", "Libellé interne", "Libellé affiché", "Budget période", "Budget mensuel", "Réel", "Écart", "Statut", "Ton", "Mois comparés", "Période"]
    ),
    sheetNames.planActual
  );
  XLSX.utils.book_append_sheet(
    workbook,
    buildSheetFromObjects(
      buildBudgetFraAlertExportRows(exportSnapshot.ruleAlerts),
      isEnglishUi()
        ? ["Group", "Title", "Status", "Tone", "Detail", "Amount", "Ratio"]
        : ["Groupe", "Titre", "Statut", "Ton", "Détail", "Montant", "Ratio"]
    ),
    sheetNames.alerts
  );
  XLSX.utils.book_append_sheet(
    workbook,
    buildSheetFromObjects(
      buildRecurringTemplateExportRows(),
      isEnglishUi()
        ? ["Displayed label", "Internal label", "Displayed category", "Internal category", "Amount", "Period", "Automatic rule", "Start date", "Pending occurrences"]
        : ["Libellé affiché", "Libellé interne", "Catégorie affichée", "Catégorie interne", "Montant", "Période", "Règle automatique", "Date de départ", "Occurrences en attente"]
    ),
    sheetNames.recurring
  );
  XLSX.utils.book_append_sheet(
    workbook,
    buildSheetFromObjects(
      buildMonthlySeriesExportRows(exportSnapshot.seriesRows),
      isEnglishUi()
        ? ["Period", "Income", "Expenses", "Savings", "Cash"]
        : ["Période", "Revenu", "Dépenses", "Épargne", "Cash"]
    ),
    sheetNames.monthly
  );

  return workbook;
}

function sanitizeExportFileName(value) {
  const normalized = String(value || "")
    .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "-")
    .replace(/\s+/g, " ")
    .trim();

  return normalized || "Budget_2025 Final";
}

function canUseSourceLinkPicker() {
  return Boolean((canUseBrowserSourcePicker() || canUseAndroidSourcePicker()) && state.sourceSafety.allowDirectWrite);
}

function hasLinkedWritableSource() {
  return Boolean(
    (state.sourceLink?.kind === "file-handle" && state.sourceLink?.handle) ||
      (state.sourceLink?.kind === "android-document" && state.sourceLink?.uri)
  );
}

function canSaveToSource() {
  return Boolean(state.mode === "budget" && state.workbook && state.sourceSafety.allowDirectWrite && hasLinkedWritableSource());
}

async function saveWorkbookToLinkedSource(workbook, sourceLink) {
  if (!sourceLink) {
    throw new Error("Aucune source liee");
  }

  if (sourceLink.kind === "android-document") {
    await saveWorkbookToAndroidSource(workbook, sourceLink);
    return;
  }

  if (!sourceLink.handle) {
    throw new Error("Aucune source liee");
  }

  const hasPermission = await ensureSourceWritePermission(sourceLink.handle);
  if (!hasPermission) {
    throw new Error("Permission d'ecriture refusee");
  }

  const writable = await sourceLink.handle.createWritable();

  try {
    await writable.write(
      XLSX.write(workbook, {
        bookType: getWorkbookBookType(sourceLink.handle.name || state.workbookName),
        type: "array",
      })
    );
  } finally {
    await writable.close();
  }
}

async function saveWorkbookToAndroidSource(workbook, sourceLink) {
  const BudgetSource = getBudgetSourcePlugin();
  if (!BudgetSource?.saveSource) {
    throw new Error("Plugin source Android indisponible");
  }

  await BudgetSource.saveSource({
    uri: sourceLink.uri,
    data: XLSX.write(workbook, {
      bookType: getWorkbookBookType(sourceLink.name || state.workbookName),
      type: "base64",
    }),
    fileName: sourceLink.name || state.workbookName,
  });
}

async function ensureSourceWritePermission(fileHandle) {
  const permissionOptions = { mode: "readwrite" };

  if (typeof fileHandle.queryPermission === "function") {
    const currentPermission = await fileHandle.queryPermission(permissionOptions);
    if (currentPermission === "granted") {
      return true;
    }
  }

  if (typeof fileHandle.requestPermission === "function") {
    const requestedPermission = await fileHandle.requestPermission(permissionOptions);
    return requestedPermission === "granted";
  }

  return true;
}

function getWorkbookBookType(fileName) {
  const normalized = String(fileName || "").toLowerCase();

  if (normalized.endsWith(".xls")) {
    return "biff8";
  }

  return "xlsx";
}

function buildSourceLinkUnavailableMessage() {
  if (state.mode === "budget" && !state.sourceSafety.allowDirectWrite) {
    return state.sourceSafety.reason;
  }

  if (hasLinkedWritableSource()) {
    return "La source est deja liee";
  }

  if (canUseAndroidSourcePicker()) {
    return "Sur Android, utilisez Lier la source pour autoriser l'ecriture directe";
  }

  if (location.protocol === "file:") {
    return "Mode local: publiez l'app en HTTPS puis utilisez Lier la source pour ecrire dans le fichier d'origine";
  }

  if (!canUseSourceLinkPicker()) {
    return "Votre navigateur ne permet pas encore de lier directement le fichier source";
  }

  return "Liez d'abord la source avec le bouton dédié";
}

function buildSourceSaveErrorMessage(error) {
  const rawMessage = String(error?.message || "").toLowerCase();

  if (error?.name === "NotAllowedError" || rawMessage.includes("permission")) {
    return "Ecriture refusee sur le fichier source";
  }

  if (rawMessage.includes("stream") || rawMessage.includes("document")) {
    return "Le document source n'a pas accepte la reecriture directe";
  }

  return "L'enregistrement direct dans la source a echoue";
}

function getCapacitorRuntime() {
  return window.Capacitor || null;
}

function getCapacitorPlatformName() {
  return String(getCapacitorRuntime()?.getPlatform?.() || "");
}

function isAndroidNativeRuntime() {
  return isNativeAppRuntime() && getCapacitorPlatformName() === "android";
}

function getBudgetSourcePlugin() {
  if (budgetSourcePlugin) {
    return budgetSourcePlugin;
  }

  const Capacitor = getCapacitorRuntime();
  if (!Capacitor) {
    return null;
  }

  budgetSourcePlugin = typeof Capacitor.registerPlugin === "function"
    ? Capacitor.registerPlugin("BudgetSource")
    : Capacitor.Plugins?.BudgetSource || null;

  return budgetSourcePlugin;
}

function getBudgetAuthPlugin() {
  if (budgetAuthPlugin) {
    return budgetAuthPlugin;
  }

  const Capacitor = getCapacitorRuntime();
  if (!Capacitor) {
    return null;
  }

  budgetAuthPlugin = typeof Capacitor.registerPlugin === "function"
    ? Capacitor.registerPlugin("BudgetAuth")
    : Capacitor.Plugins?.BudgetAuth || null;

  return budgetAuthPlugin;
}

function canUseBrowserSourcePicker() {
  return Boolean(window.isSecureContext && typeof window.showOpenFilePicker === "function");
}

function canUseAndroidSourcePicker() {
  return Boolean(isAndroidNativeRuntime() && getBudgetSourcePlugin());
}

function canUseAndroidAuthRedirect() {
  return Boolean(isAndroidNativeRuntime() && getBudgetAuthPlugin());
}

function getFilesystemPlugin() {
  if (filesystemPlugin) {
    return filesystemPlugin;
  }

  const Capacitor = getCapacitorRuntime();
  filesystemPlugin = window.capacitorFilesystemPluginCapacitor?.Filesystem ||
    (typeof Capacitor?.registerPlugin === "function" ? Capacitor.registerPlugin("Filesystem") : null) ||
    Capacitor?.Plugins?.Filesystem ||
    Capacitor?.Filesystem ||
    null;

  return filesystemPlugin;
}

function getFilesystemDirectory() {
  return (
    window.capacitorFilesystemPluginCapacitor?.FilesystemDirectory ||
    window.capacitorFilesystemPluginCapacitor?.Directory ||
    window.Capacitor?.Plugins?.FilesystemDirectory ||
    window.Capacitor?.FilesystemDirectory ||
    {
      Cache: "CACHE",
      Data: "DATA",
      Documents: "DOCUMENTS",
    }
  );
}

function getSharePlugin() {
  if (sharePlugin) {
    return sharePlugin;
  }

  const Capacitor = getCapacitorRuntime();
  sharePlugin = window.capacitorShare?.Share ||
    (typeof Capacitor?.registerPlugin === "function" ? Capacitor.registerPlugin("Share") : null) ||
    Capacitor?.Plugins?.Share ||
    null;

  return sharePlugin;
}

function isNativeAppRuntime() {
  return Boolean(getCapacitorRuntime()?.isNativePlatform?.());
}

function base64ToArrayBuffer(base64Value) {
  const binary = window.atob(String(base64Value || ""));
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes.buffer;
}

function canUseNativeExcelExport() {
  return Boolean(
    isNativeAppRuntime() &&
      getFilesystemPlugin() &&
      getSharePlugin()
  );
}

function resolveNativeExportDirectory() {
  const Directory = getFilesystemDirectory();
  return Directory?.Cache || Directory?.Data || Directory?.Documents || null;
}

async function exportWorkbookWithNativeShare(workbook, fileName) {
  const Filesystem = getFilesystemPlugin();
  const Share = getSharePlugin();
  const targetDirectory = resolveNativeExportDirectory();

  if (!Filesystem || !Share || !targetDirectory) {
    throw new Error("L'export natif n'est pas disponible sur cet appareil");
  }

  const relativePath = `exports/${fileName}`;
  const workbookData = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "base64",
  });

  await Filesystem.writeFile({
    path: relativePath,
    data: workbookData,
    directory: targetDirectory,
    recursive: true,
  });

  const fileUri = await Filesystem.getUri({
    path: relativePath,
    directory: targetDirectory,
  });

  try {
    await Share.share({
      title: "Budget",
      text: "Classeur Budget exporte depuis l'app mobile.",
      files: [fileUri.uri],
      dialogTitle: "Partager le classeur Excel",
    });
  } catch (shareError) {
    await Share.share({
      title: "Budget",
      text: "Classeur Budget exporte depuis l'app mobile.",
      url: fileUri.uri,
      dialogTitle: "Partager le classeur Excel",
    });
  }
}

function buildExportErrorMessage(error) {
  const rawMessage = String(error?.message || "").toLowerCase();
  if (rawMessage.includes("export natif")) {
    return "L'export a échoué : export natif indisponible";
  }
  if (rawMessage.includes("share")) {
    return "L'export a échoué : partage natif indisponible";
  }

  return "L'export a échoué";
}

function applyBudgetRowsToWorkbook(workbook, budgetModel) {
  const sheet = workbook.Sheets[JOURNAL_SHEET_NAME];
  const range = XLSX.utils.decode_range(sheet["!ref"] || "A1:A1");
  const clearEndRow = Math.max(budgetModel.clearEndRow, START_ROW + budgetModel.rows.length + 4);

  for (let row = START_ROW; row <= clearEndRow; row += 1) {
    delete sheet[`${DATE_COL}${row}`];
    delete sheet[`${CATEGORY_COL}${row}`];
    delete sheet[`${VALUE_COL}${row}`];
  }

  budgetModel.rows.forEach((row, index) => {
    const sheetRow = START_ROW + index;
    const isoDate = normalizeDateValue(row.Date);
    const amountNumber = parseAmount(row.Value);

    if (isoDate) {
      sheet[`${DATE_COL}${sheetRow}`] = {
        t: "n",
        v: isoDateToExcelSerial(isoDate),
        z: "m/d/yyyy",
      };
    }

    if (row.Categories) {
      sheet[`${CATEGORY_COL}${sheetRow}`] = {
        t: "s",
        v: row.Categories,
      };
    }

    if (Number.isFinite(amountNumber)) {
      sheet[`${VALUE_COL}${sheetRow}`] = {
        t: "n",
        v: amountNumber,
      };
    } else if (row.Value) {
      sheet[`${VALUE_COL}${sheetRow}`] = {
        t: "s",
        v: row.Value,
      };
    }
  });

  range.e.r = Math.max(range.e.r, START_ROW + budgetModel.rows.length + 2);
  sheet["!ref"] = XLSX.utils.encode_range(range);
}

function renderAll() {
  renderStaticUiText();
  syncActiveViewForCurrentTab();
  renderAppTabs();
  renderWelcomeScreen();
  syncRecapFilters();
  renderSectionHeading();
  renderStats();
  renderCards();
  renderEditor();
  renderControls();
  renderCloudPanel();
  renderDraftStatus();
  renderAppShellState();
}

function shouldShowWelcomeScreen() {
  return state.mode !== "budget" &&
    state.appTab !== APP_TAB_SHARE &&
    isStartupWelcomeModeEnabled();
}

function buildWelcomeScreenMarkup() {
  const showRestore = hasStoredBudgetDraft();
  return `
    <div class="welcome-screen-grid">
      <div class="welcome-copy">
        <p class="section-kicker">${escapeHtml(t("welcome.kicker"))}</p>
        <h2>${escapeHtml(t("welcome.title"))}</h2>
        <p>
          ${escapeHtml(t("welcome.description"))}
        </p>
        <div class="welcome-points">
          <span class="presence-chip">${escapeHtml(t("welcome.pointOffline"))}</span>
          <span class="presence-chip">${escapeHtml(t("welcome.pointShareLater"))}</span>
          <span class="presence-chip">${escapeHtml(t("welcome.pointExportAnytime"))}</span>
        </div>
      </div>
      <div class="welcome-actions">
        <button type="button" class="button primary" data-empty-action="start-local">${escapeHtml(t("startup.startLocal"))}</button>
        <button type="button" class="button secondary" data-empty-action="import-excel">${escapeHtml(t("startup.importExcel"))}</button>
        <button type="button" class="button ghost" data-empty-action="go-share">${escapeHtml(t("startup.joinShared"))}</button>
        ${showRestore ? `<button type="button" class="button ghost" data-empty-action="restore-draft">${escapeHtml(t("startup.restoreDraft"))}</button>` : ""}
      </div>
    </div>
  `;
}

function renderWelcomeScreen() {
  if (!refs.welcomeScreen) {
    return;
  }

  const visible = shouldShowWelcomeScreen();
  refs.welcomeScreen.classList.toggle("hidden", !visible);
  if (!visible) {
    refs.welcomeScreen.innerHTML = "";
    return;
  }

  refs.welcomeScreen.innerHTML = buildWelcomeScreenMarkup();
}

function renderStaticUiText() {
  setDocumentLanguage();
  applyUiTheme();
  document.title = "BUDEGETAPP";

  setNodeText(document.querySelector(".hero-badge"), t("hero.badge"));
  setNodeText(document.querySelector(".hero-kicker"), t("hero.kicker"));
  setNodeText(document.querySelector(".hero-pill:nth-of-type(1) .hero-pill-label"), t("hero.periodActive"));
  setNodeText(document.querySelector(".hero-pill:nth-of-type(2) .hero-pill-label"), t("hero.fileActive"));
  setNodeText(document.querySelector(".hero-pill:nth-of-type(3) .hero-pill-label"), t("hero.mode"));
  setNodeText(document.querySelector(".app-nav-copy .section-kicker"), t("nav.kicker"));

  setNodeText(refs.filePickerField?.querySelector(".file-picker-label"), t("toolbar.filePickerLabel"));
  setNodeText(refs.filePickerField?.querySelector(".file-picker-hint"), t("toolbar.filePickerHint"));
  setNodeText(refs.recapYearField?.querySelector("span"), t("toolbar.year"));
  setNodeText(refs.recapMonthField?.querySelector("span"), t("toolbar.month"));
  setNodeText(refs.recapRangeField?.querySelector("span"), t("toolbar.period"));
  setNodeText(refs.searchField?.querySelector("span"), t("toolbar.search"));
  setNodeText(document.querySelector("#recap-month-field .control-hint"), t("toolbar.monthHint"));

  const cloudHeading = refs.cloudPanel?.querySelector(".cloud-heading");
  setNodeText(cloudHeading?.querySelector(".section-kicker"), t("share.kicker"));
  setNodeText(cloudHeading?.querySelector("h2"), t("share.title"));
  setNodeText(refs.cloudEmailInput?.closest("label")?.querySelector("span"), t("share.emailLabel"));
  setNodeText(refs.cloudCodeInput?.closest("label")?.querySelector("span"), t("share.codeLabel"));

  const collaborationHeading = refs.cloudCollaborationPanel?.querySelector(".section-heading");
  setNodeText(collaborationHeading?.querySelector(".section-kicker"), t("share.collaborationKicker"));
  setNodeText(collaborationHeading?.querySelector("h2"), t("share.collaborationTitle"));

  const alertHeading = refs.budgetAlertPanel?.querySelector(".section-heading");
  setNodeText(alertHeading?.querySelector(".section-kicker"), t("share.alertsKicker"));
  setNodeText(alertHeading?.querySelector("h2"), t("share.alertsTitle"));
  setNodeText(refs.budgetAlertEnabled?.closest("label")?.querySelector("span"), t("share.alertsEnable"));
  setNodeText(refs.budgetAlertEmail?.closest("label")?.querySelector("span"), t("share.alertsRecipient"));
  setNodeText(refs.budgetAlertCooldown?.closest("label")?.querySelector("span"), t("share.alertsCooldown"));

    const settingsHeading = refs.settingsPanel?.querySelector(".section-heading");
    setNodeText(settingsHeading?.querySelector(".section-kicker"), t("share.settingsKicker"));
    setNodeText(settingsHeading?.querySelector("h2"), t("share.settingsTitle"));
    setNodeText(refs.settingTheme?.closest("label")?.querySelector("span"), t("settings.theme"));
    setNodeText(refs.settingAutoRestore?.closest("label")?.querySelector("span"), t("settings.autoRestore"));
    setNodeText(refs.settingShowAlerts?.closest("label")?.querySelector("span"), t("settings.showAlerts"));
    setNodeText(refs.settingShowSuggestions?.closest("label")?.querySelector("span"), t("settings.showSuggestions"));
    setNodeText(refs.settingLanguage?.closest("label")?.querySelector("span"), t("settings.language"));

    if (refs.settingTheme) {
      const options = Array.from(refs.settingTheme.options);
      const autoOption = options.find((option) => option.value === "auto");
      const lightOption = options.find((option) => option.value === "light");
      const darkOption = options.find((option) => option.value === "dark");
      if (autoOption) autoOption.textContent = t("theme.auto");
      if (lightOption) lightOption.textContent = t("theme.light");
      if (darkOption) darkOption.textContent = t("theme.dark");
    }

    if (refs.settingLanguage) {
      const options = Array.from(refs.settingLanguage.options);
      const frOption = options.find((option) => option.value === "fr");
      const enOption = options.find((option) => option.value === "en");
      if (frOption) frOption.textContent = t("language.fr");
    if (enOption) enOption.textContent = t("language.en");
  }

  const historyHeading = refs.historyPanel?.querySelector(".section-heading");
  setNodeText(historyHeading?.querySelector(".section-kicker"), t("share.historyKicker"));
  setNodeText(historyHeading?.querySelector("h2"), t("share.historyTitle"));
  setNodeText(refs.undoLastActionButton, t("history.undo"));
  if (refs.libraryWarning) {
    refs.libraryWarning.innerHTML = getCurrentLanguage() === "en"
      ? 'The Excel library is not loaded. Check that the files in the <code>vendor</code> folder are present, then reload the page.'
      : 'La bibliothèque Excel n\'est pas chargée. Vérifiez que les fichiers du dossier <code>vendor</code> sont bien présents, puis rechargez la page.';
  }
}

function renderAppTabs() {
  const tabMeta = {
    [APP_TAB_DASHBOARD]: {
      title: t("tab.dashboard.title"),
      description: t("tab.dashboard.description"),
    },
    [APP_TAB_PLAN]: {
      title: t("tab.plan.title"),
      description: t("tab.plan.description"),
    },
    [APP_TAB_TRANSACTIONS]: {
      title: t("tab.transactions.title"),
      description: t("tab.transactions.description"),
    },
    [APP_TAB_FORM]: {
      title: t("tab.form.title"),
      description: t("tab.form.description"),
    },
    [APP_TAB_RECURRING]: {
      title: t("tab.recurring.title"),
      description: t("tab.recurring.description"),
    },
    [APP_TAB_ANALYSIS]: {
      title: t("tab.analysis.title"),
      description: t("tab.analysis.description"),
    },
    [APP_TAB_SHARE]: {
      title: t("tab.share.title"),
      description: t("tab.share.description"),
    },
  };
  const currentMeta = tabMeta[state.appTab] || tabMeta[APP_TAB_DASHBOARD];
  const showShare = state.appTab === APP_TAB_SHARE;
  const showPlan = state.appTab === APP_TAB_PLAN;
  const showTransactions = state.appTab === APP_TAB_TRANSACTIONS;
  const showForm = state.appTab === APP_TAB_FORM;
  const showRecurring = state.appTab === APP_TAB_RECURRING;
  const showAnalysis = state.appTab === APP_TAB_ANALYSIS;
  const showDashboard = state.appTab === APP_TAB_DASHBOARD;
  const showWelcome = shouldShowWelcomeScreen();
  const showWideContent = !showShare && (showDashboard || showPlan || showForm || showRecurring || showAnalysis || showTransactions);

  refs.appTabTitle.textContent = currentMeta.title;
  refs.appTabDescription.textContent = currentMeta.description;
  refs.appTabButtons.forEach((button) => {
    const active = button.dataset.appTab === state.appTab;
    const tabKey = String(button.dataset.appTab || "");
    setNodeText(button.querySelector(".app-tab-label"), t(`tab.${tabKey}.label`));
    setNodeText(button.querySelector(".app-tab-meta"), t(`tab.${tabKey}.meta`));
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });

  refs.appNav.classList.toggle("hidden", showWelcome);
  refs.toolbar.classList.toggle("hidden", showWelcome);
  refs.cloudPanel.classList.toggle("hidden", !showShare || showWelcome);
  refs.statusStrip.classList.toggle("hidden", showShare || showPlan || showWelcome);
  refs.layout.classList.toggle("hidden", showShare || showWelcome);
  refs.layout.classList.toggle("layout-wide", showWideContent);
  refs.editorArea.classList.toggle("hidden", !(showForm || showPlan));
  refs.cardsArea.classList.toggle("hidden", showShare || showForm || showPlan);
}

function syncRecapFilters() {
  const availableYears = getAvailableRecapYears();

  if (!availableYears.length) {
    state.recapFilters = createEmptyRecapFilters();
    renderRecapFilterOptions([], []);
    renderRecapRangeOptions();
    return;
  }

  if (state.recapFilters.year !== "all" && !availableYears.includes(state.recapFilters.year)) {
    state.recapFilters.year = "all";
  }

  const availableMonths = getAvailableRecapMonths(state.recapFilters.year);
  state.recapFilters.months = getSelectedRecapMonths().filter((month) => availableMonths.includes(month));
  state.recapFilters.month = state.recapFilters.months[0] || "all";
  state.recapFilters.rangeMonths = "all";

  renderRecapFilterOptions(availableYears, availableMonths);
  renderRecapRangeOptions();
}

function renderRecapFilterOptions(availableYears, availableMonths) {
  refs.recapYearSelect.innerHTML = "";
  appendSelectOption(refs.recapYearSelect, "all", "Toutes les années");
  availableYears.forEach((year) => appendSelectOption(refs.recapYearSelect, year, year));
  refs.recapYearSelect.value = state.recapFilters.year;

  refs.recapMonthSelect.innerHTML = "";
  const selectedMonths = new Set(getSelectedRecapMonths());
  appendSelectOption(refs.recapMonthSelect, "all", "Tous les mois");
  availableMonths.forEach((month) => {
    const option = document.createElement("option");
    option.value = month;
    option.textContent = formatMonthLabel(month);
    option.selected = selectedMonths.has(month);
    refs.recapMonthSelect.appendChild(option);
  });
  refs.recapMonthSelect.value = selectedMonths.size ? Array.from(selectedMonths)[0] : "all";

  refs.recapMonthPanel.innerHTML = "";
  refs.recapMonthPanel.appendChild(
    createRecapMonthOptionButton("all", "Tous les mois", !selectedMonths.size)
  );
  availableMonths.forEach((month) => {
    refs.recapMonthPanel.appendChild(
      createRecapMonthOptionButton(month, formatMonthLabel(month), selectedMonths.has(month))
    );
  });
  refs.recapMonthTrigger.textContent = buildRecapMonthTriggerLabel();
}

function renderRecapRangeOptions() {
  state.recapFilters.rangeMonths = "all";
  refs.recapRangeSelect.innerHTML = "";
  appendSelectOption(refs.recapRangeSelect, "all", "Toute la période");
  refs.recapRangeSelect.value = state.recapFilters.rangeMonths;
}

function appendSelectOption(select, value, label) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  select.appendChild(option);
}

function createRecapMonthOptionButton(value, label, active) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "month-picker-option";
  button.dataset.monthValue = value;
  button.classList.toggle("is-active", Boolean(active));
  button.innerHTML = `<span>${escapeHtml(label)}</span><span class="month-picker-option-check">${active ? "✓" : ""}</span>`;
  return button;
}

function renderSectionHeading() {
  if (state.appTab === APP_TAB_PLAN) {
    refs.cardsKicker.textContent = t("cards.kickerBudget");
    refs.cardsTitle.textContent = t("cards.titlePlanVsActual");
    refs.cardsCaption.textContent = t("cards.captionPlanVsActual");
    return;
  }

  if (state.appTab === APP_TAB_RECURRING) {
    refs.cardsKicker.textContent = t("cards.kickerRecurring");
    refs.cardsTitle.textContent = t("cards.titleRecurring");
    refs.cardsCaption.textContent = t("cards.captionRecurring");
    return;
  }

  if (state.activeView === RECAP_SHEET_NAME) {
    refs.cardsKicker.textContent = t("cards.kickerRecap");
    refs.cardsTitle.textContent = t("cards.titleRecap");
    refs.cardsCaption.textContent = t("cards.captionRecap");
    return;
  }

  if (state.activeView === ANALYSIS_VIEW_NAME) {
    refs.cardsKicker.textContent = t("cards.kickerAnalysis");
    refs.cardsTitle.textContent = t("cards.titleAnalysis");
    refs.cardsCaption.textContent = t("cards.captionAnalysis");
    return;
  }

  refs.cardsKicker.textContent = t("cards.kickerJournal");
  refs.cardsTitle.textContent = t("cards.titleJournal");
  refs.cardsCaption.textContent = t("cards.captionJournal");
}

function renderControls() {
  const hasBudget = state.mode === "budget";
  const busy = state.cloud.syncBusy;
  const journalActive = hasBudget && state.activeView === JOURNAL_SHEET_NAME;
  const recapActive = hasBudget && state.activeView === RECAP_SHEET_NAME;
  const analysisActive = hasBudget && state.activeView === ANALYSIS_VIEW_NAME;
  const shareTab = state.appTab === APP_TAB_SHARE;
  const planTab = state.appTab === APP_TAB_PLAN;
  const planEditing = planTab && state.planEditing;
  const formTab = state.appTab === APP_TAB_FORM;
  const recurringTab = state.appTab === APP_TAB_RECURRING;
  const transactionTab = state.appTab === APP_TAB_TRANSACTIONS;
  const draft = readStoredDraft();
  const hasStoredDraft = Boolean(draft && draft.mode === "budget" && Array.isArray(draft.rows));
  const availableYears = getAvailableRecapYears();
  const availableMonths = getAvailableRecapMonths(state.recapFilters.year);

  refs.searchInput.disabled = !hasBudget || shareTab || formTab || planTab || recurringTab;
  refs.searchInput.placeholder = recapActive
    ? t("toolbar.searchPlaceholderRecap")
    : analysisActive
      ? t("toolbar.searchPlaceholderAnalysis")
      : t("toolbar.searchPlaceholderJournal");
  refs.openSourceButton.disabled = !window.XLSX || !canUseSourceLinkPicker();
  refs.openSourceButton.textContent = state.mode === "budget" && !state.sourceSafety.allowDirectWrite
    ? t("toolbar.sourceProtected")
    : hasLinkedWritableSource()
      ? t("toolbar.sourceLinked")
      : t("toolbar.openSource");
  refs.openSourceButton.title = state.mode === "budget" && !state.sourceSafety.allowDirectWrite
    ? state.sourceSafety.reason
    : canUseSourceLinkPicker()
      ? t("toolbar.openSourceTitleReady")
      : buildSourceLinkUnavailableMessage();
  refs.saveSourceButton.disabled = !canSaveToSource();
  refs.saveSourceButton.textContent = state.mode === "budget" && !state.sourceSafety.allowDirectWrite
    ? t("toolbar.sourcePreserved")
    : t("toolbar.saveSource");
  refs.saveSourceButton.title = canSaveToSource()
    ? t("toolbar.saveSourceTitleReady")
    : buildSourceLinkUnavailableMessage();
  refs.saveDraftButton.disabled = !hasBudget;
  refs.saveDraftButton.textContent = t("toolbar.saveDraft");
  refs.restoreDraftButton.textContent = t("toolbar.restoreDraft");
  refs.restartButton.textContent = t("toolbar.restart");
  refs.exportButton.textContent = t("toolbar.exportExcel");
  setNodeText(refs.exportJournalButton, t("toolbar.exportJournal"));
  setNodeText(refs.exportCompleteButton, t("toolbar.exportComplete"));
  refs.saveDraftButton.title = hasBudget
    ? t("toolbar.saveDraftTitleReady")
    : t("toolbar.saveDraftTitleMissing");
  refs.restoreDraftButton.disabled = !hasStoredDraft;
  refs.restoreDraftButton.title = hasStoredDraft
    ? t("toolbar.restoreDraftTitleReady")
    : t("toolbar.restoreDraftTitleMissing");
  refs.restartButton.disabled = busy;
  refs.restartButton.title = t("toolbar.restartTitle");
  refs.filePickerField.classList.toggle("hidden", !shareTab);
  refs.searchField.classList.toggle("hidden", shareTab || formTab || planTab || recurringTab);
  refs.recapYearField.classList.toggle("hidden", !hasBudget || shareTab || formTab || planTab || recurringTab);
  refs.recapMonthField.classList.toggle("hidden", !hasBudget || shareTab || formTab || planTab || recurringTab);
  refs.recapRangeField.classList.add("hidden");
  refs.recapYearSelect.disabled = !hasBudget || !availableYears.length;
  refs.recapMonthSelect.disabled = !hasBudget || !availableMonths.length;
  refs.recapMonthTrigger.disabled = !hasBudget || !availableMonths.length;
  refs.recapRangeSelect.disabled = true;
  if (refs.recapMonthTrigger.disabled) {
    setRecapMonthPickerOpen(false);
  }
  refs.openSourceButton.classList.toggle("hidden", !shareTab);
  refs.saveSourceButton.classList.toggle("hidden", !shareTab);
  refs.saveDraftButton.classList.toggle("hidden", !shareTab);
  refs.restoreDraftButton.classList.toggle("hidden", !shareTab);
  refs.restartButton.classList.toggle("hidden", !shareTab);
  refs.exportMenu?.classList.toggle("hidden", !shareTab);
  refs.addButton.classList.toggle("hidden", !(transactionTab || planTab));
  refs.addButton.textContent = planTab ? t("toolbar.editBudget") : t("toolbar.newTransaction");
  refs.addButton.disabled = planTab ? !hasBudget || planEditing : !journalActive || !transactionTab;
  refs.mobileFab?.classList.toggle("hidden", !journalActive || !transactionTab);
  if (refs.mobileFab) {
    refs.mobileFab.disabled = !journalActive || !transactionTab;
  }
  refs.exportButton.disabled = !hasBudget || !window.XLSX;
  if (refs.exportJournalButton) {
    refs.exportJournalButton.disabled = refs.exportButton.disabled;
  }
  if (refs.exportCompleteButton) {
    refs.exportCompleteButton.disabled = refs.exportButton.disabled;
  }
  if (!shareTab || refs.exportButton.disabled) {
    setExportMenuOpen(false);
  }
  refs.saveButton.disabled = planTab ? !hasBudget || !planEditing : !journalActive || !formTab;
  refs.cancelButton.disabled = planTab ? !hasBudget || !planEditing : !journalActive || !formTab;
  refs.saveButton.classList.toggle("hidden", planTab && !planEditing);
  refs.cancelButton.classList.toggle("hidden", planTab && !planEditing);
  refs.formActions.classList.toggle("hidden", planTab && !planEditing);
  renderTransactionsViewToggle(transactionTab);
}

function renderTransactionsViewToggle(isVisible) {
  if (!refs.transactionsViewToggle) {
    return;
  }

  refs.transactionsViewToggle.classList.toggle("hidden", !isVisible);
  if (!isVisible) {
    refs.transactionsViewToggle.innerHTML = "";
    return;
  }

  const currentView = getCurrentTransactionView();
  refs.transactionsViewToggle.innerHTML = `
    <span class="view-toggle-label">${escapeHtml(t("tab.transactions.viewLabel"))}</span>
    ${SUPPORTED_TRANSACTION_VIEWS.map((view) => `
      <button
        type="button"
        class="view-toggle-button${currentView === view ? " is-active" : ""}"
        data-transaction-view="${escapeHtml(view)}"
        aria-pressed="${currentView === view ? "true" : "false"}"
      >
        ${escapeHtml(t(`tab.transactions.view${view === "cards" ? "Cards" : "Compact"}`))}
      </button>
    `).join("")}
  `;
}

function renderCloudPanel() {
  const cloudReady = state.cloud.ready;
  const signedIn = hasSupabaseSession();
  const spaceSelected = hasCloudSpaceSelected();
  const busy = state.cloud.syncBusy;
  const typedJoinCode = String(state.cloud.space.joinCode || "").trim();
  const canPublish = canUseSupabaseCloud() && (hasLocalBudgetData() || hasStoredBudgetDraft());
  const publishNeedsRestore = canUseSupabaseCloud() && !hasLocalBudgetData() && hasStoredBudgetDraft();
  const alertConfig = getSupabaseConfig();
  const alertSettings = sanitizeBudgetAlertSettings(state.cloud.alerts);
  const onlineUsers = Array.isArray(state.cloud.collaboration.onlineUsers) ? state.cloud.collaboration.onlineUsers : [];
  const otherOnlineUsers = onlineUsers.filter((entry) => entry.clientKey !== state.cloud.collaboration.clientKey);
  state.cloud.alerts = alertSettings;
  const alertFunctionReady = Boolean(alertConfig.budgetAlertFunctionName);
  const effectiveAlertRecipient = getBudgetAlertRecipientEmail();
  const alertControlsDisabled = !alertFunctionReady || busy;

  refs.cloudStatus.textContent = state.cloud.status;
  refs.cloudEmailInput.value = refs.cloudEmailInput.matches(":focus")
    ? refs.cloudEmailInput.value
    : state.cloud.email;
  refs.cloudCodeInput.value = refs.cloudCodeInput.matches(":focus")
    ? refs.cloudCodeInput.value
    : state.cloud.space.joinCode;

  refs.cloudEmailInput.disabled = busy || signedIn;
  refs.cloudCodeInput.disabled = busy;
  refs.cloudMagicLinkButton.disabled = !cloudReady || busy || signedIn;
  refs.cloudSignOutButton.disabled = !cloudReady || busy || !signedIn;
  refs.cloudCreateSpaceButton.disabled = !cloudReady || busy || !signedIn;
  refs.cloudJoinSpaceButton.disabled = !cloudReady || busy || !signedIn || !typedJoinCode;
  refs.cloudPushButton.disabled = !canPublish || busy;
  refs.cloudPullButton.disabled = !canUseSupabaseCloud() || busy;

  refs.cloudCodeInput.placeholder = signedIn
    ? t("cloud.codePlaceholderSignedIn")
    : t("cloud.codePlaceholderSignedOut");
  refs.cloudCodeInput.title = signedIn
    ? t("cloud.codeTitleSignedIn")
    : t("cloud.codeTitleSignedOut");
  refs.cloudJoinSpaceButton.title = !signedIn
    ? t("cloud.joinTitleSignedOut")
    : !typedJoinCode
      ? t("cloud.joinTitleNoCode")
      : t("cloud.joinTitleReady");

  refs.cloudMagicLinkButton.textContent = busy && !signedIn ? t("share.connecting") : t("share.magicLink");
  refs.cloudSignOutButton.textContent = busy && signedIn ? t("share.pleaseWait") : t("share.signOut");
  refs.cloudCreateSpaceButton.textContent = t("share.createSpace");
  refs.cloudJoinSpaceButton.textContent = t("share.join");
  refs.cloudPushButton.textContent = publishNeedsRestore ? t("share.restoreAndPublish") : t("share.publishLocal");
  refs.cloudPullButton.textContent = t("share.reloadCloud");

  const identityLabel = signedIn
    ? t("cloud.identityConnected", { email: state.cloud.user?.email || state.cloud.email || "connected" })
    : t("cloud.identityDisconnected");
  const spaceLabel = spaceSelected
    ? t("cloud.spaceSelected", { name: state.cloud.space.name || (getCurrentLanguage() === "en" ? "shared budget" : "budget partagé") })
    : t("cloud.spaceNone");
  const codeLabel = spaceSelected && state.cloud.space.joinCode
    ? t("cloud.joinCodeSelected", { code: state.cloud.space.joinCode })
    : t("cloud.joinCodeNone");
  const pullLabel = state.cloud.lastPulledAt
    ? t("cloud.lastPull", { value: formatDraftSavedAt(state.cloud.lastPulledAt) })
    : t("cloud.lastPullNone");
  const pushLabel = state.cloud.lastPushedAt
    ? t("cloud.lastPush", { value: formatDraftSavedAt(state.cloud.lastPushedAt) })
    : t("cloud.lastPushNone");

  refs.cloudSpaceHint.textContent = [identityLabel, spaceLabel, codeLabel, pullLabel, pushLabel].join(" | ");

  if (!cloudReady) {
    refs.cloudCollaborationStatus.textContent = t("cloud.collabNotReady");
  } else if (!signedIn) {
    refs.cloudCollaborationStatus.textContent = t("cloud.collabNotSignedIn");
  } else if (!spaceSelected) {
    refs.cloudCollaborationStatus.textContent = t("cloud.collabNoSpace");
  } else if (!otherOnlineUsers.length) {
    refs.cloudCollaborationStatus.textContent = t("cloud.collabAlone");
  } else {
    refs.cloudCollaborationStatus.textContent = t("cloud.collabOthers", {
      count: otherOnlineUsers.length,
      plural: otherOnlineUsers.length > 1 ? "s" : "",
    });
  }

  refs.cloudPresenceList.innerHTML = onlineUsers.length
    ? onlineUsers.map((entry) => {
        const isSelf = entry.clientKey === state.cloud.collaboration.clientKey;
        const label = escapeHtml(isSelf ? t("cloud.presenceYou") : entry.displayName || getCloudDisplayName(entry.email));
        const subtitle = escapeHtml(
          entry.activityLabel
            ? entry.activityLabel
            : t("cloud.presenceInTab", { tab: entry.appTabLabel || getAppTabLabel(entry.appTab) })
        );
        return `
          <span class="presence-chip${isSelf ? " is-self" : ""}">
            <span class="presence-dot" aria-hidden="true"></span>
            <span class="presence-copy">
              <strong>${label}</strong>
              <small>${subtitle}</small>
            </span>
          </span>
        `;
      }).join("")
    : `<span class="presence-chip is-empty"><span class="presence-copy"><strong>${escapeHtml(t("cloud.presenceEmptyTitle"))}</strong><small>${escapeHtml(t("cloud.presenceEmptyBody"))}</small></span></span>`;

  refs.cloudLiveActivity.textContent = state.cloud.collaboration.liveMessage
    ? t("cloud.livePrefix", { message: state.cloud.collaboration.liveMessage })
    : t("cloud.liveEmpty");

  refs.budgetAlertEnabled.checked = alertSettings.enabled;
  refs.budgetAlertEmail.value = refs.budgetAlertEmail.matches(":focus")
    ? refs.budgetAlertEmail.value
    : alertSettings.recipientEmail;
  refs.budgetAlertCooldown.value = String(alertSettings.cooldownHours);

  refs.budgetAlertEnabled.disabled = alertControlsDisabled;
  refs.budgetAlertEmail.disabled = alertControlsDisabled || !alertSettings.enabled;
  refs.budgetAlertCooldown.disabled = alertControlsDisabled || !alertSettings.enabled;

  if (!alertFunctionReady) {
    refs.budgetAlertStatus.textContent = t("alerts.statusNotConfigured");
  } else if (!cloudReady) {
    refs.budgetAlertStatus.textContent = t("alerts.statusNotReady");
  } else if (!alertSettings.enabled) {
    refs.budgetAlertStatus.textContent = t("alerts.statusDisabled");
  } else if (!signedIn) {
    refs.budgetAlertStatus.textContent = t("alerts.statusSignIn");
  } else if (!spaceSelected) {
    refs.budgetAlertStatus.textContent = t("alerts.statusNoSpace");
  } else if (!effectiveAlertRecipient) {
    refs.budgetAlertStatus.textContent = t("alerts.statusNoRecipient");
  } else {
    refs.budgetAlertStatus.textContent = t("alerts.statusRecipient", {
      email: effectiveAlertRecipient,
      hours: alertSettings.cooldownHours,
    });
  }

  refs.budgetAlertHint.textContent = alertSettings.recipientEmail
    ? t("alerts.hintRecipient")
    : t("alerts.hintNoRecipient");

  refs.settingTheme.value = getCurrentThemePreference();
  refs.settingLanguage.value = getCurrentLanguage();
  refs.settingAutoRestore.checked = state.settings.autoRestoreDraft;
  refs.settingShowAlerts.checked = state.settings.showBudgetFraAlerts;
  refs.settingShowSuggestions.checked = state.settings.showBudgetFraSuggestions;
  refs.settingTheme.disabled = busy;
  refs.settingLanguage.disabled = busy;
  refs.settingAutoRestore.disabled = busy;
  refs.settingShowAlerts.disabled = busy;
  refs.settingShowSuggestions.disabled = busy;
  refs.settingsStatus.textContent = state.settings.autoRestoreDraft
    ? t("settings.statusOn")
    : t("settings.statusOff");
  refs.settingsHint.textContent = state.settings.showBudgetFraSuggestions
    ? t("settings.hintOn")
    : t("settings.hintOff");

  refs.undoLastActionButton.disabled = !canUndoLastAction() || busy;
  refs.historyStatus.textContent = canUndoLastAction()
    ? t("history.statusReady")
    : t("history.statusEmpty");
  refs.historyList.innerHTML = state.history.recentEvents.length
    ? state.history.recentEvents
      .map((entry) => `<span class="presence-chip">${escapeHtml(entry.label)} · ${escapeHtml(formatDraftSavedAt(entry.createdAt) || "à l'instant")}</span>`)
      .join("")
    : `<span class="presence-chip">${escapeHtml(t("history.empty"))}</span>`;
}

function renderDraftStatus() {
  const draft = readStoredDraft();
  const hasStoredDraft = Boolean(draft && draft.mode === "budget" && Array.isArray(draft.rows));

  if (!hasStoredDraft) {
    refs.draftStatus.textContent = t("draft.none");
    return;
  }

  const savedAtLabel = formatDraftSavedAt(draft.savedAt);
  const suffix = savedAtLabel
    ? (getCurrentLanguage() === "en" ? ` Last saved ${savedAtLabel}.` : ` Dernière sauvegarde ${savedAtLabel}.`)
    : "";

  if (canUseSupabaseCloud()) {
    refs.draftStatus.textContent = t("draft.cloud", { suffix });
    return;
  }

  if (state.mode === "budget" && !state.workbook) {
    refs.draftStatus.textContent = t("draft.local", { suffix });
    return;
  }

  if (state.mode === "budget") {
    refs.draftStatus.textContent = t("draft.backup", { suffix });
    return;
  }

  refs.draftStatus.textContent = t("draft.available", { suffix });
}

function renderStats() {
  if (state.mode !== "budget") {
    refs.recordsLabel.textContent = t("stats.transactions");
    refs.recordsCount.textContent = "0";
    refs.columnsLabel.textContent = t("stats.fields");
    refs.columnsCount.textContent = "0";
    refs.activeSheet.textContent = t("stats.noSheet");
    refs.lastAction.textContent = state.lastAction;
    refs.metricMode.textContent = t("stats.readyImport");
    refs.metricFile.textContent = buildWorkbookLabel();
    refs.metricSave.textContent = canUseSourceLinkPicker() ? t("stats.loadOrLinkSource") : t("stats.loadFile");
    return;
  }

  if (state.activeView === RECAP_SHEET_NAME) {
    const recapView = buildLiveRecapView();
    refs.recordsLabel.textContent = t("stats.transactions");
    refs.recordsCount.textContent = String(recapView.transactionCount);
    refs.columnsLabel.textContent = t("stats.monthsAvailable");
    refs.columnsCount.textContent = String(recapView.availableMonthCount);
    refs.activeSheet.textContent = RECAP_SHEET_NAME;
    refs.lastAction.textContent = state.lastAction;
    refs.metricMode.textContent = t("stats.recapView", { period: recapView.periodLabel });
    refs.metricFile.textContent = buildWorkbookLabel();
    refs.metricSave.textContent = getSaveCapabilityLabel();
    return;
  }

  if (state.activeView === ANALYSIS_VIEW_NAME) {
    const analysisView = buildLiveAnalysisView();
    refs.recordsLabel.textContent = t("stats.periods");
    refs.recordsCount.textContent = String(analysisView.seriesRows.length);
    refs.columnsLabel.textContent = t("stats.charts");
    refs.columnsCount.textContent = String(analysisView.chartCount);
    refs.activeSheet.textContent = ANALYSIS_VIEW_NAME;
    refs.lastAction.textContent = state.lastAction;
    refs.metricMode.textContent = t("stats.analysisView", { period: analysisView.periodLabel });
    refs.metricFile.textContent = buildWorkbookLabel();
    refs.metricSave.textContent = getSaveCapabilityLabel();
    return;
  }

  const filteredRows = getFilteredJournalRows();
  refs.recordsLabel.textContent = t("stats.transactions");
  refs.recordsCount.textContent = String(filteredRows.length);
  refs.columnsLabel.textContent = t("stats.fields");
  refs.columnsCount.textContent = "3";
  refs.activeSheet.textContent = JOURNAL_SHEET_NAME;
  refs.lastAction.textContent = state.lastAction;
  refs.metricMode.textContent = hasActiveRecapPeriodFilter()
    ? t("stats.journalViewPeriod", { period: buildRecapPeriodLabel() })
    : t("stats.journalView");
  refs.metricFile.textContent = buildWorkbookLabel();
  refs.metricSave.textContent = getSaveCapabilityLabel();
}

function getExportCapabilityLabel() {
  return canUseNativeExcelExport() ? t("capability.nativeExcelShare") : t("capability.exportWorkbook");
}

function getSaveCapabilityLabel() {
  if (canUseSupabaseCloud()) {
    return t("capability.supabaseActive");
  }

  if (canSaveToSource()) {
    return t("capability.sourceLinkedAuto");
  }

  if (state.mode === "budget" && !state.workbook) {
    return t("capability.localStandaloneExport");
  }

  if (state.mode === "budget" && !state.sourceSafety.allowDirectWrite) {
    return t("capability.sourcePreservedCopy");
  }

  if (canUseBrowserSourcePicker() || canUseAndroidSourcePicker()) {
    return t("capability.exportOrLink");
  }

  return getExportCapabilityLabel();
}

function buildWorkbookLabel() {
  if (hasCloudSpaceSelected()) {
    const cloudName = state.cloud.space.name || state.cloud.space.joinCode || "Budget partage";
    return t("workbook.sharedCloud", { name: cloudName });
  }

  if (!state.workbookName) {
    return state.mode === "budget" ? t("workbook.localData") : t("workbook.noFile");
  }

  if (state.mode === "budget" && !state.workbook) {
    return t("workbook.localDataNamed", { name: state.workbookName });
  }

  if (state.mode === "budget" && !state.sourceSafety.allowDirectWrite) {
    return t("workbook.protectedSource", { name: state.workbookName });
  }

  return hasLinkedWritableSource() ? t("workbook.linkedSource", { name: state.workbookName }) : state.workbookName;
}

function getFilteredJournalRows() {
  const query = state.search;

  return state.budget.rows
    .map((row, index) => ({ row, index }))
    .filter(({ row }) => {
      if (hasActiveRecapPeriodFilter() && !matchesRecapPeriod(row)) {
        return false;
      }

      if (!query) {
        return true;
      }

        const haystack = [
          row.Date,
          formatDateForDisplay(row.Date),
          row.Categories,
          getDisplayCategoryLabel(row.Categories || ""),
          getBudgetFraCategoryLabel(row.Categories || "", "", row.Value),
          row.Value,
          formatCurrency(row.Value),
        ].join(" ").toLowerCase();

      return haystack.includes(query);
    })
    .sort((left, right) => compareBudgetRowsForDisplay(left.row, right.row, left.index, right.index));
}

function renderCards() {
  refs.cardsGrid.innerHTML = "";
  refs.recapView.innerHTML = "";
  refs.cardsGrid.classList.remove("recurring-mode");

  if (state.mode !== "budget") {
    refs.cardsGrid.classList.remove("hidden");
    refs.recapView.classList.add("hidden");
    refs.cardsEmpty.innerHTML = buildStartupGuideMarkup();
    refs.cardsEmpty.classList.remove("hidden");
    return;
  }

  if (state.appTab === APP_TAB_DASHBOARD) {
    renderRecapView();
    return;
  }

  if (state.appTab === APP_TAB_RECURRING) {
    renderRecurringWorkspace();
    return;
  }

  if (state.appTab === APP_TAB_ANALYSIS) {
    renderAnalysisView();
    return;
  }

  renderJournalCards();
}

function renderJournalCards() {
  refs.cardsGrid.classList.remove("hidden");
  refs.recapView.classList.add("hidden");
  refs.cardsGrid.classList.toggle("compact-mode", getCurrentTransactionView() === "compact");
  const english = isEnglishUi();
  const recurringReviewPanel = renderRecurringReviewPanel({ compact: true });

  if (!state.budget.rows.length && !recurringReviewPanel) {
    refs.cardsEmpty.classList.remove("hidden");
    refs.cardsEmpty.innerHTML = state.workbook
      ? [
          "<strong>Chargez Budget_2025 Final.xlsx pour demarrer.</strong>",
          "<p>L'app utilisera Journalier!D:F et la liste de categories de Journalier!B.</p>",
        ].join("")
      : buildLocalTransactionsEmptyStateMarkup();
    return;
  }

  const filteredRows = getFilteredJournalRows();

  if (!filteredRows.length && !recurringReviewPanel) {
    refs.cardsEmpty.classList.remove("hidden");
    refs.cardsEmpty.innerHTML = buildJournalEmptyStateMarkup();
    return;
  }

  refs.cardsEmpty.classList.add("hidden");
  if (recurringReviewPanel) {
    refs.cardsGrid.appendChild(recurringReviewPanel);
  }

  if (!filteredRows.length) {
    return;
  }

  if (getCurrentTransactionView() === "compact") {
    renderJournalCompactRows(filteredRows, english);
    return;
  }

  filteredRows.forEach(({ row, index }) => {
    const card = document.createElement("article");
    card.className = `data-card${index === state.editingIndex ? " active" : ""}`;
    card.dataset.entryIndex = String(index);

    const amountLabel = formatCurrency(row.Value) || row.Value || "-";
    const dateLabel = formatDateForDisplay(row.Date) || (english ? "No date" : "Sans date");
    const parentLabel = getBudgetFraCategoryLabel(row.Categories || "", "", row.Value);
    const parentChipMarkup = parentLabel
      ? `<span class="card-parent-chip">${escapeHtml(parentLabel)}</span>`
      : "";
    const parentDetailMarkup = parentLabel
      ? createDetailMarkup(english ? "Main category" : "Grande catégorie", parentLabel)
      : "";

    card.innerHTML = `
      <div class="card-topline">
        <span class="card-index">${escapeHtml(dateLabel)}</span>
        <div class="card-actions">
          <button class="card-action" type="button" data-action="edit" aria-label="${english ? "Edit" : "Modifier"}">${english ? "Edit" : "Modifier"}</button>
          <button class="card-action delete" type="button" data-action="delete" aria-label="${english ? "Delete" : "Supprimer"}">X</button>
        </div>
      </div>
      <div>
        ${parentChipMarkup}
        <h3 class="card-title">${escapeHtml(getDisplayCategoryLabel(row.Categories || "") || (english ? "Undefined category" : "Catégorie non définie"))}</h3>
        <p class="card-subtitle">${english ? "Sheet" : "Feuille"} ${JOURNAL_SHEET_NAME}</p>
        <p class="card-amount">${escapeHtml(amountLabel)}</p>
      </div>
      <div class="card-details">
        ${createDetailMarkup(english ? "Date" : "Date", dateLabel)}
        ${createDetailMarkup(english ? "Category" : "Catégorie", getDisplayCategoryLabel(row.Categories || "") || "-")}
        ${parentDetailMarkup}
        ${createDetailMarkup(english ? "Amount" : "Montant", amountLabel)}
      </div>
    `;

    refs.cardsGrid.appendChild(card);
  });
}

function renderRecurringWorkspace() {
  refs.cardsGrid.classList.remove("hidden");
  refs.recapView.classList.add("hidden");
  refs.cardsGrid.classList.remove("compact-mode");
  refs.cardsGrid.classList.add("recurring-mode");
  refs.cardsEmpty.classList.add("hidden");

  const hub = document.createElement("div");
  hub.className = "recurring-hub";

  const reviewPanel = renderRecurringReviewPanel({ compact: true });
  if (reviewPanel) {
    hub.appendChild(reviewPanel);
  }

  hub.appendChild(renderRecurringTemplatesPanel({ showSaveButton: false }));
  refs.cardsGrid.appendChild(hub);
}

function renderJournalCompactRows(filteredRows, english) {
  filteredRows.forEach(({ row, index }) => {
    const entry = document.createElement("article");
    const parentLabel = getBudgetFraCategoryLabel(row.Categories || "", "", row.Value);
    const amountLabel = formatCurrency(row.Value) || row.Value || "-";
    const dateLabel = formatDateForDisplay(row.Date) || (english ? "No date" : "Sans date");
    const categoryLabel = getDisplayCategoryLabel(row.Categories || "") || (english ? "Undefined category" : "Catégorie non définie");
    const subtitleParts = [];

    if (parentLabel) {
      subtitleParts.push(parentLabel);
    }
    subtitleParts.push(`${english ? "Sheet" : "Feuille"} ${JOURNAL_SHEET_NAME}`);

    entry.className = `compact-entry${index === state.editingIndex ? " active" : ""}`;
    entry.dataset.entryIndex = String(index);
    entry.innerHTML = `
      <div class="compact-entry-main">
        <div class="compact-entry-top">
          <span class="compact-entry-date">${escapeHtml(dateLabel)}</span>
          ${parentLabel ? `<span class="card-parent-chip compact-entry-parent">${escapeHtml(parentLabel)}</span>` : ""}
        </div>
        <strong class="compact-entry-title">${escapeHtml(categoryLabel)}</strong>
        <p class="compact-entry-meta">${escapeHtml(subtitleParts.join(" · "))}</p>
      </div>
      <div class="compact-entry-amount">${escapeHtml(amountLabel)}</div>
      <div class="compact-entry-actions">
        <button class="card-action" type="button" data-action="edit" aria-label="${english ? "Edit" : "Modifier"}">${english ? "Edit" : "Modifier"}</button>
        <button class="card-action delete" type="button" data-action="delete" aria-label="${english ? "Delete" : "Supprimer"}">X</button>
      </div>
    `;
    refs.cardsGrid.appendChild(entry);
  });
}

function renderRecapView() {
  refs.cardsGrid.classList.add("hidden");
  refs.recapView.classList.remove("hidden");

  const recapView = buildLiveRecapView();

  if (!recapView.available) {
    refs.cardsEmpty.classList.remove("hidden");
    refs.recapView.classList.add("hidden");
    refs.cardsEmpty.innerHTML = [
      "<strong>La vue Récapitulatif n'est pas disponible.</strong>",
      "<p>Importez une première fois votre budget ou restaurez vos données locales pour reconstruire la synthèse.</p>",
    ].join("");
    return;
  }

  refs.cardsEmpty.classList.add("hidden");
  refs.recapView.innerHTML = createRecapMarkup(recapView);
}

function renderAnalysisView() {
  refs.cardsGrid.classList.add("hidden");
  refs.recapView.classList.remove("hidden");

  const analysisView = buildLiveAnalysisView();

  if (!analysisView.available) {
    refs.cardsEmpty.classList.remove("hidden");
    refs.recapView.classList.add("hidden");
    refs.cardsEmpty.innerHTML = [
      "<strong>La vue Comparaisons n'est pas disponible.</strong>",
      "<p>Importez une première fois votre budget ou restaurez vos données locales pour construire les graphiques et comparaisons.</p>",
    ].join("");
    return;
  }

  refs.cardsEmpty.classList.add("hidden");
  refs.recapView.innerHTML = createAnalysisMarkup(analysisView);
}

function buildJournalEmptyStateMarkup() {
  if (hasActiveRecapPeriodFilter() && state.search) {
    return [
      "<strong>Aucune transaction ne correspond à la recherche pour cette période.</strong>",
      "<p>Essayez un autre mot-clé ou élargissez le filtre année/mois.</p>",
    ].join("");
  }

  if (hasActiveRecapPeriodFilter()) {
    return [
      "<strong>Aucune transaction pour la période choisie.</strong>",
      "<p>Changez le filtre année/mois ou ajoutez une nouvelle fiche datée dans cette période.</p>",
    ].join("");
  }

  return [
    "<strong>Aucune transaction ne correspond à la recherche.</strong>",
    "<p>Essayez un autre mot-clé ou ajoutez une nouvelle fiche.</p>",
  ].join("");
}

function buildLiveRecapView() {
  if (state.mode !== "budget" || !state.recap.available) {
    return {
      available: false,
      snapshotDate: "",
      snapshot: null,
      metrics: [],
      detailRows: [],
      planRows: [],
      groupSummaries: [],
      ruleAlerts: [],
      suggestions: [],
      transactionCount: 0,
      availableMonthCount: 0,
      availableMonthLabels: [],
      availabilityLabel: "",
      availabilityScopeLabel: "",
      periodLabel: isEnglishUi() ? "All data" : "Toutes les données",
      budgetPeriodCount: 1,
      filteredUndatedCount: 0,
    };
  }

  const recapRows = getFilteredRecapSourceRows();
  const actualMap = buildActualAmountMap(recapRows);
  const snapshot = computeMetricSnapshot(actualMap);
  const metrics = buildRecapMetrics(actualMap);
  const detailRows = buildRecapDetailRows(actualMap);
  const budgetPeriodCount = getRecapBudgetPeriodCount(recapRows);
  const planRows = buildRecapPlanRows(actualMap, metrics, budgetPeriodCount);
  const groupSummaries = buildBudgetFraGroupSummaries(actualMap);
  const ruleAlerts = buildBudgetFraRuleAlerts(actualMap, snapshot);
  const suggestions = buildBudgetFraSuggestions(actualMap, snapshot);
  const availableYears = getAvailableRecapYears();
  const availableMonths = getAvailableRecapMonths(state.recapFilters.year);
  const availablePeriods = getAvailableRecapPeriodEntries(state.recapFilters.year);
  const filtersActive = hasActiveRecapPeriodFilter();

  return {
    available: true,
      snapshotDate: state.recap.snapshotDate,
      snapshot,
      metrics,
      detailRows,
      planRows,
      groupSummaries,
      ruleAlerts,
      suggestions,
      transactionCount: recapRows.length,
      availableMonthCount: state.recapFilters.year === "all" ? availablePeriods.length : availableMonths.length,
      availableMonthLabels: state.recapFilters.year === "all"
        ? availablePeriods.map((period) => period.label)
        : availableMonths.map((month) => formatMonthLabel(month)),
      availabilityLabel: buildRecapAvailabilityLabel(availableYears, availableMonths, availablePeriods),
      availabilityScopeLabel: buildRecapAvailabilityScopeLabel(),
    periodLabel: buildRecapPeriodLabel(),
    budgetPeriodCount,
    filteredUndatedCount: filtersActive ? countUndatedBudgetRows() : 0,
  };
}

function buildLiveAnalysisView() {
  if (state.mode !== "budget") {
    return {
      available: false,
      periodLabel: isEnglishUi() ? "All data" : "Toutes les données",
      chartCount: 0,
      metricCards: [],
      comparisonRows: [],
      seriesRows: [],
      detailRows: [],
      planRows: [],
      planGroups: [],
      cashFlow: null,
      expenseBreakdown: null,
      categoryBenchmark: null,
      snapshotDate: "",
      transactionCount: 0,
      trendTitle: "",
      trendSubtitle: "",
      budgetPeriodCount: 1,
      ruleAlerts: [],
      suggestions: [],
    };
  }

  const filteredRows = getFilteredRecapSourceRows();
  const actualMap = buildActualAmountMap(filteredRows);
  const snapshot = computeMetricSnapshot(actualMap);
  const ruleAlerts = buildBudgetFraRuleAlerts(actualMap, snapshot);
  const suggestions = buildBudgetFraSuggestions(actualMap, snapshot);
  const allSeriesRows = buildAnalysisSeriesRows();
  const seriesRows = filterAnalysisSeriesRows(allSeriesRows);
  const detailRows = buildRecapDetailRows(actualMap);
  const budgetPeriodCount = getRecapBudgetPeriodCount(filteredRows);
  const planRows = buildRecapPlanRows(actualMap, buildRecapMetrics(actualMap), budgetPeriodCount);
  const planGroups = buildAnalysisPlanGroups(planRows);
  const cashFlow = buildAnalysisCashFlow(snapshot);
  const expenseBreakdown = buildAnalysisExpenseBreakdown(filteredRows);
  const categoryBenchmark = buildAnalysisCategoryBenchmark();
  const chartCount =
    2 +
    (cashFlow ? 1 : 0) +
    (expenseBreakdown?.available ? 1 : 0) +
    (categoryBenchmark?.available ? 1 : 0);

  return {
    available: true,
    periodLabel: buildRecapPeriodLabel(),
    chartCount,
    metricCards: buildAnalysisMetricCards(snapshot),
    comparisonRows: buildAnalysisComparisonRows(snapshot),
    seriesRows,
    detailRows,
    planRows,
    planGroups,
    cashFlow,
    expenseBreakdown,
    categoryBenchmark,
    snapshotDate: state.recap.snapshotDate,
    transactionCount: filteredRows.length,
    trendTitle: buildAnalysisTrendTitle(),
    trendSubtitle: buildAnalysisTrendSubtitle(allSeriesRows.length, seriesRows.length),
    budgetPeriodCount,
    ruleAlerts,
    suggestions,
  };
}

function getFilteredRecapSourceRows() {
  if (!hasActiveRecapPeriodFilter()) {
    return state.budget.rows.slice();
  }

  return state.budget.rows.filter((row) => matchesRecapPeriod(row));
}

function matchesRecapPeriod(row) {
  const dateParts = getBudgetRowDateParts(row);
  if (!dateParts) {
    return false;
  }

  if (state.recapFilters.year !== "all" && dateParts.year !== state.recapFilters.year) {
    return false;
  }

  const selectedMonths = getSelectedRecapMonths();
  if (selectedMonths.length && !selectedMonths.includes(dateParts.month)) {
    return false;
  }

  return true;
}

function hasActiveRecapPeriodFilter() {
  return state.recapFilters.year !== "all" ||
    getSelectedRecapMonths().length > 0;
}

function getAvailableRecapYears() {
  const years = new Set();

  state.budget.rows.forEach((row) => {
    const dateParts = getBudgetRowDateParts(row);
    if (dateParts) {
      years.add(dateParts.year);
    }
  });

  return Array.from(years).sort((left, right) => Number(right) - Number(left));
}

function getAvailableRecapMonths(year) {
  const months = new Set();

  state.budget.rows.forEach((row) => {
    const dateParts = getBudgetRowDateParts(row);
    if (!dateParts) {
      return;
    }

    if (year !== "all" && dateParts.year !== year) {
      return;
    }

    months.add(dateParts.month);
  });

  return Array.from(months).sort((left, right) => Number(left) - Number(right));
}

function getAvailableRecapPeriodEntries(year) {
  const periods = new Map();

  state.budget.rows.forEach((row) => {
    const dateParts = getBudgetRowDateParts(row);
    if (!dateParts) {
      return;
    }

    if (year !== "all" && dateParts.year !== year) {
      return;
    }

    const key = buildYearMonthKey(dateParts.year, dateParts.month);
    if (!periods.has(key)) {
      periods.set(key, {
        key,
        year: dateParts.year,
        month: dateParts.month,
        label: year === "all"
          ? formatMonthYearLabel(dateParts.year, dateParts.month)
          : formatMonthLabel(dateParts.month),
      });
    }
  });

  return Array.from(periods.values()).sort((left, right) => String(left.key).localeCompare(String(right.key)));
}

function getBudgetRowDateParts(row) {
  const iso = normalizeDateValue(row?.Date);
  if (!iso) {
    return null;
  }

  return {
    year: iso.slice(0, 4),
    month: iso.slice(5, 7),
  };
}

function countUndatedBudgetRows() {
  return state.budget.rows.filter((row) => !getBudgetRowDateParts(row)).length;
}

function buildRecapPeriodLabel() {
  const { year } = state.recapFilters;
  const selectedMonths = getSelectedRecapMonths();
  const english = isEnglishUi();

  if (year === "all" && !selectedMonths.length) {
    return english ? "All data" : "Toutes les données";
  }

  if (year !== "all" && !selectedMonths.length) {
    return english ? `Year ${year}` : `Année ${year}`;
  }

  if (year === "all" && selectedMonths.length) {
    const labels = selectedMonths.map((monthValue) => formatMonthLabel(monthValue)).join(", ");
    return english ? `${labels} - all years` : `${labels} - toutes les années`;
  }

  const labels = selectedMonths.map((monthValue) => formatMonthLabel(monthValue)).join(", ");
  return `${labels} ${year}`;
}

function buildRecapAvailabilityLabel(availableYears, availableMonths, availablePeriods = []) {
  const english = isEnglishUi();
  if (!availableYears.length) {
    return english ? "No usable date found in Journalier." : "Aucune date exploitable dans Journalier.";
  }

  if (state.recapFilters.year === "all") {
    return english
      ? `${availableYears.length} year(s) with data and ${availablePeriods.length} covered period(s).`
      : `${availableYears.length} année(s) avec données et ${availablePeriods.length} période(s) couvertes.`;
  }

  return english
    ? `${availableMonths.length} month(s) with data in ${state.recapFilters.year}.`
    : `${availableMonths.length} mois avec données en ${state.recapFilters.year}.`;
}

function buildRecapAvailabilityScopeLabel() {
  if (state.recapFilters.year === "all") {
    return isEnglishUi() ? "Available periods across all years" : "Périodes disponibles toutes années confondues";
  }

  return isEnglishUi()
    ? `Available months in ${state.recapFilters.year}`
    : `Mois disponibles en ${state.recapFilters.year}`;
}

function buildRecapPeriodKeys(rows) {
  const keys = new Set();

  (Array.isArray(rows) ? rows : []).forEach((row) => {
    const dateParts = getBudgetRowDateParts(row);
    if (!dateParts) {
      return;
    }

    keys.add(buildYearMonthKey(dateParts.year, dateParts.month));
  });

  return Array.from(keys).sort((left, right) => String(left).localeCompare(String(right)));
}

function getRecapBudgetPeriodCount(rows = getFilteredRecapSourceRows()) {
  const filteredPeriodKeys = buildRecapPeriodKeys(rows);
  if (filteredPeriodKeys.length) {
    return filteredPeriodKeys.length;
  }

  const selectedMonths = getSelectedRecapMonths();
  if (state.recapFilters.year !== "all" && selectedMonths.length) {
    return selectedMonths.length;
  }

  if (state.recapFilters.year !== "all") {
    return Math.max(getAvailableRecapMonths(state.recapFilters.year).length, 1);
  }

  if (selectedMonths.length) {
    return selectedMonths.length;
  }

  return Math.max(buildRecapPeriodKeys(state.budget.rows).length, 1);
}

function getBudgetPeriodCountLabel(periodCount) {
  const safeCount = Math.max(1, Number(periodCount) || 1);
  if (isEnglishUi()) {
    return `${safeCount} month${safeCount > 1 ? "s" : ""}`;
  }
  return `${safeCount} mois`;
}

function buildBudgetCategoryOrderMap() {
  const orderMap = new Map();

  state.budget.categories.forEach((category, index) => {
    const key = normalizeHeaderName(category);
    if (!key || orderMap.has(key)) {
      return;
    }

    orderMap.set(key, index);
  });

  return orderMap;
}

function getPlanComparisonFallbackOrder(label) {
  const normalized = normalizeHeaderName(label);

  if (normalized === "expenses" || normalized === "total expenses") {
    return 1;
  }

  if (normalized === "total savings") {
    return 2;
  }

  if (normalized === "cash short/extra") {
    return 3;
  }

  return 10;
}

function comparePlanComparisonRows(left, right, categoryOrderMap) {
  const orderedGroupKeys = getOrderedBudgetFraGroupKeys();
  const resolveParentOrder = (row) => {
    if (!row.parentLabel) {
      return orderedGroupKeys.length;
    }
    const directIndex = orderedGroupKeys.findIndex(
      (key) => getBudgetFraCategoryMeta(key).label === row.parentLabel
    );
    if (directIndex >= 0) {
      return directIndex;
    }
    const inferredParent = inferBudgetFraCategory(row.label, row.group, row.actual || row.plan);
    const inferredIndex = orderedGroupKeys.indexOf(inferredParent);
    return inferredIndex >= 0 ? inferredIndex : orderedGroupKeys.length;
  };

  const leftParentOrder = resolveParentOrder(left);
  const rightParentOrder = resolveParentOrder(right);
  if (leftParentOrder !== rightParentOrder) {
    return leftParentOrder - rightParentOrder;
  }

  const leftKey = normalizeHeaderName(left.label);
  const rightKey = normalizeHeaderName(right.label);
  const leftIndex = categoryOrderMap.get(leftKey);
  const rightIndex = categoryOrderMap.get(rightKey);
  const leftHasCategoryOrder = Number.isInteger(leftIndex);
  const rightHasCategoryOrder = Number.isInteger(rightIndex);

  if (leftHasCategoryOrder && rightHasCategoryOrder && leftIndex !== rightIndex) {
    return leftIndex - rightIndex;
  }

  if (leftHasCategoryOrder !== rightHasCategoryOrder) {
    return leftHasCategoryOrder ? -1 : 1;
  }

  const fallbackDiff = getPlanComparisonFallbackOrder(left.label) - getPlanComparisonFallbackOrder(right.label);
  if (fallbackDiff !== 0) {
    return fallbackDiff;
  }

  return String(left.label).localeCompare(String(right.label), getUiLocale());
}

function formatMonthLabel(monthValue) {
  const monthNumber = Number(monthValue);
  if (!Number.isInteger(monthNumber) || monthNumber < 1 || monthNumber > 12) {
    return String(monthValue || "");
  }

  const label = new Intl.DateTimeFormat(getUiLocale(), {
    month: "long",
    timeZone: "UTC",
  }).format(
    new Date(Date.UTC(2025, monthNumber - 1, 1, 12))
  );

  return label.charAt(0).toUpperCase() + label.slice(1);
}

function buildActualAmountMap(rows) {
  const amounts = new Map();

  rows.forEach((row) => {
    const category = String(row.Categories || "").trim();
    const amount = parseAmount(row.Value);

    if (!category || !Number.isFinite(amount)) {
      return;
    }

    const key = normalizeHeaderName(category);
    amounts.set(key, (amounts.get(key) || 0) + amount);
  });

  return amounts;
}

function computeTotalIncome(actualMap) {
  let total = 0;

  actualMap.forEach((amount, key) => {
    if (!Number.isFinite(amount) || amount <= 0) {
      return;
    }

    const label = findOriginalCategoryLabel(key);
    const rule = getResolvedBudgetCategoryRule(label, "", amount);
    if (rule.includeInIncome) {
      total += amount;
    }
  });

  return roundCurrencyValue(total);
}

function computeMetricSnapshot(actualMap) {
  const income = computeTotalIncome(actualMap);
  const savings = Math.abs(getActualAmount(actualMap, "Savings"));
  const seasonalSavings = Math.abs(getActualAmount(actualMap, "Savings for seasonal exp."));
  const totalSavings = savings + seasonalSavings;
  const totalExpenses = computeTotalExpenses(actualMap);
  const cash = income - totalSavings - totalExpenses;

  return {
    income,
    expenses: totalExpenses,
    savings,
    seasonalSavings,
    totalSavings,
    cash,
  };
}

function buildRecapMetrics(actualMap) {
  const snapshot = computeMetricSnapshot(actualMap);

  return [
    { label: "Income", value: snapshot.income, tone: "positive" },
    { label: "Expenses", value: snapshot.expenses, tone: "negative" },
    { label: "Savings", value: snapshot.savings, tone: "neutral" },
    { label: "Cash", value: snapshot.cash, tone: snapshot.cash >= 0 ? "positive" : "negative" },
    { label: "Seasonal Savings", value: snapshot.seasonalSavings, tone: "neutral" },
  ];
}

function buildAnalysisMetricCards(snapshot) {
  return [
    { label: "Income", value: snapshot.income, tone: "positive" },
    { label: "Expenses", value: snapshot.expenses, tone: "negative" },
    { label: "Savings", value: snapshot.totalSavings, tone: "neutral" },
    { label: "Cash", value: snapshot.cash, tone: snapshot.cash >= 0 ? "positive" : "negative" },
  ];
}

function buildAnalysisComparisonRows(snapshot) {
  const english = isEnglishUi();
  const rows = [
    {
      label: "Income",
      value: snapshot.income,
      displayValue: formatCurrency(snapshot.income),
      tone: "positive",
      caption: english
        ? "Income captured for the filtered period."
        : "Volume des revenus retenus pour la période filtrée.",
    },
    {
      label: "Expenses",
      value: snapshot.expenses,
      displayValue: formatCurrency(snapshot.expenses),
      tone: "negative",
      caption: english
        ? "Expenses total excluding savings lines."
        : "Somme des dépenses hors postes d'épargne.",
    },
    {
      label: "Savings",
      value: snapshot.totalSavings,
      displayValue: formatCurrency(snapshot.totalSavings),
      tone: "neutral",
      caption: english
        ? "Total savings including seasonal savings."
        : "Épargne totale incluant l'épargne saisonnière.",
    },
    {
      label: "Cash",
      value: Math.abs(snapshot.cash),
      displayValue: formatSignedCurrency(snapshot.cash),
      tone: snapshot.cash >= 0 ? "positive" : "negative",
      caption: english
        ? "Net available after expenses and savings."
        : "Disponible net après dépenses et épargne.",
    },
  ];

  const maxValue = Math.max(...rows.map((row) => row.value), 1);

  return rows.map((row) => ({
    ...row,
    percentage: buildChartScale(row.value, maxValue, 14),
  }));
}

function buildAnalysisCashFlow(snapshot) {
  if (!snapshot) {
    return null;
  }

  const usageTotal = snapshot.expenses + snapshot.totalSavings + Math.max(snapshot.cash, 0);
  const scaleMax = Math.max(snapshot.income, usageTotal, snapshot.expenses + snapshot.totalSavings, 1);

  return {
    income: snapshot.income,
    expenses: snapshot.expenses,
    savings: snapshot.totalSavings,
    cash: snapshot.cash,
    scaleMax,
    usageTotal,
    overflow: Math.max(-snapshot.cash, 0),
  };
}

function buildAnalysisExpenseBreakdown(rows) {
  const { rows: categoryRows, total } = buildExpenseCategoryRowsFromMap(
    buildExpenseCategoryMap(rows),
    8
  );

  if (!categoryRows.length || total <= 0) {
    return {
      available: false,
      total: 0,
      rows: [],
      gradient: "",
    };
  }

  return {
    available: true,
    total,
    rows: categoryRows,
    gradient: buildExpenseDonutGradient(categoryRows),
  };
}

function buildAnalysisCategoryBenchmark() {
  const english = isEnglishUi();
  const monthlyProfiles = buildMonthlyExpenseProfiles();
  if (!monthlyProfiles.length) {
    return {
      available: false,
      rows: [],
      currentLabel: "",
      subtitle: "",
      monthCount: 0,
    };
  }

  const referenceProfile = resolveReferenceExpenseProfile(monthlyProfiles);
  if (!referenceProfile) {
    return {
      available: false,
      rows: [],
      currentLabel: "",
      subtitle: "",
      monthCount: monthlyProfiles.length,
    };
  }

  const averageMap = buildAverageExpenseMap(monthlyProfiles);
  const allKeys = new Set([
    ...Array.from(referenceProfile.categoryMap.keys()),
    ...Array.from(averageMap.keys()),
  ]);

  const rows = Array.from(allKeys)
    .map((key) => {
      const current = referenceProfile.categoryMap.get(key)?.value || 0;
      const average = averageMap.get(key)?.value || 0;
      const label =
        referenceProfile.categoryMap.get(key)?.label ||
        averageMap.get(key)?.label ||
        findOriginalCategoryLabel(key);

      return {
        key,
        label,
        current,
        average,
        tone: current > average * 1.08 ? "above" : current < average * 0.92 ? "below" : "steady",
      };
    })
    .filter((row) => row.current > 0 || row.average > 0)
    .sort((left, right) => Math.max(right.current, right.average) - Math.max(left.current, left.average));

  const limitedRows = rows.slice(0, 8);
  const maxValue = Math.max(
    ...limitedRows.flatMap((row) => [row.current, row.average]),
    1
  );

  return {
    available: limitedRows.length > 0,
    rows: limitedRows.map((row) => ({
      ...row,
      currentDisplayValue: formatCurrency(row.current),
      averageDisplayValue: formatCurrency(row.average),
      currentPercent: buildChartScale(row.current, maxValue, 10),
      averagePercent: buildChartScale(row.average, maxValue, 10),
    })),
    currentLabel: referenceProfile.label,
    subtitle: english
      ? `Reference: ${referenceProfile.label}. Compared with your average across ${monthlyProfiles.length} dated month${monthlyProfiles.length > 1 ? "s" : ""}.`
      : `Référence : ${referenceProfile.label}. Comparée à votre moyenne sur ${monthlyProfiles.length} mois daté${monthlyProfiles.length > 1 ? "s" : ""}.`,
    monthCount: monthlyProfiles.length,
  };
}

function buildExpenseCategoryMap(rows) {
  const categories = new Map();

  rows.forEach((row) => {
    const label = String(row.Categories || "").trim();
    const amount = parseAmount(row.Value);

    if (!label || !Number.isFinite(amount)) {
      return;
    }

    const rule = getResolvedBudgetCategoryRule(label, "", amount);
    const parentLabel = getBudgetFraCategoryMeta(rule.parent).label || "";
    if (!parentLabel || !rule.includeInParentTotals || !rule.includeInExpenses) {
      return;
    }

    const contribution = getExpenseContributionAmount(amount);
    if (!Number.isFinite(contribution) || contribution === 0) {
      return;
    }

    const key = normalizeHeaderName(parentLabel);
    const existing = categories.get(key) || { label: parentLabel, value: 0 };
    existing.value += contribution;
    categories.set(key, existing);
  });

  Array.from(categories.entries()).forEach(([key, entry]) => {
    if (!Number.isFinite(entry.value) || entry.value <= 0) {
      categories.delete(key);
      return;
    }

    entry.value = roundCurrencyValue(entry.value);
  });

  return categories;
}

function buildExpenseCategoryRowsFromMap(categoryMap, limit = 8) {
  const entries = Array.from(categoryMap.values()).sort((left, right) => right.value - left.value);
  const total = entries.reduce((sum, entry) => sum + entry.value, 0);

  if (!entries.length || total <= 0) {
    return {
      rows: [],
      total: 0,
    };
  }

  let visibleEntries = entries.slice(0, limit);

  if (entries.length > limit) {
    const kept = entries.slice(0, Math.max(1, limit - 1));
    const othersValue = entries.slice(Math.max(1, limit - 1)).reduce((sum, entry) => sum + entry.value, 0);
    visibleEntries = [
      ...kept,
      { label: isEnglishUi() ? "Other items" : "Autres postes", value: othersValue },
    ];
  }

  return {
    total,
    rows: visibleEntries.map((entry, index) => {
      const share = total > 0 ? (entry.value / total) * 100 : 0;
      return {
        ...entry,
        share,
        shareLabel: `${share.toFixed(share >= 10 ? 0 : 1)} %`,
        displayValue: formatCurrency(entry.value),
        color: ANALYSIS_CATEGORY_COLORS[index % ANALYSIS_CATEGORY_COLORS.length],
      };
    }),
  };
}

function buildExpenseDonutGradient(rows) {
  let cursor = 0;
  const segments = rows.map((row) => {
    const start = cursor;
    const end = Math.min(100, cursor + row.share);
    cursor = end;
    return `${row.color} ${start}% ${end}%`;
  });

  if (cursor < 100) {
    segments.push(`rgba(24, 51, 59, 0.08) ${cursor}% 100%`);
  }

  return `conic-gradient(${segments.join(", ")})`;
}

function buildMonthlyExpenseProfiles() {
  const buckets = new Map();

  state.budget.rows.forEach((row) => {
    const dateParts = getBudgetRowDateParts(row);
    if (!dateParts) {
      return;
    }

    const key = buildYearMonthKey(dateParts.year, dateParts.month);
    if (!buckets.has(key)) {
      buckets.set(key, {
        key,
        year: dateParts.year,
        month: dateParts.month,
        label: formatMonthYearLabel(dateParts.year, dateParts.month),
        rows: [],
      });
    }

    buckets.get(key).rows.push(row);
  });

  return Array.from(buckets.values())
    .sort((left, right) => String(left.key).localeCompare(String(right.key)))
    .map((bucket) => ({
      ...bucket,
      categoryMap: buildExpenseCategoryMap(bucket.rows),
    }));
}

function resolveReferenceExpenseProfile(monthlyProfiles) {
  let candidates = monthlyProfiles.slice();
  const selectedMonths = getSelectedRecapMonths();

  if (state.recapFilters.year !== "all") {
    candidates = candidates.filter((profile) => profile.year === state.recapFilters.year);
  }

  if (selectedMonths.length) {
    candidates = candidates.filter((profile) => selectedMonths.includes(profile.month));
  }

  return candidates.at(-1) || monthlyProfiles.at(-1) || null;
}

function buildAverageExpenseMap(monthlyProfiles) {
  const averages = new Map();
  const monthCount = monthlyProfiles.length || 1;

  monthlyProfiles.forEach((profile) => {
    profile.categoryMap.forEach((entry, key) => {
      const existing = averages.get(key) || { label: entry.label, value: 0 };
      existing.value += entry.value;
      averages.set(key, existing);
    });
  });

  averages.forEach((entry, key) => {
    averages.set(key, {
      ...entry,
      value: entry.value / monthCount,
    });
  });

  return averages;
}

function buildAnalysisSeriesRows() {
  const mode = getAnalysisSeriesMode();
  const buckets = new Map();

  state.budget.rows.forEach((row) => {
    const dateParts = getBudgetRowDateParts(row);
    if (!dateParts) {
      return;
    }

    const bucket = getAnalysisBucketForDate(dateParts, mode);
    if (!bucket) {
      return;
    }

    if (!buckets.has(bucket.key)) {
      buckets.set(bucket.key, {
        ...bucket,
        rows: [],
      });
    }

    buckets.get(bucket.key).rows.push(row);
  });

  let seriesRows = Array.from(buckets.values())
    .sort((left, right) => String(left.sortKey).localeCompare(String(right.sortKey)));

  if (mode === "recent_months") {
    seriesRows = seriesRows.slice(-8);
  }

  return seriesRows.map((row) => {
    const snapshot = computeMetricSnapshot(buildActualAmountMap(row.rows));

    return {
      key: row.key,
      label: row.label,
      shortLabel: row.shortLabel,
      income: snapshot.income,
      expenses: snapshot.expenses,
      savings: snapshot.totalSavings,
      cash: snapshot.cash,
    };
  });
}

function getAnalysisSeriesMode() {
  const selectedMonths = getSelectedRecapMonths();

  if (state.recapFilters.year !== "all") {
    return "year_months";
  }

  if (selectedMonths.length === 1) {
    return "month_across_years";
  }

  if (selectedMonths.length > 1) {
    return "filtered_months";
  }

  return "recent_months";
}

function getAnalysisBucketForDate(dateParts, mode) {
  const selectedMonths = getSelectedRecapMonths();

  if (mode === "year_months") {
    if (dateParts.year !== state.recapFilters.year) {
      return null;
    }

    if (selectedMonths.length && !selectedMonths.includes(dateParts.month)) {
      return null;
    }

    return {
      key: dateParts.month,
      sortKey: buildYearMonthKey(dateParts.year, dateParts.month),
      label: formatMonthLabel(dateParts.month),
      shortLabel: formatMonthShortLabel(dateParts.year, dateParts.month, false),
    };
  }

  if (mode === "month_across_years") {
    if (!selectedMonths.length || dateParts.month !== selectedMonths[0]) {
      return null;
    }

    return {
      key: dateParts.year,
      sortKey: dateParts.year,
      label: dateParts.year,
      shortLabel: dateParts.year,
      };
    }

  if (mode === "filtered_months") {
    if (!selectedMonths.includes(dateParts.month)) {
      return null;
    }

    return {
      key: buildYearMonthKey(dateParts.year, dateParts.month),
      sortKey: buildYearMonthKey(dateParts.year, dateParts.month),
      label: formatMonthShortLabel(dateParts.year, dateParts.month, true),
      shortLabel: formatMonthShortLabel(dateParts.year, dateParts.month, false),
    };
  }

  return {
    key: buildYearMonthKey(dateParts.year, dateParts.month),
    sortKey: buildYearMonthKey(dateParts.year, dateParts.month),
    label: formatMonthShortLabel(dateParts.year, dateParts.month, true),
    shortLabel: formatMonthShortLabel(dateParts.year, dateParts.month, false),
  };
}

function filterAnalysisSeriesRows(rows) {
  if (!state.search) {
    return rows;
  }

  return rows.filter((row) => matchesAnalysisSearch(row, state.search));
}

function matchesAnalysisSearch(row, query) {
  const haystack = [
    row.label,
    row.shortLabel,
    formatCurrency(row.income),
    formatCurrency(row.expenses),
    formatCurrency(row.savings),
    formatSignedCurrency(row.cash),
  ].join(" ").toLowerCase();

  return haystack.includes(query);
}

function buildAnalysisTrendTitle() {
  const mode = getAnalysisSeriesMode();
  const selectedMonths = getSelectedRecapMonths();
  const english = isEnglishUi();

  if (mode === "year_months") {
    return english
      ? `Monthly view for ${state.recapFilters.year}`
      : `Lecture mensuelle de ${state.recapFilters.year}`;
  }

  if (mode === "month_across_years") {
    return english
      ? `Year-over-year view for ${formatMonthLabel(selectedMonths[0])}`
      : `Comparaison annuelle pour ${formatMonthLabel(selectedMonths[0])}`;
  }

  if (mode === "filtered_months") {
    return english ? "Comparison of selected months" : "Comparaison des mois sélectionnés";
  }

  return english ? "Latest available periods" : "Dernières périodes disponibles";
}

function buildAnalysisTrendSubtitle(totalCount, visibleCount) {
  const mode = getAnalysisSeriesMode();
  const english = isEnglishUi();
  let baseSubtitle = english
    ? "Income, expenses, and total savings are compared period by period."
    : "Revenu, dépenses et épargne totale sont comparés période par période.";
  const selectedMonths = getSelectedRecapMonths();

  if (mode === "year_months") {
    baseSubtitle = english
      ? "Each group compares the months in the filtered year."
      : "Chaque groupe compare les mois de l'année filtrée.";
  } else if (mode === "month_across_years") {
    baseSubtitle = english
      ? "The same month is compared across years."
      : "Le même mois est comparé d'une année à l'autre.";
  } else if (mode === "filtered_months") {
    baseSubtitle = english
      ? `The selected months are compared across the available periods${selectedMonths.length ? ` (${selectedMonths.map((monthValue) => formatMonthLabel(monthValue)).join(", ")})` : ""}.`
      : `Les mois sélectionnés sont comparés sur les périodes disponibles${selectedMonths.length ? ` (${selectedMonths.map((monthValue) => formatMonthLabel(monthValue)).join(", ")})` : ""}.`;
  }

  if (state.search && totalCount !== visibleCount) {
    return english
      ? `${baseSubtitle} Active search: ${visibleCount} visible period(s) out of ${totalCount}.`
      : `${baseSubtitle} Recherche active : ${visibleCount} période(s) visibles sur ${totalCount}.`;
  }

  return baseSubtitle;
}

function buildYearMonthKey(year, month) {
  return `${year}-${month}`;
}

function formatMonthShortLabel(year, month, includeYear) {
  const label = new Intl.DateTimeFormat(getUiLocale(), {
    month: "short",
    ...(includeYear ? { year: "numeric" } : {}),
    timeZone: "UTC",
  }).format(new Date(Date.UTC(Number(year), Number(month) - 1, 1, 12)));

  return label.charAt(0).toUpperCase() + label.slice(1);
}

function formatMonthYearLabel(year, month) {
  const label = new Intl.DateTimeFormat(getUiLocale(), {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(Number(year), Number(month) - 1, 1, 12)));

  return label.charAt(0).toUpperCase() + label.slice(1);
}

function buildChartScale(value, maxValue, minimumPercent = 10) {
  if (!Number.isFinite(value) || value <= 0 || !Number.isFinite(maxValue) || maxValue <= 0) {
    return 0;
  }

  return Math.max(minimumPercent, (value / maxValue) * 100);
}

function buildRecapDetailRows(actualMap) {
  const orderedRows = [];
  const seen = new Set();
  const query = state.search;

    state.budget.categories.forEach((category) => {
      const key = normalizeHeaderName(category);
      const amount = actualMap.get(key);

      if (!Number.isFinite(amount) || Math.abs(amount) < 0.005) {
      return;
    }

      const row = {
        label: category,
        parentLabel: getBudgetFraCategoryLabel(category, "", amount),
        amount,
        isTotal: false,
      };

    if (!matchesRecapSearch(row, query)) {
      return;
    }

    seen.add(key);
    orderedRows.push(row);
  });

  actualMap.forEach((amount, key) => {
    if (seen.has(key) || Math.abs(amount) < 0.005) {
      return;
    }

      const label = findOriginalCategoryLabel(key);
      const row = {
        label,
        parentLabel: getBudgetFraCategoryLabel(label, "", amount),
        amount,
        isTotal: false,
      };

    if (!matchesRecapSearch(row, query)) {
      return;
    }

    orderedRows.push(row);
  });

  const totalAmount = Array.from(actualMap.values()).reduce((sum, value) => sum + value, 0);
    const totalRow = {
      label: isEnglishUi() ? "Grand total" : "Total général",
      parentLabel: isEnglishUi() ? "All categories" : "Toutes catégories",
      amount: totalAmount,
      isTotal: true,
    };

  if (!query || matchesRecapSearch(totalRow, query)) {
    orderedRows.push(totalRow);
  }

  return orderedRows;
}

function buildRecapPlanRows(actualMap, metrics, periodCount = 1) {
  const query = state.search;
  const safePeriodCount = Math.max(1, Number(periodCount) || 1);
  const categoryOrderMap = buildBudgetCategoryOrderMap();

  return resolvePlanTemplate(state.recap.planTemplate)
    .map((row) => {
      const monthlyPlan = roundCurrencyValue(convertPlanAmountToMonthly(row.plan, row.period));
      const scaledPlan = roundCurrencyValue(monthlyPlan * safePeriodCount);
      const actualContext = resolvePlanActualContext(row.label, row.group, actualMap, metrics);
      const actual = roundCurrencyValue(actualContext.actual);
      const comparisonStatus = buildBudgetComparisonStatus(
        scaledPlan,
        actual,
        row.label,
        row.group,
        actualContext.mode
      );

        return {
          label: row.label,
          parentLabel: getBudgetFraCategoryLabel(row.label, row.group, actualContext.classifierAmount),
          group: normalizePlanGroup(row.group, row.label),
          plan: normalizeAmountValue(scaledPlan),
          monthlyPlan: normalizeAmountValue(monthlyPlan),
        period: normalizePlanPeriod(row.period),
        periodLabel: getPlanPeriodLabel(row.period),
        budgetMonths: safePeriodCount,
        actual: normalizeAmountValue(actual),
        delta: normalizeAmountValue(comparisonStatus.delta),
        statusLabel: comparisonStatus.label,
        statusTone: comparisonStatus.tone,
      };
    })
    .filter((row) => matchesRecapSearch(row, query))
    .sort((left, right) => comparePlanComparisonRows(left, right, categoryOrderMap));
}

function getPlanComparisonParentMeta(row) {
  const orderedGroupKeys = getOrderedBudgetFraGroupKeys();
  if (row.parentLabel) {
    const directKey = orderedGroupKeys.find(
      (key) => getBudgetFraCategoryMeta(key).label === row.parentLabel
    );

    if (directKey) {
      const directMode = getBudgetCustomGroupPlanMode(directKey);
      return {
        key: directKey,
        label: row.parentLabel,
        order: orderedGroupKeys.indexOf(directKey),
        mode: directMode === "income" ? "income" : directMode === "savings" ? "savings" : "expense",
      };
    }

    const inferredKey = inferBudgetFraCategory(row.label, row.group, row.actual || row.plan);
    if (inferredKey && orderedGroupKeys.includes(inferredKey)) {
      const inferredMode = getBudgetCustomGroupPlanMode(inferredKey);
      return {
        key: inferredKey,
        label: row.parentLabel,
        order: orderedGroupKeys.indexOf(inferredKey),
        mode: inferredMode === "income" ? "income" : inferredMode === "savings" ? "savings" : "expense",
      };
    }

    return {
      key: normalizeHeaderName(row.parentLabel) || "custom-parent",
      label: row.parentLabel,
      order: orderedGroupKeys.length,
      mode: "expense",
    };
  }

  return {
    key: "unclassified",
    label: "Sans parent",
    order: orderedGroupKeys.length + 1,
    mode: "expense",
  };
}

function buildAnalysisPlanGroups(planRows) {
  const groups = new Map();
  const incomeSummaryRow = (Array.isArray(planRows) ? planRows : []).find(
    (row) => normalizeHeaderName(row.label) === "income"
  );

  (Array.isArray(planRows) ? planRows : [])
    .filter((row) => !isDerivedPlanLabel(row.label))
    .forEach((row) => {
      const parentMeta = getPlanComparisonParentMeta(row);
      const key = parentMeta.key;
      const planAmount = roundCurrencyValue(parseAmount(row.plan));
      const actualAmount = roundCurrencyValue(parseAmount(row.actual));

      if (!groups.has(key)) {
        groups.set(key, {
          key,
          label: parentMeta.label,
          order: parentMeta.order,
          mode: parentMeta.mode,
          plan: 0,
          actual: 0,
          rows: [],
        });
      }

      const group = groups.get(key);
      group.plan = roundCurrencyValue(group.plan + planAmount);
        group.actual = roundCurrencyValue(group.actual + actualAmount);
        group.rows.push(row);
      });

  if (incomeSummaryRow) {
    const incomeGroupKey = "income";
    const incomeMeta = getBudgetFraCategoryMeta(incomeGroupKey);
    if (!groups.has(incomeGroupKey)) {
      groups.set(incomeGroupKey, {
        key: incomeGroupKey,
        label: incomeMeta.label,
        order: BUDGET_FRA_GROUP_ORDER.indexOf(incomeGroupKey),
        mode: "income",
        plan: 0,
        actual: 0,
        rows: [],
      });
    }

    const incomeGroup = groups.get(incomeGroupKey);
    incomeGroup.actual = roundCurrencyValue(parseAmount(incomeSummaryRow.actual));
  }

  return Array.from(groups.values())
    .map((group) => {
      const status = buildBudgetComparisonStatus(
        group.plan,
        group.actual,
        group.label,
        group.key,
        group.mode
      );

      return {
        ...group,
        statusLabel: status.label,
        statusTone: status.tone,
        delta: status.delta,
      };
    })
    .sort((left, right) => left.order - right.order || left.label.localeCompare(right.label, "fr-CA"));
}

function buildBudgetComparisonStatus(planAmount, actualAmount, rowLabel = "", rowGroup = "", comparisonMode = "") {
  const plan = roundCurrencyValue(parseAmount(planAmount));
  const actual = roundCurrencyValue(parseAmount(actualAmount));
  const delta = roundCurrencyValue(actual - plan);
  const tolerance = Math.max(0.01, roundCurrencyValue(Math.abs(plan) * 0.005));
  const normalizedLabel = normalizeHeaderName(rowLabel);
  const normalizedGroup = normalizePlanGroup(rowGroup, rowLabel);
  const normalizedMode = String(comparisonMode || "").trim().toLowerCase();
  const isIncomeLike = normalizedMode === "income" || normalizedLabel === "income" || normalizedGroup === "income";
  const isSavingsLike =
    normalizedMode === "savings" ||
    normalizedLabel === "total savings" ||
    normalizedLabel === "savings" ||
    normalizedLabel === "savings for seasonal exp." ||
    normalizedGroup === "savings";
  const isCashLike = normalizedMode === "cash" || normalizedLabel === "cash short/extra";

  if (Math.abs(delta) <= tolerance) {
    return {
      label: "Conforme au budget",
      tone: "on-budget",
      delta,
    };
  }

  if (isIncomeLike) {
    return {
      label: delta > 0 ? "Plus d'argent que prevu" : "Moins d'argent que prevu",
      tone: delta > 0 ? "below-budget" : "above-budget",
      delta,
    };
  }

  if (isSavingsLike) {
    return {
      label: delta > 0 ? "Plus d'épargne que prevu" : "Moins d'épargne que prevu",
      tone: delta > 0 ? "below-budget" : "above-budget",
      delta,
    };
  }

  if (isCashLike) {
    return {
      label: delta > 0 ? "Plus de cash que prevu" : "Moins de cash que prevu",
      tone: delta > 0 ? "below-budget" : "above-budget",
      delta,
    };
  }

  if (delta < 0) {
    return {
      label: "Sous le budget",
      tone: "below-budget",
      delta,
    };
  }

  return {
    label: "Au-dessus du budget",
    tone: "above-budget",
    delta,
  };
}

function resolvePlanActualContext(label, rowGroup, actualMap, metrics) {
  const normalized = normalizeHeaderName(label);

  if (normalized === "income") {
    const amount = metrics.find((metric) => metric.label === "Income")?.value || 0;
    return {
      actual: amount,
      classifierAmount: amount,
      mode: "income",
    };
  }

  if (normalized === "expenses" || normalized === "total expenses") {
    const amount = metrics.find((metric) => metric.label === "Expenses")?.value || 0;
    return {
      actual: amount,
      classifierAmount: amount,
      mode: "expense",
    };
  }

  if (normalized === "total savings") {
    const savings = metrics.find((metric) => metric.label === "Savings")?.value || 0;
    const seasonal = metrics.find((metric) => metric.label === "Seasonal Savings")?.value || 0;
    const amount = savings + seasonal;
    return {
      actual: amount,
      classifierAmount: amount,
      mode: "savings",
    };
  }

  if (normalized === "cash short/extra") {
    const amount = metrics.find((metric) => metric.label === "Cash")?.value || 0;
    return {
      actual: amount,
      classifierAmount: amount,
      mode: "cash",
    };
  }

  const sourceAmount = getActualAmount(actualMap, label);
  const rule = getResolvedBudgetCategoryRule(label, rowGroup, sourceAmount);

  if (rule.includeInExpenses) {
    return {
      actual: Math.max(0, roundCurrencyValue(getExpenseContributionAmount(sourceAmount))),
      classifierAmount: sourceAmount,
      mode: "expense",
    };
  }

  if (rule.includeInIncome) {
    return {
      actual: Math.max(0, roundCurrencyValue(sourceAmount)),
      classifierAmount: sourceAmount,
      mode: "income",
    };
  }

  if (rule.includeInSavings) {
    return {
      actual: Math.max(0, roundCurrencyValue(sourceAmount)),
      classifierAmount: sourceAmount,
      mode: "savings",
    };
  }

  return {
    actual: Math.abs(sourceAmount),
    classifierAmount: sourceAmount,
    mode: "",
  };
}

function computeActualForPlanLabel(label, actualMap, metrics) {
  return resolvePlanActualContext(label, "", actualMap, metrics).actual;
}

function matchesRecapSearch(row, query) {
  if (!query) {
    return true;
  }

  const haystack = [
    row.label,
    row.parentLabel,
    row.plan,
    row.actual,
    formatSignedCurrency(row.amount),
    formatCurrency(row.actual),
  ].join(" ").toLowerCase();

  return haystack.includes(query);
}

function computeTotalExpenses(actualMap) {
  let total = 0;

  actualMap.forEach((amount, key) => {
    if (!Number.isFinite(amount)) {
      return;
    }

    const label = findOriginalCategoryLabel(key);
    const rule = getResolvedBudgetCategoryRule(label, "", amount);
    if (rule.includeInExpenses) {
      total += getExpenseContributionAmount(amount);
    }
  });

  return roundCurrencyValue(total);
}

function getExpenseContributionAmount(amount) {
  if (!Number.isFinite(amount) || amount === 0) {
    return 0;
  }

  return amount < 0 ? Math.abs(amount) : -amount;
}

function isIncomeOrSavingsKey(key) {
  return key === normalizeHeaderName("Income") ||
    key === normalizeHeaderName("Savings") ||
    key === normalizeHeaderName("Savings for seasonal exp.");
}

function getActualAmount(actualMap, label) {
  return actualMap.get(normalizeHeaderName(label)) || 0;
}

function findOriginalCategoryLabel(key) {
  const match = state.budget.categories.find((category) => normalizeHeaderName(category) === key);
  return match || key;
}

function createRecapMarkup(recapView) {
  return `
    <div class="recap-shell">
      <div class="recap-metrics">
        ${recapView.metrics.map((metric) => createRecapMetricMarkup(metric)).join("")}
      </div>
      ${createSmartDashboardMarkup(recapView)}
      ${state.settings.showBudgetFraAlerts ? createBudgetFraAlertMarkup(recapView.ruleAlerts.slice(0, 4)) : ""}
      ${createBudgetFraSummaryMarkup(recapView.groupSummaries)}
      ${state.settings.showBudgetFraSuggestions ? createBudgetFraSuggestionMarkup(recapView.suggestions.slice(0, 3)) : ""}
    </div>
  `;
}

function getPrimaryExpenseGroup(rows) {
  return (Array.isArray(rows) ? rows : [])
    .filter((row) => !["income", "savings"].includes(String(row.key || "").trim()))
    .sort((left, right) => right.value - left.value)[0] || null;
}

function createSmartDashboardMarkup(recapView) {
  if (!recapView?.snapshot) {
    return "";
  }

  const english = isEnglishUi();
  const topGroup = getPrimaryExpenseGroup(recapView.groupSummaries);
  const primaryAlert = state.settings.showBudgetFraAlerts && Array.isArray(recapView.ruleAlerts) && recapView.ruleAlerts.length
    ? recapView.ruleAlerts[0]
    : null;
  const primarySuggestion = state.settings.showBudgetFraSuggestions && Array.isArray(recapView.suggestions) && recapView.suggestions.length
    ? recapView.suggestions[0]
    : null;
  const cashPositive = recapView.snapshot.cash >= 0;

  return `
    <section class="recap-section smart-dashboard-section">
      <div class="recap-section-head">
        <h3>${english ? "Quick highlights" : "Repères rapides"}</h3>
        <p>${english
          ? `A mini dashboard to show what to watch first for ${escapeHtml(recapView.periodLabel)}.`
          : `Un mini tableau de bord pour savoir quoi surveiller en priorité sur ${escapeHtml(recapView.periodLabel)}.`}</p>
      </div>
      <div class="smart-dashboard-grid">
        <article class="smart-dashboard-card ${cashPositive ? "tone-positive" : "tone-negative"}">
          <span class="smart-dashboard-kicker">${cashPositive
            ? (english ? "Cash to allocate" : "Reste à orienter")
            : (english ? "Cash to watch" : "Cash à surveiller")}</span>
          <strong>${escapeHtml(formatSignedCurrency(recapView.snapshot.cash))}</strong>
          <p>${cashPositive
            ? (english
              ? "Cash remains available after expenses and savings."
              : "Il vous reste du cash disponible après les dépenses et l'épargne.")
            : (english
              ? "Cash drops below zero: income, expenses, or savings need to be rebalanced."
              : "Le cash passe sous zéro : il faut rééquilibrer le revenu, les dépenses ou l'épargne.")}</p>
        </article>
        <article class="smart-dashboard-card tone-neutral">
          <span class="smart-dashboard-kicker">${english ? "Largest category" : "Poste le plus lourd"}</span>
          <strong>${escapeHtml(topGroup?.label || (english ? "No dominant expense" : "Aucune dépense dominante"))}</strong>
          <p>${topGroup
            ? (english
              ? `${escapeHtml(formatCurrency(topGroup.value))} over the period.`
              : `${escapeHtml(formatCurrency(topGroup.value))} sur la période.`)
            : (english
              ? "No major expense category appears yet."
              : "Aucune grande catégorie de dépense n'apparaît encore.")}</p>
        </article>
        <article class="smart-dashboard-card tone-accent">
          <span class="smart-dashboard-kicker">${primaryAlert
            ? (english ? "Main alert" : "Alerte principale")
            : (english ? "Simple view" : "Vue simplifiée")}</span>
          <strong>${escapeHtml(primaryAlert?.title || (english ? "No alert displayed" : "Aucune alerte affichée"))}</strong>
          <p>${escapeHtml(primaryAlert?.detail || (english
            ? "Budget-fra alerts are hidden in settings to keep the dashboard lighter."
            : "Les alertes Budget-fra sont masquées dans les paramètres pour garder l'accueil plus épuré."))}</p>
        </article>
        <article class="smart-dashboard-card tone-default">
          <span class="smart-dashboard-kicker">${english ? "Tracked transactions" : "Transactions suivies"}</span>
          <strong>${escapeHtml(String(recapView.transactionCount || 0))}</strong>
          <p>${english
            ? `${escapeHtml(getBudgetPeriodCountLabel(recapView.budgetPeriodCount))} compared with the plan over the same period.`
            : `${escapeHtml(getBudgetPeriodCountLabel(recapView.budgetPeriodCount))} comparé${recapView.budgetPeriodCount > 1 ? "s" : ""} au plan sur la même période.`}</p>
        </article>
        ${primarySuggestion ? `
          <article class="smart-dashboard-card tone-wide">
            <span class="smart-dashboard-kicker">${english ? "Smart suggestion" : "Suggestion intelligente"}</span>
            <strong>${escapeHtml(primarySuggestion.title)}</strong>
            <p>${escapeHtml(primarySuggestion.body)}</p>
          </article>
        ` : ""}
      </div>
    </section>
  `;
}

function createBudgetFraSummaryMarkup(rows) {
  if (!Array.isArray(rows) || !rows.length) {
    return "";
  }

  return `
    <section class="recap-section">
      <div class="fra-group-grid">
        ${rows.map((row) => `
          <article class="fra-group-card fra-group-card-${escapeHtml(row.tone || "default")}">
            <span class="fra-group-kicker">${escapeHtml(row.label)}</span>
            <strong>${escapeHtml(formatCurrency(row.value))}</strong>
            <p>${escapeHtml(row.description)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function createBudgetFraAlertMarkup(rows) {
  if (!Array.isArray(rows) || !rows.length) {
    return "";
  }

  return `
    <section class="recap-section">
      <div class="recap-section-head">
        <h3>${isEnglishUi() ? "Alerts" : "Alertes"}</h3>
      </div>
      <div class="fra-alert-grid">
        ${rows.map((row) => `
          <article class="fra-alert-card fra-alert-card-${escapeHtml(row.tone || "warn")}">
            <div class="fra-alert-head">
              <span class="fra-alert-kicker">${escapeHtml(row.groupLabel || row.title || "")}</span>
              ${createRecapStatusChipMarkup(row.status, row.tone === "good" ? "below-budget" : row.tone === "risk" ? "above-budget" : "on-budget")}
            </div>
            <strong>${escapeHtml(row.title)}</strong>
            <p>${escapeHtml(row.detail)}</p>
            <div class="fra-alert-meta">
              <span>${escapeHtml(row.amountLabel)}</span>
              <span>${escapeHtml(row.ratioLabel)}</span>
            </div>
          </article>
        `).join("")}
      </div>
      </section>
    `;
}

function createBudgetFraSuggestionMarkup(rows) {
  if (!Array.isArray(rows) || !rows.length) {
    return "";
  }

  return `
    <section class="recap-section">
      <div class="recap-section-head">
        <h3>${isEnglishUi() ? "Suggestions of the moment" : "Suggestions du moment"}</h3>
        <p>${isEnglishUi()
          ? "A first layer of Budget-fra inspired suggestions to guide you without overloading the app."
          : "Première couche de suggestions inspirées de Budget-fra pour vous orienter sans surcharger l'application."}</p>
      </div>
      <div class="fra-suggestion-grid">
        ${rows.map((row) => `
          <article class="fra-suggestion-card">
            <span class="fra-suggestion-trigger">${escapeHtml(row.trigger)}</span>
            <strong>${escapeHtml(row.title)}</strong>
            <p>${escapeHtml(row.body)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function createAnalysisMarkup(analysisView) {
  const comparisonMaxValue = Math.max(
    ...analysisView.comparisonRows.map((row) => row.value),
    1
  );
  const trendMaxValue = Math.max(
    ...analysisView.seriesRows.flatMap((row) => [row.income, row.expenses, row.savings]),
    1
  );
  const english = isEnglishUi();
  return `
    <div class="analysis-shell">
      <div class="recap-metrics">
        ${analysisView.metricCards.map((metric) => createRecapMetricMarkup(metric)).join("")}
      </div>

      <section class="recap-section">
        <div class="recap-section-head">
          <h3>${english ? "Budget charts" : "Graphiques budgétaires"}</h3>
          <p>${english
            ? "A more visual read of your flows, expense categories, and monthly habits."
            : "Une lecture plus visuelle de vos flux, de vos catégories de dépenses et de vos habitudes mensuelles."}</p>
        </div>
        <div class="analysis-visual-grid">
          ${createAnalysisCashFlowMarkup(analysisView.cashFlow)}
          ${createAnalysisExpenseDonutMarkup(analysisView.expenseBreakdown)}
          ${createAnalysisBenchmarkMarkup(analysisView.categoryBenchmark)}
        </div>
      </section>

      <section class="recap-section">
        <div class="recap-section-head">
          <h3>${english ? "Metric comparison" : "Comparaison des indicateurs"}</h3>
          <p>${english
            ? "Quick reading of the budget totals over the filtered period."
            : "Lecture rapide des masses budgétaires sur la période filtrée."}</p>
        </div>
        <div class="analysis-bar-list">
          ${analysisView.comparisonRows.map((row) => createAnalysisMetricBarMarkup(row, comparisonMaxValue)).join("")}
        </div>
      </section>

      ${state.settings.showBudgetFraAlerts ? createBudgetFraAlertMarkup(analysisView.ruleAlerts) : ""}

      ${state.settings.showBudgetFraSuggestions ? createBudgetFraSuggestionMarkup(analysisView.suggestions.slice(0, 4)) : ""}

      <section class="recap-section">
        <div class="recap-section-head">
          <h3>${escapeHtml(analysisView.trendTitle)}</h3>
          <p>${escapeHtml(analysisView.trendSubtitle)}</p>
        </div>
        ${analysisView.seriesRows.length ? `
          <div class="analysis-period-chart">
            ${analysisView.seriesRows.map((row) => createAnalysisPeriodGroupMarkup(row, trendMaxValue)).join("")}
          </div>
          <div class="analysis-legend">
            <span class="analysis-legend-item"><span class="analysis-legend-swatch income"></span>${english ? "Income" : "Revenu"}</span>
            <span class="analysis-legend-item"><span class="analysis-legend-swatch expenses"></span>${english ? "Expenses" : "Dépenses"}</span>
            <span class="analysis-legend-item"><span class="analysis-legend-swatch savings"></span>${english ? "Savings" : "Épargne"}</span>
          </div>
        ` : `
          <div class="empty-form">
            ${english
              ? "No comparison group matches the active search or filter."
              : "Aucun groupe de comparaison ne correspond à la recherche ou au filtre actif."}
          </div>
        `}
      </section>

      ${createRecapTableMarkup(
        english ? "Comparison table" : "Tableau de comparaison",
        english
          ? "Period-by-period summary comparing Income, Expenses, Savings, and Cash."
          : "Résumé période par période pour comparer Revenu, Dépenses, Épargne et Cash.",
        [
          english ? "Period" : "Période",
          english ? "Income" : "Revenu",
          english ? "Expenses" : "Dépenses",
          english ? "Savings" : "Épargne",
          "Cash",
        ],
        analysisView.seriesRows.map((row) => ({
          cells: [
            { value: row.label, numeric: false },
            { value: formatCurrency(row.income), numeric: true },
            { value: formatCurrency(row.expenses), numeric: true },
            { value: formatCurrency(row.savings), numeric: true },
            { value: formatSignedCurrency(row.cash), numeric: true },
          ],
          total: false,
        }))
      )}

      ${createAnalysisPlanGroupsMarkup(analysisView.planGroups, analysisView.budgetPeriodCount)}
    </div>
  `;
}

function createAnalysisPlanGroupsMarkup(groups, budgetPeriodCount) {
  const english = getCurrentLanguage() === "en";
  if (!Array.isArray(groups) || !groups.length) {
    return `
      <section class="recap-section">
        <div class="recap-section-head">
          <h3>${english ? "Plan vs actual" : "Plan vs réel"}</h3>
          <p>${english
            ? `The monthly budget is projected over ${escapeHtml(getBudgetPeriodCountLabel(budgetPeriodCount))} to stay aligned with the filtered actual period.`
            : `Le budget mensuel est projeté sur ${escapeHtml(getBudgetPeriodCountLabel(budgetPeriodCount))} pour rester cohérent avec la période réelle filtrée.`}</p>
        </div>
        <div class="empty-form">${english ? "No main category to compare for this period." : "Aucune grande catégorie à comparer pour cette période."}</div>
      </section>
    `;
  }

  return `
    <section class="recap-section">
      <div class="recap-section-head">
        <h3>${english ? "Plan vs actual" : "Plan vs réel"}</h3>
        <p>${english
          ? `The monthly budget is projected over ${escapeHtml(getBudgetPeriodCountLabel(budgetPeriodCount))} to stay aligned with the filtered actual period. Click a main category to open the subcategory details.`
          : `Le budget mensuel est projeté sur ${escapeHtml(getBudgetPeriodCountLabel(budgetPeriodCount))} pour rester cohérent avec la période réelle filtrée. Cliquez sur une grande catégorie pour ouvrir le détail des sous-catégories.`}</p>
      </div>
      <div class="analysis-plan-groups">
        ${groups.map((group, index) => createAnalysisPlanGroupSectionMarkup(group, budgetPeriodCount, index)).join("")}
      </div>
    </section>
  `;
}

function createAnalysisPlanGroupSectionMarkup(group, budgetPeriodCount, index) {
  const english = getCurrentLanguage() === "en";
  return `
    <details class="analysis-plan-group">
      <summary class="analysis-plan-group-summary">
        <div class="analysis-plan-group-copy">
          <span class="analysis-plan-group-kicker">${english ? "Main category" : "Grande catégorie"}</span>
          <strong>${escapeHtml(group.label)}</strong>
          <span class="analysis-plan-group-meta">${escapeHtml(group.rows.length)} ${english ? `subcategor${group.rows.length > 1 ? "ies" : "y"}` : `sous-catégorie${group.rows.length > 1 ? "s" : ""}`}</span>
        </div>
        <div class="analysis-plan-group-stats">
          <div class="analysis-plan-stat">
            <span>${english ? "Budget" : "Budget"} (${escapeHtml(getBudgetPeriodCountLabel(budgetPeriodCount))})</span>
            <strong>${escapeHtml(formatCurrency(group.plan))}</strong>
          </div>
          <div class="analysis-plan-stat">
            <span>${english ? "Actual" : "Réel"}</span>
            <strong>${escapeHtml(formatCurrency(group.actual))}</strong>
          </div>
          <div class="analysis-plan-status-wrap">
            ${createRecapStatusChipMarkup(group.statusLabel, group.statusTone)}
          </div>
        </div>
      </summary>
      <div class="analysis-plan-group-body">
        <div class="recap-table-wrap">
          <table class="recap-table analysis-plan-table">
            <thead>
              <tr>
                <th>${english ? "Category" : "Catégorie"}</th>
                <th class="numeric">${english ? "Budget" : "Budget"} (${escapeHtml(getBudgetPeriodCountLabel(budgetPeriodCount))})</th>
                <th class="numeric">${english ? "Actual" : "Réel"}</th>
                <th>${english ? "Status" : "Statut"}</th>
              </tr>
            </thead>
            <tbody>
              ${group.rows.map((row) => `
                <tr>
                  <td>${escapeHtml(getDisplayCategoryLabel(row.label) || row.label)}</td>
                  <td class="numeric">${escapeHtml(formatCurrency(row.plan))}</td>
                  <td class="numeric">${escapeHtml(formatCurrency(row.actual))}</td>
                  <td>${createRecapStatusChipMarkup(row.statusLabel, row.statusTone)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </details>
  `;
}

function createAnalysisMetricBarMarkup(row, maxValue) {
  return `
    <article class="analysis-bar-card analysis-bar-card-${row.tone}">
      <div class="analysis-bar-head">
        <span>${escapeHtml(getMetricDisplayLabel(row.label))}</span>
        <strong>${escapeHtml(row.displayValue)}</strong>
      </div>
      <div class="analysis-bar-track">
        <span
          class="analysis-bar-fill analysis-bar-fill-${row.tone}"
          style="width: ${buildChartScale(row.value, maxValue, 14)}%;"
        ></span>
      </div>
      <p class="analysis-bar-caption">${escapeHtml(row.caption)}</p>
    </article>
  `;
}

function createAnalysisCashFlowMarkup(cashFlow) {
  if (!cashFlow) {
    return "";
  }

  const english = isEnglishUi();
  const incomeHeight = buildChartScale(cashFlow.income, cashFlow.scaleMax, 18);
  const expensesHeight = buildChartScale(cashFlow.expenses, cashFlow.scaleMax, 10);
  const savingsHeight = buildChartScale(cashFlow.savings, cashFlow.scaleMax, 10);
  const cashHeight = buildChartScale(Math.max(cashFlow.cash, 0), cashFlow.scaleMax, 10);

  return `
    <article class="analysis-visual-card">
      <div class="analysis-visual-head">
        <h4>${english ? "Money in and money out" : "Entrées et sorties d'argent"}</h4>
        <p>${english
          ? "Income compared with actual usage: expenses, savings, and cash left over."
          : "Le revenu en regard de l'utilisation réelle : dépenses, épargne et cash restant."}</p>
      </div>
      <div class="analysis-cash-chart">
        <div class="analysis-cash-column">
          <div class="analysis-cash-track">
            <span class="analysis-cash-fill income" style="height: ${incomeHeight}%;"></span>
          </div>
          <strong>${english ? "Income" : "Revenu"}</strong>
          <span>${escapeHtml(formatCurrency(cashFlow.income))}</span>
        </div>
        <div class="analysis-cash-column">
          <div class="analysis-cash-track stacked">
            <span class="analysis-cash-fill cash" style="height: ${cashHeight}%;"></span>
            <span class="analysis-cash-fill savings" style="height: ${savingsHeight}%;"></span>
            <span class="analysis-cash-fill expenses" style="height: ${expensesHeight}%;"></span>
          </div>
          <strong>${english ? "Usage" : "Utilisation"}</strong>
          <span>${escapeHtml(formatCurrency(cashFlow.usageTotal))}</span>
        </div>
      </div>
      <div class="analysis-cash-legend">
        <span class="analysis-legend-item"><span class="analysis-legend-swatch income"></span>${english ? "Income" : "Revenu"}</span>
        <span class="analysis-legend-item"><span class="analysis-legend-swatch expenses"></span>${english ? "Expenses" : "Dépenses"}</span>
        <span class="analysis-legend-item"><span class="analysis-legend-swatch savings"></span>${english ? "Savings" : "Épargne"}</span>
        <span class="analysis-legend-item"><span class="analysis-legend-swatch cash"></span>Cash</span>
      </div>
      <p class="analysis-visual-note">
        ${cashFlow.overflow > 0
          ? (english
            ? `Observed deficit: ${escapeHtml(formatCurrency(cashFlow.overflow))} beyond income.`
            : `Déficit observé : ${escapeHtml(formatCurrency(cashFlow.overflow))} au-delà du revenu.`)
          : (english
            ? `Cash available after allocation: ${escapeHtml(formatSignedCurrency(cashFlow.cash))}.`
            : `Cash disponible après arbitrage : ${escapeHtml(formatSignedCurrency(cashFlow.cash))}.`)}
      </p>
    </article>
  `;
}

function createAnalysisExpenseDonutMarkup(expenseBreakdown) {
  const english = isEnglishUi();
  if (!expenseBreakdown?.available) {
    return `
      <article class="analysis-visual-card">
        <div class="analysis-visual-head">
          <h4>${english ? "Where your money goes" : "Où va votre argent"}</h4>
          <p>${english ? "Expense breakdown by category." : "Répartition des dépenses par catégorie."}</p>
        </div>
        <div class="empty-form">${english
          ? "No dated expense is available to build this chart."
          : "Aucune dépense datée n'est disponible pour construire ce graphique."}</div>
      </article>
    `;
  }

  return `
    <article class="analysis-visual-card">
      <div class="analysis-visual-head">
        <h4>${english ? "Where your money goes" : "Où va votre argent"}</h4>
        <p>${english
          ? "The heaviest categories take up more visual space."
          : "Les catégories les plus lourdes prennent visuellement plus de place."}</p>
      </div>
      <div class="analysis-donut-layout">
        <div class="analysis-donut-chart" style="--analysis-donut:${expenseBreakdown.gradient};">
          <div class="analysis-donut-center">
            <strong>${escapeHtml(formatCurrency(expenseBreakdown.total))}</strong>
            <span>${english ? "Expenses" : "Dépenses"}</span>
          </div>
        </div>
        <div class="analysis-donut-legend">
          ${expenseBreakdown.rows.map((row) => `
            <div class="analysis-donut-item">
              <span class="analysis-donut-swatch" style="background:${row.color};"></span>
              <div>
                <strong>${escapeHtml(row.label)}</strong>
                <span>${escapeHtml(row.displayValue)} · ${escapeHtml(row.shareLabel)}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </article>
  `;
}

function createAnalysisBenchmarkMarkup(categoryBenchmark) {
  const english = isEnglishUi();
  if (!categoryBenchmark?.available) {
    return `
      <article class="analysis-visual-card">
        <div class="analysis-visual-head">
          <h4>${english ? "Comparison with your average" : "Comparaison avec votre moyenne"}</h4>
          <p>${english
            ? "Category-by-category reading on a monthly basis."
            : "Lecture catégorie par catégorie sur une base mensuelle."}</p>
        </div>
        <div class="empty-form">${english
          ? "Not enough dated months to calculate a comparison average."
          : "Pas assez de mois datés pour calculer une moyenne de comparaison."}</div>
      </article>
    `;
  }

  return `
    <article class="analysis-visual-card">
      <div class="analysis-visual-head">
        <h4>${english ? "Comparison with your monthly average" : "Comparaison avec votre moyenne mensuelle"}</h4>
        <p>${escapeHtml(categoryBenchmark.subtitle)}</p>
      </div>
      <div class="analysis-benchmark-list">
        ${categoryBenchmark.rows.map((row) => `
          <article class="analysis-benchmark-row">
            <div class="analysis-benchmark-head">
              <strong>${escapeHtml(row.label)}</strong>
              <span>${escapeHtml(row.currentDisplayValue)} / ${escapeHtml(row.averageDisplayValue)}</span>
            </div>
            <div class="analysis-benchmark-track">
              <span class="analysis-benchmark-bar average" style="width:${row.averagePercent}%;"></span>
              <span class="analysis-benchmark-bar current ${row.tone}" style="width:${row.currentPercent}%;"></span>
            </div>
          </article>
        `).join("")}
      </div>
      <div class="analysis-benchmark-legend">
        <span class="analysis-legend-item"><span class="analysis-legend-swatch average"></span>${english ? "Monthly average" : "Moyenne mensuelle"}</span>
        <span class="analysis-legend-item"><span class="analysis-legend-swatch current"></span>${english ? "Reference period" : "Période de référence"}</span>
      </div>
    </article>
  `;
}

function createAnalysisPeriodGroupMarkup(row, maxValue) {
  return `
    <article class="analysis-period-group">
      <div class="analysis-period-bars">
        <span class="analysis-mini-bar income" style="height: ${buildChartScale(row.income, maxValue, 10)}%;"></span>
        <span class="analysis-mini-bar expenses" style="height: ${buildChartScale(row.expenses, maxValue, 10)}%;"></span>
        <span class="analysis-mini-bar savings" style="height: ${buildChartScale(row.savings, maxValue, 10)}%;"></span>
      </div>
      <strong class="analysis-period-label">${escapeHtml(row.shortLabel)}</strong>
      <span class="analysis-period-meta">${escapeHtml(formatSignedCurrency(row.cash))}</span>
    </article>
  `;
}

function createRecapMetricMarkup(metric) {
  const iconMarkup = getMetricIconMarkup(metric.label);
  return `
    <article class="recap-metric recap-metric-${metric.tone}">
      <div class="recap-metric-head">
        ${iconMarkup ? `<span class="recap-metric-icon recap-metric-icon-${escapeHtml(getMetricIconKey(metric.label))}" aria-hidden="true">${iconMarkup}</span>` : ""}
        <span class="recap-metric-label">${escapeHtml(getMetricDisplayLabel(metric.label))}</span>
      </div>
      <strong>${escapeHtml(formatCurrency(metric.value))}</strong>
    </article>
  `;
}

function createRecapStatusChipMarkup(label, tone) {
  return `
    <span class="recap-status recap-status-${escapeHtml(tone || "on-budget")}">
      <span class="recap-status-dot" aria-hidden="true"></span>
      <span>${escapeHtml(label || (isEnglishUi() ? "On budget" : "Conforme au budget"))}</span>
    </span>
  `;
}

function createRecapTableMarkup(title, subtitle, headers, rows) {
  if (!rows.length) {
    return `
      <section class="recap-section">
        <div class="recap-section-head">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(subtitle)}</p>
        </div>
        <div class="empty-form">${isEnglishUi() ? "No row to display for this view." : "Aucune ligne à afficher pour cette vue."}</div>
      </section>
    `;
  }

  return `
    <section class="recap-section">
      <div class="recap-section-head">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(subtitle)}</p>
      </div>
      <div class="recap-table-wrap">
        <table class="recap-table">
          <thead>
            <tr>
              ${headers.map((header, index) => {
                const label = typeof header === "object" ? header.label : header;
                const numeric = typeof header === "object" ? Boolean(header.numeric) : index > 0;
                return `<th class="${numeric ? "numeric" : ""}">${escapeHtml(label)}</th>`;
              }).join("")}
            </tr>
          </thead>
          <tbody>
            ${rows.map((row) => `
              <tr class="${row.total ? "total-row" : ""}">
                ${row.cells.map((cell) => {
                  const classes = [cell.numeric ? "numeric" : "", cell.className || ""].filter(Boolean).join(" ");
                  const content = cell.html || escapeHtml(cell.value ?? "-");
                  return `<td class="${classes}">${content}</td>`;
                }).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderEditor() {
  if (state.appTab === APP_TAB_PLAN) {
    if (refs.formKicker) {
      refs.formKicker.textContent = t("form.kickerPlannedBudget");
    }
    refs.saveRecurringTemplateButton?.classList.add("hidden");
    renderPlanEditor();
    return;
  }

  if (refs.formKicker) {
    refs.formKicker.textContent = t("form.kickerForm");
  }

  refs.saveButton.textContent = t("form.save");
  if (refs.saveRecurringTemplateButton) {
    refs.saveRecurringTemplateButton.textContent = t("form.saveRecurringTemplate");
  }
  refs.cancelButton.textContent = t("form.reset");

  if (state.mode !== "budget") {
    refs.saveRecurringTemplateButton?.classList.add("hidden");
    refs.formTitle.textContent = t("form.newRecord");
    refs.formSubtitle.textContent = t("form.startFirst");
    refs.formFields.innerHTML = `<div class="empty-form">${buildStartupGuideMarkup({
      title: t("form.startBudgetTitle"),
      description: t("form.startBudgetDescription"),
      note: t("form.startBudgetNote"),
    })}</div>`;
    return;
  }

  if (state.activeView !== JOURNAL_SHEET_NAME) {
    refs.saveRecurringTemplateButton?.classList.add("hidden");
    const isRecapView = state.activeView === RECAP_SHEET_NAME;
    refs.formTitle.textContent = isRecapView ? t("form.readOnlyRecap") : t("form.readOnlyAnalysis");
    refs.formSubtitle.textContent = t("form.readOnlySubtitle");
    refs.formFields.innerHTML = isRecapView
      ? `
        <div class="empty-form">
          ${escapeHtml(t("form.readOnlyRecapBody", {
            recap: RECAP_SHEET_NAME,
            tcd: TCD_SHEET_NAME,
            journal: JOURNAL_SHEET_NAME,
          }))}
        </div>
      `
      : `
        <div class="empty-form">
          ${escapeHtml(t("form.readOnlyAnalysisBody", {
            journal: JOURNAL_SHEET_NAME,
          }))}
        </div>
      `;
    return;
  }

  refs.formSubtitle.textContent = state.workbook
    ? t("form.subtitleWorkbook")
    : canUseSupabaseCloud()
      ? t("form.subtitleCloud")
      : t("form.subtitleLocal");

  const editingRow =
    state.editorMode === "edit" &&
    state.editingIndex !== null &&
    state.budget.rows[state.editingIndex]
      ? state.budget.rows[state.editingIndex]
      : { Date: "", Categories: "", Value: "" };

  if (!state.budget.rows[state.editingIndex]) {
    state.editorMode = "create";
    state.editingIndex = null;
  }

  refs.formTitle.textContent = state.editorMode === "edit" ? t("form.editTransaction") : t("form.newTransaction");
  refs.formSubtitle.textContent = state.workbook
    ? ""
    : canUseSupabaseCloud()
      ? t("form.editingCloud")
      : t("form.editingLocal");
  if (refs.saveRecurringTemplateButton) {
    refs.saveRecurringTemplateButton.classList.toggle("hidden", state.appTab !== APP_TAB_FORM);
    refs.saveRecurringTemplateButton.disabled = !canSaveCurrentTransactionAsRecurringTemplate();
  }
  refs.formFields.innerHTML = "";

  appendField(renderDateField(editingRow.Date));
  appendField(renderCategoryField(editingRow.Categories));
  appendField(renderValueField(editingRow.Value));
}

function renderPlanEditor() {
  const english = getCurrentLanguage() === "en";
  refs.saveButton.textContent = t("form.saveBudget");
  refs.cancelButton.textContent = t("form.reloadValues");

  if (state.mode !== "budget") {
    refs.formTitle.textContent = t("form.monthlyBudget");
    refs.formSubtitle.textContent = t("form.monthlyBudgetEmpty");
    refs.formFields.innerHTML = `<div class="empty-form">${buildStartupGuideMarkup({
      title: english ? "Monthly budget ready to create" : "Budget mensuel prêt à créer",
      description: english
        ? "The monthly plan can be initialized without an Excel file. You can then adjust amounts, periods, and comparisons."
        : "Le plan mensuel peut être initialisé sans fichier Excel. Vous pourrez ensuite ajuster les montants, les périodes et les comparaisons.",
      note: english
        ? "Once the template is created, the Budget tab becomes editable right away."
        : "Une fois le modèle créé, l'onglet Budget sera modifiable immédiatement.",
    })}</div>`;
    return;
  }

  const planTemplate = ensurePlanTemplateSeeded();
  refs.formTitle.textContent = t("form.monthlyBudget");
  refs.formSubtitle.textContent = state.planEditing
    ? (english
      ? "Editing is active. Choose the amount and period for each line, then the app calculates the monthly equivalent."
      : "Édition active. Choisissez le montant et la période de chaque ligne, puis l'application calcule l'équivalent mensuel.")
    : (english
      ? "Budget is read-only. Click Edit budget to change the amount or period of each line."
      : "Budget en lecture seule. Cliquez sur Éditer le budget pour modifier le montant ou la période de chaque ligne.");
  refs.formFields.innerHTML = "";

  if (!planTemplate.length) {
    refs.formFields.innerHTML = `<div class="empty-form">${english ? "No budget line is available right now." : "Aucune ligne de budget n'est disponible pour le moment."}</div>`;
    return;
  }

  const editableRows = planTemplate.filter((row) => !isDerivedPlanLabel(row.label));
  const derivedRows = sortBudgetSummaryRows(planTemplate.filter((row) => isDerivedPlanLabel(row.label)));
  const groupedEditableRows = buildBudgetFraPlanEditorGroups(editableRows);

  if (derivedRows.length) {
    refs.formFields.appendChild(renderBudgetSummaryGrid(derivedRows));
  }

  if (groupedEditableRows.length) {
    let nextIndex = derivedRows.length;
    const sections = document.createElement("div");
    sections.className = "budget-sections";
    groupedEditableRows.forEach((group, groupIndex) => {
      const renderedGroup = renderPlanGroupSection(
        group.key,
        group.rows,
        nextIndex,
        !state.planEditing,
        groupIndex
      );
      sections.appendChild(renderedGroup.section);
      nextIndex = renderedGroup.nextIndex;
    });
    refs.formFields.appendChild(sections);
  } else {
    editableRows.forEach((row, index) => appendField(renderPlanAmountField(row, derivedRows.length + index, !state.planEditing)));
  }

  refreshPlanEditorPreview();
}

function renderRecurringReviewPanel(options = {}) {
  const occurrences = getPendingRecurringOccurrences();
  if (!occurrences.length) {
    return null;
  }

  const english = getCurrentLanguage() === "en";
  const section = document.createElement("section");
  section.className = `recurring-review-panel${options.compact ? " is-compact" : ""}`;
  section.innerHTML = `
    <div class="recurring-panel-head">
      <div>
        <span class="section-kicker">${english ? "Recurring transactions to review" : "Transactions récurrentes à valider"}</span>
        <h3>${english ? `${occurrences.length} due occurrence${occurrences.length > 1 ? "s" : ""}` : `${occurrences.length} occurrence${occurrences.length > 1 ? "s" : ""} prête${occurrences.length > 1 ? "s" : ""}`}</h3>
        <p>${english ? "Mode B: review the due entries, adjust the amount if needed, then add them to your journal." : "Mode B : validez les écritures dues, ajustez le montant si besoin, puis ajoutez-les au journal."}</p>
      </div>
      <div class="recurring-review-actions">
        <button type="button" class="button secondary" data-recurring-review-action="add-all">${english ? "Add all" : "Ajouter tout"}</button>
        <button type="button" class="button ghost" data-recurring-review-action="ignore-all">${english ? "Ignore for now" : "Ignorer pour le moment"}</button>
      </div>
    </div>
  `;

  const list = document.createElement("div");
  list.className = "recurring-review-list";
  occurrences.forEach((occurrence) => {
    const reviewedOccurrence = applyDraftToRecurringOccurrence(occurrence);
    const card = document.createElement("article");
    card.className = "recurring-review-card";
    const categoryLabel = getDisplayCategoryLabel(reviewedOccurrence.category) || reviewedOccurrence.category;
    const parentLabel = getBudgetFraCategoryLabel(reviewedOccurrence.category, "", reviewedOccurrence.value);
    const metaParts = [
      formatDateForDisplay(reviewedOccurrence.date) || reviewedOccurrence.date,
      getPlanPeriodLabel(reviewedOccurrence.period),
    ];
    if (parentLabel) {
      metaParts.push(parentLabel);
    }
    card.innerHTML = `
      <div class="recurring-review-copy">
        <span class="recurring-review-date">${escapeHtml(metaParts.join(" · "))}</span>
        <strong>${escapeHtml(categoryLabel)}</strong>
        ${renderRecurringReviewCardConfig(occurrence, english)}
        <p data-recurring-preview-amount="true">${escapeHtml(formatCurrency(reviewedOccurrence.value))}</p>
      </div>
      <div class="recurring-review-actions">
        <button type="button" class="button secondary" data-recurring-review-action="add-one" data-occurrence-key="${escapeHtml(occurrence.key)}">${english ? "Add" : "Ajouter"}</button>
        <button type="button" class="button ghost" data-recurring-review-action="ignore-one" data-occurrence-key="${escapeHtml(occurrence.key)}">${english ? "Ignore" : "Ignorer"}</button>
      </div>
    `;
    list.appendChild(card);
  });

  section.appendChild(list);
  return section;
}

function refreshCategoryParentMeta() {
  const select = document.getElementById("field-categories");
  const parentChip = document.querySelector(".field-parent-chip");
  const hint = document.querySelector(".field-hint");
  const recurringSaveButton = document.querySelector("[data-recurring-action='save-current']");

  if (!select || !parentChip || !hint) {
    return;
  }

  const selectedValue = String(select.value || "").trim();
  const internalCategory = getInternalCategoryLabel(selectedValue);
  const valueInput = document.getElementById("field-value");
  const amountValue = valueInput ? valueInput.value : "";
  const parentLabel = internalCategory
    ? getBudgetFraCategoryLabel(internalCategory, "", amountValue)
    : (getCurrentLanguage() === "en" ? "None" : "Aucune");
  const displayLabel = parentLabel || (getCurrentLanguage() === "en" ? "None" : "Aucune");

  parentChip.textContent = displayLabel;
  parentChip.classList.toggle("is-empty", !selectedValue || !parentLabel);
  hint.textContent = getCurrentLanguage() === "en"
    ? `${getAvailableFormCategoryCount()} categories available from the Budget tab. Type to filter faster or enter the full name directly.`
    : `${getAvailableFormCategoryCount()} categories disponibles depuis l'onglet Budget. Tapez pour filtrer plus vite ou entrez directement le nom complet.`;
  if (recurringSaveButton) {
    recurringSaveButton.disabled = !canSaveCurrentTransactionAsRecurringTemplate();
  }
}

function renderBudgetSummaryGrid(rows) {
  const grid = document.createElement("section");
  grid.className = "budget-summary-grid";

  rows.forEach((row) => {
    grid.appendChild(renderBudgetSummaryCard(row));
  });

  return grid;
}

function renderBudgetSummaryCard(row) {
  const meta = getBudgetSummaryCardMeta(row.label);
  const iconKey = getMetricIconKey(row.label);
  const iconMarkup = getMetricIconMarkup(row.label);
  const card = document.createElement("article");
  card.className = `budget-summary-card tone-${meta.tone}`;
  card.setAttribute("data-plan-row", row.label);

  const heading = document.createElement("div");
  heading.className = "budget-summary-head";

  if (iconMarkup) {
    const icon = document.createElement("span");
    icon.className = `budget-summary-icon recap-metric-icon recap-metric-icon-${iconKey}`;
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = iconMarkup;
    heading.append(icon);
  }

  const title = document.createElement("span");
  title.className = "budget-summary-title";
  title.textContent = meta.title;
  heading.append(title);

  const amount = document.createElement("strong");
  amount.className = "budget-summary-amount";
  amount.setAttribute("data-plan-monthly", "true");
  amount.textContent = formatCurrency(convertPlanAmountToMonthly(row.plan, row.period));

  card.append(heading, amount);
  return card;
}

function renderDateField(value) {
  const wrapper = document.createElement("div");
  wrapper.className = "field-card";
  const english = isEnglishUi();

  const label = document.createElement("label");
  label.setAttribute("for", "field-date");
  label.textContent = english ? "Date" : "Date";

  const input = document.createElement("input");
  input.id = "field-date";
  input.name = "Date";
  input.type = "date";
  input.value = toDateInputValue(value);

  wrapper.append(label, input);
  return wrapper;
}

function renderCategoryField(value) {
  const wrapper = document.createElement("div");
  wrapper.className = "field-card";
  const english = isEnglishUi();

  const label = document.createElement("label");
  label.setAttribute("for", "field-categories");
  label.textContent = english ? "Category" : "Catégorie";

  const categoryInput = document.createElement("input");
  categoryInput.id = "field-categories";
  categoryInput.name = "Categories";
  categoryInput.type = "text";
  categoryInput.setAttribute("list", "budget-category-options");
  categoryInput.setAttribute("autocomplete", "off");
  categoryInput.placeholder = english ? "Type or choose a category" : "Tapez ou choisissez une catégorie";
  categoryInput.value = getDisplayCategoryLabel(value || "");

  const datalist = document.createElement("datalist");
  datalist.id = "budget-category-options";
  Array.from(new Set(
    buildAvailableFormCategories()
      .flatMap((group) => group.items)
      .map((category) => getDisplayCategoryLabel(category))
      .filter(Boolean)
  )).forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      datalist.appendChild(option);
  });

  const parentMeta = document.createElement("div");
  parentMeta.className = "field-parent-meta";

  const parentLabelCaption = document.createElement("span");
  parentLabelCaption.className = "field-parent-label";
  parentLabelCaption.textContent = english ? "Main category" : "Grande catégorie";

  const parentChip = document.createElement("span");
  parentChip.className = "field-parent-chip";

  const manageButton = document.createElement("button");
  manageButton.type = "button";
  manageButton.className = "button secondary category-manager-trigger";
  manageButton.textContent = t("form.manageCategories");
  manageButton.addEventListener("click", openCategoryManagerModal);

  const tools = document.createElement("div");
  tools.className = "field-category-tools";

  const hint = document.createElement("p");
  hint.className = "field-hint";
  categoryInput.addEventListener("input", refreshCategoryParentMeta);
  categoryInput.addEventListener("change", refreshCategoryParentMeta);

  parentMeta.append(parentLabelCaption, parentChip);
  tools.append(manageButton, parentMeta);
  wrapper.append(label, categoryInput, datalist, tools, hint);
  queueMicrotask(refreshCategoryParentMeta);
  return wrapper;
}

function getLocalizedBudgetPlanTypeLabel(planGroup) {
  const normalized = normalizePlanGroup(planGroup, "");
  if (normalized === "income") {
    return t("categories.typeIncome");
  }

  if (normalized === "savings") {
    return t("categories.typeSavings");
  }

  return t("categories.typeExpenses");
}

function hasBudgetCategoryLabel(label) {
  const normalized = normalizeHeaderName(label);
  if (!normalized) {
    return false;
  }

  return state.budget.categories.some((entry) => normalizeHeaderName(entry) === normalized)
    || resolvePlanTemplate(state.recap.planTemplate)
      .filter((row) => !isDerivedPlanLabel(row.label))
      .some((row) => normalizeHeaderName(row.label) === normalized)
    || state.budget.rows.some((row) => normalizeHeaderName(row.Categories) === normalized);
}

function closeCategoryManagerModal() {
  if (categoryManagerModal?.remove) {
    categoryManagerModal.remove();
  }
  categoryManagerModal = null;
}

function buildCategoryManagerParentOptionsMarkup() {
  return getBudgetMainCategoryOptions()
    .map((option) => `
      <option value="${escapeHtml(option.key)}">
        ${escapeHtml(option.label)} · ${escapeHtml(getLocalizedBudgetPlanTypeLabel(option.planGroup))}
      </option>
    `)
    .join("");
}

function collectCategoryManagerLines(rawValue) {
  const seen = new Set();
  return String(rawValue || "")
    .split(/\r?\n+/)
    .map((value) => String(value || "").trim())
    .filter((value) => {
      const key = normalizeHeaderName(value);
      if (!key || seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    });
}

function saveCategoryManagerSnapshot(nextCategory = "") {
  const snapshot = captureCurrentTransactionFormSnapshot();
  if (nextCategory) {
    snapshot.Categories = nextCategory;
  }
  closeCategoryManagerModal();
  renderAll();
  applyTransactionFormSnapshot(snapshot);
}

function handleCategoryManagerCreateCategory() {
  if (!categoryManagerModal) {
    return;
  }

  const parentSelect = categoryManagerModal.querySelector("[data-category-manager-field='parent']");
  const categoryInput = categoryManagerModal.querySelector("[data-category-manager-field='category']");
  const parentKey = String(parentSelect?.value || "").trim();
  const categoryLabel = String(categoryInput?.value || "").trim();

  if (!parentKey) {
    window.alert(t("categories.missingParent"));
    parentSelect?.focus();
    return;
  }

  if (!categoryLabel) {
    window.alert(t("categories.missingCategory"));
    categoryInput?.focus();
    return;
  }

  if (hasBudgetCategoryLabel(categoryLabel)) {
    window.alert(t("categories.categoryExists"));
    categoryInput?.focus();
    return;
  }

  ensureBudgetCategoryAvailable(categoryLabel);
  upsertBudgetCategoryAssignment(categoryLabel, parentKey);
  ensurePlanTemplateCategoryRow(categoryLabel, getBudgetCustomGroupPlanMode(parentKey));
  persistDraftIfPossible();
  setLastAction(t("categories.createdCategory", {
    category: categoryLabel,
    parent: getBudgetFraCategoryMeta(parentKey).label || parentKey,
  }));
  saveCategoryManagerSnapshot(categoryLabel);
}

function handleCategoryManagerCreateGroup() {
  if (!categoryManagerModal) {
    return;
  }

  const groupNameInput = categoryManagerModal.querySelector("[data-category-manager-field='group-name']");
  const groupTypeSelect = categoryManagerModal.querySelector("[data-category-manager-field='group-type']");
  const groupCategoriesInput = categoryManagerModal.querySelector("[data-category-manager-field='group-categories']");
  const groupLabel = String(groupNameInput?.value || "").trim();
  const planGroup = normalizePlanGroup(groupTypeSelect?.value || "expenses", "");
  const categories = collectCategoryManagerLines(groupCategoriesInput?.value || "");

  if (!groupLabel) {
    window.alert(t("categories.missingGroupName"));
    groupNameInput?.focus();
    return;
  }

  const groupExists = getBudgetMainCategoryOptions().some(
    (option) => normalizeHeaderName(option.label) === normalizeHeaderName(groupLabel)
  );
  if (groupExists) {
    window.alert(t("categories.groupExists"));
    groupNameInput?.focus();
    return;
  }

  if (!categories.length) {
    window.alert(t("categories.missingGroupCategories"));
    groupCategoriesInput?.focus();
    return;
  }

  const duplicatedCategories = categories.filter((category) => hasBudgetCategoryLabel(category));
  if (duplicatedCategories.length) {
    window.alert(t("categories.groupCategoryExists", {
      labels: duplicatedCategories.join(", "),
    }));
    groupCategoriesInput?.focus();
    return;
  }

  const nextGroup = upsertBudgetCustomGroup({
    key: createCustomBudgetGroupKey(groupLabel),
    label: groupLabel,
    planGroup,
    tone: getDefaultCustomGroupTone(planGroup),
    description: "",
    position: getBudgetCustomGroups().length,
  });

  categories.forEach((category) => {
    ensureBudgetCategoryAvailable(category);
    upsertBudgetCategoryAssignment(category, nextGroup.key);
    ensurePlanTemplateCategoryRow(category, planGroup);
  });

  persistDraftIfPossible();
  setLastAction(t("categories.createdGroup", {
    group: groupLabel,
    count: categories.length,
    itemWord: isEnglishUi()
      ? (categories.length > 1 ? "subcategories" : "subcategory")
      : (categories.length > 1 ? "sous-catégories" : "sous-catégorie"),
  }));
  saveCategoryManagerSnapshot(categories[0] || "");
}

function openCategoryManagerModal() {
  if (state.mode !== "budget") {
    return;
  }

  if (categoryManagerModal) {
    categoryManagerModal.querySelector("[data-category-manager-field='category']")?.focus();
    return;
  }

  const overlay = document.createElement("div");
  overlay.className = "category-manager-modal";
  overlay.innerHTML = `
    <div class="category-manager-dialog" role="dialog" aria-modal="true" aria-labelledby="category-manager-title">
      <div class="category-manager-head">
        <div>
          <p class="section-kicker">${escapeHtml(t("form.manageCategories"))}</p>
          <h3 id="category-manager-title">${escapeHtml(t("categories.modalTitle"))}</h3>
          <p>${escapeHtml(t("categories.modalDescription"))}</p>
        </div>
        <button type="button" class="button ghost" data-category-manager-action="close">${escapeHtml(t("categories.close"))}</button>
      </div>
      <div class="category-manager-grid">
        <section class="category-manager-card">
          <h4>${escapeHtml(t("categories.addCategoryTitle"))}</h4>
          <label class="field-card">
            <span>${escapeHtml(t("categories.parentLabel"))}</span>
            <select data-category-manager-field="parent">
              ${buildCategoryManagerParentOptionsMarkup()}
            </select>
          </label>
          <label class="field-card">
            <span>${escapeHtml(t("categories.newCategoryLabel"))}</span>
            <input type="text" data-category-manager-field="category" placeholder="${escapeHtml(t("categories.newCategoryPlaceholder"))}" autocomplete="off">
          </label>
          <div class="category-manager-actions">
            <button type="button" class="button secondary" data-category-manager-action="create-category">${escapeHtml(t("categories.addCategoryAction"))}</button>
          </div>
        </section>
        <section class="category-manager-card">
          <h4>${escapeHtml(t("categories.createGroupTitle"))}</h4>
          <label class="field-card">
            <span>${escapeHtml(t("categories.groupNameLabel"))}</span>
            <input type="text" data-category-manager-field="group-name" placeholder="${escapeHtml(t("categories.groupNamePlaceholder"))}" autocomplete="off">
          </label>
          <label class="field-card">
            <span>${escapeHtml(t("categories.groupTypeLabel"))}</span>
            <select data-category-manager-field="group-type">
              <option value="expenses">${escapeHtml(t("categories.typeExpenses"))}</option>
              <option value="income">${escapeHtml(t("categories.typeIncome"))}</option>
              <option value="savings">${escapeHtml(t("categories.typeSavings"))}</option>
            </select>
          </label>
          <label class="field-card">
            <span>${escapeHtml(t("categories.groupCategoriesLabel"))}</span>
            <textarea data-category-manager-field="group-categories" placeholder="${escapeHtml(t("categories.groupCategoriesPlaceholder"))}"></textarea>
            <p class="field-hint">${escapeHtml(t("categories.groupCategoriesHint"))}</p>
          </label>
          <div class="category-manager-actions">
            <button type="button" class="button primary" data-category-manager-action="create-group">${escapeHtml(t("categories.groupCreateAction"))}</button>
          </div>
        </section>
      </div>
    </div>
  `;

  overlay.addEventListener("click", (event) => {
    const action = event.target.closest("[data-category-manager-action]");
    if (event.target === overlay || action?.dataset.categoryManagerAction === "close") {
      closeCategoryManagerModal();
      return;
    }

    if (!action) {
      return;
    }

    if (action.dataset.categoryManagerAction === "create-category") {
      handleCategoryManagerCreateCategory();
      return;
    }

    if (action.dataset.categoryManagerAction === "create-group") {
      handleCategoryManagerCreateGroup();
    }
  });

  overlay.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCategoryManagerModal();
    }
  });

  document.body.appendChild(overlay);
  categoryManagerModal = overlay;
  queueMicrotask(() => {
    categoryManagerModal?.querySelector("[data-category-manager-field='category']")?.focus();
  });
}

function renderValueField(value) {
  const wrapper = document.createElement("div");
  wrapper.className = "field-card";
  const english = isEnglishUi();

  const label = document.createElement("label");
  label.setAttribute("for", "field-value");
  label.textContent = english ? "Amount" : "Montant";

  const input = document.createElement("input");
  input.id = "field-value";
  input.name = "Value";
  input.type = "text";
  input.inputMode = "decimal";
  input.autocomplete = "off";
  input.spellcheck = false;
  input.placeholder = "-42.08";
  input.value = value || "";

  const inputRow = document.createElement("div");
  inputRow.className = "value-field-row";

  const toggleButton = document.createElement("button");
  toggleButton.type = "button";
  toggleButton.className = "value-sign-toggle";
  toggleButton.textContent = "- / +";
  toggleButton.setAttribute("aria-label", english
    ? "Toggle between a negative and positive amount"
    : "Basculer entre un montant négatif et positif");
  toggleButton.addEventListener("click", () => {
    const currentValue = String(input.value || "").trim();
    if (!currentValue) {
      input.value = "-";
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
      refreshCategoryParentMeta();
      return;
    }

    input.value = currentValue.startsWith("-")
      ? currentValue.slice(1)
      : `-${currentValue}`;
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
    refreshCategoryParentMeta();
  });

  input.addEventListener("input", refreshCategoryParentMeta);
  input.addEventListener("change", refreshCategoryParentMeta);

  const hint = document.createElement("p");
  hint.className = "field-hint";
  hint.textContent = "Utilisez - / + si le clavier du téléphone n'affiche pas le signe négatif.";

  inputRow.append(input, toggleButton);
  wrapper.append(label, inputRow, hint);
  queueMicrotask(refreshCategoryParentMeta);
  return wrapper;
}

function renderRecurringTemplatesPanel(options = {}) {
  const section = document.createElement("section");
  section.className = "recurring-panel";
  const english = getCurrentLanguage() === "en";
  const showSaveButton = options.showSaveButton !== false;

  const templates = getRecurringTemplates();
  const recurringAutomationAvailable = isRecurringAutomationAvailable();
  const pendingOccurrences = getPendingRecurringOccurrences();
  const heading = document.createElement("div");
  heading.className = "recurring-panel-head";
  heading.innerHTML = `
    <div>
      <span class="section-kicker">${english ? "Recurring transactions" : "Transactions récurrentes"}</span>
      <h3>${english ? "Quick templates" : "Modèles rapides"}</h3>
      <p class="recurring-panel-note">${recurringAutomationAvailable ? (english ? "Mode B: enable a rule, choose a frequency, then review due entries before adding them to the journal." : "Mode B : activez une règle, choisissez une fréquence, puis validez les écritures dues avant de les ajouter au journal.") : (english ? "Templates are unavailable until a budget is loaded." : "Les modèles restent indisponibles tant qu'un budget n'est pas chargé.")}</p>
    </div>
    <div class="recurring-panel-toolbar">
      <button type="button" class="button secondary recurring-create-button" data-recurring-action="create-new" ${recurringAutomationAvailable ? "" : "disabled"}>
        ${escapeHtml(t("recurring.createButton"))}
      </button>
      ${showSaveButton ? `
        <button type="button" class="button ghost recurring-save-button" data-recurring-action="save-current" ${canSaveCurrentTransactionAsRecurringTemplate() ? "" : "disabled"}>
          ${english ? "Save transaction as template" : "Enregistrer la transaction comme modèle"}
        </button>
      ` : ""}
    </div>
  `;

  const list = document.createElement("div");
  list.className = "recurring-list";

  if (!templates.length) {
    const empty = document.createElement("div");
    empty.className = "empty-form recurring-empty";
    empty.textContent = english
      ? "No recurring template yet. Save a typical transaction to reuse it faster."
      : "Aucun modèle récurrent pour le moment. Enregistrez une transaction type pour la réutiliser plus vite.";
    list.appendChild(empty);
  } else {
    templates.forEach((template) => {
      const card = document.createElement("article");
      card.className = "recurring-card";
      const pendingCount = pendingOccurrences.filter((occurrence) => occurrence.templateId === template.id).length;
      const startDateLabel = template.startDate
        ? (formatDateForDisplay(template.startDate) || template.startDate)
        : (english ? "No start date" : "Aucune date de départ");
      card.innerHTML = `
        <div class="recurring-card-copy">
          <strong>${escapeHtml(getDisplayCategoryLabel(template.label) || template.label)}</strong>
          <p>${escapeHtml(getDisplayCategoryLabel(template.category) || template.category)} · ${escapeHtml(formatCurrency(parseAmount(template.value) || 0))} · ${escapeHtml(getPlanPeriodLabel(template.period))}</p>
          <small class="recurring-card-status">${recurringAutomationAvailable
            ? escapeHtml(
              template.autoCreate
                ? (pendingCount
                  ? (english ? `${pendingCount} pending review · starts ${startDateLabel}` : `${pendingCount} en attente de validation · démarre le ${startDateLabel}`)
                  : (english ? `Automatic rule active · starts ${startDateLabel}` : `Règle automatique active · démarre le ${startDateLabel}`))
                : (english ? "Template available on demand" : "Modèle disponible à la demande")
            )
            : escapeHtml(english ? "Recurring review unavailable" : "Validation récurrente indisponible")}</small>
        </div>
        ${recurringAutomationAvailable ? `
          <div class="recurring-card-config">
            <label class="recurring-config-field recurring-config-switch">
              <span>${english ? "Automatic" : "Automatique"}</span>
              <input type="checkbox" data-recurring-setting="auto" data-template-id="${escapeHtml(template.id)}" ${template.autoCreate ? "checked" : ""}>
            </label>
            <label class="recurring-config-field">
              <span>${english ? "Frequency" : "Fréquence"}</span>
              <select data-recurring-setting="period" data-template-id="${escapeHtml(template.id)}">
                ${PLAN_PERIOD_OPTIONS.map((option) => `
                  <option value="${escapeHtml(option.value)}" ${normalizePlanPeriod(template.period) === option.value ? "selected" : ""}>
                    ${escapeHtml(getPlanPeriodLabel(option.value))}
                  </option>
                `).join("")}
              </select>
            </label>
            <label class="recurring-config-field">
              <span>${english ? "Start date" : "Date de départ"}</span>
              <input type="date" value="${escapeHtml(template.startDate || "")}" data-recurring-setting="start-date" data-template-id="${escapeHtml(template.id)}">
            </label>
          </div>
        ` : ""}
        <div class="recurring-card-actions">
          <button type="button" class="button secondary" data-recurring-action="use" data-template-id="${escapeHtml(template.id)}">${english ? "Use" : "Utiliser"}</button>
          <button type="button" class="button ghost" data-recurring-action="delete" data-template-id="${escapeHtml(template.id)}">${english ? "Delete" : "Supprimer"}</button>
        </div>
      `;
      list.appendChild(card);
    });
  }

  section.append(heading, list);
  return section;
}

function renderPlanAmountField(row, index, readOnly = false) {
  const english = getCurrentLanguage() === "en";
  const wrapper = document.createElement("div");
  const derived = isDerivedPlanLabel(row.label);
  const rowKey = normalizeHeaderName(row.label);
  const displayLabel = derived ? getMetricDisplayLabel(row.label) : getDisplayCategoryLabel(row.label);
  wrapper.className = `budget-row plan-field-card${derived ? " is-derived" : ""}${readOnly ? " is-locked" : " is-editing"}`;
  wrapper.setAttribute("data-plan-row", row.label);
  wrapper.setAttribute("data-plan-key", rowKey);
  const parentLabel = !derived ? getBudgetFraCategoryLabel(row.label, row.group, row.plan) : "";
  const itemGroup = document.createElement("div");
  itemGroup.className = "budget-row-cell budget-row-poste";
  itemGroup.innerHTML = `
    <span class="budget-mobile-label">${english ? "Item" : "Poste"}</span>
    <div>
      <label class="item-label" for="plan-field-${index}">${escapeHtml(displayLabel)}</label>
      <span class="item-code">${escapeHtml(
        derived
          ? (english ? "Calculated automatically" : "Valeur calculée automatiquement")
          : readOnly
            ? (english ? "Read-only. Click Edit budget to modify it." : "Lecture seule. Cliquez sur Éditer le budget pour modifier.")
            : (english ? "The budget will be converted to a monthly equivalent." : "Le budget sera converti en équivalent mensuel.")
      )}</span>
    </div>
  `;

  const amountGroup = document.createElement("div");
  amountGroup.className = "budget-row-cell";
  amountGroup.innerHTML = `<span class="budget-mobile-label">${english ? "Amount" : "Montant"}</span>`;
  const input = document.createElement("input");
  input.id = `plan-field-${index}`;
  input.type = "text";
  input.inputMode = "decimal";
  input.autocomplete = "off";
  input.spellcheck = false;
  input.placeholder = "0,00";
  input.value = normalizeAmountValue(row.plan);
  input.setAttribute("data-plan-input", "true");
  input.setAttribute("data-plan-index", String(index));
  input.setAttribute("data-plan-label", row.label);
  input.setAttribute("data-plan-key", rowKey);
  if (readOnly) {
    input.readOnly = true;
  }
  amountGroup.appendChild(input);

  let periodGroup = null;
  if (!derived) {
    periodGroup = document.createElement("div");
    periodGroup.className = "budget-row-cell";
    periodGroup.innerHTML = `<span class="budget-mobile-label">${english ? "Period" : "Période"}</span>`;
    const select = document.createElement("select");
    select.id = `plan-period-${index}`;
    select.setAttribute("data-plan-period", "true");
    select.setAttribute("data-plan-index", String(index));
    select.setAttribute("data-plan-key", rowKey);
    if (readOnly) {
      select.disabled = true;
    }
    PLAN_PERIOD_OPTIONS.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = getPlanPeriodLabel(option.value);
      optionElement.selected = normalizePlanPeriod(row.period) === option.value;
      select.appendChild(optionElement);
    });
    periodGroup.appendChild(select);
  }

  const parentGroup = document.createElement("div");
  parentGroup.className = "budget-row-cell";
  parentGroup.innerHTML = `<span class="budget-mobile-label">${english ? "Parent" : "Parent"}</span>`;
  const parentValue = document.createElement("span");
  parentValue.className = `budget-parent-pill${parentLabel ? "" : " budget-parent-empty"}`;
  parentValue.setAttribute("data-plan-parent-label", "true");
  parentValue.textContent = parentLabel || (english ? "No parent" : "Aucun parent");
  parentGroup.appendChild(parentValue);

  const monthlyGroup = document.createElement("div");
  monthlyGroup.className = "budget-row-cell budget-row-monthly";
  monthlyGroup.innerHTML = `<span class="budget-mobile-label">${english ? "Monthly" : "Mensuel"}</span>`;
  const monthlyValue = document.createElement("strong");
  monthlyValue.className = "plan-monthly-value";
  monthlyValue.setAttribute("data-plan-monthly", "true");
  monthlyValue.textContent = formatCurrency(convertPlanAmountToMonthly(row.plan, row.period));
  monthlyGroup.appendChild(monthlyValue);

  if (periodGroup) {
    const periodText = document.createElement("span");
    periodText.className = "budget-period-pill";
    periodText.setAttribute("data-plan-period-label", "true");
    periodText.textContent = getPlanPeriodLabel(row.period);
    monthlyGroup.appendChild(periodText);
  }

  wrapper.append(itemGroup, amountGroup);
  if (periodGroup) {
    wrapper.appendChild(periodGroup);
  }
  wrapper.append(parentGroup, monthlyGroup);
  return wrapper;
}

function appendField(field) {
  refs.formFields.appendChild(field);
}

function createDetailMarkup(label, value) {
  return `
    <div class="detail-row">
      <span class="detail-label">${escapeHtml(label)}</span>
      <span class="detail-value">${escapeHtml(value || "-")}</span>
    </div>
  `;
}

function readCellText(cell) {
  if (!cell) {
    return "";
  }

  if (cell.w !== undefined && cell.w !== null && cell.w !== "") {
    return String(cell.w);
  }

  if (cell.v === undefined || cell.v === null) {
    return "";
  }

  return String(cell.v);
}

function readCellRawValue(cell) {
  return cell ? cell.v : "";
}

function normalizeHeaderName(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

const ENGLISH_CATEGORY_LABELS = new Map([
  ["Mon revenu net", "Net income"],
  ["Revenu du/de la partenaire", "Partner income"],
  ["Assurance-emploi", "Employment insurance"],
  ["Revenu de location", "Rental income"],
  ["Pension publique", "Public pension"],
  ["Pension de l'employeur", "Employer pension"],
  ["Revenu personnel pour la retraite", "Personal retirement income"],
  ["Epargne-etudes et prets", "Education savings and loans"],
  ["Pension alimentaire pour enfants", "Child support"],
  ["Allocation pour enfants", "Child benefits"],
  ["Prestations d'invalidite", "Disability benefits"],
  ["Aide sociale", "Social assistance"],
  ["Savings for seasonal exp.", "Seasonal savings"],
  ["Retraite", "Retirement"],
  ["Education (épargne)", "Education savings"],
  ["Achat d'une maison", "Home purchase"],
  ["Renovations de maison", "Home renovations"],
  ["Achat d'une auto", "Car purchase"],
  ["Impots", "Taxes"],
  ["Carte de credit", "Credit card"],
  ["Marge de credit", "Line of credit"],
  ["Pret personnel", "Personal loan"],
  ["Pret etudiant", "Student loan"],
  ["Loyer", "Rent"],
  ["Paiement hypothecaire", "Mortgage payment"],
  ["Marge de credit hypothecaire", "Home equity line of credit"],
  ["Impots fonciers", "Property taxes"],
  ["Frais de copropriete", "Condo fees"],
  ["Assurance pour locataire", "Tenant insurance"],
  ["Assurance maison", "Home insurance"],
  ["Meubles et appareils menagers", "Furniture and appliances"],
  ["Equipement et services pour l'exterieur", "Outdoor equipment and services"],
  ["Systeme de securite residentielle", "Home security system"],
  ["Electricite", "Electricity"],
  ["Eau et egouts", "Water and sewer"],
  ["Chauffage", "Heating"],
  ["Telephone / Cellulaire", "Phone / Cellphone"],
  ["Cable ou satellite", "Cable or satellite"],
  ["Forfait combine", "Bundle plan"],
  ["Services de divertissement", "Entertainment services"],
  ["Epicerie", "Groceries"],
  ["Restaurant ou plats a emporter", "Restaurants or takeout"],
  ["Vie", "Life"],
  ["Medicale et dentaire", "Medical and dental"],
  ["Invalidite ou accident", "Disability or accident"],
  ["Paiement d'auto (pret / location)", "Car payment (loan / lease)"],
  ["Assurance auto", "Car insurance"],
  ["Essence", "Fuel"],
  ["Entretien", "Maintenance"],
  ["Permis et immatriculation d'auto", "License and vehicle registration"],
  ["Stationnement", "Parking"],
  ["Transport en commun", "Public transit"],
  ["Services de transport", "Ride services"],
  ["Garderie", "Daycare"],
  ["Gardiennage", "Babysitting"],
  ["Frais scolaires", "School fees"],
  ["Manuels et fournitures", "Books and supplies"],
  ["Voyages scolaires", "School trips"],
  ["Vacances et voyages", "Vacations and travel"],
  ["Abonnement a des clubs", "Club memberships"],
  ["Activites et jouets pour enfants", "Children's activities and toys"],
  ["Billets pour evenements", "Event tickets"],
  ["Equipement sportif et autres activites", "Sports equipment and other activities"],
  ["Equipement de divertissement", "Entertainment equipment"],
  ["Alcool", "Alcohol"],
  ["Produits d'inhalation de fumee", "Smoking products"],
  ["Coiffure", "Haircare"],
  ["Cosmetiques et soins de la peau", "Cosmetics and skincare"],
  ["Spa et soins de beaute", "Spa and beauty care"],
  ["Vetements", "Clothing"],
  ["Vetements pour enfants", "Children's clothing"],
  ["Accessoires", "Accessories"],
  ["Medecin / Frais medicaux", "Doctor / medical costs"],
  ["Dentiste", "Dentist"],
  ["Specialistes", "Specialists"],
  ["Nourriture pour animaux", "Pet food"],
  ["Veterinaire", "Veterinarian"],
  ["Frais bancaires", "Bank fees"],
  ["Frais de carte de credit", "Credit card fees"],
  ["Cotisations professionnelles", "Professional dues"],
  ["Cadeaux", "Gifts"],
  ["Dons", "Donations"],
].map(([key, value]) => [normalizeHeaderName(key), value]));

const INTERNAL_CATEGORY_LABEL_BY_ENGLISH = new Map(
  Array.from(ENGLISH_CATEGORY_LABELS.entries()).map(([internalKey, englishLabel]) => [normalizeHeaderName(englishLabel), internalKey])
);

function getDisplayCategoryLabel(label) {
  const rawLabel = String(label || "").trim();
  if (!rawLabel) {
    return "";
  }

  if (!isEnglishUi()) {
    return rawLabel;
  }

  const normalized = normalizeHeaderName(rawLabel);
  return ENGLISH_CATEGORY_LABELS.get(normalized) || rawLabel;
}

function getInternalCategoryLabel(label) {
  const rawLabel = String(label || "").trim();
  if (!rawLabel || !isEnglishUi()) {
    return rawLabel;
  }

  const normalized = normalizeHeaderName(rawLabel);
  const internalKey = INTERNAL_CATEGORY_LABEL_BY_ENGLISH.get(normalized);
  if (!internalKey) {
    return rawLabel;
  }

  const categoryMatch = state.budget.categories.find((entry) => normalizeHeaderName(entry) === internalKey);
  if (categoryMatch) {
    return categoryMatch;
  }

  const planMatch = resolvePlanTemplate(state.recap.planTemplate).find((row) => normalizeHeaderName(row.label) === internalKey);
  if (planMatch) {
    return planMatch.label;
  }

  return rawLabel;
}

function normalizeDateValue(value) {
  if (value === null || value === undefined || value === "") {
    return "";
  }

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return excelSerialToIso(value);
  }

  const text = String(value).trim();
  if (!text) {
    return "";
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    return text;
  }

  if (/^\d+(\.\d+)?$/.test(text)) {
    return excelSerialToIso(Number(text));
  }

  const parsed = new Date(text);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }

  return "";
}

function excelSerialToIso(serial) {
  const epoch = Date.UTC(1899, 11, 30);
  const millis = Math.round(Number(serial) * 86400000);
  const date = new Date(epoch + millis);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toISOString().slice(0, 10);
}

function isoDateToExcelSerial(iso) {
  const date = new Date(`${iso}T00:00:00Z`);
  return (date.getTime() - Date.UTC(1899, 11, 30)) / 86400000;
}

function normalizeAmountValue(value) {
  if (value === null || value === undefined || value === "") {
    return "";
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return trimTrailingZeros(value);
  }

  const text = String(value).trim();
  if (!text) {
    return "";
  }

  const parsed = parseAmount(text);
  return Number.isFinite(parsed) ? trimTrailingZeros(parsed) : text;
}

function trimTrailingZeros(value) {
  return String(Number(value));
}

function parseAmount(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  const text = String(value ?? "").trim();
  if (!text) {
    return Number.NaN;
  }

  const normalized = text
    .replace(/\s/g, "")
    .replace(/\$/g, "")
    .replace(/\(/g, "-")
    .replace(/\)/g, "")
    .replace(/,/g, "");

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

function formatDateForDisplay(value) {
  const iso = normalizeDateValue(value);
  if (!iso) {
    return String(value ?? "").trim();
  }

  const parsed = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat("fr-CA", { dateStyle: "medium" }).format(parsed);
}

function formatDraftSavedAt(value) {
  if (!value) {
    return "";
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("fr-CA", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(parsed);
}

function formatCurrency(value) {
  const amount = parseAmount(value);
  if (!Number.isFinite(amount)) {
    return String(value ?? "").trim();
  }

  return new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 2,
  }).format(amount);
}

function formatSignedCurrency(value) {
  const amount = parseAmount(value);
  if (!Number.isFinite(amount)) {
    return String(value ?? "").trim();
  }

  return new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 2,
    signDisplay: "auto",
  }).format(amount);
}

function toDateInputValue(value) {
  return normalizeDateValue(value);
}

function sortBudgetRowsInPlace(rows) {
  rows.sort((left, right) => compareBudgetRowsForStorage(left, right));
}

function compareBudgetRowsForStorage(left, right) {
  const leftDate = normalizeDateValue(left.Date);
  const rightDate = normalizeDateValue(right.Date);

  if (leftDate && rightDate && leftDate !== rightDate) {
    return leftDate.localeCompare(rightDate);
  }

  if (leftDate && !rightDate) {
    return -1;
  }

  if (!leftDate && rightDate) {
    return 1;
  }

  const categoryCompare = (left.Categories || "").localeCompare(right.Categories || "", "fr-CA", {
    sensitivity: "base",
  });

  if (categoryCompare !== 0) {
    return categoryCompare;
  }

  return (left.__id || "").localeCompare(right.__id || "");
}

function compareBudgetRowsForDisplay(leftRow, rightRow, leftIndex, rightIndex) {
  const storageCompare = compareBudgetRowsForStorage(leftRow, rightRow);
  if (storageCompare !== 0) {
    return storageCompare * -1;
  }

  return rightIndex - leftIndex;
}

function sanitizeBudgetRow(row) {
  return {
    __id: row?.__id || createId(),
    Date: normalizeDateValue(row?.Date),
    Categories: String(row?.Categories ?? "").trim(),
    Value: normalizeAmountValue(row?.Value),
  };
}

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `record-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function setLastAction(message) {
  state.lastAction = message;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
