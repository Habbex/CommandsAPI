import { createMuiTheme } from '@material-ui/core/styles';

//Dark theme
const theme = createMuiTheme({
  palette: {
    type: "dark",
    background:{
      default: '#141d30',
      paper: '#141d26'
    },
    primary: {
      main: '#303f9f'
    },
    secondary: {
      main: '#c51162',
    },
  },
  overrides: {
    MuiInputBase: {
      input: {
        background: '#192734',
      },
    }
  },
  typography:{
    fontFamily: ["Verdana", "Helvetica", "Arial", "sans-serif"].join(','),
  },
  
  text:{
    primary: '#c1c1c1',
    secondary: '#ffffff'
  }
// inputMultiline:{
//   background: '#192735',
// },
});
export default theme