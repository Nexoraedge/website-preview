"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Activity,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Building2,
  Heart,
  Search,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Bed,
  Utensils,
  BadgePercent,
  TrendingDown,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/useLanguage";

interface SurgeryPackage {
  id: string;
  nameEn: string;
  nameHi: string;
  specialtyEn: string;
  specialtyHi: string;
  tagEn: string;
  tagHi: string;
  stayDaysEn: string;
  stayDaysHi: string;
  recoveryEn: string;
  recoveryHi: string;
  approxPackage: number;
  marketRate: number;
  inclusionsEn: string[];
  inclusionsHi: string[];
  descriptionEn: string;
  descriptionHi: string;
}

const SURGERIES_DATA: SurgeryPackage[] = [
  {
    id: "surg-knee",
    nameEn: "Robotic Total Knee Replacement",
    nameHi: "रोबोटिक टोटल नी रिप्लेसमेंट (घुटना प्रत्यारोपण)",
    specialtyEn: "Orthopedics & Joint Care",
    specialtyHi: "ऑर्थोपेडिक्स एवं जोड़ प्रत्यारोपण",
    tagEn: "US-FDA Approved Implant",
    tagHi: "यूएस-एफडीए प्रमाणित इम्प्लांट",
    stayDaysEn: "3-4 Days Hospital Stay",
    stayDaysHi: "३-४ दिन अस्पताल में भर्ती",
    recoveryEn: "Walks on Next Day • Full recovery 3-4 weeks",
    recoveryHi: "अगले दिन से चलना • ३-४ सप्ताह में पूर्ण सुधार",
    approxPackage: 145000,
    marketRate: 220000,
    inclusionsEn: [
      "FDA-Approved High-Flexion Knee Implant",
      "Modular OT Charges & Surgeon Team Fees",
      "Pre-Op Anaesthesia & Post-Op ICU (24h)",
      "Dedicated Physiotherapy Sessions",
      "Pure Satvik Nutritious Patient Meals",
      "Dedicated On-Ground Hospital Buddy Escort",
    ],
    inclusionsHi: [
      "एफडीए-प्रमाणित हाई-फ्लेक्सियन घुटना इम्प्लांट",
      "मॉड्यूलर ओटी व वरिष्ठ सर्जन टीम शुल्क",
      "एनेस्थीसिया व 24 घंटे आईसीयू निगरानी",
      "अस्पताल में फिजियोथेरेपिस्ट सत्र",
      "शुद्ध सात्विक पौष्टिक भोजन",
      "व्यक्तिगत अस्पताल मित्र सहायता",
    ],
    descriptionEn: "Sub-millimeter robotic precision for minimum tissue trauma, faster walking, and decades of pain-free knee mobility.",
    descriptionHi: "रोबोटिक तकनीक द्वारा न्यूनतम चीरा, कम दर्द, तुरंत चलना और दशकों तक चलने वाला घुटना प्रत्यारोपण।",
  },
  {
    id: "surg-cataract",
    nameEn: "Micro-Incision Laser Cataract Surgery",
    nameHi: "माइक्रो-चीरा फेको मोतियाबिंद ऑपरेशन",
    specialtyEn: "Ophthalmology (Eye Care)",
    specialtyHi: "नेत्र रोग विशेषज्ञ",
    tagEn: "Day Care • Stitchless",
    tagHi: "डे-केयर • टांका-रहित",
    stayDaysEn: "Day Care (4-6 Hours)",
    stayDaysHi: "डे-केयर (४-६ घंटे)",
    recoveryEn: "Same day discharge • Normal vision in 24h",
    recoveryHi: "उसी दिन घर वापसी • २४ घंटे में सामान्य दृष्टि",
    approxPackage: 18500,
    marketRate: 35000,
    inclusionsEn: [
      "Hydrophobic Foldable Monofocal/Multifocal Lens",
      "Cold Phaco Robotic Laser Technology",
      "Pre-Op Biometry & A-Scan Measurements",
      "Surgeon Fees & Daycare Recovery Bed",
      "Post-Op Protective Eye Kit & Drops",
    ],
    inclusionsHi: [
      "हाइड्रोफोबिक फोल्डेबल लेंस",
      "कोल्ड फेको उन्नत लेजर तकनीक",
      "ऑपरेशन पूर्व बायोमेट्री व ए-स्कैन जांच",
      "वरिष्ठ आई सर्जन शुल्क व डे-केयर बेड",
      "ऑपरेशन उपरांत सुरक्षा चश्मा व दवाइयां",
    ],
    descriptionEn: "Painless, stitchless, and bladeless phaco cataract removal with imported foldable intraocular lens.",
    descriptionHi: "बिना चीरे, बिना टांके का दर्द-रहित फेको ऑपरेशन, आधुनिक फोल्डेबल लेंस के साथ।",
  },
  {
    id: "surg-gallbladder",
    nameEn: "Laparoscopic Gallbladder Stone Removal",
    nameHi: "लेप्रोस्कोपिक पित्ताशय (गॉलब्लेडर) पथरी ऑपरेशन",
    specialtyEn: "Advanced Laparoscopic Surgery",
    specialtyHi: "एडवांस्ड लेप्रोस्कोपिक सर्जरी",
    tagEn: "Minimally Invasive",
    tagHi: "दूरबीन पद्धति",
    stayDaysEn: "1-2 Days Hospital Stay",
    stayDaysHi: "१-२ दिन अस्पताल में भर्ती",
    recoveryEn: "Return to work in 5-7 days",
    recoveryHi: "५-७ दिनों में सामान्य दिनचर्या",
    approxPackage: 42000,
    marketRate: 70000,
    inclusionsEn: [
      "HD 4K Laparoscopic Video Tower OT Charges",
      "General Anaesthesia & Chief Surgeon Fees",
      "Private/Twin-Sharing Room Accommodation",
      "Histopathology (Biopsy) of Removed Organ",
      "On-Ground TPA Desk Insurance Pre-Auth",
    ],
    inclusionsHi: [
      "4K एचडी दूरबीन ओटी उपकरण उपयोग शुल्क",
      "वरिष्ठ लेप्रोस्कोपिक सर्जन व एनेस्थीसिया शुल्क",
      "ट्विन शेयरिंग / प्राइवेट रूम सुविधा",
      "निकाले गए अंग की हिस्टोपैथोलॉजी (बायोप्सी)",
      "टीपीए बीमा कैशलेस क्लीयरेंस ऑन-ग्राउंड सहायता",
    ],
    descriptionEn: "Keyhole laparoscopic cholecystectomy for safe, permanent relief from recurring gallbladder stones and infection.",
    descriptionHi: "दूरबीन पद्धति से केवल छोटे से छेद द्वारा सुरक्षित पथरी व पित्ताशय का ऑपरेशन।",
  },
  {
    id: "surg-hernia",
    nameEn: "Laparoscopic Inguinal / Umbilical Hernia Repair",
    nameHi: "लेप्रोस्कोपिक हर्निया रिपेयर (जाली प्रत्यारोपण)",
    specialtyEn: "General & Laparoscopic Surgery",
    specialtyHi: "जनरल व लेप्रोस्कोपिक सर्जरी",
    tagEn: "Dual-Side Mesh Included",
    tagHi: "उच्च गुणवत्ता मेश शामिल",
    stayDaysEn: "1-2 Days Hospital Stay",
    stayDaysHi: "१-२ दिन अस्पताल में भर्ती",
    recoveryEn: "Walks on day 1 • Normal activity in 10 days",
    recoveryHi: "पहले दिन से चलना • १० दिन में सामान्य कार्य",
    approxPackage: 48000,
    marketRate: 80000,
    inclusionsEn: [
      "Premium Polypropylene / Dual Mesh Implant",
      "4K Laparoscopic TEP/TAPP Surgical Setup",
      "Surgeon, Assistant & Anaesthetist Fees",
      "2-Day Room Nursing & Standard Medicines",
      "Zero Surprise Discharge Surcharges",
    ],
    inclusionsHi: [
      "प्रीमियम पॉलीप्रोपाइलीन सर्जिकल मेश (जाली)",
      "4K लेप्रोस्कोपिक दूरबीन सर्जरी तकनीक",
      "मुख्य सर्जन व एनेस्थीसिया विशेषज्ञ शुल्क",
      "२ दिन का कमरा, नर्सिंग व प्राथमिक दवाइयां",
      "डिस्चार्ज पर कोई अघोषित अतिरिक्त शुल्क नहीं",
    ],
    descriptionEn: "Advanced tension-free keyhole hernia repair with composite mesh to permanently prevent hernia recurrence.",
    descriptionHi: "बिना खिंचाव के दूरबीन द्वारा जाली लगाकर हर्निया का स्थायी समाधान।",
  },
  {
    id: "surg-kidney-stone",
    nameEn: "Laser Kidney Stone Removal (RIRS / PCNL)",
    nameHi: "लेजर द्वारा गुर्दे की पथरी का ऑपरेशन (RIRS / PCNL)",
    specialtyEn: "Urology & Kidney Care",
    specialtyHi: "यूरोलॉजी एवं गुर्दा रोग विशेषज्ञ",
    tagEn: "Holmium Laser Tech",
    tagHi: "होलमियम लेजर तकनीक",
    stayDaysEn: "24-48 Hours Stay",
    stayDaysHi: "२४-४८ घंटे अस्पताल में भर्ती",
    recoveryEn: "Painless urination • Full relief in 48h",
    recoveryHi: "दर्द-रहित • ४८ घंटे में पूर्ण राहत",
    approxPackage: 55000,
    marketRate: 90000,
    inclusionsEn: [
      "High-Power Holmium Laser Dusting Technology",
      "Flexible Ureterorenoscopy (RIRS Scope) Charges",
      "DJ Stent Placement & Follow-Up Removal",
      "Urologist & OT Team Package Fees",
      "Satvik Dietary Guidance for Stone Prevention",
    ],
    inclusionsHi: [
      "हाई-पावर होलमियम लेजर तकनीक से पथरी चूरा करना",
      "फ्लेक्सिबल यूरेटेरोरेनोस्कोपी (RIRS) स्कोप शुल्क",
      "डीजे स्टेंट लगाना व फॉलो-अप निकालना",
      "यूरोलॉजिस्ट व ओटी टीम का संपूर्ण पैकेज",
      "भविष्य में पथरी की रोकथाम हेतु आहार परामर्श",
    ],
    descriptionEn: "Complete stone pulverization using flexible laser without skin incisions, preserving healthy kidney function.",
    descriptionHi: "बिना त्वचा पर चीरा लगाए प्राकृतिक मार्ग से लेजर द्वारा गुर्दे की पथरी को बारीक चूरा कर निकालना।",
  },
  {
    id: "surg-maternity",
    nameEn: "Sacred Maternity & Normal / C-Section Package",
    nameHi: "सुरक्षित प्रसव व मातृत्व पैकेज (सामान्य / सी-सेक्शन)",
    specialtyEn: "Obstetrics & Gynecology",
    specialtyHi: "स्त्री एवं प्रसूति रोग विशेषज्ञ",
    tagEn: "Satvik Mother Care",
    tagHi: "सात्विक मातृत्व देखभाल",
    stayDaysEn: "2-3 Days Hospital Stay",
    stayDaysHi: "२-३ दिन अस्पताल में भर्ती",
    recoveryEn: "Mother & newborn dedicated room support",
    recoveryHi: "माता व नवजात शिशु की विशेष देखभाल",
    approxPackage: 45000,
    marketRate: 85000,
    inclusionsEn: [
      "Senior Gynecologist & Paediatrician Team Charges",
      "Labour Room / Modular OT Charges",
      "Immediate Newborn Screen & First Vaccinations",
      "Nutritious Ayurvedic/Satvik Mother Meals",
      "Private AC Room Stay with Attendant Couch",
    ],
    inclusionsHi: [
      "वरिष्ठ स्त्री रोग विशेषज्ञ व शिशु रोग विशेषज्ञ टीम",
      "लेबर रूम / आधुनिक ऑपरेशन थिएटर शुल्क",
      "नवजात शिशु की प्राथमिक जांच व प्रारंभिक टीकाकरण",
      "प्रसूता हेतु पौष्टिक आयुर्वेदिक/सात्विक पथ्य",
      "प्राइवेट एसी कमरा व परिजन हेतु व्यवस्था",
    ],
    descriptionEn: "Dignified, compassionate childbirth environment supporting natural delivery advocates and ethical C-sections when necessary.",
    descriptionHi: "गरिमामयी, सुरक्षित और करुणापूर्ण वातावरण में प्रसव, जहां सामान्य प्रसव को सर्वोच्च प्राथमिकता दी जाती है।",
  },
];

