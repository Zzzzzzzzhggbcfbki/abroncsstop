/*
  Jogi adatok.

  A cégadatok forrása a cégnyilvántartás (ceginformacio.hu, 2026-09-02):
  ABRONCS STOP Betéti Társaság, adószám 25029372-2-13,
  cégjegyzékszám 13-06-068300, székhely 2117 Isaszeg, Kossuth Lajos utca 126. A. ép.

  A tárhelyszolgáltató adatai a Vercel adatvédelmi tájékoztatójából.

  Ide ne kerüljön olyan adat, amit nem lehet dokumentumból igazolni.
*/

export const HIANYZO = "KITÖLTENDŐ" as const;

export const uzemelteto = {
  nev: "ABRONCS STOP Betéti Társaság",
  rovidNev: "ABRONCS STOP Bt.",
  // A cégnyilvántartás írásmódja. A látogatóknak szóló oldalakon a
  // természetesebb „126/A” alak szerepel, ugyanaz a hely.
  szekhely: "2117 Isaszeg, Kossuth Lajos utca 126. A. ép.",
  telephely: "2117 Isaszeg, Kossuth Lajos utca 126. A. ép.",
  kepviselo: "Hammel Barnabás",
  telefon: "+36 30 621 1195",
  email: "abroncs.stop@gmail.com",
  cegjegyzekszam: "13-06-068300",
  adoszam: "25029372-2-13",
  nyilvantartoBirosag: "Budapest Környéki Törvényszék Cégbírósága",
  fotevekenyseg: "Gépjármű javítása, karbantartása",
  // Bankszámlaszám nem kell az impresszumba, és a helyszíni fizetés miatt
  // az ÁSZF-hez sem szükséges. Ha mégis kell, a cégpapírokból pótolandó.
  bankszamlaszam: HIANYZO,
} as const;

export const tarhelyszolgaltato = {
  nev: "Vercel Inc.",
  szekhely: "440 N Barranca Avenue #4133, Covina, CA 91723, Amerikai Egyesült Államok",
  email: "privacy@vercel.com",
} as const;

// Amit az oldal ténylegesen tárol a látogató eszközén.
export const sutik = [
  {
    nev: "abroncsstop-suti-hozzajarulas",
    tipus: "Működéshez szükséges",
    cel: "Megjegyzi, hogy Ön elfogadta vagy elutasította a beágyazott térképet, hogy a sáv ne jelenjen meg újra.",
    idotartam: "12 hónap",
    tarolas: "A böngésző helyi tárolójában, nem sütiként.",
  },
  {
    nev: "Google Maps beágyazás",
    tipus: "Harmadik fél, csak hozzájárulással",
    cel: "A kapcsolat oldalon a műhely helyét mutató interaktív térkép megjelenítése. A Google saját sütiket helyezhet el.",
    idotartam: "A Google saját szabályzata szerint",
    tarolas: "Csak akkor töltjük be, ha Ön a térképet külön engedélyezi.",
  },
] as const;

export const jogiLinkek = [
  { href: "/impresszum", cim: "Impresszum" },
  { href: "/adatkezelesi-tajekoztato", cim: "Adatkezelési tájékoztató" },
  { href: "/cookie-tajekoztato", cim: "Cookie tájékoztató" },
  { href: "/aszf", cim: "ÁSZF" },
] as const;
