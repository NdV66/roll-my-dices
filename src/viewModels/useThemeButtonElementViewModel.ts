import { getModelByKey, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { AppThemeModel } from '../models/AppThemeModel';
import { getNewAppTheme } from '../services';
import { useStateWithObservableWithInit } from '../tools';
import { Models } from '../types';

export const useThemeButtonElementViewModel = () => {
    const appContext = useAppContext();
    const appThemeModel = getModelByKey<AppThemeModel>(Models.APP_THEME);

    const appTheme = useStateWithObservableWithInit(appThemeModel.appTheme, DEFAULTS.APP_THEME);

    const onChangeTheme = () => {
        const newTheme = getNewAppTheme(appTheme);
        appThemeModel.changeAppTheme(newTheme);
    };

    return {
        onChangeTheme,
        theme: appContext.theme,
        appTheme,
        translations: appContext.translations,
    };
};
