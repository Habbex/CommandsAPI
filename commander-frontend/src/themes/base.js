import {CreateDefaultTheme} from './default-theme';
import {CreateDarkTheme} from './dark-theme';

const dark= CreateDarkTheme();
const normal= CreateDefaultTheme();
const themes={
    normal,
    dark,
}

export default function getTheme(theme){
    return themes[theme];
}