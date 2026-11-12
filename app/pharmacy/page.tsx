"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Pill,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  PhoneCall,
  BadgePercent,
  Calculator,
  Heart,
  Droplets,
  Activity,
  Layers,
  Smartphone,
  Download,
  Upload,
  HelpCircle,
  ChevronDown,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppPromo from "@/components/AppPromo";
import { useLanguage } from "@/lib/useLanguage";

export default function PharmacyPage() {
  const [lang, setLang] = useLanguage();
  const isHi = lang === "hi";
  const [monthlySpend, setMonthlySpend] = useState<number>(3000);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Savings calculation (flat 20% institutional relief)
  const monthlySavings = Math.round(monthlySpend * 0.20);
  const yearlySavings = monthlySavings * 12;

  const faqs = [
    {
      qEn: "How do I order medicines on the Adityam Mobile App?",
      qHi: "आदित्यम् मोबाइल ऐप पर दवाइयां कैसे ऑर्डर करें?",
      aEn: "Simply open the Adityam App, tap 'Upload Prescription', and snap a clear photo of your doctor's slip. Our licensed pharmacist verifies the dosage, applies your 20% institutional relief, and delivers sealed medicines to your home.",
      aHi: "आदित्यम् ऐप खोलें, 'पर्चा अपलोड करें' पर टैप करें और फोटो खींचें। हमारे लाइसेंस प्राप्त फार्मासिस्ट पर्चे की जांच करेंगे, 20% छूट लागू करेंगे और सीलबंद दवाइयां आपके पते पर भेज देंगे।",
    },
    {
      qEn: "How does Adityam provide up to 20% discount on genuine medicines?",
      qHi: "आदित्यम् पर दवाइयों पर 20% तक की छूट कैसे मिलती है?",
      aEn: "We eliminate retail supply-chain markups and referral cuts by procuring authentic batches directly through authorized pharmaceutical distribution, passing institutional relief straight to patient families.",
      aHi: "हम सीधे प्रमाणित दवा निर्माताओं से दवाएं प्राप्त करते हैं और बिना किसी बिचौलिया कमीशन के पूरी संस्थागत बचत सीधे मरीजों को देते हैं।",
    },
    {
      qEn: "Is a valid doctor prescription mandatory?",
      qHi: "क्या डॉक्टर का पर्चा आवश्यक है?",
      aEn: "Yes, for all scheduled prescription medicines, a valid prescription from a registered medical practitioner is mandatory to safeguard patient health and confirm accurate dosages.",
      aHi: "हाँ, मरीज की सुरक्षा और सही खुराक सुनिश्चित करने के लिए सभी शेड्यूल दवाओं हेतु वैध डॉक्टर का पर्चा अनिवार्य है।",
    },
    {
      qEn: "How are temperature-sensitive medicines like Insulin handled?",
      qHi: "इंसुलिन जैसी संवेदनशील दवाइयां कैसे डिलीवर की जाती हैं?",
      aEn: "Insulin and biological medicines are dispatched in certified cold-chain insulated packs with calibrated temperature indicators, guaranteeing 100% potency and temperature compliance.",
      aHi: "इंसुलिन और तापमान-संवेदनशील दवाओं को विशेष कोल्ड-चेन इंसुलेटेड पैक में डिलीवर किया जाता है ताकि गुणवत्ता और प्रभावशीलता पूरी तरह सुरक्षित रहे।",
    },
    {
      qEn: "Can I set up automated monthly refills for chronic conditions?",
      qHi: "क्या मैं मासिक रिफिल का ऑटो-रिमाइंडर सेट कर सकता हूँ?",
      aEn: "Yes! In the mobile app, you can turn on 1-tap auto-refill reminders for Diabetes, Hypertension, and Thyroid medications so you never run out of critical medicines.",
      aHi: "हाँ! मोबाइल ऐप में आप बीपी, शुगर या थायरॉइड की दवाओं के लिए मासिक रिफिल रिमाइंडर चालू कर सकते हैं, जिससे दवाएं कभी खत्म नहीं होंगी।",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#172554] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* 1. Global Navbar */}
      <Navbar lang={lang} onToggleLang={setLang} />

      <main className="flex-1">
        
        {/* ====================================================================
            2. HERO SECTION: CLEAN, WARM, PREMIUM HEALTHCARE (TATA 1MG STYLE)
        ==================================================================== */}
        <section className="relative overflow-hidden bg-[#0A1128] text-white pt-8 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.22),transparent_75%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb & Trust Status */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Link href="/" className="hover:text-white transition-colors">
                  {isHi ? "मुख्य पृष्ठ" : "Home"}
                </Link>
                <span className="text-slate-600">/</span>
                <span className="text-blue-300 font-bold">
                  {isHi ? "दवाइयां व फार्मेसी" : "Fair Price Pharmacy"}
                </span>
              </div>

              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isHi ? "100% असली दवाएं • 20% संस्थागत राहत" : "100% Genuine • Up to 20% Direct Relief"}</span>
              </span>
            </div>

            {/* Hero Main Grid: Left Pitch, Right Quick Order Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading & Value Proposition */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs font-semibold border border-blue-400/20">
                  <Pill className="w-3.5 h-3.5 text-blue-400" />
                  <span>{isHi ? "प्रमाणित दवा सेवा" : "Verified Clinical Pharmacy"}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
                  {isHi ? (
                    <>
                      असली दवाइयां, निष्पक्ष दाम। <br />
                      <span className="text-amber-300 font-serif italic font-normal text-2xl sm:text-3xl lg:text-4xl">
                        सुरक्षित घर पहुंच, 20% तक सीधी बचत।
                      </span>
                    </>
                  ) : (
                    <>
                      Genuine Medicines at Honest Prices. <br />
                      <span className="text-amber-300 font-serif italic font-normal text-2xl sm:text-3xl lg:text-4xl">
                        Delivered Safely to Your Doorstep.
                      </span>
                    </>
                  )}
                </h1>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-normal">
                  {isHi
                    ? "सीधे निर्माताओं से प्रामाणिक दवाएं। बिना किसी बिचौलिया मुनाफे के 20% तक संस्थागत छूट, लाइसेंस प्राप्त फार्मासिस्ट समीक्षा और इंसुलिन हेतु सुरक्षित कोल्ड-चेन डिलीवरी।"
                    : "Order certified prescription medicines directly with zero middleman markups. Every order is verified by clinical pharmacists and delivered in sealed, temperature-safe packaging."}
                </p>

                {/* Minimalist Feature Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-300 font-medium">
                  <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>100% Genuine Batch</span>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <BadgePercent className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Up to 20% OFF</span>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-purple-400" />
                    <span>Cold-Chain Safe</span>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Same-Day Dispatch</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Quick Prescription Upload Card (Tata 1mg Signature Layout) */}
              <div className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <Upload className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">
                        {isHi ? "डॉक्टर का पर्चा है?" : "Have a Prescription?"}
                      </h3>
                      <p className="text-[10px] text-slate-500">
                        {isHi ? "अपलोड करें व 20% बचत पाएं" : "Upload & get instant 20% relief"}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    20% OFF
                  </span>
                </div>

                <div className="py-4 space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Snap a photo of your prescription</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Licensed pharmacist confirms medicines & dosage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Sealed doorstep delivery in 24-48 hours</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2.5">
                  <Link
                    href="/get-app"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>{isHi ? "ऐप में पर्चा अपलोड करें →" : "Upload Prescription on App →"}</span>
                  </Link>

                  <a
                    href="tel:18002081008"
                    className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition-all flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isHi ? "फोन पर ऑर्डर: 1800-208-1008" : "Order by Phone: 1800-208-1008"}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ====================================================================
            3. HOW IT WORKS: 4 SIMPLE STEPS IN PLAIN ENGLISH
        ==================================================================== */}
        <section className="py-14 bg-white border-b border-slate-200/90 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {isHi ? "सरल प्रक्रिया" : "How It Works"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
                {isHi ? "दवाइयां मंगाना कितना आसान है?" : "Getting Your Medicines is Simple & Fast"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                {isHi
                  ? "केवल 4 आसान चरणों में आपके घर तक शुद्ध व सत्यापित दवाइयां।"
                  : "Four straightforward steps designed for complete peace of mind and maximum savings."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  titleEn: "Upload Prescription",
                  titleHi: "पर्चा अपलोड करें",
                  descEn: "Snap a photo of your doctor's slip in the app or send via WhatsApp/helpline.",
                  descHi: "ऐप में अपने पर्चे की फोटो खींचें या हेल्पलाइन पर साझा करें।",
                  icon: Upload,
                },
                {
                  step: "02",
                  titleEn: "Pharmacist Review",
                  titleHi: "फार्मासिस्ट सत्यापन",
                  descEn: "A certified clinical pharmacist reviews your dosage and verifies medicine safety.",
                  descHi: "हमारे योग्य फार्मासिस्ट सही खुराक व दवाओं की जांच करते हैं।",
                  icon: ShieldCheck,
                },
                {
                  step: "03",
                  titleEn: "Instant 20% Relief",
                  titleHi: "20% तक सीधी बचत",
                  descEn: "Institutional savings applied directly to your order with zero hidden fees.",
                  descHi: "बिना किसी बिचौलिए के सीधे बिल पर संस्थागत छूट लागू होती है।",
                  icon: BadgePercent,
                },
                {
                  step: "04",
                  titleEn: "Cold-Chain Delivery",
                  titleHi: "सुरक्षित घर पहुंच",
                  descEn: "Sealed, tamper-proof, temperature-safe packaging delivered to your doorstep.",
                  descHi: "सील पैक और तापमान-सुरक्षित बॉक्स में सीधे आपके घर डिलीवरी।",
                  icon: Truck,
                },
              ].map((item, i) => {
                const StepIcon = item.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black text-slate-300 font-sans">{item.step}</span>
                        <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                          <StepIcon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5">
                        {isHi ? item.titleHi : item.titleEn}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {isHi ? item.descHi : item.descEn}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-blue-600">
                      Step {item.step}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. CHRONIC & SPECIALTY CARE CATEGORIES (Tata 1mg Layout)
        ==================================================================== */}
        <section className="py-14 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                {isHi ? "दैनिक व क्रोनिक दवाइयां" : "Chronic & Daily Medications"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
                {isHi
                  ? "किन दवाइयों पर मिलती है सीधी संस्थागत बचत?"
                  : "Major Therapy Classes Eligible for Direct Relief"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                {isHi
                  ? "सभी दवाइयां 100% ओरिजिनल, प्रमाणित निर्माताओं से और तापमान-सुरक्षा के साथ उपलब्ध हैं।"
                  : "Every medication is sourced directly from licensed pharmaceutical manufacturers with cold-chain protection."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  titleEn: "Diabetes & Insulin Care",
                  titleHi: "डायबिटीज व इंसुलिन सुरक्षा",
                  descEn: "Metformin, Glimepiride, Sitagliptin, and cold-pack Insulin pens delivered safely.",
                  descHi: "मेटफॉर्मिन, ग्लाइमेपिराइड, सीटाग्लिप्टिन व कोल्ड-पैक इंसुलिन डिलीवरी।",
                  discountEn: "Up to 20% OFF",
                  discountHi: "20% तक छूट",
                  icon: Droplets,
                  color: "bg-blue-50 text-blue-600 border-blue-200",
                },
                {
                  titleEn: "Blood Pressure & Heart",
                  titleHi: "बीपी व हृदय सुरक्षा दवाइयां",
                  descEn: "Telmisartan, Amlodipine, Rosuvastatin, Blood thinners and complete Cardiac care.",
                  descHi: "टेल्मीसार्टन, एम्लोडिपिन, रोसुवास्टेटिन व ब्लड थिनर्स।",
                  discountEn: "Up to 18% OFF",
                  discountHi: "18% तक छूट",
                  icon: Heart,
                  color: "bg-rose-50 text-rose-600 border-rose-200",
                },
                {
                  titleEn: "Thyroid & Hormone Care",
                  titleHi: "थायरॉइड व हॉर्मोन संतुलन",
                  descEn: "Thyroxine (25mcg to 150mcg) with batch certification and potency guarantee.",
                  descHi: "थायरोक्सिन के सभी डोज, बैच सर्टिफाइड व फ्रेश स्टॉक।",
                  discountEn: "Up to 15% OFF",
                  discountHi: "15% तक छूट",
                  icon: Activity,
                  color: "bg-amber-50 text-amber-700 border-amber-200",
                },
                {
                  titleEn: "Bone, Joint & Pain Relief",
                  titleHi: "हड्डी, जोड़ व आर्थराइटिस",
                  descEn: "Calcium Citrate, Vitamin D3 (60K), Glucosamine, and certified joint relief supplements.",
                  descHi: "कैल्शियम, विटामिन D3, ग्लूकोसामाइन व आर्थराइटिस केयर।",
                  discountEn: "Up to 20% OFF",
                  discountHi: "20% तक छूट",
                  icon: Layers,
                  color: "bg-emerald-50 text-emerald-700 border-emerald-200",
                },
                {
                  titleEn: "Digestive & Liver Health",
                  titleHi: "पाचन, गैस व लिवर टॉनिक",
                  descEn: "Pantoprazole, Rabeprazole, Digestive enzymes, and Hepato-protective formulations.",
                  descHi: "पैंटोप्राजोल, रैबेप्राजोल, पाचक एंजाइम्स व लिवर सुरक्षा।",
                  discountEn: "Up to 18% OFF",
                  discountHi: "18% तक छूट",
                  icon: Pill,
                  color: "bg-indigo-50 text-indigo-700 border-indigo-200",
                },
                {
                  titleEn: "Pure Ayurvedic Formulations",
                  titleHi: "शुद्ध आयुर्वेदिक औषधियां",
                  descEn: "Classical Kwath, Avaleha, Guggul, and certified organic herbal supplements.",
                  descHi: "शास्त्रीय क्वाथ, अवलेह, गुग्गुल व शुद्ध वानस्पतिक पूरक।",
                  discountEn: "Up to 25% OFF",
                  discountHi: "25% तक छूट",
                  icon: Sparkles,
                  color: "bg-teal-50 text-teal-700 border-teal-200",
                },
              ].map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${card.color}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                          {isHi ? card.discountHi : card.discountEn}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5">
                        {isHi ? card.titleHi : card.titleEn}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {isHi ? card.descHi : card.descEn}
                      </p>
                    </div>

                    <Link
                      href="/get-app"
                      className="mt-5 w-full py-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-600 text-xs font-bold border border-slate-200 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                      <span>{isHi ? "ऐप पर ऑर्डर करें" : "Order on Mobile App"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            5. MEDICINE SAVINGS CALCULATOR
        ==================================================================== */}
        <section className="py-14 px-4 sm:px-6 bg-[#F1F5F9]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              <div className="text-center max-w-xl mx-auto mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200 mb-2">
                  <Calculator className="w-3.5 h-3.5 text-blue-600" />
                  <span>{isHi ? "पारदर्शी बचत कैलकुलेटर" : "Medicine Savings Calculator"}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {isHi ? "अपनी मासिक व वार्षिक बचत देखें" : "Calculate Your Family Medicine Relief"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                  {isHi
                    ? "स्लाइडर को अपने मासिक दवा बिल के अनुसार खिसकाएं और 20% संस्थागत छूट का लाभ देखें।"
                    : "Slide to your family's estimated monthly pharmacy spend to see your 20% direct savings."}
                </p>
              </div>

              {/* Slider Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-slate-600">{isHi ? "मासिक दवा खर्च:" : "Monthly Spend:"}</span>
                  <span className="text-2xl font-black text-blue-600 font-sans">₹{monthlySpend.toLocaleString("en-IN")}</span>
                </div>

                <input
                  type="range"
                  min={1000}
                  max={20000}
                  step={500}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full accent-blue-600 h-2.5 bg-slate-200 rounded-lg cursor-pointer"
                />

                <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-2">
                  <span>₹1,000</span>
                  <span>₹10,000</span>
                  <span>₹20,000+</span>
                </div>

                {/* Savings Metrics Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-200 text-center">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="text-[10px] uppercase font-bold text-emerald-800 block">
                      {isHi ? "मासिक बचत" : "Monthly Savings"}
                    </span>
                    <span className="text-2xl font-black text-emerald-700 font-sans">
                      ₹{monthlySavings.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[11px] text-emerald-600 block mt-0.5">20% direct relief</span>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                    <span className="text-[10px] uppercase font-bold text-blue-800 block">
                      {isHi ? "वार्षिक कुल बचत" : "Annual Family Savings"}
                    </span>
                    <span className="text-2xl font-black text-blue-700 font-sans">
                      ₹{yearlySavings.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[11px] text-blue-600 block mt-0.5">Saved every year</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/get-app"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>{isHi ? "ऐप डाउनलोड कर बचत शुरू करें" : "Download App to Claim Savings"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            6. TATA 1MG STYLE APP DOWNLOAD BANNER (REUSABLE COMPONENT)
        ==================================================================== */}
        <AppPromo lang={lang} />

        {/* ====================================================================
            7. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)
        ==================================================================== */}
        <section className="py-14 bg-white border-t border-slate-200/90 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {isHi ? "प्रश्नोत्तरी" : "Frequently Asked Questions"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
                {isHi ? "दवाइयों के बारे में जरूरी जानकारी" : "Everything You Need to Know About Ordering"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                {isHi
                  ? "दवाइयों की प्रामाणिकता, डिलीवरी व बचत से जुड़े सामान्य सवाल।"
                  : "Clear answers about authenticity, doorstep cold-chain delivery, and app ordering."}
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="transition-colors">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{isHi ? faq.qHi : faq.qEn}</span>
                      </div>
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {isHi ? faq.aHi : faq.aEn}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            8. 24/7 PHARMACIST SOS & HELPLINE BANNER
        ==================================================================== */}
        <section className="py-10 bg-[#0A1128] text-white px-4 sm:px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 bg-white/10 px-3 py-1 rounded-full mb-2 border border-white/10">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{isHi ? "24/7 फार्मासिस्ट केयर डेस्क" : "24/7 Clinical Pharmacist Desk"}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {isHi
                  ? "पर्चे से संबंधित सवाल या दुर्लभ दवाइयों के लिए सहायता चाहिए?"
                  : "Need assistance reading a prescription or finding rare medications?"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {isHi
                  ? "हमारे चीफ फार्मासिस्ट से सीधे बात करें: 1800-208-1008 (टोल-फ्री)"
                  : "Call our clinical pharmacist desk: 1800-208-1008 (Toll-Free, 24x7)"}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:18002081008"
                className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>{isHi ? "कॉल 1800-208-1008" : "Call 1800-208-1008"}</span>
              </a>

              <Link
                href="/get-app"
                className="px-6 py-3.5 rounded-full bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isHi ? "ऐप डाउनलोड करें" : "Download App"}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Global Footer */}
      <Footer />
    </div>
  );
}
