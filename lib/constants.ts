import {
  Bot,
  BrainCircuit,
  CalendarClock,
  ChartNoAxesCombined,
  FileCode2,
  Globe,
  Handshake,
  Headset,
  Mail,
  MessageSquareMore,
  Microscope,
  PhoneCall,
  Server,
  Sparkles,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Evolve Local AI",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://evolvelocalai.com",
  salesEmail: process.env.SALES_EMAIL || "sales@evolvelocalai.com",
  supportEmail: process.env.SUPPORT_EMAIL || "support@evolvelocalai.com",
  email: process.env.SALES_EMAIL || "sales@evolvelocalai.com",
  phone: "(267) 328-5132",
  location: "Ambler, PA",
  region: "Pennsylvania",
  description:
    "AI implementation services for local businesses in Pennsylvania. We install and maintain dedicated AI assistants, chatbots, automations, and reporting systems.",
};

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "AI Assistant", href: "/#ai-assistant" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Packages", href: "/#packages" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
];

export type ServiceItem = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string[];
  tags: string[];
  startsAt: string;
  whoItsFor: string[];
  features: string[];
  process: string[];
  useCases: string[];
  faq: { question: string; answer: string }[];
  seo: { title: string; description: string; keywords: string[] };
  related: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "ai-assistant",
    icon: Bot,
    title: "Dedicated AI Assistant",
    shortDescription:
      "A true AI employee on dedicated hardware that handles recurring operational work 24/7.",
    description: [
      "This is our flagship implementation. We install your dedicated AI Assistant on its own computer and configure it to handle recurring tasks inside your business.",
      "Unlike a basic chatbot, this assistant can use applications, manage files, monitor inboxes, and execute workflows based on clear instructions and guardrails.",
      "It runs continuously with proactive check-ins, summaries, and alerts, so you get consistent output without constantly prompting it.",
      "We manage setup, integrations, testing, and ongoing maintenance so your team can focus on customers while your AI handles the repetitive load.",
    ],
    tags: ["Dedicated Hardware", "24/7 Active", "50+ Integrations"],
    startsAt: "$3,500 setup + $499/mo management",
    whoItsFor: [
      "Business owners buried in email and admin",
      "Teams that need after-hours responsiveness",
      "Companies wanting private, on-premise AI operations",
    ],
    features: [
      "Runs on a dedicated Mac Mini, PC, or secure cloud machine",
      "Persistent memory trained on your business workflows",
      "Connected to email, calendar, messaging, files, and browser tasks",
      "Proactive heartbeat monitoring and daily briefings",
      "Managed updates, troubleshooting, and optimization",
    ],
    process: [
      "Operational audit and workflow mapping",
      "Assistant installation and environment hardening",
      "Integration setup and custom skill configuration",
      "Launch support with managed monthly optimization",
    ],
    useCases: [
      "Inbox triage with draft replies",
      "Daily operations summaries for owners",
      "Lead routing and follow-up reminders",
      "File organization and recurring reporting",
    ],
    faq: [
      {
        question: "Can this AI actually use a computer like a team member?",
        answer:
          "Yes. Your AI Assistant can interact with web apps, files, and productivity tools based on the workflow boundaries we configure.",
      },
      {
        question: "Is this only for large companies?",
        answer:
          "No. Most clients are local businesses with small teams that need extra operational capacity without hiring a full-time role.",
      },
      {
        question: "What happens after setup?",
        answer:
          "We stay involved through monitoring, updates, and monthly support so your assistant stays reliable as your business changes.",
      },
      {
        question: "Can this run privately on-site?",
        answer:
          "Yes. We can deploy on your hardware so your data remains on-premise with strict access controls.",
      },
    ],
    seo: {
      title: "Dedicated AI Assistant for Business | Evolve Local AI",
      description:
        "Install a dedicated AI Assistant for your business that runs 24/7 on your own hardware, handles workflows, and stays fully managed.",
      keywords: [
        "dedicated AI assistant for business",
        "AI employee",
        "autonomous AI agent",
      ],
    },
    related: ["website-chatbot", "workflow-automation", "business-intelligence"],
  },
  {
    slug: "website-chatbot",
    icon: MessageSquareMore,
    title: "AI Website Chatbot",
    shortDescription:
      "A conversion-focused website chatbot that answers questions, captures leads, and books appointments instantly.",
    description: [
      "Your website should convert visitors even after business hours. We install and train an AI chatbot that answers real customer questions immediately.",
      "The chatbot is customized to your services, pricing, service area, and FAQs so prospects get accurate answers and clear next steps.",
      "It captures contact details, qualifies leads, and can route inquiries into your preferred CRM or inbox.",
      "We continuously tune prompt logic and response quality so it stays helpful and conversion-focused.",
    ],
    tags: ["Lead Capture", "Custom Trained", "Instant Responses"],
    startsAt: "$1,500 setup + optional $199/mo maintenance",
    whoItsFor: [
      "Service businesses losing leads after-hours",
      "Teams with limited front-desk bandwidth",
      "Owners who need cleaner inquiry qualification",
    ],
    features: [
      "Trained on your business details and services",
      "Lead capture forms and smart handoff routing",
      "Appointment booking prompts",
      "Conversation analytics and conversion tracking",
      "Managed updates as your offers evolve",
    ],
    process: [
      "Intent mapping and FAQ collection",
      "Chatbot design, training, and script setup",
      "Website installation and testing",
      "Ongoing optimization for response quality",
    ],
    useCases: [
      "Answering service/pricing questions",
      "Booking consultations from site traffic",
      "Filtering spam and low-intent messages",
      "Collecting after-hours leads",
    ],
    faq: [
      {
        question: "Can the chatbot sound like our brand voice?",
        answer:
          "Yes. We write response style rules and train examples so replies match your tone and service standards.",
      },
      {
        question: "Will it replace my contact form?",
        answer:
          "It can complement or replace forms depending on your preference. Many businesses use both for better conversion.",
      },
      {
        question: "How fast can this launch?",
        answer:
          "Most chatbot launches take 1-2 business days once we receive your content and access.",
      },
      {
        question: "Can I view all conversations?",
        answer:
          "Yes. You can review transcripts and lead data for quality control and staff training.",
      },
    ],
    seo: {
      title: "AI Chatbot for Business Website | Evolve Local AI",
      description:
        "Deploy an AI chatbot for your business website that captures leads, answers customer questions, and books appointments 24/7.",
      keywords: [
        "AI chatbot for business website",
        "customer service chatbot",
        "lead capture chatbot",
      ],
    },
    related: ["website-redesign", "ai-assistant", "ai-phone-agent"],
  },
  {
    slug: "website-redesign",
    icon: Globe,
    title: "AI-Powered Website Redesign",
    shortDescription:
      "Modern website redesigns that use AI-assisted research and copy to improve conversion and local SEO.",
    description: [
      "Many local business websites look dated, load slowly, and fail to guide visitors toward contacting you. We rebuild your site with conversion-first structure.",
      "AI-assisted copy and layout workflows help us move faster, but every page is shaped around your services and real customer questions.",
      "The final site is mobile-first, technically optimized, and built for search visibility so it attracts more qualified local leads.",
      "We include launch support and post-launch refinements to make sure the redesign drives measurable results.",
    ],
    tags: ["SEO Optimized", "Mobile-First", "Conversion Focused"],
    startsAt: "$1,500 depending on scope",
    whoItsFor: [
      "Businesses with outdated or underperforming sites",
      "Owners who need better local search visibility",
      "Teams wanting clearer online positioning",
    ],
    features: [
      "Conversion-focused page architecture",
      "AI-assisted copy drafting and refinement",
      "Technical SEO and metadata implementation",
      "Fast, mobile-first performance",
      "Analytics setup and baseline tracking",
    ],
    process: [
      "Current site audit and opportunity map",
      "Content strategy and wireframe planning",
      "Design/build and SEO implementation",
      "Launch QA and post-launch improvements",
    ],
    useCases: [
      "Lead generation landing page redesign",
      "Service page restructuring",
      "Local SEO content improvements",
      "Improved mobile conversion flows",
    ],
    faq: [
      {
        question: "Do we need to start from scratch?",
        answer:
          "Not always. If parts of your current site are strong, we keep what works and rebuild only what needs improvement.",
      },
      {
        question: "Will my site still be easy to update?",
        answer:
          "Yes. We keep content structures straightforward so your team can make routine edits without technical complexity.",
      },
      {
        question: "Can you handle SEO during redesign?",
        answer:
          "Yes. We implement core technical SEO, metadata, schema, and internal linking as part of the build.",
      },
      {
        question: "How long does a redesign take?",
        answer:
          "Typical projects run 2-6 weeks depending on scope and content availability.",
      },
    ],
    seo: {
      title: "AI-Powered Website Redesign for Local Business",
      description:
        "Get an AI-powered website redesign that improves SEO, mobile performance, and conversions for local business growth.",
      keywords: [
        "AI-powered website redesign",
        "small business website SEO",
        "conversion optimized website",
      ],
    },
    related: ["website-chatbot", "workflow-automation", "business-intelligence"],
  },
  {
    slug: "workflow-automation",
    icon: Workflow,
    title: "Workflow Automation",
    shortDescription:
      "Automate repetitive email, document, and follow-up workflows so your team can focus on higher-value tasks.",
    description: [
      "Most teams still spend too much time on manual repeat work. We identify bottlenecks and automate them with practical, low-risk implementation.",
      "From email routing and invoice handling to reminders and internal handoffs, we build custom flows around your actual operations.",
      "Every automation is tested with fallback paths and clear ownership so your business keeps running smoothly.",
      "You get documentation, monitoring, and support so your automations stay dependable over time.",
    ],
    tags: ["Email Automation", "Task Routing", "Custom Workflows"],
    startsAt: "$2,000 depending on process scope",
    whoItsFor: [
      "Teams overloaded with repetitive admin work",
      "Companies with frequent manual status updates",
      "Operations needing cleaner cross-team handoffs",
    ],
    features: [
      "Workflow audit and prioritization",
      "Custom automation design with approvals",
      "Integrations across common business apps",
      "Error handling and fallback logic",
      "Monitoring with continuous improvement",
    ],
    process: [
      "Process mapping and friction analysis",
      "Automation blueprint and metrics definition",
      "Implementation and staged testing",
      "Rollout, training, and support",
    ],
    useCases: [
      "Email triage and response routing",
      "Invoice and document processing",
      "Customer follow-up sequences",
      "Inventory and exception alerts",
    ],
    faq: [
      {
        question: "Will this disrupt our current tools?",
        answer:
          "No. We design automations to fit your existing systems first, then phase upgrades only when they add clear value.",
      },
      {
        question: "Can automations include approval steps?",
        answer:
          "Yes. You can require human approval at key checkpoints before final actions are taken.",
      },
      {
        question: "How do you prevent automation mistakes?",
        answer:
          "We implement safeguards, logging, and staged rollout so problems are caught quickly and corrected safely.",
      },
      {
        question: "Do you train our team to use these workflows?",
        answer:
          "Yes. We provide practical handoff training and clear documentation for daily use.",
      },
    ],
    seo: {
      title: "Business Workflow Automation Services | Evolve Local AI",
      description:
        "Automate repetitive business workflows including email triage, reporting, and follow-ups with managed AI automation.",
      keywords: [
        "workflow automation",
        "business process automation services",
        "email automation for small business",
      ],
    },
    related: ["ai-assistant", "business-intelligence", "ai-phone-agent"],
  },
  {
    slug: "business-intelligence",
    icon: ChartNoAxesCombined,
    title: "AI Business Intelligence",
    shortDescription:
      "Turn scattered POS, CRM, and spreadsheet data into clear dashboards and automated decision-ready reports.",
    description: [
      "Business data is often scattered across multiple tools. We consolidate your key metrics and create AI-assisted reporting that is actually useful.",
      "You get dashboards and recurring summaries that highlight trends, risk signals, and opportunities without manual spreadsheet work.",
      "Reports are tailored to your role, whether you need owner-level daily visibility or department-level operational detail.",
      "We keep data pipelines stable and update reporting as your priorities shift.",
    ],
    tags: ["Daily Briefings", "Custom Reports", "Data Integration"],
    startsAt: "$2,500 depending on integrations",
    whoItsFor: [
      "Owners who want clearer daily numbers",
      "Teams running on disconnected spreadsheets",
      "Businesses that need better trend visibility",
    ],
    features: [
      "Data source integration and cleanup",
      "Custom KPI dashboards",
      "Automated daily and weekly reports",
      "AI-generated summary narratives",
      "Alerting for anomalies and thresholds",
    ],
    process: [
      "KPI definition and source inventory",
      "Data model and dashboard setup",
      "Automated report configuration",
      "Validation, training, and ongoing updates",
    ],
    useCases: [
      "Sales and lead funnel reporting",
      "Service performance tracking",
      "Labor and schedule insights",
      "Weekly owner briefings",
    ],
    faq: [
      {
        question: "Do I need perfect data to start?",
        answer:
          "No. We can start with available sources and improve quality in phases while still delivering useful insights quickly.",
      },
      {
        question: "Can reports be sent automatically?",
        answer:
          "Yes. We can schedule delivery to email or messaging channels on your preferred cadence.",
      },
      {
        question: "Will this replace our existing dashboard tool?",
        answer:
          "Sometimes. In many cases we enhance what you already use to avoid unnecessary migration costs.",
      },
      {
        question: "Can you include narrative summaries, not just charts?",
        answer:
          "Yes. We provide plain-English summaries so teams can act quickly without digging through raw data.",
      },
    ],
    seo: {
      title: "AI Business Intelligence Dashboards & Reports",
      description:
        "AI business intelligence services for local companies. Build custom dashboards and automated reports from your core data sources.",
      keywords: [
        "AI business intelligence",
        "automated business reports",
        "small business analytics dashboard",
      ],
    },
    related: ["workflow-automation", "ai-assistant", "website-redesign"],
  },
  {
    slug: "ai-phone-agent",
    icon: PhoneCall,
    title: "AI Phone & Voice Agent",
    shortDescription:
      "AI voice agents that answer and place real calls, handle routine inquiries, and support bookings and follow-ups.",
    description: [
      "Missed calls cost local businesses real revenue. We deploy AI voice agents that answer inquiries and route calls based on your business rules.",
      "The system can confirm appointments, gather caller details, and escalate to a person when needed.",
      "For outbound workflows, it can place follow-up calls for reminders, lead nurturing, and reactivation campaigns.",
      "You get controlled scripts, compliance-friendly guardrails, and reporting on call outcomes.",
    ],
    tags: ["Real Phone Calls", "Voice Interaction", "After-Hours Support"],
    startsAt: "$2,500 setup + usage-based voice costs",
    whoItsFor: [
      "High-call-volume local businesses",
      "Teams missing leads after-hours",
      "Operations needing consistent call qualification",
    ],
    features: [
      "Inbound call handling and routing",
      "Outbound follow-up and reminder flows",
      "Scripted responses with escalation rules",
      "CRM logging and call summaries",
      "Performance analytics and optimization",
    ],
    process: [
      "Call flow strategy and scripting",
      "Voice stack setup and number configuration",
      "Testing across real call scenarios",
      "Launch monitoring and improvement cycles",
    ],
    useCases: [
      "After-hours intake and FAQs",
      "Appointment reminders",
      "Lead reactivation calls",
      "Reservation and inquiry handling",
    ],
    faq: [
      {
        question: "Will callers know they are speaking with AI?",
        answer:
          "Yes. We keep interactions transparent and professional while ensuring smooth handoff to a human when needed.",
      },
      {
        question: "Can it transfer urgent calls immediately?",
        answer:
          "Yes. We configure priority detection and escalation paths for urgent or high-value situations.",
      },
      {
        question: "Can the voice agent work after-hours only?",
        answer:
          "Absolutely. Many businesses start with after-hours coverage and expand once they see results.",
      },
      {
        question: "Do we get records of call outcomes?",
        answer:
          "Yes. You receive logs and summaries so your team can track performance and follow up effectively.",
      },
    ],
    seo: {
      title: "AI Phone Agent for Local Businesses",
      description:
        "Deploy an AI phone and voice agent to answer calls, qualify leads, and support bookings for your local business.",
      keywords: [
        "AI phone agent",
        "AI voice agent for business",
        "automated call handling",
      ],
    },
    related: ["website-chatbot", "ai-assistant", "workflow-automation"],
  },
];

