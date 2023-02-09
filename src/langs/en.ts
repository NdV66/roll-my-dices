import { FateLadder, TTranslations } from '../types';
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
    EXPLODING_TAB: 'Exploding dice',

    FATE_ROLL: 'Roll',
    FATE_LEADER_TITLE: 'Fate ladder',
    FATE_LEADER_TITLE_WARNING: 'Warning, the roll result is out of scope!',
    FATE_LEADER_HEADER_VALUE: 'Value',
    FATE_LEADER_HEADER_NAME: 'Name',
    FATE_LEADER: {
        [FateLadder.LEGENDARY]: 'legendary',
        [FateLadder.EPIC]: 'epic',
        [FateLadder.FANTASTIC]: 'fantastic',
        [FateLadder.SUPERB]: 'superb',
        [FateLadder.GREAT]: 'great',
        [FateLadder.GOOD]: 'good',
        [FateLadder.FAIR]: 'fair',
        [FateLadder.AVERAGE]: 'average',
        [FateLadder.MEDIOCRE]: 'mediocre',
        [FateLadder.POOR]: 'poor',
        [FateLadder.TERRIBLE]: 'terrible',
        [FateLadder.NOT_FOUND]: 'not found',
    },

    EXPLODING_ON: 'Explosion dice',
    EXPLODING_OFF: 'Normal dice',
};
