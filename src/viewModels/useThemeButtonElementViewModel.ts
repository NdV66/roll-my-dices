import { useAppContext } from '../context';

export const useThemeButtonElementViewModel = () => {
    const appContext = useAppContext();

    const onChangeTheme = () => {
        appContext.toggleAppTheme();
    };

    return {
        onChangeTheme,
        theme: appContext.theme,
        appTheme: appContext.appTheme,
        translations: appContext.translations,
    };
};
