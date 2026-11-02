"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FlaskConical,
  Activity,
  ShieldCheck,
  Search,
  Filter,
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
  Home,
  FileText,
  Sparkles,
  ArrowRight,
  PhoneCall,
  BadgePercent,
  Check,
  Heart,
  Droplets,
  Microscope,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/useLanguage";

// Category Filters for Lab Tests
const LAB_CATEGORIES = [
  { id: "all", labelEn: "All Health Packages", labelHi: "सभी स्वास्थ्य पैकेज", icon: Sparkles },
  { id: "fullbody", labelEn: "Full Body Checkups", labelHi: "सम्पूर्ण शरीर जांच", icon: Activity },
  { id: "vital", labelEn: "Diabetes & Thyroid", labelHi: "शुगर व थायरॉइड", icon: Droplets },
  { id: "heart", labelEn: "Heart & Cholesterol", labelHi: "हार्ट व कोलेस्ट्रॉल", icon: Heart },
  { id: "women", labelEn: "Women's Wellness", labelHi: "महिला स्वास्थ्य", icon: ShieldCheck },
  { id: "senior", labelEn: "Senior Citizen Care", labelHi: "वरिष्ठ नागरिक पैकेज", icon: Microscope },
];

interface LabPackage {
  id: string;
  titleEn: string;
  titleHi: string;
  badgeEn: string;
  badgeHi: string;
  category: string;
  parametersCount: number;
  reportTimeEn: string;
  reportTimeHi: string;
  originalPrice: number;
  discountedPrice: number;
  includesEn: string[];
  includesHi: string[];
  fastingEn: string;
  fastingHi: string;
  isPopular?: boolean;
}

