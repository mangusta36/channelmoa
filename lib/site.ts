import type { Metadata } from "next";

export const siteConfig = {
  name: "channelmoa",
  domain: "https://www.channelmoa.online",
  description:
    "channelmoa presents IPTV packages, device guidance, setup support, and rights-aware information for live TV, sports, and VOD viewing.",
  supportEmail: "support@channelmoa.online",
  supportPhone: "+212 753936672"
};

const whatsappNumber = "212753936672";

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
  image = "/images/home-live-sports-viewing.webp",
  imageWidth = 1920,
  imageHeight = 1080,
  imageAlt,
  type = "website",
  publishedTime,
  modifiedTime
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
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
      type,
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
      images: [{ url: imageUrl, width: imageWidth, height: imageHeight, alt: imageAlt || `${siteConfig.name} streaming and device setup` }]
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
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.name,
    url: canonical(),
    email: siteConfig.supportEmail,
    telephone: siteConfig.supportPhone,
    logo: canonical("/icon.png")
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/#website`,
    name: siteConfig.name,
    url: canonical(),
    publisher: { "@id": `${siteConfig.domain}/#organization` }
  };
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.domain}/#service`,
    name: "channelmoa IPTV subscription service",
    serviceType: "Digital IPTV subscription service",
    description: siteConfig.description,
    url: canonical(),
    provider: { "@id": `${siteConfig.domain}/#organization` }
  };
}

export function webPageJsonLd({
  path,
  name,
  description,
  type = "WebPage"
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  const url = canonical(path);
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${siteConfig.domain}/#website` },
    about: { "@id": `${siteConfig.domain}/#organization` }
  };
}
