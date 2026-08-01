import type { Metadata } from "next";
import { CTASection, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, webPageJsonLd } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About channelmoa | IPTV Packages and Setup Guidance",
  description: "Learn how channelmoa presents streaming packages, practical device guidance, rights-aware information, and setup support.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ path: "/about", type: "AboutPage", name: "About channelmoa", description: "Learn how channelmoa presents streaming packages, practical device guidance, rights-aware information, and setup support." })} />
      <PageHero eyebrow="About channelmoa" title="channelmoa makes IPTV setup easier to understand" text="channelmoa is built for viewers and resellers comparing live TV, sports, VOD, device guidance, and support from one service provider." />
      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Our approach</h2>
            <p>channelmoa focuses on a clear, rights-aware IPTV setup experience. The website brings together subscription packages, device preparation, app guidance, VOD and live-TV information, sports-viewing checks, and reseller workflows. Customers should confirm current content rights and regional availability for the package they are considering.</p>
            <p>Viewers should know what they are signing up for, which device they plan to use, and how to get support when setup questions appear. That is why channelmoa emphasizes trials, documentation, device compatibility, and helpful customer communication across the website.</p>
          </div>
          <div className="card">
            <h3>What channelmoa values</h3>
            <ul className="feature-list">
              <li>Rights-aware streaming information</li>
              <li>Helpful support before and after purchase</li>
              <li>Clear IPTV subscription choices</li>
              <li>Practical setup for popular devices</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2>Editorial transparency</h2>
          <p>Blog articles are published by the channelmoa editorial team. Device and setup guides identify conditions that can vary by model, software version, country, application store, network, and service terms. First-party articles about channelmoa are labeled as such and separate information visible on this website from general comparison guidance.</p>
          <p>Articles provide general educational information, not legal, tax, or professional advice. Readers should verify current device documentation, regional availability, service terms, and applicable local requirements before acting.</p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
