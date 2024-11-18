// ProjectCard.js

import React from "react";
import { Paper, Box, Divider, IconButton, Typography } from "@mui/material";
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
          borderRadius: "12px",
          border: "1px solid #FFFFFF",
          width: "100%", // Use full width of the motion.div
          backgroundColor: "#202938",
          color: "#FFFFFF",
          paddingBottom: "3vh",
          overflow: "hidden", // Prevent content overflow
        }}
        elevation={3} // Add some elevation (shadow)
      >
        {/* Image Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: `${parseInt(height) * 0.7}vh`, // Adjust as needed
            backgroundColor: "#1A1F27",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            overflow: "hidden",
          }}
        >
          <img
            src={imageLink}
            alt={name}
            style={{
              maxWidth: "80%",
              maxHeight: "80%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>

        {/* Divider */}
        <Divider sx={{ borderColor: "#FFFFFF" }} />

        {/* Content Section */}
        <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "5px",
        }}
      >
          <IconButton color="inherit" sx={{ padding: "0", margin: "2vh" }}>
          <img
            src={iconImage}
            alt={`${name} Icon`}
            style={{ width: "4vh", height: "4vh" }}
          />
        </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            width: "90%"
            }}
          >
            <Typography
            variant="subtitle1"
            sx={{
              fontSize: "1.3vw",
              fontWeight: 700,
              marginTop: "2vh",
            }}
          >
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#CCCCCC" }}>
              {brief}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default ProjectCard;
