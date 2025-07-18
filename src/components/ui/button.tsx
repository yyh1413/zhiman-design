"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

import * as React from "react";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border text-muted-foreground bg-accent hover:bg-input/30 hover:text-accent-foreground dark:bg-input/30 border-input/50 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
        ghost:
          "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        brandActive: "bg-primary/10 border border-primary text-primary",
        gradientPrimary:
          "border border-transparent text-primary-foreground bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 focus:ring-0 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800 hover:shadow-lg shadow-primary-500/50  dark:shadow-primary-800/80",
        glass:
          "bg-white/60 backdrop-blur-md border border-white/90 text-foreground/80 shadow-lg shadow-black/5 hover:bg-white/80 hover:border-white/95 dark:bg-black/10 dark:border-white/10 dark:hover:bg-black/20 dark:shadow-white/5",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  className?: string;
  variant?:
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | "brandActive"
  | "gradientPrimary"
  | "glass";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  withMotion?: boolean;
  motionProps?: {
    hoverScale?: number;
    tapScale?: number;
    hoverRotate?: number;
    tapRotate?: number;
  };
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      withMotion = false,
      motionProps = {
        hoverScale: 1.02,
        tapScale: 0.98,
        hoverRotate: 0,
        tapRotate: 0,
      },
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const isGradient = variant?.toString().startsWith("gradient");

    const buttonContent = (
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(
          buttonVariants({ variant, size, className }),
          isGradient && "hover:bg-gradient-to-br",
        )}
        {...props}
      />
    );

    if (withMotion) {
      return (
        <motion.div
          whileHover={{
            scale: motionProps.hoverScale,
            rotate: motionProps.hoverRotate,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: motionProps.tapScale,
            rotate: motionProps.tapRotate,
            transition: { duration: 0.1 },
          }}
        >
          {buttonContent}
        </motion.div>
      );
    }

    return buttonContent;
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
