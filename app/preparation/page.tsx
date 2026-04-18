import Image from "next/image";
import Link from "next/link";
import { PillHeader } from "../components/PillHeader";
import { PaperCard } from "../components/PaperCard";
import { WashiTape } from "../components/WashiTape";
import { ChecklistItem } from "../components/ChecklistItem";
import { InfoCard } from "../components/InfoCard";
import { withBasePath } from "../lib/base-path";
import {
  ClipboardList,
  Smartphone,
  Luggage,
  Shirt,
  Droplets,
  Zap,
  BatteryCharging,
  Bus,
  TrainFront,
  CreditCard,
  BadgePercent,
  ArrowRight,
} from "lucide-react";

const preTripTasks = [
  { id: "esim", label: "購買 eSIM，並確認使用時間是否正確" },
  { id: "motion-sick", label: "準備暈機藥" },
  { id: "maps", label: "先熟悉 Naver、Kakao 地圖與翻譯工具" },
  { id: "transport", label: "確認交通卡與相關設定" },
  { id: "itinerary", label: "搭配手冊與地圖先了解行程" },
  { id: "credit", label: "確認信用卡已開通國外消費" },
  { id: "payment", label: "設定常用的海外行動支付方式" },
  { id: "passport-copy", label: "準備護照、身分證影本備份" },
  { id: "photos", label: "準備兩吋照片 2 張" },
  { id: "earrival", label: "出發前 72 小時內填寫韓國 e-Arrival Card" },
];

const apps = [
  {
    name: "Naver Map",
    desc: "主要導航、標記地點",
    icon: "/images/navermap.png",
    iosLink: "https://apps.apple.com/tw/app/naver-map-navigation/id311867728",
    androidLink: "https://play.google.com/store/apps/details?id=com.nhn.android.nmap",
  },
  {
    name: "Papago",
    desc: "拍照與語音翻譯，自然度高",
    icon: "/images/papago.png",
    iosLink: "https://apps.apple.com/tw/app/naver-papago-ai-translator/id1147874819",
    androidLink: "https://play.google.com/store/apps/details?id=com.naver.labs.translator",
  },
  {
    name: "WOWPASS",
    desc: "搭配卡片使用，可儲值與查餘額",
    icon: "/images/wowpass.png",
    iosLink: "https://apps.apple.com/tw/app/wowpass-cashless-pay-in-korea/id1625032544",
    androidLink: "https://play.google.com/store/apps/details?id=com.orange.wowpass",
  },
  {
    name: "韓巢地圖",
    desc: "有簡體中文介面的韓國地圖",
    icon: "/images/hanchao.png",
    iosLink: "https://apps.apple.com/tw/app/hanchao-map/id1315893111",
    androidLink: "https://play.google.com/store/apps/details?id=com.hanchao.map",
  },
];

const carryOnItems = [
  "台灣錢包：台幣現金、悠遊卡、健保卡、身分證、家裡鑰匙",
  "韓國錢包：韓幣現金、信用卡、交通卡",
  "重要文件：護照、護照影本、兩吋照片、機票證明、旅遊保險單、飯店訂單、eSIM 設定資料",
  "隨身用品：手機、手機繩、耳機、充電線、轉接頭、行動電源、口罩、雨傘、水壺、面紙、濕紙巾、購物袋、乾洗手、眼鏡、墨鏡、眼藥水",
];

const checkedBagItems = [
  "換洗衣物：內衣褲、睡衣、外出衣物、襪子、外套、帽子、隱形眼鏡、拖鞋",
  "盥洗保養：化妝水、乳液、精華液、面膜、護唇膏、身體乳、洗面乳、卸妝、潤髮、牙膏牙刷、毛巾、浴巾、指甲剪",
  "其他：化妝品、髒衣袋、梳子、棉花棒、防曬、衣物收納袋、隨身小包",
];

