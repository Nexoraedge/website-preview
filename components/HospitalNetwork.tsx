"use client";

import React from "react";
import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Leaf,
  CreditCard,
  HeartHandshake,
  Plus,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface HospitalNetworkProps {
  lang?: "en" | "hi";
  onOpenPartner?: () => void;
  onOpenBooking?: (doctorOrHospital?: string, specialty?: string) => void;
}

const PARTNER_HOSPITALS = [
  {
    id: "hosp-1",
    nameEn: "Arihant Super Specialty Hospital",
    nameHi: "अरिहंत सुपर स्पेशलिटी हॉस्पिटल",
    cityEn: "Delhi NCR",
    cityHi: "दिल्ली एनसीआर",
    bedsEn: "350+ Beds",
    bedsHi: "350+ बेड्स क्षमता",
    specialtiesEn: "Cardiology, Oncology, Joint Replacement, Neurology",
    specialtiesHi: "कार्डियोलॉजी, ऑन्कोलॉजी, जोड़ प्रत्यारोपण, न्यूरोलॉजी",
    tagEn: "NABH Accredited",
    tagHi: "एनएबीएच मान्यता प्राप्त",
    image: "/images/hospital_arihant.jpg",
    featuresEn: [
      "Dedicated Cashless TPA Desk",
      "Pure Satvik & Jain Meal Concierge",
      "On-Ground Adityam Buddy Assigned",
      "Pre-Negotiated Surgery Tariffs",
    ],
    featuresHi: [
      "समर्पित कैशलेस TPA हेल्पडेस्क",
      "मरीजों हेतु शुद्ध सात्विक भोजन सुविधा",
      "ऑन-ग्राउंड आदित्यम् अस्पताल मित्र",
      "पूर्व-निर्धारित सर्जरी पैकेज दरें",
    ],
  },
  {
    id: "hosp-2",
    nameEn: "Bhagwan Mahaveer Super Specialty",
    nameHi: "भगवान महावीर सुपर स्पेशलिटी हॉस्पिटल",
    cityEn: "Vile Parle, Mumbai",
    cityHi: "विले पार्ले, मुम्बई",
    bedsEn: "500+ Beds",
    bedsHi: "500+ बेड्स क्षमता",
    specialtiesEn: "Neurology, Nephrology, Emergency Trauma, Organ Transplant",
    specialtiesHi: "न्यूरोलॉजी, नेफ्रोलॉजी, इमरजेंसी ट्रॉमा, ऑर्गन ट्रांसप्लांट",
    tagEn: "Center of Excellence",
    tagHi: "सेंटर ऑफ एक्सीलेंस",
    image: "/images/hospital_mahaveer.jpg",
    featuresEn: [
      "24/7 Advanced Emergency & ICU",
      "Direct Institutional Concession",
      "Zero Hidden Middleman Fees",
      "Priority Bed Allocation",
    ],
    featuresHi: [
      "24/7 अत्याधुनिक इमरजेंसी व आईसीयू",
      "सीधा संस्थागत रियायती लाभ",
      "शून्य गुप्त या अप्रत्याशित चार्ज",
      "प्राथमिकता से बेड उपलब्धता",
    ],
  },
  {
    id: "hosp-3",
    nameEn: "Shanti Memorial Multispecialty Care",
    nameHi: "शांति मेमोरियल मल्टीस्पेशलिटी हॉस्पिटल",
    cityEn: "Navrangpura, Ahmedabad",
    cityHi: "नवरंगपुरा, अहमदाबाद",
    bedsEn: "220+ Beds",
    bedsHi: "220+ बेड्स क्षमता",
    specialtiesEn: "Gastroenterology, Pediatrics, Advanced Laparoscopy",
    specialtiesHi: "गैस्ट्रोएंटरोलॉजी, बाल रोग, लैप्रोस्कोपिक सर्जरी",
    tagEn: "Empanelled Network",
    tagHi: "प्रमाणित नेटवर्क",
    image: "/images/hospital_shanti.jpg",
    featuresEn: [
      "Day-Care Surgery Center",
      "Discharge Medicines Concession",
      "Family Attendant Suites",
      "NABH Clinical Standards",
    ],
    featuresHi: [
      "डे-केयर सर्जरी विंग",
      "डिस्चार्ज दवाइयों पर विशेष छूट",
      "अटेंडेंट व फैमिली रूम्स",
      "एनएबीएच क्लीनिकल मानक",
    ],
  },
  {
    id: "hosp-4",
    nameEn: "Aadityam Trust Health Pavilion",
    nameHi: "आदित्यम् ट्रस्ट हेल्थ पवेलियन",
    cityEn: "Vijay Nagar, Indore",
    cityHi: "विजय नगर, इंदौर",
    bedsEn: "180+ Beds",
    bedsHi: "180+ बेड्स क्षमता",
    specialtiesEn: "General Surgery, Eye & Laser, Dialysis, Joint Care",
    specialtiesHi: "जनरल सर्जरी, नेत्र लेजर, डायलिसिस, जोड़ उपचार",
    tagEn: "Charitable Wing",
    tagHi: "सेवा एवं जन-कल्याण विंग",
    image: "/images/hospital_aadityam.jpg",
    featuresEn: [
      "Affordable Transparent Tariffs",
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

export default function HospitalNetwork({
  lang = "en",
  onOpenPartner,
  onOpenBooking,
}: HospitalNetworkProps) {
  return (
    <section
      id="hospitals"
      className="relative overflow-hidden font-sans select-none pt-20 pb-28 sm:pb-36"
      style={{
        // Seamless continuity from DoctorDirectory (#0B132B) deepening into true luxury obsidian black (#020409)
        background:
          "linear-gradient(180deg, #0B132B 0%, #080E21 20%, #050917 55%, #020409 100%)",
      }}
    >
      {/* 3D Ambient Glowing Lanterns in Deep Canvas */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[600px] h-[600px] bg-blue-600/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-amber-500/08 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* ==============================================================
            1. SECTION HEADER (Editorial Elegance + Trust Badge)
        ============================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 text-emerald-300 text-xs font-bold tracking-wider uppercase border border-emerald-500/30 shadow-xs">
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {lang === "hi"
                  ? "प्रमाणित सहयोगी अस्पताल नेटवर्क"
                  : "VERIFIED INSTITUTIONAL PARTNERSHIPS"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-[1.14]">
              {lang === "hi" ? (
                <>
                  शीर्ष प्रमाणित सहयोगी अस्पताल एवं{" "}
                  <span className="italic font-serif text-[#38BDF8]">
                    सर्जरी केंद्र।
                  </span>
                </>
              ) : (
                <>
                  World-Class Empanelled Partner{" "}
                  <span className="italic font-serif text-[#38BDF8]">
                    Hospitals & Pavilions.
                  </span>
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              {lang === "hi"
                ? "शीर्ष मल्टी-स्पेशलिटी अस्पतालों के साथ सीधा संस्थागत अनुबंध। प्राथमिकता से एडमिशन, पूर्व-निर्धारित पैकेज दरें, ऑन-ग्राउंड अस्पताल मित्र एवं शुद्ध सात्विक भोजन व्यवस्था।"
                : "Direct institutional tie-ups with vetted multi-specialty centers offering priority admissions, pre-negotiated package tariffs, dedicated patient buddies, and pure Satvik meals."}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenPartner?.()}
            className="group flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-emerald-400/50 text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-emerald-500/10 cursor-pointer self-start lg:self-auto shrink-0"
          >
            <span>
              {lang === "hi" ? "अस्पताल संबद्ध करें" : "Register Your Hospital"}
            </span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-colors">
              <Plus className="w-4 h-4" strokeWidth={2} />
            </div>
          </button>
        </div>

        {/* ==============================================================
            2. TRUST METRIC CHIPS STRIP (4 High-Impact Value Pillars)
        ============================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400">
              40+
            </div>
            <div className="text-xs text-slate-300 mt-1 font-medium">
              {lang === "hi" ? "सहयोगी अस्पताल" : "Empanelled Centers"}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              NCR, Mumbai, Ahmd, Indore
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-sky-400">
              100%
            </div>
            <div className="text-xs text-slate-300 mt-1 font-medium">
              {lang === "hi" ? "कैशलेस TPA डेस्क" : "Cashless Assistance"}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {lang === "hi" ? "शून्य पेपरवर्क देरी" : "Fast-track discharge"}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">
              30-40%
            </div>
            <div className="text-xs text-slate-300 mt-1 font-medium">
              {lang === "hi" ? "संस्थागत पैकेज बचत" : "Direct Concession"}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {lang === "hi" ? "सर्जरी व भर्ती प्रक्रियाओं पर" : "On surgeries & IPD stays"}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-300 flex items-center gap-1.5">
              <Leaf className="w-6 h-6 text-emerald-400" />
              <span>Satvik</span>
            </div>
            <div className="text-xs text-slate-300 mt-1 font-medium">
              {lang === "hi" ? "सात्विक आहार व्यवस्था" : "Dietary Concierge"}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {lang === "hi" ? "मरीजों एवं परिजनों हेतु" : "Pure hygienic meals"}
            </div>
          </div>
        </div>

        {/* ==============================================================
            3. LUXURY 2x2 HOSPITAL SHOWCASE CARDS (With Real Photography)
        ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {PARTNER_HOSPITALS.map((hosp) => {
            const hospName = lang === "hi" ? hosp.nameHi : hosp.nameEn;
            const hospCity = lang === "hi" ? hosp.cityHi : hosp.cityEn;
            const hospBeds = lang === "hi" ? hosp.bedsHi : hosp.bedsEn;
            const hospTag = lang === "hi" ? hosp.tagHi : hosp.tagEn;
            const hospSpecialties =
              lang === "hi" ? hosp.specialtiesHi : hosp.specialtiesEn;
            const hospFeatures =
              lang === "hi" ? hosp.featuresHi : hosp.featuresEn;

            return (
              <div
                key={hosp.id}
                className="group rounded-3xl overflow-hidden bg-[#0A1224]/80 backdrop-blur-xl border border-white/10 hover:border-emerald-400/40 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] flex flex-col justify-between"
              >
                <div>
                  {/* Hero Visual Area with Badges */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={hosp.image}
                      alt={hospName}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1224] via-[#0A1224]/40 to-transparent" />

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-950/80 text-emerald-300 border border-emerald-400/40 backdrop-blur-md shadow-md">
                        {hospTag}
                      </span>

                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white/90 border border-white/20 backdrop-blur-md">
                        {hospBeds}
                      </span>
                    </div>

                    {/* Bottom Location Indicator Over Image */}
                    <div className="absolute bottom-4 left-5 z-10 flex items-center gap-1.5 text-xs font-medium text-slate-200 bg-black/50 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{hospCity}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-2">
                        <span>{hospName}</span>
                        <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
                      </h3>

                      <p className="text-xs text-sky-200/80 mt-1 font-mono tracking-wide">
                        {hospSpecialties}
                      </p>
                    </div>

                    {/* Patient Privileges Grid */}
                    <div className="pt-2 border-t border-white/10">
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                        {lang === "hi"
                          ? "आदित्यम् मरीज विशेषाधिकार"
                          : "Adityam Patient Privileges"}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {hospFeatures.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 text-xs text-slate-200 font-light"
                          >
                            <CheckCircle2
                              className="w-3.5 h-3.5 text-emerald-400 shrink-0"
                              strokeWidth={2}
                            />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-5 sm:p-6 bg-black/40 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>
                      {lang === "hi"
                        ? "आदित्यम् हेल्पडेस्क सक्रिय"
                        : "Partner Desk Active"}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenBooking?.(hospName, "Hospital Admission")}
                    className="px-4 py-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] hover:text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {lang === "hi" ? "एडमिशन सहायता लें" : "Inquire Admission"}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==============================================================
            4. THE 3 CORE INSTITUTIONAL PILLARS (Glassmorphic Cards)
        ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-10 border-t border-white/10">
          
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