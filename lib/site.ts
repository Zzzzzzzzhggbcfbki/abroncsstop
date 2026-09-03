/*
  MINDEN ADAT A RÉGI abroncsstop.hu OLDALRÓL SZÁRMAZIK.
  Ellenőrizve a WP REST API teljes szövegkiírásán, 2026-09-01.
  Ide ne kerüljön olyan állítás, ami nem szerepel a régi oldalon.
*/

export const ceg = {
  nev: "Abroncs Stop Bt.",
  rovidNev: "Abroncs Stop",
  // kezdőlap: „Gördülékeny megoldás minden keréken”
  szlogen: "Gördülékeny megoldás minden keréken",
  // kezdőlap: „LEGYEN PARTNERÜNK A BIZTONSÁGOS AUTÓZÁSBAN!”
  mottó: "Legyen partnerünk a biztonságos autózásban",
  // kapcsolat oldal: „HAMMEL BARNABÁS”
  kapcsolattarto: "Hammel Barnabás",
  // kapcsolat oldal: „Tel: 30/621-1195”
  telefon: "+36 30 621 1195",
  telefonHref: "tel:+36306211195",
  telefonKiiras: "+36 30 621 1195",
  // kapcsolat oldal: „Email: abroncs.stop@gmail.com”
  email: "abroncs.stop@gmail.com",
  // kapcsolat oldal térképe: „2117 Isaszeg, Kossuth Lajos u. 126/A”
  cim: {
    utca: "Kossuth Lajos utca 126/A",
    iranyitoszam: "2117",
    telepules: "Isaszeg",
    teljes: "2117 Isaszeg, Kossuth Lajos utca 126/A",
  },
  facebook: "https://www.facebook.com/Abroncs-Stop-Bt-657297017699727",
  terkep:
    "https://maps.google.com/maps?q=2117%20Isaszeg%2C%20Kossuth%20Lajos%20utca%20126%2FA&t=m&z=16&output=embed&iwloc=near",
  terkepLink:
    "https://www.google.com/maps/search/?api=1&query=2117+Isaszeg+Kossuth+Lajos+utca+126%2FA",
} as const;

// A régi oldal fejlécében mindenhol: „NYITVATARTÁS : H - P : 08 - 18”.
// Szombati vagy vasárnapi nyitvatartás sehol nem szerepel rajta.
export const nyitvatartas = [{ nap: "Hétfő–péntek", ora: "8:00–18:00" }] as const;

export type Szolgaltatas = {
  slug: string;
  cim: string;
  osszefoglalo: string;
  kep: string;
  kepAlt: string;
};

// A régi oldal menüjének szolgáltatásai, az ott olvasható szöveggel.
// A fényszóró felújítás 2026 szeptemberében kikerült: a cég már nem vállalja.
// A gumiabroncs értékesítés 2026. szeptember 3-án került be, a tulajdonos
// kérésére: a régi oldalon nem szerepelt, pedig a műhely árul abroncsot.
export const szolgaltatasok: Szolgaltatas[] = [
  {
    slug: "tpms",
    cim: "TPMS",
    osszefoglalo:
      "Műhelyünkben a TPMS vagy RDKS rendszerű defektvisszajelzővel ellátott autók is könnyedén szervizelhetőek.",
    kep: "/fotok/tpms-szenzor.jpg",
    kepAlt: "TPMS szenzor közelről, a keréktárcsa peremére szerelve",
  },
  {
    slug: "gumiabroncs",
    cim: "Gumiabroncs értékesítés",
    osszefoglalo:
      "Nálunk meg is vásárolhatja az abroncsot, és rögtön fel is szereljük.",
    kep: "/fotok/hero-gumiszereles.jpg",
    kepAlt: "Szerelő gumiabroncsot emel a szerelőgépre a műhelyben",
  },
  {
    slug: "felnijavitas",
    cim: "Felnijavítás",
    osszefoglalo:
      "A használat során nem ritka, hogy egy felni megütődik, és ennek okán deformálttá válik.",
    kep: "/fotok/felni-javitas.jpg",
    kepAlt: "Alufelni a javítógépbe fogva",
  },
  {
    slug: "gumihotel",
    cim: "Gumihotel",
    osszefoglalo:
      "Kerekeit nincs hol tárolnia? Üzletünkben lehetősége van arra, hogy keréktárcsáit, gumiabroncsait tárolja.",
    kep: "/fotok/gumihotel-polc.jpg",
    kepAlt: "Gumiabroncsok és keréktárcsák a gumihotel állványain",
  },
  {
    slug: "klimatisztitas",
    cim: "Klímatisztítás",
    osszefoglalo:
      "Előzze meg a klíma okozta fertőzéseket. Négy az egyben kezelés ózonnal, a klímarendszer megbontása nélkül.",
    kep: "/fotok/klima-ozon.jpg",
    kepAlt: "Ózongenerátor az utasülésen, nyitott ajtóknál",
  },
];

export const navLinkek = [
  { href: "/#szolgaltatasok", cim: "Szolgáltatások" },
  { href: "/jo-tudni", cim: "Jó tudni" },
  { href: "/kapcsolat", cim: "Kapcsolat" },
] as const;
