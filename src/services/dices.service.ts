import { NO_DICE_FOUND_ERROR, ROLLS_RESULTS_FONTS } from '../defaults';
import { DiceTypes } from '../types';

export const mapRollToDice = (diceType: DiceTypes, rawResult: number) => {
    const diceSet = ROLLS_RESULTS_FONTS[diceType];
    const index = rawResult - 1;

    if (index >= diceSet.length || diceType === DiceTypes.FATE) {
        throw NO_DICE_FOUND_ERROR;
    }

    return diceSet[index];
};
