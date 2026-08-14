"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { content, Locale } from "./content";

type Ctx = {
  locale: Locale;
  toggleLocale: () => void;
  t: (typeof content)["en"];
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("noor-locale") as Locale | null;
    if (stored === "en" || stored === "ar") setLocale(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = content[locale].dir;
    window.localStorage.setItem("noor-locale", locale);
  }, [locale]);

  const toggleLocale = () => setLocale((prev) => (prev === "en" ? "ar" : "en"));

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t: content[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
