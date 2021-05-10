import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    //type: 'dark',
    primary: {
      main: "#00acc1",
    },
    secondary: {
      main: "#ffab00",
    },
    error: {
      main: "#8e0000",
    },
    warning: {
      main: "#ffc401",
    },
    info: {
      main: "#1565c0",
    },
    success: {
      main: "#43a047",
    },
  },
  // typography:{

  // },
  spacing: 8,
});

export default theme;
