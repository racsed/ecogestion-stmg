import { useState, useMemo } from 'react';

interface Matiere {
  id: string;
  name: string;
  coef: number;
  category: 'anticipees' | 'terminales' | 'continu' | 'options';
  color: string;
  emoji: string;
  info?: string;
}

const MATIERES: Matiere[] = [
  // Epreuves anticipees (Premiere)
  { id: 'francais-ecrit', name: 'Francais ecrit', coef: 5, category: 'anticipees', color: '#ec4899', emoji: '📝' },
  { id: 'francais-oral', name: 'Francais oral', coef: 5, category: 'anticipees', color: '#ec4899', emoji: '🗣️' },

  // Epreuves terminales
  { id: 'philo', name: 'Philosophie', coef: 4, category: 'terminales', color: '#6366f1', emoji: '🤔' },
  { id: 'grand-oral', name: 'Grand Oral', coef: 14, category: 'terminales', color: '#f43f5e', emoji: '🎤', info: '20 min de preparation + 20 min de passage' },
  { id: 'droit-eco', name: 'Droit-Economie', coef: 16, category: 'terminales', color: '#3b82f6', emoji: '⚖️', info: 'Epreuve ecrite de 4h' },
  { id: 'msdgn-spe', name: 'Management, Sciences de gestion et numerique', coef: 16, category: 'terminales', color: '#ec4899', emoji: '🧩', info: 'Epreuve ecrite de 4h' },

  // Controle continu (moyennes des bulletins de 1ere et Terminale)
  { id: 'hist-geo', name: 'Histoire-Geographie', coef: 6, category: 'continu', color: '#eab308', emoji: '🌍', info: 'Moyenne des bulletins de 1ere et Terminale' },
  { id: 'lva', name: 'Langue vivante A', coef: 6, category: 'continu', color: '#22c55e', emoji: '🇬🇧' },
  { id: 'lvb', name: 'Langue vivante B', coef: 6, category: 'continu', color: '#06b6d4', emoji: '🇪🇸' },
  { id: 'etlv', name: 'ETLV (enseignement techno en LV)', coef: 2, category: 'continu', color: '#14b8a6', emoji: '🌐', info: 'Enseignement technologique en langue vivante' },
  { id: 'maths', name: 'Mathematiques', coef: 6, category: 'continu', color: '#8b5cf6', emoji: '🔢' },
  { id: 'eps', name: 'EPS', coef: 6, category: 'continu', color: '#ef4444', emoji: '🏃', info: 'Controle en cours de formation (CCF)' },
  { id: 'emc', name: 'Enseignement moral et civique', coef: 2, category: 'continu', color: '#f97316', emoji: '🏛️' },

  // Options (bonus : seuls les points au-dessus de 10 comptent)
  { id: 'option1', name: 'Option 1 (si choisie)', coef: 4, category: 'options', color: '#a3a3a3', emoji: '🎯', info: 'Seuls les points au-dessus de 10 comptent (coef 4 pour la 1ere option suivie depuis la 1ere)' },
  { id: 'option2', name: 'Option 2 (si choisie)', coef: 2, category: 'options', color: '#a3a3a3', emoji: '🎯', info: 'Seuls les points au-dessus de 10 comptent (coef 2 pour les autres options)' },
];

const BASE_MATIERES = MATIERES.filter(m => m.category !== 'options');
const OPTION_MATIERES = MATIERES.filter(m => m.category === 'options');
const TOTAL_COEF = BASE_MATIERES.reduce((sum, m) => sum + m.coef, 0); // 100

