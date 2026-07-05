import React from "react";
import { Box, Typography, Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { sectionPx } from "../styles/pageLayout";

const APPLICATION_URL = "https://forms.gle/A1MaWe7Tq2KJScHs5";
const SLACK_URL =
  "https://join.slack.com/t/txproduct/shared_invite/zt-2p5x3m8xd-0C8RxZDrqw6intMXII6aug";

function JoinCTA() {
  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: { xs: "48px", md: "80px" },
          px: sectionPx,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
      <Box
        sx={{
          backgroundColor: "#191919",
          border: "1px solid #444",
          borderRadius: { xs: "16px", md: "24px" },
          py: { xs: "28px 24px", sm: "40px 32px", md: "65px" },
          maxWidth: "1128px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            gap: "24px",
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "24px", md: "32px" },
              lineHeight: "36px",
              color: "#F3801A",
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              width: "100%",
              textAlign: "center",
            }}
          >
            Apply now
          </Typography>
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "36px", md: "48px" },
              lineHeight: { xs: "32px", md: "36px" },
              color: "#FFFFFF",
              width: "100%",
              textAlign: "center",
            }}
          >
            Interested in joining TPEO?
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "540px", mb: 5, mx: "auto", textAlign: "center" }}>

          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "18px", md: "28px" },
              lineHeight: { xs: "26px", md: "31.9px" },
              color: "#D7D7D7",
            }}
          >
            Applications are NOW open!
          </Typography>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "18px", md: "28px" },
              lineHeight: { xs: "26px", md: "31.9px" },
              color: "#D7D7D7",
            }}
          >
            Get in early, spots are limited.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "16px", md: "40px" },
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            component="a"
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            endIcon={<OpenInNewIcon />}
            sx={{
              backgroundColor: "#F3801A",
              color: "#101010",
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "18px", md: "28px" },
              lineHeight: "24px",
              borderRadius: "12px",
              px: { xs: "24px", md: "32px" },
              py: "12px",
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
              "&:hover": { backgroundColor: "#FB8C14" },
            }}
          >
            Link to Application
          </Button>
          <Button
            component="a"
            href={SLACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{
              borderColor: "#444",
              color: "#FFFFFF",
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "18px", md: "28px" },
              lineHeight: "24px",
              borderRadius: "12px",
              px: { xs: "24px", md: "33px" },
              py: "13px",
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
              "&:hover": {
                borderColor: "#F3801A",
                color: "#F3801A",
              },
            }}
          >
            Join our Slack
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default JoinCTA;
