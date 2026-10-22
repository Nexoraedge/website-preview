"use client";

import React from "react";
import {
  Building2,
  ShieldCheck,
  Bed,
  CheckCircle2,
  ArrowRight,
  HeartHandshake,
  Utensils,
  CreditCard,
} from "lucide-react";

interface HospitalNetworkProps {
  onOpenPartner?: () => void;
  onOpenBooking?: () => void;
}

const PARTNER_HOSPITALS = [
  {
    name: "Arihant Super Specialty Hospital",
    city: "Delhi NCR",
    beds: "350+ Beds",
    specialties: "Cardiology, Oncology, Joint Replacement",
    features: ["Cashless TPA Desk", "Satvik Diet Support", "Dedicated Buddy"],
    tag: "NABH Accredited",
  },
  {
    name: "Bhagwan Mahaveer Medical Research Center",
    city: "Mumbai",
    beds: "500+ Beds",
    specialties: "Neurology, Nephrology, Emergency Trauma",
    features: ["24/7 ICU Admission", "Jain Community Subsidy", "Zero Hidden Charges"],
    tag: "Center of Excellence",
  },
  {
    name: "Shanti Memorial Multispecialty Hospital",
    city: "Ahmedabad",
    beds: "220+ Beds",
    specialties: "Gastroenterology, Pediatrics, Ortho",
    features: ["Day-care Surgery", "Free Discharge Medicines", "Family Suite"],
    tag: "Empanelled Network",
  },
  {
    name: "Aadityam Trust Health Pavilion",
    city: "Indore",
    beds: "180+ Beds",
    specialties: "General Surgery, Eye & Laser, Dialysis",
    features: ["Affordable Tariffs", "Community Subsidized", "NABL Lab In-House"],
    tag: "Charitable Wing",
  },
];

export default function HospitalNetwork({
  onOpenPartner,
  onOpenBooking,
}: HospitalNetworkProps) {
  return (
    <section id="hospitals" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-[#6366F1] text-xs font-bold tracking-wide border border-indigo-100">
              <Building2 className="w-3.5 h-3.5" />
              <span>TRUSTED INSTITUTIONAL CARE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Empanelled Partner Hospitals & Care Centers
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B82] max-w-2xl">
              Access pre-screened multi-specialty hospitals with priority admissions, transparent cashless billing, and community-guided assistance.
            </p>
          </div>

          <button
            onClick={() => onOpenPartner?.()}
            className="px-5 py-2.5 bg-white hover:bg-slate-100 text-[#172554] border border-slate-300 text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer self-start md:self-auto"
          >
            <Building2 className="w-4 h-4 text-[#2563EB]" />
            <span>Register Your Hospital</span>
          </button>
        </div>

        {/* Hospital Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PARTNER_HOSPITALS.map((hosp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-[#6366F1] uppercase tracking-wider">
                    {hosp.tag}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {hosp.city}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0F172A] mb-1 leading-snug">
                  {hosp.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-3">
                  <Bed className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{hosp.beds}</span>
                </div>

                <div className="text-xs text-[#5B6B82] font-medium mb-4">
                  <strong>Specialties:</strong> {hosp.specialties}
                </div>

                {/* Features */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-5">
                  {hosp.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-1.5 text-xs text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking?.()}
                className="w-full py-2 bg-indigo-50 hover:bg-indigo-100 text-[#6366F1] font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1"
              >
                <span>Check Bed Availability</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Hospital Special Care Badges (Satvik, Cashless, Dignity) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0F172A]">
                Satvik & Jain Diet Coordination
              </h4>
              <p className="text-xs text-[#5B6B82] mt-1 leading-relaxed">
                Hospital stays can be stressful when dietary vows are compromised. We arrange pure, hygienic Satvik meals for patients and attendants.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-200">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0F172A]">
                100% Cashless TPA Assistance
              </h4>
              <p className="text-xs text-[#5B6B82] mt-1 leading-relaxed">
                Our in-hospital desk handles insurance paperwork, approvals, and query resolutions to prevent out-of-pocket delays during discharge.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0F172A]">
                Transparent Pre-Negotiated Packages
              </h4>
              <p className="text-xs text-[#5B6B82] mt-1 leading-relaxed">
                Fixed costs for common surgeries (cataract, knee replacement, hernia, gall bladder) with no post-op surprise bills.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
