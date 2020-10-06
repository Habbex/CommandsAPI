import normal from './default-theme';
import vapor from './vapor-theme';

const themes={
    normal,
    vapor,
}

export default function getTheme(theme){
    return themes[theme];
}