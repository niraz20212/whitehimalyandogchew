import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: "/products/Small",
        destination: "/products/small-churpi-dog-chew",
        permanent: true,
      },
      {
        source: "/products/waffles",
        destination: "/products/medium-yak-milk-dog-chew",
        permanent: true,
      },
      {
        source: "/products/small-yak-chew",
        destination: "/products/large-churpi-dog-chew",
        permanent: true,
      },
      {
        source: "/products/medium-yak-chew",
        destination: "/products/xl-churpi-dog-chew",
        permanent: true,
      },
      {
        source: "/products/large-yak-chew",
        destination: "/products/xxl-churpi-dog-chew",
        permanent: true,
      },
      {
        source: "/products/extra-large-yak-chew",
        destination: "/products/big-dog-churpi-chew",
        permanent: true,
      },
      {
        source: "/products/xxl-yak-chew",
        destination: "/products/yak-cheese-puff-dog-treat",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
