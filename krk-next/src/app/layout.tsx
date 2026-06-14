import type { Metadata } from 'next';
import { Outfit, Playfair_Display, Bebas_Neue } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KRK Logistics | End-to-End Logistics & Supply Chain Solutions',
  description:
    'KRK Global Logistics delivers integrated 4PL and end-to-end supply chain solutions, covering freight forwarding, transportation, customs clearance, warehousing, distribution, and global supply chain coordination across 175+ countries.',
  keywords: 'KRK Logistics, freight forwarding, supply chain, customs clearance, warehousing, transport, logistics India',
  authors: [{ name: 'KRK Logistics' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} ${bebas.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
