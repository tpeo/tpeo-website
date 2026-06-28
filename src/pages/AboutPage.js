import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SectionHeader from "../components/SectionHeader";
import imgLaptop from "../assets/aboutIcons/laptop.svg";
import imgPenNib from "../assets/aboutIcons/pennib.svg";
import imgMegaphone from "../assets/aboutIcons/megaphone.svg";
import imgLightbulb from "../assets/aboutIcons/lightbulb-complete.svg";
import imgFellowshipsSection from "../assets/aboutIcons/fellowships-section.png";
import imgCompanyLogos from "../assets/aboutIcons/company-logos-grid.png";
import imgVector14 from "../assets/aboutIcons/vector-14.svg";
import imgVector15 from "../assets/aboutIcons/vector-15.svg";

// Feature card data
const featureCards = [
  {
    title: "Incubate",
    description:
      "Teach full-stack engineering, UI/UX design, and product management in semester long courses",
  },
  {
    title: "Improve",
    description:
      "Provide hands-on experience through non-profit and startup client partnerships",
  },
  {
    title: "Innovate",
    description:
      "Foster a community of innovators and builders who are going to change the world",
  },
];

// Pill chip for product/design/engineering labels in hero
function DisciplinePill({ imgSrc, label, rotation = 0 }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        backgroundColor: "#191919",
        border: "1px solid #444",
        borderRadius: "12px",
        px: "24px",
        py: "20px",
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <Box
        component="img"
        src={imgSrc}
        alt={label}
        sx={{
          width: "40px",
          height: "40px",
          flexShrink: 0,
        }}
      />
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: "28px",
          lineHeight: "36px",
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
};

