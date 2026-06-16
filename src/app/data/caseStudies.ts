export type CaseStudy = {
  id: string;
  index: string;
  client: string;
  title: string;
  titleItalic: string;
  theme: string;
  role: string;
  year: string;
  discipline: string;
  intro: string;
  bg: string;
  fg: string;
  accent: string;
  pattern: "brew" | "shop" | "wallet";
  challenge: string;
  process: { step: string; title: string; body: string }[];
  pillars: { number: string; title: string; body: string }[];
  stats: { value: string; label: string }[];
  closing: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "breweasy",
    index: "01",
    client: "Breweasy",
    title: "A coffee shop",
    titleItalic: "that reads like a love letter.",
    theme: "Web Design · Brand · Landing Page",
    role: "Product & Web Designer",
    year: "2025",
    discipline: "Coffee Shop · Web",
    intro:
      "Breweasy is a neighborhood roaster with a quiet obsession for single-origin beans. We built the landing page and full marketing site — warm, slow, unmistakably theirs — to turn first-time visitors into Saturday-morning regulars.",
    bg: "linear-gradient(140deg, #F5EBDD 0%, #E8D3B6 55%, #C99868 100%)",
    fg: "#2A1A0F",
    accent: "#2A1A0F",
    pattern: "brew",
    challenge:
      "The existing presence was a template site with stock photos and a generic serif font. First-time visitors couldn't tell Breweasy from any other roaster. We needed to build an identity and a full web ecosystem from scratch — and make the site feel as warm as the coffee it sells.",
    process: [
      { step: "01", title: "Discovery", body: "Competitive audit of 40+ coffee brands. Interviews with 12 regular customers. Mood boards tracing the crema-to-cardboard color spectrum." },
      { step: "02", title: "Design", body: "Built the brand kit — Fraunces for headlines, Inter for body. Designed the landing page then extended to 8 page templates. Every layout warm, unhurried, grain-textured." },
      { step: "03", title: "Deliver", body: "Handed off with a Figma component library, design tokens, and a 12-page brand guide. Site went live in 6 weeks. Avg. LCP held at 1.2s." },
    ],
    pillars: [
      { number: "01", title: "Brand World", body: "A palette pulled from crema, cardboard, and roasted oat. Fraunces for headlines, hand-set captions for the small details on packaging." },
      { number: "02", title: "Landing Page", body: "A single scroll that introduces the bean, the roaster, the room — then quietly hands the visitor a menu and a map." },
      { number: "03", title: "Full Site", body: "Eight templates: shop, subscriptions, story, locations, journal, careers, gift cards, and a season-by-season roast log." },
    ],
    stats: [
      { value: "3.4×", label: "Online orders ↑" },
      { value: "42%",  label: "Subscription sign-ups" },
      { value: "08",   label: "Page templates" },
      { value: "1.2s", label: "Avg. LCP" },
    ],
    closing: "A site that smells, somehow, like a Saturday morning.",
  },
  {
    id: "shopizee",
    index: "02",
    client: "Shopizee",
    title: "An online market",
    titleItalic: "built for the next billion.",
    theme: "E-commerce App · Mobile · Marketplace",
    role: "Lead Product Designer",
    year: "2024",
    discipline: "E-commerce App",
    intro:
      "Shopizee is a regional marketplace launched to challenge Shopee and Lazada. We rebuilt the buyer experience from the home feed down to checkout — faster, lighter, friendlier on cheap phones — and gave sellers tools that don't punish them for growing.",
    bg: "linear-gradient(155deg, #FF6B3D 0%, #F2552B 50%, #C7361A 100%)",
    fg: "#FFFFFF",
    accent: "#FFE6B0",
    pattern: "shop",
    challenge:
      "Southeast Asia's existing marketplaces were designed for desktops — but 90% of Shopizee's buyers were on mid-range Android phones with unreliable data. Twenty-one screens stood between a buyer and a completed order. Every extra tap was a lost sale.",
    process: [
      { step: "01", title: "Research", body: "Shadowed 8 buyers in Metro Manila and Cebu. Ran usability tests on the existing 21-screen checkout. Identified 4 major drop-off points." },
      { step: "02", title: "Design", body: "Collapsed 21 screens to 12. Designed a guest checkout that converts on the first visit. Built a seller studio that works one-handed, in portrait mode." },
      { step: "03", title: "Deliver", body: "Phased sprints with A/B testing at each gate. Checkout conversion up 38% after sprint 2. Full rollout across 11 markets in Q4 2024." },
    ],
    pillars: [
      { number: "01", title: "Buyer Flow", body: "Feed → product → cart → checkout. Twenty-one screens reduced to twelve. A guest checkout that converts on the first try." },
      { number: "02", title: "Seller Studio", body: "Inventory, ads, payouts, and chat in one tab. Built for a phone, not a desktop — most sellers run their stores in jeepneys." },
      { number: "03", title: "Trust & Pay", body: "Cash-on-delivery, e-wallets, and BNPL fused into one promise: you pay only after you hold the thing." },
    ],
    stats: [
      { value: "38%",  label: "Checkout ↑" },
      { value: "2.6×", label: "GMV / user" },
      { value: "11",   label: "Markets live" },
      { value: "4.8",  label: "App store score" },
    ],
    closing: "A marketplace that finally feels built for its buyers.",
  },
  {
    id: "payko",
    index: "03",
    client: "Payko",
    title: "Money that moves",
    titleItalic: "the way you do.",
    theme: "Fintech · Wallet · Payments",
    role: "Design Director",
    year: "2023 — 2025",
    discipline: "Fintech App",
    intro:
      "Payko is a mobile wallet in the GCash and Maya lineage — send, receive, pay bills, buy load, invest spare change. We led the design of the consumer app from rebrand to launch: faster transfers, a tighter visual system, and a money story that finally adds up.",
    bg: "linear-gradient(160deg, #0B1F3A 0%, #102A55 55%, #1E3F7A 100%)",
    fg: "#F1F4FB",
    accent: "#7DF3B8",
    pattern: "wallet",
    challenge:
      "The legacy app buried its primary action — Send Money — behind four taps, a loading screen, and a PIN. The rebrand had to simplify core flows, build a new visual system from scratch, and ship without spooking 5.1 million active users mid-cycle.",
    process: [
      { step: "01", title: "Audit", body: "Mapped all 89 screens of the legacy app. Identified 14 flows that could be collapsed. Task studies showed Send Money averaged 4.2 taps — we targeted 3." },
      { step: "02", title: "Design", body: "New visual system: dark navy base, mint green accent, Fraunces for the headline balance figure. Send Money rebuilt to 3 taps. New glassmorphism card component." },
      { step: "03", title: "Deliver", body: "Phased rollout starting with 5% of users in month 1. Full release at month 3. App Store score rose from 4.1 to 4.9 in 90 days." },
    ],
    pillars: [
      { number: "01", title: "Send & Receive", body: "Three taps from open to confirmed. Contacts, QR, and bank-direct surface in the same sheet — never another screen." },
      { number: "02", title: "Bills & Load", body: "Forty providers reduced to one searchable surface. Auto-fill from the last twelve months, scheduled pay-on-payday." },
      { number: "03", title: "Save & Invest", body: "A glass-jar visual for goals. Spare-change round-ups into a managed portfolio that explains itself in two sentences." },
    ],
    stats: [
      { value: "5.1M", label: "Monthly active users" },
      { value: "31%",  label: "Transfer time ↓" },
      { value: "4.9",  label: "App store score" },
      { value: "₱18B", label: "Processed / month" },
    ],
    closing: "A wallet that finally feels as calm as the money inside it.",
  },
];
