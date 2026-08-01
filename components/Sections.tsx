import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, Headphones, MonitorSmartphone, ShieldCheck, Sparkles, Star, Tv, Zap } from "lucide-react";
import { blogPosts, categorySlug } from "@/data/blog-data";
import { blogPresentation } from "@/data/blog-expert-guides";
import { devices, faqs, packages, services, stats, whyChoose } from "@/data/site-data";
import { whatsappMessages, whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero">
      <Image
        className="hero-bg"
        src="/images/home-live-sports-viewing.webp"
        alt="Family watching a live football match on a television in their living room"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay" />
      <div className="container hero-center">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow"><Star size={16} fill="currentColor" /> Premium IPTV streaming platform</span>
          <h1>
            <span>channelmoa IPTV</span>
            <span>Premium Streaming</span>
            <span>Live TV, Sports & Movies</span>
            <span>Across Popular Devices</span>
          </h1>
          <p className="lead">Request a free trial, confirm your device setup, and start streaming with a premium IPTV platform backed by fast activation and real support.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary hero-offer-btn" href={whatsappUrl(whatsappMessages.hero)}>Get 12 Months — 2 Months Free →</Link>
            <Link className="btn btn-hero-secondary" href="/packages">View Packages</Link>
          </div>
          <div className="trust-badges hero-trust-badges" aria-label="channelmoa trust signals">
            <span><Headphones size={16} /> Setup Support</span>
            <span><Zap size={16} /> Guided Activation</span>
            <span><Tv size={16} /> 4K Ready</span>
            <span><MonitorSmartphone size={16} /> Device Options</span>
          </div>
          <div className="hero-assurance">
            <ShieldCheck size={18} />
            <span>Trial-first device and playback checks before you choose a package.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsStrip() {
  return (
    <div className="container stats" aria-label="channelmoa trust highlights">
      {stats.map(([value, label]) => (
        <div className="stat" key={value}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "grid-4" : "grid-3"}>
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <article className="card" key={service.title}>
            <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="icon-box"><Icon size={22} /></div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        );
      })}
    </div>
  );
}

