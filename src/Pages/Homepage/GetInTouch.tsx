// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { Box, Button, Card, TextField, Typography } from "@mui/material";
// import { ArrowForward } from "@mui/icons-material";

// const GetInTouch: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const formRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (containerRef.current) {
//       gsap.fromTo(
//         containerRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//       );
//     }

//     if (formRef.current) {
//       gsap.fromTo(
//         formRef.current,
//         { opacity: 0, x: -50 },
//         { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: "power2.out" }
//       );
//     }

//     if (imageRef.current) {
//       gsap.fromTo(
//         imageRef.current,
//         { opacity: 0, x: 50 },
//         { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power2.out" }
//       );
//     }

//     return () => {
//       const elements = [containerRef.current, formRef.current, imageRef.current].filter(Boolean);
//       if (elements.length > 0) {
//         gsap.set(elements, { opacity: 1 });
//       }
//     };
//   }, []);

//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       minHeight="110vh" // Further reduced from 80vh
//       sx={{
//         background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
//         padding: { xs: 1, md: 2 },
       
//       }}
//     >
//       <Box
//         ref={containerRef}
//         width={{ xs: "90%", sm: 600, md: 1000 }} // Reduced width further
//         height={{ xs: "auto", sm: 400, md: 450 }} // Reduced height further
//         sx={{ maxWidth: "100%" }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             textAlign: "center",
//             fontWeight: 600,
//             background: "linear-gradient(to right, #94a3b8, #e2e8f0)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             mb: 2, // Reduced margin
//           }}
//         >
//           Get In Touch
//         </Typography>
//         <Card
//           sx={{
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             flexDirection: { xs: "column", sm: "row" },
//             borderRadius: 3,
//             boxShadow: "0 6px 24px rgba(0, 0, 0, 0.3)",
//             background: "linear-gradient(45deg, #1e293b 0%, #334155 100%)",
//             overflow: "hidden",
//             border: "1px solid rgba(255, 255, 255, 0.05)",
//           }}
//         >
//           {/* Left Side - Form */}
//           <Box
//             ref={formRef}
//             sx={{
//               width: { xs: "100%", sm: "70%" },
//               padding: { xs: 1, sm: 4, md:6 }, // Reduced padding further
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//             }}
//           >
//             <TextField
//               label="Name"
//               variant="outlined"
//               fullWidth
//               sx={{
//                 mb: 1, // Reduced margin further
//                 "& .MuiOutlinedInput-root": {
//                   backgroundColor: "rgba(15, 23, 42, 0.5) !important", // Force background
//                   "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
//                   "&:hover fieldset": { borderColor: "#64748b" },
//                   "&.Mui-focused fieldset": { borderColor: "#475569" },
//                   "&.Mui-focused": {
//                     backgroundColor: "rgba(15, 23, 42, 0.7) !important",
//                   },
//                   "& input": {
//                     color: "#ffffff !important", // Force white text
//                   },
//                   "& input:-webkit-autofill": {
//                     WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.5) inset !important",
//                     WebkitTextFillColor: "#ffffff !important",
//                     backgroundColor: "rgba(15, 23, 42, 0.5) !important",
//                   },
//                   "& input:-webkit-autofill:focus": {
//                     WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.7) inset !important",
//                     WebkitTextFillColor: "#ffffff !important",
//                     backgroundColor: "rgba(15, 23, 42, 0.7) !important",
//                   },
//                 },
//                 "& .MuiInputLabel-root": { color: "#94a3b8" },
//                 "& .MuiInputLabel-root.Mui-focused": { color: "#64748b" },
//               }}
//             />
//             <TextField
//               label="Email"
//               variant="outlined"
//               fullWidth
//               sx={{
//                 mb: 1,
//                 "& .MuiOutlinedInput-root": {
//                   backgroundColor: "rgba(15, 23, 42, 0.5) !important",
//                   "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
//                   "&:hover fieldset": { borderColor: "#64748b" },
//                   "&.Mui-focused fieldset": { borderColor: "#475569" },
//                   "&.Mui-focused": {
//                     backgroundColor: "rgba(15, 23, 42, 0.7) !important",
//                   },
//                   "& input": {
//                     color: "#ffffff !important",
//                   },
//                   "& input:-webkit-autofill": {
//                     WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.5) inset !important",
//                     WebkitTextFillColor: "#ffffff !important",
//                     backgroundColor: "rgba(15, 23, 42, 0.5) !important",
//                   },
//                   "& input:-webkit-autofill:focus": {
//                     WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.7) inset !important",
//                     WebkitTextFillColor: "#ffffff !important",
//                     backgroundColor: "rgba(15, 23, 42, 0.7) !important",
//                   },
//                 },
//                 "& .MuiInputLabel-root": { color: "#94a3b8" },
//                 "& .MuiInputLabel-root.Mui-focused": { color: "#64748b" },
//               }}
//             />
//             <TextField
//               label="Phone Number"
//               variant="outlined"
//               fullWidth
//               sx={{
//                 mb: 1,
//                 "& .MuiOutlinedInput-root": {
//                   backgroundColor: "rgba(15, 23, 42, 0.5) !important",
//                   "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
//                   "&:hover fieldset": { borderColor: "#64748b" },
//                   "&.Mui-focused fieldset": { borderColor: "#475569" },
//                   "&.Mui-focused": {
//                     backgroundColor: "rgba(15, 23, 42, 0.7) !important",
//                   },
//                   "& input": {
//                     color: "#ffffff !important",
//                   },
//                   "& input:-webkit-autofill": {
//                     WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.5) inset !important",
//                     WebkitTextFillColor: "#ffffff !important",
//                     backgroundColor: "rgba(15, 23, 42, 0.5) !important",
//                   },
//                   "& input:-webkit-autofill:focus": {
//                     WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.7) inset !important",
//                     WebkitTextFillColor: "#ffffff !important",
//                     backgroundColor: "rgba(15, 23, 42, 0.7) !important",
//                   },
//                 },
//                 "& .MuiInputLabel-root": { color: "#94a3b8" },
//                 "& .MuiInputLabel-root.Mui-focused": { color: "#64748b" },
//               }}
//             />
//             <TextField
//               label="Message"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={2} // Reduced rows for smaller size
//               sx={{
//                 mb: 1,
//                 "& .MuiOutlinedInput-root": {
//                   backgroundColor: "rgba(15, 23, 42, 0.5) !important",
//                   "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
//                   "&:hover fieldset": { borderColor: "#64748b" },
//                   "&.Mui-focused fieldset": { borderColor: "#475569" },
//                   "&.Mui-focused": {
//                     backgroundColor: "rgba(15, 23, 42, 0.7) !important",
//                   },
//                   "& textarea": {
//                     color: "#ffffff !important",
//                   },
//                   "& textarea:-webkit-autofill": {
//                     WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.5) inset !important",
//                     WebkitTextFillColor: "#ffffff !important",
//                     backgroundColor: "rgba(15, 23, 42, 0.5) !important",
//                   },
//                   "& textarea:-webkit-autofill:focus": {
//                     WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.7) inset !important",
//                     WebkitTextFillColor: "#ffffff !important",
//                     backgroundColor: "rgba(15, 23, 42, 0.7) !important",
//                   },
//                 },
//                 "& .MuiInputLabel-root": { color: "#94a3b8" },
//                 "& .MuiInputLabel-root.Mui-focused": { color: "#64748b" },
//               }}
//             />
//             <Button
//               variant="contained"
//               sx={{
//                 background: "linear-gradient(45deg, #475569 0%, #64748b 100%)",
//                 color: "#e2e8f0",
//                 padding: "6px 16px", // Smaller button
//                 borderRadius: 2,
//                 boxShadow: "0 4px 15px rgba(71, 85, 105, 0.3)",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   transform: "translateY(-2px)",
//                   boxShadow: "0 6px 20px rgba(71, 85, 105, 0.5)",
//                   background: "linear-gradient(45deg, #334155 0%, #475569 100%)",
//                 },
//               }}
//               endIcon={<ArrowForward />}
//             >
//               Submit
//             </Button>
//           </Box>

