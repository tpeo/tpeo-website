import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

function SectionHeader({ title, description, mb = 0, textAlign = "center", maxWidth = "816px" }) {
  return (
    <Box
      sx={{
        textAlign,
        maxWidth,
        mb,
        mx: textAlign === "center" ? "auto" : 0,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "32px", sm: "40px", md: "48px" },
          lineHeight: { xs: "36px", md: "36px" },
          color: "#F3801A",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "18px", md: "24px" },
          lineHeight: { xs: "28px", md: "36px" },
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
