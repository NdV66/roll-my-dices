import { useMemo } from 'react';
import { filter, map } from 'rxjs';
import { appRollModel, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { AppRollModel } from '../models/AppRollModel';
import { mapRollToDice } from '../services';
import { useStateWithObservableWithInit } from '../tools';
import { DiceTypes, TRoll } from '../types';

const DICES_ORDER = [DiceTypes.D_4, DiceTypes.D_6, DiceTypes.D_8, DiceTypes.D_10, DiceTypes.D_12, DiceTypes.D_20];

type TRollInfo = TRoll & {
    displayValue: string;
};

export const useRollsElementViewModel = () => {
    const { translations, theme } = useAppContext();

    const rollInfoSource = useMemo(
        () =>
            appRollModel.rollSource.pipe(
                filter((el): el is TRoll => !!el),
                map((el) => ({
                    ...el,
                    displayValue: mapRollToDice(el!.dice, el!.roll),
                })),
            ),
        [],
    );

    const rollInfo = useStateWithObservableWithInit<TRollInfo | null>(rollInfoSource, DEFAULTS.EMPTY_ROLL_RESULT);

    const rollsElementData = DICES_ORDER.map((dice) => ({
        diceType: dice,
        roll: () => appRollModel.rollDice(dice),
        title: translations[dice],
        displayValue: mapRollToDice(dice, AppRollModel.getMaxByDiceType(dice)),
    }));

    return {
        rollsElementData,
        rollInfo,
        theme,
        translations,
    };
};
