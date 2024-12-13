import { Background } from "@/components/layout/common/background";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <Background>
        <div className="">
          <div className="container py-24 lg:py-32">
            {/* Announcement Banner */}
            <div className="flex justify-center">
              <a
                className="inline-flex items-center gap-x-2 border text-xs p-1 ps-2 rounded-full transition"
                href="#"
              >
                New Features - Smart Budget Tracking
                <span className="py-1 px-2 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-xs">
                  <svg
                    className="flex-shrink-0 w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </a>
            </div>
            {/* End Announcement Banner */}
            {/* Title */}
            <div className="mt-5 max-w-2xl text-center mx-auto">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
                Take Control of Your Finances
              </h1>
            </div>
            {/* End Title */}
            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className="text-base text-muted-foreground">
                FinanceBolt helps you manage your money smarter. Track expenses,
                set budgets, and achieve your financial goals with our
                easy-to-use platform.
              </p>
            </div>
            {/* Buttons */}
            <div className="mt-8 gap-3 flex justify-center">
              <Button size={"lg"} asChild>
                <a href="/auth">Register Now</a>
              </Button>
              <Button size={"lg"} variant={"outline"} asChild>
                <a href="/auth">Login</a>
              </Button>
            </div>
            {/* End Buttons */}
            <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
              <span className="text-sm text-muted-foreground">
                Start managing your finances in:
              </span>
              <span className="text-sm font-bold">2 minutes</span>
              <svg
                className="h-5 w-5 text-muted-foreground"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 13L10 3"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </svg>
              <a
                className="inline-flex items-center gap-x-1 text-sm decoration-2 hover:underline font-medium"
                href="#"
              >
                How it works
                <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Background>
    </>
  );
}
