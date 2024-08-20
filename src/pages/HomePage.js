import React from "react";
import { Box, Typography, Button, Paper, useTheme } from "@mui/material";
import WhatWeDo from "../components/WhatWeDo";
import WhereWeveWorked from "../components/WhereWeveWorked";
import Carousel from "../components/Carousel";

function HomePage() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          height: "13%",
        }}
      ></Box>
      <Box
        sx={{
          height: "87%",
          maxWidth: "100vw",
          display: "flex",
          background: "linear-gradient(25deg, #EC913E, #1A202C 50%)",
          color: "#FFFFFF",
          padding: "0px 0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // Ensure both components are side by side
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // Align items to the left
              mr: 10, // Add margin right for spacing between text and carousel
              ml: "5%",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                p: "10px 40px",
                borderRadius: "40px",
                border: "1px solid white",
                mb: 1,
                backgroundColor: "transparent",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: "1.3vw" }}
              >
                Texas Product Engineering Organization
              </Typography>
            </Paper>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontWeight: 700,
                fontSize: "3.8vw",
                mb: 0,
              }}
            >
              we build tech for good.
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontWeight: 700,
                fontSize: "3.8vw",
                mb: 4,
              }}
            >
              we are TPEO.
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "1.5vw",
                maxWidth: "95%",
                textAlign: "left",
                mb: 3,
              }}
            >
              We are Texas Product Engineering Organization @ UT Austin. We
              teach students of all majors how to build modern technological
              products.
            </Typography>
            <Button
              variant="contained"
              sx={{
                color: theme.palette.text.primary,
                fontFamily: "Helvetica Neue, Arial, sans-serif",
                fontSize: "1.2vw",
                borderRadius: "10px",
                padding: "10px 20px",
                backgroundColor: "#FB8C14",
                boxShadow: "",
                transition:
                  "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease",
                "&:hover": {
                  backgroundColor: "#FB8C14",
                  opacity: 1,
                  letterSpacing: "0.03em",
                  transition:
                    "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease",
                },
              }}
            >
              Join TPEO
            </Button>
          </Box>
          <Box
            sx={{
              width: "40%", // Assign nearly half the width to the carousel
              flexDirection: "column",
              justifyContent: "center", // Center the carousel vertically within its container
              paddingRight: "4%", // Ensure some padding to prevent touching the screen edge
            }}
          >
            <Carousel />
          </Box>
        </Box>
      </Box>
      <WhatWeDo />
      <WhereWeveWorked />
    </>
  );
}

export default HomePage;
