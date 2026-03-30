import { useState, useMemo } from 'react';

interface Matiere {
  id: string;
  name: string;
  coef: number;
  category: 'continu' | 'epreuves' | 'terminal';
  color: string;
  emoji: string;
  maxNote?: number;
}

const MATIERES: Matiere[] = [
  // Contrôle continu (coef 8 total réparti)
  { id: 'eps', name: 'EPS', coef: 6, category: 'continu', color: '#ef4444', emoji: '🏃' },
  { id: 'emc', name: 'EMC', coef: 2, category: 'continu', color: '#f97316', emoji: '🏛️' },
  { id: 'hist-geo', name: 'Histoire-Géographie (bulletins)', coef: 6, category: 'continu', color: '#eab308', emoji: '🌍' },
  { id: 'lva-continu', name: 'LVA (bulletins)', coef: 6, category: 'continu', color: '#22c55e', emoji: '🇬🇧' },
  { id: 'lvb-continu', name: 'LVB (bulletins)', coef: 6, category: 'continu', color: '#06b6d4', emoji: '🇪🇸' },
  { id: 'maths-continu', name: 'Mathématiques (bulletins)', coef: 6, category: 'continu', color: '#8b5cf6', emoji: '🔢' },
  // Épreuves anticipées (Première)
  { id: 'francais-ecrit', name: 'Français écrit', coef: 5, category: 'epreuves', color: '#ec4899', emoji: '📝' },
  { id: 'francais-oral', name: 'Français oral', coef: 5, category: 'epreuves', color: '#ec4899', emoji: '🗣️' },
  // Épreuves terminales
  { id: 'philo', name: 'Philosophie', coef: 4, category: 'terminal', color: '#6366f1', emoji: '🤔' },
  { id: 'grand-oral', name: 'Grand Oral', coef: 14, category: 'terminal', color: '#f43f5e', emoji: '🎤' },
  { id: 'droit-eco', name: 'Droit-Économie', coef: 16, category: 'terminal', color: '#3b82f6', emoji: '⚖️' },
  { id: 'msdgn-spe', name: 'MSDGN (Spécialité)', coef: 16, category: 'terminal', color: '#ec4899', emoji: '🧩' },
  { id: 'maths-terminal', name: 'Mathématiques (épreuve)', coef: 8, category: 'terminal', color: '#8b5cf6', emoji: '📐' },
];

const TOTAL_COEF = MATIERES.reduce((sum, m) => sum + m.coef, 0);

export default function SimulateurBac() {
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleNoteChange = (id: string, value: string) => {
    const num = parseFloat(value);
    if (value === '' || (num >= 0 && num <= 20)) {
      setNotes(prev => ({ ...prev, [id]: value }));
    }
  };

  const { moyenne, totalPoints, totalCoefUsed, details } = useMemo(() => {
    let totalPts = 0;
    let totalCoef = 0;
    const det: { name: string; note: number; coef: number; points: number; color: string }[] = [];

    MATIERES.forEach(m => {
      const val = parseFloat(notes[m.id] || '');
      if (!isNaN(val)) {
        const pts = val * m.coef;
        totalPts += pts;
        totalCoef += m.coef;
        det.push({ name: m.name, note: val, coef: m.coef, points: pts, color: m.color });
      }
    });

    return {
      moyenne: totalCoef > 0 ? totalPts / totalCoef : 0,
      totalPoints: totalPts,
      totalCoefUsed: totalCoef,
      details: det,
    };
  }, [notes]);

  const getMention = (note: number) => {
    if (note >= 18) return { label: 'Très Bien', color: '#059669', emoji: '🏆' };
    if (note >= 16) return { label: 'Très Bien', color: '#059669', emoji: '🌟' };
    if (note >= 14) return { label: 'Bien', color: '#2563eb', emoji: '💪' };
    if (note >= 12) return { label: 'Assez Bien', color: '#7c3aed', emoji: '👍' };
    if (note >= 10) return { label: 'Admis', color: '#d97706', emoji: '✅' };
    if (note >= 8) return { label: 'Rattrapage', color: '#ea580c', emoji: '⚠️' };
    return { label: 'Non admis', color: '#dc2626', emoji: '❌' };
  };

  const mention = getMention(moyenne);
  const filledCount = Object.values(notes).filter(v => v !== '' && !isNaN(parseFloat(v))).length;

  const renderCategory = (category: string, label: string, emoji: string) => {
    const matieres = MATIERES.filter(m => m.category === category);
    return (
      <div className="mb-6">
        <h3 className="font-display font-bold text-sm text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span>{emoji}</span> {label}
        </h3>
        <div className="space-y-2">
          {matieres.map(m => (
            <div key={m.id} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 hover:border-gray-200 transition-colors">
              <span className="text-lg flex-shrink-0">{m.emoji}</span>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium truncate block">{m.name}</span>
                <span className="text-xs text-gray-400">coef. {m.coef}</span>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <input
                  type="number"
                  min="0"
                  max="20"
                  step="0.5"
                  placeholder="—"
                  value={notes[m.id] || ''}
                  onChange={(e) => handleNoteChange(m.id, e.target.value)}
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

  return (
    <div className="max-w-2xl mx-auto">
      {/* Score display */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 mb-6 text-center sticky top-20 z-10">
        <div className="flex items-center justify-center gap-6">
          <div>
            <div className="font-display font-extrabold text-4xl" style={{ color: mention.color }}>
              {filledCount > 0 ? moyenne.toFixed(2) : '—'}
            </div>
            <div className="text-xs text-gray-400 mt-1">/ 20</div>
          </div>
          {filledCount > 0 && (
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-xl">{mention.emoji}</span>
                <span className="font-display font-bold text-sm" style={{ color: mention.color }}>
                  {mention.label}
                </span>
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                {filledCount}/{MATIERES.length} matières · {totalCoefUsed}/{TOTAL_COEF} coefs
              </div>
            </div>
          )}
        </div>
        
        {/* Progress bar */}
        <div className="mt-4 h-2 rounded-full bg-gray-100 overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{ 
              width: `${Math.min((moyenne / 20) * 100, 100)}%`,
              backgroundColor: mention.color,
            }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-gray-300 mt-1 font-mono">
          <span>0</span>
          <span>8 🔄</span>
          <span>10 ✅</span>
          <span>12 AB</span>
          <span>14 B</span>
          <span>16 TB</span>
          <span>20</span>
        </div>
      </div>

      {/* Input sections */}
      {renderCategory('epreuves', 'Épreuves anticipées (Première)', '📋')}
      {renderCategory('terminal', 'Épreuves terminales', '🎓')}
      {renderCategory('continu', 'Contrôle continu', '📊')}

      {/* Info box */}
      <div className="mt-6 p-4 rounded-2xl bg-blue-50 border border-blue-100 text-sm text-blue-800">
        <p className="font-semibold mb-1">ℹ️ Comment ça marche ?</p>
        <p className="text-blue-600 text-xs leading-relaxed">
          Entre tes notes (réelles ou estimées) dans chaque matière. La moyenne est calculée automatiquement 
          avec les coefficients officiels du bac STMG 2025. Tu peux ne remplir que les matières qui t'intéressent.
          Total des coefficients : {TOTAL_COEF}.
        </p>
      </div>
    </div>
  );
}