export const serviceCardContent = services.map((service) => ({
  ...service,
  href: `/services/${service.slug}`,
}));

export const trustStats = [
  { value: "100+", label: "App Integrations" },
  { value: "24/7", label: "Always-On Operation" },
  { value: "100%", label: "Private & On-Premise" },
  { value: "50+", label: "Messaging Platforms" },
];

export const painPoints = [
  "Hours spent on emails, scheduling, repetitive admin",
  "Customers leave your website because no one answers at 2 AM",
  "You tried AI tools but could not wire them into real workflow",
  "Hiring costs $50K+/year and your backlog still grows",
  "Competitors are starting to use AI in daily operations",
];

export const assistantFeatures = [
  {
    icon: Server,
    title: "Full Computer Control",
    description:
      "Runs on a dedicated computer. Browses the web, writes files, runs applications, and executes tasks.",
  },
  {
    icon: BrainCircuit,
    title: "Persistent Memory",
    description:
      "Remembers projects, preferences, and context so performance improves over time.",
  },
  {
    icon: CalendarClock,
    title: "Proactive Heartbeat System",
    description:
      "Checks inboxes, watches conditions, sends alerts, and runs scheduled work without prompting.",
  },
  {
    icon: Handshake,
    title: "Private & On-Premise",
    description:
      "Deployed on your hardware with optional offline operation for full control.",
  },
  {
    icon: Sparkles,
    title: "100+ Skills & Integrations",
    description:
      "Connects to email, calendar, docs, browser tasks, analytics, scripts, and more.",
  },
];

