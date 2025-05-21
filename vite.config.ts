import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ZhabskyiComponentsMui",
      formats: ["es", "umd"],
      fileName: (format) => `zhabskyi-components-mui.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "@mui/material", "@emotion/react", "@emotion/styled"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@mui/material": "MaterialUI",
          "@emotion/react": "emotionReact",
          "@emotion/styled": "emotionStyled"
        }
      }
    }
  }
});
