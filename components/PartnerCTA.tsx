"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope,
  Building2,
  CheckCircle2,
  Lock,
  Clock,
  CreditCard,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

interface PartnerCTAProps {
  lang?: "en" | "hi";
  onOpenPartner?: () => void;
}

export default function PartnerCTA({
  lang = "en",
}: PartnerCTAProps) {
  const isHi = lang === "hi";

  const trustPillars = [
    {
      icon: Lock,
      titleEn: "100% Confidential",
      titleHi: "१००% पूर्ण गोपनीयता",
      descEn: "Strict DPDP Act 2023 compliance. Zero sale or commercialization of patient health data.",
      descHi: "डीपीडीपी एक्ट २०२३ के अनुसार मरीज डेटा की पूर्ण सुरक्षा। कोई व्यावसायिक सौदा नहीं।",
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      icon: Stethoscope,
      titleEn: "Certified Specialists",
      titleHi: "प्रमाणित विशेषज्ञ डॉक्टर्स",
      descEn: "Every doctor is council-verified with transparent credentials and audited clinical track records.",
      descHi: "प्रत्येक डॉक्टर मेडिकल काउंसिल द्वारा सत्यापित और अनुभवी चिकित्सा पृष्ठभूमि से संबद्ध।",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      icon: Clock,
      titleEn: "Queue-Free OPD",
      titleHi: "कतार-मुक्त ओपीडी",
      descEn: "Digital token management to bypass general reception queues and long waiting hours.",
      descHi: "डिजिटल टोकन से अस्पताल रिसेप्शन पर लंबी कतारों और अनावश्यक प्रतीक्षा से मुक्ति।",
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      icon: CreditCard,
      titleEn: "Pre-Fixed Fair Tariffs",
      titleHi: "पूर्व-निर्धारित निष्पक्ष दरें",
      descEn: "Direct institutional pricing with zero middleman commissions or surprise hospital billing.",
      descHi: "सीधे रियायती संस्थागत दरें। कोई मध्यस्थ कमीशन नहीं और न ही कोई छिपा हुआ बिल।",
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
  ];

  return (
    <section id="for-providers" className="py-16 sm:py-24 bg-[#F8FAFC] font-sans border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ====================================================================
            1. TATA 1MG STYLE "ARE YOU A DOCTOR?" BANNER
        ==================================================================== */}
        <div className="relative bg-gradient-to-br from-[#FFFDF8] via-[#FAF7EE] to-[#F5EEDB] rounded-3xl p-6 sm:p-10 lg:p-12 border border-amber-200/80 shadow-md overflow-hidden">
          {/* Subtle Ambient Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left: Doctor & Hospital Illustration */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-64 h-64 sm:w-76 sm:h-76 lg:w-84 lg:h-84 drop-shadow-2xl group">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-500/25 to-amber-400/25 rounded-full blur-xl group-hover:scale-105 transition-transform" />
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white shadow-lg border-4 border-white/90">
                  <Image
                    src="/images/doc+hoso.png"
                    alt={isHi ? "डॉक्टर एवं अस्पताल संबद्धता" : "Are you a doctor or hospital? Partner with Adityam Niramayaa"}
                    fill
                    sizes="(max-width: 768px) 280px, 360px"
                    className="object-cover group-hover:scale-103 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right: Clean, Inviting Copy & Action Buttons */}
            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2 text-left">

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-900 text-xs font-bold border border-amber-400/30">

                <span>{isHi ? "चिकित्सक एवं अस्पताल संबद्धता" : "For Doctors & Healthcare Providers"}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {isHi ? (
                  <>
                    क्या आप एक डॉक्टर या अस्पताल संचालक हैं? <br />
                    <span className="text-blue-700 font-serif italic font-normal text-xl sm:text-2xl lg:text-3xl">
                      हमारे समर्पित पैनल से जुड़ें।
                    </span>
                  </>
                ) : (
                  <>
                    Are you a Doctor or Hospital? <br />
                    <span className="text-blue-700 font-serif italic font-normal text-xl sm:text-2xl lg:text-3xl">
                      Join Our Verified Healthcare Panel.
                    </span>
                  </>
                )}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl font-normal">
                {isHi
                  ? "हजारों मरीजों से सीधा जुड़ाव। बिना किसी पंजीकरण शुल्क के डिजिटल ओपीडी, पूर्व-सत्यापित मरीज हिस्ट्री और कैशलेस अस्पताल सहायता प्राप्त करें।"
                  : "Be a part of our certified specialist network. Connect with patients in your city, manage digital OPD appointments effortlessly, and offer cashless care with zero listing fees."}
              </p>

              {/* 3 Value Bullets */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-700 pt-1 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{isHi ? "शून्य पंजीकरण शुल्क" : "Zero Listing Fees"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{isHi ? "48 घंटे में ऑनबोर्डिंग" : "48-Hour Onboarding"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{isHi ? "डिजिटल टोकन ओपीडी" : "Queue-Free Digital OPD"}</span>
                </div>
              </div>

              {/* Dual Action Buttons (Clean & Premium) */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/join-network#register-doctor"
                  className="px-6 py-3 bg-[#0A1128] hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2 hover:translate-y-[-1px] active:translate-y-0 cursor-pointer"
                >
                  <Stethoscope className="w-4 h-4 text-blue-400" />
                  <span>{isHi ? "डॉक्टर पंजीकरण" : "Register as Doctor"}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>

                <Link
                  href="/join-network#register-hospital"
                  className="px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm rounded-xl border border-slate-300 shadow-2xs transition-all flex items-center gap-2 hover:translate-y-[-1px] active:translate-y-0 cursor-pointer"
                >
                  <Building2 className="w-4 h-4 text-amber-600" />
                  <span>{isHi ? "अस्पताल जोड़ें" : "Empanel Hospital"}</span>
                </Link>

                <a
                  href="tel:18002081008"
                  className="text-xs text-slate-600 hover:text-slate-900 font-semibold flex items-center gap-1.5 ml-1"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                  <span>1800-208-1008</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* ====================================================================
            2. TATA 1MG STYLE STATS STRIP (Clean & Authoritative)
        ==================================================================== */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-center">
          <div className="pt-2 sm:pt-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 font-sans tracking-tight">
              2,500+
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-1">
              {isHi ? "सत्यापित विशेषज्ञ डॉक्टर्स" : "Empanelled Specialists"}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {isHi ? "एम्स व शीर्ष संस्थानों के अनुभवी चिकित्सक" : "Verified council credentials"}
            </div>
          </div>

          <div className="pt-4 sm:pt-0 sm:pl-8">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-sans tracking-tight">
              500+
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-1">
              {isHi ? "सहयोगी अस्पताल एवं क्लिनिक्स" : "Partner Hospitals & Pavilions"}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {isHi ? "जयपुर, दिल्ली एनसीआर, मुंबई, इंदौर" : "Key urban healthcare hubs"}
            </div>
          </div>

          <div className="pt-4 sm:pt-0 sm:pl-8">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-sans tracking-tight">
              100%
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-1">
              {isHi ? "कैशलेस टीपीए डेस्क सहायता" : "Cashless TPA Desks"}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {isHi ? "अस्पताल मित्र ऑन-ग्राउंड सहयोग" : "Zero middleman disputes"}
            </div>
          </div>
        </div>

        {/* ====================================================================
            3. TATA 1MG STYLE 4 TRUST PILLARS
        ==================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const title = isHi ? pillar.titleHi : pillar.titleEn;
            const desc = isHi ? pillar.descHi : pillar.descEn;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-3.5 ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
