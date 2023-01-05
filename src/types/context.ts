import { AppTheme } from './appTheme';

export type TAppContext = {
    appTheme: AppTheme;
    toggleAppTheme: () => void;
};
