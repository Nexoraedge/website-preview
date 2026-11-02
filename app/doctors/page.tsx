"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  Search,
  Filter,
  Building2,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  Activity,
  Layers,
  Award,
  UserCheck,
  Smartphone,
  Info,
  Check,
  Copy,
  AlertCircle,
  Loader2,
  GraduationCap,
  X,
  Languages,
  ArrowRight,
  Calendar,
  Heart,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import {
  translateDoctorName,
  translateSpecialty,
  translateQualification,
  translateHospitalName,
  translateCity,
  translateTiming,
  translateUiTerm,
} from "@/lib/hindiDictionary";
import { useLanguage } from "@/lib/useLanguage";

interface DoctorFromDb {
  id: string;
  hospital_id?: string;
  name: string;
  name_hi?: string;
  specialty: string;
  specialty_hi?: string;
  qualification: string;
  qualification_hi?: string;
  experience_years: number;
  rating: number;
  total_reviews: number;
  consultation_fee: number;
  discounted_fee: number;
  next_available_slot?: string;
  next_available_slot_hi?: string;
  avatar_url?: string;
  languages?: string[];
  opd_timing?: string;
  opd_timing_hi?: string;
  is_active?: boolean;
  featured?: boolean;
  hospitals?: {
    name: string;
    name_hi?: string;
    city: string;
    city_hi?: string;
    state?: string;
    address?: string;
  } | null;
}

