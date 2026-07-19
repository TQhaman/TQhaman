import type {
  CurrentWork,
  Experience,
  Project,
  Skill,
  SocialLink,
} from "@/types/portfolio";

export const aboutProfile = {
  name: "Qhamani Twaku",
  playerLabel: "Player 01",
  heading: "Building practical systems for real-world needs.",
  photo: {
    src: "/images/profile/qhamani-twaku-portrait.jpeg",
    alt: "Portrait of Qhamani Twaku standing in a furniture showroom.",
  },
  paragraphs: [
    "I am a final-year BCom Information Systems student at the University of Fort Hare. My studies combine business understanding with software development, databases, project management and emerging technologies.",
    "I am moving toward software development and digital product roles where I can build practical systems that solve business and community problems. I am especially interested in full-stack development, financial technology and business information systems.",
    "I am currently building this portfolio and developing QWS Digital, a web design business aimed at helping small businesses establish a stronger online presence. Alongside that work, I am strengthening my technical skills while tutoring, debate and rowing continue to develop my communication, discipline and collaborative problem-solving.",
  ],
  facts: [
    { label: "Base", value: "East London, South Africa" },
    { label: "Education", value: "Final-year BCom Information Systems" },
    { label: "University", value: "University of Fort Hare" },
    {
      label: "Interests",
      value: "Software Dev, FinTech and digital entrepreneurship",
    },
    { label: "Beyond code", value: "Tutoring, debate and rowing" },
  ],
  learning: [
    "TypeScript",
    "Next.js",
    "C#",
    "ASP.NET",
    "SQL Server",
    "Python",
    "API Intergration",
    "Git",
    "Software Testing",
  ],
} as const;

export const projects: Project[] = [
  {
    id: "agrilink",
    title: "AgriLink Digital Marketplace",
    checkpoint: 1,
    mediaUrl: null,
    altText:
      "AgriLink digital marketplace displaying agricultural products for buyers",
    overview:
      "A role-based digital marketplace that connects local farmers with students and community buyers.",
    problem:
      "Local farmers need a more accessible way to advertise and sell produce, while students and community buyers need a convenient way to find locally available food.",
    contribution:
      "I contributed to the development of the marketplace workflow, role-based navigation, shopping basket, checkout process, order tracking and database integration.",
    challenge:
      "One challenge was maintaining consistent data and navigation across the buyer, farmer, driver and administrator roles.",
    lesson:
      "I learned how a multi-role web application connects its user interface, session state, business logic and SQL Server database.",
    technologies: [
      "C#",
      "ASP.NET Web Forms",
      "SQL Server",
      "ADO.NET",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
    repositoryUrl: null,
    liveUrl: null,
  },
];

export const currentWork: CurrentWork[] = [
  {
    title: "QWS Digital",
    description:
      "A web design business focused on building professional websites for small businesses in East London.",
    status: "In progress",
    externalUrl: null,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A TypeScript and Next.js portfolio that presents my projects, skills, experience and current work through reusable components and structured data.",
    status: "In progress",
    externalUrl: null,
  },
];

export const skills: Skill[] = [
  {
    name: "HTML",
    category: "Frontend",
    rating: 4,
    level: "Intermediate",
    badge: "HTML5",
    evidence:
      "Used to structure my personal website, AgriLink interfaces and academic web projects.",
  },
  {
    name: "CSS",
    category: "Frontend",
    rating: 3,
    level: "Intermediate",
    badge: "CSS3",
    evidence:
      "Used to create responsive layouts, custom backgrounds, navigation elements and project interfaces.",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    rating: 2,
    level: "Developing",
    badge: "TypeScript",
    evidence:
      "Used to define typed portfolio content, restrict skill ratings and validate data passed into this website's components.",
  },
  {
    name: "React",
    category: "Frontend",
    rating: 2,
    level: "Developing",
    badge: "React",
    evidence:
      "Used to compose reusable sections and render project, skill, experience and contact records in this website.",
  },
  {
    name: "Next.js",
    category: "Frontend",
    rating: 2,
    level: "Developing",
    badge: "Next.js",
    evidence:
      "Used the App Router, Server Components, shared layouts, metadata and static rendering to build this portfolio.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    rating: 2,
    level: "Developing",
    badge: "Tailwind CSS",
    evidence:
      "Used utility classes for the portfolio's responsive structure, spacing and keyboard focus states.",
  },
  {
    name: "C#",
    category: "Backend",
    rating: 3,
    level: "Intermediate",
    badge: "C#",
    evidence:
      "Used in ASP.NET Web Forms applications including AgriLink and the campus bookstore project.",
  },
  {
    name: "SQL Server",
    category: "Databases",
    rating: 3,
    level: "Intermediate",
    badge: "SQL",
    evidence:
      "Used to design, query and update relational data for ASP.NET applications.",
  },
  {
    name: "Git and GitHub",
    category: "Developer Tools",
    rating: 3,
    level: "Developing",
    badge: "Git",
    evidence:
      "Used for repository creation, commits, branches, pulls and pushing project changes to GitHub, including version control during the Winter School prototype.",
  },
  {
    name: "Problem Solving",
    category: "Professional Traits",
    rating: 4,
    level: "Strong",
    badge: "Problem Solving",
    evidence:
      "Applied when debugging application logic, database connections and project workflow issues.",
  },
];

export const experience: Experience[] = [
  {
    title: "BCom Information Systems",
    organisation: "University of Fort Hare",
    dateRange: "2023 – Present",
    summary:
      "Studying information systems, software development, databases, project management and emerging technologies.",
    outcome:
      "Developing practical experience in analysing, designing and building business information systems.",
    status: "In progress",
  },
  {
    title: "Databases Tutor",
    organisation: "University of Fort Hare",
    dateRange: "2026 First Semester",
    summary:
      "Supporting students with database concepts, revision activities and academic problem solving.",
    outcome:
      "Strengthened my ability to explain technical concepts clearly and guide students through difficult material.",
    status: "In progress",
  },
  {
    title: "UCT Cortex Hub Fintech Lab Winter School",
    organisation: "UCT Financial Innovation Hub and Cortex Hub",
    dateRange: "June - July 2026",
    summary:
      "Used Python, FastAPI, React with Expo, the UCT FinHub Open Banking sandbox API and Git while developing a tutorial mobile app and an Open Finance prototype.",
    outcome:
      "Took primary responsibility for the business plan, presentation slides, architecture and prototype development. The app failed before the final presentation, reinforcing the importance of integration testing, reliability and shared team ownership.",
    status: "Completed",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "Email",
    label: "Email me",
    url: "mailto:twakuhlumelo6@gmail.com",
    accessibleLabel: "Send me an email",
  },
  {
    platform: "GitHub",
    label: "View my GitHub",
    url: "https://github.com/TQhaman",
    accessibleLabel: "Visit my GitHub profile",
  },
  {
    platform: "LinkedIn",
    label: "Connect on LinkedIn",
    url: "https://www.linkedin.com/in/qhamani-twaku",
    accessibleLabel: "Visit my LinkedIn profile",
  },
];
