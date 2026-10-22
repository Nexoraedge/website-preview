"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Stethoscope,
  FlaskConical,
  Pill,
  Building2,
  Users,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Percent,
} from "lucide-react";

interface PillarsGridProps {
  onSelectPillar?: (pillar: string) => void;
  onOpenBooking?: () => void;
  lang?: "en" | "hi";
}

interface PillarConfig {
  id: string;
  number: string;
  titleEn: string;
  titleHi: string;
  subEn: string;
  subHi: string;
  badgeEn: string;
  badgeHi: string;
  // Distinct Accent Tokens (All 5 Pillars have completely distinct colors)
  accentColor: string;
  accentBorder: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  iconBg: string;
  blobs: [string, string, string, string];
  icon: React.ElementType;
  descEn: string;
  descHi: string;
  featuresEn: string[];
  featuresHi: string[];
  actionEn: string;
  actionHi: string;
}

const PILLARS: PillarConfig[] = [
  {
    id: "opd",
    number: "01",
    titleEn: "OPD Consultations",
    titleHi: "ओपीडी विशेषज्ञ परामर्श",
    subEn: "Senior Doctor Priority Appointments",
    subHi: "वरिष्ठ डॉक्टर प्राथमिकता अपॉइंटमेंट",
    badgeEn: "Zero Waiting",
    badgeHi: "ज़ीरो वेटिंग",
    accentColor: "#2563EB", // Royal Sapphire Blue
    accentBorder: "#3B82F6",
    badgeBg: "rgba(239, 246, 255, 0.9)",
    badgeText: "#1E40AF",
    badgeBorder: "rgba(191, 219, 254, 0.9)",
    iconBg: "#2563EB",
    blobs: [
      "linear-gradient(135deg, #1E40AF, #3B82F6, #60A5FA)",
      "linear-gradient(135deg, #0284C7, #38BDF8)",
      "linear-gradient(135deg, #4338CA, #818CF8)",
      "linear-gradient(135deg, #93C5FD, #DBEAFE)",
    ],
    icon: Stethoscope,
    descEn:
      "Direct priority appointments with verified super-specialists across empanelled hospitals and clinics with guaranteed zero waiting queues.",
    descHi:
      "मान्यता प्राप्त अस्पतालों और क्लीनिकों में अनुभवी वरिष्ठ डॉक्टरों के साथ प्राथमिकता से परामर्श, शून्य प्रतीक्षा समय की गारंटी के साथ।",
    featuresEn: [
      "Top Specialists & MD Physicians",
      "Priority In-Clinic & Tele-Consult",
      "Save up to 30% with Adityam Care",
    ],
    featuresHi: [
      "वरिष्ठ एमडी एवं सुपर-स्पेशलिस्ट डॉक्टर",
      "प्राथमिकता इन-क्लीनिक एवं वीडियो परामर्श",
      "आदित्यम कार्ड द्वारा 30% तक सीधी बचत",
    ],
    actionEn: "Book Doctor Slot",
    actionHi: "डॉक्टर स्लॉट बुक करें",
  },
  {
    id: "labs",
    number: "02",
    titleEn: "Diagnostics",
    titleHi: "सत्यापित लैब जांच एवं टेस्ट",
    subEn: "Accredited NABL Labs & Free Home Sample",
    subHi: "100% सटीक जांच एवं घर से निःशुल्क सैंपल",
    badgeEn: "Free Home Pickup",
    badgeHi: "निःशुल्क होम सैंपल",
    accentColor: "#0284C7", // Electric Sky / Vibrant Cyan (Distinct from Pharmacy Emerald)
    accentBorder: "#38BDF8",
    badgeBg: "rgba(240, 249, 255, 0.9)",
    badgeText: "#0369A1",
    badgeBorder: "rgba(186, 230, 253, 0.9)",
    iconBg: "#0284C7",
    blobs: [
      "linear-gradient(135deg, #0369A1, #0EA5E9, #38BDF8)",
      "linear-gradient(135deg, #06B6D4, #22D3EE)",
      "linear-gradient(135deg, #0284C7, #7DD3FC)",
      "linear-gradient(135deg, #BAE6FD, #E0F2FE)",
    ],
    icon: FlaskConical,
    descEn:
      "High-accuracy diagnostic tests from certified NABL laboratories with professional technician doorstep sample collection and swift digital reports.",
    descHi:
      "प्रमाणित एनएबीएल मान्यता प्राप्त लैब्स से उच्च सटीकता वाली जांच, प्रशिक्षित तकनीशियन द्वारा घर से सैंपल और त्वरित डिजिटल रिपोर्ट।",
    featuresEn: [
      "100% NABL Accredited Partner Labs",
      "Hygienic Home Sample Collection",
      "Comprehensive Full-Body Health Packages",
    ],
    featuresHi: [
      "100% एनएबीएल मान्यता प्राप्त साथी लैब्स",
      "सुरक्षित एवं स्वच्छ होम सैंपल कलेक्शन",
      "किफायती सम्पूर्ण शरीर स्वास्थ्य पैकेज",
    ],
    actionEn: "Book Lab Test",
    actionHi: "लैब टेस्ट बुक करें",
  },
  {
    id: "pharmacy",
    number: "03",
    titleEn: "Pharmacy Savings",
    titleHi: "दवा बचत एवं होम डिलीवरी",
    subEn: "100% Genuine Medicines & Transparent Discounts",
    subHi: "100% असली दवाइयां, पारदर्शी छूट",
    badgeEn: "Flat 20% Off",
    badgeHi: "सीधी 20% छूट",
    accentColor: "#059669", // Pure Vivid Emerald Green
    accentBorder: "#10B981",
    badgeBg: "rgba(236, 253, 245, 0.9)",
    badgeText: "#047857",
    badgeBorder: "rgba(167, 243, 208, 0.9)",
    iconBg: "#059669",
    blobs: [
      "linear-gradient(135deg, #047857, #10B981, #34D399)",
      "linear-gradient(135deg, #059669, #6EE7B7)",
      "linear-gradient(135deg, #065F46, #10B981)",
      "linear-gradient(135deg, #A7F3D0, #D1FAE5)",
    ],
    icon: Pill,
    descEn:
      "Guaranteed authentic prescription medicines and wellness essentials delivered straight to your home with transparent fixed discount structures.",
    descHi:
      "गारंटीड 100% असली दवाइयां और स्वास्थ्य उत्पाद आपके घर तक, स्पष्ट और पारदर्शी रियायती दरों के साथ।",
    featuresEn: [
      "100% Genuine Certified Medicines",
      "Express Doorstep Delivery",
      "Automated Monthly Chronic Refills",
    ],
    featuresHi: [
      "100% प्रामाणिक एवं सील-बंद दवाइयां",
      "फास्ट होम डिलीवरी सुविधा",
      "मासिक दवाओं की आटोमेटिक डिलीवरी",
    ],
    actionEn: "Order Medicines",
    actionHi: "दवाइयां आर्डर करें",
  },
  {
    id: "ipd",
    number: "04",
    titleEn: "IPD & Surgery",
    titleHi: "अस्पताल भर्ती एवं सर्जरी",
    subEn: "Cashless TPA & Satvik Patient Care",
    subHi: "कैशलेस टीपीए एवं सात्विक भोजन सहयोग",
    badgeEn: "Cashless TPA",
    badgeHi: "कैशलेस टीपीए",
    accentColor: "#4F46E5", // Deep Royal Indigo
    accentBorder: "#6366F1",
    badgeBg: "rgba(238, 242, 255, 0.9)",
    badgeText: "#3730A3",
    badgeBorder: "rgba(199, 210, 254, 0.9)",
    iconBg: "#4F46E5",
    blobs: [
      "linear-gradient(135deg, #3730A3, #6366F1, #818CF8)",
      "linear-gradient(135deg, #4F46E5, #A5B4FC)",
      "linear-gradient(135deg, #312E81, #4338CA)",
      "linear-gradient(135deg, #C7D2FE, #E0E7FF)",
    ],
    icon: Building2,
    descEn:
      "Pre-negotiated transparent surgery packages, day-care procedures without overnight stay, cashless insurance coordination, and Satvik patient meals.",
    descHi:
      "पारदर्शी एवं पूर्व-निर्धारित सर्जरी पैकेज, कैशलेस इंश्योरेंस सहायता, व्यक्तिगत हॉस्पिटल केयर बडी और शुद्ध सात्विक रोगी भोजन।",
    featuresEn: [
      "Fixed Pre-Negotiated Surgery Tariffs",
      "Dedicated On-Ground Hospital Buddy",
      "Satvik Pure Diet & Dignified Care",
    ],
    featuresHi: [
      "पूर्व-निर्धारित पारदर्शी सर्जरी शुल्क",
      "अस्पताल में समर्पित केयर-बडी सहायता",
      "शुद्ध सात्विक भोजन एवं आत्मीय सेवा",
    ],
    actionEn: "Explore Hospital Care",
    actionHi: "अस्पताल सेवाएं देखें",
  },
  {
    id: "family",
    number: "05",
    titleEn: "Family Health Vault",
    titleHi: "फैमिली हेल्थ वॉल्ट",
    subEn: "Unified Multi-Member Health Tracking",
    subHi: "सम्पूर्ण परिवार के स्वास्थ्य रिकॉर्ड एक ही जगह",
    badgeEn: "All-in-One App",
    badgeHi: "सम्पूर्ण परिवार",
    accentColor: "#D97706", // Warm Solar Amber / Gold (Symbolizing Adityam Guardianship & Family)
    accentBorder: "#F59E0B",
    badgeBg: "rgba(254, 243, 199, 0.9)",
    badgeText: "#92400E",
    badgeBorder: "rgba(252, 211, 77, 0.9)",
    iconBg: "#D97706",
    blobs: [
      "linear-gradient(135deg, #B45309, #D97706, #F59E0B)",
      "linear-gradient(135deg, #EA580C, #F97316)",
      "linear-gradient(135deg, #D97706, #FCD34D)",
      "linear-gradient(135deg, #FEF3C7, #FDE68A)",
    ],
    icon: Users,
    descEn:
      "Manage complete medical history, lab reports, immunization schedules, and upcoming checkups for your parents, children, and spouse in one unified family vault.",
    descHi:
      "एक ही सुरक्षित ऐप में अपने माता-पिता, जीवनसाथी और बच्चों के सभी मेडिकल रिकॉर्ड्स, टेस्ट रिपोर्ट, दवा इतिहास और चेकअप को आसानी से ट्रैक करें।",
    featuresEn: [
      "Unified Profiles for Parents, Spouse & Kids",
      "Automated Reminders for Checkups & Meds",
      "One-Tap Report Sharing with Verified Doctors",
    ],
    featuresHi: [
      "माता-पिता, बच्चों और बुजुर्गों के अलग-अलग प्रोफाइल",
      "नियमित चेकअप एवं दवाओं के स्मार्ट रिमाइंडर्स",
      "एक क्लिक पर डॉक्टर के साथ रिपोर्ट साझा करें",
    ],
    actionEn: "Explore Family Vault",
    actionHi: "फैमिली वॉल्ट देखें",
  },
];

