"use client";

import React, { useState } from "react";
import {
  Compass,
  Ticket,
  Leaf,
  ShieldCheck,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Search,
  Sparkles,
  Calendar,
  X,
  ChevronDown,
  Building2,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";

interface HowItWorksProps {
  lang?: "en" | "hi";
  onOpenBooking?: () => void;
  onOpenPartner?: () => void;
}

interface StepCardData {
  id: number;
  stepNum: string;
  titleEn: string;
  titleHi: string;
  tagEn: string;
  tagHi: string;
  shortDescEn: string;
  shortDescHi: string;
  fullDescEn: string;
  fullDescHi: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number; style?: React.CSSProperties }>;
  colors: {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    glow: string;
    accent: string;
  };
  featuresEn: string[];
  featuresHi: string[];
  actionEn: string;
  actionHi: string;
}

const STEPS: StepCardData[] = [
  {
    id: 1,
    stepNum: "01",
    titleEn: "Verified Doctors & Fair Tariffs",
    titleHi: "सत्यापित चिकित्सक एवं स्पष्ट दरें",
    tagEn: "100% Upfront Pricing",
    tagHi: "100% पारदर्शी दरें",
    shortDescEn: "Browse 2,500+ verified doctors and top hospitals with zero middleman commissions.",
    shortDescHi: "2,500+ प्रमाणित डॉक्टर्स और अस्पतालों की पूर्व-निर्धारित दरें देखें।",
    fullDescEn:
      "Direct access to vetted super-specialists across empanelled hospitals including Jain ENT, CKS Hospital, Arihant, and Mahaveer. View fixed OPD consultation fees and surgical packages upfront.",
    fullDescHi:
      "जैन ईएनटी, सीकेएस, अरिहंत व महावीर जैसे प्रमुख अस्पतालों में प्रमाणित विशेषज्ञों से परामर्श लें। बिना किसी गुप्त चार्ज के पूर्व-निर्धारित संस्थागत पैकेज दरें देखें।",
    icon: Compass,
    colors: {
      p1: "#03045e",
      p2: "#0077b6",
      p3: "#00b4d8",
      p4: "#90e0ef",
      p5: "#caf0f8",
      glow: "rgba(0, 180, 216, 0.35)",
      accent: "#38bdf8",
    },
    featuresEn: [
      "Jain ENT Hospital (Jaipur • ★ 5.0)",
      "CKS Super Specialty (Jaipur • ★ 5.0)",
      "Dr. Rajesh K. Jain (Cardiology AIIMS • ₹950)",
      "Zero Middleman Hidden Charges",
    ],
    featuresHi: [
      "जैन ईएनटी हॉस्पिटल (जयपुर • ★ 5.0)",
      "सीकेएस सुपर स्पेशलिटी (जयपुर • ★ 5.0)",
      "डॉ. राजेश के. जैन (हृदय रोग एम्स • ₹950)",
      "शून्य गुप्त या बिचौलिया कमीशन",
    ],
    actionEn: "Book Doctor Consultation",
    actionHi: "डॉक्टर परामर्श बुक करें",
  },
  {
    id: 2,
    stepNum: "02",
    titleEn: "Priority Consultation Pass",
    titleHi: "प्राथमिकता परामर्श प्रवेश पत्र",
    tagEn: "VIP Reception Bypass",
    tagHi: "कतार-मुक्त प्रवेश",
    shortDescEn: "Instant digital token pass that eliminates crowded physical hospital reception queues.",
    shortDescHi: "अस्पताल रिसेप्शन की लंबी कतारों से मुक्ति दिलाता डिजिटल पास।",
    fullDescEn:
      "Confirm your preferred appointment time online. Instant digital token generation guarantees you bypass physical hospital reception queues with community priority straight to the consulting chamber.",
    fullDescHi:
      "पसंदीदा समय स्लॉट चुनें। डिजिटल टोकन से अस्पताल रिसेप्शन की लंबी कतारों को समाप्त कर सीधा डॉक्टर चैंबर में प्राथमिकता से प्रवेश पाएं।",
    icon: Ticket,
    colors: {
      p1: "#451a03",
      p2: "#78350f",
      p3: "#b45309",
      p4: "#f59e0b",
      p5: "#fef3c7",
      glow: "rgba(245, 158, 11, 0.4)",
      accent: "#fbbf24",
    },
    featuresEn: [
      "Digital Express Pass #AN-04 Issued",
      "0 Min Physical Queue Delay",
      "Gate 2 Direct Specialist Access",
      "Live SMS & App Slot Notifications",
    ],
    featuresHi: [
      "डिजिटल एक्सप्रेस पास #AN-04 जारी",
      "0 मिनट रिसेप्शन प्रतीक्षा समय",
      "गेट 2 से सीधा परामर्श प्रवेश",
      "एसएमएस व ऐप द्वारा तत्काल सूचना",
    ],
    actionEn: "Get Priority Token",
    actionHi: "प्राथमिकता टोकन प्राप्त करें",
  },
  {
    id: 3,
    stepNum: "03",
    titleEn: "Pure Satvik & Jain Meals",
    titleHi: "शुद्ध सात्विक व जैन आहार",
    tagEn: "Dietary Vows Preserved",
    tagHi: "आहार नियमों की रक्षा",
    shortDescEn: "Pure vegetarian, hygienic Satvik meals arranged for admitted patients and attendants.",
    shortDescHi: "भर्ती मरीजों व परिजनों हेतु शुद्ध सात्विक व जैन भोजन व्यवस्था।",
    fullDescEn:
      "Hospital stays can compromise dietary vows. We coordinate 100% pure, hygienic Satvik & Jain meals for patients and attendants directly with hospital management.",
    fullDescHi:
      "अस्पताल में भर्ती के दौरान आहार के नियमों से कोई समझौता नहीं। मरीज व परिजनों हेतु शुद्ध सात्विक व जैन भोजन की अस्पताल प्रबंधन से सीधी व्यवस्था।",
    icon: Leaf,
    colors: {
      p1: "#022c22",
      p2: "#064e3b",
      p3: "#059669",
      p4: "#34d399",
      p5: "#d1fae5",
      glow: "rgba(52, 211, 153, 0.4)",
      accent: "#34d399",
    },
    featuresEn: [
      "100% Pure Jain & Satvik Compliance",
      "Zero Onion, Garlic or Root Vegetables",
      "Hot Bedside Meal Delivery",
      "Family Attendant Meal Support",
    ],
    featuresHi: [
      "100% शुद्ध जैन व सात्विक पथ्य",
      "शून्य प्याज, लहसुन या जमीकंद",
      "बेडसाइड गर्म भोजन डिलीवरी",
      "परिजनों हेतु भी भोजन सुविधा",
    ],
    actionEn: "View Satvik Charter",
    actionHi: "सात्विक आहार नियम देखें",
  },
  {
    id: 4,
    stepNum: "04",
    titleEn: "Cashless TPA & On-Ground Buddy",
    titleHi: "100% कैशलेस TPA व अस्पताल मित्र",
    tagEn: "Zero Deposit Hassle",
    tagHi: "कैशलेस बीमा सहायता",
    shortDescEn: "Dedicated in-hospital escort handles insurance pre-authorizations and query resolution.",
    shortDescHi: "अस्पताल में समर्पित मित्र जो बीमा दावों को तेजी से स्वीकृत कराता है।",
    fullDescEn:
      "A dedicated on-ground Adityam escort greets you at the partner hospital helpdesk, coordinates insurance paperwork, and expedites pre-authorizations, shielding your family from discharge delays.",
    fullDescHi:
      "अस्पताल हेल्पडेस्क पर समर्पित 'आदित्यम् मित्र' मरीज का मार्गदर्शन करता है, बीमा दावों को तेजी से स्वीकृत कराता है और परिजनों को आर्थिक तनाव से मुक्त रखता है।",
    icon: ShieldCheck,
    colors: {
      p1: "#0f172a",
      p2: "#1e3a8a",
      p3: "#2563eb",
      p4: "#60a5fa",
      p5: "#dbeafe",
      glow: "rgba(37, 99, 235, 0.4)",
      accent: "#60a5fa",
    },
    featuresEn: [
      "Pre-Approved Cashless Up to ₹2,50,000",
      "Dedicated In-Hospital Care Escort",
      "Zero Arbitrary Hidden Deductions",
      "Fast Discharge Settlement Desk",
    ],
    featuresHi: [
      "₹2,50,000 तक कैशलेस प्री-अंशाकित",
      "समर्पित अस्पताल मार्गदर्शक मित्र",
      "शून्य गुप्त या अप्रत्याशित कटौती",
      "त्वरित डिस्चार्ज सेटलमेंट डेस्क",
    ],
    actionEn: "Inquire Admission Desk",
    actionHi: "एडमिशन सहायता लें",
  },
  {
    id: 5,
    stepNum: "05",
    titleEn: "Family Health Locker & Meds",
    titleHi: "पारिवारिक स्वास्थ्य संदूक व दवा लाभ",
    tagEn: "Save 20% on Medicines",
    tagHi: "दवाइयों पर 20% बचत",
    shortDescEn: "Encrypted lifelong health records plus 15–20% flat savings on doorstep medicine refills.",
    shortDescHi: "आजीवन सुरक्षित स्वास्थ्य रिकॉर्ड और घर बैठे दवाइयों पर 15-20% छूट।",
    fullDescEn:
      "All prescriptions, NABL diagnostic lab tests, and hospital discharge summaries auto-sync to your secure cloud locker. Receive 15–20% flat concessions on genuine doorstep medicine delivery.",
    fullDescHi:
      "सभी दवा पर्चियां, NABL लैब रिपोर्ट्स और डिस्चार्ज सारांश आपके सुरक्षित क्लाउड लॉकर में सहेज दिए जाते हैं। घर तक दवा डिलीवरी पर 15-20% विशेष छूट का लाभ प्राप्त करें।",
    icon: FileCheck2,
    colors: {
      p1: "#2e1065",
      p2: "#4c1d95",
      p3: "#7c3aed",
      p4: "#c084fc",
      p5: "#f3e8ff",
      glow: "rgba(168, 85, 247, 0.4)",
      accent: "#c084fc",
    },
    featuresEn: [
      "Encrypted Cloud Vault (Prescriptions & Reports)",
      "Flat 15–20% OFF Doorstep Medicines",
      "NABL Accredited Diagnostics Concession",
      "Doctor Follow-Up Reminders",
    ],
    featuresHi: [
      "सुरक्षित क्लाउड संदूक (पर्चियां व रिपोर्ट्स)",
      "दवाइयों की होम डिलीवरी पर 15-20% छूट",
      "NABL लैब जांचों पर विशेष रियायत",
      "डॉक्टर फॉलो-अप परामर्श रिमाइंडर",
    ],
    actionEn: "Access Health Records",
    actionHi: "स्वास्थ्य रिकॉर्ड देखें",
  },
];

