-- ==============================================================
-- Adityam Niramayaa: Supabase Database Schema
-- Run this script in your Supabase SQL Editor (https://supabase.com/dashboard/project/bgzkpbeeypydmmufuoho/sql)
-- ==============================================================

-- 1. Create table for Doctor Registrations
CREATE TABLE IF NOT EXISTS public.doctor_registrations (
    id TEXT PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    reg_number TEXT NOT NULL,
    specialty TEXT NOT NULL,
    qualification TEXT,
    hospital_affiliation TEXT,
    city TEXT DEFAULT 'Jaipur',
    experience_years TEXT,
    consult_modes JSONB DEFAULT '["in-clinic"]'::jsonb,
    bio TEXT,
    status TEXT DEFAULT 'pending_review',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create table for Hospital / Institution Registrations
CREATE TABLE IF NOT EXISTS public.hospital_registrations (
    id TEXT PRIMARY KEY,
    hospital_name TEXT NOT NULL,
    facility_type TEXT DEFAULT 'Multi-Specialty Hospital',
    accreditation TEXT DEFAULT 'NABH Accredited',
    bed_count TEXT NOT NULL,
    icu_beds TEXT DEFAULT '0',
    city TEXT NOT NULL,
    address TEXT,
    contact_person TEXT NOT NULL,
    designation TEXT DEFAULT 'Medical Superintendent',
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    specialties TEXT,
    has_satvik_kitchen BOOLEAN DEFAULT TRUE,
    has_cashless_tpa BOOLEAN DEFAULT TRUE,
    notes TEXT,
    status TEXT DEFAULT 'pending_inspection',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.doctor_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hospital_registrations ENABLE ROW LEVEL SECURITY;

-- 4. Create Policies: Allow Anonymous Insert (Registration from website)
CREATE POLICY "Allow public insert for doctor registrations"
ON public.doctor_registrations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Allow public insert for hospital registrations"
ON public.hospital_registrations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 5. Create Policies: Allow Service / Authenticated reading
CREATE POLICY "Allow public select for doctor registrations"
ON public.doctor_registrations
FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Allow public select for hospital registrations"
ON public.hospital_registrations
FOR SELECT
TO anon, authenticated
USING (true);

