import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, pageMetadata, siteConfig, websiteJsonLd } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  ...pageMetadata({
    title: "channelmoa IPTV Streaming Platform | Live TV, Sports & VOD",
    description: "channelmoa is a legal IPTV streaming platform for live TV, sports, VOD, apps, devices, packages, and IPTV reseller solutions.",
    path: "/"
  })
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
