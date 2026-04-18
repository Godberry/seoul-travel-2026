"use client";

import Image from "next/image";
import { PillHeader } from "../../components/PillHeader";
import { PaperCard } from "../../components/PaperCard";
import { WashiTape } from "../../components/WashiTape";
import { ProductGrid, Product } from "../../components/ProductGrid";
import { withBasePath } from "../../lib/base-path";
import { Store, Coffee, Utensils, Cookie, Sparkles } from "lucide-react";

interface StoreBrand {
  name: string;
  logo: string | null;
  tagline: string;
  features: string[];
  ownBrand: string;
  color: "pink" | "blue" | "green";
}

const brands: StoreBrand[] = [
  {
    name: "CU",
    logo: "/assets/CU.jpg",
    tagline: "展店數最多 · CP 值最高",
    features: ["韓國展店數第一", "甜點與便當最有名", "延世大學生乳包、音樂棒棒糖皆是獨家"],
    ownBrand: "HEYROO",
    color: "pink",
  },
  {
    name: "GS25",
    logo: "/assets/GS25.jpg",
    tagline: "LG 集團 · 特價最多",
    features: ["商品價格便宜", "經常推出特價活動", "扁可頌餅乾、金惠子便當獨家販售"],
    ownBrand: "YOUUS",
    color: "blue",
  },
  {
    name: "7-Eleven",
    logo: null,
    tagline: "國際品牌 · 限定豐富",
    features: ["國際品牌在地化", "限定商品豐富", "藥果等韓式傳統點心系列"],
    ownBrand: "7-Select",
    color: "green",
  },
];

const tagBadges = {
  CU: { label: "CU 獨家", color: "red" as const },
  GS25: { label: "GS25 獨家", color: "blue" as const },
  "7-11": { label: "7-11 獨家", color: "orange" as const },
  통용: { label: "三大通用", color: "muted" as const },
};

const drinks: Product[] = [
  { name: "Binggrae 香蕉牛奶", desc: "國民胖胖瓶，經典必喝！有草莓、哈密瓜、咖啡等口味", image: "/assets/香蕉牛奶.jpg", badge: tagBadges["통용"] },
  { name: "Cantata 袋裝冰美式", desc: "配冰塊杯韓國人日常喝法，近期流行加香蕉牛奶變拿鐵", image: "/assets/袋裝咖啡.png", badge: tagBadges["통용"] },
  { name: "Milkis 蘇打", desc: "牛奶口味碳酸氣泡飲，韓國人從小喝到大", image: "/assets/Milkis 蘇打.jpg", badge: tagBadges["통용"] },
  { name: "초코에몽 巧克力牛奶", desc: "宿醉解酒神器，韓國年輕人傳遞好感的飲料", image: "/assets/초코에몽巧克力牛奶.jpg", badge: tagBadges["통용"] },
  { name: "星光清河燒酒", desc: "度數不高、口感清甜順口，年輕人最愛", image: "/assets/星光清河燒酒.jpg", badge: tagBadges["통용"] },
];

const meals: Product[] = [
  { name: "人氣歌謠三明治", desc: "偶像打歌前必吃，蛋沙拉 + 蟹肉 + 草莓醬甜鹹交織", image: "/assets/人氣歌謠三明治.jpg", badge: tagBadges["통용"] },
  { name: "金惠子便當", desc: "超商便當界的明星商品", image: "/assets/金惠子便當.jpg", badge: tagBadges["GS25"] },
  { name: "육즙팡팡 微波香腸", desc: "宵夜、下酒菜首選，肉汁爆棚", image: "/assets/육즙팡팡香腸.jpg", badge: tagBadges["통용"] },
  { name: "農心辣牛肉湯杯麵", desc: "比辛拉麵不辣，醬油高湯風味，不吃辣也 OK", image: "/assets/農心辣牛肉湯麵.jpg", badge: tagBadges["통용"] },
];

const snacks: Product[] = [
  { name: "扁可頌餅乾", desc: "爆紅扁可頌的餅乾版，酥脆又保留可頌層次感", image: "/assets/扁可頌餅乾.jpg", badge: tagBadges["GS25"] },
  { name: "延世大學生乳包", desc: "麵包鬆軟、內餡滿滿鮮奶油，曾賣到缺貨", image: "/assets/延世大學生乳包.jpg", badge: tagBadges["CU"] },
  { name: "Hershey's 麻糬餅乾", desc: "剝開會牽絲的麻糬巧克力餅乾，韓國限定版", image: "/assets/Hershey's 麻糬餅乾.jpg", badge: tagBadges["통용"] },
  { name: "viyott 麥片優格碗", desc: "優格加麥片餅乾的創意組合，方便又好吃", image: "/assets/viyott 麥片優格.jpg", badge: tagBadges["통용"] },
  { name: "藥果", desc: "韓國傳統點心現代化，口感類似沙其馬", image: "/assets/藥果(7-11).jpg", badge: tagBadges["7-11"] },
  { name: "CU 音樂棒棒糖", desc: "顏值超高的拍照零食，CU 獨家款", image: "/assets/CU 音樂棒棒糖.png", badge: tagBadges["CU"] },
];

