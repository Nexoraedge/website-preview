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
  FileText,
  Clock,
  HelpCircle,
  ChevronDown,
  QrCode,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/useLanguage";

export default function PharmacyPage() {
  const [lang, setLang] = useLanguage();
  const [monthlySpend, setMonthlySpend] = useState<number>(3000);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Savings calculation (flat 18% average fair savings)
  const monthlySavings = Math.round(monthlySpend * 0.18);
  const yearlySavings = monthlySavings * 12;

  const faqs = [
    {
      qEn: "How do I order medicines on the Adityam Mobile App?",
      qHi: "आदित्यम् मोबाइल ऐप पर दवाइयां कैसे ऑर्डर करें?",
      aEn: "Simply open the Adityam App, tap 'Order Pharmacy', and upload a clear photo of your doctor's prescription. Our licensed pharmacist reviews the dosage and sends sealed medicines directly to your address.",
      aHi: "आदित्यम् ऐप खोलें, 'फार्मेसी' पर टैप करें और अपने डॉक्टर के पर्चे की फोटो अपलोड करें। हमारे लाइसेंस प्राप्त फार्मासिस्ट पर्चे की जांच करेंगे और दवाइयां आपके पते पर भेज देंगे।",
    },
    {
      qEn: "How does Adityam provide up to 20% discount on genuine medicines?",
      qHi: "आदित्यम् पर दवाइयों पर 20% तक की छूट कैसे मिलती है?",
      aEn: "We source authentic medicines directly from accredited pharmaceutical manufacturers and pass the institutional savings directly to you, eliminating third-party commission agents.",
      aHi: "हम सीधे प्रमाणित दवा निर्माताओं से दवाएं प्राप्त करते हैं और बिना किसी बिचौलिया कमीशन के पूरी संस्थागत बचत सीधे मरीजों को देते हैं।",
    },
    {
      qEn: "Is a valid doctor prescription mandatory?",
      qHi: "क्या डॉक्टर का पर्चा आवश्यक है?",
      aEn: "Yes, for all scheduled prescription medicines, a valid prescription from a registered medical practitioner is required by law to ensure patient safety and proper dosage.",
      aHi: "हाँ, मरीज की सुरक्षा और सही खुराक सुनिश्चित करने के लिए सभी शेड्यूल दवाओं हेतु वैध डॉक्टर का पर्चा अनिवार्य है।",
    },
    {
      qEn: "How are sensitive medicines like Insulin handled during delivery?",
      qHi: "इंसुलिन जैसी संवेदनशील दवाइयां कैसे डिलीवर की जाती हैं?",
      aEn: "Temperature-sensitive medicines such as Insulin and biologics are transported in certified cold-chain insulated packs with temperature monitors, ensuring zero compromise on potency.",
      aHi: "इंसुलिन और तापमान-संवेदनशील दवाओं को विशेष कोल्ड-चेन इंसुलेटेड पैक में डिलीवर किया जाता है ताकि गुणवत्ता और प्रभावशीलता पूरी तरह सुरक्षित रहे।",
    },
    {
      qEn: "Can I set up automated monthly refills for chronic conditions?",
      qHi: "क्या मैं मासिक रिफिल का ऑटो-रिमाइंडर सेट कर सकता हूँ?",
      aEn: "Yes! In the mobile app, you can enable auto-reminders for your monthly medicines (Diabetes, BP, Thyroid). We remind you 5 days in advance so you never run out of vital medications.",
      aHi: "हाँ! मोबाइल ऐप में आप बीपी, शुगर या थायरॉइड की दवाओं के लिए मासिक रिफिल रिमाइंडर चालू कर सकते हैं, जिससे दवाएं कभी खत्म नहीं होंगी।",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#172554] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* 1. Global Navbar */}
      <Navbar lang={lang} onToggleLang={setLang} />

      <main className="flex-1">
        {/* ====================================================================
            2. HERO SECTION: CLEAN, COMPACT, LUXURY DARK NAVY (#0A1128)
        ==================================================================== */}
        <section className="relative overflow-hidden bg-[#0A1128] text-white pt-8 pb-10 sm:pt-10 sm:pb-12 px-4 sm:px-6">
          {/* Subtle Ambient Radial Lighting Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.22),transparent_75%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb & Trust Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Link href="/" className="hover:text-white transition-colors">
                  {lang === "hi" ? "मुख्य पृष्ठ" : "Home"}
                </Link>
                <span className="text-slate-600">/</span>
                <span className="text-blue-300 font-bold">
                  {lang === "hi" ? "दवाइयां व फार्मेसी" : "Fair Price Pharmacy"}
                </span>
              </div>

              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200">
                {lang === "hi" ? "100% असली दवाइयां • 20% तक सीधी बचत" : "100% Genuine • Up to 20% Direct Relief"}
              </span>
            </div>

            {/* Hero Main Copy: Concise, High-Impact, Zero Wastage */}
            <div className="max-w-2xl">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
                {lang === "hi" ? (
                  <>असली दवाइयां, उचित दाम। 20% तक सीधी बचत।</>
                ) : (
                  <>Genuine Medicines at Honest Prices.</>
                )}
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {lang === "hi"
                  ? "सीधे निर्माताओं से प्रामाणिक दवाएं। लाइसेंस प्राप्त फार्मासिस्ट द्वारा सत्यापित और सुरक्षित कोल्ड-चेन डिलीवरी।"
                  : "Order genuine prescription medications with zero middleman markups. Verified by licensed clinical pharmacists and delivered to your doorstep."}
              </p>

              {/* Minimalist Single-Line Feature Pills */}
              <div className="flex flex-wrap items-center gap-2 mt-4 text-[11px] text-slate-300">
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>100% Genuine</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <BadgePercent className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Up to 20% OFF</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-purple-400" />
                  <span>Cold-Chain Delivery</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                  <span>1-Tap App Reorder</span>
                </span>
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
                {lang === "hi" ? "सरल प्रक्रिया" : "How It Works"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
                {lang === "hi" ? "दवाइयां मंगाना कितना आसान है?" : "Getting Your Medicines is Simple & Fast"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                {lang === "hi"
                  ? "केवल 4 आसान चरणों में आपके घर तक शुद्ध व सत्यापित दवाइयां।"
                  : "Four straightforward steps designed for complete peace of mind and maximum savings."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  titleEn: "Download App & Upload",
                  titleHi: "ऐप में पर्चा अपलोड करें",
                  descEn: "Open the Adityam App and snap a clear photo of your doctor's prescription.",
                  descHi: "आदित्यम् मोबाइल ऐप खोलें और अपने पर्चे की फोटो खींचें।",
                  icon: Smartphone,
                  badge: "Step 1",
                },
                {
                  step: "02",
                  titleEn: "Pharmacist Review",
                  titleHi: "फार्मासिस्ट सत्यापन",
                  descEn: "A certified clinical pharmacist reviews your dosage and verifies medicine safety.",
                  descHi: "हमारे योग्य फार्मासिस्ट सही खुराक व दवाओं की जांच करते हैं।",
                  icon: ShieldCheck,
                  badge: "Step 2",
                },
                {
                  step: "03",
                  titleEn: "Instant 20% Relief",
                  titleHi: "20% तक सीधी बचत",
                  descEn: "We apply our non-commercial fair discount directly to your order with zero hidden fees.",
                  descHi: "बिना किसी बिचौलिए के सीधे बिल पर संस्थागत छूट लागू होती है।",
                  icon: BadgePercent,
                  badge: "Step 3",
                },
                {
                  step: "04",
                  titleEn: "Doorstep Sealed Delivery",
                  titleHi: "सुरक्षित घर पहुंच",
                  descEn: "Medicines are packed in tamper-proof, temperature-safe packaging and delivered promptly.",
                  descHi: "सील पैक और तापमान-सुरक्षित बॉक्स में सीधे आपके घर डिलीवरी।",
                  icon: Truck,
                  badge: "Step 4",
                },
              ].map((item, i) => {
                const StepIcon = item.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all transform-gpu hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black text-slate-300">{item.step}</span>
                        <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                          <StepIcon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5">
                        {lang === "hi" ? item.titleHi : item.titleEn}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {lang === "hi" ? item.descHi : item.descEn}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-blue-600">
                      {item.badge}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. TIME TO ORDER: DOWNLOAD THE ADITYAM MOBILE APP
        ==================================================================== */}
        <section className="py-14 px-4 sm:px-6 bg-[#F1F5F9]">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-[#0A1128] via-[#0F1E4A] to-[#1E3A8A] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-white/10 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Column: Why Order in App */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs font-semibold mb-3 border border-blue-400/20">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>{lang === "hi" ? "आदित्यम् मोबाइल ऐप पर ऑर्डर करें" : "Order on Adityam Mobile App"}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug">
                    {lang === "hi" ? (
                      <>
                        दवाइयां मंगाने के लिए <br />
                        <span className="text-blue-400">आदित्यम् ऐप डाउनलोड करें</span>
                      </>
                    ) : (
                      <>
                        Ready to Order Medicines? <br />
                        <span className="text-blue-400">Download the Adityam App</span>
                      </>
                    )}
                  </h2>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-xl">
                    {lang === "hi"
                      ? "बस आदित्यम् ऐप में अपने डॉक्टर के पर्चे की एक फोटो लें। बाकी काम हमारे फार्मासिस्ट संभालेंगे। लाइव डिलीवरी ट्रैकिंग और मासिक रिफिल की पूरी सुविधा।"
                      : "Simply snap a photo of your prescription inside the Adityam App. Our licensed pharmacists verify the order, apply your 20% savings, and dispatch sealed medicines."}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6 max-w-lg">
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Snap prescription in 1 tap</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Live doorstep delivery tracking</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Automatic monthly refill alerts</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Pay on delivery or online</span>
                    </div>
                  </div>

                  {/* Big App Download CTAs */}
                  <div className="flex flex-wrap items-center gap-3.5 mt-8">
                    <Link
                      href="/get-app"
                      className="px-6 py-3.5 rounded-2xl bg-[#2563EB] hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_4px_16px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_24px_rgba(37,99,235,0.5)] transition-all cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>{lang === "hi" ? "ऐप अभी डाउनलोड करें" : "Download App to Order"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href="tel:18002081008"
                      className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm flex items-center gap-2 border border-white/15 transition-all cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4 text-amber-300" />
                      <span>{lang === "hi" ? "हेल्पलाइन कॉल: 1800-208-1008" : "Call Helpline: 1800-208-1008"}</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Interactive Medicine Savings Calculator */}
                <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Calculator className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {lang === "hi" ? "दवा बचत कैलकुलेटर" : "Medicine Savings Calculator"}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-4">
                    {lang === "hi"
                      ? "अपना मासिक दवा खर्च चुनें और देखें आप कितना बचाते हैं:"
                      : "Adjust your monthly medicine spend to see your 20% fair savings:"}
                  </p>

                  {/* Range Slider */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-500">{lang === "hi" ? "मासिक खर्च" : "Monthly Spend"}</span>
                      <span className="text-xl font-black text-blue-600">₹{monthlySpend.toLocaleString("en-IN")}</span>
                    </div>

                    <input
                      type="range"
                      min={1000}
                      max={15000}
                      step={500}
                      value={monthlySpend}
                      onChange={(e) => setMonthlySpend(Number(e.target.value))}
                      className="w-full accent-blue-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                    />

                    <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                      <span>₹1,000</span>
                      <span>₹7,500</span>
                      <span>₹15,000+</span>
                    </div>
                  </div>

                  {/* Savings Output Box */}
                  <div className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-emerald-800 block uppercase font-bold">
                        {lang === "hi" ? "सालाना कुल बचत" : "Your Annual Savings"}
                      </span>
                      <span className="text-2xl font-black text-emerald-700">₹{yearlySavings.toLocaleString("en-IN")}</span>
                      <span className="text-[11px] text-emerald-600 block mt-0.5">
                        (₹{monthlySavings.toLocaleString("en-IN")} {lang === "hi" ? "प्रति माह बचत" : "saved every month"})
                      </span>
                    </div>

                    <Link
                      href="/get-app"
                      className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Claim on App</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            5. CHRONIC & DAILY CARE CATEGORIES (ALL REDIRECT TO APP)
        ==================================================================== */}
        <section className="py-14 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                {lang === "hi" ? "दैनिक व क्रोनिक दवाइयां" : "Chronic & Daily Medications"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
                {lang === "hi"
                  ? "किन दवाइयों पर मिलती है सीधी संस्थागत बचत?"
                  : "Major Therapy Classes Eligible for Direct Savings"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                {lang === "hi"
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
                    className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all transform-gpu hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${card.color}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                          {lang === "hi" ? card.discountHi : card.discountEn}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5">
                        {lang === "hi" ? card.titleHi : card.titleEn}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {lang === "hi" ? card.descHi : card.descEn}
                      </p>
                    </div>

                    <Link
                      href="/get-app"
                      className="mt-5 w-full py-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-600 text-xs font-bold border border-slate-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                      <span>{lang === "hi" ? "ऐप पर ऑर्डर करें" : "Order on Mobile App"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            6. SEO QUESTIONS & FREQUENTLY ASKED QUESTIONS (FAQ)
        ==================================================================== */}
        <section className="py-14 bg-white border-t border-slate-200/90 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {lang === "hi" ? "प्रश्नोत्तरी" : "Frequently Asked Questions"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
                {lang === "hi" ? "दवाइयों के बारे में जरूरी जानकारी" : "Everything You Need to Know About Ordering"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                {lang === "hi"
                  ? "दवाइयों की प्रामाणिकता, डिलीवरी व बचत से जुड़े सामान्य सवाल।"
                  : "Clear answers about authenticity, doorstep cold-chain delivery, and app ordering."}
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 cursor-pointer hover:bg-slate-100/60 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{lang === "hi" ? faq.qHi : faq.qEn}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-200/60 bg-white">
                        {lang === "hi" ? faq.aHi : faq.aEn}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            7. EMERGENCY SOS & PHARMACIST HELPLINE
        ==================================================================== */}
        <section className="py-10 bg-[#0A1128] text-white px-4 sm:px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 bg-white/10 px-3 py-1 rounded-full mb-2 border border-white/10">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{lang === "hi" ? "24/7 फार्मासिस्ट केयर डेस्क" : "24/7 Clinical Pharmacist Desk"}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {lang === "hi"
                  ? "पर्चे से संबंधित सवाल या दुर्लभ दवाइयों के लिए सहायता चाहिए?"
                  : "Need assistance reading a prescription or finding rare medications?"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {lang === "hi"
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
                <span>{lang === "hi" ? "कॉल 1800-208-1008" : "Call 1800-208-1008"}</span>
              </a>

              <Link
                href="/get-app"
                className="px-6 py-3.5 rounded-full bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === "hi" ? "ऐप डाउनलोड करें" : "Download App"}</span>
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
