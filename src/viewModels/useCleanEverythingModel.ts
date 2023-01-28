import { useMemo } from 'react';
import { combineLatest, map } from 'rxjs';
import { getModelByMainTabKey, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { useStateWithObservableWithInit } from '../tools';
import { MainContentTab } from '../types';

export const useCleanEverythingModel = (activeMainTab: MainContentTab) => {
    const rollModel = useMemo(() => getModelByMainTabKey(activeMainTab)!, [activeMainTab]);

    const { translations, theme } = useAppContext();
    const disabledSource = combineLatest([rollModel.rollModSource, rollModel.extendedRollSource]).pipe(
        map(([mod, extendedRoll]) => mod === DEFAULTS.MOD && extendedRoll === null),
    );
    const disabled = useStateWithObservableWithInit<boolean>(disabledSource, true, [rollModel]);

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
