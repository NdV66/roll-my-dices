import React from 'react';
import { DEFAULTS } from '../defaults';
import { ModelsManager } from '../models';
import { AppLangModel } from '../models/AppLangModel';
import { AppThemeModel } from '../models/AppThemeModel';
import { getNewAppTheme } from '../services';
import { useStateWithObservableWithInit } from '../tools';
import { AppLangs, AppTheme, Models, TAppContext, TTheme, TTranslations } from '../types';
import { AppContext } from './AppContext';

type Props = React.PropsWithChildren<unknown>;

export const appThemeModel = ModelsManager.getSingleton<AppThemeModel>(Models.APP_THEME);
export const appLangModel = ModelsManager.getSingleton<AppLangModel>(Models.APP_LANG);

export const AppContextWrapper: React.FC<Props> = ({ children }) => {
    const theme = useStateWithObservableWithInit<TTheme>(appThemeModel.theme, DEFAULTS.THEME);
    const appTheme = useStateWithObservableWithInit<AppTheme>(appThemeModel.appTheme, DEFAULTS.APP_THEME);

    const appLang = useStateWithObservableWithInit<AppLangs>(appLangModel.appLang, DEFAULTS.LANG);
    const appTranslations = useStateWithObservableWithInit<TTranslations>(
        appLangModel.translations,
        {} as TTranslations,
    );

    const toggleAppTheme = () => {
        const newTheme = getNewAppTheme(appTheme);
        appThemeModel.changeAppTheme(newTheme);
    };

    const value: TAppContext = {
        appTheme,
        theme,
        toggleAppTheme,

        appLang,
        translations: appTranslations,
        changeAppLang: appLangModel.changeAppLang,
    };

    return (
        <AppContext.Provider value={value}>
            <>{children}</>
        </AppContext.Provider>
    );
};
