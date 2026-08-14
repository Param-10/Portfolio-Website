import type { ComponentType } from "react";
import {
  Award,
  Bot,
  Briefcase,
  Cloud,
  Code2,
  Database,
  FileText,
  Github,
  GraduationCap,
  Home,
  Layers3,
  Linkedin,
  Mail,
  Medal,
  User,
} from "lucide-react";

export type IconComponent = ComponentType<{
  size?: number;
  strokeWidth?: number;
  className?: string;
  "aria-hidden"?: boolean | "true";
}>;

export type NavItem = {
  label: string;
  href: string;
  section: string;
  icon: IconComponent;
  mobile: boolean;
};

export type ContactLink = {
  label: string;
  href: string;
  icon: IconComponent;
};

export type ProjectLink = {
  label: "GitHub" | "Live demo" | "Live site" | "Devpost" | "Prototype" | "Source" | "Chrome Web Store" | "npm";
  href: string;
  kind: "github" | "external";
};

export type ProjectImage = {
  src: string;
  optimizedSrc?: string;
  alt: string;
  width: number;
  height: number;
  fit?: "cover" | "contain";
  position?: string;
};

export type CaseStudy = {
  problem: string;
  contribution: string;
  architecture: string[];
  challenge: string;
  result: string;
};

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  image?: ProjectImage;
  recognition?: string;
  metric?: string;
  caseStudy?: CaseStudy;
};

export type LogoMeta = {
  src: string;
  fallback: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  logo: LogoMeta;
  bullets: string[];
  websiteUrl?: string;
  linkedinUrl?: string;
};

export type Education = {
  school: string;
  degree: string;
  detail: string;
  period: string;
  location: string;
  logo: LogoMeta;
};

export type Recognition = {
  organization: string;
  title: string;
  period?: string;
  type: "Leadership" | "Recognition" | "Program";
};

export type AcademicRecognition = {
  name: string;
  issuer?: string;
  period?: string;
  amount?: string;
};

