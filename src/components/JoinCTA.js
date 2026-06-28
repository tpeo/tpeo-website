import React from "react";
import { Box, Typography, Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const APPLICATION_URL = "https://forms.gle/A1MaWe7Tq2KJScHs5";
const SLACK_URL =
  "https://join.slack.com/t/txproduct/shared_invite/zt-2p5x3m8xd-0C8RxZDrqw6intMXII6aug";

function JoinCTA() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        py: "80px",
        px: "5%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#191919",
          border: "1px solid #444",
          borderRadius: "24px",
          p: "65px",
          maxWidth: "1128px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 500,
            fontSize: "32px",
            color: "#F3801A",
            textTransform: "uppercase",
            letterSpacing: "1.2px",
            mb: 2,
          }}
        >
          Apply now
        </Typography>
        <Typography
          sx={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "60px",
            color: "#FFFFFF",
            maxWidth: "512px",
            mb: 2,
          }}
        >
          Interested in joining TPEO?
        </Typography>
        <Box sx={{ maxWidth: "540px", mb: 5 }}>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: "28px",
              lineHeight: "31.9px",
              color: "#D7D7D7",
            }}
          >
            We're really cool -- join us!
          </Typography>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: "28px",
              lineHeight: "31.9px",
              color: "#D7D7D7",
            }}
          >
            Applications open every Fall semester.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: "28px",
              lineHeight: "31.9px",
              color: "#D7D7D7",
            }}
          >
            Get in early, spots are limited.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
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
              fontSize: "28px",
              lineHeight: "24px",
              borderRadius: "12px",
              px: "32px",
              py: "12px",
              textTransform: "none",
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
              fontSize: "28px",
              lineHeight: "24px",
              borderRadius: "12px",
              px: "33px",
              py: "13px",
              textTransform: "none",
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
