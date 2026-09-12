# channelmoa.online — Homepage (`/`) On-Page SEO & Content Quality Review

Audit date: 2026-09-12. Read-only review of one route: `/`. Live HTML fetched from `https://www.channelmoa.online/` (GET only). No file in the repository was modified to produce this report.

---

## 1. Verdict

The homepage is technically clean (one H1, correct metadata, no CLS/priority issues) but **only 988 of its 1,733 main-content words (57%) are unique to this page** — the rest is PricingCards, ServiceGrid, DeviceCompatibility, and the FAQ block copied verbatim from `/packages`, `/services`, `/apps`, and each other. The word "premium" is used 5 times as an unsubstantiated adjective, there are zero testimonials/reviews/ratings anywhere on the page, and the page's single largest content block — 635 words of setup guidance — never mentions "channelmoa" once. The three highest-value changes: (1) replace at least two of the four duplicated component blocks with home-specific framing or trim them, (2) add one concrete, checkable trust signal (a real number, guarantee, or support-hours statement) since none exists today, and (3) resolve the six competing WhatsApp/packages CTAs into one clear primary action per screen. Nothing here reads as broken; it reads as thin where it should be strongest.

---

## 2. Direct answer to the keyword question

| Query | Count (unique content) | Verdict |
|---|---|---|
| `channelmoa` | 8 | natural |
| `channelmoa iptv` | 2 | natural |
| `moa iptv` | 0 (substring-only, inside "channelmoa iptv") | absent |
| `moachannel` | 0 | absent |
| `channel moa` | 0 | absent |
| `channelmoatv` | 0 | absent |

---

## 3. Findings table

| ID | Finding | Severity | Section | File:line | Effort |
|---|---|---|---|---|---|
| F1 | 43% of main-content words (745 of 1,733) are verbatim duplicates of `/packages`, `/services`, `/apps`, `/blog`, and the FAQ block — the page has less than half its visible content to itself | High | 0, 4 | `app/page.tsx:26-70`, `components/Sections.tsx` | M |
| F2 | Zero trust signals of any kind: no testimonial, review count, rating, refund policy, or support-hours statement anywhere on the page | High | 6 | n/a (absence) | M |
| F3 | "Premium" used 5 times as an unsubstantiated adjective with no attached number or proof | Medium | 4, 6 | `components/Sections.tsx:23,30,88,123`, `app/page.tsx` (title, via layout) | S |
| F4 | Six distinct WhatsApp/packages CTAs compete for attention with no single obvious primary action after the hero | Medium | 9 | `components/Sections.tsx:32-33,232`, `app/page.tsx` | S |
| F5 | The 635-word HomepageGuidance block — the largest single piece of unique content on the page — contains the word "channelmoa" zero times | Medium | 3 | `components/Sections.tsx:177-215` | S |
| F6 | All 8 paragraphs inside HomepageGuidance run 50–72 words (2–3 sentences) with no sub-break, each estimated to exceed 4 rendered lines at 360px width | Medium | 7 | `components/Sections.tsx:186,192,203,209` (each `<p>`) | M |
| F7 | Two near-identical template sentences ("channelmoa gives viewers a familiar streaming experience..." / "channelmoa gives partners a premium streaming brand foundation...") make the same "we provide a nice experience" point twice in formulaic language | Low | 4, 7 | `app/page.tsx:43`, `components/Sections.tsx:123` | S |
| F8 | No concrete answer anywhere on the page to "what happens after payment / how long does activation take" — only vague bullet phrases ("Fast activation support", "Priority setup assistance") with no timeframe | Medium | 5, 6 | `data/site-data.ts:60,68` | S |
| F9 | Footer's 3 column headings ("Explore", "Guides", "Legal") are textbook vague headings carrying no content meaning of their own | Low | 2 | `components/Footer.tsx:23,29,37` | S |
| F10 | HomepageGuidance uses 4 consecutive H2s with no parent heading tying them together as one section, unlike every other section on the page which pairs an eyebrow+H2+intro before its H3 group | Low | 2 | `components/Sections.tsx:183,190,201,208` | S |

---

## 4. Section-by-section detail

### Section 0 — Assemble the page

