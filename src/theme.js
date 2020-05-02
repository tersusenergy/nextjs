import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#0092FF',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ffffff',
    },
  },
});

export default theme;
