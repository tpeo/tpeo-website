import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import tpeoLogoGradient from "../assets/aboutIcons/tpeo-logo-gradient-footer.svg";
import socialEmail from "../assets/aboutIcons/social-email.svg";
import socialInstagram from "../assets/aboutIcons/social-instagram.svg";
import socialLinkedin from "../assets/aboutIcons/social-linkedin.svg";
import socialYoutube from "../assets/aboutIcons/social-medium.svg";

const footerNavItems = [
  { path: "/team", text: "Our Team" },
  { path: "/new-fellow", text: "Fellowship" },
  { path: "/clients", text: "Projects" },
  { path: "/sponsors", text: "Partners" },
];

const socialIcons = [
  { src: socialEmail, alt: "Email", href: "mailto:team@txproduct.org" },
  { src: socialInstagram, alt: "Instagram", href: "https://www.instagram.com/txproduct" },
  { src: socialLinkedin, alt: "LinkedIn", href: "https://www.linkedin.com/company/txproduct" },
  { src: socialYoutube, alt: "YouTube", href: "https://www.youtube.com/@texasproductengineeringorg5958/featured" },
];

function FooterMobile({ onNavigate }) {
  return (
    <Box
      sx={{
        display: { xs: "flex", lg: "none" },
        flexDirection: "column",
        alignItems: "center",
        px: "24px",
        pt: "40px",
        pb: "32px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px 20px",
          mb: "32px",
          width: "100%",
        }}
      >
        {footerNavItems.map(({ path, text }) => (
          <Typography
            key={path}
            onClick={() => onNavigate(path)}
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 500,
              fontSize: "13px",
              color: "#FFFFFF",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease-in-out",
              "&:hover": { 
                color: "#F3801A",
                transform: "translateY(-2px)"
              },
            }}
          >
            {text}
          </Typography>
        ))}
        <Typography
          onClick={() => onNavigate("/contact")}
          sx={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 500,
            fontSize: "13px",
            color: "#F3801A",
            textDecoration: "underline",
            cursor: "pointer",
            whiteSpace: "nowrap",
            transition: "all 0.2s ease-in-out",
            "&:hover": { 
              color: "#FB8C14",
              transform: "translateY(-2px)"
            },
          }}
        >
          Contact Us
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          {socialIcons.map(({ src, alt, href }) => (
            <Box
              key={alt}
              component="a"
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              sx={{
                width: "24px",
                height: "24px",
                "&:hover": { opacity: 0.8 },
              }}
            >
              <Box component="img" src={src} alt={alt} sx={{ width: "100%", height: "100%" }} />
            </Box>
          ))}
        </Box>

        <Typography
          sx={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "11px",
            color: "#888888",
            textAlign: "center",
          }}
        >
          © 2026 Texas Product Engineering Organization
        </Typography>
      </Box>
    </Box>
  );
}

FooterMobile.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

function FooterDesktop({ onNavigate }) {
  return (
    <Box
      sx={{
        display: { xs: "none", lg: "block" },
        position: "relative",
        px: { lg: "72px", xl: "102px" },
        pt: { lg: "56px", xl: "64px" },
        pb: { lg: "36px", xl: "40px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={tpeoLogoGradient}
          alt="TPEO Logo"
          onClick={() => onNavigate("/")}
          sx={{
            height: { lg: "56px", xl: "64px" },
            width: "auto",
            aspectRatio: "211 / 68",
            objectFit: "contain",
            display: "block",
            cursor: "pointer",
            transition: "opacity 0.2s ease",
            "&:hover": { opacity: 0.85 },
          }}
        />

        <Box
          onClick={() => onNavigate("/join")}
          sx={{
            backgroundColor: "#F3801A",
            color: "#101010",
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 600,
            fontSize: { lg: "15px", xl: "16px" },
            lineHeight: 1.2,
            borderRadius: "10px",
            px: { lg: "20px", xl: "22px" },
            py: { lg: "12px", xl: "13px" },
            cursor: "pointer",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.2s ease, transform 0.2s ease",
            "&:hover": {
              backgroundColor: "#FB8C14",
              transform: "translateY(-1px)",
            },
          }}
        >
          Join TPEO
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: { lg: "36px", xl: "40px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { lg: "32px", xl: "40px" },
            alignItems: "center",
          }}
        >
          {footerNavItems.map(({ path, text }) => (
            <Typography
              key={path}
              onClick={() => onNavigate(path)}
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 500,
                fontSize: { lg: "15px", xl: "16px" },
                lineHeight: 1.3,
                color: "#D7D7D7",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.2s ease, transform 0.2s ease",
                "&:hover": {
                  color: "#F3801A",
                  transform: "translateY(-1px)",
                },
              }}
            >
              {text}
            </Typography>
          ))}
          <Typography
            onClick={() => onNavigate("/contact")}
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 500,
              fontSize: { lg: "15px", xl: "16px" },
              lineHeight: 1.3,
              color: "#F3801A",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "color 0.2s ease, transform 0.2s ease",
              "&:hover": {
                color: "#FB8C14",
                transform: "translateY(-1px)",
              },
            }}
          >
            Contact Us
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {socialIcons.map(({ src, alt, href }) => (
            <Box
              key={alt}
              component="a"
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              sx={{
                width: { lg: "36px", xl: "40px" },
                height: { lg: "36px", xl: "40px" },
                display: "block",
                flexShrink: 0,
                opacity: 0.9,
                transition: "opacity 0.2s ease, transform 0.2s ease",
                "&:hover": {
                  opacity: 1,
                  transform: "translateY(-1px)",
                },
              }}
            >
              <Box
                component="img"
                src={src}
                alt={alt}
                sx={{ width: "100%", height: "100%", display: "block" }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: 1.4,
          color: "#888888",
          textAlign: "left",
          mt: { lg: "28px", xl: "32px" },
        }}
      >
        © 2026 Texas Product Engineering Organization. All rights reserved.
      </Typography>
    </Box>
  );
}

FooterDesktop.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#101010",
        borderTop: "1px solid #444",
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <FooterMobile onNavigate={handleNavigation} />
      <FooterDesktop onNavigate={handleNavigation} />
    </Box>
  );
};

export default Footer;
