import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider } from "@mui/material";
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
  return (
    <Box
      sx={{
        ...threeColCardSx,
        backgroundColor: "#191919",
        border: "1px solid #444",
        borderRadius: "12px",
        maxWidth: { xs: "100%", md: "407px" },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: { xs: "32px", md: "54px" },
        pb: { xs: "36px", md: "60px" },
        gap: { xs: "28px", md: "52px" },
      }}
    >
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
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "flex-start", md: "space-between" },
              alignItems: { xs: "center", md: "flex-start" },
              width: "100%",
              gap: { xs: "40px", md: 0 },
              mt: { xs: "20px", md: 0 },
            }}
          >
            <Box
              sx={{
                flex: { xs: "0 0 auto", md: "0 0 295px" },
                maxWidth: { xs: "280px", md: "295px" },
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "24px", md: "28px" },
                  lineHeight: 1.2,
                  color: "#FFFFFF",
                }}
              >
                Product
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "16px", md: "24px" },
                  lineHeight: { xs: 1.4, md: "36px" },
                  color: "#D7D7D7",
                }}
              >
                Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.
              </Typography>
            </Box>

            <Box
              sx={{
                flex: { xs: "0 0 auto", md: "0 0 295px" },
                maxWidth: { xs: "280px", md: "295px" },
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "24px", md: "28px" },
                  lineHeight: 1.2,
                  color: "#FFFFFF",
                }}
              >
                Design
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "16px", md: "24px" },
                  lineHeight: { xs: 1.4, md: "36px" },
                  color: "#D7D7D7",
                }}
              >
                Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.
              </Typography>
            </Box>

            <Box
              sx={{
                flex: { xs: "0 0 auto", md: "0 0 295px" },
                maxWidth: { xs: "280px", md: "295px" },
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "24px", md: "28px" },
                  lineHeight: 1.2,
                  color: "#FFFFFF",
                }}
              >
                Engineering
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "16px", md: "24px" },
                  lineHeight: { xs: 1.4, md: "36px" },
                  color: "#D7D7D7",
                }}
              >
                Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.
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
  );
}

export default AboutPage;
