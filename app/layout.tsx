import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { TopBar } from "./components/top-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jmcnet.id"),
  title: {
    default: "JMCNET - Provider Internet Cepat & Stabil 100% Fiber Optic Cirebon",
    template: "%s | JMCNET Cirebon",
  },
  icons: {
    icon: "/logo-removebg.png",
  },
  description:
    "PT Jaringan Multimedia Cirebon (JMCNET) adalah layanan provider internet WiFi fiber optic murni di Cirebon. Koneksi cepat, stabil, tanpa batas kuota (unlimited), dengan harga terjangkau dan gratis maintenance.",
  keywords: [
    "provider internet cirebon",
    "wifi murah cirebon",
    "jmcnet",
    "jmc net",
    "pt jaringan multimedia cirebon",
    "internet fiber optic cirebon",
    "pasang wifi cirebon",
    "isp cirebon",
    "internet unlimited cirebon",
    "wifi arjawinangun",
    "jaringan multimedia cirebon",
  ],
  authors: [{ name: "PT Jaringan Multimedia Cirebon", url: "https://jmcnet.id" }],
  creator: "PT Jaringan Multimedia Cirebon",
  publisher: "PT Jaringan Multimedia Cirebon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "JMCNET - Provider Internet Cepat & Stabil 100% Fiber Optic Cirebon",
    description:
      "Koneksi internet fiber optic murni tanpa batas kuota di wilayah Cirebon. Pilihan paket hemat mulai Rp 130.000/bulan dengan gratis maintenance & sewa modem.",
    url: "https://jmcnet.id",
    siteName: "JMCNET",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo-removebg.png",
        width: 1200,
        height: 630,
        alt: "JMCNET - PT Jaringan Multimedia Cirebon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JMCNET - Provider Internet Cepat & Stabil Cirebon",
    description:
      "Koneksi internet fiber optic murni tanpa batas kuota di wilayah Cirebon. Stabil, cepat, dan ekonomis.",
    images: ["/logo-removebg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InternetService",
  name: "PT Jaringan Multimedia Cirebon (JMCNET)",
  alternateName: "JMC Net",
  url: "https://jmcnet.id",
  logo: "https://jmcnet.id/logo-removebg.png",
  description:
    "Penyedia layanan internet fiber optic terpercaya di wilayah Cirebon dengan koneksi stabil dan tanpa batas kuota.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Arjawinangun",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+62-851-7999-7972",
      contactType: "customer service",
      availableLanguage: ["Indonesian"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+62-851-7999-7975",
      contactType: "customer service",
      availableLanguage: ["Indonesian"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
