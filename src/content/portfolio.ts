import {
  Bot,
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Linkedin,
  Mail,
  Github,
  Globe,
  GraduationCap,
  FileSearch,
  Layers3,
  Network,
  PenTool,
  ShieldCheck,
  Workflow,
  Award,
  type LucideIcon,
} from "lucide-react";

export type SectionId =
  | "home"
  | "systems"
  | "experience"
  | "labs"
  | "writing"
  | "technology"
  | "contact";

export type NavItem = { id: SectionId; label: string };

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "systems", label: "AI Systems" },
  { id: "experience", label: "Experience" },
  { id: "labs", label: "Labs" },
  { id: "writing", label: "Writing" },
  { id: "technology", label: "Technology" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  name: "Mohan Kocherlakota",
  initials: "MK",
  role: "GenAI Engineer · Multi-Agent AI",
  location: "Boston, MA",
  company: "Altimetrik",
  availability: "Available for opportunities",
  positioning: "AI Engineer — Agentic Systems & Enterprise AI",
  proof: "5+ yrs Engineering · 300+ Engineers Trained · 10+ AI Systems",
  headline: {
    line1: "MOHAN",
    line2: "AI Engineer — Agentic Systems & Enterprise AI",
  },
  tagline:
    "I build production AI systems that connect agents, enterprise data and software-development workflows.",
  badges: ["Northeastern MS · GPA 3.8", "Multi-Agent · RAG · MCP", "Boston, MA"],
  expertise: [
    "Agentic AI",
    "RAG Pipelines",
    "LangChain",
    "MCP",
    "Vector DBs",
    "LLM Fine-tuning",
  ],
  achievements: [
    "300+ engineers trained on GenAI fundamentals",
    "MCP-based autonomous SDLC deployment to GitHub",
    "40% lift in decision accuracy via ML risk analytics",
  ],
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "300+", label: "Engineers Trained" },
    { value: "10+", label: "Projects Shipped" },
    { value: "3.8", label: "GPA" },
  ],
};

export const impactStats = [
  { value: "300+", label: "Engineers trained" },
  { value: "5", label: "Systems connected via MCP" },
  { value: "40%", label: "Decision accuracy lift" },
  { value: "25+", label: "Enterprise apps delivered" },
];

export type AISystem = {
  title: string;
  subtitle: string;
  problem: string;
  approach: string;
  stack: string[];
  impact: string;
  lessons: string;
  architecture: string[];
  icon: LucideIcon;
  featured?: boolean;
};

export const aiSystems: AISystem[] = [
  {
    title: "Labyrinth",
    subtitle: "Agentic Software Engineering",
    problem:
      "Enterprise delivery teams lose time translating requests across Slack, Jira, code, tests, reviews, and deployment handoffs.",
    approach:
      "Built a human-controlled agentic workflow that turns engineering tickets into reviewed implementation plans, code changes, validation runs, and GitHub-ready output.",
    stack: ["OpenAI Codex", "MCP", "Slack", "Jira", "GitHub", "Snowflake", "Databricks"],
    impact:
      "Connected the ticket-to-PR loop across five enterprise systems while keeping approvals explicit at every critical decision point.",
    lessons:
      "Agentic SDLC systems work best when autonomy is bounded by clean context, observable checkpoints, and reviewer control.",
    architecture: ["Slack", "Jira", "Codex", "Eval", "GitHub"],
    icon: Workflow,
    featured: true,
  },
  {
    title: "Autonomous SDLC",
    subtitle: "Requirement-to-Deployment Agents",
    problem:
      "Requirements, SQL validation, test generation, and deployment checks were fragmented across manual engineering steps.",
    approach:
      "Designed staged agents for requirement analysis, SQL generation, test-case creation, validation, and deployment with approval gates between stages.",
    stack: ["LangChain", "OpenAI", "Claude", "MCP", "GitHub Actions", "SQL"],
    impact:
      "Created a reusable deployment framework for production-ready code generation and validation across enterprise workflows.",
    lessons:
      "Reliability comes from stage boundaries, testable intermediate artifacts, and clear rollback paths, not one giant autonomous prompt.",
    architecture: ["Requirements", "Agents", "Tests", "Review", "Deploy"],
    icon: Network,
  },
  {
    title: "Enterprise RAG",
    subtitle: "Versioned Knowledge Retrieval",
    problem:
      "Internal answers were scattered across Confluence, Jira, schemas, and changing business documentation.",
    approach:
      "Architected version-controlled RAG pipelines with custom connectors, automatic re-indexing, semantic retrieval, and governance-friendly source grounding.",
    stack: ["RAG", "Vector DBs", "Confluence", "Jira", "OpenAI", "Databricks"],
    impact:
      "Improved knowledge freshness and retrieval quality for enterprise AI assistants working over operational data.",
    lessons:
      "RAG quality depends as much on ingestion contracts, naming drift, and refresh strategy as it does on embedding choice.",
    architecture: ["Sources", "Ingest", "Index", "Retrieve", "Answer"],
    icon: FileSearch,
  },
];

