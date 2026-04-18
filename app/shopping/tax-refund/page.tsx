import { PillHeader } from "../../components/PillHeader";
import { PaperCard } from "../../components/PaperCard";
import { WashiTape } from "../../components/WashiTape";
import { InfoCard } from "../../components/InfoCard";
import { BackLink } from "../../components/BackLink";
import {
  BadgePercent,
  Receipt,
  Store,
  Building2,
  Plane,
  AlertTriangle,
  CheckCircle2,
  CreditCard,
  Wallet,
  ListChecks,
} from "lucide-react";

const eligibility = [
  { label: "身分", value: "入境韓國未滿 6 個月的外國人" },
  { label: "出境期限", value: "消費日起 3 個月內必須出境" },
  { label: "必備證件", value: "護照正本（結帳時必出示）" },
  { label: "單筆門檻", value: "15,000 韓元（約台幣 340 元）" },
  { label: "單筆上限", value: "600,000 韓元（超過部分不退）" },
];

const refundTable = [
  { range: "30,000 ～ 49,999", refund: "1,500 ～ 2,000", rate: "3 ～ 6.7%" },
  { range: "50,000 ～ 74,999", refund: "3,000 ～ 3,500", rate: "4 ～ 7%" },
  { range: "100,000 ～ 124,999", refund: "6,000 ～ 7,000", rate: "4.8 ～ 6.7%" },
];

const cautions = [
  "退稅商品不可拆封使用，海關有權抽查",
  "務必留存收據與退稅單據，遺失無法補辦",
  "單筆超過 600,000 韓元，超過部分不退（可拆成多筆結帳）",
  "結帳時就要主動申辦，事後無法補退稅",
  "市區退稅後若未在期限內出境，信用卡會被扣回退稅金加手續費",
];

const refundCompanies = [
  "Global Blue",
  "GLOBAL TAX FREE",
  "Easy Tax Refund",
  "CubeRefund",
  "eTAX FREE",
];

