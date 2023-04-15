
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguageContext = () => useContext(LanguageContext);

export function LanguageProvider({children}){
    const [language, setLanguage] = useState('es');

    const toggleLanguage = () =>{
        setLanguage(language === 'es' ? 'en' : 'es')
    }

    return(
        <LanguageContext.Provider value = {{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
