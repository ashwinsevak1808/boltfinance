import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="group overflow-visible relative flex items-center gap-3 hover:bg-accent/50 data-[state=open]:bg-accent/80 transition-colors duration-200 ease-in-out rounded-lg p-3"
            >
              <div className="grid flex-1 text-left">
                <span className="text-sm font-semibold text-foreground group-hover:text-foreground/80 transition-colors truncate">
                  {activeTeam.name}
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-muted-foreground/70 truncate">
                  {activeTeam.plan}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto  text-muted-foreground group-hover:text transition-colors shrink-0" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-64 rounded-xl shadow-lg border-none bg-card max-h-[calc(100vh-4rem)] overflow-y-auto"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs font-medium text-muted-foreground px-3 py-2 sticky top-0 bg-card z-10">
              Switch Teams
            </DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className="group flex items-center gap-3 px-3 py-2.5 cursor-pointer 
                  hover:bg-accent/50 focus:bg-accent/50 
                  rounded-md transition-colors duration-200"
              >
                <div className="flex size-9 items-center justify-center rounded-md border border-border/50 bg-background group-hover:bg-accent/30 transition-colors shrink-0">
                  <team.logo className="size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <span className="flex-1 text-sm font-medium group-hover:text-foreground/80 transition-colors truncate">
                  {team.name}
                </span>
                <DropdownMenuShortcut className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0">
                  ⌘{index + 1}
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="my-1.5 bg-border/50" />
            <DropdownMenuItem
              className="group flex items-center gap-3 px-3 py-2.5 cursor-pointer 
                hover:bg-accent/50 focus:bg-accent/50 
                rounded-md transition-colors duration-200"
            >
              <div className="flex size-9 items-center justify-center rounded-md border border-dashed border-muted-foreground/50 bg-background group-hover:border-primary/50 transition-colors shrink-0">
                <Plus className="size-5 text-muted group-hover:text-primary transition-colors" />
              </div>
              <div className="flex-1 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors truncate">
                Add team
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