export default function SurgeriesPage() {
  const [lang, setLang] = useLanguage();
  const isHi = lang === "hi";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const filteredSurgeries = useMemo(() => {
    return SURGERIES_DATA.filter((surg) => {
      if (selectedSpecialty !== "all" && !surg.specialtyEn.toLowerCase().includes(selectedSpecialty.toLowerCase())) {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        return (
          surg.nameEn.toLowerCase().includes(q) ||
          surg.nameHi.includes(q) ||
          surg.specialtyEn.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [searchQuery, selectedSpecialty]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#172554] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar lang={lang} onToggleLang={setLang} />

      <main className="flex-1">
        {/* ====================================================================
            2. HERO SECTION: EXECUTIVE LUXURY DARK NAVY (#0A1128)
        ==================================================================== */}
        <section className="relative overflow-hidden bg-[#0A1128] text-white pt-8 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6">
          {/* Subtle ambient radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.22),transparent_75%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Bar: Breadcrumb + Trust Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-white transition-colors">
                  {isHi ? "होम" : "Home"}
                </Link>
                <span>/</span>
                <span className="text-amber-400 font-bold">
                  {isHi ? "नियोजित सर्जरी पैकेज" : "Planned IPD Surgeries"}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {isHi
                    ? "शून्य अघोषित शुल्क • पूर्व-निर्धारित पैकेज दरें"
                    : "Zero Hidden Charges • Pre-Fixed Package Tariffs"}
                </span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {isHi ? (
                  <>
                    पारदर्शी नियोजित सर्जरी पैकेज। <br />
                    <span className="text-amber-300 font-serif italic font-normal text-2xl sm:text-3xl lg:text-4xl">
                      सत्यापित एनएबीएच अस्पताल एवं अस्पताल मित्र ऑन-ग्राउंड सहायता।
                    </span>
                  </>
                ) : (
                  <>
                    Transparent Planned Surgical Care. <br />
                    <span className="text-amber-300 font-serif italic font-normal text-2xl sm:text-3xl lg:text-4xl">
                      Pre-Agreed Tariffs & Dedicated On-Ground Hospital Buddy.
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-3.5 text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-3xl">
                {isHi
                  ? "डिस्चार्ज के समय अप्रत्याशित भारी बिलों के डर से मुक्त हों। घुटना प्रत्यारोपण, मोतियाबिंद, हर्निया व पित्ताशय ऑपरेशन जैसे प्रमुख पैकेज पूर्व-निर्धारित दरों पर, जहां हर मरीज को अस्पताल मित्र का साथ मिलता है।"
                  : "Say goodbye to surprise hospital billing upon discharge. Access major surgical procedures at pre-negotiated all-inclusive packages with dedicated clinical auditing and on-ground bedside coordination."}
              </p>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 mt-7 max-w-4xl">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5 backdrop-blur-xs text-left">
                <BadgePercent className="w-4 h-4 text-emerald-400 mb-1" />
                <div className="text-xs font-bold text-white">
                  {isHi ? "पूर्व-निर्धारित पैकेज" : "All-Inclusive Packages"}
                </div>
                <div className="text-[11px] text-slate-400">
                  {isHi ? "ओटी, बेड, इम्प्लांट व दवाइयां" : "OT, Bed, Implant & Care"}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5 backdrop-blur-xs text-left">
                <HeartHandshake className="w-4 h-4 text-amber-400 mb-1" />
                <div className="text-xs font-bold text-white">
                  {isHi ? "अस्पताल मित्र साथ" : "Hospital Buddy Escort"}
                </div>
                <div className="text-[11px] text-slate-400">
                  {isHi ? "भर्ती से डिस्चार्ज तक मार्गदर्शन" : "Dedicated bedside support"}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5 backdrop-blur-xs text-left">
                <ShieldCheck className="w-4 h-4 text-blue-400 mb-1" />
                <div className="text-xs font-bold text-white">
                  {isHi ? "क्लिनिकल एथिक्स ऑडिट" : "Clinical Audit Shield"}
                </div>
                <div className="text-[11px] text-slate-400">
                  {isHi ? "शून्य अनावश्यक सर्जरी या स्टेंट" : "Zero unnecessary stenting"}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5 backdrop-blur-xs text-left">
                <Utensils className="w-4 h-4 text-teal-400 mb-1" />
                <div className="text-xs font-bold text-white">
                  {isHi ? "सात्विक पथ्य व्यवस्था" : "Pure Satvik Meals"}
                </div>
                <div className="text-[11px] text-slate-400">
                  {isHi ? "मरीज के लिए शुद्ध भोजन" : "Nutritious patient diet"}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. SEARCH & SPECIALTY FILTER
        ==================================================================== */}
        <section className="relative -mt-6 z-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-slate-200">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      isHi
                        ? "सर्जरी खोजें (जैसे घुटना, मोतियाबिंद, पित्ताशय, हर्निया, पथरी)..."
                        : "Search planned surgery (e.g. Knee, Cataract, Gallbladder, Hernia, Stone)..."
                    }
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                  />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                  {[
                    { id: "all", labelEn: "All Surgeries", labelHi: "सभी सर्जरी" },
                    { id: "ortho", labelEn: "Orthopedics", labelHi: "हड्डी व जोड़" },
                    { id: "laparoscopic", labelEn: "Laparoscopic", labelHi: "दूरबीन (लेप्रोस्कोपी)" },
                    { id: "eye", labelEn: "Eye Care", labelHi: "नेत्र रोग" },
                    { id: "kidney", labelEn: "Urology", labelHi: "गुर्दा व पथरी" },
                    { id: "gynecology", labelEn: "Maternity", labelHi: "प्रसूति" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedSpecialty(cat.id === "all" ? "all" : cat.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold shrink-0 transition-colors cursor-pointer ${(selectedSpecialty === "all" && cat.id === "all") ||
                          (selectedSpecialty === cat.id && cat.id !== "all")
                          ? "bg-[#0A1128] text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                    >
                      {isHi ? cat.labelHi : cat.labelEn}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. SURGERY PACKAGES GRID (CORE SHOWCASE)
        ==================================================================== */}
        <section className="py-10 sm:py-14 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-600" />
              <span>{isHi ? "सत्यापित सर्जरी पैकेज" : "Curated Transparent Surgery Packages"}</span>
            </h2>
            <span className="text-xs text-slate-500 font-semibold">
              {filteredSurgeries.length} {isHi ? "सर्जरी पैकेज उपलब्ध" : "Procedures Available"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSurgeries.map((surg) => {
              const savings = surg.marketRate - surg.approxPackage;
              const discountPercent = Math.round((savings / surg.marketRate) * 100);

              return (
                <div
                  key={surg.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-400/60 transition-all flex flex-col justify-between text-left"
                >
                  <div>
                    {/* Header Row: Specialty Tag + Stay Duration */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                        {isHi ? surg.specialtyHi : surg.specialtyEn}
                      </span>
                      <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                        {isHi ? surg.stayDaysHi : surg.stayDaysEn}
                      </span>
                    </div>

                    {/* Surgery Name */}
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {isHi ? surg.nameHi : surg.nameEn}
                    </h3>

                    {/* Badge Pill */}
                    <div className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">

                      <span>{isHi ? surg.tagHi : surg.tagEn}</span>
                    </div>

                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                      {isHi ? surg.descriptionHi : surg.descriptionEn}
                    </p>

                    {/* Inclusions List */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {isHi ? "पैकेज में क्या शामिल है:" : "Key Package Inclusions:"}
                      </span>
                      {(isHi ? surg.inclusionsHi : surg.inclusionsEn).map((item, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Pricing & CTA */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-medium">
                          {isHi ? "पारदर्शी संस्थागत दर" : "Institutional Tariff"}
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs text-slate-400 line-through">₹{surg.marketRate.toLocaleString("en-IN")}</span>
                          <span className="text-xl font-extrabold text-[#0A1128]">₹{surg.approxPackage.toLocaleString("en-IN")}</span>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                        {isHi ? `बचत ₹${savings.toLocaleString("en-IN")} (${discountPercent}%)` : `Save ₹${savings.toLocaleString("en-IN")} (${discountPercent}%)`}
                      </span>
                    </div>

                    <Link
                      href={`/book?service=${encodeURIComponent(surg.nameEn)}&specialty=Surgeries`}
                      className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{isHi ? "लागत अनुमान व परामर्श बुक करें" : "Book Surgery Consultation"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ====================================================================
            5. HOW ADITYAM IPD SURGICAL CARE WORKS (3-STEP TACTILE)
        ==================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-200 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {isHi ? "सरल एवं सुरक्षित प्रक्रिया" : "How IPD Care Works"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1128] mt-2">
                {isHi ? "बिना किसी तनाव के पारदर्शी सर्जरी" : "3-Step Transparent Surgical Care"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                <span className="text-2xl font-black text-slate-300 block mb-2">01</span>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {isHi ? "विशेषज्ञ डॉक्टर से परामर्श व समीक्षा" : "Consult Surgeon & Review Reports"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {isHi
                    ? "वरिष्ठ सर्जन से परामर्श लें और दूसरी राय (सेकंड ओपिनियन) प्राप्त करें। हमारा क्लिनिकल बोर्ड सुनिश्चित करता है कि सर्जरी वास्तव में आवश्यक हो।"
                    : "Meet senior surgical faculty for clinical assessment and genuine second opinions to confirm medical necessity."}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                <span className="text-2xl font-black text-slate-300 block mb-2">02</span>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {isHi ? "अस्पताल मित्र ऑन-ग्राउंड सहयोग" : "Bedside Hospital Buddy Assistance"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {isHi
                    ? "सहयोगी अस्पताल में प्रवेश से लेकर टीपीए कैशलेस बीमा अप्रूवल और बेड आवंटन तक अस्पताल मित्र आपके साथ उपस्थित रहेगा।"
                    : "Dedicated on-ground coordinator manages admission paperwork, cashless TPA insurance approvals, and room setup."}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                <span className="text-2xl font-black text-slate-300 block mb-2">03</span>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {isHi ? "पूर्व-निर्धारित बिलिंग व सात्विक पथ्य" : "Pre-Agreed Bill & Satvik Recovery"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {isHi
                    ? "डिस्चार्ज के समय केवल पहले से तय पैकेज राशि लागू होगी। कोई अघोषित सरचार्ज नहीं और मरीज को शुद्ध सात्विक भोजन सुविधा।"
                    : "Discharge at the exact pre-negotiated package with zero unexpected charges, supported by wholesome Satvik meals."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            6. SURGERY HELPLINE CALLOUT
        ==================================================================== */}
        <section className="py-10 bg-[#0A1128] text-white px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                {isHi ? "24/7 सर्जरी हेल्पलाइन" : "24/7 Surgery Assistance"}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {isHi ? "क्या आपको किसी सर्जरी की सलाह दी गई है?" : "Have You Been Advised a Surgical Procedure?"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                {isHi
                  ? "अपनी रिपोर्ट हमारे विशेषज्ञ मेडिकल बोर्ड के साथ साझा करें और निःशुल्क लागत अनुमान व निष्पक्ष दूसरी राय प्राप्त करें।"
                  : "Share your clinical reports with our medical advisory board for a free package estimate and ethical second opinion."}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:18002081008"
                className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-sm transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>{isHi ? "कॉल 1800-208-1008" : "Call 1800-208-1008"}</span>
              </a>

              <Link
                href="/book?service=Surgeries"
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all flex items-center justify-center cursor-pointer"
              >
                <span>{isHi ? "रिपोर्ट भेजें" : "Upload Reports"}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Global Footer */}
      <Footer />
    </div>
  );
}

