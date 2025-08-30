import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export type Role = "org" | "user" | "none" | "unauthenticated"

export async function getUserRole(): Promise<Role> {
  const session = await auth()
  if (!session?.user?.email) return "unauthenticated"

  // Session does not include user.id; resolve it by email
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true },
  })
  const userId = user?.id
  if (!userId) return "unauthenticated"
 
  // Check if they're a volunteer
  const volunteer = await prisma.volunteer.findUnique({ where: { userId } })

  // Check if they're an organization owner
  const org = await prisma.organization.findFirst({ where: { ownerId: userId } })

  if (org) return "org"
  if (volunteer) return "user"
  return "none"
}
