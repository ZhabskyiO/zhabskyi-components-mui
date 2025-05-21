import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { CssBaseline } from "@mui/material";
import lightTheme from "../src/theme/lightTheme";
import darkTheme from "../src/theme/darkTheme";

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline
    })
  ],
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  tags: ["autodocs"]
};

export default preview;
