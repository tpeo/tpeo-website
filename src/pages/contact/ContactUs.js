import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button, Alert, CircularProgress } from "@mui/material";
import AnimatedPage from "../../components/AnimatedPage";
import imgDoodles from "../../assets/aboutIcons/contact-doodles.svg";
import imgEnvelope from "../../assets/aboutIcons/envelope.svg";
import socialInstagram from "../../assets/aboutIcons/social-instagram.svg";
import socialLinkedin from "../../assets/aboutIcons/social-linkedin.svg";
import socialYoutube from "../../assets/aboutIcons/social-medium.svg";

import {
  pageRootSx,
  sectionPx,
  heroPt,
  heroTitleFont,
  heroContentGap,
  decorativeBgSx,
} from "../../styles/pageLayout";

const socialIcons = [
  { src: socialInstagram, alt: "Instagram", href: "https://www.instagram.com/txproduct" },
  { src: socialLinkedin, alt: "LinkedIn", href: "https://www.linkedin.com/company/txproduct" },
  { src: socialYoutube, alt: "YouTube", href: "https://www.youtube.com/@texasproductengineeringorg5958/featured" },
];

function ContactInput({ label, placeholder, multiline = false, value, onChange, error }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "6px", md: "12px" }, width: "100%" }}>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 500,
          fontSize: { xs: "14px", md: "18px" },
          lineHeight: 1.2,
          color: error ? "#FF4444" : "#D7D7D7",
        }}
      >
        {label}
      </Typography>
      <Box
        component={multiline ? "textarea" : "input"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        sx={{
          backgroundColor: "#191919",
          border: error ? "1px solid #FF4444" : "1px solid #444",
          borderRadius: "10px",
          px: { xs: "10px", md: "14px" },
          py: { xs: "8px", md: "12px" },
          color: "#FFFFFF",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: { xs: "14px", md: "16px" },
          outline: "none",
          width: "100%",
          boxSizing: "border-box",
          "&::placeholder": {
            color: "#444",
          },
          ...(multiline && {
            minHeight: { xs: "80px", md: "100px" },
            resize: "vertical",
          }),
        }}
      />
    </Box>
  );
}

ContactInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
};

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Using Formspree for form submission
      // Replace 'YOUR_FORMSPREE_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedPage>
      <Box sx={pageRootSx}>
      {/* Background Doodles */}
      <Box
        component="img"
        src={imgDoodles}
        alt=""
        sx={{
          ...decorativeBgSx,
          top: "60%",
          right: "0",
          width: { lg: "300px", xl: "380px" },
          height: "auto",
          zIndex: 2,
        }}
      />

      {/* Main Content */}
      <Box
        sx={{
          pt: heroPt,
          pb: { xs: "48px", md: "128px" },
          px: { xs: "48px", sm: "40px", md: sectionPx.md, lg: sectionPx.lg },
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: "32px", lg: "60px" },
          position: "relative",
          zIndex: 1,
          boxSizing: "border-box",
          width: "100%",
          alignItems: "center",
        }}
      >
        {/* Left Side: Let's Connect */}
        <Box sx={{ flex: 1, maxWidth: { lg: "770px" }, width: "100%", display: "flex", flexDirection: "column", gap: { xs: "32px", md: "61px" } }}>
          {/* Hero Content */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: heroContentGap, width: "100%", minWidth: 0 }}>
            <Typography
              sx={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 700,
                fontSize: heroTitleFont,
                lineHeight: 1.1,
                color: "#FFFFFF",
              }}
            >
              let’s connect
            </Typography>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "16px", md: "28px" },
                lineHeight: { xs: "24px", md: "39px" },
                color: "#D7D7D7",
              }}
            >
              Have a question or want to work with us? We’d love to hear from you.
            </Typography>
          </Box>

          {/* Email Info */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box component="img" src={imgEnvelope} alt="" sx={{ width: { xs: "28px", md: "40px" }, height: { xs: "28px", md: "40px" } }} />
              <Typography
                sx={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: { xs: "16px", md: "28px" },
                  lineHeight: 1.2,
                  color: "#FFFFFF",
                }}
              >
                Email
              </Typography>
            </Box>
            <Typography
              component="a"
              href="mailto:tpeoteam@gmail.com"
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 500,
                fontSize: { xs: "16px", md: "28px" },
                lineHeight: 1.2,
                color: "#F3801A",
                textDecoration: "underline",
                cursor: "pointer",
                width: "fit-content",
              }}
            >
              tpeoteam@gmail.com
            </Typography>
          </Box>

          {/* Follow Us */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "10px", md: "16px" } }}>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 500,
                fontSize: { xs: "16px", md: "28px" },
                lineHeight: 1.2,
                color: "#D7D7D7",
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: { xs: "4px", md: "8px" } }}>
              {socialIcons.map((icon) => (
                <Box
                  key={icon.alt}
                  component="a"
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: { xs: "36px", md: "66px" },
                    height: { xs: "36px", md: "66px" },
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  <Box component="img" src={icon.src} alt={icon.alt} sx={{ width: "100%", height: "100%" }} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Right Side: Contact Form */}
        <Box
          sx={{
            backgroundColor: "#191919",
            border: "1px solid #444",
            borderRadius: "12px",
            p: { xs: "16px", sm: "20px", md: "24px" },
            width: { xs: "100%", lg: "650px" },
            maxWidth: "650px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: { xs: "16px", md: "24px" },
            height: "fit-content",
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: { xs: "12px", md: "16px" } }}>
            <ContactInput 
              label="Name" 
              placeholder="Your name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
            />
            <ContactInput 
              label="Email" 
              placeholder="Your email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
            />
            <ContactInput 
              label="Subject" 
              placeholder="What's this about?" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              error={!!errors.subject}
            />
            <ContactInput 
              label="Message" 
              placeholder="Tell us more...." 
              multiline 
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
            />
          </Box>

          {submitStatus === 'success' && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Message sent successfully! We'll get back to you soon.
            </Alert>
          )}
          {submitStatus === 'error' && (
            <Alert severity="error" sx={{ mt: 2 }}>
              Failed to send message. Please try again or email us directly at team@txproduct.org
            </Alert>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#F3801A",
              color: "#101010",
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "14px", md: "16px" },
              textTransform: "none",
              borderRadius: "12px",
              px: { xs: "16px", md: "20px" },
              py: { xs: "8px", md: "12px" },
              width: { xs: "100%", sm: "fit-content" },
              "&:hover": {
                backgroundColor: "#FB8C14",
              },
              "&:disabled": {
                backgroundColor: "#888",
                color: "#666",
              },
            }}
          >
            {isSubmitting ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CircularProgress size={16} sx={{ color: '#101010' }} />
                Sending...
              </Box>
            ) : (
              'Send Message'
            )}
          </Button>
        </Box>
      </Box>
    </Box>
    </AnimatedPage>
  );
}

export default ContactUsPage;
