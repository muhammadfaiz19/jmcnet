import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "./components/sections/hero-section";
import { StatsSection } from "./components/sections/stats-section";
import { WhyChooseUsSection } from "./components/sections/why-choose-us-section";
import { PackagesSection } from "./components/sections/packages-section";
import { HowItWorksSection } from "./components/sections/how-it-works-section";
import { TestimonialsSection } from "./components/sections/testimonials-section";
import { FaqSection } from "./components/sections/faq-section";
import { ContactLocationSection } from "./components/sections/contact-location-section";

export const metadata: Metadata = {
  title: "JMCNET - Provider Internet Cepat & Stabil 100% Fiber Optic Cirebon",
  description:
    "PT Jaringan Multimedia Cirebon (JMCNET) adalah layanan provider internet WiFi fiber optic murni di Cirebon. Koneksi cepat, stabil, tanpa batas kuota (unlimited), mulai Rp 166.500/bulan.",
  alternates: {
    canonical: "https://jmcnet.id",
  },
  openGraph: {
    title: "JMCNET - Provider Internet Cepat & Stabil 100% Fiber Optic Cirebon",
    description:
      "PT Jaringan Multimedia Cirebon (JMCNET) adalah layanan provider internet WiFi fiber optic murni di Cirebon. Koneksi cepat, stabil, tanpa batas kuota (unlimited), mulai Rp 166.500/bulan.",
    url: "https://jmcnet.id",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu JMCNET / SGC Network?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JMCNET (PT Jaringan Multimedia Cirebon) adalah penyedia layanan internet fiber optic murni (ISP) yang berkomitmen memberikan koneksi cepat, stabil, dan tanpa batas kuota (unlimited) di wilayah Cirebon dan sekitarnya.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada batasan kuota atau FUP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak ada! Seluruh paket internet fiber optic JMCNET 100% Unlimited tanpa batas kuota pemakaian wajar (FUP). Kecepatan Anda tidak akan pernah diturunkan meskipun pemakaian data sangat tinggi.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara mendaftar dan pasang WiFi JMCNET?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pendaftaran sangat mudah. Anda bisa memilih paket di halaman website ini dan menekan tombol 'Daftar Sekarang' yang akan mengarahkan Anda langsung ke WhatsApp tim teknis/marketing kami. Setelah cek jangkauan lokasi, tim teknis akan segera melakukan instalasi ke rumah atau bisnis Anda.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada biaya instalasi atau sewa modem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk paket promo tertentu, kami memberikan fasilitas GRATIS biaya instalasi dan peminjaman modem ONT fiber optic selama berlangganan. Silakan hubungi admin kami untuk promo aktif bulan ini.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana jika terjadi kendala atau gangguan internet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JMCNET memiliki tim teknis lokal di Cirebon yang standby. Anda dapat menghubungi layanan pelanggan kami via WhatsApp atau telepon untuk penanganan kendala yang cepat dan responsif.",
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

      {/* 1. Hero Section (Full-screen clean corporate without background image) */}
      <HeroSection />

      {/* 2. Internet Packages Section (Products & Pricing) */}
      <PackagesSection />

      {/* 3. Why Choose Us Section (Core Competitive Advantages) */}
      <WhyChooseUsSection />

      {/* 4. How It Works Section (3 Easy Steps to Connect) */}
      <HowItWorksSection />

      {/* 5. Trusted By / Stats Section (Social Proof & Reliability) */}
      <StatsSection />

      {/* 6. Testimonials Section (Real Customer Reviews) */}
      <TestimonialsSection />

      {/* 7. FAQ Section (Answering Common Questions) */}
      <FaqSection />

      {/* 8. Contact & Location Section (Final CTA & Physical Office) */}
      <ContactLocationSection />
    </div>
  );
}
