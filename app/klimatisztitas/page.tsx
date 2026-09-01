import type { Metadata } from "next";
import { SzolgaltatasOldal } from "@/components/szolgaltatas-oldal";

export const metadata: Metadata = {
  title: "Klímatisztítás ózonnal",
  description:
    "Ózonos autóklíma- és utastér-fertőtlenítés Isaszegen. A klímarendszer megbontása nélkül, vegyszer nélkül, 40 és 60 perc között.",
  alternates: { canonical: "/klimatisztitas" },
};

export default function Oldal() {
  return (
    <SzolgaltatasOldal
      cim="Klímatisztítás ózonnal"
      bevezeto="A karbantartatlan autóklíma valódi veszélyforrás. Ózonnal a rendszer megbontása nélkül tisztítjuk, és nem marad utána vegyszer az utastérben."
      kep="/fotok/klima-ozon.jpg"
      kepAlt="Ózongenerátor az utasülésen, nyitott ajtóknál"
      arak={[
        { tetel: "Kezelési idő", ar: "40–60 perc" },
        { tetel: "Beülhet", ar: "20 perccel utána" },
        { tetel: "M csomagban", ar: "10 000 Ft-tól" },
      ]}
      arakCime="Jó tudni"
      blokkok={[
        {
          cim: "Négy dolog egy kezeléssel",
          bekezdesek: [
            "Az ózonos kezelés nem csak a klíma radiátorának vegyszeres fertőtlenítése. A jármű klímarendszerének megbontása nélkül, ózongázzal semlegesítjük a teljes klíma- és szellőzőrendszerben megtapadt vírusokat és baktériumokat, meg a radiátoron kialakult penész- és gombatelepeket.",
            "Az ózon nemcsak ezekkel lép kölcsönhatásba, hanem minden szagot okozó részecskével is, ami a padlón, az ülésekben és az üléskárpitban telepedett meg az évek alatt. A nem kívánt utasok, bogarak és pókok sem menekülnek előle.",
          ],
          lista: ["Pollenek", "Legionella baktérium", "Bacilusok és baktériumok", "Szagok és penész"],
        },
        {
          cim: "Miért az ózon",
          bekezdesek: [
            "Az ózon (O3) három oxigénatomot tartalmaz, míg a belélegzett levegő kettőt. Amikor a nagyon reaktív ózonmolekula baktériummal, vírussal vagy szagot okozó részecskével találkozik, oxidáció történik: a káros részecske elpusztul, az ózon pedig oxigénné alakul vissza. A kezelés után nem marad más, csak friss levegő.",
            "A gáz egyenletesen eloszlik, és bejut a legkisebb résekbe is, ezért nem kell szétszerelni a klímarendszert vagy leszedni a burkolatokat. Vegyszert és adalékanyagot nem használunk hozzá.",
          ],
        },
        {
          cim: "Meddig tart, és mikor ülhet be",
          bekezdesek: [
            "A teljes folyamat az előkészülettel és a szellőztetéssel együtt 40 és 60 perc között van. A kezelés alatt senki nem tartózkodhat a járműben, és a növényeket is érdemes kivenni belőle.",
            "Az ózon rövid életű: körülbelül 30 perc alatt nagy része visszaalakul oxigénné. A kezelés után 20 perccel már nyugodtan beülhet.",
          ],
        },
      ]}
      ctaCim="Kellemetlen szag van a szellőzésben?"
      ctaSzoveg="A nyári fertőzési tünetek nagy része a karbantartatlan klímából jön. Hívjon, és beírjuk egy kezelésre."
    />
  );
}
