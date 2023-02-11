import { ROLLS_RESULTS_FONTS, NO_DICE_FOUND_ERROR, USE_FATE_INSTEAD_ERROR } from '../../defaults';
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
});

// describe('getMaxByDiceType', () => {
//     test('Should get max by dice type', () => {
//         const dice = DiceTypes.D_20;
//         const max = 20;

//         const result = getMaxByDiceType(dice);
//         expect(result).toEqual(max);
//     });
// });

export {};
