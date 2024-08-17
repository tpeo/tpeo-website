import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function FAQ() {
  
  const faqData = [
    {
      question: "When does TPEO recruit?",
      answer: "We recruit ONLY in the Fall semester of every year!",
    },
    {
      question: "What are the benefits of joining TPEO?",
      answer: "By joining TPEO, you'll gain hands-on experience in full-stack development, product management, and UI/UX design.",
    },
    {
      question: "Who can join TPEO?",
      answer: "TPEO is open to all students, but we specifically look for those passionate about technology and eager to learn.",
    },
    {
      question: "How can I apply to TPEO?",
      answer: "You can apply through our website during the recruitment period in the Fall semester.",
    },
    {
      question: "What kind of projects does TPEO work on?",
      answer: "We work on a variety of projects, ranging from web and mobile applications to product design and market research.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAnswer = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#1A202C', 
        padding: '5vh 10vw',
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
          color: "#FB8C14", 
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

      {faqData.map((faq, index) => (
        <Box
          key={index}
          sx={{
            width: "80%",
            borderBottom: "1px solid #555", // Subtle line to separate questions
            padding: "3vh",
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
                fontWeight: openIndexes.includes(index) ? 700 : 400,
                fontSize: "1.8vw",
                color: "#FFFFFF",
              }}
            >
              {faq.question}
            </Typography>
            <IconButton sx={{ color: "#FB8C14" }}>
              {openIndexes.includes(index) ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          </Box>
          <Collapse in={openIndexes.includes(index)} timeout="auto" unmountOnExit>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "DM Sans",
                fontWeight: 400,
                fontSize: "1.2vw",
                color: "#FFFFFF",
                marginTop: "1vh",
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
