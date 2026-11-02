/**
 * Adityam Niramayaa - Clinical Hindi & English Translation Strategy
 *
 * Implements a dual-layer translation architecture:
 * Layer 1: Dedicated Supabase schema `_hi` columns (e.g. name_hi, specialty_hi, tag_hi)
 * Layer 2: Dynamic Fallback Clinical Dictionary for doctors, specialties, degrees, timings & UI
 */

// 1. Doctor Names Dictionary
export const DOCTOR_NAMES_HI: Record<string, string> = {
  "Dr. Alok Verma": "डॉ. आलोक वर्मा",
  "Dr. Satish Jain": "डॉ. सतीश जैन",
  "Dr. Anita Deshmukh": "डॉ. अनीता देशमुख",
  "Dr. Rajesh Sharma": "डॉ. राजेश शर्मा",
  "Dr. Sunita Kothari": "डॉ. सुनीता कोठारी",
  "Dr. Amitesh Mehta": "डॉ. अमितेश मेहता",
  "Dr. Priya Parekh": "डॉ. प्रिया पारेख",
  "Dr. Harish Gupta": "डॉ. हरीश गुप्ता",
  "Vaidya Ananya Trivedi": "वैद्य अनन्या त्रिवेदी",
  "Dr. Rakesh Tandon": "डॉ. राकेश टंडन",
  "Dr. Priya Jain": "डॉ. प्रिया जैन",
  "Dr. Vikramaditya Sen": "डॉ. विक्रमादित्य सेन",
  "Dr. Meenakshi Sundaram": "डॉ. मीनाक्षी सुंदरम",
  "Dr. Ananya Trivedi": "डॉ. अनन्या त्रिवेदी",
};

// 2. Clinical Specialties Dictionary
export const SPECIALTIES_HI: Record<string, string> = {
  "All Specialists": "सभी विशेषज्ञ",
  "Cardiology": "हृदय रोग (Cardiology)",
  "Dentistry": "दंत चिकित्सा (Dentistry)",
  "Dermatology": "त्वचा रोग (Dermatology)",
  "ENT": "कान, नाक एवं गला (ENT)",
  "General Medicine": "सामान्य चिकित्सा (General Medicine)",
  "General Physician": "वरिष्ठ फिजिशियन",
  "Gynecology": "स्त्री एवं प्रसूति रोग (Gynecology)",
  "Laparoscopic Surgery": "लेप्रोस्कोपिक सर्जरी",
  "Neurology": "न्यूरोलॉजी (तंत्रिका तंत्र)",
  "Oncology": "कैंसर व ऑन्कोलॉजी",
  "Ophthalmology": "नेत्र रोग (Ophthalmology)",
  "Orthopedics": "अस्थि एवं जोड़ रोग (Orthopedics)",
  "Pediatrics": "बाल एवं शिशु रोग (Pediatrics)",
  "Pulmonology": "श्वसन एवं फेफड़ा रोग",
  "Urology": "मूत्र एवं गुर्दा रोग",
  "Ayurveda": "आयुर्वेद एवं जीवनशैली",
  "Micro Ear Surgery": "सूक्ष्म कान सर्जरी",
  "Cochlear Implant": "कॉकलियर इम्प्लांट",
  "Endoscopic Sinus": "एंडोस्कोपिक साइनस",
  "Head & Neck": "सिर एवं गला सर्जरी",
  "Audiology": "ऑडियोलॉजी एवं श्रवण",
  "Joint Replacement": "जोड़ प्रत्यारोपण",
  "Organ Transplant": "अंग प्रत्यारोपण",
  "Cardiac Care": "कार्डियक केयर",
  "Internal Medicine": "आंतरिक चिकित्सा",
  "Gastroenterology": "पेट एवं लिवर रोग",
  "Nephrology": "गुर्दा रोग (Nephrology)",
};

