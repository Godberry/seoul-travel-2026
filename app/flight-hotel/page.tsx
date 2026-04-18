import Image from "next/image";
import { PillHeader } from "../components/PillHeader";
import { PaperCard } from "../components/PaperCard";
import { WashiTape } from "../components/WashiTape";
import { InfoCard } from "../components/InfoCard";
import { withBasePath } from "../lib/base-path";
import {
  Plane,
  Hotel,
  MapPin,
  Phone,
  Clock,
  Luggage,
  CreditCard,
  Zap,
  Train,
  Droplets,
  ScanFace,
} from "lucide-react";

export default function FlightHotelPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <PillHeader>航班 & 住宿</PillHeader>

      {/* Flight section */}
      <section className="mt-10 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <Plane className="w-5 h-5" />
          航班資訊
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Outbound */}
          <PaperCard color="blue" rotation={-1} delay={0.05}>
            <WashiTape color="blue" position="top-left" width="w-16" />
            <h3 className="font-heading font-bold text-base mb-3 text-accent-blue">
              ✈ 去程
            </h3>
            <div className="space-y-2 text-sm text-text-dark">
              <p>
                <span className="font-semibold">日期：</span>2026/04/24（五）
              </p>
              <p>
                <span className="font-semibold">航線：</span>桃園 TPE（第二航廈） → 仁川 ICN（第一航廈）
              </p>
              <p>
                <span className="font-semibold">航班：</span>長榮航空 BR170
              </p>
              <div className="flex gap-4 mt-2">
                <div className="bg-white/60 rounded-lg px-3 py-2 text-center flex-1">
                  <p className="text-xs text-text-muted">起飛</p>
                  <p className="font-heading text-lg font-bold text-accent-red">
                    07:30
                  </p>
                </div>
                <div className="bg-white/60 rounded-lg px-3 py-2 text-center flex-1">
                  <p className="text-xs text-text-muted">抵達</p>
                  <p className="font-heading text-lg font-bold text-accent-blue">
                    11:00
                  </p>
                </div>
              </div>
              <p className="text-xs text-text-muted mt-2">
                <Clock className="w-3 h-3 inline mr-1" />
                飛行時間約 2 小時 30 分 · 建議 05:00 到機場
              </p>
            </div>
          </PaperCard>

          {/* Return */}
          <PaperCard color="lavender" rotation={1.5} delay={0.15}>
            <WashiTape color="lavender" position="top-right" width="w-16" />
            <h3 className="font-heading font-bold text-base mb-3 text-accent-blue">
              ✈ 回程
            </h3>
            <div className="space-y-2 text-sm text-text-dark">
              <p>
                <span className="font-semibold">日期：</span>2026/04/28（二）
              </p>
              <p>
                <span className="font-semibold">航線：</span>仁川 ICN（第一航廈） → 桃園 TPE（第二航廈）
              </p>
              <p>
                <span className="font-semibold">航班：</span>長榮航空 BR159
              </p>
              <div className="flex gap-4 mt-2">
                <div className="bg-white/60 rounded-lg px-3 py-2 text-center flex-1">
                  <p className="text-xs text-text-muted">起飛</p>
                  <p className="font-heading text-lg font-bold text-accent-red">
                    19:45
                  </p>
                </div>
                <div className="bg-white/60 rounded-lg px-3 py-2 text-center flex-1">
                  <p className="text-xs text-text-muted">抵達</p>
                  <p className="font-heading text-lg font-bold text-accent-blue">
                    21:25
                  </p>
                </div>
              </div>
              <p className="text-xs text-text-muted mt-2">
                <Clock className="w-3 h-3 inline mr-1" />
                飛行時間約 2 小時 40 分 · 建議 16:30 到機場
              </p>
            </div>
          </PaperCard>
        </div>

        {/* Luggage info */}
        <InfoCard
          title="行李與登機提醒"
          icon={<Luggage className="w-4 h-4 text-accent-blue" />}
        >
          <ul className="space-y-1.5 mt-1">
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold">•</span>
              暈機藥：上飛機前 1 小時吃
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold">•</span>
              托運行李：1 件，23 公斤
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold">•</span>
              隨身行李：1 件，7 公斤（56 × 36 × 23 cm 內）
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold">•</span>
              個人物品：行動電源、相機、雨傘、個人藥品
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red font-bold">!</span>
              <span className="font-semibold text-text-dark">
                務必隨身攜帶：護照、旅遊手冊
              </span>
            </li>
          </ul>
        </InfoCard>

        <InfoCard
          title="隨身液體規定"
          icon={<Droplets className="w-4 h-4 text-accent-orange" />}
          variant="warning"
        >
          <ul className="space-y-1.5 mt-1">
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
              <span>
                <span className="font-semibold text-text-dark">單瓶 ≤ 100ml</span>（超過 100ml 容器即使沒裝滿也會被扣）
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
              <span>
                所有液體裝進 <span className="font-semibold text-text-dark">1 個 1 公升透明夾鏈袋</span>，過安檢時單獨取出
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
              <span>
                超過容量的化妝水、乳液、防曬、噴霧請<span className="font-semibold text-text-dark">放托運</span>
              </span>
            </li>
          </ul>
        </InfoCard>
      </section>

      {/* Hotel section */}
      <section className="mt-12 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <Hotel className="w-5 h-5" />
          住宿資訊
        </h2>

        <PaperCard color="yellow" rotation={-0.5} delay={0.1}>
          <WashiTape color="mint" position="top-center" width="w-24" />
          <h3 className="font-heading font-bold text-lg text-accent-red mt-2">
            GLAD MAPO（글래드 마포）
          </h3>
          {/* Hotel illustration */}
          <div className="rounded-lg overflow-hidden shadow-sm my-3">
            <Image
              src={withBasePath("/images/real-hotel.jpg")}
              alt="GLAD MAPO 飯店真實照片"
              width={800}
              height={450}
              className="w-full h-44 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm text-text-dark">
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent-orange mt-0.5 shrink-0" />
                <span>04168 서울 마포구 마포대로 92 A동 9층</span>
              </p>
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent-orange mt-0.5 shrink-0" />
                <span>+82 2-2197-5000</span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-accent-orange mt-0.5 shrink-0" />
                <span>
                  入住 04/24 15:00
                  <br />
                  退房 04/28 11:00
                </span>
              </p>
            </div>
            <div className="space-y-2">
              <div className="bg-white/60 rounded-lg p-3">
                <p className="font-semibold text-xs text-text-muted mb-1">
                  房型安排
                </p>
                <p>家庭房：叔叔、阿姨、珈蓉</p>
                <p>雙人房：婕妤、皓翔</p>
              </div>
            </div>
          </div>

          {/* Hotel facilities */}
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "無提供早餐",
              "無牙刷牙膏",
              "有健身房",
              "大廳有 7-11",
              "有 wowpass 機台",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-bg-cream-dark/60 text-text-muted text-xs px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </PaperCard>

        <InfoCard
          title="交通位置"
          icon={<Train className="w-4 h-4 text-accent-blue" />}
        >
          <p>鄰近<strong>孔德站（공덕역）</strong></p>
          <p className="mt-1">
            可搭：地下鐵 5 號線、6 號線、機場線、中央線
          </p>
          <p className="mt-2 font-semibold text-text-dark">周邊可留意：</p>
          <p>樂天飯店、地下超市、Egg Drop、海天湯鍋、孔德市場（豬腳街）</p>
        </InfoCard>
      </section>

      {/* Entry & Exit info */}
      <section className="mt-12 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          入境 · 出境
        </h2>

        <PaperCard color="mint" rotation={0.8} delay={0.1}>
          <WashiTape color="pink" position="top-left" width="w-18" />
          <h3 className="font-heading font-bold text-base text-accent-red mb-3">
            e-Arrival Card 填寫步驟
          </h3>
          <ol className="list-decimal list-inside space-y-1.5 text-sm text-text-dark">
            <li>先準備護照照片電子檔上傳</li>
            <li>到官網選「電子入境卡」</li>
            <li>同意條款後填信箱</li>
            <li>上傳護照照片並確認資料</li>
          </ol>

          <div className="mt-4 bg-white/60 rounded-lg p-3 text-sm space-y-1 text-text-dark">
            <p>
              <span className="font-semibold">抵達日：</span>2026/04/24
            </p>
            <p>
              <span className="font-semibold">去程航班：</span>BR170
            </p>
            <p>
              <span className="font-semibold">入境目的：</span>旅遊
            </p>
            <p>
              <span className="font-semibold">入住地點：</span>92
              Mapo-daero, Mapo-gu, Seoul（GLAD MAPO）
            </p>
          </div>
        </PaperCard>

        <InfoCard title="SES 補充" variant="warning">
          <p>
            仁川機場可現場辦理 SES 自動通關，但現場狀況不一定，建議仍先填好電子入境資料。
          </p>
        </InfoCard>

        <PaperCard color="blue" rotation={-0.6} delay={0.18}>
          <WashiTape color="yellow" position="top-right" width="w-18" />
          <h3 className="font-heading font-bold text-base text-accent-red mb-3 flex items-center gap-1.5">
            <ScanFace className="w-4 h-4" />
            回程用 ICN SmartPass（出境人臉辨識）
          </h3>
          <ol className="list-decimal list-inside space-y-1.5 text-sm text-text-dark">
            <li>
              下載 <span className="font-semibold">ICN SmartPass</span> App，完成護照與人臉辨識註冊
            </li>
            <li>航班起飛當天走 SmartPass 專用通道</li>
            <li>
              系統自動辨識，<span className="font-semibold">不需出示護照與登機證</span>
            </li>
          </ol>
          <p className="text-xs mt-3 text-text-muted italic">
            建議 04/27 晚上在飯店 Wi-Fi 下先註冊好
          </p>
        </PaperCard>
      </section>
    </div>
  );
}
