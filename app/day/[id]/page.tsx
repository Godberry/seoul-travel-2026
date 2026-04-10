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
    subtitle: "自由活動日",
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

/* ======= DAY 3 ======= */
function Day3Content() {
  return (
    <div className="space-y-8">
      {/* Free day illustration */}
      <div className="rounded-xl overflow-hidden shadow-md">
        <Image
          src={withBasePath("/images/free-day.png")}
          alt="首爾自由活動日水彩插畫"
          width={800}
          height={450}
          className="w-full h-52 object-cover"
        />
      </div>

      {/* Free day message */}
      <PaperCard color="mint" rotation={-0.5} delay={0.05}>
        <WashiTape color="lavender" position="top-left" width="w-20" />
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-accent-blue" />
          <h3 className="font-heading font-bold text-lg text-accent-blue">
            自由活動日
          </h3>
        </div>
        <p className="text-sm text-text-muted leading-relaxed">
          今天沒有固定行程，大家可以自由探索首爾！可以去逛逛明洞、北村韓屋村、弘大商圈，或者找一間咖啡廳悠閒地度過一天。
        </p>
        <div className="mt-4 bg-white/60 rounded-lg p-4">
          <p className="text-sm font-semibold text-text-dark mb-2">
            💡 推薦活動
          </p>
          <ul className="text-sm text-text-muted space-y-1.5 list-disc list-inside">
            <li>逛明洞購物街，搜刮美妝好物</li>
            <li>到北村韓屋村拍美照</li>
            <li>探索弘大周邊的潮流小店</li>
            <li>去一間特色咖啡廳放鬆</li>
            <li>嚐試路邊的韓式小吃</li>
          </ul>
        </div>
      </PaperCard>

      {/* Tips */}
      <InfoCard
        title="小提醒"
        variant="info"
        icon={<MapPin className="w-4 h-4 text-accent-blue" />}
      >
        <p>自由活動也別忘了確認交通卡餘額，以及留意回飯店的路線！</p>
        <p className="mt-1">
          可善用 Naver Map 導航，迷路了就用 Papago 問路 😊
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

      {/* AQUAFIELD details */}
      <PaperCard color="blue" rotation={-1} delay={0.15}>
        <WashiTape color="pink" position="top-right" width="w-16" />
        <div className="flex items-center gap-2 mb-3">
          <Bath className="w-5 h-5 text-accent-blue" />
          <h3 className="font-heading font-bold text-lg text-accent-blue">
            AQUAFIELD 汗蒸幕
          </h3>
        </div>
        {/* Spa illustration */}
        <div className="rounded-lg overflow-hidden shadow-sm mb-3">
          <Image
            src={withBasePath("/images/korean-spa.png")}
            alt="韓式汗蒸幕水彩插畫"
            width={800}
            height={450}
            className="w-full h-44 object-cover"
          />
        </div>
        <div className="text-sm text-text-dark space-y-3">
          <p className="text-text-muted leading-relaxed">
            位於 Starfield 百貨內的高級汗蒸幕設施，是一個結合 SPA
            與休閒的放鬆天堂。
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <p className="text-2xl mb-1">🧖‍♀️</p>
              <p className="text-xs text-text-muted">多間特色汗蒸室</p>
              <p className="text-xs font-semibold">雲室、火汗房、冰室</p>
            </div>
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <p className="text-2xl mb-1">♨️</p>
              <p className="text-xs text-text-muted">溫泉 SPA</p>
              <p className="text-xs font-semibold">露天溫泉與室內 SPA</p>
            </div>
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <p className="text-2xl mb-1">🌿</p>
              <p className="text-xs text-text-muted">香氛浴池</p>
              <p className="text-xs font-semibold">放鬆身心的芬芳體驗</p>
            </div>
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <p className="text-2xl mb-1">🍜</p>
              <p className="text-xs text-text-muted">館內食堂</p>
              <p className="text-xs font-semibold">肚子餓可以先吃一點</p>
            </div>
          </div>
        </div>
      </PaperCard>

      {/* EGG DROP info */}
      <PaperCard color="yellow" rotation={0.8} delay={0.25}>
        <WashiTape color="mint" position="top-center" width="w-14" />
        <div className="flex items-center gap-2 mb-3">
          <UtensilsCrossed className="w-5 h-5 text-accent-orange" />
          <h3 className="font-heading font-bold text-base text-accent-orange">
            EGG DROP 🥚
          </h3>
        </div>
        <p className="text-sm text-text-muted leading-relaxed">
          韓國超人氣蛋沙拉吐司店！酥脆的吐司搭配滑嫩的炒蛋，再加上特製醬料，是韓國早餐的經典選擇。飯店周邊就有分店，非常方便！
        </p>
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
          <TimelineItem time="13:00" title="中餐：甜蜜蜜">
            <p>中式餐廳，吃頓暖心的午餐</p>
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
        {/* Hongdae illustration */}
        <div className="rounded-lg overflow-hidden shadow-sm mb-3">
          <Image
            src={withBasePath("/images/hongdae-street.png")}
            alt="弘大商圈水彩插畫"
            width={800}
            height={450}
            className="w-full h-44 object-cover"
          />
        </div>
        <p className="text-sm text-text-muted leading-relaxed">
          弘大是首爾最具活力的年輕人聚集地，滿滿的潮流小店、美妝店、獨立品牌和街頭藝術。最後一天把握時間逛街購物，帶些紀念品回家！
        </p>
      </PaperCard>

      {/* Restaurant */}
      <PaperCard color="green" rotation={-0.8} delay={0.25}>
        <WashiTape color="yellow" position="top-left" width="w-14" />
        <div className="flex items-center gap-2 mb-3">
          <Soup className="w-5 h-5 text-accent-orange" />
          <h3 className="font-heading font-bold text-base text-accent-orange">
            中餐廳：甜蜜蜜 🍲
          </h3>
        </div>
        <p className="text-sm text-text-muted leading-relaxed">
          在首爾吃一頓中式料理！甜蜜蜜是弘大附近受歡迎的中餐廳，旅行最後一天來碗熱騰騰的湯麵或炒飯，暖暖胃再出發去機場。
        </p>
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
