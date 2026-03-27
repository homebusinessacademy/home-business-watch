import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/comp-plan/:path*',
        destination: '/compensation-plan/:path*',
        permanent: true,
      },
      {
        source: '/comp-plan',
        destination: '/compensation-plan',
        permanent: true,
      },
      // Fix misspelled comparison URL (four-life -> 4life)
      {
        source: '/compare/four-life-research-vs-home-business-academy',
        destination: '/compare/4life-research-vs-home-business-academy',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
