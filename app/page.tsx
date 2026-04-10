import Link from "next/link";
import Image from "next/image";
import { PaperCard } from "./components/PaperCard";
import { WashiTape } from "./components/WashiTape";
import { DayHeader } from "./components/DayHeader";
import { PillHeader } from "./components/PillHeader";
import { ItineraryList } from "./components/ItineraryList";
import { withBasePath } from "./lib/base-path";
import {
  Plane,
  Hotel,
  ClipboardList,
  MapPin,
  ShoppingBag,
  UtensilsCrossed,
  Sparkles,
  Bath,
  Luggage,
} from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      {/* Hero */}
      <section className="text-center mb-10 md:mb-14">
        <PillHeader>行程總覽</PillHeader>
        <p className="mt-4 text-text-muted text-base max-w-lg mx-auto leading-relaxed">
          2026/04/24（五）～ 04/28（二）
          <br />
          韓國首爾家族旅行 · 超級旅遊手帳
        </p>
        {/* Hero illustration */}
        <div className="mt-6 max-w-3xl mx-auto w-full">
          <Image
            src={withBasePath("/images/seoul-hero.png")}
            alt="首爾城市水彩插畫，南山塔、韓屋、櫻花與飛機"
            width={1200}
            height={675}
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            priority
          />
        </div>
      </section>

      {/* Quick links row */}
      <section className="flex flex-wrap justify-center gap-3 mb-10">
        {[
          {
            href: "/flight-hotel",
            icon: <Plane className="w-4 h-4" />,
            label: "航班住宿",
          },
          {
            href: "/preparation",
            icon: <ClipboardList className="w-4 h-4" />,
            label: "行前準備",
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 bg-white/80 hover:bg-white px-4 py-2.5 rounded-full shadow-sm text-sm font-medium text-accent-blue transition-all duration-200 hover:shadow-md cursor-pointer"
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </section>

      {/* Day cards grid — scrapbook board */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Day 1 */}
        <Link href="/day/1" className="block" id="home-day1-card">
          <PaperCard color="yellow" rotation={-1.5} delay={0.05}>
            <WashiTape color="mint" position="top-left" width="w-20" />
            <DayHeader
              day={1}
              date="04/24（五）"
              subtitle="抵達首爾、入住、聖水晚餐"
            />
            {/* Day 1 preview image */}
            <div className="my-3 rounded-lg overflow-hidden shadow-sm">
              <Image
                src={withBasePath("/images/airport-arrival.png")}
                alt="仁川機場抵達水彩插畫"
                width={400}
                height={200}
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="text-sm text-text-dark font-medium mb-2">
              <Plane className="w-3.5 h-3.5 inline -mt-0.5 mr-1 text-accent-blue" />
              快樂出發！
            </div>
            <ItineraryList
              items={[
                "搭乘長榮 BR170 飛往仁川",
                "AREX 普通車到孔德站",
                "入住 GLAD MAPO、放行李",
                "wowpass 儲值",
                "Ggupdang 燒肉 聖水店（17:00）",
                "聖水洞散步逛咖啡街",
              ]}
            />
          </PaperCard>
        </Link>

        {/* Day 2 */}
        <Link href="/day/2" className="block" id="home-day2-card">
          <PaperCard color="green" rotation={2} delay={0.15}>
            <WashiTape color="pink" position="top-right" width="w-18" />
            <DayHeader
              day={2}
              date="04/25（六）"
              subtitle="韓服、景福宮、安國站、廣藏市場"
            />
            {/* Day 2 preview image */}
            <div className="my-3 rounded-lg overflow-hidden shadow-sm">
              <Image
                src={withBasePath("/images/gyeongbokgung.png")}
                alt="景福宮韓服水彩插畫"
                width={400}
                height={200}
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="text-sm text-text-dark font-medium mb-2">
              <ShoppingBag className="w-3.5 h-3.5 inline -mt-0.5 mr-1 text-accent-orange" />
              和服裝水水！
            </div>
            <ItineraryList
              items={[
                "飯捲天國早餐（07:00）",
                "愛麗屋韓服體驗（09:00）",
                "景福宮拍照 3 小時",
                "安國站散策 · 鹽可頌 · 布丁",
                "廣藏市場買棉被",
                "布帳馬車一條街",
              ]}
            />
          </PaperCard>
        </Link>

        {/* Day 3 */}
        <Link href="/day/3" className="block" id="home-day3-card">
          <PaperCard color="mint" rotation={-0.8} delay={0.25}>
            <WashiTape color="blue" position="top-center" width="w-16" />
            <DayHeader day={3} date="04/26（日）" subtitle="自由活動日" />
            {/* Day 3 preview image */}
            <div className="my-3 rounded-lg overflow-hidden shadow-sm">
              <Image
                src={withBasePath("/images/free-day.png")}
                alt="自由活動日水彩插畫"
                width={400}
                height={200}
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="text-sm text-text-dark font-medium mb-2">
              <Sparkles className="w-3.5 h-3.5 inline -mt-0.5 mr-1 text-accent-blue" />
              自由探索首爾！
            </div>
            <ItineraryList
              items={[
                "沒有固定行程，自由逛逛",
                "明洞、北村韓屋村、弘大商圈",
                "探索特色咖啡廳",
                "路邊韓式小吃巡禮",
              ]}
            />
          </PaperCard>
        </Link>

        {/* Day 4 */}
        <Link href="/day/4" className="block" id="home-day4-card">
          <PaperCard color="pink" rotation={1.2} delay={0.35}>
            <WashiTape color="yellow" position="top-left" width="w-14" />
            <DayHeader day={4} date="04/27（一）" subtitle="EGG DROP · AQUAFIELD 汗蒸幕" />
            {/* Day 4 preview image */}
            <div className="my-3 rounded-lg overflow-hidden shadow-sm">
              <Image
                src={withBasePath("/images/korean-spa.png")}
                alt="韓式汗蒸幕水彩插畫"
                width={400}
                height={200}
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="text-sm text-text-dark font-medium mb-2">
              <Bath className="w-3.5 h-3.5 inline -mt-0.5 mr-1 text-accent-blue" />
              放鬆日！
            </div>
            <ItineraryList
              items={[
                "EGG DROP 早午餐（10:00）",
                "Starfield 百貨 AQUAFIELD",
                "多間特色汗蒸室體驗",
                "商場逛逛 + 超市",
                "整理行李準備回家",
              ]}
            />
          </PaperCard>
        </Link>

        {/* Day 5 */}
        <Link href="/day/5" className="block md:col-span-2 md:max-w-md md:mx-auto" id="home-day5-card">
          <PaperCard color="blue" rotation={-1.8} delay={0.45}>
            <WashiTape color="lavender" position="top-right" width="w-20" />
            <DayHeader
              day={5}
              date="04/28（二）"
              subtitle="弘大逛逛 · 回程"
            />
            {/* Day 5 preview image */}
            <div className="my-3 rounded-lg overflow-hidden shadow-sm">
              <Image
                src={withBasePath("/images/hongdae-street.png")}
                alt="弘大商圈水彩插畫"
                width={400}
                height={200}
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="text-sm text-text-dark font-medium mb-2">
              <Luggage className="w-3.5 h-3.5 inline -mt-0.5 mr-1 text-accent-orange" />
              回家囉！
            </div>
            <ItineraryList
              items={[
                "11:00 退房、寄放行李",
                "弘大最後逛街",
                "中餐廳 甜蜜蜜（13:00）",
                "~16:00 搭機場快線",
                "19:45 搭長榮 BR159 回家 ✈",
              ]}
            />
          </PaperCard>
        </Link>
      </section>

      {/* Footer note */}
      <p className="text-center text-xs text-text-muted/70 mt-12 mb-4">
        Made with love for the family trip ♡
      </p>
    </div>
  );
}
