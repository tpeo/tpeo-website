// MobileHomePage.js

import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LeafIcon from "@mui/icons-material/EnergySavingsLeaf"; // Leaf icon
import TargetIcon from "@mui/icons-material/TrackChanges"; // Target icon
import BellIcon from "@mui/icons-material/NotificationsActive"; // Bell icon
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"; // Product icon
import BrushIcon from "@mui/icons-material/Brush"; // Design icon
import CodeIcon from "@mui/icons-material/Code"; // Engineering icon
import TPEOLogo from "../assets/vectorImages/logo.png"; // Replace with your actual logo path
import companiesMobile from "../assets/companiesMobile.png"; // Replace with actual path to your image

const MobileHomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const cards = [
    {
      title: "Incubate",
      icon: (
        <LeafIcon
          sx={{ fontSize: "40px", color: theme.palette.primary.main }}
        />
      ),
      description:
        "Teach full-stack engineering, UI/UX design, and product management in semester-long courses",
    },
    {
      title: "Improve",
      icon: (
        <TargetIcon
          sx={{ fontSize: "40px", color: theme.palette.primary.main }}
        />
      ),
      description:
        "Provide hands-on experience through non-profit and startup client partnerships",
    },
    {
      title: "Innovate",
      icon: (
        <BellIcon
          sx={{ fontSize: "40px", color: theme.palette.primary.main }}
        />
      ),
      description:
        "Foster a community of innovators and builders who are going to change the world",
    },
  ];

  const tenets = [
    {
      title: "Product",
      icon: (
        <BusinessCenterIcon
          sx={{ fontSize: "40px", color: theme.palette.primary.main }}
        />
      ),
      description:
        "Develop skills in product management to lead successful projects.",
    },
    {
      title: "Design",
      icon: (
        <BrushIcon
          sx={{ fontSize: "40px", color: theme.palette.primary.main }}
        />
      ),
      description: "Learn UI/UX design to create user-friendly interfaces.",
    },
    {
      title: "Engineering",
      icon: (
        <CodeIcon
          sx={{ fontSize: "40px", color: theme.palette.primary.main }}
        />
      ),
      description:
        "Master full-stack engineering to build robust applications.",
    },
  ];

  return (
    <Box
      sx={{
        p: 2,
        background:
          "linear-gradient(to right, rgba(26, 32, 44, 1) 40%, #825835 100%)",
        minHeight: "100vh",
        color: "#FFFFFF",
      }}
    >
      {/* Header with Logo */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          mb: 3,
        }}
      >
        <IconButton
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          sx={{ p: 0 }}
        >
          <img
            src={TPEOLogo}
            alt="TPEO Logo"
            style={{ width: "40px", height: "40px" }}
          />
        </IconButton>
      </Box>

      {/* Main Text */}
      <Box sx={{ textAlign: "center", my: "20vh" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, fontSize: "2rem", color: "#FFFFFF", mb: 1 }}
        >
          we build tech for good.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: "2rem",
            color: theme.palette.primary.main,
            mb: 2,
          }}
        >
          we are TPEO.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1rem", color: "#FFFFFF", mb: 3 }}
        >
          We are Texas Product Engineering Organization @ UT Austin. We teach
          students of all majors how to build modern technological products.
        </Typography>
        {/* Action Buttons */}
        <a
          href="https://join.slack.com/t/txproduct/shared_invite/zt-2p5x3m8xd-0C8RxZDrqw6intMXII6aug"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "#FFFFFF",
              fontSize: "1rem",
              padding: "10px 20px",
              borderRadius: "12px",
              mb: 2,
              width: "100%",
            }}
          >
            Join TPEO
          </Button>
        </a>

        {/* <Button
          variant="outlined"
          onClick={() => navigate('/new-fellow')}
          sx={{
            borderColor: '#FFFFFF',
            color: '#FFFFFF',
            fontSize: '1rem',
            padding: '10px 20px',
            borderRadius: '12px',
            mb: 2,
            width: '100%',
          }}
        >
          New Fellows
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate('/clients')}
          sx={{
            borderColor: '#FFFFFF',
            color: '#FFFFFF',
            fontSize: '1rem',
            padding: '10px 20px',
            borderRadius: '12px',
            width: '100%',
          }}
        >
          Clients
        </Button> */}
      </Box>

      {/* "What We Do" Section */}
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: "1.5rem",
            color: theme.palette.primary.main,
            mb: 2,
            textAlign: "center",
          }}
        >
          What we do
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            color: "#FFFFFF",
            mb: 3,
            textAlign: "center",
          }}
        >
          We teach students of all majors how to build modern technological
          products.
        </Typography>
        {/* Cards */}
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#1A202C",
                  color: "#FFFFFF",
                  borderRadius: "12px",
                  p: 2,
                }}
              >
                {/* Icon */}
                <Box sx={{ mr: 2 }}>{card.icon}</Box>
                {/* Text */}
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, fontSize: "1.2rem", mb: 1 }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* "Our Three Tenets" Section */}
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: "1.5rem",
            color: theme.palette.primary.main,
            mb: 2,
            textAlign: "center",
          }}
        >
          Our three tenets
        </Typography>
        {/* Cards */}
        <Grid container spacing={2}>
          {tenets.map((tenet, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#1A202C",
                  color: "#FFFFFF",
                  borderRadius: "12px",
                  p: 2,
                }}
              >
                {/* Icon */}
                <Box sx={{ mr: 2 }}>{tenet.icon}</Box>
                {/* Text */}
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, fontSize: "1.2rem", mb: 1 }}
                  >
                    {tenet.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                    {tenet.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* "Where We've Worked" Section */}
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: "1.5rem",
            color: theme.palette.primary.main,
            mb: 2,
            textAlign: "center",
          }}
        >
          Where we've worked
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            color: "#FFFFFF",
            mb: 3,
            textAlign: "center",
          }}
        >
          TPEO helps people land jobs at cool places!
        </Typography>
        {/* Image */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={companiesMobile}
            alt="Companies"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MobileHomePage;
