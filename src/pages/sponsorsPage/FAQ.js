import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function FAQ({ type }) {
  const theme = useTheme();

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
        "Who is the point of contact during the project and how much involvement is needed from the stakeholder?",
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

  // Filter the faqData based on the type prop
  const filteredFaqData = faqData.filter((faq) => faq.type === type);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: "5vh 10vw",
        paddingBottom: "10vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "DM Sans",
          fontWeight: 700,
          fontSize: "3vw",
          color: theme.palette.secondary.main,
          marginBottom: "2vh",
          textAlign: "center",
        }}
      >
        FAQ
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "DM Sans",
          fontWeight: 400,
          fontSize: "1.5vw",
          color: "#FFFFFF",
          marginBottom: "5vh",
          textAlign: "center",
        }}
      >
        More questions? Contact Us!
      </Typography>

      {filteredFaqData.map((faq, index) => (
        <Box
          key={index}
          sx={{
            width: "80%",
            borderBottom: "1px solid #555", // Subtle line to separate questions
            padding: "4vh",
            marginBottom: "0vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => toggleAnswer(index)}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "DM Sans",
                fontWeight: 700,
                fontSize: "1.2vw",
                color: "#FFFFFF",
              }}
            >
              {faq.question}
            </Typography>
            <IconButton sx={{ color: theme.palette.secondary.main }}>
              {openIndexes.includes(index) ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          </Box>
          <Collapse
            in={openIndexes.includes(index)}
            timeout="auto"
            unmountOnExit
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "DM Sans",
                fontWeight: 400,
                fontSize: "1.0vw",
                color: "#FFFFFF",
                marginTop: "1vh",
                width: "90%"
              }}
            >
              {faq.answer}
            </Typography>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
}

export default FAQ;
