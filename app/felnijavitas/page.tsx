import type { Metadata } from "next";
import { SzolgaltatasOldal } from "@/components/szolgaltatas-oldal";

export const metadata: Metadata = {
  title: "Felnijavítás",
  description:
    "Deformálódott felni javítása Isaszegen. A kisebb sérüléseket általában azonnal javítjuk, a komolyabbakat legtöbbször másnapra.",
  alternates: { canonical: "/felnijavitas" },
};

export default function Oldal() {
  return (
    <SzolgaltatasOldal
      cim="Felni javítása"
      bevezeto="A használat során nem ritka, hogy egy felni megütődik, és ennek okán deformálttá válik."
      kep="/fotok/felni-javitas.jpg"
      kepAlt="Alufelni a javítógépbe fogva"
      arak={[
        { tetel: "Kisebb sérülés", ar: "Azonnal, rövid idő alatt" },
        { tetel: "Komolyabb sérülés", ar: "Legtöbbször másnap" },
      ]}
      arakCime="Mennyi idő"
      blokkok={[
        {
          bekezdesek: [
            "Az ilyen hibát érdemes minél hamarabb kijavítani, mert nem csak a biztonságot és a vezetés kényelmét csökkenti, hanem a futómű károsodásához is vezethet.",
          ],
        },
        {
          cim: "Mennyi ideig tart",
          bekezdesek: [
            "A kisebb sérüléseket általában azonnal javítjuk rövid idő alatt, így ügyfeleink meg is várhatják a javítást, és a kész felnikkel távozhatnak.",
            "Komolyabb sérülések esetén viszont nálunk kell hagyni az érintett felniket, és a javítás végeztével, legtöbbször másnap lehet őket elvinni.",
          ],
        },
      ]}
    />
  );
}
