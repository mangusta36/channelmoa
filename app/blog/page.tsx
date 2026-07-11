import type { Metadata } from "next";
import { BlogCard, PageHero } from "@/components/Sections";
import { blogPosts } from "@/data/blog-data";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "channelmoa Blog | Practical IPTV Setup & Streaming Guides",
  description: "Read original channelmoa guides for legal IPTV subscriptions, Smart TV, Android, Firestick, 4K, sports setup, resellers, and buffering diagnosis.",
  path: "/blog",
  image: "/images/streaming-lifestyle.webp"
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHero eyebrow="channelmoa streaming knowledge base" title="Practical streaming guides for confident setup and better viewing" text="Explore original, rights-aware advice for choosing a service, preparing devices, diagnosing playback, planning 4K, and running responsible reseller operations." />
      <section className="section">
        <div className="container grid-3">
          {blogPosts.map((post) => <BlogCard post={post} key={post.slug} />)}
        </div>
      </section>
    </>
  );
}
