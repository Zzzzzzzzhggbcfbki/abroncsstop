import type { Metadata } from "next";
import { SzolgaltatasOldal } from "@/components/szolgaltatas-oldal";
import { fenyszoro } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fényszóró felújítás",
  description:
    "Megsárgult, karcos fényszóróbúra polírozása Isaszegen. Visszahozzuk az átlátszóságot, hogy este megint annyit lásson, amennyit kellene.",
  alternates: { canonical: "/fenyszoro-felujitas" },
};

export default function Oldal() {
  return (
    <SzolgaltatasOldal
      cim="Fényszóró felújítás"
      bevezeto="A búra idővel megsárgul, bepárásodik, tele lesz apró karcokkal. Ettől nemcsak öregnek látszik az autó, de kevesebb fény is jut ki belőle az útra."
      kep="/fotok/fenyszoro-01.jpg"
      kepAlt="Felújított fényszóró egy Volkswagen Golfon"
      galeria={[...fenyszoro.kepek.slice(1)]}
      arak={[
        { tetel: "Átfutás", ar: "Általában megvárható" },
        { tetel: "Mindkét oldal", ar: "Egy alkalommal" },
        { tetel: "Ár", ar: "Hívásra" },
      ]}
      arakCime="Jó tudni"
      blokkok={[
        {
          bekezdesek: [
            "A gyári búra műanyagból van, és a felszínén lévő védőréteg a napfénytől, a sótól meg a felcsapódó kavicstól idővel tönkremegy. Ez a sárgás, tejszerű felület nem tisztítható le mosással, mert nem szennyeződés: maga az anyag ment tönkre.",
            "Polírozással lehordjuk a károsodott réteget, majd újra lezárjuk a felületet. A búra visszanyeri az átlátszóságát, és a lámpa megint a megfelelő helyre világít.",
          ],
        },
        {
          cim: "Mikor érdemes megcsináltatni",
          lista: [
            "Ha sárgás vagy tejszerű a búra",
            "Ha este kevesebbet lát, mint régen",
            "Műszaki vizsga előtt",
            "Autó eladása előtt",
          ],
        },
        {
          cim: "A képeken a saját munkánk",
          bekezdesek: [
            "Nem katalógusfotók: a lenti képek a műhelyünkben készültek, felújítás után. Ha kíváncsi rá, milyen lenne a saját autóján, hozza be, és megnézzük együtt.",
          ],
        },
      ]}
      ctaCim="Megsárgult a fényszórója?"
      ctaSzoveg="Egy telefon, és megmondjuk, mikor tud jönni. A legtöbb esetben meg tudja várni a munkát."
    />
  );
}
