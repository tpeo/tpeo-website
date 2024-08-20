import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useTheme,
  Link as MuiLink,
  Divider,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const theme = useTheme(); // To access the theme values
  const location = useLocation(); // To get the current path
  const navigate = useNavigate();

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
    { path: "/new-fellow", text: "Fellows" },
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
          backgroundColor: theme.palette.background.default,
          boxShadow: "none",
          height: "13%",
          //transition: "background 0.5s ease-in-out",
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
                  letterSpacing:
                    location.pathname === path ? "normal" : "normal",
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
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0); // Scroll to the top after navigation
              }}
              sx={{
                color: theme.palette.text.primary,
                fontFamily: "Helvetica Neue, Arial, sans-serif",
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
            >
              Contact Us
            </Button>
          </div>
        </Toolbar>
        <Divider sx={{ backgroundColor: "white" }}></Divider>
      </AppBar>
    </>
  );
}

export default Header;