import Link from "next/link";
import { Headphones, Mail, Play } from "lucide-react";
import { navItems } from "@/data/site-data";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="footer-brand" href="/" aria-label="channelmoa home">
              <span className="brand-mark"><Play size={22} fill="currentColor" /></span>
              <span>channelmoa</span>
            </Link>
            <p>Premium IPTV streaming for live TV, sports, VOD, apps, devices, and reseller-friendly workflows.</p>
            <div className="footer-contact">
              <span><Mail size={16} /> {siteConfig.supportEmail}</span>
              <span><Headphones size={16} /> 24/7 setup support</span>
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="footer-links">
              {navItems.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            </div>
          </div>
          <div>
            <h3>Guides</h3>
            <div className="footer-links">
              <Link href="/blog/legal-iptv-subscription-checklist-2026">Subscription Checklist</Link>
              <Link href="/blog/smart-tv-iptv-setup-mistakes">Smart TV Setup</Link>
              <Link href="/blog/firestick-iptv-setup-optimization">Firestick Optimization</Link>
              <Link href="/blog/iptv-buffering-root-causes">Buffering Diagnosis</Link>
            </div>
          </div>
          <div>
            <h3>Legal</h3>
            <div className="footer-links">
              <Link href="/about">About channelmoa</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
              <Link href="/contact">Support</Link>
            </div>
          </div>
        </div>
        <div className="copyright">© 2026 channelmoa. All rights reserved. channelmoa is presented as a premium IPTV streaming platform with guided setup and support.</div>
      </div>
    </footer>
  );
}
