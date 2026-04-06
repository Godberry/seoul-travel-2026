import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // 針對 GitHub Pages 部署，設定子路徑
  basePath: "/seoul-travel-2026",
  assetPrefix: "/seoul-travel-2026/",
};

export default nextConfig;
