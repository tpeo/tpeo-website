import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";
import { Divider } from "@mui/material";

// Import pages
import HomePage from "./pages/HomePage";
import NewFellowPage from "./pages/NewFellowPage";
import TeamPage from "./pages/TeamPage";
import ClientPage from "./pages/ClientPage";
import SponsorsPage from "./pages/SponsorsPage";

// Import components
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Divider />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-fellow" element={<NewFellowPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/clients" element={<ClientPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
