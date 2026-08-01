import type { Metadata } from "next";
import Link from "next/link";
import { CTASection, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, webPageJsonLd, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "channelmoa IPTV Reseller Program | Business Guide",
  description: "Explore channelmoa IPTV reseller workflows for responsible customer onboarding, account operations, renewals, device setup, and support planning.",
  path: "/reseller"
});

export default function ResellerPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ path: "/reseller", name: "channelmoa IPTV Reseller Program", description: "Explore channelmoa IPTV reseller workflows for responsible customer onboarding, account operations, renewals, device setup, and support planning." })} />
      <PageHero eyebrow="IPTV reseller" title="Build an IPTV reseller business with channelmoa support workflows" text="channelmoa reseller options help businesses manage trials, packages, renewals, device questions, and customer support with a legal-first IPTV platform." />
      <section className="section">
        <div className="container grid-3">
          <h2 className="sr-only">channelmoa reseller operations</h2>
          {["Account operations", "Customer setup", "Renewal planning"].map((title) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>Run IPTV reseller workflows with clear package information, responsible customer expectations, and support that understands apps, devices, and troubleshooting.</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section alt">
        <div className="container grid-2">
          <div>
            <h2>Responsible reseller growth starts with clarity</h2>
            <p>A strong IPTV reseller business depends on more than pricing. Customers need legal streaming positioning, compatible app recommendations, renewal reminders, practical support, and realistic expectations about internet speed and device performance. channelmoa helps resellers organize those moving parts so the customer experience remains consistent.</p>
            <p>Use the reseller page alongside the channelmoa services, packages, and blog guides to train support conversations. The result is a more professional IPTV service provider relationship and a better path to long-term subscriptions.</p>
            <p><Link href="/blog/iptv-reseller-business-starter-guide">Read the lawful IPTV reseller business operations guide</Link> before setting prices or onboarding customers.</p>
            <Link className="btn btn-primary" href={whatsappUrl("Hello channelmoa, I want to request reseller details. Please send me the setup details.")}>Request reseller details</Link>
          </div>
          <div className="card">
            <h3>Reseller fit</h3>
            <ul className="feature-list">
              <li>Recurring IPTV subscription customers</li>
              <li>Device and app setup assistance</li>
              <li>Trial-to-package conversion workflows</li>
              <li>Legal-first customer communication</li>
            </ul>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
