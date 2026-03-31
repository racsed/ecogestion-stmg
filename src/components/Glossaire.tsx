import { useState, useMemo } from 'react';

interface GlossaireEntry {
  term: string;
  definition: string;
  example?: string;
  subject: string;
  subjectColor: string;
  chapter: string;
}

interface GlossaireProps {
  entries: GlossaireEntry[];
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Glossaire({ entries }: GlossaireProps) {
  const [search, setSearch] = useState('');
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  // Extract unique subjects with their colors
  const subjects = useMemo(() => {
    const map = new Map<string, string>();
    for (const e of entries) {
      if (!map.has(e.subject)) map.set(e.subject, e.subjectColor);
    }
    return Array.from(map.entries()).map(([name, color]) => ({ name, color }));
  }, [entries]);

  // Filter entries
  const filtered = useMemo(() => {
    let result = entries;
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (e) =>
          e.term.toLowerCase().includes(q) ||
          e.definition.toLowerCase().includes(q)
      );
    }
    if (activeSubject) {
      result = result.filter((e) => e.subject === activeSubject);
    }
    if (activeLetter) {
      result = result.filter(
        (e) => e.term[0].toUpperCase() === activeLetter
      );
    }
    return result;
  }, [entries, search, activeSubject, activeLetter]);

  // Available letters in current filtered set (before letter filter)
  const availableLetters = useMemo(() => {
    let base = entries;
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      base = base.filter(
        (e) =>
          e.term.toLowerCase().includes(q) ||
          e.definition.toLowerCase().includes(q)
      );
    }
    if (activeSubject) {
      base = base.filter((e) => e.subject === activeSubject);
    }
    const set = new Set<string>();
    for (const e of base) {
      const first = e.term[0]?.toUpperCase();
      if (first) set.add(first);
    }
    return set;
  }, [entries, search, activeSubject]);

  // Group filtered entries by letter
  const grouped = useMemo(() => {
    const map = new Map<string, GlossaireEntry[]>();
    for (const e of filtered) {
      const letter = e.term[0].toUpperCase();
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(e);
    }
    return map;
  }, [filtered]);

  const clearFilters = () => {
    setSearch('');
    setActiveSubject(null);
    setActiveLetter(null);
  };

  const hasActiveFilters = search.trim() || activeSubject || activeLetter;

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un terme ou une definition..."
          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-lg transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Subject filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveSubject(null)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
            !activeSubject
              ? 'bg-gray-900 text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          Toutes les matieres
        </button>
        {subjects.map((s) => (
          <button
            key={s.name}
            onClick={() => setActiveSubject(activeSubject === s.name ? null : s.name)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all`}
            style={
              activeSubject === s.name
                ? { backgroundColor: s.color, color: '#fff', boxShadow: `0 4px 14px ${s.color}40` }
                : { backgroundColor: '#fff', color: s.color, border: `2px solid ${s.color}20` }
            }
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Alphabetical nav */}
      <div className="flex flex-wrap gap-1 justify-center">
        {ALPHABET.map((letter) => {
          const isAvailable = availableLetters.has(letter);
          const isActive = activeLetter === letter;
          return (
            <button
              key={letter}
              onClick={() => {
                if (isAvailable) {
                  setActiveLetter(activeLetter === letter ? null : letter);
                }
              }}
              disabled={!isAvailable}
              className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${
                isActive
                  ? 'bg-gray-900 text-white shadow-md scale-110'
                  : isAvailable
                  ? 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 hover:scale-105'
                  : 'bg-gray-50 text-gray-300 cursor-not-allowed'
              }`}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {/* Active filters summary + clear */}
      {hasActiveFilters && (
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span className="font-semibold text-gray-700">{filtered.length} terme{filtered.length !== 1 ? 's' : ''} trouve{filtered.length !== 1 ? 's' : ''}</span>
          <button
            onClick={clearFilters}
            className="text-blue-500 hover:text-blue-700 underline underline-offset-2 transition-colors"
          >
            Effacer les filtres
          </button>
        </div>
      )}

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-gray-500 text-lg">Aucun terme ne correspond a ta recherche.</p>
          <button
            onClick={clearFilters}
            className="mt-4 text-blue-500 hover:text-blue-700 underline underline-offset-2"
          >
            Reinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {ALPHABET.filter((l) => grouped.has(l)).map((letter) => (
            <div key={letter} id={`letter-${letter}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-900 text-white font-bold text-lg">
                  {letter}
                </span>
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-sm text-gray-400 font-medium">{grouped.get(letter)!.length} terme{grouped.get(letter)!.length !== 1 ? 's' : ''}</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {grouped.get(letter)!.map((entry, i) => (
                  <div
                    key={`${entry.term}-${i}`}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display font-bold text-gray-900 text-lg leading-tight">
                        {entry.term}
                      </h3>
                      <span
                        className="shrink-0 px-2.5 py-1 rounded-lg text-xs font-bold text-white"
                        style={{ backgroundColor: entry.subjectColor }}
                      >
                        {entry.subject}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">
                      {entry.definition}
                    </p>
                    {entry.example && (
                      <p className="text-sm text-gray-400 italic border-l-2 pl-3" style={{ borderColor: entry.subjectColor + '60' }}>
                        Ex : {entry.example}
                      </p>
                    )}
                    <p className="mt-3 text-xs text-gray-400 font-medium">
                      {entry.chapter}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
