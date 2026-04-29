'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { en } from '@/locales/en';
import { pt } from '@/locales/pt';

type Language = 'en' | 'pt';
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function for deep merging with fallback to English
function getTranslations(lang: Language): Translations {
  const selected = lang === 'pt' ? pt : en;
  
  if (lang === 'en') return en;

  // Simple proxy-based fallback handler for missing keys
  const createProxy = (target: any, fallback: any): any => {
    return new Proxy(target, {
      get: (obj, prop) => {
        if (prop in obj) {
          const value = obj[prop];
          if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            return createProxy(value, fallback[prop] || {});
          }
          return value;
        }
        // Fallback to English if key is missing in selected language
        return fallback[prop];
      }
    });
  };

  return createProxy(selected, en);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    const savedLang = localStorage.getItem('axion-language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'pt')) {
      setLanguageState(savedLang);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en') {
        setLanguageState('en');
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('axion-language', lang);
    // Force a re-render/refresh if needed, though state update should be enough
  };

  const t = useMemo(() => getTranslations(language), [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
