// ─────────────────────────────────────────────────────────────────────────────
// SHARED CONTENT — used by V1 (editorial), V2 (fun), and the portal landing.
// Edit identity / contact details here once. Both site versions stay in sync.
// ─────────────────────────────────────────────────────────────────────────────

export const meta = {
  name: "Shem Rodger",
  title: "Performance Partner",
  tagline: "Civil Construction · Digital Systems · Operational Clarity",
  description:
    "Performance partner for civil construction and operational businesses. Systems, throughput, and clarity.",
};

export const contact = {
  heading: "Start a conversation",
  intro:
    "If you have a messy operational problem, a system that's making life harder instead of easier, or a digital project that's gone sideways — I'd like to hear about it.",
  cta: "The first conversation is free and takes 30 minutes. No pitch deck.",
  email: "shemrodger@gmail.com", // ← replace
  linkedin: "https://www.linkedin.com/in/shem-rodger-49379a2a/", // ← replace
  location: "New Zealand — available remotely",
};

export const footer = {
  name: meta.name,
  tagline: meta.tagline,
  get year() {
    return new Date().getFullYear();
  },
};
