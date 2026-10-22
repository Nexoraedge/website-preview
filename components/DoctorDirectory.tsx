"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Stethoscope,
  Star,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  X,
} from "lucide-react";

interface Doctor {
  id: string;
  nameEn: string;
  nameHi: string;
  degreesEn: string;
  degreesHi: string;
  specialtyEn: string;
  specialtyHi: string;
  category: string;
  experienceEn: string;
  experienceHi: string;
  hospitalEn: string;
  hospitalHi: string;
  locationEn: string;
  locationHi: string;
  rating: number;
  reviewsCount: number;
  originalFee: number;
  discountedFee: number;
  nextSlotEn: string;
  nextSlotHi: string;
  image: string;
}

const SPECIALTY_CATEGORIES = [
  { id: "all", en: "All Specialists", hi: "सभी विशेषज्ञ" },
  { id: "Cardiology", en: "Cardiology", hi: "हृदय रोग (Cardiology)" },
  { id: "Orthopedics", en: "Orthopedics", hi: "हड्डी एवं जोड़ (Orthopedics)" },
  { id: "Pediatrics", en: "Pediatrics", hi: "शिशु रोग (Pediatrics)" },
  { id: "Gynecology", en: "Gynecology", hi: "स्त्री रोग (Gynecology)" },
  { id: "General Physician", en: "General Physician", hi: "फिजिशियन (Physician)" },
  { id: "Ayurveda", en: "Ayurveda", hi: "आयुर्वेद (Ayurveda)" },
];

