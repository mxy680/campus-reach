import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { resolveUserId } from "@/lib/auth-helpers";

// We accept GET because NextAuth redirect callback will be a GET to this URL via callbackUrl.
export async function GET(req: Request) {
  const url = new URL(req.url);
  const role = url.searchParams.get("role");

  try {
    const session = await auth();
    if (!session) {
      // If somehow not authenticated, go to login.
      return NextResponse.redirect(new URL("/auth/login", url));
    }

    const userId = await resolveUserId(session);
    if (!userId) {
      return NextResponse.redirect(new URL("/dashboard", url));
    }

    if (role === "volunteer") {
      const cookieStore = await cookies();
      const payload = cookieStore.get("onboarding.volunteer")?.value;
      if (payload) {
        // Clear cookie regardless of parsing success for idempotency
        cookieStore.delete("onboarding.volunteer");
      }

      if (payload) {
        try {
          const data = JSON.parse(payload) as { heardAbout?: string | null; motivation?: string | null };
          const heardAbout = data.heardAbout ?? null;
          const motivation = data.motivation ?? null;

          // Idempotent upsert on unique userId
          await prisma.volunteer.upsert({
            where: { userId },
            create: { userId, heardAbout, motivation },
            update: { heardAbout, motivation },
          });
        } catch {
          // Ignore malformed cookie and continue to dashboard
        }
      }

      return NextResponse.redirect(new URL("/dashboard", url));
    }

    // Default: just go to dashboard for any other role
    return NextResponse.redirect(new URL("/dashboard", url));
  } catch {
    return NextResponse.redirect(new URL("/dashboard", new URL(req.url)));
  }
}
