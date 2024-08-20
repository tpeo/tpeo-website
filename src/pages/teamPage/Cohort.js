import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  useTheme,
  Fade,
} from "@mui/material";

const cohortData = [
  {
    name: "Raina Parikh",
    title: "Director",
    tags: ["Directors"],
    previousCompany: "Google",
    coolFact: "Speaks 5 languages",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Vincent Do",
    title: "Engineering Director",
    tags: ["Engineering", "Directors"],
    previousCompany: "Facebook",
    coolFact: "Climbed Everest",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Yash Kukrecha",
    title: "Engineering Lead",
    tags: ["Engineering"],
    previousCompany: "Facebook",
    coolFact: "Climbed Everest",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Sahil Chowdhury",
    title: "Engineering Lead",
    tags: ["Engineering"],
    previousCompany: "Facebook",
    coolFact: "Climbed Everest",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Shiv Nikhra",
    title: "Engineering Lead",
    tags: ["Engineering"],
    previousCompany: "Facebook",
    coolFact: "Climbed Everest",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Nidhi Malpani",
    title: "Design Director",
    tags: ["Design", "Directors"],
    previousCompany: "Amazon",
    coolFact: "Runs marathons",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Rumi Sait",
    title: "Design Lead",
    tags: ["Design"],
    previousCompany: "Amazon",
    coolFact: "Runs marathons",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Esther Uzoma",
    title: "Design Lead",
    tags: ["Design"],
    previousCompany: "Amazon",
    coolFact: "Runs marathons",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Jessica Yang",
    title: "Product Director",
    tags: ["Product", "Directors"],
    previousCompany: "Google",
    coolFact: "Speaks 5 languages",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Venkat Sundaram",
    title: "Product Director",
    tags: ["Product"],
    previousCompany: "Google",
    coolFact: "Speaks 5 languages",
    sourceImage: "https://via.placeholder.com/150",
  },
  {
    name: "Jonathan Wong",
    title: "Previous Product Director",
    tags: ["Alumni"],
    previousCompany: "Google",
    coolFact: "Speaks 5 languages",
    sourceImage: "https://via.placeholder.com/150",
  },
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
        justifyContent: "start",
        borderRadius: "12px",
        border: "1px solid #FFFFFF",
        backgroundColor: "#202938",
        color: "#FFFFFF",
        marginBottom: 2,
        width: "100%",
        height: "48vh",
      }}
    >
      <img
        src={sourceImage}
        alt={name}
        style={{
          width: "15vw",
          height: "15vw",
          borderRadius: "12px",
          marginBottom: "2vh",
          marginTop: "2vh",
        }}
      />
      <Typography
        variant="h6"
        sx={{ fontSize: "1.2em", fontWeight: "700", marginBottom: "1vh" }}
      >
        {name}
      </Typography>
      <Typography sx={{ fontSize: "1.1em", marginBottom: "2vh" }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: "0.9em" }}>{previousCompany}</Typography>
      <Typography sx={{ fontSize: "0.9em", fontStyle: "italic" }}>
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
          marginBottom: 5,
          marginTop: 3,
          gap: "5vw",
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
              fontSize: "1.3vw",
              padding: "25px 33px",
              height: "4vw",
              backgroundColor:
                activeTag === tag
                  ? "rgba(236, 145, 62, 0.8)"
                  : "rgba(236, 145, 62, 0.2)",
              fontWeight: activeTag === tag ? "bold" : "normal",
              color: "white",
              transition:
                "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease",
              "&:hover": {
                letterSpacing: "0.03em",
                background: "rgba(236, 145, 62, 0.4)",
                transition:
                  "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease",
              },
            }}
          >
            {tag}
          </Button>
        ))}
      </Box>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", paddingX: "11vw" }}
      >
        {cohortData
          .filter((member) => member.tags.includes(activeTag))
          .map((member, index) => (
            <Fade
              key={member.name}
              in={true}
              timeout={(index + 1) * 300} // Delay each card appearance slightly for a staggered effect
            >
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <CohortCard {...member} />
              </Grid>
            </Fade>
          ))}
      </Grid>
    </Box>
  );
}

export default Cohort;
