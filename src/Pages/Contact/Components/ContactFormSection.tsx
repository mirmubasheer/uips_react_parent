import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import gsap from 'gsap';

const sharedInputProps = {
  variant: 'filled' as const,
  fullWidth: true as const,
  InputProps: {
    sx: {
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      '& .MuiInputBase-input': { color: '#fff' },
      '&:focus-within': { backgroundColor: 'rgba(15, 23, 42, 0.7)' },
    },
  },
  InputLabelProps: {
    sx: {
      color: '#94a3b8',
      '&.Mui-focused': { color: '#64748b' },
    },
  },
};

const ContactFormSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        maxWidth: '1400px',
        mx: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        justifyContent: 'space-between',
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
        gap: { xs: 4, md: 8 },
        boxSizing: 'border-box',
      }}
    >
      {/* Left Text Section */}
      <Box
        sx={{
          flex: { xs: 'unset', md: '0 0 40%' },
          textAlign: 'left',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          pt: { xs: 0, md: 3 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: 'bold',
            color: '#FFFFFF',
            fontSize: { xs: '22px', sm: '24px', md: '28px' },
          }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: '#FFFFFF',
            fontSize: { xs: '14px', sm: '15px', md: '16px' },
          }}
        >
          We’d love to hear from you! Whether you have a question, need a quote,
          or want to discuss a project, our team is here to help.
        </Typography>
      </Box>

      {/* Right Form Section */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          flex: { xs: 'unset', md: '0 0 50%' },
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          background: 'linear-gradient(45deg, #1e293b 0%, #334155 100%)',
          borderRadius: 3,
          p: { xs: 3, sm: 4 },
          width: '100%',
          maxWidth: { xs: '100%', sm: '500px', md: '600px' },
          mx: 'auto',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: '#e2e8f0',
            mb: 2,
            fontSize: { xs: '12px', sm: '13px', md: '20px' },
          }}
        >
          Fill out the form, and we’ll get back to you as soon as possible.
        </Typography>

        <TextField
          {...sharedInputProps}
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <TextField
          {...sharedInputProps}
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <TextField
          {...sharedInputProps}
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          multiline
          rows={isMobile ? 4 : 6}
        />

        <Button
          type="submit"
          variant="contained"
          endIcon={<ArrowForward />}
          sx={{
            alignSelf: 'flex-start',
            px: 3,
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            background: 'linear-gradient(45deg, #475569 0%, #64748b 100%)',
            color: '#e2e8f0',
            '&:hover': {
              background: 'linear-gradient(45deg, #334155 0%, #475569 100%)',
            },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default React.memo(ContactFormSection);
