import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // 如果您的 GitHub 專案網址有子路徑 (如 https://username.github.io/repo-name/)
  // 請取消下方的註解，並將 'repo-name' 替換成您的存放庫名稱
  // basePath: "/repo-name",
  // assetPrefix: "/repo-name/",
};

export default nextConfig;
