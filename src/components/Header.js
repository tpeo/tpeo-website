import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/aboutIcons/nav-logo.png";

const navItems = [
  { path: "/", text: "About" },
  { path: "/team", text: "Our Team" },
  { path: "/new-fellow", text: "Fellowship" },
  { path: "/clients", text: "Projects" },
  { path: "/sponsors", text: "Partners" },
];

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#191919",
        boxShadow: "none",
        zIndex: 1200,
        border: "none",
        borderBottom: "1px solid #444",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          pt: "42px",
          pb: "24px",
          minHeight: "0 !important",
        }}
      >
        <Box
          sx={{
            width: "calc(100% - 100px)",
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => handleNavigation("/")}
          style={{ textDecoration: "none", display: "flex" }}
        >
          <Box
            component="img"
            src={logo}
            alt="TPEO Logo"
            sx={{
              width: "75px",
              height: "75px",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        </Link>

        {/* Nav links + action buttons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "80px",
          }}
        >
          {/* Page links */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "35px",
            }}
          >
            {navItems.map(({ path, text }) => (
              <Typography
                key={path}
                onClick={() => handleNavigation(path)}
                sx={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "normal",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  ...(location.pathname === path
                    ? {
                        backgroundImage:
                          "linear-gradient(90.33deg, #FB8C14 2.55%, #F6A606 102.47%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }
                    : {
                        color: "#FFFFFF",
                      }),
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>

          {/* Action buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "35px",
            }}
          >
            <Typography
              onClick={() => handleNavigation("/contact")}
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "normal",
                color: "#F3801A",
                textDecoration: "underline",
                textDecorationThickness: "10%",
                textUnderlineOffset: "from-font",
                cursor: "pointer",
                whiteSpace: "nowrap",
                "&:hover": { opacity: 0.8 },
              }}
            >
              Contact Us
            </Typography>
            <Box
              onClick={() => handleNavigation("/join")}
              sx={{
                backgroundColor: "#F3801A",
                color: "#101010",
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "normal",
                borderRadius: "10px",
                px: "16px",
                py: "12px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": { backgroundColor: "#FB8C14" },
              }}
            >
              Join TPEO
            </Box>
          </Box>
        </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
