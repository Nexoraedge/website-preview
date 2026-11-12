"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Heart,
  Sparkles,
  Award,
  Building2,
  ArrowRight,
  HeartHandshake,
  TrendingDown,
  Compass,
  FileCheck2,
  Quote,
  User,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/useLanguage";

export default function AboutPage() {
  const [lang, setLang] = useLanguage();
  const isHi = lang === "hi";

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#172554] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar lang={lang} onToggleLang={setLang} />

      <main className="flex-1">
        {/* ====================================================================
            2. HERO SECTION: EXECUTIVE LUXURY DARK NAVY (#0A1128)
        ==================================================================== */}
        <section className="relative overflow-hidden bg-[#0A1128] text-white pt-8 pb-12 sm:pt-10 sm:pb-14 px-4 sm:px-6">
          {/* Subtle ambient radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.22),transparent_75%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Bar: Breadcrumb + Trust Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-white transition-colors">
                  {isHi ? "होम" : "Home"}
                </Link>
                <span>/</span>
                <span className="text-amber-400 font-bold">
                  {isHi ? "परिचय एवं नेतृत्व" : "About & Leadership"}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-slate-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {isHi
                    ? "आदित्यम् निरामया: — चिकित्सा में करुणा व शुचिता"
                    : "Adityam Niramayaa — Ethical Healthcare Collective"}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {isHi ? (
                  <>
                    स्वास्थ्य सेवा को{" "}
                    <span className="text-amber-300 font-serif italic font-normal">मुनाफाखोरी मुक्त</span>{" "}
                    एवं पारदर्शी बनाने का पावन संकल्प।
                  </>
                ) : (
                  <>
                    Restoring Dignity, Compassion &{" "}
                    <span className="text-amber-300 font-serif italic font-normal">Absolute Integrity</span>{" "}
                    in Healthcare.
                  </>
                )}
              </h1>

              <p className="mt-3.5 text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-3xl">
                {isHi
                  ? "परम पूज्य मुनि १०८ श्री आदित्य सागर जी महाराज के आशीर्वाद और अभिषेक जैन के विजन से संचालित—आदित्यम् निरामया: गुप्त कमीशन, अघोषित शुल्क और मनमाने बिलों से मुक्ति दिलाकर हर परिवार तक पारदर्शी चिकित्सा पहुंचाने वाला भारत का प्रमुख नैतिक स्वास्थ्य आंदोलन है।"
                  : "Inspired by the divine blessings of Param Pujya Muni 108 Shri Aditya Sagar Ji Maharaj and founded by Abhishek Jain, Adityam Niramayaa eliminates referral commissions, predatory billing markups, and institutional opacity to make accredited healthcare accessible to every family."}
              </p>
            </div>

            {/* Impact Metric Cards - 4 Sleek Frosted Glass Tiles */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 max-w-4xl">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5 backdrop-blur-xs text-left">
                <div className="text-xl sm:text-2xl font-black text-amber-300">50,000+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {isHi ? "लाभान्वित परिवार" : "Families Assisted"}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5 backdrop-blur-xs text-left">
                <div className="text-xl sm:text-2xl font-black text-white">2,500+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {isHi ? "सत्यापित डॉक्टर्स" : "Empanelled Doctors"}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5 backdrop-blur-xs text-left">
                <div className="text-xl sm:text-2xl font-black text-white">85+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {isHi ? "मान्यता प्राप्त अस्पताल" : "Accredited Hospitals"}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5 backdrop-blur-xs text-left">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">₹12+ Cr</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {isHi ? "मरीजों की प्रत्यक्ष बचत" : "Direct Patient Savings"}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. SPIRITUAL PATRONAGE & INSPIRATION: MUNI SHRI ADITYA SAGAR JI
        ==================================================================== */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column: Muni Shri Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-white aspect-[4/5] max-w-md mx-auto">
                <Image
                  src="/images/muni_aditya_blessing_aura.jpg"
                  alt="Param Pujya Muni 108 Shri Aditya Sagar Ji Maharaj"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider mb-2">

                    <span>{isHi ? "आध्यात्मिक प्रेरणा" : "Spiritual Inspiration & Patron"}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                    {isHi
                      ? "परम पूज्य मुनि १०८ श्री आदित्य सागर जी महाराज"
                      : "Param Pujya Muni 108 Aditya Sagar Ji Maharaj"}
                  </h3>
                  <p className="text-xs text-slate-200 font-light mt-1">
                    {isHi
                      ? "अनुकम्पा, जीव-दया और निःस्वार्थ सेवा के शाश्वत प्रेरक"
                      : "Guiding beacon of unconditional compassion and selfless patient care"}
                  </p>
                </div>
              </div>

              {/* Floating Quote Badge */}
              <div className="hidden sm:flex absolute -bottom-4 -right-2 max-w-xs bg-white rounded-2xl p-3.5 shadow-md border border-slate-200 items-start gap-2.5 text-left">
                <Quote className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 italic font-serif leading-relaxed">
                  {isHi
                    ? "“चिकित्सा व्यापार नहीं, जीव-रक्षा का पावन कर्तव्य है।”"
                    : "“Healthcare is not a trade; it is the sacred duty to alleviate suffering.”"}
                </p>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
                <Compass className="w-3.5 h-3.5" />
                <span>{isHi ? "आध्यात्मिक मार्गदर्शक दर्शन" : "The Spiritual Foundation"}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0A1128] leading-snug">
                {isHi ? (
                  <>
                    जब बीमारी आए, तो परिवार को{" "}
                    <span className="text-blue-600 font-serif italic">करुणा व संबल</span> मिलना चाहिए, शोषण नहीं।
                  </>
                ) : (
                  <>
                    When Illness Strikes, Families Deserve{" "}
                    <span className="text-blue-600 font-serif italic">Empathy & Protection</span>, Not Exploitation.
                  </>
                )}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {isHi
                  ? "आज के समय में सामान्य नागरिक जब अस्पताल जाता है, तो उसे अनावश्यक जांचों, डॉक्टरों के रेफरल कट और अस्पष्ट बिलिंग के चक्रव्यूह का सामना करना पड़ता है। परम पूज्य मुनि १०८ आदित्य सागर जी महाराज ने इस सामाजिक पीड़ा को समझते हुए एक ऐसे व्यवस्था-परिवर्तन का आह्वान किया जहां उपचार में केवल धर्म, दया और पूर्ण सत्यता हो।"
                  : "In contemporary medicine, vulnerable patients frequently confront inflated bills, undisclosed referral commissions between doctors and testing centers, and baffling hospital admission charges. Bearing witness to this social suffering, Param Pujya Muni 108 Shri Aditya Sagar Ji Maharaj called for a systemic transformation where healing is anchored strictly in compassion, truth, and duty."}
              </p>

              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-slate-800">
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-amber-600" />
                  <span>{isHi ? "अनुकम्पा (करुणा) का व्यावहारिक स्वरूप" : "Karuna in Practical Action"}</span>
                </h4>
                <p className="text-xs text-amber-950 leading-relaxed font-normal">
                  {isHi
                    ? "जैन दर्शन में 'अनुकम्पा' केवल भावना नहीं, बल्कि सक्रिय सेवा है। मुनि श्री की प्रेरणा से आदित्यम् निरामया: ने यह सुनिश्चित किया कि कोई भी असहाय मरीज पैसों या जानकारी के अभाव में अस्पताल के द्वार से निराश न लौटे।"
                    : "In Jain philosophy, Karuna (compassion) is not merely passive sympathy; it is active service that uplifts the suffering and shields human dignity. Under Muni Shri's guidance, this initiative guarantees that no family faces hospital doors alone or uninformed."}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/vision"
                  className="px-5 py-2.5 rounded-full bg-[#0A1128] hover:bg-blue-900 text-white text-xs font-semibold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <span>{isHi ? "मुनि श्री का पावन उद्बोधन पढ़ें" : "Read Muni Shri's Sacred Discourse"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/join-network"
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{isHi ? "संस्थागत भागीदार बनें" : "Join as Medical Partner"}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. DEDICATED FOUNDER & VISIONARY SECTION: ABHISHEK JAIN
        ==================================================================== */}
        <section className="py-14 sm:py-18 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Narrative & Bio */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                  <User className="w-3.5 h-3.5 text-amber-600" />
                  <span>{isHi ? "संस्थापक एवं विजनरी" : "Founder & Managing Trustee"}</span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0A1128] leading-tight">
                    {isHi ? (
                      <>
                        अभिषेक जैन का दूरदर्शी संकल्प: <br />
                        <span className="text-amber-600 font-serif italic text-xl sm:text-2xl lg:text-3xl">
                          स्वास्थ्य सेवा को व्यापार से सेवा में परिवर्तित करना।
                        </span>
                      </>
                    ) : (
                      <>
                        The Vision of Abhishek Jain: <br />
                        <span className="text-amber-600 font-serif italic text-xl sm:text-2xl lg:text-3xl">
                          Transforming Healthcare from a Commercial Market to a Sacred Trust.
                        </span>
                      </>
                    )}
                  </h2>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  <p>
                    {isHi
                      ? "स्वास्थ्य सेवा क्षेत्र में कार्यरत रहते हुए अभिषेक जैन ने गहराई से देखा कि जब किसी परिवार में कोई गंभीर रूप से बीमार पड़ता है, तो वह केवल बीमारी से ही नहीं लड़ता, बल्कि अस्पतालों की मनमानी बिलिंग, डॉक्टरों और जांच केंद्रों के बीच होने वाले अघोषित कमीशन और कागजी औपचारिकताओं के तनाव से भी टूट जाता है।"
                      : "Working closely within healthcare operations, Abhishek Jain witnessed firsthand the profound distress families suffer during medical emergencies—where vulnerability is routinely compounded by unexpected hospital bill inflations, diagnostic referral commissions, and administrative indifference."}
                  </p>
                  <p>
                    {isHi
                      ? "परम पूज्य मुनि १०८ आदित्य सागर जी महाराज के सानिध्य में अभिषेक जैन ने इस समस्या का स्थायी व संस्थागत समाधान रचने का बीड़ा उठाया। उन्होंने केवल एक ऐप या वेबसाइट नहीं बनाई, बल्कि निजी अस्पतालों और प्रतिष्ठित डायग्नोस्टिक नेटवर्क्स के साथ ऐसे सीधे संस्थागत अनुबंध किए जिन्होंने बिचौलियों के कमीशन को पूरी तरह समाप्त कर दिया।"
                      : "Taking the sacred blessings of Muni 108 Shri Aditya Sagar Ji Maharaj, Abhishek Jain conceived Adityam Niramayaa as an institutional bulwark. Rather than building a conventional commercial aggregator, he engineered direct, legally binding institutional covenants with top hospitals and diagnostic chains—eliminating middleman cuts and passing 100% of fair institutional concessions directly to the patient."}
                  </p>
                </div>

                {/* 3 Core Pillars of Abhishek Jain's Vision */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2 font-bold text-xs">
                      01
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 mb-1">
                      {isHi ? "मरीज संरक्षण कवच" : "Patient-First Shield"}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      {isHi
                        ? "अस्पताल में भर्ती के दौरान बिलिंग की निगरानी और अघोषित खर्चों से पूर्ण सुरक्षा।"
                        : "Active oversight of hospital billing to prevent unjustified charges or inflated procedures."}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 font-bold text-xs">
                      02
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 mb-1">
                      {isHi ? "कमीशन-मुक्त नेटवर्क" : "Zero-Brokerage Alliance"}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      {isHi
                        ? "रेफरल कट और कमीशन पर 100% पाबंदी; हर छूट सीधे परिवार को हस्तांतरित।"
                        : "Direct empanelment contracts that pass 100% of institutional tariff savings straight to the family."}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-2 font-bold text-xs">
                      03
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 mb-1">
                      {isHi ? "डिजिटल सुलभता" : "Seamless Digital Care"}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      {isHi
                        ? "एक ही मोबाइल ऐप से शीर्ष डॉक्टर परामर्श, मुफ़्त होम लैब टेस्ट और प्रामाणिक दवाएं।"
                        : "Unified mobile access for verified OPD consultations, home sample pickups, and honest pharmacy."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Founder's Personal Message Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl bg-gradient-to-br from-[#0A1128] via-[#0F1B3E] to-[#0A1128] text-white p-6 sm:p-8 border border-slate-700/60 shadow-xl overflow-hidden">
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 space-y-5 text-left">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-extrabold text-lg shadow-sm">
                          AJ
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white leading-tight">
                            {isHi ? "अभिषेक जैन" : "Abhishek Jain"}
                          </h3>
                          <span className="text-xs text-amber-300 font-medium block">
                            {isHi ? "संस्थापक एवं मैनेजिंग ट्रस्टी" : "Founder & Managing Trustee"}
                          </span>
                        </div>
                      </div>

                      <div className="text-amber-300/80">
                        <Quote className="w-7 h-7" />
                      </div>
                    </div>

                    <div className="italic font-serif text-xs sm:text-sm text-slate-200 leading-relaxed space-y-3">
                      <p>
                        {isHi
                          ? "“हमारा संकल्प बहुत स्पष्ट है: जब कोई परिवार बीमारी से जूझ रहा हो, तो उसका पूरा ध्यान केवल अपनों के स्वस्थ होने पर होना चाहिए—इस बात पर नहीं कि अस्पताल उनसे मनमाना बिल वसूलेगा या नहीं।”"
                          : "“Our conviction is simple: when a family battles disease, their entire focus must be on healing—never on the anxiety of inflated hospital bills or predatory medical brokerage.”"}
                      </p>
                      <p>
                        {isHi
                          ? "“आदित्यम् निरामया: एक व्यवसाय नहीं, बल्कि समाज के प्रति हमारा पवित्र धर्म है। हम हर उस नागरिक के साथ खड़े हैं जिसे न्यायसंगत और गरिमामयी स्वास्थ्य सेवा की आवश्यकता है।”"
                          : "“Adityam Niramayaa is not a commercial enterprise; it is our uncompromised duty to society. We stand beside every family to ensure they receive ethical, accredited care with complete dignity.”"}
                      </p>
                    </div>

                    {/* Signature Block */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white tracking-wide">
                          Abhishek Jain
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {isHi ? "आदित्यम् निरामया: फाउंडेशन" : "Adityam Niramayaa Healthcare"}
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded-full bg-white/10 text-emerald-400 text-[10px] font-bold border border-white/10">
                        {isHi ? "सत्य • सेवा • शुचिता" : "Truth • Service • Dignity"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            5. OUR 4 ETHICAL COMMITMENTS (HOW WE ARE DIFFERENT)
        ==================================================================== */}
        <section className="py-12 sm:py-16 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isHi ? "हमारा नैतिक घोषणा-पत्र" : "The 4 Pillars of Our Ethical Charter"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1128]">
                {isHi ? "चिकित्सा में पूर्ण शुचिता एवं विश्वास" : "Guaranteed Principles in Every Treatment"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1.5">
                {isHi
                  ? "हम केवल एक सेवा मंच नहीं, बल्कि मरीज के अधिकारों और मानवीय गरिमा की सुरक्षा करने वाला कवच हैं।"
                  : "We do not merely aggregate facilities; we enforce clinical and financial integrity across every partner."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {/* Pillar 1 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all text-left">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 border border-rose-100">
                  <TrendingDown className="w-4 h-4 text-rose-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {isHi ? "शून्य गुप्त कमीशन" : "Zero Referral Cuts"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isHi
                    ? "डॉक्टरों व जांच केंद्रों के बीच गुप्त कमीशन पर 100% पाबंदी। किसी भी मरीज को केवल कमीशन के लिए अनावश्यक जांच या भर्ती नहीं की जाती।"
                    : "Zero commercial brokerage or kickbacks. Patients are never prescribed unnecessary scans or hospital admissions for hidden cuts."}
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all text-left">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 border border-blue-100">
                  <FileCheck2 className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {isHi ? "पूर्व-निर्धारित दरें" : "Pre-Agreed Tariffs"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isHi
                    ? "ओपीडी, टेस्ट और सर्जरी के पूर्व-निर्धारित पारदर्शी पैकेज। डिस्चार्ज के समय कोई अघोषित सरचार्ज या छिपा हुआ खर्च नहीं जोड़ा जाता।"
                    : "Pre-fixed package pricing for OPD, labs, and surgical procedures. No surprise markups added upon final discharge."}
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all text-left">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 border border-amber-100">
                  <HeartHandshake className="w-4 h-4 text-amber-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {isHi ? "अस्पताल मित्र सहयोग" : "Hospital Buddy Support"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isHi
                    ? "सहयोगी अस्पतालों में ऑन-ग्राउंड 'अस्पताल मित्र' की निरंतर उपस्थिति, ताकि बुजुर्ग या असहाय मरीज को कागजी प्रक्रियाओं में भटकना न पड़े।"
                    : "Trained on-ground coordinators present at partner hospitals to guide elderly patients and handle admission paperwork."}
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all text-left">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 border border-emerald-100">
                  <Award className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {isHi ? "सात्विक पथ्य एवं गरिमा" : "Satvik Care & Dignity"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isHi
                    ? "भर्ती मरीजों के लिए शुद्ध शाकाहारी व सात्विक भोजन सहयोग तथा त्यागी, तपस्वी साधु-संतों के लिए विशेष स्वास्थ्य सेवा।"
                    : "Dedicated Satvik dietary assistance during hospital stay, along with selfless wellness service for monks and ascetics."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            6. REGIONAL NETWORK DESKS ACROSS INDIA
        ==================================================================== */}
        <section className="py-12 sm:py-16 bg-[#0A1128] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl text-left mb-8">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                {isHi ? "राष्ट्रीय नेटवर्क हब्स" : "National Coordination Hubs"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                {isHi ? "प्रमुख शहरों में समर्पित समन्वय केंद्र" : "Serving Families Across 6 Major Healthcare Hubs"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1.5">
                {isHi
                  ? "हमारे ऑन-ग्राउंड समन्वयक मरीजों को ओपीडी, आपातकालीन बेड एवं कैशलेस बीमा क्लीयरेंस में तुरंत सहायता प्रदान करते हैं।"
                  : "On-ground patient helplines and empanelled hospital desks actively operating across India's key medical centers."}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { cityEn: "Jaipur", cityHi: "जयपुर", hosp: "28+ Hospitals", tagEn: "Headquarters", tagHi: "केंद्रीय मुख्यालय" },
                { cityEn: "Delhi NCR", cityHi: "दिल्ली एनसीआर", hosp: "18+ Hospitals", tagEn: "Super-Specialty Hub", tagHi: "सुपर-स्पेशलिटी हब" },
                { cityEn: "Mumbai", cityHi: "मुंबई", hosp: "14+ Hospitals", tagEn: "Western Desk", tagHi: "पश्चिम क्षेत्रीय केंद्र" },
                { cityEn: "Ahmedabad", cityHi: "अहमदाबाद", hosp: "12+ Hospitals", tagEn: "Gujarat Hub", tagHi: "गुजरात क्षेत्रीय हब" },
                { cityEn: "Indore", cityHi: "इंदौर", hosp: "10+ Hospitals", tagEn: "Central India", tagHi: "मध्य भारत केंद्र" },
                { cityEn: "Bengaluru", cityHi: "बेंगलुरु", hosp: "8+ Hospitals", tagEn: "South India Hub", tagHi: "दक्षिण भारत हब" },
              ].map((hub) => (
                <div
                  key={hub.cityEn}
                  className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-left flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-amber-300 block mb-1">
                      {isHi ? hub.tagHi : hub.tagEn}
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      {isHi ? hub.cityHi : hub.cityEn}
                    </h4>
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-3 border-t border-white/10 pt-1.5">
                    {hub.hosp}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            8. DUAL ACTION BANNER: FOR PATIENTS & HEALTHCARE PROVIDERS
        ==================================================================== */}
        <section className="py-14 sm:py-18 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Box 1: For Patients */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs text-left flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5 border border-blue-100">
                  <Heart className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-1.5">
                  {isHi ? "मरीजों एवं परिवारों के लिए" : "For Patients & Families"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {isHi
                    ? "बिना किसी सदस्यता शुल्क के शीर्ष डॉक्टरों से रियायती परामर्श लें, लैब टेस्ट घर बैठे कराएं अथवा अस्पताल भर्ती में सहायता पाएं।"
                    : "Access priority doctor appointments, free home lab collections, and transparent hospital admissions with zero subscription fees."}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  href="/book"
                  className="px-5 py-2.5 rounded-full bg-[#0A1128] hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{isHi ? "अपॉइंटमेंट बुक करें" : "Book an Appointment"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/get-app"
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold transition-all cursor-pointer"
                >
                  <span>{isHi ? "ऐप डाउनलोड करें" : "Download App"}</span>
                </Link>
              </div>
            </div>

            {/* Box 2: For Providers */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs text-left flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3.5 border border-amber-100">
                  <Building2 className="w-4 h-4 text-amber-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-1.5">
                  {isHi ? "अस्पतालों एवं डॉक्टरों के लिए" : "For Hospitals, Doctors & Labs"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {isHi
                    ? "हमारे सत्यापित नैतिक स्वास्थ्य नेटवर्क में शामिल हों। शून्य बिचौलिया शुल्क के साथ सीधे 50,000+ परिवारों तक गरिमामयी सेवाएं पहुंचाएं।"
                    : "Join our empanelled network of ethical healthcare providers. Reach 50,000+ patient families with zero brokerage and total operational transparency."}
                </p>
              </div>

              <div>
                <Link
                  href="/join-network"
                  className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-xs inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{isHi ? "प्रदाता संबद्धता आवेदन भरें" : "Apply for Empanelment"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Global Footer */}
      <Footer />
    </div>
  );
}
