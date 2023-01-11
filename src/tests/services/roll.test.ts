import * as tools from '../../services/rollRandomBetween.rolls.service';
import { rollDices } from '../../services/rolls.service';

describe('rollDices', () => {
    const numberRolls = 1;
    const min = 1;
    const max = 6;

    test('Should return given number of rolls', async () => {
        const mockRandom = 3;
        const expectedResult = [mockRandom];
        jest.spyOn(tools, 'rollRandomBetween').mockReturnValueOnce(mockRandom);

        const result = rollDices(numberRolls, min, max);

        expect(result).toEqual(expectedResult);
    });
});

export {};
