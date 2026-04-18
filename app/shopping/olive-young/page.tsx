import Image from "next/image";
import Link from "next/link";
import { PillHeader } from "../../components/PillHeader";
import { PaperCard } from "../../components/PaperCard";
import { WashiTape } from "../../components/WashiTape";
import { withBasePath } from "../../lib/base-path";
import { Tag, Smartphone, Gift, CalendarDays, ArrowRight, Sparkles, Flame, Cookie } from "lucide-react";

type CategoryColor = "pink" | "blue" | "yellow";
type TapeColor = "mint" | "pink" | "blue" | "yellow" | "lavender";

interface Category {
  href: string;
  title: string;
  subtitle: string;
  count: number;
  tags: string[];
  color: CategoryColor;
  tape: TapeColor;
  rotation: number;
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  {
    href: "/shopping/olive-young/women",
    title: "女生必買",
    subtitle: "保養・彩妝・髮品",
    count: 17,
    tags: ["VT Reedle Shot", "fwee", "Torriden"],
    color: "pink",
    tape: "mint",
    rotation: -1.2,
    image: "/assets/Olive-young/VT Cosmetics(Reedle Shot).jpg",
    imageAlt: "VT Reedle Shot 微針精華",
    icon: <Sparkles className="w-3.5 h-3.5" />,
  },
  {
    href: "/shopping/olive-young/men",
    title: "男生必買",
    subtitle: "基礎保養・控油・修容",
    count: 14,
    tags: ["BRO&TIPS", "Round LAB", "Grafen"],
    color: "blue",
    tape: "yellow",
    rotation: 0.8,
    image: "/assets/Olive-young/BRO&TIPS 男士一瓶搞定保養組.jpg",
    imageAlt: "BRO&TIPS 男士保養組",
    icon: <Flame className="w-3.5 h-3.5" />,
  },
  {
    href: "/shopping/olive-young/snacks",
    title: "零食推薦",
    subtitle: "男女都愛的韓系爆款",
    count: 4,
    tags: ["貝果餅乾", "西梅軟糖", "布朗尼"],
    color: "yellow",
    tape: "pink",
    rotation: -0.6,
    image: "/assets/Olive-young/Delight Project 貝果餅乾.jpg",
    imageAlt: "Delight Project 貝果餅乾",
    icon: <Cookie className="w-3.5 h-3.5" />,
  },
];

const cardBgMap: Record<CategoryColor, string> = {
  pink: "bg-card-pink",
  blue: "bg-card-blue",
  yellow: "bg-card-yellow",
};

const tips = [
  {
    icon: <Tag className="w-4 h-4 text-accent-red" />,
    title: "退稅",
    desc: "單筆消費滿 15,000 韓元即可退稅",
  },
  {
    icon: <Smartphone className="w-4 h-4 text-accent-blue" />,
    title: "APP 優惠",
    desc: "下載官方 APP，新會員首購享 5 折，還有額外折扣碼",
  },
  {
    icon: <Gift className="w-4 h-4 text-accent-orange" />,
    title: "明洞旗艦店迎賓禮",
    desc: "二樓掃 QR Code 輸入資料可獲得化妝包與試用品",
  },
  {
    icon: <CalendarDays className="w-4 h-4 text-accent-red" />,
    title: "最佳購物時機",
    desc: "3、6、9、12 月有大促 6～7 折；12 月年末最低可到 3 折",
  },
];

export default function OliveYoungPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <PillHeader>Olive Young</PillHeader>

      <div className="mt-6 max-w-2xl mx-auto">
        <Image
          src={withBasePath("/assets/Olive-young/Olive Young.jpg")}
          alt="Olive Young 門市"
          width={1200}
          height={675}
          className="rounded-2xl shadow-lg w-full h-auto object-cover"
          priority
        />
      </div>

      <p className="text-center text-sm md:text-base text-text-muted mt-6 max-w-2xl mx-auto leading-relaxed">
        韓國版的屈臣氏，但規模與商品豐富度更勝一籌。
        <br className="hidden md:block" />
        從平價美妝、藥妝保養到零食都有販售，旅遊必逛。
      </p>

      {/* Shopping tips */}
      <section className="mt-10">
        <h2 className="font-heading text-xl md:text-2xl font-bold text-accent-blue mb-5">
          購物小提醒
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tips.map((tip, i) => (
            <PaperCard
              key={tip.title}
              color={(["yellow", "mint", "pink", "blue"] as const)[i]}
              rotation={[(-1), 0.6, -0.5, 0.8][i]}
              delay={0.05 + i * 0.06}
            >
              <WashiTape
                color={(["pink", "blue", "yellow", "mint"] as const)[i]}
                position="top-left"
                width="w-14"
              />
              <div className="pt-1">
                <h3 className="font-heading font-bold text-sm md:text-base text-accent-red flex items-center gap-1.5">
                  {tip.icon}
                  {tip.title}
                </h3>
                <p className="text-xs md:text-sm text-text-dark mt-1.5 leading-snug">
                  {tip.desc}
                </p>
              </div>
            </PaperCard>
          ))}
        </div>
      </section>

      {/* Category entries */}
      <section className="mt-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-accent-blue">
            分類挑選
          </h2>
          <span className="text-xs text-text-muted hidden sm:block">
            點擊卡片進入分類 →
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
          {categories.map((c, i) => (
            <Link
              key={c.href}
              href={c.href}
              aria-label={`${c.title}，共 ${c.count} 款商品`}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 rounded-2xl"
            >
              <PaperCard
                color={c.color}
                rotation={c.rotation}
                delay={0.1 + i * 0.08}
                className="relative h-full p-4 md:p-5 pb-5"
              >
                <WashiTape color={c.tape} position="top-right" width="w-16" />

                {/* Polaroid-style image */}
                <div className="relative rounded-xl overflow-hidden bg-white/60 aspect-[4/3] shadow-inner">
                  <Image
                    src={withBasePath(c.image)}
                    alt={c.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-accent-red shadow-sm">
                    {c.icon}
                    共 {c.count} 款
                  </span>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="font-heading font-bold text-lg md:text-xl text-accent-red leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-xs md:text-sm text-text-muted mt-1">
                    {c.subtitle}
                  </p>

                  <ul className="flex flex-wrap gap-1.5 mt-3">
                    {c.tags.map((t) => (
                      <li
                        key={t}
                        className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-white/70 text-text-dark border border-white"
                      >
                        #{t}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-dashed border-white/80">
                    <span className="text-xs font-semibold text-accent-blue">
                      進入分類
                    </span>
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${cardBgMap[c.color]} ring-1 ring-white shadow-sm group-hover:translate-x-1 transition-transform`}
                      aria-hidden
                    >
                      <ArrowRight className="w-4 h-4 text-accent-red" />
                    </span>
                  </div>
                </div>
              </PaperCard>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
