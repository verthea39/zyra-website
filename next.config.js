/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.zyrabusinesshub.com',
          },
        ],
        destination: 'https://zyrabusinesshub.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
