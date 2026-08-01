import { BlogPreview, DeviceCompatibility, FAQ, Hero, HomepageGuidance, PricingCards, ResellerBand, ServiceGrid, StatsStrip, WhyChoose } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/data/site-data";
import { serviceJsonLd, webPageJsonLd } from "@/lib/site";

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };
  const pageJsonLd = webPageJsonLd({
    path: "/",
    name: "channelmoa IPTV Streaming Platform | Live TV, Sports & VOD",
    description: "Explore channelmoa streaming packages, supported apps, device setup guidance, practical troubleshooting, and reseller workflows."
  });

  return (
    <>
      <JsonLd data={[pageJsonLd, serviceJsonLd(), faqJsonLd]} />
      <Hero />
      <section className="section pricing-section" id="packages">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">channelmoa packages</span>
            <h2>Choose a clear plan for your viewing routine</h2>
            <p>Compare four channelmoa plans by duration, one-device allowance, activation guidance, and available setup support.</p>
          </div>
          <PricingCards />
        </div>
      </section>
      <StatsStrip />
      <WhyChoose />
      <section className="section alt">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Complete IPTV service</span>
            <h2>Live TV, sports, VOD, replay, apps, and support in one polished platform</h2>
            <p>channelmoa gives viewers a familiar streaming experience with guided setup, strong device coverage, and flexible packages for homes, sports fans, and partner businesses.</p>
          </div>
          <ServiceGrid compact />
        </div>
      </section>
      <DeviceCompatibility />
      <HomepageGuidance />
      <ResellerBand />
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Streaming guides</span>
            <h2>Learn before you stream</h2>
            <p>Read practical setup, package, sports, device, and troubleshooting resources from the channelmoa blog.</p>
          </div>
          <BlogPreview />
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Helpful answers</span>
            <h2>channelmoa IPTV FAQ</h2>
            <p>Quick answers about IPTV streaming, apps, devices, trials, playback, login safety, and reseller options.</p>
          </div>
          <FAQ />
        </div>
      </section>
    </>
  );
}
