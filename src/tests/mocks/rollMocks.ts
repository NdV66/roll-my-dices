import { DEFAULTS } from '../../defaults';
import {
    DiceTypes,
    TExplodingRoll,
    TExplodingRollExtended,
    TFateRoll,
    TFateRollExtended,
    TRoll,
    TRollExtended,
} from '../../types';

export const ROLL_MOCK: TRoll = {
    dice: DiceTypes.D_20,
    roll: 6,
};

export const ROLL_EXTENDED_NO_MOD_MOCK: TRollExtended = {
    ...ROLL_MOCK,
    calculationResult: ROLL_MOCK.roll,
    mod: DEFAULTS.MOD,
};

export const ROLL_EXTENDED_MOCK: TRollExtended = {
    ...ROLL_MOCK,
    calculationResult: ROLL_MOCK.roll + 2,
    mod: 2,
};

// FATE
export const FATE_ROLL: TFateRoll = {
    allRolls: [1, -1, 0, 1],
    roll: 1,
    dice: DiceTypes.FATE,
};

export const FATE_ROLL_EXTENDED_WITH_MOD_MOCK: TFateRollExtended = {
    ...FATE_ROLL,
    mod: 2,
    calculationResult: 3,
};

export const FATE_ROLL_EXTENDED_NO_MOD_MOCK: TFateRollExtended = {
    ...FATE_ROLL,
    mod: 0,
    calculationResult: 1,
};

// EXPLODING
export const EXPLODING_ROLL_NO_EXPLOSION: TExplodingRoll = {
    allRolls: [[4]],
    roll: 4,
    dice: DiceTypes.D_6,
    isExploding: false,
};

export const EXPLODING_ROLL_WITH_EXPLOSION: TExplodingRoll = {
    allRolls: [[6, 4]],
    roll: 10,
    dice: DiceTypes.D_6,
    isExploding: true,
};

export const EXPLODING_ROLL_NO_EXPLOSION_NO_MOD_EXTENDED: TExplodingRollExtended = {
    ...EXPLODING_ROLL_NO_EXPLOSION,
    calculationResult: 4,
    mod: 0,
};

export const EXPLODING_ROLL_NO_EXPLOSION_WITH_MOD_EXTENDED: TExplodingRollExtended = {
    ...EXPLODING_ROLL_NO_EXPLOSION,
    calculationResult: 6,
    mod: 2,
};

export const EXPLODING_ROLL_WITH_EXPLOSION_NO_MOD_EXTENDED: TExplodingRollExtended = {
    ...EXPLODING_ROLL_WITH_EXPLOSION,
    calculationResult: 10,
    mod: 0,
};

export const EXPLODING_ROLL_WITH_EXPLOSION_WITH_MOD_EXTENDED: TExplodingRollExtended = {
    ...EXPLODING_ROLL_WITH_EXPLOSION,
    calculationResult: 8,
    mod: -2,
};