//           {/* Right Side - Image */}
//           <Box
//             ref={imageRef}
//             sx={{
//               width: { xs: "100%", sm: "50%" },
//               height: { xs: 200, sm: "100%" }, // Reduced image height
//               position: "relative",
//               "&:after": {
//                 content: '""',
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))",
//               },
//             }}
//           >
//             <img
//               src="https://media.istockphoto.com/id/617893290/photo/modern-keyboard-wih-contact-us-button.webp?a=1&b=1&s=612x612&w=0&k=20&c=52mSs8AUVn4Fe5EtZm_X3nD4cm7zVgqKHDUSxrSweMU="
//               alt="Get in Touch"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 transition: "transform 0.3s ease",
//               }}
//             />
//           </Box>
//         </Card>
//       </Box>
//     </Box>
//   );
// };

// export default GetInTouch;






// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import {
//   Box,
//   Button,
//   Card,
//   TextField,
//   Typography,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { ArrowForward } from "@mui/icons-material";

// const GetInTouch: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const formRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   useEffect(() => {
//     const elements: { ref: React.RefObject<HTMLDivElement>; anim: any }[] = [
//       { ref: containerRef, anim: { from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } } },
//       { ref: formRef, anim: { from: { opacity: 0, x: -30 }, to: { opacity: 1, x: 0 } } },
//     ];

