/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["m.media-amazon.com", "images-na.ssl-images-amazon.com"],
  },
};

module.exports = nextConfig;
