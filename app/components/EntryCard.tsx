"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { withBasePath } from "../lib/base-path";

type CardColor = "yellow" | "green" | "mint" | "pink" | "blue" | "lavender";

const bgMap: Record<CardColor, string> = {
  yellow: "bg-card-yellow",
  green: "bg-card-green",
  mint: "bg-card-mint",
  pink: "bg-card-pink",
  blue: "bg-card-blue",
  lavender: "bg-card-lavender",
};

interface EntryCardProps {
  href: string;
  title: string;
  subtitle: string;
  image?: string;
  emoji?: string;
  color?: CardColor;
  rotation?: number;
  delay?: number;
}

export function EntryCard({
  href,
  title,
  subtitle,
  image,
  emoji,
  color = "yellow",
  rotation = 0,
  delay = 0,
}: EntryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotation }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02, rotate: 0, transition: { duration: 0.25 } }}
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`paper-card ${bgMap[color]} p-0 overflow-hidden`}
    >
      <Link href={href} className="block">
        <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-white/50 overflow-hidden">
          {image ? (
            <Image
              src={withBasePath(image)}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl md:text-7xl">
              {emoji}
            </div>
          )}
        </div>
        <div className="p-4 md:p-5 flex items-center justify-between gap-3">
          <div>
            <h3 className="font-heading font-bold text-lg md:text-xl text-accent-red">
              {title}
            </h3>
            <p className="text-xs md:text-sm text-text-muted mt-1 leading-snug">
              {subtitle}
            </p>
          </div>
          <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-accent-blue flex items-center justify-center text-white">
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
