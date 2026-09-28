// src/context/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguageState] = useState(() => {
        const saved = localStorage.getItem('advocate_lang');
        return saved === 'en' ? 'en' : 'hi'; // Default to Hindi as preferred
    });

    const setLanguage = (lang) => {
        setLanguageState(lang);
        localStorage.setItem('advocate_lang', lang);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'hi' ? 'en' : 'hi');
    };

    const t = translations[language] || translations.hi;

    useEffect(() => {
        document.documentElement.lang = language === 'hi' ? 'hi' : 'en';
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
