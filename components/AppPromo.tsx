"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Smartphone,
  QrCode,
  ShieldCheck,
  Check,
  ArrowRight,
  Zap,
  Sparkles,
  Download,
  Lock,
} from "lucide-react";

interface AppPromoProps {
  lang?: "en" | "hi";
}

export default function AppPromo({ lang = "en" }: AppPromoProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSent, setIsSent] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Locomotive-style scroll momentum tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Spring physics for buttery deceleration
  const springConfig = { stiffness: 85, damping: 26, mass: 0.6 };

  // Parallax float for background mesh ambient orbs
  const rawOrb1Y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rawOrb2Y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const orb1Y = useSpring(rawOrb1Y, springConfig);
  const orb2Y = useSpring(rawOrb2Y, springConfig);

  // Main Card reveal & elevation
  const rawCardScale = useTransform(scrollYProgress, [0, 0.45], [0.93, 1]);
  const rawCardY = useTransform(scrollYProgress, [0, 0.45], [55, 0]);
  const rawCardOpacity = useTransform(scrollYProgress, [0, 0.25], [0.7, 1]);
  const cardScale = useSpring(rawCardScale, springConfig);
  const cardY = useSpring(rawCardY, springConfig);

  // Signature 3D Locomotive tilt and parallax float for the QR console
  const rawQrY = useTransform(scrollYProgress, [0, 1], [50, -45]);
  const rawRotateZ = useTransform(scrollYProgress, [0, 1], [-7, 3]);
  const rawRotateX = useTransform(scrollYProgress, [0, 1], [8, -6]);
  const qrY = useSpring(rawQrY, springConfig);
  const qrRotateZ = useSpring(rawRotateZ, springConfig);
  const qrRotateX = useSpring(rawRotateX, springConfig);

  // Floating satellite chips with independent parallax float speeds
  const rawBadge1Y = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const rawBadge2Y = useTransform(scrollYProgress, [0, 1], [-20, 35]);
  const badge1Y = useSpring(rawBadge1Y, springConfig);
  const badge2Y = useSpring(rawBadge2Y, springConfig);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="app-download"
      className="py-24 sm:py-32 bg-[#FAFAF8] font-sans overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ==============================================================
            MASSIVE BLUE ARCHITECTURAL SLAB with Locomotive Scale & Reveal
        ============================================================== */}
        <motion.div
          style={{
            scale: cardScale,
            y: cardY,
            opacity: rawCardOpacity,
          }}
          className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden p-8 sm:p-14 lg:p-20 shadow-[0_30px_70px_-15px_rgba(11,27,77,0.55)] border-2 border-blue-900/30 border-b-[8px] border-b-[#071333] bg-gradient-to-br from-[#0B1736] via-[#122863] to-[#1E3A8A]"
        >
          {/* Parallax Mesh Gradient Ambient Orbs */}
          <motion.div
            style={{ y: orb1Y }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[130px] pointer-events-none translate-x-1/3 -translate-y-1/3"
          />
          <motion.div
            style={{ y: orb2Y }}
            className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-amber-500/15 rounded-full blur-[130px] pointer-events-none -translate-x-1/3 translate-y-1/3"
          />

          {/* Micro Grid Pattern Overlay for Depth */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

            {/* ========================================================= */}
            {/* LEFT COLUMN: App Overview, Features & SMS Form (7 cols)   */}
            {/* ========================================================= */}
            <div className="lg:col-span-7 space-y-9">

              {/* 3D Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 border-b-2 border-b-cyan-400 text-cyan-300 text-xs font-bold tracking-wide shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>
                  {lang === "hi"
                    ? "आदित्यम् मोबाइल ऐप — स्वास्थ्य सेवा अब आपके हाथ में"
                    : "THE AADITYAM MOBILE APPLICATION"}
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-bold tracking-tight leading-[1.12]">
                  {lang === "hi" ? (
                    <>
                      स्वास्थ्य सेवा, अब आपकी <br />
                      <span className="italic text-cyan-300 font-serif">
                        हथेली और जेब में।
                      </span>
                    </>
                  ) : (
                    <>
                      Healthcare in your <br />
                      <span className="italic text-cyan-300 font-serif">
                        pocket, whenever you need it.
                      </span>
                    </>
                  )}
                </h2>

                <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                  {lang === "hi"
                    ? "तत्काल प्राथमिकता ओपीडी टोकन, सुरक्षित डिजिटल स्वास्थ्य रिकॉर्ड, और वास्तविक समय में अस्पताल बेड ट्रैकिंग — बिना किसी कतार और परेशानी के सीधे अपने स्मार्टफोन से।"
                    : "Unlock instant priority OPD appointments, a verified digital health record locker, and real-time hospital bed tracking directly from your smartphone."}
                </p>
              </div>

              {/* 3 Verified Feature Checkmarks */}
              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-100 font-light">
                  <div className="mt-0.5 w-5 h-5 rounded-lg bg-cyan-400/20 flex items-center justify-center shrink-0 border border-cyan-400/40 shadow-xs">
                    <Check className="w-3 h-3 text-cyan-300" strokeWidth={3} />
                  </div>
                  <span>
                    {lang === "hi"
                      ? "प्रमाणित और अनुभवी विशेषज्ञ डॉक्टरों की संपूर्ण सूची एवं सीधी बुकिंग।"
                      : "Direct priority booking with verified doctors across top medical disciplines."}
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-100 font-light">
                  <div className="mt-0.5 w-5 h-5 rounded-lg bg-cyan-400/20 flex items-center justify-center shrink-0 border border-cyan-400/40 shadow-xs">
                    <Check className="w-3 h-3 text-cyan-300" strokeWidth={3} />
                  </div>
                  <span>
                    {lang === "hi"
                      ? "जैन ईएनटी, सीकेएस, अरिहंत व महावीर जैसे संबद्ध अस्पतालों में विशेष रियायती दरें।"
                      : "Empanelled hospitals including Jain ENT, CKS, Arihant & Mahaveer with transparent pricing."}
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-100 font-light">
                  <div className="mt-0.5 w-5 h-5 rounded-lg bg-cyan-400/20 flex items-center justify-center shrink-0 border border-cyan-400/40 shadow-xs">
                    <Check className="w-3 h-3 text-cyan-300" strokeWidth={3} />
                  </div>
                  <span>
                    {lang === "hi"
                      ? "100% पारदर्शी दरें, नि:शुल्क पर्चा आर्काइव और समुदाय-हितैषी स्वास्थ्य लाभ।"
                      : "100% transparent rates, free prescription archives, and community-driven savings."}
                  </span>
                </div>
              </div>

              {/* SMS Direct Link Dispatch Form */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>
                    {lang === "hi"
                      ? "सीधे डाउनलोड लिंक हेतु अपना मोबाइल नंबर दर्ज करें"
                      : "Get the direct installation link via SMS"}
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                  <div className="relative flex-1 group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-cyan-300/80">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                      placeholder={lang === "hi" ? "मोबाइल नंबर दर्ज करें" : "Enter 10-digit mobile number"}
                      maxLength={10}
                      className="w-full pl-14 pr-4 py-3.5 bg-black/30 backdrop-blur-md border border-white/20 focus:border-cyan-400 focus:bg-black/40 rounded-2xl text-sm text-white placeholder-slate-400 font-medium outline-none transition-all shadow-inner"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-7 py-3.5 bg-gradient-to-b from-[#F59E0B] to-[#D97706] hover:from-[#FBBF24] hover:to-[#F59E0B] text-slate-950 rounded-2xl text-xs sm:text-sm font-black tracking-wide shadow-xl border border-amber-300 border-b-[4px] border-b-[#92400E] active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                  >
                    <span>{lang === "hi" ? "लिंक भेजें" : "Send Link"}</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" strokeWidth={2.5} />
                  </button>
                </form>

                {isSent && (
                  <div className="mt-3 text-xs font-bold text-cyan-300 flex items-center gap-2 p-3 bg-cyan-950/60 border border-cyan-400/40 rounded-xl">
                    <Lock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>
                      {lang === "hi"
                        ? `सुरक्षित ऐप लिंक +91 ${phoneNumber} पर भेज दिया गया है। अपने संदेश जांचें!`
                        : `Secure app link sent to +91 ${phoneNumber}. Please check your SMS!`}
                    </span>
                  </div>
                )}
              </div>

            </div>

            {/* ========================================================= */}
            {/* RIGHT COLUMN: Signature Locomotive 3D Tilted QR Console  */}
            {/* ========================================================= */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative perspective-[1200px]">

              {/* Floating Satellite Badge 1 (Top-Left Parallax Float) */}
              <motion.div
                style={{ y: badge1Y }}
                className="absolute -top-6 -left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 bg-[#071330] border border-cyan-400/40 rounded-full text-[11px] font-bold text-cyan-200 shadow-xl"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>⚡ {lang === "hi" ? "त्वरित ओपीडी पास" : "Priority OPD Queue Pass"}</span>
              </motion.div>

              {/* Floating Satellite Badge 2 (Bottom-Right Parallax Float) */}
              <motion.div
                style={{ y: badge2Y }}
                className="absolute -bottom-6 -right-2 z-20 hidden sm:flex items-center gap-2 px-4 py-2 bg-[#0B1E45] border border-amber-400/40 rounded-2xl text-[11px] font-bold text-amber-300 shadow-2xl"
              >
                <span className="text-amber-400">★ 4.9</span>
                <span className="text-white/40">•</span>
                <span>{lang === "hi" ? "50,000+ सक्रिय उपयोगकर्ता" : "50k+ Active Users"}</span>
              </motion.div>

              {/* The 3D Physical Tilted QR Console */}
              <motion.div
                style={{
                  y: qrY,
                  rotateZ: qrRotateZ,
                  rotateX: qrRotateX,
                  transformStyle: "preserve-3d",
                }}
                whileHover={{
                  rotateZ: 0,
                  rotateX: 0,
                  scale: 1.03,
                  transition: { duration: 0.35, ease: "easeOut" },
                }}
                className="relative bg-[#061229]/90 backdrop-blur-2xl rounded-[2.5rem] p-7 sm:p-10 border-2 border-[#1E3A8A]/80 border-b-[8px] border-b-[#030A17] shadow-[0_25px_60px_-10px_rgba(0,0,0,0.7)] flex flex-col items-center w-full max-w-sm group cursor-pointer transition-shadow duration-500 hover:shadow-[0_30px_70px_rgba(37,99,235,0.35)]"
              >
                {/* Micro Ambient Corner LEDs */}
                <div className="absolute top-5 left-5 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-amber-400 animate-pulse delay-150" />

                {/* Smartphone Icon Pod */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-900/60 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-7 h-7" strokeWidth={1.75} />
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1.5 text-center">
                  {lang === "hi" ? "इंस्टॉल करने हेतु स्कैन करें" : "Scan to Install"}
                </h3>
                <p className="text-[11px] text-cyan-300 font-mono tracking-wider uppercase mb-6 text-center">
                  {lang === "hi" ? "iOS एवं Android दोनों पर उपलब्ध" : "iOS & Android Supported"}
                </p>

                {/* High Contrast Physical QR Container */}
                <div className="p-4 bg-white rounded-3xl shadow-2xl w-48 h-48 sm:w-52 sm:h-52 relative flex items-center justify-center border-4 border-slate-100 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.45)] transition-shadow duration-300">
                  <div className="absolute inset-2 border-2 border-dashed border-slate-300 rounded-2xl pointer-events-none" />

                  {/* QR Vector Illustration */}
                  <QrCode className="w-36 h-36 sm:w-40 sm:h-40 text-[#0B1B4D]" strokeWidth={1} />

                  {/* Sacred Center Emblem */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B1B4D] to-[#1E3A8A] flex items-center justify-center shadow-xl border-[3px] border-white">
                      <ShieldCheck className="w-6 h-6 text-amber-400" strokeWidth={2.2} />
                    </div>
                  </div>
                </div>

                {/* Platform Download Indicator Bar */}
                <div className="mt-6 w-full pt-4 border-t border-white/10 flex items-center justify-center gap-4 text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    Apple App Store
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <Download className="w-3.5 h-3.5 text-amber-400" />
                    Google Play
                  </span>
                </div>

              </motion.div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}