import { useAppContext } from '../context';

export const useChangeLangElementViewModel = () => {
    const appContext = useAppContext();

    return {
        translations: appContext.translations,
        changeAppLang: appContext.changeAppLang,
    };
};
