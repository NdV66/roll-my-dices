import { useAppContext } from '../context';

export const usePageViewModel = () => {
    const { theme, translations } = useAppContext();

    const preparedTheme = {
        token: {
            colorPrimary: theme.primary,
            colorBgBase: theme.background,
            fontSize: theme.fontSize,
            colorTextBase: theme.primary,
            colorInfo: theme.primary,
            colorWarning: theme.accent,
            themeError: theme.accent,
        },
    };

    return {
        antdTheme: preparedTheme,
        translations,
        theme,
    };
};
