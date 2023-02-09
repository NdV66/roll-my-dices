import { FateLadder } from '../types';

export const FATE = {
    PLUS: 1,
    MINUS: -1,
    NEUTRAL: 0,

    DICE_NUMBERS: 4,

    TRANSLATE_FOR_MINUS: [1, 2],
    TRANSLATE_FOR_NEUTRAL: [3, 4],
    TRANSLATE_FOR_PLUS: [5, 6],

    MIN: 1,
    MAX: 6,

    MAX_LEADER: 8,
    MIN_LEADER: -2,

    SIGNS: {
        PLUS: '+',
        MINUS: '-',
        NEUTRAL: '',
    },

    LADDER: new Map([
        [8, FateLadder.LEGENDARY],
        [7, FateLadder.EPIC],
        [6, FateLadder.FANTASTIC],
        [5, FateLadder.SUPERB],
        [4, FateLadder.GREAT],
        [3, FateLadder.GOOD],
        [2, FateLadder.FAIR],
        [1, FateLadder.AVERAGE],
        [0, FateLadder.MEDIOCRE],
        [-1, FateLadder.POOR],
        [-2, FateLadder.TERRIBLE],
    ]),
};
