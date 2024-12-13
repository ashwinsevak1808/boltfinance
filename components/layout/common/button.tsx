import { Button as ButtonUI } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
  label?: string;
  onClick?: () => void;
  onSubmit?: () => void;
}

export function Button({
  isLoading,
  loadingText,
  label,
  className,
  onClick,
  onSubmit,
  ...props
}: ButtonProps) {
  return (
    <div className="flex flex-col gap-1">
   
      <ButtonUI
        {...props}
        disabled={isLoading}
        onClick={onClick}
        onSubmit={onSubmit}
        className={cn(
          "w-full h-10 text-sm font-semibold hover:scale-[1.02] transition-transform",
          className
        )}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {loadingText}
          </>
        ) : (
          label
        )}
      </ButtonUI>
    </div>
  );
}