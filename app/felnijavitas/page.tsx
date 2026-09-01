import type { Metadata } from "next";
import { SzolgaltatasOldal } from "@/components/szolgaltatas-oldal";

export const metadata: Metadata = {
  title: "Felnijavítás",
  description:
    "Ütődött, deformálódott keréktárcsa javítása Isaszegen. A kisebb hibákat rövid idő alatt, a komolyabbakat általában másnapra.",
  alternates: { canonical: "/felnijavitas" },
};

export default function Oldal() {
  return (
    <SzolgaltatasOldal
      cim="Felnijavítás"
      bevezeto="Egy nagyobb kátyú, egy rosszul eltalált szegély, és a felni deformálódik. Ezt nem érdemes halogatni, mert a futóművet is elviheti."
      kep="/fotok/felni-javitas.jpg"
      kepAlt="Alufelni javítása a műhelyben"
      arak={[
        { tetel: "Kisebb deformáció", ar: "Megvárható" },
        { tetel: "Komolyabb sérülés", ar: "Általában másnap" },
        { tetel: "Ár", ar: "Hívásra" },
      ]}
      arakCime="Jó tudni"
      blokkok={[
        {
          bekezdesek: [
            "A használat során nem ritka, hogy egy felni megütődik, és ettől deformálttá válik. Az ilyen hibát érdemes minél hamarabb kijavíttatni: nemcsak a biztonságot és a vezetés kényelmét rontja, hanem a futómű károsodásához is vezethet.",
          ],
        },
        {
          cim: "Mennyi ideig tart",
          bekezdesek: [
            "A kisebb sérüléseket általában azonnal, rövid idő alatt javítjuk, így meg is várhatja, és a kész felnikkel távozhat.",
            "Komolyabb sérülés esetén viszont nálunk kell hagyni az érintett felniket. A javítás végeztével, legtöbbször másnap lehet őket elvinni.",
          ],
        },
        {
          cim: "Mire figyeljen a javítás után",
          lista: [
            "Centírozás mindenképp kell utána",
            "Ha rezeg a kormány, szóljon vissza",
            "Vizsgáljuk az abroncs peremét is",
            "Sérült tárcsára nem vállalunk gumijavítást",
          ],
        },
      ]}
      ctaCim="Ütődött felnije van?"
      ctaSzoveg="Hozza be, ránézünk, és megmondjuk, javítható-e, meg azt is, meg tudja-e várni."
    />
  );
}
