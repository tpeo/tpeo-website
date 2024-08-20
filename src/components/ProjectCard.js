import React from "react";
import { Paper, Box, Divider, IconButton, Typography } from "@mui/material";

const ProjectCard = ({ name, imageLink, brief, iconImage, height, width }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        border: "1px solid #FFFFFF",
        width: `${width}vw`,
        height: `${height}vh`,
        backgroundColor: "#202938",
        color: "#FFFFFF",
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
        }}
      >
        <img
          src={imageLink}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />
      </Box>
      <Divider sx={{ borderColor: "#FFFFFF" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <IconButton
          color="inherit"
          sx={{ padding: "0", margin: "2vh" }}
        >
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
          <Typography variant="body2" sx={{ fontSize: "1.1vw" }}>
            {brief}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProjectCard;