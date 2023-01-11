import { ERROR_CODES, ROLLS_RESULTS_FONTS } from '../defaults';
import { DiceTypes } from '../types';

export const mapRollToDice = (diceType: DiceTypes, rawResult: number) => {
    const diceSet = ROLLS_RESULTS_FONTS[diceType];
    const index = rawResult - 1;

    if (index >= diceSet.length) {
        throw new Error(ERROR_CODES.NO_DICE_FOUND);
    }

    return diceSet[index];
};
