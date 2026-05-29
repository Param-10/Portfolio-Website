import type { ComponentType } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiAmazonwebservices,
  SiC,
  SiCplusplus,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiHuggingface,
  SiJavascript,
  SiJira,
  SiJupyter,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRender,
  SiScikitlearn,
  SiTensorflow,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import {
  BookOpen,
  Bot,
  Briefcase,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Home,
  Layers,
  Linkedin,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";

export type IconComponent = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
export type SkillIconComponent = ComponentType<{ size?: number; className?: string }>;

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
  label: "GitHub" | "Demo" | "Research";
  href?: string;
  icon: IconComponent;
};

export type Project = {
  number: string;
  title: string;
  description: string;
  tech: string[];
  outcome: string;
  links: ProjectLink[];
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
};

export type Education = {
  school: string;
  degree: string;
  detail: string;
  period: string;
  location: string;
  logo: LogoMeta;
};

export type SkillGroup = {
  title: string;
  icon: IconComponent;
  skills: {
    name: string;
    icon: SkillIconComponent;
    color: string;
  }[];
};

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const portfolio = {
  name: "Paramveer Singh Bhele",
  title: "Software Engineer & AI/ML Engineer building practical intelligent systems.",
  subheadline:
    "CS graduate from the University of South Florida and incoming Columbia M.S. AI student with an AI Infrastructure concentration, building across software engineering, applied ML, backend/API systems, and full-stack products.",
  portrait: withBase("/paramveer-portrait.jpg"),
  resume: withBase("/resume.pdf"),
  email: "bheleparamveer@gmail.com",
  links: {
    github: "https://github.com/Param-10",
    linkedin: "https://www.linkedin.com/in/paramveer-singh-bhele/",
    portfolio: "https://paramveerbhele.com",
  },
  navItems: [
    { icon: Home, label: "Home", href: "#home", section: "home", mobile: true },
    { icon: User, label: "About", href: "#about", section: "about", mobile: true },
    { icon: Briefcase, label: "Experience", href: "#experience", section: "experience", mobile: true },
    { icon: GraduationCap, label: "Education", href: "#education", section: "education", mobile: true },
    { icon: Layers, label: "Projects", href: "#projects", section: "projects", mobile: true },
    { icon: Code2, label: "Skills", href: "#skills", section: "skills", mobile: true },
    { icon: MessageSquare, label: "Contact", href: "#contact", section: "contact", mobile: true },
  ] satisfies NavItem[],
  metadataChips: [
    "Software Engineer",
    "AI/ML Engineer",
    "Backend/API Systems",
    "Columbia M.S. AI",
    "USF Computer Science",
    "HackaBull Winner",
  ],
  projects: [
    {
      number: "01",
      title: "Polaris",
      description:
        "Gemini-powered GitHub App that scans infrastructure-as-code pull requests and posts security findings fast.",
      tech: ["FastAPI", "Next.js", "PostgreSQL", "GitHub App", "Gemini API"],
      outcome:
        "Maps risks to CIS/SOC 2 controls and verifies generated fixes before developer approval.",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Param-10/hackthebay",
          icon: Github,
        },
        {
          label: "Demo",
          href: "https://polaris-livid-one.vercel.app/",
          icon: ExternalLink,
        },
      ],
    },
    {
      number: "02",
      title: "Adversarial Spam Detection",
      description:
        "Adversarial ML pipeline alternating BERT classifier tuning with Qwen3-4B spam generation.",
      tech: ["Python", "PyTorch", "BERT", "Qwen3-4B", "LoRA", "Transformers"],
      outcome:
        "Improved spam detection from 91.7% to 95.7% while maintaining 96.5% accuracy.",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Param-10/adversarial-spam-detection",
          icon: Github,
        },
      ],
    },
    {
      number: "03",
      title: "CarbonCTRL",
      description:
        "AI-powered emissions platform that estimates company CO2 impact and generates reduction plans.",
      tech: ["React", "Node.js", "MongoDB", "Gemini API"],
      outcome:
        "Ranked 1st of 70+ projects at HackaBull 2025 for Best Use of Gemini API.",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Param-10/CarbonCTRL",
          icon: Github,
        },
        {
          label: "Demo",
          href: "https://carbonctrl.us",
          icon: ExternalLink,
        },
      ],
    },
    {
      number: "04",
      title: "RARE Lab Research",
      description:
        "Research systems and Android app development for a USF human-robot interaction study using Gemini AI, Google Cloud SDK, Python, and structured experiment workflows.",
      tech: ["Android", "Gemini AI", "Google Cloud SDK", "Python", "Research Systems"],
      outcome:
        "Supported data validation, analysis, and AI-assisted study workflows for an active research project.",
      links: [
        {
          label: "Research",
          icon: BookOpen,
        },
      ],
    },
  ] satisfies Project[],
  experience: [
    {
      role: "Student Assistant - Digital Initiatives",
      company: "USF Libraries",
      period: "Aug 2024 to May 2026",
      logo: { src: withBase("/logos/usf-libraries.jpg"), fallback: "U" },
      bullets: [
        "Built web-scraping and validation tools to cross-check Excel records with USF Digital Commons images, reducing manual review time by 70%.",
        "Improved cataloging accuracy by standardizing metadata for 1,000+ digital collection items.",
      ],
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "Finds, Inc.",
      period: "Oct 2025 to Jan 2026",
      logo: { src: withBase("/logos/finds-ai.svg"), fallback: "F" },
      bullets: [
        "Integrated in-house ML models into backend services for reliable internal inference workflows.",
        "Designed PostgreSQL schemas, metadata pipelines, and validation checks for image data.",
      ],
    },
    {
      role: "Undergraduate Research Assistant",
      company: "RARE Lab, University of South Florida",
      period: "Feb 2025 to Jul 2025",
      logo: { src: withBase("/logos/rare-lab.png"), fallback: "R" },
      bullets: [
        "Collected, validated, and analyzed experiment data for an ongoing human-robot interaction research study.",
        "Built an Android research app integrating Gemini AI, Google Cloud SDK, and structured study workflows.",
      ],
    },
    {
      role: "App Developer Intern",
      company: "Coefficient Software Systems",
      period: "May 2022 to Jul 2022",
      logo: { src: withBase("/logos/coefficient.png"), fallback: "C" },
      bullets: [
        "Built product benchmarking datasets by profiling 500+ universities across US, UK, and Australian markets.",
        "Improved app usability for 100,000+ downloads by refining UI flows and supporting production updates.",
      ],
    },
  ] satisfies Experience[],
  education: [
    {
      school: "Columbia University",
      degree: "M.S. in Artificial Intelligence",
      detail: "Concentration: AI Infrastructure",
      period: "Sep 2026 - Dec 2027",
      location: "New York City, NY",
      logo: { src: withBase("/logos/columbia.svg"), fallback: "C" },
    },
    {
      school: "University of South Florida",
      degree: "B.S. in Computer Science",
      detail: "Minor: Entrepreneurship",
      period: "Aug 2022 - May 2026",
      location: "Tampa, FL",
      logo: { src: withBase("/logos/usf.svg"), fallback: "U" },
    },
  ] satisfies Education[],
  skills: [
    {
      title: "Software Engineering",
      icon: Code2,
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "C", icon: SiC, color: "#A8B9CC" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "Java", icon: FaJava, color: "#E76F00" },
        { name: "C#", icon: TbBrandCSharp, color: "#68217A" },
        { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      ],
    },
    {
      title: "AI / ML",
      icon: Bot,
      skills: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
        { name: "Transformers", icon: SiHuggingface, color: "#FFD21E" },
        { name: "BERT", icon: SiHuggingface, color: "#FFD21E" },
        { name: "Qwen", icon: SiHuggingface, color: "#624AFF" },
        { name: "LoRA", icon: SiHuggingface, color: "#FF9D00" },
      ],
    },
    {
      title: "Backend & Data",
      icon: Database,
      skills: [
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "Flask", icon: SiFlask, color: "#000000" },
        { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "SQL", icon: Database, color: "#336791" },
        { name: "REST APIs", icon: Code2, color: "#0EA5E9" },
      ],
    },
    {
      title: "Cloud & Dev Tools",
      icon: Cloud,
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#181717" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Render", icon: SiRender, color: "#46E3B7" },
        { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
        { name: "Jira", icon: SiJira, color: "#0052CC" },
      ],
    },
  ] satisfies SkillGroup[],
  contactLinks: [
    { label: "Email", href: "mailto:bheleparamveer@gmail.com", icon: Mail },
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
    "Open to software engineering, AI/ML engineering, research collaborations, and product-focused roles where practical systems matter.",
};
