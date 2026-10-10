export type Period = { start: string; end?: string };

export type ProjectCategory = "web" | "mobile" | "ai";

export type ProjectKind = "client" | "personal" | "internal";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  category: ProjectCategory[];
  kind: ProjectKind;
  period: Period;
  featured: boolean;
  img?: string;
  github?: string;
  url?: string;
  launch_video?: string;
}

export interface Role {
  title: string;
  location: string;
  period: Period;
  highlights: string[];
  projects: string[];
}

export interface Experience {
  company: string;
  short: string;
  logo?: string;
  url?: string;
  roles: Role[];
}

export interface Education {
  degree: string;
  school: string;
  major: string;
  gpa: string;
  period: Period;
}

export interface Certificate {
  name: string;
  issuer: string;
  detail?: string;
  period: Period;
  credential?: string;
}
