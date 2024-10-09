// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: '/JamTasticMiniApp',
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;
  