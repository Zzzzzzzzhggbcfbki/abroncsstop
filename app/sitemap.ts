import type { MetadataRoute } from "next";

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
    url: `https://abroncsstop.hu/${u}`,
    changeFrequency: "monthly",
    priority: u === "" ? 1 : 0.7,
  }));
}
