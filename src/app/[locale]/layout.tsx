import type { Metadata } from "next";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Raleway, Inter, Roboto } from "next/font/google";
import "../globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aspirely | Học ngôn ngữ online 1-1, chỉnh phát âm & cá nhân hoá",
  description: "Nền tảng học ngôn ngữ trực tuyến với giáo viên bản ngữ. Học 1-1 qua video call, tham gia workshop, luyện phát âm chuẩn.",
};

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-roboto',
  display: 'swap',
})

export const dynamic = 'force-static'; // This layout is static and does not change per request

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${raleway.variable} ${inter.variable} ${roboto.variable}`}>
      <head>
        <link rel="preload" as="image" href="/videos/hero-poster.webp" fetchPriority="high"></link>
      </head>
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
