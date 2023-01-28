import { FateLeader, TTranslations } from '../types';
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

    FATE_ROLL: 'Rzucaj',
    FATE_LEADER_TITLE: 'Drabinka Fate',
    FATE_LEADER_HEADER_VALUE: 'Wartość',
    FATE_LEADER_HEADER_NAME: 'Nazwa',
    FATE_LEADER: {
        [FateLeader.LEGENDARY]: 'legendarny',
        [FateLeader.EPIC]: 'heroiczny',
        [FateLeader.FANTASTIC]: 'fantastyczny',
        [FateLeader.SUPERB]: 'wybitny',
        [FateLeader.GREAT]: 'świetny',
        [FateLeader.GOOD]: 'dobry',
        [FateLeader.FAIR]: 'niezły',
        [FateLeader.AVERAGE]: 'przeciętny',
        [FateLeader.MEDIOCRE]: 'słaby',
        [FateLeader.POOR]: 'mierny',
        [FateLeader.TERRIBLE]: 'fatalny',
        [FateLeader.NOT_FOUND]: 'Poza skalą',
    },
};
