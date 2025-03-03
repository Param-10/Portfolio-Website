import { useState, useEffect, useMemo, useCallback } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import profileImage from './assets/My_Image.jpg';

interface Project {
  title: string;
  description: string;
  link: string;
  demoLink: string;
  details?: string[];
  timeline?: string;
  skills?: string[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

function App() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [typingText, setTypingText] = useState('');
  const messages = useMemo(() => [
    'Initializing system...',
    'Accessing mainframe...',
    'Decrypting data...',
    'Access granted...'
  ], []);

  const typeWriter = useCallback(async (messages: string[]) => {
    for (const message of messages) {
      setIsAnimating(true);
      for (let i = 0; i < message.length; i++) {
        setTypingText(prev => prev + message[i]);
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      await new Promise(resolve => setTimeout(resolve, 800));
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !isAnimating) {
        setIsAnimating(true);
        typeWriter(messages).then(() => {
          setTimeout(() => {
            setIsAnimating(false);
          }, 1000);
        });
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [isAnimating, typeWriter, messages]);

  const portfolioData = {
    name: "Paramveer Singh Bhele",
    title: "Aspiring Software Developer",
    image: "https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=300&h=300&fit=crop",
    about: "Passionate developer with expertise in React, Node.js, and cloud technologies.",
    experience: [
      { 
        title: "Senior Developer", 
        company: "Tech Corp", 
        period: "2020-Present",
        description: "Led development of key features and mentored junior developers."
      },
      { 
        title: "Full Stack Developer", 
        company: "StartupX", 
        period: "2018-2020",
        description: "Built and maintained multiple web applications."
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

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="fixed inset-0" style={{ zIndex: 0 }}>
        <ParticleBackground />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black/80 via-purple-950/50 to-black/80 z-20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text text-xl font-bold">Paramveer</h1>
            <button
              className="md:hidden text-purple-400 p-2 rounded-lg hover:bg-purple-900/50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="hidden md:flex space-x-4">
              <a href="#about" className="text-purple-400 hover:text-purple-300 px-3 py-2">About</a>
              <a href="#experience" className="text-purple-400 hover:text-purple-300 px-3 py-2">Experience</a>
              <a href="#leadership" className="text-purple-400 hover:text-purple-300 px-3 py-2">Leadership</a>
              <a href="#projects" className="text-purple-400 hover:text-purple-300 px-3 py-2">Projects</a>
              <a href="#skills" className="text-purple-400 hover:text-purple-300 px-3 py-2">Skills</a>
              <a href="#contact" className="text-purple-400 hover:text-purple-300 px-3 py-2">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-28">
        <div className="container mx-auto px-6 space-y-8">
          {/* Hero Section */}
          <section className="min-h-[calc(100vh-10rem)] flex items-center justify-center">
            <div className="max-w-3xl flex flex-col md:flex-row items-center gap-8">
              <img 
                src={profileImage} 
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg border-2 border-purple-500/50 shadow-lg shadow-purple-500/20"
              />
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
                  Paramveer Singh Bhele
                </h1>
                <p className="text-xl text-purple-200/80 mb-6">CS Student @ University of South Florida</p>
                <p className="text-purple-400 mb-6">{typingText}</p>
                
                {/* Education Details */}
                <div className="mb-6 space-y-2">
                  <p className="text-purple-300">
                    B.S. Computer Science · 2022 - 2026
                    <span className="block text-purple-400/80 text-sm">Minor in Entrepreneurship</span>
                  </p>
                  <div className="space-y-1">
                    <p className="text-purple-300 text-sm">Scholarships:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li className="text-purple-400/90">
                        <span className="text-purple-300">Annette L. Raymund Endowed Scholarship</span>
                        <span className="text-purple-400/70 ml-2">- 2023</span>
                      </li>
                      <li className="text-purple-400/90">
                        <span className="text-purple-300">USF Green & Gold Director's Award</span>
                        <span className="text-purple-400/70 ml-2">- 2022</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/Param-10" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/paramveer-singh-bhele" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="mailto:bheleparamveer@gmail.com" 
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-8 px-4 md:px-8 scroll-mt-20">
            <div className="bg-gradient-to-br from-purple-950/30 via-black/50 to-purple-950/30 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-purple-500/20">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-8 font-mono text-center md:text-left">
                About Me
              </h2>
              <div className="space-y-8 text-purple-200/80">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">🚀 AI & Data Enthusiast | Aspiring Tech Leader</h3>
                  <p className="leading-relaxed">
                    I am a Computer Science student at the University of South Florida with a Minor in Entrepreneurship, 
                    passionate about leveraging AI, machine learning, and cloud computing to solve real-world challenges. 
                    My experience spans building ML models, crafting data-driven solutions, and developing scalable applications.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">🌟 Mission</h3>
                  <p className="leading-relaxed">
                    Committed to using technology to drive innovation and empower users, I aim to create impactful tools 
                    while inspiring others to explore the transformative potential of AI and data.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">💡 Core Skills</h3>
                  <ul className="space-y-4 ml-4">
                    <li>
                      <span className="font-medium text-purple-300">AI/ML:</span> Developing predictive models (e.g., Logistic Regression), 
                      pre-processing data, and creating interactive dashboards for insights.
                    </li>
                    <li>
                      <span className="font-medium text-purple-300">Data & Cloud:</span> Expertise in data manipulation, visualization 
                      (Python libraries), and integrating APIs into cloud-ready applications.
                    </li>
                    <li>
                      <span className="font-medium text-purple-300">Programming:</span> Proficient in Python, JavaScript, C++, SQL, 
                      and frontend tools like HTML/CSS.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">⬆️ Looking Ahead</h3>
                  <p className="leading-relaxed">
                    Excited to tackle challenges in AI-driven innovation and scalable cloud solutions. Let's connect to collaborate 
                    on impactful projects!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-8 scroll-mt-20">
            <div className="bg-gradient-to-br from-purple-950/30 via-black/50 to-purple-950/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-12 font-mono">
                Experience
              </h2>
              
              {/* Professional Experience */}
              <div className="space-y-6 md:space-y-8 text-purple-200/80">
              {/* Undergraduate Researcher RARE Lab*/}
              <div className="p-4 md:p-6 bg-purple-900/10 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-purple-300">Undergraduate Researcher</h3>
                      <p className="text-purple-400 text-sm md:text-base">RARE Lab, University of South Florida · Part-time</p>
                    </div>
                    <div className="md:text-right">
                      <p className="text-purple-400/80 text-sm md:text-base">Aug 2024 - Present</p>
                      <p className="text-purple-400/70 text-xs md:text-sm">Tampa, Florida, United States · On-site</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li className="text-purple-200">
                      Conducting research in Human-Robot Interaction (HRI) and AI, focusing on data-driven decision-making for robotics.
                    </li>
                    <li className="text-purple-200">
                      Utilizing Python, Pandas, and NumPy to analyze large datasets from human-robot interactions and extract key behavioral insights.
                    </li>
                  </ul>
                </div>

                {/* University Library Experience */}
                <div className="p-4 md:p-6 bg-purple-900/10 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-purple-300">Student Assistant - Collections and Discovery</h3>
                      <p className="text-purple-400 text-sm md:text-base">University of South Florida Libraries · Part-time</p>
                    </div>
                    <div className="md:text-right">
                      <p className="text-purple-400/80 text-sm md:text-base">Aug 2024 - Present</p>
                      <p className="text-purple-400/70 text-xs md:text-sm">Tampa, Florida, United States · On-site</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li className="text-purple-200">
                      Managed metadata for 1,000+ library materials, ensuring accurate cataloging and retrieval
                    </li>
                    <li className="text-purple-200">
                      Supported data entry for over 10,000 library items, enhancing collection organization
                    </li>
                  </ul>
                </div>

                {/* Peer Mentor Experience */}
                <div className="p-4 md:p-6 bg-purple-900/10 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-purple-300">Peer Mentor for Learning Team</h3>
                      <p className="text-purple-400 text-sm md:text-base">USF College of Engineering · Part-time</p>
                    </div>
                    <div className="md:text-right">
                      <p className="text-purple-400/80 text-sm md:text-base">Apr 2023 - Aug 2024</p>
                      <p className="text-purple-400/70 text-xs md:text-sm">Tampa, Florida, United States · On-site</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li className="text-purple-200">
                      Mentored first-year engineering students in Calculus concepts and problem-solving techniques
                    </li>
                    <li className="text-purple-200">
                      Facilitated weekly Learning Team course (EGN 4930) with interactive group problem solving
                    </li>
                    <li className="text-purple-200">
                      Conducted one-on-one academic counseling sessions throughout semesters
                    </li>
                    <li className="text-purple-200">
                      Organized and led exam preparation study sessions for 50+ students
                    </li>
                  </ul>
                </div>

                {/* Coefficient Software Internship */}
                <div className="p-4 md:p-6 bg-purple-900/10 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-purple-300">Summer Intern</h3>
                      <p className="text-purple-400 text-sm md:text-base">COEFFICIENT SOFTWARE SYSTEMS PRIVATE LIMITED · Internship</p>
                    </div>
                    <div className="md:text-right">
                      <p className="text-purple-400/80 text-sm md:text-base">May 2021 - Jul 2021</p>
                      <p className="text-purple-400/70 text-xs md:text-sm">Navi Mumbai, India · Hybrid</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li className="text-purple-200">
                      Compiled and analyzed data on top universities across USA, Canada, UK, and Australia
                    </li>
                    <li className="text-purple-200">
                      Learned and applied UI/UX design principles for cross-platform mobile applications
                    </li>
                    <li className="text-purple-200">
                      Contributed to "Word of the Day" app with 100,000+ downloads and 4.1/5 Play Store rating
                    </li>
                    <li className="text-purple-200">
                      Provided technical support for existing reports and dashboards
                    </li>
                    <li className="text-purple-200">
                      Conducted functionality testing during application development phases
                    </li>
                  </ul>
                  <a 
                    href="https://bit.ly/googlestore1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-purple-400 hover:text-purple-300 text-sm"
                  >
                    View on Google Play Store →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Leadership Section */}
          <section id="leadership" className="py-8 scroll-mt-20">
            <div className="bg-gradient-to-br from-purple-950/30 via-black/50 to-purple-950/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-12 font-mono">
                Leadership
              </h2>
              
              <div className="space-y-8 text-purple-200/80">
                {/* TEDx Experience */}
                <div className="p-4 md:p-6 bg-purple-900/10 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-purple-300">Head of Logistics</h3>
                      <p className="text-purple-400 text-sm md:text-base">TEDx at USF</p>
                    </div>
                    <div className="md:text-right">
                      <p className="text-purple-400/80 text-sm md:text-base">June 2024 – Feb 2025</p>
                      <p className="text-purple-400/70 text-xs md:text-sm">Tampa, Florida, United States</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li className="text-purple-200">
                      Coordinated logistics for TEDx at USF, managing a team of 10+ volunteers and prepared them for the event
                    </li>
                    <li className="text-purple-200">
                      Oversaw venue arrangements, including seating for 100 attendees, speaker accommodations, and security
                    </li>
                  </ul>
                </div>

                {/* Students of India Association */}
                <div className="p-4 md:p-6 bg-purple-900/10 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-purple-300">Vice President</h3>
                      <p className="text-purple-400 text-sm md:text-base">Students of India Association at USF</p>
                    </div>
                    <div className="md:text-right">
                      <p className="text-purple-400/80 text-sm md:text-base">Jan 2024 - May 2024</p>
                      <p className="text-purple-400/70 text-xs md:text-sm">Tampa, Florida, United States · On-site</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li className="text-purple-200">
                      Increased organizational budget through strategic financial management and fundraising initiatives
                    </li>
                    <li className="text-purple-200">
                      Led and mentored a team of 26 members, fostering collaboration and productivity
                    </li>
                    <li className="text-purple-200">
                      Chaired Election Committee to ensure transparent leadership transitions
                    </li>
                    <li className="text-purple-200">
                      Organized large-scale events including Holi celebration with 1000+ attendees
                    </li>
                    <li className="text-purple-200">
                      Collaborated with cross-organizational teams to expand community engagement
                    </li>
                  </ul>
                </div>

                {/* SHPE Experience */}
                <div className="p-4 md:p-6 bg-purple-900/10 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-purple-300">Database Director</h3>
                      <p className="text-purple-400 text-sm md:text-base">SHPE USF</p>
                    </div>
                    <div className="md:text-right">
                      <p className="text-purple-400/80 text-sm md:text-base">Jan 2024 - May 2024</p>
                      <p className="text-purple-400/70 text-xs md:text-sm">Tampa, Florida, United States</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li className="text-purple-200">
                      Conducted a meticulous audit of years' worth of accumulated files, precisely categorizing 
                      and structuring them into a logical, intuitive folder hierarchy
                    </li>
                    <li className="text-purple-200">
                      Orchestrated a comprehensive overhaul of SHPE's document management system, streamlining 
                      access to critical organizational data and historical records
                    </li>
                    <li className="text-purple-200">
                      Implemented a standardized file-naming convention and metadata tagging system, ensuring 
                      consistent and searchable document identification
                    </li>
                    <li className="text-purple-200">
                      Designed and customized database structures to suit the specific needs and requirements 
                      of SHPE, optimizing data storage and retrieval processes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-8 scroll-mt-20">
            <div className="bg-gradient-to-br from-purple-950/30 via-black/50 to-purple-950/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-8">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portfolioData.projects.map((project, index) => (
                  <div key={index} className="flex flex-col p-6 bg-purple-900/10 rounded-lg">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-purple-400">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        {project.timeline && (
                          <span className="italic text-sm text-gray-400">{project.timeline}</span>
                        )}
                        <div className="flex gap-2">
                          <a 
                            href={project.link}
                            className="text-purple-500 hover:text-purple-400 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-6 h-6" />
                          </a>
                          {project.demoLink && project.demoLink !== "#" && (
                            <a 
                              href={project.demoLink}
                              className="text-purple-500 hover:text-purple-400 transition-colors text-sm flex items-center"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-300">{project.description}</p>
                    {project.details && project.details.length > 0 && (
                      <ul className="mt-2 list-disc list-inside text-gray-300">
                        {project.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                    {/* Skills Section */}
                    {project.skills && project.skills.length > 0 && (
                      <div className="mt-2">
                        <strong className="text-purple-400">Skills:</strong>
                        <span className="text-gray-300"> {" "}
                          {project.skills.join(' · ')}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Skills Section */}
          <section id="skills" className="py-8 scroll-mt-20">
            <div className="bg-gradient-to-br from-purple-950/30 via-black/50 to-purple-950/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-8 font-mono">
                Technical Skills
              </h2>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Languages Column */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold text-purple-300 mb-3">Languages</h3>
                  <ul className="space-y-2">
                    {portfolioData.technicalSkills.languages.map((lang) => (
                      <li key={lang} className="text-purple-200 text-sm md:text-base">
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Frameworks Column */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold text-purple-300 mb-3">Frameworks</h3>
                  <ul className="space-y-2">
                    {portfolioData.technicalSkills.frameworks.map((framework) => (
                      <li key={framework} className="text-purple-200 text-sm md:text-base">
                        {framework}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Courses Column */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold text-purple-300 mb-3">Courses</h3>
                  <ul className="space-y-2">
                    {portfolioData.technicalSkills.courses.map((course) => (
                      <li key={course} className="text-purple-200 text-sm md:text-base">
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-8 scroll-mt-20">
            <div className="bg-gradient-to-br from-purple-950/30 via-black/50 to-purple-950/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-8">
                Contact Me
              </h2>
              <div className="max-w-md mx-auto">
                <form 
                  action="https://formspree.io/f/xanqjzyj" 
                  method="POST"
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setFormStatus('sending');
                    
                    try {
                      const form = e.target as HTMLFormElement;
                      const response = await fetch(form.action, {
                        method: 'POST',
                        body: new FormData(form),
                        headers: {
                          'Accept': 'application/json'
                        }
                      });
                      
                      if (response.ok) {
                        setFormStatus('sent');
                        form.reset();
                      } else {
                        throw new Error('Form submission failed');
                      }
                    } catch {
                      setFormStatus('error');
                    }
                  }}
                >
                  <div>
                    <label htmlFor="name" className="block text-purple-400 mb-2">
                      Your Name <span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full p-3 bg-purple-900/20 border border-purple-500/30 rounded-lg text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-purple-400 mb-2">
                      Your Email <span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full p-3 bg-purple-900/20 border border-purple-500/30 rounded-lg text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-purple-400 mb-2">
                      Phone Number <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full p-3 bg-purple-900/20 border border-purple-500/30 rounded-lg text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-purple-400 mb-2">
                      Your Message <span className="text-purple-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full p-3 bg-purple-900/20 border border-purple-500/30 rounded-lg text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Hello! I'd like to connect about..."
                    ></textarea>
                  </div>

                  {/* Hidden Recipient Email Field */}
                  <input 
                    type="hidden" 
                    name="_replyto" 
                    value="bheleparamveer@gmail.com"
                  />
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    {formStatus === 'sending' ? (
                      'Sending...'
                    ) : formStatus === 'sent' ? (
                      'Message Sent!'
                    ) : formStatus === 'error' ? (
                      'Error - Try Again'
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  {/* Form Status Messages */}
                  {formStatus === 'sent' && (
                    <p className="text-purple-500 text-center">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  )}
                  {formStatus === 'error' && (
                    <p className="text-red-500 text-center">
                      Sorry, there was an error sending your message. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </section>

          {/* Copyright */}
          <div className="py-4 text-center text-purple-400/60">
            <p>© {new Date().getFullYear()} Paramveer Singh Bhele. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 z-50 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-6 relative">
            <button
              className="absolute top-4 right-4 text-purple-400 p-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <nav className="flex flex-col items-center space-y-6" role="navigation">
              {['About', 'Experience', 'Leadership', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl text-purple-400 hover:text-purple-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;