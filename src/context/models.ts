import { ModelsManager } from '../models';
import { AppFateRollModel } from '../models/AppFateRollModel';
import { AppLangModel } from '../models/AppLangModel';
import { AppRollModel } from '../models/AppRollModel';
import { AppThemeModel } from '../models/AppThemeModel';

import { MainContentTab, Models } from '../types';

const allModels = {
    [Models.APP_THEME]: ModelsManager.getSingleton<AppThemeModel>(Models.APP_THEME),
    [Models.APP_LANG]: ModelsManager.getSingleton<AppLangModel>(Models.APP_LANG),
    [Models.APP_ROLL]: ModelsManager.getSingleton<AppRollModel>(Models.APP_ROLL),
    [Models.APP_FATE]: ModelsManager.getSingleton<AppFateRollModel>(Models.APP_FATE),
};

export const getModelByKey = <T>(key: Models) => allModels[key] as T;

export const getModelByMainTabKey = (tab: MainContentTab) => {
    if (tab === MainContentTab.CLASSIC_D20) {
        return allModels[Models.APP_ROLL];
    } else if (tab === MainContentTab.FATE) {
        return allModels[Models.APP_FATE];
    }

    return null;
};
