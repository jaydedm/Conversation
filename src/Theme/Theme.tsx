import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}

const theme = createTheme({
  direction: "ltr",
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#5D432C",
      darker: "#964B00",
      light: "#cf8133",
    },
    secondary: {
      main: "#edd2a4",
      darker: "#FFA74F",
      light: "#FFD5AA",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

export default theme;
