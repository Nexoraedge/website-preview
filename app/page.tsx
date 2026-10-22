"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PillarsGrid from "@/components/PillarsGrid";
import MuniVisionSection from "@/components/MuniVisionSection";
import DoctorDirectory from "@/components/DoctorDirectory";
import HowItWorks from "@/components/HowItWorks";
import PartnerCTA from "@/components/PartnerCTA";
import AppPromo from "@/components/AppPromo";
import Footer from "@/components/Footer";
import {
  PartnerModal,
  AppDownloadModal,
  MuniVisionModal,
  BookingModal,
} from "@/components/Modals";

export default function HomePage() {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [isAppOpen, setIsAppOpen] = useState(false);
  const [isVisionOpen, setIsVisionOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>("Dr. Satish Jain");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | undefined>("Cardiology");

  const handleOpenBooking = (doctorName?: string, specialty?: string) => {
    if (doctorName) setSelectedDoctor(doctorName);
    if (specialty) setSelectedSpecialty(specialty);
    setIsBookingOpen(true);
  };

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
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#172554] selection:bg-[#2563EB] selection:text-white">
      {/* 1. Optimized Navbar with English / Hindi Toggle & New Logo */}
      <Navbar
        lang={lang}
        onToggleLang={setLang}
        onOpenBooking={() => handleOpenBooking()}
        onOpenPartner={() => setIsPartnerOpen(true)}
        onOpenApp={() => setIsAppOpen(true)}
        onOpenVision={() => setIsVisionOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Centered Editorial Hero Section */}
        <Hero
          lang={lang}
          onOpenBooking={handleOpenBooking}
          onOpenPartner={() => setIsPartnerOpen(true)}
          onOpenApp={() => setIsAppOpen(true)}
          onOpenVision={() => setIsVisionOpen(true)}
        />

        {/* 3. The 5 Core Pillars of Care */}
        <PillarsGrid
          lang={lang}
          onSelectPillar={handleSelectPillar}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4. Muni Shri's Inspiration & Sacred Origin (Adityam Anukampa) */}
        <MuniVisionSection
          lang={lang}
          onOpenVision={() => setIsVisionOpen(true)}
        />

        {/* 5. Verified Specialists & Partner Hospitals Network (Unified Dual Marquee) */}
        <DoctorDirectory
          lang={lang}
          onOpenBooking={handleOpenBooking}
          onOpenPartner={() => setIsPartnerOpen(true)}
        />

        {/* 7. How It Works (4-Step Patient Journey) */}
        <HowItWorks
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
          onOpenPartner={() => setIsPartnerOpen(true)}
        />

        {/* 8. Provider & Hospital Empanelment CTA */}
        <PartnerCTA
          lang={lang}
          onOpenPartner={() => setIsPartnerOpen(true)}
        />

        {/* 9. Mobile App Promotion & QR Code Scanner */}
        <AppPromo lang={lang} />
      </main>

      {/* 10. Comprehensive Clinical & Ethical Footer */}
      <Footer
        onOpenVision={() => setIsVisionOpen(true)}
        onOpenPartner={() => setIsPartnerOpen(true)}
        onOpenApp={() => setIsAppOpen(true)}
      />

      {/* Interactive Modals */}
      <PartnerModal
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
      />

      <AppDownloadModal
        isOpen={isAppOpen}
        onClose={() => setIsAppOpen(false)}
      />

      <MuniVisionModal
        isOpen={isVisionOpen}
        onClose={() => setIsVisionOpen(false)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultDoctor={selectedDoctor}
        defaultSpecialty={selectedSpecialty}
      />
    </div>
  );
}