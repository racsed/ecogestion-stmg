# CLAUDE.md — ÉcoGestion STMG

## Projet
Plateforme pédagogique gratuite pour les élèves et enseignants de Première et Terminale STMG (Sciences et Technologies du Management et de la Gestion). Couvre toutes les matières du pôle Éco-Gestion : Droit, Économie, Management, MSDGN, Mercatique, SDGN.

**Créateur** : M. Seddar (professeur Éco-Gestion, Académie de Créteil, Drancy, Seine-Saint-Denis)

**URL** : `https://ecogestion-stmg.netlify.app`

---

## Stack technique

| Couche | Techno | Rôle |
|--------|--------|------|
| Framework | **Astro 5** | Site statique, Content Collections, SSG |
| UI interactive | **React 19** (Astro islands, `client:load`) | QCM, Fiches Flash, Simulateur |
| Animations | **Framer Motion 12** | Transitions, flip cards, progress |
| Style | **Tailwind CSS 3.4** | Utility-first, custom design tokens |
| Fonts | **Outfit** (display) + **Plus Jakarta Sans** (body) + **JetBrains Mono** (mono) | Google Fonts |
| Hébergement | **Netlify** | Static deploy, CI/CD via GitHub |
| CMS (Phase 2) | **Decap CMS** (ex-Netlify CMS) | Interface admin pour collègues |
| BDD (Phase 3) | **Supabase** | Auth, scores QCM, progression |

---

## Architecture fichiers

```
ecogestion-stmg/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/         # React components (islands)
│   │   ├── QCMEngine.tsx        # Moteur de quiz interactif
│   │   ├── FichesFlash.tsx      # Cartes de révision recto/verso
│   │   └── SimulateurBac.tsx    # Calculateur de note bac STMG
│   ├── data/               # Données structurées TypeScript
│   │   ├── subjects.ts          # Structure programme (matières, chapitres, notions)
│   │   ├── allQCM.ts            # Banque de questions QCM par chapitre
│   │   └── flashcards.ts        # Fiches flash par chapitre
│   ├── layouts/
│   │   └── Layout.astro         # Layout principal (nav + footer)
│   ├── pages/
│   │   ├── index.astro          # Landing page
│   │   ├── outils.astro         # Page outils
│   │   ├── outils/
│   │   │   └── simulateur.astro # Simulateur de note bac
│   │   ├── premiere/
│   │   │   ├── droit/
│   │   │   │   ├── index.astro                  # Liste chapitres Droit 1ère
│   │   │   │   └── quest-ce-que-le-droit.astro  # Chapitre démo complet
│   │   │   ├── economie/index.astro
│   │   │   ├── management/index.astro
│   │   │   └── sdgn/index.astro
│   │   └── terminale/
│   │       ├── droit/index.astro
│   │       ├── economie/index.astro
│   │       ├── mercatique/index.astro
│   │       └── msdgn/index.astro
│   └── styles/
│       └── global.css           # Tailwind + composants custom
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── netlify.toml
└── package.json
```

---

## Design system

### Couleurs par matière (Tailwind tokens)
| Matière | Token | Hex primaire | Usage |
|---------|-------|-------------|-------|
| Droit | `droit-*` | `#3b82f6` | Bleu |
| Économie | `eco-*` | `#10b981` | Vert émeraude |
| Management | `management-*` | `#f59e0b` | Orange/Amber |
| Mercatique | `mercatique-*` | `#8b5cf6` | Violet |
| MSDGN | `msdgn-*` | `#ec4899` | Rose/Pink |
| SDGN | `sdgn-*` | `#14b8a6` | Teal |

### Classes utilitaires custom
- `.subject-card` — Carte matière avec hover lift + gradient overlay
- `.chapter-card` — Carte chapitre blanche, border hover colorée
- `.badge` — Petit badge arrondi (niveau, compteur)
- `.btn-primary` — Bouton principal arrondi avec shadow hover
- `.gradient-text` — Texte dégradé bleu→violet→rose
- `.glass` — Fond glassmorphism (bg-white/70 + backdrop-blur)
- `.progress-bar` / `.progress-bar-fill` — Barre de progression
- `.stagger > *` — Animation d'entrée séquentielle (slideUp)

### Direction visuelle
Coloré & engageant, pensé pour des lycéens. Fond clair (`#FAFAF9`) avec gradients subtils. Cards blanches arrondies (`rounded-3xl`). Chaque matière identifiable par sa couleur. Animations subtiles (hover lift, stagger reveal).

---

## Données et contenu

### Structure du programme dans `subjects.ts`
Chaque `Subject` contient :
- `id`, `name`, `shortName`, `level` (premiere/terminale)
- `emoji`, `color`, `colorHex`, `gradientFrom/To`
- `chapters[]` : slug, title, theme, themeNumber, notions[], hasQCM, hasFiche, hasSujet
- `available` : true (Phase 1) ou false (Phase 2)

### Matières disponibles (Phase 1)
1. **Droit 1ère** — 8 chapitres, Thèmes 1-3
2. **Économie 1ère** — 8 chapitres, Thèmes 1-5
3. **Management 1ère** — 6 chapitres, Thèmes 1-2
4. **Droit Terminale** — 6 chapitres, Thèmes 5-7
5. **Économie Terminale** — 4 chapitres, Thèmes 8-10
6. **Mercatique Terminale** — 7 chapitres, Thèmes 1-3
7. **MSDGN Terminale** — 5 chapitres, Thèmes 1-3

