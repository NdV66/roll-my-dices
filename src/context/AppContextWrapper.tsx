import React from 'react';
import { ModelsManager } from '../models';
import { AppLangModel } from '../models/AppLangModel';
import { AppThemeModel } from '../models/AppThemeModel';

import { useStateWithObservable } from '../tools/useStateWithObservable';
import { AppTheme, Models, TAppContext } from '../types';
import { AppContext } from './AppContext';

type Props = React.PropsWithChildren<unknown>;

export const AppContextWrapper: React.FC<Props> = ({ children }) => {
    const appThemeModel = ModelsManager.getSingleton<AppThemeModel>(Models.APP_THEME);
    const appLangModel = ModelsManager.getSingleton<AppLangModel>(Models.APP_LANG);

    const appTheme = useStateWithObservable<AppTheme>(AppTheme.LIGHT, appThemeModel.appTheme);

    const toggleAppTheme = () => {
        const newTheme = appTheme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK;
        appThemeModel.changeAppTheme(newTheme);
    };

    const value: TAppContext = {
        appTheme,
        toggleAppTheme,

        translations: {} as any, //TODO
        changeAppLang: appLangModel.changeAppLang,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
