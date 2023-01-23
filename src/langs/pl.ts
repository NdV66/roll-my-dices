import { TTranslations } from '../types';
import { LANGS } from './langs';

export const TEXTS_PL: TTranslations = {
    APP_NAME: 'Roll My Dices',
    AUTHOR: 'Marta Zażlak',
    DEV_INFO: 'Uwaga, strona jeszcze się robi :)',

    INFO: 'Kliknij jedną z kostek powyżej i zobacz, co się wylosowało. Powodzenia!',
    REPO: 'Zerknij na repozytorium',

    CURRENT_LANG: 'Polski',
    ...LANGS,

    MOD_ERROR: 'Wpisz wartość w poprawnym formacie, np. -6, 9, +12',
    MOD_PLACEHOLDER: '-6, +20, 7 itp.',
    MOD_TIP: 'Uwaga! Po dodaniu modyfikatora, obecny rzut zostanie przeliczony.',
    MOD_INFO: 'Modyfikator rzutu',
    MOD_REMOVE: 'Usuń',

    LIGHT: 'jasny',
    DARK: 'ciemny',

    OK: 'OK',
    CANCEL: 'Zamknij',
    CLEAN: 'Wyczyść wszystko',

    D_4: 'k4',
    D_6: 'k6',
    D_8: 'k8',
    D_10: 'k10',
    D_12: 'k12',
    D_20: 'k20',

    CLASSIC_D20_TAB: 'Kostki klasyczne (d20)',
    FATE_TAB: 'Kostki Fate',
};
