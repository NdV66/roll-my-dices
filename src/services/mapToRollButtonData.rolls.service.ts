import { AbstractRollModel } from '../models/AbstractRollModel';
import { mapRollToDice } from '.';
import { DiceTypes, IRollModel, TRollButtonData, TRollExtended } from '../types';

export const mapToRollButtonData = <E extends TRollExtended>(
    diceOrder: DiceTypes[],
    model: IRollModel<E>,
): TRollButtonData[] =>
    diceOrder.map((dice) => ({
        diceType: dice,
        roll: () => model.rollDice(dice),
        displayValue: mapRollToDice(dice, AbstractRollModel.getMaxByDiceType(dice)),
    }));
