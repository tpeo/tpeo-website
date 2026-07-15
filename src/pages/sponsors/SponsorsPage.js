import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider, Button, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedPage from "../../components/AnimatedPage";
import Faq from "../../components/FAQ";
import SectionHeader from "../../components/SectionHeader";
import {
  pageRootSx,
  sectionPx,
  heroPt,
  heroTitleFont,
  cardRowSx,
  decorativeBgSx,
  threeColCardSx,
} from "../../styles/pageLayout";

// Asset Imports
import imgPartnerDoodles1 from "../../assets/partnerIcons/hero-doodle-1.png";
import imgPartnerDoodles2 from "../../assets/partnerIcons/hero-doodle-2.png";
import imgPartnerDoodles3 from "../../assets/partnerIcons/hero-star.png";
import imgReachOutDoodle from "../../assets/partnerIcons/reach-out-doodle.png";
import imgCaseStudyTx2 from "../../assets/partnerIcons/case-study-tx-2-client.png";
import imgHeroArrowRight from "../../assets/partnerIcons/hero-arrow-right.svg";
import imgViewMoreProjectsArrow from "../../assets/partnerIcons/view-more-projects-arrow.svg";

import imgPartnerLogo1 from "../../assets/partnerIcons/partner-logo-1.png";
import imgPartnerLogo2 from "../../assets/partnerIcons/partner-logo-2.png";
import imgPartnerLogo3 from "../../assets/partnerIcons/partner-logo-3.png";
import imgPartnerLogo4 from "../../assets/partnerIcons/partner-logo-4.png";
import imgPartnerLogo5 from "../../assets/partnerIcons/partner-logo-5.png";
import imgPartnerLogo6 from "../../assets/partnerIcons/partner-logo-6.png";
import imgPartnerLogo7 from "../../assets/partnerIcons/partner-logo-7.png";
import imgPartnerLogo8 from "../../assets/partnerIcons/partner-logo-8.png";

import iconTalent from "../../assets/aboutIcons/icon-talent.svg";
import iconImpact from "../../assets/aboutIcons/icon-impact.svg";
import iconExposure from "../../assets/aboutIcons/icon-exposure.svg";
import iconCheck from "../../assets/aboutIcons/icon-check.svg";
import iconSocialEnterprise from "../../assets/partnerIcons/icon-social-enterprise.svg";

import iconCommunication from "../../assets/aboutIcons/icon-active-comm.svg";
import iconClientFocused from "../../assets/aboutIcons/icon-built-client.svg";
import iconFutureBuilt from "../../assets/aboutIcons/icon-built-future.svg";

const clientOfferingsData = [
  {
    icon: iconCommunication,
    title: "Active\nCommunication",
    description: "Receive frequent updates through weekly check-ins at every stage of the project",
  },
  {
    icon: iconSocialEnterprise,
    title: "Social &\nEnterprise Impact",
    description: "All work is completed either pro-bono for our nonprofit clients, or at an extremely low cost for our enterprise clients.",
  },
  {
    icon: iconClientFocused,
    title: "Client-Focused",
    description: "Designs are developed with your mission in mind, integrating seamlessly with your existing systems.",
  },
  {
    icon: iconFutureBuilt,
    title: "Built for the\nFuture",
    description: "We build with scalability in mind so your product lasts.",
  },
];

const processStepsData = [
  {
    number: "1",
    title: "Meet the Team",
    description: "Initial discussions with the Product Manager, Designer, and Developer who will work with you throughout the entire project.",
  },
  {
    number: "2",
    title: "Begin Project",
    description: "From here we accept the project proposal and our PM, Designers, and Engineers begin working to scope a solution.",
  },
  {
    number: "3",
    title: "Start Building",
    description: "Once a plan is laid out, we move into active development with regular syncs and feedback sessions along the way.",
  },
  {
    number: "4",
    title: "Deployment",
    description: "After all rounds of testing and final approvals, we hand off fully deployed, documented, ready-to-use software.",
  },
];

