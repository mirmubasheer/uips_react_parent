import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        margin: 'auto',
        p: { xs: 2, sm: 3 },
      }}
    >
      <Grid container spacing={4} sx={{ width: '100%' }}>
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'left', mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#FFFFFF' }}>
              Get in Touch
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: '#FFFFFF' }}>
              We’d love to hear from you! Whether you have a question, need a quote, or want to discuss a
              project, our team is here to help.
            </Typography>
            <Typography variant="body2" sx={{ color: '#FFFFFF' }}>
              Fill out the form, and we’ll get back to you as soon as possible.
            </Typography>
          </Box>
        </Grid>
        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              p: { xs: 3, sm: 4 },
              backgroundColor: '#1E2A44',
              borderRadius: 2,
              width: '100%',
              minHeight: '500px',
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              InputLabelProps={{ style: { color: '#FFFFFF' } }}
              InputProps={{
                sx: {
                  backgroundColor: '#0F1A33',
                  color: '#FFFFFF',
                  '& .MuiInputBase-input': {
                    color: '#FFFFFF',
                  },
                  '&:focus-within': {
                    backgroundColor: '#0A1229',
                  },
                },
              }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              InputLabelProps={{ style: { color: '#FFFFFF' } }}
              InputProps={{
                sx: {
                  backgroundColor: '#0F1A33',
                  color: '#FFFFFF',
                  '& .MuiInputBase-input': {
                    color: '#FFFFFF',
                  },
                  '&:focus-within': {
                    backgroundColor: '#0A1229',
                  },
                },
              }}
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={6}
              variant="outlined"
              InputLabelProps={{ style: { color: '#FFFFFF' } }}
              InputProps={{
                sx: {
                  backgroundColor: '#0F1A33',
                  color: '#FFFFFF',
                  '& .MuiInputBase-input': {
                    color: '#FFFFFF',
                  },
                  '&:focus-within': {
                    backgroundColor: '#0A1229',
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: '#3B82F6',
                color: '#FFFFFF',
                '&:hover': { backgroundColor: '#2563EB' },
                padding: '12px 24px',
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(ContactFormSection);