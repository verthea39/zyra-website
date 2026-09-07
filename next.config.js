/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'zyrabusinesshub.com',
          },
        ],
        destination: 'https://www.zyrabusinesshub.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
