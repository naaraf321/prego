import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig, website } from "@/content/website";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  preload: true,
});

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: website.seo.defaultTitle,
    template: website.seo.titleTemplate,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "Restaurant",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: website.seo.openGraphTitle,
    description: website.seo.openGraphDescription,
    url: "/",
    siteName: siteConfig.name,
    locale: website.seo.locale,
    type: "website",
    images: [
      {
        url: website.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} in ${siteConfig.address.locality}, ${siteConfig.address.countryName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: website.seo.twitterTitle,
    description: website.seo.twitterDescription,
    images: [website.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: googleVerification ? { google: googleVerification } : undefined,
  other: {
    "geo.region": "MT-60",
    "geo.placename": siteConfig.address.locality,
    google: "notranslate",
  },
  formatDetection: { telephone: true, address: true, email: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={website.seo.language} className={`${inter.variable} ${archivo.variable}`}>
      <head>
        <link rel="preconnect" href="https://app.tableo.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
