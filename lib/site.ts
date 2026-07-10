import type { Metadata } from "next";

export const siteConfig = {
  name: "channelmoa",
  domain: "https://channelmoa.com",
  description:
    "channelmoa is a legal IPTV streaming platform for live TV, sports, VOD, and multi-device entertainment.",
  supportEmail: "support@channelmoa.com",
  supportPhone: "+1 (302) 555-0148"
};

export function canonical(path = "/") {
  return `${siteConfig.domain}${path === "/" ? "" : path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/hero-streaming.png"
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = canonical(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: image, width: 1200, height: 800, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    },
    robots: { index: true, follow: true }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
    email: siteConfig.supportEmail,
    telephone: siteConfig.supportPhone,
    sameAs: [siteConfig.domain]
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.domain,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.domain}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}
