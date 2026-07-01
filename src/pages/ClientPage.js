import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider } from "@mui/material";
import Faq from "./sponsorsPage/FAQ";
import imgDoodles from "../assets/aboutIcons/client-doodles.svg";
import iconActiveComm from "../assets/aboutIcons/icon-active-comm.svg";
import iconProBono from "../assets/aboutIcons/icon-pro-bono.svg";
import iconBuiltClient from "../assets/aboutIcons/icon-built-client.svg";
import iconBuiltFuture from "../assets/aboutIcons/icon-built-future.svg";

const initialValueProps = [
  {
    icon: iconActiveComm,
    title: "Active \nCommunication",
    description: "Receive real-time updates and stay in the loop at every stage of your project.",
  },
  {
    icon: iconProBono,
    title: "Pro-Bono Work",
    description: "All work is completed entirely pro-bono. No charges or fees, ever.",
  },
  {
    icon: iconBuiltClient,
    title: "Built for the \nClient",
    description: "Designs are developed with your mission in mind, integrating seamlessly with your existing systems.",
  },
  {
    icon: iconBuiltFuture,
    title: "Built for the \nFuture",
    description: "We build with scalability in mind so your product lasts.",
  },
];

const clientData = [
  {
    title: "Texas Cultural Trust",
    subtitle: "Accessibility Platform",
    description:
      "Designed a centralized statewide events calendar, improving event discoverability and creating a more accessible way for Texans to explore cultural experiences across the state.",
    tags: ["Web", "Mobile"],
  },
  {
    title: "SAFE",
    subtitle: "Web Redesign",
    description:
      "Redesigned SAFE’s donation experience to increase contributions and better communicate its mission of supporting survivors of sexual assault and abuse",
    tags: ["Web", "Branding"],
  },
  {
    title: "BIGAustin",
    subtitle: "Web Redesign",
    description:
      "Redesigned their web presence from the ground up — boosting engagement and clearly communicating their small-business mission.",
    tags: ["Web", "Branding"],
  },
  {
    title: "Austin Public Library",
    subtitle: "Accessibility Platform",
    description:
      "Built accessible tools to help patrons discover resources and navigate library services with ease.",
    tags: ["Web", "Branding"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Meet the Team",
    description: "Initial discussions with the Product Manager, Designer, and Developer who will work with you throughout the entire project.",
  },
  {
    number: "02",
    title: "Begin Project",
    description: "From here we accept the project proposal and our PM, Designers, and Engineers begin working to scope a solution.",
  },
  {
    number: "03",
    title: "Start Building",
    description: "Once a plan is laid out, we move into active development with regular syncs and feedback sessions along the way.",
  },
  {
    number: "04",
    title: "Deployment",
    description: "After all rounds of testing and final approvals, we hand off fully deployed, documented, ready-to-use software.",
  },
];

function ValuePropCard({ icon, title, description }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "21.32px", width: "100%", maxWidth: "300px" }}>
      <Box sx={{ width: "78px", height: "78px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box component="img" src={icon} alt="" sx={{ width: "54.6px", height: "54.6px" }} />
      </Box>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "35.98px",
          color: "#FFFFFF",
          textAlign: "center",
          whiteSpace: "pre-line",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: "28px",
          lineHeight: "31.9px",
          color: "#888888",
          textAlign: "center",
          width: "290.46px",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

ValuePropCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function ClientCard({ title, subtitle, description, tags }) {
  return (
    <Box
      sx={{
        backgroundColor: "#191919",
        border: "1.32px solid #444",
        borderRadius: "15.83px",
        p: "43.53px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "623px",
        minHeight: "350px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <Typography
          sx={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: "28px",
            lineHeight: "43.53px",
            color: "#FFFFFF",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "29.68px",
            color: "#F3801A",
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "32.16px",
          color: "#AAAAAA",
          width: "535.6px",
          flexGrow: 1,
        }}
      >
        {description}
      </Typography>

      <Box sx={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <Box
            key={tag}
            sx={{
              border: "1.32px solid #444",
              borderRadius: "100px",
              px: "17px",
              py: "6px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "25.73px",
                color: "#D7D7D7",
              }}
            >
              {tag}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

ClientCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function ProcessCard({ number, title, description }) {
  return (
    <Box
      sx={{
        backgroundColor: "#191919",
        border: "1.32px solid #444",
        borderRadius: "15.83px",
        p: "43.53px",
        display: "flex",
        flexDirection: "column",
        gap: "21.11px",
        width: "300px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "63.32px",
          color: "#F3801A",
        }}
      >
        {number}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 700,
          fontSize: "28px",
          lineHeight: "35.62px",
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
          lineHeight: "32.16px",
          color: "#888888",
          width: "208.44px",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

ProcessCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function ClientPage() {
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
        src={imgDoodles}
        alt=""
        sx={{
          position: "absolute",
          top: "56px",
          right: "-123px",
          width: "613px",
          height: "614px",
          pointerEvents: "none",
          mixBlendMode: "lighten",
          opacity: 0.8,
          zIndex: 0,
        }}
      />

      {/* ========== HERO SECTION ========== */}
      <Box
        sx={{
          pt: "257px",
          px: "79px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Title Group */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40.32px", mb: "60px" }}>
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: "64px",
              lineHeight: "normal",
              color: "#FFFFFF",
            }}
          >
            <span style={{ color: "#F3801A" }}>TPEO</span>’s amazing clients.
          </Typography>
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 400,
              fontSize: "28px",
              lineHeight: "39.06px",
              color: "#D7D7D7",
            }}
          >
            We love our clients! Here is the cool stuff we’ve done for them.
          </Typography>
        </Box>

        {/* Value Props Grid */}
        <Box
          sx={{
            display: "flex",
            gap: "40px",
            maxWidth: "1335.85px",
            pb: "91.68px", // Adjusted to match y:1011 for linebr
          }}
        >
          {initialValueProps.map((prop) => (
            <ValuePropCard key={prop.title} {...prop} />
          ))}
        </Box>
      </Box>

      {/* linebr at y:1011 */}
      <Divider sx={{ backgroundColor: "#444", mx: "0px" }} />

      {/* ========== CLIENT INFO CONTAINER ========== */}
      <Box
        sx={{
          px: "79px",
          pt: "84px", // Gap from linebr (1095 - 1011 = 84)
          display: "flex",
          flexDirection: "column",
          gap: "100px",
        }}
      >
        {/* ========== PAST CLIENTELE SECTION ========== */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "60px",
          }}
        >
          <Box sx={{ textAlign: "center", maxWidth: "816px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography
              sx={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: "1.5",
                color: "#F3801A",
              }}
            >
              Our past clientele
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "1.5",
                color: "#FFFFFF",
              }}
            >
              We’ve worked with numerous local Austin startups, non-profits, and companies to aid them with technological solutions
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              width: "100%",
              maxWidth: "1276.67px",
            }}
          >
            {/* Row 1 */}
            <Box sx={{ display: "flex", gap: "31px" }}>
              <ClientCard {...clientData[0]} />
              <ClientCard {...clientData[1]} />
            </Box>
            {/* Row 2 */}
            <Box sx={{ display: "flex", gap: "31px" }}>
              <ClientCard {...clientData[2]} />
              <ClientCard {...clientData[3]} />
            </Box>
          </Box>
        </Box>

        {/* linebr at 1083.98 relative to container */}
        <Divider sx={{ backgroundColor: "#444" }} />

        {/* ========== WHAT WE DO SECTION ========== */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "60px",
          }}
        >
          <Box sx={{ textAlign: "center", maxWidth: "1100px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography
              sx={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: "1.5",
                color: "#F3801A",
              }}
            >
              What we do
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "1.5",
                color: "#FFFFFF",
              }}
            >
              All Client projects are paired with a team of experienced students—Product Manager, Designers, Engineers—who have participated in our rigorous training curriculum.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "31.25px",
              width: "100%",
              maxWidth: "1300px",
              justifyContent: "center",
            }}
          >
            {processSteps.map((step) => (
              <ProcessCard key={step.number} {...step} />
            ))}
          </Box>
        </Box>

        {/* linebr at 2007.98 relative to container */}
        <Divider sx={{ backgroundColor: "#444" }} />

        {/* ========== FAQ SECTION ========== */}
        <Box sx={{ pb: "100px" }}>
          <Faq type="Client" />
        </Box>
      </Box>
    </Box>
  );
}

export default ClientPage;
