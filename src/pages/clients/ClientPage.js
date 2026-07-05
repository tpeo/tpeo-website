import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider, Button, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Faq from "../../components/FAQ";
import SectionHeader from "../../components/SectionHeader";
import { fellowProjects } from "../../data/fellowProjects";
import imgHeroDoodle from "../../assets/aboutIcons/projects-hero-doodle.png";
import imgCaseStudyTx from "../../assets/partnerIcons/case-study-tx-client.png";
import imgCaseStudyTx2 from "../../assets/partnerIcons/case-study-tx-2-client.png";
import imgCaseStudySafe from "../../assets/partnerIcons/case-study-safe.png";
import imgCaseStudyTheArc from "../../assets/partnerIcons/case-study-the-arc.png";
import imgReachOutDoodle from "../../assets/partnerIcons/reach-out-doodle.png";
import imgViewMoreProjectsArrow from "../../assets/partnerIcons/view-more-projects-arrow.svg";
import {
  pageRootSx,
  sectionPx,
  sectionPy,
  sectionGap,
  heroPt,
  heroTitleFont,
  figmaTop,
} from "../../styles/pageLayout";

const clientProjects = [
  {
    title: "Texas Cultural Trust #1",
    description:
      "Designed & implemented a centralized statewide Events Calendar to help users discover arts and cultural events across Texas in one place.",
    link: "/clients",
    image: imgCaseStudyTx,
  },
  {
    title: "Texas Cultural Trust #2",
    description:
      "Designed & implemented a centralized statewide Events Calendar to help users discover arts and cultural events across Texas in one place.",
    link: "/clients",
    image: imgCaseStudyTx2,
  },
  {
    title: "SAFE",
    description:
      "Designed & implemented a centralized statewide Events Calendar to help users discover arts and cultural events across Texas in one place.",
    link: "/clients",
    image: imgCaseStudySafe,
  },
  {
    title: "The Arc",
    description:
      "Designed & implemented a centralized statewide Events Calendar to help users discover arts and cultural events across Texas in one place.",
    link: "/clients",
    image: imgCaseStudyTheArc,
  },
];

function ProjectSpotlightCard({ title, description, link, image }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        flexDirection: { xs: "column", md: "row" },
        border: "1px solid #444",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#191919",
          borderRadius: { xs: "12px 12px 0 0", md: "12px 0 0 12px" },
          p: { xs: "32px", md: "60px" },
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
              lineHeight: "54px",
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
              lineHeight: "36px",
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
              lineHeight: "36px",
              color: "#F3801A",
            }}
          >
            View case study
          </Typography>
          <Box
            component="img"
            src={imgViewMoreProjectsArrow}
            alt=""
            sx={{ width: "24px", height: "24px", flexShrink: 0 }}
          />
        </Box>
      </Box>

      {image ? (
        <Box
          component="img"
          src={image}
          alt=""
          sx={{
            width: { xs: "100%", md: "468px" },
            flexShrink: 0,
            ml: { xs: 0, md: "-15px" },
            borderRadius: { xs: "0 0 12px 12px", md: "0 12px 12px 0" },
            objectFit: "cover",
            minHeight: { xs: "240px", md: "373px" },
            alignSelf: "stretch",
          }}
        />
      ) : (
        <Box
          sx={{
            width: { xs: "100%", md: "468px" },
            flexShrink: 0,
            ml: { xs: 0, md: "-15px" },
            borderRadius: { xs: "0 0 12px 12px", md: "0 12px 12px 0" },
            overflow: "hidden",
            backgroundColor: "#FFFFFF",
            backgroundImage: `
            linear-gradient(45deg, #2a2a2a 25%, transparent 25%),
            linear-gradient(-45deg, #2a2a2a 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #2a2a2a 75%),
            linear-gradient(-45deg, transparent 75%, #2a2a2a 75%)
          `,
            backgroundSize: "24px 24px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: { xs: "240px", md: "373px" },
            alignSelf: "stretch",
          }}
        />
      )}
    </Box>
  );
}

ProjectSpotlightCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
};

