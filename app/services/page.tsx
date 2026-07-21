import type { Metadata } from "next";
import { CTASection, FAQ, PageHero, ServiceGrid } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/data/site-data";
import { pageMetadata, serviceJsonLd, webPageJsonLd } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "channelmoa IPTV Services | Live TV, Sports, VOD & Support",
  description: "Explore channelmoa IPTV services for legal live TV, sports, VOD, EPG, supported devices, reseller workflows, activation, and setup assistance.",
  path: "/services"
});

export default function ServicesPage() {
  const faqItems = faqs.slice(0, 3);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };
  const pageJsonLd = webPageJsonLd({ path: "/services", name: "channelmoa IPTV Services", description: "Explore channelmoa IPTV services for legal live TV, sports, VOD, EPG, supported devices, reseller workflows, activation, and setup assistance." });

  return (
    <>
      <JsonLd data={[pageJsonLd, serviceJsonLd(), faqJsonLd]} />
      <PageHero eyebrow="channelmoa IPTV services" title="Legal IPTV live TV, sports, VOD, apps, and support" text="channelmoa combines licensed IPTV streaming access with helpful setup support, device guidance, EPG workflows, and reseller-friendly operations." />
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <h2>channelmoa streaming services and setup support</h2>
          </div>
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
          <FAQ items={faqItems} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
