"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Building2,
  Heart,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/useLanguage";

export default function ContactPage() {
  const [lang, setLang] = useLanguage();
  const isHi = lang === "hi";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Delhi NCR");
  const [service, setService] = useState("General Query");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.length === 10) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setRefId(`REQ-${Date.now().toString().slice(-6)}`);
        setSubmitted(true);
      }, 700);
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
            {/* Top Bar: Breadcrumb + Availability Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-white transition-colors">
                  {isHi ? "होम" : "Home"}
                </Link>
                <span>/</span>
                <span className="text-amber-400 font-bold">
                  {isHi ? "संपर्क केंद्र" : "Contact & Support"}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-slate-300">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {isHi ? "24x7 मरीज हेल्पलाइन सक्रिय" : "24/7 Patient Coordination Desk Active"}
                </span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {isHi ? (
                  <>
                    मरीज सहायता एवं{" "}
                    <span className="text-amber-300 font-serif italic font-normal">समन्वय केंद्र।</span>
                  </>
                ) : (
                  <>
                    We Are Here to Assist Your Family.{" "}
                    <span className="block text-amber-300 font-serif italic font-normal mt-1 text-2xl sm:text-3xl lg:text-4xl">
                      24/7 National Patient Helpline & Hospital Desks.
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-3.5 text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-3xl">
                {isHi
                  ? "डॉक्टर परामर्श, लैब टेस्ट, दवाइयों अथवा अस्पताल भर्ती में सहायता के लिए हमारी समर्पित टीम 24 घंटे उपलब्ध है। बिना किसी संकोच के तुरंत संपर्क करें।"
                  : "Whether you need assistance booking an urgent doctor appointment, arranging doorstep blood tests, or navigating cashless hospital admissions, our patient desk is available 24/7."}
              </p>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. CONTACT CHANNELS (3 HIGHLIGHT CARDS)
        ==================================================================== */}
        <section className="relative -mt-6 z-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {/* Card 1: Phone */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5 border border-blue-100">
                    <PhoneCall className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-0.5">
                    {isHi ? "24x7 टोल-फ्री हेल्पलाइन" : "24x7 Toll-Free Helpline"}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">1800-208-1008</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {isHi
                      ? "आपातकालीन भर्ती, ओपीडी स्लॉट व लैब टेस्ट सहायता हेतु तत्काल कॉल करें।"
                      : "Immediate assistance for emergency admissions, doctor appointments, and lab tests."}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <a
                    href="tel:18002081008"
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                  >
                    <span>{isHi ? "सीधे कॉल करें →" : "Call Toll-Free Now →"}</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Email */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3.5 border border-emerald-100">
                    <Mail className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block mb-0.5">
                    {isHi ? "आधिकारिक ईमेल" : "Official Support Email"}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 break-all">care@adityamniramayaa.org</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {isHi
                      ? "रिपोर्ट्स समीक्षा, संस्थागत साझेदारी एवं सामान्य पूछताछ हेतु लिखें।"
                      : "For medical queries, report reviews, and institutional hospital empanelment."}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <a
                    href="mailto:care@adityamniramayaa.org"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                  >
                    <span>{isHi ? "ईमेल भेजें →" : "Send an Email →"}</span>
                  </a>
                </div>
              </div>

              {/* Card 3: HQ Location */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3.5 border border-amber-100">
                    <Building2 className="w-4 h-4 text-amber-700" />
                  </div>
                  <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest block mb-0.5">
                    {isHi ? "केंद्रीय समन्वय सचिवालय" : "Central Coordination Secretariat"}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">Jaipur & Delhi NCR Hubs</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {isHi
                      ? "आदित्यम् निरामया: भवन, महावीर मार्ग, सी-स्कीम, जयपुर, राजस्थान - 302001"
                      : "Adityam Niramayaa Central Secretariat, Mahaveer Marg, C-Scheme, Jaipur, Rajasthan - 302001"}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-400">
                    {isHi ? "नेटवर्क: मुंबई • अहमदाबाद • इंदौर • बेंगलुरु" : "Hubs: Mumbai • Ahmedabad • Indore • Bengaluru"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. INQUIRY & SUPPORT REQUEST FORM
        ==================================================================== */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm text-left">
            <div className="text-center max-w-md mx-auto mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                {isHi ? "त्वरित सहायता संदेश" : "Patient Support Request"}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1.5">
                {isHi ? "हमें अपना संदेश भेजें" : "Send Us a Message"}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {isHi
                  ? "हमारा कोऑर्डिनेटर 15 मिनट के भीतर आपसे सीधे संपर्क करेगा।"
                  : "Our healthcare coordinator will call you back within 15 minutes."}
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      {isHi ? "आपका नाम *" : "Your Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isHi ? "जैसे: सुरेश शर्मा" : "e.g. Suresh Sharma"}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      {isHi ? "मोबाइल नंबर *" : "Mobile Number *"}
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-2.5 text-xs text-slate-400 font-bold">+91</span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="9876543210"
                        className="w-full pl-11 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      {isHi ? "शहर / क्षेत्र" : "City / Region"}
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    >
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Indore">Indore</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Other">Other City</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      {isHi ? "सेवा का प्रकार" : "Service Required"}
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    >
                      <option value="Doctor Consultation">{isHi ? "डॉक्टर परामर्श (OPD)" : "Doctor Consultation (OPD)"}</option>
                      <option value="Lab Diagnostics">{isHi ? "लैब टेस्ट व हेल्थ चेकअप" : "Lab Test / Health Package"}</option>
                      <option value="Hospital Admission">{isHi ? "अस्पताल भर्ती व बेड सहायता" : "Hospital Admission Assistance"}</option>
                      <option value="Pharmacy Delivery">{isHi ? "दवा डिलीवरी" : "Prescription Medicine Delivery"}</option>
                      <option value="Join Network">{isHi ? "अस्पताल / डॉक्टर संबद्धता" : "Provider Empanelment"}</option>
                      <option value="General Query">{isHi ? "सामान्य जानकारी" : "General Query"}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {isHi ? "आपका संदेश या विवरण" : "Your Message or Details"}
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      isHi
                        ? "कृपया अपनी आवश्यकता अथवा प्रश्न संक्षेप में बताएं..."
                        : "Describe your requirement or question (optional)..."
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !name.trim() || phone.length !== 10}
                    className="w-full py-2.5 rounded-xl bg-[#0A1128] hover:bg-slate-800 disabled:bg-slate-300 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>
                      {isSubmitting
                        ? (isHi ? "संदेश भेजा जा रहा है..." : "Submitting...")
                        : (isHi ? "सहायता अनुरोध भेजें" : "Submit Assistance Request")}
                    </span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {isHi ? "अनुरोध सफलतापूर्वक प्राप्त हुआ!" : "Assistance Request Received!"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    {isHi
                      ? `धन्यवाद ${name}! हमारा मरीज सहायता समन्वयक जल्द ही +91 ${phone} पर आपसे संपर्क करेगा।`
                      : `Thank you ${name}! Our patient coordination desk will reach out to +91 ${phone} shortly.`}
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 inline-block text-left text-xs">
                  <div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">
                    {isHi ? "अनुरोध संदर्भ कोड" : "Reference Ticket ID"}
                  </div>
                  <div className="font-mono font-bold text-slate-900 text-sm">{refId}</div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setPhone("");
                      setName("");
                      setMessage("");
                    }}
                    className="text-xs text-blue-600 font-semibold hover:underline cursor-pointer"
                  >
                    {isHi ? "नया संदेश भेजें" : "Submit another request"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* 5. Global Footer */}
      <Footer />
    </div>
  );
}

