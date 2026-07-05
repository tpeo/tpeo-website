import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/aboutIcons/nav-logo.png";
import { sectionPx } from "../styles/pageLayout";

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
  const theme = useTheme();
  const isMobileNav = useMediaQuery(theme.breakpoints.down("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setDrawerOpen(false);
  };

  const navLinkSx = (path) => ({
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 500,
    fontSize: { xs: "18px", lg: "20px" },
    lineHeight: "normal",
    cursor: "pointer",
    whiteSpace: "nowrap",
    ...(location.pathname === path
      ? {
          backgroundImage: "linear-gradient(90.33deg, #FB8C14 2.55%, #F6A606 102.47%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }
      : { color: "#FFFFFF" }),
    "&:hover": { opacity: 0.8 },
  });

  const drawer = (
    <Box sx={{ width: 280, backgroundColor: "#191919", height: "100%", py: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 1, mb: 1 }}>
        <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#FFFFFF" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map(({ path, text }) => (
          <ListItemButton key={path} onClick={() => handleNavigation(path)}>
            <ListItemText
              primary={text}
              primaryTypographyProps={{ sx: navLinkSx(path) }}
            />
          </ListItemButton>
        ))}
        <ListItemButton onClick={() => handleNavigation("/contact")}>
          <ListItemText
            primary="Contact Us"
            primaryTypographyProps={{
              sx: {
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 500,
                fontSize: "18px",
                color: "#F3801A",
                textDecoration: "underline",
              },
            }}
          />
        </ListItemButton>
        <ListItemButton onClick={() => handleNavigation("/join")}>
          <ListItemText
            primary="Join TPEO"
            primaryTypographyProps={{
              sx: {
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 500,
                fontSize: "18px",
                color: "#F3801A",
              },
            }}
          />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
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
            pt: { xs: "16px", md: "24px", lg: "42px" },
            pb: { xs: "16px", md: "24px" },
            minHeight: "0 !important",
            px: sectionPx,
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "1400px",
              mx: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
                  width: { xs: "56px", md: "75px" },
                  height: { xs: "56px", md: "75px" },
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </Link>

            {isMobileNav ? (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: "#FFFFFF" }}
                aria-label="Open navigation menu"
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center", gap: { lg: "48px", xl: "80px" } }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: { lg: "24px", xl: "35px" } }}>
                  {navItems.map(({ path, text }) => (
                    <Typography
                      key={path}
                      onClick={() => handleNavigation(path)}
                      sx={navLinkSx(path)}
                    >
                      {text}
                    </Typography>
                  ))}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: { lg: "24px", xl: "35px" } }}>
                  <Typography
                    onClick={() => handleNavigation("/contact")}
                    sx={{
                      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: "20px",
                      color: "#F3801A",
                      textDecoration: "underline",
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
                      borderRadius: "10px",
                      px: "16px",
                      py: "12px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      "&:hover": { backgroundColor: "#FB8C14" },
                    }}
                  >
                    Join TPEO
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {/* Spacer so fixed header doesn't cover page content */}
      <Toolbar
        disableGutters
        sx={{
          minHeight: { xs: "89px !important", md: "123px !important", lg: "141px !important" },
        }}
      />
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {drawer}
      </Drawer>
    </>
  );
}

export default Header;
