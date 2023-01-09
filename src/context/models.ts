import { ModelsManager } from '../models';
import { AppLangModel } from '../models/AppLangModel';
import { AppRollModel } from '../models/AppRollModel';
import { AppThemeModel } from '../models/AppThemeModel';

import { Models } from '../types';

export const appThemeModel = ModelsManager.getSingleton<AppThemeModel>(Models.APP_THEME);
export const appLangModel = ModelsManager.getSingleton<AppLangModel>(Models.APP_LANG);
export const appRollModel = ModelsManager.getSingleton<AppRollModel>(Models.APP_ROLL);
