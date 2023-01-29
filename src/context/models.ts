import { ModelsManager } from '../models';
import { AppFateRollModel } from '../models/AppFateRollModel';
import { AppLangModel } from '../models/AppLangModel';
import { AppRollModel } from '../models/AppRollModel';
import { AppThemeModel } from '../models/AppThemeModel';

import { MainContentTab, Models } from '../types';

export const appThemeModel = ModelsManager.getSingleton<AppThemeModel>(Models.APP_THEME);
export const appLangModel = ModelsManager.getSingleton<AppLangModel>(Models.APP_LANG);
export const appRollModel = ModelsManager.getSingleton<AppRollModel>(Models.APP_ROLL);
export const appFateRollModel = ModelsManager.getSingleton<AppFateRollModel>(Models.APP_FATE);

const allModels = {
    [Models.APP_THEME]: ModelsManager.getSingleton<AppThemeModel>(Models.APP_THEME),
    [Models.APP_LANG]: ModelsManager.getSingleton<AppLangModel>(Models.APP_LANG),
    [Models.APP_ROLL]: ModelsManager.getSingleton<AppRollModel>(Models.APP_ROLL),
    [Models.APP_FATE]: ModelsManager.getSingleton<AppFateRollModel>(Models.APP_FATE),
};

export const getModelByKey = <T>(key: Models) => allModels[key] as T;

export const getModelByMainTabKey = (tab: MainContentTab) => {
    if (tab === MainContentTab.CLASSIC_D20) {
        return appRollModel;
    } else if (tab === MainContentTab.FATE) {
        return appFateRollModel;
    }

    return null;
};
