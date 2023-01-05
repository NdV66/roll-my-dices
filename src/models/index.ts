import { Models } from '../types';
import { AppThemeModel } from './AppThemeModel';
import { ModelsManagerClass } from './ModelsManager';

const MODELS = {
    [Models.APP_THEME]: new AppThemeModel(),
};

export const ModelsManager = new ModelsManagerClass(MODELS);
