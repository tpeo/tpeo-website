import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { logoUrls } from "../data/workedLogosData";

const LogoItem = ({ logo }) => (
  <Box
    sx={{
      flexShrink: 0,
      width: { xs: "140px", md: "220px" },
      height: { xs: "60px", md: "100px" },
      mx: { xs: 2, md: 4 },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box
      component="img"
      src={logo}
      alt="Company Logo"
      sx={{
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
        filter: "grayscale(1) brightness(1.55) contrast(1.08)",
        opacity: 0.92,
        transition: "filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
        "&:hover": {
          filter: "none",
          opacity: 1,
          transform: "scale(1.08)",
        },
      }}
    />
  </Box>
);

const MarqueeLogos = () => {
  const logos = Array.from(new Set(logoUrls));
  const midpoint = 22;
  const row1 = logos.slice(0, midpoint);
  const row2 = logos.slice(midpoint);

  // Duplicate each row so the marquee loop is seamless.
  const row1Logos = [...row1, ...row1];
  const row2Logos = [...row2, ...row2];

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        py: 3,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: 0,
          width: { xs: "60px", md: "200px" },
          height: "100%",
          zIndex: 2,
          pointerEvents: "none",
        },
        "&::before": {
          left: 0,
          background: "linear-gradient(to right, #101010 0%, transparent 100%)",
        },
        "&::after": {
          right: 0,
          background: "linear-gradient(to left, #101010 0%, transparent 100%)",
        },
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 120, ease: "linear", repeat: Infinity }}
        style={{ display: "flex", width: "max-content", alignItems: "center" }}
      >
        {row1Logos.map((logo, index) => (
          <LogoItem key={`row1-${index}-${logo.slice(-10)}`} logo={logo} />
        ))}
      </motion.div>

      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 130, ease: "linear", repeat: Infinity }}
        style={{ display: "flex", width: "max-content", alignItems: "center" }}
      >
        {row2Logos.map((logo, index) => (
          <LogoItem key={`row2-${index}-${logo.slice(-10)}`} logo={logo} />
        ))}
      </motion.div>
    </Box>
  );
};

export default MarqueeLogos;
