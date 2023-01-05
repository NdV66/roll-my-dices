export const enum AppLangs {
    EN = 'en-EN',
    PL = 'pl-PL',
}

export type TTranslationsLang = {
    label: string;
    value: AppLangs;
};

export type TTranslations = {
    CURRENT_LANG: string;

    LANGS: TTranslationsLang[];

    D_20: string;
};
