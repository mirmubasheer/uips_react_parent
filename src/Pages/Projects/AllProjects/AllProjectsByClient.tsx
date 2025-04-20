
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ClientTabs from './Components/ClientTabs';
import ProjectCardItem from './Components/ProjectCardItem';
import PaginationControls from '../../../components/Pagination/PaginationControls';

// Types
interface Project {
  id: number;
  slug: string;
  projectname: string;
  client: string;
  location: string;
  status: string;
  images: any[];
  description: string;
  monthyear: string;
  duration: string;
  povalue: string;
  totalmanhour: string;
  division: string;
}

interface Division {
  name: string;
  description: string;
  clients: string[];
  img: string;
  projects: Project[];
}

interface AllProjectsByClientProps {
  division?: string; // Optional division prop
}

// List of division slugs
const divisions = [
  'civil',
  'electrical',
  'shutdowns',
  'instrumentation',
  'power',
  // 'it',
  'mechanical',
];

// Provided client names
const clientNames = [
  'aramco',
  'sabic',
  'sec',
  'maaden',
  'marafiq',
  'satorp',
  'petrorabigh',
  'farabi',
  'tasnee',
  'sipchem',
  'sdc',
  'worley',
  'addar',
  'neom',
  'swcc',
  'royal',
  'eaton',
  'l&t',
  'ge',
  'saipem',
  'imi',
  'yasref',
  'areva',
  'abb',
];

// Styled components
const AllProjectsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 2),
  background: 'linear-gradient(to bottom, #0F1A33, #1E2A44)',
  minHeight: '100vh',
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
    zIndex: 0,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 1),
  },
}));

const ProjectsList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  position: 'relative',
  zIndex: 1,
  width: '100%',
  boxSizing: 'border-box',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2),
  },
}));

const AllProjectsByClient: React.FC<AllProjectsByClientProps> = ({ division }) => {
  const navigate = useNavigate();
  const [clients] = useState<string[]>(clientNames);
  const [selectedClient, setSelectedClient] = useState<string | null>(clientNames[0] || null);
  const [projects, setProjects] = useState<(Project & { divisionSlug: string })[]>([]);
  const [page, setPage] = useState(1);
  const projectsPerPage = 6;

  // Load projects, optionally filtered by division
  useEffect(() => {
    const loadData = async () => {
      const allProjects: (Project & { divisionSlug: string })[] = [];
      const targetDivisions = division ? [division] : divisions;

      for (const divisionSlug of targetDivisions) {
        try {
          const module = await import(`../../../assets/data/${divisionSlug}.ts`);
          const divisionData = module.default as Division;
          divisionData.projects.forEach((project) => {
            allProjects.push({ ...project, divisionSlug });
          });
        } catch (error) {
          console.error(`Failed to load ${divisionSlug}.ts:`, error);
        }
      }

      setProjects(allProjects);
    };

    loadData();
  }, [division]);

  // Filter projects by selected client (case-insensitive keyword match)
  const filteredProjects = selectedClient
    ? projects.filter((project) => {
        const clientLower = project.client.toLowerCase();
        switch (selectedClient.toLowerCase()) {
          case 'aramco':
            return clientLower.includes('aramco');
          case 'sabic':
            return (
              clientLower.includes('sabic') ||
              clientLower.includes('sadaf') ||
              clientLower.includes('saudi kayan') ||
              clientLower.includes('united') ||
              clientLower.includes('yanpet') ||
              clientLower.includes('ibn-sina') ||
              clientLower.includes('baryoni') ||
              clientLower.includes('safco') ||
              clientLower.includes('gas')
            );
          case 'sec':
            return clientLower.includes('sec') || clientLower.includes('saudi electricity');
          case 'maaden':
            return clientLower.includes("ma'aden");
          case 'marafiq':
            return clientLower.includes('marafiq') || clientLower.includes('masa');
          case 'satorp':
            return clientLower.includes('satorp');
          case 'petrorabigh':
            return clientLower.includes('petrorabigh');
          case 'farabi':
            return clientLower.includes('farabi');
          case 'tasnee':
            return clientLower.includes('tasnee');
          case 'sipchem':
            return clientLower.includes('sipchem');
          case 'sdc':
            return clientLower.includes('sdc');
          case 'worley':
            return clientLower.includes('worley');
          case 'addar':
            return clientLower.includes('addar');
          case 'neom':
            return clientLower.includes('neom');
          case 'swcc':
            return clientLower.includes('swcc');
          case 'royal':
            return clientLower.includes('royal');
          case 'l&t':
            return clientLower.includes('l&t');
          case 'ge':
            return clientLower.includes('ge');
          case 'saipem':
            return clientLower.includes('saipem');
          case 'imi':
            return clientLower.includes('imi');
          case 'yasref':
            return clientLower.includes('yasref');
          case 'areva':
            return clientLower.includes('areva');
          case 'abb':
            return clientLower.includes('abb');
          default:
            return clientLower.includes(selectedClient.toLowerCase());
        }
      })
    : [];

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (page - 1) * projectsPerPage,
    page * projectsPerPage
  );

  const handleCardClick = (projectId: number, divisionSlug: string) => {
    navigate(`/${divisionSlug}/project/${projectId}`, { state: { fromDivision: divisionSlug } });
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AllProjectsContainer>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 300,
          color: '#A3BFFA',
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)',
          marginTop: '50px',
        }}
      >
        {division
          ? `${division.charAt(0).toUpperCase() + division.slice(1)} Projects by Client`
          : 'All Projects by Client'}
      </Typography>
      <Box sx={{ mb: 4 }}>
        <ClientTabs
          clients={clients}
          selectedClient={selectedClient}
          onSelectClient={setSelectedClient}
        />
      </Box>
      <ProjectsList>
        {paginatedProjects.length > 0 ? (
          paginatedProjects.map((project) => (
            <ProjectCardItem
              key={`${project.divisionSlug}-${project.id}`}
              project={project}
              onCardClick={handleCardClick}
            />
          ))
        ) : (
          <Typography sx={{ color: '#E0E7FF', textAlign: 'center', p: 2 }}>
            No projects available for this client
          </Typography>
        )}
      </ProjectsList>
      {filteredProjects.length > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <PaginationControls
            page={page}
            count={totalPages}
            onChange={handlePageChange}
          />
        </Box>
      )}
    </AllProjectsContainer>
  );
};

export default AllProjectsByClient;