const PACKAGES_DATA: LabPackage[] = [
  {
    id: "pkg-1",
    titleEn: "Adityam Swasthya Full Body Checkup",
    titleHi: "आदित्यम् सम्पूर्ण स्वास्थ्य जांच (फुल बॉडी)",
    badgeEn: "Most Recommended",
    badgeHi: "सर्वाधिक लोकप्रिय",
    category: "fullbody",
    parametersCount: 84,
    reportTimeEn: "Within 12 Hours",
    reportTimeHi: "12 घंटे में डिजिटल रिपोर्ट",
    originalPrice: 2800,
    discountedPrice: 1299,
    includesEn: [
      "Complete Blood Count (CBC - 24 Tests)",
      "Liver Function Test (LFT - 12 Tests)",
      "Kidney Function Test (KFT - 8 Tests)",
      "Lipid Profile (Heart Cholesterol - 8 Tests)",
      "Blood Sugar Fasting & Urine Routine",
      "Thyroid Profile (T3, T4, TSH)",
    ],
    includesHi: [
      "सीबीसी रक्त जांच (24 टेस्ट्स)",
      "लिवर फंक्शन टेस्ट (12 टेस्ट्स)",
      "किडनी फंक्शन टेस्ट (8 टेस्ट्स)",
      "लिपिड प्रोफाइल (हार्ट कोलेस्ट्रॉल)",
      "ब्लड शुगर फास्टिंग व यूरिन रूटीन",
      "थायरॉइड प्रोफाइल (T3, T4, TSH)",
    ],
    fastingEn: "10-12 hours fasting required",
    fastingHi: "10-12 घंटे का खाली पेट अनिवार्य",
    isPopular: true,
  },
  {
    id: "pkg-2",
    titleEn: "Comprehensive Diabetes & HbA1c Care",
    titleHi: "मधुमेह (डायबिटीज) व HbA1c संपूर्ण जांच",
    badgeEn: "Essential Monitoring",
    badgeHi: "नियमित जांच हेतु",
    category: "vital",
    parametersCount: 42,
    reportTimeEn: "Same Day (6 Hours)",
    reportTimeHi: "उसी दिन (6 घंटे में)",
    originalPrice: 1600,
    discountedPrice: 699,
    includesEn: [
      "HbA1c (3-Month Average Blood Sugar)",
      "Fasting Blood Glucose",
      "Post-Prandial (PP) Glucose",
      "Serum Creatinine & Kidney Screen",
      "Urine Microalbumin",
    ],
    includesHi: [
      "HbA1c (पिछले 3 माह का औसत शुगर)",
      "फास्टिंग ब्लड ग्लूकोज (खाली पेट)",
      "पीपी ब्लड ग्लूकोज (भोजन के 2 घंटे बाद)",
      "सीरम क्रिएटिनिन (किडनी सुरक्षा)",
      "यूरिन माइक्रोएल्बुमिन",
    ],
    fastingEn: "Fasting + post-meal samples needed",
    fastingHi: "खाली पेट व भोजन के बाद का सैंपल",
  },
  {
    id: "pkg-3",
    titleEn: "Advanced Cardiac & Heart Health Panel",
    titleHi: "एडवांस्ड हृदय सुरक्षा प्रोफाइल (कार्डियक)",
    badgeEn: "Heart Specialist Choice",
    badgeHi: "हृदय सुरक्षा कवच",
    category: "heart",
    parametersCount: 56,
    reportTimeEn: "Within 10 Hours",
    reportTimeHi: "10 घंटे में रिपोर्ट",
    originalPrice: 3200,
    discountedPrice: 1599,
    includesEn: [
      "High Sensitivity CRP (hs-CRP Cardiac Risk)",
      "Complete Lipid Profile (Total Chol, HDL, LDL, Triglycerides)",
      "Homocysteine Cardiac Marker",
      "Apolipoprotein A1 & B Ratio",
      "ECG at Partner Hospital (Optional Add-on)",
    ],
    includesHi: [
      "hs-CRP हृदय जोखिम संकेतक",
      "सम्पूर्ण लिपिड प्रोफाइल (कोलेस्ट्रॉल)",
      "होमोसिस्टीन कार्डियक मार्कर",
      "एपोलाइपोप्रोटीन A1/B अनुपात",
      "सहयोगी अस्पताल पर निःशुल्क ईसीजी कूपन",
    ],
    fastingEn: "12 hours strict fasting",
    fastingHi: "12 घंटे का पूर्ण उपवास",
    isPopular: true,
  },
  {
    id: "pkg-4",
    titleEn: "Adityam Nari Shakti Women's Health",
    titleHi: "आदित्यम् नारी शक्ति स्वास्थ्य सुरक्षा पैकेज",
    badgeEn: "For Every Woman",
    badgeHi: "महिलाओं हेतु विशेष",
    category: "women",
    parametersCount: 68,
    reportTimeEn: "Within 12 Hours",
    reportTimeHi: "12 घंटे में रिपोर्ट",
    originalPrice: 2900,
    discountedPrice: 1399,
    includesEn: [
      "Vitamin D3 & Vitamin B12 Levels",
      "Serum Iron, Ferritin & Total Iron Binding",
      "Thyroid Stimulating Hormone (Ultra-Sensitive TSH)",
      "Complete Hemogram (Anemia Profile)",
      "Calcium & Bone Density Blood Markers",
    ],
    includesHi: [
      "विटामिन D3 व विटामिन B12 स्तर",
      "आयरन, फेरिटिन व खून की जांच",
      "अल्ट्रा-सेंसिटिव थायरॉइड प्रोफाइल",
      "एनीमिया (खून की कमी) डायग्नोसिस",
      "कैल्शियम व अस्थि खनिज मार्कर",
    ],
    fastingEn: "Overnight fasting recommended",
    fastingHi: "रात भर का उपवास आवश्यक",
  },
  {
    id: "pkg-5",
    titleEn: "Senior Citizen Golden Care Package",
    titleHi: "वरिष्ठ नागरिक (सीनियर सिटीजन) अमृत पैकेज",
    badgeEn: "Age 50+ Specialized",
    badgeHi: "50+ आयु हेतु विशेष",
    category: "senior",
    parametersCount: 92,
    reportTimeEn: "Within 14 Hours",
    reportTimeHi: "14 घंटे में विस्तृत रिपोर्ट",
    originalPrice: 4200,
    discountedPrice: 1899,
    includesEn: [
      "Full Body Vital Screens (Liver, Kidney, Heart)",
      "Arthritis & Uric Acid Screening",
      "Electrolytes (Sodium, Potassium, Chloride)",
      "Prostate Specific Antigen (PSA - for Men)",
      "Free Doctor Consultation on Report Review",
    ],
    includesHi: [
      "लिवर, किडनी व हृदय की विस्तृत जांच",
      "गठिया व यूरिक एसिड लेवल",
      "इलेक्ट्रोलाइट्स (सोडियम, पोटेशियम)",
      "प्रोस्टेट जांच (PSA - पुरुषों हेतु)",
      "रिपोर्ट पर डॉक्टर द्वारा निःशुल्क परामर्श",
    ],
    fastingEn: "10-12 hours fasting",
    fastingHi: "10-12 घंटे का उपवास",
  },
  {
    id: "pkg-6",
    titleEn: "Thyroid & Vital Hormone Balance",
    titleHi: "थायरॉइड प्रोफाइल व ऊर्जा संतुलन जांच",
    badgeEn: "Quick 6-Hour Result",
    badgeHi: "6 घंटे में रिजल्ट",
    category: "vital",
    parametersCount: 18,
    reportTimeEn: "Same Day (6 Hours)",
    reportTimeHi: "उसी दिन (6 घंटे में)",
    originalPrice: 900,
    discountedPrice: 399,
    includesEn: [
      "Total Triiodothyronine (T3)",
      "Total Thyroxine (T4)",
      "Thyroid Stimulating Hormone (TSH 3rd Gen)",
      "Automated Chemiluminescence Testing",
    ],
    includesHi: [
      "टोटल T3 (ट्राईआयोडोथायरोनिन)",
      "टोटल T4 (थायरोक्सिन)",
      "टीएसएच (थायरॉइड स्टिम्युलेटिंग हॉर्मोन)",
      "पूर्णतः स्वचालित रोबोटिक टेस्टिंग",
    ],
    fastingEn: "Morning fasting preferred",
    fastingHi: "प्रातः काल खाली पेट उत्तम",
  },
];

