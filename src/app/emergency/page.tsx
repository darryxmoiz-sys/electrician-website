import type { Metadata } from "next";
import EmergencyPage from "@/components/EmergencyPage";

export const metadata: Metadata = {
  title: "24/7 Emergency Electrician Manchester | Call Now: 0161 123 4567",
  description:
    "Emergency electrician in Manchester available 24 hours a day, 7 days a week. Power cuts, tripped fuses, electrical faults — we're on our way within 60 minutes. Call now: 0161 123 4567.",
};

export default function Emergency() {
  return <EmergencyPage />;
}
