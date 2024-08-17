import React from "react";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import LockIcon from "@mui/icons-material/Lock";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Sponsors from "./Sponsors";
import FAQ from "./FAQ";

function SponsorsPage() {
  
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          background: `
            linear-gradient(0deg, rgba(26, 32, 44, 0) 0%, rgba(26, 32, 44, 0.8) 60%),
            linear-gradient(90deg, #1A202C, #EC913E)`, // Adjusted gradient direction and colors
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          paddingLeft: "4vw",
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
          sponsors
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
          what we offer to our sponsors!
        </Typography>

        <Grid container spacing={4} sx={{ maxWidth: "1200px", paddingTop: "12vh" }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{ color: theme.palette.text.primary }}
            >
              <EnergySavingsLeafIcon
                sx={{ fontSize: "2vw", marginBottom: 2 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Events
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 400 }}>
                You'd have the opportunity to host special events etc
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{ color: theme.palette.text.primary }}
            >
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
            <Box
              sx={{ color: theme.palette.text.primary }}
            >
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
            <Box
              sx={{ color: theme.palette.text.primary }}
            >
              <NotificationsIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Recruiting Benefits
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 400 }}>
                Here at TPEO, we train every member to acclimatize to the tech
                world process. You will have access to our resume book.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Sponsors></Sponsors>
      <FAQ></FAQ>
    </>
  );
}

export default SponsorsPage;
