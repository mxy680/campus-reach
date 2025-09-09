import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";

const volunteerSchema = z.object({
  heardAbout: z.string().min(1).max(200),
  motivation: z.string().min(1).max(200),
});

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => ({}));
    const parsed = volunteerSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const payload = JSON.stringify(parsed.data);
    // Small payload; storing directly in a short-lived, httpOnly cookie.
    const cookieStore = await cookies();
    cookieStore.set("onboarding.volunteer", payload, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 10, // 10 minutes
    });

    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ error: "Failed to preset onboarding" }, { status: 500 });
  }
}
