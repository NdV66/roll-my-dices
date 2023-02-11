import {
    ROLLS_RESULTS_FONTS,
    NO_DICE_FOUND_ERROR,
    USE_FATE_INSTEAD_ERROR,
    DICE_TYPES_MAX,
    SPECIAL_MAX_DICE_VALUE,
} from '../../defaults';
import { mapMaxValueToDice, mapRollToDice } from '../../services/dices.service';
import * as diceTools from '../../services/dices.service';
import { DiceTypes } from '../../types';

describe('mapRollToDice', () => {
    test('Should throw NO_DICE_FOUND, when the roll number is not supported', () => {
        const callback = () => {
            mapRollToDice(DiceTypes.D_20, 126);
        };

        expect(callback).toThrow(NO_DICE_FOUND_ERROR);
    });

    test('Should throw USE_FATE_INSTEAD_ERROR, when dice type is Fate', () => {
        const callback = () => {
            mapRollToDice(DiceTypes.FATE, 2);
        };

        expect(callback).toThrow(USE_FATE_INSTEAD_ERROR);
    });

    describe('Should select a right sign', () => {
        const diceType = DiceTypes.D_20;

        const testShouldSelectRightSign = (roll: number) => {
            const expectedResult = ROLLS_RESULTS_FONTS[diceType][roll - 1];
            const result = mapRollToDice(diceType, roll);

            expect(result).toEqual(expectedResult);
        };

        test('- for min value', () => {
            const roll = 1;
            testShouldSelectRightSign(roll);
        });

        test('- for ok value', () => {
            const roll = 6;
            testShouldSelectRightSign(roll);
        });

        test('- for max value', () => {
            const roll = DICE_TYPES_MAX.get(diceType)!;
            testShouldSelectRightSign(roll);
        });
    });
});

describe('mapMaxValueToDice', () => {
    test('Should get max by dice type', () => {
        const diceType = DiceTypes.D_20;
        const roll = DICE_TYPES_MAX.get(diceType)!;
        const expectedResult = ROLLS_RESULTS_FONTS[diceType][roll - 1];

        const result = mapMaxValueToDice(diceType);
        expect(result).toEqual(expectedResult);
    });

    test('Should get max by dice type when dice is special', () => {
        const diceType = DiceTypes.D_10;
        const expectedSign = SPECIAL_MAX_DICE_VALUE.get(diceType)!;

        const result = mapMaxValueToDice(diceType);
        expect(result).toEqual(expectedSign);
    });
});

export {};
