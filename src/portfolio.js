/*
 * Personal Portfolio Configuration
 * Zia Uddin
 * AI Engineer | AI Automation Engineer | Full-Stack Developer
 */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// ============================================================
// Splash Screen
// ============================================================

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// ============================================================
// Hero / Greeting Section
// ============================================================

const illustration = {
  animated: true
};

const greeting = {
  username: "Zia Uddin",

  title: "Hi, I'm Zia Uddin",

  subTitle: emoji(
    "🤖 AI Engineer & AI Automation Engineer building AI-powered applications, intelligent workflows, business automation systems, and scalable full-stack solutions. I transform real-world business processes into smarter, faster, and more efficient digital systems."
  ),

  resumeLink: "",

  displayGreeting: true
};

// ============================================================
// Social Media Links
// ============================================================

const socialMediaLinks = {
  github: "https://github.com/ziauddin14",

  linkedin: "https://www.linkedin.com/in/zia-uddin-23327b341",

  gmail: "zu37216@gmail.com",

  facebook: "https://www.facebook.com/ziauddin114",

  instagram: "https://instagram.com/zia_uddin_ima",

  twitter: "https://x.com/Zia_Uddin0114",

  display: true
};

// ============================================================
// Skills / What I Do
// ============================================================

const skillsSection = {
  title: "What I Do",

  subTitle:
    "AI ENGINEERING, BUSINESS AUTOMATION & FULL-STACK DEVELOPMENT FOR REAL-WORLD PROBLEMS",

  skills: [
    emoji(
      "🤖 Build AI-powered applications, intelligent assistants, and LLM-integrated systems that solve practical business and productivity problems."
    ),

    emoji(
      "⚙️ Analyze business operations and transform manual, repetitive workflows into automated digital processes using AI, APIs, databases, and workflow automation."
    ),

    emoji(
      "🚀 Develop scalable full-stack applications and SaaS products using React.js, Next.js, Node.js, TypeScript, Python, MongoDB, PostgreSQL, and REST APIs."
    ),

    emoji(
      "🧠 Design AI-driven workflows, contextual assistants, intelligent decision-support systems, and automation solutions for real-world organizational use cases."
    ),

    emoji(
      "📊 Build data-driven dashboards, analytics platforms, ETL pipelines, and business intelligence solutions using Python, Pandas, NumPy, MongoDB, and Streamlit."
    ),

    emoji(
      "🏗️ Translate business requirements into technical architecture, software systems, automation workflows, MVPs, and production-ready digital solutions."
    )
  ],

  // softwareSkills: [
  //   {
  //     skillName: "Python",
  //     fontAwesomeClassname: "fab fa-python"
  //   },
  //   {
  //     skillName: "JavaScript",
  //     fontAwesomeClassname: "fab fa-js"
  //   },
  //   {
  //     skillName: "TypeScript",
  //     fontAwesomeClassname: "fab fa-js-square"
  //   },
  //   {
  //     skillName: "React.js",
  //     fontAwesomeClassname: "fab fa-react"
  //   },
  //   {
  //     skillName: "Next.js",
  //     fontAwesomeClassname: "fab fa-js"
  //   },
  //   {
  //     skillName: "Node.js",
  //     fontAwesomeClassname: "fab fa-node-js"
  //   },
  //   {
  //     skillName: "Express.js",
  //     fontAwesomeClassname: "fas fa-server"
  //   },
  //   {
  //     skillName: "NestJS",
  //     fontAwesomeClassname: "fas fa-server"
  //   },
  //   {
  //     skillName: "MongoDB",
  //     fontAwesomeClassname: "fas fa-leaf"
  //   },
  //   {
  //     skillName: "PostgreSQL",
  //     fontAwesomeClassname: "fas fa-database"
  //   },
  //   {
  //     skillName: "Redis",
  //     fontAwesomeClassname: "fas fa-database"
  //   },
  //   {
  //     skillName: "REST APIs",
  //     fontAwesomeClassname: "fas fa-cloud"
  //   },
  //   {
  //     skillName: "WebSockets",
  //     fontAwesomeClassname: "fas fa-network-wired"
  //   },
  //   {
  //     skillName: "Tailwind CSS",
  //     fontAwesomeClassname: "fas fa-wind"
  //   },
  //   {
  //     skillName: "Bootstrap",
  //     fontAwesomeClassname: "fab fa-bootstrap"
  //   },
  //   {
  //     skillName: "Pandas",
  //     fontAwesomeClassname: "fab fa-python"
  //   },
  //   {
  //     skillName: "NumPy",
  //     fontAwesomeClassname: "fab fa-python"
  //   },
  //   {
  //     skillName: "Scikit-learn",
  //     fontAwesomeClassname: "fab fa-python"
  //   },
  //   {
  //     skillName: "Streamlit",
  //     fontAwesomeClassname: "fas fa-chart-line"
  //   },
  //   {
  //     skillName: "Git",
  //     fontAwesomeClassname: "fab fa-git-alt"
  //   },
  //   {
  //     skillName: "GitHub",
  //     fontAwesomeClassname: "fab fa-github"
  //   },
  //   {
  //     skillName: "Docker",
  //     fontAwesomeClassname: "fab fa-docker"
  //   },
  //   {
  //     skillName: "Linux",
  //     fontAwesomeClassname: "fab fa-linux"
  //   }
  // ],

  display: true
};

