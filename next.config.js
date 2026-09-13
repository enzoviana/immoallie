/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Ignore les erreurs ESLint (comme les apostrophes non échappées) pendant le build Vercel
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig