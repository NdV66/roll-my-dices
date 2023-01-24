import { DEFAULTS, ERROR_CODES, ROLLS_RESULTS_FONTS } from '../defaults';
import { DiceTypes, TRoll } from '../types';

const NO_DICE_FOUND_ERROR = new Error(ERROR_CODES.NO_DICE_FOUND);

export const mapRollToDice = (diceType: DiceTypes, rawResult: number) => {
    const diceSet = ROLLS_RESULTS_FONTS[diceType];
    const index = rawResult - 1;

    if (index >= diceSet.length || diceType === DiceTypes.FATE) {
        throw NO_DICE_FOUND_ERROR;
    }

    return diceSet[index];
};

export const mapFateToDice = (rawResult: number) => {
    const diceSet = ROLLS_RESULTS_FONTS[DiceTypes.FATE];
    const index = rawResult + 1;

    if (index >= diceSet.length) {
        throw NO_DICE_FOUND_ERROR;
    }

    return diceSet[index];
};

export const prepareExtendedRoll = (roll: TRoll | null, mod: number | null) =>
    roll && {
        ...roll,
        calculationResult: roll.roll + (mod || DEFAULTS.MOD),
        mod: mod || DEFAULTS.MOD,
    };
