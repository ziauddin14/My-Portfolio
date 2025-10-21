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
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
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
      desc: "I worked as a Frontend Developer Intern at Aaghaz Tech from May 2025 to July 2025, where I developed the complete frontend of the company’s official website. I used HTML, CSS, JavaScript, React.js, and Tailwind CSS to build responsive and user-friendly interfaces. I converted Figma designs into functional components and collaborated with the backend team to integrate APIs. I managed code using Git and GitHub, and optimized the site for performance, SEO, and mobile responsiveness. This internship improved my technical skills, understanding of real-world development workflows, and strengthened my ability to deliver clean, efficient code on deadlines.",
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OF MY FEATURED WORKS BUILT WITH PASSION AND MODERN TECH",
  projects: [
    {
      // image: require("./assets/images/emsLogo.webp"),
      projectName: "EMS (Employee Management System)",
      projectDesc:
        "A full-stack MERN web application designed for efficient employee management — featuring authentication, role-based dashboards, and real-time CRUD operations to streamline HR workflows.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://emp-frotend.vercel.app"
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

  achievementsCards: [
    {
      title: "JavaScript (Basic) Certification",
      subtitle:
        "Earned from HackerRank for demonstrating core proficiency in JavaScript fundamentals, problem-solving, and programming logic.",
      image: require("./assets/images/hacker rank.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1bf_e_LBd4wPReIgXjH49gjH5FU2aSahi/view" // add your certificate link here
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
          url: "https://drive.google.com/file/d/1SSH7c3b1RJ6WvoGFY5T4yfLncmUGseh2/view" // add your volunteer certificate link here
        }
      ]
    }
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
