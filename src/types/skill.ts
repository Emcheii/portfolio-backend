import type { LucideIcon } from "lucide-react";

export interface SkillItem {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  icon: LucideIcon;
  accent: "primary" | "secondary" | "tertiary";
  skills: SkillItem[];
}

export interface SkillsData {
  title: string;
  categories: SkillCategory[];
}