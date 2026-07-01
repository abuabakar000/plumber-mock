import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import MapSection from "@/components/MapSection";
import WhyUsSection from "@/components/WhyUsSection";
// import ProcessSection from "@/components/ProcessSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-zinc-950">
        <Hero />
        <MapSection />
        <ServicesSection />
        <TrustSection />
        <WhyUsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
