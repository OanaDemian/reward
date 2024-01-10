
import { createTheme } from "@mui/material";

const theme1 = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const stylesButtons = (theme1) => ({
        p: 1,
      [theme1.breakpoints.down("sm")]: {
        p: 2,
      },
      [theme1.breakpoints.between("sm", "lg")]: {
        p: 3,
      },
      [theme1.breakpoints.up("lg")]: {
        p: 4,
      }
      });