Files contributing rendered content to `/`:
- `app/layout.tsx` — `<html>`/`<body>` shell, `<title>`/meta via `pageMetadata()`, injects `Header`, `Footer`, root `Organization`+`WebSite` JSON-LD
- `app/page.tsx` — the route itself: page-level JSON-LD (`WebPage`, `Service`, `FAQPage`) and the section wrappers/headings/intros between components
- `components/Sections.tsx` — `Hero`, `StatsStrip`, `PricingCards`, `WhyChoose`, `ServiceGrid`, `DeviceCompatibility`, `HomepageGuidance`, `ResellerBand`, `BlogPreview`/`BlogCard`, `FAQ`
- `components/Header.tsx` — nav, announcement bar, "Get Trial"/"View Packages" buttons (client component)
- `components/Footer.tsx` — footer columns and copyright
- `data/site-data.ts` — `stats`, `services`, `devices`, `packages`, `faqs`, `whyChoose`, `navItems` arrays consumed by the components above
- `data/blog-data.ts` / `data/blog-new-posts.ts` — supplies the 3 posts rendered by `BlogPreview` (first 3 entries of `blogPosts`)
- `lib/site.ts` — `whatsappUrl()`, `canonical()`, JSON-LD builder functions

**Word counts** (live-fetched, tags stripped, 2026-09-12):

| Bucket | Words | Share of total |
|---|---|---|
| Header (nav, announcement bar) | 31 | 1.7% |
| **Main — unique to this page** (Hero, StatsStrip, WhyChoose intro+cards, ResellerBand, HomepageGuidance, and the page-specific eyebrow/H2/intro text wrapping each shared component) | **988** | 54.1% |
| Main — duplicated elsewhere (PricingCards 183w, ServiceGrid cards 128w, DeviceCompatibility block 50w, FAQ 7 Q&A 224w, BlogPreview 3 card blurbs 117w, plus ≈43w of card-template micro-labels: "Popular" badge, "Read Guide", category·time meta lines) | 745 | 40.8% |
| Footer (columns, copyright) | 61 | 3.3% |
| **Total rendered page text** | **1,825** | 100% |

**Ratio**: 988 unique words out of 1,825 total page words = **54%** unique / **46%** boilerplate-or-duplicate. Measured against `<main>` alone (1,733 words), the split is 57% unique / 43% duplicate. Every section below judges only the 988-word unique bucket, per the brief.

### Section 1 — Head and primary signals

| Item | Value | Length | Verdict |
|---|---|---|---|
| `<title>` | "channelmoa IPTV Streaming Platform \| Live TV, Sports & VOD" | 60 characters | The most important phrase ("channelmoa IPTV") is front-loaded. Reads as assembled-from-keywords, not written for a human — it's a brand + category + pipe + feature list, not a sentence. At 60 characters it sits right at the ~60-char/580px truncation boundary — **at risk of truncation** on many SERP renderings, particularly on mobile. |
| Meta description | "Explore channelmoa streaming packages, supported apps, device setup guidance, practical troubleshooting, and reseller workflows." | 130 characters | Present. Contains the brand ("channelmoa"). It's a list of topics ("Explore X, Y, Z, and W"), not a reason to click — no offer, no differentiator, no urgency, no number. It describes; it doesn't sell. |
| `<link rel="canonical">` | `https://www.channelmoa.online` (no trailing slash) | — | Present, self-referencing, matches the live redirect chain's resolved form. |
| Open Graph | `og:title`, `og:description` (identical to title/meta description), `og:url` (matches canonical), `og:site_name` = "channelmoa", `og:image` = `/images/home-live-sports-viewing.webp` (1920×1080), `og:image:alt` = "channelmoa streaming and device setup", `og:type` = "website" | — | Complete and internally consistent. |
| Twitter | `twitter:card` = "summary_large_image", `twitter:title`, `twitter:description`, `twitter:image` — all mirror OG/title | — | Complete and consistent. |
| `<h1>` | `<h1><span>channelmoa IPTV</span><span>Premium Streaming</span><span>Live TV, Sports & Movies</span><span>Across Popular Devices</span></h1>` (`components/Sections.tsx:24-29`) | — | **Exactly one `<h1>`** on the page, confirmed by live count (`grep -o "<h1" | wc -l` = 1). It is built from 4 separate `<span>` elements with no delimiter character between them in the markup — the visual line breaks come entirely from CSS, not from the text content itself. |

### Section 2 — Heading hierarchy

Full outline, in document order (level, text, source):

