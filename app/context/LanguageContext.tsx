"use client";

import * as React from "react";

export type Language = "th" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (thText: string, enText: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType>({
  language: "th",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (th) => th,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("th");

  React.useEffect(() => {
    const saved = localStorage.getItem("rc_lang") as Language | null;
    if (saved === "th" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("rc_lang", lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "th" ? "en" : "th");
  };

  const t = (thText: string, enText: string) => {
    return language === "th" ? thText : enText;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return React.useContext(LanguageContext);
}
