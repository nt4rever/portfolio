import { Project } from "./types";

const PROJECTS: Project[] = [
  {
    slug: "class-at-city",
    name: "Class@City",
    tagline:
      "Paperless, cloud-based DX platform for real estate management in Japan.",
    description:
      "A digital transformation solution for the real estate sector, managing residents, apartments, management companies and contracts with a focus on paperless, cloud-based systems for a Japanese client.",
    highlights: [
      "Investigated the current system's business logic, analyzed new requirements, supported cost estimation and suggested efficient solutions.",
      "Implemented APIs for data synchronization and trust-based authentication across systems within the client ecosystem.",
      "Improved system performance by optimizing SQL and resolved old issues from previous development phases.",
    ],
    tags: ["Laravel", "VueJS", "PostgreSQL", "Redis", "AWS", "DDD"],
    category: ["web"],
    kind: "client",
    period: { start: "2024-07" },
    featured: true,
  },
  {
    slug: "jyurep",
    name: "JYUREP",
    tagline:
      "Web-based system for issuing real estate permits with a streamlined approval workflow.",
    description:
      "A web-based system that issues real estate-related permits, utilizing DX solutions to streamline the approval workflow.",
    highlights: [
      "Managed PDF document processing for permit documents.",
      "Integrated document stamping seamlessly into the existing workflow for enhanced efficiency and compliance.",
    ],
    tags: ["Laravel", "VueJS", "PostgreSQL", "Redis", "AWS", "DDD"],
    category: ["web"],
    kind: "client",
    period: { start: "2024-03", end: "2024-05" },
    featured: false,
  },
  {
    slug: "snappy",
    name: "SNAPPY",
    tagline:
      "Smartphone app and web system for meter reading, powered by computer vision.",
    description:
      "A smartphone app and web system for efficient meter reading, integrated with ML/DL to enhance reading accuracy, with aggregation and management of meter reading results on a centralized web interface.",
    highlights: [
      "Integrated a YOLOv5 model to improve meter reading accuracy.",
      "Implemented operational logging and multi-factor authentication (MFA) to enhance system security.",
      "Automated the detection of abnormal meter reading values and set up real-time notifications to alert users.",
    ],
    tags: [
      "Laravel",
      "React",
      "Flutter",
      "PostgreSQL",
      "Redis",
      "YOLOv5",
      "AWS",
      "Firebase",
    ],
    category: ["web", "mobile", "ai"],
    kind: "client",
    period: { start: "2023-07", end: "2024-06" },
    featured: true,
  },
  {
    slug: "clocky",
    name: "CLOCKY",
    tagline: "Cross-platform HRM system with real-time audio calls.",
    description:
      "A cross-platform human resource management system for a Japanese client, spanning web and mobile applications.",
    highlights: [
      "Implemented real-time audio call integration between web and mobile applications using WebRTC.",
      "Aggregated data and generated monthly reports in Excel, CSV and PDF formats to meet client demand.",
    ],
    tags: [
      "Laravel",
      "NodeJS",
      "React",
      "Flutter",
      "WebRTC",
      "WebSocket",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Firebase",
    ],
    category: ["web", "mobile"],
    kind: "client",
    period: { start: "2023-10", end: "2024-02" },
    featured: false,
  },
  {
    slug: "rts",
    name: "Road Traffic Safety (RTS)",
    tagline:
      "Citizen reporting platform with AI that classifies road damage severity.",
    description:
      "A system to assist in the evaluation and repair of road surface problems. Residents report damage, an AI model classifies its severity, and verified reports are aggregated and forwarded to the relevant authorities for resolution.",
    highlights: [
      "Built a web application that allows residents to send feedback with area, images, location, title and description.",
      "Researched, built and trained an AI-based system (ResNet-50) that automatically classifies the severity level of reported damage.",
      "Aggregated verified reports and forwarded them to the relevant authorities for resolution.",
    ],
    tags: ["NestJS", "NextJS", "MongoDB", "Redis", "ResNet-50", "FastAPI"],
    category: ["web", "ai"],
    kind: "personal",
    period: { start: "2023-08", end: "2024-01" },
    featured: true,
  },
  {
    slug: "napa-tool",
    name: "NAPA Tool",
    tagline: "Internal tool for NAPA Global members.",
    description:
      "An internal web and mobile tool for NAPA Global members, built from the ground up and migrated from a legacy system.",
    highlights: [
      "Built both the backend and frontend project structure.",
      "Recommended useful libraries for optimal development.",
      "Migrated data from a legacy system.",
    ],
    tags: ["NestJS", "React", "React Native", "PostgreSQL"],
    category: ["web", "mobile"],
    kind: "internal",
    period: { start: "2023-04", end: "2023-06" },
    featured: false,
  },
  {
    slug: "cv-builder",
    name: "CV Builder",
    tagline: "Generate professional-looking CVs with minimal effort.",
    description:
      "A CV builder application that enables users to easily input their information and generate professional-looking CVs with minimal effort.",
    highlights: [
      "Designed and built a REST API based on NestJS and MongoDB.",
      "Handled page editing and CV design in React.",
      "Rendered CVs to PDF with Puppeteer.",
    ],
    tags: ["NestJS", "React", "MongoDB", "Puppeteer"],
    category: ["web"],
    kind: "internal",
    period: { start: "2023-01", end: "2023-03" },
    featured: false,
    img: "/images/projects/cv-builder.png",
  },
  {
    slug: "xbus",
    name: "XBus",
    tagline: "Website and Android app that helps citizens locate buses.",
    description:
      "A website and Android application that helps citizens easily locate buses, with the goal of boosting public transportation usage by offering a user-friendly, accessible platform.",
    highlights: [
      "Built the web client with React and the Android app with Kotlin.",
      "Built the backend with NestJS, MongoDB and Firebase.",
      "Displayed bus locations on OpenStreetMap.",
    ],
    tags: ["React", "NestJS", "Kotlin", "MongoDB", "Firebase", "OpenStreetMap"],
    category: ["web", "mobile"],
    kind: "personal",
    period: { start: "2022-10", end: "2023-01" },
    featured: true,
    img: "/images/projects/xbus.png",
  },
];

export { PROJECTS };
