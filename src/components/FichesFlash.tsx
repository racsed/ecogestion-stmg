import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Flashcard {
  term: string;
  definition: string;
  example?: string;
}

interface FichesFlashProps {
  cards: Flashcard[];
  subjectColor: string;
  title: string;
}

export default function FichesFlash({ cards, subjectColor, title }: FichesFlashProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const [direction, setDirection] = useState(0);

  const card = cards[currentIndex];
  const progress = ((currentIndex + 1) / cards.length) * 100;

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const handleNext = useCallback((isKnown: boolean) => {
    if (isKnown) {
      setKnown(prev => new Set(prev).add(currentIndex));
    }
    setIsFlipped(false);
    setDirection(1);
    setTimeout(() => {
      if (currentIndex < cards.length - 1) {
        setCurrentIndex(prev => prev + 1);
      }
    }, 150);
  }, [currentIndex, cards.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setDirection(-1);
      setTimeout(() => {
        setCurrentIndex(prev => prev - 1);
      }, 150);
    }
  }, [currentIndex]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnown(new Set());
  }, []);

  if (currentIndex >= cards.length) {
    const knownCount = known.size;
    const pct = Math.round((knownCount / cards.length) * 100);
    
    return (
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center">
        <span className="text-5xl mb-4 block">{pct >= 80 ? '🎉' : pct >= 50 ? '💪' : '📚'}</span>
        <h3 className="font-display font-bold text-xl mb-2">Session terminée !</h3>
        <p className="text-gray-500 text-sm mb-6">
          Tu connais <strong>{knownCount}</strong> notions sur <strong>{cards.length}</strong> ({pct}%)
        </p>
        <button
          onClick={handleRestart}
          className="btn-primary text-sm px-6 py-3"
          style={{ background: subjectColor }}
        >
          🔄 Recommencer
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          {currentIndex + 1} / {cards.length}
        </span>
        <span className="text-xs font-semibold" style={{ color: subjectColor }}>
          ✅ {known.size} acquises
        </span>
      </div>
      
      {/* Progress */}
      <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden mb-6">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: subjectColor }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Card */}
      <div 
        className="relative cursor-pointer perspective-1000 mb-6"
        onClick={handleFlip}
        style={{ minHeight: '220px' }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentIndex}-${isFlipped}`}
            initial={{ opacity: 0, rotateY: isFlipped ? -90 : 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: isFlipped ? 90 : -90 }}
            transition={{ duration: 0.25 }}
            className={`rounded-3xl p-8 min-h-[220px] flex flex-col items-center justify-center text-center ${
              isFlipped 
                ? 'bg-white border-2 shadow-sm' 
                : 'text-white shadow-lg'
            }`}
            style={isFlipped 
              ? { borderColor: subjectColor + '40' } 
              : { background: `linear-gradient(135deg, ${subjectColor}, ${subjectColor}cc)` }
            }
          >
            {!isFlipped ? (
              <>
                <span className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-4">
                  Notion
                </span>
                <h3 className="font-display font-bold text-2xl leading-snug">
                  {card.term}
                </h3>
                <span className="mt-6 text-xs opacity-50">Touche pour révéler →</span>
              </>
            ) : (
              <>
                <span className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: subjectColor }}>
                  Définition
                </span>
                <p className="text-sm leading-relaxed text-gray-700 font-body">
                  {card.definition}
                </p>
                {card.example && (
                  <p className="mt-3 text-xs text-gray-400 italic">
                    Ex : {card.example}
                  </p>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      {isFlipped && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-3"
        >
          <button
            onClick={() => handleNext(false)}
            className="flex-1 py-3 rounded-2xl border-2 border-red-200 text-red-600 font-semibold text-sm hover:bg-red-50 transition-colors"
          >
            ❌ À revoir
          </button>
          <button
            onClick={() => handleNext(true)}
            className="flex-1 py-3 rounded-2xl border-2 border-emerald-200 text-emerald-600 font-semibold text-sm hover:bg-emerald-50 transition-colors"
          >
            ✅ Je sais !
          </button>
        </motion.div>
      )}

      {!isFlipped && (
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-4 py-2 rounded-xl text-sm text-gray-400 hover:text-gray-600 disabled:opacity-30 transition-colors"
          >
            ← Précédente
          </button>
          <button
            onClick={handleFlip}
            className="px-6 py-2.5 rounded-2xl text-sm font-semibold text-white transition-all hover:shadow-lg"
            style={{ backgroundColor: subjectColor }}
          >
            Révéler la réponse
          </button>
        </div>
      )}
    </div>
  );
}
