import { DEFAULTS, NO_DICE_FOUND_ERROR, ROLLS_RESULTS_FONTS } from '../defaults';
import { DiceTypes, TRoll } from '../types';

export const mapRollToDice = (diceType: DiceTypes, rawResult: number) => {
    const diceSet = ROLLS_RESULTS_FONTS[diceType];
    const index = rawResult - 1;

    if (index >= diceSet.length || diceType === DiceTypes.FATE) {
        throw NO_DICE_FOUND_ERROR;
    }

    return diceSet[index];
};

export const prepareExtendedRoll = (roll: TRoll | null, mod: number | null) =>
    roll
        ? {
              ...roll,
              calculationResult: roll.roll + (mod || DEFAULTS.MOD),
              mod: mod || DEFAULTS.MOD,
          }
        : DEFAULTS.EMPTY_ROLL_RESULT;
