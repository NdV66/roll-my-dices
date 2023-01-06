import { ThemeButton } from '../elements';
import { useThemeButtonElementViewModel } from '../../viewModels';
import { DEFAULTS } from '../../defaults';

export const ThemeButtonElement = () => {
    const { onChangeTheme, appTheme, translations } = useThemeButtonElementViewModel();
    const isDefaultTheme = appTheme === DEFAULTS.APP_THEME;

    return (
        <ThemeButton
            onChange={onChangeTheme}
            checked={isDefaultTheme}
            checkedChildren={translations.LIGHT}
            unCheckedChildren={translations.DARK}
        />
    );
};