export function WhyChoose() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Why viewers choose us</span>
          <h2>A premium IPTV experience with support behind every screen</h2>
          <p>channelmoa is designed around simple package choices, useful setup preparation, and guidance for several common device families. Actual compatibility depends on the specific model, app store, software version, and package rules.</p>
        </div>
        <div className="grid-3">
          {whyChoose.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="card" key={item.title}>
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="icon-box"><Icon size={22} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ResellerBand() {
  const items = [
    ["White-label friendly", "Present packages with a polished customer experience."],
    ["Trial workflows", "Qualify new viewers before they commit."],
    ["Renewal support", "Keep accounts organized with clear next steps."],
    ["Device guidance", "Help customers get streaming quickly."]
  ];

  return (
    <section className="section reseller-section">
      <div className="container reseller-panel">
        <div>
          <span className="eyebrow"><Sparkles size={15} /> B2B and reseller ready</span>
          <h2>Launch a cleaner IPTV resale experience without building the platform yourself</h2>
          <p>channelmoa gives partners a premium streaming brand foundation, practical account workflows, and support-ready device guidance for customers who expect quick setup and clear answers.</p>
          <Link className="btn btn-primary" href="/reseller">Explore Reseller <ArrowRight size={18} /></Link>
        </div>
        <div className="reseller-grid">
          {items.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DeviceCompatibility() {
  return (
    <section className="section alt">
      <div className="container grid-2">
        <div>
          <span className="eyebrow"><MonitorSmartphone size={15} /> Device compatibility</span>
          <h2>Stream on the screens your household already trusts</h2>
          <p>channelmoa supports practical IPTV app workflows across living room screens, mobile devices, laptops, and compatible boxes. Share your device during the trial request and support will point you toward the right setup path.</p>
          <ul className="pill-list">
            {devices.map((device) => <li key={device.title}>{device.title}</li>)}
          </ul>
        </div>
        <div className="image-panel">
          <Image src="/images/home-device-setup.webp" alt="Person configuring a media box beside a television, router, laptop, and phone" width={1706} height={922} />
        </div>
      </div>
    </section>
  );
}

export function DeviceGrid() {
  return (
    <div className="grid-3">
      {devices.map((device) => {
        const Icon = device.icon;
        return (
          <article className="card" key={device.title}>
            <div className="icon-box"><Icon size={22} /></div>
            <h3>{device.title}</h3>
            <p>{device.text}</p>
          </article>
        );
      })}
    </div>
  );
}

export function HomepageGuidance() {
  return (
    <>
      <section className="section">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Before choosing a plan</span>
            <h2>Start with the room, device, and viewing routine</h2>
            <p>A streaming package only becomes useful when it works on the screen your household actually uses. Begin with the exact television, phone, tablet, computer, stick, or media box. Record its model, operating-system version, free storage, available app store, remote-control needs, and whether Ethernet is practical. A player that feels comfortable on a phone may be awkward on a television, while an older Smart TV may benefit from a replaceable external device.</p>
            <p>Next, decide what must work during a trial. Test sign-in, guide navigation, subtitles where available, live playback, on-demand browsing, and a normal restart. Run the test in the usual room and at the usual viewing time because Wi-Fi conditions can differ between a daytime phone test and an evening television session. The <Link href="/blog/best-device-for-iptv-2026">streaming-device comparison</Link> explains the hardware tradeoffs, while the <Link href="/blog/legal-iptv-subscription-checklist-2026">subscription checklist</Link> provides a record for terms, regional availability, and support questions.</p>
          </div>
          <div>
            <span className="eyebrow">A practical setup path</span>
            <h2>Move from compatibility to a repeatable baseline</h2>
            <p>Share the full device model, country, connection type, and preferred viewing categories when requesting guidance. Support can then describe the currently available package and app workflow without guessing which platform is in the room. Confirm how the account is entered, how many devices may be registered, how many sessions may play at once, and which limitations depend on the app publisher or device maker.</p>
            <p>After the first successful session, keep a short non-sensitive setup note: device and app version, connection type, working input, and the date of the test. Never include the password. This baseline makes later troubleshooting faster because it separates an account response from a network change, software update, or HDMI problem. For television-specific preparation, use the <Link href="/blog/samsung-lg-smart-tv-iptv-setup-guide-2026">Samsung and LG setup guide</Link>; for a compact player, review the <Link href="/blog/firestick-iptv-setup-optimization">streaming-stick optimization guide</Link>.</p>
            <p>Keep commercial and technical checks separate. A device test can confirm that one setup works today, but it cannot verify future programming, uptime, or regional rights. Review the current package description and applicable terms, save the details supplied for the transaction, and ask a precise question when something is unclear. That record gives the household a practical basis for deciding whether the tested configuration and subscription duration fit its needs.</p>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Playback quality</span>
            <h2>Check the complete path, not one speed result</h2>
            <p>Playback depends on more than the advertised internet tier. The route includes the service source, internet connection, router, Wi-Fi or Ethernet link, playback device, application, HDMI path, television, and sometimes an audio receiver. A high peak speed beside the router does not rule out interference or packet loss near the television. Compare the affected stream with another authorized service, test Ethernet temporarily where possible, and change one condition at a time.</p>
            <p>For higher-resolution viewing, confirm that the selected program is actually available at that resolution in the viewer’s region. Then check decoder support, application settings, HDMI compatibility, display input, and receiver passthrough. The <Link href="/blog/iptv-buffering-root-causes">buffering diagnostic guide</Link> helps classify interruptions, while the <Link href="/blog/iptv-4k-streaming-requirements">4K signal-path guide</Link> covers the additional display and cable checks.</p>
          </div>
          <div>
            <span className="eyebrow">Support preparation</span>
            <h2>Send useful evidence without exposing credentials</h2>
            <p>When something fails, note the exact time and time zone, device, application version, connection type, affected category, and visible error. State whether other applications work and whether the issue affects one item or the whole account. A concise timeline is more useful than repeating a password or making several unrelated configuration changes. Screenshots should hide usernames, playlist addresses, QR codes, payment details, and other private information.</p>
            <p>Major live events deserve an early rehearsal. Confirm the authorized service for the viewer’s location, account status, event time, application update, remote batteries, network conditions, and a permitted backup device before the event begins. The <Link href="/blog/live-sports-streaming-setup-guide">live-sports setup guide</Link> provides the complete workflow. Businesses supporting customers should also review the <Link href="/blog/iptv-reseller-business-starter-guide">reseller operations guide</Link> before defining packages, support boundaries, records, or renewal processes.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export function PricingCards() {
  return (
    <div className="grid-4">
      {packages.map((plan) => (
        <article className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
          {plan.featured ? <span className="popular-badge">Popular</span> : null}
          <h3>{plan.name}</h3>
          <span className="plan-duration">{plan.duration}</span>
          <p>{plan.description}</p>
          <div className="price">{plan.price}<span> / {plan.duration.toLowerCase()}</span></div>
          <ul className="feature-list">
            {plan.features.map((feature) => (
              <li key={feature}><Check size={17} /> {feature}</li>
            ))}
          </ul>
          <Link className={plan.featured ? "btn btn-primary" : "btn btn-secondary"} href={whatsappUrl(plan.whatsappMessage)}>Get Started</Link>
        </article>
      ))}
    </div>
  );
}

export function FAQ({ items = faqs }: { items?: typeof faqs }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <article className="faq-item" key={item.question}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </article>
      ))}
    </div>
  );
}

export function BlogCard({ post }: { post: (typeof blogPosts)[number] }) {
  const presentation = blogPresentation[post.slug];
  return (
    <article className="blog-card">
      <div className="blog-card-image">
        <Image src={post.featuredImage || post.image} alt={post.featuredImageAlt || presentation?.visualAlt} width={post.imageWidth || 1200} height={post.imageHeight || 630} sizes="(max-width: 680px) 100vw, (max-width: 1020px) 50vw, 33vw" />
      </div>
      <div className="meta"><BadgeCheck size={15} /> <Link href={`/blog/category/${categorySlug(post.category || presentation?.topic || "Streaming guides")}`}>{post.category || presentation?.topic}</Link> · {post.readingTime}</div>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <Link href={`/blog/${post.slug}`}>Read Guide <ArrowRight size={15} /></Link>
    </article>
  );
}

export function BlogPreview({ count = 3 }: { count?: number }) {
  return (
    <div className="grid-3">
      {blogPosts.slice(0, count).map((post) => <BlogCard post={post} key={post.slug} />)}
    </div>
  );
}

export function CTASection() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>Ready to test channelmoa IPTV on your device?</h2>
            <p>Request a free trial and include your device type so support can recommend the right setup path.</p>
          </div>
          <Link className="btn btn-secondary" href={whatsappUrl(whatsappMessages.trial)}>Get Trial</Link>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="lead">{text}</p>
      </div>
    </section>
  );
}
