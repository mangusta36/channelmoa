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
    image: post.ogImage || post.featuredImage || post.image,
    imageWidth: post.imageWidth || 1200,
    imageHeight: post.imageHeight || 630,
    imageAlt: post.featuredImageAlt,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated
  });
}

function headingId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default async function BlogPostPage({ params }: BlogRouteProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const presentation = blogPresentation[post.slug];
  const editorialAddition = blogEditorialAdditions[post.slug];
  const articleSections = post.sections;
  const editorialParagraphLimits: Record<string, number> = {
    "moa-tv-app-setup-guide": 1,
    "iptv-login-watch-world-cup-guide": 2,
    "smart-tv-iptv-setup-mistakes": 4
  };
  const editorialParagraphs = editorialAddition?.paragraphs.slice(
    0,
    editorialParagraphLimits[post.slug] ?? editorialAddition.paragraphs.length
  ) ?? [];

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonical(`/blog/${post.slug}`)}#article`,
    headline: post.title,
    description: post.description,
    image: canonical(post.featuredImage || post.image),
    datePublished: post.date,
    ...(post.updated !== post.date ? { dateModified: post.updated } : {}),
    author: { "@type": "Organization", name: "channelmoa editorial team", url: canonical("/about") },
    publisher: { "@id": `${siteConfig.domain}/#organization` },
    isPartOf: { "@id": `${canonical("/blog")}#blog` },
    url: canonical(`/blog/${post.slug}`),
    mainEntityOfPage: canonical(`/blog/${post.slug}`),
    articleSection: post.category || presentation?.topic,
    ...(post.primaryKeyword || post.secondaryKeywords?.length ? { keywords: [post.primaryKeyword, ...(post.secondaryKeywords || [])].filter(Boolean).join(", ") } : {})
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonical(`/blog/${post.slug}`)}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonical("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: canonical("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical(`/blog/${post.slug}`) }
    ]
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonical(`/blog/${post.slug}`)}#faq`,
    mainEntity: post.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return (
    <>
      <JsonLd data={[blogJsonLd, breadcrumbJsonLd, ...(post.faqs.length ? [faqJsonLd] : [])]} />
      <article>
        <nav className="breadcrumbs container" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li aria-current="page">{post.title}</li>
          </ol>
        </nav>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">{post.category || presentation?.topic} · {post.readingTime}</span>
            <h1>{post.title}</h1>
            <p className="lead">{post.description}</p>
            <div className="article-byline">
              {post.updated !== post.date ? "Updated" : "Published"} {new Date(post.updated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })} · channelmoa editorial team
            </div>
            <p className="article-editorial-note">Published by the channelmoa editorial team. {post.disclosure || "This article provides general streaming setup guidance and distinguishes device or regional variables where they apply."}</p>
          </div>
        </section>
        <div className="article">
          <figure className="article-featured-image">
            <Image src={post.featuredImage || post.image} alt={post.featuredImageAlt || presentation?.visualAlt} width={post.imageWidth || 1200} height={post.imageHeight || 630} sizes="(max-width: 900px) calc(100vw - 32px), 860px" priority />
            {presentation?.visualLabel ? <figcaption>{presentation.visualLabel}</figcaption> : null}
          </figure>
          {post.tableOfContents?.length ? (
            <nav className="article-toc" aria-label="Table of contents">
              <h2>Table of contents</h2>
              <ol>{articleSections.map((section) => <li key={section.heading}><a href={`#${headingId(section.heading)}`}>{section.heading}</a></li>)}</ol>
            </nav>
          ) : null}
          {post.comparisonTable ? (
            <div className="article-table-wrap">
              <table>
                <caption>{post.comparisonTable.caption}</caption>
                <thead><tr>{post.comparisonTable.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead>
                <tbody>{post.comparisonTable.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={cell} scope="row">{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
          ) : null}
          {articleSections.map((section) => (
            <section key={section.heading}>
              <h2 id={headingId(section.heading)}>{section.heading}</h2>
              {section.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.image ? <Image className="article-inline-image" src={section.image.src} alt={section.image.alt} width={section.image.width} height={section.image.height} sizes="(max-width: 900px) calc(100vw - 32px), 860px" /> : null}
              <h3>{section.subheading}</h3>
              {section.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          {presentation ? <section className="expert-guide">
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
          </section> : null}
          {editorialAddition ? <section>
            <h2>{editorialAddition.heading}</h2>
            {editorialParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section> : null}
          {post.references?.length ? <section>
            <h2>Sources and further reading</h2>
            <ul className="article-links">{post.references.map((item) => <li key={item.href}><a href={item.href} target="_blank" rel="noreferrer">{item.label}</a></li>)}</ul>
          </section> : null}
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
