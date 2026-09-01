import type { Metadata } from "next";
import { JogiOldal } from "@/components/jogi-oldal";
import { uzemelteto } from "@/lib/jogi";

export const metadata: Metadata = {
  title: "Adatkezelési tájékoztató",
  description:
    "Az Abroncs Stop Bt. adatkezelési tájékoztatója: milyen adatokat kezelünk, milyen célból, meddig, és milyen jogai vannak.",
  alternates: { canonical: "/adatkezelesi-tajekoztato" },
};

export default function Oldal() {
  return (
    <JogiOldal
      cim="Adatkezelési tájékoztató"
      bevezeto="Ez a tájékoztató azt írja le, hogy az Abroncs Stop Bt. milyen személyes adatokat kezel a weboldal működtetése és a szolgáltatásai nyújtása során."
      frissitve="2026. szeptember 1."
      blokkok={[
        {
          cim: "Az adatkezelő",
          adatok: [
            ["Név", uzemelteto.nev],
            ["Székhely", uzemelteto.szekhely],
            ["Képviselő", uzemelteto.kepviselo],
            ["Cégjegyzékszám", uzemelteto.cegjegyzekszam],
            ["Adószám", uzemelteto.adoszam],
            ["Telefon", uzemelteto.telefon],
            ["E-mail", uzemelteto.email],
          ],
        },
        {
          cim: "A weboldal használata",
          bekezdesek: [
            "A weboldal nem tartalmaz űrlapot, regisztrációt vagy hírlevél-feliratkozást, ezért a böngészés önmagában nem jár személyes adat megadásával.",
            "A weboldal nem használ analitikai, marketing- vagy profilalkotási sütiket. A böngészőben tárolt egyetlen bejegyzés a beágyazott térképre vonatkozó döntését jegyzi meg, és nem hagyja el az Ön eszközét. Erről részletesen a cookie tájékoztatóban olvashat.",
            "A tárhelyszolgáltató a weboldal működtetése során technikai naplóállományokat kezelhet, amelyek IP-címet is tartalmazhatnak. Ezek célja a szolgáltatás biztonságos üzemeltetése, jogalapja az adatkezelő jogos érdeke.",
          ],
        },
        {
          cim: "Kapcsolatfelvétel telefonon és e-mailben",
          bekezdesek: [
            "Ha telefonon vagy e-mailben keres minket, a megkeresés során megadott adatait (jellemzően a nevét, telefonszámát, e-mail-címét és a járművére vonatkozó adatokat) a megkeresés megválaszolása és az esetleges időpont-egyeztetés céljából kezeljük.",
            "Az adatkezelés jogalapja az Ön hozzájárulása, illetve a szerződés megkötését megelőző lépések megtétele. Ezeket az adatokat a megkeresés lezárását követően legfeljebb egy évig őrizzük meg, kivéve ha megbízás jött létre.",
          ],
        },
        {
          cim: "A szolgáltatás igénybevétele",
          bekezdesek: [
            "Ha megbízást ad valamely szolgáltatásunkra, a szerződés teljesítéséhez és a számla kiállításához szükséges adatait kezeljük. Ide tartozik a neve, elérhetősége, számlázási címe, valamint a járműre és az elvégzett munkára vonatkozó adatok.",
            "Az adatkezelés jogalapja a szerződés teljesítése, a számviteli bizonylatok tekintetében pedig jogi kötelezettség teljesítése. A számviteli bizonylatokat a számvitelről szóló 2000. évi C. törvény 169. paragrafusa alapján a kiállítástól számított nyolc évig őrizzük meg.",
            "A gumihotel szolgáltatás esetén a tárolt kerekek azonosításához szükséges adatokat a tárolási időszak végéig, illetve a kerekek elviteléig kezeljük.",
          ],
        },
        {
          cim: "Adatfeldolgozók és címzettek",
          bekezdesek: [
            "Személyes adatait nem adjuk el és nem továbbítjuk harmadik országba. Adatfeldolgozóként a tárhelyszolgáltató, valamint a könyvelést végző szolgáltató járhat el, kizárólag a feladatuk ellátásához szükséges mértékben. Hatóság megkeresésére a jogszabályban előírt adatszolgáltatást teljesítjük.",
            "Ha Ön a kapcsolat oldalon hozzájárul a beágyazott térkép betöltéséhez, a böngészője közvetlenül kapcsolatba lép a Google szervereivel, és a Google saját adatkezelése érvényesül.",
          ],
        },
        {
          cim: "Az Ön jogai",
          bekezdesek: [
            "Az általános adatvédelmi rendelet alapján Ön az alábbi jogokkal élhet. Kérését a fenti elérhetőségeken jelezheti, és arra legkésőbb egy hónapon belül válaszolunk.",
          ],
          lista: [
            "Tájékoztatást kérhet arról, hogy kezelünk-e Önről adatot, és ha igen, milyet",
            "Kérheti a pontatlan adat helyesbítését",
            "Kérheti az adatai törlését, ha annak feltételei fennállnak",
            "Kérheti az adatkezelés korlátozását",
            "Tiltakozhat a jogos érdeken alapuló adatkezelés ellen",
            "Hozzájáruláson alapuló adatkezelés esetén a hozzájárulását bármikor visszavonhatja",
          ],
        },
        {
          cim: "Jogorvoslat",
          bekezdesek: [
            "Ha úgy érzi, hogy az adatkezeléssel kapcsolatos jogai sérültek, kérjük, először minket keressen meg, hogy a kérdést gyorsan rendezhessük.",
            "Panaszával a Nemzeti Adatvédelmi és Információszabadság Hatósághoz is fordulhat (1055 Budapest, Falk Miksa utca 9-11., telefon: +36 1 391 1400, e-mail: ugyfelszolgalat@naih.hu), illetve bírósághoz fordulhat.",
          ],
        },
        {
          cim: "A tájékoztató módosítása",
          bekezdesek: [
            "Fenntartjuk a jogot, hogy ezt a tájékoztatót módosítsuk. A mindenkor hatályos szöveg ezen az oldalon érhető el, a hatálybalépés dátumával együtt.",
          ],
        },
      ]}
    />
  );
}
