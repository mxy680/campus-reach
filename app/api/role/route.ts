import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user) {
      return Response.json({ role: "unauthenticated" }, { status: 401 })
    }

    type SessionUser = { id?: string | null; email?: string | null }
    const su = session.user as SessionUser
    let userId = su.id ?? undefined

    // Fallback: resolve user id via email if not present on session
    if (!userId && su.email) {
      const user = await prisma.user.findUnique({
        where: { email: su.email },
        select: { id: true },
      })
      userId = user?.id
    }

    if (!userId) {
      return Response.json({ role: "unauthenticated" }, { status: 401 })
    }

    const [org, volunteer] = await Promise.all([
      prisma.organization.findFirst({ where: { ownerId: userId }, select: { id: true } }),
      prisma.volunteer.findUnique({ where: { userId }, select: { id: true } }),
    ])

    const role = org ? "org" : volunteer ? "user" : "none"

    return new Response(JSON.stringify({ role }), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store",
      },
    })
  } catch (err) {
    console.error("/api/role error", err)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
