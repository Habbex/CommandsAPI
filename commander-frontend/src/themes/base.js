import dark from './dark-theme';
import normal from './normal-theme';

const themes={
    normal,
    dark,
}

export default function getTheme(theme){
    return themes[theme];
}