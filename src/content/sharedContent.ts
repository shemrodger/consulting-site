// -----------------------------------------------------------------------------
// SHARED CONTENT - used by V1 (editorial), V2 (fun), and the portal landing.
// Edit identity / contact details here once. Both site versions stay in sync.
// -----------------------------------------------------------------------------

export const meta = {
  name: "Shem Rodger",
  title: "Performance Partner",
  tagline: "Operations · Throughput · Execution Clarity",
  description:
    "Operational performance consultant specialising in constraint diagnosis, systems design, and execution improvement for project-based and operational businesses.",
};

export const contact = {
  heading: "Work together",
  intro:
    "If you're dealing with an operational problem that's compounding, a system that's slowing execution, or a delivery environment that's losing ground — I'd like to hear about it.",
  cta: "30 minutes. No deck. If there's a fit, we'll know quickly.",
  email: "shemrodger@gmail.com",
  linkedin: "https://www.linkedin.com/in/shem-rodger-49379a2a/",
  location: "New Zealand — available remotely",
};

export const footer = {
  name: meta.name,
  tagline: meta.tagline,
  get year() {
    return new Date().getFullYear();
  },
};
