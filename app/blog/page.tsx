import type { Metadata } from "next";
import { BlogCard, PageHero } from "@/components/Sections";
import { blogPosts } from "@/data/blog-data";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "channelmoa IPTV Blog | Streaming Guides, Apps, Sports & VOD",
  description: "Read channelmoa IPTV guides for legal streaming, Smart TV, Android, Firestick, 4K, sports, subscriptions, resellers, and buffering fixes.",
  path: "/blog",
  image: "/images/streaming-lifestyle.png"
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHero eyebrow="channelmoa IPTV blog" title="Helpful IPTV streaming guides for apps, packages, sports, VOD, and support" text="Browse practical channelmoa resources for legal IPTV streaming, device setup, subscription planning, 4K readiness, reseller operations, and troubleshooting." />
      <section className="section">
        <div className="container grid-3">
          {blogPosts.map((post) => <BlogCard post={post} key={post.slug} />)}
        </div>
      </section>
    </>
  );
}
