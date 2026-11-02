"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  Compass,
} from "lucide-react";

interface NavbarProps {
  lang?: "en" | "hi";
  onToggleLang?: (lang: "en" | "hi") => void;
  onOpenBooking?: () => void;
  onOpenPartner?: () => void;
  onOpenApp?: () => void;
  onOpenVision?: () => void;
}

const CITIES = [
  "Jaipur",
  "Delhi NCR",
  "Mumbai",
  "Ahmedabad",
  "Indore",
  "Bengaluru",
];

const NAV_ITEMS = [
  { href: "/doctors", labelEn: "Doctors", labelHi: "डॉक्टर्स" },
  { href: "/diagnostics", labelEn: "Diagnostics", labelHi: "लैब जांच" },
  { href: "/pharmacy", labelEn: "Pharmacy", labelHi: "दवाइयां" },
  { href: "/hospitals", labelEn: "Partner Hospitals", labelHi: "सहयोगी अस्पताल" },
  { href: "/about", labelEn: "About Us", labelHi: "परिचय" },
  { href: "/vision", labelEn: "Sacred Vision", labelHi: "प्रेरणा", isVision: true },
];

export default function Navbar({
  lang = "en",
  onToggleLang,
  onOpenBooking,
  onOpenPartner,
  onOpenApp,
  onOpenVision,
}: NavbarProps) {
  const pathname = usePathname();
  const [selectedCity, setSelectedCity] = useState("Jaipur");
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

  const handleToggleLang = (newLang: "en" | "hi") => {
    try {
      localStorage.setItem("adityam_lang", newLang);
      window.dispatchEvent(new CustomEvent("adityam_lang_change", { detail: newLang }));
    } catch {
      // Ignore
    }
    onToggleLang?.(newLang);
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (pathOrAnchor: string) => {
    setIsMobileMenuOpen(false);
    if (pathOrAnchor.startsWith("/")) {
      window.location.href = pathOrAnchor;
    } else {
      const el = document.querySelector(pathOrAnchor);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full font-sans shadow-xl bg-[#172554]">
      {/* Scoped CSS for Uiverse.io JulanDeAlb Animated SVG Morphing Hamburger */}
      <style jsx global>{`
        .uiverse-hamburger {
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
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
          height: 2.1em;
          width: 2.1em;
          transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .uiverse-hamburger .line {
          fill: none;
          stroke: white;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 3;
          transition: stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
                      stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
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

      {/* Main Desktop & Tablet Navbar */}
      <div className="w-full relative border-b border-[#172554]/80 flex items-stretch">
        {/* LEFT SECTION: White Curved Brand Tab */}
        <div className="bg-white relative z-10 flex items-center justify-center rounded-br-[2rem] sm:rounded-br-[2.5rem] md:rounded-br-[3.5rem] shadow-[4px_0_20px_rgba(0,0,0,0.1)] px-3 sm:px-5 md:pr-6 xl:pr-10 shrink-0">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 py-2 sm:py-2.5">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white overflow-hidden shrink-0">
              <Image
                src="/images/logo-an.png"
                alt="Adityam Niramayaa Logo"
                fill
                sizes="40px"
                className="object-contain scale-110"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm sm:text-base xl:text-lg font-bold tracking-tight text-[#172554] leading-tight">
                Adityam Niramayaa
              </span>
              <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium tracking-wider uppercase leading-none mt-0.5">
                {lang === "hi" ? "आदित्यम् निरामया — सबके लिए" : "Healthcare for Everyone"}
              </div>
            </div>
          </Link>
        </div>

        {/* RIGHT SECTION: Blue Background + Nav Links + Language + Action CTAs */}
        <div className="flex-1 flex items-center justify-end lg:justify-between py-2 sm:py-2.5 pl-3 md:pl-5 xl:pl-8 pr-3 sm:pr-4 xl:pr-8 min-w-0">
          {/* Desktop Nav Links with Clean, Premium Active Indicators (No Bounce) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-[13px] font-semibold text-blue-50/90 whitespace-nowrap">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-semibold transition-colors duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? item.isVision
                        ? "text-amber-300 font-bold bg-white/10"
                        : "text-white font-bold bg-white/10"
                      : item.isVision
                      ? "text-amber-200/90 hover:text-amber-300 hover:bg-white/5"
                      : "text-blue-100/75 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.isVision && <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                  <span>{lang === "hi" ? item.labelHi : item.labelEn}</span>

                  {/* Clean, Sharp Active Bar (Zero Bounce, Understated & Authoritative) */}
                  {isActive && (
                    <span className="absolute -bottom-2 left-2 right-2 h-[2px] bg-amber-400 rounded-full shadow-[0_1px_6px_rgba(251,191,36,0.5)] pointer-events-none" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Language Toggle */}
            <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full p-0.5 border border-white/20 text-[10px] xl:text-[11px] font-bold">
              <button
                type="button"
                onClick={() => handleToggleLang("en")}
                className={`px-2 xl:px-2.5 py-0.5 xl:py-1 rounded-full transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-amber-400 text-slate-950 font-black shadow-xs"
                    : "text-white/80 hover:text-white"
                }`}
              >
                ENG
              </button>
              <button
                type="button"
                onClick={() => handleToggleLang("hi")}
                className={`px-2 xl:px-2.5 py-0.5 xl:py-1 rounded-full transition-all cursor-pointer ${
                  lang === "hi"
                    ? "bg-amber-400 text-slate-950 font-black shadow-xs"
                    : "text-white/80 hover:text-white"
                }`}
              >
                हिंदी
              </button>
            </div>

            {/* Desktop Join Partner CTA (Links to Dedicated Page) */}
            <Link
              href="/join-network"
              className={`hidden xl:flex px-4 py-2 text-xs font-semibold rounded-full transition-all items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                pathname === "/join-network"
                  ? "bg-amber-400 text-slate-950 font-bold border border-amber-400 shadow-sm"
                  : "text-white/90 hover:text-white border border-white/20 hover:bg-white/10"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{lang === "hi" ? "नेटवर्क से जुड़ें" : "Join Network"}</span>
            </Link>

            {/* App Download CTA (Links to Dedicated Page) */}
            <Link
              href="/get-app"
              className={`hidden sm:flex px-3.5 xl:px-5 py-1.5 xl:py-2 text-xs font-bold text-[#172554] bg-white hover:bg-blue-50 rounded-full shadow-sm transition-all items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                pathname === "/get-app"
                  ? "ring-2 ring-amber-400 font-black"
                  : ""
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-[#172554]" />
              <span>{lang === "hi" ? "ऐप डाउनलोड" : "Get App"}</span>
            </Link>

            {/* Mobile Animated SVG Hamburger */}
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
      </div>

      {/* ==============================================================
          CLEAN, AIRY MOBILE NAVIGATION DRAWER (NO CLUTTER, NO TEXT OVERLOAD)
      ============================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              y: -12,
              transition: { duration: 0.18, ease: "easeIn" },
            }}
            className="fixed inset-0 top-0 left-0 w-full h-[100dvh] z-50 bg-[#F8FAFC] flex flex-col justify-between overflow-y-auto select-none font-sans"
          >
            {/* Top Compact Header: Brand + City + Language + Close (All in 1 Clean Row) */}
            <div className="w-full bg-[#172554] text-white px-4 py-3 flex items-center justify-between shrink-0 shadow-md">
              {/* Brand Logo */}
              <div className="flex items-center gap-2">
                <div className="relative w-7 h-7 rounded-lg overflow-hidden bg-white p-0.5 shrink-0">
                  <Image
                    src="/images/logo-an.png"
                    alt="Logo"
                    fill
                    sizes="28px"
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-bold text-white tracking-tight">
                  Adityam Niramayaa
                </span>
              </div>

              {/* Right: City Pill + Language + Close */}
              <div className="flex items-center gap-2">
                {/* City Picker */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 text-[11px] font-semibold text-white/90 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{selectedCity.split(",")[0]}</span>
                    <ChevronDown className="w-3 h-3 text-white/60" />
                  </button>

                  {isCityDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-44 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-150 py-1.5 z-50">
                      {CITIES.map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => {
                            setSelectedCity(c);
                            setIsCityDropdownOpen(false);
                          }}
                          className="w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-blue-50 transition-colors flex justify-between items-center cursor-pointer"
                        >
                          <span>{c}</span>
                          {selectedCity === c && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#172554]" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Language Toggle */}
                <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/20 text-[10px] font-bold">
                  <button
                    type="button"
                    onClick={() => handleToggleLang("en")}
                    className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                      lang === "en"
                        ? "bg-amber-400 text-slate-950 font-black shadow-xs"
                        : "text-white/80"
                    }`}
                  >
                    ENG
                  </button>
                  <button
                    type="button"
                    onClick={() => handleToggleLang("hi")}
                    className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                      lang === "hi"
                        ? "bg-amber-400 text-slate-950 font-black shadow-xs"
                        : "text-white/80"
                    }`}
                  >
                    हिंदी
                  </button>
                </div>

                {/* Animated hamburger morphing to X */}
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
            </div>

            {/* Main Navigation Items (Clean, Spacious, No Text Clutter) */}
            <div className="flex-1 px-4 py-5 space-y-2.5 overflow-y-auto">
              {/* Item 1: Doctors */}
              <button
                type="button"
                onClick={() => handleNavClick("/doctors")}
                className={`w-full bg-white p-4 rounded-2xl border transition-all flex items-center justify-between text-left group cursor-pointer ${
                  pathname === "/doctors"
                    ? "border-[#2563EB] bg-blue-50/50 ring-2 ring-[#2563EB]/20 shadow-sm"
                    : "border-slate-200/90 shadow-2xs hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center shrink-0">
                    <Stethoscope className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                        {lang === "hi" ? "डॉक्टर्स एवं ओपीडी" : "Doctors & Consultations"}
                      </h4>
                      {pathname === "/doctors" && (
                        <span className="px-2 py-0.5 rounded-full bg-[#172554] text-amber-300 text-[9px] font-black">
                          {lang === "hi" ? "सक्रिय" : "Active"}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 font-normal mt-0.5">
                      {lang === "hi" ? "वरिष्ठ एमडी एवं सुपर-स्पेशलिस्ट" : "Priority specialist appointments"}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] transition-colors" />
              </button>

              {/* Item 2: Diagnostics */}
              <button
                type="button"
                onClick={() => handleNavClick("/diagnostics")}
                className={`w-full bg-white p-4 rounded-2xl border transition-all flex items-center justify-between text-left group cursor-pointer ${
                  pathname === "/diagnostics"
                    ? "border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-500/20 shadow-sm"
                    : "border-slate-200/90 shadow-2xs hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                    <FlaskConical className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                        {lang === "hi" ? "प्रमाणित लैब जांच" : "Accredited Lab Tests"}
                      </h4>
                      {pathname === "/diagnostics" && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-700 text-white text-[9px] font-black">
                          {lang === "hi" ? "सक्रिय" : "Active"}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 font-normal mt-0.5">
                      {lang === "hi" ? "100% सटीक जांच एवं होम सैंपल" : "NABL certified home sample pickup"}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </button>

              {/* Item 3: Pharmacy */}
              <button
                type="button"
                onClick={() => handleNavClick("/pharmacy")}
                className={`w-full bg-white p-4 rounded-2xl border transition-all flex items-center justify-between text-left group cursor-pointer ${
                  pathname === "/pharmacy"
                    ? "border-amber-500 bg-amber-50/50 ring-2 ring-amber-500/20 shadow-sm"
                    : "border-slate-200/90 shadow-2xs hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0">
                    <Pill className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                        {lang === "hi" ? "दवा बचत व डिलीवरी" : "Prescription Pharmacy"}
                      </h4>
                      {pathname === "/pharmacy" && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-600 text-white text-[9px] font-black">
                          {lang === "hi" ? "सक्रिय" : "Active"}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 font-normal mt-0.5">
                      {lang === "hi" ? "100% असली दवाइयां, रियायती दरें" : "Genuine medicines with direct savings"}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
              </button>

              {/* Item 4: Partner Hospitals */}
              <button
                type="button"
                onClick={() => handleNavClick("/hospitals")}
                className={`w-full bg-white p-4 rounded-2xl border transition-all flex items-center justify-between text-left group cursor-pointer ${
                  pathname === "/hospitals"
                    ? "border-indigo-500 bg-indigo-50/50 ring-2 ring-indigo-500/20 shadow-sm"
                    : "border-slate-200/90 shadow-2xs hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {lang === "hi" ? "सहयोगी अस्पताल" : "Partner Hospitals Network"}
                      </h4>
                      {pathname === "/hospitals" && (
                        <span className="px-2 py-0.5 rounded-full bg-indigo-700 text-white text-[9px] font-black">
                          {lang === "hi" ? "सक्रिय" : "Active"}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 font-normal mt-0.5">
                      {lang === "hi" ? "कैशलेस टीपीए व सात्विक भोजन" : "Cashless TPA hospital empanelment"}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
              </button>

              {/* Item 5: About Us & Leadership */}
              <button
                type="button"
                onClick={() => handleNavClick("/about")}
                className={`w-full bg-white p-4 rounded-2xl border transition-all flex items-center justify-between text-left group cursor-pointer ${
                  pathname === "/about"
                    ? "border-[#2563EB] bg-blue-50/50 ring-2 ring-[#2563EB]/20 shadow-sm"
                    : "border-slate-200/90 shadow-2xs hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                        {lang === "hi" ? "परिचय एवं नेतृत्व" : "About & Leadership"}
                      </h4>
                      {pathname === "/about" && (
                        <span className="px-2 py-0.5 rounded-full bg-[#172554] text-amber-300 text-[9px] font-black">
                          {lang === "hi" ? "सक्रिय" : "Active"}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 font-normal mt-0.5">
                      {lang === "hi" ? "मुनि श्री की प्रेरणा एवं मेडिकल बोर्ड" : "Founding origin & medical board"}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] transition-colors" />
              </button>

              {/* Item 6: Sacred Vision */}
              <button
                type="button"
                onClick={() => handleNavClick("/vision")}
                className={`w-full bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-white p-4 rounded-2xl border transition-all flex items-center justify-between text-left group cursor-pointer ${
                  pathname === "/vision"
                    ? "border-amber-400 ring-2 ring-amber-400/30 shadow-sm"
                    : "border-amber-300/80 shadow-2xs hover:border-amber-400"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-700 border border-amber-400/40 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-amber-900 group-hover:text-amber-950 transition-colors">
                        {lang === "hi" ? "मुनि श्री की प्रेरणा" : "Sacred Vision & Origin"}
                      </h4>
                      {pathname === "/vision" && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[9px] font-black">
                          {lang === "hi" ? "सक्रिय" : "Active"}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-amber-800/80 font-normal mt-0.5">
                      {lang === "hi" ? "निःस्वार्थ व पारदर्शी स्वास्थ्य सेवा" : "Universal compassion & transparent care"}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-amber-600" />
              </button>
            </div>

            {/* Bottom Actions: Clean, High-Contrast CTAs */}
            <div className="p-4 bg-white border-t border-slate-200/90 space-y-3 shrink-0 shadow-lg">
              {/* Primary App Download Button */}
              <Link
                href="/get-app"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3.5 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Smartphone className="w-4 h-4 text-slate-950" />
                <span>{lang === "hi" ? "मोबाइल ऐप डाउनलोड करें" : "Download Mobile App"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary Row: Partner Empanelment & Emergency SOS */}
              <div className="flex items-center justify-between text-xs pt-1">
                <Link
                  href="/join-network"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-bold text-[#2563EB] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{lang === "hi" ? "अस्पताल संबद्धता" : "Partner Empanelment"}</span>
                </Link>

                <a
                  href="tel:18002081008"
                  className="text-rose-600 font-bold flex items-center gap-1.5 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200"
                >
                  <PhoneCall className="w-3 h-3 animate-pulse" />
                  <span>SOS 1800-208-1008</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}