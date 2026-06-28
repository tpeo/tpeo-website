import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Faq({ type }) {
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
      question: "Who do we recruit?",
      answer: "We recruit incoming freshmen and sophomores of all majors!",
      type: "NewFellow",
    },
    {
      question: "How much experience is needed to be a fellow?",
      answer:
        "The great thing about TPEO is that you don't need much! If you are applying for engineering, we ask that you have a basic understanding of object-oriented programming as the course is rigorous. For design and product, we will teach you everything you need to know from scratch.",
      type: "NewFellow",
    },
    {
      question: "What is the recruitment timeline?",
      answer:
        "At the beginning of the fall semester we will host coffee chats and information sessions for you to use as an opportunity to get to know what TPEO is all about! Our application opens at the time. If you are selected, there is a follow-up interview round, and then decisions are released shortly after.",
      type: "NewFellow",
    },
    {
      question: "What do we look for in TPEO Applicants?",
      answer:
        "Passion! We are looking for someone who can dedicate themselves to TPEO and is ready to learn!",
      type: "NewFellow",
    },
    {
      question: "Where can we find updates?",
      answer:
        "For updates on TPEO, drop us a follow on instagram @txproduct! All recruiting and workshop updates will be posted there!",
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
      answer: "Email tpeoteam@gmail.com",
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

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAnswer = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const filteredFaqData = faqData.filter((faq) => faq.type === type);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ textAlign: "center", mb: "52.7px", display: "flex", flexDirection: "column", gap: "18.67px" }}>
        <Typography
          sx={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "1.5",
            color: "#F3801A",
          }}
        >
          FAQ
        </Typography>
        <Typography
          sx={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 400,
            fontSize: "28px",
            lineHeight: "1.5",
            color: "#FFFFFF",
            maxWidth: "895px",
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
          pb: "91px",
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
                px: "37.77px",
                py: "31.48px",
              }}
              onClick={() => toggleAnswer(index)}
            >
              <Typography
                sx={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: "28px",
                  lineHeight: "37.77px",
                  color: "#FFFFFF",
                }}
              >
                {faq.question}
              </Typography>
              <IconButton sx={{ color: "#F3801A", p: 0 }}>
                {openIndexes.includes(index) ? (
                  <RemoveIcon sx={{ fontSize: "28.33px" }} />
                ) : (
                  <AddIcon sx={{ fontSize: "28.33px" }} />
                )}
              </IconButton>
            </Box>
            <Collapse
              in={openIndexes.includes(index)}
              timeout="auto"
              unmountOnExit
            >
              <Box sx={{ px: "37.77px", pb: "31.48px" }}>
                <Typography
                  sx={{
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "24px",
                    lineHeight: "1.5",
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
  );
}

Faq.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Faq;
