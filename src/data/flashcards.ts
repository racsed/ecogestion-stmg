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
      { term: 'Qualification juridique', definition: "Operation intellectuelle consistant a rattacher une situation de fait a une categorie juridique pour determiner la regle de droit applicable.", example: "Un pieton renverse par une voiture : on qualifie la situation en 'fait juridique' (accident) engageant la responsabilite civile du conducteur." },
      { term: 'Fonctions du droit', definition: "Le droit remplit deux fonctions principales : organiser la vie en societe (fixer un cadre de regles) et pacifier les relations sociales (resoudre les conflits sans violence)." },
      { term: 'Valeurs de la Republique', definition: "Le droit francais est fonde sur les valeurs de liberte, egalite, solidarite (fraternite) et laicite, inscrites dans la Constitution et la devise republicaine." },
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
      { term: 'Question Prioritaire de Constitutionnalite (QPC)', definition: "Mecanisme permettant a tout justiciable de contester, au cours d'un proces, la conformite d'une loi aux droits et libertes garantis par la Constitution. Introduite par la reforme de 2008.", example: "Un prevenu conteste la constitutionnalite d'une loi penale qui restreint sa liberte d'expression." },
      { term: 'Reglement europeen vs Directive', definition: "Le reglement europeen est directement applicable dans tous les Etats membres sans transposition. La directive fixe des objectifs a atteindre que chaque Etat doit transposer dans son droit national.", example: "Le RGPD est un reglement europeen, applique uniformement dans toute l'UE." },
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
      { term: 'Commissaire de justice (ex-huissier)', definition: "Officier ministeriel charge de dresser des constats a force probante renforcee, de signifier les actes de procedure et de proceder a l'execution forcee des decisions de justice.", example: "Un commissaire de justice constate les degats dans un appartement pour servir de preuve au tribunal." },
      { term: 'Preuve libre vs Preuve legale', definition: "La preuve libre (faits juridiques) admet tous les modes de preuve. La preuve legale (actes juridiques > 1 500 euros) exige en principe un ecrit.", example: "Un accident se prouve par tous moyens (preuve libre). Un contrat de vente de 5 000 euros exige un ecrit (preuve legale)." },
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
      { term: 'Principe du contradictoire', definition: "Principe fondamental du proces selon lequel chaque partie doit pouvoir prendre connaissance des arguments et preuves de l'autre partie et y repondre avant que le juge ne statue." },
      { term: 'Avantages des MARD', definition: "Les modes alternatifs de reglement des differends offrent quatre avantages principaux : rapidite, confidentialite, cout moindre et preservation des relations entre les parties.", example: "Une mediation commerciale permet de resoudre un litige en quelques semaines au lieu de plusieurs mois de procedure." },
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
      { term: 'Tribunal correctionnel', definition: "Juridiction penale competente pour juger les delits (infractions de gravite intermediaire). Les peines encourues vont jusqu'a 10 ans d'emprisonnement.", example: "Le vol, l'escroquerie, la conduite en etat d'ivresse sont juges par le tribunal correctionnel." },
      { term: 'Cour d\'assises', definition: "Juridiction penale competente pour juger les crimes (infractions les plus graves). Elle est composee de magistrats professionnels et d'un jury populaire (citoyens tires au sort).", example: "Le meurtre, le viol, les actes de terrorisme sont juges par la cour d'assises." },
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
      { term: 'Infans conceptus', definition: "Regle selon laquelle l'enfant simplement concu est considere comme ne chaque fois qu'il y va de son interet, a condition qu'il naisse vivant et viable.", example: "Si un pere decede pendant la grossesse, l'enfant concu peut heriter de lui." },
      { term: 'Tutelle, curatelle, sauvegarde de justice', definition: "Trois regimes de protection des majeurs vulnerables. La sauvegarde de justice est la mesure la plus legere (temporaire). La curatelle est intermediaire (assistance). La tutelle est la plus protectrice (representation).", example: "Une personne agee atteinte de la maladie d'Alzheimer peut etre placee sous tutelle par le juge des tutelles." },
      { term: 'Personne morale de droit public vs droit prive', definition: "Les personnes morales de droit public (Etat, communes, hopitaux publics) poursuivent l'interet general. Les personnes morales de droit prive (societes, associations, syndicats) sont creees par des personnes privees." },
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
      { term: 'Droit a la dignite humaine', definition: "Droit fondamental a valeur constitutionnelle interdisant tout traitement degradant, inhumain ou humiliant. Le corps humain est inviolable et ne peut faire l'objet d'un droit patrimonial (art. 16 Code civil)." },
      { term: 'Les 6 principes du RGPD', definition: "Liceite et transparence, limitation des finalites, minimisation des donnees, exactitude, limitation de la conservation, integrite et confidentialite. Tout traitement de donnees personnelles doit respecter ces six principes." },
      { term: 'CNIL', definition: "Commission nationale de l'informatique et des libertes. Autorite administrative independante chargee de veiller au respect de la protection des donnees personnelles. Elle informe, controle, sanctionne et recoit les plaintes.", example: "La CNIL peut infliger des amendes allant jusqu'a 20 millions d'euros ou 4 % du chiffre d'affaires mondial." },
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
      { term: 'Meubles et immeubles', definition: "Les biens se classent en immeubles (qui ne peuvent etre deplaces : sol, batiments) et en meubles (qui peuvent etre deplaces : voiture, ordinateur, ou incorporels : creances, parts sociales).", example: "Un appartement est un immeuble par nature. Une voiture est un meuble corporel. Un fonds de commerce est un meuble incorporel." },
      { term: 'Brevet', definition: "Titre de propriete industrielle protégeant une invention technique nouvelle pendant 20 ans. Il confere a son titulaire un monopole d'exploitation. Le depot se fait aupres de l'INPI.", example: "Un laboratoire pharmaceutique depose un brevet pour proteger une nouvelle molecule medicamenteuse." },
      { term: 'Droit d\'auteur', definition: "Droit de propriete litteraire et artistique protégeant les oeuvres de l'esprit des leur creation, sans formalite. Les droits patrimoniaux durent 70 ans apres le deces de l'auteur. Le droit moral est perpetuel.", example: "Un photographe possede des droits d'auteur sur ses cliches des leur prise de vue." },
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
      { term: 'Theorie de l\'imprevision', definition: "Mecanisme issu de la reforme 2016 (art. 1195 du Code civil) permettant de demander la renegociation du contrat lorsqu'un changement de circonstances imprevisible rend l'execution excessivement onereuse.", example: "Une flambee inattendue du prix des matieres premieres qui rend un contrat de fourniture ruineux pour le fournisseur" },
      { term: 'Contrat nomme vs innomme', definition: "Le contrat nomme est prevu et reglemente par la loi (vente, bail, travail). Le contrat innomme est cree librement par les parties en vertu de la liberte contractuelle, sans cadre legal specifique." },
      { term: 'Execution forcee', definition: "Droit du creancier de contraindre le debiteur a executer sa prestation par voie judiciaire (art. 1221 du Code civil), sauf impossibilite ou cout manifestement disproportionne." },
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
      { term: 'Bien libre vs bien economique', definition: "Un bien libre est disponible en abondance et gratuit (air, lumiere du soleil). Un bien economique est rare, produit par le travail humain et echange a un prix sur un marche.", example: "L'air est un bien libre ; un telephone est un bien economique" },
      { term: 'Classification des biens', definition: "Les biens economiques se classent en : durables (resistant a plusieurs usages) vs non durables (detruits au premier usage) ; de production (servant a produire) vs de consommation (usage final) ; materiels vs immateriels.", example: "Un ordinateur est un bien durable ; un yaourt est un bien non durable" },
      { term: 'Contraintes economiques', definition: "Quatre contraintes encadrent les choix des agents : la contrainte de revenu (budget limite), de temps (ressource rare), d'information (savoir imparfait) et d'espace geographique (acces inegal selon le lieu)." },
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
      { term: 'Secteurs institutionnels INSEE', definition: "L'INSEE classe les agents en 5 secteurs : menages, societes non financieres (SNF), societes financieres, administrations publiques (APU) et ISBLSM (associations, syndicats).", example: "Une banque est une societe financiere ; une mairie est une administration publique" },
      { term: 'ISBLSM', definition: "Institutions Sans But Lucratif au Service des Menages : associations, syndicats, partis politiques, fondations. Leurs ressources proviennent des cotisations et des dons." },
      { term: 'Specialisation des agents', definition: "Chaque agent se specialise dans une fonction principale (consommer, produire, financer, redistribuer). Cette specialisation rend les echanges entre agents indispensables." },
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
      { term: 'Types de marches', definition: "On distingue trois grands types de marches : le marche des biens et services, le marche du travail (ou le prix est le salaire) et le marche des capitaux (monetaire a court terme, financier a long terme)." },
      { term: 'Mecanisme d\'ajustement par les prix', definition: "Les prix agissent comme des signaux : un prix eleve signale la rarete (incite a produire plus et consommer moins), un prix bas signale l'abondance (incite a consommer plus et produire moins)." },
      { term: 'Transparence du marche', definition: "Condition de la CPP selon laquelle tous les acteurs disposent de la meme information complete sur les prix, la qualite et les conditions d'echange. En realite, l'information est souvent imparfaite." },
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
      { term: 'Passager clandestin (free rider)', definition: "Agent qui profite d'un bien collectif sans contribuer a son financement. Ce comportement empeche la production privee de biens collectifs et justifie le financement par l'impot.", example: "Un habitant qui beneficie de l'eclairage public sans payer d'impots locaux" },
      { term: 'Selection adverse', definition: "Mecanisme ou l'asymetrie d'information avant un echange conduit les mauvais produits a chasser les bons du marche. Les acheteurs, ne pouvant evaluer la qualite, proposent un prix moyen qui fait fuir les bons vendeurs.", example: "Sur le marche des voitures d'occasion, les mauvaises voitures restent car les vendeurs de bonnes voitures refusent le prix moyen" },
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
      { term: 'PIB marchand vs non marchand', definition: "Le PIB marchand correspond aux biens et services vendus a un prix de marche (environ 85 % du PIB). Le PIB non marchand correspond aux services publics evalues a leur cout de production (salaires des fonctionnaires)." },
      { term: 'Limites du PIB', definition: "Le PIB ne mesure pas : l'economie informelle (travail au noir), le travail domestique, les externalites negatives (pollution), le bien-etre ou les inegalites.", example: "Un maree noire augmente le PIB (couts de depollution) alors qu'elle detruit de la richesse naturelle" },
      { term: 'IDH (Indice de Developpement Humain)', definition: "Indicateur alternatif au PIB cree par le PNUD, combinant trois dimensions : niveau de vie (PIB/habitant en PPA), sante (esperance de vie) et education (duree de scolarisation). Il varie de 0 a 1." },
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
      { term: 'Capacite vs besoin de financement', definition: "Un agent en capacite de financement a une epargne superieure a ses investissements (il peut preter). Un agent en besoin de financement a des investissements superieurs a son epargne (il doit emprunter).", example: "Les menages francais sont structurellement en capacite de financement ; les entreprises et l'Etat sont en besoin de financement" },
      { term: 'Marche primaire vs secondaire', definition: "Le marche primaire est celui de l'emission de nouveaux titres (levee de fonds). Le marche secondaire est celui de la revente des titres deja emis (Bourse au quotidien). L'entreprise ne recoit de l'argent que sur le marche primaire." },
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
      { term: 'Agregats monetaires M1, M2, M3', definition: "M1 = billets + pieces + depots a vue. M2 = M1 + depots a terme courts + livrets d'epargne. M3 = M2 + instruments negociables (OPCVM monetaires, certificats de depot). M3 est l'agregat le plus large, surveille par la BCE." },
      { term: 'Evolution historique de la monnaie', definition: "La monnaie a evolue du troc vers la monnaie marchandise, puis metallique (pieces d'or), fiduciaire (billets), scripturale (ecritures bancaires) et enfin numerique (paiements electroniques)." },
      { term: 'Multiplicateur de credit', definition: "Mecanisme par lequel un depot initial genere un volume de credits superieur dans le systeme bancaire. Avec un taux de reserves de 10 %, un depot de 1 000 euros peut generer jusqu'a 10 000 euros de monnaie.", example: "1 000 euros deposes, 900 pretes, redeposes, 810 repretes... au total 10 000 euros crees" },
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
      { term: 'Cinq branches de la Securite sociale', definition: "Depuis 2021, la Securite sociale comprend 5 branches : maladie (CNAM), accidents du travail/maladies professionnelles, retraite (vieillesse), famille (CAF) et autonomie (perte d'autonomie des personnes agees et handicapees)." },
      { term: 'CSG et CRDS', definition: "La CSG (Contribution Sociale Generalisee) et la CRDS (Contribution au Remboursement de la Dette Sociale) sont des impots preleves sur tous les revenus (travail, capital, remplacement). La CSG est devenue la premiere source de financement de la Securite sociale." },
      { term: 'Trappes a inactivite', definition: "Situation ou reprendre un emploi fait perdre plus d'aides sociales qu'elle ne rapporte de revenus supplementaires. Ce phenomene est un argument contre un niveau trop eleve de redistribution.", example: "Un allocataire du RSA qui, en reprenant un emploi a temps partiel, perd ses droits au RSA et a la CMU, sans gain net de revenu" },
    ],
  },

  // =============================================
  // MANAGEMENT PREMIERE
  // =============================================
  'pourquoi-organiser-laction-collective': {
    cards: [
      { term: 'Action individuelle', definition: "Action menee par une seule personne, avec ses propres moyens. Elle est limitee par les ressources et competences d'un seul individu.", example: "Un artisan qui fabrique et vend seul ses produits" },
      { term: 'Action collective', definition: "Action coordonnee de plusieurs personnes qui mettent en commun leurs competences et ressources pour atteindre un objectif qu'un individu seul ne pourrait pas realiser.", example: "Une equipe de chirurgiens operant ensemble un patient" },
      { term: 'Organisation', definition: "Regroupement structure de personnes et de ressources coordonnees pour atteindre un objectif commun, dote de regles de fonctionnement et d'une repartition des taches." },
      { term: 'Cadre juridique', definition: "Ensemble des regles legales (statuts, contrats, reglement interieur) qui encadrent le fonctionnement d'une organisation, definissent les droits et obligations de ses membres et protegent les parties prenantes.", example: "Les statuts d'une association loi 1901 fixent son objet, son siege et ses regles de fonctionnement" },
      { term: 'Structure', definition: "Agencement des relations entre les membres d'une organisation : repartition des taches, liens hierarchiques, mecanismes de coordination et flux de communication.", example: "Un organigramme qui montre les services, les postes et les liens de subordination" },
      { term: 'Ressources', definition: "Moyens mobilises par une organisation pour fonctionner : humaines (personnel), financieres (capitaux), materielles (locaux, equipements) et immaterielles (brevets, savoir-faire, reputation)." },
      { term: 'Division du travail', definition: "Repartition des taches entre les membres de l'organisation selon leurs competences. Elle permet la specialisation, l'amelioration de la productivite et la complementarite des roles.", example: "Dans un restaurant, le chef cuisine, le serveur accueille les clients, le comptable gere les finances" },
    ],
  },
  'la-diversite-des-organisations': {
    cards: [
      { term: 'Finalite d\'une organisation', definition: "Raison d'etre et mission principale d'une organisation. Elle varie selon le type : profit (entreprise), interet general (organisation publique), interet collectif (association)." },
      { term: 'Entreprise', definition: "Organisation a but lucratif qui produit des biens ou services destines a la vente sur un marche concurrentiel afin de degager un benefice.", example: "Une boulangerie, Renault, Amazon" },
      { term: 'Organisation publique', definition: "Organisation relevant de l'Etat ou des collectivites territoriales, financee par les prelevements obligatoires et assurant des missions de service public.", example: "Un hopital public, une mairie, un lycee public" },
      { term: 'Association loi 1901', definition: "Groupement de personnes a but non lucratif qui poursuit un objectif autre que le partage de benefices. Elle peut realiser des excedents mais les reinvestit dans sa mission.", example: "Les Restos du Coeur, un club sportif local" },
      { term: 'Criteres de differenciation', definition: "Elements qui permettent de distinguer les organisations entre elles : finalite, taille, secteur d'activite, statut juridique, champ d'action geographique, ressources." },
      { term: 'Taille d\'une organisation', definition: "Critere mesure par l'effectif salarie et le chiffre d'affaires. On distingue TPE (moins de 10 salaries), PME (10-249), ETI (250-4 999) et grande entreprise (5 000 et plus)." },
      { term: 'Secteurs d\'activite', definition: "Classification selon la nature de la production : primaire (agriculture, extraction), secondaire (industrie, transformation), tertiaire (services). Certains ajoutent un secteur quaternaire (numerique, connaissance).", example: "Un agriculteur (primaire), un constructeur automobile (secondaire), une banque (tertiaire)" },
    ],
  },
  'quest-ce-que-le-management': {
    cards: [
      { term: 'Management', definition: "Ensemble des techniques de direction, d'organisation et de gestion permettant de piloter une organisation : fixer des objectifs, organiser le travail, animer les equipes et controler les resultats." },
      { term: 'Quatre fonctions du management', definition: "Selon Fayol, le manager exerce quatre fonctions essentielles : fixer des objectifs (planifier), organiser les ressources et les taches, animer les equipes (motiver et diriger), controler les resultats obtenus." },
      { term: 'Management strategique', definition: "Decisions prises par la direction qui engagent l'organisation sur le long terme et definissent ses grandes orientations.", example: "Decider de se developper a l'international, lancer une nouvelle gamme de produits" },
      { term: 'Management operationnel', definition: "Decisions quotidiennes prises par l'encadrement intermediaire pour mettre en oeuvre concrètement la strategie definie par la direction.", example: "Organiser le planning des equipes, gerer les approvisionnements, traiter les reclamations clients" },
      { term: 'Decision strategique vs operationnelle', definition: "La decision strategique est prise au sommet, engage le long terme et est difficilement reversible. La decision operationnelle est courante, a court terme et facilement reversible.", example: "Fusionner avec un concurrent (strategique) vs commander des fournitures (operationnelle)" },
      { term: 'Modele IMC de Simon', definition: "Modele du processus de decision en 3 phases : Intelligence (identifier le probleme), Modelisation (concevoir les solutions possibles), Choix (selectionner la solution la plus satisfaisante).", example: "Un directeur constate une baisse des ventes (I), etudie plusieurs options (M), puis choisit de lancer une promotion (C)" },
      { term: 'Rationalite limitee (Simon)', definition: "Concept montrant que le decideur ne peut etre parfaitement rationnel : informations incompletes, temps limite, biais cognitifs. Il cherche donc une solution satisfaisante et non optimale." },
    ],
  },
  'le-management-face-aux-changements': {
    cards: [
      { term: 'Parties prenantes', definition: "Ensemble des acteurs internes (salaries, dirigeants, actionnaires) et externes (clients, fournisseurs, Etat, ONG) concernes par l'activite de l'organisation ou pouvant influencer ses decisions.", example: "Les salaries attendent de bonnes conditions de travail, les actionnaires attendent des dividendes, les riverains souhaitent moins de nuisances" },
      { term: 'RSE (Responsabilite Societale des Entreprises)', definition: "Prise en compte volontaire par l'organisation de ses impacts sociaux, environnementaux et ethiques, au-dela de ses obligations legales, dans l'interet de toutes ses parties prenantes." },
      { term: 'Facteurs de contingence', definition: "Variables internes et externes (taille, age, technologie, environnement, strategie) qui influencent la structure et le mode de management de chaque organisation. Il n'existe pas de modele universel.", example: "Une startup adopte une structure souple, une grande industrie une structure plus formalisee" },
      { term: 'Transformation numerique', definition: "Processus d'integration des technologies digitales dans l'ensemble des activites de l'organisation, modifiant les methodes de travail, les competences requises et les relations avec les parties prenantes.", example: "Teletravail, vente en ligne, automatisation des taches administratives, collaboration via des outils cloud" },
      { term: 'Freeman vs Friedman', definition: "Friedman (1970) : la seule responsabilite de l'entreprise est de maximiser le profit pour les actionnaires. Freeman (1984) : l'entreprise doit satisfaire l'ensemble de ses parties prenantes. La RSE s'inscrit dans la vision de Freeman." },
      { term: 'Gouvernance d\'entreprise', definition: "Ensemble des regles et mecanismes qui encadrent le pouvoir de decision et le controle au sein de l'organisation, en equilibrant les interets des differentes parties prenantes.", example: "Le conseil d'administration supervise les decisions du dirigeant dans l'interet des actionnaires et des salaries" },
    ],
  },
  'quest-ce-que-la-strategie': {
    cards: [
      { term: 'Strategie', definition: "Ensemble des decisions a long terme qui fixent les orientations de l'organisation en fonction de son environnement et de ses ressources, pour assurer sa perennite et son developpement." },
      { term: 'Objectifs strategiques', definition: "Buts a long terme, globaux et difficilement reversibles, qui guident l'ensemble des actions de l'organisation.", example: "Devenir leader europeen sur son marche d'ici 5 ans, doubler le chiffre d'affaires en 3 ans" },
      { term: 'Demarche strategique', definition: "Processus structure en etapes : diagnostic (analyse interne et externe), fixation des objectifs, choix strategiques, mise en oeuvre operationnelle, controle et ajustement des resultats." },
      { term: 'Environnement incertain', definition: "Contexte dans lequel les evolutions du marche, de la technologie, de la reglementation et de la concurrence sont difficiles a prevoir, obligeant l'organisation a s'adapter en permanence.", example: "La pandemie de Covid-19 a bouleverse les previsions de nombreuses organisations" },
      { term: 'Perennite', definition: "Capacite d'une organisation a durer dans le temps en s'adaptant aux evolutions de son environnement. La strategie est l'outil principal pour assurer cette perennite." },
    ],
  },
  'le-diagnostic-strategique': {
    cards: [
      { term: 'Diagnostic interne', definition: "Analyse des forces et faiblesses de l'organisation a partir de ses ressources (humaines, financieres, materielles, immaterielles) et de ses competences.", example: "Force : equipe R&D tres qualifiee. Faiblesse : endettement eleve" },
      { term: 'Diagnostic externe', definition: "Analyse des opportunites et menaces de l'environnement (marche, concurrence, reglementation, evolutions technologiques et societales).", example: "Opportunite : croissance du marche bio. Menace : arrivee d'un concurrent low-cost" },
      { term: 'Ressources et competences', definition: "Les ressources sont les moyens dont dispose l'organisation. Les competences sont les savoir-faire qui permettent de combiner et d'utiliser ces ressources efficacement. Les competences distinctives sont rares et difficilement imitables." },
      { term: 'Analyse PESTEL', definition: "Outil d'analyse du macro-environnement selon 6 dimensions : Politique, Economique, Socioculturel, Technologique, Ecologique et Legal.", example: "Le RGPD (Legal) impose de nouvelles contraintes aux entreprises traitant des donnees personnelles" },
      { term: 'Veille strategique', definition: "Processus continu de collecte et d'analyse des informations sur l'environnement (concurrentiel, technologique, juridique, societal) permettant d'anticiper les changements et de saisir les opportunites.", example: "Une entreprise surveille les brevets deposes par ses concurrents pour anticiper les innovations du marche" },
      { term: 'SWOT', definition: "Matrice de synthese croisant le diagnostic interne (Strengths/Weaknesses) et externe (Opportunities/Threats) pour orienter les choix strategiques.", example: "Forces + Opportunites = strategie offensive. Faiblesses + Menaces = strategie defensive" },
    ],
  },
  'les-objectifs-strategiques': {
    cards: [
      { term: 'Objectif strategique', definition: "But a long terme, global et mesurable, qui guide l'ensemble des actions de l'organisation. Il doit respecter les criteres SMART : Specifique, Mesurable, Atteignable, Realiste, Temporellement defini.", example: "Augmenter la part de marche de 15 % a 25 % d'ici 3 ans" },
      { term: 'Indicateurs de performance', definition: "Outils de mesure quantitatifs ou qualitatifs permettant d'evaluer le degre d'atteinte des objectifs et de piloter l'action.", example: "Chiffre d'affaires, taux de satisfaction client, taux d'absenteisme, part de marche" },
      { term: 'Conflit d\'objectifs', definition: "Situation dans laquelle les interets des differentes parties prenantes sont contradictoires, rendant difficile la satisfaction simultanee de tous les acteurs.", example: "Les actionnaires veulent maximiser les dividendes tandis que les salaries reclament des augmentations de salaire" },
      { term: 'Consensus', definition: "Accord obtenu par la negociation et le dialogue entre les parties prenantes, ou chacun fait des concessions pour aboutir a un compromis acceptable par le plus grand nombre." },
      { term: 'Actions correctrices', definition: "Mesures prises pour reduire l'ecart entre les resultats obtenus et les objectifs fixes. Elles font partie de la fonction de controle du management.", example: "Face a une baisse des ventes, le manager decide de renforcer la force commerciale et de lancer une promotion" },
      { term: 'Tableau de bord', definition: "Outil de pilotage regroupant un ensemble d'indicateurs cles permettant au manager de suivre la performance en temps reel et de prendre des decisions eclairees.", example: "Tableau de bord commercial avec CA mensuel, nombre de ventes, panier moyen, taux de conversion" },
    ],
  },
  'specialisation-ou-diversification': {
    cards: [
      { term: 'Specialisation', definition: "Strategie consistant a concentrer toutes les ressources de l'organisation sur un seul domaine d'activite strategique (DAS) pour y developper une expertise forte.", example: "Michelin concentre ses efforts sur les pneumatiques" },
      { term: 'Diversification', definition: "Strategie consistant a developper de nouvelles activites, differentes du metier d'origine, pour repartir les risques et trouver de nouveaux relais de croissance." },
      { term: 'DAS (Domaine d\'Activite Strategique)', definition: "Ensemble homogene d'activites partageant les memes facteurs cles de succes, les memes clients et les memes concurrents. Chaque DAS peut faire l'objet d'une strategie specifique.", example: "Chez LVMH : mode, vins et spiritueux, parfums, montres, distribution selective sont des DAS distincts" },
      { term: 'Diversification horizontale', definition: "Developpement de nouveaux produits ou services complementaires a l'offre existante, destines a la meme clientele.", example: "Apple lance les AirPods en complement de l'iPhone" },
      { term: 'Diversification verticale', definition: "Integration d'activites situees en amont (fournisseurs) ou en aval (distribution) de la chaine de production pour mieux controler la filiere.", example: "Zara controle la conception, la fabrication et la distribution de ses vetements" },
      { term: 'Diversification conglomeree', definition: "Investissement dans des activites sans aucun lien technologique ni commercial avec le metier d'origine, dans le seul but de repartir les risques.", example: "Le groupe Bouygues est present dans le BTP, les telecoms et les medias (TF1)" },
    ],
  },
  'domination-par-les-couts-ou-differenciation': {
    cards: [
      { term: 'Domination par les couts', definition: "Strategie generique de Porter consistant a produire a un cout inferieur aux concurrents grace aux economies d'echelle, a l'effet d'experience et a l'optimisation des processus, afin de pratiquer des prix competitifs.", example: "Lidl et Ryanair pratiquent la domination par les couts" },
      { term: 'Differenciation', definition: "Strategie generique de Porter visant a rendre l'offre unique aux yeux du client (qualite, innovation, design, image de marque, service) pour justifier un prix plus eleve que la concurrence.", example: "Apple se differencie par le design, l'ecosysteme et l'experience utilisateur" },
      { term: 'Avantage concurrentiel', definition: "Element distinctif et durable qui permet a une organisation de surpasser ses concurrents. Il repose sur des ressources rares, difficilement imitables et creant de la valeur.", example: "Le reseau logistique d'Amazon est un avantage concurrentiel difficilement imitable" },
      { term: 'Differenciation par le haut (sophistication)', definition: "Proposer une offre de qualite superieure, plus innovante ou assortie de services exclusifs, justifiant un prix plus eleve.", example: "Nespresso se differencie par le haut avec l'experience client et le marketing premium" },
      { term: 'Differenciation par le bas (epuration)', definition: "Proposer une offre simplifiee, depourvue de certains attributs, a un prix reduit, pour attirer une clientele sensible au prix.", example: "Dacia propose des voitures neuves a prix reduit en supprimant les equipements non essentiels" },
      { term: 'Strategie de focalisation (niche)', definition: "Troisieme strategie generique de Porter : se concentrer sur un segment etroit du marche pour y appliquer une domination par les couts ou une differenciation. Le segment est trop petit pour attirer les grands concurrents.", example: "Rolls-Royce se focalise sur le segment ultra-luxe de l'automobile" },
    ],
  },
  'externalisation-ou-integration': {
    cards: [
      { term: 'Chaine de valeur (Porter)', definition: "Decomposition de l'activite de l'organisation en activites principales (logistique, production, commercialisation, service) et de soutien (RH, infrastructure, R&D) pour identifier les sources de creation de valeur." },
      { term: 'Externalisation (outsourcing)', definition: "Transfert a un prestataire exterieur specialise d'une activite auparavant realisee en interne, afin de se recentrer sur le coeur de metier et de reduire les couts.", example: "Une entreprise confie sa comptabilite a un cabinet d'expertise comptable" },
      { term: 'Sous-traitance', definition: "Operation par laquelle un donneur d'ordres confie a un sous-traitant la realisation d'une tache precise, tout en conservant la maitrise du cahier des charges et du controle qualite.", example: "Un constructeur automobile sous-traite la fabrication de ses sieges a un equipementier" },
      { term: 'Integration en amont', definition: "Prise de controle d'activites situees en amont de la chaine de valeur (fournisseurs, matieres premieres) pour securiser les approvisionnements et reduire les couts.", example: "Un torrefacteur qui achete des plantations de cafe" },
      { term: 'Integration en aval', definition: "Prise de controle d'activites situees en aval de la chaine de valeur, plus proches du client final (distribution, vente), pour capter davantage de valeur.", example: "Un fabricant de vetements qui ouvre ses propres boutiques en ville" },
      { term: 'Risques de l\'externalisation', definition: "L'externalisation expose l'organisation a la perte de competences internes, a la dependance vis-a-vis du prestataire, a des risques de qualite et a des problemes de confidentialite.", example: "Un editeur de logiciels externalise son support client et constate une baisse de la satisfaction des utilisateurs" },
    ],
  },
  'croissance-et-internationalisation': {
    cards: [
      { term: 'Croissance interne (organique)', definition: "Developpement de l'organisation par ses propres moyens : investissements, embauches, recherche et developpement, creation de nouveaux produits.", example: "Une PME qui investit dans une nouvelle ligne de production pour augmenter sa capacite" },
      { term: 'Croissance externe', definition: "Developpement par le rachat (acquisition), la fusion ou la prise de participation dans d'autres organisations, permettant une croissance rapide.", example: "Le rachat d'Instagram par Facebook (Meta) en 2012" },
      { term: 'Partenariat strategique (alliance)', definition: "Accord de cooperation entre organisations qui restent juridiquement independantes. Elles mutualisent des ressources ou competences pour un projet commun.", example: "L'alliance Renault-Nissan-Mitsubishi dans l'automobile" },
      { term: 'Joint-venture (coentreprise)', definition: "Entite juridique creee conjointement par deux ou plusieurs partenaires qui apportent des ressources et partagent la gouvernance, les risques et les profits.", example: "Sony Ericsson, coentreprise creee par Sony et Ericsson pour fabriquer des telephones" },
      { term: 'Internationalisation', definition: "Processus d'extension des activites d'une organisation au-dela de ses frontieres nationales. Plusieurs modalites : exportation, franchise, licence, joint-venture, implantation de filiales.", example: "McDonald's s'internationalise par la franchise dans plus de 100 pays" },
      { term: 'Modalites de l\'internationalisation', definition: "Exportation directe (risque faible, engagement faible), franchise et licence (engagement moyen), partenariat et joint-venture (engagement partage), creation de filiales (engagement maximal, controle total)." },
    ],
  },
  'les-strategies-des-organisations-publiques': {
    cards: [
      { term: 'Service public', definition: "Activite d'interet general assuree par une organisation publique (ou deleguee a un operateur prive) et soumise a des principes fondamentaux : continuite, egalite, adaptabilite.", example: "L'education nationale, la police, les transports en commun" },
      { term: 'Interet general', definition: "Notion qui depasse la somme des interets particuliers. Il designe les besoins collectifs de la population que les organisations publiques ont pour mission de satisfaire.", example: "La securite, la sante publique, l'acces a l'education pour tous" },
      { term: 'Principes du service public', definition: "Trois principes fondamentaux : continuite (fonctionnement sans interruption), egalite (acces identique pour tous les usagers) et adaptabilite (evolution en fonction des besoins de la societe)." },
      { term: 'Budget public', definition: "Document previsionnel autorisant les recettes et les depenses d'une organisation publique pour une annee. Les ressources sont limitees, ce qui impose des arbitrages et une gestion efficiente.", example: "Le budget de l'Etat fixe les credits alloues a chaque ministere pour l'annee" },
      { term: 'Delegation de service public (DSP)', definition: "Mecanisme par lequel une collectivite confie la gestion d'un service public a un operateur prive (concession, affermage) tout en conservant le controle des conditions d'execution.", example: "Une ville confie la gestion de son reseau d'eau potable a Veolia via une DSP" },
      { term: 'Performance publique', definition: "Evaluation de l'action publique par des criteres d'efficacite (qualite du service rendu aux usagers) et d'efficience (optimisation des ressources budgetaires), et non par la recherche du profit." },
    ],
  },
  'les-strategies-des-organisations-de-la-societe-civile': {
    cards: [
      { term: 'Organisations de la societe civile (OSC)', definition: "Organisations privees a but non lucratif qui agissent dans l'interet collectif : associations, ONG, fondations, syndicats, mutuelles, organisations confessionnelles.", example: "Medecins Sans Frontieres, la Croix-Rouge, Amnesty International, un syndicat de salaries" },
      { term: 'Objet social', definition: "Mission et raison d'etre d'une OSC, inscrits dans ses statuts. Il definit le domaine d'action pour lequel l'organisation a ete creee.", example: "L'objet social des Restos du Coeur est l'aide alimentaire et l'insertion des personnes en difficulte" },
      { term: 'Partenariats des OSC', definition: "Accords de cooperation noues par les OSC avec des entreprises (mecenat, sponsoring), des collectivites publiques (subventions, conventions) ou d'autres OSC pour mobiliser des ressources et accroitre leur impact.", example: "Le partenariat entre une ONG environnementale et une entreprise pour financer la reforestation" },
      { term: 'Transparence', definition: "Obligation morale et parfois legale pour une OSC de rendre compte de l'utilisation de ses fonds (rapport d'activite, comptes publies) afin de maintenir la confiance de ses donateurs, adherents et partenaires." },
      { term: 'Performance des OSC', definition: "La performance d'une OSC se mesure par sa capacite a remplir sa mission sociale : nombre de beneficiaires aides, impact concret des actions, satisfaction des parties prenantes, respect de l'objet statutaire.", example: "Une ONG mesure son impact par le nombre de puits construits et de personnes ayant acces a l'eau potable" },
      { term: 'Sources de financement des OSC', definition: "Cotisations des adherents, dons et legs, subventions publiques, mecenat d'entreprise, ventes de services ou produits lies a la mission. La diversification des ressources est essentielle pour garantir l'independance." },
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
      { term: 'Force majeure', definition: "Evenement imprevisible, irresistible et exterieur qui rompt le lien de causalite et exonere totalement le responsable.", example: "Un seisme d'ampleur exceptionnelle qui detruit un batiment et cause des dommages aux voisins" },
      { term: 'Faute de la victime', definition: "Comportement de la victime qui a contribue a la realisation de son propre dommage. Elle peut reduire (exoneration partielle) ou supprimer (exoneration totale) le droit a reparation." },
      { term: 'Assurance de responsabilite civile', definition: "Contrat par lequel un assureur s'engage a prendre en charge les dommages et interets dus par l'assure en cas de mise en cause de sa responsabilite. Certaines assurances RC sont obligatoires (automobile, professionnelle)." },
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
      { term: 'Travailleur independant vs salarie', definition: "Le travailleur independant (auto-entrepreneur, freelance) organise librement son activite sans lien de subordination. Il ne beneficie pas du Code du travail. Le juge peut requalifier la relation en contrat de travail si un lien de subordination est constate.", example: "Un livreur de plateforme qui recoit des directives precises peut etre requalifie en salarie" },
      { term: 'Clause de non-concurrence', definition: "Clause interdisant au salarie d'exercer une activite concurrente apres la rupture du contrat. Valable uniquement si elle est limitee dans le temps, l'espace, protege un interet legitime et prevoit une contrepartie financiere." },
      { term: 'Reglement interieur', definition: "Document obligatoire dans les entreprises de 50+ salaries fixant les regles de discipline, hygiene et securite. Il est soumis a l'avis du CSE et au controle de l'inspecteur du travail. Les sanctions pecuniaires y sont interdites." },
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
      { term: 'Faute simple, grave, lourde', definition: "La faute simple ouvre droit au preavis et a l'indemnite. La faute grave (impossible de maintenir le salarie) prive du preavis et de l'indemnite. La faute lourde (intention de nuire) ajoute la possibilite de rechercher la responsabilite civile du salarie.", example: "Retards repetes = faute simple. Vol = faute grave. Sabotage = faute lourde." },
      { term: 'Prise d\'acte', definition: "Mode de rupture par lequel le salarie met fin au contrat en reprochant des manquements graves a l'employeur. Le juge requalifie ensuite en licenciement sans cause reelle et serieuse (si les griefs sont fondes) ou en demission (sinon)." },
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
      { term: 'Droit de retrait', definition: "Droit du salarie de se retirer d'une situation de travail presentant un danger grave et imminent pour sa vie ou sa sante (art. L4131-1 du Code du travail). Aucune sanction ni retenue de salaire ne peut etre appliquee si l'exercice est legitime." },
      { term: 'NAO (Negociation Annuelle Obligatoire)', definition: "Obligation pour l'employeur d'engager chaque annee une negociation avec les delegues syndicaux sur les salaires, le temps de travail, le partage de la valeur ajoutee et l'egalite professionnelle." },
      { term: 'Hierarchie des normes sociales (3 blocs)', definition: "Depuis 2017, bloc 1 : la branche prime (salaires minima, classifications). Bloc 2 : la branche peut prevoir de primer. Bloc 3 : l'accord d'entreprise prime, meme s'il est moins favorable que la branche." },
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
      { term: 'Cyberharcelement', definition: "Agissements repetes via des moyens numeriques ayant pour objet de degrader les conditions de vie de la victime. Puni de 2 ans de prison et 30 000 euros d'amende (3 ans et 45 000 euros si la victime a moins de 15 ans)." },
      { term: 'Cookies et consentement', definition: "Les cookies non essentiels (publicitaires, mesure d'audience tiers) necessitent le consentement prealable, libre et eclaire de l'utilisateur avant leur depot. Le refus doit etre aussi simple que l'acceptation. Les cookies strictement necessaires au fonctionnement du site sont exemptes." },
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
      { term: 'Residu de Solow', definition: "Part de la croissance economique non expliquee par l'augmentation des quantites de travail et de capital. Elle est attribuee au progres technique et mesure la productivite globale des facteurs (PGF).", example: "Solow a montre que le progres technique explique plus de la moitie de la croissance americaine au XXe siecle" },
      { term: 'Capital humain (Becker)', definition: "Ensemble des connaissances, competences et qualifications acquises par les individus grace a l'education, la formation et l'experience. Investir dans le capital humain accroit la productivite et la croissance.", example: "Un salarie qui suit une formation continue augmente sa productivite" },
      { term: 'Economie circulaire', definition: "Modele economique visant a limiter le gaspillage en optimisant l'utilisation des ressources : eco-conception, recyclage, reemploi, economie de la fonctionnalite. Elle s'oppose au modele lineaire (extraire, produire, jeter).", example: "Une entreprise qui reconditionne des telephones au lieu de les detruire" },
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
      { term: 'Balance des paiements', definition: "Document comptable retraçant l'ensemble des transactions entre un pays et le reste du monde : balance commerciale (biens), balance courante (biens + services + revenus + transferts) et compte financier (mouvements de capitaux)." },
      { term: 'Protectionnisme educateur (List)', definition: "Theorie de Friedrich List selon laquelle un pays en developpement doit temporairement proteger ses industries naissantes de la concurrence etrangere, le temps qu'elles deviennent competitives.", example: "L'Allemagne du XIXe siecle a protege ses industries avant de s'ouvrir au commerce mondial" },
      { term: 'Chaines de valeur mondiales', definition: "Decomposition de la production d'un bien en multiples etapes realisees dans differents pays. Chaque pays se specialise dans l'etape ou il dispose d'un avantage (couts, competences).", example: "Un smartphone concu aux USA, assemble en Chine, avec des composants de Coree et du Japon" },
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
      { term: 'Halo du chomage', definition: "Ensemble des personnes en marge du marche du travail qui ne sont pas comptabilisees comme chomeuses au sens du BIT : personnes decouragees, en sous-emploi, ou non immediatement disponibles.", example: "Une personne qui souhaite travailler mais a cesse ses recherches par decouragement" },
      { term: 'Analyse keynesienne du chomage', definition: "Pour Keynes, le chomage resulte d'une insuffisance de la demande globale. La solution passe par la relance budgetaire (depenses publiques, investissements) grace a l'effet multiplicateur." },
      { term: 'Flexisecurite', definition: "Modele combinant flexibilite du marche du travail (facilite de licenciement), generosites des allocations chomage et politiques actives intensives (formation, accompagnement). Le Danemark en est l'exemple de reference.", example: "Au Danemark, les licenciements sont souples mais les chomeurs beneficient d'allocations elevees et d'un accompagnement actif" },
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
      { term: 'Courbe de Phillips', definition: "Relation inverse observee entre le taux d'inflation et le taux de chomage : quand le chomage baisse, l'inflation tend a augmenter, et inversement. Remise en question par la stagflation des annees 1970." },
      { term: 'Stagflation', definition: "Situation paradoxale ou coexistent simultanement une stagnation economique (faible croissance ou recession) et une inflation persistante. Phenomene observe lors des chocs petroliers des annees 1970.", example: "En 1974, la France a connu a la fois une recession et une inflation superieure a 13 %" },
      { term: 'Taux de refinancement (BCE)', definition: "Taux directeur principal de la BCE, auquel les banques commerciales empruntent de la monnaie centrale. En l'augmentant, la BCE rend le credit plus cher et freine l'inflation ; en le baissant, elle stimule l'activite.", example: "La BCE a porte son taux de refinancement a 4,5 % en 2023 pour lutter contre l'inflation" },
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
      { term: 'Approche creatrice', definition: "Approche mercatique ou l'entreprise cree un besoin nouveau en proposant un produit ou service que le consommateur ne savait pas encore vouloir. Elle s'oppose a l'approche reactive qui repond a des besoins exprimes.", example: "Le lancement du premier smartphone a cree un besoin que personne n'exprimait avant" },
      { term: 'Benchmark concurrentiel', definition: "Demarche de comparaison des pratiques, performances et processus de l'entreprise avec ceux des concurrents ou des entreprises de reference, pour identifier les meilleures pratiques et s'en inspirer.", example: "Comparer sa politique de prix, son packaging ou sa communication avec ceux des leaders du marche" },
      { term: 'Sources primaires vs secondaires', definition: "Les sources primaires sont des donnees collectees specifiquement pour un besoin precis (enquete, sondage). Les sources secondaires sont des donnees deja existantes reutilisees (INSEE, panels, presse). Une bonne etude combine les deux.", example: "Etude documentaire (secondaire) puis enquete terrain (primaire)" },
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
      { term: 'ZMOT (Zero Moment of Truth)', definition: "Concept de Google designant le moment ou le consommateur effectue ses recherches en ligne (avis, comparaisons, videos) avant de se rendre en magasin ou de finaliser son achat. Le parcours d'achat commence desormais sur un ecran.", example: "Avant d'acheter un telephone, 90 % des consommateurs consultent les avis en ligne" },
      { term: 'Nudge marketing', definition: "Technique issue de l'economie comportementale qui oriente les choix du consommateur sans le contraindre, en modifiant l'architecture des choix : choix par defaut, preuve sociale, effet de rarete, ancrage.", example: "Afficher 'Plus que 3 en stock' cree un sentiment d'urgence qui accelere l'achat" },
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
      { term: 'Matrice BCG', definition: "Outil d'analyse du portefeuille de produits croisant taux de croissance du marche et part de marche relative. Quatre categories : vedettes (stars), vaches a lait, dilemmes, poids morts.", example: "Les vaches a lait financent les dilemmes et les vedettes de l'entreprise" },
      { term: 'Co-branding', definition: "Association de deux marques pour creer un produit commun, combinant leurs notorietes et expertises respectives pour toucher de nouvelles clienteles.", example: "Une marque de glace qui collabore avec une marque de biscuit pour creer un parfum inedit" },
      { term: 'Design thinking', definition: "Methode de conception centree sur l'utilisateur en 5 etapes : empathie, definition du probleme, ideation, prototypage, test. Elle favorise l'innovation en placant le consommateur au centre de la demarche.", example: "Observer les usagers dans leur quotidien (empathie) avant de concevoir un nouveau service" },
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
      { term: 'Yield management', definition: "Tarification dynamique qui fait varier le prix d'un meme produit ou service en fonction de la demande, du moment d'achat et du taux de remplissage. Objectif : maximiser le chiffre d'affaires.", example: "Un billet de train SNCF est moins cher reserve 3 mois a l'avance qu'achete la veille" },
      { term: 'Modele freemium', definition: "Modele economique combinant une offre gratuite de base (free) et une offre payante enrichie (premium). L'objectif est d'attirer un maximum d'utilisateurs puis de convertir les plus engages en clients payants.", example: "Spotify gratuit avec publicite / Spotify Premium sans publicite" },
      { term: 'Coefficient multiplicateur', definition: "Rapport entre le prix de vente TTC et le cout d'achat HT. Il permet de calculer rapidement le prix de vente a partir du cout d'achat en appliquant un facteur unique.", example: "Coefficient de 2,5 : un produit achete 20 euros HT sera vendu 50 euros TTC" },
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
      { term: 'Phygital', definition: "Convergence entre le commerce physique et le commerce digital. L'objectif est d'enrichir l'experience client en combinant le meilleur des deux mondes : contact humain du magasin et praticite du digital.", example: "Bornes interactives en magasin, essayage virtuel en ligne, click & collect" },
      { term: 'Desintermediation et reintermediation', definition: "La desintermediation supprime des intermediaires grace au digital (vente directe en ligne). La reintermediation fait apparaitre de nouveaux intermediaires numeriques : les plateformes (marketplaces).", example: "Un producteur vend en direct sur son site (desintermediation). Amazon met en relation vendeurs et acheteurs (reintermediation)" },
      { term: 'Dernier kilometre', definition: "Derniere etape de la livraison, du depot logistique au domicile du consommateur. C'est le maillon le plus couteux (jusqu'a 50 % du cout total) et le plus impactant ecologiquement.", example: "Points relais, consignes automatiques, livraison velo-cargo en centre-ville" },
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
      { term: 'SEO vs SEA', definition: "Le SEO (Search Engine Optimization) optimise le referencement naturel (gratuit, durable). Le SEA (Search Engine Advertising) achete des publicites sur les moteurs de recherche (payant, immediat). L'ensemble forme le SEM.", example: "Optimiser le contenu d'un site pour Google (SEO) et acheter des mots-cles sur Google Ads (SEA)" },
      { term: 'Inbound marketing', definition: "Strategie qui attire les prospects vers la marque par du contenu a valeur ajoutee (pull), plutot que d'aller les chercher par la publicite intrusive (push/outbound). Parcours : attirer, convertir, conclure, fideliser.", example: "Un blog de recettes pour attirer les visiteurs vers un site de vente d'ustensiles de cuisine" },
      { term: 'RGPD et marketing digital', definition: "Le RGPD impose le consentement explicite (opt-in) pour les cookies de tracage et les communications commerciales. Il garantit le droit a l'effacement et impose la minimisation des donnees collectees.", example: "Un bandeau de cookies avec les options Accepter / Refuser / Personnaliser" },
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
      { term: 'Customer Lifetime Value (CLV)', definition: "Valeur vie client : estimation du revenu total qu'un client genere pour l'entreprise sur toute la duree de leur relation. Formule simplifiee : panier moyen x frequence d'achat x duree de la relation.", example: "Un client depense 50 euros x 6 achats/an x 5 ans = CLV de 1 500 euros" },
      { term: 'Taux de retention', definition: "Pourcentage de clients conserves sur une periode donnee. Un taux eleve (> 90 %) indique une bonne fidelisation. C'est l'inverse du taux d'attrition.", example: "Si une entreprise a 1 000 clients en debut d'annee et en conserve 850 (hors nouveaux), son taux de retention est de 85 %" },
      { term: 'Experience client (CX) omnicanale', definition: "Ensemble des perceptions et emotions ressenties par le client a chaque interaction avec la marque, sur tous les canaux (magasin, site, appli, SAV). L'experience doit etre coherente et fluide quel que soit le canal.", example: "Commander sur l'appli, retirer en magasin, contacter le SAV par chat : meme qualite d'experience" },
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
