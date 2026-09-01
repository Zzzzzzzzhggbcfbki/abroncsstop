# Abroncs Stop Bt. — abroncsstop.hu

Gumiszerviz Isaszegen. Next.js 16 + Tailwind v4, statikusan előrenderelt oldalak.

## Fejlesztés

```bash
npm run dev     # http://localhost:3014
npm run build
```

## Hol vannak az adatok

Minden üzleti adat (telefon, cím, nyitvatartás, árak, márkalista) egyetlen
helyen van: `lib/site.ts`. Ha változik egy ár vagy a nyitvatartás, csak ezt
kell átírni, az egész oldal követi.

## Képek

`public/fotok/` — a valódi fotók és a még pótlásra váró képhelyek.

Valódi, a műhelyben készült felvételek:

| Fájl | Mi van rajta |
|---|---|
| `fenyszoro-01…04.jpg` | fényszóró felújítás után |
| `muhely-homlokzat.jpg` | a műhely utcafrontja |

A `fenyszoro-01..04` négy fotója két előtte-utána pár ugyanarról a két autóról.
A párosítás a `lib/site.ts` `fenyszoro.parok` tömbjében van, ezt használja a
`components/elotte-utana.tsx` csúszka.

A többi fotó helye:

| Fájl | Arány | Hol jelenik meg |
|---|---|---|
| `hero-gumiszereles.jpg` | 4:5 | főoldali hero |
| `gumiszereles-kez.jpg` | 16:10 | szolgáltatásrács, első cella |
| `defekt-javitas.jpg` | 4:3 | szolgáltatásrács és defektjavítás aloldal |
| `tpms-szenzor.jpg` | 16:10 | szolgáltatásrács és TPMS aloldal |
| `gumihotel-polc.jpg` | 16:9 | szolgáltatásrács, gumihotel szekció és aloldal |
| `klima-ozon.jpg` | 16:10 | szolgáltatásrács és klíma aloldal |
| `felni-javitas.jpg` | 3:2 | szolgáltatásrács és felni aloldal |
| `centirozas.jpg` | 3:2 | gumiszerelés aloldal |

`public/logo/abroncsstop.png` — a márkalogó, átlátszó háttérrel. Ebből készül a
favikon is (`app/icon.png`), a gumiabroncs-jel kivágásával, fehéren a logó
pirosán. A paletta pirosa (`#d40008`) magából a logóból van kimérve.

`public/logok/` — 21 gumimárka logója, a régi oldal médiatárából kivágva és
egységes méretre igazítva. A márkafalon szürkeárnyalatosan jelennek meg,
egérrel fölé állva színesednek.

## Egyeztetni való a tulajdonossal

- A homlokzati tábla szerint szombaton is nyitva vannak 8 és 13 között, a régi
  weboldal viszont csak hétfőtől péntekig írt nyitvatartást. A `lib/site.ts`
  jelenleg a táblát követi.
- A szolgáltatások árai nincsenek kiírva. Ahol nincs valódi ár, ott az oldalsáv
  „Jó tudni" adatokat mutat ár helyett.
