/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // This enables static HTML export
  distDir: "out", // Explicitly set the output directory
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
