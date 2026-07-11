import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "channelmoa Privacy Policy | IPTV Streaming Privacy",
  description: "Read how channelmoa handles contact details, device information, support requests, account communications, service records, and website analytics.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy Policy" title="channelmoa Privacy Policy" text="This policy explains how channelmoa handles information related to website visits, IPTV support requests, trials, packages, and customer communication." />
      <div className="article">
        <h2>Information we collect</h2>
        <p>channelmoa may collect contact details you submit, device information you share for setup support, package questions, reseller inquiries, and basic website analytics. This information helps us respond to IPTV app setup needs, trial requests, billing questions, and customer service messages.</p>
        <h2>How information is used</h2>
        <p>We use submitted information to provide support, recommend compatible setup steps, communicate about channelmoa IPTV subscriptions, improve website content, and maintain service records. We do not present channelmoa as a platform for unauthorized streaming or unlawful access.</p>
        <h2>Sharing and retention</h2>
        <p>Information may be shared with trusted service providers when needed for website hosting, communication, analytics, or support operations. channelmoa keeps information only as long as reasonably necessary for support, legal, operational, and account purposes.</p>
        <h2>Your choices</h2>
        <p>You may contact channelmoa to request updates, corrections, or deletion of information where applicable. You can also avoid submitting optional information, though some device details may be needed to provide accurate IPTV setup guidance.</p>
      </div>
    </>
  );
}
