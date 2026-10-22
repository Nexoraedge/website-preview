"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Smartphone,
  QrCode,
  Download,
  ShieldCheck,
  CheckCircle2,
  Bell,
  Heart,
  Send,
} from "lucide-react";

export default function AppPromo() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  return (
    <section id="app-download" className="py-20 bg-linear-to-b from-[#F8FAFC] to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Details & Phone SMS trigger */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold border border-blue-200">
                <Smartphone className="w-3.5 h-3.5" />
                <span>OFFICIAL ADITYAM NIRAMAYAA MOBILE APP</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Healthcare in Your Pocket. <br />
                <span className="text-[#2563EB]">Download the App Today.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
                Unlock instant priority OPD appointments, paperless health locker for diagnostic reports, real-time bed tracking, and exclusive community discounts on your smartphone.
              </p>

              {/* App Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1-Tap Instant Doctor Booking</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>NABL Reports Direct to Phone</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Satvik Meal Requests During IPD</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>24/7 GPS-Tracked Ambulance SOS</span>
                </div>
              </div>

              {/* Phone Input SMS Form */}
              <div className="pt-4">
                <div className="text-xs font-bold text-slate-700 mb-2">
                  Get the Direct App Link on Your Mobile:
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
                  <div className="relative flex-1">
                    <span className="absolute left-3.5 top-3.5 text-xs font-bold text-slate-400">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:bg-white rounded-xl text-xs sm:text-sm font-semibold outline-none transition-all"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send SMS Link</span>
                  </button>
                </form>

                {isSent && (
                  <div className="mt-2 text-xs font-bold text-emerald-600 flex items-center gap-1 animate-in fade-in duration-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Download link sent successfully to +91 {phoneNumber}! Check your SMS.</span>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Simulated App Mockup + QR Code */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="bg-[#172554] rounded-3xl p-6 sm:p-8 text-white text-center shadow-xl border border-slate-700 max-w-xs w-full flex flex-col items-center space-y-4">
                
                <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                  <QrCode className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-white">
                    Scan to Install App
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Compatible with iOS & Android
                  </p>
                </div>

                {/* QR Code Graphic Box */}
                <div className="p-4 bg-white rounded-2xl shadow-inner flex flex-col items-center justify-center">
                  <div className="w-40 h-40 relative flex items-center justify-center border-2 border-dashed border-slate-300 rounded-xl bg-slate-50">
                    <QrCode className="w-32 h-32 text-[#172554]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-9 h-9 rounded-lg bg-[#2563EB] flex items-center justify-center text-white text-xs font-black shadow-md">
                        AN
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold mt-2">
                    Point camera to install
                  </span>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2 pt-1 text-[11px] text-amber-300 font-semibold">
                  <span>★ 4.9 Rating</span>
                  <span>•</span>
                  <span>50,000+ Downloads</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
