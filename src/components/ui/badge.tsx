import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        // Base variants
        default: "border-transparent bg-primary text-primary-foreground",
        primary: "border-transparent bg-primary/20 text-primary",
        secondary:
          "border-transparent bg-secondary/40 text-secondary-foreground",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",

        // Status variants
        success:
          "border-transparent bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400",
        warning:
          "border-transparent bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
        danger:
          "border-transparent bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400",
        info: "border-transparent bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
        destructive: "border-transparent bg-destructive/20 text-destructive",

        // Color variants
        red: "border-transparent bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400",
        orange:
          "border-transparent bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
        amber:
          "border-transparent bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
        yellow:
          "border-transparent bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400",
        lime: "border-transparent bg-lime-500/10 text-lime-600 dark:bg-lime-500/20 dark:text-lime-400",
        green:
          "border-transparent bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400",
        emerald:
          "border-transparent bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
        teal: "border-transparent bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400",
        cyan: "border-transparent bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400",
        sky: "border-transparent bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400",
        blue: "border-transparent bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
        indigo:
          "border-transparent bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400",
        violet:
          "border-transparent bg-violet-500/10 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400",
        purple:
          "border-transparent bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
        fuchsia:
          "border-transparent bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-400",
        pink: "border-transparent bg-pink-500/10 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400",
        rose: "border-transparent bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",
        gray: "border-transparent bg-gray-500/10 text-gray-600 dark:bg-gray-500/20 dark:text-gray-400",
        slate:
          "border-transparent bg-slate-500/10 text-slate-600 dark:bg-slate-500/20 dark:text-slate-400",
        zinc: "border-transparent bg-zinc-500/10 text-zinc-600 dark:bg-zinc-500/20 dark:text-zinc-400",
        neutral:
          "border-transparent bg-neutral-500/10 text-neutral-600 dark:bg-neutral-500/20 dark:text-neutral-400",
        stone:
          "border-transparent bg-stone-500/10 text-stone-600 dark:bg-stone-500/20 dark:text-stone-400",

        // Permission variants
        private:
          "border-transparent bg-gray-300 text-gray-800 dark:bg-gray-600/30 dark:text-gray-400",
        team: "border-transparent bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
        public:
          "border-transparent bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",

        // Department type variants
        company:
          "border-transparent bg-purple-500/10 text-purple-500 dark:bg-purple-500/20 dark:text-purple-400",
        department:
          "border-transparent bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 dark:text-blue-400",
        group:
          "border-transparent bg-green-500/10 text-green-500 dark:bg-green-500/20 dark:text-green-400",

        // Status variants
        active:
          "border-transparent bg-green-500/10 text-green-500 dark:bg-green-500/20 dark:text-green-400",
        inactive:
          "border-transparent bg-gray-500/10 text-gray-500 dark:bg-gray-500/20 dark:text-gray-400",

        // Role variants
        role: "border-transparent bg-purple-500/10 text-purple-500 dark:bg-purple-500/20 dark:text-purple-400",
        permission:
          "border-transparent bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 dark:text-blue-400",

        // Permission Category Variants
        knowledge_management:
          "border-transparent bg-teal-500/10 text-teal-500 dark:bg-teal-500/20 dark:text-teal-400",
        application_management:
          "border-transparent bg-sky-500/10 text-sky-500 dark:bg-sky-500/20 dark:text-sky-400",
        model_management:
          "border-transparent bg-amber-500/10 text-amber-500 dark:bg-amber-500/20 dark:text-amber-400",
        organization_management:
          "border-transparent bg-slate-500/10 text-slate-500 dark:bg-slate-500/20 dark:text-slate-400",
      },
      size: {
        sm: "px-1.5 py-0.5 text-xs",
        default: "px-2 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  showDot?: boolean;
  dotColor?: string;
}

function Badge({
  className,
  variant,
  size,
  asChild = false,
  showDot = false,
  dotColor,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {showDot && (
        <div
          className={cn("size-1.5 rounded-full", dotColor || "bg-current")}
        />
      )}
      {children}
    </Comp>
  );
}

export { Badge, badgeVariants };
