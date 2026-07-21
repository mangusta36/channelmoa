# Site-wide structured-data and rich-results audit

Audit date: 2026-07-21  
Canonical origin: `https://www.channelmoa.online`  
Scope: all 20 public HTML routes, shared layout, metadata helpers, JSON-LD components, generated production HTML, and referenced schema images.

## A. Root causes

### Critical

- `/` emitted a `Product` named “channelmoa IPTV Subscription” with four nested `Offer` entities. This digital subscription service was being presented as a retail product, causing Google to create the invalid Merchant Listings item reported in Search Console.
- `/packages` emitted a second `Product` with four nested `Offer` entities. Visible prices alone do not make this service appropriate for Merchant Listings.

### High

- `/services` emitted an `OfferCatalog` with eight nested `Offer` entities. Although attached to a Service, the commercial offer graph was unnecessary and inconsistent with the requested service-only model.
- Organization, WebSite, Service, author, and publisher entities lacked normalized, reusable IDs, making entity reconciliation less reliable across pages.

### Medium

- `/packages` and `/services` contained visible FAQ content without matching FAQPage data.
- The blog index had no CollectionPage or Blog entity.
- General, about, and contact routes lacked an explicit page-type entity.
- BlogPosting publisher and author were embedded/inconsistent rather than using the stable publisher reference and the visible byline name.

### Low

- No additional low-severity invalid markup remained. SearchAction had already been removed before this audit. No shipping, return-policy, rating, review, BreadcrumbList, LocalBusiness, SoftwareApplication, or VideoObject markup was present.

## Site-wide route audit

“Merchant” means Product, Offer, or AggregateOffer markup capable of contributing to merchant interpretation. FAQPage is emitted only where the same questions and answers are visible.

| URL | Page type | Schema before | Problem | Schema after | Merchant | Critical errors | Warnings | Status / action |
|---|---|---|---|---|---|---|---|---|
| `/` | Home | Organization, WebSite, Product, Offer, FAQPage | Invalid digital-service Product/Offers | Organization, WebSite, WebPage, Service, FAQPage | No | 0 | 0 | Fixed; merchant schema removed |
| `/services` | Service overview | Organization, WebSite, Service, OfferCatalog, Offer | Unnecessary offer graph; no page/FAQ entity | Organization, WebSite, WebPage, Service, FAQPage | No | 0 | 0 | Fixed |
| `/packages` | Subscription/pricing | Organization, WebSite, Product, Offer | Invalid digital-service Product/Offers; visible FAQ unrepresented | Organization, WebSite, WebPage, Service, FAQPage | No | 0 | 0 | Fixed; merchant schema removed |
| `/apps` | App setup guide | Organization, WebSite | Page type absent | Organization, WebSite, WebPage | No | 0 | 0 | Valid; not merchant-eligible by design |
| `/reseller` | Information page | Organization, WebSite | Page type absent | Organization, WebSite, WebPage | No | 0 | 0 | Valid; not merchant-eligible by design |
| `/blog` | Blog index | Organization, WebSite | Collection/blog entities absent | Organization, WebSite, CollectionPage, Blog | No | 0 | 0 | Fixed |
| `/about` | About page | Organization, WebSite | About page type absent | Organization, WebSite, AboutPage | No | 0 | 0 | Fixed |
| `/contact` | Contact page | Organization, WebSite | Contact page type absent | Organization, WebSite, ContactPage | No | 0 | 0 | Fixed |
| `/privacy-policy` | Legal page | Organization, WebSite | Page type absent | Organization, WebSite, WebPage | No | 0 | 0 | Valid; not rich-result eligible by design |
| `/terms-and-conditions` | Legal page | Organization, WebSite | Page type absent | Organization, WebSite, WebPage | No | 0 | 0 | Valid; not rich-result eligible by design |
| `/blog/legal-iptv-subscription-checklist-2026` | Article | Organization, WebSite, BlogPosting, FAQPage | Entity references/byline not normalized | Organization, WebSite, BlogPosting, FAQPage | No | 0 | 0 | Fixed |
| `/blog/moa-tv-app-setup-guide` | Article | Organization, WebSite, BlogPosting, FAQPage | Entity references/byline not normalized | Organization, WebSite, BlogPosting, FAQPage | No | 0 | 0 | Fixed |
| `/blog/iptv-login-watch-world-cup-guide` | Article | Organization, WebSite, BlogPosting, FAQPage | Entity references/byline not normalized | Organization, WebSite, BlogPosting, FAQPage | No | 0 | 0 | Fixed |
| `/blog/smart-tv-iptv-setup-mistakes` | Article | Organization, WebSite, BlogPosting, FAQPage | Entity references/byline not normalized | Organization, WebSite, BlogPosting, FAQPage | No | 0 | 0 | Fixed |
| `/blog/android-iptv-performance-guide` | Article | Organization, WebSite, BlogPosting, FAQPage | Entity references/byline not normalized | Organization, WebSite, BlogPosting, FAQPage | No | 0 | 0 | Fixed |
| `/blog/firestick-iptv-setup-optimization` | Article | Organization, WebSite, BlogPosting, FAQPage | Entity references/byline not normalized | Organization, WebSite, BlogPosting, FAQPage | No | 0 | 0 | Fixed |
| `/blog/iptv-buffering-root-causes` | Article | Organization, WebSite, BlogPosting, FAQPage | Entity references/byline not normalized | Organization, WebSite, BlogPosting, FAQPage | No | 0 | 0 | Fixed |
| `/blog/iptv-4k-streaming-requirements` | Article | Organization, WebSite, BlogPosting, FAQPage | Entity references/byline not normalized | Organization, WebSite, BlogPosting, FAQPage | No | 0 | 0 | Fixed |
| `/blog/iptv-reseller-business-starter-guide` | Article | Organization, WebSite, BlogPosting, FAQPage | Entity references/byline not normalized | Organization, WebSite, BlogPosting, FAQPage | No | 0 | 0 | Fixed |
| `/blog/channelmoa-vs-generic-iptv-services` | Article | Organization, WebSite, BlogPosting, FAQPage | Entity references/byline not normalized | Organization, WebSite, BlogPosting, FAQPage | No | 0 | 0 | Fixed |

