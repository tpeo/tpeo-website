import React, { useEffect } from "react";
import { Box, Typography, useTheme, Fade } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cohort from "./Cohort";

function TeamPage() {
  const theme = useTheme();

  const images = [
    { id: 1, url: "https://via.placeholder.com/500", alt: "Carousel Slide 1" },
    { id: 2, url: "https://via.placeholder.com/500", alt: "Carousel Slide 2" },
    { id: 3, url: "https://via.placeholder.com/500", alt: "Carousel Slide 3" },
    { id: 4, url: "https://via.placeholder.com/500", alt: "Carousel Slide 3" },
    { id: 5, url: "https://via.placeholder.com/500", alt: "Carousel Slide 3" },
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
          height: "110vh",
          background: `
          linear-gradient(0deg, rgba(236, 145, 62, 0.7), rgba(236, 145, 62, 0) 65%),
          #1A202C`, // Dark background as the base layer
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: "100%",
          }}
        >
          <Fade in={true} timeout={600}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "DM Sans",
                fontWeight: 700,
                fontSize: "3.8vw",
                color: theme.palette.text.primary,
                marginBottom: "20px",
                marginTop: "12%",
                marginLeft: "5vw",
                width: "30%",
                textAlign: "left",
              }}
            >
              Introducing Team TPEO
            </Typography>
          </Fade>
        </Box>
        <Fade in={true} timeout={1200}>
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
      <Cohort></Cohort>
    </>
  );
}

export default TeamPage;
