import type { Metadata } from "next";
import { Fredoka, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "首爾旅遊手帳 ✈ Seoul 2026",
  description:
    "2026/04/24～04/28 韓國首爾家族旅行超級旅遊手冊 — 航班、住宿、行程、行前準備一次搞定！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${fredoka.variable} ${notoSansTC.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