// 3. Medical Qualifications & Degrees
export const QUALIFICATIONS_HI: Record<string, string> = {
  "MBBS, MS (ENT)": "एमबीबीएस, एमएस (ईएनटी)",
  "MBBS, MS (ENT), DLO - Chief Senior Specialist": "एमबीबीएस, एमएस (ईएनटी), डीएलओ - मुख्य वरिष्ठ विशेषज्ञ",
  "MBBS, MS (ENT), DLO": "एमबीबीएस, एमएस (ईएनटी), डीएलओ",
  "MBBS, MD (General Medicine)": "एमबीबीएस, एमडी (जनरल मेडिसिन)",
  "MBBS, MD (Pediatrics)": "एमबीबीएस, एमडी (शिशु रोग)",
  "MBBS, DCH, DNB (Pediatrics)": "एमबीबीएस, डीसीएच, डीएनबी (बाल रोग)",
  "MBBS, MD (Pediatrics), Fellowship Neonatology": "एमबीबीएस, एमडी (बाल रोग), फेलोशिप नवजात शिशु",
  "MBBS, MS (General Surgery)": "एमबीबीएस, एमएस (जनरल सर्जरी)",
  "MS (General Surgery), FIAGES - Chief Consultant": "एमएस (जनरल सर्जरी), एफआईएजीईएस - मुख्य सलाहकार",
  "MBBS, MD, DM (Cardiology)": "एमबीबीएस, एमडी, डीएम (कार्डियोलॉजी)",
  "MBBS, MD, DM (Neurology)": "एमबीबीएस, एमडी, डीएम (न्यूरोलॉजी)",
  "MBBS, MS (Ortho), M.Ch": "एमबीबीएस, एमएस (ऑर्थो), एम.सीएच",
  "MBBS, MD (Internal Medicine)": "एमबीबीएस, एमडी (इंटरनल मेडिसिन)",
  "BAMS, MD (Ayurveda), Panchakarma Specialist": "बीएएमएस, एमडी (आयुर्वेद), पंचकर्म विशेषज्ञ",
  "BAMS, MD (Ayurveda)": "बीएएमएस, एमडी (आयुर्वेद)",
  "BDS, MDS": "बीडीएस, एमडीएस (दंत शल्य)",
};

// 4. Hospital Names Dictionary
export const HOSPITALS_HI: Record<string, string> = {
  "Jain ENT Hospital": "जैन ईएनटी हॉस्पिटल",
  "Jain ENT Hospital Campus": "जैन ईएनटी हॉस्पिटल कैंपस",
  "CKS Hospital": "सीकेएस हॉस्पिटल",
  "CSK Hospital": "सीएसके हॉस्पिटल",
  "Medanta - The Medicity": "मेदांता - द मेडिसिटी",
  "Fortis Healthcare": "फोर्टिस हेल्थकेयर",
  "Max Super Speciality Hospital": "मैक्स सुपर स्पेशलिटी हॉस्पिटल",
  "Arihant Hospital": "अरिहंत हॉस्पिटल",
  "Jain Health Pavilion": "जैन हेल्थ पवेलियन",
  "Adityam Wellness Center": "आदित्यम् वैलनेस सेंटर",
};

// 5. Cities & Areas Dictionary
export const CITIES_HI: Record<string, string> = {
  "All Cities": "सभी शहर (All Cities)",
  "New Delhi": "नई दिल्ली",
  "Delhi NCR": "दिल्ली एनसीआर",
  "Jaipur": "जयपुर",
  "Gurugram": "गुरुग्राम",
  "Indore": "इंदौर",
  "Bengaluru": "बेंगलुरु",
  "Mumbai": "मुंबई",
  "Saket": "साकेत",
  "South Extension": "साउथ एक्सटेंशन",
};

// 6. Timings & Slot Translations
export const TIMINGS_HI: Record<string, string> = {
  "Today": "आज",
  "Tomorrow": "कल",
  "Mon-Sat": "सोम-शनि",
  "Mon-Fri": "सोम-शुक्र",
  "Tue-Sat": "मंगल-शनि",
  "Tue-Sun": "मंगल-रवि",
};

