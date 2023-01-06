import { bufferCount, concatMap, map } from 'rxjs';
import { appLangModel, useAppContext } from '../context';
import { AppLangs, TTranslationsLang } from '../types';
import { useStateWithObservableWithInit } from '../tools';
import { DEFAULTS } from '../defaults';
import { MenuProps } from 'antd';

type ItemType = {
    key: string;
    label: string;
};

const mapToItem = (lang: TTranslationsLang) => ({
    key: lang.value,
    label: lang.label,
});

const itemsSource = appLangModel.translations.pipe(
    map((translations) => translations.LANGS),
    concatMap((el) => el),
    map(mapToItem),
    bufferCount(DEFAULTS.LANGS_AMOUNT),
);

export const useChangeLangElementViewModel = () => {
    const appContext = useAppContext();
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
