import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";

// Import pages
import NewFellowPage from "./pages/NewFellowPage";
import TeamPage from "./pages/teamPage/TeamPage";
import ClientPage from "./pages/ClientPage";
import SponsorsPage from "./pages/sponsorsPage/SponsorsPage";
import AboutPage from "./pages/AboutPage";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import JoinTPEOPage from "./pages/JoinTPEOPage";
import ContactUsPage from "./pages/ContactUs";

import MobileHomePage from "./mobile/MobileHomePage";
import MobileFooter from "./mobile/MobileFooter";

function App() {
  const isMobile = window.innerWidth <= 768;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {isMobile ? (
          <>
            <Routes>
              <Route path="/" element={<MobileHomePage />} />
              {/* Add other mobile-specific routes here */}
            </Routes>
            <MobileFooter></MobileFooter>
          </>
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<AboutPage />} />
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
