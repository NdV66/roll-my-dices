import { GenericSingletonManager } from '../tools';
import { Models } from '../types';
import { AppFateRollModel } from './AppFateRollModel';
import { AppLangModel } from './AppLangModel';
import { AppRollModel } from './AppRollModel';
import { AppThemeModel } from './AppThemeModel';
import { AppExplodingRollModel } from './AppExplodingRollModel';

const MODELS = {
    [Models.APP_THEME]: new AppThemeModel(),
    [Models.APP_LANG]: new AppLangModel(),
    [Models.APP_ROLL]: new AppRollModel(),
    [Models.APP_FATE]: new AppFateRollModel(),
    [Models.APP_EXPLODING]: new AppExplodingRollModel(),
};

export const ModelsManager = new GenericSingletonManager(MODELS);
