# abroncsstop.hu — Rackhost teendők

Állapot 2026-09-02-án: a domain meg van rendelve a Rackhostnál, de **nincs
kifizetve és nincs tulajdonos beállítva**. Mindkettőre 14 nap van a
megrendeléstől. Ha lejár, a Rackhost törli az igénylést, és a domain
visszakerül a szabad névtérbe — onnan bárki elviheti.

## Miért most kell a tulajdonost megadni

A `.hu` domain tulajdonosa a nyilvántartásban rögzített jogi személy. Amíg az
igénylés nyitva van, a tulajdonos megadása **csak egy űrlap a Rackhost
„Tennivalók" fülén**. Ha viszont a domain már be van jegyezve valaki másra
(rám vagy a RAYO-ra), akkor az utólagos tulajdonosváltás:

- aláírt domainigénylő lap,
- aláírási címpéldány vagy ügyvéd által ellenjegyzett aláírásminta,
- adminisztrációs díj,
- és a váltás alatt **30 napos zárolás**, ami alatt a domain nem mozgatható.

Ezért a tulajdonos az első pillanattól az ügyfél cége legyen.

## 1. Tulajdonosi adatok megadása (Tennivalók fül)

A tulajdonos az ügyfél cége. Az adatok a `lib/jogi.ts`-ben már ellenőrizve
vannak, a cégnyilvántartásból (ceginformacio.hu, 2026-09-02):

| Mező | Érték |
|------|-------|
| Tulajdonos neve | ABRONCS STOP Betéti Társaság |
| Székhely | 2117 Isaszeg, Kossuth Lajos utca 126. A. ép. |
| Cégjegyzékszám | 13-06-068300 |
| Adószám | 25029372-2-13 |
| Nyilvántartó bíróság | Budapest Környéki Törvényszék Cégbírósága |
| Képviselő | Hammel Barnabás |
| Telefon | +36 30 621 1195 |
| E-mail | abroncs.stop@gmail.com |

Az adminisztratív és technikai kapcsolattartó maradhat a saját elérhetőségem,
így a DNS-t és a megújítást én kezelem, de a domain az ügyfél vagyona marad.

A tulajdonosi e-mail cím fontos: a nyilvántartó erre küld értesítést, és
későbbi transzfernél is ez az azonosítás alapja. Az `abroncs.stop@gmail.com`
az ügyfél saját fiókja, ezért jó választás.

## 2. Kifizetés

A megrendeléstől számított 14 napon belül ki kell fizetni, különben az
igénylés törlődik. A Rackhostnál nincs tárolt bankkártya, tehát ez egy
egyszeri, kézi utalás vagy kártyás fizetés a díjbekérő alapján.

## 3. Megújítás: kreditből megy

A Rackhost automatikus megújítása **kreditből** vonja le a díjat, nem
kártyáról. Ha nincs elég kredit az egyenlegen a lejárat előtt, a megújítás
nem fut le, és a domain lejár. Teendő:

- a lejárati dátumot naptárba kell tenni, emlékeztetővel 30 nappal előtte,
- a lejárat előtt legyen a fiókban legalább egy éves díjnyi kredit,
- vagy évente kézzel kell megújítani.

Ez a leggyakoribb módja annak, hogy egy élő ügyféloldal domainje némán
lejárjon, ezért érdemes rögtön a naptárba rögzíteni.

## 4. DNS: a Vercel rákötése

A domain a `abroncsstop.vercel.app` projektre mutat. A sorrend:

1. A Vercel projekt **Settings → Domains** részén hozzáadni az
   `abroncsstop.hu` és a `www.abroncsstop.hu` nevet.
2. A Vercel ott kiírja a pontos DNS-értékeket. **Mindig az ott kiírt aktuális
   értéket kell beírni**, nem egy korábbi projektből másolt IP-t.
3. Ezeket az értékeket a Rackhost DNS-kezelőjében kell felvenni.
4. Az egyik névre 301-es átirányítást állítani a másikra, hogy ne legyen két
   indexelhető változat. A kanonikus a `www` nélküli alak.

**Buktató, ami korábban órákat vitt el:** ha a Vercel a domain mellé
„DNS Change Recommended" figyelmeztetést tesz ki, azt nem szabad ártalmatlan
ajánlásnak venni. A régi, legacy DNS-célokról (például a `76.76.21.21`
A rekordról) a HTTP kiszolgálás működik, de a HTTPS-tanúsítvány kiállítása
nem megy végig, és az oldal hibaüzenettel jön be böngészőben. A megoldás a
Vercel által aktuálisan javasolt célokra váltás.

A `.hu` delegálás átfutása a tapasztalat szerint körülbelül 3 munkanap. Ha
addig nem él, az önmagában nem hiba: a rossz DNS-t úgy lehet elkülöníteni a
késő registrytől, hogy megnézzük, a `whois` szerint delegálva van-e már a
domain a Rackhost névszervereire.

## 5. Ellenőrzés élesítés után

```bash
whois abroncsstop.hu | head -30
dig +short abroncsstop.hu
dig +short www.abroncsstop.hu
curl -sI https://abroncsstop.hu | head -5
curl -sI https://www.abroncsstop.hu | head -5
```

A `curl` mindkét néven 200-at vagy 301-et adjon, és a HTTPS érvényes
tanúsítvánnyal jöjjön. Ha a HTTP megy, de a HTTPS nem, az a 4. pontban leírt
legacy DNS-cél problémája.
