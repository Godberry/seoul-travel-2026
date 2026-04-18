import { PillHeader } from "../components/PillHeader";
import { EntryCard } from "../components/EntryCard";
import { ShoppingBag } from "lucide-react";

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
    </div>
  );
}
