"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Building2,
  PhoneCall,
  ArrowRight,
  HandHeart,
  Sun,
  Flame,
  Feather,
  BookOpen,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/useLanguage";

export default function VisionPage() {
  const [lang, setLang] = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#172554] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* 1. Global Navbar */}
      <Navbar lang={lang} onToggleLang={setLang} />

      <main className="flex-1">
        {/* ====================================================================
            2. 3D SACRED HERO: DIVINE AURA & COMPASSIONATE ORIGIN
        ==================================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#172554] via-[#1E3A8A] to-[#172554] text-white pt-12 pb-20 px-4 sm:px-6">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb & Holy Emblem */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-200/90">
                <Link href="/" className="hover:text-white transition-colors">
                  {lang === "hi" ? "मुख्य पृष्ठ" : "Home"}
                </Link>
                <span>/</span>
                <span className="text-amber-400 font-bold">
                  {lang === "hi" ? "मुनि श्री की प्रेरणा व दृष्टिकोण" : "Sacred Vision & Inspiration"}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300 shadow-sm">
                <Sun className="w-4 h-4 text-amber-400" />
                <span>
                  {lang === "hi"
                    ? "परम पूज्य मुनि श्री १०८ आदित्य सागर जी महाराज"
                    : "Blessed by Param Pujya Muni Shri 108 Aditya Sagar Ji Maharaj"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Vision Manifesto */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-300/30 mb-4">

                  <span>{lang === "hi" ? "अहिंसा • करुणा • निष्पक्ष सेवा" : "Compassion • Transparency • Fair Healing"}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-serif text-white tracking-tight leading-[1.18]">
                  {lang === "hi" ? (
                    <>
                      स्वास्थ्य सेवा व्यापार नहीं, <br className="hidden sm:inline" />
                      <span className="italic font-serif text-amber-300">
                        मानव मात्र की पावन सेवा है।
                      </span>
                    </>
                  ) : (
                    <>
                      Healthcare is Seva. <br className="hidden sm:inline" />
                      <span className="italic font-serif text-amber-300">
                        Compassion, Dignity, and Trust.
                      </span>
                    </>
                  )}
                </h1>

                <p className="mt-5 text-sm sm:text-base text-blue-100/90 leading-relaxed font-light">
                  {lang === "hi"
                    ? "परम पूज्य मुनि श्री १०८ आदित्य सागर जी महाराज की पावन प्रेरणा से स्थापित — ताकि बीमारी के समय किसी भी परिवार को अनुचित खर्चों, अस्पताल के बिचौलियों या आर्थिक विवशता के कारण बेबस न होना पड़े।"
                    : "Adityam Niramayaa was inspired by Param Pujya Muni Shri 108 Aditya Sagar Ji Maharaj to protect families from unfair medical expenses and ensure honest, dignified healthcare for everyone."}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#commitments"
                    className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
                  >
                    <BookOpen className="w-4 h-4 text-slate-950" />
                    <span>{lang === "hi" ? "पूज्य मुनि श्री का पावन संदेश पढ़ें" : "Read Pujya Muni Shri's Message"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <Link
                    href="/join-network"
                    className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all flex items-center justify-center cursor-pointer"
                  >
                    {lang === "hi" ? "सेवा आंदोलन से जुड़ें" : "Join the Mission"}
                  </Link>
                </div>
              </div>

              {/* Right Column: 3D Aura Card with Muni Shri Portrait */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm rounded-3xl overflow-hidden p-1.5 bg-gradient-to-b from-amber-400/40 via-amber-200/20 to-transparent shadow-[0_20px_50px_rgba(245,158,11,0.25)] transform-gpu hover:-translate-y-1 transition-all duration-300">
                  <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden bg-slate-900 border border-white/20">
                    <Image
                      src="/images/muni_aditya_blessing_aura.jpg"
                      alt="Pujya Muni Shri 108 Aditya Sagar Ji Maharaj"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Bottom Caption inside Card */}
                    <div className="absolute bottom-5 left-5 right-5 text-center">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                        {lang === "hi" ? "मार्गदर्शक व प्रेरणा स्रोत" : "Spiritual Guide & Visionary"}
                      </span>
                      <h3 className="text-lg font-black text-white">
                        {lang === "hi"
                          ? "मुनि श्री १०८ आदित्य सागर जी महाराज"
                          : "Muni Shri 108 Aditya Sagar Ji Maharaj"}
                      </h3>
                      <p className="text-xs text-amber-200/80 mt-1 italic font-serif">
                        &quot;{lang === "hi" ? "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः" : "May all beings be free from illness & suffering"}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. THE 4 SACRED PILLARS OF ETHICAL HEALTHCARE
        ==================================================================== */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {lang === "hi" ? "आदित्यम् के चार पावन संकल्प" : "The Four Sacred Commitments"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                {lang === "hi"
                  ? "किन सिद्धांतों पर टिका है आदित्यम् निरामया?"
                  : "Core Guiding Principles"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                {lang === "hi"
                  ? "हर मरीज के साथ परिजनों जैसा व्यवहार और हर बिल में 100% पारदर्शिता।"
                  : "Every patient is family. Every medical decision is guided by pure compassion and integrity."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Feather,
                  step: "01",
                  titleEn: "Zero Middleman Markups",
                  titleHi: "बिचौलिया व कमीशन मुक्त",
                  descEn: "We take zero commissions from doctors or test labs. 100% of negotiated savings are directly passed to patients.",
                  descHi: "डॉक्टर्स या लैब्स से कोई कमीशन नहीं लिया जाता। पूरी छूट सीधे मरीजों को दी जाती है।",
                  color: "bg-blue-50 text-[#2563EB] border-blue-200",
                },
                {
                  icon: Sun,
                  step: "02",
                  titleEn: "Satvik Hospital Diet",
                  titleHi: "पवित्र सात्विक आहार",
                  descEn: "Pure vegetarian, onion-garlic free satvik meals prepared with utmost cleanliness for indoor patients.",
                  descHi: "अस्पताल में भर्ती मरीजों व परिजनों हेतु शुद्ध शाकाहारी व सात्विक भोजन की व्यवस्था।",
                  color: "bg-amber-50 text-amber-700 border-amber-200",
                },
                {
                  icon: ShieldCheck,
                  step: "03",
                  titleEn: "Bill Transparency Guarantee",
                  titleHi: "बिलिंग शुचिता व पारदर्शिता",
                  descEn: "Pre-fixed package tariffs for surgeries. An Adityam Care Buddy reviews every item to prevent inflated billing.",
                  descHi: "सर्जरी की पूर्व-निर्धारित दरें। आदित्यम् केयर बडी द्वारा बिल की निष्पक्ष जांच।",
                  color: "bg-emerald-50 text-emerald-700 border-emerald-200",
                },
                {
                  icon: HandHeart,
                  step: "04",
                  titleEn: "Compassion for the Needy",
                  titleHi: "दीन-दुखियों की निःस्वार्थ सहायता",
                  descEn: "Special charitable beds and emergency medicine subsidies for underprivileged families.",
                  descHi: "आर्थिक रूप से कमजोर परिवारों के लिए रियायती चैरिटेबल बेड्स व दवा सहायता।",
                  color: "bg-rose-50 text-rose-700 border-rose-200",
                },
              ].map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-[0_6px_20px_rgba(23,37,84,0.05)] hover:shadow-[0_15px_35px_rgba(23,37,84,0.12)] transition-all transform-gpu hover:-translate-y-1.5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black text-slate-300">{pillar.step}</span>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${pillar.color}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        {lang === "hi" ? pillar.titleHi : pillar.titleEn}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {lang === "hi" ? pillar.descHi : pillar.descEn}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#2563EB]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{lang === "hi" ? "आदित्यम् संकल्प" : "Sacred Covenant"}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. HOW THIS MOVEMENT HELPS EVERY FAMILY
        ==================================================================== */}
        <section className="py-14 bg-white border-t border-slate-200/90 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-black uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  {lang === "hi" ? "सर्वजन हिताय" : "Universal Healthcare Benefit"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 leading-snug">
                  {lang === "hi"
                    ? "हर आम परिवार को मिलता है सम्मानजनक व सुलभ इलाज"
                    : "Dignified, Affordable Care for Every Family"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-medium">
                  {lang === "hi"
                    ? "जब भी आपको डॉक्टर परामर्श, खून की जांच, दवाइयां या अस्पताल में भर्ती होने की आवश्यकता हो, आदित्यम् निरामया आपके साथ एक विश्वसनीय परिवारजन की तरह खड़ा रहता है।"
                    : "Whether you need a senior cardiologist consultation, accurate home blood tests, monthly diabetes medicines, or cashless surgery admission, Adityam stands beside your family."}
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      titleEn: "Direct 20%-40% Savings on Consultation & Labs",
                      titleHi: "ओपीडी व जांचों पर सीधे 20% से 40% तक की छूट",
                    },
                    {
                      titleEn: "Guaranteed 15%-20% Off on Life-Saving Prescription Meds",
                      titleHi: "जीवनरक्षक दवाइयों पर 15% से 20% तक की निश्चित बचत",
                    },
                    {
                      titleEn: "Instant Cashless TPA Admission Desk at Top Hospitals",
                      titleHi: "शीर्ष अस्पतालों में त्वरित कैशलेस टीपीए व सात्विक भोजन सुविधा",
                    },
                    {
                      titleEn: "24/7 Free Clinical Guidance & Coordinator Support",
                      titleHi: "24/7 निःशुल्क डॉक्टर सहायता व हेल्पलाइन मार्गदर्शन",
                    },
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-150">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {lang === "hi" ? benefit.titleHi : benefit.titleEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Visual Badge Box */}
              <div className="lg:col-span-6 bg-gradient-to-br from-[#172554] to-[#1E3A8A] text-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Sun className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    {lang === "hi" ? "हमारा लक्ष्य" : "Our Compassionate Mission"}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white leading-tight">
                  {lang === "hi"
                    ? "1,00,000+ परिवारों को निष्पक्ष व सुरक्षित स्वास्थ्य सेवा प्रदान करना"
                    : "Protecting 100,000+ Families from Medical Distress"}
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/90 mt-3 leading-relaxed">
                  {lang === "hi"
                    ? "आदित्यम् निरामया के माध्यम से हम समाज के हर वर्ग के लिए स्वास्थ्य सेवाओं की लागत को न्यूनतम और विश्वसनीयता को अधिकतम करने के लिए संकल्पबद्ध हैं।"
                    : "Through trusted hospital tie-ups, ethical doctor empanelment, and transparent digital care, we make quality medical access an accessible right for all."}
                </p>

                <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-2xl font-black text-amber-400">₹0</span>
                    <span className="text-xs text-blue-200 block">
                      {lang === "hi" ? "कोई बिचौलिया शुल्क नहीं" : "Zero Middleman Fee"}
                    </span>
                  </div>

                  <div>
                    <span className="text-2xl font-black text-amber-400">100%</span>
                    <span className="text-xs text-blue-200 block">
                      {lang === "hi" ? "सत्यापित डॉक्टर्स" : "Verified Specialists"}
                    </span>
                  </div>

                  <div>
                    <span className="text-2xl font-black text-amber-400">24/7</span>
                    <span className="text-xs text-blue-200 block">
                      {lang === "hi" ? "मरीज सहायता केंद्र" : "Care Assistance"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            5. EMERGENCY SOS & CALL TO ACTION
        ==================================================================== */}
        <section className="py-10 bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#172554] text-white px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-white/10 px-3 py-1 rounded-full mb-2">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{lang === "hi" ? "निशुल्क हेल्पलाइन" : "24/7 Free Helpline"}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {lang === "hi"
                  ? "स्वास्थ्य सेवा संबंधी किसी भी मार्गदर्शन हेतु संपर्क करें"
                  : "Need guidance on doctors, hospitals or medicine savings?"}
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 mt-1">
                {lang === "hi"
                  ? "टोल-फ्री 1800-208-1008 पर कॉल करें या हमारे सेवा केंद्र से जुड़ें।"
                  : "Call 1800-208-1008 (Toll-Free) to speak with our clinical care coordinators."}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:18002081008"
                className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <PhoneCall className="w-4 h-4 text-slate-950" />
                <span>1800-208-1008</span>
              </a>

              <Link
                href="/join-network"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all cursor-pointer"
              >
                {lang === "hi" ? "सेवा में हाथ बंटाएं" : "Join as Volunteer"}
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
