export type SkillRating = 1 | 2 | 3 | 4 | 5;

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Developer Tools"
  | "Professional Traits";

export type CurrentWorkStatus = "In progress" | "On hold";

export type ExperienceStatus = "Completed" | "In progress";

export type SocialPlatform =
  | "Email"
  | "GitHub"
  | "LinkedIn"
  | "Instagram"
  | "Website";

export interface Project {
  id: string;
  title: string;
  checkpoint: number;
  mediaUrl: string | null;
  altText: string;
  overview: string;
  problem: string;
  contribution: string;
  challenge: string;
  lesson: string;
  technologies: string[];
  repositoryUrl: string | null;
  liveUrl: string | null;
}

export interface CurrentWork {
  title: string;
  description: string;
  status: CurrentWorkStatus;
  externalUrl: string | null;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  rating: SkillRating;
  level: string;
  badge: string;
  evidence?: string;
}

export interface Experience {
  title: string;
  organisation: string;
  dateRange: string;
  summary: string;
  outcome: string;
  status: ExperienceStatus;
}

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string | null;
  accessibleLabel: string;
}
