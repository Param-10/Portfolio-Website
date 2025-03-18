export interface Project {
  title: string;
  description: string;
  link: string;
  demoLink: string;
  details?: string[];
  timeline?: string;
  skills?: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface TechnicalSkills {
  languages: string[];
  frameworks: string[];
  tools: string[];
  courses: string[];
}

export const portfolioData = {
  name: "Paramveer Singh Bhele",
  title: "Aspiring Software Engineer",
  image: "https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=300&h=300&fit=crop",
  about: "Passionate developer with expertise in Machine Learning, Artificial Intelligence, Software Engineering, ",
  experience: [
    {
    }
  ] as Experience[],
  education: "B.S. in Computer Science @ University of South Florida",
  skills: ["React", "TypeScript", "Node.js", "AWS", "Python", "Docker"],
  projects: [
    {
      title: "Portfolio-Website",
      timeline: "Feb 2025",
      description: "Personal Portfolio Website by Me",
      link: "https://github.com/Param-10/Portfolio-Website",
      demoLink: "https://paramveerbhele.com/",
      details: [
        "Engineered a responsive portfolio website using React, TypeScript, and Tailwind CSS to showcase personal projects and skills.",
        "Designed and built a dynamic user interface, emphasizing clean code and maintainability."
      ],
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "JavaScript",
        "HTML",
        "CSS",
        "Responsive Design",
        "UI Development"
      ]
    },

    {
      title: "BullRunner Web Application",
      timeline: "Jul 2024 - Aug 2024",
      description: "Real-time bus tracking system for university transportation",
      link: "https://github.com/Param-10/bullrunner-2",
      demoLink: "https://param-10.github.io/bullrunner-2/",
      details: [
        "Developed real-time bus tracking application for university students with live location updates",
        "Integrated Mapbox API and PassioGo API for interactive maps and accurate tracking",
        "Implemented campus route visualization and schedule optimization features"
      ],
      skills: [
        "Mapbox",
        "JavaScript",
        "API Integration",
        "jQuery",
        "Git",
        "JSON",
        "CSS",
        "HTML5"
      ]
    },
    {
      title: "Focus Timer Extension",
      timeline: "Jul 2024",
      description: "Chrome extension for managing focus/break sessions with customizable timers.",
      link: "https://github.com/Param-10/Focus-Timer-Extension",
      demoLink: "https://chromewebstore.google.com/detail/focus-timer-pro/bbmnnmmfgdefdhipfjiefioodbfhohde",
      details: [
        "Developed Chrome extension with customizable focus/break timers and sound alerts",
        "Implemented timer controls (start/pause/reset) with user-defined durations",
        "Integrated Chrome extension APIs for background scripts and notifications",
        "Added error handling for reliable performance across browsing sessions"
      ],
      skills: [
        "Chrome Extensions",
        "JavaScript",
        "HTML5",
        "CSS",
        "Chrome DevTools",
        "Web APIs"
      ]
    },
    {
      title: "Fraud Detection Dashboard",
      timeline: "Jun 2024",
      description: "Machine learning-powered dashboard for detecting fraudulent transactions.",
      link: "https://github.com/Param-10/Fraud-Detection-Dashboard",
      demoLink: "#",
      details: [
        "Developed a comprehensive dashboard using machine learning to identify fraudulent transactions with high accuracy.",
        "Implemented a Logistic Regression model achieving over 89% accuracy on training and test datasets.",
        "Conducted data preprocessing (scaling, feature selection, missing value handling) for optimal model performance.",
        "Created interactive visualizations (ROC curves, confusion matrices, heatmaps) for actionable insights."
      ],
      skills: [
        "Machine Learning",
        "Flask",
        "Pandas",
        "Python",
        "Data Visualization",
        "Feature Engineering",
        "Logistic Regression",
        "NumPy",
        "Scikit-Learn",
        "DASH"
      ]
    },
    {
      title: "LawyerUp - KnightHacks UCF",
      timeline: "Oct 2023",
      description: "Group project merging legal technology with AI-driven insights.",
      link: "https://github.com/Param-10/knight-hacks",
      demoLink: "#",
      details: [
        "Collaborated on a Flask-based chatbot leveraging OpenAI GPT-3.5-turbo.",
        "Engineered dynamic recommendations from user-specified case types.",
        "Delivered detailed lawyer profiles including contacts and expertise."
      ],
      skills: [
        "API Testing",
        "JSON",
        "JavaScript",
        "Flask",
        "Cascading Style Sheets (CSS)",
        "Python",
        "Artificial Intelligence (AI)"
      ]
    },
    {
      title: "Object Avoiding Vehicle",
      timeline: "Aug 2022 - Dec 2022",
      description: "Autonomous obstacle avoidance system for a miniature tank.",
      link: "https://github.com/Param-10/egn-3000L",
      demoLink: "#",
      details: [
        "Led development of an obstacle avoidance system as Software Lead.",
        "Integrated Arduino sensors for real-time data processing.",
        "Implemented adaptive path planning algorithms for dynamic navigation."
      ],
      skills: [
        "Arduino",
        "C++",
        "Sensor Integration",
        "Real-time Systems",
        "Path Planning"
      ]
    }
  ] as (Project & { details?: string[]; timeline?: string; skills?: string[] })[],
  technicalSkills: {
    languages: [
      'Python (NumPy, Pandas, Matplotlib, PyTorch)',
      'JavaScript/TypeScript',
      'C/C++',
      'HTML5/CSS3',
      'SQL/MySQL',
      'Java'
    ],
    frameworks: [
      'React',
      'Node.js',
      'Flask',
      'Mapbox GL JS',
      'OpenCV'
    ],
    tools: [
      'VS Code',
      'Git/GitHub',
      'PyCharm',
      'Jupyter Notebook',
      'Android Studio',
      'Xcode',
      'MySQL Workbench',
      'Choregraphe'
    ],
    courses: [
      'Data Structures & Algorithms',
      'Computer Logic & Design',
      'Discrete Structures',
      'Linear Systems',
      'Automata Theory',
      'Program Design',
      'Analysis of Algorithms',
      'Secure Coding'
    ]
  }
};
