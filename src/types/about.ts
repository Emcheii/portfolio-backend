export interface AboutProfile {
  name: string;
  role: string;
  location: string;
  image: string;
  imageAlt: string;
  introduction: string;
  resumeUrl: string;
}

export interface WhatIDoItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: "primary" | "secondary" | "tertiary";
}

export interface AboutManifest {
  currentRole: string;
  focus: string;
  availability: string;
}

export interface TerminalInfo {
  identity: string;
  program: string;
  targetRoles: string[];
  location: string;
  command: string;
  environment: string;
  node: string;
}

export interface AboutContact {
  email: string;
  buttonLabel: string;
}

export interface AboutData {
  profile: AboutProfile;
  whatIDo: {
    label: string;
    countLabel: string;
    items: WhatIDoItem[];
  };
  manifest: AboutManifest;
  terminal: TerminalInfo;
  contact: AboutContact;
}