import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";

// Import pages
import HomePage from "./pages/HomePage";
import NewFellowPage from "./pages/NewFellowPage";
import TeamPage from "./pages/TeamPage";
import ClientPage from "./pages/ClientPage";
import SponsorsPage from "./pages/SponsorsPage";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-fellow" element={<NewFellowPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/clients" element={<ClientPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
