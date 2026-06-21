import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { normalizeLocale, supportedLocales, translations, type Locale, type TranslationResource } from "../configs/i18n";

const STORAGE_KEY = "luna-beauty-locale";
const DEFAULT_LOCALE: Locale = "vi";

type I18nContextValue = {
  locale: Locale;
  locales: typeof supportedLocales;
  t: TranslationResource;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  const storedLocale = normalizeLocale(window.localStorage.getItem(STORAGE_KEY) ?? undefined);

  if (storedLocale) {
    return storedLocale;
  }

  const browserLocale = normalizeLocale(window.navigator.language);

  return browserLocale ?? DEFAULT_LOCALE;
}

type I18nProviderProps = {
  children: ReactNode;
};

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      locales: supportedLocales,
      t: translations[locale],
      setLocale: setLocaleState
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}
