"use client";

import { PillHeader } from "../../../components/PillHeader";
import { ProductGrid, Product } from "../../../components/ProductGrid";
import { BackLink } from "../../../components/BackLink";
import { Droplets, ShieldCheck, Brush, Scissors } from "lucide-react";

const basic: Product[] = [
  { name: "BRO&TIPS 一瓶搞定保養組", desc: "連續五年男性保養銷售冠軍，質地清爽水潤", image: "/assets/Olive-young/BRO&TIPS 男士一瓶搞定保養組.jpg" },
  { name: "Dr.G 多效合一乳液", desc: "敏感肌可用，一瓶結合化妝水、乳液、精華", image: "/assets/Olive-young/Dr.G 多效合一乳液.jpg" },
  { name: "Round LAB 松樹鎮靜（綠）", desc: "油性肌膚適用，含多重積雪草成分", image: "/assets/Olive-young/Round LAB 松樹鎮靜系列(綠色版).jpg" },
  { name: "Round LAB 白樺樹系列", desc: "乾性肌膚適用，補水保濕效果好", image: "/assets/Olive-young/Round LAB 白樺樹系列.jpg" },
];

const acne: Product[] = [
  { name: "Anua 魚腥草毛孔清潔", desc: "改善油光與粉刺", image: "/assets/Olive-young/Anua 魚腥草毛孔清潔系列.jpeg" },
  { name: "Some By Mi AHA BHA PHA 30 Days", desc: "痘痘肌救星，去除老廢角質", image: "/assets/Olive-young/Some By Mi AHA BHA PHA 30 Days 系列.jpg" },
  { name: "CAREPLUS 痘痘貼", desc: "男女通用，隱形不顯眼", image: "/assets/Olive-young/CAREPLUS 痘痘貼.jpg" },
];

const tint: Product[] = [
  { name: "B.READY 防曬粉底 BB 三合一", desc: "防曬、底妝、修飾三效合一，上班族福音", image: "/assets/Olive-young/B.READY 男士防曬粉底 BB 三合一.jpg" },
  { name: "Objet 天然潤色遮瑕乳液", desc: "SPF50+/PA++++，BB 霜 + 提亮 + 防曬", image: "/assets/Olive-young/Objet 天然潤色遮瑕乳液.jpg" },
  { name: "Doingwhat 潤色膚色濾鏡乳液", desc: "含保養、防曬、潤色三合一功能", image: "/assets/Olive-young/Doingwhat 潤色膚色濾鏡乳液.jpg" },
];

const hairOther: Product[] = [
  { name: "Grafen 香水洗髮精", desc: "韓國男生愛用，香氣留香持久", image: "/assets/Olive-young/Grafen 香水洗髮精.jpeg" },
  { name: "Dr.FORHAIR 養髮滾珠", desc: "髮際線救星，網友瘋搶斷貨款", image: "/assets/Olive-young/Dr.FORHAIR 養髮滾珠.jpg" },
  { name: "Laneige Lip Sleeping Mask", desc: "唇部脫皮救星，男女都適用", image: "/assets/Olive-young/Laneige Lip Sleeping Mask.jpg" },
  { name: "IDEAL 運動多合一保養", desc: "運動後擦清爽凝膠狀，不黏膩", image: "/assets/Olive-young/IDEAL 運動多合一保養.jpg" },
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

export default function MenPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-4">
        <BackLink href="/shopping/olive-young" label="Olive Young" />
      </div>

      <PillHeader>男生必買 👨</PillHeader>

      <p className="text-center text-sm md:text-base text-text-muted mt-4 max-w-xl mx-auto">
        懶人保養、痘痘救星、通勤潤色，14 款男士實用商品
      </p>

      <section className="mt-10 space-y-5">
        <SectionHeader
          icon={<Droplets className="w-5 h-5 md:w-6 md:h-6" />}
          title="基礎保養"
          count={basic.length}
        />
        <ProductGrid products={basic} />
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeader
          icon={<ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />}
          title="控油抗痘"
          count={acne.length}
        />
        <ProductGrid products={acne} />
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeader
          icon={<Brush className="w-5 h-5 md:w-6 md:h-6" />}
          title="潤色 & 修容"
          count={tint.length}
        />
        <ProductGrid products={tint} />
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
