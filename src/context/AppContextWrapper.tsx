import React, { useEffect } from 'react';
import { DEFAULTS } from '../defaults';
import { AppLangModel } from '../models/AppLangModel';
import { AppThemeModel } from '../models/AppThemeModel';
import { useStateWithObservableWithInit } from '../tools';
import { Models, TAppContext, TTheme, TTranslations } from '../types';
import { AppContext } from './AppContext';
import { getModelByKey } from './models';

type Props = React.PropsWithChildren<unknown>;

export const AppContextWrapper: React.FC<Props> = ({ children }) => {
    const appLangModel = getModelByKey<AppLangModel>(Models.APP_LANG);
    const appThemeModel = getModelByKey<AppThemeModel>(Models.APP_THEME);
    const theme = useStateWithObservableWithInit<TTheme>(appThemeModel.theme, DEFAULTS.THEME);
    const translations = useStateWithObservableWithInit<TTranslations>(appLangModel.translations, {} as TTranslations);

    useEffect(() => {
        appThemeModel.setDefaultValue();
    }, []);

    useEffect(() => {
        appLangModel.setDefaultValue();
    }, []);

    const value: TAppContext = {
        theme,
        translations,
    };

    return (
        <AppContext.Provider value={value}>
            <>{children}</>
        </AppContext.Provider>
    );
};
