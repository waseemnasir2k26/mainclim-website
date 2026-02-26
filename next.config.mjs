/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for deployment
  output: 'export',

  // Image optimization settings
  images: {
    unoptimized: true, // Required for static export
  },

  // Trailing slash for static hosting
  trailingSlash: true,

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
