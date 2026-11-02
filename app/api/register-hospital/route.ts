import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data: hospitals, error } = await supabase
      .from("hospital_registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      status: "ok",
      count: hospitals?.length || 0,
      hospitals: hospitals || [],
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read hospital registrations", details: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      hospitalName,
      facilityType = "Multi-Specialty Hospital",
      accreditation = "NABH Accredited",
      bedCount,
      icuBeds = "0",
      city,
      address,
      contactPerson,
      designation = "Medical Superintendent",
      phone,
      email,
      specialties,
      hasSatvikKitchen = true,
      hasCashlessTpa = true,
      notes = "",
    } = body;

    // Validation
    if (!hospitalName || !hospitalName.trim()) {
      return NextResponse.json({ error: "Hospital or Institution name is required" }, { status: 400 });
    }
    if (!contactPerson || !contactPerson.trim()) {
      return NextResponse.json(
        { error: "Contact administrator / Medical Superintendent name is required" },
        { status: 400 }
      );
    }
    if (!phone || !phone.trim() || phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json({ error: "Valid 10-digit official contact number is required" }, { status: 400 });
    }
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid official email address is required" }, { status: 400 });
    }
    if (!city || !city.trim()) {
      return NextResponse.json({ error: "City is required" }, { status: 400 });
    }
    if (!bedCount || !String(bedCount).trim()) {
      return NextResponse.json({ error: "Total bed count is required" }, { status: 400 });
    }

    const currentYear = new Date().getFullYear();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const applicationId = `HOSP-${currentYear}-${randomSuffix}`;

    const { data, error } = await supabase
      .from("hospital_registrations")
      .insert([
        {
          id: applicationId,
          hospital_name: hospitalName.trim(),
          facility_type: facilityType.trim(),
          accreditation: accreditation.trim(),
          bed_count: String(bedCount).trim(),
          icu_beds: String(icuBeds || "0").trim(),
          city: city.trim(),
          address: (address || "").trim(),
          contact_person: contactPerson.trim(),
          designation: (designation || "").trim(),
          phone: phone.trim(),
          email: email.trim().toLowerCase(),
          specialties: (specialties || "").trim(),
          has_satvik_kitchen: Boolean(hasSatvikKitchen),
          has_cashless_tpa: Boolean(hasCashlessTpa),
          notes: (notes || "").trim(),
          status: "pending_inspection",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase hospital registration error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      applicationId,
      message: "Hospital empanelment application submitted successfully.",
      data,
    });
  } catch (error) {
    console.error("Hospital registration server error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing hospital empanelment.", details: String(error) },
      { status: 500 }
    );
  }
}
