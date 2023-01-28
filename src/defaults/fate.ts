import { FateLeader } from '../types';

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

    SIGNS: {
        PLUS: '+',
        MINUS: '-',
        NEUTRAL: '',
    },

    LEADER: new Map([
        [8, FateLeader.LEGENDARY],
        [7, FateLeader.EPIC],
        [6, FateLeader.FANTASTIC],
        [5, FateLeader.SUPERB],
        [4, FateLeader.GREAT],
        [3, FateLeader.GOOD],
        [2, FateLeader.FAIR],
        [1, FateLeader.AVERAGE],
        [0, FateLeader.MEDIOCRE],
        [-1, FateLeader.POOR],
        [-2, FateLeader.TERRIBLE],
    ]),
};
