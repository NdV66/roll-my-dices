import { DEFAULTS, ERROR_CODES, ROLLS_RESULTS_FONTS } from '../defaults';
import { DiceTypes, TRoll } from '../types';

export const mapRollToDice = (diceType: DiceTypes, rawResult: number) => {
    const diceSet = ROLLS_RESULTS_FONTS[diceType];
    const index = rawResult - 1;

    if (index >= diceSet.length) {
        throw new Error(ERROR_CODES.NO_DICE_FOUND);
    }

    return diceSet[index];
};

export const prepareExtendedRoll = ([roll, mod]: [TRoll | null, number | null]) =>
    roll && {
        ...roll,
        calculationResult: roll.roll + (mod || DEFAULTS.MOD),
        mod: mod || DEFAULTS.MOD,
    };
