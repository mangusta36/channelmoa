import type { Metadata } from "next";
import { CTASection, DeviceCompatibility, DeviceGrid, PageHero } from "@/components/Sections";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "channelmoa IPTV App Guide | TV, Android & Firestick",
  description: "Set up channelmoa on Smart TV, Android, Firestick, iOS, Windows, and supported boxes with practical app, EPG, network, and playback guidance.",
  path: "/apps"
});

export default function AppsPage() {
  return (
    <>
      <PageHero eyebrow="IPTV app setup" title="channelmoa IPTV apps for Smart TV, Android, Firestick, iOS, and Windows" text="Use channelmoa on supported IPTV apps with guided setup, device checks, EPG configuration, and practical playback tips." />
      <DeviceCompatibility />
      <section className="section">
        <div className="container">
          <DeviceGrid />
        </div>
      </section>
      <section className="section alt">
        <div className="container grid-2">
          <div>
            <h2>Simple app setup for legal IPTV streaming</h2>
            <p>channelmoa support can help you choose an IPTV app workflow that fits your device and viewing habits. The best setup depends on screen size, remote controls, app availability, home network quality, and whether you prefer live TV, sports, VOD, or guide-first browsing.</p>
            <p>For best results, keep apps updated, use a stable connection, and test playback during a free trial. channelmoa IPTV is designed to make those checks easy before you select a subscription package.</p>
            <p>If you found channelmoa while searching for moatv or a moa tv app, ask support to verify the correct supported player and official login process before entering account details.</p>
          </div>
          <div className="card">
            <h3>App setup checklist</h3>
            <ul className="feature-list">
              <li>Confirm your main viewing device</li>
              <li>Install a supported IPTV app</li>
              <li>Test live TV, VOD, and EPG loading</li>
              <li>Save support details for renewals</li>
            </ul>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
