import { appRollModel, useAppContext } from '../context';
import { useStateWithObservableWithInit } from '../tools';
import { useMemo } from 'react';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { DEFAULTS } from '../defaults';

const INITIAL_MOD = '' + DEFAULTS.MOD;

const REGEXP = /^(\+|-){0,1}\d+$/;

const testIfModIsOk = (value: string) => REGEXP.test(value);

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

    const updateCurrentValue = (value: string) => {
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
    };
};
