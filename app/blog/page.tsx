import type { Metadata } from "next";
import { BlogCard, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "@/data/blog-data";
import { canonical, pageMetadata, siteConfig, webPageJsonLd } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "channelmoa Blog | Practical IPTV Setup & Streaming Guides",
  description: "Read original channelmoa guides for legal IPTV subscriptions, Smart TV, Android, Firestick, 4K, sports setup, resellers, and buffering diagnosis.",
  path: "/blog",
  image: "/images/streaming-lifestyle.webp"
});

export default function BlogIndexPage() {
  const pageJsonLd = webPageJsonLd({ path: "/blog", type: "CollectionPage", name: "channelmoa Blog", description: "Read original channelmoa guides for legal IPTV subscriptions, Smart TV, Android, Firestick, 4K, sports setup, resellers, and buffering diagnosis." });
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${canonical("/blog")}#blog`,
    name: "channelmoa Blog",
    url: canonical("/blog"),
    publisher: { "@id": `${siteConfig.domain}/#organization` },
    blogPost: blogPosts.map((post) => ({ "@id": `${canonical(`/blog/${post.slug}`)}#article` }))
  };
  return (
    <>
      <JsonLd data={[pageJsonLd, blogJsonLd]} />
      <PageHero eyebrow="channelmoa streaming knowledge base" title="Practical streaming guides for confident setup and better viewing" text="Explore original, rights-aware advice for choosing a service, preparing devices, diagnosing playback, planning 4K, and running responsible reseller operations." />
      <section className="section">
        <div className="container grid-3">
          {blogPosts.map((post) => <BlogCard post={post} key={post.slug} />)}
        </div>
      </section>
    </>
  );
}