| Level | Text | Source |
|---|---|---|
| H1 | channelmoa IPTV / Premium Streaming / Live TV, Sports & Movies / Across Popular Devices | `components/Sections.tsx:24-29` |
| H2 | Choose a clear plan for your viewing routine | `app/page.tsx:30` |
| H3 ×4 | Basic Package / Silver Package / Gold Package / Diamond Package | `components/Sections.tsx:223` (mapped) |
| H2 | A premium IPTV experience with support behind every screen | `components/Sections.tsx:88` |
| H3 ×3 | Trust-focused onboarding / Real setup guidance / Built for every room | `components/Sections.tsx:98` (mapped) |
| H2 | Live TV, sports, VOD, replay, apps, and support in one polished platform | `app/page.tsx:42` |
| H3 ×8 | Live TV Hub / Sports & PPV Events / Movies & Series / Replay & VOD / EPG Program Guide / Multi-device Access / Reseller Workflows / Setup Support | `components/Sections.tsx:73` (mapped) |
| H2 | Stream on the screens your household already trusts | `components/Sections.tsx:146` |
| H2 | Start with the room, device, and viewing routine | `components/Sections.tsx:190` |
| H2 | Move from compatibility to a repeatable baseline | `components/Sections.tsx:201` |
| H2 | Check the complete path, not one speed result | `components/Sections.tsx:203` (2nd guidance section) |
| H2 | Send useful evidence without exposing credentials | `components/Sections.tsx:209` (2nd guidance section) |
| H2 | Launch a cleaner IPTV resale experience without building the platform yourself | `components/Sections.tsx:122` |
| H3 ×4 | White-label friendly / Trial workflows / Renewal support / Device guidance | `components/Sections.tsx:130` (mapped) |
| H2 | Learn before you stream | `app/page.tsx:55` |
| H3 ×3 | (3 blog post titles, per `BlogPreview`) | `components/Sections.tsx:260` (mapped) |
| H2 | channelmoa IPTV FAQ | `app/page.tsx:65` |
| H3 ×7 | (7 FAQ questions) | `components/Sections.tsx:244` (mapped) |
| H3 ×3 | Explore / Guides / Legal | `components/Footer.tsx:23,29,37` — **footer boilerplate, not page content** |

**Flags**:
- **Skipped levels**: none found. Every H3 in this outline follows an H2; there is no H2→H4 jump anywhere.
- **Multiple H1s**: none — confirmed exactly one.
- **Headings used for styling rather than structure**: the footer's "Explore" / "Guides" / "Legal" (`components/Footer.tsx:23,29,37`) are H3s that exist to visually label a link column, not to describe content — textbook heading-for-styling use, though this is shared boilerplate present on every route, not homepage-specific.
- **Vague headings**: the footer H3s above qualify directly ("Explore", "Guides", "Legal" carry no more meaning than "Features" would). Within main content, headings are specific enough to carry meaning on their own ("Send useful evidence without exposing credentials" tells you exactly what the section is about).
- **Structural quirk**: `HomepageGuidance` (`components/Sections.tsx:177-215`) emits **4 consecutive H2s** ("Start with the room...", "Move from compatibility...", "Check the complete path...", "Send useful evidence...") with no parent H2/section heading grouping them, unlike every other section on the page, which pairs an eyebrow + one H2 + intro paragraph before dropping into an H3 group. A reader scanning headings only would see 4 H2-level topics in a row with no signal that they're one continuous "setup guidance" section.

**Does the outline alone tell a reader what the page offers?** Mostly yes — a reader skimming only the H2s would learn: there are packages to choose from, this is a premium IPTV service with support, there's a full range of live TV/VOD/sports services, it works on their existing devices, there's setup guidance, there's a reseller program, there's a blog, and there's an FAQ. The one gap: nothing in the H1 or the first H2 states a **price** or a **concrete number** — a skim-reader gets "what" and "that it's premium" before they get "how much" or "how many channels."

### Section 3 — Keyword usage

Counts and positions below are measured against the **988-word unique-content bucket** (word-boundary, case-insensitive), per instructions.

