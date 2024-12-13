import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import { UserNav } from "./user-nav";
import { API_ENDPOINTS } from "@/utils/api/apiConstants";
import { toast } from "sonner";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userDetails, setUserDetails] = useState<{ name?: string; email?: string } | undefined>(undefined);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const response = await fetch(API_ENDPOINTS.DASHBOARD, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) throw new Error('Failed to fetch user details');

        const data = await response.json();
        setUserDetails(data.user);
      } catch (error) {
        toast.error("Error", {
          description: "Failed to fetch user details"
        });
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/auth';
    toast.success("Logout Successful", {
      description: "You have been logged out successfully.",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-fluid mx-auto flex flex-col sm:flex-row items-center justify-between py-4 px-4">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Financial Dashboard
            </h2>
            {/* Mobile Menu Toggle */}
            <div className="sm:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px]">
                  <div className="flex flex-col space-y-4 pt-8">
                    <Button variant="ghost" className="justify-start">
                      <Plus className="mr-2 h-4 w-4" /> Add Transaction
                    </Button>
                    <ModeToggle />
                    <UserNav userDetails={userDetails} onLogout={handleLogout} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Desktop Controls */}
          <div className="hidden sm:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <ModeToggle />
              <UserNav userDetails={userDetails} onLogout={handleLogout} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}