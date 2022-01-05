import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { blueGrey, red, orange, deepOrange } from "@mui/material/colors";

// Create a theme instance.
let Theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: blueGrey,
    warning: orange,
    error: red,
  },
});
Theme = responsiveFontSizes(Theme);

export default Theme;
