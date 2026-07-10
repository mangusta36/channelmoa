import type { Metadata } from "next";
import { CTASection, FAQ, PageHero, PricingCards } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { packages } from "@/data/site-data";
import { canonical, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "channelmoa IPTV Packages | IPTV Subscription Plans",
  description: "Compare channelmoa IPTV subscription packages for 1, 6, 12, or 24 months of professional streaming access and guided setup.",
  path: "/packages"
});

export default function PackagesPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "channelmoa IPTV Packages",
    description: "IPTV subscription packages for live TV, sports, VOD, app support, and multi-device access.",
    brand: { "@type": "Brand", name: "channelmoa" },
    offers: packages.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: plan.description,
      price: plan.price.replace("$", ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: canonical("/packages")
    }))
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
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
            <p>The 1 Month Basic Package is useful for shorter-term access. The 6 Month Silver Package balances duration and value, while the 12 Month Gold Package fits regular viewers who prefer annual access. The 24 Month Diamond Package offers the strongest long-term price-to-access ratio.</p>
            <p>Before choosing, request a trial and share your main device. Support can help confirm Smart TV, Android, Firestick, iOS, Windows, or box compatibility. That practical check protects the viewing experience and keeps expectations clear.</p>
          </div>
          <FAQ />
        </div>
      </section>
      <CTASection />
    </>
  );
}
