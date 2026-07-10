import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, Headphones, MonitorSmartphone, ShieldCheck, Sparkles, Star, Tv, Zap } from "lucide-react";
import { blogPosts } from "@/data/blog-data";
import { devices, faqs, packages, services, stats, whyChoose } from "@/data/site-data";

export function Hero() {
  return (
    <section className="hero">
      <Image
        className="hero-bg"
        src="/images/hero-premium-streaming.webp"
        alt="Family watching premium IPTV sports and streaming channels on a smart TV"
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
            <span>On Every Device</span>
          </h1>
          <p className="lead">Request a free trial, confirm your device setup, and start streaming with a premium IPTV platform backed by fast activation and real support.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/contact">Get Free Trial <ArrowRight size={18} /></Link>
            <Link className="btn btn-hero-secondary" href="/packages">View Packages</Link>
          </div>
          <div className="trust-badges hero-trust-badges" aria-label="channelmoa trust signals">
            <span><Headphones size={16} /> 24/7 Support</span>
            <span><Zap size={16} /> Fast Activation</span>
            <span><Tv size={16} /> 4K Ready</span>
            <span><MonitorSmartphone size={16} /> Multi-Device</span>
          </div>
          <div className="hero-assurance">
            <ShieldCheck size={18} />
            <span>Secure trial-first setup guidance before you choose a package.</span>
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
          <p>channelmoa is designed to feel polished from the first visit through the first stream: simple package choices, useful setup help, and a dependable multi-device experience.</p>
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
          <Image src="/images/device-compatibility.png" alt="Smart TV, phone, tablet, laptop, and streaming device showing channelmoa compatible IPTV apps" width={1200} height={800} />
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
          <Link className={plan.featured ? "btn btn-primary" : "btn btn-secondary"} href="/contact">Get Started</Link>
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
  return (
    <article className="blog-card">
      <div className="meta"><BadgeCheck size={15} /> {post.readingTime} · {new Date(post.date).getFullYear()}</div>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <Link href={`/blog/${post.slug}`}>Read guide <ArrowRight size={15} /></Link>
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
          <Link className="btn btn-secondary" href="/contact">Get Free Trial</Link>
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
