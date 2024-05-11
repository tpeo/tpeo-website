import React, { useState } from "react";
import { Box, Typography, Button, Paper, Grid, useTheme } from "@mui/material";

const cohortData = [
  {
    name: "Alice Johnson",
    title: "Director",
    tag: "Directors",
    previousCompany: "Google",
    coolFact: "Speaks 5 languages",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Bob Smith",
    title: "Engineer",
    tag: "Engineering",
    previousCompany: "Facebook",
    coolFact: "Climbed Everest",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Carol Danvers",
    title: "Product Manager",
    tag: "Product",
    previousCompany: "Amazon",
    coolFact: "Runs marathons",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Alice Johnson",
    title: "Director",
    tag: "Design",
    previousCompany: "Google",
    coolFact: "Speaks 5 languages",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Alice Johnson",
    title: "Director",
    tag: "Product",
    previousCompany: "Google",
    coolFact: "Speaks 5 languages",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Alice Johnson",
    title: "Director",
    tag: "Directors",
    previousCompany: "Google",
    coolFact: "Speaks 5 languages",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Alice Johnson",
    title: "Director",
    tag: "Directors",
    previousCompany: "Google",
    coolFact: "Speaks 5 languages",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Alice Johnson",
    title: "Director",
    tag: "Directors",
    previousCompany: "Google",
    coolFact: "Speaks 5 languages",
    sourceImage: "https://via.placeholder.com/150",
  },
  // Add more members as needed
];

function CohortCard({
  name,
  title,
  tag,
  previousCompany,
  coolFact,
  sourceImage,
}) {
  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        border: "1px solid #FFFFFF",
        backgroundColor: "#202938",
        color: "#FFFFFF",
        marginBottom: 2, // Space between rows
      }}
    >
      <img
        src={sourceImage}
        alt={name}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "12px",
          marginBottom: 2,
        }}
      />
      <Typography variant="h6" sx={{ fontSize: "1.2em", fontWeight: "bold" }}>
        {name}
      </Typography>
      <Typography sx={{ fontSize: "1em" }}>
        {title} - {previousCompany}
      </Typography>
      <Typography sx={{ fontSize: "0.8em", fontStyle: "italic" }}>
        {coolFact}
      </Typography>
    </Paper>
  );
}

function Cohort() {
  const theme = useTheme();
  const [activeTag, setActiveTag] = useState("Directors");

  const tags = ["Directors", "Product", "Design", "Engineering", "Alumni"];

  return (
    <Box sx={{ padding: 3, backgroundColor: theme.palette.background.default }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "DM Sans",
          fontWeight: 700,
          color: theme.palette.primary.main,
          marginBottom: 2,
          textAlign: "center",
          fontSize: "3vw",
          marginTop: "5vh",
        }}
      >
        Cohorts
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 3,
          gap: "4vw",
        }}
      >
        {tags.map((tag) => (
          <Button
            key={tag}
            onClick={() => setActiveTag(tag)}
            variant="contained"
            sx={{
              borderRadius: "15px",
              fontFamily: "Helvetica Neue, Arial, sans-serif",
              fontSize: "1.2vw",
              padding: "10px 20px",
              backgroundColor:
                activeTag === tag
                  ? "rgba(236, 145, 62, 0.8)"
                  : "rgba(236, 145, 62, 0.2)",
              fontWeight: activeTag === tag ? "bold" : "normal",
              color: "white",
              transition:
                "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease", // Add transitions for background-color and letter-spacing
              "&:hover": {
                //   fontWeight: "bold",
                letterSpacing: "0.03em",
                background: "rgba(236, 145, 62, 0.4)",
                transition:
                  "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease", // Ensure transitions apply on hover as well
              },
            }}
          >
            {tag}
          </Button>
        ))}
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {cohortData
          .filter((member) => member.tag === activeTag)
          .map((member) => (
            <Grid item key={member.name} xs={12} sm={6} md={4}>
              <CohortCard {...member} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default Cohort;
