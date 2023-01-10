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
    MOD_TIP: 'Po dodaniu modyfikatora, obecny rzut zostanie usunięty.',
    MOD_INFO: 'Dodaj modyfikator rzutu',

    LIGHT: 'jasny',
    DARK: 'ciemny',

    D_4: 'k4',
    D_6: 'k6',
    D_8: 'k8',
    D_10: 'k10',
    D_12: 'k12',
    D_20: 'k20',
};
