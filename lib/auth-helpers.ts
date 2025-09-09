import { Session } from "next-auth";
import { prisma } from "@/lib/prisma";

export async function resolveUserId(session: Session | null): Promise<string | undefined> {
  const candidate = session?.user as unknown as { id?: unknown; email?: unknown } | undefined
  const id = candidate && typeof candidate === "object" ? candidate.id : undefined
  if (typeof id === "string" && id) return id

  const email = candidate && typeof candidate === "object" ? candidate.email : undefined
  if (typeof email === "string" && email) {
    const user = await prisma.user.findUnique({ where: { email } })
    return user?.id
  }
  return undefined
}
