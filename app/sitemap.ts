import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-data";
import { canonical } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/services",
    "/packages",
    "/apps",
    "/reseller",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: canonical(route),
      lastModified: new Date("2026-07-09"),
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : 0.8
    })),
    ...blogPosts.map((post) => ({
      url: canonical(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
