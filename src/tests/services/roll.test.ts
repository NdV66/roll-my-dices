import * as tools from '../../services/rollRandomBetween.rolls.service';
import * as rollTools from '../../services/rolls.service';
import { rollDices, summaryRolls, calcSummaryRolls } from '../../services/rolls.service';

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

describe('summaryRolls', () => {
    test('Should summary rolls in a correct way', () => {
        const rolls = [1, 2, 3];
        const expectedSummary = 6;

        const result = summaryRolls(rolls);
        expect(result).toEqual(expectedSummary);
    });
});

describe('calcSummaryRolls', () => {
    const rolls = [1, 2, 3];
    const mockSummary = 6;

    const testCalc = (modify: number) => {
        const expectedResult = mockSummary + modify;
        jest.spyOn(rollTools, 'summaryRolls').mockReturnValue(mockSummary);

        const result = calcSummaryRolls(rolls, modify);
        expect(result).toEqual(expectedResult);
    };

    test('Should summary rolls in a correct way with modifiers (with -)', () => {
        const modify = -2;
        testCalc(modify);
    });

    test('Should summary rolls in a correct way with modifiers (with +)', () => {
        const modify = 2;
        testCalc(modify);
    });
});

export {};
