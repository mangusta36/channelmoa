import type { Metadata } from "next";
import { CTASection, FAQ, PageHero, PricingCards } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/data/site-data";
import { pageMetadata, serviceJsonLd, webPageJsonLd } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "channelmoa IPTV Packages | IPTV Subscription Plans",
  description: "Compare channelmoa IPTV packages for 3, 6, 12, or 24 months, with transparent pricing, supported devices, guided activation, and setup assistance.",
  path: "/packages"
});

export default function PackagesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };
  const pageJsonLd = webPageJsonLd({ path: "/packages", name: "channelmoa IPTV Packages", description: "Compare channelmoa IPTV packages for 3, 6, 12, or 24 months, with transparent pricing, supported devices, guided activation, and setup assistance." });

  return (
    <>
      <JsonLd data={[pageJsonLd, serviceJsonLd(), faqJsonLd]} />
      <PageHero eyebrow="IPTV subscription packages" title="Choose the channelmoa IPTV package that fits your viewing routine" text="Compare flexible legal IPTV streaming packages for live TV, sports, movies, series, VOD, EPG, and multi-device access." />
      <section className="section">
        <div className="container">
          <PricingCards />
        </div>
      </section>
      <section className="section alt">
        <div className="container grid-2">
          <div>
            <h2>How to pick an IPTV subscription length</h2>
            <p>The 3 Month Basic Package is useful for shorter-term access. The 6 Month Silver Package balances duration and value, while the 12 Month Gold Package fits regular viewers who prefer annual access. The 24 Month Diamond Package offers the strongest long-term price-to-access ratio.</p>
            <p>Before choosing, request a trial and share your main device. Support can help confirm Smart TV, Android, Firestick, iOS, Windows, or box compatibility. That practical check protects the viewing experience and keeps expectations clear.</p>
          </div>
          <FAQ />
        </div>
      </section>
      <CTASection />
    </>
  );
}
