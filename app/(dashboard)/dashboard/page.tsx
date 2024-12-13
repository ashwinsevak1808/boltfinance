"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuickStatsGrid from "@/components/dashboard/quick-stats-grid";
import TransactionsView from "@/components/dashboard/transactions-view";
import { InsightView } from "@/components/dashboard/insights-view";
import { Header } from "@/components/layout/header";
import TransactionsPage from "../transactions/page";
import { useState } from "react";
import FirstTimeCongrats from "@/components/dashboard/first_time_registered";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardPage() {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);

  const handleCongratsComplete = () => {
    setIsFirstTimeUser(false);
    // Optional: You might want to set a flag in localStorage
    // to remember that the user has seen the congrats screen
    localStorage.setItem("isFirstTimeUser", "false");
  };
  return (
    <>
      {isFirstTimeUser && (
        <FirstTimeCongrats onComplete={handleCongratsComplete} />
      )}
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className=" grid-cols-5 gap-2 bg-muted p-1 rounded-xl">
                {["Overview", "Transactions", "Money Management"].map((tab) => (
                  <TabsTrigger
                    key={tab.toLowerCase()}
                    value={tab.toLowerCase()}
                    className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <QuickStatsGrid />
                <TransactionsView />
                <InsightView />
              </TabsContent>

              <TabsContent value="transactions" className="space-y-6">
                <TransactionsPage />
              </TabsContent>

              <TabsContent
                value="money management"
                className="space-y-6"
              ></TabsContent>
            </Tabs>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

// export default function DashboardPage() {
//   return (
//     <>
//       <div className="min-h-screen bg-background h-screen overflow-hidden">
//         <Header />

//         <main className="container-fluid mx-auto px-4 py-6"></main>
//       </div>
//     </>
//   );
// }