export default function HowItWorks({
  lang = "en",
  onOpenBooking,
  onOpenPartner,
}: HowItWorksProps) {
  // Track which card is opened/expanded (null if none, or step id 1-5)
  const [openedCardId, setOpenedCardId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setOpenedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="how-it-works"
      className="py-24 sm:py-32 font-sans select-none relative text-white overflow-hidden"
      style={{
        // Seamless obsidian continuum flowing from DoctorDirectory
        background:
          "linear-gradient(180deg, #020409 0%, #050B14 20%, #081020 50%, #050A14 80%, #020409 100%)",
      }}
    >
      {/* Dynamic Embedded Styles for Uiverse.io Javierrocadev 3D Layered Pentagon Lotus Bloom */}
      <style jsx global>{`
        .uiverse-pentagon-card {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 220px;
          height: 220px;
          margin: 0 auto;
          cursor: pointer;
        }

        .uiverse-pentagon-card * {
          position: absolute;
        }

        .u-pentagon1 {
          width: 220px;
          height: 220px;
          -webkit-clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          will-change: transform;
        }

        .u-pentagon2 {
          width: 190px;
          height: 190px;
          -webkit-clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          transition: all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform;
        }

        .u-pentagon3 {
          width: 160px;
          height: 160px;
          -webkit-clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform;
        }

        .u-pentagon4 {
          width: 130px;
          height: 130px;
          -webkit-clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          transition: all 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform;
        }

        .u-pentagon5 {
          width: 100px;
          height: 100px;
          -webkit-clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }

        /* 3D Geometric Bloom on Hover (Desktop) or Active (Opened) */
        @media (hover: hover) and (pointer: fine) {
          .step-slab:hover .u-pentagon1 {
            transform: scale(1.22) rotate(45deg);
          }
          .step-slab:hover .u-pentagon2 {
            transform: scale(1.22) rotate(90deg) translate(-16px, 16px);
          }
          .step-slab:hover .u-pentagon3 {
            transform: scale(1.22) rotate(135deg) translate(-32px, 32px);
          }
          .step-slab:hover .u-pentagon4 {
            transform: scale(1.22) rotate(190deg) translate(-48px, 48px);
          }
          .step-slab:hover .u-pentagon5 {
            transform: scale(1.22) rotate(235deg) translate(-64px, 64px);
          }
        }

        .step-slab.is-open .u-pentagon1 {
          transform: scale(1.25) rotate(45deg);
        }
        .step-slab.is-open .u-pentagon2 {
          transform: scale(1.25) rotate(90deg) translate(-16px, 16px);
        }
        .step-slab.is-open .u-pentagon3 {
          transform: scale(1.25) rotate(135deg) translate(-32px, 32px);
        }
        .step-slab.is-open .u-pentagon4 {
          transform: scale(1.25) rotate(190deg) translate(-48px, 48px);
        }
        .step-slab.is-open .u-pentagon5 {
          transform: scale(1.25) rotate(235deg) translate(-64px, 64px);
        }

        /* Mobile Scale Adjustments */
        @media (max-width: 640px) {
          .uiverse-pentagon-card {
            transform: scale(0.9);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* ==============================================================
            SECTION HEADER
        ============================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 ">


          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-[1.15]">
            {lang === "hi" ? (
              <>
                आदित्यम् निरामय कैसे{" "}
                <span className="italic font-serif text-amber-400">
                  कार्य करता है?
                </span>
              </>
            ) : (
              <>
                How Aadityam Niramayaa{" "}
                <span className="italic font-serif text-amber-400">
                  Cares for You.
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            {lang === "hi"
              ? "पारदर्शी शुल्क, कतार-मुक्त डिजिटल टोकन, अस्पताल में समर्पित मित्र, कैशलेस TPA बीमा सहायता और शुद्ध सात्विक भोजन के साथ एक गरिमापूर्ण चिकित्सा यात्रा।"
              : "A guided healthcare ecosystem that eliminates medical wait queues, unexpected bill shocks, and hospital anxiety through radical transparency and ethical compassion."}
          </p>

          <p className="text-xs text-amber-300/80 font-medium">
            {lang === "hi"
              ? "✨ किसी भी कार्ड पर टैप करके विवरण खोलें"
              : "✨ Tap any step card to open full details"}
          </p>
        </div>

        {/* ==============================================================
            5-STEP INTERACTIVE 3D LAYERED PENTAGON CARDS (Responsive Layout)
        ============================================================== */}
        <div className="flex flex-wrap justify-center gap-7 mb-14">
          {STEPS.map((step) => {
            const Icon = step.icon;
            const isOpen = openedCardId === step.id;
            const title = lang === "hi" ? step.titleHi : step.titleEn;
            const tag = lang === "hi" ? step.tagHi : step.tagEn;
            const shortDesc = lang === "hi" ? step.shortDescHi : step.shortDescEn;
            const fullDesc = lang === "hi" ? step.fullDescHi : step.fullDescEn;
            const features = lang === "hi" ? step.featuresHi : step.featuresEn;
            const actionText = lang === "hi" ? step.actionHi : step.actionEn;

            return (
              <div
                key={step.id}
                onClick={() => toggleCard(step.id)}
                className={`step-slab relative w-full sm:w-[350px] lg:w-[360px] rounded-[2.5rem] p-7 transition-all duration-400 cursor-pointer flex flex-col justify-between border-2 border-b-[6px] shadow-2xl ${isOpen
                    ? "bg-[#0B1528] border-amber-400 border-b-amber-500 shadow-amber-500/20 scale-[1.02] is-open"
                    : "bg-[#091122] border-[#182745] border-b-[#060D1A] hover:border-slate-500 hover:-translate-y-1"
                  }`}
                style={{
                  minHeight: isOpen ? "580px" : "480px",
                }}
              >
                {/* Top Badge: Step & Tag */}
                <div className="flex items-center justify-between z-20 mb-3">
                  <span
                    className="font-mono text-xs font-black px-3 py-1 rounded-xl uppercase tracking-wider"
                    style={{
                      backgroundColor: `${step.colors.p1}cc`,
                      color: step.colors.accent,
                      border: `1px solid ${step.colors.accent}40`,
                    }}
                  >
                    STEP {step.stepNum}
                  </span>

                  <span className="text-[11px] font-bold text-slate-300 bg-white/5 border border-white/10 px-3 py-0.5 rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                </div>

                {/* =======================================================
                    THE 3D LAYERED GEOMETRIC LOTUS (Javierrocadev Uiverse)
                ======================================================= */}
                <div className="relative py-4 my-auto z-10 flex items-center justify-center">
                  <div className="uiverse-pentagon-card">
                    <div
                      className="u-pentagon1"
                      style={{ backgroundColor: step.colors.p1 }}
                    />
                    <div
                      className="u-pentagon2"
                      style={{ backgroundColor: step.colors.p2 }}
                    />
                    <div
                      className="u-pentagon3"
                      style={{ backgroundColor: step.colors.p3 }}
                    />
                    <div
                      className="u-pentagon4"
                      style={{ backgroundColor: step.colors.p4 }}
                    />
                    <div
                      className="u-pentagon5"
                      style={{ backgroundColor: step.colors.p5 }}
                    >
                      {/* Center Emblem Icon Written Over Center of Pentagon */}
                      <Icon
                        className="w-8 h-8"
                        style={{ color: step.colors.p1 }}
                        strokeWidth={2.4}
                      />
                    </div>
                  </div>
                </div>

                {/* =======================================================
                    TEXT CONTENT WRITTEN OVER & UNDER THE BLOOM
                ======================================================= */}
                <div className="z-20 text-center space-y-2 mt-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {title}
                  </h3>

                  {!isOpen ? (
                    <>
                      <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed line-clamp-2">
                        {shortDesc}
                      </p>

                      <div className="pt-3 flex items-center justify-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300">
                        <span>
                          {lang === "hi"
                            ? "विस्तार से देखें (टैप करें)"
                            : "Tap to Open Details"}
                        </span>
                        <ChevronDown className="w-4 h-4 animate-bounce" />
                      </div>
                    </>
                  ) : (
                    /* EXPANDED CONTENT ON OPEN */
                    <div className="pt-2 space-y-3.5 text-left border-t border-white/10 animate-in fade-in zoom-in-95 duration-300">
                      <p className="text-xs text-slate-200 font-light leading-relaxed">
                        {fullDesc}
                      </p>

                      {/* Checklist */}
                      <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1.5 text-xs">
                        {features.map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-slate-200"
                          >
                            <CheckCircle2
                              className="w-3.5 h-3.5 shrink-0"
                              style={{ color: step.colors.accent }}
                            />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (step.id === 3) {
                            onOpenPartner?.();
                          } else {
                            onOpenBooking?.();
                          }
                        }}
                        className="w-full py-3 px-4 rounded-xl text-slate-950 font-extrabold text-xs tracking-wide shadow-lg border border-amber-300 border-b-[3px] border-b-amber-700 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        style={{
                          backgroundColor: "#F59E0B",
                        }}
                      >
                        <span>{actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="text-center">
                        <span className="text-[10px] text-slate-400 font-medium">
                          {lang === "hi"
                            ? "वापस बंद करने हेतु कार्ड पर टैप करें"
                            : "Tap anywhere on card to close"}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ==============================================================
            BOTTOM 3D SOLID ACTION BANNER (Human, Non-Techy)
        ============================================================== */}
        <div className="bg-gradient-to-r from-[#0C1628] via-[#11203A] to-[#0C1628] border-2 border-amber-500/50 border-b-[6px] border-b-[#7A4400] rounded-[2.5rem] p-7 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/40 border-b-2 border-b-amber-600">
              <HeartHandshake className="w-4 h-4 text-amber-400" />
              <span>
                {lang === "hi"
                  ? "आदित्यम् मरीज सहायता केंद्र"
                  : "COMMUNITY HEALTHCARE DESK"}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {lang === "hi"
                ? "आज ही अपनी गरिमापूर्ण स्वास्थ्य यात्रा शुरू करें।"
                : "Begin Your Dignified Healthcare Journey Today."}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              {lang === "hi"
                ? "शीर्ष विशेषज्ञ डॉक्टर से परामर्श लें अथवा सहयोगी अस्पतालों में प्राथमिकता सहायता प्राप्त करें।"
                : "Consult top empanelled specialists or access priority admission with cashless TPA support at our partner hospitals."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full md:w-auto">
            {/* 3D Tactile Amber Button */}
            <button
              type="button"
              onClick={() => onOpenBooking?.()}
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-b from-[#F59E0B] to-[#D97706] hover:from-[#FBBF24] hover:to-[#F59E0B] text-slate-950 font-extrabold text-xs rounded-xl shadow-lg border border-amber-300 border-b-[4px] border-b-[#92400E] active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>
                {lang === "hi"
                  ? "डॉक्टर परामर्श बुक करें"
                  : "Book Consultation"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* 3D Tactile Secondary Button */}
            <a
              href="tel:18002081008"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#070D18] hover:bg-[#0D182A] border border-slate-700 border-b-[4px] border-b-[#02050A] active:border-b-0 active:translate-y-1 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-center"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>1800-208-1008 (SOS)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}