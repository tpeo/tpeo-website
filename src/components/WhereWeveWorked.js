import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Paper,
  IconButton,
  Divider,
} from "@mui/material";
import companies from "../assets/companiesNew.png";
import leaf from "../assets/leaf.png";

function WhereWeveWorked() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
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
              fontFamily: "",
              fontWeight: 400,
              fontSize: "1.3vw",
              color: theme.palette.text.primary,
              marginY: "5vh",
            }}
          >
            TPEO helps people land jobs at cool places!
          </Typography>
        </Box>
        <img
          src={companies}
          alt="Tenet Vector"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
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
              fontFamily: "",
              fontWeight: 400,
              fontSize: "1.3vw",
              color: theme.palette.text.primary,
              marginY: "5vh",
            }}
          >
            Our Recent Work
          </Typography>
        </Box>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "12px",
            border: "1px solid #FFFFFF",
            width: "89vw",
            height: "78vh",
            backgroundColor: "#202938",
            color: "#FFFFFF",
          }}
        >
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
              src={companies}
              alt="Project Image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Divider sx={{ borderColor: "#FFFFFF" }} />
          <Box sx={{ display: "flex", alignItems: "", padding: "10px" }}>
            <IconButton color="inherit" sx={{ padding: "0", margin: "4vh" }}>
              <img
                src={leaf}
                alt="BigAustin Icon"
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
                Project Brief
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default WhereWeveWorked;
