"use client"

import * as React from "react"
import {
  IconDashboard,
  IconDatabase,
  IconFileDescription,
  IconFileWord,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "CampusReach Org Admin",
    email: "orgadmin@case.edu",
    avatar: "/avatar.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Manage Events",
      url: "/events",
      icon: IconListDetails,
    },
    {
      title: "Volunteers",
      url: "/volunteers",
      icon: IconUsers,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: IconReport,
    },
    {
      title: "Messages",
      url: "/messages",
      icon: IconFileDescription,
    },
  ],
  navClouds: [
    {
      title: "Quick Links",
      icon: IconInnerShadowTop,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Create New Event",
          url: "/events/new",
        },
        {
          title: "View All Volunteers",
          url: "/volunteers",
        },
        {
          title: "Attendance Tracker",
          url: "/events/attendance",
        },
        {
          title: "Send Announcement",
          url: "/messages/new",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Help & Support",
      url: "/help",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "/volunteers",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Event Resources",
      url: "/resources",
      icon: IconDatabase,
    },
    {
      name: "Participation Reports",
      url: "/reports",
      icon: IconReport,
    },
    {
      name: "Organization Guidelines",
      url: "/guides",
      icon: IconFileWord,
    },
  ],
}

export function OrgSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
