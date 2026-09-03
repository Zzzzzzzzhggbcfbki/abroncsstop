import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  // Az ikoncsomag több ezer ikont exportál; enélkül a kliensoldali köteg
  // fölöslegesen nagyra hízik.
  experimental: { optimizePackageImports: ["@phosphor-icons/react"] },
  // A vercel.app cím ugyanazt a tartalmat szolgálja ki, mint az éles domain.
  // A canonical link már a gumisisaszeg.hu-ra mutat, de a noindex fejléc
  // biztosabb: így a Google el sem kezdi indexelni a másolatot.
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "abroncsstop.vercel.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
