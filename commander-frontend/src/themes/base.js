import {CreateDefaultTheme} from './default-theme';
import {CreateVaporTheme} from './vapor-theme';

const vapor= CreateVaporTheme();
const normal= CreateDefaultTheme();
const themes={
    normal,
    vapor,
}

export default function getTheme(theme){
    return themes[theme];
}