export default function PreparationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <PillHeader>行前準備</PillHeader>

      {/* Travel prep illustration */}
      <div className="mt-6 max-w-3xl mx-auto w-full">
        <Image
          src={withBasePath("/images/travel-prep.png")}
          alt="旅行準備物品水彩插畫"
          width={1200}
          height={675}
          className="rounded-2xl shadow-lg w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Pre-trip checklist */}
      <section className="mt-10 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <ClipboardList className="w-5 h-5" />
          出發前要完成
        </h2>

        <PaperCard color="yellow" rotation={-1} delay={0.05}>
          <WashiTape color="mint" position="top-left" width="w-20" />
          <div className="space-y-0.5 mt-1">
            {preTripTasks.map((task) => (
              <ChecklistItem key={task.id} id={task.id} label={task.label} />
            ))}
          </div>
        </PaperCard>

        <InfoCard
          title="WOWPASS 桃園機場領取資訊（需先在 KKday 購買）"
          icon={<CreditCard className="w-4 h-4 text-accent-blue" />}
        >
          <div className="space-y-2 mt-1">
            <p className="font-semibold text-accent-red">📍 桃園機場第二航廈</p>
            <ul className="space-y-1.5 text-sm text-text-dark">
              <li className="flex items-start gap-2">
                <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
                <span><span className="font-semibold">領取地點：</span>Ezfly飛買家櫃檯（3樓航空9號櫃台對面、臺灣銀行旁）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
                <span><span className="font-semibold">領取時間：</span>每日 05:30-23:00</span>
              </li>
            </ul>
            <div className="pt-2">
              <a
                href="https://www.kkday.com/zh-tw/product/18161-t-money-public-transit-card-pick-up-at-taiwan-taoyuan-international-airport-south-korea?srsltid=AfmBOoqEtFUuVoStSNXM-qlJA0ZpdrPUY2pRdCh_MmwT6u2ZQlb1NZfx"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-xs font-medium bg-accent-blue text-white px-3.5 py-2 rounded shadow-sm hover:opacity-90 transition-opacity"
              >
                前往 KKday 購買連結
              </a>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Recommended apps */}
      <section className="mt-10 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <Smartphone className="w-5 h-5" />
          建議下載 APP
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {apps.map((app, i) => (
            <PaperCard
              key={app.name}
              color={
                (["green", "mint", "blue", "lavender"] as const)[i % 4]
              }
              rotation={[1, -1.5, 0.8, -0.5][i % 4]}
              delay={0.05 + i * 0.08}
            >
              <div className="flex items-start gap-4">
                {app.icon && (
                  <div className="shrink-0 pt-0.5">
                    <Image
                      src={withBasePath(app.icon)}
                      alt={`${app.name} icon`}
                      width={52}
                      height={52}
                      className="rounded-[14px] shadow-sm bg-white"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-heading font-bold text-base text-accent-red">
                    {app.name}
                  </h3>
                  <p className="text-sm text-text-muted mt-1 leading-snug">{app.desc}</p>
                  {(app.iosLink || app.androidLink) && (
                    <div className="flex flex-wrap gap-2 mt-2.5">
                      {app.iosLink && (
                        <a
                          href={app.iosLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center text-[11px] font-medium bg-white/70 hover:bg-white text-slate-600 px-2 py-1 rounded transition-colors shadow-sm"
                        >
                          App Store
                        </a>
                      )}
                      {app.androidLink && (
                        <a
                          href={app.androidLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center text-[11px] font-medium bg-white/70 hover:bg-white text-slate-600 px-2 py-1 rounded transition-colors shadow-sm"
                        >
                          Google Play
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </PaperCard>
          ))}
        </div>
      </section>

      {/* Packing list */}
      <section className="mt-10 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <Luggage className="w-5 h-5" />
          行李打包清單
        </h2>

        <PaperCard color="mint" rotation={0.5} delay={0.05}>
          <WashiTape color="blue" position="top-center" width="w-20" />
          <h3 className="font-heading font-bold text-base text-accent-red mb-3 flex items-center gap-1.5">
            <Shirt className="w-4 h-4" />
            隨身行李
          </h3>
          <ul className="space-y-2 text-sm text-text-dark">
            {carryOnItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent-orange font-bold mt-0.5 shrink-0">
                  •
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </PaperCard>

        <PaperCard color="pink" rotation={-0.8} delay={0.15}>
          <WashiTape color="yellow" position="top-right" width="w-18" />
          <h3 className="font-heading font-bold text-base text-accent-red mb-3 flex items-center gap-1.5">
            <Droplets className="w-4 h-4" />
            托運行李
          </h3>
          <ul className="space-y-2 text-sm text-text-dark">
            {checkedBagItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent-orange font-bold mt-0.5 shrink-0">
                  •
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs mt-3 text-text-muted italic">
            備註：住宿有備品，但可帶自己習慣的用品
          </p>
        </PaperCard>
      </section>

      {/* Transport tips */}
      <section className="mt-10 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <Bus className="w-5 h-5" />
          韓國交通注意事項
        </h2>

        <div className="space-y-4">
          <InfoCard
            title="公車"
            icon={<Bus className="w-4 h-4 text-accent-blue" />}
            variant="warning"
          >
            <ul className="space-y-1.5">
              <li>前門上車、後門下車，上下車都要刷卡</li>
              <li>不支援現金付款，只能用交通卡</li>
              <li className="font-semibold text-text-dark">
                不能帶飲料上車！手拿飲料可能會被趕下車
              </li>
              <li className="text-accent-red font-semibold">
                公車禁止攜帶行李上車（非常嚴格）
              </li>
              <li>搭車前先確認交通卡餘額（不能賒帳）</li>
              <li className="text-accent-red font-semibold">
                高峰時段：早上 7:30～9:00、晚上 17:30～19:30（非常擁擠）
              </li>
            </ul>
          </InfoCard>

          <InfoCard
            title="地鐵"
            icon={<TrainFront className="w-4 h-4 text-accent-blue" />}
          >
            <ul className="space-y-1.5">
              <li>可以飲食，但不能影響他人、避免味道太重</li>
              <li className="font-semibold text-text-dark">
                韓國人對博愛座很敏感，沒事別坐！
              </li>
              <li>通勤尖峰時段「非常可怕」，做好心理準備</li>
              <li>電梯主要提供老弱婦孺使用</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Preparation notices - Power */}
      <section className="mt-10 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <Zap className="w-5 h-5" />
          生活注意事項
        </h2>

        <div className="space-y-4">
          <InfoCard
            title="電壓 & 萬用轉接頭"
            icon={<Zap className="w-4 h-4 text-accent-orange" />}
            variant="warning"
          >
            <ul className="space-y-1.5">
              <li>韓國電壓 220V · 圓形雙孔（Type C / F）</li>
              <li>手機、筆電多支援雙電壓</li>
              <li>吹風機、電棒須先確認！</li>
              <li className="font-semibold text-text-dark">
                建議帶萬用轉接頭 1～2 個
              </li>
            </ul>
          </InfoCard>

          <InfoCard
            title="購物退稅"
            icon={<BadgePercent className="w-4 h-4 text-accent-blue" />}
          >
            <ul className="space-y-1.5">
              <li>單筆滿 <span className="font-semibold text-text-dark">15,000 韓元</span> 即可退稅，上限 600,000 韓元</li>
              <li>結帳時主動說「<span className="font-mono">Tax Free, please</span>」並出示護照即可現場退</li>
              <li className="text-accent-red font-semibold">退稅商品不可拆封，留好收據與單據</li>
            </ul>
            <Link
              href="/shopping/tax-refund"
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent-blue hover:underline"
            >
              查看完整退稅指南 <ArrowRight className="w-3 h-3" />
            </Link>
          </InfoCard>

          <InfoCard
            title="行動電源新規"
            icon={<BatteryCharging className="w-4 h-4 text-accent-orange" />}
            variant="warning"
          >
            <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-full bg-accent-red/10 border border-accent-red/30">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" />
              <span className="font-heading text-xs font-bold text-accent-red tracking-wide">
                2026.3.27 新規上路
              </span>
            </div>
            <ul className="space-y-1.5">
              <li>
                外殼必須標示{" "}
                <span className="font-heading font-bold text-accent-red">
                  Wh
                </span>
                ，只有 mAh 可能被拒帶
              </li>
              <li>
                容量{" "}
                <span className="font-heading font-bold text-text-dark">
                  100Wh 以下
                </span>
                ，每人最多{" "}
                <span className="font-heading font-bold text-text-dark">
                  2 顆
                </span>
              </li>
              <li className="text-accent-red font-semibold">
                嚴禁托運，只能隨身攜帶
              </li>
              <li className="font-semibold text-text-dark">
                機上禁止使用與充電（不可插機艙 USB）
              </li>
              <li>每顆單獨裝透明夾鏈袋，USB 接孔貼絕緣膠帶</li>
              <li>放座位前方椅袋，不可放頭頂行李櫃</li>
            </ul>
          </InfoCard>
        </div>
      </section>
    </div>
  );
}
