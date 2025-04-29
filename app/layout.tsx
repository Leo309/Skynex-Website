import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrganizationSchema from '../components/seo/OrganizationSchema';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  icons: {
    icon: '/images/SKYNEX_500_BLUE.png',
    apple: '/images/SKYNEX_500_BLUE.png',
  },
  title: {
    template: '%s | SKYNEX DIGITAL',
    default: 'SKYNEX DIGITAL',
  },
  description: 'Innovative e-commerce solutions and AI tools for the digital age.',
  keywords: 'e-commerce, AI tools, digital commerce, inflation calculator, tech company, British Columbia, NYC, Vancouver',
  metadataBase: new URL('https://skynexdigital.com'),
  openGraph: {
    title: 'SKYNEX DIGITAL',
    description: 'Innovative e-commerce solutions and AI tools for the digital age.',
    url: 'https://skynexdigital.com',
    siteName: 'SKYNEX DIGITAL',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: 'https://skynexdigital.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SKYNEX DIGITAL',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKYNEX DIGITAL',
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
      <head>
        {/* Script to allow theme switching */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var savedTheme = localStorage.getItem('theme');
              var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
              if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) { }
          })();
        ` }} />
      </head>
      <body className="flex flex-col min-h-screen">
        <OrganizationSchema />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
