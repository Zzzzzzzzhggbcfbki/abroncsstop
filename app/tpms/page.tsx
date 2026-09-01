import type { Metadata } from "next";
import { SzolgaltatasOldal } from "@/components/szolgaltatas-oldal";

export const metadata: Metadata = {
  title: "TPMS",
  description:
    "Műhelyünkben a TPMS vagy RDKS rendszerű defektvisszajelzővel ellátott autók is könnyedén szervizelhetőek. TPMS diagnosztika Isaszegen.",
  alternates: { canonical: "/tpms" },
};

export default function Oldal() {
  return (
    <SzolgaltatasOldal
      cim="TPMS"
      bevezeto="Műhelyünkben a TPMS vagy RDKS rendszerű defektvisszajelzővel ellátott autók is könnyedén szervizelhetőek."
      kep="/fotok/tpms-szenzor.jpg"
      kepAlt="TPMS szenzor közelről, a keréktárcsa peremére szerelve"
      blokkok={[
        {
          bekezdesek: [
            "Az elmúlt években egyre inkább elterjedtek, de az Európai Unió ECE R 64-es rendelete nyomán 2014. november 1-jétől minden, az Unióban újonnan forgalomba helyezett gépjárműnek rendelkeznie kell ezzel a biztonsági rendszerrel.",
            "A guminyomás ellenőrző rendszereknek két típusa létezik, az indirekt és a direkt. Kezdetben főként az indirekt guminyomás ellenőrző rendszert alkalmazták, mára pedig már egyre nagyobb teret hódítanak a direkt, külön szenzorokkal felszerelt rendszerek.",
          ],
        },
        {
          cim: "Az indirekt rendszer",
          bekezdesek: [
            "Az indirekt a kerekek fordulatszámát figyeli. Ha csökken az egyik abroncsban a nyomás, akkor annak a kerülete kisebb lesz, ezáltal gyorsabban forog, mint a többi kerék. Ezt a központi egység érzékeli és figyelmezteti a vezetőt.",
          ],
        },
        {
          cim: "Miért van rá szükség",
          bekezdesek: [
            "A TPMS alkalmazásának célja kettős: elsőként növeli a biztonságot, hiszen a kimutatások szerint sok baleset történik amiatt, hogy rossz guminyomással közlekednek az autósok. A másik cél pedig a fogyasztás megfelelő szinten tartása és a környezetvédelem.",
            "Nem mindegy ugyanis, hogy a gyárihoz képest például 30 százalékkal kisebb guminyomással autózunk. Ebben az esetben nemcsak több üzemanyagot égetünk el, hanem a gumi is intenzívebb kopásnak van kitéve.",
          ],
        },
      ]}
    />
  );
}