// 7. Clinical UI Terms
export const UI_TERMS_HI: Record<string, string> = {
  "Empanelled Specialist": "सत्यापित विशेषज्ञ",
  "Verified Faculty": "सत्यापित फैकल्टी",
  "Top Doctors": "शीर्ष डॉक्टर्स",
  "All Specialists in Network": "नेटवर्क के सभी विशेषज्ञ",
  "Swipe to explore": "स्वाइप करके देखें",
  "Profile": "प्रोफाइल",
  "View Profile": "विवरण",
  "Book": "बुक करें",
  "Book Appointment": "अपॉइंटमेंट बुक करें",
  "Consult on App": "ऐप पर परामर्श लें",
  "Fair Tariff": "उचित संस्थागत दर",
  "Institutional Tariff": "संस्थागत दर",
  "Pay in app": "ऐप भुगतान",
  "Save": "बचत",
  "with in-app pay": "ऐप भुगतान पर",
  "Branches": "शाखाएं",
  "Verified Doctors": "सत्यापित डॉक्टर्स",
  "View Doctors & Book": "डॉक्टर देखें व बुक करें",
  "Facilities": "सुविधाएं",
  "Campus Info": "कैंपस विवरण",
  "OFF OPD": "ओपीडी छूट",
  "reviews": "समीक्षाएं",
  "experience": "अनुभव",
  "yrs experience": "वर्ष अनुभव",
  "yrs exp": "वर्ष अनुभव",
  "Institutions Displayed": "अस्पताल प्रदर्शित",
  "Specialists Found": "विशेषज्ञ उपलब्ध",
  "No Partner Hospitals Found": "कोई अस्पताल नहीं मिला",
  "No Specialist Doctors Found": "कोई डॉक्टर नहीं मिला",
};

/**
 * Translates doctor name with Layer 1 (DB column name_hi) and Layer 2 (dictionary fallback)
 */
export function translateDoctorName(name?: string, name_hi?: string, lang: "en" | "hi" = "en"): string {
  if (!name) return "";
  if (lang !== "hi") return name;
  if (name_hi && name_hi.trim() !== "") return name_hi;
  return DOCTOR_NAMES_HI[name] || name;
}

/**
 * Translates clinical specialty
 */
export function translateSpecialty(specialty?: string, specialty_hi?: string, lang: "en" | "hi" = "en"): string {
  if (!specialty) return "";
  if (lang !== "hi") return specialty;
  if (specialty_hi && specialty_hi.trim() !== "") return specialty_hi;
  return SPECIALTIES_HI[specialty] || specialty;
}

/**
 * Translates medical degrees and qualification
 */
export function translateQualification(qualification?: string, qualification_hi?: string, lang: "en" | "hi" = "en"): string {
  if (!qualification) return "";
  if (lang !== "hi") return qualification;
  if (qualification_hi && qualification_hi.trim() !== "") return qualification_hi;
  return QUALIFICATIONS_HI[qualification] || qualification;
}

/**
 * Translates hospital name
 */
export function translateHospitalName(name?: string, name_hi?: string, lang: "en" | "hi" = "en"): string {
  if (!name) return "";
  if (lang !== "hi") return name;
  if (name_hi && name_hi.trim() !== "") return name_hi;
  return HOSPITALS_HI[name] || name;
}

/**
 * Translates city name
 */
export function translateCity(city?: string, city_hi?: string, lang: "en" | "hi" = "en"): string {
  if (!city) return "";
  if (lang !== "hi") return city;
  if (city_hi && city_hi.trim() !== "") return city_hi;
  return CITIES_HI[city] || city;
}

/**
 * Translates timing string (e.g. "Mon-Sat: 10:00 AM - 1:00 PM")
 */
export function translateTiming(timing?: string, timing_hi?: string, lang: "en" | "hi" = "en"): string {
  if (!timing) return "";
  if (lang !== "hi") return timing;
  if (timing_hi && timing_hi.trim() !== "") return timing_hi;

  let translated = timing;
  // Replace known days/prefixes
  for (const [en, hi] of Object.entries(TIMINGS_HI)) {
    translated = translated.replace(new RegExp(`\\b${en}\\b`, "g"), hi);
  }
  // Replace common time markers
  translated = translated
    .replace(/\bAM\b/g, "सुबह")
    .replace(/\bPM\b/g, "दोपहर/शाम");

  return translated;
}

/**
 * Translates UI terms
 */
export function translateUiTerm(term: string, lang: "en" | "hi" = "en"): string {
  if (lang !== "hi") return term;
  return UI_TERMS_HI[term] || term;
}

