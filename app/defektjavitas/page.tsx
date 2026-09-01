import type { Metadata } from "next";
import { SzolgaltatasOldal } from "@/components/szolgaltatas-oldal";

export const metadata: Metadata = {
  title: "Defektjavítás",
  description:
    "Futófelületi sérülés, szög, csavar. Defektjavítás Isaszegen, a legtöbb esetben megvárható.",
  alternates: { canonical: "/defektjavitas" },
};

export default function Oldal() {
  return (
    <SzolgaltatasOldal
      cim="Defektjavítás"
      bevezeto="Szög, csavar, lassan engedő kerék. A futófelületi sérülések nagy része javítható, és a javítást általában meg lehet várni."
      kep="/fotok/defekt-javitas.jpg"
      kepAlt="Csavar az abroncs futófelületében, mellette a tömítőszerszám"
      arak={[
        { tetel: "Átfutás", ar: "Általában megvárható" },
        { tetel: "Mire vonatkozik", ar: "Futófelületi sérülés" },
        { tetel: "S csomagban", ar: "5000 Ft-tól" },
      ]}
      arakCime="Jó tudni"
      blokkok={[
        {
          bekezdesek: [
            "Normál gumijavításnak azt hívjuk, amikor a futófelületen keletkezik a sérülés: szög, csavar vagy más idegen test megy bele. Ez a leggyakoribb eset, és ez javítható.",
          ],
        },
        {
          cim: "Mikor nem javítható",
          bekezdesek: [
            "Van, amikor a javítás nem lenne biztonságos, ilyenkor új abroncs kell. Ezt nyíltan megmondjuk, nem foltozunk olyat, amiben nem bízunk.",
          ],
          lista: [
            "Oldalfalsérülés",
            "Vágás vagy hasadás",
            "Keréktárcsa oxidációja",
            "Sérült keréktárcsa",
          ],
        },
        {
          cim: "Ha gyakran fogy a levegő",
          bekezdesek: [
            "Nem mindig a gumi a hibás. Az öreg szelep, a korrodált tárcsaperem és a rosszul záró gumiszakasz mind okozhat lassú leeresztést. Ilyenkor megkeressük, honnan megy el, és azt javítjuk, ami tényleg elromlott.",
            "Ha rendszeresen hoz gumit javíttatni, érdemes ránézni a csomagajánlatra: az egy évre előre lefedi a javítást.",
          ],
        },
      ]}
      ctaCim="Defektje van?"
      ctaSzoveg="Hívjon, mielőtt elindul. Megmondjuk, be tudjuk-e venni azonnal, és mennyi ideig fog tartani."
    />
  );
}
