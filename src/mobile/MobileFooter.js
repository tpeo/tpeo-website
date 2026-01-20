import React from "react";
import {
  Divider,
  Box,
  Typography,
  useTheme,
  // Button,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GroupIcon from "@mui/icons-material/Group";
import TPEOLogoGradient from "../assets/TPEOLogoGradient.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Create motion-enabled components
// const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);

const MobileFooter = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <Divider sx={{ backgroundColor: "white" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          backgroundColor: theme.palette.background.default,
          color: "#FFFFFF",
          padding: "20px",
        }}
      >
        {/* Logo */}
        <Box sx={{ marginY: "20px" }}>
          <img
            src={TPEOLogoGradient}
            alt="TPEO Logo"
            style={{
              width: "150px",
              height: "auto",
              maxWidth: "100%",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0); // Scroll to the top after navigation
            }}
          />
        </Box>
        {/* Interested Text */}
        {/* <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: "1.5rem",
            mb: 2,
            textAlign: "center",
          }}
        >
          Interested?
        </Typography> */}
        {/* Join TPEO Button */}
        {/* <MotionButton
          variant="contained"
          onClick={() => {
            navigate("/join");
            window.scrollTo(0, 0); // Scroll to the top after navigation
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          sx={{
            width: "80%",
            maxWidth: "300px",
            height: "50px",
            color: theme.palette.text.primary,
            fontSize: "1rem",
            fontWeight: 700,
            borderRadius: "10px",
            padding: "10px 30px",
            backgroundColor: "#FB8C14",
            boxShadow: "none",
            mb: 2,
            "&:hover": {
              backgroundColor: "#FB8C14",
            },
          }}
        >
          Join TPEO
        </MotionButton> */}
        {/* Social Icons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          <MotionIconButton
            color="inherit"
            href="mailto:tpeoteam@gmail.com"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            <EmailIcon sx={{ width: "24px", height: "24px" }} />
          </MotionIconButton>
          <MotionIconButton
            color="inherit"
            href="https://www.instagram.com/txproduct"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            <InstagramIcon sx={{ width: "24px", height: "24px" }} />
          </MotionIconButton>
          <MotionIconButton
            color="inherit"
            href="https://www.linkedin.com/in/tpeo"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            <LinkedInIcon sx={{ width: "24px", height: "24px" }} />
          </MotionIconButton>
          <MotionIconButton
            color="inherit"
            href="https://www.youtube.com/channel/tpeo"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            <YouTubeIcon sx={{ width: "24px", height: "24px" }} />
          </MotionIconButton>
          <MotionIconButton
            color="inherit"
            href="https://join.slack.com/t/txproduct/shared_invite/zt-2p5x3m8xd-0C8RxZDrqw6intMXII6aug"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            <GroupIcon sx={{ width: "24px", height: "24px" }} />
          </MotionIconButton>
        </Box>
        {/* Footer Text */}
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "0.8rem",
            maxWidth: "100%",
            textAlign: "center",
            color: "grey",
          }}
        >
          © 2024 Texas Product Engineering Organization. All rights reserved
        </Typography>
      </Box>
    </>
  );
};

export default MobileFooter;
