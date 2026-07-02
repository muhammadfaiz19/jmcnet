import React from "react";
import type { Metadata } from "next";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/sections/hero-section";
import { StatsSection } from "./components/sections/stats-section";
import { AboutSection } from "./components/sections/about-section";
import { WhyChooseUsSection } from "./components/sections/why-choose-us-section";
import { ParallaxSection } from "./components/parallax-section";
import { PackagesSection } from "./components/sections/packages-section";
import { TermsPaymentSection } from "./components/sections/terms-payment-section";
import { HowItWorksSection } from "./components/sections/how-it-works-section";
import { TestimonialsSection } from "./components/sections/testimonials-section";
import { FaqSection } from "./components/sections/faq-section";
import { ContactLocationSection } from "./components/sections/contact-location-section";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "JMCNET - Provider Internet Cepat & Stabil 100% Fiber Optic Cirebon",
  description:
    "PT Jaringan Multimedia Cirebon (JMCNET) adalah layanan provider internet WiFi fiber optic murni di Cirebon. Koneksi cepat, stabil, tanpa batas kuota (unlimited), mulai Rp 166.500/bulan.",
  alternates: {
    canonical: "https://jmcnet.id",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah ada FUP (Fair Usage Policy) pada paket JMCNET?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tidak ada. Semua paket internet JMCNET bersifat Unlimited tanpa batasan kuota maupun penurunan kecepatan (Tanpa FUP). Anda bebas mendownload, streaming, dan berselancar sepuasnya kapan saja.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses instalasi jaringan internet?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Proses instalasi biasanya memakan waktu 1 sampai 3 hari kerja setelah pendaftaran disetujui. Tim teknisi profesional kami akan melakukan survei lokasi dan pemasangan kabel fiber optic secara cepat dan rapi.",
      },
    },
    {
      "@type": "Question",
      name: "Apa saja persyaratan dokumen untuk mendaftar berlangganan JMCNET?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Calon pelanggan cukup melampirkan foto Kartu Tanda Pengenal (KTP) yang sah serta mengisi formulir pendaftaran berlangganan.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana sistem pembayaran bulanan dan kapan jatuh temponya?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Sistem berlangganan bersifat PRABAYAR (pembayaran dilakukan di muka). Jatuh tempo pembayaran adalah setiap tanggal 1 (satu) setiap bulannya melalui transfer ke rekening resmi kami: Bank BRI 0107010045 - 39304 a.n. PT JARINGAN MULTIMEDIA CIREBON.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah modem router Wi-Fi dipinjamkan secara gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ya, kami meminjamkan Fiber Modem ONT berkualitas secara gratis selama masa berlangganan. Biaya aktivasi Rp 150.000 merupakan biaya sewa pakai alat tersebut sekaligus instalasi kabel fiber.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-brand-light/20 selection:text-brand-dark overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Trusted By / Stats Section */}
      <StatsSection />

      {/* 4. About JMCNET Section */}
      <AboutSection />

      {/* 5. Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* 6. Parallax Transition Section */}
      <ParallaxSection
        backgroundImage="/images/parallax_network.png"
        headline="Menghubungkan Cirebon dengan Infrastruktur Tercepat"
        subheadline="Jaringan backbone fiber optic murni JMCNET didukung teknologi termutakhir untuk performa digital terbaik tanpa hambatan."
      />

      {/* 7. Internet Packages Section */}
      <PackagesSection />

      {/* 8. Terms & Payment Section */}
      <TermsPaymentSection />

      {/* 9. How It Works Section */}
      <HowItWorksSection />

      {/* 10. Testimonials Section */}
      <TestimonialsSection />

      {/* 11. FAQ Section */}
      <FaqSection />

      {/* 12. Contact & Location Section */}
      <ContactLocationSection />

      {/* 13. Footer Section */}
      <Footer />
    </div>
  );
}
