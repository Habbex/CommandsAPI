import { createMuiTheme,responsiveFontSizes } from '@material-ui/core/styles';

const defaultTheme= {
    //Default Theme
}

export const CreateDefaultTheme= (overrides={})=>
responsiveFontSizes(createMuiTheme({
    ...defaultTheme,
    ...overrides
})
);

