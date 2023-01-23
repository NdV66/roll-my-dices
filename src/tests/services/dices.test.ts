import { DEFAULTS, ERROR_CODES, ROLLS_RESULTS_FONTS } from '../../defaults';
import { mapRollToDice, prepareExtendedRoll } from '../../services';
import { DiceTypes, TRoll, TRollExtended } from '../../types';

describe('mapRollToDice', () => {
    test('Should select a right sign', () => {
        const diceType = DiceTypes.D_20;
        const roll = 6;
        const expectedResult = ROLLS_RESULTS_FONTS[diceType][roll - 1];

        const result = mapRollToDice(diceType, roll);

        expect(result).toEqual(expectedResult);
    });

    test('Should select a right sign (max value)', () => {
        const diceType = DiceTypes.D_20;
        const roll = 20;
        const expectedResult = ROLLS_RESULTS_FONTS[diceType][roll - 1];

        const result = mapRollToDice(diceType, roll);

        expect(result).toEqual(expectedResult);
    });

    test('Should return undefined, when the roll number is not supported', () => {
        const diceType = DiceTypes.D_20;
        const callback = () => {
            mapRollToDice(diceType, 126);
        };

        expect(callback).toThrow(ERROR_CODES.NO_DICE_FOUND);
    });
});

describe('prepareExtendedRoll', () => {
    const rollModel: TRoll = {
        dice: DiceTypes.D_20,
        roll: 8,
    };

    test('Should return null if there is no roll', () => {
        const result = prepareExtendedRoll(null, null);
        expect(result).toBeNull();
    });

    test('Should return expected value (no mod)', () => {
        const expectedValue: TRollExtended = {
            ...rollModel,
            calculationResult: DEFAULTS.MOD + rollModel.roll,
            mod: DEFAULTS.MOD,
        };

        const result = prepareExtendedRoll(rollModel, null);
        expect(result).toEqual(expectedValue);
    });

    test('Should return expected value (with mod)', () => {
        const mod = 2;
        const expectedValue: TRollExtended = {
            ...rollModel,
            calculationResult: mod + rollModel.roll,
            mod,
        };

        const result = prepareExtendedRoll(rollModel, mod);
        expect(result).toEqual(expectedValue);
    });
});

export {};
