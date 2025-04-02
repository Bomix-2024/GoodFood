/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'localhost',
          'flagdownload.com',
        ],
      },

      
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
