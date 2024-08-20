import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import logo from "../assets/TPEOLogoGradient.png";

const MobileHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background:
            "rgba(32, 41, 56, 1)",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img
            src={logo}
            alt="TPEO Logo"
            style={{ width: "40vw", height: "6vh" }}
          />
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon sx={{ fontSize: "3rem", color: "#FB8C14" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(32, 41, 56, 0.8)",
            backdropFilter: "blur(15px)", // Apply blur effect
            width: "100vw",
            height: "100vh",
          }, // Full screen drawer
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3,
          }}
        >
          <img
            src={logo}
            alt="TPEO Logo"
            style={{ width: "40vw", height: "6vh" }}
          />
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon sx={{ fontSize: "2.5rem", color: "#9e9893" }} />
          </IconButton>
        </Box>
        <List>
          {["Our Team", "Fellows", "Clients", "Sponsors"].map((text) => (
            <ListItem key={text} sx={{ padding: "4vh 8vw" }}>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontSize: "1.5rem",
                  color: "#FFFFFF",
                }}
              />
              <ChevronRightIcon sx={{ color: "#9e9893", fontSize: 40 }} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#FFFFFF",
              color: "#FFFFFF",
              fontSize: "1.2rem",
              padding: "1.5vh 6vh",
              borderRadius: "12px",
              fontWeight: 700,
              mb: 2,
              width: "100%",
            }}
          >
            Contact Us
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FB8C14",
              color: "#FFFFFF",
              fontSize: "1.2rem",
              padding: "1.5vh 6vh",
              borderRadius: "12px",
              fontWeight: 700,
              width: "100%",
            }}
          >
            Join TPEO
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileHeader;
