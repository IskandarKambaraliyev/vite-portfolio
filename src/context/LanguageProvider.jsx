import { createContext, useState, useContext } from 'react';
import { languageOptions, dictionaryList } from "../locales";

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en
});

export function Text({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
}

// it provides the language context to app
export function LanguageProvider({ children }) {
    const defaultLanguage = window.localStorage.getItem('site-lang');
    const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');
  
    const provider = {
      userLanguage,
      dictionary: dictionaryList[userLanguage],
      userLanguageChange: selected => {
        const newLanguage = languageOptions[selected] ? selected : 'en'
        setUserLanguage(newLanguage);
        window.localStorage.setItem('site-lang', newLanguage);
      }
    };
  
    return (
      <LanguageContext.Provider value={provider}>
        {children}
      </LanguageContext.Provider>
    );
  };