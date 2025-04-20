import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import gsap from "gsap";

const EnquiryForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement | null>(null);
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
  });

  // GSAP animation for slide-in from right
  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", phone: "", message: "" };

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
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <Box
      ref={formRef}
      sx={{
        p: { xs: 2, md: 3 },
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        position: { md: "sticky" },
        top: { md: "20px" },
        height: "fit-content",
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={600}
        sx={{ mb: 2, color: "white" }}
      >
        Enquire About This Project
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
              "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
              "&.Mui-focused fieldset": { borderColor: "rgba(255, 255, 255, 0.5)" },
              "&.Mui-focused": {
                backgroundColor: "rgba(15, 23, 42, 0.7)",
              },
            },
            "& .MuiInputBase-input": {
              color: "#ffffff",
              "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px rgba(15, 23, 42, 0.5) inset !important",
                WebkitTextFillColor: "#ffffff !important",
                backgroundColor: "rgba(15, 23, 42, 0.5) !important",
              },
              "&:-webkit-autofill:focus": {
                WebkitBoxShadow: "0 0 0 1000px rgba(15, 23, 42, 0.7) inset !important",
                WebkitTextFillColor: "#ffffff !important",
                backgroundColor: "rgba(15, 23, 42, 0.7) !important",
              },
            },
            "& .MuiInputLabel-root": {
              color: "rgba(255, 255, 255, 0.7)",
              "&.Mui-focused": { color: "#ffffff" },
              "&.Mui-filled": { color: "#ffffff" },
            },
          }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
              "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
              "&.Mui-focused fieldset": { borderColor: "rgba(255, 255, 255, 0.5)" },
              "&.Mui-focused": {
                backgroundColor: "rgba(15, 23, 42, 0.7)",
              },
            },
            "& .MuiInputBase-input": {
              color: "#ffffff",
              "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px rgba(15, 23, 42, 0.5) inset !important",
                WebkitTextFillColor: "#ffffff !important",
                backgroundColor: "rgba(15, 23, 42, 0.5) !important",
              },
              "&:-webkit-autofill:focus": {
                WebkitBoxShadow: "0 0 0 1000px rgba(15, 23, 42, 0.7) inset !important",
                WebkitTextFillColor: "#ffffff !important",
                backgroundColor: "rgba(15, 23, 42, 0.7) !important",
              },
            },
            "& .MuiInputLabel-root": {
              color: "rgba(255, 255, 255, 0.7)",
              "&.Mui-focused": { color: "#ffffff" },
              "&.Mui-filled": { color: "#ffffff" },
            },
          }}
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
              "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
              "&.Mui-focused fieldset": { borderColor: "rgba(255, 255, 255, 0.5)" },
              "&.Mui-focused": {
                backgroundColor: "rgba(15, 23, 42, 0.7)",
              },
            },
            "& .MuiInputBase-input": {
              color: "#ffffff",
              "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px rgba(15, 23, 42, 0.5) inset !important",
                WebkitTextFillColor: "#ffffff !important",
                backgroundColor: "rgba(15, 23, 42, 0.5) !important",
              },
              "&:-webkit-autofill:focus": {
                WebkitBoxShadow: "0 0 0 1000px rgba(15, 23, 42, 0.7) inset !important",
                WebkitTextFillColor: "#ffffff !important",
                backgroundColor: "rgba(15, 23, 42, 0.7) !important",
              },
            },
            "& .MuiInputLabel-root": {
              color: "rgba(255, 255, 255, 0.7)",
              "&.Mui-focused": { color: "#ffffff" },
              "&.Mui-filled": { color: "#ffffff" },
            },
          }}
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          multiline
          rows={4}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
              "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
              "&.Mui-focused fieldset": { borderColor: "rgba(255, 255, 255, 0.5)" },
              "&.Mui-focused": {
                backgroundColor: "rgba(15, 23, 42, 0.7)",
              },
            },
            "& .MuiInputBase-input": {
              color: "#ffffff",
            },
            "& .MuiInputLabel-root": {
              color: "rgba(255, 255, 255, 0.7)",
              "&.Mui-focused": { color: "#ffffff" },
              "&.Mui-filled": { color: "#ffffff" },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#3B82F6",
            "&:hover": { backgroundColor: "#2563EB" },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default EnquiryForm;