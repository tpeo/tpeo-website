import React from "react";
import { Box, Typography, useTheme, Paper, IconButton } from "@mui/material";
import designIcon from "../assets/designIcon.png";
import engineeringIcon from "../assets/engineeringIcon.png";
import productIcon from "../assets/productIcon.png";
import tenetVector from "../assets/tenetVector.png";

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
        width: "27%", // Fixed width for each card
        height: "60vh", // Fixed height for uniformity
        backgroundColor: "#202938",
        color: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "60%",
          backgroundColor: "#D9D9D9",
          mb: 2,
        }}
      >
        {/* Image placeholder */}
      </Box>
      <Typography variant="h6" sx={{ fontSize: "1.3vw", fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "1.2vw",
          textAlign: "center",
          width: "90%",
          fontWeight: 400,
        }}
      >
        {description}
      </Typography>
    </Paper>
  );

  const IconWithLabel = ({ iconSrc, altText, label }) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 0,
      }}
    >
      <IconButton
        color="inherit"
        aria-label={altText}
        sx={{ padding: 0, margin: 0 }}
      >
        <img
          src={iconSrc}
          alt={altText}
          style={{ width: "11.5vh", height: "11.5vh" }}
        />
      </IconButton>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "",
          fontWeight: 400,
          fontSize: "1.8vw",
          color: theme.palette.text.primary,
          textAlign: "center",
          mt: 2,
        }}
      >
        {label}
      </Typography>
    </Box>
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
              fontSize: "3.8vw",
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
              fontSize: "1.3vw",
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
          margin: 0,
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
              fontSize: "3.8vw",
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
              fontSize: "1.5vw",
              color: theme.palette.text.primary,
              paddingY: "20px",
            }}
          >
            At the core of TPEO lies the intersection of Product, Design, and
            Engineering.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            mt: 4,
            gap: "3vw",
            width: "90vw",
            justifyContent: "center",
          }}
        >
          <IconWithLabel
            iconSrc={productIcon}
            altText="Product Icon"
            label="Product"
          />
          <img
            src={tenetVector}
            alt="Tenet Vector"
            style={{
              width: "20vw",
              height: "6vh",
              marginTop: 0,
              marginRight: "1vw",
            }}
          />
          <IconWithLabel
            iconSrc={designIcon}
            altText="Design Icon"
            label="Design"
          />
          <img
            src={tenetVector}
            alt="Tenet Vector"
            style={{ width: "20vw", height: "6vh", marginTop: 0 }}
          />
          <IconWithLabel
            iconSrc={engineeringIcon}
            altText="Engineering Icon"
            label="Engineering"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "90vw",
            mt: 4,
            marginRight: "2vw",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "1vw",
              textAlign: "center",
              color: theme.palette.text.primary,
              width: "25%",
            }}
          >
            Product fellows will step into the shoes of a Product Manager,
            learning how to oversee the entire lifecycle of a product from
            ideation to launch, while collaborating with cross-functional teams
            to drive product vision and strategy.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1vw",
              textAlign: "center",
              color: theme.palette.text.primary,
              width: "25%",
            }}
          >
            Design fellows immerse themselves in the end-to-end design process,
            honing design thinking skills through collaboration and
            decision-making. We cultivate a real-world growth environment where
            fellows can push the boundaries of their craft through hands-on
            experience and teamwork.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1vw",
              textAlign: "center",
              color: theme.palette.text.primary,
              width: "25%",
            }}
          >
            Engineering fellows dive deep into the full-stack development
            process, mastering the skills needed to build scalable, user-centric
            applications. From frontend interfaces to backend systems, they
            collaborate with designers and product managers to bring innovative
            ideas to life, gaining hands-on experience in real-world engineering
            challenges.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default WhatWeDo;
