// ─────────────────────────────────────────────────────────────────────────────
// SITE CONTENT — Edit everything here.
// Identity + contact live in ./sharedContent.ts (used by both V1 and V2).
// ─────────────────────────────────────────────────────────────────────────────

export { meta, contact, footer } from "./sharedContent";

export const hero = {
  eyebrow: "Performance Partner",
  headline: "Fewer constraints.\nFaster throughput.\nCleaner systems.",
  subheadline:
    "I help civil construction and operational businesses find the constraint — then fix the system around it. Not with frameworks and decks. With tools that actually run the business.",
  ctaPrimary: { label: "Book a conversation", href: "#contact" },
  ctaSecondary: { label: "View selected work", href: "#work" },
};

export const whatIDo = {
  heading: "What I do",
  intro:
    "Most operational problems aren't technology problems. They're constraint problems with technology symptoms. I find the bottleneck, design the system around it, and build tools that make the right behaviour easy.",
  services: [
    {
      number: "01",
      title: "Operational Systems Design",
      body: "Workflow mapping, process redesign, and operating model clarity. I design systems that match how your business actually works — not how a consultant thinks it should work.",
    },
    {
      number: "02",
      title: "Civil Construction Digital Delivery",
      body: "Planning tools, site dashboards, field-to-office data flow, and project control systems. Built for the pace and complexity of real construction programmes.",
    },
    {
      number: "03",
      title: "Throughput & Performance Reporting",
      body: "ERP rescue, KPI design, and reporting that shows what actually matters. If your data tells a different story to your gut, I'll reconcile both.",
    },
    {
      number: "04",
      title: "AI & Workflow Automation",
      body: "Practical automation for document handling, scheduling, estimation, and operational decision support. Nothing speculative — only what delivers a measurable result.",
    },
    {
      number: "05",
      title: "Executive Decision Systems",
      body: "Build the operating rhythm and information architecture that lets leaders make faster, better-grounded decisions without drowning in data.",
    },
  ],
};

export const work = {
  heading: "Selected work",
  intro:
    "A sample of tools and systems built for real operational environments. Each one started with a problem, not a technology.",
  projects: [
    {
      id: "p1",
      name: "Civil Programme Control Dashboard",
      category: "Dashboard · Civil Construction",
      problem:
        "Project data was scattered across spreadsheets, site diaries, and two separate ERPs. No single view of programme health existed.",
      outcome:
        "Live dashboard giving leadership a single source of truth. Weekly reporting time cut from 6 hours to 40 minutes.",
      tech: ["React", "Power BI", "SQL", "REST API"],
      // Replace with: import screenshot from '../assets/screenshots/dashboard.png'
      screenshot: null,
      screenshotAlt: "Civil programme control dashboard screenshot",
    },
    {
      id: "p2",
      name: "Quantity Surveying Automation Tool",
      category: "Automation · Estimation",
      problem:
        "QS team spending 30%+ of their time on repetitive extraction and formatting tasks before any analysis could begin.",
      outcome:
        "Automated document ingestion and structured output. QS team reclaimed 2 days per week for actual analysis.",
      tech: ["Python", "LLM extraction", "Excel API", "Power Automate"],
      screenshot: null,
      screenshotAlt: "QS automation tool screenshot",
    },
    {
      id: "p3",
      name: "Workforce Planning System",
      category: "Workforce · Scheduling",
      problem:
        "Crew allocation was managed in someone's head. No visibility of resource conflicts or forward demand across multiple sites.",
      outcome:
        "Interactive planning board with constraint visibility. Eliminated double-booking, reduced downtime idle cost.",
      tech: ["React", "Node.js", "PostgreSQL", "Gantt rendering"],
      screenshot: null,
      screenshotAlt: "Workforce planning system screenshot",
    },
    {
      id: "p4",
      name: "ERP Implementation Rescue",
      category: "ERP · Systems",
      problem:
        "Mid-implementation ERP project stalled. Data migration incomplete, team trust eroded, go-live delayed 6 months.",
      outcome:
        "Recovered scope, redesigned data migration approach, delivered go-live. Business operating on new system within 10 weeks.",
      tech: ["Jobpac", "SQL", "Process design", "Change management"],
      screenshot: null,
      screenshotAlt: "ERP rescue project notes",
    },
  ],
};

export const myEdge = {
  heading: "My edge",
  intro:
    "Most digital consultants haven't run a crew. Most coaches haven't built production software. The combination is rare — and it changes how problems get solved.",
  pillars: [
    {
      icon: "🚴",
      title: "Elite sport coaching",
      body: "Ten years as an Olympic-level cycling coach. I understand performance systems, how to build them, how to measure them, and — critically — how to get people to actually change their behaviour. That lens applies directly to operational business.",
    },
    {
      icon: "🏗️",
      title: "Civil construction domain",
      body: "I've worked inside the complexity of large civil programmes — procurement cycles, subcontractor management, IRF, programme scheduling, QS processes. I don't need a discovery phase to understand your world.",
    },
    {
      icon: "⚙️",
      title: "Software and data capability",
      body: "I build production tools, not prototypes. Full-stack development, data pipelines, API integrations, and automation. I can scope, design, and deliver — or work alongside your existing team.",
    },
    {
      icon: "🎯",
      title: "Theory of Constraints thinking",
      body: "Every system has one constraint that limits throughput. I work from that constraint outward — not from a methodology inward. This keeps focus on what matters and stops wasted effort on things that don't move the needle.",
    },
  ],
};

export const howIWork = {
  heading: "How I work",
  intro:
    "Structured enough to be reliable. Flexible enough to fit what's real. This is the process — applied with judgment, not rigidly.",
  steps: [
    {
      number: "01",
      title: "Diagnose the real constraint",
      body: "Not the presenting problem — the actual constraint. Where does throughput stall? What's the one thing, if fixed, that changes the most?",
    },
    {
      number: "02",
      title: "Simplify the operating model",
      body: "Most businesses are more complex than they need to be. We strip back to what the system actually requires, then redesign around that.",
    },
    {
      number: "03",
      title: "Build or improve the system",
      body: "New tool, improved tool, or a configuration change. Whatever the constraint requires. No vendor preference — just what fits.",
    },
    {
      number: "04",
      title: "Measure what matters",
      body: "Install the right metrics — the ones that tell you if the constraint is moving. Cut the noise.",
    },
    {
      number: "05",
      title: "Coach adoption into the business",
      body: "The system only works if the people use it. I stay close through go-live and make sure behaviour actually changes.",
    },
  ],
};
