/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Force rebuild for logo deployment
  generateBuildId: async () => {
    return 'logo-fix-' + Date.now()
  },
};

export default nextConfig;
