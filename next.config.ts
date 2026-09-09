import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required by the OpenNext Cloudflare adapter
  output: "standalone",

  images: {
    // Team portraits are SVG placeholders until real photos are added.
    dangerouslyAllowSVG: true,
  },

};

export default nextConfig;

import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());