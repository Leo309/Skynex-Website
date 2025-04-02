import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrganizationSchema from '../components/seo/OrganizationSchema';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: {
    template: '%s | SKYNEX GLOBAL COMMERCE & TECH INC.',
    default: 'SKYNEX GLOBAL COMMERCE & TECH INC.',
  },
  description: 'Innovative e-commerce solutions and AI tools for the digital age.',
  keywords: 'e-commerce, AI tools, digital commerce, inflation calculator, tech company, British Columbia, NYC, Vancouver',
  metadataBase: new URL('https://skynexdigital.com'),
  openGraph: {
    title: 'SKYNEX GLOBAL COMMERCE & TECH INC.',
    description: 'Innovative e-commerce solutions and AI tools for the digital age.',
    url: 'https://skynexdigital.com',
    siteName: 'SKYNEX GLOBAL',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: 'https://skynexdigital.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SKYNEX GLOBAL COMMERCE & TECH INC.',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKYNEX GLOBAL COMMERCE & TECH INC.',
    description: 'Innovative e-commerce solutions and AI tools for the digital age.',
    images: ['https://skynexdigital.com/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://skynexdigital.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    bing: 'bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <OrganizationSchema />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
