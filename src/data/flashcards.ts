export interface FlashcardSet {
  cards: { term: string; definition: string; example?: string }[];
}

export const flashcards: Record<string, FlashcardSet> = {
  // =============================================
  // DROIT PREMIERE
  // =============================================
  'quest-ce-que-le-droit': {
    cards: [
      { term: 'Droit objectif', definition: "Ensemble des regles juridiques qui organisent la vie en societe et dont le non-respect est sanctionne par la puissance publique.", example: "Le Code civil, le Code penal" },
      { term: 'Droits subjectifs', definition: "Prerogatives reconnues a un individu par le droit objectif, qu'il peut exercer ou dont il peut se prevaloir.", example: "Droit de propriete, droit de vote" },
      { term: 'Regle de droit', definition: "Regle de conduite en societe, generale, abstraite, obligatoire et sanctionnee par l'autorite publique." },
      { term: 'Caractere coercitif', definition: "La regle de droit est assortie de sanctions en cas de non-respect, ce qui la distingue des regles morales ou religieuses." },
      { term: 'Hierarchie des normes', definition: "Organisation pyramidale des normes juridiques (Kelsen) ou chaque norme doit etre conforme a celle qui lui est superieure.", example: "Constitution > Traites > Lois > Reglements" },
      { term: 'Acte juridique', definition: "Manifestation intentionnelle de volonte destinee a produire des effets de droit.", example: "Un contrat, un testament" },
      { term: 'Fait juridique', definition: "Evenement volontaire ou involontaire auquel la loi attache des consequences juridiques non recherchees.", example: "Un accident, une naissance" },
      { term: 'Charge de la preuve', definition: "En matiere civile, c'est au demandeur de prouver ce qu'il avance (art. 1353 Code civil)." },
      { term: 'Jurisprudence', definition: "Ensemble des decisions de justice qui interpretent et completent la loi. Source du droit." },
      { term: 'Constitution', definition: "Norme supreme de l'Etat. En France, la Constitution du 4 octobre 1958 fonde la Ve Republique." },
    ],
  },
  'les-sources-du-droit': {
    cards: [
      { term: 'Constitution', definition: "Norme juridique supreme dans la hierarchie des normes. Elle fixe l'organisation des pouvoirs publics et garantit les libertes fondamentales.", example: "La Constitution de 1958 organise la Ve Republique" },
      { term: 'Loi', definition: "Regle de droit votee par le Parlement (Assemblee nationale et Senat). Elle s'applique a tous sur le territoire national.", example: "Loi du 5 mars 2007 sur la protection des consommateurs" },
      { term: 'Reglement', definition: "Norme juridique adoptee par le pouvoir executif (decrets, arretes). Il precise les modalites d'application des lois.", example: "Un decret du Premier ministre, un arrete du maire" },
      { term: 'Jurisprudence', definition: "Ensemble des decisions rendues par les tribunaux qui interpretent et completent la loi. Elle fait evoluer le droit.", example: "L'arret Blanco (1873) a fonde la responsabilite de l'Etat" },
      { term: 'Hierarchie des normes', definition: "Principe selon lequel chaque norme juridique doit etre conforme a la norme qui lui est superieure, formant une pyramide (Kelsen).", example: "Une loi contraire a la Constitution peut etre censuree par le Conseil constitutionnel" },
      { term: 'Traites internationaux', definition: "Accords conclus entre Etats ou avec des organisations internationales. Ils ont une valeur superieure aux lois nationales.", example: "Les traites europeens s'imposent aux lois francaises" },
      { term: 'Coutume', definition: "Usage ancien, repete et considere comme obligatoire par une communaute. C'est une source complementaire du droit.", example: "En droit commercial, certains usages font office de regles" },
    ],
  },
  'la-preuve-des-droits': {
    cards: [
      { term: 'Charge de la preuve', definition: "Obligation pour le demandeur de prouver les faits qu'il allegue. C'est le principe 'actori incumbit probatio' (art. 1353 du Code civil).", example: "Un salarie qui conteste son licenciement doit prouver l'absence de cause reelle" },
      { term: 'Modes de preuve', definition: "Moyens autorises par la loi pour etablir la verite d'un fait ou d'un acte : ecrit, temoignage, aveu, serment, presomption.", example: "Un contrat ecrit, un temoignage devant le juge" },
      { term: 'Acte juridique', definition: "Manifestation de volonte destinee a produire des effets de droit. Sa preuve est en principe rapportee par un ecrit au-dela de 1 500 euros.", example: "Un contrat de vente, un bail, une donation" },
      { term: 'Fait juridique', definition: "Evenement volontaire ou non dont les consequences juridiques n'ont pas ete recherchees. Sa preuve est libre (tous moyens).", example: "Un accident de voiture, un dommage cause par un animal" },
      { term: 'Preuve par ecrit', definition: "Moyen de preuve le plus fiable, obligatoire pour les actes juridiques depassant 1 500 euros. Inclut l'acte authentique et l'acte sous seing prive.", example: "Un acte notarie pour la vente d'un bien immobilier" },
      { term: 'Presomption', definition: "Raisonnement par lequel on deduit un fait inconnu d'un fait connu. Elle peut etre simple (refutable) ou irrefragable.", example: "Le possesseur d'un bien meuble est presume proprietaire (art. 2276)" },
      { term: 'Temoignage', definition: "Declaration d'une personne qui rapporte ce qu'elle a vu ou entendu. Admis librement pour prouver un fait juridique.", example: "Un temoin d'un accident de la route temoigne devant le tribunal" },
    ],
  },
  'le-litige-et-le-recours-au-juge': {
    cards: [
      { term: 'Litige', definition: "Desaccord entre deux ou plusieurs personnes portant sur l'exercice d'un droit. Il peut etre resolu par le juge ou par des modes alternatifs.", example: "Un conflit entre un proprietaire et un locataire sur le montant du loyer" },
      { term: 'Juridictions civiles', definition: "Tribunaux charges de trancher les litiges entre personnes privees (particuliers, entreprises).", example: "Le tribunal judiciaire, le conseil de prud'hommes, le tribunal de commerce" },
      { term: 'Juridictions penales', definition: "Tribunaux charges de juger les infractions (contraventions, delits, crimes) et de prononcer des peines.", example: "Le tribunal de police, le tribunal correctionnel, la cour d'assises" },
      { term: 'Modes alternatifs de reglement des litiges', definition: "Moyens de resoudre un conflit sans passer par un proces : mediation, conciliation, arbitrage.", example: "La mediation familiale avant un divorce" },
      { term: 'Mediation', definition: "Mode amiable ou un tiers neutre (le mediateur) aide les parties a trouver elles-memes une solution a leur conflit." },
      { term: 'Conciliation', definition: "Mode amiable ou un tiers (le conciliateur) propose une solution aux parties. Gratuite et souvent obligatoire avant certains proces." },
      { term: 'Arbitrage', definition: "Mode alternatif ou les parties confient la resolution de leur litige a un ou plusieurs arbitres prives. Leur decision (sentence) s'impose.", example: "Frequemment utilise dans le commerce international" },
    ],
  },
  'lorganisation-judiciaire': {
    cards: [
      { term: 'Ordre judiciaire', definition: "Ensemble des juridictions competentes pour les litiges entre personnes privees (civil) et pour les infractions penales.", example: "Tribunal judiciaire, cour d'appel, Cour de cassation" },
      { term: 'Ordre administratif', definition: "Ensemble des juridictions competentes pour les litiges impliquant l'administration ou une personne publique.", example: "Tribunal administratif, cour administrative d'appel, Conseil d'Etat" },
      { term: 'Double degre de juridiction', definition: "Principe permettant a toute personne mecontente d'un jugement de faire rejuger l'affaire par une juridiction superieure (appel).", example: "Un jugement du tribunal judiciaire peut etre conteste devant la cour d'appel" },
      { term: 'Cour de cassation', definition: "Plus haute juridiction de l'ordre judiciaire. Elle ne rejuge pas les faits mais verifie la bonne application du droit par les juges du fond.", example: "Elle peut casser un arret de cour d'appel si le droit a ete mal applique" },
      { term: 'Conseil d\'Etat', definition: "Plus haute juridiction de l'ordre administratif. Il juge les litiges en dernier ressort et conseille le gouvernement sur les projets de loi." },
      { term: 'Tribunal des conflits', definition: "Juridiction paritaire chargee de trancher les conflits de competence entre l'ordre judiciaire et l'ordre administratif." },
      { term: 'Competence d\'attribution', definition: "Regle qui determine quelle juridiction est competente en fonction de la nature du litige (civil, penal, commercial, etc.).", example: "Le conseil de prud'hommes est competent pour les litiges du travail" },
    ],
  },
  'la-personne-juridique': {
    cards: [
      { term: 'Personne physique', definition: "Tout etre humain titulaire de droits et d'obligations. La personnalite juridique debute a la naissance et prend fin au deces." },
      { term: 'Personne morale', definition: "Groupement de personnes ou de biens ayant une existence juridique propre, distincte de celle de ses membres.", example: "Une societe (SA, SARL), une association, une commune" },
      { term: 'Personnalite juridique', definition: "Aptitude a etre titulaire de droits et d'obligations. Elle est reconnue a toute personne physique et a certaines personnes morales." },
      { term: 'Capacite juridique', definition: "Aptitude d'une personne a avoir des droits (capacite de jouissance) et a les exercer seule (capacite d'exercice).", example: "Un mineur a une capacite d'exercice limitee : il ne peut pas signer seul un contrat" },
      { term: 'Nom et domicile', definition: "Elements d'identification de la personne juridique. Le nom est obligatoire et le domicile determine la competence des tribunaux." },
      { term: 'Patrimoine', definition: "Ensemble des droits et obligations d'une personne, evaluables en argent. Toute personne a un patrimoine et un seul.", example: "L'actif (biens, creances) et le passif (dettes) d'une personne" },
    ],
  },
  'les-droits-extrapatrimoniaux': {
    cards: [
      { term: 'Droit a la vie privee', definition: "Droit fondamental protege par l'article 9 du Code civil. Chacun a droit au respect de sa vie privee (famille, sante, sentiments).", example: "Un journal ne peut pas reveler la maladie d'une personne sans son accord" },
      { term: 'Droit a l\'image', definition: "Droit de toute personne de s'opposer a la captation et a la diffusion de son image sans son consentement.", example: "Publier la photo d'un passant identifiable sans son accord est interdit" },
      { term: 'Droits de la personnalite', definition: "Droits innes, incessibles, intransmissibles et imprescriptibles attaches a la personne humaine.", example: "Droit a l'integrite physique, droit a l'honneur, droit au respect de la vie privee" },
      { term: 'RGPD', definition: "Reglement General sur la Protection des Donnees (2018). Il encadre la collecte, le traitement et la conservation des donnees personnelles dans l'UE.", example: "Un site web doit obtenir le consentement avant de deposer des cookies" },
      { term: 'Donnees personnelles', definition: "Toute information se rapportant a une personne physique identifiee ou identifiable, directement ou indirectement.", example: "Nom, adresse email, adresse IP, photo, numero de telephone" },
      { term: 'Droit a l\'oubli', definition: "Droit de demander la suppression de donnees personnelles en ligne lorsqu'elles ne sont plus necessaires ou pertinentes.", example: "Demander a un moteur de recherche de dereferencier un ancien article" },
      { term: 'Caracteres des droits extrapatrimoniaux', definition: "Ces droits sont hors du patrimoine : ils sont incessibles (ne se vendent pas), intransmissibles (ne se transmettent pas aux heritiers) et insaisissables." },
    ],
  },
  'les-droits-patrimoniaux': {
    cards: [
      { term: 'Patrimoine', definition: "Ensemble des droits et obligations d'une personne evaluables en argent. Il comprend un actif (biens, creances) et un passif (dettes)." },
      { term: 'Droits reels', definition: "Droits exerces directement sur une chose, sans intermediaire. Ils conferent a leur titulaire un pouvoir direct sur le bien.", example: "Le droit de propriete, l'usufruit, l'hypotheque" },
      { term: 'Droits personnels', definition: "Droits qui permettent a une personne (le creancier) d'exiger d'une autre (le debiteur) l'execution d'une prestation.", example: "Le droit de reclamer le paiement d'un loyer a un locataire" },
      { term: 'Droit de propriete', definition: "Droit reel le plus complet. Il confere trois attributs : usus (droit d'utiliser), fructus (droit de percevoir les fruits), abusus (droit de disposer).", example: "Un proprietaire peut habiter sa maison, la louer et la vendre" },
      { term: 'Propriete intellectuelle', definition: "Ensemble des droits portant sur les creations de l'esprit : propriete industrielle (brevets, marques) et propriete litteraire et artistique (droit d'auteur).", example: "Un brevet protege une invention pendant 20 ans" },
      { term: 'Caracteres des droits patrimoniaux', definition: "Ces droits sont dans le patrimoine : ils sont cessibles (se vendent), transmissibles (se transmettent aux heritiers), saisissables et prescriptibles." },
    ],
  },
  'le-contrat': {
    cards: [
      { term: 'Contrat', definition: "Accord de volontes entre deux ou plusieurs personnes destine a creer, modifier ou eteindre des obligations." },
      { term: 'Conditions de validite', definition: "Le consentement libre et eclaire, la capacite juridique, un contenu licite et certain." },
      { term: 'Dol', definition: "Vice du consentement : manoeuvres trompeuses par l'une des parties pour obtenir le consentement de l'autre.", example: "Vendeur qui cache un defaut grave" },
      { term: 'Erreur', definition: "Vice du consentement : croyance fausse sur un element essentiel du contrat.", example: "Acheter un faux tableau en croyant qu'il est authentique" },
      { term: 'Violence', definition: "Vice du consentement : contrainte physique ou morale exercee pour forcer le consentement." },
      { term: 'Force obligatoire', definition: "Le contrat 'tient lieu de loi' aux parties (art. 1103) : elles doivent respecter leurs engagements." },
      { term: 'Nullite du contrat', definition: "Aneantissement retroactif du contrat : il est cense n'avoir jamais existe." },
      { term: 'Contrat synallagmatique', definition: "Contrat ou les deux parties ont des obligations reciproques.", example: "Contrat de vente, contrat de travail" },
    ],
  },

  // =============================================
  // ECONOMIE PREMIERE
  // =============================================
  'le-probleme-economique': {
    cards: [
      { term: 'Besoins', definition: "Sentiment de manque qu'un individu cherche a satisfaire. Les besoins sont illimites et evoluent avec le temps et la societe.", example: "Besoin primaire : se nourrir. Besoin secondaire : acheter un smartphone" },
      { term: 'Biens', definition: "Produits materiels destines a satisfaire un besoin. Ils peuvent etre marchands (payants) ou non marchands (gratuits).", example: "Une voiture, un vetement, un livre" },
      { term: 'Services', definition: "Prestations immaterielles destinees a satisfaire un besoin. Ils sont produits et consommes simultanement.", example: "Une coupe de cheveux, un cours particulier, un abonnement Netflix" },
      { term: 'Rarete', definition: "Les ressources (travail, capital, matieres premieres) sont limitees alors que les besoins sont illimites. C'est le fondement du probleme economique." },
      { term: 'Choix economique', definition: "Necessite pour tout agent economique de selectionner entre differentes alternatives en raison de la rarete des ressources." },
      { term: 'Cout d\'opportunite', definition: "Valeur de la meilleure option a laquelle on renonce lorsqu'on fait un choix. Choisir, c'est renoncer.", example: "Etudier au lieu de travailler : le cout d'opportunite est le salaire perdu" },
    ],
  },
  'les-agents-economiques': {
    cards: [
      { term: 'Menages', definition: "Ensemble des personnes vivant sous le meme toit. Leur fonction principale est de consommer des biens et services.", example: "Une famille qui fait ses courses au supermarche" },
      { term: 'Entreprises', definition: "Organisations qui produisent des biens et services marchands dans le but de realiser un profit." },
      { term: 'Etat (administrations publiques)', definition: "Ensemble des administrations (Etat central, collectivites, Securite sociale) qui produisent des services non marchands et redistribuent les revenus." },
      { term: 'Banques (institutions financieres)', definition: "Organismes dont la fonction principale est de financer l'economie en collectant l'epargne et en accordant des credits.", example: "BNP Paribas, Credit Agricole, Banque de France" },
      { term: 'Exterieur (reste du monde)', definition: "Ensemble des agents economiques situes hors du territoire national avec lesquels les agents residents effectuent des echanges.", example: "Exportations francaises vers l'Allemagne, importations de Chine" },
      { term: 'Circuit economique', definition: "Representation simplifiee des flux (reels et monetaires) entre les differents agents economiques d'une economie.", example: "Les menages fournissent du travail aux entreprises qui leur versent des salaires" },
    ],
  },
  'le-fonctionnement-du-marche': {
    cards: [
      { term: "Prix d'equilibre", definition: "Prix auquel l'offre et la demande sont egales sur un marche concurrentiel." },
      { term: 'Loi de la demande', definition: "Relation inverse entre le prix et la quantite demandee : quand le prix augmente, la demande diminue." },
      { term: "Loi de l'offre", definition: "Relation croissante entre le prix et la quantite offerte : quand le prix augmente, l'offre augmente." },
      { term: 'Elasticite-prix', definition: "Mesure de la sensibilite de la demande a une variation de prix. Elasticite = %variation Demande / %variation Prix." },
      { term: 'Concurrence pure et parfaite', definition: "Modele theorique supposant : atomicite, homogeneite, transparence, libre entree et mobilite des facteurs." },
      { term: 'Surplus', definition: "Situation ou l'offre depasse la demande, poussant le prix a la baisse." },
      { term: 'Penurie', definition: "Situation ou la demande depasse l'offre, poussant le prix a la hausse." },
    ],
  },
  'les-defaillances-du-marche': {
    cards: [
      { term: 'Asymetrie d\'information', definition: "Situation ou l'un des agents economiques dispose de plus d'informations que l'autre lors d'un echange, faussant le fonctionnement du marche.", example: "Un vendeur de voiture d'occasion connait les defauts du vehicule, pas l'acheteur" },
      { term: 'Externalites', definition: "Consequences positives ou negatives de l'activite d'un agent economique sur d'autres agents, sans compensation par le marche.", example: "Positive : un apiculteur favorise la pollinisation. Negative : une usine pollue une riviere" },
      { term: 'Biens collectifs', definition: "Biens non excludables (on ne peut en empecher l'acces) et non rivaux (la consommation par l'un ne reduit pas celle des autres). Le marche ne peut les produire efficacement.", example: "L'eclairage public, la defense nationale" },
      { term: 'Monopole', definition: "Situation de marche ou un seul offreur fait face a de nombreux demandeurs. Il peut fixer les prix et limiter les quantites.", example: "Historiquement, EDF en monopole sur l'electricite en France" },
      { term: 'Intervention de l\'Etat', definition: "L'Etat intervient pour corriger les defaillances du marche : reglementation, taxation, subventions, production de biens collectifs.", example: "Taxe carbone pour limiter la pollution (externalite negative)" },
      { term: 'Alea moral', definition: "Risque qu'un agent economique adopte un comportement plus risque parce qu'il est protege contre les consequences de ce risque.", example: "Un assure qui prend moins de precautions car il sait qu'il est couvert" },
    ],
  },
  'la-production-de-richesses': {
    cards: [
      { term: 'PIB (Produit Interieur Brut)', definition: "Indicateur mesurant la richesse creee sur un territoire pendant une periode donnee. C'est la somme des valeurs ajoutees.", example: "Le PIB de la France est d'environ 2 800 milliards d'euros" },
      { term: 'Valeur ajoutee', definition: "Richesse reellement creee par une entreprise. Elle se calcule : Chiffre d'affaires - Consommations intermediaires.", example: "Un boulanger achete de la farine (CI) et vend du pain (CA). La VA est la difference" },
      { term: 'Facteurs de production', definition: "Ressources utilisees pour produire : le facteur travail (main-d'oeuvre) et le facteur capital (machines, batiments, logiciels).", example: "Une usine automobile utilise des ouvriers (travail) et des robots (capital)" },
      { term: 'Productivite', definition: "Rapport entre la production realisee et les moyens mis en oeuvre. Elle mesure l'efficacite du processus de production.", example: "Productivite du travail = Production / Nombre d'heures travaillees" },
      { term: 'Consommations intermediaires', definition: "Biens et services detruits ou transformes au cours du processus de production.", example: "La farine pour le boulanger, l'electricite pour l'usine" },
      { term: 'Combinaison productive', definition: "Choix de la proportion entre travail et capital pour produire. Elle depend du cout relatif des facteurs et de la technologie disponible." },
    ],
  },
  'le-financement-de-leconomie': {
    cards: [
      { term: 'Autofinancement', definition: "Financement interne d'une entreprise par ses propres ressources (benefices non distribues). Pas de recours a un tiers.", example: "Une entreprise utilise ses profits pour acheter une nouvelle machine" },
      { term: 'Financement externe', definition: "Recours a des ressources exterieures : financement externe direct (marche financier) ou indirect (credit bancaire).", example: "Emprunt bancaire, emission d'actions ou d'obligations" },
      { term: 'Marche financier', definition: "Lieu (souvent dematerialise) ou s'echangent des titres financiers (actions, obligations). Il permet le financement direct des entreprises.", example: "La Bourse de Paris (Euronext)" },
      { term: 'Credit bancaire', definition: "Pret accorde par une banque a un agent economique (menage ou entreprise) moyennant le remboursement avec interets.", example: "Un pret immobilier sur 20 ans pour acheter un logement" },
      { term: 'Taux d\'interet', definition: "Prix de l'argent emprunte, exprime en pourcentage. Il remunere le preteur pour le risque pris et le temps d'immobilisation de son argent.", example: "Un taux de 3 % signifie que l'emprunteur paie 3 euros d'interet pour 100 euros empruntes par an" },
      { term: 'Actions et obligations', definition: "Une action est un titre de propriete d'une partie du capital d'une societe. Une obligation est un titre de creance representant un pret.", example: "Acheter une action Apple rend actionnaire. Acheter une obligation d'Etat rend creancier" },
    ],
  },
  'la-monnaie': {
    cards: [
      { term: 'Fonctions de la monnaie', definition: "La monnaie remplit trois fonctions : unite de compte (mesurer la valeur), intermediaire des echanges (payer), reserve de valeur (epargner)." },
      { term: 'Formes de la monnaie', definition: "La monnaie existe sous trois formes : monnaie fiduciaire (billets et pieces), monnaie scripturale (ecritures en compte bancaire), monnaie electronique.", example: "Les billets en euros, un virement bancaire, une carte de paiement" },
      { term: 'Creation monetaire', definition: "Processus par lequel les banques commerciales creent de la monnaie en accordant des credits. 'Les credits font les depots'.", example: "Quand une banque accorde un pret de 10 000 euros, elle cree 10 000 euros de monnaie scripturale" },
      { term: 'BCE (Banque Centrale Europeenne)', definition: "Institution chargee de la politique monetaire de la zone euro. Son objectif principal est la stabilite des prix (inflation proche de 2 %).", example: "La BCE fixe les taux directeurs qui influencent le cout du credit dans la zone euro" },
      { term: 'Masse monetaire', definition: "Quantite totale de monnaie en circulation dans une economie a un moment donne. Elle est mesuree par des agregats (M1, M2, M3)." },
      { term: 'Taux directeur', definition: "Taux d'interet fixe par la banque centrale auquel les banques commerciales peuvent emprunter. Il influence l'ensemble des taux de l'economie.", example: "Si la BCE baisse son taux directeur, les credits deviennent moins chers" },
    ],
  },
  'la-redistribution': {
    cards: [
      { term: 'Revenus primaires', definition: "Revenus directement issus de la participation a l'activite economique : salaires, profits, loyers, interets, dividendes.", example: "Le salaire d'un employe, le benefice d'un entrepreneur" },
      { term: 'Revenus de transfert', definition: "Prestations sociales versees par les administrations publiques pour corriger les inegalites et proteger contre les risques sociaux.", example: "Allocations familiales, RSA, allocations chomage, retraites" },
      { term: 'Prelevements obligatoires', definition: "Ensemble des impots et cotisations sociales preleves par l'Etat et les organismes de protection sociale.", example: "Impot sur le revenu, TVA, cotisations sociales salariales et patronales" },
      { term: 'Protection sociale', definition: "Systeme couvrant les individus contre les risques sociaux (maladie, vieillesse, chomage, famille) finance par les cotisations et l'impot.", example: "La Securite sociale couvre les frais de sante des assures" },
      { term: 'Revenu disponible', definition: "Revenu dont dispose effectivement un menage apres prelevements obligatoires et ajout des transferts sociaux. Revenu disponible = Revenus primaires - Prelevements + Transferts." },
      { term: 'Redistribution verticale et horizontale', definition: "Verticale : des plus riches vers les plus pauvres (impot progressif). Horizontale : des actifs vers les inactifs, des bien-portants vers les malades.", example: "L'impot sur le revenu progressif redistribue des hauts revenus vers les bas revenus" },
    ],
  },

  // =============================================
  // MANAGEMENT PREMIERE
  // =============================================
  'quest-ce-quune-organisation': {
    cards: [
      { term: 'Organisation', definition: "Regroupement de personnes et de ressources coordonnees pour atteindre un objectif commun selon des regles definies." },
      { term: 'Entreprise', definition: "Organisation a but lucratif qui produit des biens ou services destines a la vente sur un marche." },
      { term: 'Association', definition: "Organisation a but non lucratif visant a satisfaire les interets de ses membres ou d'un groupe social." },
      { term: 'Organisation publique', definition: "Organisation relevant de l'Etat ou des collectivites, assurant des missions de service public." },
      { term: 'Finalite', definition: "Raison d'etre d'une organisation, sa mission principale.", example: "Profit (entreprise), service public (mairie), interet collectif (association)" },
      { term: 'Ressources', definition: "Moyens mobilises par l'organisation : humaines, financieres, materielles et immaterielles." },
    ],
  },
  'les-criteres-de-differenciation': {
    cards: [
      { term: 'Taille de l\'organisation', definition: "Critere de differenciation mesure par le nombre de salaries, le chiffre d'affaires ou le total du bilan. On distingue TPE, PME, ETI et grandes entreprises.", example: "Une TPE a moins de 10 salaries, une PME entre 10 et 249" },
      { term: 'Secteur d\'activite', definition: "Classification selon la nature de l'activite : primaire (agriculture), secondaire (industrie), tertiaire (services).", example: "Un agriculteur (primaire), Renault (secondaire), BNP Paribas (tertiaire)" },
      { term: 'Statut juridique', definition: "Forme legale choisie par l'organisation qui determine ses regles de fonctionnement, de responsabilite et de fiscalite.", example: "SA, SARL, SAS pour les entreprises ; loi 1901 pour les associations" },
      { term: 'Ressources', definition: "Moyens dont dispose l'organisation pour atteindre ses objectifs : humaines, financieres, materielles et immaterielles.", example: "Salaries (humaines), capital (financieres), machines (materielles), brevets (immaterielles)" },
      { term: 'Champ d\'action', definition: "Etendue geographique de l'activite de l'organisation : local, regional, national ou international.", example: "Une boulangerie agit localement, Total agit a l'international" },
      { term: 'Finalite lucrative et non lucrative', definition: "Une entreprise a une finalite lucrative (recherche du profit). Une association ou une administration a une finalite non lucrative (interet general)." },
    ],
  },
  'le-management-strategique-et-operationnel': {
    cards: [
      { term: 'Management strategique', definition: "Ensemble des decisions prises par la direction qui engagent l'organisation sur le long terme et definissent son orientation globale.", example: "Decider de se developper a l'international, lancer un nouveau produit" },
      { term: 'Management operationnel', definition: "Ensemble des decisions quotidiennes prises par l'encadrement intermediaire pour mettre en oeuvre la strategie.", example: "Organiser le planning des equipes, gerer les stocks" },
      { term: 'Parties prenantes', definition: "Ensemble des acteurs internes (salaries, dirigeants, actionnaires) et externes (clients, fournisseurs, Etat) concernes par l'activite de l'organisation.", example: "Les salaries attendent un bon salaire, les actionnaires attendent des dividendes" },
      { term: 'Decision strategique', definition: "Decision prise au sommet, engageant l'organisation sur le long terme, difficilement reversible et comportant un fort degre d'incertitude.", example: "Fusionner avec un concurrent, se diversifier dans un nouveau secteur" },
      { term: 'Decision operationnelle', definition: "Decision courante, prise au niveau intermediaire ou de base, a court terme et facilement reversible.", example: "Commander des fournitures, organiser une reunion" },
      { term: 'Processus de decision', definition: "Enchainement d'etapes menant a un choix : identification du probleme, recherche d'informations, evaluation des options, choix et mise en oeuvre." },
    ],
  },
  'la-performance': {
    cards: [
      { term: 'Efficacite', definition: "Capacite d'une organisation a atteindre les objectifs qu'elle s'est fixes. On compare les resultats obtenus aux objectifs vises.", example: "Objectif : vendre 1 000 unites. Resultat : 1 200 unites vendues = efficace" },
      { term: 'Efficience', definition: "Capacite a atteindre les objectifs en minimisant les ressources utilisees. C'est le rapport entre resultats obtenus et moyens engages.", example: "Produire autant avec moins de matieres premieres = efficience amelioree" },
      { term: 'Performance', definition: "Combinaison de l'efficacite (atteindre ses objectifs) et de l'efficience (optimiser ses ressources). Une organisation performante est a la fois efficace et efficiente." },
      { term: 'Indicateurs de performance', definition: "Outils de mesure quantitatifs ou qualitatifs permettant d'evaluer la performance d'une organisation.", example: "Chiffre d'affaires, taux de satisfaction client, taux d'absenteisme, part de marche" },
      { term: 'Tableau de bord', definition: "Outil de pilotage regroupant un ensemble d'indicateurs permettant au manager de suivre la performance et de prendre des decisions.", example: "Tableau de bord commercial avec CA mensuel, nombre de ventes, panier moyen" },
      { term: 'Performance sociale', definition: "Mesure de la capacite de l'organisation a satisfaire ses parties prenantes internes : conditions de travail, bien-etre, equite.", example: "Faible turnover, bonne ambiance de travail, respect de l'egalite hommes-femmes" },
    ],
  },
  'les-choix-strategiques': {
    cards: [
      { term: 'Diagnostic interne', definition: "Analyse des forces et faiblesses de l'organisation (ressources, competences, savoir-faire) pour identifier ses atouts et ses limites.", example: "Force : marque reconnue. Faiblesse : endettement eleve" },
      { term: 'Diagnostic externe', definition: "Analyse des opportunites et menaces de l'environnement (marche, concurrence, reglementation, technologie).", example: "Opportunite : nouveau marche emergent. Menace : arrivee d'un concurrent low-cost" },
      { term: 'SWOT', definition: "Matrice croisant le diagnostic interne (Strengths/Weaknesses) et externe (Opportunities/Threats) pour orienter la strategie.", example: "Forces + Opportunites = strategie offensive. Faiblesses + Menaces = strategie defensive" },
      { term: 'Avantage concurrentiel', definition: "Element distinctif durable qui permet a une organisation de surpasser ses concurrents : cout, differenciation ou niche.", example: "Apple se differencie par le design et l'innovation. Lidl se differencie par les prix bas" },
      { term: 'Strategie de domination par les couts', definition: "Strategie visant a proposer des prix inferieurs a ceux des concurrents grace a une maitrise des couts de production.", example: "Ryanair propose des vols a bas prix en minimisant ses couts" },
      { term: 'Strategie de differenciation', definition: "Strategie visant a proposer une offre percue comme unique par les clients, justifiant un prix plus eleve.", example: "Nespresso se differencie par l'experience client et le marketing premium" },
    ],
  },
  'les-styles-de-direction': {
    cards: [
      { term: 'Styles de direction (Likert)', definition: "Rensis Likert distingue 4 styles : autoritaire (decisions imposees), paternaliste (bienveillant mais autoritaire), consultatif (consultation avant decision), participatif (decisions collectives)." },
      { term: 'Centralisation', definition: "Mode d'organisation ou le pouvoir de decision est concentre au sommet de la hierarchie. Les decisions sont prises par la direction.", example: "Dans une TPE, le dirigeant prend seul toutes les decisions" },
      { term: 'Decentralisation', definition: "Mode d'organisation ou le pouvoir de decision est delegue aux niveaux intermediaires ou operationnels.", example: "Chaque filiale d'un groupe decide de sa strategie commerciale locale" },
      { term: 'Leadership', definition: "Capacite d'un individu a influencer et motiver les membres d'un groupe pour atteindre un objectif commun. Il ne se confond pas necessairement avec l'autorite hierarchique.", example: "Un chef de projet charismatique qui motive son equipe par sa vision" },
      { term: 'Style autoritaire', definition: "Le dirigeant decide seul, communique peu et controle fortement. La motivation repose sur la crainte des sanctions.", example: "Un directeur qui impose ses decisions sans consulter les salaries" },
      { term: 'Style participatif', definition: "Le dirigeant associe les salaries aux decisions, favorise le travail en equipe et la communication. La motivation repose sur l'implication.", example: "Une start-up ou les decisions sont prises collectivement en reunion" },
    ],
  },

  // =============================================
  // DROIT TERMINALE
  // =============================================
  'la-responsabilite': {
    cards: [
      { term: 'Responsabilite civile', definition: "Obligation de reparer le dommage cause a autrui. Elle vise a indemniser la victime, pas a punir le responsable.", example: "Un conducteur qui cause un accident doit indemniser la victime pour les degats" },
      { term: 'Responsabilite penale', definition: "Obligation de repondre de ses actes devant la societe lorsqu'on commet une infraction (contravention, delit ou crime). Elle vise a sanctionner.", example: "Un voleur est condamne a une peine de prison" },
      { term: 'Dommage', definition: "Prejudice subi par une personne pouvant etre materiel (perte financiere), corporel (blessure) ou moral (souffrance psychologique).", example: "Degats materiels sur un vehicule, fracture d'un bras, prejudice d'anxiete" },
      { term: 'Reparation', definition: "Compensation du dommage subi par la victime, generalement sous forme de dommages et interets (somme d'argent) ou de reparation en nature." },
      { term: 'Responsabilite du fait personnel', definition: "Responsabilite engagee lorsqu'une personne cause un dommage par sa faute (art. 1240 du Code civil). Trois conditions : faute, dommage, lien de causalite." },
      { term: 'Responsabilite du fait d\'autrui', definition: "Responsabilite d'une personne pour les dommages causes par une personne dont elle repond.", example: "Les parents sont responsables des dommages causes par leurs enfants mineurs" },
      { term: 'Responsabilite du fait des choses', definition: "Responsabilite du gardien d'une chose qui cause un dommage a un tiers, sans qu'il soit necessaire de prouver une faute.", example: "Le proprietaire d'un arbre qui tombe sur la voiture du voisin" },
    ],
  },
  'le-droit-du-travail': {
    cards: [
      { term: 'CDI (Contrat a Duree Indeterminee)', definition: "Contrat de travail conclu sans limitation de duree. C'est la forme normale et generale de la relation de travail." },
      { term: 'CDD (Contrat a Duree Determinee)', definition: "Contrat de travail conclu pour une duree limitee et pour un motif precis. Il ne peut pourvoir durablement un emploi permanent.", example: "CDD de remplacement d'un salarie malade, CDD saisonnier" },
      { term: 'Lien de subordination', definition: "Element essentiel du contrat de travail : le salarie travaille sous l'autorite de l'employeur qui peut donner des ordres, controler et sanctionner.", example: "L'employeur fixe les horaires, le lieu et les conditions de travail" },
      { term: 'Droits du salarie', definition: "Ensemble des prerogatives reconnues au salarie : remuneration, conges payes, protection sociale, respect de la vie privee, droit syndical.", example: "5 semaines de conges payes minimum, SMIC, duree legale de 35h" },
      { term: 'Obligations du salarie', definition: "Le salarie doit executer le travail convenu, respecter le reglement interieur, faire preuve de loyaute et respecter les consignes de securite." },
      { term: 'Obligations de l\'employeur', definition: "L'employeur doit fournir le travail convenu, verser le salaire, assurer la securite et la sante, respecter le droit du travail." },
      { term: 'Periode d\'essai', definition: "Debut du contrat pendant laquelle chaque partie peut rompre librement la relation de travail sans procedure ni indemnite.", example: "2 mois pour un employe, 3 mois pour un agent de maitrise, 4 mois pour un cadre" },
    ],
  },
  'la-rupture-du-contrat-de-travail': {
    cards: [
      { term: 'Licenciement', definition: "Rupture du contrat de travail a l'initiative de l'employeur. Il doit etre justifie par un motif reel et serieux (personnel ou economique).", example: "Licenciement pour faute grave, licenciement economique pour difficultes financieres" },
      { term: 'Demission', definition: "Rupture du contrat de travail a l'initiative du salarie. Elle doit resulter d'une volonte claire et non equivoque.", example: "Un salarie remet sa lettre de demission avec respect du preavis" },
      { term: 'Rupture conventionnelle', definition: "Rupture amiable du CDI d'un commun accord entre l'employeur et le salarie. Elle ouvre droit aux allocations chomage.", example: "Employeur et salarie signent une convention de rupture homologuee par la DREETS" },
      { term: 'Procedure de licenciement', definition: "Etapes obligatoires : convocation a un entretien prealable, entretien, notification de la decision par lettre recommandee avec les motifs." },
      { term: 'Indemnite de licenciement', definition: "Somme versee au salarie licencie. Son montant minimum est fixe par la loi (1/4 de mois de salaire par annee d'anciennete)." },
      { term: 'Licenciement abusif', definition: "Licenciement sans cause reelle et serieuse. Le salarie peut saisir le conseil de prud'hommes et obtenir des dommages et interets.", example: "Licenciement motive par l'orientation politique du salarie" },
      { term: 'Preavis', definition: "Delai entre la notification de la rupture et la fin effective du contrat. Sa duree depend de l'anciennete et de la convention collective." },
    ],
  },
  'les-libertes-individuelles-et-collectives': {
    cards: [
      { term: 'Droit de greve', definition: "Droit constitutionnel permettant aux salaries de cesser collectivement le travail pour defendre des revendications professionnelles.", example: "Une greve pour obtenir une augmentation de salaire" },
      { term: 'Syndicats', definition: "Organisations de salaries ou d'employeurs ayant pour objet la defense des interets professionnels de leurs adherents.", example: "CGT, CFDT, FO, MEDEF" },
      { term: 'Negociation collective', definition: "Discussion entre partenaires sociaux (syndicats et employeurs) visant a conclure des accords collectifs sur les conditions de travail.", example: "Negociation annuelle obligatoire (NAO) sur les salaires" },
      { term: 'CSE (Comite Social et Economique)', definition: "Instance unique de representation du personnel obligatoire dans les entreprises d'au moins 11 salaries. Il remplace les anciens DP, CE et CHSCT." },
      { term: 'Liberte syndicale', definition: "Droit pour tout salarie d'adherer ou non au syndicat de son choix. L'employeur ne peut pas discriminer un salarie en raison de son activite syndicale." },
      { term: 'Convention collective', definition: "Accord ecrit entre syndicats de salaries et organisations patronales fixant les conditions d'emploi et de travail pour un secteur ou une entreprise.", example: "La convention collective de la metallurgie fixe les grilles de salaires du secteur" },
    ],
  },
  'le-numerique-et-le-droit': {
    cards: [
      { term: 'Donnees personnelles', definition: "Toute information permettant d'identifier directement ou indirectement une personne physique.", example: "Nom, adresse email, adresse IP, numero de telephone, photo" },
      { term: 'RGPD', definition: "Reglement General sur la Protection des Donnees (2018). Il impose aux organisations de proteger les donnees personnelles et donne des droits aux citoyens de l'UE.", example: "Droit d'acces, droit de rectification, droit a l'effacement, droit a la portabilite" },
      { term: 'Propriete intellectuelle', definition: "Ensemble des droits portant sur les creations de l'esprit : droit d'auteur (oeuvres), propriete industrielle (brevets, marques).", example: "Un logiciel est protege par le droit d'auteur, une invention par un brevet" },
      { term: 'E-commerce', definition: "Vente de biens et services par voie electronique. Le consommateur beneficie de protections specifiques (droit de retractation de 14 jours).", example: "Achat sur Amazon avec possibilite de retourner le produit sous 14 jours" },
      { term: 'CNIL', definition: "Commission Nationale de l'Informatique et des Libertes. Autorite independante chargee de veiller au respect du RGPD en France. Elle peut sanctionner les contrevenants.", example: "La CNIL a inflige une amende de 150 millions d'euros a Google en 2022" },
      { term: 'Droit a la deconnexion', definition: "Droit du salarie de ne pas etre joignable par son employeur en dehors de son temps de travail, rendu necessaire par les outils numeriques." },
      { term: 'Cybercriminalite', definition: "Ensemble des infractions commises via internet ou les systemes informatiques : piratage, phishing, usurpation d'identite numerique.", example: "Piratage d'un compte bancaire en ligne, ranconlogiciel" },
    ],
  },

  // =============================================
  // ECONOMIE TERMINALE
  // =============================================
  'la-croissance-economique': {
    cards: [
      { term: 'PIB (Produit Interieur Brut)', definition: "Indicateur mesurant la valeur de l'ensemble des biens et services produits sur un territoire pendant un an. C'est la reference pour mesurer la croissance." },
      { term: 'Croissance economique', definition: "Augmentation soutenue et durable de la production de biens et services d'un pays, mesuree par l'evolution du PIB reel.", example: "La France a connu une croissance de 2,5 % en 2022" },
      { term: 'Developpement durable', definition: "Developpement qui repond aux besoins du present sans compromettre la capacite des generations futures a repondre aux leurs. Il integre trois piliers : economique, social, environnemental." },
      { term: 'Limites du PIB', definition: "Le PIB ne mesure pas le bien-etre, ignore les inegalites, ne comptabilise pas le travail domestique ni le benevolat et ne tient pas compte des degats environnementaux.", example: "Un accident de voiture augmente le PIB (reparations, soins) alors qu'il reduit le bien-etre" },
      { term: 'IDH', definition: "Indice de Developpement Humain : indicateur combine mesurant la sante (esperance de vie), l'education (scolarisation) et le niveau de vie (revenu par habitant)." },
      { term: 'Facteurs de croissance', definition: "Elements qui favorisent la croissance : accumulation du capital, progres technique, amelioration de la qualification de la main-d'oeuvre, innovation.", example: "L'investissement en R&D favorise l'innovation et donc la croissance" },
    ],
  },
  'le-commerce-international': {
    cards: [
      { term: 'Libre-echange', definition: "Doctrine economique preconisant la suppression des barrieres aux echanges internationaux (droits de douane, quotas) pour favoriser le commerce.", example: "L'Union europeenne est une zone de libre-echange entre ses 27 membres" },
      { term: 'Protectionnisme', definition: "Politique visant a proteger l'economie nationale de la concurrence etrangere par des droits de douane, des quotas ou des normes.", example: "Les Etats-Unis imposent des droits de douane sur l'acier chinois" },
      { term: 'Avantage comparatif', definition: "Theorie de Ricardo : chaque pays a interet a se specialiser dans la production pour laquelle il est relativement le plus efficace, puis a echanger.", example: "Le Portugal se specialise dans le vin, l'Angleterre dans le drap" },
      { term: 'OMC (Organisation Mondiale du Commerce)', definition: "Organisation internationale regissant les regles du commerce entre les pays. Elle favorise le libre-echange et regle les differends commerciaux.", example: "L'OMC compte 164 membres et siege a Geneve" },
      { term: 'Balance commerciale', definition: "Difference entre la valeur des exportations et la valeur des importations d'un pays. Excedentaire si exports > imports, deficitaire sinon.", example: "L'Allemagne a une balance commerciale excedentaire, la France est souvent deficitaire" },
      { term: 'Mondialisation', definition: "Processus d'intensification des echanges de biens, services, capitaux et informations a l'echelle mondiale, favorise par la baisse des couts de transport et les NTIC." },
    ],
  },
  'le-chomage': {
    cards: [
      { term: 'Chomage structurel', definition: "Chomage durable lie aux structures de l'economie : inadequation entre l'offre et la demande de travail (qualifications, localisation).", example: "Des ouvriers non qualifies au chomage alors que les entreprises cherchent des informaticiens" },
      { term: 'Chomage conjoncturel', definition: "Chomage temporaire lie au ralentissement de l'activite economique. Il diminue quand la croissance reprend.", example: "Hausse du chomage lors de la crise de 2008-2009" },
      { term: 'Politiques de l\'emploi', definition: "Actions menees par l'Etat pour reduire le chomage. Elles peuvent etre actives (formation, aides a l'embauche) ou passives (indemnisation).", example: "Pole emploi, contrats aides, formation professionnelle, allocations chomage" },
      { term: 'Taux de chomage', definition: "Pourcentage de la population active qui est au chomage. Taux de chomage = (Nombre de chomeurs / Population active) x 100.", example: "Un taux de chomage de 7,4 % signifie que 7,4 actifs sur 100 sont au chomage" },
      { term: 'Population active', definition: "Ensemble des personnes en age de travailler qui exercent un emploi (actifs occupes) ou en recherchent un (chomeurs)." },
      { term: 'Chomeur (au sens du BIT)', definition: "Personne en age de travailler, sans emploi, disponible pour travailler et recherchant activement un emploi." },
    ],
  },
  'linflation': {
    cards: [
      { term: 'Inflation', definition: "Hausse generalisee et durable du niveau general des prix dans une economie. Elle erode le pouvoir d'achat de la monnaie.", example: "Une inflation de 5 % signifie que les prix ont augmente en moyenne de 5 % sur un an" },
      { term: 'Deflation', definition: "Baisse generalisee et durable du niveau general des prix. Elle peut entrainer une spirale recessionniste (baisse de la consommation et de l'investissement).", example: "Le Japon a connu une longue periode de deflation dans les annees 1990-2000" },
      { term: 'Pouvoir d\'achat', definition: "Quantite de biens et services qu'un revenu permet d'acheter. Il augmente quand les revenus progressent plus vite que les prix.", example: "Si les salaires augmentent de 2 % et les prix de 5 %, le pouvoir d'achat baisse" },
      { term: 'Politique monetaire', definition: "Ensemble des actions de la banque centrale pour controler la quantite de monnaie en circulation et le niveau des taux d'interet.", example: "La BCE augmente ses taux directeurs pour lutter contre l'inflation" },
      { term: 'BCE (Banque Centrale Europeenne)', definition: "Institution responsable de la politique monetaire de la zone euro. Son objectif principal est de maintenir la stabilite des prix (inflation proche de 2 %)." },
      { term: 'Indice des prix a la consommation (IPC)', definition: "Indicateur mesure par l'INSEE qui suit l'evolution des prix d'un panier de biens et services representatif de la consommation des menages.", example: "L'IPC est utilise pour calculer le taux d'inflation officiel" },
      { term: 'Inflation par la demande', definition: "Hausse des prix causee par une demande superieure a l'offre. Trop de monnaie en circulation face a une production insuffisante.", example: "Apres le Covid, la reprise de la demande a provoque des tensions inflationnistes" },
    ],
  },

  // =============================================
  // MERCATIQUE TERMINALE
  // =============================================
  'la-demarche-mercatique': {
    cards: [
      { term: 'Mercatique', definition: "Demarche qui consiste a detecter et analyser les besoins des consommateurs pour proposer une offre adaptee." },
      { term: 'SIM', definition: "Systeme d'Information Mercatique : ensemble de moyens pour collecter, stocker, traiter et diffuser les informations utiles aux decisions marketing." },
      { term: 'Veille mercatique', definition: "Surveillance continue de l'environnement concurrentiel et commercial pour anticiper les evolutions du marche." },
      { term: 'Marche', definition: "Lieu de rencontre (reel ou virtuel) entre l'offre et la demande d'un bien ou service." },
      { term: 'Offre', definition: "Ensemble des biens et services proposes par les entreprises pour satisfaire un meme type de besoin." },
      { term: 'Demande', definition: "Ensemble des acheteurs actuels (clients) et potentiels (prospects) d'un produit ou service." },
      { term: 'Etude de marche', definition: "Collecte et analyse d'informations sur un marche pour aider a la prise de decision mercatique.", example: "Enquete, sondage, panel" },
    ],
  },
  'le-comportement-du-consommateur': {
    cards: [
      { term: 'Besoins du consommateur', definition: "Sentiment de manque ressenti par un individu, qui le pousse a agir pour le satisfaire. Maslow les classe en 5 niveaux (pyramide).", example: "Besoin physiologique (manger), besoin de securite, besoin d'appartenance" },
      { term: 'Motivations', definition: "Forces positives qui poussent un individu a acheter : hedonistes (se faire plaisir), oblatives (faire plaisir), d'auto-expression (s'affirmer).", example: "Acheter un parfum de luxe par motivation hedoniste" },
      { term: 'Freins', definition: "Forces negatives qui empechent ou retardent l'acte d'achat : peurs, inhibitions, risques percus.", example: "Peur de l'endettement pour acheter une voiture, inhibition face a un produit de luxe" },
      { term: 'Facteurs d\'influence', definition: "Elements qui influencent le comportement d'achat : facteurs personnels (age, revenu), socioculturels (famille, groupe), psychologiques (perception, attitude).", example: "Les adolescents sont tres influences par leurs pairs et les reseaux sociaux" },
      { term: 'Processus d\'achat', definition: "Etapes suivies par le consommateur : reconnaissance du besoin, recherche d'information, evaluation des alternatives, decision d'achat, evaluation post-achat." },
      { term: 'Experience client', definition: "Ensemble des emotions et perceptions ressenties par le consommateur avant, pendant et apres l'achat d'un produit ou service." },
    ],
  },
  'la-politique-de-produit': {
    cards: [
      { term: 'Gamme', definition: "Ensemble des produits proposes par une entreprise, organises en lignes. Elle se caracterise par sa largeur (nombre de lignes), sa profondeur (nombre de produits par ligne) et son etendue.", example: "La gamme automobile Peugeot : 208, 308, 3008, 5008..." },
      { term: 'Cycle de vie du produit', definition: "Phases successives de la vie d'un produit sur le marche : lancement, croissance, maturite, declin. Chaque phase necessite une strategie adaptee.", example: "Un smartphone en phase de lancement necessite beaucoup de communication" },
      { term: 'Innovation', definition: "Introduction d'un produit nouveau ou significativement ameliore sur le marche. Elle peut etre de rupture (revolutionnaire) ou incrementale (amelioration progressive).", example: "L'iPhone en 2007 = innovation de rupture. Un nouvel iPhone chaque annee = innovation incrementale" },
      { term: 'Packaging', definition: "Ensemble des elements materiels de l'emballage d'un produit. Il remplit des fonctions techniques (protection, transport) et commerciales (attirer, informer, seduire).", example: "La bouteille de Coca-Cola reconnaissable est un element cle de son packaging" },
      { term: 'Marque', definition: "Signe distinctif (nom, logo, slogan) permettant d'identifier un produit et de le differencier de la concurrence. Elle cree de la valeur.", example: "Nike avec son swoosh et son slogan 'Just Do It'" },
      { term: 'Positionnement', definition: "Place qu'un produit occupe dans l'esprit des consommateurs par rapport aux concurrents. Il definit l'image voulue par l'entreprise.", example: "Apple se positionne sur le haut de gamme et l'innovation" },
    ],
  },
  'la-politique-de-prix': {
    cards: [
      { term: 'Cout de revient', definition: "Ensemble des couts supportes pour produire et vendre un produit : couts d'achat, de production, de distribution.", example: "Matieres premieres + main-d'oeuvre + frais generaux = cout de revient" },
      { term: 'Marge', definition: "Difference entre le prix de vente et le cout de revient. Elle exprime le benefice realise sur chaque produit vendu.", example: "Prix de vente 50 euros - cout de revient 30 euros = marge de 20 euros" },
      { term: 'Prix psychologique', definition: "Prix qu'un maximum de consommateurs est pret a payer. En dessous, le produit parait de mauvaise qualite ; au-dessus, il parait trop cher.", example: "Enquete aupres des consommateurs pour determiner la fourchette de prix acceptable" },
      { term: 'Elasticite-prix de la demande', definition: "Mesure de la sensibilite de la demande face a une variation du prix. Si |e| > 1, la demande est elastique (sensible au prix).", example: "Pour les produits de luxe, l'elasticite est souvent faible (demande peu sensible au prix)" },
      { term: 'Strategie d\'ecremage', definition: "Fixer un prix eleve au lancement pour toucher une clientele prete a payer plus, puis baisser progressivement.", example: "Les consoles de jeu sont cheres au lancement, puis leur prix baisse" },
      { term: 'Strategie de penetration', definition: "Fixer un prix bas au lancement pour conquerer rapidement des parts de marche, puis augmenter progressivement.", example: "Free a lance son forfait a 2 euros pour penetrer le marche de la telephonie mobile" },
    ],
  },
  'la-politique-de-distribution': {
    cards: [
      { term: 'Canal de distribution', definition: "Chemin emprunte par un produit pour aller du producteur au consommateur final. Il peut etre direct, court ou long.", example: "Vente directe (producteur > consommateur), vente courte (un intermediaire), vente longue (grossiste + detaillant)" },
      { term: 'Circuit de distribution', definition: "Ensemble des canaux utilises par une entreprise pour distribuer ses produits. Le choix depend du produit, de la cible et de la strategie." },
      { term: 'Reseau de distribution', definition: "Ensemble des points de vente (magasins physiques, sites e-commerce) a travers lesquels un produit est vendu au consommateur final.", example: "Le reseau de boutiques Zara, le site amazon.fr" },
      { term: 'Strategie de distribution intensive', definition: "Distribuer le produit dans le maximum de points de vente pour etre present partout.", example: "Coca-Cola est vendu en supermarche, au distributeur, au restaurant, en ligne..." },
      { term: 'Strategie de distribution selective', definition: "Selectionner un nombre limite de points de vente en fonction de criteres precis (image, competence).", example: "Les produits Chanel ne sont vendus que dans les parfumeries selectionnees" },
      { term: 'E-commerce', definition: "Vente de biens et services par internet. Il transforme la distribution en supprimant les intermediaires et en elargissant la zone de chalandise.", example: "Le site vente-privee.com propose des ventes flash en ligne" },
    ],
  },
  'la-politique-de-communication': {
    cards: [
      { term: 'Communication media', definition: "Communication utilisant les grands medias de masse pour toucher un large public : television, radio, presse, affichage, cinema, internet.", example: "Une publicite televisee pour un nouveau parfum" },
      { term: 'Communication hors media', definition: "Communication utilisant d'autres moyens que les grands medias : promotion des ventes, marketing direct, relations publiques, evenementiel, parrainage.", example: "Un jeu-concours, un mailing, un salon professionnel" },
      { term: 'Publicite', definition: "Forme de communication commerciale utilisant les medias pour informer, persuader ou rappeler l'existence d'un produit ou d'une marque au public cible." },
      { term: 'Marketing digital', definition: "Ensemble des techniques marketing utilisant les supports numeriques : reseaux sociaux, SEO, emailing, publicite en ligne, marketing d'influence.", example: "Une campagne Instagram avec un influenceur pour promouvoir un produit" },
      { term: 'Cible de communication', definition: "Ensemble des personnes que l'entreprise souhaite toucher par sa communication. Elle peut etre plus large que la cible marketing.", example: "Cible marketing : les 18-25 ans. Cible communication : aussi les parents qui financent" },
      { term: 'Plan de communication', definition: "Document strategique qui definit les objectifs, les cibles, le message, les moyens et le budget d'une campagne de communication." },
    ],
  },
  'la-fidelisation': {
    cards: [
      { term: 'CRM (Customer Relationship Management)', definition: "Gestion de la relation client : strategie et outils permettant de connaitre, suivre et fideliser les clients grace a la collecte et l'analyse de donnees.", example: "Un logiciel CRM comme Salesforce enregistre l'historique des achats de chaque client" },
      { term: 'Programme de fidelite', definition: "Dispositif mis en place par une entreprise pour recompenser les achats repetes de ses clients et les inciter a revenir.", example: "Carte de fidelite Carrefour avec cumul de points, programme Miles Air France" },
      { term: 'Satisfaction client', definition: "Etat ressenti par le client apres l'achat lorsqu'il compare ses attentes initiales a la performance percue du produit ou service.", example: "Un client satisfait quand la livraison est plus rapide que prevu" },
      { term: 'NPS (Net Promoter Score)', definition: "Indicateur mesurant la propension des clients a recommander une marque. Question : 'Recommanderiez-vous notre marque ?' Note de 0 a 10.", example: "Promoteurs (9-10) - Detracteurs (0-6) = NPS. Un NPS > 50 est excellent" },
      { term: 'Fidelisation', definition: "Ensemble des actions menees par une entreprise pour maintenir et developper une relation durable avec ses clients existants. Fideliser coute moins cher que conquerir." },
      { term: 'Attrition (churn)', definition: "Taux de perte de clients sur une periode donnee. Un taux d'attrition eleve signale un probleme de satisfaction ou de competitivite.", example: "Un operateur telecom qui perd 10 % de ses abonnes par an a un taux d'attrition de 10 %" },
    ],
  },

  // =============================================
  // MSDGN TERMINALE
  // =============================================
  'comment-lentreprise-integre-les-attentes-des-acteurs': {
    cards: [
      { term: 'Parties prenantes', definition: "Ensemble des acteurs internes (salaries, dirigeants, actionnaires) et externes (clients, fournisseurs, Etat, ONG) qui influencent ou sont influences par l'activite de l'entreprise." },
      { term: 'RSE (Responsabilite Societale des Entreprises)', definition: "Demarche volontaire par laquelle une entreprise integre des preoccupations sociales, environnementales et ethiques dans ses activites et ses relations avec ses parties prenantes.", example: "Danone s'engage pour la reduction de son empreinte carbone" },
      { term: 'Finalites de l\'entreprise', definition: "Raisons d'etre de l'entreprise : finalite economique (profit), finalite sociale (emploi, conditions de travail), finalite societale (impact sur la societe et l'environnement)." },
      { term: 'Gouvernance', definition: "Ensemble des mecanismes et regles qui organisent la prise de decision, le controle et le partage du pouvoir au sein d'une organisation.", example: "Conseil d'administration, assemblee generale des actionnaires" },
      { term: 'Conflit d\'interets', definition: "Situation ou les attentes des differentes parties prenantes sont contradictoires, obligeant l'entreprise a arbitrer.", example: "Les actionnaires veulent des dividendes, les salaries veulent des augmentations" },
      { term: 'Performance globale', definition: "Vision elargie de la performance integrant les dimensions economique, sociale et environnementale (triple bottom line : profit, people, planet)." },
      { term: 'Les trois piliers de la RSE', definition: "La RSE repose sur trois piliers : economique (rentabilite et perennite), social (conditions de travail, diversite, egalite) et environnemental (reduction des emissions, gestion des dechets, economies d'energie).", example: "Une entreprise qui reduit ses emballages plastiques agit sur le pilier environnemental" },
      { term: 'Reporting extra-financier', definition: "Publication obligatoire pour certaines grandes entreprises de leurs performances sociales, environnementales et de gouvernance, au-dela des seuls resultats financiers.", example: "La Declaration de Performance Extra-Financiere (DPEF) est obligatoire pour les societes cotees de plus de 500 salaries" },
      { term: 'Label RSE', definition: "Certification externe attestant de l'engagement d'une entreprise dans une demarche de responsabilite societale, selon des criteres definis par un referentiel.", example: "Le label Lucie 26000, le label B Corp, le label Engagé RSE de l'AFNOR" },
      { term: 'Parties prenantes internes vs externes', definition: "Les parties prenantes internes (salaries, dirigeants, actionnaires) participent directement au fonctionnement de l'entreprise. Les parties prenantes externes (clients, fournisseurs, Etat, ONG, collectivites) interagissent avec elle depuis l'exterieur.", example: "Les syndicats sont des parties prenantes internes, les riverains sont des parties prenantes externes" },
    ],
  },
  'les-choix-strategiques-de-lorganisation': {
    cards: [
      { term: 'Strategie globale (corporate)', definition: "Choix strategiques qui concernent l'ensemble de l'organisation et definissent son perimetre d'activite.", example: "Decider de se diversifier dans un nouveau secteur" },
      { term: 'Specialisation', definition: "Strategie consistant a concentrer les ressources sur un seul domaine d'activite pour y developper un avantage concurrentiel fort.", example: "Michelin se specialise dans les pneumatiques" },
      { term: 'Diversification', definition: "Strategie consistant a developper de nouvelles activites, differentes du metier de base, pour repartir les risques et trouver de nouveaux relais de croissance.", example: "Virgin est passe de la musique a l'aerien, au mobile, aux trains" },
      { term: 'Integration verticale', definition: "Strategie consistant a prendre en charge des activites en amont (fournisseurs) ou en aval (distribution) de sa chaine de valeur.", example: "Zara integre la conception, la fabrication et la distribution de ses vetements" },
      { term: 'Externalisation', definition: "Strategie consistant a confier a un prestataire exterieur une activite auparavant realisee en interne, pour se recentrer sur son coeur de metier.", example: "Une entreprise externalise sa comptabilite a un cabinet d'experts-comptables" },
      { term: 'Croissance externe', definition: "Developpement de l'entreprise par le rachat ou la fusion avec d'autres entreprises.", example: "Le rachat d'Instagram par Facebook (Meta) en 2012" },
      { term: 'Croissance interne (organique)', definition: "Developpement de l'entreprise par ses propres moyens : investissement, innovation, embauche, sans rachat d'autres entreprises." },
      { term: 'Chaine de valeur (Porter)', definition: "Outil d'analyse qui decompose l'entreprise en activites principales (logistique, production, commercialisation, services) et activites de soutien (infrastructure, RH, R&D, achats) pour identifier les sources de creation de valeur.", example: "Analyser la chaine de valeur de Decathlon revele que sa force reside dans la conception interne de ses produits (activite de soutien R&D)" },
      { term: 'Matrice d\'Ansoff', definition: "Outil strategique proposant quatre voies de croissance : penetration de marche, developpement de marche, developpement de produit et diversification, en croisant produits (existants/nouveaux) et marches (existants/nouveaux).", example: "McDonald's qui lance un burger vegetal sur son marche actuel realise un developpement de produit" },
      { term: 'Alliance strategique', definition: "Accord de cooperation entre deux ou plusieurs entreprises qui restent juridiquement independantes, afin de partager des ressources ou des competences sur un projet commun.", example: "L'alliance Renault-Nissan-Mitsubishi : partenariat industriel sans fusion juridique" },
      { term: 'Avantage concurrentiel (Porter)', definition: "Element distinctif durable permettant a une entreprise de surpasser ses concurrents. Porter distingue trois strategies generiques : domination par les couts, differenciation et focalisation (niche).", example: "IKEA se differencie par sa domination par les couts (meubles en kit, logistique optimisee)" },
    ],
  },
  'les-ressources-humaines': {
    cards: [
      { term: 'GPEC', definition: "Gestion Previsionnelle des Emplois et des Competences : demarche anticipative pour adapter les ressources humaines aux besoins futurs de l'entreprise.", example: "Anticiper les departs en retraite et former les remplacants" },
      { term: 'Recrutement', definition: "Processus par lequel une organisation identifie, attire et selectionne un candidat pour pourvoir un poste vacant. Il peut etre interne ou externe.", example: "Publication d'une offre d'emploi, tri des CV, entretiens, embauche" },
      { term: 'Formation', definition: "Ensemble des actions visant a developper les competences des salaries pour ameliorer leur performance et leur employabilite.", example: "Formation au numerique, formation management, VAE" },
      { term: 'Motivation', definition: "Ensemble des forces internes et externes qui poussent un salarie a s'investir dans son travail. Herzberg distingue facteurs d'hygiene et facteurs de motivation.", example: "Reconnaissance, responsabilites, perspectives d'evolution (facteurs de motivation)" },
      { term: 'Remuneration', definition: "Ensemble des contreparties financieres et non financieres percues par un salarie en echange de son travail.", example: "Salaire fixe + primes + avantages en nature + interessement + mutuelle" },
      { term: 'Competence', definition: "Combinaison de savoirs (connaissances), savoir-faire (aptitudes techniques) et savoir-etre (qualites comportementales) mobilises en situation professionnelle." },
      { term: 'Pyramide de Maslow', definition: "Hierarchie des besoins humains en cinq niveaux : physiologiques (survie), securite (stabilite), appartenance (relations sociales), estime (reconnaissance) et accomplissement (realisation de soi). Un besoin superieur emerge lorsque les besoins inferieurs sont satisfaits.", example: "Un salarie dont le besoin de securite (CDI) est satisfait cherchera a repondre a son besoin d'appartenance (equipe, lien social)" },
      { term: 'Theorie bi-factorielle de Herzberg', definition: "Frederick Herzberg distingue les facteurs d'hygiene (salaire, conditions de travail, securite) qui evitent l'insatisfaction, et les facteurs de motivation (reconnaissance, autonomie, responsabilites) qui generent l'engagement et la satisfaction.", example: "Un bon salaire (hygiene) ne suffit pas a motiver : il faut aussi de la reconnaissance et des responsabilites (motivation)" },
      { term: 'CPF (Compte Personnel de Formation)', definition: "Compte individuel alimente en euros (500 euros/an, plafond 5 000 euros) permettant a tout actif de financer des formations certifiantes tout au long de sa vie professionnelle. Il est attache a la personne, pas a l'employeur.", example: "Un salarie utilise son CPF pour financer une formation en anglais professionnel" },
      { term: 'Entretien professionnel', definition: "Entretien obligatoire tous les deux ans entre l'employeur et le salarie, portant sur les perspectives d'evolution professionnelle (qualification, emploi, formation). Il ne porte pas sur l'evaluation des performances.", example: "Lors de l'entretien professionnel, le manager et le salarie identifient ensemble les formations utiles pour une evolution de poste" },
    ],
  },
  'le-numerique-transforme-le-management': {
    cards: [
      { term: 'Transformation digitale', definition: "Processus d'integration des technologies numeriques dans l'ensemble des activites d'une organisation, modifiant son fonctionnement et sa creation de valeur.", example: "Un commerce de proximite qui developpe la vente en ligne et la livraison" },
      { term: 'Intelligence artificielle', definition: "Ensemble de techniques permettant a des machines de simuler des capacites cognitives humaines : apprentissage, raisonnement, decision.", example: "Chatbots de service client, recommandations Netflix, assistants vocaux" },
      { term: 'Big data', definition: "Ensemble massif de donnees numeriques dont le volume, la variete et la vitesse de production necessitent des outils specifiques de traitement et d'analyse.", example: "Analyse des donnees de navigation des internautes pour personnaliser les publicites" },
      { term: 'Automatisation', definition: "Remplacement de taches humaines par des processus automatiques (robots, logiciels, algorithmes) pour gagner en productivite et en fiabilite.", example: "Robots dans les entrepots Amazon, logiciels de comptabilite automatisee" },
      { term: 'Teletravail', definition: "Organisation du travail permettant au salarie d'exercer son activite hors des locaux de l'employeur grace aux outils numeriques.", example: "Travail a domicile avec visioconference, partage de documents en ligne" },
      { term: 'Plateforme numerique', definition: "Modele d'organisation qui met en relation directe offreurs et demandeurs via un espace numerique, en captant une partie de la valeur des echanges.", example: "Uber (transport), Airbnb (hebergement), Leboncoin (petites annonces)" },
      { term: 'Les 3V du Big Data', definition: "Le Big Data se definit par trois caracteristiques : Volume (quantites massives de donnees), Variete (donnees structurees, textes, images, videos, capteurs) et Velocite (vitesse de production et de traitement en temps reel).", example: "Les donnees generees par les reseaux sociaux, les objets connectes et les transactions en ligne illustrent les 3V" },
      { term: 'Cloud computing', definition: "Modele informatique permettant d'acceder a distance, via Internet, a des ressources partagees (serveurs, stockage, logiciels, puissance de calcul) sans avoir a les posseder physiquement.", example: "Google Drive, Microsoft 365, Amazon Web Services (AWS) sont des services de cloud computing" },
      { term: 'ERP / PGI', definition: "Logiciel integre (Enterprise Resource Planning / Progiciel de Gestion Integre) qui centralise toutes les fonctions de l'entreprise (comptabilite, RH, production, ventes, stocks) dans une base de donnees unique pour ameliorer la coordination.", example: "SAP, Oracle, Sage sont des editeurs d'ERP utilises par les entreprises" },
      { term: 'RGPD en entreprise', definition: "Le Reglement General sur la Protection des Donnees (2018) impose aux entreprises de proteger les donnees personnelles : consentement explicite, minimisation de la collecte, droit d'acces et d'effacement, notification des violations.", example: "Un site e-commerce doit obtenir le consentement avant de deposer des cookies de suivi publicitaire" },
      { term: 'Cybersecurite', definition: "Ensemble des mesures techniques (pare-feu, chiffrement, antivirus) et organisationnelles (formation des salaries, politique de mots de passe, plan de continuite) visant a proteger les systemes d'information contre les cybermenaces.", example: "Une attaque par ransomware chiffre les donnees de l'entreprise et exige une rancon pour les debloquer" },
    ],
  },
  'linnovation-et-la-creation-de-valeur': {
    cards: [
      { term: 'Innovation', definition: "Introduction reussie sur le marche d'un produit, d'un procede, d'une methode de commercialisation ou d'organisation nouveau ou significativement ameliore.", example: "Le paiement sans contact est une innovation de procede" },
      { term: 'Veille strategique', definition: "Processus continu de collecte, analyse et diffusion d'informations sur l'environnement (concurrentiel, technologique, juridique) pour eclairer les decisions strategiques.", example: "Surveiller les brevets deposes par les concurrents, suivre les nouvelles reglementations" },
      { term: 'Creation de valeur', definition: "Capacite d'une organisation a generer de la richesse pour ses parties prenantes : valeur financiere (profit), valeur client (satisfaction), valeur sociale (emplois)." },
      { term: 'Business model (modele economique)', definition: "Description de la maniere dont une organisation cree, delivre et capture de la valeur. Il repond aux questions : pour qui ? quoi ? comment ? combien ?", example: "Le business model de Spotify : abonnement freemium/premium pour ecouter de la musique en streaming" },
      { term: 'Innovation de rupture', definition: "Innovation qui cree un nouveau marche ou bouleverse un marche existant en proposant une offre radicalement differente.", example: "Netflix a detruit le marche de la location de DVD en imposant le streaming" },
      { term: 'R&D (Recherche et Developpement)', definition: "Ensemble des activites de recherche fondamentale, appliquee et de developpement experimental visant a creer de nouveaux produits ou procedes.", example: "Les laboratoires pharmaceutiques investissent massivement en R&D pour developper de nouveaux medicaments" },
      { term: 'Avantage concurrentiel par l\'innovation', definition: "Superiority obtenue par une entreprise qui innove : elle se differencie de ses concurrents, repond mieux aux besoins et peut pratiquer des prix plus eleves.", example: "Dyson se differencie par ses innovations technologiques (aspirateurs sans sac, ventilateurs sans pale)" },
      { term: 'Business Model Canvas (Osterwalder)', definition: "Outil visuel en 9 blocs pour decrire un modele economique : segments de clients, proposition de valeur, canaux de distribution, relations clients, flux de revenus, ressources cles, activites cles, partenaires cles et structure de couts.", example: "Le Canvas de BlaBlaCar : proposition de valeur = covoiturage abordable, revenus = commission sur chaque trajet" },
      { term: 'Destruction creatrice (Schumpeter)', definition: "Processus theorise par Joseph Schumpeter selon lequel l'innovation detruit les activites obsoletes tout en creant de nouvelles industries et de nouveaux emplois, assurant le renouvellement du systeme economique.", example: "Le streaming musical (Spotify) a detruit le marche du CD physique mais a cree un nouveau marche numerique" },
      { term: 'Innovation incrementale vs de rupture', definition: "L'innovation incrementale ameliore progressivement un produit ou un procede existant. L'innovation de rupture bouleverse radicalement un marche en proposant une offre fondamentalement nouvelle qui rend l'ancienne obsolete.", example: "Incrementale : nouveau modele d'iPhone avec meilleur ecran. Rupture : l'iPhone original en 2007 qui a revolutionne le marche du telephone" },
      { term: 'Veille concurrentielle', definition: "Surveillance organisee et legale des actions, strategies, produits et performances des concurrents pour anticiper leurs mouvements et ajuster sa propre strategie.", example: "Surveiller les lancements de produits, les brevets deposes, les recrutements et les campagnes publicitaires des concurrents" },
    ],
  },
};
