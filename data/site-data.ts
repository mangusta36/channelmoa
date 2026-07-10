import {
  BadgeCheck,
  ChartNoAxesCombined,
  Clock,
  Clapperboard,
  Headphones,
  MonitorSmartphone,
  RadioTower,
  ShieldCheck,
  Smartphone,
  TabletSmartphone,
  Tv,
  Zap
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Apps", href: "/apps" },
  { label: "Reseller", href: "/reseller" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const stats = [
  ["8,000+", "channels and VOD titles"],
  ["24/7", "live setup support"],
  ["4K-ready", "where available"],
  ["5+", "popular device families"]
];

export const services = [
  { title: "Live TV Hub", icon: Tv, text: "Browse organized channel access with clear setup help, smooth navigation, and everyday viewing reliability." },
  { title: "Sports & PPV Events", icon: RadioTower, text: "Plan major match nights with event-focused guidance, responsive support, and app-ready playback." },
  { title: "Movies & Series", icon: Clapperboard, text: "Enjoy a premium VOD feel with entertainment categories built for fast discovery at home." },
  { title: "Replay & VOD", icon: Zap, text: "Catch more of what matters with on-demand access, replay-style workflows, and simple browsing." },
  { title: "EPG Program Guide", icon: Clock, text: "Use a structured guide to compare channels, plan shows, and move around live TV quickly." },
  { title: "Multi-device Access", icon: MonitorSmartphone, text: "Watch on Smart TV, Android, Firestick, iOS, Windows, compatible boxes, and supported IPTV apps." },
  { title: "Reseller Workflows", icon: ChartNoAxesCombined, text: "Support trials, renewals, account questions, and customer onboarding with a cleaner process." },
  { title: "Always-on Support", icon: Headphones, text: "Get help with app choice, activation, troubleshooting, package questions, and renewals any day." }
];

export const devices = [
  { title: "Smart TV", icon: Tv, text: "Compatible with popular IPTV app workflows for modern connected televisions." },
  { title: "Android", icon: Smartphone, text: "Stream with flexible app choices on Android phones, tablets, and TV boxes." },
  { title: "Firestick", icon: TabletSmartphone, text: "Simple setup guidance for Firestick-style streaming devices and remote-friendly apps." },
  { title: "iOS", icon: Smartphone, text: "Use supported players for iPhone and iPad when you want mobile access." },
  { title: "Windows", icon: MonitorSmartphone, text: "Watch from a laptop or desktop with compatible player software." },
  { title: "MAG/Box", icon: BadgeCheck, text: "Structured setup for compatible set-top boxes and portal-based viewing." }
];

export const packages = [
  {
    name: "Basic Package",
    duration: "1 Month",
    price: "$20",
    description: "A simple starting plan for users who want to test the full channelmoa experience with short-term access.",
    features: ["6,000+ Live Channels with EPG", "International & Premium VOD", "PPV & Sports Events", "Up to 3 Devices", "Fast activation support"],
    featured: false
  },
  {
    name: "Silver Package",
    duration: "6 Months",
    price: "$60",
    description: "A strong value option for regular viewers who want longer access without committing to a full year.",
    features: ["6,000+ Live Channels with EPG", "International & Premium VOD", "PPV & Sports Events", "Up to 3 Devices", "Priority setup assistance"],
    featured: false
  },
  {
    name: "Gold Package",
    duration: "12 Months",
    price: "$80",
    description: "Ideal for long-term users who want a full-year plan with consistent access across supported devices.",
    features: ["6,000+ Live Channels with EPG", "International & Premium VOD", "PPV & Sports Events", "Up to 3 Devices", "Year-long TV access"],
    featured: true
  },
  {
    name: "Diamond Package",
    duration: "24 Months",
    price: "$140",
    description: "Best value for committed users who want the longest duration and the strongest price-to-access ratio.",
    features: ["6,000+ Live Channels with EPG", "International & Premium VOD", "PPV & Sports Events", "Up to 3 Devices", "Best long-term value"],
    featured: false
  }
];

export const faqs = [
  {
    question: "Is channelmoa a legal IPTV streaming service?",
    answer: "Yes. channelmoa is presented as a legal, licensed IPTV streaming platform focused on legitimate live TV, sports, VOD, and supported device access."
  },
  {
    question: "Which devices work with channelmoa IPTV?",
    answer: "channelmoa supports common IPTV app workflows for Smart TV, Android, Firestick-style devices, iOS, Windows, and compatible set-top boxes."
  },
  {
    question: "Can I try channelmoa before choosing a package?",
    answer: "Yes. You can request a free trial so support can confirm your app, internet connection, and preferred device are ready before you choose a package."
  },
  {
    question: "Does channelmoa support 4K IPTV streaming?",
    answer: "channelmoa is 4K-ready where source availability, device capability, app performance, and internet speed all support higher-resolution playback."
  },
  {
    question: "Does channelmoa offer IPTV reseller options?",
    answer: "Yes. channelmoa offers reseller-friendly workflows for businesses that need account management, renewals, trial handling, and customer support processes."
  },
  {
    question: "Is channelmoa related to moatv or the moa tv app?",
    answer: "channelmoa is its own professional streaming platform. If you searched for moatv or a moa tv app, confirm the provider and app details with channelmoa support before entering account information."
  },
  {
    question: "How should I handle an IPTV login to watch World Cup coverage?",
    answer: "Use only the official channelmoa login and programming included under applicable distribution rights. Availability varies by location and package, so contact support before an event to confirm authorized coverage."
  }
];

export const whyChoose = [
  { title: "Trust-focused onboarding", icon: ShieldCheck, text: "A free trial helps confirm your device, app, and connection before you pick a package." },
  { title: "Real setup guidance", icon: Headphones, text: "Support helps viewers choose compatible apps, configure devices, and reduce avoidable friction." },
  { title: "Built for every room", icon: MonitorSmartphone, text: "One streaming experience can support the living room TV, mobile viewing, and travel-friendly devices." }
];
