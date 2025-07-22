import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";
import { Input as InnerInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";

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

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  size = "default",
  prefix,
  className = "",
  ...rest
}, ref) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // 将外部 ref 指向内部的 input 元素
  useImperativeHandle(ref, () => inputRef.current!, []);

  // 处理 onFocus 和 onBlur 事件
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    rest.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    rest.onBlur?.(e);
  };

  if (!prefix) {
    return (
      <InnerInput
        ref={inputRef}
        {...rest}
        className={cn(sizeClassMap[size], className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex items-center border rounded-md px-3 transition-colors",
        focused ? "shadow-ring/50 shadow-[0_0_0_3px] border-ring/50" : "border-gray-300",
        className,
      )}
      onClick={() => inputRef.current?.focus()}
    >
      {prefix && <span className="mr-2 ">{prefix}</span>}
      <InnerInput
        ref={inputRef}
        className={cn("flex-1 border-none outline-none bg-transparent p-0 focus-visible:ring-0", sizeClassMap[size])}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </div>
  );
});

Input.displayName = "Input";
