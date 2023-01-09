import { TTranslations } from '../types';
import { LANGS } from './langs';

export const TEXTS_EN: TTranslations = {
    APP_NAME: 'Roll My Dices',
    AUTHOR: 'Marta Zażlak',
    DEV_INFO: 'Warning, page still in progress :)',
    INFO: 'Click any dice to get the result. Good luck!',

    CURRENT_LANG: 'English',
    ...LANGS,

    LIGHT: 'light',
    DARK: 'dark',

    D_4: 'd4',
    D_6: 'd6',
    D_8: 'd8',
    D_10: 'd10',
    D_12: 'd12',
    D_20: 'd20',
};
