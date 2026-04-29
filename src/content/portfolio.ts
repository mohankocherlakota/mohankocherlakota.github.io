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
  Award,
  type LucideIcon,
} from "lucide-react";

export type SectionId =
  | "home"
  | "about"
  | "projects"
  | "experience"
  | "skills"
  | "contact";

export type NavItem = { id: SectionId; label: string };

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  name: "Mohan Kocherlakota",
  initials: "MK",
  role: "GenAI Engineer · Multi-Agent AI",
  location: "Boston, MA",
  company: "Altimetrik",
  availability: "Available for opportunities",
  headline: {
    line1: "Building Production-Grade",
    line2: "Agentic AI Systems",
  },
  tagline:
    "GenAI Engineer specialising in multi-agent systems, RAG pipelines, and production-grade LLM architectures. I design and deliver enterprise AI that operates at scale across the full SDLC lifecycle — with humans always in control.",
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

export type ExperienceRole = {
  title: string;
  company: string;
  location: string;
  period: string;
  tags: string[];
  bullets: string[];
};

export const experience: ExperienceRole[] = [
  {
    title: "AI Engineer",
    company: "Altimetrik",
    location: "Boston, MA (Remote)",
    period: "Jan 2026 – Present",
    tags: ["GenAI", "Agentic", "MCP"],
    bullets: [
      "Leading an end-to-end AI enablement program training 300+ engineers — covering GenAI fundamentals, advanced RAG, multi-agent systems, SDLC integration, evaluation frameworks, and observability.",
      "Delivering enterprise Copilot L&D programs on prompt engineering, multi-agent usage, custom MCP server development, and governance — rolling out across multiple business units.",
      "Built Labyrinth, an AI-powered engineering workflow that automates the full ticket-to-PR cycle across Slack, Jira, GitHub, Snowflake, and Databricks via OpenAI Codex.",
      "Developed Codex (autonomous code deployment & testing) and an enterprise-scale Copilot Training platform from scratch — both now in active production use.",
    ],
  },
  {
    title: "Associate AI Engineer",
    company: "Altimetrik",
    location: "Boston, MA (Remote)",
    period: "Jul 2025 – Dec 2025",
    tags: ["RAG", "MCP", "LangChain"],
    bullets: [
      "Developed a multi-agent data pipeline using LangChain, OpenAI, Claude, and open-source models on cloud architectures — designed for portability and enterprise scale.",
      "Implemented a full SDLC deployment framework: agents autonomously analyse requirements, generate and validate SQL, auto-generate test cases, and deploy production-ready code to GitHub via MCP.",
      "Built a human-in-the-loop approval framework across each SDLC stage, giving enterprise reviewers structured control to approve, reject, or redirect agent actions.",
      "Architected version-controlled RAG pipelines and vector databases with automatic re-indexing triggered by schema, naming, or knowledge changes.",
      "Redesigned custom Confluence and Jira connectors for automated, real-time knowledge extraction across enterprise wikis.",
    ],
  },
  {
    title: "AI Developer Intern",
    company: "VesterAI",
    location: "Boston, MA",
    period: "Jan 2025 – Mar 2025",
    tags: ["LLM", "Research", "Multi-Agent"],
    bullets: [
      "Engineered an LLM-based multi-agent orchestration platform integrating PubMed and Wiley APIs — delivering curated, metadata-rich literature summaries that accelerated researchers' literature review.",
      "Built AI pipelines for industrial sensor data from pharmaceutical liquid processing systems, automating control decisions and capturing key operational metrics in real time.",
    ],
  },
  {
    title: "Data Scientist Intern",
    company: "Traxidy Solutions",
    location: "Canada (Remote)",
    period: "Sep 2024 – Dec 2024",
    tags: ["ML", "Analytics", "Flask"],
    bullets: [
      "Built a predictive analytics dashboard for project risk assessment using ML, improving decision-making accuracy by 40% over traditional methods.",
      "Implemented a three-tier risk score classification system (Low / Medium / High) that became the standard risk management interface for project stakeholders.",
      "Developed a Flask-based chatbot for querying live project details, risks, and mitigation strategies — reducing time spent on manual status reporting.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Capgemini",
    location: "India",
    period: "Jun 2021 – Jul 2023",
    tags: ["Engineering", "Azure", "Vue.js"],
    bullets: [
      "Led development and decommissioning of 25+ enterprise applications, implementing admin control systems and Azure DevOps CI/CD pipelines that cut release cycle time.",
      "Migrated legacy applications to Vue.js, delivering measurable improvements in UX and page load performance.",
      "Managed a cross-functional team of three, introducing structured status workflows that reduced issue resolution time and improved stakeholder communication.",
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
      "LLM Orchestration",
      "Fine-tuning",
      "RAG",
      "LangChain",
      "LlamaIndex",
      "OpenAI Codex",
      "MCP",
      "Vector Databases",
      "Human-in-the-loop",
      "Prompt Engineering",
      "LLM Evaluation",
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
      "Node.js",
      "SQL",
      "FastAPI",
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