export default function DiagnosticsPage() {
  const [lang, setLang] = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPackages = useMemo(() => {
    return PACKAGES_DATA.filter((pkg) => {
      if (selectedCategory !== "all" && pkg.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle =
          pkg.titleEn.toLowerCase().includes(q) || pkg.titleHi.includes(q);
        const matchTests =
          pkg.includesEn.some((t) => t.toLowerCase().includes(q)) ||
          pkg.includesHi.some((t) => t.includes(q));
        return matchTitle || matchTests;
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#172554] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* 1. Global Navbar */}
      <Navbar lang={lang} onToggleLang={setLang} />

      <main className="flex-1">
        {/* ====================================================================
            2. HERO SECTION: EXECUTIVE LUXURY DARK NAVY (#0A1128)
        ==================================================================== */}
        <section className="relative overflow-hidden bg-[#0A1128] text-white pt-8 pb-10 sm:pt-10 sm:pb-12 px-4 sm:px-6">
          {/* Subtle ambient radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.22),transparent_75%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Bar: Breadcrumb + Action CTA */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-white transition-colors">
                  {lang === "hi" ? "होम" : "Home"}
                </Link>
                <span>/</span>
                <span className="text-amber-400 font-bold">
                  {lang === "hi" ? "प्रमाणित लैब जांच" : "Accredited Diagnostics"}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  {lang === "hi" ? "100% NABL प्रमाणित लैब्स" : "100% NABL Accredited"}
                </span>

                <Link
                  href="/get-app"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold transition-all"
                >
                  <span>{lang === "hi" ? "ऐप से बुक करें ↓" : "Get App to Book ↓"}</span>
                </Link>
              </div>
            </div>

            {/* Clean Typography */}
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                {lang === "hi" ? (
                  <>
                    प्रमाणित लैब टेस्ट्स व हेल्थ पैकेज।{" "}
                    <span className="block text-amber-300 font-serif italic font-normal mt-1 text-2xl sm:text-3xl lg:text-4xl">
                      100% NABL मान्यता, घर से मुफ़्त सैंपल संग्रह।
                    </span>
                  </>
                ) : (
                  <>
                    Certified Diagnostics & Health Packages.{" "}
                    <span className="block text-amber-300 font-serif italic font-normal mt-1 text-2xl sm:text-3xl lg:text-4xl">
                      NABL Accredited Labs, Free Doorstep Sample Pickup.
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                {lang === "hi"
                  ? "पारदर्शी दरों पर रूटीन ब्लड टेस्ट्स और फुल-बॉडी हेल्थ पैकेज बुक करें। प्रशिक्षित तकनीशियन घर आकर सुरक्षित सैंपल लेंगे और 6-12 घंटे में डिजिटल रिपोर्ट मिलेगी।"
                  : "Book routine blood tests and full-body health checks with pre-fixed fair rates. Certified phlebotomists collect samples safely at home with 6-12 hour digital reports."}
              </p>
            </div>

            {/* Feature Badges - 4 Sleek Frosted Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 mt-7">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5 backdrop-blur-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1.5" />
                <div className="text-xs font-bold text-white">
                  {lang === "hi" ? "100% NABL प्रमाणित" : "100% NABL Labs"}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {lang === "hi" ? "बारकोडेड सुरक्षित टेस्टिंग" : "Barcoded tamper-proof"}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5 backdrop-blur-xs">
                <Home className="w-4 h-4 text-blue-400 mb-1.5" />
                <div className="text-xs font-bold text-white">
                  {lang === "hi" ? "मुफ़्त होम कलेक्शन" : "Free Home Pickup"}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {lang === "hi" ? "प्रशिक्षित स्वास्थ्यकर्मी" : "Certified phlebotomists"}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5 backdrop-blur-xs">
                <Clock className="w-4 h-4 text-amber-400 mb-1.5" />
                <div className="text-xs font-bold text-white">
                  {lang === "hi" ? "6-12 घंटे में रिपोर्ट" : "Digital Reports 6-12h"}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {lang === "hi" ? "WhatsApp व ऐप पर उपलब्ध" : "Direct on WhatsApp & App"}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5 backdrop-blur-xs">
                <BadgePercent className="w-4 h-4 text-teal-400 mb-1.5" />
                <div className="text-xs font-bold text-white">
                  {lang === "hi" ? "शून्य कमीशन शुल्क" : "Pre-Fixed Fair Rates"}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {lang === "hi" ? "कोई छिपा शुल्क नहीं" : "No hidden lab markups"}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. SEARCH & QUICK-FILTER STATION
        ==================================================================== */}
        <section className="relative -mt-6 z-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-[0_15px_35px_rgba(23,37,84,0.08)] border border-slate-200/80">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    lang === "hi"
                      ? "पैकेज या टेस्ट खोजें (जैसे Full Body, CBC, शुगर, थायरॉइड, लिपिड)..."
                      : "Search health packages or tests (e.g. Full Body, CBC, HbA1c, Thyroid, Lipid)..."
                  }
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200/90 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. TACTILE CATEGORY SWITCHER PILLS
        ==================================================================== */}
        <section className="py-6 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-3.5">
              <h2 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-blue-600" />
                <span>{lang === "hi" ? "पैकेज श्रेणी चुनें" : "Select Health Package Category"}</span>
              </h2>
              <span className="text-xs font-semibold text-slate-500">
                {filteredPackages.length} {lang === "hi" ? "पैकेज उपलब्ध" : "Packages Available"}
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none select-none">
              {LAB_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#0A1128] text-white shadow-xs border border-[#0A1128]"
                        : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center ${
                        isSelected
                          ? "bg-white/15 text-amber-300"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                    </div>
                    <span>{lang === "hi" ? cat.labelHi : cat.labelEn}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            5. CLEAN HEALTH PACKAGE CARDS (CORE SHOWCASE)
        ==================================================================== */}
        <section className="pb-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {filteredPackages.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 shadow-xs max-w-md mx-auto">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3 border border-blue-200">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {lang === "hi" ? "कोई पैकेज नहीं मिला" : "No Health Packages Found"}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === "hi"
                    ? "कृपया खोज शब्द बदलें या सभी पैकेज देखें।"
                    : "Try searching with different terms like 'Full Body' or reset the filters."}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-4 px-4 py-2 rounded-full bg-[#0A1128] text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {lang === "hi" ? "सभी पैकेज देखें" : "View All Packages"}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredPackages.map((pkg) => {
                  const savings = pkg.originalPrice - pkg.discountedPrice;
                  const discountPercent = Math.round((savings / pkg.originalPrice) * 100);

                  return (
                    <div
                      key={pkg.id}
                      className="group bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400/60 transition-all flex flex-col justify-between relative"
                    >
                      {/* Popular Subtle Badge */}
                      {pkg.isPopular && (
                        <div className="absolute -top-2.5 right-5 bg-[#0A1128] text-amber-300 text-[10px] font-bold tracking-wide px-2.5 py-0.5 rounded-full shadow-xs border border-amber-400/30 flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                          <span>{lang === "hi" ? "सर्वाधिक चुना गया" : "Popular Choice"}</span>
                        </div>
                      )}

                      <div>
                        {/* Top: Category Tag + Parameters Count */}
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                            {lang === "hi" ? pkg.badgeHi : pkg.badgeEn}
                          </span>

                          <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                            {pkg.parametersCount} {lang === "hi" ? "पैरामीटर्स" : "Parameters"}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                          {lang === "hi" ? pkg.titleHi : pkg.titleEn}
                        </h3>

                        {/* Report Time & Fasting Pill */}
                        <div className="flex flex-wrap items-center gap-2 mt-2.5 pt-2.5 border-t border-slate-100 text-xs text-slate-500">
                          <div className="flex items-center gap-1 text-slate-600 font-medium">
                            <Clock className="w-3.5 h-3.5 text-blue-600" />
                            <span>{lang === "hi" ? pkg.reportTimeHi : pkg.reportTimeEn}</span>
                          </div>
                          <span>•</span>
                          <span className="text-slate-500">
                            {lang === "hi" ? pkg.fastingHi : pkg.fastingEn}
                          </span>
                        </div>

                        {/* Tests Included List */}
                        <div className="mt-3.5 space-y-1.5">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                            {lang === "hi" ? "मुख्य जांचें शामिल:" : "Key Inclusions:"}
                          </span>
                          {(lang === "hi" ? pkg.includesHi : pkg.includesEn).map((testItem, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{testItem}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Section: Clean Pricing & Book Button */}
                      <div className="mt-5 pt-3.5 border-t border-slate-100">
                        <div className="flex items-baseline justify-between mb-3">
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase font-medium">
                              {lang === "hi" ? "पैकेज शुल्क" : "Package Price"}
                            </span>
                            <div className="flex items-baseline gap-2">
                              <span className="text-xs text-slate-400 line-through">₹{pkg.originalPrice}</span>
                              <span className="text-xl font-extrabold text-[#0A1128]">₹{pkg.discountedPrice}</span>
                            </div>
                          </div>

                          <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                            {lang === "hi" ? `बचत ₹${savings} (${discountPercent}% छूट)` : `Save ₹${savings} (${discountPercent}% OFF)`}
                          </span>
                        </div>

                        {/* CTA */}
                        <Link
                          href={`/book?service=${encodeURIComponent(pkg.titleEn)}&specialty=Diagnostics`}
                          className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Home className="w-3.5 h-3.5" />
                          <span>{lang === "hi" ? "मुफ़्त होम सैंपल बुक करें" : "Book Free Home Pickup"}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ====================================================================
            6. 3-STEP EASY TESTING PROCESS (3D TACTILE CUBES)
        ==================================================================== */}
        <section className="py-14 bg-white border-t border-slate-200/90 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                {lang === "hi" ? "सरल प्रक्रिया" : "How Diagnostics Works"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                {lang === "hi" ? "घर बैठे 3 आसान चरणों में जांच कराएं" : "3 Easy Steps to Accurate Lab Tests"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                {lang === "hi"
                  ? "बिना किसी कतार या अतिरिक्त शुल्क के अपने समय पर स्वास्थ्य जांच कराएं।"
                  : "Certified phlebotomists, tamper-proof vacuum tubes, and accurate NABL automated analysis."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  titleEn: "Schedule Free Pickup",
                  titleHi: "घर पर समय तय करें",
                  descEn: "Select your health package and choose your preferred morning slot. No advance payment needed.",
                  descHi: "अपना पसंदीदा पैकेज चुनें और मनपसंद समय चुनें। किसी अग्रिम भुगतान की आवश्यकता नहीं।",
                  icon: Calendar,
                  color: "bg-blue-50 text-[#2563EB] border-blue-200",
                },
                {
                  step: "02",
                  titleEn: "Painless Sample Collection",
                  titleHi: "दर्द-मुक्त सैंपल संग्रह",
                  descEn: "Certified vaccinated phlebotomist collects blood in barcoded single-use sealed tubes at your home.",
                  descHi: "प्रमाणित स्वास्थ्यकर्मी घर आकर सीलबंद सिंगल-यूज़ ट्यूब में सुरक्षित सैंपल संग्रह करेंगे।",
                  icon: Droplets,
                  color: "bg-emerald-50 text-emerald-700 border-emerald-200",
                },
                {
                  step: "03",
                  titleEn: "Smart Digital Report",
                  titleHi: "डिजिटल रिपोर्ट व डॉक्टर रिव्यू",
                  descEn: "Receive verified NABL digital report on WhatsApp and mobile app within 6 to 12 hours with free doctor guidance.",
                  descHi: "व्हाट्सएप व ऐप पर 6-12 घंटे में रिपोर्ट प्राप्त करें और डॉक्टर से निःशुल्क सलाह लें।",
                  icon: FileText,
                  color: "bg-amber-50 text-amber-700 border-amber-200",
                },
              ].map((stepItem, idx) => {
                const IconComponent = stepItem.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all transform-gpu hover:-translate-y-1 relative"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-slate-300">{stepItem.step}</span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${stepItem.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {lang === "hi" ? stepItem.titleHi : stepItem.titleEn}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {lang === "hi" ? stepItem.descHi : stepItem.descEn}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            7. EMERGENCY & HELP BANNER
        ==================================================================== */}
        <section className="py-10 bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#172554] text-white px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-white/10 px-3 py-1 rounded-full mb-2">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{lang === "hi" ? "24/7 लैब हेल्पलाइन" : "24/7 Lab Helpline"}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {lang === "hi"
                  ? "जांच से जुड़ा कोई सवाल है या तत्काल सैंपल बुक करना है?"
                  : "Have questions about fasting or need urgent home sample collection?"}
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 mt-1">
                {lang === "hi"
                  ? "हमारे डायग्नोस्टिक कोऑर्डिनेटर से सीधे संपर्क करें: 1800-208-1008 (निःशुल्क)"
                  : "Talk with our lab coordinators directly: 1800-208-1008 (Toll-Free)"}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:18002081008"
                className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-sm transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>{lang === "hi" ? "कॉल 1800-208-1008" : "Call 1800-208-1008"}</span>
              </a>

              <Link
                href="/book?service=Diagnostics"
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all flex items-center justify-center cursor-pointer"
              >
                {lang === "hi" ? "ऑनलाइन रिक्वेस्ट भेजें" : "Book Online"}
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
