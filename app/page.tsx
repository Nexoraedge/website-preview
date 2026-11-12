"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PillarsGrid from "@/components/PillarsGrid";
import MuniVisionSection from "@/components/MuniVisionSection";
import DoctorDirectory from "@/components/DoctorDirectory";
import HowItWorks from "@/components/HowItWorks";
import PartnerCTA from "@/components/PartnerCTA";
import AppPromo from "@/components/AppPromo";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/useLanguage";

export default function HomePage() {
  const [lang, setLang] = useLanguage();

  const handleSelectPillar = (pillarId: string) => {
    if (pillarId === "opd") {
      const el = document.getElementById("doctors");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (pillarId === "ipd") {
      const el = document.getElementById("hospitals");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (pillarId === "emergency") {
      window.location.href = "tel:18002081008";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#172554] w-full max-w-full overflow-x-hidden selection:bg-[#2563EB] selection:text-white">
      {/* 1. Optimized Navbar with English / Hindi Toggle & Brand Links */}
      <Navbar lang={lang} onToggleLang={setLang} />

      <main className="flex-1">
        {/* 2. Centered Editorial Hero Section */}
        <Hero lang={lang} />

        {/* 3. The 5 Core Pillars of Care */}
        <PillarsGrid
          lang={lang}
          onSelectPillar={handleSelectPillar}
        />

        {/* 4. Muni Shri's Inspiration & Sacred Origin (Adityam Anukampa) */}
        <MuniVisionSection lang={lang} />

        {/* 5. Verified Specialists & Partner Hospitals Network */}
        <DoctorDirectory lang={lang} />

        {/* 6. How It Works (4-Step Patient Journey) */}
        <HowItWorks lang={lang} />

        {/* 7. Provider & Hospital Empanelment CTA (Tata 1mg Style) */}
        <PartnerCTA lang={lang} />

        {/* 8. Mobile App Promotion & Direct Download */}
        <AppPromo lang={lang} />
      </main>

      {/* 9. Comprehensive Clinical & Ethical Footer */}
      <Footer />
    </div>
  );
}