// Feature Card component
function FeatureCard({ title, description }) {
  return (
    <Box
      sx={{
        backgroundColor: "#191919",
        border: "1px solid #444",
        borderRadius: "12px",
        width: "407px",
        height: "592px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Image placeholder */}
      <Box
        sx={{
          position: "absolute",
          left: "39px",
          top: "53px",
          width: "323px",
          height: "308px",
          backgroundColor: "#252525",
          borderRadius: "8px",
        }}
      />
      {/* Text content */}
      <Box
        sx={{
          position: "absolute",
          left: "22px",
          top: "399px",
          display: "flex",
          flexDirection: "column",
          gap: "9px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "36px",
            color: "#F3801A",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 300,
            fontSize: "24px",
            lineHeight: "36px",
            color: "#FFFFFF",
            width: "360px",
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
};

function AboutPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#101010",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {/* ========== HERO SECTION ========== */}
      <Box
        sx={{
          backgroundColor: "#191919",
          width: "100%",
          position: "relative",
          height: "836px",
          overflow: "hidden",
        }}
      >
        {/* Left: Hero content — Figma: y:257 */}
        <Box
          sx={{
            position: "absolute",
            left: "79px",
            top: "257px",
            display: "flex",
            flexDirection: "column",
            gap: "27px",
            maxWidth: "694px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: "64px",
              lineHeight: "normal",
              color: "#FFFFFF",
            }}
          >
            We are <span style={{ color: "#F3801A" }}>TPEO</span>
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
            The Texas Product Engineering Organization is UT Austin's premier
            technology club. Our members represent Texas' top talent in computer
            science, business, and UX design.
          </Typography>
          <Box
            sx={{
              backgroundColor: "#F3801A",
              color: "#101010",
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "36px",
              borderRadius: "12px",
              px: "24px",
              py: "20px",
              width: "fit-content",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#FB8C14" },
            }}
          >
            Join TPEO
          </Box>
        </Box>

        {/* Right: Lightbulb doodle — Figma: y:141 */}
        <Box
          sx={{
            position: "absolute",
            left: "732px",
            top: "141px",
            width: "606px",
            height: "606px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={imgLightbulb}
            alt="TPEO Lightbulb Doodles"
            sx={{
              width: "533.842px",
              height: "533.842px",
              objectFit: "contain",
              transform: "rotate(8.39deg)",
              pointerEvents: "none",
              mixBlendMode: "lighten",
            }}
          />
        </Box>

        {/* Product pill — Figma: y:272 */}
        <Box
          sx={{
            position: "absolute",
            left: "1173.83px",
            top: "272px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DisciplinePill
            imgSrc={imgMegaphone}
            label="product"
            rotation={-0.24}
          />
        </Box>

        {/* Design pill — Figma: y:392.29 — Moved to 380px */}
        <Box
          sx={{
            position: "absolute",
            left: "1173.11px",
            top: "380px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DisciplinePill
            imgSrc={imgPenNib}
            label="design"
            rotation={-4.55}
          />
        </Box>

        {/* Engineering pill — Figma: y:486.94 */}
        <Box
          sx={{
            position: "absolute",
            left: "1211.18px",
            top: "486.94px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DisciplinePill
            imgSrc={imgLaptop}
            label="engineering"
            rotation={4.99}
          />
        </Box>

        {/* Design squigglies */}
        <Box
          component="img"
          src={imgVector14}
          alt=""
          sx={{
            position: "absolute",
            left: "1321px",
            top: "182.5px",
            width: "140px",
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
            left: "1269.66px",
            top: "601px",
            width: "95px",
            height: "auto",
            pointerEvents: "none",
            mixBlendMode: "lighten",
          }}
        />
      </Box>

      {/* ========== BUILDING TECH FOR GOOD ========== */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "72px",
          py: "80px",
          px: "5%",
        }}
      >
        <SectionHeader
          title="Building Tech for Good"
          description="We empower tomorrow's leaders by using tech to solve community problems"
        />

        {/* Feature cards */}
        <Box
          sx={{
            display: "flex",
            gap: "63px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {featureCards.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== OUR THREE FELLOWSHIPS ========== */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "80px",
          py: "80px",
          px: "5%",
        }}
      >
        <SectionHeader
          title="Our three fellowships"
          description={
            <>
              At the core of TPEO lies the intersection of
              <br />
              Product, Design, and Engineering.
            </>
          }
        />

        {/* Fellowships graphic — rendered from Figma with connecting arrows */}
        <Box
          component="img"
          src={imgFellowshipsSection}
          alt="Product, Design, and Engineering fellowships"
          sx={{
            width: "100%",
            maxWidth: "1370px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== WHERE WE'VE WORKED ========== */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
          py: "80px",
          px: "5%",
        }}
      >
        <SectionHeader
          title="Where we've worked"
          description="TPEO helps people land jobs at cool places!"
        />

        {/* Company logos — rendered from Figma */}
        <Box
          component="img"
          src={imgCompanyLogos}
          alt="Company logos — Where TPEO members have worked"
          sx={{
            width: "100%",
            maxWidth: "1400px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== PROJECT SPOTLIGHT ========== */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          py: "80px",
          px: "5%",
        }}
      >
        <SectionHeader
          title="Project Spotlight"
          description="A look at our recent work."
        />

        {/* Case study card */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            maxWidth: "1300px",
            width: "100%",
          }}
        >
          {/* Text side */}
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "23px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: "36px",
                  lineHeight: 1.5,
                  color: "#FFFFFF",
                }}
              >
                Texas Cultural Trust
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
                Designed & implemented a centralized statewide Events Calendar
                to help users discover arts and cultural events across Texas in
                one place.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
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

          {/* Image side */}
          <Box
            sx={{
              width: "468px",
              height: "373px",
              borderRadius: "0 12px 12px 0",
              backgroundColor: "#252525",
              flexShrink: 0,
              ml: "-15px",
            }}
          />
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== JOIN CTA ========== */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: "80px",
          px: "5%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#191919",
            border: "1px solid #444",
            borderRadius: "24px",
            p: "65px",
            maxWidth: "1128px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 500,
              fontSize: "32px",
              color: "#F3801A",
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              mb: 2,
            }}
          >
            Apply now
          </Typography>
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "60px",
              color: "#FFFFFF",
              maxWidth: "512px",
              mb: 2,
            }}
          >
            Interested in joining TPEO?
          </Typography>
          <Box sx={{ maxWidth: "540px", mb: 5 }}>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: "28px",
                lineHeight: "31.9px",
                color: "#D7D7D7",
              }}
            >
              We're really cool -- join us!
            </Typography>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: "28px",
                lineHeight: "31.9px",
                color: "#D7D7D7",
              }}
            >
              Applications open every Fall semester.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: "28px",
                lineHeight: "31.9px",
                color: "#D7D7D7",
              }}
            >
              Get in early, spots are limited.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "40px",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              endIcon={<OpenInNewIcon />}
              sx={{
                backgroundColor: "#F3801A",
                color: "#101010",
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 500,
                fontSize: "28px",
                lineHeight: "24px",
                borderRadius: "12px",
                px: "32px",
                py: "12px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#FB8C14" },
              }}
            >
              Link to Application
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#444",
                color: "#FFFFFF",
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 500,
                fontSize: "28px",
                lineHeight: "24px",
                borderRadius: "12px",
                px: "33px",
                py: "13px",
                textTransform: "none",
                "&:hover": {
                  borderColor: "#F3801A",
                  color: "#F3801A",
                },
              }}
            >
              Join our Slack
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutPage;
