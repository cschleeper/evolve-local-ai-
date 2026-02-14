export type ServiceSeoSection = {
  heading: string;
  subheading: string;
  paragraphs: string[];
};

export type ServiceSeoArticleLink = {
  slug: string;
  anchor: string;
  summary: string;
};

export type ServiceSeoContent = {
  h1: string;
  serviceType: string;
  schemaDescription: string;
  sections: ServiceSeoSection[];
  relatedArticles: ServiceSeoArticleLink[];
};

export const serviceSeoContent: Record<string, ServiceSeoContent> = {
  "ai-assistant": {
    h1: "Dedicated AI Assistant for Local Businesses in Pennsylvania",
    serviceType: "AI Assistant Installation",
    schemaDescription:
      "A dedicated AI assistant for small business teams in Pennsylvania. Runs 24/7, supports inboxes, reporting, scheduling, and operational workflows on secure dedicated hardware.",
    sections: [
      {
        heading: "How a Dedicated AI Employee Works Day to Day",
        subheading: "From morning briefings to after-hours follow-up, your AI assistant keeps work moving.",
        paragraphs: [
          "A dedicated AI employee is not a widget on a website. It is an operational system configured around your business rules, your calendar, and your communication style. For restaurants, hotels, and service companies in Ambler and Montgomery County, this usually starts with email triage, daily summaries, and lead follow-up reminders so nothing important gets buried.",
          "Because the assistant runs on a dedicated machine, it can keep working when your team is unavailable. It can check inboxes, flag urgent messages, prepare response drafts, and report unresolved tasks before your day starts. That creates consistency for owners who need AI for local business operations, not another app they have to babysit.",
          "As workflows mature, the assistant can monitor recurring tasks across tools your team already uses. Instead of constant context switching, your staff gets one clear briefing and a prioritized action list. This is where AI assistant for small business deployments produce measurable relief: less repetitive admin, faster response times, and more focus on revenue work.",
        ],
      },
      {
        heading: "Who Gets the Most Value and What We Implement",
        subheading: "Built for busy operators who need practical execution, not theory.",
        paragraphs: [
          "The businesses that benefit first are usually running lean: owner-led teams, high message volume, and too many repetitive touchpoints. We commonly implement this for hospitality groups in the Greater Philadelphia area, local trades, and food businesses that need dependable throughput without adding full-time headcount.",
          "Implementation includes environment setup, security controls, and workflow guardrails before any automation goes live. We define what the assistant can do, what requires human approval, and what should always escalate. That structure protects quality while giving you the upside of a dedicated AI employee that runs with predictable standards.",
          "You also get ongoing optimization so performance improves over time instead of drifting. We review outputs, tune prompts, and expand capabilities only after core workflows are stable. If you want business automation in PA that stays reliable after launch, this managed approach is the difference between a pilot and a true operating system.",
        ],
      },
    ],
    relatedArticles: [
      {
        slug: "what-is-an-ai-assistant",
        anchor: "Read: what an AI assistant actually does for local teams",
        summary: "A practical guide to AI assistant scope, implementation, and expected outcomes.",
      },
      {
        slug: "small-business-automation-tasks",
        anchor: "Read: high-impact automation tasks to launch first",
        summary: "See which repeat workflows produce fast ROI before expanding scope.",
      },
    ],
  },
  "website-chatbot": {
    h1: "AI Chatbot for Business Websites in Pennsylvania",
    serviceType: "AI Website Chatbot Setup",
    schemaDescription:
      "AI chatbot for business websites that captures leads, answers questions instantly, and books appointments for Pennsylvania companies, including after-hours support and local service-area responses.",
    sections: [
      {
        heading: "What a Lead Capture Chatbot Should Actually Do",
        subheading: "Answer quickly, qualify intent, and move visitors toward action.",
        paragraphs: [
          "An AI chatbot for business website conversion should be built around customer intent, not generic scripts. We map the exact questions your prospects ask, such as pricing, service area, timeline, and availability, then train the assistant to respond clearly in plain English. For local businesses in Pennsylvania, that means answers feel relevant to real buying decisions.",
          "The goal is not just engagement. The goal is lead capture and next steps. We design conversation flows that collect contact details at the right time, confirm fit, and route inquiries to the right inbox. This is especially valuable for after-hours traffic, where a chatbot for restaurants, hotels, and service providers can save leads that would otherwise leave.",
          "Once deployed, we monitor transcript quality and conversion behavior so responses keep improving. Instead of static FAQ logic, your chatbot evolves with your offers and objection patterns. That is how a website chatbot in PA becomes a dependable sales channel rather than a one-time plugin.",
        ],
      },
      {
        heading: "Implementation Scope and Industry Fit",
        subheading: "Designed for operators who need better response speed without extra staffing.",
        paragraphs: [
          "This service is a strong fit for businesses with recurring inquiries, limited front-desk coverage, or inconsistent follow-up. We regularly configure after-hours chatbot workflows for Montgomery County teams that need to capture intent while staff are on jobs, in service windows, or offline.",
          "Your setup includes business-specific training data, escalation rules, and measurable conversion checkpoints. We can connect the chatbot to forms, calendars, or CRM intake so your team receives clean lead context instead of fragmented messages. If certain requests should always go to a person, we build those handoff rules from day one.",
          "You also get practical governance: tone controls, compliance-friendly response boundaries, and monthly tuning. The result is an AI chatbot for business website performance that improves with usage and keeps supporting sales even when your office is closed.",
        ],
      },
    ],
    relatedArticles: [
      {
        slug: "ai-chatbots-that-convert",
        anchor: "Read: how AI chatbots convert visitors into customers",
        summary: "Detailed conversion framework for scripts, lead capture timing, and optimization.",
      },
      {
        slug: "what-is-an-ai-assistant",
        anchor: "Read: chatbot vs full AI assistant decision guide",
        summary: "Understand when to start with chatbot-only and when to expand operations.",
      },
    ],
  },
  "website-redesign": {
    h1: "AI Website Redesign for Pennsylvania Small Businesses",
    serviceType: "AI-Powered Website Redesign",
    schemaDescription:
      "Conversion-focused AI website redesign for Pennsylvania businesses. Includes messaging updates, technical SEO, mobile-first performance, and lead generation structure for local markets.",
    sections: [
      {
        heading: "What Changes in an AI-Powered Website Redesign",
        subheading: "We rebuild around search intent, conversion flow, and local visibility.",
        paragraphs: [
          "A strong AI website redesign starts with business outcomes, not visual trends. We review where prospects drop off, which pages fail to rank, and what messaging creates hesitation. Then we restructure the site around clear service pathways and conversion-focused page hierarchy so local visitors can move from question to action quickly.",
          "AI-assisted research helps us identify content gaps and phrasing patterns that match how customers search in Pennsylvania. We use that input to improve headlines, service explanations, and calls to action while keeping your brand voice grounded and clear. This is especially important for companies competing in the Greater Philadelphia area.",
          "We also rebuild technical foundations that affect discoverability and user trust: metadata, schema markup, internal linking, page speed, and mobile behavior. The result is a small business website redesign that supports local SEO website performance and gives your team a cleaner lead pipeline.",
        ],
      },
      {
        heading: "Who This Is For and How We Roll It Out",
        subheading: "Best for businesses with outdated sites, weak conversion paths, or poor search visibility.",
        paragraphs: [
          "If your current website gets traffic but few qualified inquiries, redesign is usually the highest-leverage move. We often support operators across Ambler, Montgomery County, and surrounding Pennsylvania markets who have good services but unclear positioning online. The redesign clarifies offer fit, service area, and next steps in plain language.",
          "Our implementation process includes content strategy, page architecture, build, SEO QA, and launch checks. We map redirect safety, preserve valuable URLs, and make sure the new structure is crawlable from day one. This protects existing visibility while setting the site up for stronger long-term rankings.",
          "After launch, we track early performance and tune based on real behavior. That includes improving underperforming pages, tightening copy where visitors stall, and adjusting internal links to support priority services. It is a practical, conversion-focused website process designed for local businesses that need outcomes, not endless revision cycles.",
        ],
      },
    ],
    relatedArticles: [
      {
        slug: "ai-chatbots-that-convert",
        anchor: "Read: chatbot flows that improve website conversion",
        summary: "Useful when redesign goals include lead capture and after-hours inquiry handling.",
      },
      {
        slug: "small-business-automation-tasks",
        anchor: "Read: automation workflows to pair with your new website",
        summary: "How to route captured leads into practical follow-up systems after launch.",
      },
    ],
  },
  "workflow-automation": {
    h1: "AI Workflow Automation for Pennsylvania Small Businesses",
    serviceType: "AI Workflow Automation",
    schemaDescription:
      "AI workflow automation for small business operations. Automates email, document processing, follow-ups, and task routing with guardrails and managed support.",
    sections: [
      {
        heading: "What AI Workflow Automation Looks Like in Practice",
        subheading: "Remove repetitive bottlenecks while keeping human control where it matters.",
        paragraphs: [
          "Most teams do not need dozens of automations. They need the right three to five. We start by mapping high-frequency admin tasks such as inbox triage, document handoff, and follow-up reminders, then design clear rule-based flows your staff can trust. This is where AI workflow automation delivers immediate time savings for small business teams.",
          "Each workflow includes trigger logic, routing paths, and exception handling. If something falls outside expected patterns, the system escalates instead of guessing. That safeguard is critical for email automation, approvals, and customer communication where quality control still matters.",
          "For Pennsylvania operators with lean staffing, this approach reduces context switching and improves response consistency without forcing a full system replacement. You keep the tools you already use while we automate the repetitive coordination work that drains daily capacity.",
        ],
      },
      {
        heading: "Industries, Use Cases, and Rollout Timeline",
        subheading: "Built for hospitality, field service, and owner-led teams in Ambler and beyond.",
        paragraphs: [
          "We commonly deploy workflow automation for restaurants, hotels, service providers, and small operators in Montgomery County who need tighter execution with limited headcount. Typical automations include task routing from intake forms, document automation for recurring admin, and status notifications for pending follow-ups.",
          "Implementation is phased so your team can validate results before expanding scope. We begin with one high-friction process, measure outcomes, then stack additional workflows once stability is confirmed. That keeps adoption high and avoids the operational confusion that happens when too much changes at once.",
          "You also receive documentation, monitoring, and maintenance support. As your processes evolve, we adjust automation logic to match. The goal is long-term reliability, not a one-time build, so your task automation for business remains useful as your volume and priorities change.",
        ],
      },
    ],
    relatedArticles: [
      {
        slug: "small-business-automation-tasks",
        anchor: "Read: five automation workflows that save time fast",
        summary: "A practical checklist for choosing the first workflow to automate.",
      },
      {
        slug: "what-is-an-ai-assistant",
        anchor: "Read: when to move from single automations to a full AI assistant",
        summary: "Useful for planning phased adoption after initial workflow success.",
      },
    ],
  },
  "business-intelligence": {
    h1: "AI Business Intelligence and Reporting for Local Owners",
    serviceType: "AI Business Intelligence and Reporting",
    schemaDescription:
      "AI business intelligence service that turns POS, CRM, and spreadsheet data into dashboards, daily briefings, and automated reports for local business owners in Pennsylvania.",
    sections: [
      {
        heading: "From Scattered Data to Decision-Ready Reporting",
        subheading: "AI dashboards built for owners who need clarity without manual reporting work.",
        paragraphs: [
          "Many local businesses have useful data but no practical reporting rhythm. Revenue, labor, inquiries, and operations live in separate tools, so owners spend hours stitching together snapshots. Our AI business intelligence setup connects those sources and converts them into clean dashboards and readable summaries.",
          "Instead of chasing exports, you get a consistent reporting cadence with metrics that match how you run the business. For small business reporting in Pennsylvania, that often includes lead pipeline movement, conversion rates, service throughput, and exception alerts that need attention today, not next month.",
          "We also add narrative context so teams can act faster. Automated reports highlight what changed, what likely caused it, and what needs follow-up. This reduces analysis fatigue and helps managers make better calls without deep spreadsheet work.",
        ],
      },
      {
        heading: "Who This Fits and What Implementation Includes",
        subheading: "Ideal for operators managing POS, CRM, and spreadsheet-heavy workflows.",
        paragraphs: [
          "This service is a strong fit for restaurants, hospitality, and owner-led teams across Ambler and the Greater Philadelphia market who need better visibility with limited analyst bandwidth. If reporting is delayed or inconsistent, AI dashboards and automated reports usually create immediate operational value.",
          "Implementation covers KPI definition, source mapping, dashboard setup, report automation, and validation. We prioritize the metrics tied to real decisions, then expand once the core reporting loop is trusted. This keeps the project grounded in outcomes rather than vanity charts.",
          "Ongoing support includes data quality checks, threshold tuning, and monthly refinement based on leadership priorities. As your business changes, your reporting should change with it. That is how POS data analytics becomes a reliable management tool instead of another static dashboard.",
        ],
      },
    ],
    relatedArticles: [
      {
        slug: "small-business-automation-tasks",
        anchor: "Read: automation foundations that improve reporting quality",
        summary: "Process cleanup and workflow automation often improve data reliability first.",
      },
      {
        slug: "what-is-an-ai-assistant",
        anchor: "Read: how AI assistants deliver daily operational briefings",
        summary: "See how reporting integrates with inbox and workflow management.",
      },
    ],
  },
  "ai-phone-agent": {
    h1: "AI Phone Agent for Local Business Call Coverage",
    serviceType: "AI Phone and Voice Agent",
    schemaDescription:
      "AI phone agent and AI voice agent setup for local businesses. Handles inbound calls, after-hours inquiries, call qualification, and booking support with escalation to staff.",
    sections: [
      {
        heading: "How an AI Voice Agent Supports Real Call Workloads",
        subheading: "Capture calls, qualify intent, and reduce missed opportunities after hours.",
        paragraphs: [
          "An AI phone agent is designed for teams that cannot answer every call live. We configure voice flows that greet callers professionally, collect key details, and route requests based on urgency and service type. For local businesses in Pennsylvania, this often means fewer missed leads during nights, weekends, and peak operating windows.",
          "Unlike a basic voicemail tree, the system can handle conversational intake and structured handoff. It can answer standard questions, capture booking intent, and escalate urgent requests to staff. That keeps customer experience responsive while giving your team breathing room during high-volume periods.",
          "We tune scripts and guardrails so calls stay clear and on-brand. If a request is complex, the agent transfers or logs context for follow-up. This creates dependable after-hours phone AI coverage without removing human oversight where judgment is required.",
        ],
      },
      {
        heading: "Use Cases, Industries, and Implementation Path",
        subheading: "Best for restaurants, hospitality, and service operators managing inbound volume.",
        paragraphs: [
          "This service is a strong fit for businesses in Ambler, Montgomery County, and the Greater Philadelphia area that lose revenue to missed calls. Common use cases include reservation intake, appointment reminders, lead qualification, and overflow support during staffing gaps.",
          "Implementation includes call-flow design, number setup, escalation routing, testing, and reporting dashboards. We define exactly what the AI answering service should handle, what must route to staff, and how call outcomes are tracked for quality review.",
          "After launch, we monitor performance and refine scripts based on real conversations. As call patterns shift, we update routing logic and prompts to maintain quality. That makes the AI voice agent a stable operational layer, not a one-time experiment.",
        ],
      },
    ],
    relatedArticles: [
      {
        slug: "ai-chatbots-that-convert",
        anchor: "Read: pairing website chat and phone intake for better conversion",
        summary: "Combine after-hours website and call coverage to reduce lead leakage.",
      },
      {
        slug: "small-business-automation-tasks",
        anchor: "Read: follow-up workflows that close more phone-generated leads",
        summary: "Automate reminders and handoffs so call inquiries are worked consistently.",
      },
    ],
  },
};
