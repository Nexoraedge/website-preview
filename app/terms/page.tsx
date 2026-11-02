"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  AlertCircle,
  Stethoscope,
  Building2,
  FlaskConical,
  Pill,
  Scale,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Clock,
  HeartHandshake,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/useLanguage";

export default function TermsPage() {
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
        <section className="relative overflow-hidden bg-[#0A1128] text-white pt-8 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6">
          {/* Subtle ambient radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.22),transparent_75%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Bar: Breadcrumb + Ethical Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-white transition-colors">
                  {isHi ? "होम" : "Home"}
                </Link>
                <span>/</span>
                <span className="text-amber-400 font-bold">
                  {isHi ? "सेवा की शर्तें" : "Terms of Service"}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>
                  {isHi
                    ? "पारदर्शी नियम व नैतिक स्वास्थ्य घोषणा-पत्र"
                    : "Transparent Institutional Healthcare Charter"}
                </span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {isHi ? (
                  <>
                    सेवा की शर्तें एवं{" "}
                    <span className="text-amber-300 font-serif italic font-normal">नैतिक अनुबंध।</span>
                  </>
                ) : (
                  <>
                    Terms of Service &{" "}
                    <span className="block text-amber-300 font-serif italic font-normal mt-1 text-2xl sm:text-3xl lg:text-4xl">
                      Patient Protection Charter.
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-3.5 text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-3xl">
                {isHi
                  ? "आदित्यम् निरामया: एक मूल्य-आधारित स्वास्थ्य सेवा मंच है। यह नियम व शर्तें हमारे सभी उपयोगकर्ताओं, डॉक्टरों, अस्पतालों और डायग्नोस्टिक केंद्रों के बीच सत्यता और शुचिता सुनिश्चित करती हैं।"
                  : "These Terms of Service govern your access to the Adityam Niramayaa platform, mobile application, and empanelled hospital desk facilitation. By using our services, you agree to these fair-practice principles."}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                  {isHi ? "प्रभावी तिथि: अक्टूबर 2026" : "Last Updated: October 2026"}
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">
                  {isHi ? "✓ शून्य मध्यस्थ कमीशन नीति" : "✓ Zero Brokerage Guarantee"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. EMERGENCY DISCLAIMER NOTICE (IMPORTANT BOX)
        ==================================================================== */}
        <section className="relative -mt-6 z-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200 shadow-sm flex items-start gap-3.5 text-left">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-950 leading-relaxed">
                <strong className="font-bold text-amber-900 block mb-0.5">
                  {isHi ? "आपातकालीन चिकित्सा सूचना (Medical Emergency Disclaimer):" : "Medical Emergency Notice:"}
                </strong>
                {isHi
                  ? "आदित्यम् निरामया: स्वास्थ्य सेवा समन्वय, ओपीडी, टेस्ट और भर्ती में पारदर्शी दरों की सुविधा प्रदान करता है। तीव्र जीवन-घातक आपात स्थितियों (जैसे कार्डियक अरेस्ट, गंभीर आघात) में तत्काल राष्ट्रीय आपातकालीन हेल्पलाइन 112 / 102 पर कॉल करें या नजदीकी आपातकालीन कक्ष (ER) पहुंचें।"
                  : "Adityam Niramayaa facilitates pre-negotiated fair tariffs, OPD appointments, home lab tests, and hospital bed facilitation. In life-threatening medical emergencies (acute trauma, stroke, cardiac arrest), please immediately dial 112 / 102 or proceed to the nearest emergency trauma center."}
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. DETAILED TERMS SECTIONS
        ==================================================================== */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto text-left">
          <div className="space-y-7">
            {/* 1. Ecosystem Scope */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <span>{isHi ? "मंच का स्वरूप एवं सेवाएं" : "1. Nature of the Healthcare Ecosystem"}</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed font-normal">
                <p>
                  {isHi
                    ? "आदित्यम् निरामया: एक सामाजिक स्वास्थ्य आंदोलन और डिजिटल प्लेटफॉर्म है जो मरीजों को काउंसिल-सत्यापित डॉक्टरों, एनएबीएच मान्यता प्राप्त अस्पतालों, एनएबीएल डायग्नोस्टिक लैब्स और लाइसेंस प्राप्त फार्मेसियों से जोड़ता है।"
                    : "Adityam Niramayaa operates as an ethical healthcare facilitator and digital aggregator connecting patient families with verified medical specialists, NABH-accredited hospitals, NABL diagnostic laboratories, and licensed clinical pharmacies."}
                </p>
                <p>
                  {isHi
                    ? "हम स्वयं कोई अस्पताल या प्रयोगशाला नहीं हैं; हम अस्पतालों के साथ सीधे संस्थागत समझौते करके मध्यस्थों और कमीशन को हटाते हैं ताकि मरीजों को पूर्व-निर्धारित रियायती दरें प्राप्त हो सकें।"
                    : "We establish direct covenants with healthcare institutions to dismantle predatory referral commissions and pass 100% of institutional tariff reductions directly to patients."}
                </p>
              </div>
            </div>

            {/* 2. Doctor Consultations */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <span>{isHi ? "डॉक्टर परामर्श एवं ओपीडी बुकिंग" : "2. Specialist Consultations & OPD Passes"}</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed font-normal">
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                  <li>
                    <strong className="text-slate-800">
                      {isHi ? "पूर्व-निर्धारित परामर्श शुल्क:" : "Pre-Fixed Transparent Fees:"}
                    </strong>{" "}
                    {isHi
                      ? "ऐप अथवा वेबसाइट पर प्रदर्शित ओपीडी शुल्क अंतिम है। डॉक्टर के क्लिनिक या अस्पताल पर किसी अतिरिक्त रजिस्ट्रेशन शुल्क की मांग नहीं की जाएगी।"
                      : "The consultation tariff displayed on the platform is final. Empanelled specialists and hospital OPD counters agree not to levy arbitrary surcharges."}
                  </li>
                  <li>
                    <strong className="text-slate-800">
                      {isHi ? "चिकित्सीय स्वतंत्रता:" : "Independent Clinical Discretion:"}
                    </strong>{" "}
                    {isHi
                      ? "उपचार, दवा और जांच का निर्णय केवल डॉक्टर का स्वतंत्र चिकित्सीय विवेक है। मंच किसी भी चिकित्सीय निर्णय को प्रभावित नहीं करता।"
                      : "Diagnosis, medical advice, and prescriptions are the sole professional responsibility of the attending doctor. Adityam Niramayaa does not interfere in clinical decisions."}
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. NABL Lab Tests */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <span>{isHi ? "NABL लैब टेस्ट एवं होम सैंपल संग्रह" : "3. NABL Diagnostics & Home Pickup"}</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed font-normal">
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                  <li>
                    <strong className="text-slate-800">
                      {isHi ? "फास्टिंग (खाली पेट) निर्देश:" : "Fasting Protocols:"}
                    </strong>{" "}
                    {isHi
                      ? "कुछ परीक्षणों (जैसे लिपिड प्रोफाइल, फास्टिंग शुगर) हेतु 10-12 घंटे का उपवास अनिवार्य है। सटीक रिपोर्ट हेतु मरीज को दिए गए निर्देशों का पालन करना होगा।"
                      : "Patients must adhere to pre-test instructions (e.g., 10-12 hours overnight fasting for blood glucose and lipid panels) to ensure report accuracy."}
                  </li>
                  <li>
                    <strong className="text-slate-800">
                      {isHi ? "बारकोडेड सिंगल-यूज़ ट्यूब्स:" : "Barcoded Tamper-Proof Testing:"}
                    </strong>{" "}
                    {isHi
                      ? "सभी सैंपल प्रशिक्षित स्वास्थ्यकर्मियों द्वारा सीलबंद वैक्यूम ट्यूब में लिए जाते हैं और डिजिटल बारकोड से ट्रैक होते हैं।"
                      : "Blood and urine samples are collected in barcoded, single-use vacuum tubes and processed in automated NABL facilities."}
                  </li>
                  <li>
                    <strong className="text-slate-800">
                      {isHi ? "टर्नअराउंड समय:" : "Report Turnaround:"}
                    </strong>{" "}
                    {isHi
                      ? "डिजिटल रिपोर्ट आमतौर पर 6 से 12 घंटे में मोबाइल ऐप व व्हाट्सएप पर उपलब्ध करा दी जाती है।"
                      : "Verified digital reports are typically generated within 6-12 hours for routine biochemistry panels."}
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Pharmacy & Prescriptions */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center">
                  4
                </span>
                <span>{isHi ? "फार्मेसी एवं दवा वितरण शर्तें" : "4. Pharmacy Dispensation & Regulatory Compliance"}</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed font-normal">
                <p>
                  {isHi
                    ? "भारत के औषधि एवं प्रसाधन सामग्री अधिनियम (Drugs and Cosmetics Act) के अनुसार शेड्यूल H और H1 दवाइयों के लिए वैध डॉक्टर का पर्चा अपलोड करना कानूनी रूप से अनिवार्य है।"
                    : "In strict compliance with the Drugs and Cosmetics Act of India, Schedule H and H1 medications require a valid, readable doctor prescription before dispensation."}
                </p>
                <p>
                  {isHi
                    ? "हमारे लाइसेंस प्राप्त फार्मासिस्ट हर पर्चे की मात्रा और खुराक की समीक्षा करते हैं। दवाइयां निर्माता बैच से सीधे सीलबंद पैकेज में भेजी जाती हैं।"
                    : "Prescriptions are verified by registered pharmacists. Cold-chain sensitive items (e.g., insulin) are shipped in specialized temperature-controlled packaging."}
                </p>
              </div>
            </div>

            {/* 5. Cancellation & Refunds */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center">
                  5
                </span>
                <span>{isHi ? "रद्दीकरण एवं रिफंड नीति" : "5. Cancellation & Refund Policy"}</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed font-normal">
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-800">{isHi ? "लैब टेस्ट रद्दीकरण:" : "Diagnostics Cancellation:"}</strong>{" "}
                      {isHi
                        ? "सैंपल कलेक्शन से 1 घंटा पहले तक बिना किसी शुल्क के रद्दीकरण मान्य है। अग्रिम भुगतान की स्थिति में 100% रिफंड मूल खाते में 3-5 कार्य दिवसों में वापस होगा।"
                        : "Cancellations made at least 1 hour before scheduled phlebotomist arrival are eligible for 100% full refund with zero cancellation penalty."}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-800">{isHi ? "डॉक्टर अपॉइंटमेंट:" : "Doctor Appointments:"}</strong>{" "}
                      {isHi
                        ? "यदि डॉक्टर अनुपलब्ध होते हैं अथवा आप समय से पहले अपॉइंटमेंट रद्द करते हैं, तो कोई शुल्क नहीं काटा जाएगा।"
                        : "If an appointment is cancelled by the specialist or prior to slot commencement, full fee relief is automatically provided."}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Jurisdiction & Contact */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-2">
                <Scale className="w-4 h-4 text-blue-600" />
                <span>{isHi ? "कानूनी क्षेत्राधिकार एवं संपर्क" : "6. Governing Law & Dispute Resolution"}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
                {isHi
                  ? "यह शर्तें भारत के कानूनों द्वारा शासित होंगी और किसी भी विवाद की स्थिति में न्यायिक क्षेत्राधिकार जयपुर / दिल्ली एनसीआर की अदालतों का होगा।"
                  : "These terms are governed by the laws of India. Any legal disputes arising out of the services shall be subject to the exclusive jurisdiction of the competent courts in Jaipur / Delhi NCR."}
              </p>
              <div className="text-xs text-slate-600">
                Helpline: <a href="tel:18002081008" className="text-blue-600 font-semibold hover:underline">1800-208-1008</a> • Email: <a href="mailto:care@adityamniramayaa.org" className="text-blue-600 font-semibold hover:underline">care@adityamniramayaa.org</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Global Footer */}
      <Footer />
    </div>
  );
}