export const assistantNodes = [
  "WhatsApp",
  "Slack",
  "Email/Gmail",
  "Discord",
  "Calendar",
  "Web Browser",
  "Files & Docs",
  "Shell/Scripts",
  "Telegram",
  "Phone Calls",
  "Analytics",
  "Your Data",
];

export const useCases = [
  {
    icon: Mail,
    title: "Email Triage & Auto-Responses",
    description:
      "Categorizes email, drafts replies, flags urgent items, and sends daily summaries.",
  },
  {
    icon: CalendarClock,
    title: "Scheduling & Calendar Management",
    description:
      "Finds open slots, proposes times, confirms attendees, and prepares meeting briefs.",
  },
  {
    icon: Headset,
    title: "Morning Business Briefings",
    description:
      "Delivers daily updates with schedule, overnight activity, pending tasks, and key alerts.",
  },
  {
    icon: FileCode2,
    title: "Report Generation",
    description:
      "Pulls data from POS, CRM, and spreadsheets to create weekly and monthly reports.",
  },
  {
    icon: Microscope,
    title: "Competitive Research",
    description:
      "Monitors competitor websites, social channels, and offers to produce intelligence briefs.",
  },
  {
    icon: Wrench,
    title: "Content & Social Media",
    description:
      "Generates ideas, drafts posts, schedules content, and tracks engagement trends.",
  },
];

