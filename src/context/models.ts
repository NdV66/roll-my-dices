import { ModelsManager } from '../models';
import { AppExplodingRollModel } from '../models/AppExplodingRollModel';
import { AppFateRollModel } from '../models/AppFateRollModel';
import { AppLangModel } from '../models/AppLangModel';
import { AppRollModel } from '../models/AppRollModel';
import { AppThemeModel } from '../models/AppThemeModel';

import { MainContentTab, Models } from '../types';

const rollModels = {
    [Models.APP_ROLL]: ModelsManager.getSingleton<AppRollModel>(Models.APP_ROLL),
    [Models.APP_FATE]: ModelsManager.getSingleton<AppFateRollModel>(Models.APP_FATE),
    [Models.APP_EXPLODING]: ModelsManager.getSingleton<AppExplodingRollModel>(Models.APP_EXPLODING),
};

const allModels = {
    [Models.APP_THEME]: ModelsManager.getSingleton<AppThemeModel>(Models.APP_THEME),
    [Models.APP_LANG]: ModelsManager.getSingleton<AppLangModel>(Models.APP_LANG),
    ...rollModels,
};

export const getModelByKey = <T>(key: Models) => allModels[key] as T;

export const getModelByMainTabKey = (tab: MainContentTab) => {
    switch (tab) {
        case MainContentTab.CLASSIC_D20:
            return allModels[Models.APP_ROLL];
        case MainContentTab.FATE:
            return allModels[Models.APP_FATE];
        case MainContentTab.EXPLODING:
            return allModels[Models.APP_EXPLODING];
        default:
            return null;
    }
};
