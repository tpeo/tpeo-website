import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider, Button } from "@mui/material";
import Faq from "./FAQ";
import imgPartnerDoodles1 from "../../assets/aboutIcons/partner-doodles.svg";
import imgPartnerDoodles2 from "../../assets/aboutIcons/partner-doodles-2.svg";
import imgPartnerDoodles3 from "../../assets/aboutIcons/partner-doodles-3.svg";
import imgCurrentSponsors from "../../assets/aboutIcons/current-sponsors.png";
import iconTalent from "../../assets/aboutIcons/icon-talent.svg";
import iconImpact from "../../assets/aboutIcons/icon-impact.svg";
import iconExposure from "../../assets/aboutIcons/icon-exposure.svg";
import iconCheck from "../../assets/aboutIcons/icon-check.svg";

const whySponsorData = [
  {
    icon: iconTalent,
    title: "Top Student Talent",
    description: "Gain access to driven, skills-first students with in-demand technical and product skills.",
  },
  {
    icon: iconImpact,
    title: "Meaningful Impact",
    description: "Empower our fellows to build real solutions for real clients, shaping the next generation.",
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
    color: "#8f5f33",
    benefits: ["Logo on website & shirt", "Social media shoutout"],
  },
  {
    name: "Silver",
    price: "$1,500",
    color: "#b7b8c7",
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

function WhySponsorCard({ icon, title, description }) {
  return (
    <Box
      sx={{
        backgroundColor: "#191919",
        border: "1.47px solid #444",
        borderRadius: "23.47px",
        p: "60.14px",
        width: "435.16px",
        display: "flex",
        flexDirection: "column",
        gap: "29.34px",
      }}
    >
      <Box sx={{ width: "58.67px", height: "58.67px" }}>
        <Box component="img" src={icon} alt="" sx={{ width: "100%", height: "100%" }} />
      </Box>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 500,
          fontSize: "35.2px",
          lineHeight: "52.8px",
          color: "#FFFFFF",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: "24.94px",
          lineHeight: "39.9px",
          color: "#D7D7D7",
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
      sx={{
        backgroundColor: "#191919",
        border: "1.27px solid #444",
        borderRadius: "20.36px",
        p: "52.17px",
        width: "384.26px",
        height: "596.75px",
        display: "flex",
        flexDirection: "column",
        gap: "30.54px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 700,
          fontSize: "35.63px",
          lineHeight: "53.44px",
          ...(isGradient
            ? {
                backgroundImage: "linear-gradient(90.13deg, #FB8C14 2.55%, #F6A606 102.47%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }
            : { color }),
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 700,
          fontSize: "61.07px",
          lineHeight: "91.61px",
          color: "#FFFFFF",
        }}
      >
        {price}
        <Typography
          component="span"
          sx={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "22.9px",
            lineHeight: "34.35px",
            color: "#D7D7D7",
            ml: 1,
          }}
        >
          / year
        </Typography>
      </Typography>
      <Divider sx={{ backgroundColor: "#444" }} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "17.8px" }}>
        {benefits.map((benefit) => (
          <Box key={benefit} sx={{ display: "flex", gap: "12.72px", alignItems: "flex-start" }}>
            <Box sx={{ pt: "3.8px", flexShrink: 0 }}>
              <Box component="img" src={iconCheck} alt="" sx={{ width: "20.36px", height: "20.36px" }} />
            </Box>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: "20.36px",
                lineHeight: "30.54px",
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
      <Box
        component="img"
        src={imgPartnerDoodles1}
        alt=""
        sx={{
          position: "absolute",
          top: "141px",
          right: "132px",
          width: "435px",
          height: "435px",
          pointerEvents: "none",
          mixBlendMode: "lighten",
          zIndex: 0,
        }}
      />
      <Box
        component="img"
        src={imgPartnerDoodles2}
        alt=""
        sx={{
          position: "absolute",
          top: "88px",
          right: "367px",
          width: "278px",
          height: "278px",
          pointerEvents: "none",
          mixBlendMode: "lighten",
          zIndex: 0,
        }}
      />
      <Box
        component="img"
        src={imgPartnerDoodles3}
        alt=""
        sx={{
          position: "absolute",
          top: "409px",
          right: "63px",
          width: "69px",
          height: "89px",
          pointerEvents: "none",
          mixBlendMode: "lighten",
          zIndex: 0,
        }}
      />

      {/* ========== HERO SECTION ========== */}
      <Box
        sx={{
          pt: "257px",
          px: "79px",
          pb: "133.68px",
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
            partner with <span style={{ color: "#F3801A" }}>TPEO</span>.
          </Typography>
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 400,
              fontSize: "28px",
              lineHeight: "39.06px",
              color: "#D7D7D7",
              maxWidth: "770px",
            }}
          >
            Interested in supporting us? Here is what we offer to sponsors!
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== WHY SPONSOR US SECTION ========== */}
      <Box
        sx={{
          py: "100px",
          px: "48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "60px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "1.5",
            color: "#F3801A",
            textAlign: "center",
          }}
        >
          Why sponsor us?
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "58.67px",
            width: "100%",
            maxWidth: "1422.84px",
            justifyContent: "center",
          }}
        >
          {whySponsorData.map((item) => (
            <WhySponsorCard key={item.title} {...item} />
          ))}
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== SPONSORSHIP TIERS SECTION ========== */}
      <Box
        sx={{
          py: "100px",
          px: "142px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "82px",
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
            Sponsorship tiers
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
            Choose the level that fits your goals and budget.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "40.7px",
            width: "100%",
            maxWidth: "1234.21px",
            justifyContent: "center",
          }}
        >
          {tierData.map((tier) => (
            <TierCard key={tier.name} {...tier} />
          ))}
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== OUR SPONSORS SECTION ========== */}
      <Box
        sx={{
          py: "100px",
          px: "79px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "1.5",
            color: "#F3801A",
            width: "100%",
            maxWidth: "816px",
            textAlign: "center",
          }}
        >
          Our Sponsors
        </Typography>
        <Box
          sx={{
            px: "24px",
            py: "28px",
            width: "100%",
            maxWidth: "200px",
          }}
        >
          <Box component="img" src={imgCurrentSponsors} alt="Current Sponsors" sx={{ width: "100%", height: "auto" }} />
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== FAQ SECTION ========== */}
      <Box sx={{ py: "100px" }}>
        <Faq type="Sponsor" />
      </Box>

      {/* ========== SPONSOR REACH OUT ========== */}
      <Box sx={{ py: "100px", px: "106px", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            backgroundColor: "#101010",
            border: "1px solid #444",
            borderRadius: "12px",
            px: "108.8px",
            py: "87.3px",
            width: "100%",
            maxWidth: "1295px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Section Doodle */}
          <Box
            component="img"
            src={require("../../assets/aboutIcons/sponsor-reach-out-doodle.png")}
            alt=""
            sx={{
              position: "absolute",
              right: "40px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "150px",
              height: "auto",
              pointerEvents: "none",
              mixBlendMode: "lighten",
              opacity: 0.8,
            }}
          />

          <Box sx={{ display: "flex", flexDirection: "column", gap: "21.6px", position: "relative", zIndex: 1 }}>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: "80.88px",
                color: "#FFFFFF",
                maxWidth: "841px",
              }}
            >
              Interested in becoming a sponsor?
            </Typography>
            <Box
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: "28px",
                lineHeight: "40.44px",
                color: "#D7D7D7",
                display: "flex",
                gap: "8px",
              }}
            >
              Reach out to us at
              <Typography
                component="a"
                href="mailto:tpeoteam@gmail.com"
                sx={{
                  color: "#F3801A",
                  textDecoration: "underline",
                  fontSize: "28px",
                  fontWeight: 400,
                  fontFamily: "inherit",
                }}
              >
                tpeoteam@gmail.com
              </Typography>
            </Box>
          </Box>
          <Button
            sx={{
              backgroundColor: "#F3801A",
              color: "#101010",
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "28px",
              textTransform: "none",
              borderRadius: "16.18px",
              px: "43.1px",
              py: "21.6px",
              minWidth: "unset",
              lineHeight: "1",
              position: "relative",
              zIndex: 1,
              "&:hover": {
                backgroundColor: "#FB8C14",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SponsorsPage;

