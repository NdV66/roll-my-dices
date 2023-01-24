import { DEFAULTS } from '../../defaults';
import { DiceTypes, TRoll, TRollExtended } from '../../types';

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
