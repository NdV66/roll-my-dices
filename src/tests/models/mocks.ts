import { DEFAULTS } from '../../defaults';
import { DiceTypes, TFateRoll, TFateRollExtended, TRoll, TRollExtended } from '../../types';

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

export const FATE_ROLL: TFateRoll = {
    allRolls: [1, -1, 0, 1],
    roll: 1,
    dice: DiceTypes.FATE,
};

export const FATE_ROLL_EXTENDED_WITH_MOD_MOCK: TFateRollExtended = {
    allRolls: [1, -1, 0, 1],
    roll: 1,
    dice: DiceTypes.FATE,
    mod: 2,
    calculationResult: 3,
};

export const FATE_ROLL_EXTENDED_NO_MOD_MOCK: TFateRollExtended = {
    allRolls: [1, -1, 0, 1],
    roll: 1,
    dice: DiceTypes.FATE,
    mod: 0,
    calculationResult: 1,
};
