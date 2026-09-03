# Domain teendők

Az oldal fő domainje **gumisisaszeg.hu**. A kódban ezt a `lib/site.ts`
`OLDAL_URL` konstansa mondja ki, és innen veszi a canonical link, a sitemap,
a robots.txt és a strukturált adat is. Ha később másik domain lesz a fő cím,
elég azt az egy sort átírni.

## Állapot (2026-09-03)

| | |
|---|---|
| Vercel projekt | `abroncsstop` (liftifys-projects) |
| Hozzáadva | `gumisisaszeg.hu` és `www.gumisisaszeg.hu` |
| Vercel állapot | `invalid-configuration` — a DNS-rekordok még nincsenek beállítva |
| Regisztráció | a `.hu` nyilvántartásban ma jött létre, delegálás még nincs |

A `whois` szerint a domain létezik, de **még nincs névszerverre delegálva**,
ezért a DNS-kezelő valószínűleg csak a delegálás után lesz használható. Ez a
`.hu`-nál rendszerint 1–3 munkanap.

## A beállítandó rekordok

A DNS-szolgáltatónál (Rackhost) pontosan ezt a két rekordfajtát kell felvenni.

### Apex, azaz a `gumisisaszeg.hu`

| Típus | Név | Érték | TTL |
|-------|-----|-------|-----|
| A | `@` | `216.198.79.1` | 3600 |
| A | `@` | `64.29.17.1` | 3600 |

Két külön A rekord, ugyanazzal a névvel. Mindkettő kell.

### `www.gumisisaszeg.hu`

| Típus | Név | Érték | TTL |
|-------|-----|-------|-----|
| CNAME | `www` | `1301018af049039a.vercel-dns-017.com.` | 3600 |

A CNAME értéke projektspecifikus, a végén a ponttal együtt kell beírni. Ha a
Rackhost felülete nem fogadja el a záró pontot, hagyd le, de akkor ellenőrizd,
hogy nem fűzi-e hozzá a saját domainnevét.

### Amit NE használj

A Vercel a régi értékeket másodlagosként még mindig felkínálja:
`76.76.21.21` az apexre és `cname.vercel-dns.com` a www-re. Ezek a legacy
célok. **Ne ezeket vedd fel**: róluk a HTTP kiszolgálás elindul, de a
HTTPS-tanúsítvány kiállítása nem megy végig, és az oldal tanúsítványhibával
jön be a böngészőben. Ez korábban egy másik projekten órákat vitt el.

### Alternatíva: névszerver-átadás

Ha egyszerűbb, a teljes DNS-t át lehet adni a Vercelnek, ekkor viszont minden
más rekordot (e-mail, MX, TXT) is ott kell kezelni:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

A rekordos megoldás a biztonságosabb, mert a domain e-mail-beállításai a
Rackhostnál maradnak.

## Ellenőrzés a beállítás után

```bash
dig +short A gumisisaszeg.hu
dig +short CNAME www.gumisisaszeg.hu
curl -sI https://gumisisaszeg.hu | head -5
curl -sI https://www.gumisisaszeg.hu | head -5
```

Az apexnek a két Vercel-IP-t kell visszaadnia, a www-nek a hosszú
`vercel-dns-017.com` nevet. A `curl` mindkettőn 200-at vagy 301-et adjon,
érvényes tanúsítvánnyal. A Vercel oldaláról a `vercel domains verify
gumisisaszeg.hu` mondja meg, hogy rendben van-e.

A tanúsítvány kiállítása a helyes DNS után pár perc. Ha a HTTP megy, de a
HTTPS nem, az szinte biztosan a legacy célok esete.

## Ami még hátravan

- A `www` és a domain közül az egyik legyen átirányítás a másikra, hogy ne
  legyen két indexelhető változat. A kanonikus a `www` nélküli alak, ezt a
  Vercel Domains felületén egy kattintás beállítani.
- A Google Search Console-ba csak azután érdemes beküldeni a sitemapot, hogy
  a domain HTTPS-en él.
- Az `abroncsstop.hu` külön ügy: az még nincs kifizetve és nincs tulajdonosa
  beállítva a Rackhostnál. Ha később mégis élesedik, a helye egy 301-es
  átirányítás a `gumisisaszeg.hu`-ra, nem egy második élő másolat.
