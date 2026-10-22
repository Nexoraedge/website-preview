"use client";

import React from "react";
import {
  Building2,
  TrendingUp,
  ShieldCheck,
  Award,
  Users2,
  FileCheck2,
  ArrowRight,
  Handshake,
} from "lucide-react";

interface PartnerCTAProps {
  onOpenPartner?: () => void;
}

const PROVIDER_BENEFITS = [
  {
    icon: TrendingUp,
    title: "Expanded Patient Reach",
    desc: "Connect with thousands of patients seeking trusted, verified healthcare providers across key urban centers.",
  },
  {
    icon: FileCheck2,
    title: "Streamlined Digital OPD",
    desc: "Zero manual queue friction. Automated digital appointment scheduling, token management, and pre-consult history.",
  },
  {
    icon: Users2,
    title: "Verified Community Trust",
    desc: "Direct access to an engaged community that values ethical medical standards, high compliance, and mutual respect.",
  },
  {
    icon: Award,
    title: "Enhanced Institutional Brand",
    desc: "Position your hospital or clinic as a benchmark of transparency, dignified care, and community leadership.",
  },
];

export default function PartnerCTA({ onOpenPartner }: PartnerCTAProps) {
  return (
    <section id="for-providers" className="py-20 bg-linear-to-b from-white to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Banner Card */}
        <div className="relative bg-[#0B1B4D] rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16 border-2 border-slate-700">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold border border-white/15">
                <Handshake className="w-4 h-4 text-amber-400" />
                <span>HEALTHCARE PARTNERSHIP PROGRAM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Join Our Network. <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-200 to-white">
                  Let Us Build Together.
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Partnering with Adityam Niramayaa is more than a commercial decision — it is a commitment to purposeful growth. Empower your practice with qualified patient flow while upholding patient dignity.
              </p>

              {/* 4 Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {PROVIDER_BENEFITS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5 text-amber-300 font-bold text-sm">
                        <Icon className="w-4 h-4 text-amber-400" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenPartner?.()}
                  className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-[#0B1B4D] font-extrabold text-sm rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Register Your Hospital / Clinic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Zero upfront listing fees for accredited centers</span>
                </div>
              </div>

            </div>

            {/* Right Card: Quick Stat Highlights */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-white space-y-6">
              <h3 className="text-lg font-bold text-amber-300 border-b border-white/10 pb-3">
                Empanelment Highlights
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs text-slate-300">Empanelled Doctors</span>
                  <span className="text-lg font-extrabold text-white">2,500+</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs text-slate-300">Partner Hospitals & Centers</span>
                  <span className="text-lg font-extrabold text-white">500+</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs text-slate-300">NABL Lab Collection Points</span>
                  <span className="text-lg font-extrabold text-white">350+</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300">Average Onboarding Time</span>
                  <span className="text-sm font-bold text-emerald-400">48 Hours</span>
                </div>
              </div>

              <div className="p-3 bg-white/10 rounded-xl text-[11px] text-slate-200 leading-relaxed">
                &ldquo;Our dedicated provider onboarding team assists with fee schedule integration, doctor schedule synchronization, and cashless desk setup.&rdquo;
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
