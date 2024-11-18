import React, { useState } from 'react';
import { Box, Modal, IconButton } from '@mui/material';
import Slider from 'react-slick';
import CloseIcon from '@mui/icons-material/Close';
import ImageWithLoader from './ImageWithLoader';
import { motion, AnimatePresence } from 'framer-motion';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      '../assets/socialImages',
      false,
      /\.(png|jpg|jpeg|svg|JPG|JPEG)$/i
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
    centerPadding: '5%', // Responsive padding on the sides of the center image
  };

  return (
    <>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} onClick={() => handleOpen(image.url)}>
            <motion.div
              whileHover={{ scale: 1.01 }} // Hover animation
              transition={{ type: 'spring', stiffness: 200 }}
              style={{
                width: '100%',
                maxWidth: '33vw',
                height: '33vw',
                margin: 'auto',
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <ImageWithLoader
                src={image.url}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
              />
            </motion.div>
          </div>
        ))}
      </Slider>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'transparent',
          backdropFilter: 'none',
        }}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                }}
              >
                <IconButton
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                    color: '#fff',
                    borderRadius: '50%',
                    p: 1,
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
                {selectedImage && (
                  <motion.div
                    whileHover={{ scale: 1.01 }} // Hover animation on modal image
                    transition={{ type: 'spring', stiffness: 100 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ImageWithLoader
                      src={selectedImage}
                      alt="Selected"
                      style={{
                        width: 'auto',
                        height: '90vh',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        margin: 'auto',
                        borderRadius: '12px',
                      }}
                    />
                  </motion.div>
                )}
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
}

export default Carousel;