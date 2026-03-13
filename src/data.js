// ============================================================
//  PORTFOLIO DATA — Edit this file to update all site content
// ============================================================

export const personalInfo = {
  name: "AS SIDDIQI POHAN",
  roles: [
    "Fullstack Developer",
    "Android Developer",
    "Machine Learning Enthusiast",
  ],
  tagline:
    "Informatics Engineering Student (Semester 6) focused on building scalable web & mobile solutions and integrating intelligent systems.",
  goal: "Actively seeking a Paid Internship in development to contribute and grow passion-driven projects.",
  resumeLink: "#",
  social: {
    linkedin:
      "https://www.linkedin.com/in/as-siddiqi-pohan-394b31312?originalSubdomain=id",
    github: "https://github.com/Asddqphn1",
    instagram: "https://www.instagram.com/diqqipohan?igsh=bHk0OGducnR1dHUx",
    email: "pdiqqi@gmail.com",
  },
};

export const projects = [
  {
    id: 1,
    title: "Monitoring Persalinan",
    type: "Mobile Application (Android)",
    description:
      "An application designed for medical professionals to streamline labor monitoring with precision and ease.",
    features: [
      "Automatic Partograph generation based on real-time data input",
      "Intuitive UI tailored for clinical professionals",
    ],
    techStack: ["Flutter", "React Native", "Android SDK"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=id.strata.partograf",
      github: "https://github.com/Asddqphn1/app_partograf.git",
    },
    status: "completed",
  },
  {
    id: 2,
    title: "AR Matematika",
    type: "Mobile Application (Android / AR)",
    description:
      "An Augmented Reality educational tool that makes learning mathematics immersive and engaging.",
    features: [
      "AI model integration to generate math problems from database templates",
      "Dual-Language support (Indonesian & English)",
      "Real-world AR overlay for interactive problem solving",
    ],
    techStack: ["Flutter", "AI Integration"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.shapes.arapp",
      github: "https://github.com/Asddqphn1/fun-ar-math.git",
    },
    status: "wip",
  },
  {
    id: 3,
    title: "Bird Species Classification",
    type: "Machine Learning / Data Science",
    description:
      "A classification system for identifying Lovebird and Parkit bird species from audio recordings.",
    features: [
      "MFCC (Mel-frequency cepstral coefficients) for audio feature extraction",
      "KNN (K-Nearest Neighbors) algorithm for species classification",
      "High-accuracy species identification pipeline",
    ],
    techStack: ["Python", "MFCC", "KNN", "Scikit-learn"],
    links: {
      github: null, // Repository not publicly available
    },
    status: "completed",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    icon: "Code2",
    items: ["JavaScript", "Python", "Java", "PHP"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "Layers",
    items: [
      "React",
      "FastAPI",
      "Laravel",
      "Express",
      "Hono",
      "Tailwind CSS",
      "SQLModel",
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    items: ["PostgreSQL", "Oracle", "Firebase"],
  },
  {
    category: "Tools & DevOps",
    icon: "Terminal",
    items: ["Docker", "Git"],
  },
  {
    category: "Domains",
    icon: "Cpu",
    items: ["Mobile Development (Android)", "Web Development", "Machine Learning"],
  },
];

export const experience = [
  {
    id: 1,
    title: "BFF + Redis + Docker Re-Architecture",
    role: "Backend Engineer",
    period: "2024",
    type: "Technical Project",
    description:
      "Led the re-architecture of a backend system adopting the Backend For Frontend (BFF) pattern to optimize API responses per client type. Integrated Redis as a high-performance caching layer to drastically reduce database load and improve response times. The entire infrastructure was containerized using Docker, ensuring consistent, reproducible, and scalable deployment across environments.",
    tags: ["BFF Pattern", "Redis", "Docker", "Architecture", "Caching"],
  },
  {
    id: 2,
    title: "RDO Labsquad",
    role: "Leader / Chairperson",
    period: "2023 – Present",
    type: "Leadership & Organization",
    description:
      "Serving as the Leader and Chairperson of RDO Labsquad, an academic software lab organization. Responsible for driving technical initiatives, mentoring junior members, and organizing collaborative engineering projects that bridge academic learning with real-world development.",
    tags: ["Leadership", "Mentoring", "Team Management", "Community"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
