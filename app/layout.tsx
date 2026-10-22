import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adityam Niramayaa (आदित्यम् निरामया) — Every Step Toward Better Health",
  description:
    "A visionary healthcare platform inspired by Muni Aditya Sagar Ji Maharaj and shaped by Jain values. Transparent OPD doctor bookings, accredited NABL diagnostic labs, empanelled partner hospitals, and pharmacy savings for everyone.",
  keywords: [
    "Adityam Niramayaa",
    "Aadityam Anukampa",
    "Muni Aditya Sagar Ji Maharaj",
    "Jain Healthcare",
    "Doctor Appointment Booking",
    "OPD Consultations",
    "NABL Lab Tests",
    "Empanelled Hospitals",
    "Affordable Healthcare",
    "Ethical Healthcare India"
  ],
  authors: [{ name: "Adityam Niramayaa Healthcare" }],
  openGraph: {
    title: "Adityam Niramayaa (आदित्यम् निरामया) — Complete Healthcare Aggregator",
    description:
      "Accessible, Affordable & Dignified Healthcare for Everyone. Inspired by Jain Values of Compassion and Service.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Rozha+One&family=Tiro+Devanagari+Hindi:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-[#2563EB] selection:text-white">
        {children}
      </body>
    </html>
  );
}
