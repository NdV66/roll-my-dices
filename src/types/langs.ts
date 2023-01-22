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

    D_4: string;
    D_6: string;
    D_8: string;
    D_10: string;
    D_12: string;
    D_20: string;

    [key: string]: string | TTranslationsLang[];
};
