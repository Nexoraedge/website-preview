"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  FlaskConical,
  Pill,
  Building2,
  Heart,
  Smartphone,
  PhoneCall,
  Mail,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/useLanguage";

interface FaqItem {
  id: string;
  category: "doctors" | "diagnostics" | "pharmacy" | "hospitals" | "satvik" | "app";
  qEn: string;
  qHi: string;
  aEn: string;
  aHi: string;
}

const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "doctors",
    qEn: "How does Adityam Niramayaa guarantee lower doctor consultation fees?",
    qHi: "आदित्यम् निरामया: कम डॉक्टर परामर्श शुल्क की गारंटी कैसे देता है?",
    aEn: "We enter direct institutional empanelment agreements with verified doctors and hospitals. By eliminating commercial middlemen, registration markups, and referral cuts, 100% of tariff concessions are passed straight to patient families.",
    aHi: "हम डॉक्टरों और अस्पतालों के साथ सीधे संस्थागत समझौते करते हैं। मध्यस्थों, कमीशन और अनुचित रजिस्ट्रेशन शुल्कों को हटाकर पूरी छूट सीधे मरीज के परिवार तक पहुंचाई जाती है।",
  },
  {
    id: "faq-2",
    category: "doctors",
    qEn: "Can I get an immediate queue-free OPD entry token at partner hospitals?",
    qHi: "क्या सहयोगी अस्पतालों में बिना सामान्य कतार के ओपीडी टोकन मिल सकता है?",
    aEn: "Yes. When you book an OPD slot via our mobile app or web portal, a confirmed digital entry pass is issued. Presenting this pass at the empanelled hospital desk allows you to bypass general counter queues.",
    aHi: "हाँ। जब आप ऐप या वेबसाइट से ओपीडी स्लॉट बुक करते हैं, तो आपको डिजिटल एंट्री पास प्राप्त होता है। अस्पताल के आदित्यम् डेस्क पर इसे दिखाकर आप सामान्य कतार से बच सकते हैं।",
  },
  {
    id: "faq-3",
    category: "diagnostics",
    qEn: "Is home sample pickup really free for all health packages and blood tests?",
    qHi: "क्या सभी स्वास्थ्य पैकेज और ब्लड टेस्ट के लिए होम सैंपल कलेक्शन वास्तव में निःशुल्क है?",
    aEn: "Yes. For all our curated health checkup packages and routine blood test bookings, certified phlebotomists collect samples safely at your doorstep with zero home collection fee.",
    aHi: "हाँ। हमारे सभी स्वास्थ्य जांच पैकेज और नियमित ब्लड टेस्ट के लिए प्रमाणित स्वास्थ्यकर्मी बिना किसी अतिरिक्त शुल्क के आपके घर आकर सैंपल संग्रह करते हैं।",
  },
  {
    id: "faq-4",
    category: "diagnostics",
    qEn: "How quickly do I receive my verified digital laboratory reports?",
    qHi: "सत्यापित डिजिटल लैब रिपोर्ट कितने समय में प्राप्त होती है?",
    aEn: "Routine biochemistry and hematology reports (CBC, HbA1c, Liver, Kidney, Lipid) are delivered digitally to your mobile app and WhatsApp within 6 to 12 hours after sample processing in NABL-accredited facilities.",
    aHi: "सीबीसी, शुगर, लिवर, किडनी व लिपिड जैसी सामान्य जांचों की NABL प्रमाणित रिपोर्ट सैंपल संग्रह के 6 से 12 घंटे के भीतर आपके मोबाइल ऐप व व्हाट्सएप पर उपलब्ध हो जाती है।",
  },
  {
    id: "faq-5",
    category: "pharmacy",
    qEn: "Why is a doctor prescription required for ordering medicines?",
    qHi: "दवाइयां मंगवाने के लिए डॉक्टर का पर्चा अपलोड करना क्यों अनिवार्य है?",
    aEn: "In strict accordance with the Drugs and Cosmetics Act of India, prescription-only drugs (Schedule H & H1) can only be dispensed against a valid clinical prescription. Our licensed pharmacists review every prescription to guarantee correct dosage and patient safety.",
    aHi: "भारतीय औषधि कानूनों के अनुसार शेड्यूल H और H1 दवाइयों के लिए वैध पर्चा अनिवार्य है। हमारे फार्मासिस्ट पर्चे की जांच करते हैं ताकि सही खुराक और मरीज की सुरक्षा सुनिश्चित हो सके।",
  },
  {
    id: "faq-6",
    category: "pharmacy",
    qEn: "How are temperature-sensitive medicines like insulin transported?",
    qHi: "इंसुलिन जैसी तापमान-संवेदनशील दवाइयों का सुरक्षित परिवहन कैसे होता है?",
    aEn: "Cold-chain medications are transported in certified insulated thermal containers with chilled ice packs, maintaining 2°C to 8°C throughout transit to prevent loss of drug potency.",
    aHi: "तापमान-संवेदनशील दवाइयां विशेष इन्सुलेटेड थर्मल बॉक्स में 2°C से 8°C तापमान बनाए रखते हुए सुरक्षित डिलीवर की जाती हैं।",
  },
  {
    id: "faq-7",
    category: "hospitals",
    qEn: "Who is a 'Hospital Buddy' and how do they assist during admission?",
    qHi: "'अस्पताल मित्र' कौन हैं और वे भर्ती के दौरान कैसे सहायता करते हैं?",
    aEn: "A Hospital Buddy is our dedicated on-ground coordinator stationed at partner hospitals. They greet patient families at the entrance, facilitate TPA cashless pre-authorizations, ensure bed availability, and audit discharge billing to prevent unjustified charges.",
    aHi: "अस्पताल मित्र हमारे ऑन-ग्राउंड सहयोगी हैं जो अस्पताल के द्वार पर मरीज के परिवार का स्वागत करते हैं, बीमा क्लेम व बेड आवंटन कराते हैं और डिस्चार्ज के समय बिल की निष्पक्ष जांच करते हैं।",
  },
  {
    id: "faq-8",
    category: "hospitals",
    qEn: "Does Adityam Niramayaa support cashless medical insurance approvals?",
    qHi: "क्या आदित्यम् निरामया: में कैशलेस मेडिकल बीमा सुविधा उपलब्ध है?",
    aEn: "Yes. All our empanelled hospitals feature operational Cashless TPA desks supporting all major private and public insurance providers. Our desk assists in fast-tracking initial approvals.",
    aHi: "हाँ। हमारे सभी सहयोगी अस्पतालों में कैशलेस टीपीए डेस्क संचालित हैं जो सभी प्रमुख बीमा कंपनियों के क्लेम तेजी से स्वीकृत कराने में मदद करते हैं।",
  },
  {
    id: "faq-9",
    category: "satvik",
    qEn: "What is the Satvik patient diet support in empanelled hospitals?",
    qHi: "सहयोगी अस्पतालों में सात्विक पथ्य (भोजन) सहयोग क्या है?",
    aEn: "We collaborate with partner hospitals to provide 100% pure vegetarian, onion-garlic free, and medically appropriate Satvik meals during inpatient stays, especially caring for ascetics, monks, and devout families.",
    aHi: "हम सहयोगी अस्पतालों में भर्ती मरीजों, त्यागी-तपस्वी साधु-संतों व सात्विक परिवारों हेतु शुद्ध शाकाहारी, प्याज-लहसुन रहित और सुपाच्य भोजन की व्यवस्था सुनिश्चित करते हैं।",
  },
  {
    id: "faq-10",
    category: "app",
    qEn: "Do I need to pay any membership or subscription fee to use the app?",
    qHi: "क्या ऐप का उपयोग करने के लिए कोई सदस्यता या सब्सक्रिप्शन शुल्क देना होता है?",
    aEn: "No. The Adityam Niramayaa mobile app is 100% free to download and use. There are zero subscription fees, hidden registration charges, or advertisements.",
    aHi: "नहीं। आदित्यम् निरामया: मोबाइल ऐप 100% निःशुल्क है। इसमें कोई सदस्यता शुल्क, छिपा हुआ रजिस्ट्रेशन चार्ज अथवा विज्ञापन नहीं है।",
  },
];

