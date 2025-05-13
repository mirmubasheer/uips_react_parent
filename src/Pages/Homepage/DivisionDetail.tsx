import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { divisions } from '../../assets/data/Divisions';
import { Alldivisions } from '../../assets';
import BuildIcon from '@mui/icons-material/Build';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import SecurityIcon from '@mui/icons-material/Security';
import ConstructionIcon from '@mui/icons-material/Construction';
import PowerIcon from '@mui/icons-material/Power';
import FactoryIcon from '@mui/icons-material/Factory';
import HvacIcon from '@mui/icons-material/Hvac';
import CodeIcon from '@mui/icons-material/Code';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import DnsIcon from '@mui/icons-material/Dns';
import LockIcon from '@mui/icons-material/Lock';
import CableIcon from '@mui/icons-material/Cable';
import VideocamIcon from '@mui/icons-material/Videocam';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HeaderAll from '../../components/HeaderAll/HeaderAll';

const DetailContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#0f172a',
  color: '#ffffff',
  minHeight: '100vh',
  padding: theme.spacing(6),
  width: '100%',
  boxSizing: 'border-box',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1e3a8a',
  color: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: 'auto',
  },
}));

const ChecklistIconCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#1e3a8a',
  color: '#ffffff',
  borderRadius: '50%',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  width: '60px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  [theme.breakpoints.down('sm')]: {
    width: '48px',
    height: '48px',
  },
}));

const ChecklistItemBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '8px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  minHeight: '120px',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '100px',
    padding: theme.spacing(1.5),
  },
}));

const ChecklistTypography = styled(Typography)(({ theme }) => ({
  color: '#e2e8f0',
  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
  lineHeight: 1.4,
  wordBreak: 'break-word',
  flex: 1,
  maxWidth: 'calc(100% - 80px)',
  textAlign: 'left',
}));

const DivisionDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const division = divisions.find(
    (d) => d.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!division) {
    return (
      <DetailContainer>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: '#ffffff', fontWeight: 'bold' }}
        >
          Division Not Found
        </Typography>
      </DetailContainer>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: division.title, href: `/division/${slug}` },
  ];

  const getIcon = (item: string) => {
    switch (item) {
      // Civil Division
      case 'Site Development':
      case 'Building Construction':
      case 'Infrastructure Design':
        return <ConstructionIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'Utility Installation':
        return <BuildIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;

      // IT Division
      case 'Fiber Optic Installation':
        return <CableIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'System Monitoring':
        return <NetworkCheckIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'Cybersecurity Implementation':
        return <SecurityIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'Network Configuration':
        return <SettingsEthernetIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'Custom Software Development':
        return <CodeIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'IT Consulting & Strategy':
        return <ManageAccountsIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'Data Analytics & Reporting':
        return <AnalyticsIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'AI & Machine Learning Solutions':
        return <PsychologyIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'Network Setup & Management (LAN, WAN, Wi-Fi)':
        return <NetworkCheckIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'IP Addressing & Configuration':
        return <SettingsEthernetIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'Server Installation & Maintenance':
        return <DnsIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'Firewall & Cybersecurity Solutions':
        return <LockIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'Structured Cabling & Rack Setup':
        return <CableIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'CCTV & Access Control Systems':
        return <VideocamIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'IT Outsourcing & Managed Services':
        return <ManageAccountsIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;

      // Electrical Division
      case 'Transmission Line Installation':
      case 'Electrical Shutdown':
        return <ElectricalServicesIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'Electrical Safety Audits':
        return <SecurityIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'Distribution Network Maintenance':
        return <NetworkCheckIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'Control Gear Setup':
        return <FactoryIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;

      // Power Solutions Division
      case 'Power Generation Setup':
      case 'Generator Installation':
        return <PowerIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'Turbine Commissioning':
        return <FactoryIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;

      // Plant Shutdowns Division
      case 'Motor Installation':
      case 'Pump Commissioning':
      case 'Instrumentation Calibration':
      case 'Piping Works':
        return <BuildIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;

      // Mechanical Division
      case 'HVAC System Setup':
        return <HvacIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
      case 'Mechanical Overhaul':
        return <BuildIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;

      default:
        return <BuildIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />;
    }
  };

  return (
    <Box sx={{ backgroundColor: '#0f172a', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      <HeaderAll
        imageSrc={Alldivisions[division.image]}
        title={division.title}
        breadcrumbItems={breadcrumbItems}
      />
      <DetailContainer>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="stretch">
          {/* Detailed Description */}
          <Grid item xs={12}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              About {division.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#e2e8f0',
                lineHeight: 1.8,
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                textAlign: { xs: 'justify', md: 'left' },
              }}
            >
              {division.detailedDescription}
            </Typography>
          </Grid>

          {/* What We Do and Our Expertise - Custom Width */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                alignItems: 'stretch',
                gap: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <StyledCard sx={{ width: { xs: '100%', sm: '90%', md: '42%' } }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: '#ffffff',
                      fontWeight: 'bold',
                      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
                    }}
                  >
                    What We Do
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#e2e8f0',
                      fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                      lineHeight: 1.6,
                    }}
                  >
                    {division.whatWeDo}
                  </Typography>
                </CardContent>
              </StyledCard>

              <StyledCard sx={{ width: { xs: '100%', sm: '90%', md: '42%' } }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: '#ffffff',
                      fontWeight: 'bold',
                      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
                    }}
                  >
                    Our Expertise
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#e2e8f0',
                      fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                      lineHeight: 1.6,
                    }}
                  >
                    {division.expertise}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Box>
          </Grid>

          {/* Checklist Section */}
          <Grid item xs={12}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' },
                mt: { xs: 2, sm: 3, md: 4 },
              }}
            >
              Key Services
            </Typography>
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              {division.checklist.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ChecklistItemBox>
                    <ChecklistIconCard>{getIcon(item)}</ChecklistIconCard>
                    <ChecklistTypography>
                      {item}
                    </ChecklistTypography>
                  </ChecklistItemBox>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </DetailContainer>
    </Box>
  );
};

export default DivisionDetail;