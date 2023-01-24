import { TTranslations } from '../types';
import { LANGS } from './langs';

export const TEXTS_EN: TTranslations = {
    APP_NAME: 'Roll My Dices',
    AUTHOR: 'Marta Zażlak',
    DEV_INFO: 'Warning, page still in progress :)',
    INFO: 'Click any dice above to see the result. Good luck!',
    REPO: 'See repo here',

    CURRENT_LANG: 'English',
    ...LANGS,

    MOD_ERROR: 'Enter correct a value, for example:. -6, 9, +12',
    MOD_PLACEHOLDER: '-6, +20, 7 etc.',
    MOD_TIP: 'Warning! When the mod is added, the current roll is recalculated.',
    MOD_INFO: 'Roll mod',
    MOD_REMOVE: 'Remove',

    LIGHT: 'light',
    DARK: 'dark',

    OK: 'OK',
    CANCEL: 'Cancel',
    CLEAN: 'Clean everything',

    CLASSIC_D20_TAB: 'Classic (d20)',
    FATE_TAB: 'Fate',

    FATE_ROLL: 'Roll',
};
