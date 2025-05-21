import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const mainColor = "#2db1bd";

const lightTheme = createTheme({
  palette: {
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
  },
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
});

export default lightTheme;
