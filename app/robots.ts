import type { MetadataRoute } from "next";
import { OLDAL_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${OLDAL_URL}/sitemap.xml`,
  };
}
