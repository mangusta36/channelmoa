import type { Metadata } from "next";
import { CTASection, PageHero } from "@/components/Sections";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About channelmoa | Legal IPTV Streaming Platform",
  description: "Learn how channelmoa approaches legal IPTV streaming with clear packages, practical device guidance, responsible service, and helpful setup support.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About channelmoa" title="channelmoa makes legal IPTV streaming easier to understand and enjoy" text="channelmoa is built for viewers and resellers who want live TV, sports, VOD, device guidance, and support from one organized IPTV service provider." />
      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Our approach</h2>
            <p>channelmoa focuses on a clear, legal IPTV streaming experience. The platform brings together subscription packages, device setup, app recommendations, VOD access, live TV support, IPTV sports viewing, and reseller workflows without confusing customers or making unrealistic promises.</p>
            <p>Viewers should know what they are signing up for, which device they plan to use, and how to get support when setup questions appear. That is why channelmoa emphasizes trials, documentation, device compatibility, and helpful customer communication across the website.</p>
          </div>
          <div className="card">
            <h3>What channelmoa values</h3>
            <ul className="feature-list">
              <li>Legal and licensed streaming positioning</li>
              <li>Helpful support before and after purchase</li>
              <li>Clear IPTV subscription choices</li>
              <li>Practical setup for popular devices</li>
            </ul>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
