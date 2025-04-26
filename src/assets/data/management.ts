import { ourManagement as assetManagement } from '../../assets'; // Import from assets

interface TeamMember {
  name: string;
  designation: string;
  image: string;
}

interface Management {
  [key: string]: TeamMember;
}

export const management: Management = {
  m1: {
    name: 'Syed Ahmad Ullah Shakeel',
    designation: 'Procurement Manager',
    image: assetManagement.shakeel,
  },
  m2: {
    name: 'Mohammed Zia Ur Rahman Chisthi',
    designation: 'Project Manager',
    image: assetManagement.zia,
  },
  m3: {
    name: 'Mehboob Hakim Khan',
    designation: 'Project Manager',
    image: assetManagement.mehboob,
  },
  m4: {
    name: 'Hussam Abdullah Banajah',
    designation: 'Accounts Manager',
    image: assetManagement.husam,
  }
};