"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Star,
  ShieldCheck,
  Search,
  PhoneCall,
  CheckCircle2,
  Info,
  Check,
  Copy,
  AlertCircle,
  Loader2,
  X,
  BadgePercent,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppPromo from "@/components/AppPromo";
import { supabase } from "@/lib/supabase";
import {
  translateHospitalName,
  translateSpecialty,
  translateCity,
} from "@/lib/hindiDictionary";
import { useLanguage } from "@/lib/useLanguage";

interface HospitalFromDb {
  id: string;
  name: string;
  name_hi?: string;
  slug?: string;
  address: string;
  address_hi?: string;
  city: string;
  city_hi?: string;
  state?: string;
  pincode?: string;
  rating: number;
  total_reviews: number;
  specialties?: string[];
  specialties_hi?: string[];
  facilities?: string[];
  facilities_hi?: string[];
  contact_number?: string;
  virtual_exotel_number?: string;
  discount_percentage?: number;
  image_url?: string;
  is_active?: boolean;
  featured?: boolean;
  tag?: string;
  tag_hi?: string;
  nabh_accredited?: boolean;
  jci_accredited?: boolean;
  distance?: string;
  branches_count?: number;
  verified_doctors_count?: number;
}

const FALLBACK_HOSPITALS: HospitalFromDb[] = [
  {
    id: "hosp-jain-ent",
    name: "Jain ENT Hospital",
    name_hi: "जैन ईएनटी हॉस्पिटल",
    slug: "jain-ent-hospital",
    address: "1, 2, Press Enclave Marg, Saket Institutional Area, New Delhi",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110017",
    rating: 5,
    total_reviews: 680,
    specialties: ["ENT", "Cardiology", "Micro-Surgery", "Head & Neck", "Audiology"],
    facilities: [
      "24x7 Specialized ENT Emergency",
      "NABH & JCI Accredited Protocols",
      "Cashless TPA Desk (Zero Dispute Policy)",
      "Dedicated Satvik & Jain Meal Concierge",
      "Level 1 Audiology & Micro-Surgery Lab"
    ],
    contact_number: "+91-11-4050-7000",
    discount_percentage: 25,
    image_url: "/images/hospital_shanti.jpg",
    is_active: true,
    featured: true,
    tag: "Best Hospital • 5★ Rated",
    nabh_accredited: true,
    distance: "0.63 km",
    branches_count: 3,
    verified_doctors_count: 6,
  },
  {
    id: "hosp-csk",
    name: "CSK Hospital",
    name_hi: "सीएसके हॉस्पिटल",
    slug: "csk-hospital",
    address: "A-24, Outer Ring Road, South Extension, New Delhi",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110049",
    rating: 5,
    total_reviews: 540,
    specialties: ["Laparoscopic Surgery", "Cardiology", "Orthopedics", "General Medicine"],
    facilities: [
      "24x7 Multi-Specialty Emergency & Cath Lab",
      "NABH Accredited Surgical Theatres",
      "Fast-Track Cashless Insurance Approvals",
      "Pure Satvik Nutritious Patient Meals",
      "Pre-Negotiated Fair Institutional Tariffs"
    ],
    contact_number: "+91-11-2625-8000",
    discount_percentage: 25,
    image_url: "/images/hospital_arihant.jpg",
    is_active: true,
    featured: true,
    tag: "NABH & JCI Certified",
    nabh_accredited: true,
    jci_accredited: true,
    distance: "5.3 km",
    branches_count: 2,
    verified_doctors_count: 4,
  },
  {
    id: "hosp-medanta",
    name: "Medanta - The Medicity",
    name_hi: "मेदांता - द मेडिसिटी",
    slug: "medanta-the-medicity",
    address: "CH Bakhtawar Singh Road, Sector 38, Gurugram, Haryana",
    city: "Gurugram",
    state: "Haryana",
    pincode: "122001",
    rating: 4.9,
    total_reviews: 510,
    specialties: ["Cardiology", "Neurology", "Oncology", "Organ Transplant"],
    facilities: [
      "International Quaternary Care Infrastructure",
      "JCI & NABH Accredited Centers of Excellence",
      "24x7 Emergency Critical Care & ECMO Units",
      "Adityam Fast Cashless Insurance Desk"
    ],
    contact_number: "+91-124-4141-414",
    discount_percentage: 25,
    image_url: "/images/hospital_mahaveer.jpg",
    is_active: true,
    featured: true,
    tag: "TPA Cashless Partner",
    nabh_accredited: true,
    jci_accredited: true,
    distance: "14 km",
    branches_count: 4,
    verified_doctors_count: 12,
  },
  {
    id: "hosp-fortis",
    name: "Fortis Healthcare",
    name_hi: "फोर्टिस हेल्थकेयर",
    slug: "fortis-healthcare",
    address: "Sector - 44, Opposite HUDA City Centre Metro Station, Gurugram, Haryana",
    city: "Gurugram",
    state: "Haryana",
    pincode: "122002",
    rating: 4.8,
    total_reviews: 380,
    specialties: ["Orthopedics", "Cardiology", "Pediatrics", "Pulmonology"],
    facilities: [
      "Advanced Robotic Orthopedics & Joint Replacement",
      "24x7 Level 1 Trauma Care",
      "Cashless TPA Pre-Authorization Support",
      "Satvik Diet Options for In-Patients"
    ],
    contact_number: "+91-124-7160-000",
    discount_percentage: 20,
    image_url: "/images/hospital_aadityam.jpg",
    is_active: true,
    featured: true,
    tag: "Specialist Cardiac & Ortho Care",
    nabh_accredited: true,
    distance: "18 km",
    branches_count: 5,
    verified_doctors_count: 8,
  },
  {
    id: "hosp-max",
    name: "Max Super Speciality Hospital",
    name_hi: "मैक्स सुपर स्पेशलिटी हॉस्पिटल",
    slug: "max-super-speciality",
    address: "1, 2, Press Enclave Road, Saket, New Delhi",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110017",
    rating: 4.9,
    total_reviews: 720,
    specialties: ["Oncology", "Nephrology", "General Surgery", "Gastroenterology"],
    facilities: [
      "Advanced Cancer & Surgical Oncology Wing",
      "NABH & NABL Accredited Diagnostics",
      "Direct Patient Billing Relief Protocols",
      "24x7 Cashless Hospital Desk"
    ],
    contact_number: "+91-11-2651-5050",
    discount_percentage: 20,
    image_url: "/images/hospital_shanti.jpg",
    is_active: true,
    featured: true,
    tag: "Super Speciality Network",
    nabh_accredited: true,
    jci_accredited: true,
    distance: "2.1 km",
    branches_count: 6,
    verified_doctors_count: 15,
  },
];

