"use client";

import { useSyncExternalStore, useCallback } from "react";

export type Language = "en" | "hi";

const STORAGE_KEY = "adityam_lang";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }
  window.addEventListener("adityam_lang_change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("adityam_lang_change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Language {
  if (typeof window === "undefined") {
    return "en";
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "hi") {
      return saved;
    }
  } catch {
    // Ignore storage errors in private browsing/sandboxes
  }
  return "en";
}

function getServerSnapshot(): Language {
  return "en";
}

export function useLanguage(): [Language, (lang: Language) => void] {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = useCallback((newLang: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      window.dispatchEvent(new CustomEvent("adityam_lang_change", { detail: newLang }));
    } catch {
      // Ignore
    }
  }, []);

  return [lang, setLanguage];
}
