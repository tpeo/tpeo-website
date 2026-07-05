import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/material";

const AnimatedPage = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // If mobile, just return children without animation
  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

AnimatedPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimatedPage;
