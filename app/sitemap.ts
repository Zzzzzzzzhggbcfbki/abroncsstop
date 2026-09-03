import type { MetadataRoute } from "next";
import { OLDAL_URL } from "@/lib/site";

const utvonalak = [
  "",
  "tpms",
  "gumiabroncs",
  "gumihotel",
  "klimatisztitas",
  "felnijavitas",
  "jo-tudni",
  "kapcsolat",
  "impresszum",
  "adatkezelesi-tajekoztato",
  "cookie-tajekoztato",
  "aszf",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return utvonalak.map((u) => ({
    url: `${OLDAL_URL}/${u}`,
    changeFrequency: "monthly",
    priority: u === "" ? 1 : 0.7,
  }));
}
