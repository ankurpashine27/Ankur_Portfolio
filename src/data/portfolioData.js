// ============================================================
// PORTFOLIO DATA — Ankur Pashine
// Update placeholder values marked with [TODO] as needed
// ============================================================

export const personalInfo = {
  name: "Ankur Pashine",
  title: "Software Engineer",
  tagline:
    "Building robust, scalable applications — from enterprise Java to modern web.",
  email: "ankurpashine27@gmail.com",
  phone: "+91 7089893155",
  location: "Bhilai, Chhattisgarh, India",
  github: "https://github.com/ankurpashine27",
  linkedin: "https://linkedin.com/in/ankurpashine27",
  twitter: "https://x.com/Ankur_Pashine",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const heroData = {
  greeting: "Hi, I'm",
  name: "Ankur Pashine",
  roles: [
    "Software Engineer",
    "Java Expert",
    "Problem Solver",
    "Web Developer",
  ],
  description:
    "Software Engineer with 5+ years at Cognizant, specializing in Java-based enterprise web applications. Experienced in building, debugging, testing, and deploying scalable solutions for global clients.",
  ctaPrimary: { label: "View My Work", target: "projects" },
  ctaSecondary: { label: "Download Resume", href: "/resume.pdf" },
};

export const aboutData = {
  bio: [
    "Hi! I'm Ankur Pashine, a Software Engineer based in Bhilai, Chhattisgarh, with over 5 years of experience at Cognizant Technology Solutions. I specialize in Java-based enterprise web applications, currently working on Marriott International's LightSpeed Property Management System.",
    "I'm passionate about writing clean, reliable code and solving complex business problems through technology. Outside of enterprise development, I'm actively expanding my skills in modern frontend technologies like React — bridging the gap between robust backend systems and polished user interfaces.",
  ],
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "15+", label: "Technologies" },
    { value: "4+", label: "Key Modules Delivered" },
  ],
  whatIDo: [
    {
      title: "Enterprise Development",
      description:
        "Building scalable Java web apps for large-scale hospitality systems.",
      icon: "Server",
    },
    {
      title: "Backend Engineering",
      description:
        "RESTful APIs, database management, and SpringBoot services.",
      icon: "Database",
    },
    {
      title: "Frontend & Web",
      description:
        "Crafting responsive UIs with HTML, CSS, JavaScript, and React.",
      icon: "Monitor",
    },
  ],
};

