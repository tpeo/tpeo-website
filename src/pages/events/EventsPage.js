import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedPage from "../../components/AnimatedPage";
import JoinCTA from "../../components/JoinCTA";
import imgSquiggle from "../../assets/aboutIcons/team-squiggle.png";
import iconMegaphone from "../../assets/aboutIcons/megaphone.svg";
import iconLaptop from "../../assets/aboutIcons/laptop.svg";
import iconCommunity from "../../assets/aboutIcons/icon-active-comm.svg";
import iconEnvelope from "../../assets/aboutIcons/envelope.svg";
import {
  pageRootSx,
  sectionPx,
  sectionPy,
  sectionGap,
  heroPt,
  heroContentGap,
  heroTitleFont,
} from "../../styles/pageLayout";

const upcomingEvents = [
  {
    title: "Info Session",
    description:
      "Meet the team, hear how the fellowship works, and get your questions answered before applications open.",
    icon: iconMegaphone,
  },
  {
    title: "Engineering Workshops",
    description:
      "Hands-on sessions where fellows level up on the tools and frameworks we use to ship real client projects.",
    icon: iconLaptop,
  },
  {
    title: "Community Socials",
    description:
      "Low-key hangouts across the semester so members from every fellowship get to know each other outside of work.",
    icon: iconCommunity,
  },
  {
    title: "Alumni & Industry Panels",
    description:
      "Conversations with TPEO alumni and partners about breaking into product, design, and engineering roles.",
    icon: iconEnvelope,
  },
];

function EventCard({ title, description, icon }) {
  return (
    <Box
      sx={{
        backgroundColor: "#191919",
        border: "1px solid #444",
        borderRadius: "20px",
        p: { xs: "24px", md: "32px" },
        display: "flex",
        flexDirection: "column",
        gap: { xs: "16px", md: "20px" },
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        component="img"
        src={icon}
        alt=""
        sx={{ width: { xs: "40px", md: "48px" }, height: { xs: "40px", md: "48px" }, flexShrink: 0 }}
      />
      <Typography
        sx={{
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "22px", md: "28px" },
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
          fontSize: { xs: "16px", md: "20px" },
          lineHeight: 1.5,
          color: "#D7D7D7",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

function EventsPage() {
  return (
    <AnimatedPage>
      <Box sx={pageRootSx}>
        {/* ========== HERO SECTION ========== */}
        <Box
          sx={{
            pt: heroPt,
            px: sectionPx,
            pb: { xs: "56px", md: "100px" },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            component="img"
            src={imgSquiggle}
            alt=""
            sx={{
              position: "absolute",
              pointerEvents: "none",
              mixBlendMode: "lighten",
              display: { xs: "none", md: "block" },
              right: { md: "-16px", lg: "-24px" },
              top: { md: "120px", lg: "140px" },
              width: { md: "300px", lg: "400px" },
              height: "auto",
              zIndex: 0,
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: heroContentGap, position: "relative", zIndex: 1 }}>
            <Typography
              sx={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 700,
                fontSize: heroTitleFont,
                lineHeight: "normal",
                color: "#FFFFFF",
              }}
            >
              TPEO <span style={{ color: "#F3801A" }}>Events</span>
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
              From info sessions to workshops and socials, here&rsquo;s a look at what we have in the works. Dates and
              details are coming soon.
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ backgroundColor: "#444" }} />

        {/* ========== UPCOMING EVENTS ========== */}
        <Box
          sx={{
            py: sectionPy,
            px: sectionPx,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: sectionGap,
          }}
        >
          <Box sx={{ position: "relative", width: "100%", maxWidth: "1128px" }}>
            {/* Blurred preview of the event lineup — swap out once dates are confirmed */}
            <Box
              aria-hidden="true"
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: { xs: "16px", md: "32px", lg: "40px" },
                width: "100%",
                filter: "blur(7px)",
                opacity: 0.5,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {upcomingEvents.map((event) => (
                <EventCard key={event.title} {...event} />
              ))}
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: { xs: "12px", md: "20px" },
                px: "24px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "32px", sm: "44px", md: "56px" },
                  lineHeight: 1.1,
                  backgroundImage: "linear-gradient(90deg, #FB8C14 0%, #F6A606 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Coming soon
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "16px", md: "22px" },
                  lineHeight: 1.5,
                  color: "#D7D7D7",
                  maxWidth: "520px",
                }}
              >
                We&rsquo;re finalizing dates for this semester. Check back soon, or join our Slack to hear about events
                first.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ backgroundColor: "#444" }} />

        <JoinCTA />
      </Box>
    </AnimatedPage>
  );
}

export default EventsPage;
