import { alpha, createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1f4e79",
    },
    secondary: {
      main: "#3b7a57",
    },
    background: {
      default: "#0b0b0b",
      paper: "#111111",
    },
    text: {
      primary: "#f5f5f5",
      secondary: "#c7c7c7",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
    h1: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 900,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 20,
          paddingBlock: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: `1px solid ${alpha("#ffffff", 0.08)}`,
          boxShadow: `0 24px 80px ${alpha("#02060d", 0.45)}`,
          backdropFilter: "blur(18px)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
        },
      },
    },
  },
});
