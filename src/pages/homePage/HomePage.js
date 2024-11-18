import React from "react";
import { Box, Typography, Button, Paper, useTheme, Fade } from "@mui/material";
import WhatWeDo from "./WhatWeDo";
import WhereWeveWorked from "./WhereWeveWorked";
import Carousel from "../../components/Carousel";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionButton = motion(Button);

function HomePage() {
  const theme = useTheme();
  const navigate = useNavigate();

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
            <Fade in={true} timeout={600}>
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
            </Fade>
            <Fade in={true} timeout={900}>
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
            </Fade>
            <Fade in={true} timeout={1100}>
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
            </Fade>
            <Fade in={true} timeout={1300}>
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
            </Fade>
            <Fade in={true} timeout={1500}>
              <a
                href="https://join.slack.com/t/txproduct/shared_invite/zt-2p5x3m8xd-0C8RxZDrqw6intMXII6aug"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <MotionButton
                  variant="contained"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  sx={{
                    color: theme.palette.text.primary,
                    fontSize: "1.2vw",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    backgroundColor: "#FB8C14",
                    boxShadow: "",
                    letterSpacing: "normal",
                    // Removed clunky transitions
                    "&:hover": {
                      backgroundColor: "#FB8C14",
                      opacity: 1,
                    },
                  }}
                >
                  Join TPEO
                </MotionButton>
              </a>
            </Fade>
          </Box>
          <Fade in={true} timeout={1500}>
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
          </Fade>
        </Box>
      </Box>
      <WhatWeDo />
      <WhereWeveWorked />
    </>
  );
}

export default HomePage;
