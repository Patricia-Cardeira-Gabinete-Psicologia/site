// src/theme.js
import { createTheme } from '@mui/material/styles';
import { ptPT } from '@mui/material/locale';

// Create a theme instance.
const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#17888d",
      },
      background: {
        default: "#fdfcf9",
      },
    },
  },
  ptPT
);

export default theme;
