import React from "react";
import { Box, useTheme } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const theme = useTheme(); // using the theme for styling
  const images = [
    { id: 1, url: "https://via.placeholder.com/500", alt: "Carousel Slide 1" },
    { id: 2, url: "https://via.placeholder.com/500", alt: "Carousel Slide 2" },
    { id: 3, url: "https://via.placeholder.com/500", alt: "Carousel Slide 3" },
    // Add more images if needed
  ];

  const settings = {
    dots: true,
    infinite: true, // Consider keeping infinite regardless of image count for a continuous feel
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '5%', // Responsive padding on the sides of the center image
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.id}>
          <Box
            sx={{
                width: "100%", // Changed width from 33vw to 100% of the slide content
                maxWidth: "33vw", // Use maxWidth to control the visible area
                height: "33vw", // Maintaining height based on viewport width
                backgroundColor: "#D9D9D9",
                borderRadius: "20px",
                overflow: "hidden",
                margin: "auto", // Center the box in the slide if necessary
              }}
          >
            <img
              src={image.url}
              alt={image.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
