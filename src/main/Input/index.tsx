import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { Input as InnerInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "./Search";

export interface InputProps extends Omit<React.ComponentProps<typeof InnerInput>, 'size' | 'prefix'> {
  size?: "large" | "default" | "small";
  prefix?: React.ReactNode;
  ref?: React.RefObject<HTMLInputElement>;
}

const sizeClassMap = {
  small: "h-8",
  default: "h-9",
  large: "h-10",
};

export const BaseInput = forwardRef<HTMLInputElement, InputProps>(({
  size = "default",
  prefix,
  className = "",
  ...rest
}, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // 将外部 ref 指向内部的 input 元素
  useImperativeHandle(ref, () => inputRef.current!, []);

  if (!prefix) {
    return (
      <InnerInput
        ref={inputRef}
        {...rest}
        className={cn(sizeClassMap[size], className)}
      />
    );
  }

  const renderPrefix = () => {
    return <span className={cn("text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50",
      "text-muted-foreground/80")}>
      {prefix}
    </span>
  }
  const psLeftClass = prefix ? "ps-9" : "";
  return (
    <span className="relative">
      {renderPrefix()}
      <InnerInput
        ref={inputRef}
        {...rest}
        className={cn(sizeClassMap[size], className, psLeftClass)}
      />
    </span>
  )
  // return (
  //   <div
  //     className={cn(
  //       "flex items-center border rounded-md px-3 transition-colors",
  //       focused ? "shadow-ring/50 shadow-[0_0_0_3px] border-ring/50" : "border-gray-300",
  //       className,
  //     )}
  //     onClick={() => inputRef.current?.focus()}
  //   >
  //     {prefix && <span className="mr-2 ">{prefix}</span>}
  //     <InnerInput
  //       ref={inputRef}
  //       className={cn("flex-1 border-none outline-none bg-transparent p-0 focus-visible:ring-0", sizeClassMap[size])}
  //       onFocus={handleFocus}
  //       onBlur={handleBlur}
  //       {...rest}
  //     />
  //   </div>
  // );
});

BaseInput.displayName = "BaseInput";

export const Input = Object.assign(BaseInput, { Search });
Input.displayName = "Input";