import React from 'react';
import { ModelsManager } from '../models';
import { AppThemeModel } from '../models/AppThemeModel';
import { tap } from 'rxjs';

import { useStateWithObservable } from '../tools/useStateWithObservable';
import { AppTheme, Models, TAppContext } from '../types';
import { AppContext } from './AppContext';

type Props = React.PropsWithChildren<unknown>;

export const AppContextWrapper: React.FC<Props> = ({ children }) => {
    const appThemeModel = ModelsManager.getModel<AppThemeModel>(Models.APP_THEME);

    const appTheme = useStateWithObservable<AppTheme>(AppTheme.LIGHT, appThemeModel.theme);

    const toggleAppTheme = () => {
        const newTheme = appTheme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK;
        appThemeModel.changeAppTheme(newTheme);
    };

    const value: TAppContext = {
        appTheme,
        toggleAppTheme,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
