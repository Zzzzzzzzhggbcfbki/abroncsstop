import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  // Az ikoncsomag több ezer ikont exportál; enélkül a kliensoldali köteg
  // fölöslegesen nagyra hízik.
  experimental: { optimizePackageImports: ["@phosphor-icons/react"] },
};

export default nextConfig;