## B. Files modified

- `lib/site.ts`: added stable Organization/WebSite IDs and references; added canonical Service and page-type helpers. Affects every public route.
- `app/page.tsx`: removed Product and Offers; added WebPage and Service. Affects `/`.
- `app/packages/page.tsx`: removed Product and Offers; added WebPage, Service, and visible FAQPage. Affects `/packages`.
- `app/services/page.tsx`: removed OfferCatalog and nested Offers; normalized Service and added WebPage plus visible FAQPage. Affects `/services`.
- `app/blog/page.tsx`: added CollectionPage and Blog with canonical article references. Affects `/blog`.
- `app/blog/[slug]/page.tsx`: added stable article/FAQ IDs, Blog relationship, stable publisher reference, and an author matching the visible byline. Affects all ten posts.
- `app/about/page.tsx`: added AboutPage. Affects `/about`.
- `app/contact/page.tsx`: added ContactPage. Affects `/contact`.
- `app/apps/page.tsx`, `app/reseller/page.tsx`, `app/privacy-policy/page.tsx`, and `app/terms-and-conditions/page.tsx`: added canonical WebPage entities to their respective routes.

Pre-existing uncommitted audit changes in `lib/site.ts`, `app/blog/[slug]/page.tsx`, and `components/Footer.tsx` were preserved.

## C. Structured data removed

- 2 Product entities: homepage and packages page.
- 8 Product-nested Offers: four plans on each of the two affected pages.
- 1 OfferCatalog and its 8 nested service Offers.
- The exact Product name “channelmoa IPTV Subscription.”
- No AggregateOffer, shippingDetails, merchant return policy, fake review/rating, invalid FAQPage, or invalid BreadcrumbList existed to remove.
- SearchAction was already absent at the start of this audit and remains absent.

## D. Structured data added or corrected

- Stable IDs: `https://www.channelmoa.online/#organization`, `#website`, and `#service`.
- Organization with canonical URL, real contact data, and a valid 200-status logo.
- WebSite with a stable publisher reference and no unsupported search action.
- A single consistent digital subscription Service model, without retail offers.
- WebPage, AboutPage, ContactPage, and CollectionPage entities matching each route.
- Blog index entity with references to all ten canonical BlogPosting IDs.
- BlogPosting entities with canonical URLs, real non-future publication dates, conditional modification dates, valid images, matching visible author byline, stable publisher, and mainEntityOfPage.
- FAQPage only on `/`, `/packages`, `/services`, and the ten posts, all with matching visible questions and answers.

## E. Validation results

- `npm run lint`: passed.
- `npm run build`: passed with Next.js 16.2.10; 28 static assets/routes generated and all 20 public HTML routes prerendered.
- Public routes checked: 20.
- Generated JSON-LD script blocks parsed: 40 (two per route, including the shared graph and route graph).
- Top-level JSON-LD entities checked: 77.
- Routes with structured-data problems before: 20 had consistency opportunities; 3 contained Product/Offer-style commercial markup, including 2 Merchant Listings root-cause routes.
- Routes with generated-output errors after: 0.
- Routes containing Product, Offer, or AggregateOffer after: 0.
- Routes requiring code-level manual review: 0.
- External follow-up requiring manual review: Google Rich Results Test and Search Console after deployment/recrawl.
- Every JSON-LD block parses as JSON; no empty/null values, conflicting typed IDs, non-www/HTTP/localhost entity URLs, future article dates, or invalid merchant types were detected.
- Canonical equals Open Graph URL, every page has one H1, index/follow metadata, and server-rendered main content.
- All referenced logo, default social, and blog images returned HTTP 200 on the live origin during the audit.

Valid schema does not guarantee a Google rich result. WebPage, Service, Organization, and Blog markup is primarily entity/context markup, and Google may choose not to display enhancements.

## F. Production verification checklist

After deployment:

1. Open every important public page and inspect rendered source for JSON-LD.
2. Run Google Rich Results Test on `/`, `/packages`, `/blog`, at least three posts, `/about`, and `/apps`.
3. Confirm no Product, Offer, AggregateOffer, or Merchant Listing item appears in those live tests.
4. In Search Console, inspect the homepage and packages URL and run **Test Live URL**.
5. Confirm “channelmoa IPTV Subscription” is absent from live rendered source and test results.
6. Open the Merchant Listings report and use **Validate Fix** only after deployed live tests are clean.
7. Monitor the report until Google recrawls all affected URLs; stale items can remain temporarily after deployment.
