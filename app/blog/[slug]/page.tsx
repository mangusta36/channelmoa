import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { CTASection, FAQ } from "@/components/Sections";
import { blogPosts, getPost } from "@/data/blog-data";
import { canonical, pageMetadata, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type BlogRouteProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: BlogRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: `${post.title} | channelmoa`,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image
  });
}

export default async function BlogPostPage({ params }: BlogRouteProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: canonical(post.image),
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
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
            <span className="eyebrow">{post.readingTime}</span>
            <h1>{post.title}</h1>
            <p className="lead">{post.description}</p>
          </div>
        </section>
        <div className="article">
          <Image src={post.image} alt={`${post.title} visual guide for channelmoa IPTV viewers`} width={1200} height={800} priority />
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <section>
            <h2>Related channelmoa resources</h2>
            <p>Continue with the <Link href="/services">services overview</Link>, compare <Link href="/packages">IPTV subscription packages</Link>, review supported <Link href="/apps">IPTV apps</Link>, or ask support for a free trial through the <Link href="/contact">contact page</Link>.</p>
          </section>
          <section>
            <h2>FAQ</h2>
            <FAQ items={post.faqs} />
          </section>
          <div className="article-cta">
            <h2>Try channelmoa on your device</h2>
            <p>Share your device type with support and request a free trial before choosing the IPTV package that fits your home.</p>
            <Link className="btn btn-primary" href="/contact">Get Free Trial</Link>
          </div>
        </div>
      </article>
      <CTASection />
    </>
  );
}
