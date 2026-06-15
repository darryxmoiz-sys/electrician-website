import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
  title: {
    default: "PowerPro Electrical | Certified Electricians in Manchester",
    template: "%s | PowerPro Electrical Manchester",
  },
  description:
    "NICEIC certified electricians in Manchester. Available 24/7 for emergency electrical work, EV charger installation, rewiring, fuse board upgrades & more. Free quotes. Call 0161 XXX XXXX.",
  keywords: [
    "electrician Manchester",
    "emergency electrician Manchester",
    "NICEIC electrician Manchester",
    "EV charger installation Manchester",
    "fuse board upgrade Manchester",
    "rewiring Manchester",
    "electrical contractor Manchester",
  ],
  openGraph: {
    title: "PowerPro Electrical | Certified Electricians in Manchester",
    description:
      "NICEIC certified electricians in Manchester. 24/7 emergency call-out. Free quotes. All electrical work guaranteed.",
    type: "website",
    locale: "en_GB",
    url: "https://www.powerpro-electrical.co.uk",
    siteName: "PowerPro Electrical",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PowerPro Electrical Manchester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PowerPro Electrical | Certified Electricians in Manchester",
    description: "NICEIC certified electricians in Manchester. 24/7 emergency call-out.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "your-google-verification-code" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0D0D1A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ElectricalContractor",
              name: "PowerPro Electrical",
              image: "https://www.powerpro-electrical.co.uk/og-image.jpg",
              url: "https://www.powerpro-electrical.co.uk",
              telephone: "+441611234567",
              email: "info@powerpro-electrical.co.uk",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 4, Industrial Estate",
                addressLocality: "Manchester",
                addressRegion: "Greater Manchester",
                postalCode: "M1 1AB",
                addressCountry: "GB",
              },
              geo: { "@type": "GeoCoordinates", latitude: 53.4808, longitude: -2.2426 },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "18:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
              ],
              priceRange: "££",
              currenciesAccepted: "GBP",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
              areaServed: [
                { "@type": "City", name: "Manchester" },
                { "@type": "City", name: "Salford" },
                { "@type": "City", name: "Stockport" },
                { "@type": "City", name: "Trafford" },
                { "@type": "City", name: "Bury" },
                { "@type": "City", name: "Bolton" },
              ],
              sameAs: [
                "https://www.facebook.com/powerpro-electrical",
                "https://www.instagram.com/powerpro_electrical",
                "https://www.trustpilot.com/review/powerpro-electrical.co.uk",
              ],
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "347" },
            }),
          }}
        />
      </head>
      <body>
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <MobileCTABar />
      </body>
    </html>
  );
}
