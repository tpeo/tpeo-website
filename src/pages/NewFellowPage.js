import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider } from "@mui/material";
import Faq from "./sponsorsPage/FAQ";
import Footer from "../components/Footer";
import imgDoodle1 from "../assets/aboutIcons/fellow-doodle-1.svg";
import imgDoodle2 from "../assets/aboutIcons/fellow-doodle-2.svg";
import imgDoodle4 from "../assets/aboutIcons/fellow-doodle-4.svg";
import imgDoodle6 from "../assets/aboutIcons/fellow-doodle-6.svg";
import imgDoodle9 from "../assets/aboutIcons/fellow-doodle-9.svg";
import imgDoodle11 from "../assets/aboutIcons/fellow-doodle-11.svg";
import imgDoodle12 from "../assets/aboutIcons/fellow-doodle-12.svg";
import imgDoodle13 from "../assets/aboutIcons/fellow-doodle-13.svg";

const fellowshipSteps = [
  {
    number: "1",
    title: "Learn",
    description: "6 month Full-stack Engineering, Product Design, Product Management curriculum",
  },
  {
    number: "2",
    title: "New Fellow Project",
    description: "Work in a small team in a community-focused project to apply your skills in a low-stakes environment.",
  },
  {
    number: "3",
    title: "Client Project",
    description: "Partner with a real-world organization to build a product that makes a measurable difference",
  },
  {
    number: "4",
    title: "Lifelong Community",
    description: "Join the global TPEO alumni network—mentors, founders, and builders invested in your growth long after the program ends",
  },
];

function StepCard({ number, title, description }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "48px", alignItems: "center", textAlign: "center", width: "100%", maxWidth: "274px" }}>
      <Box
        sx={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "2px solid #F3801A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: "36px",
            color: "#F3801A",
          }}
        >
          {number}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <Typography
          sx={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "1.2",
            color: "#FFFFFF",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "28px",
            lineHeight: "1.4",
            color: "#D7D7D7",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

StepCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function NewFellowPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#101010",
        width: "100%",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Background Doodles */}
      <Box component="img" src={imgDoodle1} alt="" sx={{ position: "absolute", top: "1263px", left: "79px", width: "253px", height: "auto", pointerEvents: "none", mixBlendMode: "lighten", zIndex: 0 }} />
      <Box component="img" src={imgDoodle2} alt="" sx={{ position: "absolute", top: "3436px", left: "79px", width: "246px", height: "auto", pointerEvents: "none", mixBlendMode: "lighten", zIndex: 0 }} />
      <Box component="img" src={imgDoodle4} alt="" sx={{ position: "absolute", top: "664px", left: "1075px", width: "246px", height: "auto", pointerEvents: "none", mixBlendMode: "lighten", zIndex: 0 }} />
      <Box component="img" src={imgDoodle6} alt="" sx={{ position: "absolute", top: "4346px", left: "668px", width: "195px", height: "auto", pointerEvents: "none", mixBlendMode: "lighten", transform: "rotate(5.44deg)", zIndex: 0 }} />
      <Box component="img" src={imgDoodle9} alt="" sx={{ position: "absolute", top: "1602px", left: "1281px", width: "268px", height: "auto", pointerEvents: "none", mixBlendMode: "lighten", transform: "rotate(-9.09deg)", zIndex: 0 }} />
      <Box component="img" src={imgDoodle11} alt="" sx={{ position: "absolute", top: "171px", left: "527px", width: "224px", height: "auto", pointerEvents: "none", mixBlendMode: "lighten", zIndex: 0 }} />
      <Box component="img" src={imgDoodle12} alt="" sx={{ position: "absolute", top: "214px", left: "997px", width: "312px", height: "auto", pointerEvents: "none", mixBlendMode: "lighten", zIndex: 0 }} />
      <Box component="img" src={imgDoodle13} alt="" sx={{ position: "absolute", top: "357px", left: "1189px", width: "246px", height: "auto", pointerEvents: "none", mixBlendMode: "lighten", zIndex: 0 }} />

      {/* ========== HERO SECTION ========== */}
      <Box
        sx={{
          pt: "257px",
          px: "79px",
          pb: "160px", // 619 - 257 - 202.32 = 159.68
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40.32px" }}>
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: "64px",
              lineHeight: "normal",
              color: "#FFFFFF",
            }}
          >
            new <span style={{ color: "#F3801A" }}>fellows</span>.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              fontSize: "28px",
              lineHeight: "39.06px",
              color: "#D7D7D7",
              maxWidth: "770px",
            }}
          >
            Teach full-stack engineering, UI/UX design, and product management in semester-long courses to UT Austin students of all majors!
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== FELLOWSHIP PROCESS SECTION ========== */}
      <Box
        sx={{
          pt: "96px", // 715 - 619 = 96
          px: "79px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "100px",
        }}
      >
        <Box sx={{ textAlign: "center", maxWidth: "816px", display: "flex", flexDirection: "column", gap: "17px" }}>
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "1.5",
              color: "#F3801A",
            }}
          >
            How TPEO fellowship works
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "1.5",
              color: "#FFFFFF",
            }}
          >
            Our process over two years. We recruit every fall!
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "60px",
            width: "100%",
            maxWidth: "1304px",
            justifyContent: "center",
            pb: "92px",
          }}
        >
          {fellowshipSteps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== SOCIALS SECTION ========== */}
      <Box
        sx={{
          py: "100px",
          px: "79px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "60px",
        }}
      >
        <Box sx={{ textAlign: "center", maxWidth: "816px", display: "flex", flexDirection: "column", gap: "17px" }}>
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "1.5",
              color: "#F3801A",
            }}
          >
            Socials
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "1.5",
              color: "#FFFFFF",
            }}
          >
            Apart from the innovation we incubate, we also have fun! Check our insta{" "}
            <span style={{ color: "#F3801A", fontWeight: 700 }}>@txproduct</span> for more!
          </Typography>
        </Box>

        {/* Carousel placeholder */}
        <Box sx={{ width: "100%", height: "400px", backgroundColor: "#191919", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography sx={{ color: "#444", fontSize: "24px" }}>[ Instagram Carousel ]</Typography>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== FAQ SECTION ========== */}
      <Box sx={{ py: "100px" }}>
        <Faq type="NewFellow" />
      </Box>

      <Footer />
    </Box>
  );
}

export default NewFellowPage;