export default function SimulateurBac() {
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [showOptions, setShowOptions] = useState(false);

  const handleNoteChange = (id: string, value: string) => {
    const num = parseFloat(value);
    if (value === '' || (num >= 0 && num <= 20)) {
      setNotes(prev => ({ ...prev, [id]: value }));
    }
  };

  const { moyenne, totalPoints, totalCoefUsed, bonusPoints } = useMemo(() => {
    let totalPts = 0;
    let totalCoef = 0;
    let bonus = 0;

    // Matieres obligatoires
    BASE_MATIERES.forEach(m => {
      const val = parseFloat(notes[m.id] || '');
      if (!isNaN(val)) {
        totalPts += val * m.coef;
        totalCoef += m.coef;
      }
    });

    // Options (seuls les points au-dessus de 10 comptent)
    if (showOptions) {
      OPTION_MATIERES.forEach(m => {
        const val = parseFloat(notes[m.id] || '');
        if (!isNaN(val) && val > 10) {
          bonus += (val - 10) * m.coef;
        }
      });
    }

    const moy = totalCoef > 0 ? (totalPts + bonus) / totalCoef : 0;

    return {
      moyenne: moy,
      totalPoints: totalPts + bonus,
      totalCoefUsed: totalCoef,
      bonusPoints: bonus,
    };
  }, [notes, showOptions]);

  const getMention = (note: number) => {
    if (note >= 18) return { label: 'Felicitations du jury', color: '#059669', emoji: '🏆', bg: '#ecfdf5' };
    if (note >= 16) return { label: 'Tres Bien', color: '#059669', emoji: '🌟', bg: '#ecfdf5' };
    if (note >= 14) return { label: 'Bien', color: '#2563eb', emoji: '💪', bg: '#eff6ff' };
    if (note >= 12) return { label: 'Assez Bien', color: '#7c3aed', emoji: '👍', bg: '#faf5ff' };
    if (note >= 10) return { label: 'Admis', color: '#d97706', emoji: '✅', bg: '#fffbeb' };
    if (note >= 8) return { label: 'Rattrapage (oral du 2nd groupe)', color: '#ea580c', emoji: '⚠️', bg: '#fff7ed' };
    return { label: 'Non admis', color: '#dc2626', emoji: '❌', bg: '#fef2f2' };
  };

  const mention = getMention(moyenne);
  const filledCount = Object.values(notes).filter(v => v !== '' && !isNaN(parseFloat(v))).length;
  const progress = Math.min((moyenne / 20) * 100, 100);

  const renderCategory = (category: string, label: string, emoji: string, description: string) => {
    const matieres = MATIERES.filter(m => m.category === category);
    if (category === 'options' && !showOptions) return null;
    const catCoef = matieres.reduce((s, m) => s + m.coef, 0);

    return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-bold text-sm text-gray-500 uppercase tracking-wider flex items-center gap-2">
            <span>{emoji}</span> {label}
          </h3>
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">
            {category === 'options' ? 'Bonus' : `Coef. ${catCoef}`}
          </span>
        </div>
        <p className="text-xs text-gray-400 mb-3">{description}</p>
        <div className="space-y-2">
          {matieres.map(m => (
            <div key={m.id} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 hover:border-gray-200 transition-colors group">
              <span className="text-lg flex-shrink-0">{m.emoji}</span>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium block leading-tight">{m.name}</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-gray-400">
                    {category === 'options' ? 'bonus' : `coef. ${m.coef}`}
                  </span>
                  {m.info && (
                    <span className="text-[10px] text-gray-300 hidden group-hover:inline">
                      {m.info}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <input
                  type="number"
                  min="0"
                  max="20"
                  step="0.5"
                  placeholder="--"
                  value={notes[m.id] || ''}
                  onChange={(e) => handleNoteChange(m.id, e.target.value)}
                  aria-label={`Note pour ${m.name}`}
                  className="w-16 h-9 text-center text-sm font-mono font-semibold rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  style={{ borderColor: notes[m.id] ? m.color + '60' : undefined }}
                />
                <span className="text-xs text-gray-400 w-5">/ 20</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleReset = () => {
    setNotes({});
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Score sticky */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 mb-6 sticky top-20 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="text-center">
              <div className="font-display font-extrabold text-4xl" style={{ color: filledCount > 0 ? mention.color : '#d1d5db' }}>
                {filledCount > 0 ? moyenne.toFixed(2) : '--'}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">/ 20</div>
            </div>
            {filledCount > 0 && (
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{mention.emoji}</span>
                  <span className="font-display font-bold text-sm" style={{ color: mention.color }}>
                    {mention.label}
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {filledCount}/{BASE_MATIERES.length} matieres
                  {bonusPoints > 0 && ` · +${bonusPoints.toFixed(1)} pts bonus`}
                </div>
              </div>
            )}
          </div>
          {filledCount > 0 && (
            <button
              onClick={handleReset}
              className="text-xs text-gray-400 hover:text-gray-600 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
            >
              Reinitialiser
            </button>
          )}
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-2.5 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${filledCount > 0 ? progress : 0}%`,
              backgroundColor: mention.color,
            }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-gray-300 mt-1.5 px-0.5">
          <span>0</span>
          <span className="text-orange-300">8</span>
          <span className="text-amber-400">10</span>
          <span className="text-violet-400">12</span>
          <span className="text-blue-400">14</span>
          <span className="text-emerald-400">16</span>
          <span>20</span>
        </div>
      </div>

      {/* Matieres */}
      {renderCategory('anticipees', 'Epreuves anticipees (1ere)', '📋', 'Passees en fin de Premiere. Notes conservees pour le bac.')}
      {renderCategory('terminales', 'Epreuves terminales', '🎓', 'Passees en Terminale. Ce sont les plus gros coefficients.')}
      {renderCategory('continu', 'Controle continu', '📊', 'Moyennes des bulletins scolaires de Premiere et Terminale.')}

      {/* Options toggle */}
      <div className="mb-8">
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
        >
          <span className={`inline-flex items-center justify-center w-5 h-5 rounded border-2 transition-colors ${showOptions ? 'bg-violet-500 border-violet-500 text-white' : 'border-gray-300'}`}>
            {showOptions && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
          </span>
          J'ai pris des options facultatives
        </button>
        {showOptions && renderCategory('options', 'Options facultatives', '🎯', 'Seuls les points au-dessus de 10 comptent. Bonus ajoute a la moyenne.')}
      </div>

      {/* Info */}
      <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 text-sm">
        <p className="font-display font-semibold text-blue-800 mb-2">Comment ca marche ?</p>
        <ul className="text-blue-600 text-xs leading-relaxed space-y-1.5">
          <li>Entre tes notes reelles ou estimees dans chaque matiere</li>
          <li>La moyenne est calculee avec les <strong>coefficients officiels du bac STMG</strong></li>
          <li>Total des coefficients obligatoires : <strong>{TOTAL_COEF}</strong></li>
          <li>Les options ajoutent des points bonus (seuls les points au-dessus de 10 comptent)</li>
          <li>Entre 8 et 10 : rattrapage (oral du 2nd groupe sur 2 matieres au choix)</li>
        </ul>
      </div>
    </div>
  );
}
