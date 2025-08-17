"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface SparklesTextProps {
  children: React.ReactNode;
  className?: string;
  sparklesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
}

const SparklesText: React.FC<SparklesTextProps> = ({
  children,
  className = "",
  sparklesCount = 10,
  colors = { first: "#9333ea", second: "#06b6d4" },
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkle = (): Sparkle => {
      const sparkle: Sparkle = {
        id: Math.random().toString(36).substring(2, 9),
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        color: Math.random() > 0.5 ? colors.first : colors.second,
        delay: Math.random() * 2,
        scale: Math.random() * 1 + 0.3,
        lifespan: Math.random() * 10 + 5,
      };
      return sparkle;
    };

    const sparklesArray = Array.from({ length: sparklesCount }, generateSparkle);
    setSparkles(sparklesArray);
  }, [colors.first, colors.second, sparklesCount]);

  return (
    <div
      className={cn(
        "relative inline-block text-inherit",
        className
      )}
    >
      <span className="relative z-10">
        {children}
      </span>
      <span className="absolute inset-0" aria-hidden="true">
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
      </span>
    </div>
  );
};

interface SparkleProps {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

const Sparkle: React.FC<SparkleProps> = ({ id, x, y, color, delay, scale, lifespan }) => {
  return (
    <motion.svg
      key={id}
      className="pointer-events-none absolute z-20"
      initial={{ opacity: 0, left: x, top: y }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, scale, 0],
        rotate: [75, 120, 150],
      }}
      transition={{ duration: lifespan, repeat: Infinity, delay }}
      width={"21"}
      height={"21"}
      viewBox="0 0 21 21"
    >
      <path
        d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 13.3076 6.39157 14.5 7.5C15.6923 8.60843 17.8076 9.49935 19.2797 10.0382L21.1561 10.7253C21.7858 10.9554 21.7858 11.8447 21.1561 12.0747L19.2797 12.7618C17.8076 13.3007 15.6923 14.1916 14.5 15.3C13.3076 16.4084 12.4006 18.6077 11.8618 20.0797L11.1746 21.9562C10.9446 22.5848 10.0553 22.5848 9.82531 21.9562L9.13815 20.0797C8.59935 18.6077 7.69234 16.4084 6.49999 15.3C5.30765 14.1916 3.19228 13.3007 1.72025 12.7618L-0.156151 12.0747C-0.785778 11.8447 -0.785778 10.9554 -0.156151 10.7253L1.72025 10.0382C3.19228 9.49935 5.30765 8.60843 6.49999 7.5C7.69234 6.39157 8.59935 4.19229 9.13815 2.72026L9.82531 0.843845Z"
        fill={color}
      />
    </motion.svg>
  );
};

export default SparklesText;
export { SparklesText };
