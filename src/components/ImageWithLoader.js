import React, { useState } from 'react';
import { Box, Skeleton } from '@mui/material';

function ImageWithLoader({ src, alt, style, ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      {!loaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '20px',
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        style={{
          ...style,
          display: loaded ? 'block' : 'none',
        }}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </Box>
  );
}

export default ImageWithLoader;
