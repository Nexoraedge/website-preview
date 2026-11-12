"use client";

import React, { useState, useEffect } from "react";
import { Globe, X, ArrowRight, Heart } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";

const CHOSEN_KEY = "adityam_lang_chosen";

export default function LanguageModal() {
  const [currentLang, setLang] = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLang, setHoveredLang] = useState<"en" | "hi" | null>(null);

  useEffect(() => {
    try {
      const alreadyChosen = localStorage.getItem(CHOSEN_KEY);
      if (!alreadyChosen) {
        // Small delay so page renders smoothly first
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 350);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore localStorage access restrictions in private tabs
    }
  }, []);

  const handleSelect = (lang: "en" | "hi") => {
    try {
      localStorage.setItem(CHOSEN_KEY, "true");
    } catch {
      // Ignore
    }
    setLang(lang);
    setIsOpen(false);
  };

  const handleDismiss = () => {
    try {
      localStorage.setItem(CHOSEN_KEY, "true");
    } catch {
      // Ignore
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lang-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-md animate-fadeIn"
    >
      <div className="relative w-full max-w-lg bg-[#0A1128] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-white overflow-hidden">
        {/* Ambient Top Glow Accent */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-48 bg-gradient-to-b from-blue-500/30 via-blue-600/10 to-transparent blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          aria-label="Close language selector"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-white/10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Brand Icon & Heading */}
        <div className="text-center relative z-10 mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 text-white shadow-lg border border-blue-400/30 mb-4">
            <Heart className="w-6 h-6 fill-white/20" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-[11px] font-bold uppercase tracking-wider mb-2.5">
            <Globe className="w-3.5 h-3.5" />
            <span>Language Preference / भाषा चयन</span>
          </div>

          <h2
            id="lang-modal-title"
            className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans"
          >
            Welcome to Adityam Niramayaa
          </h2>
          <p className="text-sm font-medium text-amber-300/90 mt-0.5">
            आदित्यम् निरामया: में आपका हार्दिक स्वागत है
          </p>

          <p className="text-xs text-slate-300 mt-2.5 max-w-sm mx-auto leading-relaxed">
            Please choose your preferred language to continue.
            <br />
            <span className="text-slate-400">कृपया जारी रखने के लिए अपनी भाषा चुनें।</span>
          </p>
        </div>

        {/* Language Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10 mb-6">
          {/* English Option */}
          <button
            onClick={() => handleSelect("en")}
            onMouseEnter={() => setHoveredLang("en")}
            onMouseLeave={() => setHoveredLang(null)}
            className={`group text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              currentLang === "en" || hoveredLang === "en"
                ? "bg-gradient-to-b from-blue-600/25 to-blue-900/35 border-blue-400/70 shadow-lg shadow-blue-950/60"
                : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.08]"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-300 font-extrabold text-sm flex items-center justify-center border border-blue-400/30">
                  EN
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-400/20 text-blue-200 border border-blue-400/30">
                  Global
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-blue-200 transition-colors">
                English
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Browse doctors, hospitals, NABL labs, and medicine delivery in English.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-blue-300 group-hover:text-white">
              <span>Continue in English</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Hindi Option */}
          <button
            onClick={() => handleSelect("hi")}
            onMouseEnter={() => setHoveredLang("hi")}
            onMouseLeave={() => setHoveredLang(null)}
            className={`group text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              currentLang === "hi" || hoveredLang === "hi"
                ? "bg-gradient-to-b from-amber-500/20 to-orange-950/30 border-amber-400/70 shadow-lg shadow-amber-950/60"
                : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.08]"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 font-extrabold text-base flex items-center justify-center border border-amber-400/30">
                  अ
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/30">
                  मातृभाषा
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                हिंदी (Hindi)
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                सभी स्वास्थ्य सेवाएं, विशेषज्ञ डॉक्टर्स, NABL लैब्स एवं रियायती दवाएं हिंदी में देखें।
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-amber-300 group-hover:text-white">
              <span>हिंदी में आगे बढ़ें</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Footnote about later switching */}
        <div className="relative z-10 text-center border-t border-white/10 pt-4">
          <p className="text-[11px] text-slate-400 leading-relaxed">
            You can switch anytime from the top bar switch (<span className="text-blue-300 font-medium">ENG / हिंदी</span>).
            <br />
            <span className="text-slate-500">आप मुख्य मेनू से किसी भी समय भाषा बदल सकते हैं।</span>
          </p>
        </div>
      </div>
    </div>
  );
}
