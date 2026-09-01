/*
  Jogi adatok.

  FIGYELEM: az alábbi, HIÁNYZÓ jelöléssel ellátott mezők nem szerepelnek sem a
  régi weboldalon, sem másutt, amihez hozzáférek. Ezeket a cégpapírokból kell
  kitölteni, addig az oldal láthatóan jelzi, hogy hiányoznak. Ne találjuk ki őket.
*/

export const HIANYZO = "KITÖLTENDŐ" as const;

export const uzemelteto = {
  nev: "Abroncs Stop Bt.",
  szekhely: "2117 Isaszeg, Kossuth Lajos utca 126/A",
  telephely: "2117 Isaszeg, Kossuth Lajos utca 126/A",
  kepviselo: "Hammel Barnabás",
  telefon: "+36 30 621 1195",
  email: "abroncs.stop@gmail.com",
  // A cégpapírokból pótlandó:
  cegjegyzekszam: HIANYZO,
  adoszam: HIANYZO,
  nyilvantartoBirosag: HIANYZO,
  bankszamlaszam: HIANYZO,
} as const;

export const tarhelyszolgaltato = {
  nev: HIANYZO,
  szekhely: HIANYZO,
  email: HIANYZO,
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
