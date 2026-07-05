import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider, Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedPage from "../../components/AnimatedPage";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Faq from "../../components/FAQ";
import SectionHeader from "../../components/SectionHeader";
import { fellowProjects } from "../../data/fellowProjects";
import { pageRootSx, sectionPx, heroPt, heroTitleFont, heroContentGap, decorativeBgSx, cardRowSx, threeColCardSx } from "../../styles/pageLayout";
// Asset Imports
import imgDoodle1 from "../../assets/aboutIcons/fellow-socials-arrow.png"; // website-04 (arrow)
import imgDoodle2 from "../../assets/aboutIcons/fellow-doodle-2.svg"; // website-11
import imgDoodle9 from "../../assets/aboutIcons/fellow-socials-star.svg"; // website-09 (star)
import imgDoodle12 from "../../assets/aboutIcons/fellow-doodle-12.svg"; // website-02
import imgDoodle13 from "../../assets/aboutIcons/fellow-doodle-13.svg"; // doodles-tpeo-20

const socialImageContext = require.context(
  "../../assets/socialImages/2026",
  false,
  /\.(png|jpg|jpeg|JPG|JPEG)$/i
);
const SOCIAL_CAROUSEL_IMAGES = socialImageContext.keys().map((key) => socialImageContext(key));
const SOCIAL_CAROUSEL_VISIBLE_COUNT = 3;

const fellowshipSteps = [
  {
    number: "1",
    title: "Learn",
    description: "6 month Full-stack Engineering, Product Design, or Product Management curriculum",
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

const curriculumItems = [
  {
    title: "Notion",
    subtitle: "Full-stack Curriculum",
    href: "https://www.notion.so/texas-product-engineering-organization/Full-stack-Curriculum-204af3f6e92a812da4a7fdeec617f563",
    embedType: "notion",
  },
  {
    title: "YouTube",
    subtitle: "Curriculum Playlists",
    href: "https://www.youtube.com/@texasproductengineeringorg5958/playlists",
    embedType: "youtube",
  },
  {
    title: "Slack",
    subtitle: "Join our community",
    href: "https://join.slack.com/t/txproduct/shared_invite/zt-42fbr578h-YmUuip2vPVGB5j7C3rfxfQ",
    embedType: "slack",
  },
];

function FellowProjectCard({ title, description, link, image, imagePosition = "left center" }) {
  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "stretch",
        width: "100%",
        maxWidth: "1304px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#191919",
          border: "1px solid #444",
          borderRadius: { xs: "12px 12px 0 0", md: "12px 0 0 12px" },
          p: { xs: "24px", sm: "32px", md: "60px" },
          display: "flex",
          flexDirection: "column",
          gap: { xs: "20px", md: "32px" },
          flex: 1,
          zIndex: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "16px", md: "23px" } }}>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "24px", sm: "28px", md: "36px" },
              lineHeight: 1.4,
              color: "#FFFFFF",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "16px", sm: "18px", md: "24px" },
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
              fontSize: { xs: "18px", md: "24px" },
              lineHeight: 1.5,
              color: "#F3801A",
            }}
          >
            View case study
          </Typography>
          <ArrowForwardIcon sx={{ color: "#F3801A", fontSize: { xs: 20, md: 24 } }} />
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
            objectPosition: imagePosition,
            minHeight: { xs: "250px", md: "373px" },
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
            backgroundColor: "#252525",
            backgroundImage: `
            linear-gradient(45deg, #2a2a2a 25%, transparent 25%),
            linear-gradient(-45deg, #2a2a2a 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #2a2a2a 75%),
            linear-gradient(-45deg, transparent 75%, #2a2a2a 75%)
          `,
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0",
            minHeight: { xs: "250px", md: "373px" },
          }}
        />
      )}
    </Box>
  );
}

FellowProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
  imagePosition: PropTypes.string,
};