export const skillsData = {
  categories: [
    {
      name: "Languages & Frameworks",
      skills: [
        { name: "Java", icon: "FaJava", color: "#f89820" },
        { name: "Spring / SpringBoot", icon: "SiSpring", color: "#6DB33F" },
        { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
        { name: "jQuery", icon: "SiJquery", color: "#0769AD" },
        { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
        { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
        { name: "Bootstrap", icon: "SiBootstrap", color: "#7952B3" },
        { name: "JSP / Servlet", icon: "", color: "#6366f1" },
        { name: "SQR", icon: "", color: "#6366f1" },
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
        { name: "Informix", icon: "", color: "#6366f1" },
      ],
    },
    {
      name: "Tools & IDEs",
      skills: [
        { name: "IntelliJ IDEA", icon: "SiIntellijidea", color: "#FE315D" },
        { name: "Eclipse IDE", icon: "SiEclipseide", color: "#2C2255" },
        { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
        { name: "DBeaver", icon: "", color: "#6366f1" },
        { name: "Dynatrace", icon: "", color: "#6366f1" },
        { name: "SecureCRT", icon: "", color: "#6366f1" },
        { name: "WinSCP", icon: "", color: "#6366f1" },
      ],
    },
    {
      name: "DevOps & Productivity",
      skills: [
        { name: "Git", icon: "SiGit", color: "#F05032" },
        { name: "GitHub", icon: "SiGithub", color: "#ffffff" },
        { name: "Jenkins", icon: "SiJenkins", color: "#D33833" },
        { name: "Jira", icon: "SiJira", color: "#0052CC" },
      ],
    },
    {
      name: "Learning",
      skills: [
        { name: "React", icon: "SiReact", color: "#61DAFB" },
        { name: "Python", icon: "SiPython", color: "#3776AB" },
        { name: "Android", icon: "SiAndroid", color: "#3DDC84" },
      ],
    },
  ],
  topSkills: [
    { name: "Java", proficiency: 92 },
    { name: "Spring / SpringBoot", proficiency: 85 },
    { name: "JavaScript / jQuery", proficiency: 82 },
    { name: "HTML & CSS", proficiency: 80 },
    { name: "MySQL / Informix", proficiency: 75 },
    { name: "React (learning)", proficiency: 45 },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "LightSpeed PMS",
    description:
      "Marriott International's enterprise Property Management System used by hotel front-desk associates worldwide. Handles reservations, guest billing, housekeeping, and reporting at scale. Proprietary enterprise software — no public repository.",
    techStack: ["Java", "SpringBoot", "JSP", "jQuery", "Informix", "SQR"],
    tags: ["Full Stack", "Enterprise"],
    category: "fullstack",
    liveUrl: null,
    githubUrl: null,
    color: "from-indigo-500 to-purple-600",
    borderColor: "hover:border-indigo-500/50",
    shadowColor: "hover:shadow-glow-indigo",
    featured: true,
  },
  {
    id: 2,
    title: "Malaysian E-Invoice Compliance",
    description:
      "Implemented Malaysia's government-mandated e-invoicing module within LightSpeed PMS — capturing Tax Identification Numbers (TIN), invoice data for guests, groups, companies, and properties, with full audit-trail support. Proprietary enterprise software — no public repository.",
    techStack: ["Java", "SpringBoot", "REST APIs", "XML", "Informix"],
    tags: ["Backend", "Compliance"],
    category: "backend",
    liveUrl: null,
    githubUrl: null,
    color: "from-emerald-500 to-teal-600",
    borderColor: "hover:border-emerald-500/50",
    shadowColor: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    featured: true,
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "This portfolio — a responsive single-page React app with dark/light theme, scroll-driven animations, EmailJS contact form, and Vercel deployment. All content is centralized in a single data file for easy updates.",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "EmailJS"],
    tags: ["Frontend"],
    category: "frontend",
    liveUrl: "https://ankur-portfolio-two.vercel.app",
    githubUrl: "https://github.com/ankurpashine27/Ankur_Portfolio",
    color: "from-violet-500 to-purple-600",
    borderColor: "hover:border-violet-500/50",
    shadowColor: "hover:shadow-glow-purple",
    featured: false,
  },
  {
    id: 4,
    title: "Disaster Maker",
    description:
      "A strategy/casual browser game built for Pirate Software Game Jam 16. You control a planet overrun by humans — deploy natural disasters to restore balance. Built with Godot and playable directly in the browser on itch.io.",
    techStack: ["Godot", "GDScript", "HTML5", "Game Jam"],
    tags: ["Game", "Game Jam"],
    category: "game",
    liveUrl: "https://anongamr.itch.io/disaster-maker",
    githubUrl: null,
    color: "from-cyan-500 to-blue-600",
    borderColor: "hover:border-cyan-500/50",
    shadowColor: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    featured: false,
  },
  {
    id: 5,
    title: "SocialApp",
    description:
      "A full-stack social networking application built during a .NET course. Features a C#/.NET Web API backend and an Angular + TypeScript frontend for managing user interactions.",
    techStack: [".NET", "C#", "Angular", "TypeScript", "REST APIs"],
    tags: ["Full Stack"],
    category: "fullstack",
    liveUrl: null,
    githubUrl: "https://github.com/ankurpashine27/SocialApp",
    color: "from-orange-500 to-rose-600",
    borderColor: "hover:border-orange-500/50",
    shadowColor: "hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    featured: false,
  },
  {
    id: 6,
    title: "Snake Game",
    description:
      "Classic Snake game implemented in pure Java using Swing/AWT for graphics and game-loop logic. A hands-on exercise in object-oriented design, event handling, and real-time rendering.",
    techStack: ["Java", "Swing", "AWT", "OOP"],
    tags: ["Game", "Java"],
    category: "game",
    liveUrl: null,
    githubUrl: "https://github.com/ankurpashine27/snakes_java",
    color: "from-yellow-500 to-orange-500",
    borderColor: "hover:border-yellow-500/50",
    shadowColor: "hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]",
    featured: false,
  },
];

export const experienceData = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Cognizant Technology Solutions",
    companyInitials: "CTS",
    companyColor: "bg-indigo-600",
    duration: "February 2023 – Present",
    location: "Kolkata, India",
    current: true,
    bullets: [
      "Led implementation of Malaysia E-Invoice Compliance — capturing TIN and invoice data for guests, groups, companies, and properties, ensuring government regulatory compliance.",
      "Drove Island Browser Migration, updating all front-end scripts and workflows from Internet Explorer to the secure Island Browser with full QA validation.",
      "Implemented Thailand Provincial Tax logic, integrating accurate tax calculations across all relevant hotel transactions.",
      "Mentored junior analysts on LightSpeed modules, code review practices, and debugging strategies.",
    ],
    tech: ["Java", "SpringBoot", "JSP", "jQuery", "Informix", "Git", "Jira"],
  },
  {
    id: 2,
    role: "Programming Analyst",
    company: "Cognizant Technology Solutions",
    companyInitials: "CTS",
    companyColor: "bg-purple-600",
    duration: "June 2021 – February 2023",
    location: "Kolkata, India",
    current: false,
    bullets: [
      "Migrated legacy Database Maintenance Screens (Special Services, Transaction Code, Billing Pattern) from SecureCRT C++ to the Java-based LightSpeed UI.",
      "Delivered continuous feature enhancements — enabling special service code integration with rate plans, admin user management, and improved reservation search by company name.",
      "Enforced extra credential validation for cash/cheque payment flows, improving transaction security.",
    ],
    tech: [
      "Java",
      "JSP",
      "JavaScript",
      "SQR",
      "Informix",
      "Eclipse",
      "Jenkins",
    ],
  },
  {
    id: 3,
    role: "Programmer Analyst Trainee",
    company: "Cognizant Technology Solutions",
    companyInitials: "CTS",
    companyColor: "bg-cyan-600",
    duration: "February 2021 – June 2021",
    location: "Kolkata, India",
    current: false,
    bullets: [
      "Onboarded onto the LightSpeed (Marriott PMS) project and gained deep familiarity with the Java/JSP/Informix tech stack.",
      "Assisted in bug fixes and minor feature additions across multiple LightSpeed modules.",
      "Participated in code reviews, daily standups, and sprint planning sessions within an Agile team.",
    ],
    tech: ["Java", "JSP", "HTML", "CSS", "Informix", "Git"],
  },
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    institution: "Bhilai Institute of Technology (BIT), Durg",
    location: "Durg, Chhattisgarh",
    duration: "2016 – 2020",
    grade: null,
    gradeColor: "",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Object-Oriented Programming",
      "Web Technologies",
      "Compiler Design",
    ],
    activities: [
      "Engineering graduate — CSVTU affiliated",
      "Java & web technologies focus",
    ],
  },
  {
    id: 2,
    degree: "12th Grade (HSC)",
    field: "Mathematics Stream",
    institution: "Krishna Public School, Nehru Nagar",
    location: "Bhilai, Chhattisgarh",
    duration: "2005 – 2016",
    grade: null, // [TODO] Add your percentage here, e.g. 'Percentage: 78%'
    gradeColor:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    activities: ["School academics"],
  },
];

