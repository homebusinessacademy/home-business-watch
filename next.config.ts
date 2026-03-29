import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Force www canonical (non-www → www)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'homebusinesswatch.com' }],
        destination: 'https://www.homebusinesswatch.com/:path*',
        permanent: true,
      },
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
