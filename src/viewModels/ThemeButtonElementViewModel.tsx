import { useAppContext } from '../context';

export const useThemeButtonElementViewModel = () => {
    const appContext = useAppContext();

    const onChangeTheme = () => {
        appContext.toggleAppTheme();
    };

    return {
        onChangeTheme,
        appTheme: appContext.appTheme,
    };
};
