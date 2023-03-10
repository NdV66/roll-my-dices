import { FateLadder, TTranslations } from '../types';
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

    CLASSIC_D20_TAB: 'Kostki klasyczne (d20)',
    FATE_TAB: 'Kostki Fate',
    EXPLODING_TAB: 'Wybuchające kostki',

    FATE_ROLL: 'Rzucaj',
    FATE_LEADER_TITLE: 'Drabinka Fate',
    FATE_LEADER_TITLE_WARNING: 'Uwaga, wynik rzutu poza zakresem!',
    FATE_LEADER_HEADER_VALUE: 'Wartość',
    FATE_LEADER_HEADER_NAME: 'Nazwa',
    FATE_LEADER: {
        [FateLadder.LEGENDARY]: 'legendarny',
        [FateLadder.EPIC]: 'heroiczny',
        [FateLadder.FANTASTIC]: 'fantastyczny',
        [FateLadder.SUPERB]: 'wybitny',
        [FateLadder.GREAT]: 'świetny',
        [FateLadder.GOOD]: 'dobry',
        [FateLadder.FAIR]: 'niezły',
        [FateLadder.AVERAGE]: 'przeciętny',
        [FateLadder.MEDIOCRE]: 'słaby',
        [FateLadder.POOR]: 'mierny',
        [FateLadder.TERRIBLE]: 'fatalny',
        [FateLadder.NOT_FOUND]: 'Poza skalą',
    },

    EXPLODING_ON: 'Wybuchające kostki',
    EXPLODING_OFF: 'Normalne kostki',
};
