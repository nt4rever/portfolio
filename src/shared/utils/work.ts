import { Certificate, Education, Experience } from "./types";

const EXPERIENCES: Experience[] = [
  {
    company: "NAPA Global",
    short: "NAPA",
    roles: [
      {
        title: "Software Engineer",
        location: "Da Nang City, Vietnam",
        period: { start: "2023-07" },
        highlights: [
          "Collaborated with cross-functional teams to analyze and clarify requirements through Q&A sessions, ensuring alignment with project goals. Researched, proposed and implemented suitable solutions to meet client business needs.",
          "Developed APIs for new features, ensuring scalability, readability and ease of extension in the future. Maintained and optimized the performance of existing systems.",
          "Provided technical support to team members through pair programming, debugging and knowledge sharing, accelerating the resolution of project issues and enhancing team collaboration.",
        ],
        projects: ["class-at-city", "jyurep", "snappy", "clocky"],
      },
      {
        title: "Software Engineer Intern",
        location: "Da Nang City, Vietnam",
        period: { start: "2022-10", end: "2023-06" },
        highlights: [
          "Developed a CV Builder project using React for the front end and NestJS for the back end, focusing on creating a seamless user experience.",
          "Enhanced skills in JavaScript, TypeScript, NestJS, React, MongoDB, Puppeteer, Git, Docker and the Software Development Life Cycle (SDLC).",
          "Collaborated with senior developers to apply best practices in coding, optimize project structure and enhance debugging processes.",
        ],
        projects: ["napa-tool", "cv-builder"],
      },
    ],
  },
];

const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Science",
    school:
      "Vietnam - Korea University of Information and Communication Technology",
    major: "Computer Science",
    gpa: "3.79/4.0",
    period: { start: "2019-08", end: "2024-05" },
  },
];

const CERTIFICATES: Certificate[] = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services Training and Certification",
    period: { start: "2024-11", end: "2027-11" },
  },
  {
    name: "The Test of English for International Communication (TOEIC)",
    issuer: "IIG Vietnam",
    detail: "Score: 875 (Listening & Reading)",
    period: { start: "2023-06", end: "2025-06" },
  },
];

const TECHNOLOGIES = [
  {
    group: "Languages",
    items: ["PHP", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    group: "Technologies",
    items: [
      "Laravel",
      "NodeJS",
      "NestJS",
      "React",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Git",
      "Docker",
      "Linux",
      "ML/DL",
      "AWS",
    ],
  },
];

export { EXPERIENCES, EDUCATION, CERTIFICATES, TECHNOLOGIES };
