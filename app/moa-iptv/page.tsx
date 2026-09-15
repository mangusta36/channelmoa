import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MonitorPlay, Server } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { FAQ } from "@/components/Sections";
import { canonical, pageMetadata, siteConfig } from "@/lib/site";
import styles from "./moa-iptv.module.css";

const reviewedDate = "2026-09-15";
const reviewedLabel = "15 September 2026";
const pagePath = "/moa-iptv";
const title = "Moa IPTV (Moa TV) 2026: Status, Identity & What to Know";
const description = "Looking for Moa IPTV or Moa TV? Review service notices, conflicting public information, naming confusion, and related setup resources checked in September 2026.";
const heading = "Moa IPTV / Moa TV: Current Status and What Users Should Know";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: pagePath,
  image: "/icon.png",
  imageWidth: 512,
  imageHeight: 512,
  imageAlt: "channelmoa.online, publisher of this independent resource"
});

const contents = [
  { id: "meaning", label: "What does Moa IPTV refer to?" },
  { id: "current-status", label: "Current service status" },
  { id: "names-and-domains", label: "CatchON, Moa and ChannelMoa names" },
  { id: "app-and-subscription", label: "App vs subscription" },
  { id: "existing-users", label: "Next steps for existing users" },
  { id: "setup-help", label: "Setup resources" },
  { id: "publisher", label: "About channelmoa.online" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "sources", label: "Sources and review notes" }
];

const sources = [
  {
    id: "source-channelmoa-notice",
    name: "channelmoa.com — service notice",
    url: "https://channelmoa.com/",
    observation: "The homepage reviewed on this date reports that its Channelmoa / Catchon service has been permanently discontinued. It also disputes affiliation with other parties using the listed names.",
    limitation: "This records that site's statement. It does not independently establish ownership or the status of every similarly named service."
  },
  {
    id: "source-rebrand",
    name: "channelmoa.com — earlier rebrand article and current destination",
    url: "https://channelmoa.com/why-rebrand.html",
    observation: "Search-indexed text titled “Why CatchON TV Evolved into Moa TV” describes a continuation under new branding. Opening the same URL during this review returned a discontinuation notice instead.",
    limitation: "The older indexed description helps explain the naming history claimed by that site; it is not evidence of continued operation today."
  },
  {
    id: "source-moa-notice",
    name: "moatvapp.shop — Moa TV notice",
    url: "https://moatvapp.shop/",
    observation: "The reviewed page reports that Moa TV has been permanently discontinued and warns against assuming other sites using the name represent its service.",
    limitation: "The notice is attributed to this domain. Its claimed authority and its relationship to other Moa-branded domains have not been independently verified."
  }
];

const questions = [
  {
    question: "What is Moa IPTV?",
    answer: "It is a search term used when looking for Moa-named streaming services or apps. The name alone does not identify a particular operator, website, or subscription. Check the exact domain and app publisher against your original records."
  },
  {
    question: "Is Moa IPTV the same as Moa TV?",
    answer: "People may use the terms interchangeably, but that does not establish that every website or app using them belongs to one organization. This resource keeps each source's claims tied to its domain."
  },
  {
    question: "Is Moa TV still working in 2026?",
    answer: "At the 15 September 2026 review, channelmoa.com and moatvapp.shop displayed discontinuation notices. Older indexed rebrand claims remained visible. These observations cannot establish whether a particular subscription works; no customer account or playback was tested."
  },
  {
    question: "Is channelmoa.online the official Moa TV website?",
    answer: "No. channelmoa.online publishes this independent resource and presents its own platform. It does not claim to be the official Moa TV site, the owner of Moa TV, or a successor to CatchON TV."
  },
  {
    question: "What should I do if my old Moa login stopped working?",
    answer: "Identify your original provider from your signup, billing, and support records. Use that established contact route to check account status before changing the player. channelmoa.online cannot recover accounts operated by another provider."
  },
  {
    question: "Is the Moa TV app the same thing as an IPTV subscription?",
    answer: "A player is software; a subscription is an arrangement with a provider for access. They can be supplied together, but installing or opening an app does not prove that an account remains active or that a similarly named website operates it."
  },
  {
    question: "How can I verify which provider I originally purchased from?",
    answer: "Compare the full website address in your signup confirmation, the merchant information in your payment record, and the support contact used at purchase. Compare the app-store publisher too. If the records disagree, seek clarification through the original contact route before sharing credentials or paying again."
  }
];

