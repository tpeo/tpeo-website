import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  IconButton,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import WhatWeDo from "../components/WhatWeDo";

function HomePage() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          height: "calc(100vh - 126px)",
          display: "flex",
          flexDirection: "column", // Change to column for vertical centering
          justifyContent: "center", // Center vertically
          background: "linear-gradient(25deg, #EC913E, #1A202C 50%)",
          color: "#FFFFFF",
          padding: "0px 0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", // vertical centering
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // Align items to the left
              mr: 10, // Add margin right for spacing between text and carousel
              ml: '85px',
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
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: "24px" }}
              >
                Texas Product Engineering Organization
              </Typography>
            </Paper>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontWeight: 700,
                fontSize: "64px",
                mb: 0,
              }}
            >
              we build tech for good.
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontWeight: 700,
                fontSize: "64px",
                mb: 4,
              }}
            >
              we are TPEO.
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "24px",
                maxWidth: "600px",
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
                fontSize: "20px",
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
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              mr: 10
            }}
          >
            <Box
              sx={{
                width: 500,
                height: 500,
                backgroundColor: "#D9D9D9",
                borderRadius: "12px",
              }}
            >
              Carousel Placeholder
            </Box>
            <IconButton
              sx={{ color: "white", "&:hover": { color: "#FB8C14" }, ml: 2 }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <WhatWeDo></WhatWeDo>
    </>
  );
}

export default HomePage;
