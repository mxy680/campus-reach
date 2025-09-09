"use client"

import * as React from "react"
import {
  IconDashboard,
  IconDatabase,
  IconGift,
  IconFileDescription,
  IconFileWord,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconClockHour4,
  IconMedal,
  IconUser,
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
      title: "Home",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Opportunities",
      url: "/opportunities",
      icon: IconSearch,
    },
    {
      title: "Rewards",
      url: "/rewards",
      icon: IconGift,
    },
    {
      title: "Hours Log",
      url: "/hours",
      icon: IconClockHour4,
    },
    {
      title: "Badges",
      url: "/badges",
      icon: IconMedal,
    },
    {
      title: "My Events",
      url: "/my-events",
      icon: IconListDetails,
    },
    {
      title: "Saved",
      url: "/saved",
      icon: IconDatabase,
    },
    {
      title: "Profile",
      url: "/profile",
      icon: IconUser,
    },
    {
      title: "Community",
      url: "/community",
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
          title: "Find Opportunities",
          url: "/opportunities",
        },
        {
          title: "My Upcoming Events",
          url: "/my-events",
        },
        {
          title: "Rewards & Badges",
          url: "/rewards",
        },
        {
          title: "Saved Items",
          url: "/saved",
        },
        {
          title: "Help Center",
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
    // Optional: surface logout here when available
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
