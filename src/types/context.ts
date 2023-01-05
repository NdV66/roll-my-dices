import { AppTheme } from './appTheme';
import { AppLangs, TTranslations } from './langs';

export type TAppContext = {
    appTheme: AppTheme;
    toggleAppTheme: () => void;

    translations: TTranslations;
    changeAppLang: (lang: AppLangs) => void;
};
