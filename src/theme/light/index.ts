import { createMuiTheme } from "@material-ui/core";
import overrides from './overrides';
import palette from './palette';

export const lightTheme = createMuiTheme({
  palette,
  typography: {
    fontFamily: '"Roboto"',
  },
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});