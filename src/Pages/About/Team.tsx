
import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface TeamMember {
  image: string;
  title: string;
  subTitle: string;
}

const teamMembers: TeamMember[] = [
  {
    image: 'https://plus.unsplash.com/premium_vector-1721131162360-08b11ad43827?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Amjad Ali Wajid",
    subTitle: "Founder",
  },
];

const Team: React.FC = () => {
  return (
    <Box sx={{ background: '#0f172a', py: { xs: 4, md: 6 } }}>
      <Container>
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: '#f1f5f9',
              position: 'relative',
              display: 'inline-block',
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
          Our Industrial Visionary
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'stretch',
          }}
        >
          {/* Left Side - Image */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <TeamMemberCard member={teamMembers[0]} />
          </Box>

          {/* Right Side - Text Content */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              px: { xs: 0, md: 2 },
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: '#e2e8f0', fontWeight: 600 }}
            >
              About Amjad Ali Wajid
            </Typography>
            <Typography variant="body1" sx={{ color: '#cbd5e1' }}>
              Amjad Ali Wajid, the founder of UIPS, leads with vision to deliver top-quality utilities and industrial power solutions across Saudi Arabia.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        borderRadius: '12px',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
          cursor: 'pointer',
        },
        height: '100%',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
        <img
          src={member.image}
          alt={member.title}
          style={{
            width: '100%',
            height: '400px',
            borderRadius: '12px',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'linear-gradient(to top, rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0.4))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.3s ease',
            borderRadius: '12px',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
            <Box>
              <Typography variant="h6" sx={{ color: '#e2e8f0', fontWeight: 600 }}>
                {member.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#94a3b8' }}>
                {member.subTitle}
              </Typography>
            </Box>
            <PhoneIcon
              sx={{
                color: '#e2e8f0',
                backgroundColor: '#1e40af',
                borderRadius: '50%',
                p: 1,
                '&:hover': { backgroundColor: '#1e3a8a' },
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, p: 2 }}>
            <FacebookIcon
              sx={{
                color: '#e2e8f0',
                '&:hover': { color: '#3b82f6' },
                transition: 'color 0.2s',
              }}
            />
            <InstagramIcon
              sx={{
                color: '#e2e8f0',
                '&:hover': { color: '#3b82f6' },
                transition: 'color 0.2s',
              }}
            />
            <TwitterIcon
              sx={{
                color: '#e2e8f0',
                '&:hover': { color: '#3b82f6' },
                transition: 'color 0.2s',
              }}
            />
            <LinkedInIcon
              sx={{
                color: '#e2e8f0',
                '&:hover': { color: '#3b82f6' },
                transition: 'color 0.2s',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
