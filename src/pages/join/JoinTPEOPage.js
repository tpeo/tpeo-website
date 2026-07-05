import React from "react";
import { Box } from "@mui/material";
import AnimatedPage from "../../components/AnimatedPage";
import JoinCTA from "../../components/JoinCTA";

function JoinTPEOPage() {
  return (
    <AnimatedPage>
      <Box
      sx={{
        backgroundColor: "#101010",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <JoinCTA />
      </Box>
    </AnimatedPage>
  );
}

export default JoinTPEOPage;
