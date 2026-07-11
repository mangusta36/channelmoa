import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "channelmoa Terms & Conditions | Legal IPTV Service Terms",
  description: "Review channelmoa terms for responsible IPTV streaming, subscriptions, trials, compatible devices, customer support, acceptable use, and resellers.",
  path: "/terms-and-conditions"
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms & Conditions" title="channelmoa Terms & Conditions" text="These terms outline responsible use of channelmoa IPTV services, packages, trials, app setup, support, and reseller communications." />
      <div className="article">
        <h2>Legal streaming use</h2>
        <p>channelmoa is presented as a legal, licensed IPTV streaming platform. Users must not use channelmoa services for unauthorized access, infringement, circumvention, redistribution, or any unlawful streaming activity.</p>
        <h2>Subscriptions and trials</h2>
        <p>Trial access is intended to verify device compatibility, app setup, network quality, EPG behavior, and overall service fit before selecting a package. Subscription availability, features, and pricing may change as the service evolves.</p>
        <h2>Device compatibility</h2>
        <p>channelmoa supports common IPTV workflows for Smart TV, Android, Firestick-style devices, iOS, Windows, and compatible boxes. Playback quality depends on internet stability, app performance, device capability, account status, and source availability.</p>
        <h2>Support and reseller communications</h2>
        <p>Support is provided for setup guidance, troubleshooting, renewals, and reseller inquiries. Resellers are responsible for accurate customer communication, legal positioning, and respectful service practices.</p>
      </div>
    </>
  );
}
