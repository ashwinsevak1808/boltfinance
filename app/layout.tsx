import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "FinanceFlow - Smart Expense Management",
  description: "Track, manage, and optimize your finances with ease",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const validateJwtToken = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return false;
      
      const response = await fetch("/api/validate-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  const isAuthorized = await validateJwtToken();

  if (typeof window !== "undefined") {
    if (!isAuthorized) {
      window.location.href = "/auth";
    } else if (window.location.pathname === "/") {
      window.location.href = "/dashboard";
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-background antialiased"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
          <Sonner />
        </ThemeProvider>
      </body>
    </html>
  );
}
