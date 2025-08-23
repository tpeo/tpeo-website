import React from "react";
import { Box, Typography, useTheme, Grid, Fade } from "@mui/material";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import LockIcon from "@mui/icons-material/Lock";
import AdsClickIcon from "@mui/icons-material/AdsClick";
// import Sponsors from "./Sponsors";
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
            linear-gradient(90deg, #1A202C, #EC913E)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          paddingLeft: "4vw",
        }}
      >
        <Fade in={true} timeout={600}>
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
        </Fade>

        <Fade in={true} timeout={800}>
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
        </Fade>

        <Grid container spacing={4} sx={{ width: "85vw", paddingTop: "12vh" }}>
          <Fade in={true} timeout={1000}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary, width: "16vw" }}>
                <EnergySavingsLeafIcon
                  sx={{ fontSize: "2vw", marginBottom: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.25vw" }}>
                  Events
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 400, fontSize: "0.95vw" }}>
                  Sponsors have the opportunity to host special events with TPEO
                  members
                </Typography>
              </Box>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1100}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary, width: "16vw" }}>
                <AdsClickIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.25vw" }}>
                  Recruiting Benefits
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 400, fontSize: "0.95vw" }}>
                  At TPEO, we train every member what they need to succeed in
                  the tech world. Sponsors will have access to our resume book.
                </Typography>
              </Box>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1200}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary, width: "16vw" }}>
                <LockIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.25vw" }}>
                  Network
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 400, fontSize: "0.95vw" }}>
                  Sponsors have access to the TPEO network, which includes
                  current members and alumni
                </Typography>
              </Box>
            </Grid>
          </Fade>
        </Grid>
      </Box>
      {/* <Sponsors></Sponsors> */} {/* Can be added back once we have sponsors */}
      <FAQ type="Sponsor"></FAQ>
    </>
  );
}

export default SponsorsPage;
