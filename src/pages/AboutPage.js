import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider } from "@mui/material";
import SectionHeader from "../components/SectionHeader";
import JoinCTA from "../components/JoinCTA";
import imgLaptop from "../assets/aboutIcons/laptop.svg";
import imgPenNib from "../assets/aboutIcons/pennib.svg";
import imgMegaphone from "../assets/aboutIcons/megaphone.svg";
import imgLightbulb from "../assets/aboutIcons/lightbulb-complete.svg";
import imgFellowshipsSection from "../assets/aboutIcons/fellowships-section.png";
import imgCompanyLogos from "../assets/aboutIcons/company-logos-grid.png";
import imgVector14 from "../assets/aboutIcons/vector-14.svg";
import imgVector15 from "../assets/aboutIcons/vector-15.svg";
import imgDoodle11 from "../assets/aboutIcons/fellow-doodle-11.svg";
import imgIncubate from "../assets/projectImages/incubate_new.png";
import imgImprove from "../assets/projectImages/improve_new.png";
import imgInnovate from "../assets/projectImages/innovate_new.png";

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
function FeatureCard({ title, description, image }) {
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "53px",
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          width: "323px",
          height: "308px",
          borderRadius: "8px",
          overflow: "hidden",
          mb: "38px",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      {/* Text content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "9px",
          alignItems: "center",
          textAlign: "center",
          px: "22px",
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
  image: PropTypes.string.isRequired,
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
          background: "linear-gradient(180deg, #191919 76.95%, #101010 100%)",
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
              position: "relative",
              display: "inline-block",
            }}
          >
            We are <span style={{ color: "#F3801A" }}>TPEO</span>
            <Box
              component="img"
              src={imgDoodle11}
              alt=""
              sx={{
                position: "absolute",
                top: "-80px",
                left: "330px",
                width: "208px",
                height: "208px",
                pointerEvents: "none",
                mixBlendMode: "lighten",
              }}
            />
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
            left: "772px",
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
            left: "1203.83px",
            top: "276px",
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
            left: "1203.11px",
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
            left: "1251.18px",
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
            left: "1361px",
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
            left: "1309.66px",
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
              image={card.image}
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
          gap: "40px", // Reduced gap to match Figma
          py: "80px",
          px: "5%",
        }}
      >
        <SectionHeader
          title="Our Three Fellowships"
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
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px", // Tightened gap between graphic and text
            width: "100%",
            maxWidth: "1370px", // Restored to previous width
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "auto",
              aspectRatio: "2741 / 420", // Tighter crop to remove more from the bottom
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
                objectPosition: "top", // Uncut the top
              }}
            />
          </Box>

          {/* Fellowship Blurbs */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "10px",
            }}
          >
            <Box sx={{ flex: 1, textAlign: "center", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
              <Typography
                sx={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "32px",
                  color: "#FFFFFF",
                }}
              >
                Product
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#D7D7D7",
                  maxWidth: "240px", // Reduced width for tighter wrap
                }}
              >
                Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.
              </Typography>
            </Box>

            <Box sx={{ flex: 1, textAlign: "center", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
              <Typography
                sx={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "32px",
                  color: "#FFFFFF",
                }}
              >
                Design
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#D7D7D7",
                  maxWidth: "240px",
                }}
              >
                Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.
              </Typography>
            </Box>

            <Box sx={{ flex: 1, textAlign: "center", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
              <Typography
                sx={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "32px",
                  color: "#FFFFFF",
                }}
              >
                Engineering
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#D7D7D7",
                  maxWidth: "240px",
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

      <JoinCTA />
    </Box>
  );
}

export default AboutPage;
