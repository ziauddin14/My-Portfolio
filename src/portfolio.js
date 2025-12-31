/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Zia Uddin",
  title: "Hi all, I'm Zia Uddin",
  subTitle: emoji(
"🚀 MERN Stack Developer with hands-on experience in building full-stack web apps using MongoDB, Express, React, and Node.js.Passionate about creating clean, high-performance digital solutions and currently exploring AI & Data Science to build smarter applications."),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ziauddin14",
  linkedin: "https://www.linkedin.com/in/zia-uddin-23327b341",
  gmail: "zu37216@gmail.com",
  facebook: "https://www.facebook.com/ziauddin114",
  instagram: "https://instagram.com/zia_uddin_ima",
  twitter: "https://x.com/Zia_Uddin0114",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
    "PASSIONATE MERN STACK DEVELOPER WHO BUILDS MODERN, SCALABLE & DATA-DRIVEN WEB APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build dynamic and responsive full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js)"
    ),
    emoji(
      "⚡ Create clean, interactive, and high-performing user interfaces with React.js, Tailwind CSS, and TypeScript"
    ),
    emoji(
      "⚡ Design and integrate secure RESTful & GraphQL APIs with robust backend logic"
    ),
    emoji(
      "⚡ Currently exploring AI & Data Science to build smarter, data-driven applications"
    )
  ],