//     // Only include image on desktop
//     if (!isMobile) {
//       elements.push({ ref: imageRef, anim: { from: { opacity: 0, x: 30 }, to: { opacity: 1, x: 0 } } });
//     }

//     const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } });

//     elements.forEach(({ ref, anim }, i) => {
//       if (ref.current) {
//         // stagger them slightly
//         const overlap = i === 0 ? 0 : i * -0.4;
//         tl.fromTo(ref.current, anim.from, anim.to, overlap);
//       }
//     });

//     return () => {
//       // clear only the props GSAP set
//       const cleared = elements.map(e => e.ref.current).filter(Boolean) as Element[];
//       gsap.set(cleared, { clearProps: "all" });
//     };
//   }, [isMobile]);

//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       minHeight="100vh"
//       sx={{
//         background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
//         p: 2,
//       }}
//     >
//       <Box ref={containerRef} width={{ xs: "100%", sm: 600, md: 800 }} sx={{ maxWidth: "100%" }}>
//         <Typography
//           variant={isMobile ? "h5" : "h4"}
//           sx={{
//             textAlign: "center",
//             fontWeight: 600,
//             mb: 3,
//             background: "linear-gradient(to right, #94a3b8, #e2e8f0)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           Get In Touch
//         </Typography>

//         <Card
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", sm: "row" },
//             borderRadius: 3,
//             boxShadow: "0 6px 24px rgba(0, 0, 0, 0.3)",
//             overflow: "hidden",
//             border: "1px solid rgba(255, 255, 255, 0.05)",
//             background: "linear-gradient(45deg, #1e293b 0%, #334155 100%)",
//           }}
//         >
//           {/* Form Side */}
//           <Box
//             ref={formRef}
//             component="form"
//             noValidate
//             autoComplete="off"
//             sx={{
//               flex: 1,
//               p: { xs: 2, sm: 4 },
//               display: "flex",
//               flexDirection: "column",
//               gap: 2,
//             }}
//           >
//             {["Name", "Email", "Phone Number"].map((label) => (
//               <TextField
//                 key={label}
//                 label={label}
//                 variant="filled"
//                 fullWidth
//                 InputProps={{
//                   sx: {
//                     backgroundColor: "rgba(15, 23, 42, 0.6)",
//                     color: "#fff",
//                   },
//                 }}
//                 InputLabelProps={{ sx: { color: "#94a3b8" } }}
//               />
//             ))}

//             <TextField
//               label="Message"
//               variant="filled"
//               fullWidth
//               multiline
//               rows={isMobile ? 3 : 4}
//               InputProps={{
//                 sx: {
//                   backgroundColor: "rgba(15, 23, 42, 0.6)",
//                   color: "#fff",
//                 },
//               }}
//               InputLabelProps={{ sx: { color: "#94a3b8" } }}
//             />

//             <Button
//               variant="contained"
//               endIcon={<ArrowForward />}
//               sx={{
//                 alignSelf: "flex-start",
//                 px: 3,
//                 py: 1,
//                 borderRadius: 2,
//                 textTransform: "none",
//                 background: "linear-gradient(45deg, #475569 0%, #64748b 100%)",
//                 "&:hover": {
//                   background: "linear-gradient(45deg, #334155 0%, #475569 100%)",
//                 },
//               }}
//             >
//               Submit
//             </Button>
//           </Box>

//           {/* Image Side (desktop only) */}
//           {!isMobile && (
//             <Box
//               ref={imageRef}
//               sx={{
//                 flex: 1,
//                 position: "relative",
//                 "& img": { width: "100%", height: "100%", objectFit: "cover" },
//               }}
//             >
//               <img
//                 src="https://media.istockphoto.com/id/617893290/photo/modern-keyboard-wih-contact-us-button.webp?a=1&b=1&s=612x612&w=0&k=20&c=52mSs8AUVn4Fe5EtZm_X3nD4cm7zVgqKHDUSxrSweMU="
//                 alt="Get in Touch"
//               />
//               <Box
//                 sx={{
//                   position: "absolute",
//                   inset: 0,
//                   background: "rgba(0,0,0,0.3)",
//                 }}
//               />
//             </Box>
//           )}
//         </Card>
//       </Box>
//     </Box>
//   );
// };

// export default GetInTouch;







import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  Alert,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { ApiService } from '../../api/api';

