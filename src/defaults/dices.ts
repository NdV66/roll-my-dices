import { DiceTypes } from '../types';

export const DICE_TYPES_MAX = new Map([
    [DiceTypes.FATE, 6],
    [DiceTypes.D_4, 4],
    [DiceTypes.D_6, 6],
    [DiceTypes.D_8, 8],
    [DiceTypes.D_10, 10],
    [DiceTypes.D_12, 12],
    [DiceTypes.D_20, 20],
]);

export const FONT_FAMILY_BY_DICE_TYPE = {
    [DiceTypes.FATE]: 'DiceD6',
    [DiceTypes.D_4]: 'DiceD4',
    [DiceTypes.D_6]: 'DiceD6',
    [DiceTypes.D_8]: 'DiceD8',
    [DiceTypes.D_10]: 'DiceD10',
    [DiceTypes.D_12]: 'DiceD12',
    [DiceTypes.D_20]: 'DiceD20',
};

export const ROLLS_RESULTS_FONTS = {
    [DiceTypes.FATE]: ['_', '"', 'O'],
    [DiceTypes.D_4]: ['!', '@', '#', '$'],
    [DiceTypes.D_6]: ['A', 'B', 'C', 'D', 'E', 'F'],
    [DiceTypes.D_8]: ['A', 'B ', 'C', 'D', 'E', 'F', 'G', 'H'],
    [DiceTypes.D_10]: ['A', 'B ', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    [DiceTypes.D_12]: ['A', 'B ', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    [DiceTypes.D_20]: [
        'A',
        'B ',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ],
};

export const SPECIAL_MAX_DICE_VALUE = new Map([[DiceTypes.D_10, ROLLS_RESULTS_FONTS.D_10[0]]]);