// ============================================================
// Education Section
// ============================================================

const educationInfo = {
  display: true,

  schools: [
    {
      schoolName: "Virtual University of Pakistan",
      logo: require("./assets/VU log.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2026 – Present",
      desc:
        "Currently pursuing a Bachelor's degree in Computer Science with a focus on software engineering, modern application development, databases, and computing fundamentals.",
      descBullets: [
        "Developing strong foundations in computer science and software engineering",
        "Applying programming and system development concepts through practical projects"
      ]
    }
  ]
};

// ============================================================
// Technical Proficiency
// ============================================================

const techStack = {
  viewSkillBars: true,

  experience: [
    {
      Stack: "AI Engineering & AI Application Development",
      progressPercentage: "85%"
    },

    {
      Stack: "AI Automation & Business Process Automation",
      progressPercentage: "85%"
    },

    {
      Stack: "Full-Stack Development (MERN / Next.js)",
      progressPercentage: "90%"
    },

    {
      Stack: "Backend Development & API Architecture",
      progressPercentage: "85%"
    },

    {
      Stack: "Python, Data Processing & Analytics",
      progressPercentage: "75%"
    },

    {
      Stack: "Database & Data Architecture",
      progressPercentage: "82%"
    },

    {
      Stack: "Frontend Development (React / TypeScript)",
      progressPercentage: "92%"
    }
  ],

  displayCodersrank: false
};

// ============================================================
// Work Experience
// ============================================================

const workExperiences = {
  display: true,

  experience: [
    {
      role: "Assistant AI Automation Engineer",

      company: "Dawat-e-Islami",

      // Add company logo if available
      companylogo: require("./assets/Dawat e islami.jpg"),

      date: "July 2026 – Present",

      desc:
        "Analyze business and operational workflows to identify opportunities for AI-driven automation. Transform manual processes into digital workflows and contribute to AI-powered systems, intelligent automation solutions, software testing, requirement analysis, technical documentation, and real-world organizational solutions."
    },

    {
      role: "Founder & Lead AI Engineer",

      company: "Softwaremine",

      // Add logo if available
      companylogo: require("./assets/Softwaremine's logo.jpeg"),

      date: "March 2026 – Present",

      desc:
        "Founded and lead a technology company focused on AI-powered software, automation, SaaS products, and digital transformation. Design AI-powered applications, intelligent workflows, full-stack systems, MVPs, and automation solutions while leading architecture, development, testing, deployment, technical planning, and product strategy."
    },

    {
      role: "Head of IT Department",

      company: "ABWA Education System",

      // Add logo if available
      companylogo: require("./assets/ABWA School.jpg"),

      date: "March 2026 – June 2026",

      desc:
        "Managed institutional IT systems and digital operations, supported staff with technical solutions, contributed to digital transformation initiatives, and helped teams adopt technology-driven workflows to improve operational processes."
    },

    {
      role: "Frontend Developer",

      company: "Human Healthcare Services",

      companylogo: require("./assets/HHC-logo.png"),

      date: "November 2025 – February 2026",

      desc:
        "Developed responsive healthcare-related web interfaces and reusable frontend components, implemented UI and UX improvements, and contributed to healthcare digital solutions using modern JavaScript and web development technologies."
    },

    {
      role: "Frontend Web Developer Intern",

      company: "Aaghaz Tech Pakistan",

      companylogo: require("./assets/images/Aaghaz tech.png"),

      date: "May 2025 – July 2025",

      desc:
        "Assisted with frontend web development, reusable component development, UI improvements, and modern frontend workflows while gaining practical experience working on real-world web applications."
    }
  ]
};

// ============================================================
// GitHub / Open Source
// ============================================================

const openSource = {
  showGithubProfile: "true",

  display: true
};

// ============================================================
// Featured / Big Projects
// ============================================================

const bigProjects = {
  title: "Featured Projects",

  subtitle:
    "AI-POWERED APPLICATIONS, AUTOMATION SYSTEMS, DATA PLATFORMS & FULL-STACK PRODUCTS",

  projects: [
    // ========================================================
    // 01 - DPS
    // ========================================================

    {
      projectName:
        "Digital Personal Secretary (DPS) — AI-Powered Personal Productivity Platform",

      projectDesc:
        "An AI-powered personal secretary designed to manage tasks, goals, projects, calendar activities, notes, and personal knowledge. The platform includes an AI Secretary with contextual assistance, conversation memory, target-aware interactions, productivity dashboards, recommendations, and intelligent workflows. Built as an extensible platform exploring autonomous AI workflows beyond traditional chatbots.",

      footerLink: [
        {
          name: "Visit Project",
          url: "https://dps-ai.vercel.app/"
        }
      ]
    },

    // ========================================================
    // 02 - Crypto Analytics
    // ========================================================

    {
      projectName:
        "Crypto Analytics Dashboard — Real-Time Data Analytics Platform",

      projectDesc:
        "A data analytics platform for collecting, processing, storing, and visualizing cryptocurrency market data. Built with Python-based extraction and ETL workflows, MongoDB data storage, Pandas-based processing, and an interactive Streamlit dashboard for presenting cryptocurrency analytics and insights.",

      footerLink: [
        {
          name: "View Dashboard",
          url: "https://crypto-analytics-dashboard.streamlit.app/"
        }
      ]
    },

    // ========================================================
    // 03 - EMS
    // ========================================================

    {
      projectName:
        "Employee Management System (EMS) — Workforce Management Platform",

      projectDesc:
        "A scalable MERN-based workforce management platform featuring employee management, authentication, authorization, dashboards, and backend APIs. The architecture is designed to support attendance management, task management, KPI tracking, employee activity monitoring, and executive dashboards for organizational workforce operations.",

      footerLink: [
        {
          name: "View Project",
          url: "https://emp-frotend.vercel.app/"
        }
      ]
    },

    // ========================================================
    // 04 - Human Healthcare
    // ========================================================

    {
      projectName:
        "Human-Healthcare.com — Healthcare Company Website",

      projectDesc:
        "A production healthcare website developed with a focus on responsive design, reusable frontend components, modern UI/UX, accessibility, smooth interactions, and a professional digital experience for a healthcare organization.",

      footerLink: [
        {
          name: "Visit Website",
          url: "https://human-healthcare.com/"
        }
      ]
    },

    // ========================================================
    // 05 - Zakat Management
    // ========================================================

    {
      projectName:
        "Zakat Management System — Full-Stack Zakat Management Platform",

      projectDesc:
        "A MERN-based web application designed for Zakat calculation and management. The system demonstrates secure authentication, database operations, responsive interfaces, RESTful APIs, and end-to-end full-stack application development.",

      footerLink: [
        {
          name: "Visit Project",
          url: "https://zakat-ms.vercel.app/"
        }
      ]
    },

    // ========================================================
    // 06 - PrimeCare
    // ========================================================

    {
      projectName:
        "PrimeCare Health — Comprehensive Clinic Management System",

      projectDesc:
        "A full-stack clinic management platform designed to digitize and streamline healthcare workflows. The system focuses on patient management, appointment workflows, doctor scheduling, administrative operations, and a modern user experience for healthcare facilities.",

      footerLink: [
        {
          name: "Visit Project",
          url: "https://primecarehealth.vercel.app/"
        }
      ]
    },

    // ========================================================
    // 07 - Zakat Calculator
    // ========================================================

    {
      projectName:
        "Zakat Calculator — Interactive Islamic Finance Calculator",

      projectDesc:
        "An interactive Zakat calculation tool designed to simplify the process of calculating Zakat based on user-provided financial information. Built as part of the Zakat Management System with a responsive interface and practical calculation workflow.",

      footerLink: [
        {
          name: "Open Calculator",
          url: "https://zakat-ms.vercel.app/zakat-calculator"
        }
      ]
    },

    // ========================================================
    // 08 - JavaScript Projects
    // ========================================================

    {
      projectName: "JavaScript Projects Collection",

      projectDesc:
        "A collection of practical JavaScript projects demonstrating core programming logic, DOM manipulation, frontend development, API integration, and interactive UI development. Includes projects such as a Snake Game, Weather App, Table Generator, To-Do applications, and other JavaScript utilities.",

      footerLink: [
        {
          name: "View Projects",
          url: "https://ziauddin14.github.io/JavaScript-Projects/"
        }
      ]
    },

    // ========================================================
    // 09 - NovaTalk
    // ========================================================
  ],

  display: true
};

// ============================================================
// Achievements & Certifications
// ============================================================

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),

  subtitle:
    "Certifications, professional learning, technical achievements, and contributions from my development journey.",

  achievementsCards: [
    {
      title: "Microsoft – AI Concepts for Developers",

      subtitle:
        "Successfully completed the Microsoft AI Concepts for Developers Learning Path, earning achievement badges and a final trophy certificate covering core AI concepts.",

      image: require("./assets/microsoft.jpeg"),

      imageAlt: "Microsoft Logo"
    },

    {
      title: "Internship Completion Certificate",

      subtitle:
        "Successfully completed a 3-month internship at Human Healthcare Services from November 2025 to February 2026, contributing to healthcare web and digital solutions.",

      image: require("./assets/internship completion.jpeg"),

      imageAlt: "Human Healthcare Logo"
    },

    {
      title: "CWP (Certified Web Professional)",

      subtitle:
        "Successfully completed Web Development training at SMIT, gaining practical experience and strong foundations in modern web development.",

      image: require("./assets/web.jpeg"),

      imageAlt: "SMIT Logo"
    },

    {
      title: "Python Essential 1 Certification",

      subtitle:
        "Cisco Networking Academy certification demonstrating foundational proficiency in Python programming, problem-solving, and programming logic.",

      image: require("./assets/cisco.jpeg"),

      imageAlt: "Cisco Logo"
    },

    {
      title: "JavaScript (Basic) Certification",

      subtitle:
        "HackerRank certification demonstrating proficiency in JavaScript fundamentals, programming logic, and problem-solving.",

      image: require("./assets/javascript.jpeg"),

      imageAlt: "HackerRank Logo"
    },

    {
      title: "12-Hour Hackathon – SMIT",

      subtitle:
        "Participated in a 12-hour SMIT Hackathon and developed a Python-based SMS automation project while completing the assigned technical challenges.",

      image: require("./assets/hackathon.jpeg"),

      imageAlt: "SMIT Hackathon Logo"
    },

    {
      title: "Python (Basic) Certification",

      subtitle:
        "HackerRank certification demonstrating foundational Python programming and problem-solving skills.",

      image: require("./assets/python.jpeg"),

      imageAlt: "HackerRank Logo"
    },

    {
      title: "Volunteer – SMIT",

      subtitle:
        "Recognized for contributing as a volunteer at Saylani Mass IT Training and supporting community-driven technology learning initiatives.",

      image: require("./assets/volunteer.jpeg"),

      imageAlt: "SMIT Logo"
    }
  ],

  display: true
};

