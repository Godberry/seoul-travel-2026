import { PillHeader } from "../components/PillHeader";
import { EntryCard } from "../components/EntryCard";
import { ShoppingBag, BadgePercent, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ShoppingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <PillHeader>購物攻略</PillHeader>

      <p className="text-center text-sm md:text-base text-text-muted mt-4 max-w-2xl mx-auto leading-relaxed flex items-center justify-center gap-1.5">
        <ShoppingBag className="w-4 h-4" />
        從超商限定到 Olive Young 必買，一次整理好
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        <EntryCard
          href="/shopping/convenience-store"
          title="超商購物"
          subtitle="CU · GS25 · 7-Eleven 三大超商必買 15 款"
          image="/assets/CU.jpg"
          color="pink"
          rotation={-1}
          delay={0.05}
        />
        <EntryCard
          href="/shopping/olive-young"
          title="Olive Young"
          subtitle="韓國最大美妝零售，女生、男生、零食推薦"
          image="/assets/Olive-young/Olive Young.jpg"
          color="lavender"
          rotation={0.8}
          delay={0.12}
        />
      </div>

      {/* Tax Refund highlight banner */}
      <Link
        href="/shopping/tax-refund"
        className="mt-6 md:mt-8 group block rounded-2xl border-l-4 border-accent-blue bg-white/80 hover:bg-white shadow-sm hover:shadow-md transition-all p-4 md:p-5"
      >
        <div className="flex items-center gap-4">
          <div className="shrink-0 w-11 h-11 rounded-full bg-accent-blue/10 flex items-center justify-center">
            <BadgePercent className="w-5 h-5 text-accent-blue" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-bold text-base md:text-lg text-accent-red">
              韓國退稅指南
            </h3>
            <p className="text-xs md:text-sm text-text-muted leading-snug mt-0.5">
              滿 15,000 韓元就能退稅 · 結帳前先看流程與注意事項
            </p>
          </div>
          <ArrowRight className="shrink-0 w-5 h-5 text-accent-blue transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  );
}
