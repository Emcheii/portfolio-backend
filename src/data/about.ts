import type { AboutData } from "../types/about";

import profileImage from "../assets/images/profile.png";

export const aboutData: AboutData = {
  profile: {
    name: "Emcheii",
    role: "Aspiring Backend Developer & CS Student",
    location: "Philippines",
    image: profileImage,
    imageAlt: "Emcheii profile photo",
    introduction:
      "I'm a BS Computer Science student focused on backend development, software engineering, and machine learning.",
    resumeUrl: "/resume.pdf",
  },

  whatIDo: {
    label: "What I Do",
    countLabel: "4 core areas",
    items: [
      {
        id: "backend",
        title: "Backend Development",
        description: "Server-side systems, application logic, and RESTful APIs.",
        icon: "dns",
        accent: "primary",
      },
      {
        id: "database",
        title: "Database Management",
        description: "Relational database design, SQL, and data management.",
        icon: "database",
        accent: "secondary",
      },
      {
        id: "api",
        title: "API Development",
        description: "Building and integrating RESTful APIs.",
        icon: "api",
        accent: "tertiary",
      },
      {
        id: "machine-learning",
        title: "Machine Learning",
        description: "Exploring predictive modeling and recommendation systems.",
        icon: "psychology",
        accent: "primary",
      },
    ],
  },

  manifest: {
    currentRole: "Computer Science Student",
    focus: "Backend Development & Machine Learning",
    availability: "Update availability",
  },

  terminal: {
    identity: "Emcheii",
    program: "B.S. Computer Science",
    targetRoles: ["Junior Backend Developer", "Software Intern"],
    location: "Philippines",
    command: "emcheii --status --inspect",
    environment: "env -- runtime-stats",
    node: "local",
  },

  contact: {
    email: "your-email@example.com",
    buttonLabel: "Contact Me",
  },
};