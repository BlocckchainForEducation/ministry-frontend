import { createMuiTheme, colors } from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";
import shadows from "./shadows";
import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    background: {
      dark: "#F4F6F8",
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: blue,
    secondary: pink,

    // primary: {
    //   main: colors.indigo[500]
    // },
    // secondary: {
    //   main: colors.indigo[500]
    // },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  shadows,
  typography,
});

export default theme;
