import React, { useEffect, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  startYOffset?: number;
  endYOffset?: number;
  dotted?: boolean;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  startYOffset = 0,
  endYOffset = 0,
  dotted = false,
}) => {
  const pathRef = useRef<SVGPathElement>(null);

  const [pathD, setPathD] = React.useState<string>("");
  const [pathLength, setPathLength] = React.useState<number>(0);

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      const startX = fromRect.left - containerRect.left + fromRect.width / 2;
      const startY = fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset;
      const endX = toRect.left - containerRect.left + toRect.width / 2;
      const endY = toRect.top - containerRect.top + toRect.height / 2 + endYOffset;

      const midX = (startX + endX) / 2;
      const midY = (startY + endY) / 2 + curvature;

      const path = `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
      setPathD(path);

      if (pathRef.current) {
        setPathLength(pathRef.current.getTotalLength());
      }
    };

    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, [containerRef, fromRef, toRef, curvature, startYOffset, endYOffset]);

  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 z-10", className)}
      width="100%"
      height="100%"
    >
      <path
        ref={pathRef}
        d={pathD}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray={dotted ? "5 5" : undefined}
      />
      <AnimatePresence>
        {pathLength > 0 && (
          <motion.circle
            key="circle"
            r="4"
            fill="currentColor"
            initial={{ offsetDistance: reverse ? "100%" : "0%" }}
            animate={{ offsetDistance: reverse ? "0%" : "100%" }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              offsetPath: `path('${pathD}')`,
            }}
          />
        )}
      </AnimatePresence>
    </svg>
  );
};
