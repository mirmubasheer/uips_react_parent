// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   useTheme,
//   useMediaQuery,
// } from '@mui/material';
// import { ArrowForward } from '@mui/icons-material';
// import gsap from 'gsap';

// const sharedInputProps = {
//   variant: 'filled' as const,
//   fullWidth: true as const,
//   InputProps: {
//     sx: {
//       backgroundColor: 'rgba(15, 23, 42, 0.6)',
//       '& .MuiInputBase-input': { color: '#fff' },
//       '&:focus-within': { backgroundColor: 'rgba(15, 23, 42, 0.7)' },
//     },
//   },
//   InputLabelProps: {
//     sx: {
//       color: '#94a3b8',
//       '&.Mui-focused': { color: '#64748b' },
//     },
//   },
// };

// const ContactFormSection: React.FC = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         width: '100%',
//         maxWidth: '1400px',
//         mx: 'auto',
//         display: 'flex',
//         flexDirection: { xs: 'column', md: 'row' },
//         alignItems: { xs: 'center', md: 'flex-start' },
//         justifyContent: 'space-between',
//         px: { xs: 2, md: 6 },
//         py: { xs: 4, md: 8 },
//         gap: { xs: 4, md: 8 },
//         boxSizing: 'border-box',
//       }}
//     >
//       {/* Left Text Section */}
//       <Box
//         sx={{
//           flex: { xs: 'unset', md: '0 0 40%' },
//           textAlign: 'left',
//           color: '#FFFFFF',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'flex-start',
//           pt: { xs: 0, md: 3 },
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             mb: 2,
//             fontWeight: 'bold',
//             color: '#FFFFFF',
//             fontSize: { xs: '22px', sm: '24px', md: '28px' },
//           }}
//         >
//           Get in Touch
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             mb: 2,
//             color: '#FFFFFF',
//             fontSize: { xs: '14px', sm: '15px', md: '16px' },
//           }}
//         >
//           We’d love to hear from you! Whether you have a question, need a quote,
//           or want to discuss a project, our team is here to help.
//         </Typography>
//       </Box>

//       {/* Right Form Section */}
//       <Box
//         component="form"
//         onSubmit={handleSubmit}
//         sx={{
//           flex: { xs: 'unset', md: '0 0 50%' },
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 3,
//           background: 'linear-gradient(45deg, #1e293b 0%, #334155 100%)',
//           borderRadius: 3,
//           p: { xs: 3, sm: 4 },
//           width: '100%',
//           maxWidth: { xs: '100%', sm: '500px', md: '600px' },
//           mx: 'auto',
//         }}
//       >
//         <Typography
//           variant="body2"
//           sx={{
//             color: '#e2e8f0',
//             mb: 2,
//             fontSize: { xs: '12px', sm: '13px', md: '20px' },
//           }}
//         >
//           Fill out the form, and we’ll get back to you as soon as possible.
//         </Typography>

//         <TextField
//           {...sharedInputProps}
//           label="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <TextField
//           {...sharedInputProps}
//           label="Email"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <TextField
//           {...sharedInputProps}
//           label="Message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           multiline
//           rows={isMobile ? 4 : 6}
//         />

//         <Button
//           type="submit"
//           variant="contained"
//           endIcon={<ArrowForward />}
//           sx={{
//             alignSelf: 'flex-start',
//             px: 3,
//             py: 1.5,
//             borderRadius: 2,
//             textTransform: 'none',
//             background: 'linear-gradient(45deg, #475569 0%, #64748b 100%)',
//             color: '#e2e8f0',
//             '&:hover': {
//               background: 'linear-gradient(45deg, #334155 0%, #475569 100%)',
//             },
//           }}
//         >
//           Send Message
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default React.memo(ContactFormSection);\
import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Alert,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { ApiService } from '../../../api/api';

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
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    submit: '',
  });
  const [success, setSuccess] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '', submit: '' }));
    setSuccess('');
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', phone: '', message: '', submit: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
      isValid = false;
    } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Invalid phone number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setErrors((prev) => ({ ...prev, submit: 'Please fill out all fields correctly.' }));
      return;
    }

    try {
      await ApiService.submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      setSuccess('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({ name: '', email: '', phone: '', message: '', submit: '' });
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit: error.message || 'Failed to send message. Please try again.',
      }));
    }
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

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          flex: { xs: 'unset', md: '0 0 50%' },
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          background: 'linear-gradient(45deg, #1e293b 0%, #334155 100%)',
          borderRadius: 3,
          p: { xs: 2, sm: 3 },
          width: '100%',
          maxWidth: { xs: '100%', sm: '450px', md: '550px' },
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
          error={!!errors.name}
          helperText={errors.name}
          required
        />

        <TextField
          {...sharedInputProps}
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          required
        />

        <TextField
          {...sharedInputProps}
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          required
        />

        <TextField
          {...sharedInputProps}
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          multiline
          rows={isMobile ? 3 : 4}
        />

        {errors.submit && (
          <Alert severity="error" sx={{ mb: 1 }}>
            {errors.submit}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 1 }}>
            {success}
          </Alert>
        )}

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