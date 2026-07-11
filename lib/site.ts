import type { Metadata } from "next";

export const siteConfig = {
  name: "channelmoa",
  domain: "https://www.channelmoa.online",
  description:
    "channelmoa is a legal IPTV streaming platform for live TV, sports, VOD, and multi-device entertainment.",
  supportEmail: "support@channelmoa.online",
  supportPhone: "+44 7828714977"
};

const whatsappNumber = "447828714977";

export const whatsappMessages = {
  hero: "Hello channelmoa, I want the 12 months offer with 2 months free. Please send me the details.",
  trial: "Hello channelmoa, I want to request a trial. Please send me the setup details.",
  support: "Hello channelmoa, I need help with setup. Please send me support details."
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function canonical(path = "/") {
  return `${siteConfig.domain}${path === "/" ? "/" : path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/hero-streaming.webp"
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = canonical(path);
  const imageUrl = canonical(image);
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
      images: [{ url: imageUrl, width: 1200, height: 800, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
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
