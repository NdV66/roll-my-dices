import { FateLeader } from './fate';

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
        [FateLeader.LEGENDARY]: string;
        [FateLeader.EPIC]: string;
        [FateLeader.FANTASTIC]: string;
        [FateLeader.SUPERB]: string;
        [FateLeader.GREAT]: string;
        [FateLeader.GOOD]: string;
        [FateLeader.FAIR]: string;
        [FateLeader.AVERAGE]: string;
        [FateLeader.MEDIOCRE]: string;
        [FateLeader.POOR]: string;
        [FateLeader.TERRIBLE]: string;
        [FateLeader.NOT_FOUND]: string;
    };

    EXPLODING_ON: string;
    EXPLODING_OFF: string;

    [key: string]: string | any;
};