export default function FaqPage() {
  const [lang, setLang] = useLanguage();
  const isHi = lang === "hi";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((item) => {
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        return (
          item.qEn.toLowerCase().includes(q) ||
          item.qHi.includes(q) ||
          item.aEn.toLowerCase().includes(q) ||
          item.aHi.includes(q)
        );
      }
      return true;
    });
  }, [searchQuery, activeCategory]);

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
            {/* Top Bar: Breadcrumb + Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-white transition-colors">
                  {isHi ? "होम" : "Home"}
                </Link>
                <span>/</span>
                <span className="text-amber-400 font-bold">
                  {isHi ? "सहायता केंद्र व प्रश्नोत्तरी" : "FAQ & Help Center"}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-slate-300">
                <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>
                  {isHi ? "पारदर्शी जानकारी • त्वरित समाधान" : "Patient Guidance & Clear Answers"}
                </span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {isHi ? (
                  <>
                    अक्सर पूछे जाने वाले प्रश्न एवं{" "}
                    <span className="text-amber-300 font-serif italic font-normal">मरीज सहायता केंद्र।</span>
                  </>
                ) : (
                  <>
                    Patient Help Center & FAQs.{" "}
                    <span className="block text-amber-300 font-serif italic font-normal mt-1 text-2xl sm:text-3xl lg:text-4xl">
                      Clear Guidance on Consultations, Lab Tests & Hospital Care.
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-3.5 text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-3xl">
                {isHi
                  ? "डॉक्टर परामर्श, होम लैब टेस्ट, दवाइयों, अस्पताल भर्ती एवं पूर्व-निर्धारित दरों से जुड़े सभी सामान्य प्रश्नों के आसान और पारदर्शी उत्तर।"
                  : "Find transparent answers regarding our zero-commission healthcare collective, priority doctor appointments, free home sample pickups, and cashless hospital admissions."}
              </p>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. SEARCH BAR & CATEGORY SWITCHER
        ==================================================================== */}
        <section className="relative -mt-6 z-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
              <div className="relative mb-3">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    isHi
                      ? "प्रश्न खोजें (जैसे ओपीडी, रिपोर्ट, होम कलेक्शन, दवाइयां, अस्पताल मित्र)..."
                      : "Search any question (e.g. OPD fees, lab reports, free home pickup, buddy support)..."
                  }
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                />
              </div>

              {/* Category Filter Chips */}
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                {[
                  { id: "all", labelEn: "All Questions", labelHi: "सभी प्रश्न" },
                  { id: "doctors", labelEn: "Doctor OPD", labelHi: "डॉक्टर परामर्श" },
                  { id: "diagnostics", labelEn: "Lab Tests", labelHi: "लैब टेस्ट्स" },
                  { id: "pharmacy", labelEn: "Pharmacy", labelHi: "दवाइयां" },
                  { id: "hospitals", labelEn: "Hospital Admission", labelHi: "अस्पताल भर्ती" },
                  { id: "satvik", labelEn: "Satvik Care", labelHi: "सात्विक सेवा" },
                  { id: "app", labelEn: "Mobile App", labelHi: "मोबाइल ऐप" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors cursor-pointer ${
                      activeCategory === cat.id
                        ? "bg-[#0A1128] text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {isHi ? cat.labelHi : cat.labelEn}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. ACCORDION FAQ LIST
        ==================================================================== */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-slate-200">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-slate-900">
                {isHi ? "कोई प्रश्न नहीं मिला" : "No Matching Questions Found"}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {isHi ? "कृपया अन्य खोज शब्द का प्रयोग करें।" : "Try searching with different terms or reset category filters."}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-3 text-xs text-blue-600 font-bold hover:underline cursor-pointer"
              >
                {isHi ? "सभी प्रश्न देखें" : "View All Questions"}
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all text-left"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-slate-50/70 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        {isHi ? faq.qHi : faq.qEn}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500">
                        {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        <p className="pt-3">{isHi ? faq.aHi : faq.aEn}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* ====================================================================
            5. STILL HAVE QUESTIONS? CALLOUT BOX
        ==================================================================== */}
        <section className="pb-16 px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/40 rounded-2xl p-6 sm:p-8 border border-blue-200 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest block mb-1">
                {isHi ? "अन्य कोई सहायता चाहिए?" : "Still Need Assistance?"}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {isHi ? "हमारी 24/7 हेल्पलाइन पर सीधे बात करें" : "Talk with Our Patient Coordination Desk"}
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                {isHi
                  ? "हमारे स्वास्थ्य समन्वयक आपके सभी प्रश्नों के उत्तर देने के लिए उपलब्ध हैं।"
                  : "Our team is available round-the-clock to guide your family."}
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="tel:18002081008"
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>1800-208-1008</span>
              </a>

              <Link
                href="/contact"
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-semibold transition-all cursor-pointer"
              >
                <span>{isHi ? "संपर्क फॉर्म भरें" : "Contact Desk"}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Global Footer */}
      <Footer />
    </div>
  );
}

