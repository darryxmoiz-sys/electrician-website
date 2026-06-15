import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | PowerPro Electrical Manchester",
  description:
    "Get in touch with PowerPro Electrical. Call 0161 123 4567, email info@powerpro-electrical.co.uk, or fill in our online enquiry form for a free quote.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Whether it's a quick question or a full project quote — we're here to help. Contact us today for a free, no-obligation estimate."
        breadcrumb="Contact"
      />
      <ContactSection />
    </>
  );
}
