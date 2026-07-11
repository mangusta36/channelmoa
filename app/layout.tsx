import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, pageMetadata, siteConfig, websiteJsonLd } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }]
  },
  ...pageMetadata({
    title: "channelmoa IPTV Streaming Platform | Live TV, Sports & VOD",
    description: "Explore channelmoa legal IPTV streaming services, transparent packages, supported apps, device setup guidance, practical help, and reseller workflows.",
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
