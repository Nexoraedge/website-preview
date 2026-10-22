"use client";

import React, { useState, useRef, useEffect } from "react";
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
  Building2,
  Leaf,
  CreditCard,
  HeartHandshake,
  Plus,
  CheckCircle2,
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

interface Hospital {
  id: string;
  nameEn: string;
  nameHi: string;
  cityEn: string;
  cityHi: string;
  bedsEn: string;
  bedsHi: string;
  specialtiesEn: string;
  specialtiesHi: string;
  tagEn: string;
  tagHi: string;
  rating: number;
  reviewsCount: number;
  image: string;
  featuresEn: string[];
  featuresHi: string[];
}

const DOCTORS: Doctor[] = [
  {
    id: "doc-1",
    nameEn: "Dr. Rajesh K. Jain",
    nameHi: "डॉ. राजेश के. जैन",
    degreesEn: "MBBS, MD, DM (Cardiology) - AIIMS",
    degreesHi: "एमबीबीएस, एमडी, डीएम (हृदय रोग) - एम्स",
    specialtyEn: "Interventional Cardiologist",
    specialtyHi: "हृदय रोग विशेषज्ञ",
    category: "Cardiology",
    experienceEn: "19+ Yrs Exp",
    experienceHi: "19+ वर्ष अनुभव",
    hospitalEn: "Arihant Hospital",
    hospitalHi: "अरिहंत हॉस्पिटल",
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
    nameEn: "Dr. Sunita Shah",
    nameHi: "डॉ. सुनीता शाह",
    degreesEn: "MBBS, MS (Orthopedics), M.Ch (UK)",
    degreesHi: "एमबीबीएस, एमएस (ऑर्थो), एम.सी.एच (यूके)",
    specialtyEn: "Joint & Spine Specialist",
    specialtyHi: "जोड़ व स्पाइन विशेषज्ञ",
    category: "Orthopedics",
    experienceEn: "16+ Yrs Exp",
    experienceHi: "16+ वर्ष अनुभव",
    hospitalEn: "Mahaveer Hospital",
    hospitalHi: "महावीर हॉस्पिटल",
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
    specialtyEn: "Child Specialist",
    specialtyHi: "शिशु व बाल रोग विशेषज्ञ",
    category: "Pediatrics",
    experienceEn: "14+ Yrs Exp",
    experienceHi: "14+ वर्ष अनुभव",
    hospitalEn: "CKS Hospital",
    hospitalHi: "सीकेएस हॉस्पिटल",
    locationEn: "VKIA, Jaipur",
    locationHi: "जयपुर",
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
    nameEn: "Dr. Priya Parekh",
    nameHi: "डॉ. प्रिया पारेख",
    degreesEn: "MBBS, MS (Obs & Gynae), DGO",
    degreesHi: "एमबीबीएस, एमएस (स्त्री रोग), डीजीओ",
    specialtyEn: "Gynecologist & Obstetrician",
    specialtyHi: "स्त्री रोग व प्रसूति विशेषज्ञ",
    category: "Gynecology",
    experienceEn: "15+ Yrs Exp",
    experienceHi: "15+ वर्ष अनुभव",
    hospitalEn: "Jain Health Pavilion",
    hospitalHi: "जैन हेल्थ पवेलियन",
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
    nameEn: "Dr. Harish Gupta",
    nameHi: "डॉ. हरीश गुप्ता",
    degreesEn: "MBBS, MD (General Medicine)",
    degreesHi: "एमबीबीएस, एमडी (जनरल मेडिसिन)",
    specialtyEn: "Consultant Physician",
    specialtyHi: "वरिष्ठ फिजिशियन",
    category: "General Physician",
    experienceEn: "22+ Yrs Exp",
    experienceHi: "22+ वर्ष अनुभव",
    hospitalEn: "Jain ENT Hospital Campus",
    hospitalHi: "जैन ईएनटी कैंपस",
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
    nameEn: "Vaidya Ananya Trivedi",
    nameHi: "वैद्य अनन्या त्रिवेदी",
    degreesEn: "BAMS, MD (Ayurveda), Panchakarma Specialist",
    degreesHi: "बीएएमएस, एमडी (आयुर्वेद), पंचकर्म",
    specialtyEn: "Ayurveda & Lifestyle Medicine",
    specialtyHi: "आयुर्वेद व जीवनशैली विशेषज्ञ",
    category: "Ayurveda",
    experienceEn: "12+ Yrs Exp",
    experienceHi: "12+ वर्ष अनुभव",
    hospitalEn: "Adityam Wellness Center",
    hospitalHi: "आदित्यम् वैलनेस सेंटर",
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

const HOSPITALS: Hospital[] = [
  {
    id: "hosp-1",
    nameEn: "Jain ENT Hospital",
    nameHi: "जैन ईएनटी हॉस्पिटल",
    cityEn: "Malviya Nagar, Jaipur",
    cityHi: "मालवीय नगर, जयपुर",
    bedsEn: "120+ Beds",
    bedsHi: "120+ बेड्स",
    specialtiesEn: "Micro Ear Surgery, Cochlear Implant, Endoscopic Sinus",
    specialtiesHi: "ईएनटी सर्जरी, कॉकलियर इम्प्लांट, एंडोस्कोपी",
    tagEn: "NABH Accredited",
    tagHi: "एनएबीएच मान्यता",
    rating: 5,
    reviewsCount: 520,
    image: "/images/hospital_shanti.jpg",
    featuresEn: [
      "24/7 Advanced ENT Emergency",
      "Cashless TPA Desk (Zero Delays)",
      "Satvik & Jain Meal Concierge",
      "Pre-Negotiated Fixed Tariffs",
    ],
    featuresHi: [
      "24/7 आपातकालीन ईएनटी विंग",
      "कैशलेस TPA हेल्पडेस्क",
      "मरीजों हेतु शुद्ध सात्विक भोजन",
      "पूर्व-निर्धारित पैकेज दरें",
    ],
  },
  {
    id: "hosp-2",
    nameEn: "CKS Hospital",
    nameHi: "सीकेएस हॉस्पिटल",
    cityEn: "VKIA Road 5, Jaipur",
    cityHi: "रोड नं. 5, जयपुर",
    bedsEn: "250+ Beds",
    bedsHi: "250+ बेड्स",
    specialtiesEn: "Cardiology, Joint Replacement, Dialysis, ICU",
    specialtiesHi: "हार्ट केयर, जोड़ प्रत्यारोपण, डायलिसिस, आईसीयू",
    tagEn: "Super Specialty",
    tagHi: "सुपर स्पेशलिटी",
    rating: 5,
    reviewsCount: 680,
    image: "/images/hospital_arihant.jpg",
    featuresEn: [
      "24/7 Cath Lab & Advanced ICU",
      "Direct Institutional Concession",
      "Zero Hidden Middleman Fees",
      "Priority Bed Allocation",
    ],
    featuresHi: [
      "24/7 कैथ लैब व अत्याधुनिक आईसीयू",
      "सीधा संस्थागत रियायती लाभ",
      "शून्य गुप्त या अप्रत्याशित चार्ज",
      "प्राथमिकता से बेड उपलब्धता",
    ],
  },
  {
    id: "hosp-3",
    nameEn: "Arihant Hospital",
    nameHi: "अरिहंत हॉस्पिटल",
    cityEn: "Delhi NCR",
    cityHi: "दिल्ली एनसीआर",
    bedsEn: "350+ Beds",
    bedsHi: "350+ बेड्स",
    specialtiesEn: "Cardiology, Oncology, Spine & Neuro Care",
    specialtiesHi: "कार्डियोलॉजी, ऑन्कोलॉजी, स्पाइन व न्यूरो",
    tagEn: "NABH Accredited",
    tagHi: "एनएबीएच मान्यता",
    rating: 4.9,
    reviewsCount: 460,
    image: "/images/hospital_mahaveer.jpg",
    featuresEn: [
      "Dedicated On-Ground Buddy",
      "Discharge Meds Concession",
      "Family Attendant Suites",
      "NABH Clinical Standards",
    ],
    featuresHi: [
      "ऑन-ग्राउंड आदित्यम् मित्र",
      "डिस्चार्ज दवाइयों पर विशेष छूट",
      "अटेंडेंट व फैमिली रूम्स",
      "एनएबीएच क्लीनिकल मानक",
    ],
  },
  {
    id: "hosp-4",
    nameEn: "Mahaveer Hospital",
    nameHi: "महावीर हॉस्पिटल",
    cityEn: "Vile Parle, Mumbai",
    cityHi: "विले पार्ले, मुम्बई",
    bedsEn: "500+ Beds",
    bedsHi: "500+ बेड्स",
    specialtiesEn: "Neurology, Nephrology, Emergency Trauma",
    specialtiesHi: "न्यूरोलॉजी, नेफ्रोलॉजी, इमरजेंसी ट्रॉमा",
    tagEn: "Charitable Trust",
    tagHi: "ट्रस्ट एवं सेवा विंग",
    rating: 4.9,
    reviewsCount: 590,
    image: "/images/hospital_aadityam.jpg",
    featuresEn: [
      "Affordable Fixed Tariffs",
      "Community Subsidized Care",
      "In-House NABL Accredited Lab",
      "Dedicated Elder Assistance",
    ],
    featuresHi: [
      "न्यूनतम पूर्व-निर्धारित पैकेज दरें",
      "संस्थागत सब्सिडी सहयोग",
      "इन-हाउस एनबीएल लैब जांच",
      "वरिष्ठ नागरिकों हेतु विशेष सहायता",
    ],
  },
];

interface DoctorDirectoryProps {
  lang?: "en" | "hi";
  onOpenBooking?: (doctorOrHospital?: string, specialty?: string) => void;
  onOpenPartner?: () => void;
}

export default function DoctorDirectory({
  lang = "en",
  onOpenBooking,
  onOpenPartner,
}: DoctorDirectoryProps) {
  // Independent expand states for Track 1 (Doctors) and Track 2 (Hospitals)
  const [expandedDocId, setExpandedDocId] = useState<string | null>(null);
  const [expandedHospId, setExpandedHospId] = useState<string | null>(null);

  const autoCollapseDocTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoCollapseHospTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Duplicated arrays for seamless infinite marquee scroll (50/50 symmetry)
  const marqueeDoctors = [...DOCTORS, ...DOCTORS];
  const marqueeHospitals = [
    ...HOSPITALS,
    ...HOSPITALS,
    ...HOSPITALS,
    ...HOSPITALS,
  ];

  // Handle Doctor Card Click:
  const handleDocCardClick = (instanceKey: string) => {
    if (autoCollapseDocTimerRef.current) {
      clearTimeout(autoCollapseDocTimerRef.current);
      autoCollapseDocTimerRef.current = null;
    }

    if (expandedDocId === instanceKey) {
      setExpandedDocId(null);
    } else {
      setExpandedDocId(instanceKey);
      autoCollapseDocTimerRef.current = setTimeout(() => {
        setExpandedDocId(null);
      }, 5000);
    }
  };

  // Handle Hospital Card Click:
  const handleHospCardClick = (instanceKey: string) => {
    if (autoCollapseHospTimerRef.current) {
      clearTimeout(autoCollapseHospTimerRef.current);
      autoCollapseHospTimerRef.current = null;
    }

    if (expandedHospId === instanceKey) {
      setExpandedHospId(null);
    } else {
      setExpandedHospId(instanceKey);
      autoCollapseHospTimerRef.current = setTimeout(() => {
        setExpandedHospId(null);
      }, 5000);
    }
  };

  useEffect(() => {
    return () => {
      if (autoCollapseDocTimerRef.current) {
        clearTimeout(autoCollapseDocTimerRef.current);
      }
      if (autoCollapseHospTimerRef.current) {
        clearTimeout(autoCollapseHospTimerRef.current);
      }
    };
  }, []);

  return (
    <section
      id="doctors"
      className="relative overflow-hidden font-sans select-none pt-14 pb-28 sm:pb-36"
      style={{
        // Seamless gradient continuity: Starts at MuniVisionSection (#E2E8F0) and deepens into rich obsidian black (#020409)
        background:
          "linear-gradient(180deg, #E2E8F0 0%, #D8E2ED 12%, #8EA4C1 28%, #2A3C56 50%, #0B132B 72%, #020409 100%)",
      }}
    >
      {/* Anchor for Hospital Nav Link */}
      <div id="hospitals" className="scroll-mt-28" />

      {/* 3D Soft Lighting Glows in Deep Canvas */}
      <div className="absolute top-1/6 right-10 w-[550px] h-[550px] bg-blue-400/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[650px] h-[650px] bg-emerald-500/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Embedded Styles for Dual Bi-Directional Infinite Marquees & Card Interaction */}
      <style jsx global>{`
        /* Track 1: Right to Left (Westbound) */
        @keyframes doctorMarqueeWest {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        /* Track 2: Left to Right (Eastbound - Opposite Direction) */
        @keyframes hospitalMarqueeEast {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .doctor-marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: doctorMarqueeWest 42s linear infinite;
          will-change: transform;
        }

        .hospital-marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: hospitalMarqueeEast 44s linear infinite;
          will-change: transform;
        }

        .doctor-marquee-track.is-paused,
        .hospital-marquee-track.is-paused {
          animation-play-state: paused;
        }

        /* 5-second Auto-collapse Countdown Progress Bar */
        @keyframes autoCollapseCountdown {
          0% {
            width: 100%;
            opacity: 0.95;
          }
          85% {
            opacity: 0.95;
          }
          100% {
            width: 0%;
            opacity: 0.2;
          }
        }

        .animate-auto-collapse {
          animation: autoCollapseCountdown 5s linear forwards;
        }

        /* Base Card Container */
        .doc-card-container,
        .hosp-card-container {
          width: 330px;
          min-width: 330px;
          max-width: 330px;
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

        /* Top Badges on unexpanded photo */
        .doc-card-container .top-badge,
        .hosp-card-container .top-badge {
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

        /* FADE OUT top-badge on hover/expand */
        .doc-card-container.is-expanded .top-badge,
        .hosp-card-container.is-expanded .top-badge {
          opacity: 0;
          pointer-events: none;
          transform: scale(0.85);
        }

        /* Profile / Hero Picture */
        .doc-card-container .profile-pic,
        .hosp-card-container .profile-pic {
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

        .doc-card-container .profile-pic img,
        .hosp-card-container .profile-pic img {
          object-fit: cover;
          object-position: center 20%;
          width: 100%;
          height: 100%;
          transition: all 0.45s ease-in-out 0s;
        }

        /* Sliding Drawers */
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

        .hosp-card-container .bottom-drawer {
          position: absolute;
          bottom: 4px;
          left: 4px;
          right: 4px;
          background: linear-gradient(155deg, #064E3B 0%, #065F46 55%, #0B132B 100%);
          top: 74%;
          border-radius: 26px;
          z-index: 2;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 4px 14px 0px inset;
          overflow: hidden;
          transition: all 0.45s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        }

        /* Initial compact strip */
        .doc-card-container .drawer-compact,
        .hosp-card-container .drawer-compact {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: 14px 18px;
          transition: opacity 0.25s ease-out;
          opacity: 1;
        }

        /* Expanded content inside drawer */
        .doc-card-container .drawer-expanded,
        .hosp-card-container .drawer-expanded {
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

        /* ==============================================================
           EXPLICIT EXPANDED STATE (Mobile tap & Desktop click)
        ============================================================== */
        .doc-card-container.is-expanded,
        .hosp-card-container.is-expanded {
          box-shadow: 0 26px 54px -10px rgba(15, 23, 42, 0.42);
          transform: translateY(-4px);
        }

        .doc-card-container.is-expanded .profile-pic,
        .hosp-card-container.is-expanded .profile-pic {
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

        .hosp-card-container.is-expanded .profile-pic {
          border-color: #10B981;
          box-shadow: 0 8px 22px rgba(16, 185, 129, 0.35);
        }

        .doc-card-container.is-expanded .profile-pic img,
        .hosp-card-container.is-expanded .profile-pic img {
          transform: scale(1.1);
        }

        .doc-card-container.is-expanded .bottom-drawer,
        .hosp-card-container.is-expanded .bottom-drawer {
          top: 8px;
          border-radius: 26px;
          transition: all 0.45s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
        }

        .doc-card-container.is-expanded .drawer-compact,
        .hosp-card-container.is-expanded .drawer-compact {
          opacity: 0;
          pointer-events: none;
        }

        .doc-card-container.is-expanded .drawer-expanded,
        .hosp-card-container.is-expanded .drawer-expanded {
          opacity: 1;
          pointer-events: auto;
        }

        /* ==============================================================
           DESKTOP ONLY HOVER (Disabled on touch devices so tap doesn't stick)
        ============================================================== */
        @media (hover: hover) and (pointer: fine) {
          .doctor-marquee-track:hover,
          .hospital-marquee-track:hover {
            animation-play-state: paused;
          }

          .doc-card-container:hover,
          .hosp-card-container:hover {
            box-shadow: 0 26px 54px -10px rgba(15, 23, 42, 0.42);
            transform: translateY(-4px);
          }

          .doc-card-container:hover .top-badge,
          .hosp-card-container:hover .top-badge {
            opacity: 0;
            pointer-events: none;
            transform: scale(0.85);
          }

          .doc-card-container:hover .profile-pic,
          .hosp-card-container:hover .profile-pic {
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

          .hosp-card-container:hover .profile-pic {
            border-color: #10B981;
            box-shadow: 0 8px 22px rgba(16, 185, 129, 0.35);
          }

          .doc-card-container:hover .profile-pic img,
          .hosp-card-container:hover .profile-pic img {
            transform: scale(1.1);
          }

          .doc-card-container:hover .bottom-drawer,
          .hosp-card-container:hover .bottom-drawer {
            top: 8px;
            border-radius: 26px;
            transition: all 0.45s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
          }

          .doc-card-container:hover .drawer-compact,
          .hosp-card-container:hover .drawer-compact {
            opacity: 0;
            pointer-events: none;
          }

          .doc-card-container:hover .drawer-expanded,
          .hosp-card-container:hover .drawer-expanded {
            opacity: 1;
            pointer-events: auto;
          }
        }

        /* Mobile adjustments */
        @media (max-width: 640px) {
          .doc-card-container,
          .hosp-card-container {
            width: 300px;
            min-width: 300px;
            max-width: 300px;
            height: 395px;
          }
          .doc-card-container .bottom-drawer,
          .hosp-card-container .bottom-drawer {
            top: 73%;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* ==============================================================
            UNIFIED SECTION HEADER: Doctors & Hospitals Directory
        ============================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-[#1E40AF] text-xs font-bold tracking-wide border border-blue-200/80 shadow-xs">
              <Stethoscope className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>
                {lang === "hi"
                  ? "प्रमाणित विशेषज्ञ एवं सहयोगी अस्पताल नेटवर्क"
                  : "VERIFIED SPECIALISTS & PARTNER HOSPITALS"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] tracking-tight leading-[1.14]">
              {lang === "hi" ? (
                <>
                  शीर्ष प्रमाणित विशेषज्ञ डॉक्टर्स एवं{" "}
                  <span className="italic font-serif text-[#1D4ED8]">
                    सहयोगी अस्पताल नेटवर्क।
                  </span>
                </>
              ) : (
                <>
                  Top Empanelled Specialists &{" "}
                  <span className="italic font-serif text-[#1D4ED8]">
                    Partner Hospital Network.
                  </span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-700 max-w-2xl font-light leading-relaxed">
              {lang === "hi"
                ? "प्रमाणित विशेषज्ञ चिकित्सकों से परामर्श लें अथवा सहयोगी मल्टी-स्पेशलिटी अस्पतालों में प्राथमिकता से एडमिशन, कैशलेस TPA सुविधा, पूर्व-निर्धारित पैकेज दरें एवं शुद्ध सात्विक भोजन प्राप्त करें।"
                : "Consult pre-screened medical specialists or access premier multi-specialty hospitals with priority admissions, cashless TPA desks, pre-negotiated package tariffs, and dedicated patient buddies."}
            </p>
          </div>

          {/* Action CTAs in Header */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => onOpenBooking?.()}
              className="px-5 py-3 bg-[#172554] hover:bg-[#2563EB] text-white text-xs font-bold rounded-2xl transition-all shadow-md flex items-center gap-2 cursor-pointer hover:gap-3"
            >
              <span>
                {lang === "hi"
                  ? "सभी 2,500+ डॉक्टर्स देखें"
                  : "View All 2,500+ Doctors"}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onOpenPartner?.()}
              className="px-5 py-3 bg-white/80 hover:bg-white text-[#172554] border border-slate-300/80 text-xs font-bold rounded-2xl transition-all shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-[#2563EB]" />
              <span>
                {lang === "hi" ? "अस्पताल संबद्ध करें" : "Register Hospital"}
              </span>
            </button>
          </div>
        </div>

        {/* Row 1 Tag: Doctors */}
        <div className="flex items-center justify-between text-xs text-slate-700 font-bold uppercase tracking-wider mb-3 px-1">
          <span className="flex items-center gap-1.5 text-blue-900">
            <Stethoscope className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>
              {lang === "hi"
                ? "ओपीडी विशेषज्ञ डॉक्टर्स (दाएं से बाएं)"
                : "OPD Medical Specialists"}
            </span>
          </span>

        </div>
      </div>

      {/* ==============================================================
          ROW 1: DOCTORS HORIZONTAL INFINITE SCROLL (Right to Left)
      ============================================================== */}
      <div className="relative w-full overflow-hidden py-3 mb-10 [mask-image:linear-gradient(to_right,transparent_0%,black_3%,black_97%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_3%,black_97%,transparent_100%)]">
        <div
          className={`doctor-marquee-track ${expandedDocId ? "is-paused" : ""
            }`}
        >
          {marqueeDoctors.map((doc, idx) => {
            const docName = lang === "hi" ? doc.nameHi : doc.nameEn;
            const docSpecialty = lang === "hi" ? doc.specialtyHi : doc.specialtyEn;
            const docDegrees = lang === "hi" ? doc.degreesHi : doc.degreesEn;
            const docHospital = lang === "hi" ? doc.hospitalHi : doc.hospitalEn;
            const docLocation = lang === "hi" ? doc.locationHi : doc.locationEn;
            const docExperience = lang === "hi" ? doc.experienceHi : doc.experienceEn;
            const docSlot = lang === "hi" ? doc.nextSlotHi : doc.nextSlotEn;

            const instanceKey = `${doc.id}-instance-${idx}`;
            const isCardExpanded = expandedDocId === instanceKey;

            return (
              <div
                key={instanceKey}
                onClick={() => handleDocCardClick(instanceKey)}
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
                    sizes="(max-width: 640px) 300px, 330px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
                </div>

                {/* Bottom Drawer: Slides up on Hover or Tap */}
                <div className="bottom-drawer">
                  {/* 5-second Auto-collapse Countdown Progress Bar */}
                  {isCardExpanded && (
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] overflow-hidden rounded-t-[26px] z-20 pointer-events-none">
                      <div
                        onAnimationEnd={() => {
                          setExpandedDocId(null);
                        }}
                        className="h-full bg-gradient-to-r from-amber-400 via-sky-400 to-emerald-400 animate-auto-collapse"
                      />
                    </div>
                  )}

                  {/* 1. UNHOVERED / COLLAPSED STATE */}
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

                  {/* 2. HOVERED / EXPANDED STATE */}
                  <div className="drawer-expanded">
                    <div className="pl-[86px] pr-2 pt-1 min-h-[76px] flex flex-col justify-center">
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

                    <div className="space-y-2 mt-2 px-1">
                      <div className="space-y-0.5 text-xs text-slate-200">
                        <div className="flex items-center gap-1.5 truncate">
                          <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span className="truncate">{docLocation}</span>
                        </div>
                        <div className="text-[11px] text-slate-300 truncate pl-5">
                          🏥 {docHospital}
                        </div>
                      </div>

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

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (autoCollapseDocTimerRef.current) {
                            clearTimeout(autoCollapseDocTimerRef.current);
                            autoCollapseDocTimerRef.current = null;
                          }
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

      {/* Row 2 Tag: Hospitals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 mb-3">
        <div className="flex items-center justify-between text-xs text-slate-300 font-bold uppercase tracking-wider px-1">
          <span className="flex items-center gap-1.5 text-emerald-300">
            <Building2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              {lang === "hi"
                ? "सहयोगी अस्पताल एवं सर्जरी केंद्र (बाएं से दाएं)"
                : "Empanelled Partner Hospitals"}
            </span>
          </span>

        </div>
      </div>

      {/* ==============================================================
          ROW 2: HOSPITALS HORIZONTAL INFINITE SCROLL (Left to Right - Opposite)
      ============================================================== */}
      <div className="relative w-full overflow-hidden py-3 mb-20 [mask-image:linear-gradient(to_right,transparent_0%,black_3%,black_97%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_3%,black_97%,transparent_100%)]">
        <div
          className={`hospital-marquee-track ${expandedHospId ? "is-paused" : ""
            }`}
        >
          {marqueeHospitals.map((hosp, idx) => {
            const hospName = lang === "hi" ? hosp.nameHi : hosp.nameEn;
            const hospCity = lang === "hi" ? hosp.cityHi : hosp.cityEn;
            const hospBeds = lang === "hi" ? hosp.bedsHi : hosp.bedsEn;
            const hospTag = lang === "hi" ? hosp.tagHi : hosp.tagEn;
            const hospSpecialties =
              lang === "hi" ? hosp.specialtiesHi : hosp.specialtiesEn;
            const hospFeatures =
              lang === "hi" ? hosp.featuresHi : hosp.featuresEn;

            const instanceKey = `${hosp.id}-instance-${idx}`;
            const isCardExpanded = expandedHospId === instanceKey;

            return (
              <div
                key={instanceKey}
                onClick={() => handleHospCardClick(instanceKey)}
                className={`hosp-card-container group ${isCardExpanded ? "is-expanded" : ""
                  }`}
              >
                {/* Top Badge: 5-Star Rating on unexpanded photo (Fades out when hovered/expanded) */}
                <div className="top-badge">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  <span className="text-xs font-bold text-slate-800">
                    {hosp.rating}
                  </span>
                  <span className="text-[10px] text-slate-400 font-normal">
                    ({hosp.reviewsCount})
                  </span>
                </div>

                {/* Profile Picture: Full Card -> Shrinks to Circular Avatar at Top-Left on hover/expand */}
                <div className="profile-pic">
                  <Image
                    src={hosp.image}
                    alt={hospName}
                    fill
                    sizes="(max-width: 640px) 300px, 330px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
                </div>

                {/* Bottom Drawer: Slides up on Hover or Tap */}
                <div className="bottom-drawer">
                  {/* 5-second Auto-collapse Countdown Progress Bar */}
                  {isCardExpanded && (
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] overflow-hidden rounded-t-[26px] z-20 pointer-events-none">
                      <div
                        onAnimationEnd={() => {
                          setExpandedHospId(null);
                        }}
                        className="h-full bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400 animate-auto-collapse"
                      />
                    </div>
                  )}

                  {/* 1. UNHOVERED / COLLAPSED STATE */}
                  <div className="drawer-compact">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-serif text-base font-bold text-white tracking-wide truncate">
                            {hospName}
                          </h3>
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                        </div>
                        <p className="text-xs text-emerald-200 truncate font-medium">
                          {hospCity} • {hospBeds}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-[10px] text-emerald-200 uppercase tracking-wider font-semibold">
                          {lang === "hi" ? "कैशलेस" : "TPA Desk"}
                        </div>
                        <div className="text-xs font-bold text-white bg-emerald-900/60 px-2 py-0.5 rounded-full border border-emerald-400/30">
                          Active
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-300 mt-2.5 pt-2 border-t border-white/10">
                      <span className="truncate max-w-[170px] text-emerald-100">
                        ✨ {hospSpecialties.split(",")[0]}
                      </span>
                      <span className="text-amber-300 font-semibold flex items-center gap-0.5">
                        {lang === "hi" ? "सुविधाएं देखें" : "View Facilities"}
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                  {/* 2. HOVERED / EXPANDED STATE */}
                  <div className="drawer-expanded">
                    <div className="pl-[86px] pr-2 pt-1 min-h-[76px] flex flex-col justify-center">
                      <div className="flex items-center gap-1">
                        <h3 className="font-serif text-[15px] sm:text-base font-bold text-white tracking-wide leading-snug">
                          {hospName}
                        </h3>
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                      </div>
                      <p className="text-xs text-emerald-200 font-medium leading-tight mt-0.5">
                        {hospCity} • {hospBeds}
                      </p>
                      <p className="text-[11px] text-teal-200 font-mono leading-tight mt-1">
                        {hospTag}
                      </p>
                    </div>

                    <div className="space-y-2 mt-2 px-1">
                      <div className="space-y-0.5 text-xs text-slate-200">
                        <div className="flex items-center gap-1.5 truncate">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{hospCity}</span>
                        </div>
                        <div className="text-[11px] text-emerald-100 truncate pl-5">
                          🏥 {hospSpecialties}
                        </div>
                      </div>

                      {/* Patient Privileges Box */}
                      <div className="p-2.5 rounded-xl bg-black/20 backdrop-blur-md border border-white/15">
                        <div className="text-[9px] uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                          {lang === "hi"
                            ? "आदित्यम् मरीज विशेषाधिकार"
                            : "Patient Privileges"}
                        </div>
                        <div className="grid grid-cols-2 gap-1 text-[11px] text-white">
                          {hospFeatures.slice(0, 4).map((f, i) => (
                            <div key={i} className="flex items-center gap-1 truncate">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                              <span className="truncate">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-300 pt-0.5">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-0.5 text-amber-300 font-semibold">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                            <span>{hosp.rating}</span>
                          </span>
                          <span className="text-[10px] text-slate-300">({hosp.reviewsCount})</span>
                          <span className="text-emerald-300 font-medium">🏅 {hospTag}</span>
                        </div>
                        <span className="text-slate-200 font-medium">
                          {hospBeds}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (autoCollapseHospTimerRef.current) {
                            clearTimeout(autoCollapseHospTimerRef.current);
                            autoCollapseHospTimerRef.current = null;
                          }
                          onOpenBooking?.(hospName, "Hospital Admission");
                        }}
                        className="w-full py-2.5 px-4 bg-[#F59E0B] hover:bg-[#D97706] active:scale-[0.98] text-[#0F172A] hover:text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>
                          {lang === "hi" ? "एडमिशन सहायता लें" : "Inquire Admission"}
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

      {/* ==============================================================
          THE 3 CORE INSTITUTIONAL PILLARS (Glassmorphic Cards in Deep Black)
      ============================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 pt-4 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          {/* Pillar 1 */}
          <div className="p-7 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 space-y-4 hover:border-emerald-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-950/60 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-sm">
              <Leaf className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h4 className="text-lg font-serif font-bold text-white">
              {lang === "hi" ? "सात्विक व जैन आहार पथ्य" : "Satvik & Jain Diet Care"}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {lang === "hi"
                ? "अस्पताल में भर्ती के दौरान आहार के नियमों से कोई समझौता न हो। हम अस्पताल प्रबंधन के साथ मिलकर मरीज व परिजनों के लिए शुद्ध सात्विक व शाकाहारी भोजन व्यवस्था सुनिश्चित करते हैं।"
                : "Hospital stays can be stressful when dietary vows are compromised. We arrange pure, hygienic Satvik meals for patients and attendants directly with hospital management."}
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-7 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 space-y-4 hover:border-sky-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-sky-950/60 border border-sky-400/40 flex items-center justify-center text-sky-300 shadow-sm">
              <CreditCard className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h4 className="text-lg font-serif font-bold text-white">
              {lang === "hi" ? "100% कैशलेस TPA डेस्क" : "Cashless TPA Desk"}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {lang === "hi"
                ? "हमारा इन-हॉस्पिटल हेल्पडेस्क बीमा दावों के प्री-ऑथराइजेशन, अप्रूवल और डिस्चार्ज सेटलमेंट को तेजी से पूरा कराता है ताकि कैशलेस प्रक्रिया में कोई रुकावट न आए।"
                : "Our dedicated in-hospital desk handles insurance paperwork, pre-authorizations, and query resolutions to prevent out-of-pocket delays during stressful discharge processes."}
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-7 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-950/60 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-sm">
              <HeartHandshake className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h4 className="text-lg font-serif font-bold text-white">
              {lang === "hi" ? "पूर्व-निर्धारित पैकेज दरें" : "Pre-Negotiated Tariffs"}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {lang === "hi"
                ? "सामान्य व जटिल सर्जरियों के लिए पूर्व-निर्धारित संस्थागत पैकेज दरें। सख्त अनुबंधों के कारण किसी भी अप्रत्याशित या गुप्त पोस्ट-ऑपरेटिव बिलिंग का भय नहीं रहता।"
                : "Pre-agreed institutional costs for cardiac, orthopedic, and general surgeries. Strict adherence to zero hidden charges ensures total financial peace of mind for families."}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}