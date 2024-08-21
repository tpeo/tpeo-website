import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Grid,
  Fade,
  Modal,
  IconButton,
} from "@mui/material";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import LockIcon from "@mui/icons-material/Lock";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FAQ from "./sponsorsPage/FAQ";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import companies from "../assets/companiesNew.png";
import leaf from "../assets/leaf.png";
import ProjectCard from "../components/ProjectCard";
import CloseIcon from "@mui/icons-material/Close";

function NewFellowPage() {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  // Dynamically import all images from the specified directory
  const importAll = (r) =>
    r.keys().map((key, index) => ({
      id: index + 1,
      url: r(key), 
      alt: `Carousel Slide ${index + 1}`,
    }));
  

  const images = importAll(
    require.context(
      "../assets/socialImages",
      false,
      /\.(png|jpg|jpeg|svg|JPG|JPEG)$/
    )
  );

  const settings = {
    dots: false,
    infinite: true, // Consider keeping infinite regardless of image count for a continuous feel
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          background: `linear-gradient(to right, rgba(26, 32, 44, 1) 40%, rgba(236, 145, 62, 0.5) 100%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          paddingLeft: "4vw",
          backgroundColor: theme.palette.background.default,
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
            new fellows
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
              width: "50vw",
            }}
          >
            We teach freshmen and sophomore yada yada yada Our New Fellow
            Curriculum goes hard
          </Typography>
        </Fade>

        <Grid container spacing={4} sx={{ width: "85vw", paddingTop: "12vh" }}>
          <Fade in={true} timeout={1000}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary, width: "16vw" }}>
                <EnergySavingsLeafIcon
                  sx={{ fontSize: "2vw", marginBottom: 2 }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, fontSize: "1.25vw" }}
                >
                  Tangible Skills
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 400, fontSize: "0.95vw" }}
                >
                  Cool stuff
                </Typography>
              </Box>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1100}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary, width: "16vw" }}>
                <AdsClickIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, fontSize: "1.25vw" }}
                >
                  Learn from Experienced Directors & Leads
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 400, fontSize: "0.95vw" }}
                >
                  Our curriculum will be taught by those who have interned at
                  top programs in their respective fields
                </Typography>
              </Box>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1200}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary, width: "16vw" }}>
                <LockIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, fontSize: "1.25vw" }}
                >
                  Direct Application
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 400, fontSize: "0.95vw" }}
                >
                  Cool stuff
                </Typography>
              </Box>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1300}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary, width: "16vw" }}>
                <NotificationsIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, fontSize: "1.25vw" }}
                >
                  Cross-Collaboration
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 400, fontSize: "0.95vw" }}
                >
                  Work with other fellows outside of respective disciplines
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
        {/* How TPEO works section */}
        <Box
          sx={{
            textAlign: "center",
            width: "40%",
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
            How TPEO fellowship works
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
            Our process. We only do Fall Recruitment!
          </Typography>
        </Box>
        {/* Socials carousel section */}
        <Box
          sx={{
            textAlign: "center",
            width: "40%",
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
            Socials
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
            Apart from the innovation we incubate, we also have fun!
          </Typography>
        </Box>
        <Box
          sx={{
            width: "95%",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mt: "5vh",
            marginBottom: "10vh",
          }}
        >
          <Slider {...settings}>
            {images.map((image) => (
              <div key={image.id} onClick={() => handleOpen(image.url)}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "26vw",
                    height: "26vw",
                    backgroundColor: "#D9D9D9",
                    borderRadius: "15px",
                    overflow: "hidden",
                    margin: "auto",
                  }}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </div>
            ))}
          </Slider>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: "80%",
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
            Past New Fellow Projects
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
            Here's some cool things that our new fellows have built in the past!
          </Typography>
        </Box>
        <Box
          sx={{
            width: "95%",
            mx: "auto",
            mt: "5vh",
            marginBottom: "10vh",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <ProjectCard
            name="Cribcritiq"
            imageLink={companies}
            brief="Project Brief"
            iconImage={leaf}
            height="43" // Height in vh
            width="40" // Width in vw
          />
          <ProjectCard
            name="Cribcritiq"
            imageLink={companies}
            brief="Project Brief"
            iconImage={leaf}
            height="43" // Height in vh
            width="40" // Width in vw
          />
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: "80%",
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
            Our Engineering Curriculum
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
            Get a taste of how it is to be a new fellow!
          </Typography>
        </Box>
        <Box
          sx={{
            width: "95%",
            mx: "auto",
            mt: "5vh",
            marginBottom: "10vh",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <ProjectCard
            name="Cribcritiq"
            imageLink={companies}
            brief="Project Brief"
            iconImage={leaf}
            height="35" // Height in vh
            width="25" // Width in vw
          />
          <ProjectCard
            name="Cribcritiq"
            imageLink={companies}
            brief="Project Brief"
            iconImage={leaf}
            height="35" // Height in vh
            width="25" // Width in vw
          />
          <ProjectCard
            name="Cribcritiq"
            imageLink={companies}
            brief="Project Brief"
            iconImage={leaf}
            height="35" // Height in vh
            width="25" // Width in vw
          />
        </Box>
      </Box>

      <FAQ type="NewFellow"></FAQ>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "transparent",
          backdropFilter: "none",
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                bgcolor: "rgba(0, 0, 0, 0.7)", // Slightly darker background for visibility
                color: "#fff",
                borderRadius: "50%",
                p: 1,
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.7)", // Keep the background solid on hover
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                style={{
                  width: "auto",
                  height: "90vh", // Height fits within the viewport height
                  maxWidth: "100%", // Ensure width fits within the viewport width
                  objectFit: "contain",
                  display: "block",
                  margin: "auto",
                  borderRadius: "12px",
                }}
              />
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default NewFellowPage;
