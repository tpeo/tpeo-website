import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Paper,
  IconButton,
  Divider,
} from "@mui/material";
import companies from "../../assets/companiesNew.png";
import leaf from "../../assets/vectorImages/leaf.png";
import bigaustinSS from "../../assets/projectImages/bigaustin_ss.png";
import { motion } from "framer-motion"; // Import Framer Motion

function WhereWeveWorked() {
  const theme = useTheme();

  // Project link
  const projectLink =
    "https://medium.com/@channurichinmayee/tpeo-showcase-this-is-how-we-redesigned-a-nonprofits-website-end-to-end-86a36864844c";

  return (
    <>
      {/* First section */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Title and subtitle */}
        <Box
          sx={{
            textAlign: "center",
            width: "50%",
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
            Where we've worked
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "1.3vw",
              color: theme.palette.text.primary,
              marginY: "5vh",
            }}
          >
            TPEO helps people land jobs at cool places!
          </Typography>
        </Box>
        {/* Companies image */}
        <img
          src={companies}
          alt="Companies"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      {/* Project Spotlight section */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "10px",
          height: "140vh",
        }}
      >
        {/* Title and subtitle */}
        <Box
          sx={{
            textAlign: "center",
            width: "50%",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "3.8vw",
              color: theme.palette.secondary.main,
              marginTop: "20vh",
            }}
          >
            Project Spotlight
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "1.3vw",
              color: theme.palette.text.primary,
              marginY: "5vh",
            }}
          >
            Our Recent Work
          </Typography>
        </Box>

        {/* Project spotlight card */}
        <motion.div
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
          onClick={() => window.open(projectLink, "_blank")}
          style={{ cursor: "pointer", width: "89vw", height: "78vh" }}
        >
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "12px",
              border: "1px solid #FFFFFF",
              width: "100%",
              height: "100%",
              backgroundColor: "#202938",
              color: "#FFFFFF",
            }}
          >
            {/* Image section */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
              }}
            >
              <img
                src={bigaustinSS}
                alt="Project"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            <Divider sx={{ borderColor: "#FFFFFF" }} />

            {/* Content section */}
            <Box sx={{ display: "flex", padding: "10px" }}>
              <IconButton color="inherit" sx={{ padding: "0", margin: "4vh" }}>
                <img
                  src={leaf}
                  alt="BiGAUSTIN Icon"
                  style={{ width: "8vh", height: "8vh" }}
                />
              </IconButton>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "1.6vw", fontWeight: 700, marginTop: "2vh" }}
                >
                  BiGAUSTIN
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "1.4vw" }}>
                  Full-stack Website Redesign: this is how we redesigned an Austin
                  nonprofit's website end-to-end.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </>
  );
}

export default WhereWeveWorked;