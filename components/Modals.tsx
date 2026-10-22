"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  CheckCircle2,
  Calendar,
  Clock,
  User,
  Phone,
  Building2,
  ShieldCheck,
  Sparkles,
  QrCode,
  Download,
  Heart,
  Stethoscope,
  MapPin,
  Check,
} from "lucide-react";

/* =========================================================================
   1. BOOKING MODAL (OPD Doctor Consultations)
========================================================================= */
interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDoctor?: string;
  defaultSpecialty?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  defaultDoctor = "Dr. Satish Jain",
  defaultSpecialty = "Cardiology",
}: BookingModalProps) {
  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [doctorName, setDoctorName] = useState(defaultDoctor);
  const [specialty, setSpecialty] = useState(defaultSpecialty);
  const [date, setDate] = useState("Tomorrow (10:00 AM)");
  const [consultType, setConsultType] = useState<"clinic" | "video">("clinic");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [bookingId, setBookingId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = "AN-" + Math.floor(100000 + Math.random() * 900000);
    setBookingId(randomId);
    setStep("confirmed");
  };

  const handleReset = () => {
    setStep("form");
    setPatientName("");
    setPatientPhone("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">

        {/* Header */}
        <div className="bg-[#172554] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/30 flex items-center justify-center text-blue-300">
              <Stethoscope className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold leading-tight">
                {step === "form" ? "Book Priority OPD Appointment" : "Appointment Confirmed!"}
              </h3>
              <p className="text-xs text-amber-300">
                Adityam Niramayaa Verified Care
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {step === "form" ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">

            {/* Consultation Mode */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Consultation Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setConsultType("clinic")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${consultType === "clinic"
                    ? "bg-blue-50 border-[#2563EB] text-[#2563EB] ring-1 ring-blue-200"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>In-Clinic OPD</span>
                </button>
                <button
                  type="button"
                  onClick={() => setConsultType("video")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${consultType === "video"
                    ? "bg-blue-50 border-[#2563EB] text-[#2563EB] ring-1 ring-blue-200"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Video Tele-Consult</span>
                </button>
              </div>
            </div>

            {/* Doctor & Specialty Info */}
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Selected Specialist
              </div>
              <div className="text-sm font-bold text-[#0F172A] mt-0.5">
                {doctorName}
              </div>
              <div className="text-xs text-[#2563EB] font-semibold">
                {specialty} Specialist
              </div>
            </div>

            {/* Slot Picker */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Select Time Slot
              </label>
              <select
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:border-[#2563EB] outline-none"
              >
                <option value="Today (04:30 PM)">Today (04:30 PM - Evening OPD)</option>
                <option value="Today (06:00 PM)">Today (06:00 PM - Evening OPD)</option>
                <option value="Tomorrow (10:00 AM)">Tomorrow (10:00 AM - Morning OPD)</option>
                <option value="Tomorrow (11:30 AM)">Tomorrow (11:30 AM - Morning OPD)</option>
                <option value="Tomorrow (05:00 PM)">Tomorrow (05:00 PM - Evening OPD)</option>
              </select>
            </div>

            {/* Patient Name */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Patient Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. Rahul Jain"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:border-[#2563EB] outline-none"
                />
              </div>
            </div>

            {/* Patient Phone */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                WhatsApp / Mobile Number (For Instant SMS Confirmation)
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:border-[#2563EB] outline-none"
                />
              </div>
            </div>

            {/* Transparent Billing Summary */}
            <div className="p-3.5 bg-blue-50/70 rounded-2xl border border-blue-100 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-[#172554] block">Transparent Tariff</span>
                <span className="text-[11px] text-emerald-700 font-semibold">
                  ✓ Includes Community Concession
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 line-through mr-1">₹1,200</span>
                <span className="text-base font-black text-[#2563EB]">₹750</span>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Confirm Instant Booking</span>
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Confirmed • Booking Ref #{bookingId}
              </span>
              <h4 className="text-xl font-black text-[#0F172A] mt-2">
                Booking Confirmed, {patientName}!
              </h4>
              <p className="text-xs text-[#5B6B82] mt-1 max-w-sm mx-auto">
                An instant SMS & WhatsApp confirmation with location map and token has been dispatched to <strong>+91 {patientPhone}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 text-left border border-slate-200 space-y-1.5 text-xs text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-400">Doctor:</span>
                <span className="font-bold text-[#0F172A]">{doctorName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Time Slot:</span>
                <span className="font-bold text-[#2563EB]">{date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Mode:</span>
                <span className="font-bold capitalize">{consultType} Consultation</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#172554] hover:bg-[#2563EB] text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
            >
              Done & Return
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

/* =========================================================================
   2. PARTNER EMPANELMENT MODAL (For Hospitals & Clinics)
========================================================================= */
interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PartnerModal({ isOpen, onClose }: PartnerModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [instName, setInstName] = useState("");
  const [instCategory, setInstCategory] = useState("Hospital");
  const [city, setCity] = useState("Delhi NCR");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">

        {/* Header */}
        <div className="bg-[#172554] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-base font-extrabold">
                {submitted ? "Empanelment Received" : "Partner Hospital & Doctor Registration"}
              </h3>
              <p className="text-xs text-amber-300">
                Join the Adityam Niramayaa Verified Network
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <p className="text-xs text-[#5B6B82] leading-relaxed">
              Register your healthcare facility or independent clinic. Our clinical empanelment board will reach out within 24 hours to finalize integration.
            </p>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Institution / Clinic / Doctor Name
              </label>
              <input
                type="text"
                required
                value={instName}
                onChange={(e) => setInstName(e.target.value)}
                placeholder="e.g. Mahaveer Eye & Surgical Hospital"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:border-[#2563EB] outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Facility Type
                </label>
                <select
                  value={instCategory}
                  onChange={(e) => setInstCategory(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white outline-none"
                >
                  <option value="Hospital">Multi-Specialty Hospital</option>
                  <option value="Clinic">Specialist Doctor Clinic</option>
                  <option value="Lab">NABL Diagnostic Lab</option>
                  <option value="Pharmacy">Licensed Pharmacy</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  City
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Mumbai / Delhi"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Medical Director / Contact Person
              </label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="e.g. Dr. Sudhir Singhal"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Official Phone / Mobile Number
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile or hospital board"
                maxLength={10}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 outline-none"
              />
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 leading-snug">
              ✨ <strong>Ethical Commitment:</strong> Empanelled partners agree to honor transparent fee schedules and support patient dignity without hidden referral commissions.
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#172554] hover:bg-[#2563EB] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
            >
              Submit Empanelment Application
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Application Received • Ref #AN-PARTNER-821
              </span>
              <h4 className="text-xl font-black text-[#0F172A] mt-2">
                Thank You, {contactName}!
              </h4>
              <p className="text-xs text-[#5B6B82] mt-1 max-w-sm mx-auto">
                Your partnership submission for <strong>{instName}</strong> has been logged. Our provider relations team will contact you at <strong>+91 {phone}</strong> within 24 hours.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-[#172554] text-white text-xs font-bold rounded-xl hover:bg-[#2563EB] cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

/* =========================================================================
   3. MUNI BLESSINGS & VISION MODAL
========================================================================= */
interface MuniVisionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MuniVisionModal({ isOpen, onClose }: MuniVisionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="bg-[#0B1B4D] text-white p-6 border-b-2 border-amber-400 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-amber-400 relative">
              <Image
                src="/images/muni_aditya_blessing_aura.jpg"
                alt="Muni Aditya Sagar Ji Maharaj"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-black text-amber-300">
                Param Pujya Muni 108 Aditya Sagar Ji Maharaj
              </h3>
              <p className="text-xs text-slate-300 font-medium">
                The Guiding Light Behind Adityam Niramayaa (आदित्यम् अनुकम्पा)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">

          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-amber-950 italic">
            &ldquo;In Jain philosophy, Karuna (अनुकम्पा - Compassion) is not merely a sentiment; it is active service (सेवा) that uplifts the suffering and restores human dignity. May this initiative banish fear, exploitation, and hardship from healthcare.&rdquo;
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-extrabold text-[#0F172A] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>The Founding Story & Vision of Abhishek Jain</span>
            </h4>
            <p>
              Under the benevolent blessings of <strong>Muni Aditya Sagar Ji Maharaj</strong>, healthcare entrepreneur <strong>Abhishek Jain</strong> witnessed firsthand the distress faced by families navigating arbitrary medical costs, lack of bed transparency during emergencies, and the loss of dignity in commercial hospitals.
            </p>
            <p>
              <strong>Adityam Niramayaa</strong> was conceived as a non-commercial, community-first aggregator to unite doctors, diagnostic chains, and charitable hospitals into one bonded charter of ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-[#2563EB] block text-xs">1. Compassion</span>
              <p className="text-[11px] text-slate-500 mt-1">
                Zero patient left unattended. Compassionate patient escort at all partner hospitals.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-[#0D9488] block text-xs">2. Transparency</span>
              <p className="text-[11px] text-slate-500 mt-1">
                Clear pre-disclosed tariffs with zero secret kickbacks or inflated drug bills.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-[#059669] block text-xs">3. Satvik Care</span>
              <p className="text-[11px] text-slate-500 mt-1">
                Upholding pure, vegetarian dietary vows during stressful hospital recovery.
              </p>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200 text-xs text-blue-900 space-y-1">
            <strong>Universal Vision:</strong> While deeply rooted in Jain community traditions and unity, Adityam Niramayaa serves every soul in society with equal warmth and reverence.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#172554] hover:bg-[#2563EB] text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

/* =========================================================================
   4. APP DOWNLOAD MODAL (Direct QR Code)
========================================================================= */
interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppDownloadModal({ isOpen, onClose }: AppDownloadModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 text-center space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mx-auto shadow-xs">
          <QrCode className="w-6 h-6" />
        </div>

        <div>
          <h3 className="text-lg font-black text-[#0F172A]">
            Get Adityam Niramayaa App
          </h3>
          <p className="text-xs text-[#5B6B82] mt-0.5">
            Scan below to install instantly on Android & iOS
          </p>
        </div>

        {/* QR Box */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center justify-center">
          <div className="w-44 h-44 relative flex items-center justify-center bg-white rounded-xl shadow-xs border border-slate-200">
            <QrCode className="w-36 h-36 text-[#172554]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-black text-xs shadow-md">
                AN
              </span>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-slate-500 mt-2">
            Compatible with iOS 15+ and Android 9+
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-xl shadow-md transition-all"
        >
          Done
        </button>
      </div>
    </div>
  );
}
