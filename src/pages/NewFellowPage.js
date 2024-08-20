import React from "react";
import { Box, Typography, useTheme, Grid, Paper, Button } from "@mui/material";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import LockIcon from "@mui/icons-material/Lock";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FAQ from "./sponsorsPage/FAQ";
import { Link } from "react-router-dom";

function NewFellowPage() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          background: `linear-gradient(to right, rgba(26, 32, 44, 1) 40%, rgba(236, 145, 62, 0.5) 100%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          paddingLeft: "4vw",
          backgroundColor: theme.palette.background.default, 
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "DM Sans",
            fontWeight: 700,
            fontSize: "4vw",
            color: theme.palette.text.primary,
            marginBottom: "2vh",
            marginTop: "30vh",
            textAlign: "left",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          clients
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "DM Sans",
            fontWeight: 400,
            fontSize: "2vw",
            color: theme.palette.text.primary,
            marginBottom: "0vh",
            textAlign: "left",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          we love clients here's the cool stuff we've done for them
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{ maxWidth: "1200px", paddingTop: "12vh" }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ color: theme.palette.text.primary }}>
              <EnergySavingsLeafIcon
                sx={{ fontSize: "2vw", marginBottom: 2 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Feature 1
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 400 }}>
                Cool stuff
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ color: theme.palette.text.primary }}>
              <AdsClickIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Feature 2
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 400 }}>
                Cool stuff
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ color: theme.palette.text.primary }}>
              <LockIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Feature 3
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 400 }}>
                Cool stuff
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ color: theme.palette.text.primary }}>
              <NotificationsIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Collaboration
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 400 }}>
                Cool stuff
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "110vh",
          paddingX: "3vw", // Add padding here instead of on the Grid
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: "40%",
            marginTop: "10vh",
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
            Our past clientele
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
            We've worked with numerous local Austin startups, non-profits, and
            companies to aid them with technological solutions
          </Typography>
        </Box>
      </Box>

      <FAQ></FAQ>
    </>
  );
}

export default NewFellowPage;
