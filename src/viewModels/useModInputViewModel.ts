import { appRollModel, useAppContext } from '../context';
import { useStateWithObservableWithInit } from '../tools';
import { useMemo } from 'react';
import { BehaviorSubject } from 'rxjs';
import { DEFAULTS } from '../defaults';

export const useModInputViewModel = () => {
    const { theme, translations } = useAppContext();
    const showInputSource = useMemo(() => new BehaviorSubject<boolean>(DEFAULTS.SHOW_INPUT_MOD_ON_ENTER), []);
    const currentValueSource = useMemo(() => new BehaviorSubject<number>(0), []);

    const showInput = useStateWithObservableWithInit(showInputSource, DEFAULTS.SHOW_INPUT_MOD_ON_ENTER);
    const currentValue = useStateWithObservableWithInit(currentValueSource, 0);

    const toggleShowInput = () => {
        showInputSource.next(!showInput);
    };

    const updateCurrentValue = (value: number) => {
        currentValueSource.next(value);
    };

    const onConfirm = () => {
        toggleShowInput();
        appRollModel.updateRollMod(currentValue);
    };

    return {
        theme,
        translations,
        toggleShowInput,
        showInput,
        updateCurrentValue,
        currentValue,
        onConfirm,
    };
};