const whySponsorData = [
  {
    icon: iconTalent,
    title: "Top Student Talent",
    description: "Gain access to driven, skills-first students with in-demand technical and product skills.",
  },
  {
    icon: iconImpact,
    title: "Meaningful Impact",
    description: "Empower the next generation of builders, developers, and creatives shaping solutions to real-world problems.",
  },
  {
    icon: iconExposure,
    title: "Brand Exposure",
    description: "Showcase your brand to students, partners, and the broader tech community.",
  },
];

const tierData = [
  {
    name: "Bronze",
    price: "$1,000",
    color: "#B37033",
    benefits: ["Logo on website & shirt", "Social media shoutout"],
  },
  {
    name: "Silver",
    price: "$1,500",
    color: "#B7B8C7",
    benefits: [
      "Everything in Bronze",
      "Club resume book",
      "Event resume books",
      "Internal company teach-in",
      "Private member recruiting event",
    ],
  },
  {
    name: "Gold",
    price: "$2,500",
    isGradient: true,
    benefits: [
      "Everything in Bronze",
      "Everything in Silver",
      "Campus-wide partnered events",
      "Representation at UT flagship tech events across school year",
    ],
  },
];

const partnershipLogos = [
  imgPartnerLogo1, imgPartnerLogo2, imgPartnerLogo3,
  imgPartnerLogo4, imgPartnerLogo5, imgPartnerLogo6,
  imgPartnerLogo7, imgPartnerLogo8
];

const recentProject = {
  title: "Texas Cultural Trust #2",
  description:
    "Designed & implemented a centralized statewide Events Calendar to help users discover arts and cultural events across Texas in one place.",
  link: "/clients",
  image: imgCaseStudyTx2,
};

const HEADER_OFFSET = 100;

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const top =
    element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

const heroNavButtonSx = {
  backgroundColor: "#191919",
  border: "1px solid #444",
  borderRadius: "10px",
  px: "32px",
  py: "24px",
  color: "#FFFFFF",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontWeight: 400,
  fontSize: "28px",
  lineHeight: "normal",
  textTransform: "none",
  gap: "8px",
  "&:hover": {
    backgroundColor: "#252525",
    borderColor: "#444",
  },
};

function HeroDownArrow() {
  return (
    <Box
      component="img"
      src={imgHeroArrowRight}
      alt=""
      sx={{
        width: "30px",
        height: "30px",
        transform: "rotate(90deg)",
        flexShrink: 0,
      }}
    />
  );
}

function ArrowIcon({ src, size = "30px" }) {
  return (
    <Box
      component="img"
      src={src}
      alt=""
      sx={{ width: size, height: size, flexShrink: 0 }}
    />
  );
}

ArrowIcon.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
};

function ProjectSpotlightCard({ title, description, link, image }) {
  return (
    <Box
      component={motion.div}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      sx={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        flexDirection: { xs: "column", md: "row" },
        border: "1px solid #444",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#191919",
          borderRadius: { xs: "12px 12px 0 0", md: "12px 0 0 12px" },
          p: { xs: "32px", md: "60px" },
          display: "flex",
          flexDirection: "column",
          gap: { xs: "24px", md: "32px" },
          flex: 1,
          zIndex: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "16px", md: "23px" } }}>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "24px", md: "36px" },
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
              fontSize: { xs: "16px", md: "24px" },
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
          <ArrowIcon src={imgViewMoreProjectsArrow} size="24px" />
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "468px" },
          flexShrink: 0,
          ml: { xs: 0, md: "-15px" },
          borderRadius: { xs: "0 0 12px 12px", md: "0 12px 12px 0" },
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: { xs: "250px", md: "373px" },
        }}
      />
    </Box>
  );
}

ProjectSpotlightCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

