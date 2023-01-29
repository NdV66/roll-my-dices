import { AppTheme } from './appTheme';
import { TTranslations } from './langs';
import { TTheme } from './theme';

export type TAppContext = {
    appTheme: AppTheme;
    theme: TTheme;

    translations: TTranslations;
};
