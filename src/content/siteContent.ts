// -----------------------------------------------------------------------------
// SITE CONTENT - Edit everything here.
// Identity + contact live in ./sharedContent.ts (used by both V1 and V2).
// -----------------------------------------------------------------------------

export { meta, contact, footer } from "./sharedContent";

import CoachToolScreenshot from "../assets/screenshots/CoachToolScreenshot.mp4";

export const hero = {
  eyebrow: "Performance Partner",
  headline: "Fewer constraints.\nFaster throughput.\nCleaner systems.",
  subheadline:
    "Most operational performance problems have a single root cause buried under many symptoms. I locate it, redesign the system around it, and deliver what's needed for your people to execute at the level the business actually requires.",
  ctaPrimary: { label: "Book a conversation", href: "#contact" },
  ctaSecondary: { label: "View selected work", href: "#work" },
};

export const whatIDo = {
  heading: "What I do",
  intro:
    "Most operational problems aren't technology problems. They're constraint problems with technology symptoms. I diagnose the root cause, redesign the operating model around it, and build systems that simplify.",
  services: [
    {
      number: "01",
      title: "Operational Systems Design",
      body: "Workflow mapping, process redesign, and operating model clarity. I design systems around how your business actually operates — not how a framework says it should.",
    },
    {
      number: "02",
      title: "Project & Operational Delivery Systems",
      body: "Planning infrastructure, programme dashboards, field-to-office data flow, and operational control systems. Built for the pace and complexity of real delivery environments across infrastructure, transport, supply chain, and civil programmes.",
    },
    {
      number: "03",
      title: "Throughput & Performance Reporting",
      body: "ERP rescue, KPI design, and reporting that surfaces what actually drives performance. If your data tells a different story to your operational reality, I'll reconcile both and give leadership a reliable signal.",
    },
    {
      number: "04",
      title: "Workflow Automation & Decision Tools",
      body: "Practical automation for document handling, scheduling, estimation, and operational decision support. Built where the constraint sits — not where the technology is most impressive.",
    },
    {
      number: "05",
      title: "Executive Decision Support",
      body: "Design the operating rhythm and information architecture that lets leaders make faster, better-grounded decisions — without requiring more meetings or more data.",
    },
  ],
};

export const work = {
  heading: "Selected work",
  intro:
    "A sample of systems built for real operational environments. Each one started with a constraint diagnosis, not a technology preference.",
  projects: [
    {
      id: "p1",
      name: "Civil Programme Control Dashboard",
      category: "Dashboard · Infrastructure Delivery",
      problem:
        "Project data was scattered across spreadsheets, site diaries, and two separate ERPs. Leadership had no reliable view of programme health.",
      outcome:
        "Single source of truth for programme status. Weekly reporting time reduced from 6 hours to 40 minutes. Leadership decisions grounded in current data.",
      tech: ["React", "Power BI", "SQL", "REST API"],
      screenshot: null,
      screenshotAlt: "Civil programme control dashboard screenshot",
    },
    {
      id: "p2",
      name: "Delivery Coach",
      category: "AI · Coaching",
      problem:
        "Having 1-1 speaking experts available to improve your delivery is expensive and doesn't scale. Can we use AI to extract and deliver the same insights at scale? - think Vinh Giang... in your pocket!",
      outcome:
        "AI tool that takes provides insights on how you can improve your delivery to be more effective in speaking. The tool provides real-time feedback and actionable recommendations to help you enhance your delivery skills and achieve better outcomes.  ",
      tech: ["LLM extraction", "Whisper speech-to-text engine", "AI"],
      screenshot: CoachToolScreenshot,
      screenshotAlt: "Delivery coach tool screenshot",
    },
    {
      id: "p3",
      name: "Workforce Planning System",
      category: "Workforce · Scheduling",
      problem:
        "Crew allocation managed informally with no visibility of resource conflicts or forward demand across multiple sites. Reactive scheduling driving idle downtime.",
      outcome:
        "Interactive planning board with real-time constraint visibility. Eliminated double-booking and reduced idle cost across sites.",
      tech: ["React", "Node.js", "PostgreSQL", "Gantt rendering"],
      screenshot: null,
      screenshotAlt: "Workforce planning system screenshot",
    },
    {
      id: "p4",
      name: "ERP Implementation Rescue",
      category: "ERP · Systems",
      problem:
        "Mid-implementation ERP project stalled. Data migration incomplete, team confidence eroded, go-live delayed 6 months with no clear path forward.",
      outcome:
        "Recovered scope, redesigned the migration approach, and delivered go-live. Business operating on the new system within 10 weeks.",
      tech: ["Jobpac", "SQL", "Process design", "Change management"],
      screenshot: null,
      screenshotAlt: "ERP rescue project notes",
    },
  ],
};

export const myEdge = {
  heading: "My edge",
  intro:
    "Most operational consultants haven't operated under elite performance conditions. Most coaches haven't built production systems. The combination is uncommon — and it changes how problems get diagnosed and solved.",
  pillars: [
    {
      icon: "\u{1F6B4}",
      title: "Elite sport coaching",
      body: "Olympic medal-winning cycling coach. I understand performance systems from the inside — how to build them, how to measure them, and how to change behaviour durably. That discipline applies directly to operational performance, team execution, and organisational change.",
    },
    {
      icon: "\u{1F3D7}️",
      title: "Operational domain experience",
      body: "Worked inside fast-moving delivery environments where coordination quality, decision speed, and execution discipline are the difference between margin and loss. I understand how work degrades in the real world — fragmented systems, unclear ownership, compounding drag — and how to cut through it.",
    },
    {
      icon: "⚙️",
      title: "Systems and data capability",
      body: "I build operational systems with performance outcomes in mind. Reporting, automation, workflows, and decision support are only useful if they improve throughput and reduce friction. The focus is always business performance — technology is the mechanism, not the point.",
    },
    {
      icon: "\u{1F3AF}",
      title: "Constraint-focused thinking",
      body: "Every system has a limiting factor. The goal is to find it quickly, redesign around it, and remove what's stopping performance from scaling. I focus on the single leverage point that changes the whole system — not the list of things that could theoretically be better.",
    },
  ],
};

export const howIWork = {
  heading: "How I work",
  intro:
    "Structured enough to be predictable. Flexible enough to fit the reality of the engagement. The process applied with judgment — not as a framework.",
  steps: [
    {
      number: "01",
      title: "Diagnose the real constraint",
      body: "Not the presenting symptom — the actual limiting factor. Where does throughput stall? What is the one thing, if resolved, that moves the whole system?",
    },
    {
      number: "02",
      title: "Simplify the operating model",
      body: "Most businesses are more complex than their output justifies. We strip back to what the system actually requires, then redesign around that — clearly and without unnecessary layers.",
    },
    {
      number: "03",
      title: "Build or improve the system",
      body: "New tool, improved configuration, or redesigned process. Whatever the constraint requires. No vendor preference — just what fits the environment and the people using it.",
    },
    {
      number: "04",
      title: "Measure what matters",
      body: "Install metrics that tell you whether the constraint is moving. Cut the noise from what's merely visible. Establish a reliable performance signal for leadership.",
    },
    {
      number: "05",
      title: "Embed into the business",
      body: "Systems only perform if people operate them correctly. I stay close through go-live and make sure behaviour actually changes — not just the software.",
    },
  ],
};
