import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import EmergencyBanner from "@/components/EmergencyBanner";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CertificationsSection from "@/components/CertificationsSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Certified Electricians in Manchester | PowerPro Electrical",
  description:
    "Trusted NICEIC certified electricians in Manchester. 24/7 emergency call-out, EV charger installation, rewiring & fuse board upgrades. Free quotes. Call 0161 123 4567.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <EmergencyBanner />
      <GallerySection />
      <TestimonialsSection />
      <CertificationsSection />
      <CTASection />
    </>
  );
}
