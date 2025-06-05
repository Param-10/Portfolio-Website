export interface Project {
  title: string;
  description: string;
  link: string;
  demoLink: string;
  devpostLink?: string;
  details?: string[];
  timeline?: string;
  skills?: string[];
  featured?: boolean;
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
  machineLearning: string[];
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
      title: "Stock Analysis Tool",
      timeline: "Jan 2025 - May 2025",
      description: "Dynamic stock analysis application with real-time price wave detection and Fibonacci level visualization.",
      link: "#",
      demoLink: "#",
      featured: true,
      details: [
        "Built dynamic stock analysis UI to detect price waves and draw live Fibonacci levels with real-time confirmations",
        "Enabled wave simulation via drag, animation, and control buttons, with instant validation and feedback",
        "Validated 1,000+ candles using peak/valley detection, Fibonacci math, and visual confirmation markers"
      ],
      skills: [
        "C#",
        "WinForms",
        ".NET",
        "Charting",
        "Algorithmic Validation",
        "LINQ",
        "OOP",
        "UI Development",
        "Real-time Systems"
      ]
    },

    {
      title: "CarbonCTRL (Hackathon Winner)",
      timeline: "Apr 2025",
      description: "Award-winning carbon management platform that quantifies emissions and provides AI-driven reduction strategies.",
      link: "https://github.com/Param-10/CarbonCTRL",
      demoLink: "https://carbonctrl.us",
      devpostLink: "https://devpost.com/software/carbonctrl",
      featured: true,
      details: [
        "Built an end-to-end platform that quantifies emissions and surfaces AI-driven cut/offset plans in real time",
        "Integrated React/Next.js front-end with Gemini AI, for dynamic dashboards, authentication, and personalized insights",
        "Ranked 1st of 70+ projects at HackaBull 2025 for Best Use of Gemini API Track"
      ],
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Supabase",
        "Gemini AI",
        "TensorFlow",
        "Tailwind CSS",
        "Full Stack Development",
        "API Integration"
      ]
    },

    {
      title: "Face Detection App",
      timeline: "Mar 2025",
      description: "Python-based face detection application with Flask and OpenCV, featuring online deployment and enhanced local analysis.",
      link: "https://github.com/Param-10/FaceDetection_App",
      demoLink: "https://facedetection-webapp-go5s.onrender.com",
      featured: true,
      details: [
        "Developed face detection application using Flask and OpenCV Haar Cascade, achieving real-time processing for 500KB+ images",
        "Deployed memory-optimized web app on Render platform with webcam integration, supporting both upload and live detection features", 
        "Enhanced local version with DeepFace integration for emotion, age, and gender analysis using TensorFlow and PyTorch models"
      ],
      skills: [
        "Python",
        "Flask",
        "OpenCV",
        "DeepFace",
        "TensorFlow",
        "PyTorch",
        "NumPy",
        "HTML5",
        "CSS",
        "JavaScript",
        "Render Deployment"
      ]
    },

    {
      title: "Portfolio-Website",
      timeline: "Feb 2025",
      description: "Personal Portfolio Website by Me",
      link: "https://github.com/Param-10/Portfolio-Website",
      demoLink: "https://paramveerbhele.com/",
      featured: true,
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
      featured: true,
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
      featured: true,
      details: [
        "Achieved 89% accuracy on card-fraud data with Logistic Regression, lifting performance 15% via scaling",
        "Reduced false-positive alerts by 12% through class-weight tuning and threshold calibration",
        "Delivered Flask/Dash app that plots ROC, confusion, heatmaps, speeding analyst review cycles by 2 times"
      ],
      skills: [
        "NumPy",
        "Scikit-learn",
        "Machine Learning",
        "Flask",
        "Logistic Regression",
        "DASH",
        "Python",
        "Data Visualization",
        "Feature Engineering",
        "Pandas"
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
  ] as (Project & { details?: string[]; timeline?: string; skills?: string[]; featured?: boolean })[],
  technicalSkills: {
    languages: [
      'Python',
      'C++',
      'C',
      'C#',
      'Java',
      'TypeScript',
      'JavaScript',
      'SQL'
    ],
    frameworks: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express',
      '.NET',
      'Flask',
      'Supabase',
      'Gemini API',
      'OpenAI API',
      'REST APIs'
    ],
    tools: [
      'AWS Cloud',
      'Docker',
      'GitHub',
      'VS Code',
      'Jupyter',
      'MySQL',
      'Excel',
      'Android Studio',
      'Xcode',
      'Microsoft 365'
    ],
    machineLearning: [
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'TensorFlow',
      'PyTorch',
      'OpenCV',
      'Matplotlib',
      'DeepFace'
    ]
  }
};
