"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextAnimateProps {
  text: string;
  type?: "letter" | "word";
  duration?: number;
  delay?: number;
  className?: string;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
}

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const TextAnimate = ({
  text,
  type = "word",
  duration = 0.3,
  delay = 0,
  className,
  animation = defaultAnimation,
}: TextAnimateProps) => {
  const controls = useAnimation();
  const textRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(textRef, { once: true, amount: 0.5 });
  const textArray = type === "word" ? text.split(" ") : text.split("");

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <span className={cn("inline-block", className)} ref={textRef}>
      {textArray.map((char, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate={controls}
          variants={animation}
          transition={{
            duration: duration,
            delay: delay + index * 0.06,
            ease: [0.215, 0.61, 0.355, 1.0],
          }}
          className={cn("inline-block", type === "word" && "mr-1")}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
}

export function LetterPullup({
  className,
  words,
  delay,
}: LetterPullupProps) {
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05 + (delay ? delay : 0),
      },
    }),
  };

  return (
    <div className="flex justify-center">
      {letters.map((letter, i) => (
        <motion.div
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
          className={cn(
            "text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-4xl md:leading-[5rem]",
            className,
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.div>
      ))}
    </div>
  );
}

interface WordPullupProps {
  className?: string;
  words: string;
  delay?: number;
}

export function WordPullup({ className, words, delay }: WordPullupProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const wordArray = words.split(" ");

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {wordArray.map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{ display: "inline-block", paddingRight: "8px" }}
          transition={{ delay: delay ? delay + i * 0.1 : i * 0.1 }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface WordFadeInProps {
  className?: string;
  words: string;
  delay?: number;
}

export function WordFadeIn({ className, words, delay }: WordFadeInProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show: { opacity: 1, filter: "blur(0px)" },
  };

  const wordArray = words.split(" ");

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
        className,
      )}
    >
      {wordArray.map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{ display: "inline-block", paddingRight: "8px" }}
          transition={{ delay: delay ? delay + i * 0.1 : i * 0.1 }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.div>
  );
}