export default function HospitalsPage() {
  const [lang, setLang] = useLanguage();
  const [hospitals, setHospitals] = useState<HospitalFromDb[]>(FALLBACK_HOSPITALS);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedHospitalModal, setSelectedHospitalModal] = useState<HospitalFromDb | null>(null);

  // Form State for Hospital Empanelment
  const [formHospitalName, setFormHospitalName] = useState("");
  const [formFacilityType, setFormFacilityType] = useState("Multi-Specialty Hospital");
  const [formAccreditation, setFormAccreditation] = useState("NABH Accredited");
  const [formBedCount, setFormBedCount] = useState("");
  const [formIcuBeds, setFormIcuBeds] = useState("");
  const [formCity, setFormCity] = useState("New Delhi");
  const [formAddress, setFormAddress] = useState("");
  const [formContactPerson, setFormContactPerson] = useState("");
  const [formDesignation, setFormDesignation] = useState("Medical Superintendent");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSpecialties, setFormSpecialties] = useState("");
  const [formSatvikKitchen, setFormSatvikKitchen] = useState(true);
  const [formCashlessTpa, setFormCashlessTpa] = useState(true);
  const [formNotes, setFormNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [applicationId, setApplicationId] = useState("");
  const [copiedAppId, setCopiedAppId] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const hospitalsScrollRef = useRef<HTMLDivElement>(null);

  const scrollHospitals = (direction: "left" | "right") => {
    if (hospitalsScrollRef.current) {
      const scrollAmount = direction === "left" ? -460 : 460;
      hospitalsScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const hospitalFaqs = [
    {
      qEn: "How does cashless TPA insurance facilitation work at empanelled hospitals?",
      qHi: "संबद्ध अस्पतालों में कैशलेस टीपीए बीमा सुविधा कैसे काम करती है?",
      aEn: "Our on-ground Hospital Buddy assists patient families at the hospital's TPA desk, coordinating standardized pre-authorizations and document verification to ensure fast, dispute-free claim approvals with zero unnecessary delays.",
      aHi: "अस्पताल के टीपीए डेस्क पर हमारे 'अस्पताल मित्र' समन्वयक मरीज के परिवार की सहायता करते हैं और सभी आवश्यक दस्तावेजों का त्वरित सत्यापन कराकर बिना रुकावट क्लेम पास कराते हैं।",
    },
    {
      qEn: "What are the eligibility criteria for a hospital to join the Adityam Network?",
      qHi: "अस्पताल संबद्धता के लिए क्या योग्यता मानदण्ड आवश्यक हैं?",
      aEn: "We welcome accredited multispecialty hospitals, nursing homes, and surgical centers with valid NABH/State Health Authority registrations, transparent billing ethics, and clean clinical audit track records.",
      aHi: "हम NABH या राज्य स्वास्थ्य प्राधिकरण द्वारा पंजीकृत, पारदर्शी बिलिंग व्यवस्था और नैतिक चिकित्सा मानकों का पालन करने वाले मल्टी-स्पेशलिटी अस्पतालों का स्वागत करते हैं।",
    },
    {
      qEn: "Are there any upfront listing charges or annual platform fees?",
      qHi: "क्या नेटवर्क से जुड़ने के लिए कोई अग्रिम अथवा वार्षिक शुल्क है?",
      aEn: "No. Empanelment on Adityam Niramayaa is completely free of listing or upfront fees. We operate as a service-oriented non-profit collective dedicated to transparent, compassionate healthcare access.",
      aHi: "नहीं। आदित्यम् निरामया: से जुड़ने के लिए कोई भी अग्रिम पंजीकरण या वार्षिक शुल्क नहीं लिया जाता। यह गैर-व्यावसायिक सेवा पर आधारित पावन मंच है।",
    },
    {
      qEn: "What is the role of the dedicated on-site 'Hospital Buddy' desk?",
      qHi: "अस्पताल में 'अस्पताल मित्र' सहायता डेस्क की क्या भूमिका होती है?",
      aEn: "Our on-site care executives manage patient reception, guide families through OPD & admission queues, verify pre-fixed surgery package billing, and coordinate pure Satvik meal concierge services.",
      aHi: "हमारे ऑन-साइट केयर एक्जीक्यूटिव मरीजों के स्वागत, ओपीडी और भर्ती कतार प्रबंधन, रियायती पैकेज बिलिंग सत्यापन और शुद्ध सात्विक भोजन व्यवस्था में पूरी मदद करते हैं।",
    },
    {
      qEn: "How are pre-negotiated surgery package tariffs determined?",
      qHi: "रियायती सर्जरी पैकेज दरें कैसे तय की जाती हैं?",
      aEn: "Our Medical Governance Council collaborates with your clinical board to establish transparent, all-inclusive package tariffs (covering bed stay, OT, surgical consumables, and nursing) with zero surprise discharge costs.",
      aHi: "हमारी मेडिकल काउंसिल आपके अस्पताल प्रबंधन के साथ मिलकर पारदर्शी व पूर्ण पैकेज दरें (ओटी, बेड, दवाएं व नर्सिंग सहित) तय करती है ताकि मरीज पर कोई छुपा खर्च न आए।",
    },
  ];

  // 1. Fetch live hospitals from Supabase with fallback
  useEffect(() => {
    async function fetchHospitals() {
      try {
        setFetchError("");
        const { data, error } = await supabase
          .from("hospitals")
          .select("*")
          .eq("is_active", true)
          .order("rating", { ascending: false });

        if (error) {
          throw new Error(error.message);
        }
        if (data && data.length > 0) {
          // Merge with fallback default fields if missing
          const enriched = data.map((item, idx) => ({
            ...item,
            distance: item.distance || `${(0.8 + idx * 1.4).toFixed(1)} km`,
            branches_count: item.branches_count || (idx % 3) + 2,
            verified_doctors_count: item.verified_doctors_count || (idx * 2) + 4,
          }));
          setHospitals(enriched);
        } else {
          setHospitals(FALLBACK_HOSPITALS);
        }
      } catch (err: unknown) {
        console.error("Error fetching hospitals from Supabase:", err);
        setHospitals(FALLBACK_HOSPITALS);
      } finally {
        setLoading(false);
      }
    }

    fetchHospitals();
  }, []);

  // 2. Dynamic cities from fetched hospitals
  const dynamicCities = useMemo(() => {
    const cities = Array.from(new Set(hospitals.map((h) => h.city).filter(Boolean)));
    return ["All Cities", ...cities.sort()];
  }, [hospitals]);

  // 3. Filtered Hospitals
  const filteredHospitals = useMemo(() => {
    return hospitals.filter((hosp) => {
      if (selectedCity !== "All Cities" && hosp.city !== selectedCity) {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchName = hosp.name?.toLowerCase().includes(q);
        const matchCity = hosp.city?.toLowerCase().includes(q);
        const matchAddress = hosp.address?.toLowerCase().includes(q);
        const matchSpecialties = hosp.specialties?.some((s) => s.toLowerCase().includes(q));
        const matchFacilities = hosp.facilities?.some((f) => f.toLowerCase().includes(q));
        return matchName || matchCity || matchAddress || matchSpecialties || matchFacilities;
      }
      return true;
    });
  }, [hospitals, selectedCity, searchQuery]);

  const handleHospitalRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!formHospitalName.trim()) {
      setSubmitError(lang === "hi" ? "कृपया अस्पताल का नाम दर्ज करें" : "Please enter the hospital / institution name");
      return;
    }
    if (!formContactPerson.trim()) {
      setSubmitError(
        lang === "hi"
          ? "कृपया संपर्क अधिकारी या मेडिकल सुपरिंटेंडेंट का नाम दर्ज करें"
          : "Please enter the administrator / medical superintendent name"
      );
      return;
    }
    if (!formPhone.trim() || formPhone.replace(/\D/g, "").length < 10) {
      setSubmitError(lang === "hi" ? "कृपया 10 अंकों का वैध आधिकारिक फोन नंबर दर्ज करें" : "Please enter a valid 10-digit official contact number");
      return;
    }
    if (!formEmail.trim() || !formEmail.includes("@")) {
      setSubmitError(lang === "hi" ? "कृपया वैध आधिकारिक ईमेल दर्ज करें" : "Please enter a valid official email address");
      return;
    }
    if (!formBedCount.trim()) {
      setSubmitError(lang === "hi" ? "कृपया कुल बेड संख्या दर्ज करें" : "Please enter total bed capacity");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/register-hospital", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hospitalName: formHospitalName,
          facilityType: formFacilityType,
          accreditation: formAccreditation,
          bedCount: formBedCount,
          icuBeds: formIcuBeds,
          city: formCity,
          address: formAddress,
          contactPerson: formContactPerson,
          designation: formDesignation,
          phone: formPhone,
          email: formEmail,
          specialties: formSpecialties,
          hasSatvikKitchen: formSatvikKitchen,
          hasCashlessTpa: formCashlessTpa,
          notes: formNotes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit hospital empanelment application");
      }

      setApplicationId(data.applicationId);
      setSubmitSuccess(true);
      // Reset form fields
      setFormHospitalName("");
      setFormBedCount("");
      setFormIcuBeds("");
      setFormAddress("");
      setFormContactPerson("");
      setFormPhone("");
      setFormEmail("");
      setFormSpecialties("");
      setFormNotes("");
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
        <section className="relative overflow-hidden bg-[#0A1128] text-white pt-8 pb-10 sm:pt-10 sm:pb-12 px-4 sm:px-6">
          {/* Subtle Ambient Radial Lighting Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.22),transparent_75%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Breadcrumb & Empanel Hospital CTA */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Link href="/" className="hover:text-white transition-colors">
                  {lang === "hi" ? "मुख्य पृष्ठ" : "Home"}
                </Link>
                <span className="text-slate-600">/</span>
                <span className="text-blue-300 font-bold">
                  {lang === "hi" ? "सहयोगी अस्पताल" : "Partner Hospitals"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200">
                  {lang === "hi" ? "150+ मान्यता प्राप्त अस्पताल" : "150+ Empanelled Hospitals"}
                </span>

                <a
                  href="#register-hospital"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all cursor-pointer backdrop-blur-md"
                >
                  <Building2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>{lang === "hi" ? "अस्पताल जोड़ें" : "Empanel Hospital"}</span>
                </a>
              </div>
            </div>

            {/* Hero Main Copy: Concise & Premium */}
            <div className="max-w-2xl">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
                {lang === "hi" ? (
                  <>संबद्ध अस्पताल संजाल। कैशलेस चिकित्सा व संस्थागत राहत।</>
                ) : (
                  <>Premier Empanelled Hospitals.</>
                )}
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {lang === "hi"
                  ? "मान्यता प्राप्त सुपर-स्पेशलिटी संस्थानों में पारदर्शी दरों पर इलाज। 24x7 त्वरित टीपीए कैशलेस डेस्क और सात्विक आहार।"
                  : "Access leading healthcare institutions with pre-negotiated transparent tariffs, dedicated cashless TPA desks, and pure Satvik patient nutrition."}
              </p>

              {/* Minimalist Single-Line Pills */}
              <div className="flex flex-wrap gap-2 mt-4 text-[11px] text-slate-300">
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  ✔ Zero Hidden Fees
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  ✔ 24x7 Cashless TPA Desk
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  ✔ Pure Satvik Patient Nutrition
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  ✔ Dedicated Care Concierge
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. SEARCH & CITY FILTER STATION
        ==================================================================== */}
        <section className="relative -mt-6 z-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-[0_15px_35px_rgba(23,37,84,0.08)] border border-slate-200/80">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                {/* Search */}
                <div className="md:col-span-8 relative">
                  <div className="relative flex items-center">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={
                        lang === "hi"
                          ? "अस्पताल का नाम, सर्जरी या विशेषता खोजें..."
                          : "Search hospital name, address, or medical specialty..."
                      }
                      className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200/90 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600 transition-all"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3.5 text-xs text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* City Picker */}
                <div className="md:col-span-4">
                  <div className="relative flex items-center">
                    <MapPin className="w-4 h-4 text-amber-500 absolute left-3.5 pointer-events-none" />
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 rounded-xl bg-slate-50 border border-slate-200/90 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600 cursor-pointer appearance-none transition-all"
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
            4. PARTNER HOSPITALS DIRECTORY (HORIZONTAL SCROLL EXPERIENCE)
        ==================================================================== */}
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span>{lang === "hi" ? "संबद्ध अस्पताल संजाल" : "Empanelled Network Hospitals"}</span>
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {lang === "hi"
                    ? "सभी केंद्र कैशलेस टीपीए डेस्क व सत्यापित गुणवत्ता मानकों से सुसज्जित हैं"
                    : "Accredited multi-specialty centers with 100% Cashless TPA and verified doctors"}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {filteredHospitals.length} {lang === "hi" ? "अस्पताल प्रदर्शित" : "Institutions Displayed"}
                </span>

                {/* Left / Right Scroll Controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => scrollHospitals("left")}
                    className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 active:bg-slate-200 border border-slate-200/90 shadow-2xs flex items-center justify-center text-slate-700 hover:text-blue-600 transition-all cursor-pointer"
                    aria-label="Previous Hospital"
                    title={lang === "hi" ? "पिछला अस्पताल" : "Previous"}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollHospitals("right")}
                    className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 active:bg-slate-200 border border-slate-200/90 shadow-2xs flex items-center justify-center text-slate-700 hover:text-blue-600 transition-all cursor-pointer"
                    aria-label="Next Hospital"
                    title={lang === "hi" ? "अगला अस्पताल" : "Next"}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {loading ? (
              <div className="py-20 text-center">
                <Loader2 className="w-10 h-10 animate-spin text-blue-600 mx-auto mb-3" />
                <p className="text-sm font-semibold text-slate-600">
                  {lang === "hi" ? "अस्पताल लोड हो रहे हैं..." : "Loading empanelled hospitals..."}
                </p>
              </div>
            ) : fetchError ? (
              <div className="bg-rose-50 rounded-3xl p-8 text-center border border-rose-200 max-w-lg mx-auto">
                <AlertCircle className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                <h3 className="text-base font-bold text-rose-900">Unable to load hospitals</h3>
                <p className="text-xs text-rose-700 mt-1">{fetchError}</p>
              </div>
            ) : filteredHospitals.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-200">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === "hi" ? "कोई अस्पताल नहीं मिला" : "No Partner Hospitals Found"}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === "hi" ? "कृपया शहर या खोज शब्द बदलकर प्रयास करें।" : "Try choosing 'All Cities' or resetting your search."}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCity("All Cities");
                  }}
                  className="mt-5 px-5 py-2.5 rounded-full bg-[#0A1128] text-white text-xs font-bold shadow-md hover:bg-blue-900 transition-all cursor-pointer"
                >
                  {lang === "hi" ? "सभी अस्पताल देखें" : "View All Hospitals"}
                </button>
              </div>
            ) : (
              <div>
                <div
                  ref={hospitalsScrollRef}
                  className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6"
                >
                {filteredHospitals.map((hosp, idx) => {
                  const imageSrc = hosp.image_url || "/images/hospital_shanti.jpg";
                  const distanceStr = hosp.distance || `${(0.6 + idx * 1.5).toFixed(1)} km`;
                  const discountPct = hosp.discount_percentage || 25;
                  const branches = hosp.branches_count || (idx % 3) + 2;
                  const verifiedDocs = hosp.verified_doctors_count || (idx * 2) + 4;
                  const rawSpecs = hosp.specialties && hosp.specialties.length > 0
                    ? hosp.specialties.slice(0, 2)
                    : ["General Medicine", "Cardiology"];
                  const displayedSpecs = rawSpecs.map(s => translateSpecialty(s, undefined, lang));
                  const remainingSpecsCount = hosp.specialties && hosp.specialties.length > 2
                    ? hosp.specialties.length - 2
                    : 4;
                  const hospName = translateHospitalName(hosp.name, hosp.name_hi, lang);
                  const cityName = translateCity(hosp.city, hosp.city_hi, lang);
                  const addressStr = lang === "hi" && hosp.address_hi ? hosp.address_hi : (hosp.address || `${cityName}, India`);
                  const reviewsStr = lang === "hi" ? `(${hosp.total_reviews || 680} समीक्षाएं)` : `(${hosp.total_reviews || 680})`;
                  const branchesStr = lang === "hi" ? `${branches} शाखाएं` : `${branches} Branches`;
                  const verifiedDocsStr = lang === "hi" ? `${verifiedDocs}+ सत्यापित डॉक्टर्स` : `${verifiedDocs}+ Verified Doctors`;
                  const discountStr = lang === "hi" ? `${discountPct}% ओपीडी छूट` : `${discountPct}% OFF OPD`;

                  return (
                    <div
                      key={hosp.id}
                      className="w-[86vw] sm:w-[420px] md:w-[460px] shrink-0 snap-start bg-white rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                    >
                      {/* Top Photo Header with Overlaid Badges and Organic Wave Curve */}
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                        <Image
                          src={imageSrc}
                          alt={hosp.name}
                          fill
                          sizes="(max-width: 768px) 86vw, 460px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Top-Right Star Rating Pill */}
                        <div className="absolute top-3.5 right-3.5 z-10 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 shadow-sm flex items-center gap-1.5 text-xs font-black text-slate-800">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{hosp.rating || 5}</span>
                          <span className="text-slate-400 font-semibold">{reviewsStr}</span>
                        </div>

                        {/* Bottom-Left Distance Pill */}
                        <div className="absolute bottom-4 left-3.5 z-10 bg-slate-950/75 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                          <MapPin className="w-3 h-3 text-blue-400 shrink-0" />
                          <span>{distanceStr}</span>
                        </div>

                        {/* Bottom-Right Discount Pill */}
                        <div className="absolute bottom-4 right-3.5 z-10 bg-white text-blue-600 border border-blue-200 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                          <BadgePercent className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{discountStr}</span>
                        </div>

                        {/* Organic White Wave Transition SVG */}
                        <div className="absolute -bottom-0.5 left-0 right-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
                          <svg
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            className="relative block w-full h-6 text-white fill-current"
                          >
                            <path d="M0,35 C280,85 580,-5 880,45 C1020,70 1120,45 1200,38 L1200,120 L0,120 Z" />
                          </svg>
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Hospital Name */}
                          <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                            {hospName}
                          </h3>

                          {/* Hospital Address */}
                          <p className="text-xs text-slate-500 font-medium truncate mt-1">
                            {addressStr}
                          </p>

                          {/* Specialties Pills */}
                          <div className="flex flex-wrap items-center gap-1.5 mt-3">
                            {displayedSpecs.map((spec, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
                              >
                                {spec}
                              </span>
                            ))}
                            <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                              +{remainingSpecsCount}
                            </span>
                          </div>

                          {/* Quick Stats Row: Branches & Verified Doctors */}
                          <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold text-slate-600 mt-4 pt-3 border-t border-slate-100">
                            <div className="flex items-center gap-1.5 text-blue-600">
                              <Building2 className="w-3.5 h-3.5" />
                              <span className="text-slate-700 font-bold">{branchesStr}</span>
                            </div>
                            <span className="text-slate-300">•</span>
                            <div className="flex items-center gap-1.5 text-emerald-600">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span className="text-slate-700 font-bold">{verifiedDocsStr}</span>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Actions Row: Know More / Facilities + View Doctors & Book */}
                        <div className="flex items-center gap-2.5 pt-4 mt-3 border-t border-slate-100/80">
                          {/* Facilities / Details Button to Know More */}
                          <button
                            type="button"
                            onClick={() => setSelectedHospitalModal(hosp)}
                            className="px-3.5 py-3 rounded-2xl bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border border-slate-200/90 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-2xs hover:border-slate-300"
                            title={lang === "hi" ? "अस्पताल व सुविधाएं जानें" : "Know more about hospital & facilities"}
                          >
                            <Info className="w-3.5 h-3.5 text-blue-600" />
                            <span>{lang === "hi" ? "सुविधाएं" : "Facilities"}</span>
                          </button>

                          {/* View Doctors & Book CTA */}
                          <Link
                            href={`/doctors?hospital=${encodeURIComponent(hosp.name)}`}
                            className="flex-1 py-3 px-4 rounded-2xl bg-[#2563EB] hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] transition-all cursor-pointer"
                          >
                            <span>{lang === "hi" ? "डॉक्टर देखें व बुक करें" : "View Doctors & Book"}</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Horizontal Scroll Hint */}
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium mt-3 px-1">
                <span className="flex items-center gap-1.5 text-slate-500">
                  <span>←</span>
                  <span>{lang === "hi" ? "अन्य अस्पताल देखने के लिए क्षैतिज स्क्रॉल या स्वाइप करें" : "Scroll horizontally or swipe to browse all hospitals"}</span>
                  <span>→</span>
                </span>
                <span className="hidden sm:inline text-slate-400">
                  {lang === "hi" ? `कुल ${filteredHospitals.length} सत्यापित केंद्र` : `${filteredHospitals.length} Verified Network Centers`}
                </span>
              </div>
            </div>
            )}
          </div>
        </section>

        {/* ====================================================================
            5. MODAL: DETAILED HOSPITAL CAMPUS & INFRASTRUCTURE POPUP
        ==================================================================== */}
        {selectedHospitalModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setSelectedHospitalModal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-slate-200">
                <Image
                  src={selectedHospitalModal.image_url || "/images/hospital_shanti.jpg"}
                  alt={selectedHospitalModal.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#172554]/90 text-blue-200 text-xs font-bold border border-white/20">
                  {lang === "hi" ? (selectedHospitalModal.tag_hi || "सत्यापित अस्पताल संजाल") : (selectedHospitalModal.tag || "Empanelled Network Hospital")}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {translateHospitalName(selectedHospitalModal.name, selectedHospitalModal.name_hi, lang)}
                </h3>
                <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>
                    {lang === "hi" && selectedHospitalModal.address_hi ? selectedHospitalModal.address_hi : selectedHospitalModal.address},{" "}
                    {translateCity(selectedHospitalModal.city, selectedHospitalModal.city_hi, lang)}{" "}
                    {selectedHospitalModal.pincode ? `- ${selectedHospitalModal.pincode}` : ""}
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700 leading-relaxed border-t border-b border-slate-150 py-4 my-4">
                {selectedHospitalModal.specialties && (
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">
                      {lang === "hi" ? "प्रमुख विशेषज्ञताएं:" : "Key Clinical Specialties:"}
                    </span>
                    <p className="text-slate-600">
                      {selectedHospitalModal.specialties.map(s => translateSpecialty(s, undefined, lang)).join(", ")}
                    </p>
                  </div>
                )}

                {selectedHospitalModal.facilities && (
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">
                      {lang === "hi" ? "उपलब्ध सुविधाएं:" : "Campus Facilities:"}
                    </span>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      {selectedHospitalModal.facilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedHospitalModal.contact_number && (
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">
                      {lang === "hi" ? "हेल्पलाइन व संपर्क नंबर:" : "Official Contact & Helpline:"}
                    </span>
                    <p className="text-slate-600 font-medium">{selectedHospitalModal.contact_number}</p>
                  </div>
                )}
              </div>

              <div className="bg-indigo-50 rounded-2xl p-3 border border-indigo-200 text-indigo-900 text-xs mb-4">
                <span className="font-bold block mb-1">
                  {lang === "hi" ? "भर्ती एवं टीपीए सहायता:" : "Admission & Cashless Guidance:"}
                </span>
                {lang === "hi"
                  ? "अस्पताल में भर्ती अथवा कैशलेस टीपीए समन्वय हेतु हमारे ऑन-साइट केयर डेस्क या हेल्पलाइन 1800-208-1008 पर संपर्क करें।"
                  : "For planned in-patient admissions or fast-track cashless TPA support, contact the on-site Adityam Care Desk or call 1800-208-1008."}
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  href={`/doctors?hospital=${encodeURIComponent(selectedHospitalModal.name)}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>{lang === "hi" ? "डॉक्टर देखें व बुक करें" : "View Doctors & Book"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={
                    selectedHospitalModal.contact_number
                      ? `tel:${selectedHospitalModal.contact_number.replace(/[^\d+]/g, "")}`
                      : "tel:18002081008"
                  }
                  className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                  <span>{lang === "hi" ? "हेल्पलाइन" : "Helpline"}</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedHospitalModal(null)}
                  className="px-4 py-3 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs font-bold transition-all cursor-pointer"
                >
                  {lang === "hi" ? "बंद करें" : "Close"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ====================================================================
            6. WHY LEADING HOSPITALS EMPANEL WITH ADITYAM NIRAMAYAA
        ==================================================================== */}
        <section className="py-14 bg-white border-t border-slate-200/90 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                {lang === "hi" ? "अस्पताल संबद्धता लाभ" : "Institutional Empanelment Advantages"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mt-2">
                {lang === "hi" ? "शीर्ष अस्पताल आदित्यम् से क्यों जुड़ते हैं?" : "Why Leading Hospitals Partner With Us?"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-light">
                {lang === "hi"
                  ? "पारदर्शी, सम्मानजनक और गैर-व्यावसायिक साझेदारी जो अस्पताल और रोगी दोनों को शक्ति प्रदान करती है।"
                  : "An ethical alliance focused on patient trust, streamlined insurance processing, and dignified care."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  titleEn: "Zero Middleman Aggregators",
                  titleHi: "शून्य बिचौलिया कमीशन",
                  descEn: "Direct patient outreach without predatory commission cuts or marketing intermediaries.",
                  descHi: "बिना किसी तीसरे पक्ष कमीशन एजेंटों के सीधे जागरूक परिवारों से जुड़ाव।",
                },
                {
                  step: "02",
                  titleEn: "Dedicated On-Site Care Desks",
                  titleHi: "ऑन-साइट केयर डेस्क सुविधा",
                  descEn: "Trained Adityam coordinators assist with patient admission queues, reducing staff burden.",
                  descHi: "हमारे समन्वयक अस्पताल काउंटर पर मरीज मार्गदर्शन व कतार प्रबंधन संभालते हैं।",
                },
                {
                  step: "03",
                  titleEn: "Fast TPA Pre-Authorizations",
                  titleHi: "त्वरित कैशलेस टीपीए स्वीकृति",
                  descEn: "Standardized clinical documentation protocols resulting in rapid insurance dispute resolution.",
                  descHi: "सुव्यवस्थित डिजिटल दस्तावेजों के कारण बीमा क्लेम में रुकावटें समाप्त होती हैं।",
                },
                {
                  step: "04",
                  titleEn: "Community Goodwill & Trust",
                  titleHi: "सच्चा सामाजिक विश्वास",
                  descEn: "Elevate your hospital brand within a value-driven community inspired by sacred service.",
                  descHi: "पवित्र सेवा मूल्यों से प्रेरित विशाल समुदाय के मध्य संस्था की प्रतिष्ठा में अभिवृद्धि।",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all transform-gpu hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300">{item.step}</span>
                    <div className="px-2.5 py-1 rounded-full text-[11px] font-bold border bg-indigo-50 text-indigo-700 border-indigo-200">
                      {lang === "hi" ? "आदित्यम् मानदण्ड" : "Network Pillar"}
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
            7. FREQUENTLY ASKED QUESTIONS (TATA 1MG STYLE ACCORDION)
        ==================================================================== */}
        <section className="py-14 bg-white  border-slate-200/90 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                {lang === "hi" ? "अस्पताल संबद्धता प्रश्नोत्तरी" : "Empanelment FAQ"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
                {lang === "hi" ? "अस्पताल संबद्धता के बारे में जरूरी जानकारी" : "Frequently Asked Questions About Empanelment"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                {lang === "hi"
                  ? "कैशलेस टीपीए, ऑनबोर्डिंग मानदण्ड और रियायती पैकेज बिलिंग से जुड़े स्पष्ट उत्तर।"
                  : "Transparent guidelines on cashless TPA desks, hospital onboarding, and patient care ethics."}
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {hospitalFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="transition-colors">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <HelpCircle className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>{lang === "hi" ? faq.qHi : faq.qEn}</span>
                      </div>
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-indigo-50 text-indigo-600" : "bg-slate-100 text-slate-500"
                          }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {lang === "hi" ? faq.aHi : faq.aEn}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            8. HOSPITAL EMPANELMENT & ONBOARDING (SAVES TO SUPABASE)
        ==================================================================== */}
        <section id="register-hospital" className="py-16 bg-[#F8FAFC] px-4 sm:px-6 scroll-mt-20 border-t border-slate-200/90">
          <div className="max-w-4xl mx-auto space-y-10">

            {/* Welcoming Illustrative Hospital Banner (Tata 1mg Style) */}
            <div className="relative bg-gradient-to-br from-[#FFFDF8] via-[#FAF7EE] to-[#F5EEDB] rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-md overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Illustration Column */}
                <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 drop-shadow-xl group">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-amber-400/25 to-blue-500/25 rounded-full blur-lg group-hover:scale-105 transition-transform" />
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white border-4 border-white shadow-md">
                      <Image
                        src="/images/doc+hoso.png"
                        alt={lang === "hi" ? "अस्पताल संबद्धता पोर्टल" : "Hospital Empanelment Portal"}
                        fill
                        sizes="(max-width: 768px) 240px, 300px"
                        className="object-cover group-hover:scale-103 transition-transform duration-300"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Text & Pitch Column */}
                <div className="lg:col-span-7 space-y-4 order-1 lg:order-2 text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold border border-indigo-200">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{lang === "hi" ? "अस्पताल संबद्धता पोर्टल" : "Institutional Empanelment Portal"}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {lang === "hi" ? (
                      <>
                        अपने अस्पताल को संबद्ध करें। <br />
                        <span className="text-indigo-700 font-serif italic font-normal text-xl sm:text-2xl lg:text-3xl">
                          आदित्यम् हेल्थकेयर संजाल से जुड़ें।
                        </span>
                      </>
                    ) : (
                      <>
                        Empanel Your Hospital. <br />
                        <span className="text-indigo-700 font-serif italic font-normal text-xl sm:text-2xl lg:text-3xl">
                          Join India&apos;s Ethical Healthcare Network.
                        </span>
                      </>
                    )}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {lang === "hi"
                      ? "बिना किसी अग्रिम शुल्क के हजारों परिवारों तक पहुंच। ऑन-साइट केयर डेस्क, त्वरित कैशलेस टीपीए क्लीयरेंस और पारदर्शी पैकेज सर्जरी की सुविधा।"
                      : "Expand patient reach with zero middleman commissions. Benefit from on-site patient coordinators, accelerated cashless insurance approvals, and streamlined surgery package admissions."}
                  </p>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-700 font-medium pt-1">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{lang === "hi" ? "शून्य अग्रिम शुल्क" : "Zero Upfront Fees"}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{lang === "hi" ? "48 घंटे में सत्यापन" : "48-Hour Verification"}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{lang === "hi" ? "ऑन-साइट केयर डेस्क" : "On-Site Care Desk"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Status Alerts */}
            {submitSuccess ? (
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-200 shadow-xl text-center animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 border-2 border-emerald-300">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {lang === "hi" ? "अस्पताल संबद्धता आवेदन सफलतापूर्वक दर्ज हुआ!" : "Empanelment Application Received Successfully!"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg mx-auto">
                  {lang === "hi"
                    ? "आपके संस्थान का विवरण आदित्यम् निरामया के नेटवर्क प्रत्यायन बोर्ड को प्राप्त हो गया है। हमारी टीम 24 से 48 घंटे में संपर्क कर दस्तावेज सत्यापन व निरीक्षण प्रक्रिया आरंभ करेगी।"
                    : "Your institutional application has been registered in the Supabase database. Our Hospital Accreditation Committee will connect within 24 to 48 hours."}
                </p>

                {/* Application Reference ID Badge */}
                <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-left">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">
                      {lang === "hi" ? "अस्पताल आवेदन संदर्भ संख्या" : "Hospital Reference No."}
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
                    <span className="font-bold text-indigo-700 block mb-1">Step 1: Document Review</span>
                    <p className="text-slate-600 text-[11px]">NABH / Fire safety / Registration certificates audit.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-150 text-xs">
                    <span className="font-bold text-indigo-700 block mb-1">Step 2: Campus Audit</span>
                    <p className="text-slate-600 text-[11px]">Clinical committee inspection of OT, ICU & kitchen hygiene.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-150 text-xs">
                    <span className="font-bold text-indigo-700 block mb-1">Step 3: MOU & Care Desk</span>
                    <p className="text-slate-600 text-[11px]">Formal signing, rate packaging & on-site desk activation.</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-150">
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 rounded-full bg-[#172554] hover:bg-[#1E3A8A] text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    {lang === "hi" ? "अन्य संस्थान का पंजीकरण करें" : "Register Another Healthcare Facility"}
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

                <form onSubmit={handleHospitalRegisterSubmit} className="space-y-6">
                  {/* Row 1: Hospital Name & Facility Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "अस्पताल / संस्थान का नाम" : "Hospital / Healthcare Facility Name"}{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formHospitalName}
                        onChange={(e) => setFormHospitalName(e.target.value)}
                        placeholder="e.g. Jain ENT Hospital / Fortis Healthcare"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "संस्थान का प्रकार" : "Facility Classification"}{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formFacilityType}
                        onChange={(e) => setFormFacilityType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 transition-all"
                      >
                        <option value="Super Specialty Hospital">Super Specialty Hospital</option>
                        <option value="Multi-Specialty Hospital">Multi-Specialty Hospital</option>
                        <option value="Surgical Day Care Center">Surgical Day Care Center</option>
                        <option value="Eye & ENT Specialty Center">Eye & ENT Specialty Center</option>
                        <option value="Maternity & Pediatric Hospital">Maternity & Pediatric Hospital</option>
                        <option value="General Hospital / Nursing Home">General Hospital / Nursing Home</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 2: Accreditation & Bed Capacity */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "प्रत्यायन मान्यता (Accreditation)" : "Accreditation Status"}{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formAccreditation}
                        onChange={(e) => setFormAccreditation(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 transition-all"
                      >
                        <option value="NABH Fully Accredited">NABH Fully Accredited</option>
                        <option value="JCI & NABH Accredited">JCI & NABH Accredited</option>
                        <option value="NABH Entry-Level">NABH Entry-Level Certified</option>
                        <option value="State Clinical Establishment Act">State Registered / In Process</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "कुल इन-पेशेंट बेड्स" : "Total In-Patient Beds"}{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="number"
                        min="10"
                        max="2000"
                        required
                        value={formBedCount}
                        onChange={(e) => setFormBedCount(e.target.value)}
                        placeholder="e.g. 150"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "क्रिटिकल आईसीयू बेड्स" : "Dedicated ICU Beds"}
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="500"
                        value={formIcuBeds}
                        onChange={(e) => setFormIcuBeds(e.target.value)}
                        placeholder="e.g. 30"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: City & Complete Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "शहर" : "City"} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formCity}
                        onChange={(e) => setFormCity(e.target.value)}
                        placeholder="e.g. New Delhi, Gurugram, Jaipur"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 transition-all"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "परिसर का पूर्ण पता" : "Complete Campus Address"}{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formAddress}
                        onChange={(e) => setFormAddress(e.target.value)}
                        placeholder="Plot No., Sector, Road, Landmark, Pincode"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 4: Nodal Contact Administrator */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "संपर्क अधिकारी / चिकित्सा अधीक्षक" : "Administrator / Superintendent Name"}{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formContactPerson}
                        onChange={(e) => setFormContactPerson(e.target.value)}
                        placeholder="Dr. Rajesh Verma / Mr. Anil Gupta"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "पदनाम (Designation)" : "Designation"}
                      </label>
                      <input
                        type="text"
                        value={formDesignation}
                        onChange={(e) => setFormDesignation(e.target.value)}
                        placeholder="Medical Superintendent / Director"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "आधिकारिक मोबाइल नंबर" : "Official Phone No."}{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Specialties */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        placeholder="administration@hospitaldomain.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {lang === "hi" ? "प्रमुख विशेषताएं व विभाग" : "Key Specialties Offered"}
                      </label>
                      <input
                        type="text"
                        value={formSpecialties}
                        onChange={(e) => setFormSpecialties(e.target.value)}
                        placeholder="e.g. Cardiology, Orthopedics, ICU, Oncology, ENT"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Key Facility Toggles */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">
                          {lang === "hi" ? "सात्विक व जैन आहार रसोई उपलब्ध?" : "Satvik & Pure Veg Kitchen Available?"}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {lang === "hi" ? "बिना लहसुन-प्याज का स्वच्छ भोजन" : "Pure hygienic patient meals"}
                        </span>
                      </div>
                      <input
                        type="checkbox"
                        checked={formSatvikKitchen}
                        onChange={(e) => setFormSatvikKitchen(e.target.checked)}
                        className="w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer"
                      />
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">
                          {lang === "hi" ? "सक्रिय कैशलेस TPA हेल्पडेस्क?" : "Active Cashless TPA Desk?"}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {lang === "hi" ? "सभी प्रमुख बीमा कंपनियों के साथ" : "Empanelled with major TPAs/Insurers"}
                        </span>
                      </div>
                      <input
                        type="checkbox"
                        checked={formCashlessTpa}
                        onChange={(e) => setFormCashlessTpa(e.target.checked)}
                        className="w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Notes & Overview */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      {lang === "hi" ? "अस्पताल का संक्षिप्त विवरण / विशेष बुनियादी ढांचा" : "Institutional Infrastructure & Notes"}
                    </label>
                    <textarea
                      rows={3}
                      value={formNotes}
                      onChange={(e) => setFormNotes(e.target.value)}
                      placeholder={
                        lang === "hi"
                          ? "कैथ लैब, मॉड्यूलर ओटी, डायलिसिस यूनिट या अन्य उपलब्ध उन्नत उपकरणों का विवरण दें..."
                          : "Mention Cath labs, modular OTs, dialysis machines, emergency wings or certifications..."
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 transition-all resize-none"
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
                          <span>{lang === "hi" ? "अस्पताल आवेदन सहेजा जा रहा है..." : "Submitting to Supabase Registry..."}</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-amber-400" />
                          <span>
                            {lang === "hi" ? "अस्पताल संबद्धता आवेदन जमा करें" : "Submit Hospital Empanelment Application"}
                          </span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      {lang === "hi"
                        ? "आवेदन जमा होने पर आधिकारिक संदर्भ संख्या जारी होगी। डेटा सीधे सुप्रीबेस में सुरक्षित रूप से दर्ज होता है।"
                        : "Official reference ID is generated upon submission and securely registered in Supabase."}
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* ====================================================================
            9. TATA 1MG STYLE APP DOWNLOAD BANNER
        ==================================================================== */}
        <AppPromo lang={lang} />

        {/* ====================================================================
            10. INSTITUTIONAL HELPLINE BANNER
        ==================================================================== */}
        <section className="py-10 bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#172554] text-white px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-white/10 px-3 py-1 rounded-full mb-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>{lang === "hi" ? "अस्पताल संबद्धता सेल" : "Institutional Empanelment Desk"}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {lang === "hi"
                  ? "अस्पताल संबद्धता नियमों के बारे में प्रश्न हैं?"
                  : "Have questions regarding network empanelment?"}
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 mt-1">
                {lang === "hi"
                  ? "हमारे नेटवर्क रिलेशनशिप मैनेजर से सीधे बात करें: 1800-208-1008 (टोल-फ्री) या hospital-partner@adityamniramayaa.org"
                  : "Speak directly with our Institutional Partnerships Desk at 1800-208-1008 or email partner@adityamniramayaa.org"}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:18002081008"
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>{lang === "hi" ? "हेल्पलाइन पर कॉल करें" : "Call Partnership Desk"}</span>
              </a>

              <Link
                href="/about"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all flex items-center justify-center cursor-pointer"
              >
                {lang === "hi" ? "संस्थान परिचय" : "About Our Mission"}
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
