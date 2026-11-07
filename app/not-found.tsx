import Link from "next/link";
import { siteConfig } from "@/lib/site";

// Rendered for unmatched URLs and for notFound() calls (unknown blog slugs and categories).
// Next.js returns HTTP 404 and injects <meta name="robots" content="noindex"> automatically,
// so this file only provides the title and the on-page navigation.
export default function NotFound() {
  return (
    <>
      <title>{`Page not found | ${siteConfig.name}`}</title>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Error 404</span>
          <h1>Page not found</h1>
          <p className="lead">The page you requested does not exist or may have moved. Use the links below to continue browsing {siteConfig.name}.</p>
          <div className="article-cta-actions">
            <Link className="btn btn-primary" href="/">Go to Homepage</Link>
            <Link className="btn btn-secondary" href="/blog">Browse the Blog</Link>
            <Link className="btn btn-secondary" href="/packages">View Packages</Link>
            <Link className="btn btn-secondary" href="/contact">Contact Support</Link>
          </div>
        </div>
      </section>
    </>
  );
}
