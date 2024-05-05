import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useTheme,
  Link as MuiLink,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const theme = useTheme(); // To access the theme values
  const location = useLocation(); // To get the current path

  // Function to determine background style based on the route
  const determineBackground = () => {
    switch (location.pathname) {
      case "/":
      case "/team":
        return theme.palette.background.default;
      case "/new-fellow":
        return `linear-gradient(to right, ${theme.palette.background.default}, ${theme.palette.secondary.main})`;
      case "/clients":
      case "/sponsors":
        return `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.background.default})`;
      default:
        return theme.palette.background.default;
    }
  };

  // List of navigation items
  const navItems = [
    { path: "/team", text: "Our Team" },
    { path: "/new-fellow", text: "For New Fellows" },
    { path: "/clients", text: "For Clients" },
    { path: "/sponsors", text: "For Sponsors" },
    { path: "/join-tpeo", text: "Join TPEO" },
  ];

  return (
    <AppBar
      position="static"
      style={{
        background: determineBackground(),
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
            <img src={logo} alt="TPEO Logo" style={{ width: '8vh', height: '8vh' }} />
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
            <MuiLink
              component={Link}
              to={path}
              sx={{
                textDecoration: "none",
                color: theme.palette.text.primary,
                fontFamily: "Helvetica Neue, Arial, sans-serif",
                fontSize: "1.2vw",
                borderRadius: "12px",
                padding: "10px 10px",
                backgroundColor:
                  location.pathname === path
                    ? "rgba(236, 145, 62, 0.4)"
                    : "transparent",
                fontWeight: location.pathname === path ? "bold" : "normal",
                letterSpacing: location.pathname === path ? "normal" : "normal",
                transition:
                  "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease", // Add transitions for background-color and letter-spacing
                "&:hover": {
                  //   fontWeight: "bold",
                  letterSpacing: "0.03em",
                  background: "rgba(236, 145, 62, 0.4)",
                  transition:
                    "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease", // Ensure transitions apply on hover as well
                },
              }}
            >
              {text}
            </MuiLink>
          ))}

          <Button
            variant="contained"
            sx={{
              color: theme.palette.text.primary,
              fontFamily: "Helvetica Neue, Arial, sans-serif",
              fontSize: "1.2vw",
              borderRadius: "10px",
              padding: "10px 20px",
              backgroundColor: "#FB8C14",
              boxShadow: "none",
              transition:
                "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease",
              "&:hover": {
                backgroundColor: "#FB8C14",
                opacity: 0.9,
                letterSpacing: "0.03em",
                transition:
                  "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease",
              },
            }}
          >
            Contact Us
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
