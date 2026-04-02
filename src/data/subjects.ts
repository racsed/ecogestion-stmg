// Subject definitions, chapters, and program structure
// Based on official STMG programs (Première & Terminale)

export interface Chapter {
  slug: string;
  title: string;
  theme: string;
  themeNumber: number;
  duration?: string;
  notions: string[];
  hasQCM: boolean;
  hasFiche: boolean;
  hasSujet: boolean;
}

export interface Subject {
  id: string;
  name: string;
  shortName: string;
  level: 'premiere' | 'terminale';
  emoji: string;
  color: string;          // Tailwind color prefix
  colorHex: string;       // For inline styles
  gradientFrom: string;
  gradientTo: string;
  description: string;
  chapters: Chapter[];
  available: boolean;     // Phase 1 or Phase 2
}

export const subjects: Subject[] = [
  // ═══════════════════════════════════════════
  //  PREMIÈRE
  // ═══════════════════════════════════════════
  {
    id: 'droit-premiere',
    name: 'Droit',
    shortName: 'Droit',
    level: 'premiere',
    emoji: '⚖️',
    color: 'droit',
    colorHex: '#3b82f6',
    gradientFrom: '#3b82f6',
    gradientTo: '#2563eb',
    description: 'Comprendre le cadre juridique qui organise la vie en société',
    available: true,
    chapters: [
      {
        slug: 'quest-ce-que-le-droit',
        title: "Qu'est-ce que le droit ?",
        theme: 'À quoi sert le droit ?',
        themeNumber: 1,
        notions: ['Droit objectif', 'Droits subjectifs', 'Règle de droit', 'Caractères de la règle de droit'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'les-sources-du-droit',
        title: 'Les sources du droit',
        theme: 'À quoi sert le droit ?',
        themeNumber: 1,
        notions: ['Constitution', 'Loi', 'Règlement', 'Jurisprudence', 'Hiérarchie des normes'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'la-preuve-des-droits',
        title: 'La preuve des droits',
        theme: 'À quoi sert le droit ?',
        themeNumber: 1,
        notions: ['Charge de la preuve', 'Modes de preuve', 'Acte juridique', 'Fait juridique'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'le-litige-et-le-recours-au-juge',
        title: 'Le litige et le recours au juge',
        theme: 'Comment le droit permet-il de régler un litige ?',
        themeNumber: 2,
        notions: ['Litige', 'Juridictions civiles', 'Juridictions pénales', 'Modes alternatifs'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'lorganisation-judiciaire',
        title: "L'organisation judiciaire",
        theme: 'Comment le droit permet-il de régler un litige ?',
        themeNumber: 2,
        notions: ['Ordre judiciaire', 'Ordre administratif', 'Double degré de juridiction', 'Cour de cassation'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'la-personne-juridique',
        title: 'La personne juridique',
        theme: 'Qui peut faire valoir ses droits ?',
        themeNumber: 3,
        notions: ['Personne physique', 'Personne morale', 'Personnalité juridique', 'Capacité juridique'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'les-droits-extrapatrimoniaux',
        title: 'Les droits extrapatrimoniaux',
        theme: 'Qui peut faire valoir ses droits ?',
        themeNumber: 3,
        notions: ['Droit à la vie privée', 'Droit à l\'image', 'Droits de la personnalité', 'RGPD'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'les-droits-patrimoniaux',
        title: 'Les droits patrimoniaux',
        theme: 'Qui peut faire valoir ses droits ?',
        themeNumber: 3,
        notions: ['Patrimoine', 'Droits réels', 'Droits personnels', 'Propriété'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
    ],
  },
  {
    id: 'economie-premiere',
    name: 'Économie',
    shortName: 'Éco',
    level: 'premiere',
    emoji: '📊',
    color: 'eco',
    colorHex: '#10b981',
    gradientFrom: '#10b981',
    gradientTo: '#059669',
    description: 'Décrypter les mécanismes économiques qui façonnent notre quotidien',
    available: true,
    chapters: [
      {
        slug: 'le-probleme-economique',
        title: 'Le problème économique',
        theme: 'Quelles sont les grandes questions économiques et leurs enjeux actuels ?',
        themeNumber: 1,
        notions: ['Besoins', 'Biens', 'Services', 'Rareté', 'Choix', 'Coût d\'opportunité'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'les-agents-economiques',
        title: 'Les agents économiques et le circuit',
        theme: 'Quelles sont les grandes questions économiques et leurs enjeux actuels ?',
        themeNumber: 1,
        notions: ['Ménages', 'Entreprises', 'État', 'Banques', 'Extérieur', 'Circuit économique'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'le-fonctionnement-du-marche',
        title: 'Le fonctionnement du marché',
        theme: 'Comment fonctionne le marché ?',
        themeNumber: 2,
        notions: ['Offre', 'Demande', 'Prix d\'équilibre', 'Élasticité'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'les-defaillances-du-marche',
        title: 'Les défaillances du marché',
        theme: 'Comment fonctionne le marché ?',
        themeNumber: 2,
        notions: ['Asymétrie d\'information', 'Externalités', 'Biens collectifs', 'Monopole'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'la-production-de-richesses',
        title: 'La production de richesses',
        theme: 'Comment l\'entreprise produit-elle ?',
        themeNumber: 3,
        notions: ['PIB', 'Valeur ajoutée', 'Facteurs de production', 'Productivité'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'le-financement-de-leconomie',
        title: "Le financement de l'économie",
        theme: 'Comment l\'entreprise produit-elle ?',
        themeNumber: 3,
        notions: ['Autofinancement', 'Financement externe', 'Marché financier', 'Crédit'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'la-monnaie',
        title: 'La monnaie et le financement',
        theme: 'La monnaie et le financement',
        themeNumber: 4,
        notions: ['Fonctions de la monnaie', 'Formes de la monnaie', 'Création monétaire', 'BCE'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'la-redistribution',
        title: 'La redistribution des revenus',
        theme: 'Comment l\'État intervient-il ?',
        themeNumber: 5,
        notions: ['Revenus primaires', 'Revenus de transfert', 'Prélèvements obligatoires', 'Protection sociale'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
    ],
  },
  {
    id: 'management-premiere',
    name: 'Management',
    shortName: 'Mgt',
    level: 'premiere',
    emoji: '🎯',
    color: 'management',
    colorHex: '#f59e0b',
    gradientFrom: '#f59e0b',
    gradientTo: '#d97706',
    description: 'Piloter les organisations et prendre des décisions stratégiques',
    available: true,
    chapters: [
      // Theme 1 : A la rencontre du management des organisations
      {
        slug: 'pourquoi-organiser-laction-collective',
        title: "Pourquoi est-il necessaire d'organiser l'action collective ?",
        theme: "A la rencontre du management des organisations",
        themeNumber: 1,
        notions: ['Action collective', 'Action individuelle', 'Organisation', 'Cadre juridique', 'Structure', 'Ressources'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'la-diversite-des-organisations',
        title: "Comment apprehender la diversite des organisations ?",
        theme: "A la rencontre du management des organisations",
        themeNumber: 1,
        notions: ['Finalite', 'But lucratif', 'But non lucratif', 'Service public', 'Secteur d\'activite', 'Taille', 'Statut juridique'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'quest-ce-que-le-management',
        title: "Qu'est-ce que le management des organisations ?",
        theme: "A la rencontre du management des organisations",
        themeNumber: 1,
        notions: ['Management', 'Management strategique', 'Management operationnel', 'Fonctions du management', 'Decision'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'le-management-face-aux-changements',
        title: "Comment le management repond-il aux changements de l'environnement ?",
        theme: "A la rencontre du management des organisations",
        themeNumber: 1,
        notions: ['Parties prenantes', 'RSE', 'Facteurs de contingence', 'Transformation numerique', 'Profit', 'Stabilite'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      // Theme 2 : Le management strategique, du diagnostic a la fixation des objectifs
      {
        slug: 'quest-ce-que-la-strategie',
        title: "Qu'est-ce que la strategie ?",
        theme: "Le management strategique, du diagnostic a la fixation des objectifs",
        themeNumber: 2,
        notions: ['Strategie', 'Objectifs strategiques', 'Diagnostic interne', 'Diagnostic externe', 'Planification', 'Environnement'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'le-diagnostic-strategique',
        title: "Comment elaborer le diagnostic strategique ?",
        theme: "Le management strategique, du diagnostic a la fixation des objectifs",
        themeNumber: 2,
        notions: ['Ressources', 'Competences', 'Forces', 'Faiblesses', 'PESTEL', 'Opportunites', 'Menaces', 'Veille strategique'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'les-objectifs-strategiques',
        title: "Comment interpreter le diagnostic et fixer les objectifs ?",
        theme: "Le management strategique, du diagnostic a la fixation des objectifs",
        themeNumber: 2,
        notions: ['Objectifs strategiques', 'Finalite', 'Indicateurs', 'Performance', 'Conflits', 'Consensus'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      // Theme 3 : Les choix strategiques des organisations
      {
        slug: 'specialisation-ou-diversification',
        title: "Specialisation ou diversification ?",
        theme: "Les choix strategiques des organisations",
        themeNumber: 3,
        notions: ['Specialisation', 'Diversification horizontale', 'Diversification verticale', 'Diversification conglomeree', 'DAS'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'domination-par-les-couts-ou-differenciation',
        title: "Domination par les couts ou differenciation ?",
        theme: "Les choix strategiques des organisations",
        themeNumber: 3,
        notions: ['Strategie de domaine', 'Domination par les couts', 'Differenciation', 'Avantage concurrentiel'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'externalisation-ou-integration',
        title: "Externalisation ou integration ?",
        theme: "Les choix strategiques des organisations",
        themeNumber: 3,
        notions: ['Externalisation', 'Integration', 'Chaine de valeur', 'Sous-traitance', 'Make or buy'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'croissance-et-internationalisation',
        title: "Croissance interne, externe, partenariat ou internationalisation ?",
        theme: "Les choix strategiques des organisations",
        themeNumber: 3,
        notions: ['Croissance interne', 'Croissance externe', 'Partenariat', 'Internationalisation', 'Fusion', 'Joint-venture'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'les-strategies-des-organisations-publiques',
        title: "Les strategies des organisations publiques",
        theme: "Les choix strategiques des organisations",
        themeNumber: 3,
        notions: ['Service public', 'Interet general', 'Budget', 'Delegation de service public', 'Collectivites territoriales'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'les-strategies-des-organisations-de-la-societe-civile',
        title: "Les organisations de la societe civile peuvent-elles se passer de strategie ?",
        theme: "Les choix strategiques des organisations",
        themeNumber: 3,
        notions: ['OSC', 'Association', 'ONG', 'Objet social', 'Partenariats', 'Transparence', 'Performance sociale'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
    ],
  },
  {
    id: 'sdgn-premiere',
    name: 'Sciences de Gestion et Numérique',
    shortName: 'SDGN',
    level: 'premiere',
    emoji: '💻',
    color: 'sdgn',
    colorHex: '#14b8a6',
    gradientFrom: '#14b8a6',
    gradientTo: '#0d9488',
    description: 'Comprendre comment le numérique transforme la gestion des organisations',
    available: false, // Phase 2
    chapters: [
      {
        slug: 'comment-un-individu-devient-acteur',
        title: "Comment un individu devient-il acteur dans une organisation ?",
        theme: 'De l\'individu à l\'acteur',
        themeNumber: 1,
        notions: ['Individu', 'Personnalité', 'Émotion', 'Perception', 'Communication'],
        hasQCM: false, hasFiche: false, hasSujet: false,
      },
      {
        slug: 'comment-les-individus-interagissent',
        title: "Comment les individus interagissent-ils ?",
        theme: 'De l\'individu à l\'acteur',
        themeNumber: 1,
        notions: ['Groupe', 'Dynamique de groupe', 'Culture', 'Conflit'],
        hasQCM: false, hasFiche: false, hasSujet: false,
      },
      {
        slug: 'information-et-intelligence-collective',
        title: "Information et intelligence collective",
        theme: 'Numérique et intelligence collective',
        themeNumber: 2,
        notions: ['Système d\'information', 'PGI', 'Cloud', 'Travail collaboratif'],
        hasQCM: false, hasFiche: false, hasSujet: false,
      },
      {
        slug: 'creation-de-valeur-et-performance',
        title: "Création de valeur et performance",
        theme: 'Création de valeur et performance',
        themeNumber: 3,
        notions: ['Valeur financière', 'Valeur perçue', 'Valeur sociale', 'Indicateurs'],
        hasQCM: false, hasFiche: false, hasSujet: false,
      },
      {
        slug: 'temps-et-risque',
        title: "Temps et risque",
        theme: 'Temps et risque',
        themeNumber: 4,
        notions: ['Horizon temporel', 'Planification', 'Veille', 'Gestion des risques'],
        hasQCM: false, hasFiche: false, hasSujet: false,
      },
    ],
  },

  // ═══════════════════════════════════════════
  //  TERMINALE
  // ═══════════════════════════════════════════
  {
    id: 'droit-terminale',
    name: 'Droit',
    shortName: 'Droit',
    level: 'terminale',
    emoji: '⚖️',
    color: 'droit',
    colorHex: '#3b82f6',
    gradientFrom: '#2563eb',
    gradientTo: '#1d4ed8',
    description: 'Approfondir le droit appliqué aux relations économiques et sociales',
    available: true,
    chapters: [
      {
        slug: 'le-contrat',
        title: 'Le contrat',
        theme: 'Comment le droit encadre-t-il les échanges économiques ?',
        themeNumber: 5,
        notions: ['Contrat', 'Formation du contrat', 'Conditions de validité', 'Clauses'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'la-responsabilite',
        title: 'La responsabilité',
        theme: 'Comment le droit encadre-t-il les échanges économiques ?',
        themeNumber: 5,
        notions: ['Responsabilité civile', 'Responsabilité pénale', 'Dommage', 'Réparation'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'le-droit-du-travail',
        title: 'Le contrat de travail',
        theme: 'Le droit du travail',
        themeNumber: 6,
        notions: ['CDI', 'CDD', 'Lien de subordination', 'Droits et obligations'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'la-rupture-du-contrat-de-travail',
        title: 'La rupture du contrat de travail',
        theme: 'Le droit du travail',
        themeNumber: 6,
        notions: ['Licenciement', 'Démission', 'Rupture conventionnelle', 'Procédure'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'les-libertes-individuelles-et-collectives',
        title: 'Les libertés individuelles et collectives du salarié',
        theme: 'Le droit du travail',
        themeNumber: 6,
        notions: ['Droit de grève', 'Syndicats', 'Négociation collective', 'CSE'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'le-numerique-et-le-droit',
        title: 'Le numérique et le droit',
        theme: 'Quel est le rôle du droit dans la régulation des rapports numériques ?',
        themeNumber: 7,
        notions: ['Données personnelles', 'RGPD', 'Propriété intellectuelle', 'E-commerce'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
    ],
  },
  {
    id: 'economie-terminale',
    name: 'Économie',
    shortName: 'Éco',
    level: 'terminale',
    emoji: '📊',
    color: 'eco',
    colorHex: '#10b981',
    gradientFrom: '#059669',
    gradientTo: '#047857',
    description: 'Analyser les grands enjeux économiques contemporains',
    available: true,
    chapters: [
      {
        slug: 'la-croissance-economique',
        title: 'La croissance économique',
        theme: 'Quels sont les grands enjeux économiques actuels ?',
        themeNumber: 8,
        notions: ['PIB', 'Croissance', 'Développement durable', 'Limites du PIB'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'le-commerce-international',
        title: 'Le commerce international',
        theme: 'La mondialisation',
        themeNumber: 9,
        notions: ['Libre-échange', 'Protectionnisme', 'Avantage comparatif', 'OMC'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'le-chomage',
        title: 'Le chômage',
        theme: 'Les déséquilibres sociaux',
        themeNumber: 10,
        notions: ['Chômage structurel', 'Chômage conjoncturel', 'Politiques de l\'emploi', 'Taux de chômage'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
      {
        slug: 'linflation',
        title: "L'inflation",
        theme: 'Les déséquilibres sociaux',
        themeNumber: 10,
        notions: ['Inflation', 'Déflation', 'Pouvoir d\'achat', 'Politique monétaire', 'BCE'],
        hasQCM: true, hasFiche: true, hasSujet: false,
      },
    ],
  },
  {
    id: 'mercatique-terminale',
    name: 'Mercatique',
    shortName: 'Mercatique',
    level: 'terminale',
    emoji: '🎨',
    color: 'mercatique',
    colorHex: '#8b5cf6',
    gradientFrom: '#8b5cf6',
    gradientTo: '#7c3aed',
    description: 'Maîtriser la démarche marketing et la relation client',
    available: true,
    chapters: [
      {
        slug: 'la-demarche-mercatique',
        title: 'La démarche mercatique',
        theme: 'Mercatique et consommateur',
        themeNumber: 1,
        notions: ['Marché', 'Demande', 'Offre', 'Veille mercatique', 'SIM'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'le-comportement-du-consommateur',
        title: 'Le comportement du consommateur',
        theme: 'Mercatique et consommateur',
        themeNumber: 1,
        notions: ['Besoins', 'Motivations', 'Freins', 'Facteurs d\'influence', 'Processus d\'achat'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'la-politique-de-produit',
        title: 'La politique de produit',
        theme: 'Mercatique et marchés',
        themeNumber: 2,
        notions: ['Gamme', 'Cycle de vie', 'Innovation', 'Packaging', 'Marque'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'la-politique-de-prix',
        title: 'La politique de prix',
        theme: 'Mercatique et marchés',
        themeNumber: 2,
        notions: ['Coût de revient', 'Marge', 'Prix psychologique', 'Élasticité prix'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'la-politique-de-distribution',
        title: 'La politique de distribution',
        theme: 'Mercatique et marchés',
        themeNumber: 2,
        notions: ['Canal', 'Circuit', 'Réseau', 'Stratégie de distribution', 'E-commerce'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'la-politique-de-communication',
        title: 'La politique de communication',
        theme: 'Mercatique et marchés',
        themeNumber: 2,
        notions: ['Communication média', 'Hors média', 'Publicité', 'Marketing digital'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'la-fidelisation',
        title: 'La fidélisation et la relation client',
        theme: 'Mercatique et société',
        themeNumber: 3,
        notions: ['CRM', 'Programme de fidélité', 'Satisfaction client', 'NPS'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
    ],
  },
  {
    id: 'msdgn-terminale',
    name: 'Management, Sciences de Gestion et Numérique',
    shortName: 'MSDGN',
    level: 'terminale',
    emoji: '🧩',
    color: 'msdgn',
    colorHex: '#ec4899',
    gradientFrom: '#ec4899',
    gradientTo: '#db2777',
    description: 'Croiser management et gestion pour piloter les organisations',
    available: true,
    chapters: [
      {
        slug: 'comment-lentreprise-integre-les-attentes-des-acteurs',
        title: "Comment l'entreprise intègre-t-elle les attentes de ses acteurs ?",
        theme: "Les organisations et la société",
        themeNumber: 1,
        notions: ['Parties prenantes', 'RSE', 'Finalités', 'Gouvernance'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'les-choix-strategiques-de-lorganisation',
        title: "Les choix stratégiques de l'organisation",
        theme: 'Les organisations et la société',
        themeNumber: 1,
        notions: ['Stratégie globale', 'Spécialisation', 'Diversification', 'Intégration'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'les-ressources-humaines',
        title: 'La gestion des ressources humaines',
        theme: 'Les organisations et les acteurs',
        themeNumber: 2,
        notions: ['GPEC', 'Recrutement', 'Formation', 'Motivation', 'Rémunération'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'le-numerique-transforme-le-management',
        title: 'Comment le numérique transforme-t-il le management ?',
        theme: 'Les organisations et le numérique',
        themeNumber: 3,
        notions: ['Transformation digitale', 'Intelligence artificielle', 'Big data', 'Automatisation'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
      {
        slug: 'linnovation-et-la-creation-de-valeur',
        title: "L'innovation et la création de valeur",
        theme: 'Les organisations et le numérique',
        themeNumber: 3,
        notions: ['Innovation', 'Veille stratégique', 'Création de valeur', 'Business model'],
        hasQCM: true, hasFiche: true, hasSujet: true,
      },
    ],
  },
];

// Helper functions
export function getSubjectsByLevel(level: 'premiere' | 'terminale') {
  return subjects.filter(s => s.level === level);
}

export function getSubjectById(id: string) {
  return subjects.find(s => s.id === id);
}

export function getAvailableSubjects() {
  return subjects.filter(s => s.available);
}

export function getTotalChapters() {
  return subjects.reduce((acc, s) => acc + s.chapters.length, 0);
}

export function getTotalQCM() {
  return subjects.reduce((acc, s) => acc + s.chapters.filter(c => c.hasQCM).length, 0);
}

// QCM data for demo chapters
export interface QCMQuestion {
  question: string;
  options: string[];
  correct: number; // index
  explanation: string;
}

export const sampleQCM: Record<string, QCMQuestion[]> = {
  'quest-ce-que-le-droit': [
    {
      question: "Quel est le caractère fondamental de la règle de droit ?",
      options: ["Elle est facultative", "Elle est obligatoire et sanctionnée", "Elle est uniquement morale", "Elle ne s'applique qu'aux entreprises"],
      correct: 1,
      explanation: "La règle de droit est obligatoire et sa violation est sanctionnée par l'autorité publique, contrairement aux règles morales ou religieuses."
    },
    {
      question: "Quelle est la différence entre le droit objectif et les droits subjectifs ?",
      options: ["Il n'y a aucune différence", "Le droit objectif est l'ensemble des règles, les droits subjectifs sont les prérogatives individuelles", "Le droit objectif concerne les objets, le droit subjectif les personnes", "Le droit objectif est ancien, le droit subjectif est moderne"],
      correct: 1,
      explanation: "Le droit objectif désigne l'ensemble des règles qui organisent la vie en société. Les droits subjectifs sont les prérogatives dont une personne peut se prévaloir."
    },
    {
      question: "La règle de droit est :",
      options: ["Particulière et temporaire", "Générale, abstraite et obligatoire", "Facultative et personnelle", "Uniquement nationale"],
      correct: 1,
      explanation: "La règle de droit est générale (elle s'applique à tous), abstraite (elle vise des situations types) et obligatoire (elle s'impose à tous)."
    },
    {
      question: "Que signifie le caractère 'coercitif' de la règle de droit ?",
      options: ["Elle est votée par le Parlement", "Elle est assortie de sanctions en cas de non-respect", "Elle est écrite dans le Journal Officiel", "Elle est enseignée à l'école"],
      correct: 1,
      explanation: "Le caractère coercitif signifie que la règle de droit est accompagnée de la possibilité de sanctions en cas de violation, ce qui la distingue des autres règles sociales."
    },
    {
      question: "Parmi les propositions suivantes, laquelle est une source du droit ?",
      options: ["Les habitudes personnelles", "La jurisprudence", "Les opinions des citoyens", "Les sondages d'opinion"],
      correct: 1,
      explanation: "La jurisprudence (ensemble des décisions de justice) est une source du droit, au même titre que la loi, la Constitution ou les règlements."
    },
    {
      question: "La Constitution se situe :",
      options: ["Au bas de la hiérarchie des normes", "Au sommet de la hiérarchie des normes", "Au même niveau que la loi", "En dehors de la hiérarchie des normes"],
      correct: 1,
      explanation: "Dans la hiérarchie des normes (pyramide de Kelsen), la Constitution est la norme suprême à laquelle toutes les autres normes doivent être conformes."
    },
    {
      question: "Un acte juridique est :",
      options: ["Un événement involontaire qui crée des effets de droit", "Une manifestation de volonté destinée à produire des effets de droit", "Un document uniquement notarié", "Une décision de justice"],
      correct: 1,
      explanation: "L'acte juridique est une manifestation intentionnelle de volonté destinée à produire des effets de droit (ex : un contrat, un testament)."
    },
    {
      question: "Qui supporte la charge de la preuve en matière civile ?",
      options: ["Le juge", "Le défendeur", "Le demandeur (celui qui réclame)", "L'avocat"],
      correct: 2,
      explanation: "En matière civile, c'est au demandeur de prouver ce qu'il avance (article 1353 du Code civil) : 'celui qui réclame l'exécution d'une obligation doit la prouver'."
    },
    {
      question: "Un fait juridique est :",
      options: ["Toujours volontaire", "Un événement (volontaire ou non) auquel la loi attache des conséquences juridiques", "Synonyme d'acte juridique", "Un fait divers relaté dans la presse"],
      correct: 1,
      explanation: "Le fait juridique est un événement volontaire ou involontaire qui produit des effets de droit sans que ceux-ci aient été recherchés (ex : un accident, une naissance)."
    },
    {
      question: "La loi est votée par :",
      options: ["Le Président de la République", "Le Parlement (Assemblée nationale et Sénat)", "Le Premier ministre", "Le Conseil constitutionnel"],
      correct: 1,
      explanation: "La loi est votée par le Parlement, composé de l'Assemblée nationale et du Sénat. Le Président la promulgue ensuite."
    },
  ],
  'le-fonctionnement-du-marche': [
    {
      question: "Sur un marché concurrentiel, le prix d'équilibre se fixe :",
      options: ["Par décision de l'État", "À l'intersection de l'offre et de la demande", "Au prix le plus bas possible", "Par accord entre les entreprises"],
      correct: 1,
      explanation: "Sur un marché concurrentiel, le prix d'équilibre se forme à l'intersection de la courbe d'offre et de la courbe de demande."
    },
    {
      question: "Quand le prix d'un bien augmente, toutes choses égales par ailleurs :",
      options: ["La demande augmente", "La demande diminue", "La demande reste stable", "L'offre diminue"],
      correct: 1,
      explanation: "Selon la loi de la demande, lorsque le prix augmente, la quantité demandée diminue (relation inverse), toutes choses égales par ailleurs."
    },
    {
      question: "L'élasticité-prix de la demande mesure :",
      options: ["Le profit de l'entreprise", "La sensibilité de la demande à une variation de prix", "Le nombre de concurrents sur le marché", "La qualité du produit"],
      correct: 1,
      explanation: "L'élasticité-prix de la demande mesure la variation en pourcentage de la demande par rapport à une variation en pourcentage du prix."
    },
    {
      question: "Un bien dont l'élasticité-prix est proche de 0 est :",
      options: ["Un bien de luxe", "Un bien peu sensible aux variations de prix", "Un bien gratuit", "Un bien interdit"],
      correct: 1,
      explanation: "Une élasticité proche de 0 signifie que la demande varie très peu quand le prix change. C'est le cas des biens de première nécessité (pain, essence)."
    },
    {
      question: "La loi de l'offre indique que :",
      options: ["Quand le prix monte, les producteurs offrent moins", "Quand le prix monte, les producteurs offrent plus", "L'offre est toujours fixe", "L'offre ne dépend pas du prix"],
      correct: 1,
      explanation: "Selon la loi de l'offre, il existe une relation croissante entre le prix et la quantité offerte : plus le prix est élevé, plus les producteurs sont incités à offrir."
    },
  ],
  'la-demarche-mercatique': [
    {
      question: "La mercatique (marketing) consiste à :",
      options: ["Vendre le maximum de produits au prix le plus élevé", "Détecter les besoins des consommateurs pour proposer une offre adaptée", "Faire uniquement de la publicité", "Copier les concurrents"],
      correct: 1,
      explanation: "La mercatique est une démarche qui part des besoins du consommateur pour concevoir une offre adaptée, et non l'inverse."
    },
    {
      question: "Le SIM (Système d'Information Mercatique) sert à :",
      options: ["Espionner les concurrents", "Collecter, stocker, traiter et diffuser les informations nécessaires aux décisions mercatiques", "Gérer la comptabilité", "Remplacer les vendeurs"],
      correct: 1,
      explanation: "Le SIM est un ensemble de moyens permettant de recueillir, traiter et diffuser les informations utiles à la prise de décision en mercatique."
    },
    {
      question: "La veille mercatique consiste à :",
      options: ["Surveiller les employés", "Observer en permanence l'environnement concurrentiel et commercial", "Fermer le magasin la nuit", "Attendre que les clients viennent"],
      correct: 1,
      explanation: "La veille mercatique est une surveillance continue de l'environnement (concurrents, tendances, clients, innovations) pour anticiper les évolutions du marché."
    },
    {
      question: "L'offre sur un marché comprend :",
      options: ["Uniquement les produits d'une seule entreprise", "L'ensemble des biens et services proposés par les entreprises pour satisfaire un même besoin", "Les publicités", "Les réclamations des clients"],
      correct: 1,
      explanation: "L'offre sur un marché regroupe l'ensemble des produits et services proposés par les différentes entreprises pour répondre à un même type de besoin."
    },
    {
      question: "La demande en mercatique représente :",
      options: ["Les commandes passées aux fournisseurs", "L'ensemble des acheteurs actuels et potentiels d'un produit", "Le stock en magasin", "Le chiffre d'affaires"],
      correct: 1,
      explanation: "La demande comprend les acheteurs actuels (clients) et potentiels (prospects) susceptibles d'acquérir le produit ou service sur le marché."
    },
  ],
};
