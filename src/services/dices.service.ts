import { DiceTypes } from '../types';

const ROLLS_RESULTS_FONTS = {
    [DiceTypes.D_4]: ['a', 'b', 'c', 'd'],
    [DiceTypes.D_6]: ['A', 'B', 'C', 'D', 'E', 'F'],
    [DiceTypes.D_8]: ['e', 'f ', 'g', 'h', 'i', 'j', 'k', 'l'],
    [DiceTypes.D_10]: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    [DiceTypes.D_12]: ['m', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    [DiceTypes.D_20]: ['G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
};

export const mapRollToDice = (diceType: DiceTypes, rawResult: number) => ROLLS_RESULTS_FONTS[diceType][rawResult - 1];
