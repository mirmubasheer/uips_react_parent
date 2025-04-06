import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const GetInTouch: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }

    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: "power2.out" }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power2.out" }
      );
    }

    return () => {
      const elements = [containerRef.current, formRef.current, imageRef.current].filter(Boolean);
      if (elements.length > 0) {
        gsap.set(elements, { opacity: 1 });
      }
    };
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="110vh" // Further reduced from 80vh
      sx={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        padding: { xs: 1, md: 2 },
       
      }}
    >
      <Box
        ref={containerRef}
        width={{ xs: "90%", sm: 600, md: 1000 }} // Reduced width further
        height={{ xs: "auto", sm: 400, md: 450 }} // Reduced height further
        sx={{ maxWidth: "100%" }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            background: "linear-gradient(to right, #94a3b8, #e2e8f0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2, // Reduced margin
          }}
        >
          Get In Touch
        </Typography>
        <Card
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            borderRadius: 3,
            boxShadow: "0 6px 24px rgba(0, 0, 0, 0.3)",
            background: "linear-gradient(45deg, #1e293b 0%, #334155 100%)",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Left Side - Form */}
          <Box
            ref={formRef}
            sx={{
              width: { xs: "100%", sm: "70%" },
              padding: { xs: 1, sm: 4, md:6 }, // Reduced padding further
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              sx={{
                mb: 1, // Reduced margin further
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(15, 23, 42, 0.5) !important", // Force background
                  "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
                  "&:hover fieldset": { borderColor: "#64748b" },
                  "&.Mui-focused fieldset": { borderColor: "#475569" },
                  "&.Mui-focused": {
                    backgroundColor: "rgba(15, 23, 42, 0.7) !important",
                  },
                  "& input": {
                    color: "#ffffff !important", // Force white text
                  },
                  "& input:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.5) inset !important",
                    WebkitTextFillColor: "#ffffff !important",
                    backgroundColor: "rgba(15, 23, 42, 0.5) !important",
                  },
                  "& input:-webkit-autofill:focus": {
                    WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.7) inset !important",
                    WebkitTextFillColor: "#ffffff !important",
                    backgroundColor: "rgba(15, 23, 42, 0.7) !important",
                  },
                },
                "& .MuiInputLabel-root": { color: "#94a3b8" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#64748b" },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              sx={{
                mb: 1,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(15, 23, 42, 0.5) !important",
                  "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
                  "&:hover fieldset": { borderColor: "#64748b" },
                  "&.Mui-focused fieldset": { borderColor: "#475569" },
                  "&.Mui-focused": {
                    backgroundColor: "rgba(15, 23, 42, 0.7) !important",
                  },
                  "& input": {
                    color: "#ffffff !important",
                  },
                  "& input:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.5) inset !important",
                    WebkitTextFillColor: "#ffffff !important",
                    backgroundColor: "rgba(15, 23, 42, 0.5) !important",
                  },
                  "& input:-webkit-autofill:focus": {
                    WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.7) inset !important",
                    WebkitTextFillColor: "#ffffff !important",
                    backgroundColor: "rgba(15, 23, 42, 0.7) !important",
                  },
                },
                "& .MuiInputLabel-root": { color: "#94a3b8" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#64748b" },
              }}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              sx={{
                mb: 1,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(15, 23, 42, 0.5) !important",
                  "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
                  "&:hover fieldset": { borderColor: "#64748b" },
                  "&.Mui-focused fieldset": { borderColor: "#475569" },
                  "&.Mui-focused": {
                    backgroundColor: "rgba(15, 23, 42, 0.7) !important",
                  },
                  "& input": {
                    color: "#ffffff !important",
                  },
                  "& input:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.5) inset !important",
                    WebkitTextFillColor: "#ffffff !important",
                    backgroundColor: "rgba(15, 23, 42, 0.5) !important",
                  },
                  "& input:-webkit-autofill:focus": {
                    WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.7) inset !important",
                    WebkitTextFillColor: "#ffffff !important",
                    backgroundColor: "rgba(15, 23, 42, 0.7) !important",
                  },
                },
                "& .MuiInputLabel-root": { color: "#94a3b8" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#64748b" },
              }}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={2} // Reduced rows for smaller size
              sx={{
                mb: 1,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(15, 23, 42, 0.5) !important",
                  "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
                  "&:hover fieldset": { borderColor: "#64748b" },
                  "&.Mui-focused fieldset": { borderColor: "#475569" },
                  "&.Mui-focused": {
                    backgroundColor: "rgba(15, 23, 42, 0.7) !important",
                  },
                  "& textarea": {
                    color: "#ffffff !important",
                  },
                  "& textarea:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.5) inset !important",
                    WebkitTextFillColor: "#ffffff !important",
                    backgroundColor: "rgba(15, 23, 42, 0.5) !important",
                  },
                  "& textarea:-webkit-autofill:focus": {
                    WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.7) inset !important",
                    WebkitTextFillColor: "#ffffff !important",
                    backgroundColor: "rgba(15, 23, 42, 0.7) !important",
                  },
                },
                "& .MuiInputLabel-root": { color: "#94a3b8" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#64748b" },
              }}
            />
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #475569 0%, #64748b 100%)",
                color: "#e2e8f0",
                padding: "6px 16px", // Smaller button
                borderRadius: 2,
                boxShadow: "0 4px 15px rgba(71, 85, 105, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(71, 85, 105, 0.5)",
                  background: "linear-gradient(45deg, #334155 0%, #475569 100%)",
                },
              }}
              endIcon={<ArrowForward />}
            >
              Submit
            </Button>
          </Box>

          {/* Right Side - Image */}
          <Box
            ref={imageRef}
            sx={{
              width: { xs: "100%", sm: "50%" },
              height: { xs: 200, sm: "100%" }, // Reduced image height
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))",
              },
            }}
          >
            <img
              src="https://media.istockphoto.com/id/617893290/photo/modern-keyboard-wih-contact-us-button.webp?a=1&b=1&s=612x612&w=0&k=20&c=52mSs8AUVn4Fe5EtZm_X3nD4cm7zVgqKHDUSxrSweMU="
              alt="Get in Touch"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
            />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default GetInTouch;