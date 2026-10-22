"use client";

import React from "react";
import {
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Heart
} from "lucide-react";

interface FooterProps {
  onOpenVision?: () => void;
  onOpenPartner?: () => void;
  onOpenApp?: () => void;
}

export default function Footer({
  onOpenVision,
  onOpenPartner,
  onOpenApp,
}: FooterProps) {
  return (
    <footer className="bg-[#0B1221] text-white pt-20 relative overflow-hidden font-sans selection:bg-[#2563EB] selection:text-white">

      {/* Decorative Top Accent Line (Matches your Nav blue) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

        {/* ========================================================= */}
        {/* TOP GRID: Information Architecture                        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">

          {/* Brand & Spiritual Legacy (Spans 4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">

            {/* Typographic Logo (Fixes the broken image issue) */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#172554] flex items-center justify-center shadow-lg border border-blue-500/20">
                <Heart className="w-5 h-5 text-white fill-white/20" />
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-white leading-none">
                  Adityam Niramayaa
                </div>
                <div className="text-[9px] text-amber-500 font-bold tracking-widest uppercase mt-1.5">
                  Healthcare for Everyone
                </div>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed max-w-sm font-light mb-8">
              A visionary healthcare ecosystem founded on the timeless Jain virtues of <strong className="text-white/80 font-medium">Anukampa</strong> (Compassion), and <strong className="text-white/80 font-medium">Nishkam Seva</strong> (Service).
            </p>


          </div>

          {/* Spacer for desktop */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links: Care Verticals (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-6">
              Care Verticals
            </h4>
            <ul className="space-y-3.5 text-sm text-white/60 font-light">
              <li><a href="#doctors" className="hover:text-white transition-colors">OPD Consultations</a></li>
              <li><a href="#diagnostics" className="hover:text-white transition-colors">NABL Lab Tests</a></li>
              <li><a href="#pharmacy" className="hover:text-white transition-colors">Pharmacy Delivery</a></li>
              <li><a href="#hospitals" className="hover:text-white transition-colors">Partner Hospitals</a></li>
              <li><a href="#hospitals" className="hover:text-white transition-colors">Satvik Patient Meals</a></li>
            </ul>
          </div>

          {/* Links: Institutional (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-6">
              Institutional
            </h4>
            <ul className="space-y-3.5 text-sm text-white/60 font-light">
              <li>
                <button onClick={() => onOpenPartner?.()} className="hover:text-white transition-colors">Provider Portal</button>
              </li>
              <li>
                <button onClick={() => onOpenPartner?.()} className="hover:text-white transition-colors">Join as Specialist</button>
              </li>
              <li>
                <button onClick={() => onOpenApp?.()} className="hover:text-white transition-colors">Adityam Health Card</button>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">Transparency Policy</a>
              </li>
            </ul>
          </div>

          {/* Links: Emergency & Contact (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-6">
              24/7 Support
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
                  <div className="text-[9px] text-rose-500/70 uppercase font-bold tracking-widest mb-0.5">Toll-Free SOS</div>
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
                    Network Hubs: Delhi NCR, Mumbai, Ahmedabad, Indore, Jaipur, Bengaluru.
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* BOTTOM SECTION: The Twiggy Massive Text                   */}
      {/* ========================================================= */}
      <div className="w-full relative border-t border-white/[0.03] pt-6 flex flex-col items-center">

        {/* Compliance & Copyright Metadata */}
        <div className="w-full max-w-7xl px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold text-white/30 uppercase tracking-widest relative z-20 mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2">
            <span className="flex items-center gap-1.5 hover:text-white/60 transition-colors cursor-default">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" /> NABL Aligned
            </span>
            <span className="hidden sm:block opacity-30">•</span>
            <span className="hover:text-white/60 transition-colors cursor-default">ISO 27001 Security</span>
            <span className="hidden sm:block opacity-30">•</span>
            <span className="hover:text-white/60 transition-colors cursor-default">Ethical Oversight</span>
          </div>
          <div>
            © 2026 Adityam Niramayaa.
          </div>
        </div>

        {/* The Edge-to-Edge Architectural Watermark (Fixed Clipping) */}
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