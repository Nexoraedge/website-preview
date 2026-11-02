"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Download,
  QrCode,
  CheckCircle2,
  ShieldCheck,
  Bell,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  Send,
  Star,
  Layers,
  Heart,
  PhoneCall,
  Check,
  Building2,
  Pill,
  FlaskConical,
  HeartHandshake,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/useLanguage";

export default function GetAppPage() {
  const [lang, setLang] = useLanguage();
  const [phone, setPhone] = useState("");
  const [linkSent, setLinkSent] = useState(false);

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 10) {
      setLinkSent(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#172554] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar lang={lang} onToggleLang={setLang} />

      <main className="flex-1">
        {/* ====================================================================
            2. HERO SECTION: EXECUTIVE LUXURY DARK NAVY (#0A1128)
        ==================================================================== */}
        <section className="relative overflow-hidden bg-[#0A1128] text-white pt-8 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6">
          {/* Subtle ambient radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.22),transparent_75%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Bar: Breadcrumb & Platform Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-white transition-colors">
                  {lang === "hi" ? "होम" : "Home"}
                </Link>
                <span>/</span>
                <span className="text-amber-400 font-bold">
                  {lang === "hi" ? "मोबाइल ऐप डाउनलोड" : "Adityam Mobile App"}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-slate-300">
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {lang === "hi"
                    ? "एंड्रॉइड व आईओएस • 100% निःशुल्क"
                    : "Available on Android & iOS • 100% Free"}
                </span>
              </div>
            </div>

            {/* Grid: Headline + App Download Badges + QR Box */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  {lang === "hi" ? (
                    <>
                      सम्पूर्ण स्वास्थ्य सेवा। <br />
                      <span className="text-amber-300 font-serif italic font-normal text-2xl sm:text-3xl lg:text-4xl">
                        अब आपके अपने स्मार्टफोन में।
                      </span>
                    </>
                  ) : (
                    <>
                      Compassionate Healthcare. <br />
                      <span className="text-amber-300 font-serif italic font-normal text-2xl sm:text-3xl lg:text-4xl">
                        Right in Your Pocket.
                      </span>
                    </>
                  )}
                </h1>

                <p className="mt-3.5 text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                  {lang === "hi"
                    ? "प्राथमिकता ओपीडी अपॉइंटमेंट, घर बैठे मुफ़्त ब्लड टेस्ट, रियायती दवाइयां और कैशलेस अस्पताल भर्ती—सब कुछ बिना किसी कमीशन या विज्ञापन के।"
                    : "Book priority doctor appointments, order genuine sealed medicines with institutional savings, schedule free doorstep lab tests, and access cashless hospital support in one clean app."}
                </p>

                {/* Direct App Store Download Badges */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  {/* Google Play Button */}
                  <a
                    href="#download-android"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-sm group cursor-pointer active:scale-98"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.793 12 3.61 22.186A2.25 2.25 0 0 1 3 20.6V3.4c0-.623.23-1.19.609-1.586zm11.242 11.244l2.57 2.57-12.02 6.84 9.45-9.41zm2.57-2.116l-2.57 2.57-9.45-9.41 12.02 6.84zm1.144 1.144l2.19 1.246a1.5 1.5 0 0 1 0 2.616l-2.19 1.246-2.584-2.554 2.584-2.554z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider font-semibold leading-none">
                        GET IT ON
                      </span>
                      <span className="block text-xs font-bold text-slate-900 leading-tight mt-0.5">
                        Google Play
                      </span>
                    </div>
                  </a>

                  {/* Apple App Store Button */}
                  <a
                    href="#download-ios"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shadow-sm group cursor-pointer active:scale-98"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.72-.94 2.74 1.01.08 2.03-.49 2.64-1.24z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <span className="block text-[9px] text-slate-300 uppercase tracking-wider font-semibold leading-none">
                        DOWNLOAD ON THE
                      </span>
                      <span className="block text-xs font-bold text-white leading-tight mt-0.5">
                        App Store
                      </span>
                    </div>
                  </a>
                </div>

                {/* Rating & User Trust Badge */}
                <div className="mt-5 flex items-center gap-2.5">
                  <div className="flex items-center text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-slate-300">
                    4.9 / 5 Rating • 25,000+ {lang === "hi" ? "संतुष्ट परिवार" : "Active Families"}
                  </span>
                </div>
              </div>

              {/* Right Column: Sleek Frosted QR Scanner Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-xs rounded-2xl p-5 bg-white/5 backdrop-blur-md border border-white/10 shadow-xl text-center text-white">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center mx-auto mb-3 border border-amber-300/30">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold">
                    {lang === "hi" ? "मोबाइल से स्कैन करें" : "Scan to Install Instantly"}
                  </h3>
                  <p className="text-[11px] text-slate-300 mt-0.5 mb-3.5">
                    {lang === "hi"
                      ? "कैमरा से क्यूआर स्कैन करके तुरंत ऐप डाउनलोड करें।"
                      : "Scan with your camera to open the direct store link."}
                  </p>

                  {/* QR Code Box */}
                  <div className="w-36 h-36 mx-auto p-2.5 bg-white rounded-xl shadow-md flex items-center justify-center mb-3">
                    <div className="w-full h-full border border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-900">
                      <QrCode className="w-24 h-24 text-[#0A1128]" />
                      <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                        ADITYAM NIRAMAYAA
                      </span>
                    </div>
                  </div>

                  <span className="inline-block text-[10px] text-amber-300 font-medium">
                    ✓ Verified & Secure App Package
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. SEND DOWNLOAD LINK TO PHONE (SMS / WHATSAPP)
        ==================================================================== */}
        <section className="relative -mt-6 z-20 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200">
              <div className="text-center max-w-md mx-auto mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                  {lang === "hi" ? "त्वरित लिंक प्राप्त करें" : "Direct Link"}
                </span>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-1.5">
                  {lang === "hi"
                    ? "अपने फोन पर ऐप डाउनलोड लिंक मंगाएं"
                    : "Receive App Download Link via SMS"}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {lang === "hi"
                    ? "अपना 10 अंकों का मोबाइल नंबर दर्ज करें, हम तुरंत लिंक भेज देंगे।"
                    : "Enter your 10-digit mobile number and we'll text the direct store link."}
                </p>
              </div>

              {!linkSent ? (
                <form onSubmit={handleSendLink} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <span className="absolute left-3.5 top-2.5 text-xs text-slate-400 font-semibold">+91</span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter mobile number"
                      className="w-full pl-11 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#0A1128] hover:bg-slate-800 text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-98"
                  >
                    <Send className="w-3 h-3 text-amber-400" />
                    <span>{lang === "hi" ? "लिंक भेजें" : "Send Link"}</span>
                  </button>
                </form>
              ) : (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center max-w-md mx-auto space-y-1.5">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                  <p className="text-xs font-bold text-emerald-900">
                    {lang === "hi" ? `लिंक +91 ${phone} पर भेज दिया गया है!` : `Download link sent to +91 ${phone}!`}
                  </p>
                  <p className="text-[11px] text-emerald-700">
                    {lang === "hi"
                      ? "कृपया अपने एसएमएस व व्हाट्सएप संदेश की जांच करें।"
                      : "Please check your SMS and WhatsApp for the direct download link."}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setLinkSent(false);
                      setPhone("");
                    }}
                    className="text-[11px] text-blue-600 font-bold hover:underline cursor-pointer pt-1 block mx-auto"
                  >
                    {lang === "hi" ? "दूसरा नंबर दर्ज करें" : "Send to another number"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. 4 CORE REASONS TO USE THE MOBILE APP
        ==================================================================== */}
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {lang === "hi" ? "ऐप की मुख्य विशेषताएं" : "App Features"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1128] mt-2">
                {lang === "hi"
                  ? "मरीजों व परिवारों के लिए विशेष सुविधाएं"
                  : "Designed for Family Healthcare Savings & Care"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {lang === "hi"
                  ? "पारदर्शी स्वास्थ्य सेवाओं का सहज, विश्वसनीय और डिजिटल अनुभव।"
                  : "A seamless, ethical digital health experience built to protect your family."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {[
                {
                  icon: Clock,
                  titleEn: "Digital Queue Pass",
                  titleHi: "डिजिटल ओपीडी टोकन",
                  descEn: "Show your live in-app entry pass at partner hospital desks to consult without waiting.",
                  descHi: "अस्पताल में मोबाइल टोकन दिखाकर बिना सामान्य कतार के सीधा परामर्श लें।",
                  color: "bg-blue-50 text-blue-600 border-blue-200",
                },
                {
                  icon: FileText,
                  titleEn: "Lifetime Health Vault",
                  titleHi: "सुरक्षित मेडिकल वॉल्ट",
                  descEn: "Encrypted storage for blood reports, MRI scans, and doctor prescriptions for your entire family.",
                  descHi: "परिवार के सभी सदस्यों की जांच रिपोर्ट व पर्चों का आजीवन सुरक्षित डिजिटल संग्रह।",
                  color: "bg-emerald-50 text-emerald-700 border-emerald-200",
                },
                {
                  icon: Bell,
                  titleEn: "Smart Refill Reminders",
                  titleHi: "दवा रिफिल अलार्म",
                  descEn: "Never run out of essential diabetes or BP medicines. 1-tap reorder with doorstep delivery.",
                  descHi: "नियमित दवाएं खत्म होने से पहले रिमाइंडर, एक क्लिक में घर डिलीवरी का आर्डर।",
                  color: "bg-amber-50 text-amber-700 border-amber-200",
                },
                {
                  icon: ShieldCheck,
                  titleEn: "Cashless Pre-Auth Tracker",
                  titleHi: "कैशलेस क्लेम ट्रैकर",
                  descEn: "Track your TPA insurance claim approval live during planned hospital admissions.",
                  descHi: "अस्पताल में भर्ती के दौरान अपने टीपीए बीमा क्लेम की स्थिति रियल-टाइम देखें।",
                  color: "bg-indigo-50 text-indigo-700 border-indigo-200",
                },
              ].map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all text-left"
                  >
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-3 text-blue-600">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      {lang === "hi" ? feat.titleHi : feat.titleEn}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {lang === "hi" ? feat.descHi : feat.descEn}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            5. WHAT YOU CAN DO WITH ADITYAM APP (ECOSYSTEM HIGHLIGHTS)
        ==================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-200 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {lang === "hi" ? "सम्पूर्ण समाधान" : "All-in-One Health Hub"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1128] mt-2">
                {lang === "hi"
                  ? "एक ही ऐप में स्वास्थ्य की हर ज़रूरत"
                  : "Everything Your Family Needs for Honest Healthcare"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {lang === "hi" ? "डॉक्टर व अस्पताल भर्ती" : "Doctor Visits & Hospital Desk"}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {lang === "hi"
                      ? "पूर्व-निर्धारित दरों पर शीर्ष डॉक्टरों से परामर्श लें और सहयोगी अस्पतालों में 'अस्पताल मित्र' की ऑन-ग्राउंड सहायता पाएं।"
                      : "Consult senior doctors at transparent tariffs with on-ground Hospital Buddy assistance inside empanelled institutions."}
                  </p>
                </div>
                <Link
                  href="/doctors"
                  className="text-xs font-semibold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
                >
                  <span>{lang === "hi" ? "डॉक्टर सूची देखें" : "View Doctors Directory"}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-3">
                    <FlaskConical className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {lang === "hi" ? "मुफ़्त होम लैब टेस्ट" : "Certified NABL Diagnostics"}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {lang === "hi"
                      ? "NABL प्रमाणित लैब्स से ब्लड टेस्ट बुक करें। प्रशिक्षित स्वास्थ्यकर्मी घर आकर सैंपल लेंगे और 6-12 घंटे में रिपोर्ट प्राप्त होगी।"
                      : "Book routine or full-body checks with free doorstep sample pickup. Digital reports delivered within 6 to 12 hours."}
                  </p>
                </div>
                <Link
                  href="/diagnostics"
                  className="text-xs font-semibold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1"
                >
                  <span>{lang === "hi" ? "हेल्थ पैकेज देखें" : "Explore Lab Packages"}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                    <Pill className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {lang === "hi" ? "सत्यापित दवाइयां" : "Fair Price Pharmacy"}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {lang === "hi"
                      ? "पर्चे की फोटो अपलोड करें और सीधे निर्माता बैच से 100% असली दवाइयां घर पर सुरक्षित मंगवाएं।"
                      : "Upload your prescription for genuine manufacturer-sealed medicines delivered with verified cold-chain safety."}
                  </p>
                </div>
                <Link
                  href="/pharmacy"
                  className="text-xs font-semibold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1"
                >
                  <span>{lang === "hi" ? "फार्मेसी सेवा जानें" : "Learn About Pharmacy"}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Universal Footer */}
      <Footer />
    </div>
  );
}