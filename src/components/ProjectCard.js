import React from "react";
import PropTypes from "prop-types";
import { Paper, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ProjectCard = ({
  name,
  imageLink,
  brief,
  iconImage,
  height,
  width,
  link,
}) => {
  const openLink = () => {
    window.open(link, "_blank");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Slightly grows on hover
      style={{
        width: `${width}vw`,
        margin: "1rem",
        cursor: "pointer",
      }}
      onClick={openLink}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "16px",
          border: "1px solid #444",
          width: "100%", // Use full width of the motion.div
          backgroundColor: "#191919",
          color: "#FFFFFF",
          paddingBottom: "3vh",
          overflow: "hidden", // Prevent content overflow
        }}
        elevation={0}
      >
        {/* Image Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: `${Number.parseInt(height) * 0.7}vh`, // Adjust as needed
            backgroundColor: "#1A1F27",
            overflow: "hidden",
          }}
        >
          <img
            src={imageLink}
            alt={name}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            padding: "24px",
            gap: "16px",
          }}
        >
          <Box sx={{ flexShrink: 0 }}>
            <Box
              component="img"
              src={iconImage}
              alt={`${name} Icon`}
              sx={{ width: "40px", height: "40px" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontSize: "24px",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontSize: "18px",
                lineHeight: "1.5",
                color: "#AAAAAA",
              }}
            >
              {brief}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  iconImage: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
