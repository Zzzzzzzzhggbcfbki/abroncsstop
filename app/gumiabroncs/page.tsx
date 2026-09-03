import type { Metadata } from "next";
import { SzolgaltatasOldal } from "@/components/szolgaltatas-oldal";

export const metadata: Metadata = {
  title: "Gumiabroncs értékesítés",
  description:
    "Gumiabroncs vásárlás Isaszegen. Mondja el, milyen autóhoz és melyik évszakra keres abroncsot, a megvásárolt gumit rögtön fel is szereljük. Hívjon: +36 30 621 1195.",
  alternates: { canonical: "/gumiabroncs" },
};

export default function Oldal() {
  return (
    <SzolgaltatasOldal
      cim="Gumiabroncs értékesítés"
      bevezeto="Az abroncsot nálunk meg is vásárolhatja, nem kell máshonnan hoznia."
      kep="/fotok/hero-gumiszereles.jpg"
      kepAlt="Szerelő gumiabroncsot emel a szerelőgépre a műhelyben"
      arak={[
        { tetel: "Felszerelés", ar: "Helyben, vásárlás után" },
        { tetel: "Méretek és árak", ar: "Hívásra" },
      ]}
      arakCime="Jó tudni"
      blokkok={[
        {
          bekezdesek: [
            "Mondja el, milyen autóhoz és melyik évszakra keres gumiabroncsot, a többit bízza ránk.",
            "A megvásárolt abroncsot rögtön fel is szereljük, így a csere egy helyen, egy alkalommal elintéződik. Nem kell külön boltba mennie, majd időpontot kérnie a szereléshez.",
          ],
        },
        {
          cim: "Amit érdemes tudni",
          bekezdesek: [
            "Az elérhető méretekről és az árakról telefonon tájékoztatjuk. Hívjon minket, és megbeszéljük, mi illik az autójához.",
          ],
        },
      ]}
    />
  );
}
