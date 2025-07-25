
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { clientlogos } from '../../../../assets';

interface ClientTabsProps {
  clients: string[];
  selectedClient: string | null;
  onSelectClient: (client: string) => void;
}

// Map client names to logos (unchanged)
const clientLogoMap: Record<string, string> = {
  aramco: clientlogos[0], // client1.webp
  sabic: clientlogos[1], // client2.webp
  sec: clientlogos[2], // client3.webp
  maaden: clientlogos[3], // client4.webp
  marafiq: clientlogos[4], // client5.webp
  petrorabigh: clientlogos[6], // client6.webp
  farabi: clientlogos[8], // client7.webp
  tasnee: clientlogos[7], // client10.webp
  abb: clientlogos[21], // client8.webp
  satorp: clientlogos[5], // client9.webp
  worley: clientlogos[10], // worley.webp
  addar: clientlogos[11], // client19.webp
  sdc: clientlogos[18], // sdc.webp
  eaton: clientlogos[22], // client11.webp
  areva: clientlogos[20], // client12.webp
  neom: clientlogos[12], // client13.webp
  'l&t': clientlogos[16], // l&t.webp
  imi: clientlogos[17], // imi.webp
  sipchem: clientlogos[9], // client16.webp
  yasref: clientlogos[19], // client17.webp
  saipem: clientlogos[14], // client18.webp
  ge: clientlogos[15], // client22.webp
  // royal: clientlogos[]
  // royal: No logo available (clientlogos has only 22 items)
};

// Map client names to custom display labels
const clientLabelMap: Record<string, string> = {
  aramco: 'Aramco',
  sabic: 'SABIC',
  sec: 'SEC',
  maaden: "Ma'aden",
  marafiq: 'Marafiq',
  petrorabigh: 'Petro Rabigh',
  farabi: 'Farabi',
  tasnee: 'Tasnee',
  abb: 'ABB',
  satorp: 'Satorp',
  worley: 'Worley',
  addar: 'Addar',
  sdc: 'SDC',
  eaton: 'Eaton',
  areva: 'Areva',
  neom: 'NEOM',
  'l&t': 'L&T',
  imi: 'IMI',
  sipchem: 'Sipchem',
  yasref: 'Yasref',
  saipem: 'Saipem',
  ge: 'GE',
  royal: 'Royal',
};

// Styled components
const ClientTab = styled(Box)(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer',
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '140px',
  height: '90px',
  background: 'rgba(50, 65, 119, 0.1)',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '& img': {
    height: '50px',
    width: 'auto',
    maxWidth: '110px',
    objectFit: 'contain',
    transition: 'filter 0.3s ease, transform 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
  '&:hover::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.4)',
    borderRadius: '12px',
    zIndex: 1,
  },
  '&:hover .hover-text': {
    opacity: 1,
  },
  '&:hover img': {
    transform: 'scale(1.15)',
  },
  '&.active': {
    border: '2px solid #3B82F6',
  },
  '&.active img': {
    filter: 'brightness(1.2)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100px',
    height: '70px',
    '& img': {
      height: '40px',
      maxWidth: '80px',
    },
  },
}));

const ClientLabel = styled(Typography)(({ theme }) => ({
  color: '#324177',
  fontSize: '0.85rem',
  fontWeight: 500,
  textAlign: 'center',
  marginTop: theme.spacing(0.75),
  textTransform: 'none', // Changed to 'none' to respect custom label formatting
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
    marginTop: theme.spacing(0.5),
  },
}));

const HoverText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  color: '#fff',
  fontSize: '0.9rem',
  fontWeight: 600,
  textAlign: 'center',
  zIndex: 2,
  opacity: 0,
  transition: 'opacity 0.3s ease',
  top: '50%',
  transform: 'translateY(-50%)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
  },
}));

const ClientTabs: React.FC<ClientTabsProps> = ({ clients, selectedClient, onSelectClient }) => {
  return (
    <Box
      sx={{
        mb: 5,
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: theme => theme.spacing(2),
        // background: 'linear-gradient(180deg, #1E293B 0%, #111827 100%)',
        background: `linear-gradient(to bottom, hsl(220, 20%, 90%) 0%, hsl(220, 20%, 95%))`,
        padding: theme => theme.spacing(3),
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
        [theme => theme.breakpoints.down('sm')]: {
          gap: theme => theme.spacing(1.5),
          padding: theme => theme.spacing(2),
        },
      }}
    >
      {clients.map((client) => (
        <ClientTab
          key={client}
          className={client === selectedClient ? 'active' : ''}
          onClick={() => onSelectClient(client)}
        >
          {clientLogoMap[client] ? (
            <img
              src={clientLogoMap[client]}
              alt={`${client} logo`}
              style={{ display: 'block' }}
            />
          ) : (
            <Typography color="error">Logo Missing</Typography>
          )}
          <ClientLabel>{clientLabelMap[client] || client}</ClientLabel>
          <HoverText className="hover-text">View Projects</HoverText>
        </ClientTab>
      ))}
    </Box>
  );
};

export default ClientTabs;
