// src/data/jobs.ts
export interface Job {
  id: number;
  role: string;
  experience: string;
  field: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  status: 'Urgent' | 'Hiring';
}

export const jobs: Job[] = [
  {
    id: 1,
    role: 'Civil Construction Manager',
    experience: '08 to 10 Years',
    field: 'Industrial and Infrastructure',
    type: 'Full-time',
    status: 'Urgent',
  },
  {
    id: 2,
    role: 'Civil QC Engineer',
    experience: '03 to 05 Years',
    field: 'Industrial and Infrastructure',
    type: 'Full-time',
    status: 'Urgent',
  },
];