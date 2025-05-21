import { createTheme, type ThemeOptions, type Theme as MuiTheme } from "@mui/material/styles";
import { lightPalette, mainColor } from "./lightTheme";
import { darkPalette } from "./darkTheme";

const commonOptions: ThemeOptions = {
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: { fontSize: "2.2rem", fontWeight: 500 },
    h2: { fontSize: "1.8rem", fontWeight: 500 },
    body1: { fontSize: "1rem" }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none"
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: mainColor
        }
      }
    }
  }
};

export const lightTheme = createTheme({
  ...commonOptions,
  palette: lightPalette
});

export const darkTheme = createTheme({
  ...commonOptions,
  palette: darkPalette
});

export const defaultTheme = lightTheme;

const themes = {
  light: lightTheme,
  dark: darkTheme,
  default: defaultTheme
};
export { themes };
export type { MuiTheme as Theme };
