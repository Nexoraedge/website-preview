"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Building2,
  Stethoscope,
  Video,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MapPin,
  ChevronRight,
  FileCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/useLanguage";

const AVAILABLE_DOCTORS = [
  { nameEn: "Dr. Rajesh K. Jain", specialtyEn: "Cardiology (Heart)", fee: 950, original: 1500, hospital: "Arihant Super Specialty, Delhi NCR" },
  { nameEn: "Dr. Sunita Shah", specialtyEn: "Orthopedics & Spine", fee: 800, original: 1200, hospital: "Mahaveer Multi-Specialty, Mumbai" },
  { nameEn: "Dr. Amitesh Mehta", specialtyEn: "Pediatrics (Child Care)", fee: 650, original: 1000, hospital: "CKS Hospital Campus, Jaipur" },
  { nameEn: "Dr. Priya Parekh", specialtyEn: "Women's Health (Gynec)", fee: 750, original: 1100, hospital: "Aadityam Health Pavilion, Indore" },
  { nameEn: "Dr. Harish Gupta", specialtyEn: "General Medicine & Diabetes", fee: 550, original: 800, hospital: "Shanti Multi-Specialty, Jaipur" },
  { nameEn: "Vaidya Ananya Trivedi", specialtyEn: "Ayurveda & Panchakarma", fee: 600, original: 900, hospital: "Adityam Holistic Center, Bengaluru" },
  { nameEn: "Dr. Naman Sogani", specialtyEn: "ENT & Micro-Surgery", fee: 650, original: 1000, hospital: "Jain ENT Hospital, Jaipur" },
];