export const certificatesData = [
  {
    id: 1,
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "2020",
    icon: "SiJava",
    iconColor: "#f89820",
    link: "https://drive.google.com/file/d/1k9HGQzPUy8rk-4hxzVTcF6MCe3SNEuYB/view",
  },
  {
    id: 2,
    title: "Python Training",
    issuer: "NPTEL",
    date: "2020",
    icon: "SiPython",
    iconColor: "#3776AB",
    link: "https://drive.google.com/file/d/1K7IqIIMF8H2N1Ejo8U1IH04PlQFlu303/view",
  },
  {
    id: 3,
    title: "C Training",
    issuer: "NPTEL",
    date: "2019",
    icon: "SiC",
    iconColor: "#A8B9CC",
    link: "#",
  },
  {
    id: 4,
    title: "IoT Challenge 2019",
    issuer: "NPTEL / IIT",
    date: "2019",
    icon: "SiRaspberrypi",
    iconColor: "#C51A4A",
    link: "#",
  },
  {
    id: 5,
    title: "Android & Java Developer Course",
    issuer: "Udemy — Paulo Dichone",
    date: "2021",
    icon: "SiAndroid",
    iconColor: "#3DDC84",
    link: "#",
  },
  {
    id: 6,
    title: "Front-End Web Development with React",
    issuer: "Coursera — Hong Kong UST",
    date: "2023",
    icon: "SiReact",
    iconColor: "#61DAFB",
    link: "https://www.coursera.org/account/accomplishments/certificate/W853PTVXMRCL",
  },
  {
    id: 7,
    title: "Front-End Web UI Frameworks: Bootstrap 4",
    issuer: "Coursera — Hong Kong UST",
    date: "2023",
    icon: "SiBootstrap",
    iconColor: "#7952B3",
    link: "https://www.coursera.org/account/accomplishments/certificate/XN54DZUZGM3Y",
  },
  {
    id: 8,
    title: "Initiating and Planning Projects",
    issuer: "Coursera — University of California",
    date: "2022",
    icon: "SiCoursera",
    iconColor: "#0056D2",
    link: "https://www.coursera.org/account/accomplishments/certificate/XGMMP7SRPAR9",
  },
  {
    id: 9,
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "Coursera — University of Michigan",
    date: "2021",
    icon: "SiPython",
    iconColor: "#3776AB",
    link: "https://www.coursera.org/account/accomplishments/certificate/TD98W3TP9YHD",
  },
  {
    id: 10,
    title: "Introduction to Game Development",
    issuer: "Coursera",
    date: "2024",
    icon: "SiUnity",
    iconColor: "#cccccc",
    link: "https://www.coursera.org/account/accomplishments/verify/4WUNKGYP88WP",
  },
];

// Testimonials removed — add real recommendations here when available
export const testimonialsData = [];
