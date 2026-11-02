"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Trash2,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Send,
  PhoneCall,
  Mail,
  ArrowRight,
  Lock,
  FileCheck,
  RotateCcw,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/useLanguage";

export default function DeleteAccountPage() {
  const [lang, setLang] = useLanguage();
  const isHi = lang === "hi";

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("no_longer_needed");
  const [confirmedCheck, setConfirmedCheck] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 10 && confirmedCheck) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setRefId(`DEL-${Date.now().toString().slice(-6)}`);
        setSubmitted(true);
      }, 800);
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
            {/* Top Bar: Breadcrumb + Security Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-white transition-colors">
                  {isHi ? "होम" : "Home"}
                </Link>
                <span>/</span>
                <span className="text-rose-400 font-bold">
                  {isHi ? "खाता विलोपन पोर्टल" : "Account Deletion"}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
                <span>
                  {isHi
                    ? "गूगल प्ले व ऐप स्टोर नीति 5.1.1(v) के अनुरूप"
                    : "Play Store & App Store Compliant Deletion"}
                </span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {isHi ? (
                  <>
                    खाता एवं व्यक्तिगत डेटा{" "}
                    <span className="text-rose-400 font-serif italic font-normal">विलोपन अनुरोध पोर्टल।</span>
                  </>
                ) : (
                  <>
                    Account Deletion & Data Erasure.{" "}
                    <span className="block text-rose-400 font-serif italic font-normal mt-1 text-2xl sm:text-3xl lg:text-4xl">
                      Complete Control Over Your Personal Profile.
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-3.5 text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-3xl">
                {isHi
                  ? "यदि आप अपने आदित्यम् निरामया: मोबाइल ऐप खाते और संबंधित प्रोफाइल डेटा को स्थायी रूप से हटाना चाहते हैं, तो नीचे दिया गया आधिकारिक फॉर्म भरें। अनुरोध प्राप्त होते ही आपका लॉगिन व व्यक्तिगत डेटा सिस्टम से हटा दिया जाएगा।"
                  : "Submit this self-serve form to permanently delete your Adityam Niramayaa account, authentication records, saved addresses, and family profiles. You do not need the mobile app installed to request deletion."}
              </p>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. WHAT HAPPENS WHEN YOU DELETE YOUR ACCOUNT (CLARITY CARDS)
        ==================================================================== */}
        <section className="relative -mt-6 z-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-2">
                  <Trash2 className="w-4 h-4" />
                  <span>{isHi ? "तुरंत क्या हटाया जाएगा:" : "What Will Be Deleted:"}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>{isHi ? "आपका मोबाइल नंबर और लॉगिन ऑथेंटिकेशन टोकन" : "Your phone number and active app login sessions"}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>{isHi ? "सहेजे गए पते और परिवार के सदस्यों की प्रोफाइल" : "Saved delivery addresses and family member profiles"}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>{isHi ? "नोटिफिकेशन प्राथमिकताएं एवं ऐप सेटिंग्स" : "Push notification preferences and personal app settings"}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">
                  <FileCheck className="w-4 h-4" />
                  <span>{isHi ? "वैधानिक चिकित्सा अभिलेख:" : "Statutory Clinical Records:"}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {isHi
                    ? "भारत के क्लिनिकल प्रतिष्ठान अधिनियम के तहत सहयोगी अस्पतालों व एनएबीएल लैब्स में पिछली नियुक्तियों के मेडिकल बिल और टेस्ट परिणाम संबंधित स्वास्थ्य संस्थानों द्वारा वैधानिक 3 वर्ष की अनिवार्य अवधि हेतु संग्रहीत रखे जाते हैं।"
                    : "Under Indian healthcare regulations (Clinical Establishments Act), historical invoices and completed diagnostic lab records are archived by the respective partner hospital or lab for the statutory mandatory retention period of 3 years."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. ACCOUNT DELETION SUBMISSION FORM
        ==================================================================== */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm text-left">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {isHi ? "पूरा नाम *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={isHi ? "अपना नाम दर्ज करें" : "e.g. Ramesh Kumar"}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 placeholder-slate-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {isHi ? "पंजीकृत 10 अंकों का मोबाइल नंबर *" : "Registered 10-Digit Mobile Number *"}
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
                      className="w-full pl-11 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 placeholder-slate-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {isHi ? "खाता हटाने का कारण" : "Reason for Account Deletion"}
                  </label>
                  <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all"
                  >
                    <option value="no_longer_needed">
                      {isHi ? "अब सेवा की आवश्यकता नहीं है" : "No longer need the services"}
                    </option>
                    <option value="duplicate_account">
                      {isHi ? "दूसरा खाता बन गया था" : "Created a duplicate account"}
                    </option>
                    <option value="privacy_concerns">
                      {isHi ? "गोपनीयता संबंधी कारण" : "Privacy considerations"}
                    </option>
                    <option value="dissatisfied">
                      {isHi ? "अनुभव से असंतुष्ट" : "Service experience"}
                    </option>
                    <option value="other">
                      {isHi ? "अन्य कारण" : "Other"}
                    </option>
                  </select>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={confirmedCheck}
                      onChange={(e) => setConfirmedCheck(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded text-rose-600 focus:ring-rose-500 border-slate-300"
                    />
                    <span className="text-[11px] text-slate-600 leading-relaxed font-normal">
                      {isHi
                        ? "मैं पुष्टि करता हूँ कि मैं इस खाते और संबंधित लॉगिन डेटा को स्थायी रूप से हटाना चाहता हूँ।"
                        : "I understand that this action is permanent and will revoke my access to the Adityam mobile app."}
                    </span>
                  </label>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting || !confirmedCheck || phone.length !== 10}
                    className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 disabled:bg-slate-300 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>
                      {isSubmitting
                        ? (isHi ? "अनुरोध दर्ज हो रहा है..." : "Processing Request...")
                        : (isHi ? "खाता विलोपन का अनुरोध भेजें" : "Submit Account Deletion Request")}
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
                    {isHi ? "विलोपन अनुरोध सफलतापूर्वक प्राप्त हुआ!" : "Deletion Request Received"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    {isHi
                      ? `मोबाइल नंबर +91 ${phone} के लिए विलोपन अनुरोध दर्ज कर लिया गया है।`
                      : `Your request to delete account associated with +91 ${phone} has been submitted.`}
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 inline-block text-left text-xs">
                  <div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">
                    {isHi ? "अनुरोध संदर्भ संख्या" : "Request Reference ID"}
                  </div>
                  <div className="font-mono font-bold text-slate-900 text-sm">{refId}</div>
                </div>

                <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                  {isHi
                    ? "आपका खाता 24 से 48 घंटे के भीतर स्थायी रूप से निष्क्रिय कर दिया जाएगा।"
                    : "Your account credentials and personal profile will be completely purged within 24 to 48 hours."}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setPhone("");
                      setFullName("");
                      setConfirmedCheck(false);
                    }}
                    className="text-xs text-blue-600 font-semibold hover:underline cursor-pointer"
                  >
                    {isHi ? "नया अनुरोध भेजें" : "Submit another request"}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Need help assistance */}
          <div className="mt-6 text-center text-xs text-slate-500">
            <span>{isHi ? "मदद चाहिए? हमारी हेल्पलाइन से संपर्क करें:" : "Need assistance? Contact our team directly:"}</span>{" "}
            <a href="tel:18002081008" className="text-blue-600 font-bold hover:underline">1800-208-1008</a>
          </div>
        </section>
      </main>

      {/* 5. Global Footer */}
      <Footer />
    </div>
  );
}

