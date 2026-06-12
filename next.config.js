/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'angeloreis.dev.br',
      },
      {
        protocol: 'https',
        hostname: 'media.graphassets.com', 
      },
      {
        protocol: 'https',
        hostname: 'sa-east-1.graphassets.com', 
      }
    ],
  },
}

module.exports = nextConfig;