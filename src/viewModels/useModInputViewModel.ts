import { appRollModel, useAppContext } from '../context';
import { useStateWithObservableWithInit } from '../tools';
import { useMemo } from 'react';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { DEFAULTS } from '../defaults';
import { testIfModIsOk } from '../services';

const INITIAL_MOD = '';

export const useModInputViewModel = () => {
    const { theme, translations } = useAppContext();
    const showInputSource = useMemo(() => new BehaviorSubject<boolean>(DEFAULTS.SHOW_INPUT_MOD_ON_ENTER), []);
    const currentValueSource = useMemo(() => new BehaviorSubject<string>(INITIAL_MOD), []);
    const isCurrentValueOkSource = useMemo(
        () => combineLatest([currentValueSource]).pipe(map(([value]) => testIfModIsOk(value))),
        [],
    );

    const showInput = useStateWithObservableWithInit(showInputSource, DEFAULTS.SHOW_INPUT_MOD_ON_ENTER);
    const currentValue = useStateWithObservableWithInit(currentValueSource, INITIAL_MOD);
    const isCurrentValueOk = useStateWithObservableWithInit(isCurrentValueOkSource, true);
    const currentConfirmedMod = useStateWithObservableWithInit<number>(appRollModel.rollModSource, DEFAULTS.MOD);

    const toggleShowInput = () => {
        showInputSource.next(!showInput);
    };

    const updateCurrentValue = (value: string = INITIAL_MOD) => {
        const trimmed = value.trim();
        currentValueSource.next(trimmed);
    };

    const onConfirm = () => {
        toggleShowInput();
        appRollModel.updateRollMod(parseInt(currentValue, 10) || DEFAULTS.MOD);
    };

    const onRemove = () => {
        currentValueSource.next(INITIAL_MOD);
        appRollModel.updateRollMod(DEFAULTS.MOD);
    };

    const onCloseModal = () => {
        currentValueSource.next(INITIAL_MOD);
        toggleShowInput();
    };

    return {
        theme,
        translations,
        toggleShowInput,
        showInput,
        updateCurrentValue,
        currentValue,
        onConfirm,
        onRemove,
        isCurrentValueOk,
        currentConfirmedMod,
        onCloseModal,
    };
};
