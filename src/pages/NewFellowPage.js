import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider, Button, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Faq from "./sponsorsPage/FAQ";
import imgDoodle1 from "../assets/aboutIcons/fellow-doodle-1.svg"; // website-04 (arrow)
import imgDoodle2 from "../assets/aboutIcons/fellow-doodle-2.svg"; // website-11
import imgDoodle4 from "../assets/aboutIcons/fellow-doodle-4.svg"; // website-12
import imgDoodle9 from "../assets/aboutIcons/fellow-doodle-9.svg"; // website-09 (star)
import imgDoodle11 from "../assets/aboutIcons/fellow-doodle-11.svg"; // doodles-tpeo-18
import imgDoodle12 from "../assets/aboutIcons/fellow-doodle-12.svg"; // website-02
import imgDoodle13 from "../assets/aboutIcons/fellow-doodle-13.svg"; // doodles-tpeo-20
import imgFaqLightbulb from "../assets/aboutIcons/fellow-faq-lightbulb.png";

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

const fellowProjects = [
  {
    title: "Texas Cultural Trust",
    description:
      "Designed & implemented a centralized statewide Events Calendar to help users discover arts and cultural events across Texas in one place.",
    link: "/clients",
  },
  {
    title: "Texas Cultural Trust",
    description:
      "Designed & implemented a centralized statewide Events Calendar to help users discover arts and cultural events across Texas in one place.",
    link: "/clients",
  },
];

const curriculumItems = [
  { title: "Notion Embed", subtitle: "Project Brief" },
  { title: "YouTube Embed", subtitle: "Project Brief" },
  { title: "Slack Embed", subtitle: "Project Brief" },
];

function SectionHeader({ title, description }) {
  return (
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
        {title}
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
        {description}
      </Typography>
    </Box>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function FellowProjectCard({ title, description, link }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        maxWidth: "1304px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#191919",
          border: "1px solid #444",
          borderRadius: "12px",
          p: "60px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          flex: 1,
          zIndex: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "23px" }}>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 500,
              fontSize: "36px",
              lineHeight: 1.5,
              color: "#FFFFFF",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: 1.5,
              color: "#D7D7D7",
            }}
          >
            {description}
          </Typography>
        </Box>
        <Box
          component="a"
          href={link}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            cursor: "pointer",
            width: "fit-content",
            "&:hover": { opacity: 0.8 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: 1.5,
              color: "#F3801A",
            }}
          >
            View case study
          </Typography>
          <ArrowForwardIcon sx={{ color: "#F3801A", fontSize: 24 }} />
        </Box>
      </Box>

      <Box
        sx={{
          width: "468px",
          flexShrink: 0,
          ml: "-15px",
          borderRadius: "0 12px 12px 0",
          overflow: "hidden",
          backgroundColor: "#252525",
          backgroundImage: `
            linear-gradient(45deg, #2a2a2a 25%, transparent 25%),
            linear-gradient(-45deg, #2a2a2a 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #2a2a2a 75%),
            linear-gradient(-45deg, transparent 75%, #2a2a2a 75%)
          `,
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0",
          minHeight: "373px",
        }}
      />
    </Box>
  );
}

FellowProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

