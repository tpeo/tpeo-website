import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button } from "@mui/material";
import AnimatedPage from "../../components/AnimatedPage";
import imgDoodles from "../../assets/aboutIcons/contact-doodles.svg";
import imgEnvelope from "../../assets/aboutIcons/envelope.svg";
import socialEmail from "../../assets/aboutIcons/social-email.svg";
import socialInstagram from "../../assets/aboutIcons/social-instagram.svg";
import socialLinkedin from "../../assets/aboutIcons/social-linkedin.svg";
import socialYoutube from "../../assets/aboutIcons/social-youtube.svg";
import socialMedium from "../../assets/aboutIcons/social-medium.svg";

import {
  pageRootSx,
  sectionPx,
  heroPt,
  heroTitleFont,
  heroContentGap,
  decorativeBgSx,
} from "../../styles/pageLayout";

const socialIcons = [
  { src: socialEmail, alt: "Email", href: "mailto:tpeoteam@gmail.com" },
  { src: socialInstagram, alt: "Instagram", href: "https://www.instagram.com/txproduct" },
  { src: socialLinkedin, alt: "LinkedIn", href: "https://www.linkedin.com/company/txproduct" },
  { src: socialMedium, alt: "Medium", href: "https://medium.com/@txproduct" },
  { src: socialYoutube, alt: "YouTube", href: "https://www.youtube.com/channel/tpeo" },
];

function ContactInput({ label, placeholder, multiline = false }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "6px", md: "12px" }, width: "100%" }}>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 500,
          fontSize: { xs: "16px", md: "28px" },
          lineHeight: 1.2,
          color: "#D7D7D7",
        }}
      >
        {label}
      </Typography>
      <Box
        component={multiline ? "textarea" : "input"}
        placeholder={placeholder}
        sx={{
          backgroundColor: "#191919",
          border: "1px solid #444",
          borderRadius: "10px",
          px: { xs: "12px", md: "19px" },
          py: { xs: "10px", md: "15px" },
          color: "#FFFFFF",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: { xs: "16px", md: "24px" },
          outline: "none",
          width: "100%",
          boxSizing: "border-box",
          "&::placeholder": {
            color: "#444",
          },
          ...(multiline && {
            minHeight: { xs: "100px", md: "150px" },
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
};

function ContactUsPage() {
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: heroContentGap }}>
            <Typography
              sx={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "32px", md: heroTitleFont },
                lineHeight: "normal",
                color: "#FFFFFF",
              }}
            >
              let’s connect.
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
            p: { xs: "20px", sm: "32px", md: "40px 32px" },
            width: { xs: "100%", lg: "642px" },
            maxWidth: "642px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: { xs: "24px", md: "60px" },
            height: "fit-content",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "16px", md: "24px" } }}>
            <ContactInput label="Name" placeholder="Your name" />
            <ContactInput label="Email" placeholder="Your email" />
            <ContactInput label="Subject" placeholder="What's this about?" />
            <ContactInput label="Message" placeholder="Tell us more...." multiline />
          </Box>

          <Button
            sx={{
              backgroundColor: "#F3801A",
              color: "#101010",
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "16px", md: "20px" },
              textTransform: "none",
              borderRadius: "12px",
              px: { xs: "20px", md: "24px" },
              py: { xs: "10px", md: "20px" },
              width: { xs: "100%", sm: "fit-content" },
              "&:hover": {
                backgroundColor: "#FB8C14",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
    </AnimatedPage>
  );
}

export default ContactUsPage;
