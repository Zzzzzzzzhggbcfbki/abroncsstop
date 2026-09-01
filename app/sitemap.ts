import type { MetadataRoute } from "next";

const utvonalak = [
  "",
  "gumiszereles",
  "defektjavitas",
  "tpms",
  "gumihotel",
  "klimatisztitas",
  "felnijavitas",
  "fenyszoro-felujitas",
  "csomagajanlat",
  "jo-tudni",
  "kapcsolat",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return utvonalak.map((u) => ({
    url: `https://abroncsstop.hu/${u}`,
    changeFrequency: "monthly",
    priority: u === "" ? 1 : 0.7,
  }));
}