const DOCTORS: Doctor[] = [
  {
    id: "doc-1",
    nameEn: "Dr. Rajesh K. Jain",
    nameHi: "डॉ. राजेश के. जैन",
    degreesEn: "MBBS, MD, DM (Cardiology) - AIIMS",
    degreesHi: "एमबीबीएस, एमडी, डीएम (हृदय रोग) - एम्स",
    specialtyEn: "Senior Interventional Cardiologist",
    specialtyHi: "वरिष्ठ हृदय रोग विशेषज्ञ",
    category: "Cardiology",
    experienceEn: "19+ Yrs Exp",
    experienceHi: "19+ वर्ष अनुभव",
    hospitalEn: "Arihant Heart Institute & Apollo",
    hospitalHi: "अरिहंत हार्ट इंस्टीट्यूट एवं अपोलो",
    locationEn: "South Delhi / Noida",
    locationHi: "साउथ दिल्ली / नोएडा",
    rating: 5,
    reviewsCount: 420,
    originalFee: 1500,
    discountedFee: 950,
    nextSlotEn: "Today, 4:30 PM",
    nextSlotHi: "आज, 4:30 PM",
    image: "/images/doctor_rajesh.jpg",
  },
  {
    id: "doc-2",
    nameEn: "Dr. Sunita Shah Singhania",
    nameHi: "डॉ. सुनीता शाह सिंघानिया",
    degreesEn: "MBBS, MS (Orthopedics), M.Ch (UK)",
    degreesHi: "एमबीबीएस, एमएस (ऑर्थो), एम.सी.एच (यूके)",
    specialtyEn: "Joint Replacement & Spine Specialist",
    specialtyHi: "जोड़ प्रत्यारोपण व स्पाइन विशेषज्ञ",
    category: "Orthopedics",
    experienceEn: "16+ Yrs Exp",
    experienceHi: "16+ वर्ष अनुभव",
    hospitalEn: "Bhagwan Mahaveer Super Specialty",
    hospitalHi: "भगवान महावीर सुपर स्पेशलिटी हॉस्पिटल",
    locationEn: "Vile Parle, Mumbai",
    locationHi: "विले पार्ले, मुम्बई",
    rating: 4.5,
    reviewsCount: 385,
    originalFee: 1200,
    discountedFee: 800,
    nextSlotEn: "Tomorrow, 10:00 AM",
    nextSlotHi: "कल, 10:00 AM",
    image: "/images/doctor_sunita.jpg",
  },
  {
    id: "doc-3",
    nameEn: "Dr. Amitesh Mehta",
    nameHi: "डॉ. अमितेश मेहता",
    degreesEn: "MBBS, MD (Pediatrics) - KEM Mumbai",
    degreesHi: "एमबीबीएस, एमडी (शिशु रोग) - केईएम",
    specialtyEn: "Senior Consultant Child Specialist",
    specialtyHi: "वरिष्ठ शिशु एवं बाल रोग विशेषज्ञ",
    category: "Pediatrics",
    experienceEn: "14+ Yrs Exp",
    experienceHi: "14+ वर्ष अनुभव",
    hospitalEn: "Shanti Child Care & Max Healthcare",
    hospitalHi: "शांति चाइल्ड केयर एवं मैक्स हेल्थकेयर",
    locationEn: "Navrangpura, Ahmedabad",
    locationHi: "नवरंगपुरा, अहमदाबाद",
    rating: 4.4,
    reviewsCount: 510,
    originalFee: 1000,
    discountedFee: 650,
    nextSlotEn: "Today, 6:00 PM",
    nextSlotHi: "आज, 6:00 PM",
    image: "/images/doctor_amitesh.jpg",
  },
  {
    id: "doc-4",
    nameEn: "Dr. Priya K. Parekh",
    nameHi: "डॉ. प्रिया के. पारेख",
    degreesEn: "MBBS, MS (Obs & Gynae), DGO",
    degreesHi: "एमबीबीएस, एमएस (स्त्री रोग), डीजीओ",
    specialtyEn: "Obstetrician & High-Risk Pregnancy",
    specialtyHi: "स्त्री रोग व प्रसूति विशेषज्ञ",
    category: "Gynecology",
    experienceEn: "15+ Yrs Exp",
    experienceHi: "15+ वर्ष अनुभव",
    hospitalEn: "Parshvanath Maternity & Fortis",
    hospitalHi: "पार्श्वनाथ मेटरनिटी एवं फोर्टिस",
    locationEn: "Vijay Nagar, Indore",
    locationHi: "विजय नगर, इंदौर",
    rating: 4.2,
    reviewsCount: 290,
    originalFee: 1100,
    discountedFee: 750,
    nextSlotEn: "Tomorrow, 11:30 AM",
    nextSlotHi: "कल, 11:30 AM",
    image: "/images/doctor_priya.jpg",
  },
  {
    id: "doc-5",
    nameEn: "Dr. Harish Chandra Gupta",
    nameHi: "डॉ. हरीश चंद्र गुप्ता",
    degreesEn: "MBBS, MD (General Medicine)",
    degreesHi: "एमबीबीएस, एमडी (जनरल मेडिसिन)",
    specialtyEn: "Senior Consultant Physician & Diabetologist",
    specialtyHi: "वरिष्ठ फिजिशियन व मधुमेह विशेषज्ञ",
    category: "General Physician",
    experienceEn: "22+ Yrs Exp",
    experienceHi: "22+ वर्ष अनुभव",
    hospitalEn: "Jain Charitable Health Center",
    hospitalHi: "जैन चैरिटेबल हेल्थ सेंटर",
    locationEn: "C-Scheme, Jaipur",
    locationHi: "सी-स्कीम, जयपुर",
    rating: 4.1,
    reviewsCount: 640,
    originalFee: 800,
    discountedFee: 500,
    nextSlotEn: "Today, 5:00 PM",
    nextSlotHi: "आज, 5:00 PM",
    image: "/images/doctor_harish.jpg",
  },
  {
    id: "doc-6",
    nameEn: "Vaidya Ananya V. Trivedi",
    nameHi: "वैद्य अनन्या वी. त्रिवेदी",
    degreesEn: "BAMS, MD (Ayurveda), Panchakarma Specialist",
    degreesHi: "बीएएमएस, एमडी (आयुर्वेद), पंचकर्म विशेषज्ञ",
    specialtyEn: "Holistic Lifestyle & Chronic Disease Reversal",
    specialtyHi: "समग्र जीवनशैली व पंचकर्म विशेषज्ञ",
    category: "Ayurveda",
    experienceEn: "12+ Yrs Exp",
    experienceHi: "12+ वर्ष अनुभव",
    hospitalEn: "Adityam Holistic Healing Center",
    hospitalHi: "आदित्यम् होलिस्टिक हीलिंग सेंटर",
    locationEn: "Jayanagar, Bengaluru",
    locationHi: "जयनगर, बेंगलुरु",
    rating: 4.0,
    reviewsCount: 210,
    originalFee: 900,
    discountedFee: 600,
    nextSlotEn: "Today, 3:30 PM",
    nextSlotHi: "आज, 3:30 PM",
    image: "/images/doctor_ananya.jpg",
  },
];

interface DoctorDirectoryProps {
  lang?: "en" | "hi";
  onOpenBooking?: (doctorName?: string, specialty?: string) => void;
}

