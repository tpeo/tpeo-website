import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedPage from "../../components/AnimatedPage";
import SectionHeader from "../../components/SectionHeader";
import JoinCTA from "../../components/JoinCTA";
import {
  pageRootSx,
  sectionPx,
  sectionPy,
  sectionGap,
  heroTitleFont,
  heroPt,
  cardRowSx,
  threeColCardSx,
} from "../../styles/pageLayout";
import imgLaptop from "../../assets/aboutIcons/laptop.svg";
import imgPenNib from "../../assets/aboutIcons/pennib.svg";
import imgMegaphone from "../../assets/aboutIcons/megaphone.svg";
import imgLightbulb from "../../assets/aboutIcons/lightbulb-complete.svg";
import imgFellowshipsSection from "../../assets/aboutIcons/fellowships-section.png";
import imgCompanyLogos from "../../assets/aboutIcons/company-logos-grid.png";
import imgVector14 from "../../assets/aboutIcons/vector-14.svg";
import imgVector15 from "../../assets/aboutIcons/vector-15.svg";
import imgDoodle11 from "../../assets/aboutIcons/fellow-doodle-11.svg";
import imgIncubate from "../../assets/projectImages/incubate_cropped.png";
import imgImprove from "../../assets/projectImages/improve_cropped.png";
import imgInnovate from "../../assets/projectImages/innovate_cropped.png";

const aboutSectionSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: sectionGap,
  py: sectionPy,
  px: sectionPx,
  width: "100%",
  boxSizing: "border-box",
};

const fellowshipBlurbTitleSx = {
  fontFamily: "DM Sans, sans-serif",
  fontWeight: 600,
  fontSize: { xs: "20px", md: "24px" },
  lineHeight: 1.2,
  color: "#FFFFFF",
};

const fellowshipBlurbBodySx = {
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontWeight: 400,
  fontSize: { xs: "14px", md: "18px" },
  lineHeight: { xs: 1.5, md: "28px" },
  color: "#D7D7D7",
};

const fellowshipBlurbSx = {
  width: "100%",
  maxWidth: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: { xs: "12px", md: "16px" },
  alignItems: "center",
  justifySelf: "center",
  cursor: "default",
  p: { xs: "20px", md: "28px 24px" },
  borderRadius: "16px",
  border: "1px solid transparent",
  backgroundColor: "transparent",
  boxSizing: "border-box",
  transition: "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease",
  "&:hover": {
    background:
      "linear-gradient(160deg, rgba(25, 25, 25, 0.92) 0%, rgba(243, 128, 26, 0.1) 50%, rgba(25, 25, 25, 0.88) 100%)",
    borderColor: "rgba(243, 128, 26, 0.3)",
    boxShadow:
      "0 16px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 0 28px rgba(243, 128, 26, 0.1)",
    transform: "translateY(-4px)",
    backdropFilter: "blur(6px)",
  },
};

const fellowshipBlurbRowSx = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
  width: "100%",
  gap: { xs: "48px", md: "16px" },
  mt: { xs: "20px", md: 0 },
};

// Feature card data
const featureCards = [
  {
    title: "Incubate",
    description:
      "Teach full-stack engineering, UX/UI design, and product management in semester long courses",
    image: imgIncubate,
  },
  {
    title: "Improve",
    description:
      "Provide hands-on experience through non-profit and startup client partnerships",
    image: imgImprove,
  },
  {
    title: "Innovate",
    description:
      "Foster a community of innovators and builders who are going to change the world",
    image: imgInnovate,
  },
];

// Pill chip for product/design/engineering labels in hero
function DisciplinePill({ imgSrc, label, rotation = 0, compact = false }) {
  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.05, borderColor: "#F3801A" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: compact ? "8px" : "12px",
        backgroundColor: "#191919",
        border: "1px solid #444",
        borderRadius: compact ? "8px" : "12px",
        px: compact ? { xs: "10px", sm: "14px" } : "24px",
        py: compact ? { xs: "8px", sm: "10px" } : "20px",
        transform: `rotate(${rotation}deg)`,
        width: compact ? "100%" : "auto",
      }}
    >
      <Box
        component="img"
        src={imgSrc}
        alt={label}
        sx={{
          width: compact ? { xs: "20px", sm: "24px" } : "40px",
          height: compact ? { xs: "20px", sm: "24px" } : "40px",
          flexShrink: 0,
        }}
      />
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: compact ? { xs: "13px", sm: "16px" } : "28px",
          lineHeight: compact ? "18px" : "36px",
          color: "#FFFFFF",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

