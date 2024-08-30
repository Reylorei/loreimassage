import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // 'es' es el valor predeterminado

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
