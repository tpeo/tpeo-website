import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#FB8C14',  // TPEO main color
    },
    secondary: {
      main: '#EC913E',  // Secondary color
      dark: "#FB8C14" // Saturated Orange
    },
    background: {
      default: '#1A202C',  // Default background color
      paper: '#1A202C',
    },
    text: {
      primary: '#FFFFFF',  // Primary text color (white)
    },
  },
  typography: {
    fontFamily: 'Helvetica Neue, Arial, sans-serif',  // Updated font family
    fontSize: 14,  // Base font size
    h6: {
      fontSize: 20, // Sets the font size for h6 variants (like your links)
    }
  },
  components: {
    // You can customize component defaults here
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',  // Buttons have regular text transformation
        },
      },
    },
  },
});

export default theme;
