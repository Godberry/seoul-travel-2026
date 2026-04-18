"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { withBasePath } from "../lib/base-path";

export interface Product {
  name: string;
  desc: string;
  image: string;
  badge?: {
    label: string;
    color: "red" | "blue" | "orange" | "muted";
  };
}

const badgeStyles = {
  red: "bg-accent-red text-white",
  blue: "bg-accent-blue text-white",
  orange: "bg-accent-orange text-white",
  muted: "bg-white/90 text-text-muted border border-bg-cream-dark",
} as const;

interface ProductGridProps {
  products: Product[];
  startDelay?: number;
}

export function ProductGrid({ products, startDelay = 0 }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {products.map((p, i) => {
        const rotation = (i % 2 === 0 ? 1 : -1) * (0.6 + (i % 3) * 0.4);
        return (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 16, rotate: rotation }}
            whileInView={{ opacity: 1, y: 0, rotate: rotation }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: startDelay + i * 0.04, ease: "easeOut" }}
            whileHover={{ scale: 1.03, rotate: 0, transition: { duration: 0.2 } }}
            className="bg-white rounded-sm shadow-md p-2.5 pb-3 cursor-pointer"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div className="relative aspect-square bg-bg-cream-dark/40 rounded-[2px] overflow-hidden mb-2">
              <Image
                src={withBasePath(p.image)}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 45vw, 30vw"
                className="object-cover"
              />
              {p.badge && (
                <span
                  className={`absolute top-1.5 right-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm ${badgeStyles[p.badge.color]}`}
                >
                  {p.badge.label}
                </span>
              )}
            </div>
            <h3 className="font-heading font-bold text-sm text-accent-red leading-tight">
              {p.name}
            </h3>
            <p className="text-[11px] md:text-xs text-text-muted mt-1 leading-snug">
              {p.desc}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
