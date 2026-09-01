import type { Metadata } from "next";
import Image from "next/image";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  FacebookLogo,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import { ceg, nyitvatartas } from "@/lib/site";
import { Bevezeto, Cimsor, GombHoraf, Szakasz } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Terkep } from "@/components/terkep";

export const metadata: Metadata = {
  title: "Kapcsolat",
  description:
    "Abroncs Stop Bt., 2117 Isaszeg, Kossuth Lajos utca 126/A. Telefon: +36 30 621 1195. Nyitvatartás: hétfőtől péntekig 8 és 18 óra között.",
  alternates: { canonical: "/kapcsolat" },
};

export default function Oldal() {
  return (
    <>
      <Szakasz className="pt-10 pb-8 md:pt-14 md:pb-10">
        <Cimsor as="h1" className="max-w-[13ch] text-balance">
          Hol találja
        </Cimsor>
        <Bevezeto className="mt-6 text-[1.15rem]">
          Abroncs Stop Bt., gumiszerviz Isaszegen. Bővebb információért hívja
          munkatársunkat.
        </Bevezeto>
      </Szakasz>

      <section className="px-5 pb-16 sm:px-8 md:pb-24">
        <div className="mx-auto grid w-full max-w-[1240px] gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-[14px] border border-vonal bg-lap p-7 shadow-lagy sm:p-8">
                <h2 className="plakat-vekony text-[12px] text-tinta-halvany">
                  Elérhetőség
                </h2>
                <a
                  href={ceg.telefonHref}
                  className="plakat mt-5 flex items-center gap-3 text-[2.2rem] text-tinta transition-colors hover:text-piros"
                >
                  <Phone size={26} weight="fill" className="text-piros" aria-hidden />
                  {ceg.telefonKiiras}
                </a>
                <p className="mt-2 text-tinta-halvany">{ceg.kapcsolattarto}</p>

                <div className="mt-7 flex flex-col gap-3 border-t border-vonal pt-7">
                  <a
                    href={`mailto:${ceg.email}`}
                    className="inline-flex items-center gap-3 text-tinta transition-colors hover:text-piros"
                  >
                    <EnvelopeSimple size={20} className="text-piros" aria-hidden />
                    {ceg.email}
                  </a>
                  <a
                    href={ceg.terkepLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-start gap-3 text-tinta transition-colors hover:text-piros"
                  >
                    <MapPin size={20} className="mt-0.5 shrink-0 text-piros" aria-hidden />
                    {ceg.cim.teljes}
                  </a>
                  <a
                    href={ceg.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-tinta transition-colors hover:text-piros"
                  >
                    <FacebookLogo size={20} className="text-piros" aria-hidden />
                    Abroncs Stop a Facebookon
                    <ArrowUpRight size={14} className="text-tinta-halvany" aria-hidden />
                  </a>
                </div>

                <GombHoraf href={ceg.telefonHref} className="mt-8 w-full">
                  <Phone size={18} weight="fill" aria-hidden />
                  {ceg.telefonKiiras}
                </GombHoraf>
              </div>

              <div className="rounded-[14px] border border-vonal bg-lap p-7 shadow-lagy sm:p-8">
                <h2 className="plakat-vekony text-[12px] text-tinta-halvany">
                  Nyitvatartás
                </h2>
                <dl className="mt-5 divide-y divide-vonal">
                  {nyitvatartas.map((n) => (
                    <div
                      key={n.nap}
                      className="flex items-baseline justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
                    >
                      <dt className="text-tinta">{n.nap}</dt>
                      <dd className="font-display font-semibold tabular-nums text-tinta">
                        {n.ora}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="flex h-full flex-col gap-4">
              <div className="relative aspect-16/9 overflow-hidden rounded-[14px] border border-vonal bg-papir-melyebb sm:aspect-21/9">
                <Image
                  src="/fotok/muhely-homlokzat.jpg"
                  alt="Az Abroncs Stop műhelyének homlokzata Isaszegen"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <Terkep />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
