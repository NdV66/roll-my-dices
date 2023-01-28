import { rollRandomBetween } from '../../services/rollRandomBetween.rolls.service';

describe('rollRandomBetween', () => {
    const min = 1;
    const max = 6;

    test('Should return given number of rolls (random is int) between indicated numbers', () => {
        const mockRandom = 0.9;
        const expectedResult = 6;

        jest.spyOn(global.Math, 'random').mockReturnValue(mockRandom);
        const result = rollRandomBetween(min, max);

        expect(result).toEqual(expectedResult);
    });
});

export {};
