import { combineLatest, map } from 'rxjs';
import { appRollModel, getModelByMainTabKey, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { useStateWithObservableWithInit } from '../tools';
import { MainContentTab } from '../types';

export const useCleanEverythingModel = (activeMainTab: MainContentTab) => {
    const { translations, theme } = useAppContext();

    const disabledSource = combineLatest([appRollModel.rollModSource, appRollModel.extendedRollSource]).pipe(
        map(([mod, extendedRoll]) => mod === DEFAULTS.MOD && extendedRoll === null),
    );

    const disabled = useStateWithObservableWithInit<boolean>(disabledSource, true);

    const onCleanAll = () => {
        const model = getModelByMainTabKey(activeMainTab);
        model?.cleanAll();
    };

    return {
        theme,
        onCleanAll,
        translations,
        disabled,
    };
};
