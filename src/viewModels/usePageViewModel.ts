import { getModelByKey, useAppContext } from '../context';
import { AppThemeModel } from '../models/AppThemeModel';
import { useStateWithObservable } from '../tools';
import { AppTheme, Models } from '../types';

export const usePageViewModel = () => {
    const appThemeModel = getModelByKey<AppThemeModel>(Models.APP_THEME);
    const { theme, translations } = useAppContext();
    const appTheme = useStateWithObservable(appThemeModel.appTheme);

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
        appTheme,
    };
};
