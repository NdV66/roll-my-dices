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

    CURRENT_LANG: string;
    LANGS: TTranslationsLang[];

    LIGHT: string;
    DARK: string;

    D_4: string;
    D_6: string;
    D_8: string;
    D_10: string;
    D_12: string;
    D_20: string;

    [key: string]: string | TTranslationsLang[];
};
