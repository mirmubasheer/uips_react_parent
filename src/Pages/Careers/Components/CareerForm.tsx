
import React, { useState, useRef, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import gsap from 'gsap';

const CareerForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
  });
  const [isDragging, setIsDragging] = useState(false);

  // GSAP animation
  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  const validate = () => {
    const newErrors = { name: '', email: '', phone: '', resume: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Invalid phone number';
      isValid = false;
    }
    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
      isValid = false;
    } else if (
      formData.resume &&
      !['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(formData.resume.type)
    ) {
      newErrors.resume = 'Only PDF or Word files are allowed';
      isValid = false;
    } else if (formData.resume && formData.resume.size > 5 * 1024 * 1024) {
      newErrors.resume = 'Resume must be less than 5MB';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (file: File | null) => {
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0] || null;
    handleFileChange(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileChange(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({ name: '', email: '', phone: '', resume: null });
      setErrors({ name: '', email: '', phone: '', resume: '' });
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Clear file input
      }
    }
  };

  return (
    <Box
      id="career-form"
      ref={formRef}
      sx={{
        p: { xs: 2, md: 4 },
        bgcolor: '#1e293b',
        borderRadius: '12px',
        maxWidth: '600px',
        mx: 'auto',
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: '#f1f5f9', fontWeight: 'bold', mb: 3, textAlign: 'center' }}
      >
        Apply for a Position
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          margin="normal"
          sx={{
            '& .MuiInputBase-root': { bgcolor: '#334155', color: '#f1f5f9' },
            '& .MuiInputLabel-root': { color: '#94a3b8' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#60a5fa' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#475569' },
              '&:hover fieldset': { borderColor: '#60a5fa' },
              '&.Mui-focused fieldset': { borderColor: '#60a5fa' },
            },
            '& input:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #334155 inset',
              WebkitTextFillColor: '#f1f5f9',
            },
          }}
        />
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          margin="normal"
          sx={{
            '& .MuiInputBase-root': { bgcolor: '#334155', color: '#f1f5f9' },
            '& .MuiInputLabel-root': { color: '#94a3b8' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#60a5fa' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#475569' },
              '&:hover fieldset': { borderColor: '#60a5fa' },
              '&.Mui-focused fieldset': { borderColor: '#60a5fa' },
            },
            '& input:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #334155 inset',
              WebkitTextFillColor: '#f1f5f9',
            },
          }}
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          margin="normal"
          sx={{
            '& .MuiInputBase-root': { bgcolor: '#334155', color: '#f1f5f9' },
            '& .MuiInputLabel-root': { color: '#94a3b8' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#60a5fa' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#475569' },
              '&:hover fieldset': { borderColor: '#60a5fa' },
              '&.Mui-focused fieldset': { borderColor: '#60a5fa' },
            },
            '& input:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #334155 inset',
              WebkitTextFillColor: '#f1f5f9',
            },
          }}
        />
        <Box sx={{ mt: 2, mb: 3 }}>
          <Typography
            variant="body2"
            sx={{ color: '#94a3b8', mb: 1 }}
          >
            Resume (PDF or Word, max 5MB)
          </Typography>
          <Box
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={handleClick}
            sx={{
              minHeight: '150px',
              bgcolor: '#334155',
              border: '2px dashed',
              borderColor: isDragging ? '#60a5fa' : '#475569',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              p: 2,
              cursor: 'pointer',
              transition: 'border-color 0.3s',
              '&:hover': {
                borderColor: '#60a5fa',
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: '#e2e8f0', px: 2 }}
            >
              Drag and drop your resume here or click to choose a file
            </Typography>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileInputChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
          </Box>
          {formData.resume && (
            <Typography
              variant="caption"
              sx={{ color: '#e2e8f0', mt: 1, display: 'block' }}
            >
              Selected: {formData.resume.name}
            </Typography>
          )}
          {errors.resume && (
            <Typography
              variant="caption"
              sx={{ color: '#f87171', mt: 0.5, display: 'block' }}
            >
              {errors.resume}
            </Typography>
          )}
        </Box>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            bgcolor: '#3b82f6',
            color: '#f1f5f9',
            textTransform: 'none',
            py: 1.5,
            borderRadius: '8px',
            '&:hover': {
              bgcolor: '#2563eb',
            },
          }}
        >
          Submit Application
        </Button>
      </Box>
    </Box>
  );
};

export default CareerForm;