function CurriculumPreview({ title, embedSrc, embedType, previewContainerSx, previewCtaSx }) {
  if (embedType === "iframe" && embedSrc) {
    return (
      <Box
        component="iframe"
        src={embedSrc}
        title={`${title} embed`}
        sx={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  if (embedType === "notion") {
    return (
      <Box sx={{ ...previewContainerSx, backgroundColor: "#FFFFFF" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box
            sx={{
              width: "28px",
              height: "28px",
              borderRadius: "4px",
              backgroundColor: "#101010",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            N
          </Box>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: 1.3,
              color: "#101010",
            }}
          >
            Full-stack Curriculum
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <Box sx={{ width: "72%", height: "8px", borderRadius: "4px", backgroundColor: "#E8E8E8" }} />
            <Box sx={{ width: "56%", height: "8px", borderRadius: "4px", backgroundColor: "#E8E8E8" }} />
            <Box sx={{ width: "64%", height: "8px", borderRadius: "4px", backgroundColor: "#E8E8E8" }} />
          </Box>
        </Box>
        <Typography sx={previewCtaSx}>Open in Notion →</Typography>
      </Box>
    );
  }

  if (embedType === "youtube") {
    return (
      <Box sx={{ ...previewContainerSx, backgroundColor: "#FFFFFF" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box
            sx={{
              width: "28px",
              height: "28px",
              borderRadius: "4px",
              backgroundColor: "#FF0000",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            ▶
          </Box>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: 1.3,
              color: "#101010",
            }}
          >
            Curriculum Playlists
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <Box sx={{ width: "72%", height: "8px", borderRadius: "4px", backgroundColor: "#E8E8E8" }} />
            <Box sx={{ width: "56%", height: "8px", borderRadius: "4px", backgroundColor: "#E8E8E8" }} />
            <Box sx={{ width: "64%", height: "8px", borderRadius: "4px", backgroundColor: "#E8E8E8" }} />
          </Box>
        </Box>
        <Typography sx={previewCtaSx}>Open on YouTube →</Typography>
      </Box>
    );
  }

  if (embedType === "slack") {
    return (
      <Box
        sx={{
          ...previewContainerSx,
          alignItems: "center",
          textAlign: "center",
          background: "linear-gradient(135deg, #4A154B 0%, #611f69 100%)",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", width: "100%" }}>
          <Box
            sx={{
              width: "28px",
              height: "28px",
              borderRadius: "4px",
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              color: "#4A154B",
            }}
          >
            #
          </Box>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: 1.3,
              color: "#FFFFFF",
            }}
          >
            Join TPEO on Slack
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%", alignItems: "center" }}>
            <Box sx={{ width: "72%", height: "8px", borderRadius: "4px", backgroundColor: "rgba(255, 255, 255, 0.25)" }} />
            <Box sx={{ width: "56%", height: "8px", borderRadius: "4px", backgroundColor: "rgba(255, 255, 255, 0.25)" }} />
            <Box sx={{ width: "64%", height: "8px", borderRadius: "4px", backgroundColor: "rgba(255, 255, 255, 0.25)" }} />
          </Box>
        </Box>
        <Typography sx={{ ...previewCtaSx, color: "#FFFFFF", width: "100%" }}>Open in Slack →</Typography>
      </Box>
    );
  }

  return null;
}

CurriculumPreview.propTypes = {
  title: PropTypes.string,
  embedSrc: PropTypes.string,
  embedType: PropTypes.string,
  previewContainerSx: PropTypes.object,
  previewCtaSx: PropTypes.object,
};

function CurriculumCard({ title, subtitle, href, embedSrc, embedType = "iframe" }) {
  const isLinkCard = ["slack", "notion", "youtube"].includes(embedType) && href;

  const previewContainerSx = {
    width: "100%",
    height: "100%",
    minHeight: { xs: "150px", md: "197px" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
    px: "20px",
    py: "18px",
  };

  const previewCtaSx = {
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: 1.3,
    color: "#F3801A",
  };

  return (
    <Box
      component={isLinkCard ? "a" : "div"}
      href={isLinkCard ? href : undefined}
      target={isLinkCard ? "_blank" : undefined}
      rel={isLinkCard ? "noopener noreferrer" : undefined}
      sx={{
        ...threeColCardSx,
        backgroundColor: "#191919",
        border: "1px solid #444",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        transition: "border-color 0.2s ease",
        "&:hover": isLinkCard
          ? {
              borderColor: "#F3801A",
            }
          : undefined,
      }}
    >
      <Box
        sx={{
          height: { xs: "150px", md: "197px" },
          backgroundColor: "#0D0D0D",
          borderBottom: "1px solid #444",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CurriculumPreview
          title={title}
          embedSrc={embedSrc}
          embedType={embedType}
          previewContainerSx={previewContainerSx}
          previewCtaSx={previewCtaSx}
        />
      </Box>
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "4px", md: "2px" } }}>
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "20px", md: "22px" },
              lineHeight: "normal",
              color: "#FFFFFF",
            }}
          >
            {title}
          </Typography>
          {href && embedType === "iframe" ? (
            <Typography
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              sx={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "15px", md: "17px" },
                lineHeight: 1.3,
                color: "#F3801A",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {subtitle}
            </Typography>
          ) : (
            <Typography
              sx={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "15px", md: "17px" },
                lineHeight: 1.3,
                color: "#AAAAAA",
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

CurriculumCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  href: PropTypes.string,
  embedSrc: PropTypes.string,
  embedType: PropTypes.oneOf(["iframe", "slack", "notion", "youtube"]),
};

function StepCard({ number, title, description }) {
  return (
    <Box sx={{ ...threeColCardSx, display: "flex", flexDirection: "column", gap: { xs: "24px", md: "48px" }, alignItems: "center", textAlign: "center", maxWidth: { xs: "100%", sm: "320px", md: "none" } }}>
      <Box
        sx={{
          width: { xs: "48px", md: "60px" },
          height: { xs: "48px", md: "60px" },
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
            fontSize: { xs: "24px", md: "36px" },
            lineHeight: "24px",
            color: "#F3801A",
          }}
        >
          {number}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "16px", md: "32px" } }}>
        <Typography
          sx={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "24px", md: "32px" },
            lineHeight: 1.2,
            color: "#FFFFFF",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "16px", md: "24px" },
            lineHeight: 1.5,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  let visibleCount = 3;
  if (isMobile) {
    visibleCount = 1;
  } else if (isTablet) {
    visibleCount = 2;
  }

  const [socialCarouselIndex, setSocialCarouselIndex] = useState(0);

  const visibleSocialImages = Array.from({ length: visibleCount }, (_, i) => {
    if (SOCIAL_CAROUSEL_IMAGES.length === 0) return null;
    return SOCIAL_CAROUSEL_IMAGES[(socialCarouselIndex + i) % SOCIAL_CAROUSEL_IMAGES.length];
  });

  const handleSocialCarouselPrev = () => {
    if (SOCIAL_CAROUSEL_IMAGES.length === 0) return;
    setSocialCarouselIndex(
      (prev) => (prev - visibleCount + SOCIAL_CAROUSEL_IMAGES.length) % SOCIAL_CAROUSEL_IMAGES.length
    );
  };

  const handleSocialCarouselNext = () => {
    if (SOCIAL_CAROUSEL_IMAGES.length === 0) return;
    setSocialCarouselIndex((prev) => (prev + visibleCount) % SOCIAL_CAROUSEL_IMAGES.length);
  };

  return (
    <AnimatedPage>
      <Box sx={pageRootSx}>
      {/* Background Doodles (positions/sizes mirror the Figma "New Fellows" frame) */}
      <Box component="img" src={imgDoodle12} alt="" sx={{ ...decorativeBgSx, top: { lg: "62px" }, right: { lg: "14.9%", xl: "225px" }, width: { lg: "240px", xl: "312px" }, height: "auto" }} />
      <Box component="img" src={imgDoodle13} alt="" sx={{ ...decorativeBgSx, top: { lg: "166px" }, right: { lg: "6.8%", xl: "103px" }, width: { lg: "180px", xl: "246px" }, height: "auto" }} />

      {/* ========== HERO SECTION ========== */}
      <Box
        sx={{
          pt: heroPt,
          px: sectionPx,
          pb: { xs: "60px", md: "160px" },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: heroContentGap }}>
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: heroTitleFont,
              lineHeight: "normal",
              color: "#FFFFFF",
            }}
          >
            <span style={{ color: "#F3801A" }}>TPEO</span> fellowship
          </Typography>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "18px", md: "24px" },
              lineHeight: { xs: "28px", md: "36px" },
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
          pt: { xs: "60px", md: "96px" },
          px: sectionPx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "40px", md: "100px" },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Curved arrow squiggle in the bottom-left of the section */}
        <Box
          component="img"
          src={imgDoodle1}
          alt=""
          sx={{
            position: "absolute",
            bottom: { xs: "20px", md: "30px" },
            left: "-20px",
            width: { xs: "100px", md: "250px" },
            height: "auto",
            pointerEvents: "none",
            mixBlendMode: "lighten",
            zIndex: 0,
            display: { xs: "none", sm: "block" },
          }}
        />
        <SectionHeader
          title="How TPEO fellowship works"
          description="Our process over two years. We recruit every fall!"
        />

        <Box sx={{ ...cardRowSx, gap: { xs: "40px", lg: "60px" }, maxWidth: "1304px", pb: { xs: "60px", md: "92px" } }}>
          {fellowshipSteps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== SOCIALS SECTION ========== */}
      <Box
        sx={{
          py: { xs: "60px", md: "100px" },
          px: sectionPx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "40px", md: "60px" },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Star doodle inline with the heading text */}
        <Box
          component="img"
          src={imgDoodle9}
          alt=""
          sx={{
            position: "absolute",
            top: { xs: "40px", md: "110px" },
            right: { xs: "10px", md: "180px" },
            width: { xs: "80px", md: "185px" },
            height: "auto",
            pointerEvents: "none",
            mixBlendMode: "screen",
            zIndex: 0,
            display: { xs: "none", sm: "block" },
          }}
        />
        <Box sx={{ textAlign: "center", maxWidth: "816px", display: "flex", flexDirection: "column", gap: "20px", position: "relative", zIndex: 1 }}>
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "32px", md: "48px" },
              lineHeight: "normal",
              color: "#F3801A",
            }}
          >
            Socials
          </Typography>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "18px", md: "24px" },
              lineHeight: { xs: "28px", md: "36px" },
              color: "#FFFFFF",
            }}
          >
            Apart from the innovation we incubate, we also have fun! Check our insta{" "}
            <Box
              component="a"
              href="https://www.instagram.com/txproduct"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#F3801A", fontWeight: 400, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
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
            gap: { xs: "12px", md: "23px" },
            width: "100%",
            maxWidth: "1408px",
          }}
        >
          <IconButton
            aria-label="Previous"
            onClick={handleSocialCarouselPrev}
            disabled={SOCIAL_CAROUSEL_IMAGES.length === 0}
            sx={{
              flexShrink: 0,
              width: { xs: "32px", md: "39px" },
              height: { xs: "32px", md: "39px" },
              backgroundColor: "#F3801A",
              color: "#101010",
              "&:hover": { backgroundColor: "#d96f12" },
              "&.Mui-disabled": { backgroundColor: "#444", color: "#888" },
            }}
          >
            <ChevronLeftIcon fontSize={isMobile ? "small" : "medium"} />
          </IconButton>

          <Box sx={{ display: "flex", gap: { xs: "12px", md: "41px" }, flex: 1, minWidth: 0 }}>
            {visibleSocialImages.map((image, i) => (
              <Box
                key={`${socialCarouselIndex}-${i}`}
                component="img"
                src={image}
                alt={`TPEO social event ${((socialCarouselIndex + i) % SOCIAL_CAROUSEL_IMAGES.length) + 1}`}
                sx={{
                  flex: "1 1 0",
                  aspectRatio: "1 / 1",
                  borderRadius: { xs: "12px", md: "20px" },
                  border: "1px solid #444",
                  objectFit: "cover",
                  minWidth: 0,
                }}
              />
            ))}
          </Box>

          <IconButton
            aria-label="Next"
            onClick={handleSocialCarouselNext}
            disabled={SOCIAL_CAROUSEL_IMAGES.length === 0}
            sx={{
              flexShrink: 0,
              width: { xs: "32px", md: "39px" },
              height: { xs: "32px", md: "39px" },
              backgroundColor: "#F3801A",
              color: "#101010",
              "&:hover": { backgroundColor: "#d96f12" },
              "&.Mui-disabled": { backgroundColor: "#444", color: "#888" },
            }}
          >
            <ChevronRightIcon fontSize={isMobile ? "small" : "medium"} />
          </IconButton>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== PAST NEW FELLOW PROJECTS ========== */}
      <Box
        sx={{
          py: { xs: "60px", md: "100px" },
          px: sectionPx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "40px", md: "60px" },
          position: "relative",
          zIndex: 1,
        }}
      >
        <SectionHeader
          title="Past new fellow projects"
          description="Here’s some cool things that our new fellows have built in the past!"
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "24px", md: "40px" }, width: "100%", alignItems: "center" }}>
          {fellowProjects.slice(0, 2).map((project, index) => (
            <FellowProjectCard key={`${project.title}-${index}`} {...project} />
          ))}
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: "1304px",
            position: "relative",
            minHeight: { xs: "60px", md: "80px" },
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-end" },
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
              width: { xs: "120px", md: "210px" },
              height: "auto",
              pointerEvents: "none",
              mixBlendMode: "lighten",
              zIndex: 0,
              display: { xs: "none", sm: "block" },
            }}
          />
          <Button
            component="a"
            href="/clients"
            endIcon={<ArrowForwardIcon sx={{ color: "#F3801A", fontSize: { xs: 20, md: 24 } } } />}
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "18px", md: "28px" },
              lineHeight: "normal",
              color: "#FFFFFF",
              backgroundColor: "#191919",
              border: "1px solid #444",
              borderRadius: "12px",
              px: { xs: "24px", md: "32px" },
              py: { xs: "12px", md: "16px" },
              textTransform: "none",
              position: "relative",
              zIndex: 1,
              width: { xs: "100%", sm: "auto" },
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
          py: { xs: "60px", md: "100px" },
          px: sectionPx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "40px", md: "60px" },
          position: "relative",
          zIndex: 1,
        }}
      >
        <SectionHeader
          title="Our engineering curriculum"
          description="Get a taste of how it is to be a new fellow!"
        />

        <Box sx={{ ...cardRowSx, gap: { xs: "24px", lg: "32px" }, maxWidth: "1304px" }}>
          {curriculumItems.map((item) => (
            <CurriculumCard key={item.title} {...item} />
          ))}
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      <Faq type="NewFellow" iconStyle="chevron" />
    </Box>
    </AnimatedPage>
  );
}

export default NewFellowPage;