function SectionHeader({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <h2 className="font-heading text-xl md:text-2xl font-bold text-accent-blue flex items-center gap-2">
        {icon}
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs md:text-sm text-text-muted mt-1 ml-7">{subtitle}</p>
      )}
    </div>
  );
}

export default function ConvenienceStorePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <PillHeader>超商購物攻略</PillHeader>

      <p className="text-center text-sm md:text-base text-text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
        韓國是全世界超商密集度第一名的國家，街頭巷尾都是便利商店。
        <br className="hidden md:block" />
        三大品牌各有獨家商品，逛超商本身就是一趟小旅行。
      </p>

      <section className="mt-10 space-y-5">
        <SectionHeader
          icon={<Store className="w-5 h-5 md:w-6 md:h-6" />}
          title="三大超商"
          subtitle="CU · GS25 · 7-Eleven"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {brands.map((b, i) => (
            <PaperCard
              key={b.name}
              color={b.color}
              rotation={[-1, 0.8, -0.6][i]}
              delay={0.05 + i * 0.08}
            >
              <WashiTape
                color={["pink", "blue", "mint"][i] as "pink" | "blue" | "mint"}
                position="top-center"
                width="w-16"
              />
              <div className="pt-2">
                {b.logo ? (
                  <div className="relative h-32 sm:h-28 md:h-36 w-full mb-3 bg-white/60 rounded overflow-hidden">
                    <Image
                      src={withBasePath(b.logo)}
                      alt={`${b.name} logo`}
                      fill
                      sizes="(max-width: 640px) 90vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-32 sm:h-28 md:h-36 w-full mb-3 flex items-center justify-center bg-white/60 rounded">
                    <span className="font-heading text-4xl md:text-5xl font-bold text-accent-orange">
                      7-Eleven
                    </span>
                  </div>
                )}
                <h3 className="font-heading font-bold text-lg text-accent-red text-center">
                  {b.name}
                </h3>
                <p className="text-xs text-center text-text-muted mt-0.5 mb-3">
                  {b.tagline}
                </p>
                <ul className="space-y-1.5 text-xs md:text-sm text-text-dark">
                  {b.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 pt-3 border-t border-black/5 text-center">
                  <span className="text-[10px] text-text-muted">自有品牌</span>
                  <p className="font-heading font-bold text-sm text-accent-blue tracking-wide">
                    {b.ownBrand}
                  </p>
                </div>
              </div>
            </PaperCard>
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeader
          icon={<Coffee className="w-5 h-5 md:w-6 md:h-6" />}
          title="飲料類"
          subtitle="從香蕉牛奶到燒酒，每天都要買"
        />
        <ProductGrid products={drinks} />
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeader
          icon={<Utensils className="w-5 h-5 md:w-6 md:h-6" />}
          title="鹹食類"
          subtitle="飯糰、便當、微波宵夜通通有"
        />
        <ProductGrid products={meals} />
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeader
          icon={<Cookie className="w-5 h-5 md:w-6 md:h-6" />}
          title="零食甜點"
          subtitle="限定款占一半，看到記得先掃貨"
        />
        <ProductGrid products={snacks} />
      </section>

      <section className="mt-12">
        <PaperCard color="yellow" rotation={-0.5} delay={0.1}>
          <WashiTape color="yellow" position="top-right" width="w-20" />
          <h3 className="font-heading font-bold text-base text-accent-red flex items-center gap-1.5 mb-3">
            <Sparkles className="w-4 h-4" />
            逛超商小撇步
          </h3>
          <ul className="space-y-2 text-sm text-text-dark">
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
              <span className="leading-relaxed">
                <span className="font-semibold">獨家標籤</span>：商品卡右上角的彩色標籤會標示要在哪家超商才買得到
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
              <span className="leading-relaxed">
                <span className="font-semibold">2+1 優惠</span>：很多商品買 2 送 1，拿的時候看一下旁邊的小貼紙
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
              <span className="leading-relaxed">
                <span className="font-semibold">微波 / 熱水</span>：超商內都有微波爐和熱水，可以直接加熱杯麵和便當
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
              <span className="leading-relaxed">
                <span className="font-semibold">付款方式</span>：WOWPASS、T-money、信用卡、現金都可以，結帳很快
              </span>
            </li>
          </ul>
        </PaperCard>
      </section>
    </div>
  );
}