function OfferingCard({ icon, title, description, index }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      sx={{ ...threeColCardSx, display: "flex", flexDirection: "column", alignItems: "center", gap: "21.32px", maxWidth: { xs: "100%", sm: "320px", md: "none" }, cursor: "pointer" }}
    >
      <Box sx={{ width: { xs: "60px", md: "78px" }, height: { xs: "60px", md: "78px" }, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box component="img" src={icon} alt="" sx={{ width: { xs: "40px", md: "54.6px" }, height: { xs: "40px", md: "54.6px" } }} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0px", alignItems: "center" }}>
        <Typography
          sx={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "22px", md: "28px" },
            lineHeight: { xs: "28px", md: "36px" },
            color: "#FFFFFF",
            textAlign: "center",
            whiteSpace: "pre-line",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "16px", md: "24px" },
          lineHeight: { xs: "24px", md: "36px" },
          color: "#D7D7D7",
          textAlign: "center",
          width: "100%",
          maxWidth: "290px",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

OfferingCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number,
};

function StepCard({ number, title, description, index }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 15 } }}
      sx={{
        ...threeColCardSx,
        backgroundColor: "#191919",
        border: "1.32px solid #444",
        borderRadius: "15.83px",
        p: { xs: "24px", md: "41.32px" },
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: { xs: "100%", sm: "320px", md: "none" },
        alignItems: "center",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "rgba(243, 128, 26, 0.15)",
        },
      }}
    >
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
            color: "#F3801A",
            lineHeight: "24px",
          }}
        >
          {number}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "22px", md: "28px" },
          lineHeight: { xs: "28px", md: "36px" },
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "16px", md: "24px" },
          lineHeight: { xs: "24px", md: "36px" },
          color: "#D7D7D7",
          textAlign: "center",
          width: "100%",
          maxWidth: "208px",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

StepCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number,
};

