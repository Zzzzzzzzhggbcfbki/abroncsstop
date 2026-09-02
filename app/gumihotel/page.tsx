import type { Metadata } from "next";
import { SzolgaltatasOldal } from "@/components/szolgaltatas-oldal";

export const metadata: Metadata = {
  title: "Gumihotel",
  description:
    "Gumihotel szolgáltatás Isaszegen. Nyáron a télit, télen a nyárit nálunk hagyhatja. Korszerű riasztórendszer és vonuló biztonsági szolgálat védi. Hívjon: +36 30 621 1195.",
  alternates: { canonical: "/gumihotel" },
};

export default function Oldal() {
  return (
    <SzolgaltatasOldal
      cim="Gumihotel"
      bevezeto="Kerekeit nincs hol tárolnia? Vagy csak meg akarja magát kímélni az ezzel járó kellemetlenségektől? Hozza hozzánk."
      kep="/fotok/gumihotel-polc.jpg"
      kepAlt="Gumiabroncsok és keréktárcsák a gumihotel állványain"
      arak={[
        { tetel: "Fizetés", ar: "A tárolás végén" },
        { tetel: "Védelem", ar: "Riasztó és őrszolgálat" },
        { tetel: "Díjszabás", ar: "Hívásra" },
      ]}
      arakCime="Jó tudni"
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
