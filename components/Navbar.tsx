"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  PhoneCall,
  MapPin,
  ChevronDown,
  Sparkles,
  Smartphone,
  Building2,
  Menu,
  X,
  ShieldCheck,
  Languages,
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

  return (
    <header className="sticky top-0 z-50 w-full font-sans shadow-xl bg-[#172554]">
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
          <div className="flex items-center gap-4">
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
        {/* LEFT SECTION: White Background + Logo */}
        <div
          className="bg-white relative z-10 flex items-center justify-center rounded-br-[2.5rem] md:rounded-br-[4rem] shadow-[4px_0_20px_rgba(0,0,0,0.15)] px-4 sm:px-6 md:pr-12 shrink-0 min-w-[80px] sm:min-w-auto"
          style={{ paddingLeft: "max(1rem, calc((100% - 80rem) / 2))" }}
        >
          <div className="flex items-center gap-3 py-2 sm:py-3">
            {/* The Logo Container (Circular Crop) */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white overflow-hidden shrink-0">
              <Image
                src="/images/logo-an.png"
                alt="Adityam Niramayaa Logo"
                fill
                sizes="48px"
                className="object-contain scale-110"
                priority
              />
            </div>

            {/* Brand Text */}
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-[#172554]">
                  Adityam Niramayaa
                </span>
              </div>
              <div className="text-[10px] text-slate-500 font-medium tracking-wider uppercase mt-0.5">
                {lang === "hi" ? "आदित्यम् निरामया — सबके लिए" : "Healthcare for Everyone"}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION: Blue Background + Nav Links + CTAs */}
        <div
          className="flex-1 flex items-center justify-end lg:justify-between py-3 pl-4 md:pl-8"
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

          {/* Action CTAs */}
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

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#172554] border-t border-white/10 absolute w-full shadow-2xl">
          <div className="px-6 py-6 flex flex-col gap-5">
            <nav className="flex flex-col gap-4 text-sm font-semibold text-white/90">
              <a href="#doctors" onClick={() => setIsMobileMenuOpen(false)}>
                {lang === "hi" ? "डॉक्टर्स एवं ओपीडी" : "Doctors (OPD)"}
              </a>
              <a href="#diagnostics" onClick={() => setIsMobileMenuOpen(false)}>
                {lang === "hi" ? "लैब जांच एवं टेस्ट" : "Diagnostics"}
              </a>
              <a href="#pharmacy" onClick={() => setIsMobileMenuOpen(false)}>
                {lang === "hi" ? "दवा डिलीवरी" : "Pharmacy"}
              </a>
              <a href="#hospitals" onClick={() => setIsMobileMenuOpen(false)}>
                {lang === "hi" ? "पार्टनर अस्पताल" : "Partner Hospitals"}
              </a>
            </nav>
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPartner?.();
                }}
                className="w-full py-3 text-xs font-semibold text-white border border-white/20 rounded-xl cursor-pointer"
              >
                {lang === "hi" ? "प्रदाता नेटवर्क से जुड़ें" : "Join Provider Network"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenApp?.();
                }}
                className="w-full py-3 text-xs font-bold text-[#172554] bg-white rounded-xl shadow-lg cursor-pointer"
              >
                {lang === "hi" ? "मोबाइल ऐप डाउनलोड करें" : "Download Mobile App"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}