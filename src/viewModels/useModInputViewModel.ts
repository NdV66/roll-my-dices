import { getModelByMainTabKey, useAppContext } from '../context';
import { useStateWithObservableWithInit } from '../tools';
import { useEffect, useMemo } from 'react';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { DEFAULTS } from '../defaults';
import { testIfModIsOk } from '../services';
import { MainContentTab } from '../types';

export const useModInputViewModel = (activeMainTab: MainContentTab) => {
    const { theme, translations } = useAppContext();
    const showInputSource = useMemo(() => new BehaviorSubject<boolean>(DEFAULTS.SHOW_INPUT_MOD_ON_ENTER), []);
    const currentValueSource = useMemo(() => new BehaviorSubject<string>(DEFAULTS.EMPTY_MOD), []);

    const isCurrentValueOkSource = combineLatest([currentValueSource]).pipe(map(([value]) => testIfModIsOk(value)));
    const rollModel = useMemo(() => getModelByMainTabKey(activeMainTab)!, [activeMainTab]);

    const showInput = useStateWithObservableWithInit(showInputSource, DEFAULTS.SHOW_INPUT_MOD_ON_ENTER);
    const currentValue = useStateWithObservableWithInit(currentValueSource, DEFAULTS.EMPTY_MOD);
    const isCurrentValueOk = useStateWithObservableWithInit(isCurrentValueOkSource, true);
    const currentConfirmedMod = useStateWithObservableWithInit<number>(rollModel.rollModSource, DEFAULTS.MOD, [
        activeMainTab,
    ]);

    useEffect(() => {
        currentValueSource.next(DEFAULTS.EMPTY_MOD);
    }, [activeMainTab]);

    const toggleShowInput = () => {
        showInputSource.next(!showInput);
    };

    const updateCurrentValue = (value: string = DEFAULTS.EMPTY_MOD) => {
        const trimmed = value.trim();
        currentValueSource.next(trimmed);
    };

    const onConfirm = () => {
        toggleShowInput();
        rollModel.updateRollMod(parseInt(currentValue, 10) || DEFAULTS.MOD);
    };

    const onRemove = () => {
        currentValueSource.next(DEFAULTS.EMPTY_MOD);
        rollModel.updateRollMod(DEFAULTS.MOD);
    };

    const onCloseModal = () => {
        !isCurrentValueOk && currentValueSource.next(DEFAULTS.EMPTY_MOD);
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
