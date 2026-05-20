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
        { name: "Java", icon: "SiJava", color: "#f89820" },
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
    title: "HotelOps Pro",
    description:
      "A full-featured hotel property management web application supporting reservations, billing, housekeeping workflows, and reporting for large hotel chains.",
    techStack: ["Java", "SpringBoot", "MySQL", "JSP", "REST APIs"],
    tags: ["Full Stack", "Enterprise"],
    category: "fullstack",
    liveUrl: "https://github.com/ankurpashine27",
    githubUrl: "https://github.com/ankurpashine27",
    color: "from-indigo-500 to-purple-600",
    borderColor: "hover:border-indigo-500/50",
    shadowColor: "hover:shadow-glow-indigo",
    featured: true,
  },
  {
    id: 2,
    title: "E-Invoice Gateway",
    description:
      "Backend service for generating and validating electronic invoices compliant with government tax mandates. Supports TIN capture, XML/JSON output, and audit trails.",
    techStack: ["Java", "SpringBoot", "REST APIs", "XML", "MySQL"],
    tags: ["Backend", "Compliance"],
    category: "backend",
    liveUrl: "https://github.com/ankurpashine27",
    githubUrl: "https://github.com/ankurpashine27",
    color: "from-emerald-500 to-teal-600",
    borderColor: "hover:border-emerald-500/50",
    shadowColor: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    featured: true,
  },
  {
    id: 3,
    title: "EmployeeHub",
    description:
      "Full-stack employee management dashboard with CRUD operations, role-based access control, and a React-powered frontend consuming a SpringBoot REST backend.",
    techStack: ["Java", "SpringBoot", "React", "MySQL", "Bootstrap"],
    tags: ["Full Stack"],
    category: "fullstack",
    liveUrl: "https://github.com/ankurpashine27",
    githubUrl: "https://github.com/ankurpashine27",
    color: "from-cyan-500 to-blue-600",
    borderColor: "hover:border-cyan-500/50",
    shadowColor: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    featured: false,
  },
  {
    id: 4,
    title: "Tax Calculator API",
    description:
      "RESTful microservice for calculating provincial and national tax obligations across multiple jurisdictions. Includes JUnit test coverage and Postman collection.",
    techStack: ["Java", "SpringBoot", "REST", "JUnit", "Postman"],
    tags: ["Backend"],
    category: "backend",
    liveUrl: "https://github.com/ankurpashine27",
    githubUrl: "https://github.com/ankurpashine27",
    color: "from-orange-500 to-rose-600",
    borderColor: "hover:border-orange-500/50",
    shadowColor: "hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    featured: false,
  },
  {
    id: 5,
    title: "SecureLogin",
    description:
      "JWT-based authentication and authorization service with role management, token refresh, and secure session handling for Java web applications.",
    techStack: ["Java", "SpringBoot", "JWT", "MySQL", "Spring Security"],
    tags: ["Backend"],
    category: "backend",
    liveUrl: "https://github.com/ankurpashine27",
    githubUrl: "https://github.com/ankurpashine27",
    color: "from-violet-500 to-purple-600",
    borderColor: "hover:border-violet-500/50",
    shadowColor: "hover:shadow-glow-purple",
    featured: false,
  },
  {
    id: 6,
    title: "TaskBoard",
    description:
      "A React-powered task management board with drag-and-drop support, Bootstrap UI, and a Java REST backend. Built to practice modern frontend development.",
    techStack: ["React", "JavaScript", "Bootstrap", "Java", "REST APIs"],
    tags: ["Frontend", "Full Stack"],
    category: "frontend",
    liveUrl: "https://github.com/ankurpashine27",
    githubUrl: "https://github.com/ankurpashine27",
    color: "from-pink-500 to-rose-600",
    borderColor: "hover:border-pink-500/50",
    shadowColor: "hover:shadow-glow-pink",
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
    link: "#", // [TODO] Add credential URL
  },
  {
    id: 2,
    title: "Python Training",
    issuer: "NPTEL",
    date: "2020",
    icon: "SiPython",
    iconColor: "#3776AB",
    link: "#",
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
    link: "#",
  },
  {
    id: 7,
    title: "Front-End Web UI Frameworks: Bootstrap 4",
    issuer: "Coursera — Hong Kong UST",
    date: "2023",
    icon: "SiBootstrap",
    iconColor: "#7952B3",
    link: "#",
  },
  {
    id: 8,
    title: "Initiating and Planning Projects",
    issuer: "Coursera — University of California",
    date: "2022",
    icon: "SiCoursera",
    iconColor: "#0056D2",
    link: "#",
  },
];

// Testimonials removed — add real recommendations here when available
export const testimonialsData = [];
