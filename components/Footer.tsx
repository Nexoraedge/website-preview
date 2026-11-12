"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  Heart
} from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps = {}) {
  const [lang] = useLanguage();
  const isHi = lang === "hi";

  return (
    <footer className={`bg-[#0B1221] text-white pt-20 relative overflow-hidden font-sans selection:bg-[#2563EB] selection:text-white ${className || ""}`}>

      {/* Decorative Top Accent Line (Matches your Nav blue) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

        {/* ========================================================= */}
        {/* TOP GRID: Information Architecture                        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">

          {/* Brand & Spiritual Legacy (Spans 4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">

            {/* Typographic Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#172554] flex items-center justify-center shadow-lg border border-blue-500/20">
                <Heart className="w-5 h-5 text-white fill-white/20" />
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-white leading-none">
                  {isHi ? "आदित्यम् निरामया:" : "Adityam Niramayaa"}
                </div>
                <div className="text-[9px] text-amber-500 font-bold tracking-widest uppercase mt-1.5">
                  {isHi ? "सर्वे सन्तु निरामया: • सभी के लिए स्वास्थ्य सेवा" : "Healthcare for Everyone"}
                </div>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed max-w-sm font-light mb-8">
              {isHi ? (
                <>
                  जैन दर्शन के शाश्वत सद्गुणों—<strong className="text-white/80 font-medium">अनुकम्पा</strong> (करुणा) एवं <strong className="text-white/80 font-medium">निष्काम सेवा</strong> पर आधारित एक मूल्य-आधारित स्वास्थ्य सेवा मंच।
                </>
              ) : (
                <>
                  A visionary healthcare ecosystem founded on the timeless Jain virtues of <strong className="text-white/80 font-medium">Anukampa</strong> (Compassion), and <strong className="text-white/80 font-medium">Nishkam Seva</strong> (Service).
                </>
              )}
            </p>
          </div>

          {/* Spacer for desktop */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links: Care Verticals (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-6">
              {isHi ? "स्वास्थ्य सेवाएं" : "Care Verticals"}
            </h4>
            <ul className="space-y-3.5 text-sm text-white/60 font-light">
              <li><Link href="/doctors" className="hover:text-white transition-colors">{isHi ? "ओपीडी परामर्श" : "OPD Consultations"}</Link></li>
              <li><Link href="/diagnostics" className="hover:text-white transition-colors">{isHi ? "NABL लैब टेस्ट्स" : "NABL Lab Tests"}</Link></li>
              <li><Link href="/pharmacy" className="hover:text-white transition-colors">{isHi ? "दवा डिलीवरी" : "Pharmacy Delivery"}</Link></li>
              <li><Link href="/surgeries" className="hover:text-white transition-colors">{isHi ? "नियोजित सर्जरी पैकेज" : "Planned Surgeries"}</Link></li>
              <li><Link href="/hospitals" className="hover:text-white transition-colors">{isHi ? "सहयोगी अस्पताल" : "Partner Hospitals"}</Link></li>
              <li><Link href="/vision" className="hover:text-white transition-colors">{isHi ? "पावन संकल्प" : "Sacred Vision"}</Link></li>
            </ul>
          </div>

          {/* Links: Institutional (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-6">
              {isHi ? "संस्थागत" : "Institutional"}
            </h4>
            <ul className="space-y-3.5 text-sm text-white/60 font-light">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">{isHi ? "परिचय एवं नेतृत्व" : "About & Leadership"}</Link>
              </li>
              <li>
                <Link href="/join-network" className="hover:text-white transition-colors">{isHi ? "प्रदाता पोर्टल" : "Provider Portal"}</Link>
              </li>
              <li>
                <Link href="/get-app" className="hover:text-white transition-colors">{isHi ? "मोबाइल ऐप डाउनलोड" : "Download Mobile App"}</Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-white transition-colors">{isHi ? "अपॉइंटमेंट बुक करें" : "Book Appointment"}</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">{isHi ? "संपर्क व हेल्पलाइन" : "Contact & Helplines"}</Link>
              </li>
            </ul>
          </div>

          {/* Links: Legal & Trust (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-6">
              {isHi ? "विश्वास व कानूनी" : "Trust & Legal"}
            </h4>
            <ul className="space-y-3.5 text-sm text-white/60 font-light">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">{isHi ? "सहायता केंद्र व एफएक्यू" : "Help Center & FAQ"}</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">{isHi ? "गोपनीयता नीति" : "Privacy Policy"}</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">{isHi ? "सेवा की शर्तें" : "Terms of Service"}</Link>
              </li>
              <li>
                <Link href="/delete-account" className="hover:text-rose-400 transition-colors">{isHi ? "खाता विलोपन पोर्टल" : "Delete Account"}</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">{isHi ? "शिकायत अधिकारी" : "Grievance Officer"}</Link>
              </li>
            </ul>
          </div>

          {/* Links: Emergency & Contact (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-6">
              {isHi ? "24/7 मरीज सहायता" : "24/7 Support"}
            </h4>

            <div className="space-y-5">

              {/* Refined SOS Button */}
              <a
                href="tel:18002081008"
                className="inline-flex items-center gap-3.5 bg-rose-500/10 hover:bg-rose-500/20 px-4 py-3 rounded-2xl border border-rose-500/20 transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[9px] text-rose-500/70 uppercase font-bold tracking-widest mb-0.5">
                    {isHi ? "टोल-फ्री आपातकालीन" : "Toll-Free SOS"}
                  </div>
                  <div className="font-bold text-rose-100 text-sm tracking-wide">1800-208-1008</div>
                </div>
              </a>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-white/60 text-sm font-light">
                  <Mail className="w-4 h-4 text-white/30 shrink-0" />
                  <span className="hover:text-white transition-colors cursor-pointer">care@adityamniramayaa.org</span>
                </div>

                <div className="flex items-start gap-3 text-white/60 text-sm font-light">
                  <MapPin className="w-4 h-4 text-white/30 shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-xs">
                    {isHi
                      ? "राष्ट्रीय हब: दिल्ली एनसीआर, मुंबई, अहमदाबाद, इंदौर, जयपुर, बेंगलुरु।"
                      : "Network Hubs: Delhi NCR, Mumbai, Ahmedabad, Indore, Jaipur, Bengaluru."}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* BOTTOM SECTION: Metadata & Watermark                      */}
      {/* ========================================================= */}
      <div className="w-full relative border-t border-white/[0.03] pt-6 flex flex-col items-center">

        {/* Compliance & Copyright Metadata */}
        <div className="w-full max-w-7xl px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold text-white/30 uppercase tracking-widest relative z-20 mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2">
            <span className="flex items-center gap-1.5 hover:text-white/60 transition-colors cursor-default">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" /> {isHi ? "NABL प्रमाणित" : "NABL Aligned"}
            </span>
            <span className="hidden sm:block opacity-30">•</span>
            <span className="hover:text-white/60 transition-colors cursor-default">{isHi ? "ISO 27001 डेटा सुरक्षा" : "ISO 27001 Security"}</span>
            <span className="hidden sm:block opacity-30">•</span>
            <Link href="/privacy" className="hover:text-white/80 transition-colors">{isHi ? "गोपनीयता नीति" : "Privacy Policy"}</Link>
            <span className="hidden sm:block opacity-30">•</span>
            <Link href="/terms" className="hover:text-white/80 transition-colors">{isHi ? "शर्तें" : "Terms"}</Link>
            <span className="hidden sm:block opacity-30">•</span>
            <Link href="/delete-account" className="hover:text-rose-400 transition-colors">{isHi ? "खाता हटाएं" : "Delete Account"}</Link>
          </div>
          <div>
            {isHi ? "© 2026 आदित्यम् निरामया:। सर्वाधिकार सुरक्षित।" : "© 2026 Adityam Niramayaa. All rights reserved."}
          </div>
        </div>

        {/* The Edge-to-Edge Architectural Watermark */}
        <div className="w-full select-none pointer-events-none flex justify-center mt-auto">
          <h1
            className="text-[14vw] md:text-[15.5vw] font-black text-white/[0.02] tracking-tighter leading-[0.75] whitespace-nowrap m-0 p-0"
            style={{ transform: 'translateY(10%)' }}
          >
            Adityam Niramayaa.
          </h1>
        </div>
      </div>
    </footer>
  );
}