DisciplinePill.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rotation: PropTypes.number,
  compact: PropTypes.bool,
};

// Feature Card component
function FeatureCard({ title, description, image }) {
  const borderAnimationSx = {
    "@keyframes featureBorderDraw": {
      from: { strokeDashoffset: 1 },
      to: { strokeDashoffset: 0 },
    },
    "& .feature-border-path-a, & .feature-border-path-b": {
      fill: "none",
      stroke: "#F3801A",
      strokeDasharray: 1,
      strokeDashoffset: 1,
      opacity: 0,
    },
    "&:hover .feature-border-path-a, &:hover .feature-border-path-b": {
      opacity: 1,
      animation: "featureBorderDraw 0.8s ease forwards",
    },
    "&:not(:hover) .feature-border-path-a, &:not(:hover) .feature-border-path-b": {
      animation: "none",
      opacity: 0,
      strokeDashoffset: 1,
    },
  };

  return (
    <Box
      component={motion.div}
      className="feature-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      sx={{
        ...threeColCardSx,
        ...borderAnimationSx,
        backgroundColor: "#191919",
        border: "1px solid #444",
        borderRadius: "12px",
        maxWidth: { xs: "100%", md: "407px" },
        position: "relative",
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: { xs: "32px", md: "54px" },
        pb: { xs: "36px", md: "60px" },
        gap: { xs: "28px", md: "52px" },
        cursor: "default",
      }}
    >
      <Box
        component="svg"
        aria-hidden
        className="feature-border-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 3,
          overflow: "visible",
        }}
      >
        {/* Top-left → top → top-right → right */}
        <Box
          component="path"
          className="feature-border-path-a"
          pathLength="1"
          vectorEffect="nonScalingStroke"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 0.5 3.45 A 2.95 2.95 0 0 1 3.45 0.5 H 96.55 A 2.95 2.95 0 0 1 99.5 3.45 V 96.55 A 2.95 2.95 0 0 1 96.55 99.5"
        />
        {/* Top-left → left → bottom-left → bottom */}
        <Box
          component="path"
          className="feature-border-path-b"
          pathLength="1"
          vectorEffect="nonScalingStroke"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 0.5 3.45 V 96.55 A 2.95 2.95 0 0 0 3.45 99.5 H 96.55"
        />
      </Box>

      {/* Image Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "323px",
          display: "flex",
          justifyContent: "center",
          lineHeight: 0,
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "60%",
            height: "auto",
            display: "block",
          }}
        />
      </Box>
      {/* Text content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          textAlign: "center",
          px: { xs: "16px", md: "22px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "24px", md: "32px" },
            lineHeight: "36px",
            color: "#F3801A",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "18px", md: "24px" },
            lineHeight: { xs: "28px", md: "36px" },
            color: "#FFFFFF",
            width: "100%",
            maxWidth: "360px",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

function AboutPage() {
  return (
    <AnimatedPage>
      <Box sx={pageRootSx}>
      {/* ========== HERO SECTION ========== */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #191919 76.95%, #101010 100%)",
          width: "100%",
          position: "relative",
          overflowX: "hidden",
          overflowY: "visible",
          minHeight: { xs: "auto", lg: "836px" },
          pt: { xs: heroPt.xs, sm: heroPt.sm, md: heroPt.md, lg: 0 },
          pb: { xs: "60px", lg: 0 },
          px: { xs: "24px", sm: "32px", md: "48px", lg: 0 },
          boxSizing: "border-box",
        }}
      >
        {/* Mobile / tablet: stacked layout */}
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            flexDirection: "column",
            gap: { xs: "32px", sm: "48px" },
            position: "relative",
            zIndex: 1,
            width: "100%",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "20px", sm: "24px" }, width: "100%", maxWidth: "540px" }}>
            <Box
              sx={{
                position: "relative",
                width: "fit-content",
                pr: { xs: "40px", sm: "60px" },
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: heroTitleFont,
                  lineHeight: 1.1,
                  color: "#FFFFFF",
                  display: "block",
                }}
              >
                We are <span style={{ color: "#F3801A" }}>TPEO</span>
              </Typography>
              <Box
                component="img"
                src={imgDoodle11}
                alt=""
                sx={{
                  position: "absolute",
                  left: "100%",
                  top: { xs: "-15px", sm: "-15px" },
                  ml: { xs: "-51px", sm: "-56px" },
                  width: { xs: "64px", sm: "100px" },
                  height: "auto",
                  pointerEvents: "none",
                  mixBlendMode: "lighten",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
                lineHeight: { xs: "28px", md: "36px" },
                color: "#D7D7D7",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              The Texas Product Engineering Organization is UT Austin's premier
              technology club. Our members represent Texas' top talent in computer
              science, business, and UX design.
            </Typography>
            <Box
              component="a"
              href="/join"
              sx={{
                backgroundColor: "#F3801A",
                color: "#101010",
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "16px", md: "20px" },
                lineHeight: "24px",
                borderRadius: "10px",
                px: { xs: "24px", md: "32px" },
                py: { xs: "12px", md: "14px" },
                width: "fit-content",
                textAlign: "center",
                cursor: "pointer",
                textDecoration: "none",
                display: "block",
                "&:hover": { backgroundColor: "#FB8C14" },
              }}
            >
              Join TPEO
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: { xs: "8px", sm: "16px" },
              width: "100%",
            }}
          >
            <Box
              sx={{
                flex: "0 1 auto",
                minWidth: 0,
                maxWidth: { xs: "160px", sm: "200px" },
              }}
            >
              <Box
                component="img"
                src={imgLightbulb}
                alt="TPEO Lightbulb Doodles"
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  transform: "rotate(8.39deg)",
                  pointerEvents: "none",
                  mixBlendMode: "lighten",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "10px", sm: "12px" },
                flex: "0 0 auto",
                minWidth: 0,
                maxWidth: { xs: "130px", sm: "160px" },
              }}
            >
              <DisciplinePill compact imgSrc={imgMegaphone} label="product" rotation={-0.24} />
              <DisciplinePill compact imgSrc={imgPenNib} label="design" rotation={-4.55} />
              <DisciplinePill compact imgSrc={imgLaptop} label="engineering" rotation={4.99} />
            </Box>
          </Box>
        </Box>

        {/* Desktop: Figma-accurate layout scaled to 1512×836 frame */}
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            position: "relative",
            width: "100%",
            maxWidth: "1512px",
            height: "836px",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "5.23%",
              top: "140px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              maxWidth: "45.9%",
              zIndex: 1,
            }}
          >
            <Box sx={{ position: "relative", width: "fit-content" }}>
              <Typography
                component="span"
                sx={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "64px",
                  lineHeight: "normal",
                  color: "#FFFFFF",
                  whiteSpace: "nowrap",
                }}
              >
                We are <span style={{ color: "#F3801A" }}>TPEO</span>
              </Typography>
              <Box
                component="img"
                src={imgDoodle11}
                alt=""
                sx={{
                  position: "absolute",
                  left: "100%",
                  top: "-80px",
                  ml: "-70px",
                  width: "208px",
                  height: "auto",
                  pointerEvents: "none",
                  mixBlendMode: "lighten",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "36px",
                color: "#D7D7D7",
              }}
            >
              The Texas Product Engineering Organization is UT Austin's premier
              technology club. Our members represent Texas' top talent in computer
              science, business, and UX design.
            </Typography>
            <Box
              component="a"
              href="/join"
              sx={{
                backgroundColor: "#F3801A",
                color: "#101010",
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "24px",
                borderRadius: "10px",
                px: "24px",
                py: "14px",
                width: "fit-content",
                cursor: "pointer",
                textDecoration: "none",
                display: "block",
                "&:hover": { backgroundColor: "#FB8C14" },
              }}
            >
              Join TPEO
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: "51.06%",
              top: "24px",
              width: "40.08%",
              aspectRatio: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <Box
              component="img"
              src={imgLightbulb}
              alt="TPEO Lightbulb Doodles"
              sx={{
                width: "88.1%",
                height: "auto",
                objectFit: "contain",
                transform: "rotate(8.39deg)",
                mixBlendMode: "lighten",
              }}
            />
          </Box>

          <Box sx={{ position: "absolute", left: "79.62%", top: "19.02%" }}>
            <DisciplinePill imgSrc={imgMegaphone} label="product" rotation={-0.24} />
          </Box>
          <Box sx={{ position: "absolute", left: "79.57%", top: "31.46%" }}>
            <DisciplinePill imgSrc={imgPenNib} label="design" rotation={-4.55} />
          </Box>
          <Box sx={{ position: "absolute", left: "82.75%", top: "44.26%" }}>
            <DisciplinePill imgSrc={imgLaptop} label="engineering" rotation={4.99} />
          </Box>

          <Box
            component="img"
            src={imgVector14}
            alt=""
            sx={{
              position: "absolute",
              left: "89.88%",
              top: "7.84%",
              width: "9.26%",
              height: "auto",
              pointerEvents: "none",
              mixBlendMode: "lighten",
            }}
          />
          <Box
            component="img"
            src={imgVector15}
            alt=""
            sx={{
              position: "absolute",
              left: "86.62%",
              top: "57.89%",
              width: "6.28%",
              height: "auto",
              pointerEvents: "none",
              mixBlendMode: "lighten",
            }}
          />
        </Box>
      </Box>

      {/* ========== BUILDING TECH FOR GOOD ========== */}
      <Box sx={aboutSectionSx}>
        <SectionHeader
          title="Building Tech for Good"
          description="We empower tomorrow's leaders by using tech to solve community problems"
        />

        <Box sx={{ ...cardRowSx, flexWrap: { xs: "wrap", md: "nowrap" }, gap: { xs: "20px", md: "32px", lg: "63px" }, maxWidth: "1370px", width: "100%" }}>
          {featureCards.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== OUR THREE FELLOWSHIPS ========== */}
      <Box sx={aboutSectionSx}>
        <SectionHeader
          title="Our Three Fellowships"
          description={
            <>
              At the core of TPEO lies the intersection of{" "}
              <Box component="span" sx={{ display: { xs: "inline", md: "none" } }}>
                Product, Design, and Engineering.
              </Box>
              <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                <br />
                Product, Design, and Engineering.
              </Box>
            </>
          }
        />

        {/* Fellowships graphic — rendered from Figma with connecting arrows */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: "24px", md: "16px" },
            width: "100%",
            maxWidth: "1370px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "auto",
              aspectRatio: "2741 / 420",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={imgFellowshipsSection}
              alt="Product, Design, and Engineering fellowships"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </Box>

          {/* Fellowship blurbs — aligned under each circle in the graphic */}
          <Box sx={fellowshipBlurbRowSx}>
            <Box sx={fellowshipBlurbSx}>
              <Typography sx={fellowshipBlurbTitleSx}>Product</Typography>
              <Typography sx={fellowshipBlurbBodySx}>
                Product fellows will step into the shoes of a Product Manager, learning how to oversee the entire lifecycle of a product from ideation to launch, while collaborating with cross-functional teams to drive product vision and strategy.
              </Typography>
            </Box>

            <Box sx={fellowshipBlurbSx}>
              <Typography sx={fellowshipBlurbTitleSx}>Design</Typography>
              <Typography sx={fellowshipBlurbBodySx}>
                Design fellows immerse themselves in the end-to-end design process, honing design thinking skills through collaboration and decision-making. We cultivate a real-world growth environment where fellows can push the boundaries of their craft through hands-on experience and teamwork.
              </Typography>
            </Box>

            <Box sx={fellowshipBlurbSx}>
              <Typography sx={fellowshipBlurbTitleSx}>Engineering</Typography>
              <Typography sx={fellowshipBlurbBodySx}>
                Engineering fellows dive deep into the full-stack development process, mastering the skills needed to build scalable, user-centric applications. From frontend interfaces to backend systems, they collaborate with designers and product managers to bring innovative ideas to life.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== WHERE WE'VE WORKED ========== */}
      <Box sx={{ ...aboutSectionSx, gap: { xs: "40px", md: "60px" } }}>
        <SectionHeader
          title="Where we've worked"
          description="Our members lead the world's top companies"
        />

        <Box
          component="img"
          src={imgCompanyLogos}
          alt="Company logos — Where TPEO members have worked"
          sx={{
            width: "100%",
            maxWidth: "1400px",
            height: "auto",
            objectFit: "contain",
            px: { xs: 0, sm: "8px" },
          }}
        />
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      <JoinCTA />
    </Box>
    </AnimatedPage>
  );
}

export default AboutPage;
