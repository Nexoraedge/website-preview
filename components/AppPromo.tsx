"use client";

import React from "react";
import Link from "next/link";
import {
  Search,
  Upload,
  Calendar,
  Pill,
  ShieldCheck,
  CheckCircle2,
  Heart,
  ChevronDown,
  Sparkles,
} from "lucide-react";

interface AppPromoProps {
  lang?: "en" | "hi";
}

export default function AppPromo({ lang = "en" }: AppPromoProps) {
  const isHi = lang === "hi";

  return (
    <section id="app-download" className="py-16 sm:py-24 bg-[#FAFAF8] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Clean Banner (Tata 1mg Layout) */}
        <div className="relative bg-gradient-to-br from-[#F6F9FE] via-[#F8FAFD] to-[#FCF9F2] rounded-3xl md:rounded-[2.5rem] border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-14 overflow-hidden">
          
          {/* Subtle Ambient Backing Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Headings, Store Badges & QR Code */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{isHi ? "मोबाइल ऐप डाउनलोड" : "Adityam Mobile Experience"}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {isHi ? (
                  <>
                    आदित्यम् निरामया: ऐप डाउनलोड करें। <br />
                    <span className="text-blue-600 font-serif italic font-normal">
                      विश्वसनीय स्वास्थ्य सेवा, आपकी उंगलियों पर।
                    </span>
                  </>
                ) : (
                  <>
                    Download the Adityam Niramayaa app. <br />
                    <span className="text-blue-600 font-serif italic font-normal">
                      Trusted healthcare, at your fingertips.
                    </span>
                  </>
                )}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg font-normal">
                {isHi
                  ? "डॉक्टर परामर्श बुक करें, NABL टेस्ट शेड्यूल करें, डॉक्टर का पर्चा अपलोड कर असली दवाइयां मंगाएं और स्वास्थ्य रिकॉर्ड सुरक्षित रखें।"
                  : "Book specialist doctors, schedule NABL lab tests, order certified genuine medicines with 20% relief, and track family health records seamlessly."}
              </p>

              {/* Badges + QR Code Row (Tata 1mg Exact Design) */}
              <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-6">
                
                {/* App Store & Google Play Buttons */}
                <div className="flex flex-col gap-2.5">
                  {/* Apple App Store */}
                  <Link
                    href="/get-app"
                    className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-black hover:bg-slate-900 text-white transition-all shadow-xs group"
                  >
                    <svg className="w-6 h-6 fill-current text-white shrink-0" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.66-.99 1.72-.86 2.74 1 .08 2.03-.51 2.57-1.24" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[9px] uppercase tracking-wider text-slate-300 font-medium leading-none">
                        Download on the
                      </div>
                      <div className="text-sm font-bold text-white tracking-tight leading-tight mt-0.5">
                        App Store
                      </div>
                    </div>
                  </Link>

                  {/* Google Play Store */}
                  <Link
                    href="/get-app"
                    className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-black hover:bg-slate-900 text-white transition-all shadow-xs group"
                  >
                    <svg className="w-6 h-6 fill-current text-white shrink-0" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.793 12 3.61 22.186a1.9 1.9 0 0 1-.61-.926V2.74c.14-.367.36-.69.609-.926zm11.3 11.3l2.67 2.67-12.015 6.94 9.345-9.61zm2.67-2.228l3.197 1.848a1.27 1.27 0 0 1 0 2.192l-3.197 1.848-2.67-2.67 2.67-2.218zM5.564 2.247l12.015 6.94-2.67 2.67-9.345-9.61z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[9px] uppercase tracking-wider text-slate-300 font-medium leading-none">
                        GET IT ON
                      </div>
                      <div className="text-sm font-bold text-white tracking-tight leading-tight mt-0.5">
                        Google Play
                      </div>
                    </div>
                  </Link>
                </div>

                {/* "or" text divider */}
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider hidden sm:block">
                  or
                </div>

                {/* Clean QR Code Box */}
                <div className="flex items-center gap-3 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="relative w-20 h-20 bg-slate-950 rounded-xl p-1.5 flex items-center justify-center">
                    {/* Stylized high-contrast QR Matrix */}
                    <div className="w-full h-full bg-white rounded-lg p-1 grid grid-cols-5 grid-rows-5 gap-0.5">
                      <div className="col-span-2 row-span-2 bg-slate-950 rounded-xs" />
                      <div className="col-span-1 row-span-1 bg-blue-600 rounded-xs" />
                      <div className="col-span-2 row-span-2 bg-slate-950 rounded-xs" />
                      <div className="col-span-1 row-span-1 bg-slate-950" />
                      <div className="col-span-1 row-span-1 bg-blue-600" />
                      <div className="col-span-1 row-span-1 bg-slate-950" />
                      <div className="col-span-2 row-span-2 bg-slate-950 rounded-xs" />
                      <div className="col-span-1 row-span-1 bg-blue-600" />
                      <div className="col-span-2 row-span-2 bg-slate-950 rounded-xs" />
                    </div>
                    {/* Center Emblem */}
                    <div className="absolute inset-0 m-auto w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center text-[10px] font-black border border-white">
                      अ
                    </div>
                  </div>

                  <div className="text-left pr-2">
                    <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                      {isHi ? "स्कैन कर तुरंत डाउनलोड करें" : "Scan with camera"}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">
                      {isHi ? "आईओएस व एंड्रॉयड" : "iOS & Android ready"}
                    </span>
                  </div>
                </div>

              </div>

              {/* Value Checkpoints */}
              <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {isHi ? "शून्य कमीशन" : "Zero Commission"}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {isHi ? "100% असली दवाएं" : "100% Genuine Medicines"}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {isHi ? "सुरक्षित स्वास्थ्य डेटा" : "DPDP Act Compliant"}
                </span>
              </div>

            </div>

            {/* RIGHT COLUMN: Realistic Dual Smartphone Mockups (Tata 1mg Layout) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] h-[380px] sm:h-[420px] select-none">
                
                {/* Secondary Background Phone (Angled slightly right) */}
                <div className="absolute right-0 top-6 w-[230px] sm:w-[250px] h-[340px] sm:h-[370px] bg-slate-900 rounded-[2.5rem] p-2.5 shadow-xl border-4 border-slate-800/80 transform rotate-3 hover:rotate-1 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-b from-[#FFF5EE] to-white rounded-[2rem] overflow-hidden p-3.5 text-slate-800 flex flex-col justify-between">
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-600 mb-3 border-b border-orange-100 pb-2">
                        <span>Suraj Jain</span>
                        <span className="text-[9px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                          Member
                        </span>
                      </div>

                      {/* Package Card */}
                      <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs mb-3">
                        <span className="text-[10px] text-slate-400 font-semibold block">Active Order</span>
                        <span className="text-xs font-bold text-slate-900 block mt-0.5">Annual Health Checkup</span>
                        <div className="mt-2 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                          Reports in 6-12 Hrs
                        </div>
                      </div>

                      {/* Health Overview Gauge */}
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                        <span className="text-[9px] uppercase font-bold text-blue-700 tracking-wider">Health Overview</span>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-2xl font-black text-blue-900 font-sans">96</span>
                          <span className="text-[10px] font-bold text-emerald-600">Optimal Range</span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1">All vital parameters normal</p>
                      </div>
                    </div>

                    <div className="text-[9px] text-center text-slate-400 font-medium">
                      ISO 27001 Encrypted Storage
                    </div>
                  </div>
                </div>

                {/* Primary Foreground Phone (Clean & Front-Facing) */}
                <div className="absolute left-2 sm:left-4 top-0 w-[240px] sm:w-[265px] h-[360px] sm:h-[400px] bg-slate-950 rounded-[2.8rem] p-3 shadow-2xl border-4 border-slate-800 transform -rotate-1 hover:rotate-0 transition-transform duration-300 z-20">
                  
                  {/* Phone Screen Notch */}
                  <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col justify-between p-3.5 text-left">
                    <div>
                      {/* Location Top Bar */}
                      <div className="flex items-center justify-between text-[11px] mb-2.5">
                        <div className="flex items-center gap-1 font-bold text-slate-800">
                          <span className="w-2 h-2 rounded-full bg-blue-600" />
                          <span>Jaipur / Delhi NCR</span>
                          <ChevronDown className="w-3 h-3 text-slate-400" />
                        </div>
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                          <Heart className="w-3.5 h-3.5 text-blue-600 fill-blue-600/20" />
                        </div>
                      </div>

                      {/* Mock Search Bar */}
                      <div className="bg-slate-100 rounded-xl px-3 py-2 flex items-center gap-2 mb-3 text-slate-400 text-[10px]">
                        <Search className="w-3 h-3" />
                        <span>Search doctors, medicines, tests...</span>
                      </div>

                      {/* Quick Action Grid (Tata 1mg 4-Pill Layout) */}
                      <div className="grid grid-cols-4 gap-1.5 text-center mb-3">
                        <div className="p-1.5 rounded-xl bg-blue-50 border border-blue-100">
                          <Calendar className="w-3.5 h-3.5 text-blue-600 mx-auto mb-1" />
                          <span className="text-[8px] font-bold text-slate-800 block leading-tight">Doctors</span>
                        </div>
                        <div className="p-1.5 rounded-xl bg-emerald-50 border border-emerald-100">
                          <Upload className="w-3.5 h-3.5 text-emerald-600 mx-auto mb-1" />
                          <span className="text-[8px] font-bold text-slate-800 block leading-tight">Rx Upload</span>
                        </div>
                        <div className="p-1.5 rounded-xl bg-amber-50 border border-amber-100">
                          <Pill className="w-3.5 h-3.5 text-amber-600 mx-auto mb-1" />
                          <span className="text-[8px] font-bold text-slate-800 block leading-tight">Medicines</span>
                        </div>
                        <div className="p-1.5 rounded-xl bg-purple-50 border border-purple-100">
                          <ShieldCheck className="w-3.5 h-3.5 text-purple-600 mx-auto mb-1" />
                          <span className="text-[8px] font-bold text-slate-800 block leading-tight">Hospitals</span>
                        </div>
                      </div>

                      {/* Featured Offer Card */}
                      <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xs">
                        <span className="text-[8px] uppercase tracking-wider font-extrabold text-blue-200 block">
                          Medicine Delivery
                        </span>
                        <span className="text-[11px] font-bold block mt-0.5">Up to 20% Direct Relief</span>
                        <span className="text-[9px] text-blue-100 block mt-0.5">Sealed packaging • Licensed verification</span>
                      </div>
                    </div>

                    {/* Bottom Status Pill */}
                    <div className="bg-slate-50 border border-slate-150 rounded-xl p-2 flex items-center justify-between text-[9px] font-semibold text-slate-600">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        2,500+ Verified Clinicians
                      </span>
                      <span className="text-blue-600 font-bold">Open App →</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
