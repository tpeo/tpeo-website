import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Faq from "./FAQ";
import SectionHeader from "../../components/SectionHeader";

// Asset Imports
import imgPartnerDoodles1 from "../../assets/partnerIcons/hero-doodle-1.png";
import imgPartnerDoodles2 from "../../assets/partnerIcons/hero-doodle-2.png";
import imgPartnerDoodles3 from "../../assets/partnerIcons/hero-star.png";
import imgFaqDoodle from "../../assets/partnerIcons/faq-doodle.png";
import imgReachOutDoodle from "../../assets/partnerIcons/reach-out-doodle.png";
import imgCaseStudyTx from "../../assets/partnerIcons/case-study-tx.png";

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
    icon: iconImpact,
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

function OfferingCard({ icon, title, description }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "21.32px", width: "290.46px" }}>
      <Box sx={{ width: "78px", height: "78px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box component="img" src={icon} alt="" sx={{ width: "54.6px", height: "54.6px" }} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0px", alignItems: "center" }}>
        <Typography
          sx={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: "28px",
            lineHeight: "36px",
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
          fontSize: "24px",
          lineHeight: "36px",
          color: "#D7D7D7",
          textAlign: "center",
          width: "290.46px",
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
        backgroundColor: "#191919",
        border: "1.32px solid #444",
        borderRadius: "15.83px",
        p: "41.32px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "296px",
        height: "500px",
        alignItems: "center",
      }}
    >
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
          fontSize: "28px",
          lineHeight: "36px",
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
          fontSize: "24px",
          lineHeight: "36px",
          color: "#D7D7D7",
          textAlign: "center",
          width: "208.44px",
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
        backgroundColor: "#191919",
        border: "1.47px solid #444",
        borderRadius: "23.47px",
        pt: "60.14px",
        px: "60.14px",
        pb: "40px",
        width: "435px",
        display: "flex",
        flexDirection: "column",
        gap: "29.34px",
        height: "400px",
      }}
    >
      <Box sx={{ width: "58.67px", height: "58.67px", alignSelf: "center" }}>
        <Box component="img" src={icon} alt="" sx={{ width: "100%", height: "100%" }} />
      </Box>
      <Typography
        sx={{
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "36px",
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
          width: "315.37px",
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
        p: "51.27px",
        width: "380px",
        height: "597px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 700,
          fontSize: "48px",
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
            fontSize: "64px",
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
            fontSize: "28px",
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
                fontSize: "20px",
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
          top: "172.3px",
          left: "948.64px",
          width: "403.37px",
          height: "403.7px",
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
          top: "141px",
          left: "862.92px",
          width: "258px",
          height: "258.15px",
          pointerEvents: "none",
          mixBlendMode: "lighten",
          zIndex: 0,
          transform: "rotate(13.48deg)",
        }}
      />
      <Box
        component="img"
        src={imgPartnerDoodles3}
        alt=""
        sx={{
          position: "absolute",
          top: "425.52px",
          left: "1362.99px",
          width: "72px",
          height: "auto",
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
          pb: "182px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: "64px",
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
              fontSize: "24px",
              lineHeight: "36px",
              color: "#D7D7D7",
              maxWidth: "680px",
            }}
          >
            Interested in sponsoring and/or working with us as a client? Here is what a partnership with us will look like!
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== CLIENT PROJECTS SECTION ========== */}
      <Box
        sx={{
          py: "100px",
          px: "79px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "60px",
        }}
      >
        <SectionHeader
          title="Client Projects"
          description="What we offer our clients, whether you're a nonprofit, a startup, or an enterprise!"
          maxWidth="971px"
        />

        <Box
          sx={{
            display: "flex",
            gap: "58px",
            width: "100%",
            maxWidth: "1422.84px",
            justifyContent: "center",
          }}
        >
          {clientOfferingsData.map((item) => (
            <OfferingCard key={item.title} {...item} />
          ))}
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== HOW OUR PROJECTS WORK SECTION ========== */}
      <Box
        sx={{
          py: "100px",
          px: "79px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "60px",
        }}
      >
        <SectionHeader
          title="How Our Projects Work"
          description="All Client projects are paired with a team of experienced students—Product Manager, Designers, Engineers—who have participated in our rigorous training curriculum."
          maxWidth="971px"
        />

        <Box
          sx={{
            display: "flex",
            gap: "31px",
            width: "100%",
            maxWidth: "1277px",
            justifyContent: "center",
          }}
        >
          {processStepsData.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== WHY SPONSOR US SECTION ========== */}
      <Box
        sx={{
          py: "100px",
          px: "79px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "60px",
        }}
      >
        <SectionHeader
          title="Sponsorship: Why TPEO?"
          description="Gain exclusive access to UT Austin’s most selective tech pipeline, representing the strongest talent from multiple top-10 programs."
          maxWidth="816px"
        />

        <Box
          sx={{
            display: "flex",
            gap: "40px",
            width: "100%",
            maxWidth: "1423px",
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
          px: "79px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "60px",
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

        <Box
          sx={{
            display: "flex",
            gap: "45px", // Meticulous design gap
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

      {/* ========== RECENT PARTNERSHIPS SECTION ========== */}
      <Box
        sx={{
          py: "100px",
          px: "79px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "60px",
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
            gap: "60px",
            alignItems: "center",
            width: "100%",
            maxWidth: "1100px",
            "& img": { height: "auto", objectFit: "contain" }
          }}
        >
          {/* Row 1 */}
          <Box sx={{ display: "flex", gap: "60px", alignItems: "center" }}>
            <Box component="img" src={imgPartnerLogo1} sx={{ width: "272px" }} />
            <Box component="img" src={imgPartnerLogo2} sx={{ width: "242px", borderRadius: "20px" }} />
            <Box component="img" src={imgPartnerLogo3} sx={{ width: "242px", borderRadius: "20px" }} />
          </Box>
          {/* Row 2 */}
          <Box sx={{ display: "flex", gap: "60px", alignItems: "center" }}>
            <Box component="img" src={imgPartnerLogo4} sx={{ width: "301px" }} />
            <Box component="img" src={imgPartnerLogo5} sx={{ width: "728px" }} />
          </Box>
          {/* Row 3 */}
          <Box component="img" src={imgPartnerLogo6} sx={{ width: "501px", borderRadius: "20px" }} />
          {/* Row 4 */}
          <Box sx={{ display: "flex", gap: "60px", alignItems: "center" }}>
            <Box component="img" src={imgPartnerLogo7} sx={{ width: "479px", borderRadius: "20px" }} />
            <Box component="img" src={imgPartnerLogo8} sx={{ width: "513px", borderRadius: "20px" }} />
          </Box>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== OUR RECENT PROJECTS SECTION ========== */}
      <Box
        sx={{
          py: "100px",
          px: "79px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "60px",
        }}
      >
        <SectionHeader
          title="Our Recent Projects"
          description="We’ve worked with numerous local Austin startups, non-profits, and companies to aid them with software solutions"
          maxWidth="816px"
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: "30px", width: "100%", maxWidth: "1304px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "stretch",
              width: "100%",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#191919",
                border: "1px solid #444",
                borderRadius: "12px 0 0 12px",
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
                  Texas Cultural Trust #2
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
                  Designed & implemented a centralized statewide Events Calendar to help users discover arts and cultural events across Texas in one place.
                </Typography>
              </Box>
              <Box
                component="a"
                href="/clients"
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
                minHeight: "373px",
              }}
            >
              <Box component="img" src={imgCaseStudyTx} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
            <Button
              component="a"
              href="/clients"
              endIcon={<ArrowForwardIcon sx={{ color: "#FFFFFF" }} />}
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: "28px",
                color: "#FFFFFF",
                backgroundColor: "#191919",
                border: "1px solid #444",
                borderRadius: "10px",
                px: "32px",
                py: "16px",
                textTransform: "none",
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

      {/* ========== FAQ SECTION ========== */}
      <Box sx={{ py: "100px", px: "79px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box
          component="img"
          src={imgFaqDoodle}
          alt=""
          sx={{
            width: "130px",
            height: "auto",
            mb: "20px",
            transform: "rotate(5.44deg)",
            mixBlendMode: "lighten",
          }}
        />
        <Faq type="Partners" />
      </Box>

      <Divider sx={{ backgroundColor: "#444" }} />

      {/* ========== SPONSOR REACH OUT ========== */}
      <Box sx={{ py: "100px", px: "79px", display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
        <Box
          sx={{
            backgroundColor: "#101010",
            border: "1px solid #444",
            borderRadius: "12px",
            px: "108.8px", // Meticulous design padding
            py: "87.3px",
            width: "100%",
            maxWidth: "1295px", // Meticulous design width
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            mb: "-201px", // Design overlap
            zIndex: 1,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "21.6px" }}>
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
                href="mailto:team@txproduct.org"
                sx={{
                  color: "#F3801A",
                  textDecoration: "underline",
                  fontSize: "28px",
                  fontWeight: 400,
                  fontFamily: "inherit",
                }}
              >
                team@txproduct.org
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
              borderRadius: "16px",
              px: "43px",
              py: "21.6px",
              lineHeight: "40.44px",
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
            width: "363.6px",
            height: "363.8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-end",
            mr: "50px",
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
              width: "324px",
              height: "auto",
              transform: "rotate(7.51deg)",
              mixBlendMode: "lighten",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default SponsorsPage;

