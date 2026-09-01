import type { Metadata } from "next";
import { SzolgaltatasOldal } from "@/components/szolgaltatas-oldal";

export const metadata: Metadata = {
  title: "Gumiszerelés és centírozás",
  description:
    "Nyári, téli és négyévszakos abroncsok szerelése és centírozása Isaszegen. A kerékcsavarokat nyomatékkulccsal, gyári értékre húzzuk meg.",
  alternates: { canonical: "/gumiszereles" },
};

export default function Oldal() {
  return (
    <SzolgaltatasOldal
      cim="Gumiszerelés és centírozás"
      bevezeto="Szezonváltás, új garnitúra, egyedi méret. A szerelés mellé kiegyensúlyozás és nyomatékkulcsos meghúzás jár, nem külön kérésre."
      kep="/fotok/centirozas.jpg"
      kepAlt="Kerék kiegyensúlyozása centírozógépen"
      arak={[
        { tetel: "Centírozás", ar: "A szerelés része" },
        { tetel: "Nyomatékkulcs", ar: "Minden keréknél" },
        { tetel: "Ár", ar: "Hívásra" },
      ]}
      arakCime="Jó tudni"
      blokkok={[
        {
          bekezdesek: [
            "Személyautó és kisteher abroncsokat szerelünk, acél- és alufelnire egyaránt. A kerék a szerelés után a centírozógépre kerül, mert a néhány grammos kiegyensúlyozatlanság is érezhető rezgést okoz a kormányon 90 fölött.",
          ],
        },
        {
          cim: "A kerékcsavart nyomatékkulcs húzza meg",
          bekezdesek: [
            "A csavarok és anyák kézzel, érzésre történő meghúzása nem biztonságos. Nyomatékkulcsot használunk, ami betartja az autóra előírt pontos nyomatékot.",
          ],
          lista: [
            "A menetes csap, a csavar és az anya nem sérül",
            "Minden csavar ugyanakkora nyomatékot kap",
            "A következő leszerelés könnyebben megy",
          ],
        },
        {
          cim: "Ha méretet váltana",
          bekezdesek: [
            "A szélesebb abroncs nagyobb felületen ér a talajhoz, ettől jobb lesz a kormányzás és a kanyarodás. Az alacsony profil viszont keményebb rugózást jelent, jobban átjönnek az útegyenetlenségek, és hat a fékezésre, a motor teljesítményére meg a fogyasztásra is.",
            "A biztonság érdekében érdemes ragaszkodni az eredeti külső átmérőhöz, és inkább a keréktárcsa méretén változtatni. Ha ilyesmiben gondolkodik, hívjon, mielőtt megrendeli a gumit.",
          ],
        },
      ]}
      ctaCim="Szezonváltás előtt áll?"
      ctaSzoveg="Hívjon, és megbeszéljük, mikor tudjuk fogadni. Ha nálunk van a másik garnitúra, azt is előkészítjük."
    />
  );
}
