import { notFound } from "next/navigation";
import Image from "next/image";
import { PillHeader } from "../../components/PillHeader";
import { PaperCard } from "../../components/PaperCard";
import { WashiTape } from "../../components/WashiTape";
import { DayHeader } from "../../components/DayHeader";
import { TimelineItem } from "../../components/TimelineItem";
import { InfoCard } from "../../components/InfoCard";
import { ItineraryList } from "../../components/ItineraryList";
import { withBasePath } from "../../lib/base-path";
import {
  MapPin,
  UtensilsCrossed,
  Star,
  Camera,
  Coffee,
} from "lucide-react";

/* ---- Day content data ---- */
const days: Record<
  string,
  {
    title: string;
    date: string;
    subtitle: string;
    color: "yellow" | "green" | "mint" | "pink" | "blue";
    content: React.ReactNode;
  }
> = {
  "1": {
    title: "DAY 1",
    date: "04/24（五）",
    subtitle: "抵達首爾 · 入住 · 聖水晚餐",
    color: "yellow",
    content: <Day1Content />,
  },
  "2": {
    title: "DAY 2",
    date: "04/25（六）",
    subtitle: "韓服 · 景福宮 · 安國站 · 廣藏市場",
    color: "green",
    content: <Day2Content />,
  },
};

export function generateStaticParams() {
  return Object.keys(days).map((id) => ({ id }));
}

export default async function DayPage(props: PageProps<"/day/[id]">) {
  const { id } = await props.params;
  const day = days[id];
  if (!day) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <PillHeader>{day.title}</PillHeader>
      <div className="text-center mt-3 mb-10">
        <p className="text-text-muted text-sm">
          {day.date} · {day.subtitle}
        </p>
      </div>
      {day.content}
    </div>
  );
}

/* ======= DAY 1 ======= */
function Day1Content() {
  return (
    <div className="space-y-8">
      {/* Timeline */}
      <PaperCard color="yellow" rotation={-0.5} delay={0.05}>
        <WashiTape color="mint" position="top-left" width="w-20" />
        <h3 className="font-heading font-bold text-lg text-accent-blue mb-4">
          時間安排
        </h3>
        <div className="relative">
          <TimelineItem time="04:30" title="士林出發">
            <p>凌晨從士林出發前往桃園機場</p>
          </TimelineItem>
          <TimelineItem time="05:00" title="抵達桃園機場">
            <p>建議 05:00 到達，辦理登機手續</p>
          </TimelineItem>
          <TimelineItem time="07:30" title="搭機出發">
            <p>長榮航空 BR170 · 桃園 → 仁川</p>
          </TimelineItem>
          <TimelineItem time="11:00" title="抵達仁川機場">
            <ItineraryList
              items={[
                "kkday 領 wowpass 卡（3 樓 Ezfly 飛買家櫃檯）",
                "機場線買票可刷信用卡",
                "搭 AREX 普通車到孔德站（約 66 分鐘）",
              ]}
            />
          </TimelineItem>
          <TimelineItem time="~15:00" title="入住 GLAD MAPO">
            <p>放行李、休息、使用 wowpass 機器儲值</p>
          </TimelineItem>
          <TimelineItem time="17:00" title="晚餐：Ggupdang 燒肉" isLast>
            <p>聖水店 · 預約 17:00</p>
          </TimelineItem>
        </div>
      </PaperCard>

      {/* Restaurant details */}
      <PaperCard color="green" rotation={1} delay={0.15}>
        <WashiTape color="pink" position="top-right" width="w-16" />
        <div className="flex items-center gap-2 mb-3">
          <UtensilsCrossed className="w-5 h-5 text-accent-red" />
          <h3 className="font-heading font-bold text-lg text-accent-red">
            Ggupdang 燒肉 聖水店
          </h3>
        </div>
        {/* BBQ illustration */}
        <div className="rounded-lg overflow-hidden shadow-sm mb-3">
          <Image
            src={withBasePath("/images/real-bbq.jpg")}
            alt="Ggupdang 烤肉真實照片"
            width={800}
            height={450}
            className="w-full h-44 object-cover"
          />
        </div>
        <div className="text-sm text-text-dark space-y-2">
          <p className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-accent-orange mt-0.5 shrink-0" />
            <span>서울 성동구 성수이로20길 10</span>
          </p>
          <p className="flex items-start gap-2">
            <Star className="w-4 h-4 text-accent-orange mt-0.5 shrink-0" />
            <span>多年米其林必比登推薦、全程專人代烤</span>
          </p>
          <div className="bg-white/60 rounded-lg p-3 mt-2">
            <p className="font-semibold text-xs text-text-muted mb-1">推薦餐點</p>
            <p>高湯飯、松露炸醬麵</p>
            <p className="text-xs text-text-muted mt-1">
              幾個人通常至少點幾份肉，每份份量不算太多
            </p>
          </div>
        </div>
      </PaperCard>

      {/* Seongsu-dong */}
      <PaperCard color="mint" rotation={-0.8} delay={0.25}>
        <WashiTape color="lavender" position="top-center" width="w-18" />
        <div className="flex items-center gap-2 mb-2">
          <Coffee className="w-5 h-5 text-accent-blue" />
          <h3 className="font-heading font-bold text-base text-accent-blue">
            晚餐後散步：聖水洞
          </h3>
        </div>
        {/* Seongsu cafe illustration */}
        <div className="rounded-lg overflow-hidden shadow-sm mb-3">
          <Image
            src={withBasePath("/images/real-cafe.jpg")}
            alt="聖水洞咖啡街真實照片"
            width={800}
            height={450}
            className="w-full h-44 object-cover"
          />
        </div>
        <p className="text-sm text-text-muted leading-relaxed">
          聖水洞原本是工業區，現在轉型成咖啡廳、藝廊、設計品牌聚集地。即使不購物，也很適合逛街拍照看店面設計！
        </p>
      </PaperCard>
    </div>
  );
}

