import React, { useEffect } from 'react';
import { DEFAULTS } from '../defaults';
import { useStateWithObservableWithInit } from '../tools';
import { AppTheme, TAppContext, TTheme, TTranslations } from '../types';
import { AppContext } from './AppContext';
import { appLangModel, appThemeModel } from './models';

type Props = React.PropsWithChildren<unknown>;

export const AppContextWrapper: React.FC<Props> = ({ children }) => {
    const theme = useStateWithObservableWithInit<TTheme>(appThemeModel.theme, DEFAULTS.THEME);
    const appTheme = useStateWithObservableWithInit<AppTheme>(appThemeModel.appTheme, DEFAULTS.APP_THEME);

    const translations = useStateWithObservableWithInit<TTranslations>(appLangModel.translations, {} as TTranslations);

    useEffect(() => {
        appThemeModel.setDefaultValue();
    }, []);

    useEffect(() => {
        appLangModel.setDefaultValue();
    }, []);

    const value: TAppContext = {
        appTheme,
        theme,
        translations,
    };

    return (
        <AppContext.Provider value={value}>
            <>{children}</>
        </AppContext.Provider>
    );
};
