"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Stethoscope,
  FlaskConical,
  Pill,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Mail,
  MapPin,
  FileCheck,
  HeartHandshake,
  BadgeCheck,
  Award,
  Users,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/useLanguage";

export default function JoinNetworkPage() {
  const [lang, setLang] = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  // Form Fields
  const [instName, setInstName] = useState("");
  const [facilityType, setFacilityType] = useState("hospital");
  const [city, setCity] = useState("Delhi NCR");
  const [contactPerson, setContactPerson] = useState("");
  const [designation, setDesignation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [bedsCount, setBedsCount] = useState("");
  const [hasSatvikKitchen, setHasSatvikKitchen] = useState(true);
  const [agreesToEthicalCharter, setAgreesToEthicalCharter] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = "AN-EMP-" + Math.floor(100000 + Math.random() * 900000);
    setApplicationId(refCode);
    setSubmitted(true);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#172554] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar lang={lang} onToggleLang={setLang} />

      <main className="flex-1">
        {/* ====================================================================
            2. HERO SECTION: DEDICATED EMPANELMENT INVITATION
        ==================================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#172554] via-[#1E3A8A] to-[#172554] text-white pt-10 pb-16 lg:pt-14 lg:pb-20 px-4 sm:px-6">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb & Network Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-medium text-blue-200/80">
                <Link href="/" className="hover:text-white transition-colors">
                  {lang === "hi" ? "मुख्य पृष्ठ" : "Home"}
                </Link>
                <span>/</span>
                <span className="text-amber-300 font-semibold">
                  {lang === "hi" ? "संस्थान व डॉक्टर पंजीकरण" : "Partner Empanelment"}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-amber-300 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>
                  {lang === "hi"
                    ? "सत्यापित स्वास्थ्य नेटवर्क • शून्य बिचौलिया कमीशन"
                    : "Verified Healthcare Network • Zero Middleman Commissions"}
                </span>
              </div>
            </div>

            {/* Editorial Headline */}
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-serif text-white tracking-tight leading-[1.18]">
                {lang === "hi" ? (
                  <>
                    स्वास्थ्य नेटवर्क से जुड़ें। <br className="hidden sm:inline" />
                    <span className="italic font-serif text-amber-300">
                      नैतिक सेवा, गरिमापूर्ण सहभागिता।
                    </span>
                  </>
                ) : (
                  <>
                    Join the Verified Network. <br className="hidden sm:inline" />
                    <span className="italic font-serif text-amber-300">
                      Ethical Healthcare, Transparent Partnership.
                    </span>
                  </>
                )}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl font-light">
                {lang === "hi"
                  ? "अस्पताल, सुपर-स्पेशलिस्ट क्लिनिक, प्रमाणित डायग्नोस्टिक लैब्स और लाइसेंस प्राप्त फार्मेसियों के लिए सम्मानजनक मंच। मरीजों को उचित दरें प्रदान करें और पारदर्शी रूप से जुड़ें।"
                  : "Empanel your hospital, specialist clinic, NABL diagnostic lab, or licensed pharmacy. We connect ethical healthcare providers directly with families seeking honest, compassionate medical care."}
              </p>
            </div>

            {/* 4 Foundation Pillars for Providers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8">
              {[
                {
                  icon: Users,
                  titleEn: "Direct Patient Reach",
                  titleHi: "मरीजों से सीधा संपर्क",
                  descEn: "Growing family community",
                  descHi: "विस्तृत व निष्ठावान परिवार",
                },
                {
                  icon: Award,
                  titleEn: "Zero Referral Fees",
                  titleHi: "शून्य कट-कमीशन",
                  descEn: "100% ethical integrity",
                  descHi: "पूर्णतः नैतिक व पारदर्शी",
                },
                {
                  icon: Clock,
                  titleEn: "24-Hour Review",
                  titleHi: "२४ घंटे में समीक्षा",
                  descEn: "Dedicated clinical board",
                  descHi: "शीघ्र सत्यापन व प्रक्रिया",
                },
                {
                  icon: HeartHandshake,
                  titleEn: "Dignified Healing",
                  titleHi: "सच्ची स्वास्थ्य सेवा",
                  descEn: "Inspired by sacred values",
                  descHi: "पवित्र सेवा संकल्प पर आधारित",
                },
              ].map((pill, idx) => {
                const IconComponent = pill.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/20 shadow-xs transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-xl bg-amber-400/15 text-amber-300 flex items-center justify-center mb-2.5 border border-amber-300/25">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {lang === "hi" ? pill.titleHi : pill.titleEn}
                    </div>
                    <div className="text-[11px] text-blue-200/75 mt-0.5 font-light">
                      {lang === "hi" ? pill.descHi : pill.descEn}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. DEDICATED EMPANELMENT REGISTRATION STATION
        ==================================================================== */}
        <section className="relative -mt-6 z-20 px-4 sm:px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_20px_45px_rgba(23,37,84,0.08)] border border-slate-200/90">
              {!submitted ? (
                <div>
                  <div className="border-b border-slate-150 pb-6 mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold border border-blue-100 mb-2">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{lang === "hi" ? "आधिकारिक पंजीकरण फॉर्म" : "Official Provider Empanelment"}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif text-slate-900">
                      {lang === "hi"
                        ? "स्वास्थ्य संस्थान / विशेषज्ञ डॉक्टर पंजीकरण"
                        : "Healthcare Facility & Specialist Registration"}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-light">
                      {lang === "hi"
                        ? "कृपया अपने संस्थान का विवरण भरें। हमारा मेडिकल बोर्ड २४ घंटे में आपसे संपर्क कर प्रक्रिया पूर्ण करेगा।"
                        : "Please provide your institutional or clinic details. Our clinical empanelment board will reach out within 24 hours to finalize integration."}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Facility Type Selector (3D Cards) */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
                        {lang === "hi" ? "संस्थान का प्रकार चुनें" : "Select Facility Category"}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {[
                          { id: "hospital", labelEn: "Hospital", labelHi: "अस्पताल", icon: Building2 },
                          { id: "doctor", labelEn: "Doctor Clinic", labelHi: "डॉक्टर क्लिनिक", icon: Stethoscope },
                          { id: "lab", labelEn: "Diagnostic Lab", labelHi: "पैथोलॉजी लैब", icon: FlaskConical },
                          { id: "pharmacy", labelEn: "Pharmacy", labelHi: "फार्मेसी", icon: Pill },
                        ].map((type) => {
                          const IconComp = type.icon;
                          const isSelected = facilityType === type.id;
                          return (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() => setFacilityType(type.id)}
                              className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                                isSelected
                                  ? "bg-[#172554] text-white border-[#172554] shadow-md shadow-blue-900/20"
                                  : "bg-slate-50/70 hover:bg-slate-100 text-slate-700 border-slate-200"
                              }`}
                            >
                              <IconComp className={`w-5 h-5 ${isSelected ? "text-amber-400" : "text-[#2563EB]"}`} />
                              <span className="text-xs font-bold">
                                {lang === "hi" ? type.labelHi : type.labelEn}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Row 1: Facility Name & City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          {lang === "hi" ? "संस्थान / क्लिनिक / डॉक्टर का नाम" : "Institution / Clinic / Doctor Name"} *
                        </label>
                        <input
                          type="text"
                          required
                          value={instName}
                          onChange={(e) => setInstName(e.target.value)}
                          placeholder={
                            lang === "hi"
                              ? "जैसे: महावीर सुपर स्पेशलिटी हॉस्पिटल"
                              : "e.g. Mahaveer Multi-Specialty Hospital"
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          {lang === "hi" ? "शहर / राज्य" : "City / Location"} *
                        </label>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="e.g. Jaipur / Delhi NCR / Mumbai"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Contact Person & Designation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          {lang === "hi" ? "चिकित्सा निदेशक / संपर्क व्यक्ति" : "Medical Director / Authorized Person"} *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactPerson}
                          onChange={(e) => setContactPerson(e.target.value)}
                          placeholder="e.g. Dr. Sudhir Singhal"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          {lang === "hi" ? "पद / पदनाम" : "Designation / Role"}
                        </label>
                        <input
                          type="text"
                          value={designation}
                          onChange={(e) => setDesignation(e.target.value)}
                          placeholder="e.g. Medical Superintendent / Managing Director"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          {lang === "hi" ? "आधिकारिक मोबाइल / फोन नंबर" : "Official Phone / Mobile Number"} *
                        </label>
                        <div className="relative">
                          <span className="absolute left-3.5 top-3 text-sm text-slate-400 font-semibold">+91</span>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="10-digit mobile number"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          {lang === "hi" ? "ईमेल पता" : "Official Email Address"}
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="contact@hospital.org"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 4: Registration & Capacity */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          {lang === "hi" ? "रजिस्ट्रेशन / NABH / NABL नंबर" : "Registration / NABH / NABL License #"}
                        </label>
                        <input
                          type="text"
                          value={regNumber}
                          onChange={(e) => setRegNumber(e.target.value)}
                          placeholder="e.g. NABH-2024-8192"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          {lang === "hi" ? "बेड क्षमता / कुल विशेषज्ञ" : "Bed Capacity / Total Doctors"}
                        </label>
                        <input
                          type="text"
                          value={bedsCount}
                          onChange={(e) => setBedsCount(e.target.value)}
                          placeholder="e.g. 150 Beds / 25 Specialists"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Checkboxes: Satvik Kitchen & Ethical Charter */}
                    <div className="space-y-3 pt-2">
                      <label className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100/70 transition-colors">
                        <input
                          type="checkbox"
                          checked={hasSatvikKitchen}
                          onChange={(e) => setHasSatvikKitchen(e.target.checked)}
                          className="mt-0.5 w-4 h-4 rounded text-[#2563EB] accent-[#2563EB] cursor-pointer"
                        />
                        <span className="text-xs text-slate-700 leading-relaxed">
                          <strong>{lang === "hi" ? "सात्विक आहार संकल्प: " : "Satvik Kitchen Provision: "}</strong>
                          {lang === "hi"
                            ? "हमारा संस्थान भर्ती मरीजों व परिजनों हेतु शुद्ध, सात्विक (कंदमूल-रहित) भोजन उपलब्ध कराने में सक्षम व सहमत है।"
                            : "Our facility can coordinate onion-garlic free, clean Satvik meals for admitted patients and their attendants."}
                        </span>
                      </label>

                      <label className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={agreesToEthicalCharter}
                          onChange={(e) => setAgreesToEthicalCharter(e.target.checked)}
                          className="mt-0.5 w-4 h-4 rounded text-amber-600 accent-amber-600 cursor-pointer"
                          required
                        />
                        <span className="text-xs text-amber-950 leading-relaxed">
                          <strong>{lang === "hi" ? "आदित्यम् नैतिक प्रतिज्ञा: " : "Adityam Ethical Charter: "}</strong>
                          {lang === "hi"
                            ? "हम पूर्व-निर्धारित पारदर्शी दरों का सम्मान करेंगे और बिना किसी अनुचित कमीशन या छिपे शुल्क के मरीजों की सेवा करेंगे।"
                            : "We agree to honor clear pre-negotiated institutional fee schedules without hidden referral commissions or arbitrary billing markups."}
                        </span>
                      </label>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full py-4 rounded-2xl bg-[#172554] hover:bg-[#1E3A8A] text-white text-sm font-bold shadow-lg shadow-blue-950/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                      >
                        <ShieldCheck className="w-5 h-5 text-amber-400" />
                        <span>{lang === "hi" ? "संस्थान पंजीकरण आवेदन जमा करें" : "Submit Empanelment Application"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                /* Success Confirmation State */
                <div className="py-10 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
                      {lang === "hi" ? "आवेदन सफलतापूर्वक प्राप्त हुआ" : "Application Received"} • {applicationId}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 mt-4">
                      {lang === "hi" ? `धन्यवाद, ${contactPerson}!` : `Thank You, ${contactPerson}!`}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 max-w-lg mx-auto font-light leading-relaxed">
                      {lang === "hi"
                        ? `${instName} का पंजीकरण अनुरोध दर्ज कर लिया गया है। हमारा मेडिकल बोर्ड आपके फोन +91 ${phone} पर २४ घंटे के भीतर संपर्क करेगा।`
                        : `Your partnership application for ${instName} has been logged. Our provider relations board will reach out to +91 ${phone} within 24 hours to review credentials and finalize empanelment.`}
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="max-w-md mx-auto bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left space-y-2 text-xs text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-400">{lang === "hi" ? "संस्थान का नाम:" : "Institution:"}</span>
                      <span className="font-bold text-slate-900">{instName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{lang === "hi" ? "प्रकार:" : "Category:"}</span>
                      <span className="font-bold capitalize text-[#2563EB]">{facilityType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{lang === "hi" ? "शहर:" : "City:"}</span>
                      <span className="font-bold text-slate-900">{city}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{lang === "hi" ? "सत्यापन समय:" : "Verification SLA:"}</span>
                      <span className="font-bold text-emerald-700">Within 24 Hours</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setInstName("");
                        setPhone("");
                      }}
                      className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                    >
                      {lang === "hi" ? "दूसरा आवेदन करें" : "Submit Another Facility"}
                    </button>
                    <Link
                      href="/"
                      className="px-6 py-2.5 rounded-full bg-[#172554] hover:bg-[#1E3A8A] text-white text-xs font-bold transition-all shadow-md"
                    >
                      {lang === "hi" ? "मुख्य पृष्ठ पर जाएं" : "Return to Home"}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. 4-STEP EMPANELMENT PROCESS (TRANSPARENT ROADMAP)
        ==================================================================== */}
        <section className="py-16 bg-white border-t border-slate-200/90 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {lang === "hi" ? "सरल सत्यापन प्रक्रिया" : "Verification Process"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mt-2">
                {lang === "hi"
                  ? "संस्थान नेटवर्क से कैसे जुड़ता है?"
                  : "How Empanelment Works in 4 Steps"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-light">
                {lang === "hi"
                  ? "गुणवत्ता, स्वच्छता और नैतिक चिकित्सा मानकों की निष्पक्ष समीक्षा।"
                  : "A straightforward verification ensuring quality care, hygiene, and ethical tariffs."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  titleEn: "Submit Application",
                  titleHi: "ऑनलाइन आवेदन",
                  descEn: "Fill in institutional credentials, specialties, and licensed personnel details.",
                  descHi: "संस्थान की डिग्रियां, विशेषज्ञता और बेड क्षमता का विवरण भरें।",
                  color: "bg-blue-50 text-[#2563EB] border-blue-200",
                },
                {
                  step: "02",
                  titleEn: "Credential Audit",
                  titleHi: "दस्तावेज़ सत्यापन",
                  descEn: "Our clinical committee reviews NABH/NABL accreditations and state licenses.",
                  descHi: "हमारा मेडिकल बोर्ड मान्यता व लाइसेंस की निष्पक्ष जांच करता है।",
                  color: "bg-emerald-50 text-emerald-700 border-emerald-200",
                },
                {
                  step: "03",
                  titleEn: "Tariff Alignment",
                  titleHi: "पारदर्शी दर निर्धारण",
                  descEn: "Agree on pre-fixed, fair institutional charges for OPD, diagnostics, and beds.",
                  descHi: "मरीजों हेतु रियायती व निश्चित दरों की सूची तय की जाती है।",
                  color: "bg-amber-50 text-amber-700 border-amber-200",
                },
                {
                  step: "04",
                  titleEn: "Network Go-Live",
                  titleHi: "पोर्टल लाइव",
                  descEn: "Facility goes live across the Adityam web platform, mobile app, and care desks.",
                  descHi: "संस्थान आदित्यम् वेबसाइट, मोबाइल ऐप व अस्पताल डेस्क पर लाइव हो जाता है।",
                  color: "bg-indigo-50 text-indigo-700 border-indigo-200",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all transform-gpu hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300">{item.step}</span>
                    <div className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${item.color}`}>
                      {lang === "hi" ? "चरणबद्ध प्रक्रिया" : "Verified Step"}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {lang === "hi" ? item.titleHi : item.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {lang === "hi" ? item.descHi : item.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            5. HELPLINE FOR PROVIDERS & HOSPITAL BOARDS
        ==================================================================== */}
        <section className="py-10 bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#172554] text-white px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-white/10 px-3 py-1 rounded-full mb-2">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{lang === "hi" ? "हेल्थकेयर पार्टनर डेस्क" : "Healthcare Partner Desk"}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {lang === "hi"
                  ? "संस्थान पंजीकरण में कोई प्रश्न? सीधे संपर्क करें"
                  : "Have questions about hospital or doctor empanelment?"}
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 mt-1">
                {lang === "hi"
                  ? "ईमेल: partners@adityamniramayaa.org • फोन: 1800-208-1008 (एक्सटेंशन 2)"
                  : "Email: partners@adityamniramayaa.org • Direct Line: 1800-208-1008 (Ext 2)"}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="mailto:partners@adityamniramayaa.org"
                className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <Mail className="w-4 h-4 text-slate-950" />
                <span>{lang === "hi" ? "ईमेल भेजें" : "Email Relations Team"}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Global Universal Footer */}
      <Footer />
    </div>
  );
}
