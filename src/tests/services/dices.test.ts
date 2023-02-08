import { ERROR_CODES, ROLLS_RESULTS_FONTS } from '../../defaults';
import { mapRollToDice } from '../../services/dices.service';
import { DiceTypes } from '../../types';

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

export {};
