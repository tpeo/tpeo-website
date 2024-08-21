import React, { useState } from "react";
import {
  Box,
  Fade,
  Modal,
  IconButton,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloseIcon from "@mui/icons-material/Close";

function Carousel() {
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

  const settings = {
    dots: true,
    infinite: true, // Consider keeping infinite regardless of image count for a continuous feel
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "5%", // Responsive padding on the sides of the center image
  };

  return (
    <>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} onClick={() => handleOpen(image.url)}>
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

export default Carousel;
