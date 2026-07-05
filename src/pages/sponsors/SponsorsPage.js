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

function OfferingCard({ icon, title, description }) {
  return (
    <Box
      component={motion.div}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      sx={{ ...threeColCardSx, display: "flex", flexDirection: "column", alignItems: "center", gap: "21.32px", maxWidth: { xs: "100%", sm: "320px", md: "none" } }}
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
};

function StepCard({ number, title, description }) {
  return (
    <Box
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
};

function WhySponsorCard({ icon, title, description }) {
  return (
    <Box
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
};

function TierCard({ name, price, benefits, color, isGradient }) {
  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.02, borderColor: "#F3801A" }}
      transition={{ duration: 0.2 }}
      sx={{
        ...threeColCardSx,
        backgroundColor: "#191919",
        border: "1.27px solid #444",
        borderRadius: "20.36px",
        p: { xs: "32px", md: "51.27px" },
        maxWidth: { xs: "100%", sm: "380px", md: "none" },
        height: { xs: "auto", md: "597px" },
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
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
          <Box sx={{ display: "flex", gap: { xs: "16px", md: "24px" }, flexWrap: "wrap" }}>
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
          {clientOfferingsData.map((item) => (
            <OfferingCard key={item.title} {...item} />
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
          {processStepsData.map((step) => (
            <StepCard key={step.number} {...step} />
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
          {whySponsorData.map((item) => (
            <WhySponsorCard key={item.title} {...item} />
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
          {tierData.map((tier) => (
            <TierCard key={tier.name} {...tier} />
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
            "& img": { height: "auto", objectFit: "contain" }
          }}
        >
          {/* Row 1 */}
          <Box sx={{ display: "flex", gap: { xs: "30px", md: "60px" }, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
            <Box component="img" src={imgPartnerLogo1} sx={{ width: { xs: "120px", md: "272px" }, maxWidth: "100%" }} />
            <Box component="img" src={imgPartnerLogo2} sx={{ width: { xs: "120px", md: "242px" }, maxWidth: "100%", borderRadius: "20px" }} />
            <Box component="img" src={imgPartnerLogo3} sx={{ width: { xs: "120px", md: "242px" }, maxWidth: "100%", borderRadius: "20px" }} />
          </Box>
          {/* Row 2 */}
          <Box sx={{ display: "flex", gap: { xs: "30px", md: "60px" }, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
            <Box component="img" src={imgPartnerLogo4} sx={{ width: { xs: "140px", md: "301px" }, maxWidth: "100%" }} />
            <Box component="img" src={imgPartnerLogo5} sx={{ width: { xs: "100%", md: "728px" }, maxWidth: "728px" }} />
          </Box>
          {/* Row 3 */}
          <Box component="img" src={imgPartnerLogo6} sx={{ width: { xs: "100%", md: "501px" }, maxWidth: "501px", borderRadius: "20px" }} />
          {/* Row 4 */}
          <Box sx={{ display: "flex", gap: { xs: "30px", md: "60px" }, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
            <Box component="img" src={imgPartnerLogo7} sx={{ width: { xs: "100%", md: "479px" }, maxWidth: "479px", borderRadius: "20px" }} />
            <Box component="img" src={imgPartnerLogo8} sx={{ width: { xs: "100%", md: "513px" }, maxWidth: "513px", borderRadius: "20px" }} />
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

