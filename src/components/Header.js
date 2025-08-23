import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  Divider,
  Button,
  Link as MuiLink,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/vectorImages/logo.png";
import { motion } from "framer-motion";

// Create motion-enabled components
const MotionLink = motion(MuiLink);
const MotionButton = motion(Button);

function Header() {
  const theme = useTheme(); // To access the theme values
  const location = useLocation(); // To get the current path
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top
  };

  // Function to determine background style based on the route
  const determineBackground = () => {
    switch (location.pathname) {
      case "/":
      case "/team":
        return theme.palette.background.default;
      case "/new-fellow":
        return `linear-gradient(to right, rgba(26, 32, 44, 1) 40%, #825835 100%)`;
      case "/clients":
        return `linear-gradient(to left, rgba(26, 32, 44, 1) 40%, #825835 100%)`;
      case "/sponsors":
        return `linear-gradient(to right, rgba(26, 32, 44, 1) 40%, #44372f 100%)`;
      case "/contact":
        return `linear-gradient(to right, rgba(26, 32, 44, 1) 40%, #825835 100%)`;
      default:
        return theme.palette.background.default;
    }
  };

  // List of navigation items
  const navItems = [
    { path: "/team", text: "Our Team" },
    { path: "/new-fellow", text: "Fellowships" },
    { path: "/clients", text: "Clients" },
    { path: "/sponsors", text: "Sponsors" },
    { path: "/join", text: "Join TPEO" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          background: determineBackground(),
          //backgroundColor: theme.palette.background.default, // Removed to fix console warning
          boxShadow: "none",
          height: "13%",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            paddingRight: 0,
            alignItems: "center",
            height: "100%",
          }}
        >
          <Link
            to="/"
            onClick={() => handleNavigation("/")}
            style={{
              color: "inherit",
              textDecoration: "none",
              marginLeft: "64px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ padding: 0, marginRight: 2 }}
            >
              <img
                src={logo}
                alt="TPEO Logo"
                style={{ width: "8vh", height: "8vh" }}
              />
            </IconButton>
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginRight: "64px",
            }}
          >
            {navItems.map(({ path, text }) => (
              <MotionLink
                component="button"
                onClick={() => handleNavigation(path)}
                key={path}
                sx={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                  fontSize: "1.2vw",
                  borderRadius: "12px",
                  padding: "10px 10px",
                  backgroundColor:
                    location.pathname === path
                      ? "rgba(236, 145, 62, 0.4)"
                      : "transparent",
                  //fontWeight: location.pathname === path ? "bold" : "normal",
                  letterSpacing:
                    location.pathname === path ? "normal" : "normal",
                  transition:
                    "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease",
                  "&:hover": {
                    letterSpacing: "0.03em",
                    background: "rgba(236, 145, 62, 0.4)",
                    transition:
                      "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease",
                  },
                }}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {text}
              </MotionLink>
            ))}

            <MotionButton
              variant="contained"
              onClick={() => handleNavigation("/contact")}
              sx={{
                color: theme.palette.text.primary,
                fontSize: "1.2vw",
                borderRadius: "10px",
                padding: "5px 20px",
                backgroundColor: "#FB8C14",
                boxShadow: "none",
                transition:
                  "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease",
                "&:hover": {
                  backgroundColor: "#FB8C14",
                  opacity: 0.95,
                  letterSpacing: "0.03em",
                  transition:
                    "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease",
                },
              }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact Us
            </MotionButton>
          </div>
        </Toolbar>
        <Divider sx={{ backgroundColor: "white" }} />
      </AppBar>
    </>
  );
}

export default Header;
