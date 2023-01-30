import { useMemo } from 'react';
import { map } from 'rxjs';
import { getModelByKey, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { AppRollModel } from '../models/AppRollModel';
import { mapRollToDice } from '../services';
import { useStateWithObservableWithInit } from '../tools';
import { DiceTypes, Models, TRollExtended, TRollInfo } from '../types';

const DICES_ORDER = [DiceTypes.D_4, DiceTypes.D_6, DiceTypes.D_8, DiceTypes.D_10, DiceTypes.D_12, DiceTypes.D_20];

const prepareDisplayValue = (roll: TRollExtended | null) =>
    roll
        ? {
              ...roll,
              displayValue: mapRollToDice(roll!.dice, roll!.roll),
          }
        : null;

export type TRollButtonData = {
    diceType: DiceTypes;
    roll: () => void;
    displayValue: string;
};

export const useRollsElementViewModel = () => {
    const appRollModel = getModelByKey<AppRollModel>(Models.APP_ROLL);
    const { translations, theme } = useAppContext();
    const rollInfoSource = useMemo(() => appRollModel.extendedRollSource.pipe(map(prepareDisplayValue)), []);
    const rollInfo = useStateWithObservableWithInit<TRollInfo | null>(rollInfoSource, DEFAULTS.EMPTY_ROLL_RESULT);

    const rollsElementData: TRollButtonData[] = DICES_ORDER.map((dice) => ({
        diceType: dice,
        roll: () => appRollModel.rollDice(dice),
        displayValue: mapRollToDice(dice, AppRollModel.getMaxByDiceType(dice)),
    }));

    return {
        rollsElementData,
        rollInfo,
        theme,
        translations,
    };
};
