"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  Users,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Quote,
  Sparkles,
} from "lucide-react";

interface MuniVisionSectionProps {
  lang?: "en" | "hi";
  onOpenVision: () => void;
}

export default function MuniVisionSection({
  lang = "en",
  onOpenVision,
}: MuniVisionSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Locomotive-style scroll momentum tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 85, damping: 26, mass: 0.6 };
  const rawPortraitY = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const rawStoryY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const rawOrb1Y = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const rawOrb2Y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const portraitY = useSpring(rawPortraitY, springConfig);
  const storyY = useSpring(rawStoryY, springConfig);
  const orb1Y = useSpring(rawOrb1Y, springConfig);
  const orb2Y = useSpring(rawOrb2Y, springConfig);

  const valuesTabs = [
    {
      id: "anukampa",
      number: "01",
      sanskrit: "अनुकम्पा",
      title: lang === "hi" ? "अनुकम्पा (Compassion)" : "Compassion (Anukampa)",
      tagline:
        lang === "hi"
          ? "प्रत्येक मरीज के प्रति आत्मीय सम्मान"
          : "Dignity in Every Interaction",
      icon: Heart,
      color: "#2563EB",
      badgeBg: "#EFF6FF",
      badgeBorder: "#BFDBFE",
      badgeText: "#1E40AF",
      desc:
        lang === "hi"
          ? "अस्पताल में आने वाले हर पीड़ित व्यक्ति को पूर्ण सम्मान और संवेदनशीलता प्रदान करना। चिकित्सा केवल व्यापार नहीं, बल्कि असहाय क्षणों में जीव-मात्र की रक्षा का पावन कर्तव्य है।"
          : "Treating every patient with uncompromised human dignity. Healthcare is not a commercial transaction—it is a sacred responsibility to care for living beings in their most vulnerable moments.",
      points:
        lang === "hi"
          ? [
            "सहयोगी अस्पतालों में ऑन-ग्राउंड 'अस्पताल मित्र' (Hospital Buddy) की निरंतर उपस्थिति",
            "इमरजेंसी और ओपीडी में किसी भी मरीज या परिवार को अकेला नहीं भटकना पड़ता",
            "वरिष्ठ नागरिकों और बच्चों के लिए प्राथमिकता एवं भावनात्मक संबल",
          ]
          : [
            "Dedicated On-Ground Hospital Buddy at partner facilities",
            "No patient or family navigates emergency wards alone",
            "Emotional and logistical guidance for elders and children",
          ],
      quote:
        lang === "hi"
          ? "जब उपचार में आत्मीयता और सहानुभूति जुड़ती है, तो आधी व्याधि दवा देने से पहले ही दूर हो जाती है।"
          : "When empathy leads medical treatment, true healing begins before the medicine is even given.",
    },
    {
      id: "seva",
      number: "02",
      sanskrit: "निःस्वार्थ सेवा",
      title: lang === "hi" ? "निःस्वार्थ सेवा (Selfless Service)" : "Selfless Service (Seva)",
      tagline:
        lang === "hi"
          ? "मुनाफाखोरी और गुप्त कमीशन से मुक्ति"
          : "Zero Exploitative Markups",
      icon: ShieldCheck,
      color: "#D97706",
      badgeBg: "#FEF3C7",
      badgeBorder: "#FDE68A",
      badgeText: "#92400E",
      desc:
        lang === "hi"
          ? "अस्पताल की दरों में पूर्ण पारदर्शिता। संस्थागत समझौतों के माध्यम से हम डॉक्टर रेफरल कट, जांचों पर अनुचित कमीशन और अत्यधिक बिलिंग को पूरी तरह समाप्त करते हैं।"
          : "Strict adherence to absolute pricing transparency. We eliminate hidden hospital markups, referral kickbacks, and inflated test bills through direct pre-negotiated institutional agreements.",
      points:
        lang === "hi"
          ? [
            "100% पूर्व-निर्धारित ओपीडी और सर्जरी पैकेज दरें",
            "बिचौलियों और गुप्त कमीशन का पूर्ण बहिष्कार",
            "अस्पतालों से प्राप्त हर एक छूट का सीधा लाभ मरीज को समर्पित",
          ]
          : [
            "100% pre-agreed consultation and surgical tariffs",
            "Zero hidden middleman commissions or unbilled additions",
            "Every direct concession passed straight to the patient",
          ],
      quote:
        lang === "hi"
          ? "बिलिंग में सत्य और पारदर्शिता ही मरीज के प्रति सबसे बड़ा सम्मान और धर्म है।"
          : "Truth in billing is the highest form of clinical integrity and patient respect.",
    },
    {
      id: "karuna",
      number: "03",
      sanskrit: "सर्वभूत दया",
      title: lang === "hi" ? "सर्वभूत दया (Universal Care)" : "Care for All Beings (Karuna)",
      tagline:
        lang === "hi"
          ? "जाति-धर्म से परे सर्वजन कल्याण एवं सात्विक पथ्य"
          : "Universal & Satvik Healing",
      icon: Users,
      color: "#059669",
      badgeBg: "#ECFDF5",
      badgeBorder: "#A7F3D0",
      badgeText: "#065F46",
      desc:
        lang === "hi"
          ? "जैन धर्म के अहिंसा व करुणा के शाश्वत सिद्धांतों पर आधारित होते हुए भी, आदित्यम् निरामया: बिना किसी भेदभाव के सभी नागरिकों के लिए समान रूप से उपलब्ध है।"
          : "While rooted in Jain spiritual ethics, Adityam Niramayaa extends unconditional medical benefits to all citizens, accompanied by dedicated pure Satvik dietary support during hospital recovery.",
      points:
        lang === "hi"
          ? [
            "जाति, धर्म और आर्थिक वर्ग के भेद से परे हर नागरिक के लिए सुलभ",
            "अस्पताल में भर्ती (IPD) मरीजों के लिए शुद्ध सात्विक एवं शाकाहारी भोजन व्यवस्था",
            "त्यागी, तपस्वी साधु-संतों एवं असहाय बंधुओं के लिए विशेष निःशुल्क स्वास्थ्य सेवा",
          ]
          : [
            "Universal access across all economic and social strata",
            "Dedicated Satvik and pure vegetarian meal assistance in IPD",
            "Special wellness support for monks, ascetics, and underprivileged",
          ],
      quote:
        lang === "hi"
          ? "सच्ची करुणा की कोई सीमा नहीं होती—हर पीड़ित की सेवा करना परमात्मा की ही सेवा है।"
          : "Universal compassion knows no borders—to heal one is to serve the divinity in all.",
    },
  ];

  const currentTab = valuesTabs[activeTab];
  const IconComponent = currentTab.icon;

  return (
    <section
      ref={sectionRef}
      id="muni-vision"
      className="relative overflow-hidden font-sans select-none"
      style={{
        // Smooth, soft continuous gradient from #FAFAF8 into calm clinical soft slate-white #E2E8F0
        background:
          "linear-gradient(180deg, #FAFAF8 0%, #F5F7FA 35%, #EDF2F7 70%, #E2E8F0 100%)",
      }}
    >
      {/* Soft Ambient Sunlight Glows with Parallax Motion */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-10 right-10 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-200/25 rounded-full blur-[100px] pointer-events-none"
      />

      {/* =========================================================================
          PART 1: THE SACRED GENESIS & ARCH PORTRAIT
      ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 sm:pt-28 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: The Sacred Arch Portrait with Parallax Lift */}
          <motion.div
            style={{ y: portraitY }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-5 flex flex-col items-center"
          >
            {/* The Arch Shaped Portrait Container with Ambient Halo */}
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              {/* Soft Golden Ambient Halo behind Arch */}
              <div className="absolute -inset-2 bg-gradient-to-b from-amber-300/30 via-amber-200/20 to-transparent rounded-t-[12rem] rounded-b-3xl blur-xl pointer-events-none -z-10" />

              <div className="relative h-[490px] sm:h-[530px] w-full rounded-t-[12rem] rounded-b-3xl overflow-hidden shadow-2xl border-[5px] border-white bg-[#0B1528] group">
                <Image
                  src="/images/muni_aditya_blessing_aura.jpg"
                  alt={
                    lang === "hi"
                      ? "परम पूज्य मुनि 108 आदित्य सागर जी महाराज"
                      : "Param Pujya Muni 108 Aditya Sagar Ji Maharaj"
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, 370px"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-103"
                  priority
                />

                {/* Bottom Soft Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/35 to-transparent pointer-events-none" />

                {/* Bottom Text Card inside Arch */}
                <div className="absolute bottom-6 left-6 right-6 text-center text-white z-10">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-white drop-shadow-md">
                    {lang === "hi" ? "मुनि १०८ आदित्य सागर जी" : "Muni Aditya Sagar Ji"} <br />
                    <span className="italic text-amber-300">
                      {lang === "hi" ? "महाराज" : "Maharaj"}
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Read Discourse Link */}
            <button
              type="button"
              onClick={onOpenVision}
              className="mt-6 text-sm font-semibold text-[#172554] hover:text-[#2563EB] flex items-center gap-2 transition-all hover:gap-3 cursor-pointer group"
            >
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span className="underline underline-offset-4 decoration-slate-300 group-hover:decoration-[#2563EB]">
                {lang === "hi"
                  ? "सेवा और करुणा पर मुनि श्री का पावन उद्बोधन पढ़ें"
                  : "Read Muni Shri's Full Discourse on Seva"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right Column: Origin Narrative & Leadership with Staggered Parallax */}
          <motion.div
            style={{ y: storyY }}
            className="md:col-span-7 space-y-6 lg:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-3"
            >


              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#172554] tracking-tight leading-[1.12]">
                {lang === "hi" ? (
                  <>
                    करुणा, सेवा एवं सत्य के संस्कारों पर आधारित{" "}
                    <span className="italic font-serif text-[#2563EB]">
                      एक पावन स्वास्थ्य संकल्प।
                    </span>
                  </>
                ) : (
                  <>
                    A Healthcare Initiative Rooted in{" "}
                    <span className="italic font-serif text-[#2563EB]">
                      Compassion & Truth.
                    </span>
                  </>
                )}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                {lang === "hi" ? (
                  <>
                    आज की आधुनिक चिकित्सा व्यवस्था अक्सर अत्यधिक बिलिंग, व्यापारिक परामर्श और परिजनों के मानसिक तनाव से घिर चुकी है।{" "}
                    <strong className="text-[#172554] font-medium">आदित्यम् निरामया:</strong> का जन्म स्वास्थ्य सेवा को पुनः मानवीय संवेदना, पूर्ण मूल्य पारदर्शिता और निःस्वार्थ सेवा के शाश्वत मूल्यों पर प्रतिष्ठित करने के लिए हुआ है।
                  </>
                ) : (
                  <>
                    Modern healthcare is too often fraught with financial opacity, commercialized consults, and bureaucratic exhaustion.{" "}
                    <strong className="text-[#172554] font-medium">Adityam Niramayaa</strong> was conceived to re-anchor healing in the timeless ethos of human dignity and seva.
                  </>
                )}
              </p>
            </motion.div>

            {/* Quote Plate */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative"
            >
              <Quote className="w-8 h-8 text-amber-400/30 absolute top-4 right-5" />
              <blockquote className="text-sm sm:text-base font-serif italic text-slate-800 leading-relaxed mb-4">
                {lang === "hi"
                  ? "“धर्म, संयम और सद्चिंतन का आधार स्वस्थ शरीर है। जब चिकित्सा पारदर्शी, निःस्वार्थ और जीव-दया से परिपूर्ण होती है, तभी समाज का वास्तविक कल्याण संभव होता है।”"
                  : "“Health is the sacred vessel for Dharma and righteous living. When medicine becomes transparent, selfless, and tender with compassion, society achieves true prosperity.”"}
              </blockquote>
              <div className="flex items-center justify-between text-xs sm:text-sm pt-3 border-t border-slate-100">
                <div>
                  <div className="font-bold text-[#172554]">
                    {lang === "hi"
                      ? "परम पूज्य मुनि १०८ आदित्य सागर जी महाराज"
                      : "Param Pujya Muni 108 Aditya Sagar Ji Maharaj"}
                  </div>
                  <div className="text-slate-500 text-xs">
                    {lang === "hi"
                      ? "मार्गदर्शक एवं आध्यात्मिक प्रेरणा स्रोत"
                      : "Inspiration & Spiritual Patron"}
                  </div>
                </div>

              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>


    </section>
  );
}