**`channelmoa`** — 8 occurrences.
- First occurrence: word 5 ("...**channelmoa** IPTV Premium Streaming...", the H1 itself).
- Placement: title (yes), H1 (yes, span 1), H2 (yes — "channelmoa IPTV FAQ"), meta description (yes), first 100 words (yes, word 5), image alt text (no — none of the 5 on-page images mention the brand), internal anchor text (no — every internal link on the page uses descriptive non-brand anchor text, e.g. "streaming-device comparison", "Explore Reseller"), FAQ question/answer (yes, but that block is shared boilerplate, not unique content, so it's not counted in the 8).
- Distribution across thirds of the unique-content bucket (330 words each): **first third: 6**, second third: 2, **third third: 0**.
- Verdict: **natural**. Every one of the 8 instances sits inside a sentence that reads normally read aloud (e.g., "channelmoa is designed around simple package choices, useful setup preparation, and guidance for several common device families." — `components/Sections.tsx:89`). None reads as inserted for search engines.

**`channelmoa iptv`** — 2 occurrences (both also counted within the 8 above).
1. H1, span 1: "channelmoa IPTV" (`components/Sections.tsx:25`).
2. H2: "channelmoa IPTV FAQ" (`app/page.tsx:65`).
- Verdict: **natural** — both are structural (H1/H2), not stuffed into prose.

**`moa iptv`** — 0 word-boundary occurrences. It exists only as an unavoidable substring inside "channelmoa iptv" (e.g., "...lmoa iptv..."), which is a **substring match, not an occurrence**, per the instructions' own example. Verdict: **absent** as its own phrase.

**`moachannel`** — 0 occurrences anywhere in the unique content. Verdict: **absent**.

**`channel moa`** — 0 occurrences (word-boundaried; never appears as two separate words anywhere on the page). Verdict: **absent**.

**`channelmoatv`** — 0 occurrences. Verdict: **absent**.

**Direct question 1 — does any phrase read as written for a search engine rather than a reader?**
No. Nothing in the unique content reads as keyword-stuffed. The closest candidate is the H1 itself, but that's a structural element (title-case brand + feature spans), not prose, so it's evaluated separately in Section 1, not here. The worst thing found in this section isn't over-optimization — it's the opposite: the near-identical template pairing quoted in full below.

**Direct question 2 — is any phrase absent from a position where a human would naturally expect it?**
Yes — "channelmoa" is absent from the entire final third of the unique-content bucket, which is exactly the 635-word `HomepageGuidance` block (`components/Sections.tsx:177-215`). This is the single longest, most substantive piece of writing on the page — it walks a reader through device prep, setup verification, playback troubleshooting, and support evidence — and it never once says "channelmoa," reading instead as generic streaming-setup advice. A visitor who scrolled straight to this block with no memory of which site they're on would find nothing here to remind them. This is worth noting factually; it is **not** a recommendation to insert the brand name into this copy artificially — several of its sentences (e.g., "The buffering diagnostic guide helps classify interruptions, while the 4K signal-path guide covers the additional display and cable checks.") read cleanly as-is and inserting "channelmoa" into them would not improve them for a human reader.

### Section 4 — Content uniqueness

**Internal duplication** (verbatim or near-verbatim blocks also on other routes):

| Block | Words | Also appears on |
|---|---|---|
| `PricingCards` (4 plan cards: name, duration, description, price, 5 features, "Get Started") | 183 | `/packages` (`app/packages/page.tsx:31`) — byte-identical |
| `ServiceGrid` (8 service cards: title + text) | 128 | `/services` (`app/services/page.tsx:35`) — byte-identical card content (only the CSS grid class differs, `compact` vs not) |
| `DeviceCompatibility` (entire component: eyebrow, H2, paragraph, 6-item device pill list) | 50 | `/apps` (`app/apps/page.tsx:17`) — byte-identical, whole block |
| `FAQ` (7 Q&A pairs) | 224 | `/packages` (full 7, `app/packages/page.tsx:41`) — byte-identical; `/services` (first 3 of the 7, `app/services/page.tsx:45`) — byte-identical subset |
| `BlogPreview` (3 card title+description blurbs) | 117 | `/blog` (same 3 posts appear in the full 16-post grid) and each post's own page (`post.title`/`post.description` reused as that page's own H1/lead) |

**Boilerplate weight**: if every shared block above (745 words, including card-template micro-labels) were stripped, the page would be left with 988 words — the Hero, StatsStrip, WhyChoose, HomepageGuidance, and ResellerBand, plus the page-specific eyebrow/H2/intro lines that currently wrap the shared blocks. That's a real, standalone page: it has a clear opening pitch, a differentiation section, a substantial guidance essay, and a reseller pitch. **It would survive on its own**, but at 988 words it would be a noticeably lighter page than its current 1,733-word appearance suggests, and it would lose its only pricing display, its only device list, its only FAQ, and its only blog previews in the process — meaning the "unique" version is thin on the specific commercial answers (price, devices, FAQ) that Section 5 checks for. The shared blocks aren't padding to be deleted; they're load-bearing for buyer questions. The finding is that they're **currently identical** to their source pages rather than home-specific summaries.

**Self-repetition** (same point made twice in different words):
1. **"We provide a nice streaming experience" said twice, formulaically**:
   - "channelmoa gives **viewers** a familiar streaming experience with guided setup, strong device coverage, and flexible packages for homes, sports fans, and partner businesses." (`app/page.tsx:43`)
   - "channelmoa gives **partners** a premium streaming brand foundation, practical account workflows, and support-ready device guidance for customers who expect quick setup and clear answers." (`components/Sections.tsx:123`)
   Both sentences follow the identical template — "channelmoa gives [audience] a [adjective] streaming/brand [noun], [comma list of 2-3 features]" — swapping only the audience and the noun. Read back to back (they are roughly 300 words apart on the page), this reads as a formula being filled in twice, not two distinct ideas.
