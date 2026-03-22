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
    ];
  },
};

export default nextConfig;