### QCM (`allQCM.ts`)
Banque de ~120 questions au format :
```typescript
{ question: string, options: string[4], correct: number, explanation: string }
```
Chapitres couverts : 16 chapitres sur ~44 total. **Priorité : compléter les chapitres restants.**

### Fiches Flash (`flashcards.ts`)
Format : `{ term, definition, example? }[]` par slug de chapitre.
5 sets disponibles, **priorité : en ajouter pour chaque chapitre ayant un QCM.**

---

## Composants React

### `QCMEngine.tsx`
Props : `{ questions, subjectColor, chapterTitle }`
- Quiz séquentiel avec sélection unique
- Feedback immédiat (correct/incorrect + explication)
- Score animé en fin de quiz (cercle SVG)
- Grille récap des réponses
- Bouton recommencer
- Usage : `<QCMEngine client:load questions={...} subjectColor="#3b82f6" chapterTitle="..." />`

### `FichesFlash.tsx`
Props : `{ cards, subjectColor, title }`
- Flip cards (notion → définition)
- Boutons "À revoir" / "Je sais !"
- Compteur d'acquis
- Navigation avant/arrière
- Usage : `<FichesFlash client:load cards={...} subjectColor="#3b82f6" title="..." />`

### `SimulateurBac.tsx`
- 13 matières avec coefficients officiels bac STMG
- Calcul de moyenne pondérée en temps réel
- Barre de progression colorée
- Détection mention (Très Bien / Bien / AB / Admis / Rattrapage / Non admis)
- Sticky score header

---

## Comment ajouter du contenu

### Ajouter un nouveau chapitre complet

1. **Vérifier que le chapitre existe dans `subjects.ts`** (dans le tableau `chapters` du subject correspondant)

2. **Ajouter le QCM dans `allQCM.ts`** :
```typescript
'slug-du-chapitre': [
  { question: "...", options: ["A", "B", "C", "D"], correct: 1, explanation: "..." },
  // 5-10 questions par chapitre
],
```

3. **Ajouter les flashcards dans `flashcards.ts`** :
```typescript
'slug-du-chapitre': {
  cards: [
    { term: "Notion", definition: "Définition claire et concise.", example: "Optionnel" },
    // 6-12 cartes par chapitre
  ],
},
```

4. **Créer la page `.astro`** dans `src/pages/{level}/{matiere}/{slug}.astro` :
   - Copier le modèle de `quest-ce-que-le-droit.astro`
   - Adapter le `subject.id`, `chapter.slug`
   - Écrire la fiche de synthèse en HTML/prose dans la section dédiée
   - Les QCM et Fiches Flash se chargent automatiquement via les slugs

### Convention de slugs
Les slugs correspondent aux titres de chapitres en kebab-case sans accents :
- "Qu'est-ce que le droit ?" → `quest-ce-que-le-droit`
- "Le fonctionnement du marché" → `le-fonctionnement-du-marche`
- "La responsabilité" → `la-responsabilite`

---

## Commandes

```bash
npm run dev      # Dev server sur localhost:4321
npm run build    # Build statique dans dist/
npm run preview  # Preview du build local
```

---

## Prochaines étapes (par priorité)

### Phase 1 — Compléter le contenu
- [ ] Créer les pages chapitres pour TOUS les chapitres disponibles (copier le template quest-ce-que-le-droit.astro)
- [ ] Compléter les QCM manquants (28 chapitres sans QCM)
- [ ] Compléter les fiches flash manquantes
- [ ] Écrire les fiches de synthèse (le contenu cours) pour chaque chapitre
- [ ] Ajouter les sujets de bac avec corrigés (PDF téléchargeables)
- [ ] Intégrer les documents existants de M. Seddar (dossiers élèves, corrigés, synthèses)

### Phase 2 — SDGN + collègues + CMS
- [ ] Activer SDGN Première (mettre `available: true`, remplir le contenu)
- [ ] Ajouter les spécialités manquantes (Gestion Finance, RH Com, SIG)
- [ ] Installer Decap CMS (`/admin`) pour que les collègues contribuent
- [ ] Configurer le workflow Git pour les contributions
- [ ] Migrer le contenu vers Astro Content Collections (fichiers .md individuels)

### Phase 3 — Interactivité avancée
- [ ] Supabase Auth : comptes élèves avec email académique
- [ ] Sauvegarde des scores QCM dans Supabase
- [ ] Tableau de bord élève (progression par matière)
- [ ] Tableau de bord prof (stats de classe)
- [ ] Intégrer le Grand Oral tool directement dans le site (pas juste un lien externe)
- [ ] Fiches Flash avec algorithme de répétition espacée (Leitner)
- [ ] Mode examen : QCM chronométré type bac

---

## Conventions de code

- **Astro** pour toutes les pages statiques (`.astro`)
- **React** uniquement pour l'interactivité (`client:load`)
- **Tailwind** pour tout le style — pas de CSS modules
- Classes custom dans `global.css` pour les patterns répétés
- TypeScript strict partout
- Données en `.ts` (pas de JSON, pas de Markdown pour l'instant)
- Chaque composant React est un default export

## Notes
- Le site est 100% statique (SSG), pas de SSR
- Toutes les données sont en TypeScript, pas de CMS pour l'instant
- Le contenu vient des programmes officiels du Bulletin Officiel STMG
- Les QCM doivent toujours avoir 4 options avec une seule bonne réponse
- Les explications QCM doivent être pédagogiques et mentionner les concepts clés
- Les fiches de synthèse doivent commencer par un encart "Notions essentielles" avec les mots-clés du programme
