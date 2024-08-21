import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Fade,
  Modal,
  IconButton,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cohort from "./Cohort";
import CloseIcon from "@mui/icons-material/Close";

function TeamPage() {
  const theme = useTheme();

  // Dynamically import all images from the specified directory
  const importAll = (r) =>
    r.keys().map((key, index) => ({
      id: index + 1,
      url: r(key),
      alt: `Carousel Slide ${index + 1}`,
    }));

  const images = importAll(
    require.context(
      "../../assets/socialImages",
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
                <div key={image.id} onClick={() => handleOpen(image.url)}>
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

export default TeamPage;
