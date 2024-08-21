import React from "react";
import { Paper, Box, Divider, IconButton, Typography } from "@mui/material";

const ProjectCard = ({
  name,
  imageLink,
  brief,
  iconImage,
  height,
  width,
  link,
}) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        border: "1px solid #FFFFFF",
        width: `${width}vw`,
        height: `auto`,
        backgroundColor: "#202938",
        color: "#FFFFFF",
        paddingBottom: "3vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          height: `${parseInt(height) * 0.7}vh`, // Scale height for the image box
          overflow: "hidden", // Ensure the image is contained
        }}
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block", // Ensure the anchor tag takes up the full space
            width: "100%",
            height: "100%",
            textDecoration: "none", // Remove underline or other text decorations
          }}
        >
          <img
            src={imageLink}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              display: "block", // Ensure the image behaves correctly within the anchor
            }}
          />
        </a>
      </Box>
      <Divider sx={{ borderColor: "#FFFFFF" }} />
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
          <Typography variant="body2" sx={{ fontSize: "0.9vw" }}>
            {brief}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProjectCard;
