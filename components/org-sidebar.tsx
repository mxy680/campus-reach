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
  IconPlus,
  IconChecklist,
  IconQrcode,
  IconBuildingCommunity,
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
      title: "Home",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Opportunities",
      url: "/opportunities",
      icon: IconListDetails,
    },
    {
      title: "Create Opportunity",
      url: "/opportunities/new",
      icon: IconPlus,
    },
    {
      title: "Approvals",
      url: "/approvals",
      icon: IconChecklist,
    },
    {
      title: "Volunteers",
      url: "/volunteers",
      icon: IconUsers,
    },
    {
      title: "Attendance / QR",
      url: "/attendance",
      icon: IconQrcode,
    },
    {
      title: "Messages",
      url: "/messages",
      icon: IconFileDescription,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: IconReport,
    },
    {
      title: "Organization Profile",
      url: "/org",
      icon: IconBuildingCommunity,
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
          title: "Create Opportunity",
          url: "/opportunities/new",
        },
        {
          title: "Volunteer Roster",
          url: "/volunteers",
        },
        {
          title: "Attendance / QR",
          url: "/attendance",
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
      url: "/search",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Posting Guidelines",
      url: "/resources/guidelines",
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
                <span className="text-base font-semibold">CampusReach Admin</span>
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
