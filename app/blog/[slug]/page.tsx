import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { CTASection, FAQ } from "@/components/Sections";
import { blogPosts, getPost } from "@/data/blog-data";
import { blogPresentation } from "@/data/blog-expert-guides";
import { blogEditorialAdditions } from "@/data/blog-editorial-additions";
import { canonical, pageMetadata, siteConfig, whatsappUrl } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type BlogRouteProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: BlogRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.seoTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.ogImage || post.featuredImage || post.image
  });
}

export default async function BlogPostPage({ params }: BlogRouteProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const presentation = blogPresentation[post.slug];
  const editorialAddition = blogEditorialAdditions[post.slug];
  const articleSections = post.slug === "legal-iptv-subscription-checklist-2026"
    ? post.sections.slice(0, 3)
    : post.sections;
  const editorialParagraphLimits: Record<string, number> = {
    "moa-tv-app-setup-guide": 1,
    "iptv-login-watch-world-cup-guide": 2,
    "smart-tv-iptv-setup-mistakes": 4
  };
  const editorialParagraphs = editorialAddition.paragraphs.slice(
    0,
    editorialParagraphLimits[post.slug] ?? editorialAddition.paragraphs.length
  );

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: canonical(post.featuredImage || post.image),
    datePublished: post.date,
    dateModified: post.updated,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.domain },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.domain },
    url: canonical(`/blog/${post.slug}`),
    mainEntityOfPage: canonical(`/blog/${post.slug}`)
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return (
    <>
      <JsonLd data={[blogJsonLd, faqJsonLd]} />
      <article>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">{presentation.topic} · {post.readingTime}</span>
            <h1>{post.title}</h1>
            <p className="lead">{post.description}</p>
            <div className="article-byline">Updated {new Date(post.updated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · channelmoa editorial team</div>
          </div>
        </section>
        <div className="article">
          <figure className="article-featured-image">
            <Image src={post.featuredImage || post.image} alt={post.featuredImageAlt || presentation.visualAlt} width={1200} height={800} sizes="(max-width: 900px) calc(100vw - 32px), 860px" priority />
            <figcaption>{presentation.visualLabel}</figcaption>
          </figure>
          {articleSections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <h3>{section.subheading}</h3>
              {section.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <section className="expert-guide">
            <h2>{presentation.expertHeading}</h2>
            <p>{presentation.expertIntro}</p>
            {presentation.items.map((item, index) => (
              <div className="expert-step" key={item.heading}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.heading}</h3>
                  <p>{item.situation} {item.action}</p>
                  <p><strong>Evidence to collect:</strong> {item.evidence} <strong>Decision rule:</strong> {item.decision}</p>
                </div>
              </div>
            ))}
          </section>
          <section>
            <h2>{editorialAddition.heading}</h2>
            {editorialParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
          <section>
            <h2>Related channelmoa resources</h2>
            <ul className="article-links">
              {post.relatedLinks.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
            </ul>
          </section>
          <section>
            <h2>FAQ</h2>
            <FAQ items={post.faqs} />
          </section>
          <div className="article-cta">
            <h2>{post.cta.heading}</h2>
            <p>{post.cta.text}</p>
            <div className="article-cta-actions">
              <Link className="btn btn-primary" href={whatsappUrl(`Hello channelmoa, I read “${post.title}”. ${post.cta.text} Please send me the relevant details.`)}>Ask on WhatsApp</Link>
              <Link className="btn btn-secondary" href="/packages">Choose a Package</Link>
            </div>
          </div>
        </div>
      </article>
      <CTASection />
    </>
  );
}