export type SkillGroup = {
  title: string;
  icon: IconComponent;
  skills: string[];
};

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const portfolio = {
  name: "Paramveer Singh Bhele",
  eyebrow: "Software Engineering · AI Systems · Infrastructure",
  subheadline:
    "Software engineer building AI systems, backend infrastructure, and production products. Columbia M.S. Artificial Intelligence ’27 · USF Computer Science ’26.",
  portrait: {
    src: withBase("/paramveer-portrait.jpg"),
    optimizedSrc: withBase("/paramveer-portrait.webp"),
    width: 900,
    height: 1200,
  },
  resume: withBase("/resume.pdf"),
  email: "bheleparamveer@gmail.com",
  links: {
    github: "https://github.com/Param-10",
    linkedin: "https://www.linkedin.com/in/paramveer-singh-bhele/",
    source: "https://github.com/Param-10/Portfolio-Website",
    portfolio: "https://paramveerbhele.com/portfolio/",
  },
  navItems: [
    { icon: Home, label: "Home", href: "#home", section: "home", mobile: true },
    { icon: Layers3, label: "Selected work", href: "#work", section: "work", mobile: true },
    { icon: Briefcase, label: "Experience", href: "#experience", section: "experience", mobile: true },
    { icon: User, label: "About", href: "#about", section: "about", mobile: true },
    { icon: GraduationCap, label: "Education", href: "#education", section: "education", mobile: false },
    { icon: Medal, label: "Leadership and recognition", href: "#recognition", section: "recognition", mobile: false },
    { icon: Code2, label: "Skills", href: "#skills", section: "skills", mobile: false },
    { icon: Mail, label: "Contact", href: "#contact", section: "contact", mobile: true },
  ] satisfies NavItem[],
  selectedProjects: [
    {
      number: "01",
      title: "Polaris",
      category: "AI INFRA · DEVELOPER TOOL",
      image: {
        src: withBase("/projects/polaris.png"),
        optimizedSrc: withBase("/projects/polaris.webp"),
        alt: "Polaris repository dashboard showing infrastructure security findings and remediation status",
        width: 1024,
        height: 594,
        fit: "cover",
        position: "top",
      },
      description:
        "AI-powered GitHub App that reviews Infrastructure-as-Code pull requests, maps findings to security controls, and generates verified fixes before merge.",
      tech: ["FastAPI", "Next.js", "PostgreSQL", "GitHub App", "Gemini", "Infrastructure-as-Code"],
      links: [
        { label: "GitHub", href: "https://github.com/Param-10/hackthebay", kind: "github" },
        { label: "Live demo", href: "https://polaris-livid-one.vercel.app/", kind: "external" },
        { label: "Devpost", href: "https://devpost.com/software/polaris-szhivy", kind: "external" },
      ],
      caseStudy: {
        problem:
          "Infrastructure changes often reach review without fast, actionable security feedback across Terraform, Dockerfiles, Kubernetes YAML, and GitHub Actions.",
        contribution:
          "Built the GitHub App workflow, FastAPI analysis service, repository-scoped data model, control mapping, and verified patch flow used inside pull requests.",
        architecture: [
          "GitHub pull request webhook",
          "FastAPI analysis service",
          "Dual-agent review and fix verification",
          "PostgreSQL findings store",
          "PR comments and developer-approved fixes",
        ],
        challenge:
          "Keeping repositories isolated while turning model output into precise, reviewable findings and patches across several configuration formats.",
        result:
          "The working app posts mapped security findings in pull requests and verifies generated patches before presenting them to developers.",
      },
    },
    {
      number: "02",
      title: "PR Nutrition",
      category: "DEVELOPER TOOL · OPEN SOURCE",
      image: {
        src: withBase("/projects/pr-nutrition-github.png"),
        optimizedSrc: withBase("/projects/pr-nutrition-github.webp"),
        alt: "GitHub repository preview for PR Nutrition, a pull-request review prioritization tool",
        width: 1200,
        height: 600,
        fit: "contain",
        position: "center",
      },
      description:
        "Local-first, deterministic CLI and GitHub Action that labels pull-request review risk, filters low-value files, and points reviewers to the changes that deserve attention first.",
      tech: ["TypeScript", "Node.js", "Git", "GitHub Actions", "pnpm", "Vitest"],
      links: [
        { label: "GitHub", href: "https://github.com/Param-10/pr-nutrition", kind: "github" },
        { label: "npm", href: "https://www.npmjs.com/package/pr-nutrition", kind: "external" },
      ],
      metric: "v0.4.0 · CLI + GitHub Action",
      caseStudy: {
        problem:
          "Reviewers can lose time sorting generated files, lockfiles, and broad pull-request diffs before finding the changes that carry the most review risk.",
        contribution:
          "Built the deterministic analyzer, CLI commands, configuration flow, review-focus reports, and read-only GitHub Action used to prioritize a pull request without sending source code to an external service.",
        architecture: [
          "Local Git metadata",
          "Path and change classifier",
          "Risk and readiness model",
          "Markdown and JSON reports",
          "CLI and GitHub Action",
        ],
        challenge:
          "Producing useful, repeatable review guidance while staying local-first and avoiding source-code uploads, external APIs, or model calls.",
        result:
          "The current v0.4.0 release is distributed through npm and a GitHub Action, with deterministic output designed for both terminal and CI workflows.",
      },
    },
    {
      number: "03",
      title: "Adversarial Spam Detection",
      category: "ML RESEARCH · AI4ALL",
      image: {
        src: withBase("/projects/adversarial-spam-github.png"),
        optimizedSrc: withBase("/projects/adversarial-spam-github.webp"),
        alt: "GitHub repository preview for the Adversarial Spam Detection research project",
        width: 1200,
        height: 600,
        fit: "contain",
        position: "center",
      },
      description:
        "Built an adversarial training pipeline pairing a BERT spam classifier with Qwen-generated attacks, improving adversarial detection from 91.7% to 95.7% across three training iterations while maintaining 96.5% accuracy.",
      tech: ["Python", "PyTorch", "BERT", "Qwen3-4B", "LoRA", "Transformers"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Param-10/adversarial-spam-detection",
          kind: "github",
        },
      ],
      metric: "91.7% → 95.7% adversarial detection",
      caseStudy: {
        problem:
          "A classifier that performs well on familiar messages can still fail when an attacker deliberately rewrites spam to evade its learned patterns.",
        contribution:
          "Built the iterative training and evaluation pipeline: fine-tuned BERT, generated hard examples with Qwen3-4B and LoRA, retrained, and compared errors after each round.",
        architecture: [
          "SMS dataset and BERT baseline",
          "Qwen3-4B + LoRA attack generation",
          "Adversarial example filtering",
          "Classifier retraining",
          "Clean and adversarial evaluation across three iterations",
        ],
        challenge:
          "Improving robustness against generated attacks without sacrificing performance on the original evaluation set.",
        result:
          "Adversarial detection improved from 91.7% to 95.7% while clean accuracy remained at 96.5%.",
      },
    },
    {
      number: "04",
      title: "CarbonCTRL",
      category: "AWARD WINNER · AI PRODUCT",
      image: {
        src: withBase("/projects/carbonctrl.png"),
        optimizedSrc: withBase("/projects/carbonctrl.webp"),
        alt: "CarbonCTRL sustainability dashboard with emissions summaries and reduction recommendations",
        width: 1024,
        height: 303,
        fit: "cover",
        position: "top",
      },
      description:
        "Award-winning carbon management platform that tracks environmental impact, visualizes sustainability data, and uses Gemini to generate personalized reduction strategies.",
      tech: ["React", "TypeScript", "Express", "MongoDB", "Gemini", "Python ML"],
      links: [
        { label: "GitHub", href: "https://github.com/Param-10/CarbonCTRL", kind: "github" },
        { label: "Devpost", href: "https://devpost.com/software/carbonctrl", kind: "external" },
      ],
      recognition: "Winner — MLH Best Use of Gemini API · HackaBull 2025",
      caseStudy: {
        problem:
          "Organizations need a clearer way to connect emissions inputs with understandable impact data and practical reduction steps.",
        contribution:
          "Built the product experience and full-stack workflows for emissions calculations, authenticated dashboards, stored user data, and Gemini-generated reduction plans.",
        architecture: [
          "React + TypeScript dashboard",
          "Node.js and Express API",
          "MongoDB persistence",
          "Gemini recommendation workflows",
          "Python ML services",
        ],
        challenge:
          "Evolving the original hackathon prototype into a clearer service architecture and migrating persistence from Supabase to MongoDB without losing the core user workflow.",
        result:
          "Won the MLH Best Use of Gemini API award at HackaBull 2025, which had 63 submitted projects.",
      },
    },
    {
      number: "05",
      title: "Coefficient Software Systems",
      category: "CLIENT WORK · PRODUCTION",
      image: {
        src: withBase("/projects/coefficient.png"),
        optimizedSrc: withBase("/projects/coefficient.webp"),
        alt: "Coefficient Software Systems homepage with product navigation and a software services hero",
        width: 2918,
        height: 1758,
        fit: "cover",
        position: "top",
      },
      description:
        "Rebuilt and shipped Coefficient Software Systems’ production corporate website, organizing products, services, industry verticals, careers, company information, and contact flows into one consistent experience.",
      tech: ["Astro", "TypeScript", "Tailwind CSS", "GSAP", "Lenis"],
      links: [
        { label: "Live site", href: "https://coefficientindia.com/", kind: "external" },
        { label: "Source", href: "https://github.com/Param-10/bluewave-revamp", kind: "github" },
      ],
    },
  ] satisfies Project[],
  otherProjects: [
    {
      number: "A",
      title: "MatchUp",
      category: "PRODUCT DESIGN · UX",
      image: {
        src: withBase("/projects/matchup.png"),
        optimizedSrc: withBase("/projects/matchup.webp"),
        alt: "MatchUp mobile prototype screens for discovering and organizing campus sports games",
        width: 482,
        height: 1024,
        fit: "contain",
        position: "center",
      },
      description:
        "Designed a product prototype that helps university students discover, host, and coordinate casual pickup sports games on campus.",
      tech: ["Figma", "UX Research", "Prototyping", "User Flows"],
      links: [
        {
          label: "Prototype",
          href: "https://www.figma.com/proto/Emt4q3haUbMuuTtaN8NkY7/MatchUp---Final?node-id=17-228&t=bCCFSTP2wl0lS168-1",
          kind: "external",
        },
      ],
    },
    {
      number: "B",
      title: "Focus Timer PRO",
      category: "CHROME EXTENSION",
      image: {
        src: withBase("/projects/focus_timer.png"),
        optimizedSrc: withBase("/projects/focus-timer.webp"),
        alt: "Focus Timer PRO extension interface with a Pomodoro timer and mindful break prompt",
        width: 632,
        height: 948,
        fit: "contain",
        position: "center",
      },
      description:
        "Built a privacy-first focus extension with customizable Pomodoro cycles, mindful recovery prompts, and local-only settings.",
      tech: ["JavaScript", "Chrome Extension", "Manifest V3"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Param-10/Focus-Timer-Extension",
          kind: "github",
        },
        {
          label: "Chrome Web Store",
          href: "https://chromewebstore.google.com/detail/focus-timer-pro/bbmnnmmfgdefdhipfjiefioodbfhohde",
          kind: "external",
        },
      ],
    },
    {
      number: "C",
      title: "LawyerUP",
      category: "REBUILT 2026 · MULTI-AGENT",
      image: {
        src: withBase("/projects/lawyerup.png"),
        optimizedSrc: withBase("/projects/lawyerup.webp"),
        alt: "LawyerUP legal intake workspace with case summary and attorney matching panels",
        width: 1024,
        height: 616,
        fit: "cover",
        position: "top",
      },
      description:
        "Rebuilt the original lawyer recommendation app as a multi-agent legal intake workspace for structured summaries, triage signals, evidence checklists, and attorney matching.",
      tech: ["Python", "Flask", "Gemini", "SQLite", "Multi-Agent"],
      links: [
        { label: "GitHub", href: "https://github.com/Param-10/knight-hacks", kind: "github" },
      ],
    },
    {
      number: "D",
      title: "BullRunner",
      category: "REAL-TIME DATA · WEB APP",
      image: {
        src: withBase("/projects/bullrunner.png"),
        optimizedSrc: withBase("/projects/bullrunner.webp"),
        alt: "BullRunner map showing live USF bus positions, stops, and route overlays",
        width: 1024,
        height: 616,
        fit: "cover",
        position: "top",
      },
      description:
        "Built a map-first transit application showing live USF bus locations, route overlays, searchable stops, service information, and estimated arrivals using Passio transit data.",
      tech: ["JavaScript", "Mapbox GL JS", "Passio API", "HTML", "CSS"],
      links: [
        { label: "GitHub", href: "https://github.com/Param-10/bullrunner-2", kind: "github" },
        { label: "Live demo", href: "https://param-10.github.io/bullrunner-2/", kind: "external" },
      ],
    },
    {
      number: "E",
      title: "Fraud Detection Dashboard",
      category: "MACHINE LEARNING · DASHBOARD",
      image: {
        src: withBase("/projects/fraud-detection-github.png"),
        optimizedSrc: withBase("/projects/fraud-detection-github.webp"),
        alt: "GitHub repository preview for the Fraud Detection Dashboard project",
        width: 1200,
        height: 600,
        fit: "contain",
        position: "center",
      },
      description:
        "Built an interactive fraud-analysis dashboard for uploading transaction CSVs, visualizing risk distributions, and exploring model predictions alongside a Python and Dash machine-learning workflow.",
      tech: ["JavaScript", "Chart.js", "Python", "Dash", "Scikit-learn", "Pandas"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Param-10/Fraud-Detection-Dashboard",
          kind: "github",
        },
        {
          label: "Live demo",
          href: "https://fraud-detector-dashboard.netlify.app/",
          kind: "external",
        },
      ],
    },
  ] satisfies Project[],
  experience: [
    {
      role: "Student Assistant — Digital Initiatives",
      company: "University of South Florida Libraries",
      period: "Aug 2024 – May 2026",
      logo: { src: withBase("/logos/usf-libraries.jpg"), fallback: "U" },
      bullets: [
        "Built scraping and validation tooling to cross-check spreadsheet metadata against USF Digital Commons assets, reducing manual review time by approximately 70%.",
        "Standardized and validated metadata for 1,000+ digital collection records while supporting large-scale collection inventory and data operations.",
      ],
      websiteUrl: "https://lib.usf.edu/",
      linkedinUrl: "https://www.linkedin.com/company/university-of-south-florida-libraries/",
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "Finds, Inc.",
      period: "Oct 2025 – Jan 2026",
      logo: { src: withBase("/logos/finds-ai.svg"), fallback: "F" },
      bullets: [
        "Integrated in-house ML models into backend services, building reliable inference workflows for internal image-processing pipelines.",
        "Designed PostgreSQL schemas, metadata pipelines, and validation checks to improve consistency across image data and model workflows.",
      ],
      websiteUrl: "https://thefinds.ai/",
      linkedinUrl: "https://www.linkedin.com/company/finds-ai/",
    },
    {
      role: "Undergraduate Research Assistant",
      company: "RARE Lab, University of South Florida",
      period: "Feb 2025 – Jul 2025",
      logo: { src: withBase("/logos/rare-lab.png"), fallback: "R" },
      bullets: [
        "Contributed to human-robot interaction research on protective indicators designed to mitigate robot abuse, collecting, validating, and analyzing experimental data.",
        "Built an Android research application integrating Gemini and Google Cloud to support structured AI-assisted recipe recommendation study workflows.",
      ],
      websiteUrl: "https://therarelab.com/people/paramveer-singh-bhele/",
      linkedinUrl: "https://www.linkedin.com/company/therarelab/",
    },
    {
      role: "Peer Mentor",
      company: "USF College of Engineering",
      period: "Apr 2023 – Aug 2024",
      logo: { src: withBase("/logos/usf.svg"), fallback: "U" },
      bullets: [
        "Mentored 25+ engineering students through weekly calculus and problem-solving sessions, creating practice exercises and facilitating collaborative learning.",
      ],
      websiteUrl: "https://www.usf.edu/engineering/",
      linkedinUrl: "https://www.linkedin.com/company/usf-college-of-engineering/",
    },
    {
      role: "App Developer Intern",
      company: "Coefficient Software Systems",
      period: "May 2022 – Jul 2022",
      logo: { src: withBase("/logos/coefficient.png"), fallback: "C" },
      bullets: [
        "Built product benchmarking datasets covering 500+ universities across U.S., U.K., and Australian markets to support product and market research.",
        "Improved usability of a consumer application with 100,000+ downloads by refining interface flows and supporting production updates.",
      ],
      websiteUrl: "https://coefficientindia.com/",
      linkedinUrl: "https://www.linkedin.com/company/coefficient-software-systems-private-limited/",
    },
  ] satisfies Experience[],
  education: [
    {
      school: "Columbia University",
      degree: "M.S. in Artificial Intelligence",
      detail: "Focus: AI Infrastructure",
      period: "2026 – 2027",
      location: "New York, NY",
      logo: { src: withBase("/logos/columbia.svg"), fallback: "C" },
    },
    {
      school: "University of South Florida",
      degree: "B.S. in Computer Science",
      detail: "Minor: Entrepreneurship",
      period: "2022 – 2026",
      location: "Tampa, FL",
      logo: { src: withBase("/logos/usf.svg"), fallback: "U" },
    },
  ] satisfies Education[],
  recognition: [
    {
      organization: "HealthHacks 2025",
      title: "Hackathon Judge",
      period: "Oct 2025",
      type: "Recognition",
    },
    {
      organization: "HackaBull 2025",
      title: "Winner — MLH Best Use of Gemini API",
      period: "2025",
      type: "Recognition",
    },
    { organization: "TEDx at USF", title: "Head of Logistics", period: "Jun 2024 – Jan 2025", type: "Leadership" },
    {
      organization: "Students of India Association at USF",
      title: "Vice President",
      period: "Jan 2024 – May 2024",
      type: "Leadership",
    },
    {
      organization: "Society of Hispanic Professional Engineers at USF",
      title: "Database Director",
      period: "Jan 2024 – May 2024",
      type: "Leadership",
    },
    {
      organization: "Goldman Sachs",
      title: "Virtual Insight Series",
      period: "May 2024 – Jun 2024",
      type: "Program",
    },
  ] satisfies Recognition[],
  academicRecognition: [
    {
      name: "USF Green & Gold Directors Waiver",
      issuer: "University of South Florida",
      amount: "Up to $36,000 · $9,000/year",
    },
    {
      name: "Annette L. Raymund Endowed Scholarship Fund Recipient",
      issuer: "University of South Florida",
      period: "Aug 2023",
    },
    {
      name: "Computer Science and Engineering Fund Recipient",
      issuer: "USF College of Engineering",
      period: "Jul 2025",
    },
    {
      name: "USF Fund for the College of Engineering Recipient",
      issuer: "USF College of Engineering",
      period: "Jul 2025",
    },
  ] satisfies AcademicRecognition[],
  skills: [
    {
      title: "Languages & Frontend",
      icon: Code2,
      skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "React", "Next.js"],
    },
    {
      title: "Backend & Data",
      icon: Database,
      skills: ["FastAPI", "Flask", "Node.js", "REST APIs", "PostgreSQL", "MongoDB", "SQL"],
    },
    {
      title: "AI / ML",
      icon: Bot,
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "BERT", "LoRA", "LLM APIs"],
    },
    {
      title: "Infrastructure & Cloud",
      icon: Cloud,
      skills: ["AWS", "Docker", "Git", "GitHub", "Vercel", "Render", "CI/CD"],
    },
  ] satisfies SkillGroup[],
  contactLinks: [
    { label: "Email me", href: "mailto:bheleparamveer@gmail.com", icon: Mail },
    { label: "GitHub", href: "https://github.com/Param-10", icon: Github },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/paramveer-singh-bhele/",
      icon: Linkedin,
    },
    { label: "Resume", href: withBase("/resume.pdf"), icon: FileText },
  ] satisfies ContactLink[],
  dockExternalLinks: [
    { label: "Resume", href: withBase("/resume.pdf"), icon: FileText },
    { label: "GitHub", href: "https://github.com/Param-10", icon: Github },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/paramveer-singh-bhele/",
      icon: Linkedin,
    },
    { label: "Email", href: "mailto:bheleparamveer@gmail.com", icon: Mail },
  ] satisfies ContactLink[],
  contactBody:
    "I’m interested in software engineering, AI/ML engineering, AI infrastructure, research, and product-focused opportunities.",
  footerStack: "React, TypeScript, Tailwind CSS, and Framer Motion",
  recognitionIcon: Award,
};