function CurriculumCard({ title, subtitle }) {
  return (
    <Box
      sx={{
        flex: "1 1 0",
        backgroundColor: "#191919",
        border: "1px solid #444",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "197px",
          backgroundColor: "#0D0D0D",
          borderBottom: "1px solid #444",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          p: "20px",
        }}
      >
        <Box
          sx={{
            width: "32px",
            height: "32px",
            backgroundColor: "#FFFFFF",
            borderRadius: "6px",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EditOutlinedIcon sx={{ fontSize: 18, color: "#101010" }} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: 1.3,
              color: "#FFFFFF",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: 1.4,
              color: "#AAAAAA",
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

CurriculumCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

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
      {/* Background Doodles (positions/sizes mirror the Figma "New Fellows" frame) */}
      <Box component="img" src={imgDoodle11} alt="" sx={{ position: "absolute", top: "171px", left: "560px", width: "224px", height: "auto", pointerEvents: "none", mixBlendMode: "lighten", zIndex: 0 }} />
      <Box component="img" src={imgDoodle12} alt="" sx={{ position: "absolute", top: "214px", left: "997px", width: "312px", height: "auto", pointerEvents: "none", mixBlendMode: "lighten", zIndex: 0 }} />
      <Box component="img" src={imgDoodle13} alt="" sx={{ position: "absolute", top: "357px", left: "1189px", width: "246.5px", height: "auto", pointerEvents: "none", mixBlendMode: "lighten", zIndex: 0 }} />
      <Box component="img" src={imgDoodle4} alt="" sx={{ position: "absolute", top: "710px", left: "1210px", width: "246.5px", height: "auto", pointerEvents: "none", mixBlendMode: "lighten", zIndex: 0 }} />

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
              fontSize: "72px",
              lineHeight: "normal",
              color: "#FFFFFF",
            }}
          >
            <span style={{ color: "#F3801A" }}>TPEO</span> fellowship
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
            Fellows spend their first semester learning full-stack engineering, UI/UX design, and product management based on their respective core
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
        <SectionHeader
          title="How TPEO fellowship works"
          description="Our process over two years. We recruit every fall!"
        />

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
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Curved arrow doodle pointing up toward the fellowship steps */}
        <Box
          component="img"
          src={imgDoodle1}
          alt=""
          sx={{
            position: "absolute",
            top: { xs: "-30px", md: "0px" },
            left: { xs: "8px", md: "40px" },
            width: { xs: "160px", md: "250px" },
            height: "auto",
            pointerEvents: "none",
            mixBlendMode: "lighten",
            zIndex: 0,
          }}
        />
        {/* Star doodle to the right of the heading */}
        <Box
          component="img"
          src={imgDoodle9}
          alt=""
          sx={{
            position: "absolute",
            top: { xs: "40px", md: "60px" },
            right: { xs: "8px", md: "60px" },
            width: { xs: "100px", md: "150px" },
            height: "auto",
            pointerEvents: "none",
            mixBlendMode: "lighten",
            zIndex: 0,
          }}
        />
        <Box sx={{ textAlign: "center", maxWidth: "816px", display: "flex", flexDirection: "column", gap: "17px", position: "relative", zIndex: 1 }}>
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
            <Box
              component="a"
              href="https://www.instagram.com/txproduct"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#F3801A", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
              @txproduct
            </Box>{" "}
            for more!
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "16px", md: "23px" },
            width: "100%",
            maxWidth: "1408px",
          }}
        >
          <IconButton
            aria-label="Previous"
            sx={{
              flexShrink: 0,
              width: "39px",
              height: "39px",
              backgroundColor: "#F3801A",
              color: "#FFFFFF",
              "&:hover": { backgroundColor: "#d96f12" },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <Box sx={{ display: "flex", gap: { xs: "16px", md: "41px" }, flex: 1, minWidth: 0 }}>
            {[0, 1, 2].map((i) => (
              <Box
                key={i}
                sx={{
                  flex: "1 1 0",
                  aspectRatio: "1 / 1",
                  borderRadius: "20px",
                  backgroundColor: "#191919",
                  border: "1px solid #444",
                }}
              />
            ))}
          </Box>

          <IconButton
            aria-label="Next"
            sx={{
              flexShrink: 0,
              width: "39px",
              height: "39px",
              backgroundColor: "#F3801A",
              color: "#FFFFFF",
              "&:hover": { backgroundColor: "#d96f12" },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== PAST NEW FELLOW PROJECTS ========== */}
      <Box
        sx={{
          py: "100px",
          px: "79px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <SectionHeader
          title="Past new fellow projects"
          description="Here's some cool things that our new fellows have built in the past!"
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px", width: "100%", alignItems: "center" }}>
          {fellowProjects.map((project, index) => (
            <FellowProjectCard key={`${project.title}-${index}`} {...project} />
          ))}
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: "1304px",
            position: "relative",
            minHeight: "80px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <Box
            component="img"
            src={imgDoodle2}
            alt=""
            sx={{
              position: "absolute",
              top: "12px",
              right: { xs: "120px", md: "230px" },
              width: { xs: "150px", md: "210px" },
              height: "auto",
              pointerEvents: "none",
              mixBlendMode: "lighten",
              zIndex: 0,
            }}
          />
          <Button
            component="a"
            href="/clients"
            endIcon={<ArrowForwardIcon sx={{ color: "#F3801A" }} />}
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: 1.5,
              color: "#FFFFFF",
              backgroundColor: "#191919",
              border: "1px solid #444",
              borderRadius: "12px",
              px: "32px",
              py: "16px",
              textTransform: "none",
              position: "relative",
              zIndex: 1,
              "&:hover": {
                backgroundColor: "#222222",
                borderColor: "#555",
              },
            }}
          >
            View more projects
          </Button>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== ENGINEERING CURRICULUM ========== */}
      <Box
        sx={{
          py: "100px",
          px: "79px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <SectionHeader
          title="Our engineering curriculum"
          description="Get a taste of how it is to be a new fellow!"
        />

        <Box
          sx={{
            display: "flex",
            gap: "32px",
            width: "100%",
            maxWidth: "1304px",
          }}
        >
          {curriculumItems.map((item) => (
            <CurriculumCard key={item.title} {...item} />
          ))}
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== FAQ SECTION ========== */}
      <Box sx={{ py: "100px", px: "79px", position: "relative", zIndex: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: "8px" }}>
          <Box
            component="img"
            src={imgFaqLightbulb}
            alt=""
            sx={{
              width: "110px",
              height: "auto",
              pointerEvents: "none",
              mixBlendMode: "lighten",
            }}
          />
        </Box>
        <Faq type="NewFellow" iconStyle="chevron" />
      </Box>
    </Box>
  );
}

export default NewFellowPage;
