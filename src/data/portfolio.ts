import type { ComponentType } from "react";
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
} from "lucide-react";

export type IconComponent = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;

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
  logo: LogoMeta;
};

export type SkillGroup = {
  title: string;
  icon: IconComponent;
  skills: string[];
};

export const portfolio = {
  name: "Paramveer Singh Bhele",
  title: "Software Engineer & AI/ML Engineer building practical intelligent systems.",
  subheadline:
    "CS graduate from the University of South Florida and incoming Columbia MS AI student with an AI Infrastructure concentration, building across software engineering, applied ML, robotics interfaces, and full-stack products.",
  currentFocus: "software engineer · AI/ML engineer · product builder",
  portrait: "/paramveer-portrait.jpg",
  resume: "/resume.pdf",
  email: "bheleparamveer@gmail.com",
  links: {
    github: "https://github.com/Param-10",
    linkedin: "https://www.linkedin.com/in/paramveer-singh-bhele/",
    portfolio: "https://paramveerbhele.com",
  },
  navItems: [
    { icon: Home, label: "Home", href: "#home", section: "home", mobile: true },
    { icon: Briefcase, label: "Work", href: "#work", section: "work", mobile: true },
    { icon: Layers, label: "Experience", href: "#experience", section: "experience", mobile: true },
    { icon: Code2, label: "Skills", href: "#skills", section: "skills", mobile: false },
    { icon: Mail, label: "Contact", href: "#contact", section: "contact", mobile: true },
  ] satisfies NavItem[],
  metadataChips: [
    "Software Engineer",
    "AI/ML Engineer",
    "Columbia MS AI",
    "USF Computer Science",
    "ML Engineer Intern",
    "HRI Research",
    "Hackathon Winner",
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
      title: "Robotics Research",
      description:
        "Human-robot interaction research and robot app development using Misty, Pepper, Gemini AI, Android, and Google Cloud SDK.",
      tech: ["Android", "Gemini AI", "Google Cloud SDK", "Python", "HRI"],
      outcome:
        "Contributed to HRI 2026 research and built AI-assisted robot workflows.",
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
      role: "Machine Learning Engineer Intern",
      company: "Finds, Inc.",
      period: "Oct 2025 to Jan 2026",
      logo: { src: "/logos/finds.svg", fallback: "F" },
      bullets: [
        "Integrated in-house ML models into backend services for reliable internal inference workflows.",
        "Designed PostgreSQL schemas, metadata pipelines, and validation checks for image data.",
      ],
    },
    {
      role: "Undergraduate Research Assistant",
      company: "RARE Lab, University of South Florida",
      period: "Feb 2025 to Jul 2025",
      logo: { src: "/logos/rare-lab.svg", fallback: "R" },
      bullets: [
        "Supported HRI 2026 research by collecting, validating, and analyzing human-robot interaction experiment data.",
        "Built an Android robot app integrating Gemini AI, Google Cloud SDK, and structured robot workflows.",
      ],
    },
    {
      role: "Student Assistant - Collections and Discovery",
      company: "USF Libraries",
      period: "Aug 2024 to Present",
      logo: { src: "/logos/usf-libraries.svg", fallback: "U" },
      bullets: [
        "Built web-scraping and validation tools to cross-check Excel records with USF Digital Commons images, reducing manual review time by 70%.",
        "Improved cataloging accuracy by standardizing metadata for 1,000+ digital collection items.",
      ],
    },
    {
      role: "App Developer Intern",
      company: "Coefficient Software Systems",
      period: "May 2022 to Jul 2022",
      logo: { src: "/logos/coefficient.svg", fallback: "C" },
      bullets: [
        "Built product benchmarking datasets by profiling 500+ universities across US, UK, and Australian markets.",
        "Improved app usability for 100,000+ downloads by refining UI flows and supporting production updates.",
      ],
    },
  ] satisfies Experience[],
  education: [
    {
      school: "Columbia University",
      degree: "MS in Artificial Intelligence",
      detail: "Concentration: AI Infrastructure",
      period: "Start: Aug 2026",
      logo: { src: "/logos/columbia.svg", fallback: "C" },
    },
    {
      school: "University of South Florida",
      degree: "B.S. in Computer Science",
      detail: "Minor: Entrepreneurship",
      period: "Aug 2022 - May 2026",
      logo: { src: "/logos/usf.svg", fallback: "U" },
    },
  ] satisfies Education[],
  skills: [
    {
      title: "Software Engineering",
      icon: Code2,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "C++", "Java", "C#", "OOP", "API Design"],
    },
    {
      title: "AI / ML",
      icon: Bot,
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "BERT", "Qwen", "LoRA", "Gemini API"],
    },
    {
      title: "Backend & Data",
      icon: Database,
      skills: ["FastAPI", "Flask", "Node.js", "Express", "PostgreSQL", "MongoDB", "SQL", "REST APIs"],
    },
    {
      title: "Cloud & Dev Tools",
      icon: Cloud,
      skills: ["Docker", "AWS", "Git", "GitHub", "Vercel", "Render", "Jupyter", "Jira"],
    },
    {
      title: "Research & Interfaces",
      icon: GraduationCap,
      skills: ["Android Studio", "Google Cloud SDK", "HRI", "Misty", "Pepper", "WebSocket", "OpenCV"],
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
    { label: "Resume", href: "/resume.pdf", icon: FileText },
  ] satisfies ContactLink[],
  dockExternalLinks: [
    { label: "Resume", href: "/resume.pdf", icon: FileText },
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
  footerLine: "Software Engineering · AI/ML · Research Systems",
};