export const processSteps = [
  {
    title: "Discovery Call",
    description:
      "We learn how your business works, where time is leaking, and where AI can help first.",
  },
  {
    title: "Custom Blueprint",
    description:
      "You receive a tailored implementation plan with clear scope, pricing, and rollout timeline.",
  },
  {
    title: "Installation & Setup",
    description:
      "We install your systems, configure integrations, train workflows, and test end-to-end.",
  },
  {
    title: "Ongoing Support",
    description:
      "We maintain, optimize, and expand capabilities so your AI stack keeps producing results.",
  },
];

export const packages = [
  {
    name: "Starter",
    subtitle: "AI Website Boost",
    price: "Starting at $1,500 + optional $199/mo maintenance",
    features: [
      "AI-powered website redesign or optimization",
      "Custom chatbot trained on your business",
      "Lead capture and appointment booking",
      "Mobile-responsive, SEO-optimized pages",
      "30 days of post-launch support",
    ],
    cta: "Get Started",
    href: "/contact",
    featured: false,
  },
  {
    name: "Professional",
    subtitle: "AI Employee",
    price: "Starting at $3,500 setup + $499/mo management",
    features: [
      "Dedicated computer for your AI Assistant",
      "Full assistant setup and configuration",
      "Connected to email, calendar, and messaging apps",
      "Custom workflows and automations",
      "Persistent memory trained on your business",
      "Proactive monitoring and daily briefings",
      "Ongoing maintenance, updates, and support",
    ],
    cta: "Book Consultation",
    href: "/contact",
    featured: true,
  },
  {
    name: "Enterprise",
    subtitle: "Full AI Transformation",
    price: "Custom pricing",
    features: [
      "Everything in Professional",
      "AI-powered website redesign",
      "Multiple AI agents across teams",
      "Advanced cross-department automation",
      "AI phone agent for calls and reservations",
      "Custom integrations with existing tools",
      "Priority support and quarterly strategy reviews",
    ],
    cta: "Let's Talk",
    href: "/contact",
    featured: false,
  },
];

