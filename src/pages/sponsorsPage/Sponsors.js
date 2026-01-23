import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import companies from "../../assets/serpapi.png";

function Sponsors() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: "50%",
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
            Our Sponsors
          </Typography>
          <a
            href="https://serpapi.com/?gad_source=1&gad_campaignid=21563825039&gbraid=0AAAAADD8kqOSeVUaMTT7qKY6RUeQDjQLm&gclid=CjwKCAiAssfLBhBDEiwAcLpwftReUeYdndzGfgVE41fL-miQEaeYaUB8UkcaTZU7jjGogw1kwqEJPBoC2wsQAvD_BwE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={companies}
              alt="SerpApi Logo"
              style={{ width: "20vh", height: "auto" }}
            />
          </a>
        </Box>
      </Box>
    </>
  );
}

export default Sponsors;
