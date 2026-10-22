"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  MapPin,
  ChevronDown,
  Sparkles,
  Smartphone,
  Building2,
  Stethoscope,
  FlaskConical,
  Pill,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Heart,
} from "lucide-react";

interface NavbarProps {
  lang?: "en" | "hi";
  onToggleLang?: (lang: "en" | "hi") => void;
  onOpenBooking?: () => void;
  onOpenPartner?: () => void;
  onOpenApp?: () => void;
  onOpenVision?: () => void;
}

const CITIES = ["Jaipur", "Delhi NCR", "Mumbai", "Ahmedabad", "Indore", "Bengaluru"];

export default function Navbar({
  lang = "en",
  onToggleLang,
  onOpenBooking,
  onOpenPartner,
  onOpenApp,
  onOpenVision,
}: NavbarProps) {
  const [selectedCity, setSelectedCity] = useState("Jaipur");
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock background scroll when mobile menu is full-screen open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && (window as unknown as { lenis?: { stop: () => void } }).lenis) {
        (window as unknown as { lenis?: { stop: () => void } }).lenis?.stop();
      }
    } else {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && (window as unknown as { lenis?: { start: () => void } }).lenis) {
        (window as unknown as { lenis?: { start: () => void } }).lenis?.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && (window as unknown as { lenis?: { start: () => void } }).lenis) {
        (window as unknown as { lenis?: { start: () => void } }).lenis?.start();
      }
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full font-sans shadow-xl bg-[#172554]">
      {/* Scoped CSS for Uiverse.io JulanDeAlb Animated SVG Morphing Hamburger */}
      <style jsx global>{`
        .uiverse-hamburger {
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 14px;
          transition: background-color 0.25s ease, transform 0.15s ease;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .uiverse-hamburger:hover {
          background-color: rgba(255, 255, 255, 0.16);
        }

        .uiverse-hamburger:active {
          transform: scale(0.95);
        }

        .uiverse-hamburger input {
          display: none;
        }

        .uiverse-hamburger svg {
          height: 2.3em;
          width: 2.3em;
          transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .uiverse-hamburger .line {
          fill: none;
          stroke: white;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 3;
          transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .uiverse-hamburger .line-top-bottom {
          stroke-dasharray: 12 63;
        }

        .uiverse-hamburger input:checked + svg {
          transform: rotate(-45deg);
        }

        .uiverse-hamburger input:checked + svg .line-top-bottom {
          stroke-dasharray: 20 300;
          stroke-dashoffset: -32.42;
        }
      `}</style>

      {/* Top Auspicious & Emergency Strip (Ultra Dark Blue) */}
      <div className="bg-[#0B1221] text-white/80 text-[11px] sm:text-xs py-2">
        <div
          className="w-full flex flex-wrap items-center justify-between gap-3"
          style={{
            paddingLeft: "max(1rem, calc((100% - 80rem) / 2))",
            paddingRight: "max(1rem, calc((100% - 80rem) / 2))",
          }}
        >
          {/* Left Side: Language Toggle + Spiritual Foundation */}
          <div className="flex items-center gap-3">
            {/* English / Hindi Toggle */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/20 text-[10px] font-bold">
              <button
                type="button"
                onClick={() => onToggleLang?.("en")}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${lang === "en"
                  ? "bg-amber-400 text-[#0B1221] shadow-xs"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                ENG
              </button>
              <button
                type="button"
                onClick={() => onToggleLang?.("hi")}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${lang === "hi"
                  ? "bg-amber-400 text-[#0B1221] shadow-xs"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                हिंदी
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
              </span>
              <span className="font-medium tracking-wide flex items-center gap-2 text-white/90">
                <span>
                  {lang === "hi"
                    ? "हर कदम बेहतर स्वास्थ्य की ओर"
                    : "Every Step Toward Better Health"}
                </span>
                <span className="text-white/30 hidden sm:block">•</span>
                <button
                  type="button"
                  onClick={onOpenVision}
                  className="text-amber-400 hover:text-amber-300 transition-colors hidden sm:flex items-center gap-1.5 cursor-pointer"
                >
                  <span>
                    {lang === "hi"
                      ? "मुनि श्री आदित्य सागर जी महाराज की पावन प्रेरणा"
                      : "Inspired by Muni Aditya Sagar Ji Maharaj"}
                  </span>
                </button>
              </span>
            </div>
          </div>

          {/* Right Side: Location & Emergency SOS */}
          <div className="flex items-center gap-3">
            {/* City Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-medium">{selectedCity}</span>
                <ChevronDown className="w-3 h-3 text-white/40" />
              </button>

              {isCityDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-[#172554] rounded-xl shadow-2xl border border-gray-100 py-1.5 z-50">
                  {CITIES.map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => {
                        setSelectedCity(city);
                        setIsCityDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold hover:bg-blue-50 transition-colors flex justify-between items-center cursor-pointer"
                    >
                      {city}
                      {selectedCity === city && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#172554]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 24/7 Helpline */}
            <a
              href="tel:18002081008"
              className="flex items-center gap-1.5 text-white bg-rose-600/90 hover:bg-rose-600 px-3 py-1 rounded-full font-medium transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
              <span className="hidden sm:inline">SOS: 1800-208-1008</span>
              <span className="sm:hidden">SOS</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Full-Blue Navbar with Flawless Flex-Curve */}
      <div className="w-full relative border-b border-[#172554]/80 flex items-stretch">
        {/* LEFT SECTION: White Background + Logo + Balanced Brand Name (No plain gap!) */}
        <div
          className="bg-white relative z-10 flex items-center justify-center rounded-br-[2rem] sm:rounded-br-[2.5rem] md:rounded-br-[4rem] shadow-[4px_0_20px_rgba(0,0,0,0.12)] px-3.5 sm:px-6 md:pr-12 shrink-0"
          style={{ paddingLeft: "max(1rem, calc((100% - 80rem) / 2))" }}
        >
          <div className="flex items-center gap-2.5 sm:gap-3 py-2 sm:py-3">
            {/* The Logo Container */}
            <div className="relative w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-white overflow-hidden shrink-0">
              <Image
                src="/images/logo-an.png"
                alt="Adityam Niramayaa Logo"
                fill
                sizes="48px"
                className="object-contain scale-110"
                priority
              />
            </div>

            {/* Brand Text: Visible on both mobile and desktop to cleanly eliminate the plain gap */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-lg md:text-xl font-bold tracking-tight text-[#172554] leading-tight">
                  Adityam Niramayaa
                </span>
              </div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium tracking-wider uppercase leading-none mt-0.5">
                {lang === "hi" ? "आदित्यम् निरामया — सबके लिए" : "Healthcare for Everyone"}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION: Blue Background + Nav Links + JulanDeAlb Hamburger */}
        <div
          className="flex-1 flex items-center justify-end lg:justify-between py-2 sm:py-3 pl-3 md:pl-8 pr-3 sm:pr-6"
          style={{ paddingRight: "max(1rem, calc((100% - 80rem) / 2))" }}
        >
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-blue-50/90">
            <a href="#doctors" className="hover:text-white transition-colors">
              {lang === "hi" ? "डॉक्टर्स (OPD)" : "Doctors"}
            </a>
            <a href="#diagnostics" className="hover:text-white transition-colors">
              {lang === "hi" ? "लैब जांच" : "Diagnostics"}
            </a>
            <a href="#pharmacy" className="hover:text-white transition-colors">
              {lang === "hi" ? "दवाइयां" : "Pharmacy"}
            </a>
            <a href="#hospitals" className="hover:text-white transition-colors">
              {lang === "hi" ? "सहयोगी अस्पताल" : "Partner Hospitals"}
            </a>
          </nav>

          {/* Action CTAs (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenPartner}
              className="px-4 py-2 text-xs font-semibold text-white/90 hover:text-white border border-white/20 hover:bg-white/10 rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{lang === "hi" ? "नेटवर्क से जुड़ें" : "Join Network"}</span>
            </button>
            <button
              type="button"
              onClick={onOpenApp}
              className="px-5 py-2 text-xs font-bold text-[#172554] bg-white hover:bg-blue-50 rounded-full shadow-lg shadow-black/10 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>{lang === "hi" ? "ऐप डाउनलोड करें" : "Get the App"}</span>
            </button>
          </div>

          {/* Uiverse.io JulanDeAlb Animated SVG Hamburger */}
          <div className="lg:hidden flex items-center">
            <label className="uiverse-hamburger">
              <input
                type="checkbox"
                checked={isMobileMenuOpen}
                onChange={(e) => setIsMobileMenuOpen(e.target.checked)}
                aria-label="Toggle Navigation Menu"
              />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                />
                <path className="line" d="M7 16 27 16" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* ==============================================================
          FULL-SCREEN ULTRA-SMOOTH ANIMATED MOBILE MENU
      ============================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{
              opacity: 0,
              y: -20,
              transition: { duration: 0.25, ease: [0.7, 0, 0.84, 0] },
            }}
            className="fixed inset-0 top-0 left-0 w-full h-[100dvh] z-50 bg-[#071126]/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Bar of Full-Screen Menu */}
            <div className="w-full bg-[#0A1633] border-b border-white/10 px-4 py-3 flex items-center justify-between shrink-0">
              {/* Brand Logo & Name */}
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white p-1 shrink-0">
                  <Image
                    src="/images/logo-an.png"
                    alt="Logo"
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-tight">
                    Adityam Niramayaa
                  </div>
                  <div className="text-[9px] text-cyan-300 font-medium uppercase tracking-wider">
                    {lang === "hi" ? "आदित्यम् निरामया" : "Healthcare for Everyone"}
                  </div>
                </div>
              </div>

              {/* Connected Morphing Hamburger (Turned into 'X') */}
              <label className="uiverse-hamburger">
                <input
                  type="checkbox"
                  checked={isMobileMenuOpen}
                  onChange={(e) => setIsMobileMenuOpen(e.target.checked)}
                  aria-label="Close Navigation Menu"
                />
                <svg viewBox="0 0 32 32">
                  <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  />
                  <path className="line" d="M7 16 27 16" />
                </svg>
              </label>
            </div>

            {/* Middle Nav Items (Staggered Animation) */}
            <div className="flex-1 px-5 py-6 flex flex-col justify-center space-y-3">
              {/* Language & City Strip inside Full Screen Menu */}
              <div className="flex items-center justify-between bg-white/5 p-2 rounded-2xl border border-white/10 mb-2">
                <div className="flex items-center bg-white/10 rounded-xl p-0.5 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => onToggleLang?.("en")}
                    className={`px-3 py-1 rounded-lg transition-all ${lang === "en" ? "bg-amber-400 text-slate-950 font-bold" : "text-white/80"}`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => onToggleLang?.("hi")}
                    className={`px-3 py-1 rounded-lg transition-all ${lang === "hi" ? "bg-amber-400 text-slate-950 font-bold" : "text-white/80"}`}
                  >
                    हिंदी
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-bold px-3 py-1 bg-amber-400/10 rounded-xl border border-amber-400/20">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedCity}</span>
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-2">
                <a
                  href="#doctors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 text-white transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-cyan-300 border border-cyan-400/30 flex items-center justify-center shrink-0">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        {lang === "hi" ? "डॉक्टर्स एवं ओपीडी परामर्श" : "Doctors & OPD Consultations"}
                      </div>
                      <div className="text-[11px] text-slate-400 font-light">
                        {lang === "hi" ? "वरिष्ठ एमडी एवं विशेषज्ञ" : "Priority super-specialist slots"}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="#diagnostics"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 text-white transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center shrink-0">
                      <FlaskConical className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        {lang === "hi" ? "प्रमाणित लैब जांच एवं टेस्ट" : "Accredited Diagnostics & Labs"}
                      </div>
                      <div className="text-[11px] text-slate-400 font-light">
                        {lang === "hi" ? "नि:शुल्क होम ब्लड सैंपल" : "NABL certified home sample pickup"}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="#pharmacy"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 text-white transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center shrink-0">
                      <Pill className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        {lang === "hi" ? "सत्यापित दवा डिलीवरी" : "Prescription Pharmacy Savings"}
                      </div>
                      <div className="text-[11px] text-slate-400 font-light">
                        {lang === "hi" ? "सीधी 15-20% रियायती दरें" : "Direct genuine medicine savings"}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="#hospitals"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 text-white transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        {lang === "hi" ? "संबद्ध सहयोगी अस्पताल" : "Partner Hospitals Network"}
                      </div>
                      <div className="text-[11px] text-slate-400 font-light">
                        {lang === "hi" ? "कैशलेस TPA व सात्विक भोजन" : "Jain ENT, CKS, Arihant & Mahaveer"}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenVision?.();
                  }}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/30 text-white transition-all group cursor-pointer text-left"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/40 flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-amber-300">
                        {lang === "hi" ? "मुनि श्री की पावन प्रेरणा" : "Sacred Vision & Muni Inspiration"}
                      </div>
                      <div className="text-[11px] text-amber-200/70 font-light">
                        {lang === "hi" ? "आदित्यम् अनुकम्पा दर्शन" : "Universal care, non-commercial ethics"}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </nav>
            </div>

            {/* Bottom Actions & 24/7 Helpline */}
            <div className="p-5 bg-[#0A1633] border-t border-white/10 space-y-3 shrink-0">
              <div className="grid grid-cols-1 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenPartner?.();
                  }}
                  className="w-full py-3.5 text-xs font-bold text-white border border-white/20 hover:bg-white/10 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Building2 className="w-4 h-4 text-cyan-300" />
                  <span>{lang === "hi" ? "अस्पताल संबद्धता हेतु जुड़ें" : "Join as Partner Hospital / Clinic"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenApp?.();
                  }}
                  className="w-full py-3.5 text-xs font-black text-[#0B1528] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Smartphone className="w-4 h-4 text-[#0B1528]" />
                  <span>{lang === "hi" ? "मोबाइल ऐप डाउनलोड करें" : "Download the Mobile App"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Direct Helpline Row */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span>{lang === "hi" ? "आपातकालीन 24/7 हेल्पलाइन" : "24/7 Emergency Care"}</span>
                </span>
                <a
                  href="tel:18002081008"
                  className="text-rose-400 font-bold flex items-center gap-1.5 bg-rose-950/60 px-3 py-1 rounded-full border border-rose-500/40"
                >
                  <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
                  <span>1800-208-1008</span>
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}