2. **"This works on your existing devices" said twice**: the StatsStrip's "5+ popular device families" stat and the entire `DeviceCompatibility` block ("Stream on the screens your household already trusts... Share your device during the trial request...") both exist to make the same "multi-device support" point within about 400 words of each other.

**Template language** (generic claims that could appear unchanged on any competitor's IPTV homepage, no specific detail attached):
- "**Premium** IPTV streaming platform" (eyebrow, `components/Sections.tsx:23`)
- "...start streaming with a **premium** IPTV platform backed by fast activation and **real support**." (`components/Sections.tsx:30`) — "real support" implies competitors' support is somehow fake; it's a filler phrase, not a claim.
- "A **premium** IPTV experience with support behind every screen" (H2, `components/Sections.tsx:88`)
- "channelmoa gives partners a **premium** streaming brand foundation..." (`components/Sections.tsx:123`)
- "Enjoy a **premium** VOD feel with entertainment categories built for fast discovery at home." (service card text, `data/site-data.ts:36`)
"Premium" is used 5 times across the unique+shared content visible on this page, never once paired with a number, a named feature, or a comparison that would let a reader verify it. Every other on-page adjective ("guided," "flexible," "responsive") has at least one concrete feature or number attached somewhere nearby; "premium" never does.

**External duplication against competitor sites**: out of scope for this pass, per instructions — flagged in Open Questions.

### Section 5 — Intent coverage

| Question | Answered? | Where | How clearly |
|---|---|---|---|
| What exactly is being sold, above the fold | Partially | Hero: "channelmoa IPTV / Premium Streaming / Live TV, Sports & Movies / Across Popular Devices" + lead paragraph | States the category (IPTV, live TV/sports/movies) but not the commercial model — a first-time visitor doesn't yet know this is a paid subscription until they scroll to pricing. |
| What it costs, or where to find it | Yes | `PricingCards`, one section below the hero (`app/page.tsx:26-35`) | Clear: 4 durations, 4 exact prices ($37/$49/$67/$110). No visitor has to leave the page to see pricing. |
| Which devices are supported | Yes | `DeviceCompatibility` pill list (`components/Sections.tsx:148-150`) and repeated in `WhyChoose`/service copy | Clear and specific (Smart TV, Android, Firestick, iOS, Windows, MAG/Box). |
| How to start — trial, signup, or contact | Yes | Header "Get Trial" button (every screen), Hero's WhatsApp CTA | Clear and persistent, but every path leads to WhatsApp with a pre-filled message — there is no visible email/contact-form alternative until the visitor scrolls to the footer. |
| What happens after payment (activation time, setup help) | **No concrete answer** | Closest: PricingCards bullets "Fast activation support" (Basic), "Priority setup assistance" (Silver) — `data/site-data.ts:60,68` | These are vague feature labels, not a process description. No timeframe is stated anywhere on the page (no "activated within X hours," no "you'll receive credentials by Y"). A visitor must leave the page (or ask support) to find out. |
| Who to contact if something breaks | Partially | Header announcement bar shows `support@channelmoa.online` on every screen; `HomepageGuidance`'s "Send useful evidence without exposing credentials" section describes *what* to send if something fails | The guidance section describes the troubleshooting process in detail but never links to `/contact` or a WhatsApp support message from within that section — a reader convinced by the advice has to scroll back up to the header to act on it. |
| Why choose this over an alternative — specific, checkable reason | **Weak** | "6,000+ Live Channels with EPG" (repeated identically on all 4 pricing cards, `data/site-data.ts:60,68,77,86`) | This is the only genuinely specific, checkable number on the page positioned as a differentiator. Every other "why us" reason is an adjective ("premium," "guided," "flexible") with no comparison point, number, or third-party validation attached. |

**What a visitor would have to leave the page to find out**: exact activation/setup timeframe, refund/cancellation terms, simultaneous-stream/device-swap policy detail beyond "1 Device per Subscription," and any form of proof behind "6,000+ Live Channels" or "premium."

### Section 6 — Trust and credibility signals

**Specific, verifiable claims found**:
- "6,000+ Live Channels with EPG" — repeated on all 4 `PricingCards` (`data/site-data.ts:60,68,77,86`). Not substantiated anywhere on the page (no channel list, no sample, no link to verify).
- "1 Device per Subscription" — repeated on all 4 cards. This is a policy statement, not a marketing claim; it is stated plainly and is self-substantiating (it's a rule, not a boast).
- "$37 / $49 / $67 / $110" for 3/6/12/24 months — specific and verifiable at point of purchase; no substantiation needed, it's a price.
- "4K-ready where available" (`StatsStrip`, `data/site-data.ts:29`) — correctly hedged with "where available," not a bare claim.

**Unsubstantiated superlatives**: see the 5 "premium" instances quoted in Section 4, plus "backed by fast activation and real support" (`components/Sections.tsx:30`) — "fast" has no attached timeframe anywhere on the page.

**Social proof**: **none**. No testimonial, no customer name, no review count, no star rating, no "trusted by X users" statement, no logos, anywhere on the homepage. This is a complete absence, not a weak version of it.

**Contact information visible without leaving the page**: yes — `support@channelmoa.online` is in the header announcement bar on every screen (`components/Header.tsx:14`), and the phone number is reachable via the WhatsApp CTAs (though the raw phone number itself is never displayed as text anywhere on the page — it only exists inside `wa.me` link hrefs, `lib/site.ts:12`).

**Reassurance for a cautious buyer**: the page states "Trial-first device and playback checks before you choose a package" (`components/Sections.tsx:41`) — this is a genuine, specific reassurance (try before you commit). Beyond that, there is **no refund policy, no cancellation terms, and no stated support hours** anywhere on the homepage.

**Claims that could be read as a guarantee the business may not be able to honour**: none rise to the level of an explicit guarantee (no "100% uptime," no "guaranteed" language found). "Fast activation" and "real support" are soft enough to avoid being read as a formal promise, but they also can't be checked against anything, which is the underlying problem — see Section 4.

### Section 7 — Readability and mobile scannability

- **Average sentence length** (measured on the 34 genuine prose sentences inside `HomepageGuidance`, the page's main body of writing): **18.6 words/sentence**.
- **Longest sentence**: 30 words — "Confirm how the account is entered, how many devices may be registered, how many sessions may play at once, and which limitations depend on the app publisher or device maker." (`components/Sections.tsx:191`)
- Second-longest: 28 words — "Run the test in the usual room and at the usual viewing time because Wi-Fi conditions can differ between a daytime phone test and an evening television session." (`components/Sections.tsx:186`)
- **Paragraph length**: all 8 paragraphs inside `HomepageGuidance` run 50–72 words across 2–3 sentences each, with no sub-heading breaking any individual paragraph. At a ~320px effective content width (360px viewport minus the site's 20px side padding at this breakpoint, `app/globals.css:1197-1203`) and the site's body font size, this is estimated at roughly 7–8 words per rendered line — meaning **every one of these 8 paragraphs is estimated to run 7–10 lines**, well past the 4-line flag threshold. This estimate is based on word count and CSS container width, not a rendered screenshot — see Open Questions.
- **Scannable vs. prose ratio**: of the 988 unique words, roughly 353 sit in short/scannable form (headings, stat pairs, 3-4 word card titles+one-liners in `WhyChoose`/`ResellerBand`) and 635 sit in unbroken prose paragraphs (`HomepageGuidance`) — so **about 64% of the unique content is dense prose**, not scannable list/card form.
- **Reading level**: plain English, no jargon left unexplained (technical terms like "EPG," "HDMI," "Ethernet" are used but are standard consumer-electronics vocabulary for this product category). A non-technical buyer would follow individual sentences without rereading; the risk is fatigue from paragraph length, not vocabulary difficulty.
- **Above the fold at 360px**: the Hero section — eyebrow ("Premium IPTV streaming platform"), the H1, the lead paragraph, and likely the first CTA button, though the exact cutoff depends on the header's height at that viewport (**UNVERIFIED without a rendered screenshot** — see Open Questions). What's above the fold does state the offer at a category level (IPTV/live TV/sports/movies) but not the price or the trial mechanic in the very first visible line.

### Section 8 — Media and accessibility

All 5 images rendered on `/` (live-verified via fetched HTML):

| # | Source | Rendered dimensions | File size | `alt` text | `priority`? |
|---|---|---|---|---|---|
| 1 | `/images/home-live-sports-viewing.webp` | `fill` (responsive, up to 3840w served) | 77,282 bytes (75KB) | "Family watching a live football match on a television in their living room" | **Yes** — the only priority image on the page |
| 2 | `/images/home-device-setup.webp` | 1706×922 | 86,268 bytes (84KB) | "Person configuring a media box beside a television, router, laptop, and phone" | No (lazy) |
| 3 | `/images/blog/smart-tv-featured.webp` | 1200×800 | 53,818 bytes (53KB) | "Viewer preparing an unbranded smart television, remote, router, and secure streaming setup" | No (lazy) |
| 4 | `/images/blog/iptv-device-comparison-featured.webp` | 1200×800 | 41,116 bytes (40KB) | "Unbranded Smart TV, HDMI streaming stick, and television box arranged for a balanced device comparison" | No (lazy) |
| 5 | `/images/blog/m3u-xtream-codes-setup.webp` | 1200×800 | 75,306 bytes (74KB) | "Television screen displaying IPTV playlist configuration options for M3U URL and Xtream Codes API" | No (lazy) |

**Empty, missing, generic, or keyword-stuffed `alt` attributes**: none found. All 5 alts are present, descriptive, and specific to what's actually pictured — none contain the brand name or a keyword phrase stuffed in ("Unbranded Smart TV, HDMI streaming stick..." reads as a real description, not "channelmoa IPTV streaming device photo"). This is a genuine strength.

**Text that carries meaning but exists only inside an image**: none. The hero image and device-setup image are both purely decorative/illustrative relative to the surrounding text (no price, offer, or instruction is rendered as pixels rather than text anywhere on this page).

### Section 9 — Conversion path

Every CTA on the page, in document order:

| # | Text | Destination | Position |
|---|---|---|---|
| 1 | "View Packages" | `/packages` | Header nav-actions (persistent, every screen) |
| 2 | "Get Trial" | WhatsApp (`whatsappMessages.trial`) | Header nav-actions (persistent) + mobile nav (same action, responsive duplicate) |
| 3 | "Get 12 Months — 2 Months Free →" | WhatsApp (`whatsappMessages.hero`, a different pre-filled message than #2) | Hero, first screen |
| 4 | "View Packages" | `/packages` | Hero, first screen (second button, same destination as #1) |
| 5–8 | "Get Started" ×4 | WhatsApp, one distinct pre-filled message per plan (`plan.whatsappMessage`) | `PricingCards`, one section below the hero |
| 9 | "Explore Reseller" | `/reseller` | `ResellerBand`, roughly two-thirds down the page |
| 10–12 | "Read Guide" ×3 | `/blog/[slug]` (3 different posts) | `BlogPreview`, near the bottom |

**Is the primary action obvious within the first screen?** Not quite — the Hero alone presents two competing actions ("Get 12 Months — 2 Months Free →" and "View Packages") side by side with equal visual weight (both styled as buttons, `components/Sections.tsx:32-33`), and the header above it simultaneously shows a third and fourth path ("View Packages" and "Get Trial," with a different WhatsApp message than the hero's own offer button). A first-time visitor sees **four clickable paths to two different destinations with three different WhatsApp message bodies** before scrolling past the fold.

**Competing CTAs that split attention**: yes — listed in full above. The most direct conflict is Header's "Get Trial" (generic trial message) vs. Hero's "Get 12 Months — 2 Months Free →" (a specific offer message) — both visible in the same viewport, both going to WhatsApp, with different pre-filled text, asking the visitor to silently pick between "start a trial" and "commit to 12 months" before they've seen the pricing table.

**Do CTAs describe the outcome, or are they generic?** Mostly outcome-描述 and specific — "Get 12 Months — 2 Months Free →", "Explore Reseller", "Read Guide" all state what happens next. "Get Started" (×4) and "View Packages" are closer to generic but still directionally clear. **No "click here" or "learn more" anywhere.**

---

## 5. Proposed changes

*Descriptive only — no code, diffs, or patches.*

**F1 — 43% duplicated content**
- What to change: Give the homepage instances of `PricingCards`, `ServiceGrid`, `DeviceCompatibility`, and/or `FAQ` home-specific framing that isn't just a copy of the destination page's own intro — or reduce to a shorter teaser (e.g., 2 of 4 plans, 4 of 8 services) with a clear "see full packages/services/devices" link, rather than the full duplicate block.
- Files: `app/page.tsx:26-70` (the wrapping sections), `components/Sections.tsx` (if a "compact"/teaser variant is added to any of the shared components).
- What could break: `ServiceGrid` and `FAQ` are shared components also used elsewhere (`/services`, `/packages`); any prop changes must not alter their behavior on those routes.
- How to verify: recompute the unique-vs-duplicate word ratio from Section 0 after the change and confirm the unique share has risen.

**F2 — Zero trust signals**
- What to change: Add one real, checkable trust element — a specific support-hours statement, a stated refund/cancellation window, or (if true) a real review count/rating with attribution. Do not add a number or claim that isn't actually true or checkable.
- Files: likely a new short block near `ResellerBand` or `CTASection`-equivalent placement in `app/page.tsx`, or an addition to `HomepageGuidance`'s support-preparation section.
- What could break: nothing technically; the only risk is publishing a number that isn't actually accurate — this must come from the business, not be invented.
- How to verify: re-check Section 6 of this review after the change; the "social proof" and "reassurance" rows should no longer read "none."

**F3 — "Premium" used 5 times with no substantiation**
- What to change: Replace at least 2–3 of the 5 instances with a specific, checkable detail already true of the service (e.g., swap one "premium" for the channel count, another for the device list, another for the trial-first policy already stated elsewhere on the page).
- Files: `components/Sections.tsx:23,30,88,123`, `data/site-data.ts:36`.
- What could break: nothing; this is a wording change only, and the brief explicitly asks not to make copy read worse for a search signal — these replacements should read at least as naturally as the original.
- How to verify: re-run the Section 4 template-language check; the count of unattached superlatives should drop.

**F4 — Six competing CTAs**
- What to change: Pick one primary action for the first screen (most likely the trial offer, since it's the lowest-commitment ask) and visually de-emphasize the others in that same viewport, rather than presenting the header's generic trial CTA and the hero's specific-offer CTA as equals.
- Files: `components/Sections.tsx:31-34` (Hero actions), `components/Header.tsx:36-37` (header actions) — coordinating these two is a design decision, not a content one, so the "how" is left to whoever owns the visual hierarchy.
- What could break: reducing visual weight on a CTA is not the same as removing it — none of the 12 CTAs need to be deleted, only re-prioritized.
- How to verify: this is a design/UX change, not something a grep can confirm — would need a visual review or a click-heatmap/analytics comparison.

---

## 6. Open questions

1. **Exact rendered line count of the 8 `HomepageGuidance` paragraphs at 360px** (F6) — this review estimated 7–10 lines per paragraph from word count and the site's CSS container width, not from a rendered screenshot. **Needed**: a real 360px-viewport screenshot or browser DevTools measurement to confirm exact line counts.
2. **What is visible above the fold at 360px, precisely** (Section 7) — this review inferred "Hero eyebrow + H1 + lead + likely first CTA" from the component order and CSS `min-height` rules, but did not render the page in an actual 360px viewport to confirm the exact cutoff point. **Needed**: a screenshot at 360×800 (or similar) viewport.
3. **External duplication against competitor IPTV homepages** — explicitly out of scope for this pass per instructions. **Needed**: a manual side-by-side read of `channelmoa.com`/`channelmoa.us` or other competitor homepages to check whether the "premium," "guided setup," "flexible packages" language is a genuine industry-wide template or specifically mirrors a named competitor.
4. **Whether "6,000+ Live Channels" and any activation-time figure are true and can be safely made more specific** — this review can confirm the number is stated but cannot confirm it's accurate or verify what a real activation timeframe would be. **Needed**: confirmation from the business.

---

## 7. Out of scope observations

- `/packages` and `/apps` both had their `<h1>` recently changed (per a separate, in-progress batch) to remove the "channelmoa IPTV" phrase they previously shared with the homepage. This review did not touch either file and did not evaluate those changes — noted only because they explain why those two routes' H1s no longer match what a duplication check against older cached copies of this repo might expect.
- `data/site-data.ts:98`'s FAQ question "Which devices work with channelmoa IPTV?" and the identical `FAQPage` JSON-LD emitted on `/`, `/packages`, and `/services` is a structured-data duplication issue (distinct from the visible-content duplication covered in Section 4 here) — this was already flagged in a prior full-site audit (`SEO-AUDIT.md`, finding H4) and is not re-litigated here since it's a schema concern, not an on-page content concern.
- `lib/site.ts`'s `canonical()` function currently has an uncommitted, in-progress change (per the same separate batch referenced above) affecting how the root path's trailing slash is handled in JSON-LD. This review fetched the live (currently deployed, unchanged) site, so everything reported in Section 1 reflects production as it stands today, not the pending local change.
- The footer (`components/Footer.tsx`) is identical on every route including this one; its 3 vague H3 labels (F9) and its hardcoded 3-guide "Guides" column (always the same 3 posts regardless of what's actually newest or most relevant) apply site-wide, not just to the homepage — flagged here because it's part of what renders on `/`, but the fix, if any, belongs to a site-wide pass, not a homepage-only one.