export type ExperienceRole = {
  title: string;
  company: string;
  location: string;
  period: string;
  tags: string[];
  bullets: string[];
  logo?: string;
};

export const experience: ExperienceRole[] = [
  {
    title: "AI Engineer",
    company: "Altimetrik",
    location: "Boston, MA (Remote)",
    period: "Jan 2026 – Present",
    logo: "/altimetrik.png",
    tags: ["GenAI", "Agentic", "MCP"],
    bullets: [
      "Trained 300+ engineers on GenAI fundamentals, advanced RAG, multi-agent systems, SDLC integration, evaluation, and observability.",
      "Built Labyrinth, an agentic engineering workflow connecting Slack, Jira, GitHub, Snowflake, and Databricks through OpenAI Codex and MCP.",
      "Delivered enterprise Copilot programs covering prompt engineering, custom MCP servers, governance, and human approval patterns.",
      "Developed autonomous deployment, testing, and Copilot training systems now used in production workflows.",
    ],
  },
  {
    title: "Associate AI Engineer",
    company: "Altimetrik",
    location: "Boston, MA (Remote)",
    period: "Jul 2025 – Dec 2025",
    logo: "/altimetrik.png",
    tags: ["RAG", "MCP", "LangChain"],
    bullets: [
      "Developed portable multi-agent data pipelines using LangChain, OpenAI, Claude, and open-source models on cloud architectures.",
      "Implemented an SDLC framework where agents analyze requirements, generate SQL, create tests, and deploy code to GitHub through MCP.",
      "Built approval gates so enterprise reviewers can approve, reject, or redirect agent actions at each SDLC stage.",
      "Architected version-controlled RAG pipelines with automatic re-indexing for schema, naming, and knowledge changes.",
    ],
  },
  {
    title: "AI Developer Intern",
    company: "VesterAI",
    location: "Boston, MA",
    period: "Jan 2025 – Mar 2025",
    logo: "/vester.png",
    tags: ["LLM", "Research", "Multi-Agent"],
    bullets: [
      "Engineered an LLM multi-agent research platform integrating PubMed and Wiley APIs for metadata-rich literature summaries.",
      "Built AI pipelines for pharmaceutical sensor data, automating control decisions and real-time operational metrics.",
    ],
  },
  {
    title: "Data Scientist Intern",
    company: "Traxidy Solutions",
    location: "Canada (Remote)",
    period: "Sep 2024 – Dec 2024",
    logo: "/traxidy.png",
    tags: ["ML", "Analytics", "Flask"],
    bullets: [
      "Built an ML risk dashboard that improved project decision accuracy by 40% over traditional methods.",
      "Implemented low / medium / high risk classification as the standard stakeholder interface.",
      "Developed a Flask chatbot for live project details, risks, and mitigation queries.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Capgemini",
    location: "India",
    period: "Jun 2021 – Jul 2023",
    logo: "/capgemini.png",
    tags: ["Engineering", "Azure", "Vue.js"],
    bullets: [
      "Led development and decommissioning of 25+ enterprise applications with admin controls and Azure DevOps CI/CD.",
      "Migrated legacy applications to Vue.js, improving UX and page-load performance.",
      "Managed a three-person team and introduced workflows that reduced issue resolution time.",
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
};

export const projects: Project[] = [
  {
    title: "Truth-Bounded Résumé Engine",
    subtitle: "LangGraph · Claim Provenance",
    description:
      "LangGraph-orchestrated résumé builder that tailors content to a job description while staying strictly bounded to verified career facts — tracking claim provenance, flagging unsupported requirements, and requiring human approval before every export.",
    stack: ["LangGraph", "MCP", "Hybrid RAG", "In Development"],
    icon: ShieldCheck,
  },
  {
    title: "Answer Engine LLM",
    subtitle: "RAG · LLM Orchestration",
    description:
      "Perplexity-inspired answer engine that delivers precise, source-backed responses using RAG and LLMs — grounding every answer in cited, retrievable context rather than model hallucination.",
    stack: ["LLM", "RAG", "TypeScript", "React"],
    icon: Bot,
  },
  {
    title: "Multi-Speaker Transcription",
    subtitle: "Audio AI · Speaker Attribution",
    description:
      "Speaker-level transcription pipeline using WhisperX and NER, accurately attributing speech to individual speakers and tagging entities across multi-participant audio recordings.",
    stack: ["WhisperX", "NER", "Python", "Audio AI"],
    icon: Brain,
  },
  {
    title: "RAG Application",
    subtitle: "Document Q&A · Vector Search",
    description:
      "End-to-end Retrieval-Augmented Generation system for document Q&A — ingests multi-source knowledge bases into a vector store and retrieves context-precise answers at query time.",
    stack: ["RAG", "Vector DB", "Python"],
    icon: Database,
  },
  {
    title: "Azure OpenAI Shopping Bot",
    subtitle: "Conversational Commerce",
    description:
      "Conversational shopping assistant on Azure that handles natural language product queries, searches a live catalogue, and guides users from discovery to purchase in a single chat flow.",
    stack: ["Azure", "OpenAI", "Chatbot"],
    icon: Bot,
  },
  {
    title: "Azure OpenAI Cognitive Search",
    subtitle: "Enterprise Knowledge Retrieval",
    description:
      "Enterprise knowledge retrieval system combining Azure Cognitive Search with OpenAI — accurate Q&A over large internal document repositories with semantic ranking.",
    stack: ["Azure", "OpenAI", "Cognitive Search", "Python"],
    icon: Cloud,
  },
  {
    title: "Llama3 Vision",
    subtitle: "Multimodal Reasoning",
    description:
      "Multimodal reasoning pipeline using Llama-3 vision capabilities to interpret, extract, and summarise information from images and document scans without manual annotation.",
    stack: ["Llama-3", "Vision AI", "Multimodal"],
    icon: Brain,
  },
  {
    title: "GenAI Mutual Funds",
    subtitle: "Finance × LLM",
    description:
      "LLM-powered analysis platform that combines live financial data APIs with generative AI to produce plain-language fund comparisons and investment summaries.",
    stack: ["GenAI", "Finance", "Python"],
    icon: Code2,
  },
  {
    title: "Stock Prediction",
    subtitle: "Time-Series ML",
    description:
      "ML-driven stock price forecasting tool using technical indicators and time-series models across multiple tickers, with backtesting to validate strategy performance.",
    stack: ["ML", "Finance", "Time Series"],
    icon: GitBranch,
  },
];

export type SkillCategory = {
  title: string;
  accent: string; // tailwind classes for tinted card
  iconBg: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Agentic AI & LLMs",
    accent: "from-violet-500/10 via-violet-500/[0.03] to-transparent",
    iconBg: "bg-violet-500/15 text-violet-300",
    icon: Brain,
    skills: [
      "Multi-Agent Systems",
      "LangGraph",
      "LLM Orchestration",
      "Fine-tuning",
      "Hybrid RAG",
      "LangChain",
      "LlamaIndex",
      "OpenAI Codex",
      "MCP / FastMCP",
      "Vector Databases",
      "Human-in-the-loop",
      "Prompt Engineering",
    ],
  },
  {
    title: "Evaluation & Observability",
    accent: "from-sky-500/10 via-sky-500/[0.03] to-transparent",
    iconBg: "bg-sky-500/15 text-sky-300",
    icon: FileSearch,
    skills: [
      "DeepEval",
      "RAGAS",
      "Langfuse",
      "LangSmith",
      "OpenTelemetry",
      "LLM Evaluation",
      "Claim Provenance",
      "Human-Approval Gates",
    ],
  },
  {
    title: "ML & Deep Learning",
    accent: "from-teal-500/10 via-teal-500/[0.03] to-transparent",
    iconBg: "bg-teal-500/15 text-teal-300",
    icon: Bot,
    skills: [
      "Supervised Learning",
      "Deep Learning",
      "Transformers",
      "PyTorch",
      "JAX",
      "TensorFlow",
      "scikit-learn",
      "NLP",
      "Computer Vision",
      "OpenCV",
      "WhisperX",
      "Speech / Audio AI",
      "CUDA",
    ],
  },
  {
    title: "Programming & Frameworks",
    accent: "from-zinc-400/10 via-zinc-400/[0.03] to-transparent",
    iconBg: "bg-zinc-400/15 text-zinc-200",
    icon: Code2,
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "SQL",
      "FastAPI",
      "Pydantic",
      "Flask",
      "R",
      "n8n",
      "FFmpeg",
    ],
  },
  {
    title: "MLOps & Cloud",
    accent: "from-amber-500/10 via-amber-500/[0.03] to-transparent",
    iconBg: "bg-amber-500/15 text-amber-300",
    icon: Cloud,
    skills: [
      "Docker",
      "Azure",
      "GCP",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Azure DevOps",
      "Databricks",
      "Snowflake",
      "REST APIs",
    ],
  },
  {
    title: "Integrations & APIs",
    accent: "from-rose-500/10 via-rose-500/[0.03] to-transparent",
    iconBg: "bg-rose-500/15 text-rose-300",
    icon: GitBranch,
    skills: [
      "Slack API",
      "Jira API",
      "GitHub API",
      "Confluence API",
      "OpenAI API",
      "Anthropic API",
      "PubMed",
      "Wiley",
      "Bloomberg",
      "Yahoo Finance",
    ],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  dates: string;
};

export const education: EducationItem[] = [
  {
    school: "Northeastern University",
    degree: "M.S. in Applied Machine Intelligence — GPA 3.8",
    dates: "Sep 2023 – May 2025",
  },
  {
    school: "GITAM University",
    degree: "B.Tech in Electronics & Communication Engineering",
    dates: "Graduated July 2020",
  },
];

export const recognition: string[] = [
  "OpenAI — Certified",
  "AWS — Certified",
  "Hugging Face — Certified",
  "MIT Energy HackAIthon — Semi-finalist",
  "MIT AI in Education Hackathon — Semi-finalist",
  "OpenAI Global Codex Hackathon — Participant",
];

export type WritingItem = {
  title: string;
  theme: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const writing: WritingItem[] = [
  {
    title: "Agentic Engineering Notes",
    theme: "Agents · SDLC · MCP",
    description:
      "Practical notes on building agent workflows that move from prototype demos into reviewable engineering systems.",
    href: "https://medium.com/@mohankocherlakota",
    icon: PenTool,
  },
  {
    title: "Enterprise RAG Playbook",
    theme: "Retrieval · Governance",
    description:
      "How ingestion, refresh strategy, source grounding, and evaluation shape enterprise-grade retrieval systems.",
    href: "https://medium.com/@mohankocherlakota",
    icon: FileSearch,
  },
  {
    title: "Human-Controlled Autonomy",
    theme: "AI Safety · Workflow Design",
    description:
      "Design patterns for keeping humans in control while agents execute meaningful work across software workflows.",
    href: "https://medium.com/@mohankocherlakota",
    icon: ShieldCheck,
  },
  {
    title: "LLM Systems in Production",
    theme: "Architecture · Evaluation",
    description:
      "Lessons from connecting models, data, tools, and evaluation loops into maintainable AI products.",
    href: "https://medium.com/@mohankocherlakota",
    icon: Layers3,
  },
];

export type Credential = {
  title: string;
  issuer: string;
  status: string;
  icon: LucideIcon;
  href?: string;
};

export const credentials: Credential[] = [
  {
    title: "OpenAI Certified",
    issuer: "OpenAI",
    status: "Verification link pending",
    icon: Award,
  },
  {
    title: "AWS Certified",
    issuer: "Amazon Web Services",
    status: "Verification link pending",
    icon: Cloud,
  },
  {
    title: "Hugging Face Certified",
    issuer: "Hugging Face",
    status: "Verification link pending",
    icon: Brain,
  },
  {
    title: "MIT AI Hackathons",
    issuer: "MIT Energy HackAIthon · MIT AI in Education",
    status: "Semi-finalist",
    icon: GraduationCap,
  },
];

export const corePrinciples: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Production-First Mindset",
    description:
      "Every AI system I build is designed for production from day one — auditable, observable, and maintainable.",
    icon: Cloud,
  },
  {
    title: "Human-in-the-Loop",
    description:
      "The most impactful AI isn't the most complex — it's the one that makes the right decision at the right moment, with humans always in control.",
    icon: Brain,
  },
  {
    title: "Measurable Impact",
    description:
      "Focused on driving tangible business outcomes — from cost savings to time-to-decision, from coverage to accuracy lift.",
    icon: Award,
  },
];

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
};

export const socials: SocialLink[] = [
  {
    label: "Email",
    handle: "mohankvsnsk@gmail.com",
    href: "mailto:mohankvsnsk@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    handle: "mohan-kocherlakota-90b512125",
    href: "https://www.linkedin.com/in/mohan-kocherlakota-90b512125",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    handle: "@mohankocherlakota",
    href: "https://github.com/mohankocherlakota",
    icon: Github,
  },
  {
    label: "Medium",
    handle: "@mohankocherlakota",
    href: "https://medium.com/@mohankocherlakota",
    icon: Globe,
  },
];

export const educationIcon = GraduationCap;
export const recognitionIcon = Award;
