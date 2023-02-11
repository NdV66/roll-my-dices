import { mapMaxValueToDice } from '.';
import { DiceTypes, IRollModel, TRollButtonData, TRollExtended } from '../types';

export const mapToMaxRollButtonData = <E extends TRollExtended>(
    diceOrder: DiceTypes[],
    model: IRollModel<E>,
): TRollButtonData[] =>
    diceOrder.map((dice) => ({
        diceType: dice,
        roll: () => model.rollDice(dice),
        displayValue: mapMaxValueToDice(dice),
    }));
