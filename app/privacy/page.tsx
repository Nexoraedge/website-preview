"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  FileText,
  EyeOff,
  Database,
  Trash2,
  Mail,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Server,
  UserCheck,
  Scale,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/useLanguage";

export default function PrivacyPolicyPage() {
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
            {/* Top Bar: Breadcrumb + Statutory Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-white transition-colors">
                  {isHi ? "होम" : "Home"}
                </Link>
                <span>/</span>
                <span className="text-amber-400 font-bold">
                  {isHi ? "गोपनीयता नीति" : "Privacy Policy"}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-slate-300">
                <Scale className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {isHi
                    ? "डीपीडीपी एक्ट 2023 व स्वास्थ्य डेटा सुरक्षा मानकों के अनुरूप"
                    : "DPDP Act 2023 & ISO 27001 Aligned"}
                </span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {isHi ? (
                  <>
                    मरीज डेटा गोपनीयता एवं{" "}
                    <span className="text-amber-300 font-serif italic font-normal">सुरक्षा का पावन संकल्प।</span>
                  </>
                ) : (
                  <>
                    Patient Privacy & Medical Data Protection.{" "}
                    <span className="block text-amber-300 font-serif italic font-normal mt-1 text-2xl sm:text-3xl lg:text-4xl">
                      Zero Commercialization. Zero Health Data Brokering.
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-3.5 text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-3xl">
                {isHi
                  ? "आदित्यम् निरामया: में हम आपकी चिकित्सा और व्यक्तिगत जानकारी को अत्यंत पवित्र और गोपनीय मानते हैं। हम कभी भी आपके पर्चे, जांच रिपोर्ट अथवा फोन नंबर का व्यावसायिक विज्ञापन या ब्रोकरों के साथ सौदा नहीं करते।"
                  : "At Adityam Niramayaa, your medical records, diagnostic tests, and personal details are treated as a sacred trust. We strictly prohibit the commercialization, selling, or rental of any patient health data."}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                  {isHi ? "अंतिम संशोधन: अक्टूबर 2026" : "Effective Date: October 2026"}
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">
                  {isHi ? "✓ 256-बिट बैंक स्तरीय एन्क्रिप्शन" : "✓ 256-Bit Bank Grade Encryption"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. KEY PRIVACY PILLARS (QUICK SUMMARY CARDS)
        ==================================================================== */}
        <section className="relative -mt-6 z-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-left">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 border border-emerald-100">
                  <EyeOff className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {isHi ? "शून्य विज्ञापन व डेटा बिक्री" : "Zero Commercial Brokering"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isHi
                    ? "हम कभी भी आपके नंबर, बीमारी या जांच रिकॉर्ड्स किसी दवा कंपनी या बीमा ब्रोकर को नहीं बेचते।"
                    : "We never monetize, rent, or sell patient contacts or clinical history to pharmaceutical or insurance marketers."}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-left">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 border border-blue-100">
                  <Lock className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {isHi ? "सुरक्षित एन्क्रिप्टेड वॉल्ट" : "End-to-End Encryption"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isHi
                    ? "सभी मेडिकल रिपोर्ट और पर्चे क्लाउड पर 256-बिट सुरक्षित एन्क्रिप्शन के साथ संग्रहीत रहते हैं।"
                    : "Prescriptions and diagnostic records are protected with AES-256 encryption at rest and TLS 1.3 in transit."}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-left">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3 border border-amber-100">
                  <UserCheck className="w-4 h-4 text-amber-700" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {isHi ? "पूर्ण मरीज नियंत्रण व विलोपन" : "Patient Erasure Rights"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isHi
                    ? "आप किसी भी समय अपने खाते व डेटा को हमेशा के लिए डिलीट करने का अनुरोध कर सकते हैं।"
                    : "You maintain complete ownership of your data with the right to request full account and data deletion."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. DETAILED PRIVACY CLAUSES & PROVISIONS
        ==================================================================== */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto text-left">
          <div className="space-y-8">
            {/* Clause 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <span>{isHi ? "हम कौन सी जानकारी एकत्र करते हैं?" : "1. Categories of Information We Collect"}</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 space-y-2.5 leading-relaxed font-normal">
                <p>
                  {isHi
                    ? "आदित्यम् निरामया: केवल वही जानकारी एकत्र करता है जो आपको नैतिक स्वास्थ्य सेवाएं (ओपीडी, होम लैब टेस्ट, फार्मेसी और अस्पताल सहायता) उपलब्ध कराने के लिए अनिवार्य है:"
                    : "Adityam Niramayaa collects strictly essential information required to coordinate ethical medical consultations, doorstep lab diagnostics, honest pharmacy delivery, and hospital support:"}
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                  <li>
                    <strong className="text-slate-800">
                      {isHi ? "पहचान एवं संपर्क विवरण:" : "Contact & Identity Details:"}
                    </strong>{" "}
                    {isHi
                      ? "मरीज का नाम, मोबाइल नंबर, ईमेल पता, आयु, लिंग एवं सैंपल संग्रह अथवा दवा डिलीवरी हेतु पता।"
                      : "Patient full name, verified mobile number, email address, age, gender, and residential address for home sample pickups."}
                  </li>
                  <li>
                    <strong className="text-slate-800">
                      {isHi ? "नैदानिक एवं स्वास्थ्य डेटा:" : "Clinical & Health Records:"}
                    </strong>{" "}
                    {isHi
                      ? "अपलोड किए गए डॉक्टर के पर्चे, NABL लैब टेस्ट परिणाम, चुनी गई चिकित्सा विशेषज्ञता और पिछली बुकिंग का विवरण।"
                      : "Uploaded prescriptions, NABL laboratory blood/imaging reports, chosen medical specialties, and past appointment history."}
                  </li>
                  <li>
                    <strong className="text-slate-800">
                      {isHi ? "तकनीकी एवं डिवाइस मेटाडेटा:" : "Device & Technical Metadata:"}
                    </strong>{" "}
                    {isHi
                      ? "ऐप क्रैश लॉग्स, ऑपरेटिंग सिस्टम वर्जन और सुरक्षा प्रमाणीकरण टोकन (पासवर्ड कभी सादे टेक्स्ट में स्टोर नहीं किए जाते)।"
                      : "Operating system version, app diagnostics logs, and secure authentication tokens. Passwords and OTPs are never stored in plain text."}
                  </li>
                </ul>
              </div>
            </div>

            {/* Clause 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <span>{isHi ? "डेटा का उपयोग किस प्रकार होता है?" : "2. Purpose of Data Processing"}</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 space-y-2.5 leading-relaxed font-normal">
                <p>
                  {isHi
                    ? "आपके द्वारा साझा की गई जानकारी का उपयोग केवल निम्नलिखित चिकित्सा सेवाओं के निष्पादन हेतु किया जाता है:"
                    : "Your personal and health information is processed exclusively to deliver verified medical care:"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-150">
                    <span className="font-semibold text-slate-900 block text-xs">
                      {isHi ? "ओपीडी व अस्पताल समन्वय" : "OPD & Hospital Desk"}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {isHi
                        ? "डॉक्टर स्लॉट तय करने और अस्पताल में प्राथमिकता टोकन जारी करने हेतु।"
                        : "Scheduling consultations and issuing fast-track entry tokens at partner hospitals."}
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-150">
                    <span className="font-semibold text-slate-900 block text-xs">
                      {isHi ? "होम सैंपल व डिजिटल रिपोर्ट" : "Home Lab Phlebotomy"}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {isHi
                        ? "सत्यापित स्वास्थ्यकर्मी को घर भेजने और 6-12 घंटे में रिपोर्ट फोन पर पहुंचाने हेतु।"
                        : "Dispatching certified phlebotomists and sending digital PDF reports directly to your phone."}
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-150">
                    <span className="font-semibold text-slate-900 block text-xs">
                      {isHi ? "पर्चा सत्यापन एवं डिलीवरी" : "Prescription Dispensation"}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {isHi
                        ? "लाइसेंस प्राप्त फार्मासिस्ट द्वारा पर्चे की समीक्षा और सीलबंद दवा डिलीवरी हेतु।"
                        : "Enabling licensed pharmacists to review dosages and ship temperature-safe sealed medicines."}
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-150">
                    <span className="font-semibold text-slate-900 block text-xs">
                      {isHi ? "आजीवन डिजिटल मेडिकल वॉल्ट" : "Lifetime Health Vault"}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {isHi
                        ? "परिवार के रिकॉर्ड्स को किसी भी आपात स्थिति में तुरंत देखने की सुविधा हेतु।"
                        : "Providing family members encrypted access to past medical reports anytime, anywhere."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clause 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <span>{isHi ? "डेटा साझाकरण एवं गैर-प्रकटीकरण नीति" : "3. Non-Disclosure & Sharing Restrictions"}</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 space-y-2.5 leading-relaxed font-normal">
                <p>
                  {isHi
                    ? "आदित्यम् निरामया: किसी भी तीसरे पक्ष के साथ डेटा साझा करने पर अत्यंत कड़े प्रतिबंध लागू करता है:"
                    : "Adityam Niramayaa enforces strict non-disclosure covenants across all medical workflows:"}
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                  <li>
                    <strong className="text-slate-800">
                      {isHi ? "केवल संबद्ध सेवा प्रदाता:" : "Direct Medical Partners Only:"}
                    </strong>{" "}
                    {isHi
                      ? "आपकी जानकारी केवल उसी डॉक्टर, एनएबीएल लैब अथवा अस्पताल के साथ साझा की जाती है जिसे आपने स्पष्ट रूप से चुना है।"
                      : "Information is transmitted strictly to the specific empanelled doctor, certified lab, or partner hospital chosen for your appointment."}
                  </li>
                  <li>
                    <strong className="text-slate-800">
                      {isHi ? "कोई वाणिज्यिक डेटा ब्रोकरेज नहीं:" : "Zero Commercial Brokering:"}
                    </strong>{" "}
                    {isHi
                      ? "हमारा मंच पूर्णतः विज्ञापन-मुक्त है। हम कभी भी किसी टेलीमार्केटर, फिनटेक ऋणदाता या तीसरे पक्ष के विज्ञापनदाताओं को डेटा नहीं देते।"
                      : "Our platform is 100% ad-free. We do not sell leads to telemarketers, commercial aggregators, or credit companies."}
                  </li>
                  <li>
                    <strong className="text-slate-800">
                      {isHi ? "वैधानिक दायित्व:" : "Statutory Requirements:"}
                    </strong>{" "}
                    {isHi
                      ? "डेटा केवल भारत के कानून, अदालती आदेश अथवा अधिकृत सार्वजनिक स्वास्थ्य प्राधिकरणों के औपचारिक निर्देश पर ही कानूनन साझा किया जा सकता है।"
                      : "Data may only be disclosed if formally mandated by applicable Indian law, court subpoenas, or authorized public health directives."}
                  </li>
                </ul>
              </div>
            </div>

            {/* Clause 4 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center">
                  4
                </span>
                <span>{isHi ? "मरीज के कानूनी अधिकार (DPDP Act 2023)" : "4. Your Rights Under DPDP Act 2023"}</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 space-y-2.5 leading-relaxed font-normal">
                <p>
                  {isHi
                    ? "भारत के डिजिटल पर्सनल डेटा प्रोटेक्शन एक्ट 2023 के तहत आपको अपनी व्यक्तिगत जानकारी पर निम्नलिखित अधिकार प्राप्त हैं:"
                    : "Under the Digital Personal Data Protection Act (DPDP Act 2023), you hold sovereign rights over your personal data:"}
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-800">{isHi ? "डेटा देखने का अधिकार:" : "Right to Access:"}</strong>{" "}
                      {isHi ? "अपने ऐप खाते से किसी भी समय अपनी सभी रिपोर्ट और पर्चे डाउनलोड करें।" : "View and download all your past consultations, bills, and lab results."}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-800">{isHi ? "संशोधन का अधिकार:" : "Right to Correction:"}</strong>{" "}
                      {isHi ? "अपने नाम, फोन नंबर अथवा पते में किसी भी अशुद्धि को तुरंत सुधारें।" : "Request immediate rectification of inaccurate or outdated contact details."}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-800">{isHi ? "खाता एवं डेटा विलोपन का अधिकार:" : "Right to Erasure:"}</strong>{" "}
                      {isHi
                        ? "हमारे समर्पित 'खाता हटाएं' पोर्टल के माध्यम से अपना खाता और सभी पहचान डेटा हमेशा के लिए मिटाएं।"
                        : "Permanently erase your account and auth credentials via our dedicated Account Deletion portal."}
                    </span>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href="/delete-account"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{isHi ? "खाता विलोपन अनुरोध पोर्टल पर जाएं →" : "Visit Account Deletion Portal →"}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Clause 5: Grievance Officer */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>{isHi ? "शिकायत निवारण अधिकारी" : "5. Grievance Redressal Officer"}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                {isHi
                  ? "यदि आपके पास गोपनीयता अथवा डेटा से जुड़ा कोई प्रश्न या शिकायत है, तो आप हमारे नामित शिकायत अधिकारी से सीधे संपर्क कर सकते हैं:"
                  : "In accordance with Information Technology Act 2000 and DPDP Act 2023, you may contact our designated Grievance Officer:"}
              </p>

              <div className="bg-white rounded-xl p-4 border border-slate-200 text-xs space-y-1.5">
                <div className="font-bold text-slate-900">
                  {isHi ? "अभिषेक जैन / नोडल शिकायत अधिकारी" : "Grievance Officer, Adityam Niramayaa Foundation"}
                </div>
                <div className="text-slate-600">
                  Email: <a href="mailto:care@adityamniramayaa.org" className="text-blue-600 hover:underline">care@adityamniramayaa.org</a>
                </div>
                <div className="text-slate-600">
                  Helpline: <a href="tel:18002081008" className="text-blue-600 hover:underline">1800-208-1008 (Toll-Free, 24x7)</a>
                </div>
                <div className="text-slate-500 text-[11px] pt-1">
                  {isHi ? "शिकायतों का समाधान कार्य दिवसों में 48 घंटे के भीतर सुनिश्चित किया जाता है।" : "All grievances are acknowledged within 24 hours and resolved within statutory limits."}
                </div>
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

