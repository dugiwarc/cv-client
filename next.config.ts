import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // This enables static HTML export
  distDir: "out",
};

export default nextConfig;
