
// src/types/project.ts
export interface Project {
  id: number;
  slug: string;
  projectname: string;
  client: string;
  location: string;
  status: string;
  image?: string; // Optional for FilterComponent/ListViewComponent
  images: any[]; // Use string[] if images are URLs
  description?: string; // Optional for ProjectCardComponent
  monthyear?: string;
  duration?: string;
  povalue?: string;
  totalmanhour?: string;
  division: string;
}
