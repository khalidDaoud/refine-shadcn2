import * as React from "react"
import {
  AudioWaveform,
  Command,
  TruckIcon,
  ListTodoIcon,
  MapPinIcon,
  GalleryVerticalEnd,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "./ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Delivery Vehicles",
      url: "/delivery-vehicles",
      icon: TruckIcon,
      isActive: true,
      items: [
        {
          title: "List",
          url: "/delivery-vehicles",
        },
        {
          title: "Create",
          url: "/delivery-vehicles/create",
        }
      ],
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: ListTodoIcon,
      items: [
        {
          title: "List",
          url: "/tasks",
        },
        {
          title: "Create",
          url: "/tasks/create",
        }
      ],
    },
    {
      title: "Task Tracking",
      url: "/tracking",
      icon: MapPinIcon,
      items: [
        {
          title: "List",
          url: "/tracking",
        }
      ],
    }
  ],
  projects: [
    {
      name: "Delivery Vehicles",
      url: "/delivery-vehicles",
      icon: TruckIcon,
    },
    {
      name: "Tasks",
      url: "/tasks",
      icon: ListTodoIcon,
    },
    {
      name: "Task Tracking",
      url: "/tracking",
      icon: MapPinIcon,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
