import { type PaletteOptions } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const mainColor = "#2db1bd";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: mainColor,
    contrastText: "#fff"
  },
  secondary: {
    main: "#f4a261",
    contrastText: "#fff"
  },
  info: {
    main: "#6a4c93",
    contrastText: "#fff"
  },
  background: {
    default: "#fafafa",
    paper: "#ffffff"
  },
  text: {
    primary: "#212121",
    secondary: "#555555"
  },
  error: {
    main: red.A700
  }
};
