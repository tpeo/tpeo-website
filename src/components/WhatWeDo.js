import React from "react";
import { Box, Typography, useTheme, Paper } from "@mui/material";

function WhatWeDo() {
  const theme = useTheme();

  const InfoCard = ({ title, description }) => (
    <Paper
      sx={{
        p: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        border: "1px solid #FFFFFF",
        width: "407px", // Fixed width for each card
        height: "550px", // Fixed height for uniformity
        backgroundColor: "#202938",
        color: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "55%",
          backgroundColor: "#D9D9D9",
          mb: 2,
        }}
      >
        {/* Image placeholder */}
      </Box>
      <Typography
        variant="h6"
        sx={{ fontSize: "24px", fontWeight: "bold", fontWeight: 700 }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "22px",
          textAlign: "center",
          width: "90%",
          fontWeight: 400,
        }}
      >
        {description}
      </Typography>
    </Paper>
  );

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: "40%",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "48px",
              color: theme.palette.secondary.main,
              marginBottom: "20px",
            }}
          >
            What we do
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "",
              fontWeight: 400,
              fontSize: "24px",
              color: theme.palette.text.primary,
            }}
          >
            At the core of TPEO lies the intersection of Product, Design, and
            Engineering.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            mt: 4,
          }}
        >
          <InfoCard
            title="Incubate"
            description="Teach full-stack engineering, UI/UX design, and product management in semester long courses"
          />
          <InfoCard
            title="Improve"
            description="Provide hands-on experience through non-profit and startup client partnerships"
          />
          <InfoCard
            title="Innovate"
            description="Foster a community of innovators and builders who are going to change the world"
          />
        </Box>
      </Box>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: "40%",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "48px",
              color: theme.palette.secondary.main,
              marginBottom: "20px",
            }}
          >
            Our three tenets
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "",
              fontWeight: 400,
              fontSize: "24px",
              color: theme.palette.text.primary,
            }}
          >
            At the core of TPEO lies the intersection of Product, Design, and
            Engineering.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            mt: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "",
              fontWeight: 400,
              fontSize: "24px",
              color: theme.palette.text.primary,
            }}
          >
            Product
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "",
              fontWeight: 400,
              fontSize: "24px",
              color: theme.palette.text.primary,
            }}
          >
            Design
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "",
              fontWeight: 400,
              fontSize: "24px",
              color: theme.palette.text.primary,
            }}
          >
            Engineering
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default WhatWeDo;