/* ======= DAY 2 ======= */
function Day2Content() {
  return (
    <div className="space-y-8">
      {/* Timeline */}
      <PaperCard color="green" rotation={0.5} delay={0.05}>
        <WashiTape color="blue" position="top-left" width="w-20" />
        <h3 className="font-heading font-bold text-lg text-accent-blue mb-4">
          時間安排
        </h3>
        <div className="relative">
          <TimelineItem time="07:00" title="早餐：飯捲天國">
            <p>到處都有分店、菜單多、價格平實、24 小時營業</p>
            <p className="text-accent-red font-semibold text-xs mt-1">
              今天要準時到韓服店，早餐建議早點吃、吃飽一點！
            </p>
          </TimelineItem>
          <TimelineItem time="09:00" title="韓服體驗：愛麗屋韓服">
            <ItineraryList
              items={[
                "2 男 3 女（其中 1 男 1 女有妝髮）",
                "5 人拍攝服務",
                "換裝後租借三小時",
                "換完衣服後步行約 8 分鐘從側門進景福宮",
              ]}
            />
          </TimelineItem>
          <TimelineItem time="10:30" title="景福宮拍照">
            <p>朝鮮王朝正宮，五大宮闕中規模最大、歷史最悠久</p>
          </TimelineItem>
          <TimelineItem time="13:30" title="安國站散策、午餐">
            <p>鹽可頌、布丁購物</p>
          </TimelineItem>
          <TimelineItem time="16:00" title="廣藏市場" isLast>
            <p>買棉被（只賣到 18:00，先逛這區！）</p>
          </TimelineItem>
        </div>
      </PaperCard>

      {/* Gyeongbokgung */}
      <PaperCard color="yellow" rotation={-1.2} delay={0.15}>
        <WashiTape color="mint" position="top-right" width="w-16" />
        <div className="flex items-center gap-2 mb-3">
          <Camera className="w-5 h-5 text-accent-red" />
          <h3 className="font-heading font-bold text-lg text-accent-red">
            景福宮
          </h3>
        </div>
        {/* Gyeongbokgung illustration */}
        <div className="rounded-lg overflow-hidden shadow-sm mb-3">
          <Image
            src={withBasePath("/images/real-palace.jpg")}
            alt="景福宮真實照片"
            width={800}
            height={450}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="text-sm text-text-dark space-y-2">
          <p><strong>代表景點：</strong>勤政殿、慶會樓、香遠亭、光化門</p>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <p className="text-xs text-text-muted">守門將換崗儀式</p>
              <p className="font-heading font-bold text-accent-blue">
                10:00 / 14:00
              </p>
            </div>
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <p className="text-xs text-text-muted">守護光化門儀式</p>
              <p className="font-heading font-bold text-accent-blue">
                11:00 / 13:00
              </p>
            </div>
          </div>
        </div>
      </PaperCard>

      {/* Anguk Station Snacks */}
      <PaperCard color="pink" rotation={0.8} delay={0.25}>
        <WashiTape color="yellow" position="top-left" width="w-14" />
        <h3 className="font-heading font-bold text-base text-accent-orange mb-3">
          安國站散策可買項目
        </h3>
        <div className="space-y-4 text-sm text-text-dark">
          <div>
            <p className="font-semibold">Artist Bakery（超人氣鹽麵包）</p>
            <p className="text-text-muted text-xs mt-0.5">
              可用門口 CatchTable 機器或 APP 當日預約候位
            </p>
          </div>
          <div>
            <p className="font-semibold">Punoya 手工布丁（只能外帶）</p>
            <div className="bg-white/60 rounded-lg p-2.5 mt-1.5 text-xs space-y-0.5">
              <p>卡士達 / 抹茶 / 巧克力：₩4,800</p>
              <p>焙茶 / 開心果：₩5,000</p>
              <p>三入盒：₩18,000 · 六入盒：₩35,000</p>
            </div>
          </div>
        </div>
      </PaperCard>

      {/* Gwangjang Market image */}
      <div className="rounded-xl overflow-hidden shadow-md">
        <Image
          src={withBasePath("/images/real-market.jpg")}
          alt="廣藏市場真實照片"
          width={800}
          height={500}
          className="w-full h-52 object-cover"
        />
      </div>

      {/* Gwangjang */}
      <InfoCard
        title="廣藏市場"
        variant="warning"
        icon={<MapPin className="w-4 h-4 text-accent-orange" />}
      >
        <p className="font-semibold">棉被只賣到 18:00，建議先逛這區！</p>
        <p className="mt-1">逛完後可前往布帳馬車一條街</p>
      </InfoCard>
    </div>
  );
}
