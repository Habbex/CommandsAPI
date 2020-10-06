import { createMuiTheme,responsiveFontSizes } from '@material-ui/core/styles';

//Default Theme
let theme = createMuiTheme({}); 
theme = responsiveFontSizes(theme);
export default theme