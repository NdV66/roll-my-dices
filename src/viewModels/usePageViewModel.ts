import { useAppContext } from '../context';
import { AppTheme } from '../types';

export const usePageViewModel = () => {
    const { theme, translations, appTheme } = useAppContext();

    const preparedTheme = {
        token: {
            colorPrimary: theme.primary,
            colorBgBase: theme.background,
            fontSize: theme.fontSize,
            colorTextBase: theme.primary,
            colorInfo: theme.primary,
            colorWarning: appTheme === AppTheme.LIGHT ? theme.accent : theme.primary,
            themeError: theme.accent,
        },
    };

    return {
        antdTheme: preparedTheme,
        translations,
        theme,
    };
};
