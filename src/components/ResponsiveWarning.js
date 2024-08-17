import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TPEOLogo from '../assets/TPEOLogoGradient.png';

const ResponsiveWarning = () => {
  const theme = useTheme();
  const isMobile = window.innerWidth <= 768;

  return (
    isMobile ? (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          padding: theme.spacing(2),
          backgroundColor: theme.palette.background.default,
          textAlign: 'center',
        }}
      >
        <img src={TPEOLogo} alt="TPEO Logo" style={{ width: '150px', marginBottom: theme.spacing(2) }} />
        <Typography variant="h6" color="textPrimary">
          This site is best viewed
        </Typography>
        <Typography variant="h6" color="textPrimary">
          on a regular screen.
        </Typography>
      </Box>
    ) : null
  );
};

export default ResponsiveWarning;

