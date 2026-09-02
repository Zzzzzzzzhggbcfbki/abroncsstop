import type { Metadata } from "next";
import { JogiOldal } from "@/components/jogi-oldal";
import { uzemelteto, tarhelyszolgaltato } from "@/lib/jogi";

export const metadata: Metadata = {
  title: "Impresszum",
  description: "Az abroncsstop.hu üzemeltetőjének adatai.",
  alternates: { canonical: "/impresszum" },
  robots: { index: true, follow: true },
};

export default function Oldal() {
  return (
    <JogiOldal
      cim="Impresszum"
      bevezeto="Az abroncsstop.hu weboldal üzemeltetőjének adatai."
      frissitve="2026. szeptember 1."
      blokkok={[
        {
          cim: "Az üzemeltető",
          adatok: [
            ["Cégnév", uzemelteto.nev],
            ["Székhely", uzemelteto.szekhely],
            ["Telephely", uzemelteto.telephely],
            ["Képviselő", uzemelteto.kepviselo],
            ["Fő tevékenység", uzemelteto.fotevekenyseg],
            ["Cégjegyzékszám", uzemelteto.cegjegyzekszam],
            ["Nyilvántartó bíróság", uzemelteto.nyilvantartoBirosag],
            ["Adószám", uzemelteto.adoszam],
            ["Telefon", uzemelteto.telefon],
            ["E-mail", uzemelteto.email],
          ],
        },
        {
          cim: "Tárhelyszolgáltató",
          bekezdesek: [
            "A weboldal tárhelyét az alábbi szolgáltató biztosítja.",
          ],
          adatok: [
            ["Név", tarhelyszolgaltato.nev],
            ["Székhely", tarhelyszolgaltato.szekhely],
            ["E-mail", tarhelyszolgaltato.email],
          ],
        },
        {
          cim: "Szerzői jog",
          bekezdesek: [
            "A weboldalon megjelenő szövegek, fényképek és egyéb tartalmak az üzemeltető tulajdonát képezik, illetve az üzemeltető jogosult azok felhasználására. Ezek bármilyen formában történő átvétele, másolása vagy felhasználása az üzemeltető előzetes írásbeli engedélye nélkül nem megengedett.",
            "A weboldalon megjelenő, harmadik felek tulajdonában álló védjegyek és megjelölések a jogosultjaik tulajdonát képezik.",
          ],
        },
        {
          cim: "Felelősség",
          bekezdesek: [
            "Az üzemeltető törekszik arra, hogy a weboldalon közölt információk pontosak és naprakészek legyenek, de nem vállal felelősséget az esetleges elírásokból vagy időközben bekövetkezett változásokból eredő károkért. A weboldalon szereplő árak és feltételek tájékoztató jellegűek, a pontos ajánlatért hívja munkatársunkat.",
          ],
        },
      ]}
    />
  );
}
