import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// Normal or default theme
let theme = createMuiTheme({
  typography: {
    fontFamily: "Cairo,Robot,sans-serif",
    fontWeight: 700,
    h1: {
      fontSize: 42,
      lineHeight: 1.33
    },
    h2: {
      fontSize: 34,
      lineHeight: 1.4
    },
    h3: {
      fontSize: 24,
      lineHeight: 1.67
    },
    h4: {
      fontFamily: "Robot,sans-serif",
      fontWeight: 600,
      fontSize: 20,
      lineHeight: 1.6
    },
    h5: {
      fontFamily: "Robot,sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.33
    },
    subtitle1: {
      fontFamily: "Robot,sans-serif",
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.33
    },
    subtitle2: {
      fontFamily: "Robot,sans-serif",
      fontWeight: 600,
      fontSize: 20,
      lineHeight: 1.2
    },
    body1: {
      fontFamily: "Robot,sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.5
    },
    body2: {
      fontFamily: "Robot,sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.72
    },
    button: {
      fontFamily: "Robot,sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.0,
      textTransform:"revert"
    },
    caption: {
      fontFamily: "Robot,sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.33
    },
    overline: {
      fontFamily: "Robot,sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.5,
      textTransform: "uppercase"
    }
  },
  breakpoints: {
    values: {
      xs: 576,
      sm: 768,
      md: 1024,
      lg: 1200,
      xl: 1920,
      mobile: 576,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    }
  },
  palette: {
    type: "light",
    primary: {
      main: '#152935',// YankeesBlue
      light: '#00C3EA',// CyanProgress
      dark: '#005075' //  DarkImperialBlue
    },
    secondary: {
      main: '#FC4E3D', // OrgeOdor
      light: '#B9E6F6' // Diamond
    },
    error: {
      main: '#D82829', //MaximumRed
      dark: '#711423', // Prune
      light: '#FC4E3D' // OrgeOdor
    },
    warning: {
      main: '#FDB927' // Crayola
    },
    info: {
      main: '#0D6C80' // BlueSapphire
    },
    success: {
      main: '#09822A', // LaSalleGreen
      light: '#00AA00' // IslamicGreen
    },
    background: {
      default: '#F2F5F8', // AzureWhite
      paper: '#ffffff' // white
    },
    text: {
      primary: '#152935', // YankeesBlue
      secondary: '#5A6872', //Cadet
      disabled: '#9DA6AD', // QuickSilver
      hint: '#C1C1C4', // SilverSand
    },
    divider: '#5A6872',// Cadet
    titleBar: {
      main: '#152935',
    },
  },
  //Overrides default theme for button with variant contained
  overrides: {
    MuiTableCell:{
      head:{
        color:'#00C3EA'
      }
    },
    MuiOutlinedInput:{
      root:{
        '& fieldset':{
          borderColor:'#0090D1'
        },
        '&:hover fieldset': {
          borderColor: '#00C3EA !important',
        },  
      }
    },
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule contained + primary color!
      containedPrimary: {
          // Some CSS
          background: 'linear-gradient(45deg, #0090D1 30%, #00C3EA 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
      },
      // Name of the rule outlined + secondary color!
      outlinedSecondary: {
          // Some CSS
          borderRadius: 3,
          background: 'white',
          borderColor: '#0090D1',
          color: '#0090D1'
        }     
      },
    },
})
theme = responsiveFontSizes(theme);
export default theme