export const homepageFaq = [
  {
    question: "I'm not technical at all. Can I still use this?",
    answer:
      "Yes. We handle setup and maintenance. You interact in plain English through channels like WhatsApp, Slack, or email.",
  },
  {
    question: "What does dedicated computer mean?",
    answer:
      "Your AI Assistant runs on its own machine, such as a Mac Mini, office PC, or cloud server. Hardware can be provided if needed.",
  },
  {
    question: "Is my business data safe?",
    answer:
      "Yes. We can run on your hardware so your data stays local, with optional offline setups for maximum control.",
  },
  {
    question: "What are the ongoing costs?",
    answer:
      "Most clients choose monthly maintenance, plus model usage costs that often range from about $5-$50/month depending on usage.",
  },
  {
    question: "How long does setup take?",
    answer:
      "A chatbot can launch in 1-2 days. A full AI Assistant implementation is usually 1-2 weeks.",
  },
  {
    question: "What happens if something breaks?",
    answer:
      "Maintenance plans include support and same-day triage for urgent issues.",
  },
  {
    question: "Can the AI actually make phone calls?",
    answer:
      "Yes. Voice integrations allow real inbound and outbound call workflows on supported packages.",
  },
  {
    question: "Do you serve businesses outside Pennsylvania?",
    answer:
      "Yes. We are based in Ambler, PA and serve clients remotely across the U.S.",
  },
];

