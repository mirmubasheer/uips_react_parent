// import React, { useState, useEffect, useRef } from 'react';
// import { Box, Modal, Typography, TextField, Button, IconButton, Alert } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import CloseIcon from '@mui/icons-material/Close';
// import { gsap } from 'gsap';

// // Styled components for the modal
// const ModalContainer = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '90%',
//   maxWidth: '400px',
//   background: 'linear-gradient(45deg, #1e293b 0%, #334155 100%)',
//   borderRadius: '12px',
//   boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3)',
//   border: '1px solid rgba(255, 255, 255, 0.05)',
//   padding: theme.spacing(3),
//   color: '#A3BFFA',
//   display: 'flex',
//   flexDirection: 'column',
//   maxHeight: '90vh',
//   overflowY: 'auto',
// }));

// const FormTitle = styled(Typography)({
//   fontSize: '1.8rem',
//   fontWeight: 600,
//   background: 'linear-gradient(to right, #94a3b8, #e2e8f0)',
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
//   textAlign: 'center',
//   marginBottom: '16px',
// });

// const StyledTextField = styled(TextField)(({ theme }) => ({
//   '& .MuiFilledInput-root': {
//     backgroundColor: 'rgba(15, 23, 42, 0.6)',
//     color: '#fff',
//     borderRadius: '4px',
//     paddingTop: '20px', // <-- ADD EXTRA PADDING TOP
//     '&:before': {
//       borderBottomColor: 'rgba(255, 255, 255, 0.1)',
//     },
//     '&:hover:not(.Mui-disabled):before': {
//       borderBottomColor: 'rgba(255, 255, 255, 0.2)',
//     },
//     '&.Mui-focused:after': {
//       borderBottomColor: '#94a3b8',
//     },
//   },
//   '& .MuiInputLabel-root': {
//     color: '#94a3b8',
//   },
//   '& .MuiInputLabel-root.Mui-focused': {
//     color: '#94a3b8',
//   },
//   '& .MuiFilledInput-input': {
//     padding: '10px 14px 6px', // top right bottom | Reduce bottom padding a bit
//   },
// }));

// const SubmitButton = styled(Button)(({ theme }) => ({
//   background: 'linear-gradient(45deg, #475569 0%, #64748b 100%)',
//   color: '#fff',
//   fontWeight: 'bold',
//   borderRadius: '8px',
//   padding: '12px 32px',
//   textTransform: 'none',
//   '&:hover': {
//     background: 'linear-gradient(45deg, #334155 0%, #475569 100%)',
//   },
//   fontSize: '1rem',
//   alignSelf: 'center',
// }));

// interface BrochureDownloadModalProps {
//   open: boolean;
//   onClose: () => void;
// }

// const BrochureDownloadModal: React.FC<BrochureDownloadModalProps> = ({ open, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//   });
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     submit: '',
//   });
//   const modalRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (open && modalRef.current) {
//       gsap.fromTo(
//         modalRef.current,
//         { opacity: 0, scale: 0.8, y: 50 },
//         { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power2.out' }
//       );
//     }
//   }, [open]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: '', submit: '' }));
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { name: '', email: '', phone: '', submit: '' };

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//       isValid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//       isValid = false;
//     }

//     const phoneRegex = /^\+?\d{10,15}$/;
//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//       isValid = false;
//     } else if (!phoneRegex.test(formData.phone)) {
//       newErrors.phone = 'Invalid phone number';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = () => {
//     if (validateForm()) {
//       try {
//         const link = document.createElement('a');
//         link.href = '/brochure.pdf';
//         link.download = 'UIPS_Brochure.pdf';
//         link.click();
//         onClose();
//       } catch (error) {
//         setErrors((prev) => ({ ...prev, submit: 'Failed to download brochure. Please try again.' }));
//       }
//     } else {
//       setErrors((prev) => ({ ...prev, submit: 'Please fill out all fields correctly.' }));
//     }
//   };

//   return (
//     <Modal open={open} onClose={onClose}>
//       <ModalContainer ref={modalRef}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <FormTitle>Download Brochure</FormTitle>
//           <IconButton onClick={onClose} sx={{ color: '#94a3b8' }}>
//             <CloseIcon />
//           </IconButton>
//         </Box>

//         <Typography
//           variant="body2"
//           sx={{
//             color: '#CBD5E1',
//             textAlign: 'center',
//             mb: 2,
//             fontSize: '0.9rem',
//           }}
//         >
//           Please fill out the form to download our brochure.
//         </Typography>

//         {errors.submit && (
//           <Alert severity="error" sx={{ mb: 2, fontSize: '0.9rem' }}>
//             {errors.submit}
//           </Alert>
//         )}

