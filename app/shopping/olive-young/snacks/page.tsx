"use client";

import { PillHeader } from "../../../components/PillHeader";
import { ProductGrid, Product } from "../../../components/ProductGrid";
import { BackLink } from "../../../components/BackLink";

const snacks: Product[] = [
  { name: "Delight Project 貝果餅乾", desc: "韓綜爆紅，低卡又香脆，大蒜口味最熱門", image: "/assets/Olive-young/Delight Project 貝果餅乾.jpg" },
  { name: "Taylor 西梅汁軟糖", desc: "順暢系零食之王", image: "/assets/Olive-young/Taylor 西梅汁軟糖.jpg" },
  { name: "Market O 布朗尼蛋糕", desc: "送禮自用兩相宜", image: "/assets/Olive-young/Market O 布朗尼蛋糕.jpg" },
  { name: "LOTTE Zero 系列", desc: "無糖零食，減肥也能吃", image: "/assets/Olive-young/LOTTE Zero 系列.jpg" },
];

export default function SnacksPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-4">
        <BackLink href="/shopping/olive-young" label="Olive Young" />
      </div>

      <PillHeader>零食推薦 🍪</PillHeader>

      <p className="text-center text-sm md:text-base text-text-muted mt-4 max-w-xl mx-auto">
        Olive Young 的零食區超好逛，送禮自用兩相宜
      </p>

      <section className="mt-10">
        <ProductGrid products={snacks} />
      </section>
    </div>
  );
}
