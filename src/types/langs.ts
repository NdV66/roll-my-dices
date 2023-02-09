import { FateLadder } from './fate';

export const enum AppLangs {
    EN = 'en-EN',
    PL = 'pl-PL',
}

export type TTranslationsLang = {
    label: string;
    value: AppLangs;
};

export type TTranslations = {
    APP_NAME: string;
    AUTHOR: string;
    DEV_INFO: string;

    INFO: string;
    REPO: string;

    CURRENT_LANG: string;
    LANGS: TTranslationsLang[];

    MOD_ERROR: string;
    MOD_PLACEHOLDER: string;
    MOD_TIP: string;
    MOD_INFO: string;
    MOD_REMOVE: string;

    LIGHT: string;
    DARK: string;

    OK: string;
    CANCEL: string;
    CLEAN: string;

    CLASSIC_D20_TAB: string;
    FATE_TAB: string;
    EXPLODING_TAB: string;

    FATE_ROLL: string;
    FATE_LEADER_TITLE: string;
    FATE_LEADER_TITLE_WARNING: string;
    FATE_LEADER_HEADER_VALUE: string;
    FATE_LEADER_HEADER_NAME: string;
    FATE_LEADER: {
        [FateLadder.LEGENDARY]: string;
        [FateLadder.EPIC]: string;
        [FateLadder.FANTASTIC]: string;
        [FateLadder.SUPERB]: string;
        [FateLadder.GREAT]: string;
        [FateLadder.GOOD]: string;
        [FateLadder.FAIR]: string;
        [FateLadder.AVERAGE]: string;
        [FateLadder.MEDIOCRE]: string;
        [FateLadder.POOR]: string;
        [FateLadder.TERRIBLE]: string;
        [FateLadder.NOT_FOUND]: string;
    };

    EXPLODING_ON: string;
    EXPLODING_OFF: string;

    [key: string]: string | any;
};