//         {/* Inputs + Button Container with padding and gap */}
//         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 1 }}>
//           <StyledTextField
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             error={!!errors.name}
//             helperText={errors.name}
//             fullWidth
//             variant="filled"
//             InputLabelProps={{ shrink: true }} // <<< IMPORTANT for better label spacing
//           />
//           <StyledTextField
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             error={!!errors.email}
//             helperText={errors.email}
//             fullWidth
//             variant="filled"
//             InputLabelProps={{ shrink: true }}
//           />
//           <StyledTextField
//             label="Phone Number"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             error={!!errors.phone}
//             helperText={errors.phone}
//             fullWidth
//             variant="filled"
//             InputLabelProps={{ shrink: true }}
//           />

//           <SubmitButton onClick={handleSubmit}>Submit & Download</SubmitButton>
//         </Box>
//       </ModalContainer>
//     </Modal>
//   );
// };

// export default BrochureDownloadModal;





import React, { useState, useEffect, useRef } from 'react';
import { Box, Modal, Typography, TextField, Button, IconButton, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { gsap } from 'gsap';
import { ApiService } from '../../api/api';

// Styled components (unchanged)
const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '400px',
  background: 'linear-gradient(45deg, #1e293b 0%, #334155 100%)',
  borderRadius: '12px',
  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  padding: theme.spacing(3),
  color: '#A3BFFA',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '90vh',
  overflowY: 'auto',
}));

const FormTitle = styled(Typography)({
  fontSize: '1.8rem',
  fontWeight: 600,
  background: 'linear-gradient(to right, #94a3b8, #e2e8f0)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',
  marginBottom: '16px',
});

const SubmitButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #475569 0%, #64748b 100%)',
  color: '#fff',
  fontWeight: 'bold',
  borderRadius: '8px',
  padding: '12px 32px',
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(45deg, #334155 0%, #475569 100%)',
  },
  fontSize: '1rem',
  alignSelf: 'center',
  '&.Mui-disabled': {
    background: 'linear-gradient(45deg, #475569 0%, #64748b 100%)',
    opacity: 0.6,
  },
}));

const sharedInputProps = {
  variant: 'filled' as const,
  fullWidth: true as const,
  InputProps: {
    sx: {
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      color: '#fff',
    },
  },
  InputLabelProps: {
    sx: {
      color: '#94a3b8',
    },
  },
};

interface BrochureDownloadModalProps {
  open: boolean;
  onClose: () => void;
}

const BrochureDownloadModal: React.FC<BrochureDownloadModalProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    submit: '',
  });
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (open && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
    // Reset form when modal opens
    if (open) {
      resetForm();
    }
  }, [open]);

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '' });
    setErrors({ name: '', email: '', phone: '', submit: '' });
    setSuccess('');
    setIsSubmitting(false);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '', submit: '' }));
    setSuccess('');
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', phone: '', submit: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    const phoneRegex = /^\+?\d{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setErrors((prev) => ({ ...prev, submit: 'Please fill out all fields correctly.' }));
      return;
    }

    setIsSubmitting(true);
    try {
      await ApiService.submitBrochureForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });

      setSuccess('Brochure download will start shortly...');

      // Delay download and further actions by 5 seconds
      setTimeout(() => {
        // Trigger brochure download
        const link = document.createElement('a');
        link.href = '/brochure.pdf'; // Ensure brochure.pdf is in public/ or adjust path
        link.download = 'UIPS_Brochure.pdf';
        link.click();

        resetForm();
        onClose(); // Close modal after download
      }, 3000); // 5-second delay
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit: error.message || 'Failed to submit form. Please try again.',
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalContainer ref={modalRef}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <FormTitle>Download Brochure</FormTitle>
          <IconButton onClick={onClose} sx={{ color: '#94a3b8' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: '#CBD5E1',
            textAlign: 'center',
            mb: 2,
            fontSize: '0.9rem',
          }}
        >
          Please fill out the form to download our brochure.
        </Typography>

        {errors.submit && (
          <Alert severity="error" sx={{ mb: 2, fontSize: '0.9rem' }}>
            {errors.submit}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2, fontSize: '0.9rem' }}>
            {success}
          </Alert>
        )}

        <Box
          component="form"
          ref={formRef}
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 1 }}
        >
          <TextField
            {...sharedInputProps}
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
            required
          />
          <TextField
            {...sharedInputProps}
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            error={!!errors.phone}
            helperText={errors.phone}
            required
          />

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit & Download'}
          </SubmitButton>
        </Box>
      </ModalContainer>
    </Modal>
  );
};

export default BrochureDownloadModal;