import { bufferCount, concatMap, map, identity } from 'rxjs';
import { appLangModel, useAppContext } from '../context';
import { AppLangs, TTranslationsLang } from '../types';
import { useStateWithObservableWithInit } from '../tools';
import { DEFAULTS } from '../defaults';
import { MenuProps } from 'antd';
import { useMemo } from 'react';

type ItemType = {
    key: string;
    label: string;
};

const mapToItem = (lang: TTranslationsLang) => ({
    key: lang.value,
    label: lang.label,
});

export const useChangeLangElementViewModel = () => {
    const appContext = useAppContext();

    const itemsSource = useMemo(
        () =>
            appLangModel.translations.pipe(
                map((translations) => translations.LANGS),
                concatMap(identity),
                map(mapToItem),
                bufferCount(DEFAULTS.LANGS_AMOUNT),
            ),
        [],
    );

    const items = useStateWithObservableWithInit<ItemType[]>(itemsSource, []);

    const onClickItem: MenuProps['onClick'] = (e) => {
        appContext.changeAppLang(e.key as AppLangs);
    };

    return {
        translations: appContext.translations,
        onClickItem,
        appLang: appContext.appLang,
        items,
        theme: appContext.theme,
    };
};
