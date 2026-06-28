import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import tpeoLogoGradient from "../assets/aboutIcons/tpeo-logo-gradient-footer.svg";
import socialEmail from "../assets/aboutIcons/social-email.svg";
import socialInstagram from "../assets/aboutIcons/social-instagram.svg";
import socialLinkedin from "../assets/aboutIcons/social-linkedin.svg";
import socialYoutube from "../assets/aboutIcons/social-youtube.svg";

const footerNavItems = [
  { path: "/team", text: "Our Team" },
  { path: "/new-fellow", text: "Fellowship" },
  { path: "/clients", text: "Projects" },
  { path: "/sponsors", text: "Partners" },
];

const socialIcons = [
  { src: socialEmail, alt: "Email", href: "mailto:tpeoteam@gmail.com" },
  { src: socialInstagram, alt: "Instagram", href: "https://www.instagram.com/txproduct" },
  { src: socialLinkedin, alt: "LinkedIn", href: "https://www.linkedin.com/company/txproduct" },
  { src: socialYoutube, alt: "YouTube", href: "https://www.youtube.com/channel/tpeo" },
];

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#101010",
        borderTop: "1px solid #444",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Main footer content — positioned to match Figma exactly */}
      <Box
        sx={{
          position: "relative",
          px: "102px",
          pt: "128px",
          pb: "60px",
        }}
      >
        {/* Row 1: Logo (left) + Join TPEO button (right) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* TPEO gradient logo — 211×67.794px, at top:158-128=30px from content top */}
          <Box
            component="img"
            src={tpeoLogoGradient}
            alt="TPEO Logo"
            onClick={() => handleNavigation("/")}
            sx={{
              width: "211px",
              height: "67.794px",
              objectFit: "contain",
              cursor: "pointer",
              mt: "30px",
            }}
          />

          {/* Join TPEO button — at top:146-128=18px from content top */}
          <Box
            onClick={() => handleNavigation("/join")}
            sx={{
              backgroundColor: "#F3801A",
              color: "#101010",
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "28px",
              lineHeight: "36px",
              borderRadius: "13.782px",
              px: "28.943px",
              py: "21.707px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: "18px",
              "&:hover": { backgroundColor: "#FB8C14" },
            }}
          >
            Join TPEO
          </Box>
        </Box>

        {/* Row 2: Nav links (left) + Social icons (right) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "67.59px",
          }}
        >
          {/* Nav links */}
          <Box
            sx={{
              display: "flex",
              gap: "60.204px",
              alignItems: "center",
            }}
          >
            {footerNavItems.map(({ path, text }) => (
              <Typography
                key={path}
                onClick={() => handleNavigation(path)}
                sx={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: "22.52px",
                  lineHeight: "normal",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  "&:hover": { opacity: 0.8 },
                }}
              >
                {text}
              </Typography>
            ))}
            <Typography
              onClick={() => handleNavigation("/contact")}
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: "22.52px",
                lineHeight: "normal",
                color: "#F3801A",
                textDecoration: "underline",
                textDecorationSkipInk: "none",
                textUnderlinePosition: "from-font",
                cursor: "pointer",
                whiteSpace: "nowrap",
                "&:hover": { opacity: 0.8 },
              }}
            >
              Contact Us
            </Typography>
          </Box>

          {/* Social icons — Figma assets, 65.933px each, gap 11.246px */}
          <Box
            sx={{
              display: "flex",
              gap: "11.246px",
              alignItems: "flex-start",
            }}
          >
            {socialIcons.map(({ src, alt, href }) => (
              <Box
                key={alt}
                component="a"
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                sx={{
                  width: "65.933px",
                  height: "65.933px",
                  display: "block",
                  flexShrink: 0,
                  "&:hover": { opacity: 0.8 },
                }}
              >
                <Box
                  component="img"
                  src={src}
                  alt={alt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Copyright — left-aligned per Figma */}
        <Typography
          sx={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "18.898px",
            lineHeight: "normal",
            color: "#D7D7D7",
            textAlign: "left",
            mt: "44px",
            whiteSpace: "nowrap",
          }}
        >
          @ 2026 Texas Product Engineering Organization. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;