function SpotlightCarousel({ projects }) {
  const [index, setIndex] = useState(0);
  const currentProject = projects[index];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  return (
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
        aria-label="Previous project"
        onClick={handlePrev}
        disabled={projects.length <= 1}
        sx={{
          flexShrink: 0,
          width: "39px",
          height: "39px",
          backgroundColor: "#F3801A",
          color: "#101010",
          "&:hover": { backgroundColor: "#d96f12" },
          "&.Mui-disabled": { backgroundColor: "#444", color: "#888" },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <ProjectSpotlightCard {...currentProject} />
      </Box>

      <IconButton
        aria-label="Next project"
        onClick={handleNext}
        disabled={projects.length <= 1}
        sx={{
          flexShrink: 0,
          width: "39px",
          height: "39px",
          backgroundColor: "#F3801A",
          color: "#101010",
          "&:hover": { backgroundColor: "#d96f12" },
          "&.Mui-disabled": { backgroundColor: "#444", color: "#888" },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}

SpotlightCarousel.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
};

function ClientPage() {
  return (
    <Box sx={pageRootSx}>
      {/* ========== HERO SECTION ========== */}
      <Box
        sx={{
          pt: heroPt,
          pb: sectionPy,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box sx={{ px: sectionPx, display: "flex", flexDirection: "column", gap: "24px", maxWidth: "900px" }}>
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: heroTitleFont,
              lineHeight: "normal",
              color: "#FFFFFF",
            }}
          >
            <span style={{ color: "#F3801A" }}>TPEO</span>
            &rsquo;s Amazing Projects
          </Typography>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "36px",
              color: "#D7D7D7",
              maxWidth: "770px",
            }}
          >
            Check out some our recent client and new-fellow projects!
          </Typography>
        </Box>

        <Box
          component="img"
          src={imgHeroDoodle}
          alt=""
          sx={{
            position: "absolute",
            top: { xs: "160px", md: figmaTop(56), lg: figmaTop(56) },
            right: { xs: "-60px", md: "-123px", lg: "-123px" },
            width: { xs: "min(55vw, 420px)", md: "707px" },
            height: "auto",
            pointerEvents: "none",
            mixBlendMode: "lighten",
            zIndex: 0,
          }}
        />
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== CLIENT PROJECT SPOTLIGHT ========== */}
      <Box
        sx={{
          py: sectionPy,
          px: sectionPx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: sectionGap,
        }}
      >
        <SectionHeader
          title="Client Project Spotlight"
          description="A look at our recent client work."
          maxWidth="816px"
        />
        <SpotlightCarousel projects={clientProjects} />
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== NEW FELLOW PROJECT SPOTLIGHT ========== */}
      <Box
        sx={{
          py: sectionPy,
          px: sectionPx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: sectionGap,
        }}
      >
        <SectionHeader
          title="New Fellow Project Spotlight"
          description="A look at our recent client work."
          maxWidth="816px"
        />
        <SpotlightCarousel projects={fellowProjects} />
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== CLIENT REACH OUT ========== */}
      <Box
        sx={{
          pt: sectionPy,
          pb: "40px",
          px: sectionPx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          width: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1353px",
            position: "relative",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#101010",
              border: "1px solid #444",
              borderRadius: "12px",
              px: { xs: "32px", md: "60px" },
              py: { xs: "40px", md: "60px" },
              width: "100%",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "center" },
              flexDirection: { xs: "column", md: "row" },
              gap: "32px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "21.6px", minWidth: 0, flex: 1 }}>
              <Typography
                sx={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "36px", md: "48px" },
                  lineHeight: 1.2,
                  color: "#FFFFFF",
                }}
              >
                Interested in becoming a client?
              </Typography>
              <Box
                sx={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "24px", md: "28px" },
                  lineHeight: "40.44px",
                  color: "#D7D7D7",
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                Reach out to us at
                <Typography
                  component="a"
                  href="mailto:team@txproduct.org"
                  sx={{
                    color: "#F3801A",
                    textDecoration: "underline",
                    fontSize: "inherit",
                    fontWeight: 400,
                    fontFamily: "inherit",
                  }}
                >
                  team@txproduct.org
                </Typography>
              </Box>
            </Box>
            <Button
              component="a"
              href="/contact"
              sx={{
                backgroundColor: "#F3801A",
                color: "#101010",
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: "28px",
                textTransform: "none",
                borderRadius: "16px",
                px: "43px",
                py: "21.6px",
                lineHeight: "40.44px",
                flexShrink: 0,
                alignSelf: { xs: "flex-start", md: "center" },
                "&:hover": {
                  backgroundColor: "#FB8C14",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              mt: "-60px",
              pr: { xs: 0, md: "24px" },
              position: "relative",
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            <Box
              component="img"
              src={imgReachOutDoodle}
              alt=""
              sx={{
                width: { xs: "220px", md: "324px" },
                height: "auto",
                transform: "rotate(7.51deg)",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      <Faq type="Client" iconStyle="chevron" />
    </Box>
  );
}

export default ClientPage;
