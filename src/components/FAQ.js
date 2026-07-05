import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import imgFaqLightbulb from "../assets/aboutIcons/fellow-faq-lightbulb.png";
import { sectionPx } from "../styles/pageLayout";

function Faq({ type, iconStyle = "plus" }) {
  const faqData = [
    {
      question: "When does TPEO recruit?",
      answer: "We recruit ONLY in the Fall semester of every year!",
      type: "General",
    },
    {
      question: "What are the benefits of joining TPEO?",
      answer:
        "By joining TPEO, you'll gain hands-on experience in full-stack development, product management, and UI/UX design.",
      type: "General",
    },
    {
      question: "Who can join TPEO?",
      answer:
        "TPEO is open to all students, but we specifically look for those passionate about technology and eager to learn.",
      type: "General",
    },
    {
      question: "How can I apply to TPEO?",
      answer:
        "You can apply through our website during the recruitment period in the Fall semester.",
      type: "General",
    },
    {
      question: "What kind of projects does TPEO work on?",
      answer:
        "We work on a variety of projects, ranging from web and mobile applications to product design and market research.",
      type: "General",
    },
    {
      question: "What does TPEO recruit?",
      answer: "We recruit incoming freshmen and sophomores of all majors!",
      type: "NewFellow",
    },
    {
      question: "When do applications open?",
      answer:
        "Applications open every Fall semester. At the beginning of the fall semester we host coffee chats and information sessions—follow @txproduct on Instagram for updates!",
      type: "NewFellow",
    },
    {
      question: "How much time does the fellowship require?",
      answer:
        "New fellows participate in semester-long courses and a new fellow project. Expect a meaningful weekly commitment during the academic year, including classes, project work, and team meetings.",
      type: "NewFellow",
    },
    {
      question: "Is there compensation?",
      answer:
        "TPEO is a student organization. The fellowship is unpaid, but fellows gain hands-on experience, mentorship, and access to our alumni network.",
      type: "NewFellow",
    },
    {
      question: "What type of projects does TPEO take on?",
      answer:
        "We take on projects to support nonprofits that include backend and frontend work. We like to focus on enhancing, such as adding features, rather than building a new website from scratch.",
      type: "Client",
    },
    {
      question: "What are the teams?",
      answer:
        "Teams working on the project will consist of one project manager, one designer, and three-four engineers.",
      type: "Client",
    },
    {
      question:
        "Who is the point of contact during the project and how much involvement is needed?",
      answer:
        "The point of contact will be the team's project manager. Involvement is dependent on the size of the project, but likely once a week one hour meetings to go over progress.",
      type: "Client",
    },
    {
      question: "How do I reach out about collaborating with TPEO?",
      answer: "Email team@txproduct.org",
      type: "Client",
    },
    {
      question: "What does it cost to work with TPEO?",
      answer:
        "NOTHING! All TPEO work is pro-bono. The only costs that could be acquired are storage and website hosting costs.",
      type: "Client",
    },
    {
      question: "What are project timelines?",
      answer:
        "The project will be active from September - April of the following year.",
      type: "Client",
    },
    {
      question: "How do I become a sponsor?",
      answer: "To become a sponsor, visit our sponsorship page for details.",
      type: "Sponsor",
    },
    {
      question: "What are the benefits of sponsoring TPEO?",
      answer:
        "Sponsors gain brand exposure, recruitment opportunities, and more.",
      type: "Sponsor",
    },
  ];

  const partnersFaqOrder = [
    "How do I become a sponsor?",
    "What are the benefits of sponsoring TPEO?",
    "What type of projects does TPEO take on?",
    "What are the teams?",
    "Who is the point of contact during the project and how much involvement is needed?",
    "How do I reach out about collaborating with TPEO?",
    "What does it cost to work with TPEO?",
    "What are project timelines?",
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAnswer = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const filteredFaqData = (() => {
    if (type === "Partners") {
      return partnersFaqOrder
        .map((question) => faqData.find((faq) => faq.question === question))
        .filter(Boolean);
    }
    return faqData.filter((faq) => faq.type === type);
  })();

  return (
    <Box
      sx={{
        py: { xs: "64px", md: "100px" },
        px: sectionPx,
        position: "relative",
        zIndex: 1,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: "8px", width: "100%" }}>
          <Box
            component="img"
            src={imgFaqLightbulb}
            alt=""
            sx={{
              width: "110px",
              height: "auto",
              pointerEvents: "none",
              mixBlendMode: "lighten",
            }}
          />
        </Box>

        <Box
          sx={{
            textAlign: "center",
            mb: "52.7px",
            display: "flex",
            flexDirection: "column",
            gap: "18.67px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "32px", md: "48px" },
              lineHeight: "36px",
              color: "#F3801A",
            }}
          >
            FAQ
          </Typography>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "20px", md: "28px" },
              lineHeight: "36px",
              color: "#FFFFFF",
              maxWidth: "895px",
              mx: "auto",
            }}
          >
            More questions? Contact Us!
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "18.67px",
            width: "100%",
            maxWidth: "1353px",
          }}
        >
          {filteredFaqData.map((faq, index) => (
            <Box
              key={faq.question}
              sx={{
                backgroundColor: "#191919",
                border: "1.57px solid #444",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  px: { xs: "20px", md: "37.77px" },
                  py: { xs: "20px", md: "31.48px" },
                  gap: "16px",
                }}
                onClick={() => toggleAnswer(index)}
              >
                <Typography
                  sx={{
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: "20px", md: "28px" },
                    lineHeight: { xs: "28px", md: "37.77px" },
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  {faq.question}
                </Typography>
                <IconButton sx={{ color: "#F3801A", p: 0, flexShrink: 0 }}>
                  {iconStyle === "chevron" ? (
                    openIndexes.includes(index) ? (
                      <ExpandLessIcon sx={{ fontSize: "28.33px" }} />
                    ) : (
                      <ExpandMoreIcon sx={{ fontSize: "28.33px" }} />
                    )
                  ) : openIndexes.includes(index) ? (
                    <RemoveIcon sx={{ fontSize: "28.33px" }} />
                  ) : (
                    <AddIcon sx={{ fontSize: "28.33px" }} />
                  )}
                </IconButton>
              </Box>
              <Collapse in={openIndexes.includes(index)} timeout="auto" unmountOnExit>
                <Box sx={{ px: { xs: "20px", md: "37.77px" }, pb: { xs: "20px", md: "31.48px" } }}>
                  <Typography
                    sx={{
                      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: "18px", md: "24px" },
                      lineHeight: "36px",
                      color: "#AAAAAA",
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </Box>
              </Collapse>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

Faq.propTypes = {
  type: PropTypes.string.isRequired,
  iconStyle: PropTypes.oneOf(["plus", "chevron"]),
};

export default Faq;
