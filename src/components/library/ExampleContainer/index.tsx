import React from "react";

import { cn } from "../../../lib/utils";

interface ExampleContainerProps {
  children: React.ReactNode;
  align?: "start" | "center" | "end";
  title?: string;
}

export function ExampleContainer({
  children,
  align = "center",
  title,
}: ExampleContainerProps) {
  return (
    <div
      className={cn(
        "border-border relative  rounded-lg border p-6",
        "[background-size:20px_20px]",
        "[background-image:radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)]",
        "dark:[background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] ",
      )}
    >
      <div className="pointer-events-none absolute inset-1 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] [background:var(--background)]"></div>

      <div
        className={cn(
          "relative z-10 flex w-full items-center",
          align === "start" && "justify-start",
          align === "center" && "justify-center",
          align === "end" && "justify-end",
        )}
      >
        <div className="space-y-6 w-full">
          {title && <h3 className="text-lg font-medium">{title}</h3>}
          {children}
        </div>
      </div>
    </div>
  );
}
