import { combineLatest, map } from 'rxjs';
import { appRollModel, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { useStateWithObservableWithInit } from '../tools';

export const useCleanEverythingModel = () => {
    const { translations, theme } = useAppContext();

    const disabledSource = combineLatest([appRollModel.rollModSource, appRollModel.extendedRollSource]).pipe(
        map(([mod, extendedRoll]) => mod === DEFAULTS.MOD && extendedRoll === null),
    );

    const disabled = useStateWithObservableWithInit<boolean>(disabledSource, true);

    const onCleanAll = () => {
        appRollModel.cleanAll();
    };

    return {
        theme,
        onCleanAll,
        translations,
        disabled,
    };
};
