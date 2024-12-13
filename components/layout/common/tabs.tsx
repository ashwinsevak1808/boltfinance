
import React from "react";
import { cn } from "@/lib/utils";
import {
  Tabs as CnTabs,
  TabsList as CnTabsList,
  TabsTrigger as CnTabsTrigger,
  TabsContent as CnTabsContent,
} from "@/components/ui/tabs";

interface TabsProps extends React.ComponentProps<typeof CnTabs> {
  children?: React.ReactNode;
}

interface TabsListProps extends React.ComponentProps<typeof CnTabsList> {
  children?: React.ReactNode;
}

interface TabsTriggerProps extends React.ComponentProps<typeof CnTabsTrigger> {
  children?: React.ReactNode;
}

interface TabsContentProps extends React.ComponentProps<typeof CnTabsContent> {
  children?: React.ReactNode;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <CnTabs
        ref={ref}
        className={cn("space-y-6", className)}
        {...props}
      >
        {children}
      </CnTabs>
    );
  }
);

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <CnTabsList
        ref={ref}
        className={cn("grid bg-muted p-1 rounded-xl", className)}
        {...props}
      >
        {children}
      </CnTabsList>
    );
  }
);

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <CnTabsTrigger
        ref={ref}
        className={cn(
          "rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all",
          className
        )}
        {...props}
      >
        {children}
      </CnTabsTrigger>
    );
  }
);

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <CnTabsContent
        ref={ref}
        className={cn("space-y-6", className)}
        {...props}
      >
        {children}
      </CnTabsContent>
    );
  }
);

Tabs.displayName = "Tabs";
TabsList.displayName = "TabsList";
TabsTrigger.displayName = "TabsTrigger";
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
export default Tabs;
