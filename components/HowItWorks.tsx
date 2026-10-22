"use client";

import React from "react";
import {
  Search,
  CalendarCheck,
  Stethoscope,
  HeartHandshake,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface HowItWorksProps {
  onOpenBooking?: () => void;
  onOpenPartner?: () => void;
}

const STEPS = [
  {
    step: "01",
    title: "Discover",
    hindi: "खोजें",
    icon: Search,
    color: "#2563EB",
    bgSoft: "#EFF6FF",
    desc: "Search verified specialists, empanelled multi-specialty hospitals, or accredited NABL test packages by city and department.",
  },
  {
    step: "02",
    title: "Connect",
    hindi: "जुड़ें",
    icon: CalendarCheck,
    color: "#0D9488",
    bgSoft: "#F0FDFA",
    desc: "Choose your preferred time slot, view transparent tariffs with guaranteed community discounts, and confirm instantly.",
  },
  {
    step: "03",
    title: "Receive Care",
    hindi: "उपचार प्राप्त करें",
    icon: Stethoscope,
    color: "#6366F1",
    bgSoft: "#EEF2FF",
    desc: "Visit the clinic with priority OPD token or get hospital admission with cashless TPA support and dedicated care buddies.",
  },
  {
    step: "04",
    title: "Support & Follow-Up",
    hindi: "सहयोग एवं देखभाल",
    icon: HeartHandshake,
    color: "#059669",
    bgSoft: "#ECFDF5",
    desc: "Digital health report locker, seamless doctor post-consult follow-up, medicine delivery savings, and 24/7 care hotline.",
  },
];

export default function HowItWorks({
  onOpenBooking,
  onOpenPartner,
}: HowItWorksProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold tracking-wide border border-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>PATIENT & PROVIDER JOURNEY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            How Adityam Niramayaa Works
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
            A guided, compassionate healthcare journey that eliminates friction, delays, and anxiety for patients and families.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-2xl font-black opacity-80"
                      style={{ color: step.color }}
                    >
                      {step.step}
                    </span>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs"
                      style={{ backgroundColor: step.bgSoft, color: step.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Hindi */}
                  <div className="space-y-0.5 mb-2">
                    <h3 className="text-lg font-bold text-[#0F172A]">
                      {step.title}
                    </h3>
                    <div className="text-xs font-bold text-slate-400">
                      {step.hindi}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#5B6B82] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-slate-600 group-hover:text-[#2563EB] transition-colors">
                  <span>Seamless Experience</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Provider Bridge Callout */}
        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              For Hospitals, Clinics & Doctors
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
              Are You a Healthcare Provider or Institution?
            </h3>
            <p className="text-xs sm:text-sm text-[#5B6B82] max-w-2xl">
              Create your verified profile, share transparent consultation pricing, receive qualified patient referrals, and build deep community trust through our platform.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenPartner?.()}
              className="px-6 py-3 bg-[#172554] hover:bg-[#2563EB] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md cursor-pointer"
            >
              Join Our Provider Network
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
