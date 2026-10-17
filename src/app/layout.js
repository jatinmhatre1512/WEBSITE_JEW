import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getSiteUrl } from '@/lib/siteUrl';

// With metadataBase set, the relative canonical and openGraph.url below resolve
// to absolute production URLs instead of defaulting to localhost.
//
// The browser-tab title is deliberately just the business name. The descriptive
// keywords still live in `description` and `keywords`, which is what search
// engines read for relevance.
export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: 'Jitesh Engineering Works',
  description: 'Jitesh Engineering Works - All Milling, Drilling, Turning Machine & Fabrication. Specialist in Drilling Loom Spares & Textile Parts Machining. Located at M.I.D.C. Tarapur, Boisar, Palghar.',
  keywords: 'CNC machining Boisar, lathe machining services Palghar, metal fabrication Boisar, textile parts machining, drilling loom spares, engineering workshop Palghar, MIDC Tarapur Boisar',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Jitesh Engineering Works',
    description: 'Jitesh Engineering Works - Milling, Drilling, Turning & Fabrication. Textile parts specialist in Boisar, Palghar.',
    url: '/',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Boisar, Palghar" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
