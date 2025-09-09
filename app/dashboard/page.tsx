import { OrgSidebar } from "@/components/org-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default async function Page() {
  // Platform uses only the organization sidebar now
  const sidebar = <OrgSidebar variant="inset" />

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
