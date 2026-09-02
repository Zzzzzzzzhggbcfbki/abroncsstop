import Image from "next/image";
import Link from "next/link";
import { AbroncsMinta } from "./abroncs-minta";
import { Phone, EnvelopeSimple, MapPin, FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { ceg, nyitvatartas, szolgaltatasok } from "@/lib/site";
import { jogiLinkek } from "@/lib/jogi";
import { SutiBeallitasGomb } from "./suti-beallitas-gomb";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-lablec-vonal bg-lablec-hatter text-lablec-tinta">
      <AbroncsMinta vilagos className="-right-[8%] top-[14%] h-[180px] w-[70%] -rotate-[6deg]" />
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-[104px] pt-16 sm:px-8 lg:pb-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              data-alatet="mindig"
              src="/logo/abroncsstop.png"
              alt="Abroncs Stop"
              width={768}
              height={320}
              className="h-14 w-auto"
            />
            <p className="mt-3 max-w-[34ch] text-[1.05rem] leading-relaxed text-lablec-halvany">
              {ceg.szlogen}
            </p>
            <address className="mt-8 flex flex-col gap-3 not-italic">
              <a
                href={ceg.telefonHref}
                className="inline-flex items-center gap-3 font-display text-xl font-semibold text-lablec-tinta hover:text-lablec-piros"
              >
                <Phone size={20} weight="fill" className="text-lablec-piros" aria-hidden />
                {ceg.telefonKiiras}
              </a>
              <a
                href={`mailto:${ceg.email}`}
                className="inline-flex min-h-[40px] items-center gap-3 break-words text-lablec-halvany hover:text-lablec-tinta"
              >
                <EnvelopeSimple size={20} className="text-lablec-piros" aria-hidden />
                {ceg.email}
              </a>
              <a
                href={ceg.terkepLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[40px] items-center gap-3 break-words text-lablec-halvany hover:text-lablec-tinta"
              >
                <MapPin size={20} className="text-lablec-piros" aria-hidden />
                {ceg.cim.teljes}
              </a>
              <a
                href={ceg.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[40px] items-center gap-3 break-words text-lablec-halvany hover:text-lablec-tinta"
              >
                <FacebookLogo size={20} className="text-lablec-piros" aria-hidden />
                Abroncs Stop a Facebookon
              </a>
            </address>
          </div>

          <div className="md:col-span-4">
            <h2 className="plakat-vekony text-[12px] text-lablec-halvany">
              Szolgáltatások
            </h2>
            <ul className="mt-5 flex flex-col gap-1">
              {szolgaltatasok.map((sz) => (
                <li key={sz.slug}>
                  <Link
                    href={`/${sz.slug}`}
                    className="inline-flex min-h-[40px] items-center text-lablec-halvany transition-colors hover:text-lablec-piros"
                  >
                    {sz.cim}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/jo-tudni" className="inline-flex min-h-[40px] items-center text-lablec-halvany transition-colors hover:text-lablec-piros">
                  Jó tudni
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="plakat-vekony text-[12px] text-lablec-halvany">
              Nyitvatartás
            </h2>
            <dl className="mt-5 flex flex-col gap-2.5">
              {nyitvatartas.map((n) => (
                <div key={n.nap} className="flex items-baseline justify-between gap-4">
                  <dt className="text-lablec-halvany">{n.nap}</dt>
                  <dd className="font-display font-semibold tabular-nums text-lablec-tinta">
                    {n.ora}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-lablec-halvany">
              Kapcsolattartó: {ceg.kapcsolattarto}
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-lablec-vonal pt-7">
          <nav aria-label="Jogi információk">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              {jogiLinkek.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex min-h-[40px] items-center text-lablec-halvany transition-colors hover:text-lablec-piros"
                  >
                    {l.cim}
                  </Link>
                </li>
              ))}
              <li>
                <SutiBeallitasGomb />
              </li>
            </ul>
          </nav>

          <div className="mt-6 flex flex-col gap-2 text-sm text-lablec-halvany sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {ceg.nev}</p>
            <p>{ceg.cim.teljes}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
