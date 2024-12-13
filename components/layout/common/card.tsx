import React from "react";
import { cn } from "@/lib/utils";
import { Card as CnCard, CardTitle as CnCardTitle } from "@/components/ui/card";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <CnCardTitle
        ref={ref}
        className={cn(
          "text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent",
          className
        )}
        {...props}
      >
        {children}
      </CnCardTitle>
    );
  }
);

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <CnCard
        ref={ref}
        className={cn(
          "hover:shadow-lg rounded-2xl transition-all duration-300 border-1 backdrop-blur-sm bg-white/90",
          className
        )}
        {...props}
      >
        {children}
      </CnCard>
    );
  }
);

Card.displayName = "Card";
CardTitle.displayName = "CardTitle";

export { Card, CardTitle };
export default Card;