export default function PillarsGrid({
  onSelectPillar,
  onOpenBooking,
  lang = "en",
}: PillarsGridProps) {
  const [activeId, setActiveId] = useState("opd");
  const isHi = lang === "hi";
  const sectionRef = useRef<HTMLElement>(null);

  // Locomotive-style scroll momentum tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 85, damping: 26, mass: 0.6 };
  const rawTrayScale = useTransform(scrollYProgress, [0, 0.45], [0.94, 1]);
  const rawTrayY = useTransform(scrollYProgress, [0, 0.45], [50, 0]);
  const rawTrayOpacity = useTransform(scrollYProgress, [0, 0.25], [0.75, 1]);
  const trayScale = useSpring(rawTrayScale, springConfig);
  const trayY = useSpring(rawTrayY, springConfig);

  const handleActionClick = (pillarId: string) => {
    onSelectPillar?.(pillarId);
    if (pillarId === "opd" || pillarId === "family") {
      onOpenBooking?.();
    } else {
      const el = document.getElementById(pillarId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-12 bg-[#FAFAF8] font-sans selection:bg-[#2563EB] selection:text-white scroll-mt-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* =========================================================================
            SECTION HEADER (HERO EDITORIAL TYPOGRAPHY & REFINED PILL)
        ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#172554] tracking-tight leading-[1.08]">
            {isHi ? (
              <>
                एकीकृत स्वास्थ्य सेवा इकोसिस्टम,{" "}
                <span className="italic font-serif text-[#2563EB]">
                  आपके लिए समर्पित
                </span>
              </>
            ) : (
              <>
                Integrated Healthcare Ecosystem,{" "}
                <span className="italic font-serif text-[#2563EB]">
                  Designed for You.
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-[#172554]/70 font-light leading-relaxed max-w-2xl mx-auto">
            {isHi
              ? "पारदर्शी दरों, प्रमाणित डायग्नोस्टिक्स, प्राथमिक ओपीडी और सम्पूर्ण परिवार के डिजिटल रिकॉर्ड्स के साथ हमारी 5 सेवाएं देखें।"
              : "Explore our 5 core pillars of care with transparent pricing, accredited diagnostics, priority OPD, and unified family health tracking."}
          </p>
        </div>

        {/* =========================================================================
            FROSTED GLASS ACCORDION TRAY WITH LOCOMOTIVE MOMENTUM & REVEAL
        ========================================================================= */}
        <motion.div
          style={{
            scale: trayScale,
            y: trayY,
            opacity: rawTrayOpacity,
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          }}
          className="w-full bg-[#E2E8F0]/70 p-3 sm:p-3.5 rounded-[2.2rem] border border-slate-200/90 shadow-lg flex flex-col lg:flex-row gap-2.5 min-h-[600px] lg:h-[590px] overflow-hidden"
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activeId === pillar.id;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActiveId(pillar.id)}
                onClick={() => setActiveId(pillar.id)}
                style={{
                  flex: isActive ? 4 : 1,
                  borderColor: isActive ? pillar.accentBorder : "rgba(226, 232, 240, 0.9)",
                  boxShadow: isActive
                    ? `12px 12px 24px -10px rgba(0,0,0,0.18), 0 0 0 1px ${pillar.accentBorder}30`
                    : "0 2px 8px -2px rgba(0,0,0,0.05)",
                  WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                  isolation: "isolate",
                  transition:
                    "flex 0.45s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                className={`relative rounded-[1.4rem] overflow-hidden cursor-pointer flex flex-col justify-between select-none group border-2 ${isActive ? "z-10" : "hover:border-slate-300"
                  }`}
              >
                {/* ===================================================================
                    UIVERSE LIQUID GRADIENT BLOBS (SAFELY CONTAINED)
                =================================================================== */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 rounded-[inherit]">
                  {/* Blob 1: Top-Left */}
                  <div
                    className="absolute w-40 h-40 rounded-full pointer-events-none"
                    style={{
                      left: "-20px",
                      top: "-20px",
                      background: pillar.blobs[0],
                      filter: "blur(24px)",
                      opacity: isActive ? 0.65 : 0.25,
                      transform: "rotate(12deg)",
                      transition: "opacity 0.4s ease",
                    }}
                  />
                  {/* Blob 2: Bottom-Left */}
                  <div
                    className="absolute w-40 h-40 rounded-full pointer-events-none"
                    style={{
                      left: "-15px",
                      bottom: "-15px",
                      background: pillar.blobs[1],
                      filter: "blur(24px)",
                      opacity: isActive ? 0.65 : 0.2,
                      transform: "rotate(20deg)",
                      transition: "opacity 0.4s ease",
                    }}
                  />
                  {/* Blob 3: Bottom-Right */}
                  <div
                    className="absolute w-44 h-44 rounded-full pointer-events-none"
                    style={{
                      right: "-20px",
                      bottom: "-20px",
                      background: pillar.blobs[2],
                      filter: "blur(26px)",
                      opacity: isActive ? 0.65 : 0.25,
                      transform: "rotate(-10deg)",
                      transition: "opacity 0.4s ease",
                    }}
                  />
                  {/* Blob 4: Top-Right */}
                  <div
                    className="absolute w-40 h-40 rounded-full pointer-events-none"
                    style={{
                      right: "-15px",
                      top: "15px",
                      background: pillar.blobs[3],
                      filter: "blur(24px)",
                      opacity: isActive ? 0.65 : 0.2,
                      transform: "rotate(-25deg)",
                      transition: "opacity 0.4s ease",
                    }}
                  />
                </div>

                {/* ===================================================================
                    FROSTED GLASS OVERLAY (.card__content)
                =================================================================== */}
                <div
                  className="absolute inset-0 pointer-events-none z-[1] rounded-[inherit]"
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.65) 100%)"
                      : "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.82) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    transition: "background 0.35s ease",
                  }}
                />

                {/* ===================================================================
                    FOREGROUND CONTENT LAYER (z-[2])
                =================================================================== */}
                {isActive ? (
                  /* =================================================================
                      EXPANDED ACTIVE CARD VIEW (GENEROUS PADDING, ZERO OVERFLOW)
                  ================================================================= */
                  <div className="relative z-[2] flex flex-col justify-between h-full p-7 sm:p-9 animate-in fade-in duration-300">
                    <div>
                      {/* Top Bar: Number + Frosted Badge + Icon Box */}
                      <div className="flex items-center justify-between mb-6 sm:mb-7">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/90 text-[#172554] border border-white/60 shadow-xs">
                            {pillar.number}
                          </span>
                          <span
                            className="text-xs font-bold px-3.5 py-1 rounded-full border shadow-2xs backdrop-blur-md"
                            style={{
                              backgroundColor: pillar.badgeBg,
                              color: pillar.badgeText,
                              borderColor: pillar.badgeBorder,
                            }}
                          >
                            {isHi ? pillar.badgeHi : pillar.badgeEn}
                          </span>
                        </div>

                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md"
                          style={{ backgroundColor: pillar.iconBg }}
                        >
                          <Icon className="w-6 h-6 stroke-[2]" />
                        </div>
                      </div>

                      {/* Headings in Pure Single-Language (No mixed scripts!) */}
                      <div className="space-y-1.5 mb-4">
                        <h3 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif text-[#172554] tracking-tight leading-tight">
                          {isHi ? pillar.titleHi : pillar.titleEn}
                        </h3>
                        <p
                          className="text-xs sm:text-sm font-semibold tracking-wide uppercase"
                          style={{ color: pillar.accentColor }}
                        >
                          {isHi ? pillar.subHi : pillar.subEn}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed mb-6 sm:mb-8 max-w-lg">
                        {isHi ? pillar.descHi : pillar.descEn}
                      </p>

                      {/* Feature Checkpoints */}
                      <div className="space-y-2.5 mb-6 sm:mb-8">
                        {(isHi ? pillar.featuresHi : pillar.featuresEn).map(
                          (feat, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 text-sm text-[#172554] font-medium"
                            >
                              <CheckCircle2
                                className="w-4 h-4 shrink-0 stroke-[2.2]"
                                style={{ color: pillar.accentColor }}
                              />
                              <span>{feat}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Bar (Elevated with Plenty of Breathing Room) */}
                    <div className="pt-4 border-t border-slate-300/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>
                          {isHi
                            ? "100% नैतिक एवं सत्यापित स्वास्थ्य सेवा"
                            : "100% Ethical & Verified Care"}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleActionClick(pillar.id);
                        }}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold bg-[#172554] hover:bg-[#2563EB] text-white transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>
                          {isHi ? pillar.actionHi : pillar.actionEn}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* =================================================================
                      COLLAPSED INACTIVE CARD VIEW
                  ================================================================= */
                  <div className="relative z-[2] h-full flex flex-col justify-between">
                    {/* Desktop: Elegant Vertical Typography */}
                    <div className="hidden lg:flex flex-col items-center justify-between h-full py-9">
                      <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-[#172554] transition-colors">
                        {pillar.number}
                      </span>

                      <span
                        className="text-xs sm:text-sm font-serif tracking-[0.2em] uppercase text-slate-700 group-hover:text-[#172554] transition-colors text-center"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {isHi ? pillar.titleHi : pillar.titleEn}
                      </span>

                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/70 border border-white/80 text-slate-600 group-hover:text-white transition-all shadow-2xs backdrop-blur-md"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = pillar.accentColor;
                          e.currentTarget.style.borderColor = pillar.accentColor;
                          e.currentTarget.style.color = "#FFFFFF";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "";
                          e.currentTarget.style.borderColor = "";
                          e.currentTarget.style.color = "";
                        }}
                      >
                        <Icon className="w-4 h-4 stroke-[2]" />
                      </div>
                    </div>

                    {/* Mobile: Horizontal Clean Bar */}
                    <div className="lg:hidden flex items-center justify-between p-4 h-full">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-slate-500">
                          {pillar.number}
                        </span>
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/80 text-slate-700 border border-white/60 shrink-0"
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-serif font-bold text-[#172554]">
                          {isHi ? pillar.titleHi : pillar.titleEn}
                        </span>
                      </div>
                      <span
                        className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border backdrop-blur-md"
                        style={{
                          backgroundColor: pillar.badgeBg,
                          color: pillar.badgeText,
                          borderColor: pillar.badgeBorder,
                        }}
                      >
                        {isHi ? pillar.badgeHi : pillar.badgeEn}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* =========================================================================
            COMMUNITY SAVINGS BANNER (FROSTED GLASS MEDICAL CARD)
        ========================================================================= */}
        <motion.div
          style={{
            scale: trayScale,
            y: trayY,
            background: "linear-gradient(135deg, rgba(239, 246, 255, 0.85) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(240, 253, 250, 0.85) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          }}
          className="mt-12 relative rounded-[2rem] p-8 sm:p-10 border border-blue-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden"
        >
          {/* Subtle Ambient Blobs behind the Banner */}
          <div
            className="absolute -top-10 -left-10 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #60A5FA)",
              filter: "blur(35px)",
              opacity: 0.25,
            }}
          />
          <div
            className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background: "linear-gradient(135deg, #0284C7, #38BDF8)",
              filter: "blur(35px)",
              opacity: 0.25,
            }}
          />

          <div className="flex items-start sm:items-center gap-5 relative z-10">
            <div
              className="w-14 h-14 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-md"
            >
              <Percent className="w-7 h-7 stroke-[2.5]" />
            </div>

            <div className="space-y-1.5">


              <h3 className="text-2xl sm:text-3xl font-serif text-[#172554] tracking-tight leading-snug">
                {isHi ? (
                  <>
                    परामर्श, जांच और सर्जरी पर{" "}
                    <span className="italic font-serif text-[#2563EB]">
                      30% तक की सीधी बचत
                    </span>
                  </>
                ) : (
                  <>
                    Up to 30% Direct Savings on{" "}
                    <span className="italic font-serif text-[#2563EB]">
                      Consultations, Scans & Surgeries
                    </span>
                  </>
                )}
              </h3>

              <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl">
                {isHi
                  ? "शून्य बिचौलिया मार्जिन। हमारे मान्यता प्राप्त साथी अस्पतालों के साथ सीधे समझौते द्वारा हर रियायत सीधे मरीज तक पहुंचती है।"
                  : "Zero middleman markups. Every concession is passed directly to families through transparent partner hospital agreements."}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full md:w-auto px-8 py-4 bg-[#172554] hover:bg-[#2563EB] text-white rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 shrink-0 cursor-pointer relative z-10"
          >
            <span>{isHi ? "रियायती ओपीडी बुक करें" : "Book Discounted OPD Now"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