const GetInTouch: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
    const elements: { ref: React.RefObject<HTMLDivElement>; anim: any }[] = [
      { ref: containerRef, anim: { from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } } },
      { ref: formRef, anim: { from: { opacity: 0, x: -30 }, to: { opacity: 1, x: 0 } } },
    ];

    if (!isMobile) {
      elements.push({ ref: imageRef, anim: { from: { opacity: 0, x: 30 }, to: { opacity: 1, x: 0 } } });
    }

    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } });

    elements.forEach(({ ref, anim }, i) => {
      if (ref.current) {
        const overlap = i === 0 ? 0 : i * -0.4;
        tl.fromTo(ref.current, anim.from, anim.to, overlap);
      }
    });

    return () => {
      const cleared = elements.map(e => e.ref.current).filter(Boolean) as Element[];
      gsap.set(cleared, { clearProps: "all" });
    };
  }, [isMobile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

      setSuccess("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({ name: "", email: "", phone: "", message: "", submit: "" });
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit: error.message || "Failed to submit form. Please try again.",
      }));
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: 'rgba(50, 65, 119, 0.8)', // Updated background to #324177 with opacity
        p: 2,
      }}
    >
      <Box ref={containerRef} width={{ xs: "100%", sm: 600, md: 800 }} sx={{ maxWidth: "100%" }}>
        <Typography
          variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              color: 'white',
              mb: 5,
              fontSize: { xs: "2.5rem", sm: "3rem" }, // Increased font size for xs screens
            }}
        >
          Get In Touch
        </Typography>

        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            borderRadius: 3,
            boxShadow: "0 6px 24px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            background: 'linear-gradient(135deg, hsl(220, 20%, 90%) 0%, hsl(220, 20%, 95%))', // Updated form background
          }}
        >
          <Box
            ref={formRef}
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              flex: 1,
              p: { xs: 2, sm: 4 },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {["Name", "Email", "Phone Number"].map((label, index) => (
              <TextField
                key={label}
                label={label}
                name={label.toLowerCase().replace(" number", "")}
                variant="filled"
                fullWidth
                onChange={handleChange}
                value={formData[label.toLowerCase().replace(" number", "")]}
                error={!!errors[label.toLowerCase().replace(" number", "")]}
                helperText={errors[label.toLowerCase().replace(" number", "")]}
                InputProps={{
                  sx: {
                    backgroundColor: "rgba(50, 65, 119, 0.1)", // Complements #324177
                    color: "#1e2a44", // Updated text color
                  },
                }}
                InputLabelProps={{
                    sx: {
                      color: "#1e2a44",
                      fontSize: { xs: "0.9rem", sm: "1rem" }, // Reduced font size for xs screens
                    },
                  }}
                  sx={{
                    '& .MuiFilledInput-root': {
                      '&:before': { borderBottomColor: 'rgba(50, 65, 119, 0.3)' },
                      '&:after': { borderBottomColor: '#324177' },
                    },
                }}
              />
            ))}

            <TextField
              label="Message"
              name="message"
              variant="filled"
              fullWidth
              multiline
              rows={isMobile ? 3 : 4}
              onChange={handleChange}
              value={formData.message}
              error={!!errors.message}
              helperText={errors.message}
              InputProps={{
                sx: {
                  backgroundColor: "rgba(50, 65, 119, 0.1)", // Complements #324177
                  color: "#1e2a44", // Updated text color
                },
              }}
              InputLabelProps={{
                  sx: {
                    color: "#1e2a44",
                    fontSize: { xs: "0.9rem", sm: "1rem" }, // Reduced font size for xs screens
                  },
                }}
                sx={{
                  '& .MuiFilledInput-root': {
                    '&:before': { borderBottomColor: 'rgba(50, 65, 119, 0.3)' },
                    '&:after': { borderBottomColor: '#324177' },
                  },
              }}
            />

            {errors.submit && (
              <Alert severity="error" sx={{ mb: 2, color: '#1e2a44' }}> {/* Updated text color */}
                {errors.submit}
              </Alert>
            )}
            {success && (
              <Alert severity="success" sx={{ mb: 2, color: '#1e2a44' }}> {/* Updated text color */}
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
                borderRadius: 2,
                textTransform: "none",
                background: '#324177', // Uses #324177
                color: "#ffffff",
                boxShadow: "0 4px 15px rgba(50, 65, 119, 0.3)", // Complements #324177
                "&:hover": {
                  background: 'white', // Darker shade of #324177
                  boxShadow: "0 6px 20px rgba(50, 65, 119, 0.8)",
                },
              }}
            >
              Submit
            </Button>
          </Box>

          {!isMobile && (
            <Box
              ref={imageRef}
              sx={{
                flex: 1,
                position: "relative",
                "& img": { width: "100%", height: "100%", objectFit: "cover" },
              }}
            >
              <img
                src="https://media.istockphoto.com/id/617893290/photo/modern-keyboard-wih-contact-us-button.webp?a=1&b=1&s=612x612&w=0&k=20&c=52mSs8AUVn4Fe5EtZm_X3nD4cm7zVgqKHDUSxrSweMU="
                alt="Get in Touch"
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, rgba(50, 65, 119, 0.1), rgba(50, 65, 119, 0.3))", // Complements #324177
                }}
              />
            </Box>
          )}
        </Card>
      </Box>
    </Box>
  );
};

export default GetInTouch;