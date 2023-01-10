import { useMemo } from 'react';
import { map } from 'rxjs';
import { appRollModel, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { AppRollModel } from '../models/AppRollModel';
import { mapRollToDice } from '../services';
import { useStateWithObservableWithInit } from '../tools';
import { DiceTypes, TRollExtended, TRollInfo } from '../types';

const DICES_ORDER = [DiceTypes.D_4, DiceTypes.D_6, DiceTypes.D_8, DiceTypes.D_10, DiceTypes.D_12, DiceTypes.D_20];

const prepareDisplayValue = (roll: TRollExtended | null) =>
    roll
        ? {
              ...roll,
              displayValue: mapRollToDice(roll!.dice, roll!.roll),
          }
        : null;

export const useRollsElementViewModel = () => {
    const { translations, theme } = useAppContext();
    const rollInfoSource = useMemo(() => appRollModel.extendedRollSource.pipe(map(prepareDisplayValue)), []);
    const rollInfo = useStateWithObservableWithInit<TRollInfo | null>(rollInfoSource, DEFAULTS.EMPTY_ROLL_RESULT);

    const rollsElementData = DICES_ORDER.map((dice) => ({
        diceType: dice,
        roll: () => appRollModel.rollDice(dice),
        title: translations[dice],
        displayValue: mapRollToDice(dice, AppRollModel.getMaxByDiceType(dice)),
    }));

    const onCleanAll = () => {
        appRollModel.cleanAll();
    };

    return {
        rollsElementData,
        rollInfo,
        theme,
        onCleanAll,
        translations,
    };
};
