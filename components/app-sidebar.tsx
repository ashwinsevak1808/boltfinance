"use client";

import * as React from "react";
import {
  PieChart,
  Settings2,
  LayoutDashboard,
  BookOpen,
  CreditCard,
  BarChart,
  PiggyBank,
  DollarSign,
  ChevronRight,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Card from "./layout/common/card";
import { HeaderUser } from "./nav-user";

// This is sample data.
const data = {
  user: {
    name: "Ashwin Sevak",
    email: "ashwinsevak2091@gmail.com",
    avatar: "/avatars/johndoe.jpg",
  },
  teams: [
    {
      name: "Personal",
      logo: PiggyBank,
      plan: "Free",
    },
    {
      name: "Family Budget",
      logo: Users,
      plan: "Premium",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [],
    },
    {
      title: "Transactions",
      url: "#",
      icon: CreditCard,
      items: [
        {
          title: "Recent",
          url: "#",
        },
        {
          title: "Recurring",
          url: "#",
        },
        {
          title: "Categories",
          url: "#",
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: BarChart,
      items: [
        {
          title: "Monthly",
          url: "#",
        },
        {
          title: "Yearly",
          url: "#",
        },
        {
          title: "Custom",
          url: "#",
        },
      ],
    },
    {
      title: "Budget",
      url: "#",
      icon: PieChart,
      items: [
        {
          title: "Create Budget",
          url: "#",
        },
        {
          title: "Track Progress",
          url: "#",
        },
      ],
    },
    {
      title: "Savings Goals",
      url: "#",
      icon: DollarSign,
      items: [
        {
          title: "New Goal",
          url: "#",
        },
        {
          title: "Active Goals",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Getting Started",
          url: "#",
        },
        {
          title: "FAQs",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Notifications",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Track Spending",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Save for Vacation",
      url: "#",
      icon: PiggyBank,
    },
    {
      name: "Emergency Fund",
      url: "#",
      icon: DollarSign,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <Card className="m-4 h-full  overflow-hidden">
      <SidebarHeader>
      <HeaderUser user={data.user} />
        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <HeaderUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
      </Card>
    </Sidebar>
  );
}
