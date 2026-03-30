import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QCMEngineProps {
  questions: Question[];
  subjectColor: string;
  chapterTitle: string;
}

export default function QCMEngine({ questions, subjectColor, chapterTitle }: QCMEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));

  const currentQ = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleSelect = useCallback((index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    setAnsweredCount(prev => prev + 1);
    
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
    
    if (index === currentQ.correct) {
      setScore(prev => prev + 1);
    }
  }, [selectedAnswer, currentQ.correct, currentIndex, answers]);

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  }, [currentIndex, questions.length]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredCount(0);
    setIsFinished(false);
    setAnswers(new Array(questions.length).fill(null));
  }, [questions.length]);

  const getScoreMessage = () => {
    const pct = (score / questions.length) * 100;
    if (pct === 100) return { emoji: '🏆', text: 'Parfait ! Tu maîtrises ce chapitre !' };
    if (pct >= 80) return { emoji: '🌟', text: 'Excellent ! Quasi parfait !' };
    if (pct >= 60) return { emoji: '💪', text: 'Bien joué ! Continue comme ça !' };
    if (pct >= 40) return { emoji: '📚', text: 'Pas mal, mais revois certaines notions.' };
    return { emoji: '🔄', text: 'Courage ! Relis le cours et retente.' };
  };

  const getOptionClass = (index: number) => {
    const base = 'w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 font-body text-sm leading-relaxed';
    
    if (selectedAnswer === null) {
      return `${base} border-gray-200 hover:border-gray-300 hover:bg-gray-50 cursor-pointer active:scale-[0.98]`;
    }
    
    if (index === currentQ.correct) {
      return `${base} border-emerald-400 bg-emerald-50 text-emerald-900`;
    }
    
    if (index === selectedAnswer && index !== currentQ.correct) {
      return `${base} border-red-400 bg-red-50 text-red-900`;
    }
    
    return `${base} border-gray-100 bg-gray-50/50 text-gray-400`;
  };

  if (isFinished) {
    const msg = getScoreMessage();
    const pct = Math.round((score / questions.length) * 100);
    
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="text-center px-8 py-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="text-7xl mb-6"
          >
            {msg.emoji}
          </motion.div>
          
          <h3 className="font-display font-bold text-2xl mb-2">QCM terminé !</h3>
          <p className="text-gray-500 mb-8">{msg.text}</p>
          
          {/* Score circle */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#f3f4f6" strokeWidth="8" />
              <motion.circle
                cx="60" cy="60" r="50" fill="none"
                stroke={pct >= 60 ? '#10b981' : pct >= 40 ? '#f59e0b' : '#ef4444'}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 50}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 50 * (1 - pct / 100) }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display font-extrabold text-3xl">{score}</span>
              <span className="text-gray-400 text-xs font-medium">/ {questions.length}</span>
            </div>
          </div>

          {/* Recap */}
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 max-w-md mx-auto mb-8">
            {answers.map((ans, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                  ans === questions[i].correct
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={handleRestart}
              className="btn-primary text-sm px-6 py-3"
              style={{ background: `linear-gradient(135deg, ${subjectColor}, ${subjectColor}dd)` }}
            >
              🔄 Recommencer
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Question {currentIndex + 1} / {questions.length}
          </span>
          <span className="badge text-xs" style={{ background: `${subjectColor}15`, color: subjectColor }}>
            Score : {score}/{answeredCount}
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="progress-bar">
          <motion.div
            className="progress-bar-fill"
            style={{ backgroundColor: subjectColor }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      </div>
      
      {/* Question */}
      <div className="px-6 pb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <h3 className="font-display font-bold text-lg sm:text-xl mb-6 leading-snug">
              {currentQ.question}
            </h3>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={getOptionClass(index)}
                  whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                  layout
                >
                  <div className="flex items-start gap-3">
                    <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                      selectedAnswer === null
                        ? 'bg-gray-100 text-gray-500'
                        : index === currentQ.correct
                          ? 'bg-emerald-400 text-white'
                          : index === selectedAnswer
                            ? 'bg-red-400 text-white'
                            : 'bg-gray-100 text-gray-400'
                    }`}>
                      {selectedAnswer !== null && index === currentQ.correct ? '✓' 
                       : selectedAnswer === index && index !== currentQ.correct ? '✗' 
                       : String.fromCharCode(65 + index)}
                    </span>
                    <span className="pt-0.5">{option}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    selectedAnswer === currentQ.correct
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                      : 'bg-amber-50 border border-amber-200 text-amber-800'
                  }`}>
                    <p className="font-semibold mb-1">
                      {selectedAnswer === currentQ.correct ? '✅ Bonne réponse !' : '❌ Mauvaise réponse'}
                    </p>
                    <p>{currentQ.explanation}</p>
                  </div>

                  <button
                    onClick={handleNext}
                    className="mt-4 w-full btn-primary justify-center text-sm py-3"
                    style={{ background: `linear-gradient(135deg, ${subjectColor}, ${subjectColor}dd)` }}
                  >
                    {currentIndex < questions.length - 1 ? 'Question suivante →' : 'Voir le résultat 🎯'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
