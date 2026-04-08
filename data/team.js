export const teamMembers = [
  {
    slug: "bright-adu-kwarteng-snr",
    name: "Bright Adu Kwarteng Snr",
    role: "Technical Lead",
    location: "Ghana",
    linkedin: "https://www.linkedin.com/in/bright-adu-kwarteng-snr/",
    image: "/images/profiles/bright.webp",
    bio: "Bright leads the technical arm at LetsCode with a sharp focus on system reliability, team coordination, and delivering production-ready software. His background in operations gives him a unique edge in managing cross-functional workflows and keeping projects on track from architecture to deployment.",
    expertise: [
      "Project Management",
      "System Architecture",
      "DevOps",
      "Team Leadership",
      "Technical Documentation"
    ],
    stack: ["Node.js", "Python", "Docker", "Git", "Linux"],
    projects: [
      {
        title: "Internal Ops Dashboard",
        description: "A centralized dashboard for tracking team velocity, deployment status, and sprint progress across all active projects."
      },
      {
        title: "Service Desk Automation",
        description: "Built an automated triage system that routes support tickets to the right engineer based on issue classification."
      },
      {
        title: "CI/CD Pipeline Setup",
        description: "Designed and deployed continuous integration pipelines for three client projects, reducing deployment errors by 60%."
      }
    ]
  },
  {
    slug: "owusu-kenneth",
    name: "Owusu Kenneth",
    role: "Backend Developer",
    location: "Ghana",
    linkedin: "https://www.linkedin.com/in/okenneth/",
    image: "/images/profiles/kenneth.webp",
    bio: "Kenneth is a methodical backend developer who brings scientific rigor to his code. With experience in data-heavy environments, he excels at building APIs, database-driven systems, and server-side logic that performs under pressure. He writes code the way he approaches problems — carefully, thoroughly, and with evidence.",
    expertise: [
      "REST API Design",
      "Database Management",
      "Data Processing",
      "Server Administration",
      "Technical Writing"
    ],
    stack: ["Python", "Node.js", "PostgreSQL", "MongoDB", "Express.js"],
    projects: [
      {
        title: "Data Processing API",
        description: "Built a RESTful API that processes and transforms raw datasets into structured reports for research teams."
      },
      {
        title: "Inventory Management System",
        description: "A full CRUD backend for managing lab equipment and supplies with role-based access and audit logging."
      },
      {
        title: "Automated Reporting Service",
        description: "Developed a scheduled task service that generates weekly compliance reports and delivers them via email."
      }
    ]
  },
  {
    slug: "abhisumat-kundu",
    name: "Abhisumat Kundu",
    role: "Full-Stack Developer",
    location: "Howrah, India",
    linkedin: "https://www.linkedin.com/in/abhisumat-kundu/",
    image: "/images/profiles/abhisumat.webp",
    bio: "Abhisumat is a community-driven full-stack developer with a passion for building tools that help people learn and grow. Active in the Google Developer Groups (GDG) ecosystem, he combines strong frontend skills with a growing backend expertise. He believes the best software comes from teams that learn together.",
    expertise: [
      "React & Next.js",
      "Node.js APIs",
      "UI/UX Implementation",
      "Community Building",
      "Technical Mentoring"
    ],
    stack: ["React", "Next.js", "JavaScript", "Firebase", "Tailwind CSS"],
    projects: [
      {
        title: "Campus Dev Portal",
        description: "A web platform connecting student developers through events, resources, and collaborative project boards."
      },
      {
        title: "Student Utility Dashboard",
        description: "A productivity tool for students featuring GPA calculators, schedule management, and academic progress tracking."
      },
      {
        title: "GDG Event Manager",
        description: "An internal tool for organizing developer meetups, tracking RSVPs, and managing session speakers."
      }
    ]
  },
  {
    slug: "martin-okantey",
    name: "Martin Okantey",
    role: "Creative Developer",
    location: "Ghana",
    linkedin: "https://www.linkedin.com/in/martin-okantey-jairus-nii-okaitey-947321398/",
    image: "/images/profiles/martin.webp",
    bio: "Martin sits at the crossroads of design and code. As a creative developer with experience at OGames Studio, he brings interactive experiences to life — from game mechanics to polished web interfaces. He thinks in prototypes and ships with intention.",
    expertise: [
      "Interactive Design",
      "Game Development",
      "Creative Prototyping",
      "Motion Design",
      "Frontend Development"
    ],
    stack: ["JavaScript", "Three.js", "Unity", "Figma", "GSAP"],
    projects: [
      {
        title: "Interactive Game Prototype",
        description: "Designed and developed a browser-based game concept with real-time physics and responsive controls."
      },
      {
        title: "Brand Experience Website",
        description: "Built an immersive landing page with scroll-triggered animations and 3D elements for a creative agency."
      },
      {
        title: "Motion Design System",
        description: "Created a reusable animation library for consistent micro-interactions across multiple web projects."
      }
    ]
  },
  {
    slug: "felix-owusu",
    name: "Felix Owusu",
    role: "Frontend Developer",
    location: "KNUST, Kumasi",
    linkedin: "https://www.linkedin.com/in/felix-owusu-15053a379/",
    image: "/images/profiles/felix.webp",
    bio: "Felix is a frontend developer with a growing edge in systems thinking. Studying at KNUST, he builds clean, responsive interfaces with modern frameworks while constantly pushing to understand the full picture — from UI components to deployment workflows. He writes code that people actually want to use.",
    expertise: [
      "React & Next.js",
      "Responsive Design",
      "Component Architecture",
      "JavaScript/TypeScript",
      "UI Development"
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Git"],
    projects: [
      {
        title: "LetsCode Company Website",
        description: "Architected and built this very website — a Next.js application with individual developer portfolios powered by a shared data layer."
      },
      {
        title: "Responsive Component Library",
        description: "A modular set of reusable UI components with dark theme support, built for consistency across projects."
      },
      {
        title: "Client Landing Page",
        description: "Designed and developed a high-conversion landing page for a local business, achieving full mobile responsiveness."
      }
    ]
  }
];

export const teamBySlug = Object.fromEntries(
  teamMembers.map((member) => [member.slug, member])
);
