import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Grid,
  Paper,
  Button,
  Fade,
} from "@mui/material";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import LockIcon from "@mui/icons-material/Lock";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FAQ from "./sponsorsPage/FAQ";
import { Link } from "react-router-dom";

// Sample JSON data for the clients
const clients = [
  {
    name: "BiGAUSTIN",
    description: ["Full-stack Website Redesign", "Headless CRM application"],
    tags: ["tag1", "tag2"],
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    link: "/clients", // Replace with actual link
  },
  {
    name: "Austin Public Library",
    description: ["Full-stack Website Redesign", "Headless CRM application"],
    tags: ["tag"],
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "/clients", // Replace with actual link
  },
  {
    name: "Project Name",
    description: ["Full-stack Website Redesign", "Headless CRM application"],
    tags: ["tag1", "tag2"],
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "/clients", // Replace with actual link
  },
  {
    name: "Bee Cave Arts Foundation",
    description: ["Full-stack Website Redesign", "Headless CRM application"],
    tags: ["tag"],
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "/clients", // Replace with actual link
  },
];

// Card component for client information
function ClientCard({ client }) {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2vw",
        backgroundColor: "#202938",
        borderRadius: "12px",
        border: "2px solid rgba(255, 255, 255, 0.2)", // White border with 20% opacity
        width: "38vw",
        height: "23vh",
        color: theme.palette.text.primary,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: "1vh" }}>
          {client.name}
        </Typography>
        {client.description.map((line, index) => (
          <Typography
            key={index}
            variant="body2"
            sx={{ marginBottom: "0.5vh" }}
          >
            {line}
          </Typography>
        ))}
        <Box sx={{ display: "flex", gap: "1vw", marginTop: "1vh" }}>
          {client.tags.map((tag, index) => (
            <Button
              key={index}
              variant="contained"
              sx={{
                backgroundColor: "#D9D9D9",
                color: "#000",
                fontSize: "0.8vw",
                padding: "0.5vw 1vw",
                textTransform: "none",
              }}
            >
              {tag}
            </Button>
          ))}
        </Box>
      </Box>
      <Box sx={{ flex: 0.4, textAlign: "end" }}>
        <img
          src={client.image}
          alt={client.name}
          style={{
            maxWidth: "100%",
            maxHeight: "20vh",
            objectFit: "contain",
            marginBottom: "1vh",
          }}
        />
        <Button
          component={Link}
          to={client.link}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "#FFFFFF",
            borderRadius: "50%",
            padding: "10px",
            minWidth: "3vw",
            minHeight: "3vw",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          &gt;
        </Button>
      </Box>
    </Paper>
  );
}

function ClientPage() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          background: `linear-gradient(to left, rgba(26, 32, 44, 1) 40%, #825835 100%)`, // Adjusted gradient direction and colors
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          paddingLeft: "4vw",
        }}
      >
        <Fade in={true} timeout={600}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "4vw",
              color: theme.palette.text.primary,
              marginBottom: "2vh",
              marginTop: "30vh",
              textAlign: "left",
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            clients
          </Typography>
        </Fade>

        <Fade in={true} timeout={800}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "DM Sans",
              fontWeight: 400,
              fontSize: "2vw",
              color: theme.palette.text.primary,
              marginBottom: "0vh",
              textAlign: "left",
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            we love clients here's the cool stuff we've done for them
          </Typography>
        </Fade>

        <Grid
          container
          spacing={4}
          sx={{ maxWidth: "1200px", paddingTop: "12vh" }}
        >
          <Fade in={true} timeout={1000}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary }}>
                <EnergySavingsLeafIcon
                  sx={{ fontSize: "2vw", marginBottom: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Feature 1
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 400 }}>
                  Cool stuff
                </Typography>
              </Box>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1100}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary }}>
                <AdsClickIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Feature 2
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 400 }}>
                  Cool stuff
                </Typography>
              </Box>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1200}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary }}>
                <LockIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Feature 3
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 400 }}>
                  Cool stuff
                </Typography>
              </Box>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1300}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary }}>
                <NotificationsIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Collaboration
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 400 }}>
                  Cool stuff
                </Typography>
              </Box>
            </Grid>
          </Fade>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "auto",
          paddingX: "3vw", // Add padding here instead of on the Grid
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: "55%",
            marginTop: "10vh",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "3.8vw",
              color: theme.palette.secondary.main,
              marginBottom: "20px",
            }}
          >
            Our past clientele
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "",
              fontWeight: 400,
              fontSize: "1.3vw",
              color: theme.palette.text.primary,
            }}
          >
            Weve worked with numerous local Austin startups, non-profits, and
            companies to aid them with technological solutions
          </Typography>
        </Box>
        <Grid
          container
          spacing={4}
          justifyContent="center" // Center the grid items
          sx={{ paddingTop: "5vh", marginX: "auto" }} // Center and limit width
        >
          {clients.map((client, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <ClientCard client={client} />
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            textAlign: "center",
            width: "55%",
            marginTop: "10vh",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "3.8vw",
              color: theme.palette.secondary.main,
              marginBottom: "20px",
            }}
          >
            What we do
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "",
              fontWeight: 400,
              fontSize: "1.3vw",
              color: theme.palette.text.primary,
              marginBottom: "2vh",
            }}
          >
            All Client projects are paired with a team of experienced
            students—Product Manager, Designers, Engineers—who have participated
            in our rigorous training curriculum.
          </Typography>
        </Box>
      </Box>

      <FAQ type="Client"></FAQ>
    </>
  );
}

export default ClientPage;
