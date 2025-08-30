import { OrgSidebar } from "@/components/org-sidebar"
import { UserSidebar } from "@/components/user-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { getUserRole, type Role } from "@/lib/role"

export default async function Page() {
  const role: Role = await getUserRole()

  const sidebar = role === "org" ? (
    <OrgSidebar variant="inset" />
  ) : (
    <UserSidebar variant="inset" />
  )

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      {sidebar}
      <SidebarInset>
        <SiteHeader />
      </SidebarInset>
    </SidebarProvider>
  )
}
