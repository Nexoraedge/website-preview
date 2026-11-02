"use client";

import React from "react";
import Link from "next/link";
import {
  Heart,
  Stethoscope,
  FlaskConical,
  Pill,
  Building2,
  Home,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A1128] text-white flex flex-col justify-between selection:bg-[#2563EB] selection:text-white font-sans relative overflow-hidden">
      {/* Subtle ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.22),transparent_75%)] pointer-events-none" />

      {/* Top Simple Brand Bar */}
      <header className="p-6 relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
            <Heart className="w-4 h-4 fill-white/20" />
          </div>
          <div>
            <span className="font-bold text-white tracking-tight text-base block leading-none">
              Adityam Niramayaa
            </span>
            <span className="text-[9px] text-amber-400 font-bold uppercase tracking-wider mt-1 block">
              Healthcare for Everyone
            </span>
          </div>
        </Link>

        <a
          href="tel:18002081008"
          className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5"
        >
          <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
          <span>24/7 Helpline: 1800-208-1008</span>
        </a>
      </header>

      {/* Main 404 Visual Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 relative z-10 py-12">
        <div className="max-w-xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-semibold border border-white/15 mb-4">
            404 • Page Not Found
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Looking for Care? <br />
            <span className="text-amber-300 font-serif italic font-normal text-2xl sm:text-4xl">
              This Page Could Not Be Found.
            </span>
          </h1>

          <p className="mt-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
            The link you followed may be outdated, or the service has been relocated within our healthcare portal. Explore our core medical divisions below:
          </p>

          {/* Quick Access Care Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-8 text-left">
            <Link
              href="/doctors"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
            >
              <Stethoscope className="w-4 h-4 text-blue-400 mb-1.5 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold text-white">Doctors</div>
              <div className="text-[10px] text-slate-400">OPD Slots</div>
            </Link>

            <Link
              href="/diagnostics"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
            >
              <FlaskConical className="w-4 h-4 text-teal-400 mb-1.5 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold text-white">Lab Tests</div>
              <div className="text-[10px] text-slate-400">Free Home Pickup</div>
            </Link>

            <Link
              href="/pharmacy"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
            >
              <Pill className="w-4 h-4 text-amber-400 mb-1.5 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold text-white">Pharmacy</div>
              <div className="text-[10px] text-slate-400">Direct Delivery</div>
            </Link>

            <Link
              href="/hospitals"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
            >
              <Building2 className="w-4 h-4 text-emerald-400 mb-1.5 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold text-white">Hospitals</div>
              <div className="text-[10px] text-slate-400">Buddy Escort</div>
            </Link>
          </div>

          {/* Return Home Button */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-sm transition-all"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return to Homepage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Minimal */}
      <footer className="p-6 text-center text-[11px] text-slate-500 relative z-10 border-t border-white/5">
        © 2026 Adityam Niramayaa. Ethical, compassionate healthcare for everyone.
      </footer>
    </div>
  );
}

