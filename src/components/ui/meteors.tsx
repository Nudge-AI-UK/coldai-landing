import { cn } from "@/lib/utils";
import React from "react";

interface MeteorsProps extends React.HTMLAttributes<HTMLDivElement> {
  number?: number;
}

export const Meteors: React.FC<MeteorsProps> = ({
  number = 20,
  className,
  ...props
}) => {
  const meteors = new Array(number).fill(true);
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} {...props}>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
          )}
          style={{
            top: Math.floor(Math.random() * 100) + "%",
            left: Math.floor(Math.random() * 100) + "%",
            animationDelay: Math.random() * 1 + "s",
            animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
          }}
        ></span>
      ))}
    </div>
  );
};