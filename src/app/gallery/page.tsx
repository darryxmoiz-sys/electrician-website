import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Project Gallery | PowerPro Electrical Manchester",
  description:
    "View our recent electrical projects in Manchester — consumer unit upgrades, EV charger installations, rewiring projects, and more. See the quality of our work.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Project Gallery"
        subtitle="See the quality of our work first-hand. Browse recent installations, upgrades and repairs across Greater Manchester."
        breadcrumb="Gallery"
      />
      <GalleryGrid />
      <CTASection />
    </>
  );
}
