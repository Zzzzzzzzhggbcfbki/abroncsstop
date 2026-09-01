import type { Metadata } from "next";
import { SzolgaltatasOldal } from "@/components/szolgaltatas-oldal";

export const metadata: Metadata = {
  title: "TPMS és RDKS szerviz",
  description:
    "Guminyomás-ellenőrző rendszerrel szerelt autók szervizelése Isaszegen: szenzorkezelés, betanítás, diagnosztika.",
  alternates: { canonical: "/tpms" },
};

export default function Oldal() {
  return (
    <SzolgaltatasOldal
      cim="TPMS és RDKS"
      bevezeto="A defektvisszajelzővel szerelt autókat is szervizeljük. A szenzorokat kezeljük, betanítjuk, és megmondjuk, ha valamelyik elem lemerült."
      kep="/fotok/tpms-szenzor.jpg"
      kepAlt="TPMS szenzor a keréktárcsán"
      arak={[
        { tetel: "Rendszer", ar: "Direkt és indirekt" },
        { tetel: "Betanítás", ar: "Helyben" },
        { tetel: "Ár", ar: "Hívásra" },
      ]}
      arakCime="Jó tudni"
      blokkok={[
        {
          bekezdesek: [
            "Az Európai Unió ECE R64-es rendelete miatt 2014. november 1. óta minden újonnan forgalomba helyezett gépjárműnek rendelkeznie kell guminyomás-ellenőrző rendszerrel. Ezért találkozik vele egyre több autós szezonváltáskor.",
          ],
        },
        {
          cim: "Kétféle rendszer van",
          bekezdesek: [
            "Az indirekt rendszer a kerekek fordulatszámát figyeli. Ha az egyik abroncsban csökken a nyomás, kisebb lesz a kerülete, tehát gyorsabban forog a többinél. Ezt érzékeli a központi egység, és szól a vezetőnek.",
            "A direkt rendszerben minden kerékben külön szenzor ül, és az méri a tényleges nyomást. Kezdetben az indirekt volt elterjedtebb, ma már a direkt hódít teret.",
          ],
        },
        {
          cim: "Miért van rá szükség",
          bekezdesek: [
            "A cél kettős. Egyrészt a biztonság: a kimutatások szerint sok baleset történik amiatt, hogy rossz guminyomással közlekednek az autósok. Másrészt a fogyasztás és a környezet.",
            "Nem mindegy ugyanis, hogy a gyárihoz képest például 30 százalékkal kisebb nyomással autózunk. Ilyenkor nemcsak több üzemanyag fogy, hanem a gumi is gyorsabban kopik.",
          ],
        },
      ]}
      ctaCim="Világít a defektvisszajelző?"
      ctaSzoveg="Hozza be, megnézzük, tényleg nyomásprobléma van-e, vagy csak betanítás kell a rendszernek."
    />
  );
}
