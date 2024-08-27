// next.config.mjs
import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/wait-management-ui/',
  basePath: '/wait-management-ui',
  // 他の設定があればここに追加
};

export default withPWA(nextConfig, {
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});