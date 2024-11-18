import React from "react";
import { Box, Typography, useTheme, Paper, Fade } from "@mui/material";

function ContactUsPage() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          background: `linear-gradient(to right, rgba(26, 32, 44, 1) 40%, #825835 100%)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          paddingLeft: "10vw",
          paddingRight: "10vw",
        }}
      >
        {/* Main Contact Us Heading */}
        <Fade in={true} timeout={600}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "3.5vw",
              color: theme.palette.text.primary,
              textAlign: "left",
              marginBottom: "5vh",
              paddingTop: "25vh",
            }}
          >
            Contact Us
          </Typography>
        </Fade>

        {/* Subheading with Contact Information */}
        <Fade in={true} timeout={900}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              fontSize: "1.5vw",
              color: theme.palette.text.primary,
              textAlign: "left",
              marginBottom: "5vh",
              lineHeight: "1.5em",
              width: "45vw",
            }}
          >
            Have any questions as a prospective member? As a previous client? If
            you are a current or prospective member, client, or sponsor, please
            reach out to us at:{" "}
            <span style={{ fontWeight: 1000 }}>txproduct@gmail.com</span>
          </Typography>
        </Fade>

        {/* Cards Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {/* Members Card */}
          <Fade in={true} timeout={1100}>
            <Paper
              sx={{
                padding: "2vw",
                backgroundColor: "#202938",
                borderRadius: "12px",
                border: "2px solid rgba(255, 255, 255, 0.2)", // White border with 20% opacity
                textAlign: "left",
                color: theme.palette.text.primary,
                width: "25%",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  fontSize: "1.5vw",
                  marginBottom: "1vh",
                  marginTop: "2vh",
                }}
              >
                Members
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  fontSize: "1.2vw",
                }}
              >
                If you are a current or prospective member, reach out to us at:{" "}
                <span style={{ fontWeight: 700 }}>tpeoteam@gmail.com</span>
              </Typography>
            </Paper>
          </Fade>

          {/* Clients Card */}
          <Fade in={true} timeout={1200}>
            <Paper
              sx={{
                padding: "2vw",
                backgroundColor: "#202938",
                borderRadius: "12px",
                border: "2px solid rgba(255, 255, 255, 0.2)", // White border with 20% opacity
                textAlign: "left",
                color: theme.palette.text.primary,
                width: "25%",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  fontSize: "1.5vw",
                  marginBottom: "1vh",
                  marginTop: "2vh",
                }}
              >
                Clients
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  fontSize: "1.2vw",
                }}
              >
                For communication post handover, tech maintenance, or potential clients:{" "}
                <span style={{ fontWeight: 700 }}>txproduct@gmail.com</span>
              </Typography>
            </Paper>
          </Fade>

          {/* Sponsors Card */}
          <Fade in={true} timeout={1300}>
            <Paper
              sx={{
                padding: "2vw",
                backgroundColor: "#202938",
                borderRadius: "12px",
                border: "2px solid rgba(255, 255, 255, 0.2)", // White border with 20% opacity
                textAlign: "left",
                color: theme.palette.text.primary,
                width: "25%",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  fontSize: "1.5vw",
                  marginBottom: "1vh",
                  marginTop: "2vh",
                }}
              >
                Sponsors
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  fontSize: "1.2vw",
                }}
              >
                For current/future sponsor communication, partnerships director reaching out:{" "}
                <span style={{ fontWeight: 700 }}>txproduct@gmail.com</span>
              </Typography>
            </Paper>
          </Fade>
        </Box>
      </Box>
    </>
  );
}

export default ContactUsPage;
