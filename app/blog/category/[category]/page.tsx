import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { blogCategories, blogCategoryDetails, blogPosts, categorySlug } from "@/data/blog-data";
import { canonical, pageMetadata, webPageJsonLd } from "@/lib/site";

type CategoryPageProps = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return blogCategories.map((category) => ({ category: categorySlug(category) }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = blogCategories.find((item) => categorySlug(item) === slug);
  if (!category) return {};
  const detail = blogCategoryDetails[category];
  const metadata = pageMetadata({ title: `${category} | channelmoa Blog`, description: detail.metaDescription, path: `/blog/category/${slug}` });
  if (!detail.indexable) metadata.robots = { index: false, follow: true };
  return metadata;
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = blogCategories.find((item) => categorySlug(item) === slug);
  if (!category) notFound();
  const posts = blogPosts.filter((post) => post.category === category);
  const description = blogCategoryDetails[category].description;
  const categoryUrl = canonical(`/blog/category/${slug}`);
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${categoryUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonical("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: canonical("/blog") },
      { "@type": "ListItem", position: 3, name: category, item: categoryUrl }
    ]
  };
  return <>
    <JsonLd data={[webPageJsonLd({ path: `/blog/category/${slug}`, type: "CollectionPage", name: `${category} articles`, description }), breadcrumbJsonLd]} />
    <nav className="breadcrumbs container" aria-label="Breadcrumb">
      <ol><li><Link href="/">Home</Link></li><li><Link href="/blog">Blog</Link></li><li aria-current="page">{category}</li></ol>
    </nav>
    <PageHero eyebrow="Blog category" title={category} text={description} />
    <section className="section"><div className="container grid-3">{posts.map((post) => <BlogCard key={post.slug} post={post} />)}</div></section>
  </>;
}