export default function DoctorDirectory({
  lang = "en",
  onOpenBooking,
}: DoctorDirectoryProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");
  const [expandedDocId, setExpandedDocId] = useState<string | null>(null);

  const filteredDoctors =
    selectedCategoryId === "all"
      ? DOCTORS
      : DOCTORS.filter((d) => d.category === selectedCategoryId);

  return (
    <section
      id="doctors"
      className="relative overflow-hidden font-sans select-none pt-14 pb-24 sm:pb-32"
      style={{
        // Seamless gradient continuation from MuniVisionSection (#E2E8F0) deepening into rich dark navy (#0B132B)
        background:
          "linear-gradient(180deg, #E2E8F0 0%, #D8E2ED 16%, #8EA4C1 42%, #2A3C56 70%, #0B132B 100%)",
      }}
    >
      {/* Background Soft Lighting Glows */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Embedded Card Animation Styles (Both hover on desktop and tap-to-expand on mobile/tablet) */}
      <style jsx global>{`
        .doc-card-container {
          width: 100%;
          max-width: 360px;
          height: 410px;
          background: #ffffff;
          border-radius: 30px;
          padding: 4px;
          position: relative;
          box-shadow: 0 16px 36px -12px rgba(15, 23, 42, 0.22);
          transition: all 0.45s cubic-bezier(0.645, 0.045, 0.355, 1);
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.8);
          overflow: hidden;
        }

        .doc-card-container:hover,
        .doc-card-container.is-expanded {
          box-shadow: 0 26px 54px -10px rgba(15, 23, 42, 0.42);
          transform: translateY(-4px);
        }

        /* Top Rating Badge on unexpanded photo */
        .doc-card-container .top-badge {
          position: absolute;
          right: 1.1rem;
          top: 1.1rem;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 9999px;
          padding: 4px 10px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 4px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
          transition: all 0.25s ease;
          opacity: 1;
        }

        /* FADE OUT top-badge on hover/expand to prevent overlapping doctor credentials! */
        .doc-card-container:hover .top-badge,
        .doc-card-container.is-expanded .top-badge {
          opacity: 0;
          pointer-events: none;
          transform: scale(0.85);
        }

        /* Profile Picture (Shrinks into circular badge at top-left on hover/expand) */
        .doc-card-container .profile-pic {
          position: absolute;
          width: calc(100% - 8px);
          height: calc(100% - 8px);
          top: 4px;
          left: 4px;
          border-radius: 26px;
          z-index: 1;
          overflow: hidden;
          background-color: #f1f5f9;
          transition: all 0.45s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s,
            z-index 0.45s ease-in-out 0.1s;
        }

        .doc-card-container:hover .profile-pic,
        .doc-card-container.is-expanded .profile-pic {
          width: 80px;
          height: 80px;
          aspect-ratio: 1;
          top: 12px;
          left: 12px;
          border-radius: 50%;
          z-index: 6;
          border: 3.5px solid #2563eb;
          box-shadow: 0 8px 22px rgba(37, 99, 235, 0.35);
          transition: all 0.45s cubic-bezier(0.645, 0.045, 0.355, 1),
            z-index 0.45s ease-in-out 0.05s;
        }

        .doc-card-container .profile-pic img {
          object-fit: cover;
          object-position: center 20%;
          width: 100%;
          height: 100%;
          transition: all 0.45s ease-in-out 0s;
        }

        .doc-card-container:hover .profile-pic img,
        .doc-card-container.is-expanded .profile-pic img {
          transform: scale(1.1);
        }

        /* Sliding Drawer */
        .doc-card-container .bottom-drawer {
          position: absolute;
          bottom: 4px;
          left: 4px;
          right: 4px;
          background: linear-gradient(155deg, #172554 0%, #1e3a8a 60%, #0f172a 100%);
          top: 74%;
          border-radius: 26px;
          z-index: 2;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 4px 14px 0px inset;
          overflow: hidden;
          transition: all 0.45s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        }

        .doc-card-container:hover .bottom-drawer,
        .doc-card-container.is-expanded .bottom-drawer {
          top: 8px;
          border-radius: 26px;
          transition: all 0.45s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
        }

        /* Initial compact strip inside drawer */
        .doc-card-container .drawer-compact {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: 14px 18px;
          transition: opacity 0.25s ease-out;
          opacity: 1;
        }

        .doc-card-container:hover .drawer-compact,
        .doc-card-container.is-expanded .drawer-compact {
          opacity: 0;
          pointer-events: none;
        }

        /* Expanded content inside drawer (shown only on hover or tap) */
        .doc-card-container .drawer-expanded {
          position: absolute;
          inset: 0;
          padding: 12px 14px 14px 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease-in 0.12s;
        }

        .doc-card-container:hover .drawer-expanded,
        .doc-card-container.is-expanded .drawer-expanded {
          opacity: 1;
          pointer-events: auto;
        }

        /* Mobile specific enhancements */
        @media (max-width: 640px) {
          .doc-card-container {
            height: 395px;
          }
          .doc-card-container .bottom-drawer {
            top: 73%;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-[#1E40AF] text-xs font-bold tracking-wide border border-blue-200/80 shadow-xs">
              <Stethoscope className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>
                {lang === "hi"
                  ? "सत्यापित ओपीडी विशेषज्ञ"
                  : "VERIFIED OPD SPECIALISTS"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] tracking-tight leading-[1.15]">
              {lang === "hi" ? (
                <>
                  शीर्ष प्रमाणित विशेषज्ञ चिकित्सकों से{" "}
                  <span className="italic font-serif text-[#1D4ED8]">
                    पारदर्शी परामर्श।
                  </span>
                </>
              ) : (
                <>
                  Consult Top Empanelled{" "}
                  <span className="italic font-serif text-[#1D4ED8]">
                    Medical Specialists.
                  </span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-700 max-w-2xl font-light leading-relaxed">
              {lang === "hi"
                ? "प्रत्येक चिकित्सक उच्च योग्यता, नैतिक मानकों और उत्कृष्ट रोगी संतुष्टि के आधार पर अनुबंधित हैं। कार्ड पर टैप करके पूरा विवरण देखें और परामर्श बुक करें।"
                : "Every practitioner is rigorously vetted for qualifications, ethical standards, and high patient satisfaction. Tap any card to view verified credentials and book."}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenBooking?.()}
            className="px-5 py-3 bg-[#172554] hover:bg-[#2563EB] text-white text-xs font-bold rounded-2xl transition-all shadow-md flex items-center gap-2 cursor-pointer shrink-0 self-start md:self-auto hover:gap-3"
          >
            <span>
              {lang === "hi"
                ? "सभी 2,500+ डॉक्टर्स देखें"
                : "View All 2,500+ Doctors"}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {SPECIALTY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategoryId === cat.id;
            const label = lang === "hi" ? cat.hi : cat.en;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shrink-0 border ${isSelected
                  ? "bg-[#172554] text-white border-[#172554] shadow-md shadow-blue-900/30"
                  : "bg-white/70 backdrop-blur-md text-slate-700 hover:bg-white hover:text-[#172554] border-slate-300/70"
                  }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Doctor Cards Grid with Uiverse.io Card Interaction (Hover on Desktop, Tap-to-Expand on Mobile/Tablet) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 justify-items-center">
          {filteredDoctors.map((doc) => {
            const docName = lang === "hi" ? doc.nameHi : doc.nameEn;
            const docSpecialty = lang === "hi" ? doc.specialtyHi : doc.specialtyEn;
            const docDegrees = lang === "hi" ? doc.degreesHi : doc.degreesEn;
            const docHospital = lang === "hi" ? doc.hospitalHi : doc.hospitalEn;
            const docLocation = lang === "hi" ? doc.locationHi : doc.locationEn;
            const docExperience = lang === "hi" ? doc.experienceHi : doc.experienceEn;
            const docSlot = lang === "hi" ? doc.nextSlotHi : doc.nextSlotEn;

            const isCardExpanded = expandedDocId === doc.id;

            return (
              <div
                key={doc.id}
                onClick={() => {
                  // Tapping card opens the drawer details (perfect for mobile and tablet touch devices!)
                  setExpandedDocId((prev) => (prev === doc.id ? null : doc.id));
                }}
                className={`doc-card-container group ${isCardExpanded ? "is-expanded" : ""
                  }`}
              >
                {/* Top Badge: Rating on unexpanded photo (Fades out when hovered/expanded) */}
                <div className="top-badge">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  <span className="text-xs font-bold text-slate-800">
                    {doc.rating}
                  </span>
                  <span className="text-[10px] text-slate-400 font-normal">
                    ({doc.reviewsCount})
                  </span>
                </div>

                {/* Profile Picture: Full Card -> Shrinks to Circular Avatar at Top-Left on hover/expand */}
                <div className="profile-pic">
                  <Image
                    src={doc.image}
                    alt={docName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="object-cover object-top"
                  />
                  {/* Subtle Gradient Over Picture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
                </div>

                {/* Bottom Drawer: Slides up on Hover or Tap */}
                <div className="bottom-drawer">

                  {/* ==============================================================
                      1. UNHOVERED / COLLAPSED STATE: Clean Minimal Summary
                  ============================================================== */}
                  <div className="drawer-compact">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-serif text-base font-bold text-white tracking-wide truncate">
                            {docName}
                          </h3>
                          <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        </div>
                        <p className="text-xs text-amber-300 truncate font-medium">
                          {docSpecialty}
                        </p>
                      </div>

                      {/* Compact Price Pill */}
                      <div className="text-right shrink-0">
                        <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">
                          {lang === "hi" ? "ओपीडी दर" : "OPD Fee"}
                        </div>
                        <div className="text-sm font-bold text-white">
                          ₹{doc.discountedFee}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-300 mt-2.5 pt-2 border-t border-white/10">
                      <span className="truncate max-w-[170px] text-slate-200">
                        🏥 {docHospital}
                      </span>
                      <span className="text-amber-300 font-semibold flex items-center gap-0.5">
                        {lang === "hi" ? "विवरण देखें" : "View Profile"}
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                  {/* ==============================================================
                      2. HOVERED / EXPANDED STATE: Full Profile & Booking Action
                  ============================================================== */}
                  <div className="drawer-expanded">
                    {/* Top Row: Beside Circular Avatar (Avatar sits at top-left: 12px, width: 80px) */}
                    <div className="pl-[86px] pr-1 pt-1 min-h-[76px] flex items-start justify-between">
                      <div className="min-w-0 pr-1">
                        <div className="flex items-center gap-1">
                          <h3 className="font-serif text-[15px] sm:text-base font-bold text-white tracking-wide leading-snug">
                            {docName}
                          </h3>
                          <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        </div>
                        <p className="text-xs text-amber-300 font-medium leading-tight mt-0.5">
                          {docSpecialty}
                        </p>
                        <p className="text-[11px] text-sky-200 font-mono leading-tight mt-1">
                          {docDegrees}
                        </p>
                      </div>

                      {/* Mobile Collapse Close button */}
                      {isCardExpanded && (
                        <button
                          type="button"
                          aria-label="Collapse"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedDocId(null);
                          }}
                          className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-colors shrink-0"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Middle Section: Hospital, Experience & Rating, and Tariff Box */}
                    <div className="space-y-2 mt-2 px-1">
                      {/* Hospital & Location */}
                      <div className="space-y-0.5 text-xs text-slate-200">
                        <div className="flex items-center gap-1.5 truncate">
                          <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span className="truncate">{docLocation}</span>
                        </div>
                        <div className="text-[11px] text-slate-300 truncate pl-5">
                          🏥 {docHospital}
                        </div>
                      </div>

                      {/* Transparent Tariff Box */}
                      <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-slate-300 font-semibold">
                            {lang === "hi" ? "ओपीडी परामर्श दर" : "OPD Consultation"}
                          </div>
                          <div className="flex items-baseline gap-1.5 mt-0.5">
                            <span className="text-base font-bold text-white">
                              ₹{doc.discountedFee}
                            </span>
                            <span className="text-xs text-slate-400 line-through">
                              ₹{doc.originalFee}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/70 border border-emerald-400/40 px-2 py-0.5 rounded-full">
                          {lang === "hi"
                            ? `बचत ₹${doc.originalFee - doc.discountedFee}`
                            : `Save ₹${doc.originalFee - doc.discountedFee}`}
                        </span>
                      </div>

                      {/* Experience, Star Rating & Next Slot */}
                      <div className="flex items-center justify-between text-[11px] text-slate-300 pt-0.5">
                        <div className="flex items-center gap-2">
                          <span>🏅 {docExperience}</span>
                          <span className="flex items-center gap-0.5 text-amber-300 font-semibold">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                            <span>{doc.rating}</span>
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-emerald-300 font-medium">
                          <Clock className="w-3 h-3 text-emerald-400" />
                          <span>{docSlot}</span>
                        </span>
                      </div>
                    </div>

                    {/* Bottom Action Button: ONLY THIS BUTTON OPENS THE BOOKING MODAL */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          // Prevent triggering the card's toggle handler
                          e.stopPropagation();
                          onOpenBooking?.(docName, docSpecialty);
                        }}
                        className="w-full py-2.5 px-4 bg-[#F59E0B] hover:bg-[#D97706] active:scale-[0.98] text-[#0F172A] hover:text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>
                          {lang === "hi" ? "अपॉइंटमेंट लें" : "Book Consultation"}
                        </span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}