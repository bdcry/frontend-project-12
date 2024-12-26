import leoProfanity from 'leo-profanity';
import { createContext, useMemo } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const filter = useMemo(() => {
    const russianWords = leoProfanity.getDictionary('ru');
    const englishWords = leoProfanity.getDictionary('en');
    const combinedWords = [...russianWords, ...englishWords];
    leoProfanity.addDictionary('multiLang', combinedWords);
    leoProfanity.loadDictionary('multiLang');
    return leoProfanity;
  }, []);

  return (
    <FilterContext.Provider value={filter}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
