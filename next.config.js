/** @type {import('next').NextConfig} */
const nextConfig = {}

/**module.exports = nextConfig*/

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://whois.freeaiapi.xyz/:path*',
      },
    ];
  },
};
