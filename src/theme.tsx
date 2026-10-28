import { createTheme } from '@mui/material/styles';
import { ptPT } from '@mui/material/locale';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#176b6e",
        dark: "#105456",
        light: "#e6eeea",
      },
      background: {
        default: "#f4f5f1",
        paper: "#ffffff",
      },
      text: {
        primary: "#203b38",
        secondary: "#526966",
      },
    },
    typography: {
      fontFamily: '"Aptos", "Segoe UI", Arial, sans-serif',
      fontSize: 16,
      body1: { fontSize: "1rem", lineHeight: 1.65 },
      body2: { fontSize: "0.875rem", lineHeight: 1.6 },
      h1: { fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 },
      h2: { fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 },
      h3: { fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 },
      h4: { fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 },
      h5: { fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 },
      button: { fontWeight: 600, textTransform: 'none' },
    },
    shape: { borderRadius: 8 },
  },
  ptPT
);

export default theme;