export default function MoaIptvPage() {
  const url = canonical(pagePath);
  const breadcrumbId = `${url}#breadcrumb`;
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: heading,
    description,
    inLanguage: "en",
    dateModified: reviewedDate,
    lastReviewed: reviewedDate,
    isPartOf: { "@id": `${siteConfig.domain}/#website` },
    publisher: { "@id": `${siteConfig.domain}/#organization` },
    breadcrumb: { "@id": breadcrumbId },
    citation: sources.map((source) => source.url)
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonical("/") },
      { "@type": "ListItem", position: 2, name: "Moa IPTV", item: url }
    ]
  };

  return (
    <>
      <JsonLd data={[pageJsonLd, breadcrumbJsonLd]} />
      <article className={styles.resource}>
        <nav className="breadcrumbs container" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li aria-current="page">Moa IPTV</li>
          </ol>
        </nav>
        <section className={styles.hero} aria-labelledby="resource-title">
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <span className="eyebrow">Moa IPTV Resource</span>
              <h1 id="resource-title">{heading}</h1>
              <p className={styles.intro}>Searching for a working service or an explanation of an old Moa login? Similar names and conflicting public information can lead to the wrong provider. This reference compares the available notices and explains what they can—and cannot—tell you.</p>
              <div className={styles.metadata}>
                <span>Published by <Link href="/about">channelmoa.online</Link></span>
                <span>Reviewed <time dateTime={reviewedDate}>{reviewedLabel}</time></span>
              </div>
              <div className={styles.heroActions}>
                <a className="btn btn-primary" href="#current-status">Check Current Status <ArrowRight size={17} aria-hidden="true" /></a>
                <Link className="btn btn-secondary" href="/packages">Explore ChannelMoa Plans</Link>
              </div>
            </div>
            <figure className={styles.heroArtwork}>
              <Image src="/images/moa-iptv/moa-iptv-status-hero.webp" alt="Illustration of streaming devices, provider verification, and IPTV service status checks" width={1586} height={992} sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 900px) 620px, (max-width: 1212px) 43vw, 523px" priority />
              <figcaption className={styles.artworkCaption}>
                <span>Independent Resource</span>
                <span>Reviewed Sep 2026</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="container">
          <aside className={styles.summary} aria-label="Status summary">
            <dl className={styles.summaryGrid}>
              <div><dt>Current status</dt><dd>Public information currently conflicts</dd></div>
              <div><dt>Checked notices</dt><dd>Reviewed sites report service discontinuation</dd></div>
              <div><dt>Historical information</dt><dd>Older indexed information describes a rebrand</dd></div>
              <div><dt>Last reviewed</dt><dd><time dateTime={reviewedDate}>{reviewedLabel}</time></dd></div>
            </dl>
            <p className={styles.summaryNote}><strong>Important:</strong> Verify the original provider and domain before sharing credentials or paying again.</p>
          </aside>
        </div>

        <div className={`article ${styles.editorial}`}>
          <nav className={`article-toc ${styles.contents}`} aria-label="Table of contents">
            <h2>On this page</h2>
            <ol>{contents.map((item) => <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>)}</ol>
          </nav>

          <div className={styles.publisherNote}>
          <p>channelmoa.online is the independent publisher of this resource. We do not represent Moa TV or CatchON TV, and we cannot access accounts from another service. This is a dated review of public information, not a live service monitor.</p>
          </div>

          <section>
            <h2 id="meaning">What Does “Moa IPTV” Refer To?</h2>
            <p>Moa IPTV, Moa TV, and MoaTV appear in searches about streaming accounts and players. A spelling variation may describe the same product in one context and a different service in another. A familiar logo or name is not enough to connect two businesses.</p>
            <p>Start with three details: the full domain where you subscribed, the publisher of the app you installed, and the provider that issued your account. Keep those identities separate until your records establish a connection. The source notes below attribute statements to individual websites rather than treating “Moa” as a single verified organization.</p>
          </section>

          <section>
            <h2 id="current-status">Is Moa IPTV / Moa TV Still Working in 2026?</h2>
            <p><strong>The checked websites report discontinuation; older search information still describes a rebrand.</strong> Neither a search result nor an accessible website establishes whether your particular subscription can play content.</p>
            <ul>
              <li><a href="https://channelmoa.com/">channelmoa.com</a> currently displays a notice that its Channelmoa / Catchon service has ended. <a href="#source-channelmoa-notice">Review the source limitations.</a></li>
              <li><a href="https://moatvapp.shop/">moatvapp.shop</a> also displays a Moa TV discontinuation notice. That is the statement of this domain, not an independently verified account of every similarly named service.</li>
              <li>Older search-indexed text for <a href="https://channelmoa.com/why-rebrand.html">channelmoa.com’s rebrand article</a> describes CatchON continuing as Moa TV. The URL now returns a service notice, so its older wording should not be read as a current availability promise.</li>
            </ul>
            <aside className={`card ${styles.statusNote}`} aria-labelledby="status-note">
              <h3 id="status-note">Status note — September 2026</h3>
              <p>Check the exact provider and domain associated with your original subscription before sharing credentials or paying again. This review did not test accounts or playback, verify ownership, or establish a replacement operator. A website continuing to use a name would not settle those questions.</p>
            </aside>
            <p>The notices do not give this review a verified closure date or a detailed explanation of what happened. Older transition language and current closure notices may describe different stages of a service’s history; their coexistence does not establish which other websites, if any, are related.</p>
          </section>

          <section className={styles.featureSection}>
            <div>
            <h2 id="names-and-domains">CatchON TV, Moa TV and ChannelMoa — Why the Names Are Confusing</h2>
            <p>The <a href="#source-rebrand">earlier indexed rebrand article</a> presents Moa TV as a continuation of CatchON TV. We report that as the site’s claim, not as independent proof of a shared owner, team, or infrastructure. The current destination gives readers a different message about availability.</p>
            <p><strong>channelmoa.com and channelmoa.online are different domains.</strong> channelmoa.online publishes this article and presents its own platform. It should not be assumed to be the same organization as channelmoa.com or any historical Moa/CatchON service. We make no claim to be their official website, affiliate, owner, or successor.</p>
            <p>We could not retrieve catchontv.vip during this review and therefore do not verify its current wording or redirect destination. A similar address or a claim of migration is not sufficient evidence to transfer an old account to a new operator.</p>
            </div>
            <figure className={styles.editorialArtwork}>
              <Image src="/images/moa-iptv/moa-iptv-identity-verification.webp" alt="Illustration comparing domains, app publishers, and streaming provider identities" width={1672} height={941} sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 900px) calc(100vw - 32px), (max-width: 1212px) 46vw, 552px" />
            </figure>
          </section>

          <section className={styles.appSection}>
            <div>
            <h2 id="app-and-subscription">Moa TV App vs IPTV Subscription</h2>
            <p>A streaming player is the software on your device. A subscription is the access supplied by an account provider. Some providers supply both, but an app remaining installed—or opening successfully—does not prove that its subscription service is operating.</p>
            <p>Likewise, an expired account, an incorrect login format, and an app playback problem are different issues. Before changing account fields, check which provider supplied them. Our <Link href="/blog/m3u-playlist-xtream-codes-api-setup-guide">M3U playlist and Xtream Codes guide</Link> explains credential formats without requiring you to share them here.</p>
            </div>
            <div className={styles.educationalVisual}>
              <figure className={styles.editorialArtwork}>
                <Image src="/images/moa-iptv/moa-iptv-provider-verification.webp" alt="Diagram showing a streaming player app connecting separately to an IPTV subscription provider" width={1672} height={941} sizes="(max-width: 680px) calc(100vw - 82px), (max-width: 900px) calc(100vw - 88px), (max-width: 1212px) 43vw, 512px" />
              </figure>
              <div className={styles.conceptPanel} role="group" aria-label="Player and provider distinction">
                <dl><dt><MonitorPlay size={26} aria-hidden="true" /><span>Player / app</span></dt><dd>Software on your device</dd></dl>
                <span className={styles.conceptDivider} aria-hidden="true">≠</span>
                <dl><dt><Server size={26} aria-hidden="true" /><span>Subscription provider</span></dt><dd>Access supplied by an account provider</dd></dl>
              </div>
            </div>
          </section>

          <section className={styles.usersSection}>
            <div className={styles.usersIntro}>
            <h2 id="existing-users">What Should Existing Moa IPTV Users Do?</h2>
              <figure className={styles.editorialArtwork}>
                <Image src="/images/moa-iptv/moa-iptv-identity-verification.webp" alt="Illustration of checking subscription records, website domain, app publisher, and provider identity" width={1672} height={941} sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 900px) calc(100vw - 32px), (max-width: 1212px) 48vw, 578px" />
              </figure>
            </div>
            <div>
            <ol className={styles.checklist}>
              <li><strong>Identify the original provider.</strong> Find the complete domain in your purchase or signup confirmation, including whether it ends in .com, .online, or something else.</li>
              <li><strong>Compare your records.</strong> Check the original email, merchant information, app publisher, and support conversation. A new website with similar branding is not a substitute for that record.</li>
              <li><strong>Keep account details private.</strong> Do not send passwords, device keys, playlist addresses, or payment details to an unrelated site because it uses “Moa” in its name.</li>
              <li><strong>Separate account status from player trouble.</strong> Use the original support route to check whether access is active. Note whether the app fails to open, rejects a login, or loads menus but cannot play; avoid deleting the working configuration before recording the symptom.</li>
              <li><strong>Contact the correct operator.</strong> channelmoa.online support can address its own customers’ questions. It cannot recover, transfer, or validate another provider’s subscription.</li>
            </ol>
            <p>If you decide to look for a Moa IPTV alternative, treat it as a new provider decision. Verify the operator, available service, device support, and terms independently; do not assume an old payment or login transfers because the name is similar.</p>
            </div>
          </section>

          <section>
            <h2 id="setup-help">Looking for Setup Help?</h2>
            <p>Once you have identified your provider, choose a guide for the specific question. These resources explain channelmoa onboarding or general device checks; they do not restore a discontinued third-party service.</p>
            <ul className={`article-links ${styles.resourceLinks}`}>
              <li><Link href="/blog/moa-tv-app-setup-guide">How channelmoa differs from Moa TV</Link> — identity clarification and channelmoa onboarding boundaries.</li>
              <li><Link href="/apps">channelmoa-compatible apps and devices</Link> — guidance for this publisher’s own service.</li>
              <li><Link href="/blog/m3u-playlist-xtream-codes-api-setup-guide">M3U and Xtream Codes configuration</Link> — understanding the account format your provider supplied.</li>
              <li><Link href="/blog/samsung-lg-smart-tv-iptv-setup-guide-2026">Samsung and LG Smart TV setup</Link> — device-specific preparation and troubleshooting.</li>
              <li><Link href="/blog/firestick-iptv-setup-optimization">Firestick setup and optimization</Link> — player, storage, and connection checks.</li>
            </ul>
          </section>

          <section>
            <h2 id="publisher">Is channelmoa.online the Same as Moa TV?</h2>
            <p>No. channelmoa.online presents itself as an independent platform and publishes this reference to explain the confusion. It does not claim to own or represent an unrelated Moa TV service. See the <Link href="/blog/moa-tv-app-setup-guide">existing channelmoa and Moa TV clarification</Link> for the onboarding boundary, or <Link href="/about">our publisher and editorial information</Link>.</p>
          </section>

          <section>
            <h2 id="faq">Frequently Asked Questions</h2>
            <FAQ items={questions} />
          </section>

          <section className={styles.sources}>
            <h2 id="sources">Sources and Review Notes</h2>
            <p>Reviewed <time dateTime={reviewedDate}>{reviewedLabel}</time>. These links document statements made by their respective websites; inclusion is not an endorsement or verification of official status. Current page observations are distinguished from older search-indexed text.</p>
            {sources.map((source) => (
              <section key={source.id}>
                <h3 id={source.id}>{source.name}</h3>
                <p><a href={source.url}>{source.url}</a></p>
                <p>{source.observation} {source.limitation}</p>
              </section>
            ))}
            <p><strong>Unverified source:</strong> <a href="https://catchontv.vip/">catchontv.vip</a> could not be retrieved on the review date. No conclusion about its current content, redirects, or service availability is based on that failed retrieval.</p>
            <p>We did not test a subscription, inspect private customer records, or authenticate the operators of these domains. This page records a dated public-source review and does not automatically update. If a notice changes, read the new text in context rather than assuming the older summary still applies.</p>
          </section>

          <aside className="article-cta" aria-labelledby="channelmoa-help">
            <h2 id="channelmoa-help">Already a channelmoa.online customer?</h2>
            <p>For this platform’s own setup questions, share your device model and a description of the issue. Do not send credentials for another provider.</p>
            <Link className="btn btn-secondary" href="/contact">Contact channelmoa.online support</Link>
          </aside>
        </div>
      </article>
    </>
  );
}
