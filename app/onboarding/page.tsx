import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export default async function OnboardingPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams

  const session = await auth()
  if (!session) return redirect("/auth/signup")

  const role = Array.isArray(sp.role) ? sp.role[0] : sp.role
  // Role-based handling. Only support 'volunteer' for now.

  const getUserId = (u: unknown): string | undefined => {
    if (u && typeof u === "object" && "id" in u) {
      const id = (u as { id?: unknown }).id
      if (typeof id === "string") return id
    }
    return undefined
  }

  if (role === "volunteer") {
    const heardAbout = Array.isArray(sp.heardAbout) ? sp.heardAbout[0] : sp.heardAbout
    const motivation = Array.isArray(sp.motivation) ? sp.motivation[0] : sp.motivation

    const userId = getUserId(session.user)
    const email = session.user?.email ?? undefined

    let resolvedUserId = userId
    if (!resolvedUserId && email) {
      const user = await prisma.user.findUnique({ where: { email } })
      resolvedUserId = user?.id
    }

    if (!resolvedUserId) return redirect("/dashboard")

    // Check if a volunteer already exists for this user
    const existingVolunteer = await prisma.volunteer.findUnique({
      where: { userId: resolvedUserId },
    })

    console.log("existingVolunteer", existingVolunteer)

    if (!existingVolunteer) {
      await prisma.volunteer.create({
        data: {
          userId: resolvedUserId,
          heardAbout: heardAbout ?? null,
          motivation: motivation ?? null,
        },
      })
    }

    return redirect("/dashboard")
  }

  if (role === "organization") {
    // Resolve current user id
    const userId = getUserId(session.user)
    const email = session.user?.email ?? undefined
    let resolvedUserId = userId
    if (!resolvedUserId && email) {
      const user = await prisma.user.findUnique({ where: { email } })
      resolvedUserId = user?.id
    }

    if (resolvedUserId) {
      const org = await prisma.organization.findFirst({ where: { ownerId: resolvedUserId } })
      if (!org) {
        await prisma.organization.create({
          data: {
            ownerId: resolvedUserId,
            name: "Untitled Organization",
            email: email ?? null,
          },
        })
      }
    }

    return redirect("/dashboard")
  }

  // Placeholder for other roles: redirect for now.
  return redirect("/dashboard")
}