function WhySponsorCard({ icon, title, description, index }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ boxShadow: "0 0 30px rgba(243, 128, 26, 0.3)", transition: { duration: 0.3 } }}
      sx={{
        ...threeColCardSx,
        backgroundColor: "#191919",
        border: "1.47px solid #444",
        borderRadius: "23.47px",
        pt: { xs: "40px", md: "60.14px" },
        px: { xs: "24px", md: "60.14px" },
        pb: { xs: "40px", md: "60.14px" },
        maxWidth: { xs: "100%", sm: "435px", md: "none" },
        display: "flex",
        flexDirection: "column",
        gap: "29.34px",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Box sx={{ width: { xs: "48px", md: "58.67px" }, height: { xs: "48px", md: "58.67px" }, alignSelf: "center" }}>
        <Box component="img" src={icon} alt="" sx={{ width: "100%", height: "100%" }} />
      </Box>
      <Typography
        sx={{
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "24px", md: "32px" },
          lineHeight: { xs: "32px", md: "36px" },
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "16px", md: "24px" },
          lineHeight: { xs: "24px", md: "36px" },
          color: "#D7D7D7",
          width: "100%",
          maxWidth: "315px",
          textAlign: "center",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

WhySponsorCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number,
};

function TierCard({ name, price, benefits, color, isGradient, index }) {
  const borderAnimationSx = {
    "@keyframes tierBorderDraw": {
      from: { strokeDashoffset: 1 },
      to: { strokeDashoffset: 0 },
    },
    "& .tier-border-path-a, & .tier-border-path-b": {
      fill: "none",
      stroke: "#F3801A",
      strokeDasharray: 1,
      strokeDashoffset: 1,
      opacity: 0,
    },
    "&:hover .tier-border-path-a, &:hover .tier-border-path-b": {
      opacity: 1,
      animation: "tierBorderDraw 0.8s ease forwards",
    },
    "&:not(:hover) .tier-border-path-a, &:not(:hover) .tier-border-path-b": {
      animation: "none",
      opacity: 0,
      strokeDashoffset: 1,
    },
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
      sx={{
        ...threeColCardSx,
        ...borderAnimationSx,
        backgroundColor: "#191919",
        border: "1.27px solid #444",
        borderRadius: "20.36px",
        p: { xs: "32px", md: "51.27px" },
        maxWidth: { xs: "100%", sm: "380px", md: "none" },
        height: { xs: "auto", md: "597px" },
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        position: "relative",
        overflow: "visible",
      }}
    >
      <Box
        component="svg"
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          top: -0.5,
          left: -0.5,
          right: -0.5,
          bottom: -0.5,
          width: "calc(100% + 1px)",
          height: "calc(100% + 1px)",
          pointerEvents: "none",
          zIndex: 3,
          overflow: "visible",
        }}
      >
        <Box
          component="path"
          className="tier-border-path-a"
          pathLength="1"
          vectorEffect="nonScalingStroke"
          strokeWidth="0.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 0.5 4.0 A 3.5 3.5 0 0 1 4.0 0.5 H 96.0 A 3.5 3.5 0 0 1 99.5 4.0 V 96.0 A 3.5 3.5 0 0 1 96.0 99.5"
        />
        <Box
          component="path"
          className="tier-border-path-b"
          pathLength="1"
          vectorEffect="nonScalingStroke"
          strokeWidth="0.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 0.5 4.0 V 96.0 A 3.5 3.5 0 0 0 4.0 99.5 H 96.0"
        />
      </Box>
      <Typography
        sx={{
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "36px", md: "48px" },
          lineHeight: "36px",
          ...(isGradient
            ? {
                backgroundImage: "linear-gradient(90.25deg, #FB8C14 2.55%, #F6A606 102.47%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }
            : { color }),
        }}
      >
        {name}
      </Typography>
      <Box sx={{ display: "flex", gap: "8px", alignItems: "baseline", flexWrap: "nowrap" }}>
        <Typography
          sx={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "48px", md: "64px" },
            lineHeight: "normal",
            color: "#FFFFFF",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          {price}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "20px", md: "28px" },
            lineHeight: "36px",
            color: "#D7D7D7",
            whiteSpace: "nowrap",
          }}
        >
          / year
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: "#444", height: "1.27px" }} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "17.81px" }}>
        {benefits.map((benefit) => (
          <Box key={benefit} sx={{ display: "flex", gap: "12.72px", alignItems: "flex-start" }}>
            <Box sx={{ pt: "3.82px", flexShrink: 0 }}>
              <Box component="img" src={iconCheck} alt="" sx={{ width: "20.36px", height: "20.36px" }} />
            </Box>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 500,
                fontSize: { xs: "16px", md: "20px" },
                lineHeight: "normal",
                color: "#D7D7D7",
              }}
            >
              {benefit}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

TierCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string,
  isGradient: PropTypes.bool,
  index: PropTypes.number,
};

function SponsorsPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AnimatedPage>
      <Box sx={pageRootSx}>
      {/* Background Doodles */}
      <Box
        component="img"
        src={imgPartnerDoodles1}
        alt=""
        sx={{
          ...decorativeBgSx,
          top: { lg: "130px" },
          right: { lg: "6%", xl: "132px" },
          width: { lg: "320px", xl: "403px" },
          height: "auto",
        }}
      />
      <Box
        component="img"
        src={imgPartnerDoodles2}
        alt=""
        sx={{
          ...decorativeBgSx,
          top: { lg: "95px" },
          right: { lg: "22%", xl: "340px" },
          width: { lg: "200px", xl: "258px" },
          height: "auto",
          transform: "rotate(13.48deg)",
        }}
      />
      <Box
        component="img"
        src={imgPartnerDoodles3}
        alt=""
        sx={{
          ...decorativeBgSx,
          top: { lg: "290px" },
          right: { lg: "3%", xl: "48px" },
          width: "72px",
          height: "auto",
        }}
      />

      {/* ========== HERO SECTION ========== */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          pt: heroPt,
          px: sectionPx,
          pb: { xs: "60px", md: "182px" },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "900px" }}>
          <Typography
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: heroTitleFont,
              lineHeight: "normal",
              color: "#FFFFFF",
            }}
          >
            Partner with <span style={{ color: "#F3801A" }}>TPEO</span>
          </Typography>
          <Typography
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "18px", md: "24px" },
              lineHeight: { xs: "28px", md: "36px" },
              color: "#D7D7D7",
              maxWidth: "680px",
            }}
          >
            Interested in sponsoring and/or working with us as a client? Here is what a partnership with us will look like!
          </Typography>
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            sx={{ display: "flex", gap: { xs: "16px", md: "24px" }, flexWrap: "wrap" }}
          >
            <Button
              onClick={() => scrollToSection("client-projects")}
              endIcon={<HeroDownArrow />}
              sx={{ ...heroNavButtonSx, fontSize: { xs: "20px", md: "28px" }, px: { xs: "24px", md: "32px" }, py: { xs: "16px", md: "24px" }, width: { xs: "100%", sm: "auto" } }}
            >
              View client projects
            </Button>
            <Button
              onClick={() => scrollToSection("sponsorship")}
              endIcon={<HeroDownArrow />}
              sx={{ ...heroNavButtonSx, fontSize: { xs: "20px", md: "28px" }, px: { xs: "24px", md: "32px" }, py: { xs: "16px", md: "24px" }, width: { xs: "100%", sm: "auto" } }}
            >
              Sponsorship
            </Button>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== CLIENT PROJECTS SECTION ========== */}
      <Box
        id="client-projects"
        sx={{
          py: { xs: "60px", md: "100px" },
          px: sectionPx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "40px", md: "60px" },
          scrollMarginTop: `${HEADER_OFFSET}px`,
        }}
      >
        <SectionHeader
          title="Client Projects"
          description="What we offer our clients, whether you're a nonprofit, a startup, or an enterprise!"
          maxWidth="971px"
        />

        <Box sx={{ ...cardRowSx, gap: { xs: "40px", lg: "58px" }, maxWidth: "1422px" }}>
          {clientOfferingsData.map((item, index) => (
            <OfferingCard key={item.title} {...item} index={index} />
          ))}
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== HOW OUR PROJECTS WORK SECTION ========== */}
      <Box
        sx={{
          py: { xs: "60px", md: "100px" },
          px: sectionPx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "40px", md: "60px" },
        }}
      >
        <SectionHeader
          title="How Our Projects Work"
          description="All Client projects are paired with a team of experienced students—Product Manager, Designers, Engineers—who have participated in our rigorous training curriculum."
          maxWidth="971px"
        />

        <Box sx={{ ...cardRowSx, gap: { xs: "40px", lg: "31px" }, maxWidth: "1277px" }}>
          {processStepsData.map((step, index) => (
            <StepCard key={step.number} {...step} index={index} />
          ))}
        </Box>
      </Box>

      {/* ========== PROPOSE A PROJECT ========== */}
      <Box
        sx={{
          px: sectionPx,
          pb: { xs: "60px", md: "100px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#101010",
            border: "1px solid #444",
            borderRadius: "12px",
            px: { xs: "24px", sm: "40px", md: "108.8px" },
            py: { xs: "40px", sm: "60px", md: "87.3px" },
            width: "100%",
            maxWidth: "1295px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            position: "relative",
            overflow: "hidden",
            mb: { xs: "0", md: "-201px" },
            zIndex: 1,
            gap: "32px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "12px", md: "21.6px" } }}>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "28px", sm: "36px", md: "48px" },
                lineHeight: { xs: 1.2, md: "80.88px" },
                color: "#FFFFFF",
                maxWidth: "841px",
              }}
            >
              Interested in proposing a project?
            </Typography>
            <Box
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "18px", sm: "22px", md: "28px" },
                lineHeight: { xs: 1.4, md: "40.44px" },
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
              or fill out this form!
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
              fontSize: { xs: "18px", md: "28px" },
              textTransform: "none",
              borderRadius: "16px",
              px: { xs: "24px", md: "43px" },
              py: { xs: "12px", md: "21.6px" },
              lineHeight: 1.2,
              flexShrink: 0,
              width: { xs: "100%", sm: "auto" },
              "&:hover": {
                backgroundColor: "#FB8C14",
              },
            }}
          >
            Link to Form
          </Button>
        </Box>

        <Box
          sx={{
            width: { xs: "200px", md: "363.6px" },
            height: { xs: "200px", md: "363.8px" },
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-end",
            mr: { xs: "20px", md: "50px" },
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
              width: { xs: "180px", md: "324px" },
              height: "auto",
              transform: "rotate(7.51deg)",
              mixBlendMode: "lighten",
            }}
          />
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== WHY SPONSOR US SECTION ========== */}
      <Box
        id="sponsorship"
        sx={{
          py: { xs: "60px", md: "100px" },
          px: sectionPx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "40px", md: "60px" },
          scrollMarginTop: `${HEADER_OFFSET}px`,
        }}
      >
        <SectionHeader
          title="Sponsorship: Why TPEO?"
          description="Gain exclusive access to UT Austin’s most selective tech pipeline, representing the strongest talent from multiple top-10 programs."
          maxWidth="816px"
        />

        <Box sx={{ ...cardRowSx, gap: { xs: "40px", lg: "40px" }, maxWidth: "1423px" }}>
          {whySponsorData.map((item, index) => (
            <WhySponsorCard key={item.title} {...item} index={index} />
          ))}
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== SPONSORSHIP TIERS SECTION ========== */}
      <Box
        sx={{
          py: { xs: "60px", md: "100px" },
          px: sectionPx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "40px", md: "60px" },
        }}
      >
        <SectionHeader
          title="Sponsorship Tiers"
          description={
            <>
              Choose the level that fits your goals and budget.
              <br />
              Feel free to reach out as well - we’re always flexible!
            </>
          }
          maxWidth="816px"
        />

        <Box sx={{ ...cardRowSx, gap: { xs: "40px", lg: "45px" }, maxWidth: "1234px" }}>
          {tierData.map((tier, index) => (
            <TierCard key={tier.name} {...tier} index={index} />
          ))}
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== RECENT PARTNERSHIPS SECTION ========== */}
      <Box
        sx={{
          py: { xs: "60px", md: "100px" },
          px: sectionPx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "40px", md: "60px" },
        }}
      >
        <SectionHeader
          title="Recent Partnerships"
          description="Sponsors and clients have direct a pipeline to TPEO’s talent"
          maxWidth="816px"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "40px", md: "60px" },
            alignItems: "center",
            width: "100%",
            maxWidth: "1100px",
            "& img": {
              height: "auto",
              objectFit: "contain",
              filter: "grayscale(1)",
              transition: "filter 0.25s ease",
              "&:hover": {
                filter: "grayscale(0)",
              },
              "&.partnership-logo--dim": {
                filter: "grayscale(1) brightness(1.8)",
              },
              "&.partnership-logo--dim:hover": {
                filter: "grayscale(0) brightness(1.1)",
              },
              "&.partnership-logo--invert-black": {
                filter: "grayscale(1) invert(1)",
                padding: "12px 16px",
                borderRadius: "12px",
                boxSizing: "border-box",
                backgroundColor: "transparent",
                transition: "filter 0.25s ease, background-color 0.25s ease",
              },
              "&.partnership-logo--invert-black:hover": {
                filter: "grayscale(0) invert(0)",
                backgroundColor: "#FFFFFF",
              },
            },
          }}
        >
          {/* Row 1 */}
          <Box sx={{ display: "flex", gap: { xs: "30px", md: "60px" }, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
            <Box className="partnership-logo--dim" component={motion.img} src={imgPartnerLogo1} whileHover={{ scale: 1.08, transition: { duration: 0.2 } }} sx={{ width: { xs: "120px", md: "272px" }, maxWidth: "100%", cursor: "pointer" }} />
            <Box component={motion.img} src={imgPartnerLogo2} whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} sx={{ width: { xs: "120px", md: "242px" }, maxWidth: "100%", cursor: "pointer" }} />
            <Box component={motion.img} src={imgPartnerLogo3} whileHover={{ y: -5, transition: { duration: 0.2 } }} sx={{ width: { xs: "120px", md: "242px" }, maxWidth: "100%", cursor: "pointer" }} />
          </Box>
          {/* Row 2 */}
          <Box sx={{ display: "flex", gap: { xs: "30px", md: "60px" }, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
            <Box className="partnership-logo--dim" component={motion.img} src={imgPartnerLogo4} whileHover={{ scale: 1.08, transition: { duration: 0.2 } }} sx={{ width: { xs: "140px", md: "301px" }, maxWidth: "100%", cursor: "pointer" }} />
            <Box className="partnership-logo--invert-black" component={motion.img} src={imgPartnerLogo5} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} sx={{ width: { xs: "85%", md: "560px" }, maxWidth: "560px", cursor: "pointer" }} />
          </Box>
          {/* Row 3 */}
          <Box sx={{ display: "flex", gap: { xs: "30px", md: "60px" }, alignItems: "center", flexWrap: { xs: "wrap", md: "nowrap" }, justifyContent: "center", width: "100%" }}>
            <Box className="partnership-logo--dim" component={motion.img} src={imgPartnerLogo6} whileHover={{ y: -5, transition: { duration: 0.2 } }} sx={{ width: { xs: "220px", md: "280px" }, maxWidth: "100%", cursor: "pointer" }} />
            <Box component={motion.img} src={imgPartnerLogo7} whileHover={{ scale: 1.08, transition: { duration: 0.2 } }} sx={{ width: { xs: "220px", md: "280px" }, maxWidth: "100%", cursor: "pointer" }} />
            <Box component={motion.img} src={imgPartnerLogo8} whileHover={{ scale: 1.08, transition: { duration: 0.2 } }} sx={{ width: { xs: "220px", md: "300px" }, maxWidth: "100%", cursor: "pointer" }} />
          </Box>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== OUR RECENT PROJECTS SECTION ========== */}
      <Box
        sx={{
          py: { xs: "60px", md: "100px" },
          px: sectionPx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "40px", md: "60px" },
        }}
      >
        <SectionHeader
          title="Our Recent Projects"
          description="We’ve worked with numerous local Austin startups, non-profits, and companies to aid them with software solutions"
          maxWidth="816px"
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "24px", md: "30px" }, width: "100%", maxWidth: "1304px" }}>
          <ProjectSpotlightCard {...recentProject} />

          <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-end" }, width: "100%" }}>
            <Button
              component="a"
              href="/clients"
              endIcon={<ArrowIcon src={imgViewMoreProjectsArrow} size={isMobile ? "20px" : "24px"} />}
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "18px", md: "28px" },
                color: "#FFFFFF",
                backgroundColor: "#191919",
                border: "1px solid #444",
                borderRadius: "10px",
                px: { xs: "24px", md: "32px" },
                py: { xs: "12px", md: "16px" },
                textTransform: "none",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  backgroundColor: "#222222",
                },
              }}
            >
              View more projects
            </Button>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      <Faq type="Partners" iconStyle="chevron" />

      <Divider sx={{ backgroundColor: "#444" }} />
      
      <Box sx={{ py: { xs: "40px", md: "100px" } }} />
    </Box>
    </AnimatedPage>
  );
}

export default SponsorsPage;

