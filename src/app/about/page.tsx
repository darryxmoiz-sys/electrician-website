import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutContent from "@/components/AboutContent";
import CertificationsSection from "@/components/CertificationsSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About PowerPro Electrical | Manchester's Trusted Electricians Since 2008",
  description:
    "Learn about PowerPro Electrical — Manchester's trusted NICEIC certified electrical contractor since 2008. Meet our team, understand our values, and see why over 2,000 homes and businesses trust us.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About PowerPro Electrical"
        subtitle="Manchester's most trusted electrical contractor since 2008. Over 2,000 satisfied customers and counting."
        breadcrumb="About"
      />
      <AboutContent />
      <CertificationsSection />
      <CTASection />
    </>
  );
}