// ============================================================
// Blogs
// ============================================================

const blogSection = {
  title: "Blogs",

  subtitle:
    "Thoughts and practical insights on AI engineering, automation, software development, data, and emerging technologies.",

  displayMediumBlogs: "false",

  blogs: [
    {
      url: "https://www.facebook.com/share/p/17SpXnLzX9/",

      title: "Is Data Science Dead?",

      description:
        "An honest take on the evolution of Data Science and how AI automation, modern engineering practices, and MLOps are reshaping the field."
    }
  ],

  display: true
};

// ============================================================
// Talks
// ============================================================

const talkSection = {
  title: "TALKS",

  subtitle: emoji(
    "Sharing practical knowledge about AI, automation, software engineering, and technology."
  ),

  talks: [],

  display: false
};

// ============================================================
// Podcast
// ============================================================

const podcastSection = {
  title: emoji("Podcast 🎙️"),

  subtitle:
    "Conversations around technology, AI, software engineering, automation, and building digital products.",

  podcast: [],

  display: false
};

// ============================================================
// Resume
// ============================================================

const resumeSection = {
  title: "Resume",

  subtitle:
    "View my professional experience, technical skills, projects, and AI engineering background.",

  display: true
};

// ============================================================
// Contact
// ============================================================

const contactInfo = {
  title: emoji("Let's Build Something 🚀"),

  subtitle:
    "Open to AI engineering roles, AI automation projects, remote opportunities, freelance work, collaborations, and building intelligent digital solutions.",

  number: "+92 319 8998086",

  email_address: "zu37216@gmail.com"
};

// ============================================================
// Twitter / X
// ============================================================

const twitterDetails = {
  userName: "Zia_Uddin0114",

  display: false
};

// ============================================================
// Hiring Status
// ============================================================

const isHireable = true;

// ============================================================
// Export
// ============================================================

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};