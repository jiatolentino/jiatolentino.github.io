import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jiatolentino.github.io/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/jiatolentino.github.io' : '',
};

export default nextConfig;