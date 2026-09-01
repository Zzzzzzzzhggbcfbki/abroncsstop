// Minden üzleti adat egy helyen. Forrás: abroncsstop.hu (2026-09-01) + a műhely homlokzati táblája.
export const ceg = {
  nev: "Abroncs Stop Bt.",
  rovidNev: "Abroncs Stop",
  szlogen: "Gördülékeny megoldás minden keréken",
  kapcsolattarto: "Hammel Barnabás",
  telefon: "+36 30 621 1195",
  telefonHref: "tel:+36306211195",
  telefonKiiras: "30 621 1195",
  email: "abroncs.stop@gmail.com",
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

export const nyitvatartas = [
  { nap: "Hétfő–péntek", ora: "8:00–18:00", nyitva: true },
  { nap: "Szombat", ora: "8:00–13:00", nyitva: true },
  { nap: "Vasárnap", ora: "Zárva", nyitva: false },
] as const;

export type Szolgaltatas = {
  slug: string;
  cim: string;
  rovid: string;
  osszefoglalo: string;
  kep: string;
  kepAlt: string;
  navban?: boolean;
};

export const szolgaltatasok: Szolgaltatas[] = [
  {
    slug: "gumiszereles",
    cim: "Gumiszerelés és centírozás",
    rovid: "Szerelés, centírozás",
    osszefoglalo:
      "Nyári, téli és négyévszakos abroncsok szerelése, kiegyensúlyozása. A kerékcsavarokat nyomatékkulccsal húzzuk meg, gyári értékre.",
    kep: "/fotok/gumiszereles-kez.jpg",
    kepAlt: "Kesztyűs kéz igazítja az abroncsot az alufelnire a szerelőgépen",
  },
  {
    slug: "defektjavitas",
    cim: "Defektjavítás",
    rovid: "Defektjavítás",
    osszefoglalo:
      "Futófelületi sérülés, szög, csavar. A legtöbb ilyen javítás megvárható, nem kell érte visszajönni.",
    kep: "/fotok/defekt-javitas.jpg",
    kepAlt: "Csavar az abroncs futófelületében, mellette a tömítőszerszám a munkapadon",
  },
  {
    slug: "tpms",
    cim: "TPMS és RDKS",
    rovid: "TPMS",
    osszefoglalo:
      "Guminyomás-ellenőrző rendszerrel szerelt autókat is szervizelünk. Szenzorkezelés, betanítás, diagnosztika.",
    kep: "/fotok/tpms-szenzor.jpg",
    kepAlt: "TPMS szenzor közelről, a keréktárcsa peremére szerelve",
    navban: true,
  },
  {
    slug: "gumihotel",
    cim: "Gumihotel",
    rovid: "Gumihotel",
    osszefoglalo:
      "Nyáron a téli, télen a nyári garnitúrát nálunk hagyhatja. Riasztóval és vonuló biztonsági szolgálattal védett raktárban.",
    kep: "/fotok/gumihotel-polc.jpg",
    kepAlt: "Gumiabroncsok és keréktárcsák a gumihotel állványain",
    navban: true,
  },
  {
    slug: "klimatisztitas",
    cim: "Klímatisztítás ózonnal",
    rovid: "Klímatisztítás",
    osszefoglalo:
      "A klímarendszer megbontása nélkül, ózongázzal. Se vegyszer, se adalék, a kezelés 40 és 60 perc között van.",
    kep: "/fotok/klima-ozon.jpg",
    kepAlt: "Ózongenerátor az utasülésen, nyitott ajtóknál",
    navban: true,
  },
  {
    slug: "felnijavitas",
    cim: "Felnijavítás",
    rovid: "Felnijavítás",
    osszefoglalo:
      "Ütődött, deformálódott keréktárcsa. A kisebb hibákat rövid idő alatt javítjuk, a komolyabbakat általában másnapra.",
    kep: "/fotok/felni-javitas.jpg",
    kepAlt: "Alufelni a javítógépbe fogva",
    navban: true,
  },
];

export const fenyszoro = {
  slug: "fenyszoro-felujitas",
  cim: "Fényszóró felújítás",
  osszefoglalo:
    "A megsárgult, karcos búra nemcsak csúnya, kevesebb fényt is enged ki. Polírozással visszahozzuk az átlátszóságot.",
  // Mind a négy fotó a saját műhelyünkben készült, két autóról, felújítás előtt és után.
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

export const csomagok = [
  {
    kod: "S",
    ar: 5000,
    tartalom: [
      "2 db normál gumijavítás vagy szelepcsere",
      "A vásárlástól számított egy évig",
    ],
    kiemelt: false,
  },
  {
    kod: "M",
    ar: 10000,
    tartalom: [
      "2 db normál gumijavítás vagy szelepcsere",
      "1 db ózonos klíma- és utastér-fertőtlenítés",
      "A vásárlástól számított egy évig",
    ],
    kiemelt: false,
  },
  {
    kod: "XL",
    ar: 25000,
    tartalom: [
      "3 db normál gumijavítás vagy szelepcsere",
      "1 db ózonos klímatisztítás és utastér-fertőtlenítés",
      "2 db szezonális gumitárolás, maximum egy évig",
      "A vásárlástól számított egy évig",
    ],
    kiemelt: true,
  },
] as const;

export const csomagFeltetel = {
  mireVonatkozik: "Futófelületi sérülés: szög, csavar.",
  mireNem:
    "Oldalfalsérülésre, vágásra, hasadásra, keréktárcsa oxidációjára és keréktárcsa sérülésére nem vonatkozik.",
  megkotes: "A csomag 4 db gumi szerelése mellé vásárolható meg.",
} as const;

export const gumihotelArak = [
  { tetel: "1 kerék vagy abroncs", ar: "1 500 Ft / szezon" },
  { tetel: "Garnitúra, 4 db", ar: "6 000 Ft / szezon" },
] as const;

export const markak = [
  "michelin", "continental", "goodyear", "pirelli", "dunlop", "bridgestone",
  "hankook", "nokian", "toyo", "falken", "kleber", "semperit",
  "fulda", "firestone", "sava", "debica", "uniroyal", "kumho",
  "vredestein", "bfgoodrich", "kormoran",
] as const;

export const markaNevek: Record<string, string> = {
  michelin: "Michelin", continental: "Continental", goodyear: "Goodyear",
  pirelli: "Pirelli", dunlop: "Dunlop", bridgestone: "Bridgestone",
  hankook: "Hankook", nokian: "Nokian Tyres", toyo: "Toyo Tires",
  falken: "Falken", kleber: "Kleber", semperit: "Semperit",
  fulda: "Fulda", firestone: "Firestone", sava: "Sava",
  debica: "Dębica", uniroyal: "Uniroyal", kumho: "Kumho",
  vredestein: "Vredestein", bfgoodrich: "BFGoodrich", kormoran: "Kormoran",
};

export const navLinkek = [
  { href: "/#szolgaltatasok", cim: "Szolgáltatások" },
  { href: "/csomagajanlat", cim: "Csomagok" },
  { href: "/gumihotel", cim: "Gumihotel" },
  { href: "/jo-tudni", cim: "Jó tudni" },
  { href: "/kapcsolat", cim: "Kapcsolat" },
] as const;
