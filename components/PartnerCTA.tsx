"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Building2,
  TrendingUp,
  ShieldCheck,
  Award,
  Users2,
  FileCheck2,
  ArrowRight,
  Handshake,
  Clock,
  Sparkles,
  PhoneCall,
  BadgeCheck,
} from "lucide-react";

interface PartnerCTAProps {
  lang?: "en" | "hi";
  onOpenPartner?: () => void;
}

export default function PartnerCTA({
  lang = "en",
  onOpenPartner,
}: PartnerCTAProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Locomotive-style smooth scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Spring physics for ultra-fluid momentum
  const springConfig = { stiffness: 85, damping: 26, mass: 0.6 };

  // Parallax float for atmospheric depth orbs
  const rawOrb1Y = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const rawOrb2Y = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const orb1Y = useSpring(rawOrb1Y, springConfig);
  const orb2Y = useSpring(rawOrb2Y, springConfig);

  // Card reveal & scale dynamics as section enters viewport
  const rawCardScale = useTransform(scrollYProgress, [0, 0.45], [0.93, 1]);
  const rawCardY = useTransform(scrollYProgress, [0, 0.45], [55, 0]);
  const rawCardOpacity = useTransform(scrollYProgress, [0, 0.25], [0.65, 1]);
  const cardScale = useSpring(rawCardScale, springConfig);
  const cardY = useSpring(rawCardY, springConfig);

  // Locomotive staggered parallax offset for the right-hand verification console
  const rawRightColY = useTransform(scrollYProgress, [0.1, 0.9], [40, -40]);
  const rightColY = useSpring(rawRightColY, springConfig);

  const benefits = [
    {
      icon: TrendingUp,
      titleEn: "Expanded Patient Reach",
      titleHi: "विशाल मरीज समुदाय",
      descEn: "Connect with thousands of patients seeking trusted, verified healthcare providers across key urban centers.",
      descHi: "प्रमुख शहरों में विश्वसनीय व प्रमाणित चिकित्सा की खोज कर रहे हजारों मरीजों तक सीधी पहुंच।",
      badgeColor: "text-sky-400 bg-sky-950/60 border-sky-500/30",
    },
    {
      icon: FileCheck2,
      titleEn: "Streamlined Digital OPD",
      titleHi: "कतार-मुक्त डिजिटल ओपीडी",
      descEn: "Zero manual queue friction. Automated digital appointment scheduling, token management, and pre-consult history.",
      descHi: "रिसेप्शन पर भीड़ से मुक्ति। स्वचालित डिजिटल टोकन, पूर्व-अपॉइंटमेंट और मरीज हिस्ट्री।",
      badgeColor: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
    },
    {
      icon: Users2,
      titleEn: "Verified Community Trust",
      titleHi: "विश्वसनीय सामाजिक साख",
      descEn: "Direct access to an engaged community that values ethical medical standards, high compliance, and mutual respect.",
      descHi: "नैतिक चिकित्सा मानकों, अनुशासन और परस्पर सम्मान को महत्व देने वाले समुदाय से सीधा जुड़ाव।",
      badgeColor: "text-amber-400 bg-amber-950/60 border-amber-500/30",
    },
    {
      icon: Award,
      titleEn: "Enhanced Institutional Brand",
      titleHi: "प्रतिष्ठित संस्थागत पहचान",
      descEn: "Position your hospital or clinic as a benchmark of transparency, dignified care, and community leadership.",
      descHi: "अपने अस्पताल को पारदर्शिता, गरिमापूर्ण सेवा और परोपकारी नेतृत्व के नए मानक के रूप में स्थापित करें।",
      badgeColor: "text-purple-400 bg-purple-950/60 border-purple-500/30",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="for-providers"
      className="py-24 sm:py-32 font-sans select-none relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #020409 0%, #060E1F 20%, #0A1633 50%, #172B56 80%, #FAFAF8 100%)",
      }}
    >
      {/* 3D Atmospheric Soft Lighting Orbs with Parallax Float */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-10 left-10 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-amber-500/12 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* ==============================================================
            MAIN ARCHITECTURAL PARTNERSHIP SLAB with Locomotive Momentum Reveal
        ============================================================== */}
        <motion.div
          style={{
            scale: cardScale,
            y: cardY,
            opacity: rawCardOpacity,
          }}
          className="relative bg-gradient-to-br from-[#0B1B4D] via-[#0E235E] to-[#071333] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] p-8 sm:p-12 lg:p-16 border-2 border-[#1E3A8A]/60 border-b-[8px] border-b-[#050D24]"
        >
          {/* Subtle Ambient Radial Glows inside Card */}
          <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* ============================================================
                LEFT COLUMN: Core Value Proposition & 4 Benefits
            ============================================================ */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* 3D Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold border border-white/20 border-b-2 border-b-amber-500 shadow-md">
                <Handshake className="w-4 h-4 text-amber-400" />
                <span>
                  {lang === "hi"
                    ? "अस्पताल एवं चिकित्सक संबद्धता कार्यक्रम"
                    : "HEALTHCARE PARTNERSHIP PROGRAM"}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.12]">
                {lang === "hi" ? (
                  <>
                    हमारे नेटवर्क से जुड़ें। <br />
                    <span className="italic font-serif text-amber-300">
                      सेवा और स्वास्थ्य का नया मानक बनाएं।
                    </span>
                  </>
                ) : (
                  <>
                    Join Our Network. <br />
                    <span className="italic font-serif text-amber-300">
                      Let Us Build Dignified Care Together.
                    </span>
                  </>
                )}
              </h2>

              <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                {lang === "hi"
                  ? "आदित्यम् निरामय से संबद्धता केवल एक औपचारिक अनुबंध नहीं — यह गरिमापूर्ण, पारदर्शी और समर्पित चिकित्सा का पावन संकल्प है। अपने अस्पताल को नैतिक संस्थागत मरीज प्रवाह से सशक्त करें।"
                  : "Partnering with Adityam Niramayaa is more than a commercial agreement — it is a commitment to purposeful growth. Empower your hospital or practice with qualified patient flow while upholding human dignity."}
              </p>

              {/* 4 Benefits Grid (3D Solid Mini-Slabs with Smooth Hover Response) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {benefits.map((item, idx) => {
                  const Icon = item.icon;
                  const title = lang === "hi" ? item.titleHi : item.titleEn;
                  const desc = lang === "hi" ? item.descHi : item.descEn;

                  return (
                    <div
                      key={idx}
                      className="bg-[#071330] border border-[#172D61] border-b-[3px] border-b-[#050F26] rounded-2xl p-4.5 hover:border-amber-400/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-default"
                    >
                      <div className="flex items-center gap-2.5 mb-2 font-serif font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center border shadow-xs ${item.badgeColor} group-hover:scale-105 transition-transform`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>{title}</span>
                      </div>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* 3D Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenPartner?.()}
                  className="px-8 py-4 bg-gradient-to-b from-[#F59E0B] to-[#D97706] hover:from-[#FBBF24] hover:to-[#F59E0B] text-slate-950 font-black text-xs sm:text-sm rounded-2xl shadow-xl border border-amber-300 border-b-[4px] border-b-[#92400E] active:border-b-0 active:translate-y-1 transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <Building2 className="w-4 h-4 text-slate-950" />
                  <span>
                    {lang === "hi"
                      ? "अस्पताल संबद्धता फॉर्म भरें"
                      : "Register Your Hospital / Clinic"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-xs text-slate-300 flex items-center gap-2 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {lang === "hi"
                      ? "प्रमाणित अस्पतालों हेतु शून्य पंजीकरण शुल्क"
                      : "Zero upfront listing fee for accredited centers"}
                  </span>
                </div>
              </div>

            </div>

            {/* ============================================================
                RIGHT COLUMN: Locomotive Floating Verification Console
            ============================================================ */}
            <motion.div
              style={{ y: rightColY }}
              className="lg:col-span-5 bg-[#061229] border-2 border-[#1E3A8A]/80 border-b-[6px] border-b-[#030A17] rounded-[2rem] p-7 sm:p-8 text-white space-y-6 shadow-2xl transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.25)]"
            >
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-amber-400" />
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                    {lang === "hi"
                      ? "संस्थागत नेटवर्क मानक"
                      : "Institutional Network Standards"}
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>

              {/* Verified Sample Hospitals Chips */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                  {lang === "hi" ? "प्रमुख संबद्ध अस्पताल" : "Empanelled Network Anchors"}
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-[#0C1E42] border border-[#1E3A8A] text-sky-200 px-3 py-1 rounded-xl font-medium shadow-xs hover:border-sky-400 transition-colors">
                    🏥 Jain ENT Hospital
                  </span>
                  <span className="bg-[#0C1E42] border border-[#1E3A8A] text-sky-200 px-3 py-1 rounded-xl font-medium shadow-xs hover:border-sky-400 transition-colors">
                    🏥 CKS Hospital
                  </span>
                  <span className="bg-[#0C1E42] border border-[#1E3A8A] text-sky-200 px-3 py-1 rounded-xl font-medium shadow-xs hover:border-sky-400 transition-colors">
                    🏥 Arihant Hospital
                  </span>
                  <span className="bg-[#0C1E42] border border-[#1E3A8A] text-sky-200 px-3 py-1 rounded-xl font-medium shadow-xs hover:border-sky-400 transition-colors">
                    🏥 Mahaveer Hospital
                  </span>
                </div>
              </div>

              {/* Statistics Strip */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs text-slate-300 font-light">
                    {lang === "hi" ? "संबद्ध विशेषज्ञ डॉक्टर्स" : "Empanelled Specialists"}
                  </span>
                  <span className="text-base font-extrabold text-white">2,500+</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs text-slate-300 font-light">
                    {lang === "hi" ? "सहयोगी अस्पताल एवं केंद्र" : "Partner Hospitals & Pavilions"}
                  </span>
                  <span className="text-base font-extrabold text-white">500+</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs text-slate-300 font-light">
                    {lang === "hi" ? "कैशलेस TPA बीमा सहायता" : "100% Cashless TPA Desks"}
                  </span>
                  <span className="text-sm font-bold text-emerald-400">Integrated</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-light">
                    {lang === "hi" ? "औसत सत्यापन एवं ऑनबोर्डिंग" : "Average Onboarding Time"}
                  </span>
                  <span className="text-sm font-bold text-amber-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>48 Hours</span>
                  </span>
                </div>
              </div>

              {/* Direct Institutional Helpline */}
              <div className="p-4 bg-[#0B1E45] border border-[#1E3A8A] rounded-2xl flex items-center justify-between text-xs">
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    {lang === "hi" ? "संस्थागत डेस्क फोन" : "Institutional Desk"}
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    1800-208-1008
                  </div>
                </div>
                <a
                  href="tel:18002081008"
                  className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Now</span>
                </a>
              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
