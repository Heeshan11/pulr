/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // This matches the exact path
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;