import { PillHeader } from "../components/PillHeader";
import { PaperCard } from "../components/PaperCard";
import { WashiTape } from "../components/WashiTape";
import { InfoCard } from "../components/InfoCard";
import {
  Compass,
  Users,
  Moon,
  CarTaxiFront,
  Footprints,
  Scroll,
  CigaretteOff,
  Wine,
  UserX,
} from "lucide-react";

export default function LocalTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <PillHeader>當地須知</PillHeader>

      <p className="mt-6 text-center text-sm text-text-muted max-w-lg mx-auto leading-relaxed">
        抵達首爾後的在地規矩、公共禮儀與安全提醒
        <br />
        小事不踩雷，玩得更安心
      </p>

      {/* 路上 & 交通 */}
      <section className="mt-10 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <Compass className="w-5 h-5" />
          走在路上
        </h2>

        <PaperCard color="mint" rotation={-0.8} delay={0.05}>
          <WashiTape color="pink" position="top-left" width="w-20" />
          <h3 className="font-heading font-bold text-base text-accent-red mb-3 flex items-center gap-1.5">
            <CarTaxiFront className="w-4 h-4" />
            計程車這樣搭比較安全
          </h3>
          <ul className="space-y-1.5 text-sm text-text-dark">
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
              <span>
                最推薦：用 <span className="font-semibold">Kakao T</span> 叫車，路線與費用透明、有紀錄
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
              <span>
                黑色「<span className="font-semibold">模範計程車</span>」（모범택시）費用較高，但車況與司機較有保障
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red font-bold mt-0.5 shrink-0">!</span>
              <span className="font-semibold text-text-dark">
                避免路邊排隊等客、或主動拉客的計程車
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
              <span>夜間從弘大、梨泰院等區回飯店，盡量用 Kakao T 叫車</span>
            </li>
          </ul>
        </PaperCard>

        <InfoCard
          title="過馬路一定要等綠燈"
          icon={<Footprints className="w-4 h-4 text-accent-orange" />}
          variant="warning"
        >
          <ul className="space-y-1.5">
            <li>
              韓國警察執法很嚴，<span className="font-semibold text-text-dark">即使沒車也要等綠燈</span>
            </li>
            <li>闖紅燈可能被開罰單，金額約 3–6 萬韓元</li>
            <li>大路口車流快，別為了趕時間冒險</li>
          </ul>
        </InfoCard>
      </section>

      {/* 公共場所禮儀 */}
      <section className="mt-10 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <Users className="w-5 h-5" />
          公共場所小規矩
        </h2>

        <PaperCard color="yellow" rotation={0.6} delay={0.05}>
          <WashiTape color="blue" position="top-right" width="w-16" />
          <h3 className="font-heading font-bold text-base text-accent-red mb-3 flex items-center gap-1.5">
            <Scroll className="w-4 h-4" />
            衛生紙不一定能丟馬桶
          </h3>
          <ul className="space-y-1.5 text-sm text-text-dark">
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
              <span>韓國老舊建築管線細，衛生紙要丟馬桶旁的垃圾桶</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
              <span>
                看現場標示：有寫「<span className="font-mono">휴지통</span>」（垃圾桶）就丟旁邊
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
              <span>新式飯店、百貨多半可直接丟馬桶（GLAD MAPO 屬新式）</span>
            </li>
          </ul>
        </PaperCard>

        <InfoCard
          title="公共場所全面禁菸"
          icon={<CigaretteOff className="w-4 h-4 text-accent-orange" />}
          variant="warning"
        >
          <ul className="space-y-1.5">
            <li>
              餐廳、咖啡廳、酒吧、地鐵、馬路、公園<span className="font-semibold text-text-dark">全面禁菸</span>
            </li>
            <li>
              只能在標示「<span className="font-mono">흡연실</span>」的指定吸菸區抽
            </li>
            <li className="text-accent-red font-semibold">
              違規最高可罰 10 萬韓元，警察會當場開單
            </li>
          </ul>
        </InfoCard>
      </section>

      {/* 夜間安全 */}
      <section className="mt-10 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <Moon className="w-5 h-5" />
          夜間安全提醒
        </h2>

        <PaperCard color="pink" rotation={-0.6} delay={0.05}>
          <WashiTape color="lavender" position="top-left" width="w-20" />
          <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-full bg-accent-red/10 border border-accent-red/30">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" />
            <span className="font-heading text-xs font-bold text-accent-red tracking-wide">
              夜生活區特別小心
            </span>
          </div>
          <h3 className="font-heading font-bold text-base text-accent-red mb-3 flex items-center gap-1.5">
            <Wine className="w-4 h-4" />
            不要接受陌生人請的飲料
          </h3>
          <ul className="space-y-1.5 text-sm text-text-dark">
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
              <span>
                <span className="font-semibold">弘大、梨泰院、江南</span>夜生活熱鬧，偶有下藥事件
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-orange font-bold mt-0.5 shrink-0">•</span>
              <span>飲料不離開視線，離席後就別再喝同一杯</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red font-bold mt-0.5 shrink-0">!</span>
              <span className="font-semibold text-text-dark">
                感到昏沈不對勁立刻離開現場，並撥{" "}
                <span className="font-mono">112</span>
              </span>
            </li>
          </ul>
        </PaperCard>

        <InfoCard
          title="拉客者直接拒絕、轉身離開"
          icon={<UserX className="w-4 h-4 text-accent-orange" />}
          variant="warning"
        >
          <ul className="space-y-1.5">
            <li>
              弘大、鍾路、明洞夜間常有人<span className="font-semibold text-text-dark">主動搭訕推銷酒吧／夜總會／按摩</span>
            </li>
            <li>語言不通又被帶到消費場所，常會被收高額費用</li>
            <li className="text-accent-red font-semibold">
              禮貌但堅定地拒絕，轉身離開就對了
            </li>
          </ul>
        </InfoCard>
      </section>

      {/* Footer note */}
      <p className="text-center text-xs text-text-muted/70 mt-12 mb-4">
        以上內容整理自韓國觀光公社與近期旅韓提醒，若規定有更新以官方為準
      </p>
    </div>
  );
}