export default function TaxRefundPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-4">
        <BackLink href="/shopping" label="回購物攻略" />
      </div>

      <PillHeader>韓國退稅指南</PillHeader>

      <p className="text-center text-sm md:text-base text-text-muted mt-4 max-w-2xl mx-auto leading-relaxed flex items-center justify-center gap-1.5">
        <BadgePercent className="w-4 h-4" />
        在 Olive Young、樂天瑪特、藥妝店買滿 15,000 韓元就能退稅
      </p>

      {/* 免稅 vs 退稅 */}
      <section className="mt-10 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <Store className="w-5 h-5" />
          免稅店 vs 退稅店（先分清楚）
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <PaperCard color="blue" rotation={-1.2} delay={0.05}>
            <WashiTape color="mint" position="top-left" width="w-20" />
            <h3 className="font-heading font-bold text-base text-accent-red mb-2">
              免稅店 Duty Free
            </h3>
            <p className="text-sm text-text-dark mb-2">
              樂天免稅、新羅免稅、新世界免稅
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              結帳時<span className="font-semibold text-text-dark">已扣除</span>稅金，
              <span className="font-semibold text-text-dark">無需另辦</span>退稅。
            </p>
          </PaperCard>

          <PaperCard color="pink" rotation={1} delay={0.12}>
            <WashiTape color="yellow" position="top-right" width="w-18" />
            <h3 className="font-heading font-bold text-base text-accent-red mb-2">
              退稅店 Tax Free
            </h3>
            <p className="text-sm text-text-dark mb-2">
              貼有 <span className="font-mono font-bold">TAX FREE</span> 貼紙的店家
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              稅金<span className="font-semibold text-text-dark">已含於售價</span>，
              須出境前申請退回。
            </p>
          </PaperCard>
        </div>

        <p className="text-xs text-text-muted/80 text-center italic">
          ⚠️ 進店前先看門口貼紙，沒有 <span className="font-mono">TAX FREE</span> 標示就無法退稅
        </p>
      </section>

      {/* 資格條件 */}
      <section className="mt-10 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <ListChecks className="w-5 h-5" />
          退稅資格條件
        </h2>

        <PaperCard color="yellow" rotation={-0.6} delay={0.05}>
          <WashiTape color="blue" position="top-center" width="w-20" />
          <ul className="space-y-2.5 mt-1">
            {eligibility.map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-3 text-sm text-text-dark"
              >
                <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-20 px-2 py-0.5 rounded-full bg-accent-blue/15 text-accent-blue text-xs font-heading font-bold">
                  {item.label}
                </span>
                <span className="leading-relaxed">{item.value}</span>
              </li>
            ))}
          </ul>
        </PaperCard>
      </section>

      {/* 三種退稅方式 */}
      <section className="mt-10 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <Wallet className="w-5 h-5" />
          三種退稅方式
        </h2>

        <PaperCard color="green" rotation={-0.8} delay={0.05}>
          <WashiTape color="pink" position="top-left" width="w-16" />
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-5 h-5 text-accent-blue" />
            <h3 className="font-heading font-bold text-base text-accent-red">
              方式 1 · 現場退稅（最推薦）
            </h3>
          </div>
          <ul className="space-y-1.5 text-sm text-text-dark mt-2">
            <li>
              <span className="font-semibold">適用金額：</span>單筆 15,000 ～ 600,000 韓元
            </li>
            <li>
              <span className="font-semibold">流程：</span>結帳時主動告知店員「
              <span className="font-mono">Tax Free, please</span>」並出示護照 → 直接從帳單扣除稅額
            </li>
            <li className="text-accent-red font-semibold">
              結帳時就要說，事後無法補辦
            </li>
          </ul>
        </PaperCard>

        <PaperCard color="mint" rotation={0.8} delay={0.12}>
          <WashiTape color="yellow" position="top-right" width="w-16" />
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-5 h-5 text-accent-blue" />
            <h3 className="font-heading font-bold text-base text-accent-red">
              方式 2 · 市區櫃台退稅
            </h3>
          </div>
          <ul className="space-y-1.5 text-sm text-text-dark mt-2">
            <li>
              <span className="font-semibold">地點：</span>明洞、東大門等市區商場內的自助退稅櫃台
            </li>
            <li>
              <span className="font-semibold">所需文件：</span>商品（未拆封）、退稅單據、護照、
              <span className="text-accent-red font-semibold">信用卡</span>
            </li>
            <li className="text-text-muted">
              信用卡作為擔保 — 若未在期限內出境，會被扣回退稅金加手續費
            </li>
          </ul>
        </PaperCard>

        <PaperCard color="lavender" rotation={-0.5} delay={0.19}>
          <WashiTape color="mint" position="top-center" width="w-16" />
          <div className="flex items-center gap-2 mb-3">
            <Plane className="w-5 h-5 text-accent-blue" />
            <h3 className="font-heading font-bold text-base text-accent-red">
              方式 3 · 機場退稅（仁川 T1）
            </h3>
          </div>

          <div className="rounded-lg bg-white/70 p-3 mb-3 border-l-4 border-accent-blue/60 text-sm text-text-dark leading-relaxed">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
              <span>
                我們這趟的退稅金額{" "}
                <span className="font-semibold">應該不會超過 75,000 韓元</span>
                ，所以只要在仁川 T1 機場找
                <span className="font-semibold text-accent-red">
                  自助退稅機
                </span>
                掃描單據領現金就好，不需要走海關查驗流程。
              </span>
            </p>
          </div>

          <p className="text-sm text-text-muted leading-relaxed">
            完整仁川 T1 退稅流程、機台位置、各航廈差異請參考這篇攻略：
          </p>

          <a
            href="https://www.funliday.com/posts/incheon-airport-tax-refund/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue text-white text-sm font-heading font-bold shadow-sm hover:bg-accent-blue/90 transition-colors"
          >
            <Plane className="w-4 h-4" />
            Funliday · 仁川機場退稅攻略
          </a>
        </PaperCard>
      </section>

      {/* 金額對照表 */}
      <section className="mt-10 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <Receipt className="w-5 h-5" />
          退稅金額參考
        </h2>

        <PaperCard color="yellow" rotation={0.6} delay={0.05}>
          <WashiTape color="lavender" position="top-right" width="w-16" />
          <p className="text-xs text-text-muted mb-3">
            附加稅率 10%，扣除手續費後實際退回約 3% ～ 7%
          </p>
          <div className="overflow-hidden rounded-lg border border-bg-cream-dark">
            <table className="w-full text-sm">
              <thead className="bg-accent-blue/10 text-accent-blue">
                <tr>
                  <th className="text-left px-3 py-2 font-heading font-bold">
                    消費金額（韓元）
                  </th>
                  <th className="text-left px-3 py-2 font-heading font-bold">
                    退稅金額
                  </th>
                  <th className="text-left px-3 py-2 font-heading font-bold">
                    退稅率
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white/60">
                {refundTable.map((row) => (
                  <tr
                    key={row.range}
                    className="border-t border-bg-cream-dark/50"
                  >
                    <td className="px-3 py-2 text-text-dark">{row.range}</td>
                    <td className="px-3 py-2 text-text-dark font-semibold">
                      {row.refund}
                    </td>
                    <td className="px-3 py-2 text-accent-red font-semibold">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PaperCard>
      </section>

      {/* 注意事項 */}
      <section className="mt-10 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          重要注意事項
        </h2>

        <InfoCard
          title="出境前務必確認"
          icon={<AlertTriangle className="w-4 h-4 text-accent-orange" />}
          variant="warning"
        >
          <ul className="space-y-1.5">
            {cautions.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent-orange font-bold mt-0.5 shrink-0">
                  •
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard
          title="主要退稅公司"
          icon={<CreditCard className="w-4 h-4 text-accent-blue" />}
        >
          <p className="mb-2 leading-relaxed">
            機場可看到的退稅服務商，依退稅單上 LOGO 找對應櫃台：
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {refundCompanies.map((c) => (
              <span
                key={c}
                className="inline-flex items-center px-2.5 py-1 rounded-full bg-white text-xs font-semibold text-accent-blue border border-accent-blue/20"
              >
                {c}
              </span>
            ))}
          </div>
        </InfoCard>
      </section>

      {/* 行前提醒 */}
      <section className="mt-10 space-y-6">
        <h2 className="font-heading text-xl font-bold text-accent-blue flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          行前準備檢查清單
        </h2>

        <PaperCard color="pink" rotation={-0.8} delay={0.05}>
          <WashiTape color="blue" position="top-left" width="w-18" />
          <ul className="space-y-2 text-sm text-text-dark">
            {[
              "護照正本（結帳時必出示）",
              "信用卡（市區退稅擔保用）",
              "預留行李空間放置未拆封商品",
              "抵達機場時間提前 30 ～ 60 分鐘（高額退稅者更多）",
              "收據與退稅單據集中收納，避免遺失",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent-orange font-bold mt-0.5 shrink-0">
                  ☐
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </PaperCard>

        <p className="text-xs text-text-muted/70 text-center italic mt-2">
          資料來源：
          <a
            href="https://waysim.net/blogs/news/korea-travel-tax-refund"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-accent-blue"
          >
            waysim.net 韓國退稅指南
          </a>
        </p>
      </section>
    </div>
  );
}
