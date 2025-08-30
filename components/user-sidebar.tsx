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
    name: "CampusReach Volunteer",
    email: "volunteer@example.com",
    avatar: "/avatar.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Browse opportunities",
      url: "/opportunities",
      icon: IconSearch,
    },
    {
      title: "My events",
      url: "/my-events",
      icon: IconListDetails,
    },
    {
      title: "Saved",
      url: "/saved",
      icon: IconDatabase,
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
          title: "Find opportunities",
          url: "/opportunities",
        },
        {
          title: "My upcoming events",
          url: "/my-events",
        },
        {
          title: "Saved items",
          url: "/saved",
        },
        {
          title: "Contact support",
          url: "/help",
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
      title: "Search opportunities",
      url: "/opportunities",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "My applications",
      url: "/applications",
      icon: IconReport,
    },
    {
      name: "Saved opportunities",
      url: "/saved",
      icon: IconDatabase,
    },
    {
      name: "Volunteer guidelines",
      url: "/guides",
      icon: IconFileWord,
    },
  ],
}

export function UserSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
                <span className="text-base font-semibold">CampusReach</span>
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
