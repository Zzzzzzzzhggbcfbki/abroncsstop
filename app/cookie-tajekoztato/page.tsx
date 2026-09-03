import type { Metadata } from "next";
import { JogiOldal } from "@/components/jogi-oldal";
import { sutik, uzemelteto } from "@/lib/jogi";

export const metadata: Metadata = {
  title: "Cookie tájékoztató",
  description:
    "Milyen sütiket és tárolt adatokat használ a gumisisaszeg.hu, és hogyan vonhatja vissza a hozzájárulását.",
  alternates: { canonical: "/cookie-tajekoztato" },
};

export default function Oldal() {
  return (
    <JogiOldal
      cim="Cookie tájékoztató"
      bevezeto="Ez az oldal a lehető legkevesebb adatot tárolja a böngészőjében. Nincs rajta hirdetési vagy analitikai követés."
      frissitve="2026. szeptember 1."
      blokkok={[
        {
          cim: "Mit tárolunk",
          bekezdesek: [
            "A weboldal működéséhez nem használunk analitikai, marketing- vagy profilalkotási sütiket. Nincs beépítve Google Analytics, Facebook Pixel vagy hasonló mérőkód.",
            "Egyetlen bejegyzést tárolunk a böngészője helyi tárolójában, azt is csak azért, hogy megjegyezze a beágyazott térképre vonatkozó döntését. Ez az adat nem hagyja el az Ön eszközét.",
          ],
        },
        ...sutik.map((s) => ({
          cim: s.nev,
          adatok: [
            ["Típus", s.tipus],
            ["Cél", s.cel],
            ["Időtartam", s.idotartam],
            ["Tárolás módja", s.tarolas],
          ] as [string, string][],
        })),
        {
          cim: "A beágyazott térkép",
          bekezdesek: [
            "A kapcsolat oldalon a műhely helyét interaktív Google-térkép mutatja. Ez a beágyazás a Google szervereihez csatlakozik, és a Google saját sütiket helyezhet el az eszközén, ezért csak akkor töltjük be, ha Ön ehhez külön hozzájárul.",
            "Ha nem járul hozzá, a térkép helyén a cím és egy külső hivatkozás jelenik meg, amely a Google Maps oldalán nyílik meg. Így a szolgáltatás használható marad hozzájárulás nélkül is.",
            "A Google adatkezeléséről a Google saját adatvédelmi tájékoztatójában olvashat.",
          ],
        },
        {
          cim: "Hogyan vonhatja vissza a hozzájárulását",
          bekezdesek: [
            "A döntését bármikor megváltoztathatja: a lábléc „Süti beállítások” hivatkozására kattintva a sáv újra megjelenik, és újra dönthet.",
            "Emellett a böngészője beállításaiban is bármikor törölheti a tárolt adatokat és a sütiket. Ezt minden elterjedt böngésző lehetővé teszi a beállítások adatvédelmi részében.",
          ],
        },
        {
          cim: "Kérdése van",
          bekezdesek: [
            `Ha bármi kérdése van a tárolt adatokkal kapcsolatban, írjon a ${uzemelteto.email} címre, vagy hívjon a ${uzemelteto.telefon} számon.`,
          ],
        },
      ]}
    />
  );
}
