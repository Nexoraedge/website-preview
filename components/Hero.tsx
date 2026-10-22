"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Building2,
  CheckCircle2,
} from "lucide-react";

interface HeroProps {
  lang?: "en" | "hi";
  onOpenBooking?: (doctorName?: string, specialty?: string) => void;
  onOpenPartner?: () => void;
  onOpenApp?: () => void;
  onOpenVision?: () => void;
  onSearchSubmit?: (query: string, tab: string) => void;
}

export default function Hero({
  lang = "en",
  onOpenBooking,
  onOpenPartner,
  onOpenApp,
  onOpenVision,
}: HeroProps) {
  return (
    <div className="bg-[#FAFAF8] font-sans selection:bg-[#2563EB] selection:text-white pb-20">
      <main className="pt-20 sm:pt-28 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* Soft Spiritual Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#2563EB]/20 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 sm:mb-8 shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse"></span>
          <span>
            {lang === "hi"
              ? "जैन दर्शन व मूल्यों से प्रेरित स्वास्थ्य सेवा"
              : "Care Inspired by Jain Values"}
          </span>
          <span className="text-blue-300">•</span>
          <span className="text-amber-600 font-bold">आदित्यम् अनुकम्पा</span>
        </motion.div>

        {/* Center Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {lang === "hi" ? (
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-serif text-[#172554] leading-[1.1] tracking-tight max-w-4xl mx-auto">
              स्वास्थ्य सेवा,{" "}
              <span className="text-[#2563EB] italic font-serif">सबके लिए।</span>
            </h1>
          ) : (
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-[#172554] leading-[1.05] tracking-tight max-w-4xl mx-auto">
              Healthcare for{" "}
              <span className="text-[#2563EB] italic font-serif">Everyone.</span>
            </h1>
          )}
        </motion.div>

        {/* Center Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {lang === "hi" ? (
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#172554]/75 max-w-2xl mx-auto font-light leading-relaxed">
              चिकित्सा देखभाल में सुलभता, वहनीयता और गरिमा लाने की एक पावन दूरदर्शी पहल।{" "}
              प्रेरणा स्रोत{" "}
              <strong className="font-semibold text-[#172554]">
                पूज्य मुनि 108 श्री आदित्य सागर जी महाराज
              </strong>{" "}
              एवं विजन{" "}
              <strong className="font-semibold text-[#172554]">अभिषेक जैन</strong>।
            </p>
          ) : (
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#172554]/70 max-w-2xl mx-auto font-light leading-relaxed">
              A visionary initiative improving access, affordability, and dignity in medical care.
              Inspired by{" "}
              <strong className="font-semibold text-[#172554]">
                Muni Aditya Sagar Ji Maharaj
              </strong>{" "}
              and shaped by the vision of{" "}
              <strong className="font-semibold text-[#172554]">Abhishek Jain</strong>.
            </p>
          )}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10"
        >
          <button
            type="button"
            onClick={onOpenApp}
            className="flex items-center justify-center gap-2 bg-[#172554] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#2563EB] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{lang === "hi" ? "ऐप डाउनलोड करें" : "Download the App"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onOpenPartner}
            className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-[#172554] px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 transition-all shadow-sm cursor-pointer"
          >
            <Building2 className="w-4 h-4 text-[#2563EB]" />
            <span>{lang === "hi" ? "प्रदाता नेटवर्क से जुड़ें" : "Join Provider Network"}</span>
          </button>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{lang === "hi" ? "पारदर्शी मूल्य निर्धारण" : "Zero Hidden Fees"}</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
            <span>{lang === "hi" ? "प्राथमिकता ओपीडी स्लॉट" : "Priority Doctor OPD"}</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-600" />
            <span>{lang === "hi" ? "NABL प्रमाणित लैब" : "NABL Certified Diagnostics"}</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-indigo-600" />
            <span>{lang === "hi" ? "सात्विक भोजन सहयोग" : "Satvik Hospital Assistance"}</span>
          </span>
        </motion.div>

        {/* Massive Cinematic Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-14 sm:mt-16 w-full max-w-6xl aspect-[16/7] bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-gray-200"
        >
          {/* High-End Clinical Photograph */}
          <Image
            src="/images/doctor_consultation.jpg"
            alt="Adityam Niramayaa Premium Healthcare Facility"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="w-full h-full object-cover"
            priority
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/40 via-transparent to-transparent z-10" />

          {/* Top-Right Floating Blessing Emblem */}
          <button
            type="button"
            onClick={onOpenVision}
            className="absolute top-6 right-6 md:top-8 md:right-8 z-20 bg-[#0B1B4D]/85 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-amber-400/40 shadow-xl hidden sm:flex items-center gap-3 text-left hover:scale-102 transition-transform cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-amber-400 shrink-0">
              <Image
                src="/images/muni_aditya_blessing_aura.jpg"
                alt="Muni Aditya Sagar Ji Maharaj"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-[10px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>{lang === "hi" ? "पावन प्रेरणा" : "Prerna Srot"}</span>
              </div>
              <p className="text-xs font-bold text-white leading-tight">
                Muni Aditya Sagar Ji Maharaj
              </p>
            </div>
          </button>

          {/* Floating Glassmorphism Stat Card over the image */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 bg-white/85 backdrop-blur-xl p-5 rounded-2xl border border-white/60 shadow-lg text-left">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
              <p className="text-sm font-semibold text-[#172554]">
                {lang === "hi" ? "विश्वसनीय स्वास्थ्य नेटवर्क" : "Trusted Ecosystem"}
              </p>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              {lang === "hi" ? "50,000+ संतुष्ट परिवार" : "50,000+ members joining"}
            </p>
          </div>

          {/* Floating Right Pill on Image */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 bg-white/85 backdrop-blur-xl p-4 rounded-2xl border border-white/60 shadow-lg text-left hidden md:block">
            <p className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
              {lang === "hi" ? "पारदर्शी चिकित्सा" : "Transparent Care"}
            </p>
            <p className="text-sm font-bold text-[#172554] mt-0.5">
              {lang === "hi" ? "शून्य छिपा कमीशन" : "Zero Hidden Commissions"}
            </p>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
