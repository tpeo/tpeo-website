import React from "react";
import { Box } from "@mui/material";
import JoinCTA from "../components/JoinCTA";

function JoinTPEOPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#101010",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: "141px",
        boxSizing: "border-box",
      }}
    >
      <JoinCTA />
    </Box>
  );
}

export default JoinTPEOPage;
