"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";

interface HomeFAQProps {
  lang?: "en" | "hi";
}

export default function HomeFAQ({ lang = "en" }: HomeFAQProps) {
  const isHi = lang === "hi";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      qEn: "How does Adityam Niramayaa guarantee fair doctor consultation fees?",
      qHi: "आदित्यम् निरामया: कम और निष्पक्ष डॉक्टर परामर्श शुल्क की गारंटी कैसे देता है?",
      aEn: "We sign direct institutional agreements with verified doctors and hospitals. By eliminating middlemen markups, agency commissions, and registration fees, 100% of tariff concessions are passed straight to patient families.",
      aHi: "हम डॉक्टरों और अस्पतालों के साथ सीधे संस्थागत समझौते करते हैं। मध्यस्थों, कमीशन और अनुचित रजिस्ट्रेशन शुल्कों को हटाकर पूरी छूट सीधे मरीज के परिवार तक पहुंचाई जाती है।",
    },
    {
      qEn: "How do I skip long OPD waiting queues at partner hospitals?",
      qHi: "क्या सहयोगी अस्पतालों में सामान्य कतार में खड़े हुए बिना डॉक्टर को दिखाया जा सकता है?",
      aEn: "When you book via our app or website, you receive a confirmed digital entry token. Simply show this token at the Adityam Helpdesk in the hospital to receive priority OPD entry without waiting in reception lines.",
      aHi: "जब आप हमारी वेबसाइट या ऐप से बुकिंग करते हैं, तो आपको डिजिटल टोकन मिलता है। अस्पताल के आदित्यम् हेल्पडेस्क पर यह टोकन दिखाकर आप बिना सामान्य कतार के सीधे ओपीडी में जा सकते हैं।",
    },
    {
      qEn: "Are all diagnostic tests certified by NABL with free home pickup?",
      qHi: "क्या सभी लैब टेस्ट NABL मान्यता प्राप्त हैं और क्या होम सैंपल पिकअप मुफ्त है?",
      aEn: "Yes. Every lab test and health package is processed by 100% NABL-accredited partner laboratories. Trained phlebotomists collect blood and urine samples safely at your home with zero collection charges.",
      aHi: "हाँ। सभी लैब टेस्ट शत-प्रतिशत NABL मान्यता प्राप्त प्रयोगशालाओं द्वारा किए जाते हैं। प्रमाणित लैब तकनीशियन बिना किसी अतिरिक्त शुल्क के आपके घर आकर सुरक्षित सैंपल लेते हैं।",
    },
    {
      qEn: "How does the 'Hospital Buddy' and 100% cashless TPA service work?",
      qHi: "अस्पताल में 'अस्पताल मित्र' और 100% कैशलेस बीमा सहायता कैसे काम करती है?",
      aEn: "For admitted surgeries or treatments, a dedicated on-ground coordinator (Hospital Buddy) assists your family with fast-track cashless insurance approvals, pre-negotiated package billing, and pure Satvik dietary meals.",
      aHi: "अस्पताल में भर्ती के दौरान हमारा ऑन-ग्राउंड 'अस्पताल मित्र' आपके परिवार की कैशलेस बीमा मंजूरी, पारदर्शी पैकेज बिलिंग और शुद्ध सात्विक भोजन प्रबंधन में पूरी सहायता करता है।",
    },
    {
      qEn: "Is my personal and medical data kept completely private?",
      qHi: "क्या मेरी चिकित्सा रिपोर्ट और व्यक्तिगत जानकारी पूरी तरह सुरक्षित और गोपनीय है?",
      aEn: "Absolutely. We strictly comply with India's DPDP Act 2023 and ISO 27001 data protection standards. We never sell, broker, or monetize your health data, reports, or phone numbers for commercial advertisements.",
      aHi: "बिल्कुल। हम भारत के डीपीडीपी एक्ट 2023 और ISO 27001 सुरक्षा मानकों का पूर्ण पालन करते हैं। हम कभी भी आपके पर्चे, जांच रिपोर्ट अथवा मोबाइल नंबर का व्यावसायिक प्रचार के लिए सौदा नहीं करते।",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section Header (Tata 1mg Style: Clean, Centered, Minimalist) */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>{isHi ? "सामान्य प्रश्न व उत्तर" : "Frequently Asked Questions"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isHi ? "मरीजों के मन में उठने वाले मुख्य सवाल" : "Frequently Asked Questions"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-lg mx-auto font-normal">
            {isHi
              ? "पारदर्शी दरों, ओपीडी परामर्श और कैशलेस अस्पताल सुविधाओं से जुड़े सरल उत्तर।"
              : "Clear, honest answers about doctor consultations, fair pricing, and hospital support."}
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const q = isHi ? faq.qHi : faq.qEn;
            const a = isHi ? faq.aHi : faq.aEn;

            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-4 sm:py-5 flex items-center justify-between gap-4 text-left group cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                    {q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen
                        ? "rotate-180 bg-blue-50 text-blue-600"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl animate-fadeIn">
                    <p>{a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Link to Full FAQ Hub */}
        <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2 text-xs text-slate-600 text-left">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              {isHi
                ? "कोई अन्य प्रश्न? हमारी 24x7 मरीज हेल्पलाइन 1800-208-1008 पर बात करें।"
                : "Have more questions? Our 24/7 care team is available at 1800-208-1008."}
            </span>
          </div>

          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>{isHi ? "सभी 50+ प्रश्न देखें" : "View All 50+ FAQs"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

