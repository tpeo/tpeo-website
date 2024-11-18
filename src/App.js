import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";

// Import pages
import HomePage from "./pages//homePage/HomePage";
import NewFellowPage from "./pages/NewFellowPage";
import TeamPage from "./pages/teamPage/TeamPage";
import ClientPage from "./pages/ClientPage";
import SponsorsPage from "./pages/sponsorsPage/SponsorsPage";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import JoinTPEOPage from "./pages/JoinTPEOPage";
import ContactUsPage from "./pages/ContactUs";

import MobileHeader from "./mobile/MobileHeader";
import MobileHomePage from "./mobile/MobileHomePage";

function App() {
  const isMobile = window.innerWidth <= 768;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {isMobile ? (
          <>
            <MobileHeader />
            <Routes>
              <Route path="/" element={<MobileHomePage />} />
              {/* Add other mobile-specific routes here */}
            </Routes>
          </>
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/new-fellow" element={<NewFellowPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/clients" element={<ClientPage />} />
              <Route path="/sponsors" element={<SponsorsPage />} />
              <Route path="/join" element={<JoinTPEOPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
            </Routes>
            <Footer />
          </>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
