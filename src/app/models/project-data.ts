export interface ProjectData {
  id: number;
  title: string;
  primary_language: string;
  secondary_languages: string[];
  other: string[];
  short_description: string;
  description: string[];
  image: string;
  link: string;
  repo: string;
  repo_available: boolean;
};
