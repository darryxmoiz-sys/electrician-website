import type { Metadata } from "next";
import EVChargerPage from "@/components/EVChargerPage";

export const metadata: Metadata = {
  title: "EV Charger Installation Manchester | Home & Commercial | PowerPro",
  description:
    "OZEV-approved EV charger installation in Manchester. Home and commercial EV charge points from £599. Tesla, Pod Point, Zappi and more. Government grant eligible. Call for a free quote.",
};

export default function EVCharger() {
  return <EVChargerPage />;
}
