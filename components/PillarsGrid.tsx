"use client";

import React, { useState, useRef } from "react";
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
  badgeEn: string;
  badgeHi: string;
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
    badgeEn: "Zero Waiting",
    badgeHi: "ज़ीरो वेटिंग",
    accentColor: "#2563EB",
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
      "Direct priority appointments with verified super-specialists across empanelled hospitals with guaranteed zero waiting queues.",
    descHi:
      "मान्यता प्राप्त अस्पतालों में अनुभवी वरिष्ठ डॉक्टरों के साथ प्राथमिकता परामर्श, शून्य प्रतीक्षा समय की गारंटी के साथ।",
    featuresEn: [
      "Senior MD Physicians & Specialists",
      "Priority In-Clinic & Tele-Consultations",
    ],
    featuresHi: [
      "वरिष्ठ एमडी एवं सुपर-स्पेशलिस्ट डॉक्टर",
      "प्राथमिकता इन-क्लीनिक एवं वीडियो परामर्श",
    ],
    actionEn: "Book Doctor Slot",
    actionHi: "डॉक्टर स्लॉट बुक करें",
  },
  {
    id: "labs",
    number: "02",
    titleEn: "Diagnostics & Labs",
    titleHi: "सत्यापित लैब जांच",
    badgeEn: "Free Home Pickup",
    badgeHi: "निःशुल्क होम सैंपल",
    accentColor: "#0284C7",
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
      "Accredited NABL diagnostic pathology tests with trained technician doorstep sample pickup and swift digital reports.",
    descHi:
      "प्रमाणित एनएबीएल मान्यता प्राप्त लैब्स से उच्च सटीकता वाली जांच, घर से निःशुल्क सैंपल और त्वरित डिजिटल रिपोर्ट।",
    featuresEn: [
      "100% NABL Accredited Partner Labs",
      "Hygienic Home Sample Collection",
    ],
    featuresHi: [
      "100% एनएबीएल मान्यता प्राप्त साथी लैब्स",
      "सुरक्षित एवं स्वच्छ होम सैंपल कलेक्शन",
    ],
    actionEn: "Book Lab Test",
    actionHi: "लैब टेस्ट बुक करें",
  },
  {
    id: "pharmacy",
    number: "03",
    titleEn: "Pharmacy Savings",
    titleHi: "दवा बचत व डिलीवरी",
    badgeEn: "Flat 20% Off",
    badgeHi: "सीधी 20% छूट",
    accentColor: "#059669",
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
      "Authentic prescription medicines and daily healthcare essentials delivered directly to your home with flat discount savings.",
    descHi:
      "गारंटीड 100% असली दवाइयां और स्वास्थ्य उत्पाद आपके घर तक, स्पष्ट और पारदर्शी रियायती दरों के साथ।",
    featuresEn: [
      "100% Genuine Sealed Medicines",
      "Express Doorstep Delivery & Refills",
    ],
    featuresHi: [
      "100% प्रामाणिक एवं सील-बंद दवाइयां",
      "फास्ट होम डिलीवरी सुविधा",
    ],
    actionEn: "Order Medicines",
    actionHi: "दवाइयां आर्डर करें",
  },
  {
    id: "ipd",
    number: "04",
    titleEn: "Hospital Care & IPD",
    titleHi: "अस्पताल भर्ती एवं सर्जरी",
    badgeEn: "Cashless TPA",
    badgeHi: "कैशलेस टीपीए",
    accentColor: "#4F46E5",
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
      "Pre-negotiated transparent surgery packages, cashless insurance assistance, dedicated care buddies, and pure Satvik meals.",
    descHi:
      "पारदर्शी एवं पूर्व-निर्धारित सर्जरी पैकेज, कैशलेस इंश्योरेंस सहायता, समर्पित केयर बडी और शुद्ध सात्विक रोगी भोजन।",
    featuresEn: [
      "Pre-Negotiated Transparent Surgery Tariffs",
      "Dedicated Care Buddy & Satvik Patient Meals",
    ],
    featuresHi: [
      "पूर्व-निर्धारित पारदर्शी सर्जरी शुल्क",
      "समर्पित केयर-बडी व सात्विक भोजन",
    ],
    actionEn: "Explore Hospital Care",
    actionHi: "अस्पताल सेवाएं देखें",
  },
  {
    id: "family",
    number: "05",
    titleEn: "Family Health Vault",
    titleHi: "फैमिली हेल्थ वॉल्ट",
    badgeEn: "All-in-One App",
    badgeHi: "सम्पूर्ण परिवार",
    accentColor: "#D97706",
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
      "Manage medical history, lab reports, and doctor consultations for parents, children, and spouse in one unified family vault.",
    descHi:
      "एक ही सुरक्षित जगह पर अपने माता-पिता, जीवनसाथी और बच्चों के सभी मेडिकल रिकॉर्ड्स, टेस्ट रिपोर्ट और दवा इतिहास ट्रैक करें।",
    featuresEn: [
      "Multi-Member Family Profiles",
      "One-Tap Instant Doctor Report Sharing",
    ],
    featuresHi: [
      "माता-पिता और बच्चों के अलग प्रोफाइल",
      "डॉक्टर के साथ एक क्लिक पर रिपोर्ट साझा",
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

  const handleActionClick = (pillarId: string) => {
    onSelectPillar?.(pillarId);
    if (pillarId === "opd" || pillarId === "family") {
      onOpenBooking?.();
    } else {
      const el = document.getElementById(pillarId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activePillar = PILLARS.find((p) => p.id === activeId) || PILLARS[0];
  const ActiveIcon = activePillar.icon;

  return (
    <section
      ref={sectionRef}
      id="services"
      className="pt-16 sm:pt-20 pb-16 bg-[#FAFAF8] font-sans selection:bg-[#2563EB] selection:text-white scroll-mt-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* SECTION HEADER: Clean, Focused, No Word Overload */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#172554] tracking-tight leading-[1.15]">
            {isHi ? (
              <>
                एकीकृत स्वास्थ्य सेवा इकोसिस्टम,{" "}
                <span className="italic font-serif text-[#2563EB]">
                  आपके लिए
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

          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            {isHi
              ? "पारदर्शी दरों, प्रमाणित डायग्नोस्टिक्स और सम्पूर्ण परिवार के लिए समर्पित 5 मुख्य सेवाएं।"
              : "5 core pillars of healthcare built on transparent pricing, accredited diagnostics, and compassionate family care."}
          </p>
        </div>

        {/* =========================================================================
            MOBILE VIEW: SLEEK SEGMENTED PILL SWITCHER + SINGLE CLEAN ACTIVE CARD
        ========================================================================= */}
        <div className="lg:hidden">
          {/* Horizontal Pill Tab Bar */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/70 rounded-2xl mb-4 overflow-x-auto no-scrollbar border border-slate-200/90 shadow-2xs">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              const isTabActive = activeId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveId(p.id)}
                  className={`flex items-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isTabActive
                      ? "bg-white text-[#172554] shadow-sm border border-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Icon
                    className="w-3.5 h-3.5 shrink-0"
                    style={{ color: isTabActive ? p.accentColor : "inherit" }}
                  />
                  <span>
                    {isHi
                      ? p.titleHi.split(" ")[0]
                      : p.titleEn.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Single Clean Active Card on Mobile */}
          <div
            style={{
              borderColor: activePillar.accentBorder,
              boxShadow: `0 12px 28px -8px rgba(0,0,0,0.12), 0 0 0 1px ${activePillar.accentBorder}35`,
            }}
            className="relative rounded-2xl overflow-hidden p-6 bg-white border-2 select-none"
          >
            {/* Liquid Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <div
                className="absolute w-44 h-44 rounded-full pointer-events-none"
                style={{
                  left: "-20px",
                  top: "-20px",
                  background: activePillar.blobs[0],
                  filter: "blur(24px)",
                  opacity: 0.65,
                }}
              />
              <div
                className="absolute w-44 h-44 rounded-full pointer-events-none"
                style={{
                  right: "-20px",
                  bottom: "-20px",
                  background: activePillar.blobs[2],
                  filter: "blur(24px)",
                  opacity: 0.65,
                }}
              />
            </div>

            {/* Frosted Overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.75) 100%)",
                backdropFilter: "blur(18px)",
              }}
            />

            {/* Card Content */}
            <div className="relative z-[2] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-white text-[#172554] border border-slate-200 shadow-2xs">
                    {activePillar.number}
                  </span>
                  <span
                    className="text-xs font-bold px-3 py-0.5 rounded-full border shadow-2xs"
                    style={{
                      backgroundColor: activePillar.badgeBg,
                      color: activePillar.badgeText,
                      borderColor: activePillar.badgeBorder,
                    }}
                  >
                    {isHi ? activePillar.badgeHi : activePillar.badgeEn}
                  </span>
                </div>

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                  style={{ backgroundColor: activePillar.iconBg }}
                >
                  <ActiveIcon className="w-5 h-5 stroke-[2]" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-[#172554] leading-tight">
                  {isHi ? activePillar.titleHi : activePillar.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed mt-1.5">
                  {isHi ? activePillar.descHi : activePillar.descEn}
                </p>
              </div>

              {/* Checkpoints */}
              <div className="space-y-2 pt-1">
                {(isHi ? activePillar.featuresHi : activePillar.featuresEn).map(
                  (feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-[#172554] font-medium"
                    >
                      <CheckCircle2
                        className="w-4 h-4 shrink-0"
                        style={{ color: activePillar.accentColor }}
                      />
                      <span>{feat}</span>
                    </div>
                  )
                )}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleActionClick(activePillar.id)}
                  className="w-full py-3 rounded-xl text-xs font-bold bg-[#172554] text-white transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>
                    {isHi ? activePillar.actionHi : activePillar.actionEn}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            DESKTOP VIEW: HORIZONTAL ACCORDION TRAY WITH LIQUID GRADIENT BLOBS
        ========================================================================= */}
        <div
          className="hidden lg:flex w-full bg-[#E2E8F0]/70 p-3 sm:p-3.5 rounded-[2.2rem] border border-slate-200/90 shadow-lg gap-2.5 h-[560px] overflow-hidden"
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activeId === pillar.id;

            return (
              <div
                key={pillar.id}
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
                    "flex 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                className={`relative rounded-[1.4rem] overflow-hidden cursor-pointer flex flex-col justify-between select-none group border-2 ${
                  isActive ? "z-10" : "hover:border-slate-300"
                }`}
              >
                {/* Liquid Gradient Blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 rounded-[inherit]">
                  <div
                    className="absolute w-44 h-44 rounded-full pointer-events-none"
                    style={{
                      left: "-20px",
                      top: "-20px",
                      background: pillar.blobs[0],
                      filter: "blur(24px)",
                      opacity: isActive ? 0.7 : 0.25,
                      transform: "rotate(12deg)",
                      transition: "opacity 0.4s ease",
                    }}
                  />
                  <div
                    className="absolute w-44 h-44 rounded-full pointer-events-none"
                    style={{
                      left: "-15px",
                      bottom: "-15px",
                      background: pillar.blobs[1],
                      filter: "blur(24px)",
                      opacity: isActive ? 0.7 : 0.2,
                      transform: "rotate(20deg)",
                      transition: "opacity 0.4s ease",
                    }}
                  />
                  <div
                    className="absolute w-48 h-48 rounded-full pointer-events-none"
                    style={{
                      right: "-20px",
                      bottom: "-20px",
                      background: pillar.blobs[2],
                      filter: "blur(26px)",
                      opacity: isActive ? 0.7 : 0.25,
                      transform: "rotate(-10deg)",
                      transition: "opacity 0.4s ease",
                    }}
                  />
                  <div
                    className="absolute w-44 h-44 rounded-full pointer-events-none"
                    style={{
                      right: "-15px",
                      top: "15px",
                      background: pillar.blobs[3],
                      filter: "blur(24px)",
                      opacity: isActive ? 0.7 : 0.2,
                      transform: "rotate(-25deg)",
                      transition: "opacity 0.4s ease",
                    }}
                  />
                </div>

                {/* Frosted Glass Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none z-[1] rounded-[inherit]"
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.7) 100%)"
                      : "linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(248, 250, 252, 0.85) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    transition: "background 0.35s ease",
                  }}
                />

                {/* Foreground Content */}
                {isActive ? (
                  <div className="relative z-[2] flex flex-col justify-between h-full p-8 animate-in fade-in duration-300">
                    <div>
                      {/* Top Bar: Number + Frosted Badge + Icon Box */}
                      <div className="flex items-center justify-between mb-6">
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

                      {/* Headings */}
                      <div className="space-y-1 mb-4">
                        <h3 className="text-3xl lg:text-4xl font-serif text-[#172554] tracking-tight leading-tight">
                          {isHi ? pillar.titleHi : pillar.titleEn}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-700 font-normal leading-relaxed mb-6 max-w-lg">
                        {isHi ? pillar.descHi : pillar.descEn}
                      </p>

                      {/* Feature Checkpoints */}
                      <div className="space-y-2.5 mb-6">
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

                    {/* Bottom Action Bar */}
                    <div className="pt-4 border-t border-slate-300/60 flex items-center justify-between gap-4">
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
                        className="px-8 py-3 rounded-full text-sm font-semibold bg-[#172554] hover:bg-[#2563EB] text-white transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>
                          {isHi ? pillar.actionHi : pillar.actionEn}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Collapsed Desktop Bar */
                  <div className="relative z-[2] h-full flex flex-col justify-between items-center py-9">
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
                )}
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            COMMUNITY SAVINGS BANNER (CLEAN HARDWARE ACCELERATED MEDICAL CARD)
        ========================================================================= */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(239, 246, 255, 0.95) 0%, rgba(255, 255, 255, 0.98) 50%, rgba(240, 253, 250, 0.95) 100%)",
          }}
          className="mt-10 relative rounded-[2rem] p-6 sm:p-10 border border-blue-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
        >
          <div
            className="absolute -top-10 -left-10 w-48 h-48 rounded-full pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle, #0284C7 0%, transparent 70%)",
            }}
          />

          <div className="flex items-start sm:items-center gap-4 relative z-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-md">
              <Percent className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#172554] tracking-tight leading-snug">
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

              <p className="text-slate-600 font-light text-xs sm:text-sm leading-relaxed max-w-2xl">
                {isHi
                  ? "शून्य बिचौलिया मार्जिन। सीधे मान्यता प्राप्त अस्पतालों से अनुबंधित रियायतें।"
                  : "Zero middleman markups. Direct concessions passed to families through accredited hospital agreements."}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full md:w-auto px-7 py-3.5 bg-[#172554] hover:bg-[#2563EB] text-white rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 shrink-0 cursor-pointer relative z-10"
          >
            <span>{isHi ? "रियायती ओपीडी बुक करें" : "Book Discounted OPD"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
