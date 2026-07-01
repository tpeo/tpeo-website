import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

function SectionHeader({ title, description, mb = 0, textAlign = "center", maxWidth = "1370px" }) {
  return (
    <Box sx={{ textAlign, maxWidth, mb, mx: textAlign === "center" ? "auto" : 0 }}>
      <Typography
        sx={{
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 700,
          fontSize: "48px",
          lineHeight: "1.2",
          color: "#F3801A",
          mb: 2,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "36px",
          color: "#FFFFFF",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  mb: PropTypes.number,
  textAlign: PropTypes.string,
  maxWidth: PropTypes.string,
};

export default SectionHeader;
