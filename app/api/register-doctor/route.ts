import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data: doctors, error } = await supabase
      .from("doctor_registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      status: "ok",
      count: doctors?.length || 0,
      doctors: doctors || [],
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read doctor registrations", details: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      regNumber,
      specialty,
      qualification,
      hospitalAffiliation,
      city,
      experienceYears,
      consultModes = ["in-clinic"],
      bio = "",
    } = body;

    // Validation
    if (!fullName || !fullName.trim()) {
      return NextResponse.json({ error: "Full name is required" }, { status: 400 });
    }
    if (!phone || !phone.trim() || phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json({ error: "Valid 10-digit phone number is required" }, { status: 400 });
    }
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email address is required" }, { status: 400 });
    }
    if (!regNumber || !regNumber.trim()) {
      return NextResponse.json({ error: "Medical Council Registration Number is required" }, { status: 400 });
    }
    if (!specialty || !specialty.trim()) {
      return NextResponse.json({ error: "Medical specialty is required" }, { status: 400 });
    }

    const currentYear = new Date().getFullYear();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const applicationId = `DOC-${currentYear}-${randomSuffix}`;

    const { data, error } = await supabase
      .from("doctor_registrations")
      .insert([
        {
          id: applicationId,
          full_name: fullName.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          reg_number: regNumber.trim(),
          specialty: specialty.trim(),
          qualification: (qualification || "").trim(),
          hospital_affiliation: (hospitalAffiliation || "").trim(),
          city: (city || "Jaipur").trim(),
          experience_years: String(experienceYears || ""),
          consult_modes: Array.isArray(consultModes) ? consultModes : [consultModes],
          bio: (bio || "").trim(),
          status: "pending_review",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase doctor registration error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      applicationId,
      message: "Doctor registration submitted successfully.",
      data,
    });
  } catch (error) {
    console.error("Doctor registration server error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing registration.", details: String(error) },
      { status: 500 }
    );
  }
}
