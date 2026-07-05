import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import theme from "./themes/theme";

import AboutPage from "./pages/about/AboutPage";
import NewFellowPage from "./pages/newFellow/NewFellowPage";
import TeamPage from "./pages/team/TeamPage";
import ClientPage from "./pages/clients/ClientPage";
import SponsorsPage from "./pages/sponsors/SponsorsPage";
import JoinTPEOPage from "./pages/join/JoinTPEOPage";
import ContactUsPage from "./pages/contact/ContactUs";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            width: "100%",
            overflowX: "hidden",
          }}
        >
          <Header />
          <Box component="main" sx={{ flex: "1 0 auto", width: "100%" }}>
            <Routes>
              <Route path="/" element={<AboutPage />} />
              <Route path="/new-fellow" element={<NewFellowPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/clients" element={<ClientPage />} />
              <Route path="/sponsors" element={<SponsorsPage />} />
              <Route path="/join" element={<JoinTPEOPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
