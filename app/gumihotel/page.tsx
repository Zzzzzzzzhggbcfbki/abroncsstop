import type { Metadata } from "next";
import { SzolgaltatasOldal } from "@/components/szolgaltatas-oldal";
import { gumihotelArak } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gumihotel",
  description:
    "Gumihotel szolgáltatás Isaszegen. A tárolás díja 1 500 Ft darabonként szezononként, garnitúránként 6 000 Ft. Korszerű riasztórendszer és vonuló biztonsági szolgálat védi.",
  alternates: { canonical: "/gumihotel" },
};

export default function Oldal() {
  return (
    <SzolgaltatasOldal
      cim="Gumihotel"
      bevezeto="Kerekeit nincs hol tárolnia? Vagy csak meg akarja magát kímélni az ezzel járó kellemetlenségektől? Hozza hozzánk."
      kep="/fotok/gumihotel-polc.jpg"
      kepAlt="Gumiabroncsok és keréktárcsák a gumihotel állványain"
      arak={[...gumihotelArak]}
      arakCime="A tárolás díja, szezononként"
      blokkok={[
        {
          bekezdesek: [
            "Üzletünkben lehetősége van arra, hogy keréktárcsáit, gumiabroncsait tárolja. Nyáron téli gumi, télen nyári gumi garnitúráját nem kell hazavinnie. Mi tároljuk.",
            "Önnek csak telefonálnia kell, ha esedékes a gumicsere. Mire megérkezik szervizünkbe, addigra előkészítjük, ezzel is lecsökkentve az esetleges várakozás idejét. Fizetnie csak utólag, a tárolás végén kell.",
          ],
        },
        {
          cim: "Hogyan tároljuk",
          bekezdesek: [
            "A nálunk tárolt kerekeit vagy abroncsait korszerű riasztórendszer és vonuló biztonsági szolgálat védi.",
          ],
        },
      ]}
    />
  );
}
