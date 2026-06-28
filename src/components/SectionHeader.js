import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

function SectionHeader({ title, description, mb = 0, textAlign = "center" }) {
  return (
    <Box sx={{ textAlign, maxWidth: "816px", mb, mx: textAlign === "center" ? "auto" : 0 }}>
      <Typography
        sx={{
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 700,
          fontSize: "48px",
          lineHeight: "36px",
          color: "#F3801A",
          mb: 3,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: "28px",
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
};

export default SectionHeader;
