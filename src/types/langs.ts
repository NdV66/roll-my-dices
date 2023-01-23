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

    [key: string]: string | TTranslationsLang[];
};
