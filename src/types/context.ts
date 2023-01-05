import { AppTheme } from './appTheme';
import { AppLangs, TTranslations } from './langs';
import { TTheme } from './theme';

export type TAppContext = {
    appTheme: AppTheme;
    theme: TTheme;
    toggleAppTheme: () => void;

    appLang: AppLangs;
    translations: TTranslations;
    changeAppLang: (lang: AppLangs) => void;
};
