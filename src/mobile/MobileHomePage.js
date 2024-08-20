import React from "react";
import { Box, Typography, Button } from "@mui/material";

const MobileHomePage = () => {
  return (
    <Box
      sx={{
        p: 3,
        textAlign: "center",
        background: "linear-gradient(to right, rgba(26, 32, 44, 1) 40%, #825835 100%)",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, fontSize: "2.5rem", color: "#FFFFFF", mb: 2 }}
      >
        we build tech for good.
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, fontSize: "2.5rem", color: "#FB8C14", mb: 4 }}
      >
        we are TPEO.
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "1.2rem", color: "#FFFFFF", mb: 4 }}
      >
        We are Texas Product Engineering Organization @ UT Austin. We teach
        students of all majors how to build modern technological products. THME MOBIEL VERSION IS A WORK IN PROGRESS PLEASE DONT LOOK
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FB8C14",
          color: "#FFFFFF",
          fontSize: "1.5rem",
          padding: "1vh 3vh",
          borderRadius: "12px",
          mb: 2,
        }}
      >
        Join TPEO
      </Button>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#FFFFFF",
          color: "#FFFFFF",
          fontSize: "1.5rem",
          padding: "1vh 3vh",
          borderRadius: "12px",
          mb: 2,
          display: "block",
          width: "100%",
          maxWidth: "90%",
        }}
      >
        New Fellows
      </Button>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#FFFFFF",
          color: "#FFFFFF",
          fontSize: "1.5rem",
          padding: "1vh 3vh",
          borderRadius: "12px",
          display: "block",
          width: "100%",
          maxWidth: "90%",
        }}
      >
        Clients
      </Button>
    </Box>
  );
};

export default MobileHomePage;
