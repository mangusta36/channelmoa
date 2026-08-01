import type { MetadataRoute } from "next";
import { blogPosts, categorySlug, indexableBlogCategories } from "@/data/blog-data";
import { canonical } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { route: "/", lastModified: "2026-08-01" },
    { route: "/services", lastModified: "2026-07-10" },
    { route: "/packages", lastModified: "2026-07-10" },
    { route: "/apps", lastModified: "2026-07-10" },
    { route: "/reseller", lastModified: "2026-08-01" },
    { route: "/blog", lastModified: "2026-08-01" },
    { route: "/about", lastModified: "2026-08-01" },
    { route: "/contact", lastModified: "2026-07-10" },
    { route: "/privacy-policy", lastModified: "2026-07-10" },
    { route: "/terms-and-conditions", lastModified: "2026-07-10" }
  ];

  return [
    ...staticRoutes.map(({ route, lastModified }) => ({
      url: canonical(route),
      lastModified: new Date(`${lastModified}T00:00:00Z`),
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : 0.8
    })),
    ...blogPosts.map((post) => ({
      url: canonical(`/blog/${post.slug}`),
      lastModified: new Date(post.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),
    ...indexableBlogCategories.map((category) => ({
      url: canonical(`/blog/category/${categorySlug(category)}`),
      lastModified: new Date(Math.max(...blogPosts.filter((post) => post.category === category).map((post) => new Date(post.updated).getTime()))),
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