export const valueCards = [
  { title: "Local First", description: "Built for neighborhood businesses, not enterprise complexity." },
  { title: "No Jargon", description: "Clear language, clear plans, and practical implementation." },
  { title: "Hands-On", description: "Direct setup, integration, and support by an experienced partner." },
  { title: "Your Data, Your Control", description: "Private deployment options with transparent access rules." },
];

export const blogPreview = [
  {
    slug: "what-is-an-ai-assistant",
    title: "What Is an AI Assistant - And Why Your Business Needs One",
    excerpt:
      "A plain-English guide to what an AI Assistant actually does and where it fits in a real local operation.",
    category: "AI BASICS",
    readTime: "5 MIN",
  },
  {
    slug: "ai-chatbots-that-convert",
    title: "How AI Chatbots Turn Website Visitors Into Paying Customers",
    excerpt:
      "A practical breakdown of chatbot flows that capture better leads and reduce missed inquiries after hours.",
    category: "CHATBOTS",
    readTime: "4 MIN",
  },
  {
    slug: "small-business-automation-tasks",
    title: "5 Tasks Every Small Business Should Automate With AI Today",
    excerpt:
      "Five automation wins that free up staff time immediately without requiring a full systems overhaul.",
    category: "AUTOMATION",
    readTime: "6 MIN",
  },
];

export const trustedResources = [
  {
    title: "AI for small business",
    source: "U.S. Small Business Administration",
    href: "https://www.sba.gov/business-guide/manage-your-business/ai-small-business",
    description:
      "Practical federal guidance on where AI helps, what to avoid, and how to adopt it safely in a small company.",
  },
  {
    title: "SEO Starter Guide",
    source: "Google Search Central",
    href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
    description:
      "A clear, non-hype guide to technical and content basics that improve visibility in Google Search.",
  },
  {
    title: "Tips to improve local ranking on Google",
    source: "Google Business Profile Help",
    href: "https://support.google.com/business/answer/7091/improve-your-local-ranking-on-google",
    description:
      "Step-by-step actions to strengthen local discovery using profile quality, reviews, and relevance signals.",
  },
  {
    title: "Get started with Search Console",
    source: "Google Search Central",
    href: "https://developers.google.com/search/docs/monitor-debug/search-console-start",
    description:
      "Learn how to monitor indexing and search performance so your team can make better website decisions.",
  },
  {
    title: "Cyber Guidance for Small Businesses",
    source: "CISA",
    href: "https://www.cisa.gov/cyber-guidance-small-businesses",
    description:
      "Actionable security guidance for owners and managers to reduce risk while rolling out new digital systems.",
  },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "Facebook", href: "https://www.facebook.com" },
];

export const serviceLinks = services.map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
}));

export const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
