import { ThemeButton } from '../elements';
import { useThemeButtonElementViewModel } from '../../viewModels';

export const ThemeButtonElement = () => {
    const { onChangeTheme, appTheme } = useThemeButtonElementViewModel();

    return <ThemeButton onClick={onChangeTheme} theme={appTheme} />;
};
