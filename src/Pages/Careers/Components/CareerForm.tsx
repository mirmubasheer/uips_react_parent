// import React, { useState, useRef, useEffect } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import gsap from "gsap";
// import { ArrowForward } from "@mui/icons-material";

// const sharedInputProps = {
//   variant: "filled" as const,
//   fullWidth: true as const,
//   InputProps: {
//     sx: {
//       backgroundColor: "rgba(15, 23, 42, 0.6)",
//       "& .MuiInputBase-input": { color: "#fff" },
//     },
//   },
//   InputLabelProps: {
//     sx: {
//       color: "#94a3b8",
//       "&.Mui-focused": { color: "#64748b" },
//     },
//   },
// };

// const CareerForm: React.FC = () => {
//   const formRef = useRef<HTMLDivElement>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     resume: null as File | null,
//   });
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     resume: "",
//   });
//   const [isDragging, setIsDragging] = useState(false);

//   useEffect(() => {
//     if (formRef.current) {
//       gsap.fromTo(
//         formRef.current.children,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
//       );
//     }
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const handleFileChange = (file: File | null) => {
//     setFormData((prev) => ({ ...prev, resume: file }));
//     setErrors((prev) => ({ ...prev, resume: "" }));
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setIsDragging(false);
//     handleFileChange(e.dataTransfer.files[0] || null);
//   };
//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };
//   const handleDragLeave = () => setIsDragging(false);
//   const handleClick = () => fileInputRef.current?.click();
//   const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
//     handleFileChange(e.target.files?.[0] || null);

//   const validate = () => {
//     const newErrors = { name: "", email: "", phone: "", resume: "" };
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//       isValid = false;
//     }
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//       isValid = false;
//     }
//     if (!formData.phone) {
//       newErrors.phone = "Phone number is required";
//       isValid = false;
//     } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\s/g, ""))) {
//       newErrors.phone = "Invalid phone number";
//       isValid = false;
//     }
//     if (!formData.resume) {
//       newErrors.resume = "Resume is required";
//       isValid = false;
//     } else if (
//       ![
//         "application/pdf",
//         "application/msword",
//         "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       ].includes(formData.resume!.type)
//     ) {
//       newErrors.resume = "Only PDF or Word files are allowed";
//       isValid = false;
//     } else if (formData.resume.size > 5 * 1024 * 1024) {
//       newErrors.resume = "Resume must be less than 5MB";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;
//     console.log("Form submitted:", formData);
//     setFormData({ name: "", email: "", phone: "", resume: null });
//     setErrors({ name: "", email: "", phone: "", resume: "" });
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   return (
//     <Box
//       ref={formRef}
//       sx={{
//         p: { xs: 2, md: 4 },
//         background: 'linear-gradient(145deg, #0c1c3c 0%, #1e2a5c 100%)',

   
//         boxShadow: { md: '0 8px 20px rgba(0, 0, 0, 0.4)' }, // Enhanced hover shadow
//         borderRadius: 3,
//         maxWidth: 600,
//         mx: "auto",
//         '&:hover': {
          
//           boxShadow: { md: '0 8px 20px rgba(0, 0, 0, 0.8)' },
//         },
//       }}
//     >
//       <Typography
//         variant={isMobile ? "h6" : "h5"}
//         sx={{
//           color: "#e2e8f0",
//           fontWeight: "bold",
//           mb: 3,
//           textAlign: "center",
//         }}
//       >
//         Apply for a Position
//       </Typography>

//       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//         <TextField
//           {...sharedInputProps}
//           label="Full Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           error={!!errors.name}
//           helperText={errors.name}
//         />

//         <TextField
//           {...sharedInputProps}
//           label="Email Address"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           error={!!errors.email}
//           helperText={errors.email}
//         />

//         <TextField
//           {...sharedInputProps}
//           label="Phone Number"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           error={!!errors.phone}
//           helperText={errors.phone}
//         />

//         <Box sx={{ mt: 1 }}>
//           <Typography variant="body2" sx={{ color: "#94a3b8", mb: 1 }}>
//             Resume (PDF or Word, max 5MB)
//           </Typography>
//           <Box
//             onDrop={handleDrop}
//             onDragOver={handleDragOver}
//             onDragLeave={handleDragLeave}
//             onClick={handleClick}
//             sx={{
//               minHeight: 150,
//               backgroundColor: "rgba(15, 23, 42, 0.6)",
//               border: "2px dashed rgba(255,255,255,0.1)",
//               borderColor: isDragging ? "#64748b" : "rgba(255,255,255,0.1)",
//               borderRadius: 2,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               textAlign: "center",
//               p: 2,
//               cursor: "pointer",
//               transition: "border-color 0.3s",
//               "&:hover": { borderColor: "#64748b" },
//             }}
//           >
//             <Typography variant="body2" sx={{ color: "#e2e8f0", px: 2 }}>
//               Drag & drop your resume here, or click to select
//             </Typography>
//             <input
//               type="file"
//               accept=".pdf,.doc,.docx"
//               onChange={handleFileInputChange}
//               ref={fileInputRef}
//               style={{ display: "none" }}
//             />
//           </Box>
//           {formData.resume && (
//             <Typography variant="caption" sx={{ color: "#e2e8f0", mt: 1 }}>
//               Selected: {formData.resume.name}
//             </Typography>
//           )}
//           {errors.resume && (
//             <Typography variant="caption" sx={{ color: "#f87171", mt: 0.5 }}>
//               {errors.resume}
//             </Typography>
//           )}
//         </Box>

//         <Button
//           type="submit"
//           variant="contained"
//           endIcon={<ArrowForward />}
//           sx={{
//             alignSelf: "flex-start",
//             px: 3,
//             py: 1,
//             borderRadius: 2,
//             textTransform: "none",
//             background: "linear-gradient(45deg, #475569 0%, #64748b 100%)",
//             "&:hover": {
//               background: "linear-gradient(45deg, #334155 0%, #475569 100%)",
//             },
//           }}
//         >
//           Submit Application
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default CareerForm;

import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Alert,
} from "@mui/material";
import gsap from "gsap";
import { ArrowForward } from "@mui/icons-material";
import { ApiService } from '../../../api/api';

interface CareerFormProps {
  selectedRole: string;
}

const sharedInputProps = {
  variant: "filled" as const,
  fullWidth: true as const,
  InputProps: {
    sx: {
      backgroundColor: "#f1f5f9",
      "& .MuiInputBase-input": { color: "#1e2a44" },
    },
  },
  InputLabelProps: {
    sx: {
      fontSize: { xs: "0.9rem", sm: "1rem" },
      color: "#475569",
      "&.Mui-focused": { color: "#475569" },
    },
  },
};

const CareerForm: React.FC<CareerFormProps> = ({ selectedRole }) => {
  const formRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
    role: selectedRole,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    submit: "",
  });
  const [success, setSuccess] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, role: selectedRole }));
  }, [selectedRole]);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", submit: "" }));
    setSuccess("");
  };

  const handleFileChange = (file: File | null) => {
    setFormData((prev) => ({ ...prev, resume: file }));
    setErrors((prev) => ({ ...prev, resume: "", submit: "" }));
    setSuccess("");
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files[0] || null);
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => setIsDragging(false);
  const handleClick = () => fileInputRef.current?.click();
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleFileChange(e.target.files?.[0] || null);

  const validate = () => {
    const newErrors = { name: "", email: "", phone: "", resume: "", submit: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Invalid phone number";
      isValid = false;
    }
    if (!formData.resume) {
      newErrors.resume = "Resume is required";
      isValid = false;
    } else if (
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(formData.resume!.type)
    ) {
      newErrors.resume = "Only PDF or Word files are allowed";
      isValid = false;
    } else if (formData.resume.size > 5 * 1024 * 1024) {
      newErrors.resume = "Resume must be less than 5MB";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setErrors((prev) => ({ ...prev, submit: "Please fill out all fields correctly." }));
      return;
    }

    try {
      await ApiService.submitCareerForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        resume: formData.resume!,
        role: formData.role,
      });

      setSuccess("Application submitted successfully!");
      setFormData({ name: "", email: "", phone: "", resume: null, role: selectedRole });
      setErrors({ name: "", email: "", phone: "", resume: "", submit: "" });
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit: error.message || "Failed to submit application. Please try again.",
      }));
    }
  };

  return (
    <Box
      ref={formRef}
      sx={{
        p: { xs: 2, md: 4 },
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid #cbd5e1',
        background: '#ffffff',
        borderRadius: '10px',
        maxWidth: 600,
        mx: "auto",
        '&:hover': {
          boxShadow: { md: '0 6px 16px rgba(0, 0, 0, 0.15)' },
        },
      }}
    >
      <Typography
        variant={isMobile ? "h6" : "h5"}
        sx={{
          color: "#1e2a44",
          fontWeight: "bold",
          mb: 3,
          textAlign: "center",
          fontFamily: '"Kanit", sans-serif',
        }}
      >
        Apply for a Position
      </Typography>
      {selectedRole && (
        <Typography
          variant="body2"
          sx={{
            color: "#475569",
            mb: 2,
            textAlign: "center",
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          Applying for: {selectedRole}
        </Typography>
      )}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          {...sharedInputProps}
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          sx={{
            '& .MuiFormHelperText-root': { color: '#dc2626' },
          }}
        />
        <TextField
          {...sharedInputProps}
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{
            '& .MuiFormHelperText-root': { color: '#dc2626' },
          }}
        />
        <TextField
          {...sharedInputProps}
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          sx={{
            '& .MuiFormHelperText-root': { color: '#dc2626' },
          }}
        />
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2" sx={{ color: "#475569", mb: 1 }}>
            Resume (PDF or Word, max 5MB)
          </Typography>
          <Box
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={handleClick}
            sx={{
              minHeight: 150,
              backgroundColor: "#f1f5f9",
              border: "2px dashed #cbd5e1",
              borderColor: isDragging ? "#94a3b8" : "#cbd5e1",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              p: 2,
              cursor: "pointer",
              transition: "border-color 0.3s",
              "&:hover": { borderColor: "#94a3b8" },
            }}
          >
            <Typography variant="body2" sx={{ color: "#475569", px: 2 }}>
              Drag & drop your resume here, or click to select
            </Typography>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileInputChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </Box>
          {formData.resume && (
            <Typography variant="caption" sx={{ color: "#475569", mt: 1 }}>
              Selected: {formData.resume.name}
            </Typography>
          )}
          {errors.resume && (
            <Typography variant="caption" sx={{ color: "#dc2626", mt: 0.5 }}>
              {errors.resume}
            </Typography>
          )}
        </Box>
        {errors.submit && (
          <Alert severity="error" sx={{ mb: 2, color: '#dc2626' }}>
            {errors.submit}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2, color: '#2563eb' }}>
            {success}
          </Alert>
        )}
        <Button
          type="submit"
          variant="contained"
          endIcon={<ArrowForward />}
          sx={{
            alignSelf: "flex-start",
            px: 3,
            py: 1,
            borderRadius: 6,
            textTransform: "none",
            background: '#324177',
            color: '#ffffff',
            fontFamily: '"Roboto", sans-serif',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
            "&:hover": {
              background: "white",
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
              color: 'black',
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