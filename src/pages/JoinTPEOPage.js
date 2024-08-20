import React from "react";
import { Box, Typography, Button, useTheme, Fade } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function JoinTPEOPage() {
  const theme = useTheme();

  const images = [
    { id: 1, url: "https://via.placeholder.com/500", alt: "Carousel Slide 1" },
    { id: 2, url: "https://via.placeholder.com/500", alt: "Carousel Slide 2" },
    { id: 3, url: "https://via.placeholder.com/500", alt: "Carousel Slide 3" },
    { id: 4, url: "https://via.placeholder.com/500", alt: "Carousel Slide 4" },
    { id: 5, url: "https://via.placeholder.com/500", alt: "Carousel Slide 5" },
    // Add more images if needed
  ];

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
          background: `
          linear-gradient(0deg, rgba(236, 145, 62, 0.7), rgba(236, 145, 62, 0) 65%),
          #1A202C`, // Dark background as the base layer
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            marginLeft: "8vw",
            mt: "25vh",
          }}
        >
          <Fade in={true} timeout={600}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  fontSize: "3.8vw",
                  color: theme.palette.text.primary,
                  textAlign: "left",
                }}
              >
                Interested in joining{" "}
                <span style={{ color: theme.palette.primary.main }}>TPEO</span>?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "DM Sans",
                  fontWeight: 400,
                  fontSize: "1.5vw",
                  color: theme.palette.text.primary,
                  textAlign: "left",
                  marginTop: "1vh",
                }}
              >
                We're like really cool! Join usss
              </Typography>
            </Box>
          </Fade>

          {/* Buttons Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
              alignItems: "flex-end", // Align items to the right
            }}
          >
            <Fade in={true} timeout={700}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "#FFFFFF",
                  fontSize: "1.2vw",
                  padding: "1.5vh 3vh",
                  borderRadius: "12px",
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                Link to Application
              </Button>
            </Fade>

            <Fade in={true} timeout={800}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#FFFFFF",
                  color: "#FFFFFF",
                  fontSize: "1.2vw",
                  padding: "1.5vh 3vh",
                  borderRadius: "12px",
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  textTransform: "none",
                  width: "auto",
                  alignSelf: "flex-end", // Align this button to the right
                  "&:hover": {
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                  },
                }}
              >
                Join our Slack!
              </Button>
            </Fade>
          </Box>
        </Box>
        <Fade in={true} timeout={1100}>
          <Box
            sx={{
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mt: "5vh",
            }}
          >
            <Slider {...settings}>
              {images.map((image) => (
                <div key={image.id}>
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: "25vw",
                      height: "25vw",
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
        </Fade>
      </Box>
    </>
  );
}

export default JoinTPEOPage;
