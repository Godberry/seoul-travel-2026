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
  Sparkles,
  ShoppingBag,
  Luggage,
  Plane,
  Bath,
  Soup,
  Trees,
  Train,
  Flower2,
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
  "3": {
    title: "DAY 3",
    date: "04/26（日）",
    subtitle: "kkday 一日遊（南怡島、江村鐵路自行車、晨靜樹木園）",
    color: "mint",
    content: <Day3Content />,
  },
  "4": {
    title: "DAY 4",
    date: "04/27（一）",
    subtitle: "EGG DROP · AQUAFIELD 汗蒸幕",
    color: "pink",
    content: <Day4Content />,
  },
  "5": {
    title: "DAY 5",
    date: "04/28（二）",
    subtitle: "弘大逛逛 · 回程",
    color: "blue",
    content: <Day5Content />,
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
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          {/* BBQ illustration */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm shrink-0">
            <Image
              src={withBasePath("/images/real-bbq.jpg")}
              alt="Ggupdang 烤肉真實照片"
              width={800}
              height={450}
              className="w-full h-44 md:h-full object-cover min-h-[160px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm text-text-dark space-y-2 flex flex-col justify-center">
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
        </div>
      </PaperCard>

      {/* Seongsu-dong */}
      <PaperCard color="mint" rotation={-0.8} delay={0.25}>
        <WashiTape color="lavender" position="top-center" width="w-18" />
        <div className="flex items-center gap-2 mb-3">
          <Coffee className="w-5 h-5 text-accent-blue" />
          <h3 className="font-heading font-bold text-base text-accent-blue">
            晚餐後散步：聖水洞
          </h3>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-4 mb-2">
          {/* Seongsu cafe illustration */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm shrink-0">
            <Image
              src={withBasePath("/images/real-cafe.jpg")}
              alt="聖水洞咖啡街真實照片"
              width={800}
              height={450}
              className="w-full h-44 md:h-full object-cover min-h-[160px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm text-text-muted leading-relaxed flex flex-col justify-center">
            <p>
              聖水洞原本是工業區，現在轉型成咖啡廳、藝廊、設計品牌聚集地。即使不購物，也很適合逛街拍照看店面設計！
            </p>
          </div>
        </div>
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

      {/* Breakfast: Kimbap */}
      <PaperCard color="mint" rotation={-0.8} delay={0.1}>
        <WashiTape color="lavender" position="top-right" width="w-16" />
        <div className="flex items-center gap-2 mb-3">
          <UtensilsCrossed className="w-5 h-5 text-accent-red" />
          <h3 className="font-heading font-bold text-lg text-accent-red">
            早餐：飯捲天國
          </h3>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-4 mb-2">
          {/* Kimbap illustration */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm shrink-0">
            <Image
              src={withBasePath("/images/飯捲.jpg")}
              alt="飯捲天國"
              width={800}
              height={450}
              className="w-full h-44 md:h-full object-cover min-h-[160px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm text-text-dark space-y-2 flex flex-col justify-center">
            <p className="text-text-muted leading-relaxed">
              到處都有分店的平價美食！菜單選擇超多，24 小時營業非常方便。今天要準時到韓服店，建議早點出門吃豐盛一點的早餐！
            </p>
            <div className="bg-white/60 rounded-lg p-3 mt-2">
              <p className="font-semibold text-xs text-text-muted mb-1">推薦餐點</p>
              <p>招牌原味飯捲、起司拉麵、特色炸豬排</p>
            </div>
          </div>
        </div>
      </PaperCard>

      {/* Gyeongbokgung */}
      <PaperCard color="yellow" rotation={1.2} delay={0.15}>
        <WashiTape color="mint" position="top-left" width="w-16" />
        <div className="flex items-center gap-2 mb-3">
          <Camera className="w-5 h-5 text-accent-orange" />
          <h3 className="font-heading font-bold text-lg text-accent-orange">
            景福宮
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          {/* Gyeongbokgung illustration */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm shrink-0">
            <Image
              src={withBasePath("/images/real-palace.jpg")}
              alt="景福宮真實照片"
              width={800}
              height={450}
              className="w-full h-48 md:h-full object-cover min-h-[160px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm text-text-dark space-y-2 flex flex-col justify-center">
            <p><strong>代表景點：</strong>勤政殿、慶會樓、香遠亭、光化門</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 mt-2">
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
        </div>
      </PaperCard>

      {/* Anguk Station Snacks - Artist Bakery */}
      <PaperCard color="pink" rotation={-0.5} delay={0.25}>
        <WashiTape color="yellow" position="top-right" width="w-14" />
        <div className="flex items-center gap-2 mb-3">
          <Coffee className="w-5 h-5 text-accent-red" />
          <h3 className="font-heading font-bold text-lg text-accent-red">
            安國站散策：Artist Bakery
          </h3>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-4 mb-2">
          {/* Bread illustration */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm shrink-0">
            <Image
              src={withBasePath("/images/pun.jpg")}
              alt="Artist Bakery 鹽麵包"
              width={800}
              height={450}
              className="w-full h-44 md:h-full object-cover min-h-[160px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm text-text-dark space-y-2 flex flex-col justify-center">
            <p className="leading-relaxed text-text-muted">
              超人氣的鹽麵包 (鹽可頌) 專賣店！外酥內軟的豐富口味絕對不能錯過。
            </p>
            <div className="bg-white/60 rounded-lg p-3 mt-2">
              <p className="font-semibold text-xs text-text-muted mb-1">小提醒</p>
              <p>可用門口 CatchTable 機器或 APP 當日預約候位</p>
            </div>
          </div>
        </div>
      </PaperCard>

      {/* Anguk Station Snacks - Punoya */}
      <PaperCard color="blue" rotation={0.8} delay={0.3}>
        <WashiTape color="pink" position="top-left" width="w-18" />
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-accent-blue" />
          <h3 className="font-heading font-bold text-lg text-accent-blue">
            安國站散策：Punoya 手工布丁
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          {/* Pudding illustration */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm shrink-0">
            <Image
              src={withBasePath("/images/pudin.jpg")}
              alt="Punoya 手工布丁"
              width={800}
              height={450}
              className="w-full h-44 md:h-full object-cover min-h-[160px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm text-text-dark space-y-2 flex flex-col justify-center">
            <p className="leading-relaxed text-text-muted">
              隱藏在安國站巷弄裡的超美味手工布丁店，特色玻璃罐裝只能外帶，非常適合作為散步甜點！
            </p>
            <div className="bg-white/60 rounded-lg p-3 mt-2 text-xs space-y-1">
              <div className="flex justify-between border-b border-gray-200/50 pb-1">
                <span>卡士達 / 抹茶 / 巧克力</span>
                <span>₩4,800</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/50 pb-1">
                <span>焙茶 / 開心果</span>
                <span>₩5,000</span>
              </div>
              <div className="flex justify-between pt-1 text-text-muted">
                <span>三入盒 ₩18,000</span>
                <span>六入盒 ₩35,000</span>
              </div>
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

/* ======= DAY 3 ======= */
function Day3Content() {
  return (
    <div className="space-y-8">
      {/* Timeline */}
      <PaperCard color="mint" rotation={-0.5} delay={0.05}>
        <WashiTape color="yellow" position="top-left" width="w-20" />
        <h3 className="font-heading font-bold text-lg text-accent-blue mb-4">
          時間安排 (kkday 一日遊)
        </h3>
        <div className="relative">
          <TimelineItem time="06:50" title="集合">
            <p className="text-accent-red font-semibold">弘大 8 號出口集合</p>
            <p className="text-sm text-text-muted mt-1">請務必準時抵達！</p>
          </TimelineItem>
          <TimelineItem time="07:00" title="出發">
            <p>搭乘專車出發</p>
          </TimelineItem>
          <TimelineItem time="09:30" title="南怡島">
            <p>漫步於浪漫的林蔭大道，韓劇《冬季戀歌》拍攝地</p>
          </TimelineItem>
          <TimelineItem time="13:30" title="江村鐵路自行車">
            <p>沿著廢棄鐵道騎乘，欣賞沿途美麗風景</p>
          </TimelineItem>
          <TimelineItem time="15:00" title="晨靜樹木園">
            <p>被群山環繞的絕美庭園，四季都有不同風情</p>
          </TimelineItem>
          <TimelineItem time="18:40" title="回到弘大站" isLast>
            <p>一日遊結束，返回弘大站解散</p>
          </TimelineItem>
        </div>
      </PaperCard>

      {/* Nami Island */}
      <PaperCard color="blue" rotation={1} delay={0.15}>
        <WashiTape color="pink" position="top-right" width="w-16" />
        <div className="flex items-center gap-2 mb-3">
          <Trees className="w-5 h-5 text-accent-blue" />
          <h3 className="font-heading font-bold text-lg text-accent-blue">
            南怡島
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm shrink-0">
            <Image
              src={withBasePath("/images/nami-island.jpg")}
              alt="南怡島水杉林道水彩插畫"
              width={800}
              height={450}
              className="w-full h-44 md:h-full object-cover min-h-[160px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm text-text-dark space-y-2 flex flex-col justify-center">
            <p className="leading-relaxed">
              以美麗的林蔭大道聞名，四季各有迷人風情，更是經典韓劇《冬季戀歌》的拍攝地。可以在這裡悠閒散步、拍拍美照，享受被大自然包圍的浪漫氛圍！
            </p>
            <div className="bg-white/60 rounded-lg p-3 mt-2">
              <p className="font-semibold text-xs text-text-muted mb-1">特色亮點</p>
              <p>水杉林道、銀杏樹路、冬季戀歌銅像</p>
            </div>
          </div>
        </div>
      </PaperCard>

      {/* Gangchon Rail Bike */}
      <PaperCard color="yellow" rotation={-0.8} delay={0.25}>
        <WashiTape color="mint" position="top-left" width="w-14" />
        <div className="flex items-center gap-2 mb-3">
          <Train className="w-5 h-5 text-accent-orange" />
          <h3 className="font-heading font-bold text-lg text-accent-orange">
            江村鐵路自行車
          </h3>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-4 mb-2">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm shrink-0">
            <Image
              src={withBasePath("/images/gangchon-rail-bike.jpg")}
              alt="江村鐵路自行車水彩插畫"
              width={800}
              height={450}
              className="w-full h-44 md:h-full object-cover min-h-[160px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm text-text-dark space-y-2 flex flex-col justify-center">
            <p className="leading-relaxed">
              利用廢棄的京春線鐵道改建而成，大家一起踩著踏板，沿途能飽覽北漢江的秀麗景色，還會經過充滿驚喜的主題隧道（泡泡、燈光、音樂），是首爾近郊超人氣的戶外體驗！
            </p>
            <div className="bg-white/60 rounded-lg p-3 mt-2">
              <p className="font-semibold text-xs text-text-muted mb-1">活動體驗</p>
              <p>路線總長約 8.5 公里，踩踏板欣賞風景加上浪漫的接駁小火車</p>
            </div>
          </div>
        </div>
      </PaperCard>

      {/* Garden of Morning Calm */}
      <PaperCard color="pink" rotation={0.8} delay={0.35}>
        <WashiTape color="blue" position="top-center" width="w-18" />
        <div className="flex items-center gap-2 mb-3">
          <Flower2 className="w-5 h-5 text-accent-red" />
          <h3 className="font-heading font-bold text-lg text-accent-red">
            晨靜樹木園
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm shrink-0">
            <Image
              src={withBasePath("/images/morning-calm.jpg")}
              alt="晨靜樹木園水彩插畫"
              width={800}
              height={450}
              className="w-full h-44 md:h-full object-cover min-h-[160px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm text-text-dark space-y-2 flex flex-col justify-center">
            <p className="leading-relaxed">
              座落於祝靈山旁的絕美庭園，面積超大，擁有各種主題花園。春天百花齊放非常漂亮，園區內還有傳統的韓式小亭子與造景，也是眾多韓劇與綜藝節目的取景地。
            </p>
            <div className="bg-white/60 rounded-lg p-3 mt-2">
              <p className="font-semibold text-xs text-text-muted mb-1">特色亮點</p>
              <p>下景庭園、曙華淵、野花庭園，非常適合慢慢散步拍照</p>
            </div>
          </div>
        </div>
      </PaperCard>

      {/* Dinner details */}
      <PaperCard color="green" rotation={-1} delay={0.45}>
        <WashiTape color="pink" position="top-right" width="w-16" />
        <div className="flex items-center gap-2 mb-3">
          <UtensilsCrossed className="w-5 h-5 text-accent-red" />
          <h3 className="font-heading font-bold text-lg text-accent-red">
            晚餐：孔陵一隻雞 (暫定)
          </h3>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-4 mb-2">
          {/* Dinner illustration */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm shrink-0">
            <Image
              src={withBasePath("/images/一隻雞.jpg")}
              alt="孔陵一隻雞真實照片"
              width={800}
              height={450}
              className="w-full h-44 md:h-full object-cover min-h-[160px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm text-text-dark space-y-2 flex flex-col justify-center">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-accent-orange mt-0.5 shrink-0" />
              <span>新村站</span>
            </p>
            <p className="text-text-muted leading-relaxed mt-2">
              溫和清甜的雞湯，濃郁的蒜味，最後還可以煮麵或煮海苔雞蛋粥，非常美味！
            </p>
            <div className="bg-white/60 rounded-lg p-3 mt-2">
              <p className="font-semibold text-xs text-text-muted mb-1">備案計畫</p>
              <p>看當天體力決定是否直接在弘大解決，或是回飯店附近覓食。</p>
            </div>
          </div>
        </div>
      </PaperCard>

      {/* Reminder */}
      <InfoCard
        title="一日遊小提醒"
        variant="info"
        icon={<MapPin className="w-4 h-4 text-accent-blue" />}
      >
        <p>行程以戶外為主，建議穿著舒適好走的鞋子。</p>
        <p className="mt-1">
          可隨身攜帶陽傘、水瓶，並注意防曬！
        </p>
      </InfoCard>
    </div>
  );
}

/* ======= DAY 4 ======= */
function Day4Content() {
  return (
    <div className="space-y-8">
      {/* Timeline */}
      <PaperCard color="pink" rotation={0.5} delay={0.05}>
        <WashiTape color="yellow" position="top-left" width="w-20" />
        <h3 className="font-heading font-bold text-lg text-accent-blue mb-4">
          時間安排
        </h3>
        <div className="relative">
          <TimelineItem time="10:00" title="早午餐：EGG DROP">
            <p>今天睡晚一點～起來吃個美味的蛋沙拉吐司！</p>
          </TimelineItem>
          <TimelineItem time="移動" title="搭車前往三松站">
            <p>橘線三松站 4 號出口，前往 Starfield 百貨</p>
          </TimelineItem>
          <TimelineItem time="下午" title="AQUAFIELD 汗蒸幕">
            <p>體驗韓式汗蒸幕，放鬆身心！</p>
          </TimelineItem>
          <TimelineItem time="晚間" title="晚餐 + 逛商場">
            <p>在商場內隨意用餐，有超市可以逛</p>
          </TimelineItem>
          <TimelineItem time="回飯店" title="整理行李" isLast>
            <p>今天要稍微整理一下行李！</p>
          </TimelineItem>
        </div>
      </PaperCard>

      {/* EGG DROP info */}
      <PaperCard color="yellow" rotation={-0.8} delay={0.15}>
        <WashiTape color="mint" position="top-right" width="w-16" />
        <div className="flex items-center gap-2 mb-3">
          <UtensilsCrossed className="w-5 h-5 text-accent-orange" />
          <h3 className="font-heading font-bold text-lg text-accent-orange">
            早午餐：EGG DROP 🥚
          </h3>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-4 mb-2">
          {/* Egg Drop illustration */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm shrink-0">
            <Image
              src={withBasePath("/images/egg_drop.jpg")}
              alt="EGG DROP 早餐"
              width={800}
              height={450}
              className="w-full h-44 md:h-full object-cover min-h-[160px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm text-text-dark space-y-2 flex flex-col justify-center">
            <p className="leading-relaxed text-text-muted">
              韓國超人氣蛋沙拉吐司店！酥脆的吐司搭配滑嫩的炒蛋，再加上特製醬料，是韓國早餐的經典選擇。飯店周邊就有分店，非常方便！
            </p>
            <div className="bg-white/60 rounded-lg p-3 mt-2">
              <p className="font-semibold text-xs text-text-muted mb-1">推薦口味</p>
              <p>蒜香培根起司、酪梨起司、火腿起司</p>
            </div>
          </div>
        </div>
      </PaperCard>

      {/* AQUAFIELD details */}
      <PaperCard color="blue" rotation={1} delay={0.25}>
        <WashiTape color="pink" position="top-left" width="w-16" />
        <div className="flex items-center gap-2 mb-3">
          <Bath className="w-5 h-5 text-accent-blue" />
          <h3 className="font-heading font-bold text-lg text-accent-blue">
            AQUAFIELD 汗蒸幕
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          {/* Spa illustration */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm shrink-0">
            <Image
              src={withBasePath("/images/korean-spa.jpg")}
              alt="韓式汗蒸幕水彩插畫"
              width={800}
              height={450}
              className="w-full h-44 md:h-full object-cover min-h-[160px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm text-text-dark space-y-3 flex flex-col justify-center">
            <p className="text-text-muted leading-relaxed">
              位於 Starfield 百貨內的高級汗蒸幕設施，是一個結合 SPA
              與休閒的放鬆天堂。
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/60 rounded-lg p-2 text-center">
                <p className="text-xl mb-1">🧖‍♀️</p>
                <p className="text-xs text-text-muted">多間特色汗蒸室</p>
                <p className="text-[10px] font-semibold mt-0.5">雲室、火汗房、冰室</p>
              </div>
              <div className="bg-white/60 rounded-lg p-2 text-center">
                <p className="text-xl mb-1">♨️</p>
                <p className="text-xs text-text-muted">溫泉 SPA</p>
                <p className="text-[10px] font-semibold mt-0.5">露天溫泉與室內 SPA</p>
              </div>
              <div className="bg-white/60 rounded-lg p-2 text-center">
                <p className="text-xl mb-1">🌿</p>
                <p className="text-xs text-text-muted">香氛浴池</p>
                <p className="text-[10px] font-semibold mt-0.5">放鬆身心的芬芳體驗</p>
              </div>
              <div className="bg-white/60 rounded-lg p-2 text-center">
                <p className="text-xl mb-1">🍜</p>
                <p className="text-xs text-text-muted">館內食堂</p>
                <p className="text-[10px] font-semibold mt-0.5">肚子餓可以先吃一點</p>
              </div>
            </div>
          </div>
        </div>
      </PaperCard>

      {/* Reminder */}
      <InfoCard
        title="珈蓉自由活動日"
        variant="info"
        icon={<Star className="w-4 h-4 text-accent-blue" />}
      >
        <p>今天珈蓉自由活動，可以自行安排想去的地方。</p>
        <p className="mt-1 font-semibold text-accent-red">
          晚上記得整理行李，明天就要回家囉！
        </p>
      </InfoCard>
    </div>
  );
}

/* ======= DAY 5 ======= */
function Day5Content() {
  return (
    <div className="space-y-8">
      {/* Timeline */}
      <PaperCard color="blue" rotation={-0.5} delay={0.05}>
        <WashiTape color="lavender" position="top-left" width="w-20" />
        <h3 className="font-heading font-bold text-lg text-accent-blue mb-4">
          時間安排
        </h3>
        <div className="relative">
          <TimelineItem time="08:30" title="隨意早餐 or 睡到飽">
            <p>最後一天，不趕行程，悠閒起床～</p>
          </TimelineItem>
          <TimelineItem time="11:00" title="退房、寄放行李">
            <p>在飯店櫃台寄放行李，輕裝出門</p>
          </TimelineItem>
          <TimelineItem time="12:00" title="弘大逛逛">
            <p>最後的逛街採購時間！</p>
          </TimelineItem>
          <TimelineItem time="13:00" title="甜蜜蜜 (Tian Mi Mi) - 弘大店">
            <p>《黑白大廚》點心女王鄭智善的餐廳</p>
          </TimelineItem>
          <TimelineItem time="~16:00" title="回飯店拿行李">
            <p>搭機場快線前往仁川機場</p>
          </TimelineItem>
          <TimelineItem time="~17:00" title="抵達機場" isLast>
            <p>辦理登機、免稅店最後衝刺！</p>
          </TimelineItem>
        </div>
      </PaperCard>

      {/* Hongdae */}
      <PaperCard color="pink" rotation={1} delay={0.15}>
        <WashiTape color="blue" position="top-right" width="w-16" />
        <div className="flex items-center gap-2 mb-3">
          <ShoppingBag className="w-5 h-5 text-accent-red" />
          <h3 className="font-heading font-bold text-lg text-accent-red">
            弘大逛逛
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          {/* Hongdae illustration */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm shrink-0">
            <Image
              src={withBasePath("/images/hongdae-street.jpg")}
              alt="弘大商圈水彩插畫"
              width={800}
              height={450}
              className="w-full h-44 md:h-full object-cover min-h-[160px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm text-text-muted leading-relaxed flex flex-col justify-center">
            <p>
              弘大是首爾最具活力的年輕人聚集地，滿滿的潮流小店、美妝店、獨立品牌和街頭藝術。最後一天把握時間逛街購物，帶些紀念品回家！
            </p>
          </div>
        </div>
      </PaperCard>

      {/* Restaurant */}
      <PaperCard color="green" rotation={-0.8} delay={0.25}>
        <WashiTape color="yellow" position="top-left" width="w-14" />
        <div className="flex items-center gap-2 mb-3">
          <UtensilsCrossed className="w-5 h-5 text-accent-orange" />
          <h3 className="font-heading font-bold text-base text-accent-orange">
            甜蜜蜜 (Tian Mi Mi) - 弘大店
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          {/* Restaurant image */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm shrink-0">
            <Image
              src={withBasePath("/images/sweet-honey-korea.jpg")}
              alt="甜蜜蜜真實照片"
              width={800}
              height={450}
              className="w-full h-44 md:h-full object-cover min-h-[160px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm text-text-muted leading-relaxed flex flex-col justify-center space-y-2">
            <p>
              由《黑白大廚》中的「點心女王」鄭智善主廚經營。這家店主打各式港式點心，與一般的韓式中華料理（炸醬麵、糖醋肉）不同。
            </p>
            <div className="bg-white/60 rounded-lg p-3">
              <p className="font-semibold text-xs text-text-muted mb-1">小提醒</p>
              <p>適合喜愛輕食或港式點心的旅客，推薦作為登機前的最後一餐！</p>
            </div>
          </div>
        </div>
      </PaperCard>

      {/* Departure info */}
      <InfoCard
        title="回程航班資訊"
        variant="warning"
        icon={<Plane className="w-4 h-4 text-accent-orange" />}
      >
        <div className="space-y-1.5">
          <p>
            <strong>航班：</strong>長榮航空 BR159
          </p>
          <p>
            <strong>起飛時間：</strong>19:45 仁川 ICN → 桃園 TPE
          </p>
          <p>
            <strong>建議到機場時間：</strong>16:30
          </p>
          <p className="mt-2 text-accent-red font-semibold">
            ✈ 旅途愉快，我們回家啦！
          </p>
        </div>
      </InfoCard>

      {/* Luggage reminder */}
      <PaperCard color="lavender" rotation={0.5} delay={0.35}>
        <WashiTape color="mint" position="top-center" width="w-18" />
        <div className="flex items-center gap-2 mb-3">
          <Luggage className="w-5 h-5 text-accent-blue" />
          <h3 className="font-heading font-bold text-base text-accent-blue">
            出發前檢查清單
          </h3>
        </div>
        <div className="text-sm text-text-muted space-y-1.5">
          <p>☑ 護照、手機、錢包</p>
          <p>☑ 確認行李沒有超重（託運 23kg）</p>
          <p>☑ 韓國退稅單據</p>
          <p>☑ 交通卡退餘額或留作紀念</p>
          <p>☑ 暈機藥上飛機前 1 小時吃</p>
        </div>
      </PaperCard>
    </div>
  );
}
