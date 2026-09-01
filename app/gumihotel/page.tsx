import type { Metadata } from "next";
import { SzolgaltatasOldal } from "@/components/szolgaltatas-oldal";

export const metadata: Metadata = {
  title: "Gumihotel",
  description:
    "Szezonális gumitárolás Isaszegen. 1 500 Ft kerekenként, 6 000 Ft garnitúránként szezononként, riasztóval védett raktárban.",
  alternates: { canonical: "/gumihotel" },
};

export default function Oldal() {
  return (
    <SzolgaltatasOldal
      cim="Gumihotel"
      bevezeto="Nincs hol tárolnia a kerekeit, vagy egyszerűen nem akar vele bajlódni? Hozza be, mi eltesszük, és a csere előtt előkészítjük."
      kep="/fotok/gumihotel-polc.jpg"
      kepAlt="Gumiabroncsok és keréktárcsák a gumihotel állványain"
      arak={[
        { tetel: "1 kerék vagy abroncs", ar: "1 500 Ft" },
        { tetel: "Garnitúra, 4 db", ar: "6 000 Ft" },
      ]}
      arakCime="Tárolás, szezononként"
      blokkok={[
        {
          bekezdesek: [
            "Nyáron a téli, télen a nyári garnitúrát nem kell hazavinnie. Nálunk marad, a helyén, tisztán. Önnek csak telefonálnia kell, ha esedékes a csere.",
            "Mire ideér a szervizbe, addigra előkészítjük a kerekeket, ezzel is lecsökkentve a várakozást. Fizetni pedig utólag, a tárolás végén kell.",
          ],
        },
        {
          cim: "Hogyan tároljuk",
          lista: [
            "Fedett, erre kialakított raktárban",
            "Korszerű riasztórendszer alatt",
            "Vonuló biztonsági szolgálat védi",
            "Keréktárcsával együtt vagy abroncsként",
          ],
        },
        {
          cim: "Mennyibe kerül",
          bekezdesek: [
            "A tárolás díja kerekenként 1 500 Ft szezononként, teljes garnitúrára, tehát négy darabra 6 000 Ft. Ha a csomagajánlatunk XL változatát választja, két szezon tárolás benne van az árban.",
          ],
        },
      ]}
      ctaCim="Lefoglalna helyet a garnitúrájának?"
      ctaSzoveg="Szezon elején hamar betelik a raktár, ezért érdemes előre szólni. Egy telefon elég."
    />
  );
}
