// import React, { useEffect, useRef, useState } from "react";
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
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

// const EnquiryForm: React.FC = () => {
//   const formRef = useRef<HTMLDivElement>(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   useEffect(() => {
//     if (formRef.current) {
//       gsap.fromTo(
//         formRef.current,
//         { opacity: 0, x: 50 },
//         { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
//       );
//     }
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validate = () => {
//     let isValid = true;
//     const newErrors = { name: "", email: "", phone: "", message: "" };

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//       isValid = false;
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//       isValid = false;
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone is required";
//       isValid = false;
//     }
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;
//     console.log("Form submitted:", formData);
//     setFormData({ name: "", email: "", phone: "", message: "" });
//   };

//   return (
//     <Box
//       ref={formRef}
//       sx={{
//         p: { xs: 2, sm: 3 },
//         background: "linear-gradient(135deg, #弁172a 0%, #1e293b 100%)",
//         borderRadius: 3,
//         width: "100%",
//         maxWidth: isMobile ? 750 : 450, // Increased maxWidth for mobile view to 750
//         mx: "auto",
//         boxSizing: "border-box",
//       }}
//     >
//       <Typography
//         variant={isMobile ? "h6" : "h5"}
//         fontWeight={600}
//         sx={{
//           mb: 2,
//           textAlign: "center",
//           background: "linear-gradient(to right, #94a3b8, #e2e8f0)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         Enquire About This Project
//       </Typography>

//       <Box
//         component="form"
//         onSubmit={handleSubmit}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 2,
//           alignItems: isMobile ? "center" : "flex-start",
//         }}
//       >
//         <TextField
//           {...sharedInputProps}
//           label="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           error={!!errors.name}
//           helperText={errors.name}
//           sx={{ width: "100%" }}
//         />

//         <TextField
//           {...sharedInputProps}
//           label="Email"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           error={!!errors.email}
//           helperText={errors.email}
//           sx={{ width: "100%" }}
//         />

//         <TextField
//           {...sharedInputProps}
//           label="Phone"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           error={!!errors.phone}
//           helperText={errors.phone}
//           sx={{ width: "100%" }}
//         />

//         <TextField
//           {...sharedInputProps}
//           label="Message"
//           name="message"
//           multiline
//           rows={isMobile ? 3 : 4}
//           value={formData.message}
//           onChange={handleChange}
//           error={!!errors.message}
//           helperText={errors.message}
//           sx={{ width: "100%" }}
//         />

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
//             width: "100%", // Makes the button full width on mobile
//           }}
//         >
//           Submit
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default EnquiryForm;


import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Alert,
} from "@mui/material";
import gsap from "gsap";
import { ArrowForward } from "@mui/icons-material";
import { ApiService } from '../../../../api/api';
import { color } from "framer-motion";

const sharedInputProps = {
  variant: "filled" as const,
  fullWidth: true as const,
 InputProps: {
  sx: {
    backgroundColor: '#ffffff',
    "& .MuiInputBase-input": { color: '#1e2a44' },
    "&:hover": { color:'black', backgroundColor: '#ffffff' },
  },
},
  InputLabelProps: {
    sx: {
      color: "black",
      "&.Mui-focused": { color: "black" },
    },
  },
};

const EnquiryForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    submit: "",
  });
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", submit: "" }));
    setSuccess("");
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", phone: "", message: "", submit: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
      isValid = false;
    } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Invalid phone number";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
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
      await ApiService.submitHomepageForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      setSuccess("Enquiry submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({ name: "", email: "", phone: "", message: "", submit: "" });
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit: error.message || "Failed to submit enquiry. Please try again.",
      }));
    }
  };

  return (
    <Box
      ref={formRef}
           sx={{
            p: { xs: 2, sm: 3 },
            background: "linear-gradient(135deg, #弁172a 0%, #1e293b 100%)",
            borderRadius: 3,
            width: "100%",
            maxWidth: isMobile ? 750 : 450, // Increased maxWidth for mobile view to 750
            mx: "auto",
            boxSizing: "border-box",
          }}
    >
      <Typography
        variant={isMobile ? "h6" : "h5"}
        fontWeight={600}
        sx={{
          mb: 2,
          textAlign: "center",
          background: '#1e2a44',
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Enquire About This Project
      </Typography>

      {errors.submit && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errors.submit}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: { xs: "center", sm: "flex-start" }, // Center on mobile, left-align on desktop
        width: { xs: '90vw', sm: '100%' }, // Wider form on mobile
        maxWidth: { xs: '90%', sm: '500px' }, // Limit max width for better scaling
        mx: 'auto', // Center form horizontally
      }}
    >
      <TextField
        {...sharedInputProps}
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        sx={{ 
          width: { xs: '100%', sm: '100%' }, // Full width on mobile
          maxWidth: { xs: '90vw', sm: '100%' }, // Wider on mobile
          color: '#1e2a44',
        }}
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
        sx={{ 
          width: { xs: '100%', sm: '100%' },
          maxWidth: { xs: '90vw', sm: '100%' },
        }}
      />

      <TextField
        {...sharedInputProps}
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        sx={{ 
          width: { xs: '100%', sm: '100%' },
          maxWidth: { xs: '90vw', sm: '100%' },
        }}
      />

      <TextField
        {...sharedInputProps}
        label="Message"
        name="message"
        multiline
        rows={isMobile ? 3 : 4}
        value={formData.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        sx={{ 
          width: { xs: '100%', sm: '100%' },
          maxWidth: { xs: '90vw', sm: '100%' },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        endIcon={<ArrowForward />}
        sx={{
          alignSelf: { xs: 'center', sm: 'flex-start' }, // Center button on mobile
          px: 3,
          py: 1,
          borderRadius: 2,
          textTransform: "none",
          background: "#324177",
          "&:hover": {
            background: "white",
          },
          width: { xs: '100%', sm: 'auto' }, // Full width on mobile, auto on desktop
          maxWidth: { xs: '90vw', sm: '200px' }, // Wider button on mobile
        }}
      >
        Submit
      </Button>
    </Box>
    </Box>
  );
};

export default EnquiryForm;