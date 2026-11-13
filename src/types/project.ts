export type ProjectStatus = "active" | "completed";

export interface ProjectFilter {
  id: string;
  label: string;
}

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  label?: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface FlowStep {
  id: string;
  title: string;
  description: string;
}

export interface EngineeringChallenge {
  id: string;
  title: string;
  category: string;
  description: string;
}

export interface TechnologyGroup {
  id: string;
  title: string;
  technologies: string[];
}

export interface CodeSample {
  language: string;
  filename?: string;
  code: string;
}

export interface ProjectSpecification {
  role: string;
  version?: string;
  overview: string;

  images: ProjectImage[];
  metrics: ProjectMetric[];
  flowSteps: FlowStep[];
  challenges: EngineeringChallenge[];

  codeSample?: CodeSample;
  technologyGroups: TechnologyGroup[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;

  // Single image for the project card
  image: string;
  imageAlt: string;

  category: string;
  status: ProjectStatus;
  date: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  details: string;

  // Multiple images and technical details for the modal
  specification?: ProjectSpecification;
}

export interface ProjectsData {
  title: string;
  subtitle: string;
  filters: ProjectFilter[];
  projects: ProjectItem[];
}