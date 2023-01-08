import React, { useEffect } from 'react';
import { DEFAULTS } from '../defaults';
import { getNewAppTheme } from '../services';
import { useStateWithObservableWithInit } from '../tools';
import { AppLangs, AppTheme, TAppContext, TTheme, TTranslations } from '../types';
import { AppContext } from './AppContext';
import { appLangModel, appThemeModel } from './models';

type Props = React.PropsWithChildren<unknown>;

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

    useEffect(() => {
        appThemeModel.setDefaultValue();
    }, []);

    useEffect(() => {
        appLangModel.setDefaultValue();
    }, []);

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
