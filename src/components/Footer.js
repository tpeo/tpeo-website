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

function FooterMobile({ onNavigate }) {
  return (
    <Box
      sx={{
        display: { xs: "flex", lg: "none" },
        flexDirection: "column",
        alignItems: "center",
        px: "24px",
        pt: "56px",
        pb: "40px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        component="img"
        src={tpeoLogoGradient}
        alt="TPEO Logo"
        onClick={() => onNavigate("/")}
        sx={{
          width: "180px",
          height: "auto",
          objectFit: "contain",
          cursor: "pointer",
        }}
      />

      <Box
        onClick={() => onNavigate("/join")}
        sx={{
          mt: "28px",
          width: "100%",
          maxWidth: "320px",
          backgroundColor: "#F3801A",
          color: "#101010",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "36px",
          borderRadius: "12px",
          py: "16px",
          textAlign: "center",
          cursor: "pointer",
          "&:hover": { backgroundColor: "#FB8C14" },
        }}
      >
        Join TPEO
      </Box>

      <Box
        sx={{
          mt: "40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px 16px",
          width: "100%",
          maxWidth: "320px",
        }}
      >
        {footerNavItems.map(({ path, text }) => (
          <Typography
            key={path}
            onClick={() => onNavigate(path)}
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "22px",
              color: "#FFFFFF",
              cursor: "pointer",
              textAlign: "center",
              "&:hover": { opacity: 0.8 },
            }}
          >
            {text}
          </Typography>
        ))}
        <Typography
          onClick={() => onNavigate("/contact")}
          sx={{
            gridColumn: "1 / -1",
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "22px",
            color: "#F3801A",
            textDecoration: "underline",
            cursor: "pointer",
            textAlign: "center",
            "&:hover": { opacity: 0.8 },
          }}
        >
          Contact Us
        </Typography>
      </Box>

      <Box
        sx={{
          mt: "36px",
          display: "flex",
          gap: "12px",
          alignItems: "center",
          justifyContent: "center",
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
              width: "48px",
              height: "48px",
              display: "block",
              flexShrink: 0,
              "&:hover": { opacity: 0.8 },
            }}
          >
            <Box component="img" src={src} alt={alt} sx={{ width: "100%", height: "100%", display: "block" }} />
          </Box>
        ))}
      </Box>

      <Typography
        sx={{
          mt: "36px",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: "20px",
          color: "#D7D7D7",
          textAlign: "center",
          maxWidth: "300px",
        }}
      >
        @ 2026 Texas Product Engineering Organization. All rights reserved.
      </Typography>
    </Box>
  );
}

function FooterDesktop({ onNavigate }) {
  return (
    <Box
      sx={{
        display: { xs: "none", lg: "block" },
        position: "relative",
        px: "102px",
        pt: "128px",
        pb: "60px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box
          component="img"
          src={tpeoLogoGradient}
          alt="TPEO Logo"
          onClick={() => onNavigate("/")}
          sx={{
            width: "211px",
            height: "67.794px",
            objectFit: "contain",
            cursor: "pointer",
            mt: "30px",
          }}
        />

        <Box
          onClick={() => onNavigate("/join")}
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "67.59px",
        }}
      >
        <Box sx={{ display: "flex", gap: "60.204px", alignItems: "center" }}>
          {footerNavItems.map(({ path, text }) => (
            <Typography
              key={path}
              onClick={() => onNavigate(path)}
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
            onClick={() => onNavigate("/contact")}
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

        <Box sx={{ display: "flex", gap: "11.246px", alignItems: "flex-start" }}>
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
              <Box component="img" src={src} alt={alt} sx={{ width: "100%", height: "100%", display: "block" }} />
            </Box>
          ))}
        </Box>
      </Box>

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
  );
}

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
