import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { logoUrls } from "../data/workedLogosData";

const LogoItem = ({ logo, isBgLogo }) => (
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
        filter: isBgLogo 
          ? "grayscale(100%) invert(1) brightness(0.85)" 
          : "brightness(0) invert(0.85)", 
        mixBlendMode: isBgLogo ? "screen" : "normal",
        opacity: 1,
        transition: "filter 0.3s ease, transform 0.3s ease",
        "&:hover": {
          filter: "brightness(1) invert(0) grayscale(0%)",
          mixBlendMode: "normal",
          transform: "scale(1.1)",
        },
      }}
    />
  </Box>
);

const getIsBgLogo = (logo) => 
  logo.includes('9892136b') || // blackstone
  logo.includes('1ae828cc') || // linkedin
  logo.includes('2de56e0c') || // salesforce
  logo.includes('60fd3883') || // instagram
  logo.includes('268457e2') || // pinterest
  logo.includes('bfadd3c4');   // logo14 (twitch)

const MarqueeLogos = () => {
  // Use the verified logo list from Figma and ensure uniqueness
  const logos = Array.from(new Set(logoUrls));
  
  // Split logos for two rows or just reuse
  const row1Logos = [...logos, ...logos];
  const row2Logos = [...logos.slice().reverse(), ...logos.slice().reverse()];

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
      {/* Row 1: Moving Left */}
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 180, // Even slower
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          display: "flex",
          width: "max-content",
          alignItems: "center",
        }}
      >
        {row1Logos.map((logo, index) => (
          <LogoItem 
            key={`row1-${index}-${logo.slice(-10)}`} 
            logo={logo} 
            isBgLogo={getIsBgLogo(logo)} 
          />
        ))}
      </motion.div>

      {/* Row 2: Moving Right */}
      <motion.div
        animate={{
          x: ["-50%", "0%"],
        }}
        transition={{
          duration: 160, // Slightly different speed for visual interest
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          display: "flex",
          width: "max-content",
          alignItems: "center",
        }}
      >
        {row2Logos.map((logo, index) => (
          <LogoItem 
            key={`row2-${index}-${logo.slice(-10)}`} 
            logo={logo} 
            isBgLogo={getIsBgLogo(logo)} 
          />
        ))}
      </motion.div>
    </Box>
  );
};

export default MarqueeLogos;
