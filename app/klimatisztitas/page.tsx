import type { Metadata } from "next";
import { SzolgaltatasOldal } from "@/components/szolgaltatas-oldal";

export const metadata: Metadata = {
  title: "Klíma tisztítása",
  description:
    "Ózonos klímatisztítás és utastér-fertőtlenítés Isaszegen, a klímarendszer megbontása nélkül. A kezelés 40-60 perc, utána 20 perccel már beülhet.",
  alternates: { canonical: "/klimatisztitas" },
};

export default function Oldal() {
  return (
    <SzolgaltatasOldal
      cim="Klíma tisztítása"
      bevezeto="Előzze meg a klíma okozta fertőzéseket. A nem kellően karbantartott autóklíma valódi veszélyforrás, ami a nyári fertőzési tünetek 80-90 százalékát okozza."
      kep="/fotok/klima-ozon.jpg"
      kepAlt="Ózongenerátor az utasülésen, nyitott ajtóknál"
      arak={[
        { tetel: "A kezelés ideje", ar: "40-60 perc" },
        { tetel: "Utána beülhet", ar: "20 perccel" },
      ]}
      arakCime="Mennyi idő"
      blokkok={[
        {
          cim: "Négy az egyben kezelés ózonnal",
          bekezdesek: [
            "Az ózonos kezelés nem csak egy egyszerű klímatisztító eljárás, amely során a klíma radiátorát vegyszerrel fertőtlenítjük, hanem egyszerre több problémára is megoldást nyújt.",
            "A jármű klímarendszerének megbontása nélkül ózongáz segítségével semlegesítjük a jármű teljes klíma- és szellőztető rendszerében megtapadt vírusokat, baktériumokat, valamint a radiátorokon kialakult esetleges penész- és gombatelepeket is.",
            "Az ózongáz nem csak a vírusokkal és baktériumokkal lép kölcsönhatásba, hanem minden egyéb, akár kellemetlen szagot okozó részecskével is, amelyek a padlón, ülésekben, üléskárpitban szaporodhatnak fel az idők során. A járműben élő nem kívánatos utasok, bogarak, pókok és egyéb élősködők sem menekülhetnek az ózongáz elől.",
          ],
          lista: ["Pollenek", "Legionella baktérium", "Bacilusok, baktériumok"],
        },
        {
          cim: "A klímatisztítás legegyszerűbb módja",
          bekezdesek: [
            "Az ózonos kezelés alkalmazásakor ózongázt juttatunk be a kezelni kívánt területre, amely egyenletesen eloszlik és bejut a legkisebb résekbe és felületekre is. Éppen ezért nincs szükség a jármű klímarendszerének a szétszerelésére, a burkolatok eltávolítására.",
            "A kezeléshez semmiféle vegyszert vagy adalékanyagot nem használunk fel, csupán az ózon molekula természetes oxidációs hatását vesszük igénybe, így a kezelés után nem marad vissza semmiféle káros vegyszer, csupán friss, esőillatú levegő.",
            "Az egész kezelési folyamat nem tart tovább, mint 40-60 perc, amely tartalmazza az előkészületeket, a kezelést és a szellőztetést is.",
          ],
        },
        {
          cim: "Miért az ózon",
          bekezdesek: [
            "Az ózon gáz (O3) három oxigén atomot tartalmaz, míg az általunk belélegzett levegő kettőt. Amikor a rendkívül reaktív ózon molekulák baktériumokkal, vírusokkal és egyéb szagokat okozó részecskékkel érintkeznek, bekövetkezik az oxidáció, amely során ezek a káros részecskék teljesen elpusztulnak, míg az ózon molekula oxigénné (O2) alakul át. Tehát a kezelés után nem marad más, mint friss levegő.",
            "Az ózon nagy mennyiségű, hosszútávú belégzése káros lehet, ezért a kezelés alatt nem tartózkodhat senki a kezelt területen, és javasolt a növényeket is eltávolítani. Azonban éppen az erős oxidáló képessége miatt az ózon igen rövid életű: mivel az ózon molekulák a levegőben mindig találnak maguknak megkötni való port, szennyeződést, így körülbelül 30 perc elteltével nagy részük visszaalakul oxigénné. Ezért a kezelés utáni 20 perccel már biztonságosan elfoglalhatjuk a kezelt területet.",
          ],
        },
      ]}
    />
  );
}
