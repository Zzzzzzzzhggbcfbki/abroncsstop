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

// Pontosan a régi oldal menüjének szolgáltatásai, az ott olvasható szöveggel.
export const szolgaltatasok: Szolgaltatas[] = [
  {
    slug: "fenyszoro-felujitas",
    cim: "Fényszóró felújítás",
    osszefoglalo: "Autója fényszóróit újjá varázsoljuk. Kérje szolgáltatásunkat.",
    kep: "/fotok/fenyszoro-03.jpg",
    kepAlt: "Felújított, kitisztult fényszóróbúra",
  },
  {
    slug: "tpms",
    cim: "TPMS",
    osszefoglalo:
      "Műhelyünkben a TPMS vagy RDKS rendszerű defektvisszajelzővel ellátott autók is könnyedén szervizelhetőek.",
    kep: "/fotok/tpms-szenzor.jpg",
    kepAlt: "TPMS szenzor közelről, a keréktárcsa peremére szerelve",
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
  {
    slug: "felnijavitas",
    cim: "Felnijavítás",
    osszefoglalo:
      "A használat során nem ritka, hogy egy felni megütődik, és ennek okán deformálttá válik.",
    kep: "/fotok/felni-javitas.jpg",
    kepAlt: "Alufelni a javítógépbe fogva",
  },
];

// A „Lámpa felújítása” oldal képgalériája: „Munkáinkból ízelítő”.
// A négy fotó két előtte-utána pár ugyanarról a két autóról.
export const fenyszoro = {
  slug: "fenyszoro-felujitas",
  cim: "Fényszóró felújítás",
  parok: [
    {
      elotte: "/fotok/fenyszoro-02.jpg",
      utana: "/fotok/fenyszoro-01.jpg",
      alt: "Ezüst Volkswagen Golf bal oldali fényszórója",
    },
    {
      elotte: "/fotok/fenyszoro-04.jpg",
      utana: "/fotok/fenyszoro-03.jpg",
      alt: "Fekete személyautó jobb oldali fényszórója",
    },
  ],
} as const;

// A „termek” oldalról, szó szerinti tartalommal.
export const csomagok = [
  {
    kod: "S",
    ar: 5000,
    tartalom: ["2 db normál gumijavítás vagy szelepcsere"],
  },
  {
    kod: "M",
    ar: 10000,
    tartalom: [
      "2 db normál gumijavítás vagy szelepcsere",
      "1 db ózonos klíma- és utastér-fertőtlenítés",
    ],
  },
  {
    kod: "XL",
    ar: 25000,
    tartalom: [
      "2 db normál gumijavítás vagy szelepcsere",
      "1 db gumijavítás vagy szelepcsere",
      "1 db ózonos klímatisztítás és utastér-fertőtlenítés",
      "2 db szezonális gumitárolás, maximum 1 évig",
    ],
  },
] as const;

export const csomagFeltetel = {
  ervenyesseg: "A vásárlástól számított egy évig.",
  megkotes: "Vásárolható csomagajánlat 4 db gumi szerelése mellé.",
  normalGumijavitas: "Futófelületi sérülés: szög, csavar.",
  nemVonatkozik: [
    "Oldalfelületi sérülés",
    "Vágás",
    "Hasadás",
    "Keréktárcsa oxidáció",
    "Keréktárcsa sérülés",
  ],
  bovebben: "Bővebb információért hívja munkatársunkat!",
} as const;

// A „ghotel” oldalról: „A tárolás díja: 1500ft /db / szezon 6000ft / garnitúra (4db)”
export const gumihotelArak = [
  { tetel: "1 db / szezon", ar: "1 500 Ft" },
  { tetel: "Garnitúra, 4 db", ar: "6 000 Ft" },
] as const;

export const navLinkek = [
  { href: "/#szolgaltatasok", cim: "Szolgáltatások" },
  { href: "/csomagajanlat", cim: "Csomagajánlat" },
  { href: "/jo-tudni", cim: "Jó tudni" },
  { href: "/kapcsolat", cim: "Kapcsolat" },
] as const;
