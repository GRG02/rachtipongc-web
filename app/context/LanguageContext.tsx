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

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  if (typeof window !== "undefined") {
    window.addEventListener("storage", callback);
  }
  return () => {
    listeners.delete(callback);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", callback);
    }
  };
}

function getSnapshot(): Language {
  if (typeof window === "undefined") return "th";
  try {
    const saved = localStorage.getItem("rc_lang");
    if (saved === "th" || saved === "en") return saved;
  } catch {
    // ignore
  }
  return "th";
}

function getServerSnapshot(): Language {
  return "th";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem("rc_lang", lang);
    } catch {
      // ignore
    }
    listeners.forEach((listener) => listener());
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
