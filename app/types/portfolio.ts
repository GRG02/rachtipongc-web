export interface Profile {
  name: string;
  nameTh: string;
  title: string;
  titleTh?: string;
  subtitle: string;
  subtitleTh?: string;
  bio: string;
  bioTh?: string;
  location: string;
  locationTh?: string;
  email: string;
  phone: string;
  avatar: string;
  awardImage?: string;
  resumeUrl: string;
  taProfileUrl: string;
  linktreeUrl: string;
  githubUrl?: string;
  linkedinUrl?: string;
  education: {
    university: string;
    universityTh: string;
    faculty: string;
    facultyTh: string;
    major: string;
    majorTh: string;
    degree: string;
    degreeTh?: string;
    gpa: string;
    honors: string;
    honorsTh?: string;
    period: string;
  };
  stats: {
    label: string;
    labelTh?: string;
    value: string;
    description: string;
    descriptionTh?: string;
  }[];
}

export interface SkillCategory {
  category: string;
  categoryTh: string;
  description: string;
  descriptionTh?: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface Project {
  id: string;
  title: string;
  titleTh?: string;
  icon?: string;
  category: "Web App" | "Mobile App" | "Enterprise & Cloud" | "AI & Tools";
  excerpt: string;
  excerptTh?: string;
  description: string;
  descriptionTh?: string;
  problemStatement?: string;
  problemStatementTh?: string;
  solution?: string;
  solutionTh?: string;
  keyFeatures: string[];
  keyFeaturesTh?: string[];
  techStack: string[];
  role: string;
  roleTh?: string;
  duration: string;
  durationTh?: string;
  coverImage: string;
  galleryImages?: string[];
  githubUrl?: string;
  liveUrl?: string;
  virusTotalUrl?: string;
  featured?: boolean;
  license?: string;
  licenseTh?: string;
  metrics?: { label: string; labelTh?: string; value: string; valueTh?: string }[];
  galleryItems?: {
    image: string;
    title: string;
    titleTh: string;
    tag: string;
    tagTh: string;
    description: string;
    descriptionTh: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  roleTh?: string;
  organization: string;
  organizationTh?: string;
  period: string;
  type: "teaching" | "work" | "project";
  description: string;
  descriptionTh?: string;
  highlights: string[];
  highlightsTh?: string[];
  partnerInstitutes?: string[];
  corporateClients?: string[];
  toolsUsed: string[];
}

export interface Certificate {
  id: string;
  title: string;
  titleTh?: string;
  issuer: string;
  issuerTh?: string;
  issueDate: string;
  issueDateTh?: string;
  category: "MOS" | "ITPEC" | "ICDL" | "Networking" | "Competition" | "Proficiency" | "Language";
  image: string;
  scoreOrAward?: string;
  scoreOrAwardTh?: string;
  description: string;
  descriptionTh?: string;
  credentialUrl?: string;
}
