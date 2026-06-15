import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesDetail from "@/components/ServicesDetail";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Electrical Services Manchester | Rewiring, Fuse Boards, EV Chargers",
  description:
    "Full range of electrical services in Manchester: rewiring, consumer unit upgrades, EV charger installation, emergency repairs, PAT testing, smart home automation & more. NICEIC certified.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Electrical Services"
        subtitle="From emergency repairs to full rewires — we've got Manchester covered with expert electrical solutions you can trust."
        breadcrumb="Services"
      />
      <ServicesDetail />
      <CTASection />
    </>
  );
}
