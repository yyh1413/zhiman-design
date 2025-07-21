import { cn } from "@/lib/utils";
import * as React from "react";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("rounded-xs bg-accent skeleton", className)}
      {...props}
    />
  );
}

export { Skeleton };
