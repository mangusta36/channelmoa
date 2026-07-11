import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import Link from "next/link";
import { pageMetadata, siteConfig, whatsappMessages, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact channelmoa | Free Trial & IPTV Support",
  description: "Contact channelmoa for a trial, package guidance, Smart TV, Android or Firestick setup support, app troubleshooting, and reseller information.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact channelmoa" title="Request a free IPTV trial or get channelmoa setup support" text="Tell us your device, preferred package, and streaming needs so channelmoa support can guide your legal IPTV setup." />
      <section className="section">
        <div className="container grid-2">
          <div className="card form-grid">
            <label>Name<input className="input" name="name" autoComplete="name" /></label>
            <label>Email<input className="input" name="email" type="email" autoComplete="email" /></label>
            <label>Device<input className="input" name="device" placeholder="Smart TV, Android, Firestick, iOS, Windows, MAG/Box" /></label>
            <label>Message<textarea className="textarea" name="message" placeholder="Tell us whether you need a free trial, package advice, app setup, or reseller details." /></label>
            <Link className="btn btn-primary" href={whatsappUrl(whatsappMessages.support)}>Contact Support</Link>
          </div>
          <div>
            <h2>Support details</h2>
            <p>Email: {siteConfig.supportEmail}</p>
            <p>Phone: {siteConfig.supportPhone}</p>
            <p>For the fastest channelmoa IPTV setup help, include your device model, preferred IPTV app if you already have one, internet connection type, and whether you want live TV, sports, VOD, or reseller information.</p>
            <div className="card">
              <h3>Before your trial</h3>
              <ul className="feature-list">
                <li>Confirm the device you want to test first</li>
                <li>Check your internet connection near that screen</li>
                <li>Ask about packages only after playback is verified</li>
                <li>Use legal, licensed streaming expectations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
