import type { NextConfig } from "next";

// GitHub Pages serves this repo at /<repo-name>/ unless a custom domain is set.
// The deploy workflow passes the right base path in; local dev uses none.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
