import React from 'react';
import { DEFAULTS } from '../defaults';
import { ModelsManager } from '../models';
import { AppLangModel } from '../models/AppLangModel';
import { AppThemeModel } from '../models/AppThemeModel';
import { getNewAppTheme } from '../services';
import { useStateWithObservableWithInit } from '../tools';
import { AppTheme, Models, TAppContext, TTranslations } from '../types';
import { AppContext } from './AppContext';

type Props = React.PropsWithChildren<unknown>;

export const AppContextWrapper: React.FC<Props> = ({ children }) => {
    const appThemeModel = ModelsManager.getSingleton<AppThemeModel>(Models.APP_THEME);
    const appLangModel = ModelsManager.getSingleton<AppLangModel>(Models.APP_LANG);

    const appTheme = useStateWithObservableWithInit<AppTheme>(appThemeModel.appTheme, DEFAULTS.THEME);

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
        toggleAppTheme,

        translations: appTranslations,
        changeAppLang: appLangModel.changeAppLang,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