export default function DoctorsPage() {
  const [lang, setLang] = useLanguage();
  const [doctors, setDoctors] = useState<DoctorFromDb[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedDocForModal, setSelectedDocForModal] = useState<DoctorFromDb | null>(null);

  // Form State for Doctor Registration
  const [formFullName, setFormFullName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formRegNumber, setFormRegNumber] = useState("");
  const [formSpecialty, setFormSpecialty] = useState("Cardiology");
  const [formQualification, setFormQualification] = useState("");
  const [formHospital, setFormHospital] = useState("");
  const [formCity, setFormCity] = useState("New Delhi");
  const [formExperience, setFormExperience] = useState("");
  const [formConsultModes, setFormConsultModes] = useState<string[]>(["in-clinic", "tele-consult"]);
  const [formBio, setFormBio] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [applicationId, setApplicationId] = useState("");
  const [copiedAppId, setCopiedAppId] = useState(false);

  // 1. Fetch live doctors from Supabase
  useEffect(() => {
    async function fetchDoctors() {
      try {
        setLoading(true);
        setFetchError("");
        const { data, error } = await supabase
          .from("doctors")
          .select("*, hospitals(name, name_hi, city, state, address)")
          .eq("is_active", true)
          .order("rating", { ascending: false });

        if (error) {
          throw new Error(error.message);
        }
        setDoctors(data || []);
      } catch (err: unknown) {
        console.error("Error fetching doctors from Supabase:", err);
        setFetchError(err instanceof Error ? err.message : "Failed to load doctors");
      } finally {
        setLoading(false);
      }
    }

    fetchDoctors();
  }, []);

  // 2. Extract distinct specialties & cities from Supabase data
  const dynamicSpecialties = useMemo(() => {
    const specs = Array.from(new Set(doctors.map((d) => d.specialty).filter(Boolean)));
    return specs.sort();
  }, [doctors]);

  const dynamicCities = useMemo(() => {
    const cities = Array.from(
      new Set(doctors.map((d) => d.hospitals?.city).filter((c): c is string => Boolean(c)))
    );
    return ["All Cities", ...cities.sort()];
  }, [doctors]);

  // 3. Filtered Doctors
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      // Specialty Filter
      if (selectedSpecialty !== "all" && doc.specialty !== selectedSpecialty) {
        return false;
      }
      // City Filter
      if (selectedCity !== "All Cities" && doc.hospitals?.city !== selectedCity) {
        return false;
      }
      // Search Filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = doc.name.toLowerCase().includes(q);
        const matchesSpecialty = doc.specialty.toLowerCase().includes(q);
        const matchesHospital = doc.hospitals?.name?.toLowerCase().includes(q);
        const matchesCity = doc.hospitals?.city?.toLowerCase().includes(q);
        return matchesName || matchesSpecialty || matchesHospital || matchesCity;
      }
      return true;
    });
  }, [doctors, selectedSpecialty, selectedCity, searchQuery]);

  const [favorites, setFavorites] = useState<string[]>([]);
  const toggleFavorite = (docId: string) => {
    setFavorites((prev) =>
      prev.includes(docId) ? prev.filter((id) => id !== docId) : [...prev, docId]
    );
  };

  const topDoctors = useMemo(() => {
    return filteredDoctors.slice(0, 8);
  }, [filteredDoctors]);

  const topDocsScrollRef = useRef<HTMLDivElement>(null);
  const scrollTopDocs = (direction: "left" | "right") => {
    if (topDocsScrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      topDocsScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleToggleConsultMode = (mode: string) => {
    if (formConsultModes.includes(mode)) {
      if (formConsultModes.length > 1) {
        setFormConsultModes(formConsultModes.filter((m) => m !== mode));
      }
    } else {
      setFormConsultModes([...formConsultModes, mode]);
    }
  };

  const handleDoctorRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!formFullName.trim()) {
      setSubmitError(lang === "hi" ? "कृपया अपना पूरा नाम दर्ज करें" : "Please enter your full name");
      return;
    }
    if (!formPhone.trim() || formPhone.replace(/\D/g, "").length < 10) {
      setSubmitError(lang === "hi" ? "कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें" : "Please enter a valid 10-digit mobile number");
      return;
    }
    if (!formEmail.trim() || !formEmail.includes("@")) {
      setSubmitError(lang === "hi" ? "कृपया वैध ईमेल पता दर्ज करें" : "Please enter a valid email address");
      return;
    }
    if (!formRegNumber.trim()) {
      setSubmitError(lang === "hi" ? "कृपया मेडिकल काउंसिल पंजीकरण संख्या दर्ज करें" : "Please enter your Medical Council Registration Number");
      return;
    }
    if (!formQualification.trim()) {
      setSubmitError(lang === "hi" ? "कृपया अपनी शैक्षणिक योग्यताएं दर्ज करें" : "Please provide your qualifications (e.g. MBBS, MD)");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/register-doctor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formFullName,
          email: formEmail,
          phone: formPhone,
          regNumber: formRegNumber,
          specialty: formSpecialty,
          qualification: formQualification,
          hospitalAffiliation: formHospital,
          city: formCity,
          experienceYears: formExperience,
          consultModes: formConsultModes,
          bio: formBio,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit registration");
      }

      setApplicationId(data.applicationId);
      setSubmitSuccess(true);
      // Reset form fields
      setFormFullName("");
      setFormEmail("");
      setFormPhone("");
      setFormRegNumber("");
      setFormQualification("");
      setFormHospital("");
      setFormExperience("");
      setFormBio("");
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAppId(true);
    setTimeout(() => setCopiedAppId(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#172554] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* 1. Global Navbar */}
      <Navbar lang={lang} onToggleLang={setLang} />

      <main className="flex-1">
        {/* ====================================================================
            2. HERO SECTION: REFINED LUXURY NAVY (CLEAN, COMPACT & ZERO WASTAGE)
        ==================================================================== */}
        <section className="relative overflow-hidden bg-[#0A1128] text-white pt-8 pb-10 sm:pt-10 sm:pb-12 px-4 sm:px-6 border-b border-white/10">
          {/* Subtle Ambient Radial Lighting Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.22),transparent_75%)] pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Breadcrumb & Register Link */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Link href="/" className="hover:text-white transition-colors">
                  {lang === "hi" ? "मुख्य पृष्ठ" : "Home"}
                </Link>
                <span className="text-slate-600">/</span>
                <span className="text-blue-300 font-bold">
                  {lang === "hi" ? "विशेषज्ञ डॉक्टर" : "Specialist Doctors"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200">
                  {lang === "hi" ? "100+ प्रमाणित डॉक्टर्स" : "100+ Verified Specialists"}
                </span>

                <a
                  href="#register-doctor"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all cursor-pointer backdrop-blur-md"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  <span>{lang === "hi" ? "डॉक्टर पंजीकरण " : "Register as Doctor "}</span>
                </a>
              </div>
            </div>

            {/* Headline and Short Subtitle: Concise, Punchy, Premium */}
            <div className="max-w-2xl">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
                {lang === "hi" ? (
                  <>विश्वसनीय विशेषज्ञ डॉक्टर्स। पूर्व-निर्धारित पारदर्शी दरें।</>
                ) : (
                  <>Find Verified Specialist Doctors.</>
                )}
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {lang === "hi"
                  ? "एम्स व प्रमुख संस्थानों के प्रतिष्ठित डॉक्टर्स से सीधा परामर्श। पारदर्शी दरें और त्वरित ओपीडी सहायता।"
                  : "Consult senior medical specialists across leading hospitals at pre-fixed fair rates with zero commission markups."}
              </p>

              {/* Minimalist Single-Line Pills */}
              <div className="flex flex-wrap gap-2 mt-3.5 text-[11px] text-slate-300">
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  ✔ 100% Medical Council Verified
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  ✔ Fair Tariffs Guaranteed
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  ✔ Priority Hospital OPD Slots
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. SHOWCASE FILTER STATION
        ==================================================================== */}
        <section className="relative -mt-6 z-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-[0_15px_35px_rgba(23,37,84,0.08)] border border-slate-200/80">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                {/* Search Input Box */}
                <div className="md:col-span-8 relative">
                  <div className="relative flex items-center">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={
                        lang === "hi"
                          ? "डॉक्टर का नाम, विशेषता या अस्पताल खोजें..."
                          : "Search doctor name, medical specialty or affiliated hospital..."
                      }
                      className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200/90 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* Dynamic City Selector */}
                <div className="md:col-span-4">
                  <div className="relative flex items-center">
                    <MapPin className="w-4 h-4 text-amber-500 absolute left-3.5 pointer-events-none" />
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 rounded-xl bg-slate-50 border border-slate-200/90 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] cursor-pointer appearance-none transition-all"
                    >
                      {dynamicCities.map((c) => (
                        <option key={c} value={c}>
                          {c === "All Cities" ? (lang === "hi" ? "सभी शहर (All Cities)" : "All Cities") : (lang === "hi" ? translateCity(c, undefined, "hi") : c)}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3.5 pointer-events-none text-slate-400 text-xs">▼</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. DYNAMIC SPECIALTY CHIPS (FROM SUPABASE)
        ==================================================================== */}
        <section className="py-6 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-3.5">
              <h2 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#2563EB]" />
                <span>{lang === "hi" ? "विशेषज्ञता अनुसार देखें" : "Showcase by Clinical Specialty"}</span>
              </h2>
              <span className="text-xs font-semibold text-slate-500">
                {filteredDoctors.length} {lang === "hi" ? "विशेषज्ञ उपलब्ध" : "Specialists Found"}
              </span>
            </div>

            <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none select-none">
              <button
                type="button"
                onClick={() => setSelectedSpecialty("all")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${selectedSpecialty === "all"
                  ? "bg-[#172554] text-white shadow-md border border-[#172554]"
                  : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-2xs"
                  }`}
              >

                <span>{lang === "hi" ? "सभी विशेषज्ञ" : "All Specialists"}</span>
              </button>

              {dynamicSpecialties.map((spec) => {
                const isSelected = selectedSpecialty === spec;
                return (
                  <button
                    key={spec}
                    type="button"
                    onClick={() => setSelectedSpecialty(spec)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${isSelected
                      ? "bg-[#172554] text-white shadow-md border border-[#172554]"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-2xs"
                      }`}
                  >
                    <span>{lang === "hi" ? translateSpecialty(spec, undefined, "hi") : spec}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            5. DOCTORS DIRECTORY: TOP DOCTORS (BLUE) + ALL SPECIALISTS (WHITE)
        ==================================================================== */}
        <section className="pb-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-12">
            {loading ? (
              <div className="py-20 text-center">
                <Loader2 className="w-10 h-10 animate-spin text-[#2563EB] mx-auto mb-3" />
                <p className="text-sm font-semibold text-slate-600">
                  {lang === "hi" ? "सुप्रीम डेटाबेस से विशेषज्ञ लोड हो रहे हैं..." : "Loading empanelled specialists from Supabase..."}
                </p>
              </div>
            ) : fetchError ? (
              <div className="bg-rose-50 rounded-3xl p-8 text-center border border-rose-200 max-w-lg mx-auto">
                <AlertCircle className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                <h3 className="text-base font-bold text-rose-900">Unable to load doctors</h3>
                <p className="text-xs text-rose-700 mt-1">{fetchError}</p>
              </div>
            ) : filteredDoctors.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-200">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === "hi" ? "कोई विशेषज्ञ नहीं मिला" : "No Specialists Found"}
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  {lang === "hi"
                    ? "कृपया अपनी खोज या फ़िल्टर बदलकर पुनः प्रयास करें।"
                    : "Try clearing your search terms or choosing 'All Specialists'."}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedSpecialty("all");
                    setSelectedCity("All Cities");
                  }}
                  className="mt-5 px-5 py-2.5 rounded-full bg-[#172554] text-white text-xs font-bold shadow-md hover:bg-[#1E3A8A] transition-all cursor-pointer"
                >
                  {lang === "hi" ? "सभी विशेषज्ञ देखें" : "View All Specialists"}
                </button>
              </div>
            ) : (
              <>
                {/* -------------------------------------------------------------
                    SECTION A: TOP DOCTORS (BLUE CARD STYLE FROM IMAGE 2)
                -------------------------------------------------------------- */}
                {topDoctors.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                          {lang === "hi" ? "शीर्ष विशेषज्ञ डॉक्टर" : "Top Doctors"}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => scrollTopDocs("left")}
                          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                          aria-label="Scroll left"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => scrollTopDocs("right")}
                          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                          aria-label="Scroll right"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        <span className="text-xs font-medium text-slate-400 ml-1">
                          {lang === "hi" ? "एक्सप्लोर करें" : "Swipe to explore"}
                        </span>
                      </div>
                    </div>

                    {/* Dedicated Horizontal Scroll Track (Desktop & Mobile) */}
                    <div
                      ref={topDocsScrollRef}
                      className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none scroll-smooth select-none"
                    >
                      {topDoctors.map((doc) => {
                        const avatarSrc = doc.avatar_url || "/images/doctor_consultation.jpg";
                        const isFav = favorites.includes(doc.id);
                        const fee = doc.discounted_fee || doc.consultation_fee || 600;
                        const docName = translateDoctorName(doc.name, doc.name_hi, lang);
                        const specialtyName = translateSpecialty(doc.specialty, doc.specialty_hi, lang);
                        const qualificationName = translateQualification(doc.qualification, doc.qualification_hi, lang);
                        const experienceStr = lang === "hi" ? `${doc.experience_years} वर्ष अनुभव` : `${doc.experience_years} yrs experience`;
                        const reviewsStr = lang === "hi" ? `(${doc.total_reviews} समीक्षाएं)` : `(${doc.total_reviews} reviews)`;

                        return (
                          <div
                            key={doc.id}
                            className="w-[315px] sm:w-[350px] shrink-0 snap-start rounded-[28px] bg-gradient-to-br from-[#1E56D8] via-[#1A4DC8] to-[#1442B0] text-white p-5 shadow-lg shadow-blue-900/15 border border-white/10 flex flex-col justify-between"
                          >
                            {/* Top Row: Photo on Left + Info on Right */}
                            <div className="flex gap-3.5 items-start">
                              {/* Doctor Photo with Verified Tick */}
                              <div
                                onClick={() => setSelectedDocForModal(doc)}
                                className="relative w-28 h-32 rounded-2xl overflow-hidden shrink-0 bg-blue-950/40 border border-white/20 shadow-md cursor-pointer group"
                              >
                                <Image
                                  src={avatarSrc}
                                  alt={doc.name}
                                  fill
                                  sizes="128px"
                                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                />
                                {/* Verified Tick Circle Badge */}
                                <div className="absolute bottom-1.5 right-1.5 w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center border-2 border-white shadow-xs">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                </div>
                              </div>

                              {/* Doctor Details */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-1">
                                  <h3
                                    onClick={() => setSelectedDocForModal(doc)}
                                    className="text-base sm:text-lg font-black text-white leading-tight truncate hover:text-blue-200 cursor-pointer transition-colors"
                                  >
                                    {docName}
                                  </h3>
                                  <button
                                    type="button"
                                    onClick={() => toggleFavorite(doc.id)}
                                    aria-label="Save doctor"
                                    className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                                  >
                                    <Heart className={`w-4 h-4 ${isFav ? "fill-rose-400 text-rose-400" : ""}`} />
                                  </button>
                                </div>

                                <p className="text-xs font-semibold text-blue-100 mt-0.5 truncate">
                                  {specialtyName}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-1 text-xs font-bold text-white mt-1">
                                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                                  <span>{doc.rating}</span>
                                  <span className="text-blue-200 font-normal text-[11px]">
                                    {reviewsStr}
                                  </span>
                                </div>

                                {/* Translucent Qualification & Experience Box */}
                                <div className="mt-2 p-2 rounded-xl bg-white/15 backdrop-blur-xs border border-white/10 text-[11px] leading-tight">
                                  <div className="text-white font-medium truncate">
                                    {qualificationName}
                                  </div>
                                  <div className="text-blue-100 font-normal mt-0.5">
                                    {experienceStr}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Bottom Action Row: Call Circle + Profile Button + Book Appointment White Pill */}
                            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/15">
                              <a
                                href="tel:18002081008"
                                className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-[#1E56D8] flex items-center justify-center shadow-md transition-all shrink-0 cursor-pointer"
                                title={lang === "hi" ? "हेल्पलाइन कॉल करें" : "Call Care Helpline"}
                              >
                                <PhoneCall className="w-4 h-4" />
                              </a>

                              <button
                                type="button"
                                onClick={() => setSelectedDocForModal(doc)}
                                className="px-3.5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xs border border-white/25 transition-all flex items-center gap-1 cursor-pointer shrink-0"
                              >
                                <Info className="w-3.5 h-3.5 text-blue-200" />
                                <span>{lang === "hi" ? "विवरण" : "Profile"}</span>
                              </button>

                              <Link
                                href="/get-app"
                                className="flex-1 py-2.5 px-3 rounded-full bg-white hover:bg-slate-50 text-[#172554] font-black text-xs sm:text-sm shadow-md transition-all text-center flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap truncate"
                              >
                                <span>{lang === "hi" ? `बुक • ₹${fee}` : `Book • ₹${fee}`}</span>
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* -------------------------------------------------------------
                    SECTION B: ALL SPECIALISTS IN NETWORK (WHITE CARDS - GRID OF 3)
                -------------------------------------------------------------- */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {lang === "hi" ? "नेटवर्क के सभी विशेषज्ञ" : "All Specialists in Network"}
                    </h2>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                      {filteredDoctors.length} {lang === "hi" ? "डॉक्टर्स" : "Doctors"}
                    </span>
                  </div>

                  {/* Grid of 3 on Desktop (1 on Mobile, 2 on Tablet, 3 on Desktop) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredDoctors.map((doc) => {
                      const avatarSrc = doc.avatar_url || "/images/doctor_consultation.jpg";
                      const rawHospitalName = doc.hospitals?.name || "Empanelled Network Hospital";
                      const rawCityName = doc.hospitals?.city || "Delhi NCR";
                      const hospitalName = translateHospitalName(rawHospitalName, doc.hospitals?.name_hi, lang);
                      const cityName = translateCity(rawCityName, doc.hospitals?.city_hi, lang);
                      const docName = translateDoctorName(doc.name, doc.name_hi, lang);
                      const specialtyName = translateSpecialty(doc.specialty, doc.specialty_hi, lang);
                      const qualificationName = translateQualification(doc.qualification, doc.qualification_hi, lang);
                      const isFav = favorites.includes(doc.id);
                      const originalFee = doc.consultation_fee || 1000;
                      const discountedFee = doc.discounted_fee || originalFee;
                      const discountPercent =
                        originalFee > discountedFee
                          ? Math.round(((originalFee - discountedFee) / originalFee) * 100)
                          : 25;
                      const expStr = lang === "hi" ? `${doc.experience_years} वर्ष अनुभव` : `${doc.experience_years} yrs exp`;
                      const reviewsStr = lang === "hi" ? `(${doc.total_reviews} समीक्षाएं)` : `(${doc.total_reviews})`;

                      return (
                        <div
                          key={doc.id}
                          className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-all flex flex-col justify-between"
                        >
                          {/* Top Row: Left Photo + Right Information */}
                          <div className="flex gap-3 sm:gap-3.5 items-start">
                            {/* Doctor Photo */}
                            <div
                              onClick={() => setSelectedDocForModal(doc)}
                              className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200 shadow-xs cursor-pointer group"
                            >
                              <Image
                                src={avatarSrc}
                                alt={doc.name}
                                fill
                                sizes="96px"
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>

                            {/* Doctor Details */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-1">
                                <h3
                                  onClick={() => setSelectedDocForModal(doc)}
                                  className="text-base font-black text-slate-900 leading-snug truncate hover:text-blue-600 cursor-pointer transition-colors"
                                >
                                  {docName}
                                </h3>
                                <button
                                  type="button"
                                  onClick={() => toggleFavorite(doc.id)}
                                  aria-label="Save doctor"
                                  className="w-7 h-7 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-rose-500 flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                                >
                                  <Heart className={`w-3.5 h-3.5 ${isFav ? "fill-rose-500 text-rose-500" : ""}`} />
                                </button>
                              </div>

                              {/* Hospital & Location */}
                              <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 truncate">
                                {hospitalName} • {cityName}
                              </p>

                              {/* Specialty & Experience in Blue */}
                              <p className="text-xs sm:text-[13px] font-bold text-blue-600 mt-0.5 truncate">
                                {specialtyName} • {expStr}
                              </p>

                              {/* Qualification */}
                              <p className="text-[11px] text-slate-500 mt-0.5 truncate font-normal">
                                {qualificationName}
                              </p>

                              {/* Rating */}
                              <div className="flex items-center gap-1 text-xs font-bold text-slate-800 mt-1">
                                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                                <span>{doc.rating}</span>
                                <span className="text-slate-400 font-normal text-[11px]">
                                  {reviewsStr}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Bottom Row: Pricing & Book Action */}
                          <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                            <div>
                              <div className="flex items-baseline gap-1">
                                <span className="text-[11px] text-slate-400 line-through">₹{originalFee}</span>
                                <span className="text-xs sm:text-[13px] font-black text-emerald-600">
                                  {lang === "hi" ? `शुल्क ₹${discountedFee}` : `Pay ₹${discountedFee}`}
                                </span>
                              </div>
                              <span className="text-[10px] text-blue-600 font-semibold block mt-0.5">
                                {lang === "hi" ? `ऐप भुगतान पर ${discountPercent}% बचत` : `Save ${discountPercent}% with in-app pay`}
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              <button
                                type="button"
                                onClick={() => setSelectedDocForModal(doc)}
                                className="px-2.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                              >
                                {lang === "hi" ? "विवरण" : "Profile"}
                              </button>
                              <Link
                                href="/get-app"
                                className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm hover:shadow transition-all inline-flex items-center gap-1 cursor-pointer whitespace-nowrap"
                              >
                                <span>{lang === "hi" ? "बुक करें" : "Book"}</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        {/* ====================================================================
            6. MODAL: DETAILED CLINICAL CREDENTIALS POPUP
        ==================================================================== */}
        {selectedDocForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setSelectedDocForModal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 border shrink-0">
                  <Image
                    src={selectedDocForModal.avatar_url || "/images/doctor_consultation.jpg"}
                    alt={selectedDocForModal.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2563EB]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{translateUiTerm("Empanelled Specialist", lang)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {translateDoctorName(selectedDocForModal.name, selectedDocForModal.name_hi, lang)}
                  </h3>
                  <p className="text-xs text-[#2563EB] font-semibold">
                    {translateSpecialty(selectedDocForModal.specialty, selectedDocForModal.specialty_hi, lang)}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700 leading-relaxed border-t border-b border-slate-150 py-4 my-2">
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">
                    {lang === "hi" ? "शैक्षणिक पृष्ठभूमि एवं योग्यता:" : "Academic Pedigree & Degrees:"}
                  </span>
                  <p className="text-slate-600">
                    {translateQualification(selectedDocForModal.qualification, selectedDocForModal.qualification_hi, lang)}
                  </p>
                </div>

                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">
                    {lang === "hi" ? "संबद्ध अस्पताल एवं स्थान:" : "Hospital Affiliation:"}
                  </span>
                  <p className="text-slate-600">
                    {translateHospitalName(selectedDocForModal.hospitals?.name, selectedDocForModal.hospitals?.name_hi, lang)} (
                    {translateCity(selectedDocForModal.hospitals?.city, selectedDocForModal.hospitals?.city_hi, lang)})
                  </p>
                </div>

                {selectedDocForModal.opd_timing && (
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">
                      {lang === "hi" ? "ओपीडी परामर्श समय:" : "Institutional OPD Schedule:"}
                    </span>
                    <p className="text-slate-600 font-medium">
                      {translateTiming(selectedDocForModal.opd_timing, selectedDocForModal.opd_timing_hi, lang)}
                    </p>
                  </div>
                )}

                {selectedDocForModal.languages && (
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">
                      {lang === "hi" ? "परामर्श की भाषाएं:" : "Languages Spoken:"}
                    </span>
                    <p className="text-slate-600">{selectedDocForModal.languages.join(", ")}</p>
                  </div>
                )}
              </div>

              <div className="bg-amber-50 rounded-2xl p-3 border border-amber-200 text-amber-900 text-xs mb-4">
                <span className="font-bold block mb-1">
                  {lang === "hi" ? "परामर्श कैसे प्राप्त करें?" : "How to Consult this Specialist?"}
                </span>
                {lang === "hi"
                  ? "आदित्यम् निरामया मोबाइल ऐप डाउनलोड करें या सीधे हमारे संबद्ध अस्पताल के आदित्यम् केयर काउंटर पर संपर्क करें।"
                  : "Appointments and consultations with this specialist are accessed via the Adityam Niramayaa Mobile App or directly at our hospital on-site Adityam Care Desk."}
              </div>

              <div className="flex gap-2">
                <Link
                  href="/get-app"
                  className="flex-1 py-3 rounded-xl bg-[#172554] hover:bg-[#1E3A8A] text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <Smartphone className="w-4 h-4 text-amber-300" />
                  <span>{lang === "hi" ? "मोबाइल ऐप डाउनलोड करें" : "Download App to Consult"}</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedDocForModal(null)}
                  className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                >
                  {lang === "hi" ? "बंद करें" : "Close"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ====================================================================
            7. WHY TOP SPECIALISTS PARTNER WITH ADITYAM NIRAMAYAA
        ==================================================================== */}
        <section className="py-14 bg-white border-t border-slate-200/90 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {lang === "hi" ? "चिकित्सक भागीदारी सिद्धांत" : "Clinical Faculty Charter"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mt-2">
                {lang === "hi" ? "वरिष्ठ चिकित्सक आदित्यम् से क्यों जुड़ते हैं?" : "Why Leading Doctors Join Our Faculty?"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-light">
                {lang === "hi"
                  ? "व्यावसायिक दबावों से मुक्त, विशुद्ध चिकित्सा धर्म और समर्पित रोगी सेवा का प्रतिष्ठित मंच।"
                  : "An uncompromised medical platform free from corporate referral cuts and commercial targets."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  titleEn: "Zero Referral Commissions",
                  titleHi: "शून्य कट-कमीशन प्रथा",
                  descEn: "100% ethical integrity. No kickbacks for investigations or pharma prescriptions.",
                  descHi: "बिना किसी बिचौलिया कटौती के पारदर्शी और गौरवपूर्ण चिकित्सीय स्वायत्तता।",
                },
                {
                  step: "02",
                  titleEn: "Pre-Screened Patient Profiles",
                  titleHi: "सुव्यवस्थित डिजिटल प्रोफाइल",
                  descEn: "Organized medical records and history delivered before consultation.",
                  descHi: "परामर्श से पूर्व व्यवस्थित मेडिकल हिस्ट्री व जांच रिपोर्ट उपलब्ध कराई जाती हैं।",
                },
                {
                  step: "03",
                  titleEn: "Institutional Desk Support",
                  titleHi: "अस्पताल केयर डेस्क सहायता",
                  descEn: "Dedicated on-site Adityam executives coordinate OPD queues, ensuring calm clinic flow.",
                  descHi: "हमारे समर्पित केयर एग्जीक्यूटिव अस्पताल में कतार व कागजी कार्रवाई का प्रबंधन करते हैं।",
                },
                {
                  step: "04",
                  titleEn: "Inter-Disciplinary Board",
                  titleHi: "वरिष्ठ विशेषज्ञों का साझा मंच",
                  descEn: "Collaborate with distinguished super-specialists across top medical institutions.",
                  descHi: "जटिल मामलों में देश भर के शीर्ष विशेषज्ञों के साथ परामर्श व केस चर्चा की सुविधा।",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all transform-gpu hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300">{item.step}</span>
                    <div className="px-2.5 py-1 rounded-full text-[11px] font-bold border bg-blue-50 text-[#2563EB] border-blue-200">
                      {lang === "hi" ? "आदित्यम् सिद्धांत" : "Adityam Principle"}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {lang === "hi" ? item.titleHi : item.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {lang === "hi" ? item.descHi : item.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            8. DOCTOR REGISTRATION FORM (SAVES TO SUPABASE)
        ==================================================================== */}
        <section id="register-doctor" className="py-16 bg-[#F1F5F9] px-4 sm:px-6 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-[#2563EB] text-xs font-bold mb-3 border border-blue-200">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{lang === "hi" ? "विशेषज्ञ डॉक्टर पंजीकरण" : "Physician Empanelment Portal"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif text-slate-900 font-bold tracking-tight">
                {lang === "hi" ? "आदित्यम् विशेषज्ञ नेटवर्क से जुड़ें" : "Register as an Empanelled Specialist"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {lang === "hi"
                  ? "यदि आप एक योग्य, समर्पित विशेषज्ञ डॉक्टर हैं, तो हमारे पारदर्शी नेटवर्क में शामिल होने हेतु आवेदन करें। आपका आवेदन सीधे हमारे मेडिकल बोर्ड द्वारा समीक्षित होगा।"
                  : "Join our collective of verified clinicians committed to transparent patient care. Submit your credentials below for review by our Clinical Board."}
              </p>
            </div>

            {/* Submission Status Alerts */}
            {submitSuccess ? (
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-200 shadow-xl text-center animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 border-2 border-emerald-300">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {lang === "hi" ? "पंजीकरण आवेदन सफलतापूर्वक प्राप्त हुआ!" : "Application Received Successfully!"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg mx-auto">
                  {lang === "hi"
                    ? "आदित्यम् निरामया के मेडिकल बोर्ड को आपका विवरण प्राप्त हो गया है। हमारी टीम 24 से 48 घंटे के भीतर आपकी काउंसिल क्रेडेंशियल्स का सत्यापन कर आपसे संपर्क करेगी।"
                    : "Thank you for applying to the Adityam Niramayaa Specialist Faculty. Our Clinical Governance Committee will verify your credentials and connect within 24 to 48 hours."}
                </p>

                {/* Application Reference ID Badge */}
                <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-left">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">
                      {lang === "hi" ? "आवेदन संदर्भ संख्या" : "Application Reference No."}
                    </span>
                    <span className="text-base sm:text-lg font-black text-[#172554] tracking-wide font-mono">
                      {applicationId}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(applicationId)}
                    className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-all cursor-pointer"
                    title="Copy Reference ID"
                  >
                    {copiedAppId ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 text-left max-w-2xl mx-auto">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-150 text-xs">
                    <span className="font-bold text-[#2563EB] block mb-1">Step 1: Verification</span>
                    <p className="text-slate-600 text-[11px]">Medical Council Registration & degree validation.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-150 text-xs">
                    <span className="font-bold text-[#2563EB] block mb-1">Step 2: Onboarding</span>
                    <p className="text-slate-600 text-[11px]">OPD schedule setup and hospital desk linking.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-150 text-xs">
                    <span className="font-bold text-[#2563EB] block mb-1">Step 3: App Publishing</span>
                    <p className="text-slate-600 text-[11px]">Profile made active for patients on the mobile app.</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-150">
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 rounded-full bg-[#172554] hover:bg-[#1E3A8A] text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    {lang === "hi" ? "अन्य चिकित्सक का पंजीकरण करें" : "Register Another Doctor Profile"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-[0_15px_40px_rgba(23,37,84,0.08)]">
                {submitError && (
                  <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-800 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{submitError}</span>
                  </div>
                )}

                <form onSubmit={handleDoctorRegisterSubmit} className="space-y-6">
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "पूरा नाम (डॉक्टर)" : "Doctor Full Name"} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formFullName}
                        onChange={(e) => setFormFullName(e.target.value)}
                        placeholder="Dr. Rajesh Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "आधिकारिक ईमेल पता" : "Official Email Address"}{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="dr.rajesh@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Council Reg Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "मोबाइल / व्हाट्सऐप नंबर" : "Contact Mobile / WhatsApp"}{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "मेडिकल काउंसिल रजिस्ट्रेशन संख्या" : "Medical Council Registration No."}{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formRegNumber}
                        onChange={(e) => setFormRegNumber(e.target.value)}
                        placeholder="MCI / DMC / RMC-12345"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Specialty & Qualifications */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "प्राथमिक विशेषज्ञता" : "Primary Medical Specialty"}{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formSpecialty}
                        onChange={(e) => setFormSpecialty(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all"
                      >
                        <option value="Cardiology">Cardiology (हृदय रोग)</option>
                        <option value="Orthopedics">Orthopedics & Spine (हड्डी व जोड़)</option>
                        <option value="Pediatrics">Pediatrics & Neonatology (बाल रोग)</option>
                        <option value="Obstetrics & Gynecology">Obstetrics & Gynecology (स्त्री रोग)</option>
                        <option value="General Medicine">General Medicine / Physician (फिजिशियन)</option>
                        <option value="ENT">ENT & Head Neck Surgery (कान नाक गला)</option>
                        <option value="Neurology">Neurology / Neurosurgery (न्यूरोलॉजी)</option>
                        <option value="Dentistry">Dentistry (दंत रोग)</option>
                        <option value="Laparoscopic Surgery">Laparoscopic Surgery (शल्यचिकित्सा)</option>
                        <option value="Dermatology">Dermatology (त्वचा रोग)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "शैक्षणिक डिग्री व संस्थान" : "Highest Degrees & Alma Mater"}{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formQualification}
                        onChange={(e) => setFormQualification(e.target.value)}
                        placeholder="MBBS, MD, DM (AIIMS New Delhi)"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 4: Hospital Affiliation, City & Experience */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "संबद्ध अस्पताल / क्लिनिक" : "Hospital / Clinic Name"}
                      </label>
                      <input
                        type="text"
                        value={formHospital}
                        onChange={(e) => setFormHospital(e.target.value)}
                        placeholder="e.g. Jain ENT Hospital"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "अभ्यास का शहर" : "City of Practice"} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formCity}
                        onChange={(e) => setFormCity(e.target.value)}
                        placeholder="e.g. New Delhi, Gurugram"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "कुल अनुभव (वर्ष)" : "Experience (Years)"}
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="60"
                        value={formExperience}
                        onChange={(e) => setFormExperience(e.target.value)}
                        placeholder="e.g. 15"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all"
                      />
                    </div>
                  </div>

                  {/* Consultation Modes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-2">
                      {lang === "hi" ? "परामर्श के माध्यम" : "Available Consultation Modes"}
                    </label>
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => handleToggleConsultMode("in-clinic")}
                        className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer ${formConsultModes.includes("in-clinic")
                          ? "bg-[#172554] text-white border-[#172554]"
                          : "bg-slate-50 text-slate-700 border-slate-200"
                          }`}
                      >
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{lang === "hi" ? "अस्पताल / क्लिनिक में ओपीडी" : "In-Clinic / Hospital OPD"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleToggleConsultMode("tele-consult")}
                        className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer ${formConsultModes.includes("tele-consult")
                          ? "bg-[#172554] text-white border-[#172554]"
                          : "bg-slate-50 text-slate-700 border-slate-200"
                          }`}
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>{lang === "hi" ? "मोबाइल ऐप टेली-परामर्श" : "Tele-Consultation on App"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Clinical Bio / Notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      {lang === "hi" ? "संक्षिप्त परिचय / क्लिनिकल विशेषज्ञता" : "Brief Profile / Clinical Expertise Highlights"}
                    </label>
                    <textarea
                      rows={3}
                      value={formBio}
                      onChange={(e) => setFormBio(e.target.value)}
                      placeholder={
                        lang === "hi"
                          ? "अपनी प्रमुख प्रक्रियाओं, फेलोशिप या विशेष नैदानिक रुचि का संक्षिप्त विवरण लिखें..."
                          : "Mention your key procedures, fellowships, or special clinical interests..."
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl bg-[#172554] hover:bg-[#1E3A8A] text-white text-sm font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                          <span>{lang === "hi" ? "पंजीकरण सहेजा जा रहा है..." : "Submitting to Supabase Registry..."}</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-amber-400" />
                          <span>
                            {lang === "hi" ? "पंजीकरण आवेदन जमा करें" : "Submit Doctor Registration Application"}
                          </span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      {lang === "hi"
                        ? "आवेदन जमा करने के बाद संदर्भ कोड प्राप्त होगा। डेटा सीधे सुप्रीबेस में सुरक्षित रूप से दर्ज होता है।"
                        : "Your registration is stored directly into the official Supabase medical registry."}
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* ====================================================================
            9. PATIENT ASSISTANCE FOOTER BANNER
        ==================================================================== */}
        <section className="py-10 bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#172554] text-white px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-white/10 px-3 py-1 rounded-full mb-2">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{lang === "hi" ? "24/7 निःशुल्क सहायता" : "24/7 Patient Guidance Desk"}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {lang === "hi"
                  ? "विशेषज्ञ डॉक्टर के बारे में जानकारी चाहिए?"
                  : "Need guidance regarding our specialist doctors?"}
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 mt-1">
                {lang === "hi"
                  ? "टोल-फ्री नंबर 1800-208-1008 पर कॉल करें या आदित्यम् निरामया मोबाइल ऐप डाउनलोड करें।"
                  : "Call Toll-Free: 1800-208-1008 or download the Adityam Niramayaa Mobile App."}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:18002081008"
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>{lang === "hi" ? "हेल्पलाइन पर कॉल करें" : "Call Helpline"}</span>
              </a>

              <Link
                href="/get-app"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all flex items-center justify-center cursor-pointer"
              >
                {lang === "hi" ? "मोबाइल ऐप डाउनलोड" : "Download App"}
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Global Universal Footer */}
      <Footer />
    </div>
  );
}
