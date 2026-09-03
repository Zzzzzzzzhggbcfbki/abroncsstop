import type { Metadata } from "next";
import { JogiOldal } from "@/components/jogi-oldal";
import { uzemelteto } from "@/lib/jogi";

export const metadata: Metadata = {
  title: "Általános szerződési feltételek",
  description:
    "Az Abroncs Stop Bt. gumiszerviz szolgáltatásainak általános szerződési feltételei.",
  alternates: { canonical: "/aszf" },
};

export default function Oldal() {
  return (
    <JogiOldal
      cim="Általános szerződési feltételek"
      bevezeto="Ezek a feltételek az Abroncs Stop Bt. által a telephelyén nyújtott szolgáltatásokra vonatkoznak. A weboldalon keresztül nem lehet megrendelést leadni és nem lehet fizetni."
      frissitve="2026. szeptember 1."
      blokkok={[
        {
          cim: "A szolgáltató",
          adatok: [
            ["Cégnév", uzemelteto.nev],
            ["Székhely és telephely", uzemelteto.szekhely],
            ["Képviselő", uzemelteto.kepviselo],
            ["Cégjegyzékszám", uzemelteto.cegjegyzekszam],
            ["Adószám", uzemelteto.adoszam],
            ["Telefon", uzemelteto.telefon],
            ["E-mail", uzemelteto.email],
          ],
        },
        {
          cim: "A szerződés létrejötte",
          bekezdesek: [
            "A weboldal tájékoztatásra szolgál, rajta keresztül szerződés nem jön létre. A szerződés a telephelyen, a munka megrendelésekor jön létre szóban, a megrendelő és a szolgáltató között.",
            "A weboldalon feltüntetett árak és leírások tájékoztató jellegűek. A konkrét munkára vonatkozó ajánlatot a jármű megtekintése után adjuk meg.",
          ],
        },
        {
          cim: "A szolgáltatások köre",
          lista: [
            "TPMS rendszerrel szerelt járművek szervizelése",
            "Gumihotel, szezonális gumi- és keréktárolás",
            "Klímatisztítás ózonnal, utastér-fertőtlenítés",
            "Felnijavítás",
          ],
        },
        {
          cim: "Árak és fizetés",
          bekezdesek: [
            "A weboldalon feltüntetett árak forintban értendők. A fizetés a munka elvégzése után, a telephelyen történik. A gumihotel szolgáltatás díját a tárolás végén kell megfizetni.",
          ],
        },
        {
          cim: "Gumihotel",
          bekezdesek: [
            "A tárolás díjáról a szolgáltató telefonon vagy a telephelyen ad tájékoztatást, a megrendelést megelőzően. A díjat a tárolás végén kell megfizetni.",
            "A tárolt kerekek átvételéről és kiadásáról a szolgáltató nyilvántartást vezet. A kerekek kiadására a megrendelő vagy az általa megjelölt személy jogosult. A tárolt kerekeket riasztórendszer és vonuló járőrszolgálat védi.",
            "A tárolási időszak lejárta után a megrendelő köteles a kerekeket elszállítani. A szolgáltató a lejárat után a további tárolásért díjat számíthat fel.",
          ],
        },
        {
          cim: "A megrendelő kötelezettségei",
          lista: [
            "A járműre és annak korábbi javításaira vonatkozó lényeges információk megadása",
            "A megrendelt munka átvétele és a díj megfizetése",
            "Az elkészült munka, illetve a tárolt kerekek határidőben történő elszállítása",
          ],
        },
        {
          cim: "Szavatosság és felelősség",
          bekezdesek: [
            "A szolgáltató az elvégzett munkáért a Polgári Törvénykönyv szerinti kellékszavatossággal tartozik. Fogyasztói szerződés esetén a fogyasztót a jogszabályban meghatározott szavatossági és jótállási jogok illetik meg.",
            "A szolgáltató nem vállal felelősséget olyan hibáért, amely a jármű vagy az alkatrész korábbi állapotából, elhasználódásából, illetve a megrendelő által megadott hiányos vagy téves információból ered.",
            "A szolgáltató jogosult a javítást megtagadni, ha az szakmailag nem végezhető el biztonságosan. Ilyen eset a javíthatatlan abroncssérülés, valamint a sérült vagy oxidálódott keréktárcsa.",
          ],
        },
        {
          cim: "Panaszkezelés",
          bekezdesek: [
            `Panaszát személyesen a telephelyen, telefonon a ${uzemelteto.telefon} számon, vagy e-mailben a ${uzemelteto.email} címen jelentheti be. A panaszt megvizsgáljuk, és arra a jogszabályban előírt határidőn belül válaszolunk.`,
            "Fogyasztóként a lakóhelye vagy tartózkodási helye szerint illetékes békéltető testülethez is fordulhat. Az Abroncs Stop Bt. székhelye szerint illetékes a Pest Vármegyei Békéltető Testület (1055 Budapest, Balassi Bálint utca 25. IV/2.).",
            "Fogyasztóvédelmi eljárást a lakóhelye szerint illetékes fővárosi vagy vármegyei kormányhivatalnál kezdeményezhet.",
          ],
        },
        {
          cim: "Egyéb rendelkezések",
          bekezdesek: [
            "A jelen feltételekben nem szabályozott kérdésekben a magyar jog, különösen a Polgári Törvénykönyvről szóló 2013. évi V. törvény és a fogyasztóvédelemről szóló 1997. évi CLV. törvény rendelkezései irányadók.",
            "A szolgáltató fenntartja a jogot a feltételek módosítására. A mindenkor hatályos szöveg ezen az oldalon érhető el, a hatálybalépés dátumával együtt.",
          ],
        },
      ]}
    />
  );
}
