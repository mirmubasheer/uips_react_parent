
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import gsap from 'gsap';


interface TeamMember {
  name: string;
  designation: string;
  image: string;
}

// Team member data
const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    designation: 'CEO',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    designation: 'CTO',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Emily Johnson',
    designation: 'COO',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'Michael Brown',
    designation: 'CFO',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'Sarah Davis',
    designation: 'Head of Marketing',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    name: 'David Wilson',
    designation: 'Head of Sales',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    name: 'Laura Martinez',
    designation: 'HR Manager',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    name: 'James Taylor',
    designation: 'Lead Developer',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
];

const TeamManagement: React.FC = () => {
  const teamRef = useRef<HTMLDivElement | null>(null);

  // GSAP animation for fade-in and slight scale effect
  useEffect(() => {
    if (teamRef.current) {
      gsap.fromTo(
        teamRef.current.children,
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 3, md: 4 },
        background: 'linear-gradient(180deg, #334155 0%, #475569 100%)',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 6,
          color: '#f1f5f9',
          position: 'relative',
          display: 'inline-block',
          fontWeight: 'bold',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
            borderRadius: '2px',
          },
        }}
      >
        Management
      </Typography>
      <Grid container spacing={4} ref={teamRef} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                bgcolor: '#1e293b',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: { md: 'translateY(-8px)' },
                  boxShadow: { md: '0 8px 24px rgba(0, 0, 0, 0.3)' },
                },
                border: '1px solid',
                borderColor: '#475569',
                width: '100%',
                maxWidth: { xs: '300px', md: '260px' },
                mx: 'auto',
                minHeight: { xs: '340px', md: '360px' },
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: { xs: '180px', md: '200px' },
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: { md: 'scale(1.05)' },
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  p: { xs: 2, md: 3 },
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#f1f5f9',
                    fontWeight: 'medium',
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                    mb: 1,
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#94a3b8',
                    fontStyle: 'italic',
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                  }}
                >
                  {member.designation}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamManagement;
