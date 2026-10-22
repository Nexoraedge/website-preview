"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Sparkles,
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
  const containerRef = useRef<HTMLDivElement>(null);

  // Locomotive-style scroll momentum tracking for Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 85, damping: 26, mass: 0.6 };

  // Parallax float on the image and floating consoles
  const rawImageY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const rawImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const imageY = useSpring(rawImageY, springConfig);
  const imageScale = useSpring(rawImageScale, springConfig);

  const rawCardFloatY = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const cardFloatY = useSpring(rawCardFloatY, springConfig);

  return (
    <div
      ref={containerRef}
      className="bg-[#FAFAF8] font-sans selection:bg-[#2563EB] selection:text-white pb-16 sm:pb-20 relative overflow-hidden"
    >
      <main className="pt-16 sm:pt-24 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">

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
            <p className="mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-[#172554]/75 max-w-2xl mx-auto font-light leading-relaxed">
              चिकित्सा देखभाल में सुलभता, वहनीयता और गरिमा लाने की एक पावन दूरदर्शी पहल।{" "}
              प्रेरणा स्रोत{" "}
              <strong className="font-semibold text-[#172554]">
                पूज्य मुनि 108 श्री आदित्य सागर जी महाराज
              </strong>{" "}
              एवं विजन{" "}
              <strong className="font-semibold text-[#172554]">अभिषेक जैन</strong>।
            </p>
          ) : (
            <p className="mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-[#172554]/70 max-w-2xl mx-auto font-light leading-relaxed">
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
          className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 w-full sm:w-auto"
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

        {/* =========================================================================
            CLEAN REFINED TRUST PILLAR CAPSULES
        ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto px-2"
        >
          {/* Badge 1 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700 hover:border-emerald-500/50 hover:bg-emerald-50/30 transition-all">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{lang === "hi" ? "पारदर्शी दरें — शून्य छिपा शुल्क" : "Zero Hidden Fees"}</span>
          </div>

          {/* Badge 2 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700 hover:border-blue-500/50 hover:bg-blue-50/30 transition-all">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span>{lang === "hi" ? "प्राथमिकता ओपीडी स्लॉट" : "Priority Doctor OPD"}</span>
          </div>

          {/* Badge 3 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700 hover:border-amber-500/50 hover:bg-amber-50/30 transition-all">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>{lang === "hi" ? "NABL प्रमाणित लैब" : "NABL Certified Diagnostics"}</span>
          </div>

          {/* Badge 4 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700 hover:border-indigo-500/50 hover:bg-indigo-50/30 transition-all">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>{lang === "hi" ? "सात्विक भोजन सहयोग" : "Satvik Hospital Assistance"}</span>
          </div>
        </motion.div>

        {/* =========================================================================
            CINEMATIC CLEAN HERO IMAGE FRAME (UNSTUFFED, UNCUTTED, BREATHABLE)
        ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 sm:mt-14 w-full max-w-6xl aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] bg-slate-100 rounded-[2rem] sm:rounded-[2.8rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(23,37,84,0.12)] relative border border-slate-200/90 group"
        >
          {/* Parallax Image with Generous Headroom (Not Cutted) */}
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/images/doctor_consultation.jpg"
              alt="Adityam Niramayaa Premium Healthcare Facility"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="w-full h-full object-cover object-[center_20%] sm:object-center"
              priority
            />
          </motion.div>

          {/* Delicate Vignette at bottom edge for contrast on desktop only */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent pointer-events-none z-10" />

          {/* Top-Right Sacred Inspiration Pill (Desktop Only, Subtle & Light) */}
          <button
            type="button"
            onClick={onOpenVision}
            className="absolute top-5 right-5 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-slate-200/90 shadow-md hidden sm:flex items-center gap-2.5 hover:scale-102 transition-all cursor-pointer group"
          >
            <div className="relative w-6 h-6 rounded-full overflow-hidden ring-1 ring-amber-400 shrink-0">
              <Image
                src="/images/muni_aditya_blessing_aura.jpg"
                alt="Muni Aditya Sagar Ji Maharaj"
                fill
                sizes="24px"
                className="object-cover"
              />
            </div>
            <span className="text-xs font-semibold text-[#172554] group-hover:text-[#2563EB] transition-colors">
              {lang === "hi" ? "मुनि आदित्य सागर जी की प्रेरणा" : "Inspired by Muni Aditya Sagar Ji"}
            </span>
          </button>

          {/* ================================================================
              CLEAN FROSTED STAT CARD ON DESKTOP (NO 3D BEVEL, NOT STUFFED)
          ================================================================ */}
          <motion.div
            style={{ y: cardFloatY }}
            className="hidden sm:flex absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-slate-200/90 shadow-xl items-center gap-4 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100">
              <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
            </div>
            <div>
              <div className="text-base font-bold text-[#172554] flex items-center gap-2">
                <span>50,000+ Families</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-xs text-slate-500 font-medium">
                {lang === "hi" ? "सत्यापित स्वास्थ्य नेटवर्क" : "Trusted Health Ecosystem"}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ================================================================
            CLEAN MOBILE STAT STRIP (BELOW PHOTO, ZERO FACE OBSTRUCTION)
        ================================================================ */}
        <div className="sm:hidden mt-3.5 w-full bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs flex items-center justify-between text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#172554] flex items-center gap-2">
                <span>50,000+ Families</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-[11px] text-slate-500 font-normal">
                {lang === "hi" ? "सत्यापित विशेषज्ञ डॉक्टर्स व अस्पताल" : "Verified Doctors & Empanelled Hospitals"}
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
