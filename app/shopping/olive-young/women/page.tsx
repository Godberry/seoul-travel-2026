"use client";

import { PillHeader } from "../../../components/PillHeader";
import { ProductGrid, Product } from "../../../components/ProductGrid";
import { BackLink } from "../../../components/BackLink";
import { Sparkles, Palette, Scissors } from "lucide-react";

const skincare: Product[] = [
  { name: "VT Reedle Shot 100", desc: "張員瑛同款，被譽為「擦的水光針」，架上最容易缺貨爆款", image: "/assets/Olive-young/VT Cosmetics(Reedle Shot).jpg" },
  { name: "Torriden 玻尿酸精華", desc: "Olive Young 銷量冠軍，五重玻尿酸深層保濕，全膚質適用", image: "/assets/Olive-young/Torriden(玻尿酸精華).jpg" },
  { name: "Numbuzin 數字面膜 / 精華", desc: "數字分類功效：1-2 號保濕、3-4 號毛孔、5 號美白", image: "/assets/Olive-young/Numbuzin(數字系列).jpg" },
  { name: "Anua 魚腥草精華", desc: "鎮靜舒緩爆款，痘痘肌救星", image: "/assets/Olive-young/Anua(魚腥草).png" },
  { name: "SKINFOOD 胡蘿蔔棉片", desc: "棉片紙厚實可撕兩張，曬後急救、鎮靜泛紅", image: "/assets/Olive-young/SKINFOOD 胡蘿蔔棉片.png" },
  { name: "MEDIHEAL 積雪草棉片", desc: "2024 年度棉片銷售冠軍，提亮減暗沉", image: "/assets/Olive-young/MEDIHEAL 積雪草棉片.jpg" },
  { name: "Ma:nyo 卸妝油", desc: "零負評卸妝油，油肌痘肌也能安心用", image: "/assets/Olive-young/Manyo 卸妝油.jpg" },
  { name: "AESTURA ATOBARRIER 365", desc: "舒敏保濕乳霜，敏感肌救星", image: "/assets/Olive-young/AESTURA ATOBARRIER 365 舒敏保濕乳霜.jpg" },
];

const makeup: Product[] = [
  { name: "fwee 布丁唇頰兩用膏", desc: "Z 世代爆紅，顯色輕透可當腮紅或唇彩", image: "/assets/Olive-young/fwee 布丁唇頰兩用膏.jpg" },
  { name: "rom&nd 唇釉、眼影", desc: "韓系彩妝代表品牌", image: "/assets/Olive-young/rom&nd 唇釉、眼影.jpg" },
  { name: "dasique 眼影盤", desc: "命名美、色調溫柔，韓妞人手一盤", image: "/assets/Olive-young/dasique 眼影盤.jpeg" },
  { name: "CLIO 專業眼妝系列", desc: "回購率超高", image: "/assets/Olive-young/CLIO 專業眼妝系列.jpg" },
  { name: "HERA 黑盒氣墊粉餅", desc: "控油持妝，台灣濕熱天氣也能抗脫妝", image: "/assets/Olive-young/HERA 黑盒氣墊粉餅.jpg" },
  { name: "Etude House Curl Fix 睫毛膏", desc: "IU 御用彩妝師愛用款", image: "/assets/Olive-young/Etude House Curl Fix 睫毛膏.jpg" },
];

const hairOther: Product[] = [
  { name: "UNOVE 護髮膜", desc: "金玟奎代言，修護受損髮聖品", image: "/assets/Olive-young/UNOVE 護髮膜.jpeg" },
  { name: "CAREPLUS 紅色痘痘貼", desc: "痘痘貼界代名詞，韓國人手一包", image: "/assets/Olive-young/CAREPLUS 紅色痘痘貼.png" },
  { name: "KAHI 防曬棒", desc: "SPF50+/PA++++，夏天人手一支", image: "/assets/Olive-young/KAHI 防曬棒.jpg" },
];

function SectionHeader({ icon, title, count }: { icon: React.ReactNode; title: string; count: number }) {
  return (
    <div className="flex items-baseline gap-3">
      <h2 className="font-heading text-xl md:text-2xl font-bold text-accent-blue flex items-center gap-2">
        {icon}
        {title}
      </h2>
      <span className="text-xs text-text-muted">共 {count} 款</span>
    </div>
  );
}

export default function WomenPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-4">
        <BackLink href="/shopping/olive-young" label="Olive Young" />
      </div>

      <PillHeader>女生必買 👩</PillHeader>

      <p className="text-center text-sm md:text-base text-text-muted mt-4 max-w-xl mx-auto">
        從保養、彩妝到髮品，17 款 Olive Young 最熱銷女性商品
      </p>

      <section className="mt-10 space-y-5">
        <SectionHeader
          icon={<Sparkles className="w-5 h-5 md:w-6 md:h-6" />}
          title="保養類"
          count={skincare.length}
        />
        <ProductGrid products={skincare} />
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeader
          icon={<Palette className="w-5 h-5 md:w-6 md:h-6" />}
          title="彩妝類"
          count={makeup.length}
        />
        <ProductGrid products={makeup} />
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeader
          icon={<Scissors className="w-5 h-5 md:w-6 md:h-6" />}
          title="髮品 & 其他"
          count={hairOther.length}
        />
        <ProductGrid products={hairOther} />
      </section>
    </div>
  );
}
