import { useMemo } from 'react';
import { BehaviorSubject, firstValueFrom, map } from 'rxjs';
import { getModelByKey, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { AppRollModel } from '../models/AppRollModel';
import { mapRollToDice } from '../services';
import { useStateWithObservableWithInit } from '../tools';
import { DiceTypes, Models, TRollButtonData, TRollExtended, TRollInfo } from '../types';

const prepareDisplayValue = (roll: TRollExtended | null) =>
    roll
        ? {
              ...roll,
              displayValue: mapRollToDice(roll!.dice, roll!.roll),
          }
        : null;

export const useRollsElementViewModel = (diceOrder: DiceTypes[]) => {
    const { translations, theme } = useAppContext();

    const _isExplodingSource = useMemo(() => new BehaviorSubject<boolean>(false), []);
    const isExploding = useStateWithObservableWithInit(_isExplodingSource, false);

    const appRollModel = getModelByKey<AppRollModel>(Models.APP_ROLL);
    const rollInfoSource = useMemo(() => appRollModel.extendedRollSource.pipe(map(prepareDisplayValue)), []);
    const rollInfo = useStateWithObservableWithInit<TRollInfo | null>(rollInfoSource, DEFAULTS.EMPTY_ROLL_RESULT);

    const rollsElementData: TRollButtonData[] = diceOrder.map((dice) => ({
        diceType: dice,
        roll: () => appRollModel.rollDice(dice),
        displayValue: mapRollToDice(dice, AppRollModel.getMaxByDiceType(dice)),
    }));

    const toggleIsExploding = async () => {
        const lastValue = await firstValueFrom(_isExplodingSource);
        _isExplodingSource.next(!lastValue);
    };

    return {
        rollsElementData,
        rollInfo,
        theme,
        translations,

        isExploding,
        toggleIsExploding,
    };
};
