/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV === 'production');
const nextConfig = {
  basePath: isProd ? '/fm-qr-code-component' : '',
  assetPrefix: isProd ? '/fm-qr-code-component/' : '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
