import type { Metadata } from "next";
import { CTASection, FAQ, PageHero, ServiceGrid } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { faqs, services } from "@/data/site-data";
import { canonical, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "channelmoa IPTV Services | Live TV, Sports, VOD & Support",
  description: "Explore channelmoa IPTV services for legal live TV, sports, VOD, EPG, multi-device access, reseller panels, and 24/7 support.",
  path: "/services"
});

export default function ServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "channelmoa IPTV Services",
    provider: { "@type": "Organization", name: "channelmoa" },
    url: canonical("/services"),
    serviceType: "Legal IPTV streaming service",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "channelmoa IPTV service catalog",
      itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title } }))
    }
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <PageHero eyebrow="channelmoa IPTV services" title="Legal IPTV live TV, sports, VOD, apps, and support" text="channelmoa combines licensed IPTV streaming access with helpful setup support, device guidance, EPG workflows, and reseller-friendly operations." />
      <section className="section">
        <div className="container">
          <ServiceGrid />
        </div>
      </section>
      <section className="section alt">
        <div className="container grid-2">
          <div>
            <h2>A complete IPTV streaming service provider experience</h2>
            <p>channelmoa is designed for viewers who want a modern IPTV subscription without confusion. Live TV, IPTV sports, IPTV VOD, EPG access, device setup, renewals, and support all belong to the same service journey. That makes the platform easier to evaluate during a free trial and easier to keep using after a package is active.</p>
            <p>Every page presents channelmoa as a legal, licensed streaming platform. The service avoids unrealistic claims and focuses on compatible apps, stable configuration, and clear support. Whether you watch on Smart TV, Android, Firestick, iOS, Windows, or a supported box, the setup path begins with matching the account to the device.</p>
          </div>
          <FAQ items={faqs.slice(0, 3)} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