function BookingContent() {
  const [lang, setLang] = useLanguage();
  const searchParams = useSearchParams();

  const paramDoctor = searchParams.get("doctor");
  const paramSpecialty = searchParams.get("specialty");
  const paramMode = searchParams.get("mode");

  const [selectedDoctor, setSelectedDoctor] = useState(
    paramDoctor || "Dr. Rajesh K. Jain"
  );
  const [consultType, setConsultType] = useState<"clinic" | "video">(
    paramMode === "video" ? "video" : "clinic"
  );
  const [selectedDate, setSelectedDate] = useState("Tomorrow");
  const [selectedSlot, setSelectedSlot] = useState("10:30 AM");
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [city, setCity] = useState("Jaipur");

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const activeDoc =
    AVAILABLE_DOCTORS.find((d) => d.nameEn.toLowerCase() === selectedDoctor.toLowerCase()) ||
    AVAILABLE_DOCTORS[0];

  const savings = activeDoc.original - activeDoc.fee;
  const savingsPercent = Math.round((savings / activeDoc.original) * 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = "AN-OPD-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setBookingConfirmed(true);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#172554] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar lang={lang} onToggleLang={setLang} />

      <main className="flex-1">
        {/* ====================================================================
            2. HERO SECTION: DEDICATED CONSULTATION SCHEDULER
        ==================================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#172554] via-[#1E3A8A] to-[#172554] text-white pt-10 pb-16 lg:pt-14 lg:pb-20 px-4 sm:px-6">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb & Official Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-medium text-blue-200/80">
                <Link href="/" className="hover:text-white transition-colors">
                  {lang === "hi" ? "मुख्य पृष्ठ" : "Home"}
                </Link>
                <span>/</span>
                <Link href="/doctors" className="hover:text-white transition-colors">
                  {lang === "hi" ? "डॉक्टर परामर्श" : "Doctors"}
                </Link>
                <span>/</span>
                <span className="text-amber-300 font-semibold">
                  {lang === "hi" ? "अपॉइंटमेंट बुकिंग" : "Schedule Appointment"}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-amber-300 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>
                  {lang === "hi"
                    ? "पारदर्शी शुल्क • सीधा क्लिनिक प्रवेश"
                    : "Transparent Tariffs • Direct Clinic Entry"}
                </span>
              </div>
            </div>

            {/* Editorial Headline */}
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-serif text-white tracking-tight leading-[1.18]">
                {lang === "hi" ? (
                  <>
                    परामर्श समय निर्धारित करें। <br className="hidden sm:inline" />
                    <span className="italic font-serif text-amber-300">
                      निश्चित समय, पारदर्शी शुल्क।
                    </span>
                  </>
                ) : (
                  <>
                    Schedule Your Consultation. <br className="hidden sm:inline" />
                    <span className="italic font-serif text-amber-300">
                      Confirmed Slots, Honest Fees.
                    </span>
                  </>
                )}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-xl font-light">
                {lang === "hi"
                  ? "अस्पताल में लंबी कतारों से बचें। अपने विशेषज्ञ डॉक्टर का समय चुनें और रियायती संस्थागत दर पर परामर्श लें।"
                  : "Skip the hospital registration lines. Confirm your specialist visit with clear institutional pricing and direct arrival coordination."}
              </p>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. DEDICATED APPOINTMENT BOOKING FORM
        ==================================================================== */}
        <section className="relative -mt-6 z-20 px-4 sm:px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_20px_45px_rgba(23,37,84,0.08)] border border-slate-200/90">
              {!bookingConfirmed ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Select Consultation Mode */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
                      1. {lang === "hi" ? "परामर्श का माध्यम चुनें" : "Select Consultation Mode"}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setConsultType("clinic")}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                          consultType === "clinic"
                            ? "bg-[#172554] text-white border-[#172554] shadow-md shadow-blue-900/20"
                            : "bg-slate-50/70 hover:bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        <Building2
                          className={`w-5 h-5 shrink-0 ${consultType === "clinic" ? "text-amber-400" : "text-[#2563EB]"}`}
                        />
                        <div>
                          <div className="text-xs sm:text-sm font-bold">
                            {lang === "hi" ? "अस्पताल / क्लिनिक विज़िट" : "In-Clinic Visit"}
                          </div>
                          <div className="text-[11px] opacity-75 mt-0.5">
                            {lang === "hi" ? "अस्पताल में व्यक्तिगत परामर्श" : "Direct doctor consultation"}
                          </div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setConsultType("video")}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                          consultType === "video"
                            ? "bg-[#172554] text-white border-[#172554] shadow-md shadow-blue-900/20"
                            : "bg-slate-50/70 hover:bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        <Video
                          className={`w-5 h-5 shrink-0 ${consultType === "video" ? "text-amber-400" : "text-emerald-600]"}`}
                        />
                        <div>
                          <div className="text-xs sm:text-sm font-bold">
                            {lang === "hi" ? "ऑनलाइन वीडियो कॉल" : "Online Video Call"}
                          </div>
                          <div className="text-[11px] opacity-75 mt-0.5">
                            {lang === "hi" ? "घर बैठे विशेषज्ञ से बात करें" : "Consult from home via app"}
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Step 2: Choose Specialist Doctor */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
                      2. {lang === "hi" ? "विशेषज्ञ डॉक्टर चुनें" : "Select Specialist Doctor"}
                    </label>
                    <select
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all cursor-pointer"
                    >
                      {AVAILABLE_DOCTORS.map((doc) => (
                        <option key={doc.nameEn} value={doc.nameEn}>
                          {doc.nameEn} — {doc.specialtyEn} ({doc.hospital})
                        </option>
                      ))}
                    </select>

                    <div className="mt-3 p-3 bg-blue-50/70 rounded-xl border border-blue-150 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-700">
                        <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                        <span className="font-medium">{activeDoc.hospital}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-slate-400 line-through text-[11px]">₹{activeDoc.original}</span>
                        <span className="text-base font-black text-[#172554]">₹{activeDoc.fee}</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                          Save {savingsPercent}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Date & Time Slot Selection */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
                      3. {lang === "hi" ? "तारीख व समय चुनें" : "Select Date & Time Slot"}
                    </label>

                    {/* Date Pills */}
                    <div className="grid grid-cols-3 gap-2.5 mb-3">
                      {["Today", "Tomorrow", "Day After"].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setSelectedDate(d)}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                            selectedDate === d
                              ? "bg-[#172554] text-white border-[#172554]"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {d === "Today" ? (lang === "hi" ? "आज" : "Today") : d === "Tomorrow" ? (lang === "hi" ? "कल" : "Tomorrow") : (lang === "hi" ? "परसों" : "Day After")}
                        </button>
                      ))}
                    </div>

                    {/* Time Slot Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "06:00 PM", "07:15 PM"].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-2.5 px-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 ${
                            selectedSlot === slot
                              ? "bg-amber-400 text-slate-950 font-bold border-amber-400 shadow-xs"
                              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{slot}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Patient Details */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
                      4. {lang === "hi" ? "मरीज का विवरण" : "Patient Details"}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-2">
                        <label className="text-xs font-semibold text-slate-600 block mb-1">
                          {lang === "hi" ? "मरीज का पूरा नाम" : "Patient Full Name"} *
                        </label>
                        <input
                          type="text"
                          required
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          placeholder="e.g. Ramesh Kumar Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-600 block mb-1">
                          {lang === "hi" ? "आयु" : "Age"} *
                        </label>
                        <input
                          type="number"
                          required
                          min={1}
                          max={120}
                          value={patientAge}
                          onChange={(e) => setPatientAge(e.target.value)}
                          placeholder="e.g. 45"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-600 block mb-1">
                          {lang === "hi" ? "मोबाइल नंबर (SMS व टोकन हेतु)" : "Mobile Number (For Token & SMS)"} *
                        </label>
                        <div className="relative">
                          <span className="absolute left-3.5 top-3 text-sm text-slate-400 font-semibold">+91</span>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            value={patientPhone}
                            onChange={(e) => setPatientPhone(e.target.value)}
                            placeholder="10-digit mobile number"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-600 block mb-1">
                          {lang === "hi" ? "शहर" : "City"} *
                        </label>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="e.g. Jaipur"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Fee Summary Banner */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">
                        {lang === "hi" ? "संस्थागत रियायती दर" : "Pre-Fixed Institutional Fee"}
                      </span>
                      <span className="text-emerald-700 font-medium">
                        ✓ {lang === "hi" ? "कोई पंजीकरण या छिपा शुल्क नहीं • 7-दिन फॉलोअप शामिल" : "Zero registration markup • 7-day digital follow-up included"}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-slate-400 line-through mr-1.5">₹{activeDoc.original}</span>
                      <span className="text-2xl font-black text-[#172554]">₹{activeDoc.fee}</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#172554] hover:bg-[#1E3A8A] text-white text-sm font-bold shadow-lg shadow-blue-950/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Calendar className="w-5 h-5 text-amber-400" />
                    <span>{lang === "hi" ? "अपॉइंटमेंट पुष्टि करें" : "Confirm Appointment Slot"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                /* Confirmed Success State */
                <div className="py-10 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
                      {lang === "hi" ? "अपॉइंटमेंट पुष्टीकृत" : "Booking Confirmed"} • #{bookingRef}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 mt-4">
                      {lang === "hi" ? `अपॉइंटमेंट सफल, ${patientName}!` : `Booking Confirmed, ${patientName}!`}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 max-w-lg mx-auto font-light leading-relaxed">
                      {lang === "hi"
                        ? `आपका स्लॉट ${activeDoc.nameEn} के साथ पुष्ट हो चुका है। डिजिटल टोकन व अस्पताल का पता आपके फोन +91 ${patientPhone} पर भेज दिया गया है।`
                        : `Your slot with ${activeDoc.nameEn} is confirmed. A digital queue token with hospital map link has been dispatched to +91 ${patientPhone}.`}
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="max-w-md mx-auto bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left space-y-2.5 text-xs text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-400">{lang === "hi" ? "डॉक्टर:" : "Specialist:"}</span>
                      <span className="font-bold text-slate-900">{activeDoc.nameEn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{lang === "hi" ? "समय:" : "Slot:"}</span>
                      <span className="font-bold text-[#2563EB]">{selectedDate}, {selectedSlot}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{lang === "hi" ? "अस्पताल:" : "Hospital:"}</span>
                      <span className="font-semibold text-slate-800">{activeDoc.hospital}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{lang === "hi" ? "परामर्श प्रकार:" : "Consultation Type:"}</span>
                      <span className="font-bold capitalize">{consultType === "clinic" ? "In-Clinic Visit" : "Online Video Call"}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-2">
                      <span className="text-slate-400">{lang === "hi" ? "शुल्क (अस्पताल काउंटर पर देय):" : "Net Payable at Clinic:"}</span>
                      <span className="font-black text-slate-900 text-sm">₹{activeDoc.fee}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setBookingConfirmed(false);
                        setPatientName("");
                        setPatientPhone("");
                      }}
                      className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                    >
                      {lang === "hi" ? "अन्य अपॉइंटमेंट बुक करें" : "Book Another Slot"}
                    </button>
                    <Link
                      href="/doctors"
                      className="px-6 py-2.5 rounded-full bg-[#172554] hover:bg-[#1E3A8A] text-white text-xs font-bold transition-all shadow-md"
                    >
                      {lang === "hi" ? "डॉक्टर्स सूची देखें" : "View Doctors Directory"}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Global Universal Footer */}
      <Footer />
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center text-sm font-semibold text-slate-500">Loading booking portal...</div>}>
      <BookingContent />
    </Suspense>
  );
}
