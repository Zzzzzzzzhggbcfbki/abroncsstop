import Image from "next/image";
import Link from "next/link";
import { Phone, EnvelopeSimple, MapPin, FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { ceg, nyitvatartas, szolgaltatasok } from "@/lib/site";
import { jogiLinkek } from "@/lib/jogi";
import { SutiBeallitasGomb } from "./suti-beallitas-gomb";

export function SiteFooter() {
  return (
    <footer className="border-t border-vonal bg-papir-melyebb">
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-[104px] pt-16 sm:px-8 lg:pb-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/logo/abroncsstop.png"
              alt="Abroncs Stop"
              width={768}
              height={320}
              className="h-14 w-auto"
            />
            <p className="mt-3 max-w-[34ch] text-[1.05rem] leading-relaxed text-tinta-halvany">
              {ceg.szlogen}
            </p>
            <address className="mt-8 flex flex-col gap-3 not-italic">
              <a
                href={ceg.telefonHref}
                className="inline-flex items-center gap-3 font-display text-xl font-semibold text-tinta hover:text-piros"
              >
                <Phone size={20} weight="fill" className="text-piros" aria-hidden />
                {ceg.telefonKiiras}
              </a>
              <a
                href={`mailto:${ceg.email}`}
                className="inline-flex min-h-[40px] items-center gap-3 break-words text-tinta-halvany hover:text-tinta"
              >
                <EnvelopeSimple size={20} className="text-piros" aria-hidden />
                {ceg.email}
              </a>
              <a
                href={ceg.terkepLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[40px] items-center gap-3 break-words text-tinta-halvany hover:text-tinta"
              >
                <MapPin size={20} className="text-piros" aria-hidden />
                {ceg.cim.teljes}
              </a>
              <a
                href={ceg.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[40px] items-center gap-3 break-words text-tinta-halvany hover:text-tinta"
              >
                <FacebookLogo size={20} className="text-piros" aria-hidden />
                Abroncs Stop a Facebookon
              </a>
            </address>
          </div>

          <div className="md:col-span-4">
            <h2 className="plakat-vekony text-[12px] text-tinta-halvany">
              Szolgáltatások
            </h2>
            <ul className="mt-5 flex flex-col gap-1">
              {szolgaltatasok.map((sz) => (
                <li key={sz.slug}>
                  <Link
                    href={`/${sz.slug}`}
                    className="inline-flex min-h-[40px] items-center text-tinta-halvany transition-colors hover:text-piros"
                  >
                    {sz.cim}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/jo-tudni" className="inline-flex min-h-[40px] items-center text-tinta-halvany transition-colors hover:text-piros">
                  Jó tudni
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="plakat-vekony text-[12px] text-tinta-halvany">
              Nyitvatartás
            </h2>
            <dl className="mt-5 flex flex-col gap-2.5">
              {nyitvatartas.map((n) => (
                <div key={n.nap} className="flex items-baseline justify-between gap-4">
                  <dt className="text-tinta-halvany">{n.nap}</dt>
                  <dd className="font-display font-semibold tabular-nums text-tinta">
                    {n.ora}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-tinta-halvany">
              Kapcsolattartó: {ceg.kapcsolattarto}
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-vonal pt-7">
          <nav aria-label="Jogi információk">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              {jogiLinkek.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex min-h-[40px] items-center text-tinta-halvany transition-colors hover:text-piros"
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

          <div className="mt-6 flex flex-col gap-2 text-sm text-tinta-halvany sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {ceg.nev}</p>
            <p>{ceg.cim.teljes}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
