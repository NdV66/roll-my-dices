import { appRollModel, useAppContext } from '../context';

export const useCleanEverythingModel = () => {
    const { translations, theme } = useAppContext();

    const onCleanAll = () => {
        appRollModel.cleanAll();
    };

    return {
        theme,
        onCleanAll,
        translations,
    };
};
