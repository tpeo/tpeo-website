import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Grid,
  Paper,
  Fade,
} from "@mui/material";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import LockIcon from "@mui/icons-material/Lock";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FAQ from "./sponsorsPage/FAQ";
import { motion } from 'framer-motion';
import ClientProcess from '../assets/vectorImages/ClientProcess.png'
import thoughtlessImage from '../assets/projectImages/Thoughtless.png'
import apaImage from '../assets/projectImages/apa_logo.png'
import bigAustinImage from '../assets/projectImages/bigaustin_logo.png'

// Sample JSON data for the clients
const clients = [
  {
    name: 'BiGAUSTIN',
    description: ['Full-stack Website Redesign', 'Headless CRM application'],
    tags: ['Non-profit', 'Website Redesign'],
    image: bigAustinImage,
    link: 'https://medium.com/@channurichinmayee/tpeo-showcase-this-is-how-we-redesigned-a-nonprofits-website-end-to-end-86a36864844c',
  },
  {
    name: 'Austin Pets Alive',
    description: ['Process Optimization', 'Volunteer Management System'],
    tags: ['Animal Shelter', 'Process Improvement'],
    image: apaImage,
    link: 'https://medium.com/@channurichinmayee/tpeo-showcase-heres-how-we-optimized-an-austin-animal-shelter-s-end-to-end-processes-890e2d94e866',
  },
  {
    name: 'Thoughtless',
    description: ['Product Development', 'Community Engagement Platform'],
    tags: ['Student Organization', 'Product Launch'],
    image: thoughtlessImage,
    link: 'https://medium.com/@channurichinmayee/introducing-thoughtless-a-product-for-student-orgs-made-by-a-student-org-cc8a643b9fa0',
  },
];

// Card component for client information
function ClientCard({ client }) {
  const theme = useTheme();

  const handleCardClick = () => {
    window.open(client.link, '_blank');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{ width: '38vw', margin: '1rem', cursor: 'pointer' }}
      onClick={handleCardClick}
    >
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '2vw',
          backgroundColor: '#202938',
          borderRadius: '12px',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          color: theme.palette.text.primary,
          height: '23vh',
        }}
        elevation={3}
      >
        {/* Content Section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: '1vh' }}>
            {client.name}
          </Typography>
          {client.description.map((line, index) => (
            <Typography key={index} variant="body1" sx={{ marginBottom: '0.5vh' }}>
              {line}
            </Typography>
          ))}
          <Box sx={{ display: 'flex', gap: '1vw', marginTop: '2vh', flexWrap: 'wrap' }}>
            {client.tags.map((tag, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: '#D9D9D9',
                  color: '#000',
                  fontSize: '0.8vw',
                  padding: '0.2vw 1vw',
                  borderRadius: '5px',
                  fontWeight: 700,
                }}
              >
                {tag}
              </Box>
            ))}
          </Box>
        </Box>
        {/* Image Section */}
        <Box sx={{ flexShrink: 0, marginLeft: '1vw' }}>
          <img
            src={client.image}
            alt={client.name}
            style={{
              width: '100%',
              maxWidth: "16vw",
              height: 'auto',
              maxHeight: '18vh',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Paper>
    </motion.div>
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
              fontWeight: 400,
              fontSize: "2vw",
              color: theme.palette.text.primary,
              marginBottom: "0vh",
              textAlign: "left",
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            We love our nonprofit partners! Here's the cool stuff we have done for them
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
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.25vw"}}>
                  Active Communication
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 400, fontSize: "0.95vw" }}>
                Personal point of contact for each client project!
                </Typography>
              </Box>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1100}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary }}>
                <AdsClickIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.25vw" }}>
                Pro-Bono Work
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 400, fontSize: "0.95vw" }}>
                Access to experienced engineers, designers, and product managers
                </Typography>
              </Box>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1200}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary }}>
                <LockIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.25vw" }}>
                Build for the Client
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 400, fontSize: "0.95vw" }}>
                Projects are designed with the client in mind. We integrate out work  to existing systems
                </Typography>
              </Box>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1300}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary }}>
                <NotificationsIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.25vw" }}>
                Built for the Future
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 400, fontSize: "0.95vw" }}>
                Our projects are designed and built to last
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
              fontWeight: 400,
              fontSize: "1.3vw",
              color: theme.palette.text.primary,
            }}
          >
            We've worked with numerous local Austin startups, non-profits, and
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
        <Box
            component="img"
            src={ClientProcess}
            alt="Our Process"
            sx={{
              width: "100%",
              marginY: "5vh",
            }}
          />
      </Box>

      <FAQ type="Client"></FAQ>
    </>
  );
}

export default ClientPage;
