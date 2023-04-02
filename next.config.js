/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["rickandmortyapi.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