softwareSkills: [
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "Bootstrap",
    fontAwesomeClassname: "fab fa-bootstrap"
  },
  {
    skillName: "Tailwind CSS",
    fontAwesomeClassname: "fas fa-wind"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "TypeScript",
    fontAwesomeClassname: "fab fa-js-square"
  },
  {
    skillName: "ReactJS",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "React Native",
    fontAwesomeClassname: "fab fa-react-native"
  },
  {
    skillName: "NextJS",
    fontAwesomeClassname: "fab fa-nextjs"
  },
  {
    skillName: "NodeJS",
    fontAwesomeClassname: "fab fa-node-js"
  },
  {
    skillName: "ExpressJS",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-leaf"
  },
  {
    skillName: "GraphQL",
    fontAwesomeClassname: "fas fa-project-diagram"
  },
  {
    skillName: "Firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "Redis",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "NPM",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  }
],
display: true // Set false to hide this section, defaults to true
 // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools : [
  {
    schoolName: "Virtual University of Pakistan",
    logo: require("./assets/VU log.png"), // logo path change kar sakte ho
    subHeader: "Bachelor of Science in Computer Science",
    duration: "February 2026 - Present",
    desc: "Currently pursuing Bachelor's in Computer Science with emphasis on modern web development, databases, and software engineering.",
    descBullets: [
      "Learning full-stack web development including React, NodeJS, and NextJS",
      "Working on personal and academic projects to apply programming skills"
    ]
  },
   {
    schoolName: "Govt. Degree Boys College",
    logo: require("./assets/Degree College.jpg"), // tum logo ka path add kar sakte ho
    subHeader: "Intermediate",
    duration: "August 2023 - May 2025",
    desc: "Completed Higher Secondary Education with focus on Computer Science subjects, Mathematics, and English.",
    descBullets: [
      "Actively participated in college programming competitions",
      "Maintained top grades in Computer Science and Mathematics"
    ]
  },
]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend Development (React, Tailwind, TypeScript)",
      progressPercentage: "92%"
    },
    {
      Stack: "Backend Development (Node.js, Express, MongoDB, GraphQL)",
      progressPercentage: "80%"
    },
    {
      Stack: "AI, Data Science & Problem Solving (Python, Data Analysis)",
      progressPercentage: "20%"
    },
    {
      Stack: "Programming",
      progressPercentage:"90%"
    },
    {
      Stack: "SPA Development",
      progressPercentage:"70%"
    }
  ],
  displayCodersrank: true // Optional: Set true if you've added your CodersRank username
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "Aaghaz Tech",
      companylogo: require("./assets/images/Aaghaz tech.png"),
      date: "May 2025 – July 2025",
      desc: "I worked as a Frontend Developer Intern at Aaghaz Tech from May 2025 to July 2025, where I developed the complete frontend of the company’s official website.",
    },
    {
      role: "Senior Frontend Developer",
      company: "Human-HealthCare.com",
      companylogo: require("./assets/HHC-logo.png"),
      date: "Nov 2025 – Present",
      desc: "I joined Human-Healthcare.com for a Senior Frontend Developer role, and I Develope the complete frontend of the company’s official website with API integration.",
    },
    {
      role: "Full Stack Developer",
      company: "DeveloperHub Corporation",
      companylogo: require("./assets/DeveloperHub Corporaiton.jpg"),
      date: "Dec 2025 – Present",
      desc: "I joined DeveloperHub Corporation for a Full Stack Developer role, where I work with all the Web Development Stacks and I'm currently focused on Backend Development.",
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OF MY FEATURED WORKS BUILT WITH PASSION AND MODERN TECH",
  projects: [
    {
      // image: require("./assets/images/emsLogo.webp"),
      projectName: "Zakat & Donation Management System",
      projectDesc:
        "A MERN-based full-stack web app for Zakat calculation and management with secure authentication, real-time database operations, and a responsive UI. Deployed using Vercel (frontend) and Render (backend), showcasing RESTful APIs, cloud deployment, and end-to-end full-stack development skills",
      footerLink: [
        {
          name: "View Project",
          url: "https://zakat-ms.vercel.app"
        }
      ]
    },
    {
      // image: require("./assets/images/emsLogo.webp"),
      projectName: "EMS (Employee Management System)",
      projectDesc:
        "A full-stack MERN web application designed for efficient employee management — featuring authentication, role-based dashboards, and real-time CRUD operations to streamline HR workflows. Deployed using Vercel and backend under Development , showcasing RESTful APIs and end-to-end full-stack development skills",
      footerLink: [
        {
          name: "Under Development",
          url: "https://emp-frotend.vercel.app"
        }
      ]
    },
    {
  projectName: "React Boilerplate – UI Enhancement",
  projectDesc:
    "Contributed to an open-source React Boilerplate by improving the homepage UI/UX. Added modern hover effects, smooth animations, and interactive button styling — resulting in better visual appeal and user experience. Submitted via GitHub Pull Request. ",
  footerLink: [
    {
      name: "View Contribution",
      url: "https://github.com/ziauddin14/react-boilerplate" 
    }
  ]
},
    {
      // image: require("./assets/images/emsLogo.webp"),
      projectName: "Human HealthCare ",
      projectDesc:
        "I designed and developed a fully responsive Human Healthcare website using Next.js and Tailwind CSS, featuring a clean UI with smooth transitions and modern animations for an engaging user experience.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://human-healthcare-next.vercel.app/"
        }
      ]
    },
    {
  // image: require("./assets/images/novaTalkLogo.webp"),
  projectName: "NovaTalk – AI-Powered Chatbot",
  projectDesc:
    "I built NovaTalk, an AI-powered chatbot using the MERN stack. It answers user questions based on limited internal data—similar to the very first GPT models. If the answer exists in its dataset, it responds intelligently; otherwise, it returns no answer. The platform features a clean and fully responsive UI for seamless interactions.",
  footerLink: [
    {
      name: "Under Deployment",
      url: "https://nova-talk-frontend.vercel.app/"
    }
  ]
},
    {
      // image: require("./assets/images/jsProjectsLogo.webp"),
      projectName: "JavaScript Projects Collection",
      projectDesc:
        "A collection of mini JavaScript projects showcasing core logic and frontend skills — including the classic Snack Game, Weather App, Table Generator, and several other fun interactive web utilities built purely with HTML, CSS, and JS.",
      footerLink: [
        {
          name: "View Projects",
          url: "https://ziauddin14.github.io/JavaScript-Projects/"
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Some highlights of my learning journey, certifications, and contributions!",

  achievementsCards : [
  {
    title: "Python Essential 1 Certification",
    subtitle:
      "Earned from Cisco Networking Academy for demonstrating core proficiency in Python fundamentals, problem-solving, and programming logic.",
    image: require("./assets/Cisco log.png"),
    imageAlt: "Cisco Logo",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://drive.google.com/file/d/1KCULK-pHi4BHGz8H4-yjZkKODAryL7y9/view?usp=drive_link"
      }
    ]
  },
  {
    title: "JavaScript (Basic) Certification",
    subtitle:
      "Earned from HackerRank for demonstrating core proficiency in JavaScript fundamentals, problem-solving, and programming logic.",
    image: require("./assets/images/hacker rank.png"),
    imageAlt: "HackerRank Logo",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://drive.google.com/file/d/1bf_e_LBd4wPReIgXjH49gjH5FU2aSahi/view"
      }
    ]
  },
  {
    title: "12-Hour Hackathon – SMIT",
    subtitle:
      "Successfully participated in a 12-hour Hackathon organized by SMIT, developing a Python-based SMS automation project and completing all assigned tasks.",
    image: require("./assets/images/SMIT logo.png"),
    imageAlt: "SMIT Hackathon Logo",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://drive.google.com/file/d/17gNhsHpjRgfYKXmUeViUIWjRsAxN47q4/view?usp=drive_link" // replace with your actual certificate link
      }
    ]
  },
  {
    title: "Python (Basic) Certification",
    subtitle:
      "Earned from HackerRank for demonstrating core proficiency in Python fundamentals, problem-solving, and programming logic.",
    image: require("./assets/images/hacker rank.png"),
    imageAlt: "HackerRank Logo",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://drive.google.com/file/d/1bnrY9omMWTS0Vd5ozNo3tI5wopR4t6BA/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Volunteer – SMIT",
    subtitle:
      "Recognized for contributing as a volunteer at Saylani Mass IT Training (SMIT), assisting in community-driven tech learning initiatives.",
    image: require("./assets/images/SMIT logo.png"),
    imageAlt: "SMIT Logo",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://drive.google.com/file/d/1SSH7c3b1RJ6WvoGFY5T4yfLncmUGseh2/view"
      }
    ]
  },
  
  
],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love sharing my thoughts on technology, development trends, and what I learn along the way.",
  displayMediumBlogs: "false", // since it's a local blog, not fetched from Medium
  blogs: [
    {
      url: "https://www.facebook.com/share/p/17SpXnLzX9/", // add your blog link here once published
      title: "Is Data Science Dead?",
      description:
        "An honest take on the evolution of Data Science — exploring how AI automation, MLOps, and modern development stacks are reshaping the field rather than replacing it."
    }
  ],
  display: true
};


// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open for collaborations, freelance projects, and good conversations ✨",
  number: "+92 319 8998086",
  email_address: "zu37216@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
