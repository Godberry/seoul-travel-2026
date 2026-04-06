"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type CardColor =
  | "yellow"
  | "green"
  | "mint"
  | "pink"
  | "blue"
  | "lavender"
  | "white";

const bgMap: Record<CardColor, string> = {
  yellow: "bg-card-yellow",
  green: "bg-card-green",
  mint: "bg-card-mint",
  pink: "bg-card-pink",
  blue: "bg-card-blue",
  lavender: "bg-card-lavender",
  white: "bg-white",
};

interface PaperCardProps {
  children: ReactNode;
  color?: CardColor;
  rotation?: number;
  className?: string;
  delay?: number;
}

export function PaperCard({
  children,
  color = "yellow",
  rotation = 0,
  className = "",
  delay = 0,
}: PaperCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotation }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        rotate: 0,
        transition: { duration: 0.25 },
      }}
      className={`paper-card ${bgMap[color]} cursor-pointer ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {children}
    </motion.div>
  );
}
