import React from "react";
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

export default function Home() {
  return (
    <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-brand-light/20 selection:text-brand-dark overflow-x-hidden">
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
