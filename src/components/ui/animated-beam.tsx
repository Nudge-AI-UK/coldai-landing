"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface AnimatedBeamProps {
  className?: string;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  duration?: number;
  delay?: number;
}

export const AnimatedBeam = ({
  className,
  pathColor = "rgba(139, 92, 246, 0.2)",
  pathWidth = 2,
  pathOpacity = 0.5,
  gradientStartColor = "#8B5CF6",
  gradientStopColor = "#3B82F6",
  duration = 8,
  delay = 0,
}: AnimatedBeamProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 400"
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="50%" stopColor={gradientStartColor} stopOpacity="1" />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
      
      <path
        d="M 100 200 Q 400 100 700 200"
        stroke={pathColor}
        strokeWidth={pathWidth}
        fill="none"
        opacity={pathOpacity}
      />
      
      <motion.circle
        r="4"
        fill="url(#beam-gradient)"
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          offsetPath: "path('M 100 200 Q 400 100 700 200')",
        }}
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1;2;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </motion.circle>
    </svg>
  );
};