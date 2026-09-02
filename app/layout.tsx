import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobilHivosav } from "@/components/mobil-hivosav";
import { SutiSav } from "@/components/suti-sav";
import { ceg } from "@/lib/site";
import "./globals.css";

// A wdth tengely adja a keskenyített, plakátszerű címsorokat.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abroncsstop.hu"),
  title: {
    default: "Abroncs Stop | Gumiszerviz Isaszegen",
    template: "%s | Abroncs Stop, Isaszeg",
  },
  description:
    "Gumiszerviz Isaszegen. TPMS, gumihotel, klímatisztítás és felnijavítás a Kossuth Lajos utcában. Telefon: +36 30 621 1195.",
  keywords: [
    "gumiszerviz Isaszeg",
    "gumihotel Isaszeg",
    "TPMS Isaszeg",
    "klímatisztítás Isaszeg",
    "felnijavítás Isaszeg",
  ],
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Abroncs Stop Bt.",
    title: "Abroncs Stop | Gumiszerviz Isaszegen",
    description:
      "Gördülékeny megoldás minden keréken. TPMS, gumihotel, klímatisztítás, felnijavítás.",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ef",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: ceg.nev,
  description:
    "Gumiszerviz Isaszegen: TPMS, gumihotel, klímatisztítás és felnijavítás.",
  url: "https://abroncsstop.hu",
  telephone: ceg.telefon,
  email: ceg.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: ceg.cim.utca,
    postalCode: ceg.cim.iranyitoszam,
    addressLocality: ceg.cim.telepules,
    addressCountry: "HU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [ceg.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <head>
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body className={`${archivo.variable} ${publicSans.variable} antialiased`}>
        <a
          href="#tartalom"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[10px] focus:bg-piros-tolt focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Ugrás a tartalomra
        </a>
        <SiteHeader />
        <main id="tartalom">{children}</main>
        <SiteFooter />
        <MobilHivosav />
        <SutiSav />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
