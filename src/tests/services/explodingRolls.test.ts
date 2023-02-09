import {
    detectExploding,
    explodeDie,
    rollExplodingDice,
    summaryExplodingDie,
} from '../../services/explodingRolls.rolls.service';
import * as rollRandomBetweenTool from '../../services/rollRandomBetween.rolls.service';

const spyOnRollRandomBetweenWithIterations = (expectedResult: number[]) => {
    let call = 0;
    jest.spyOn(rollRandomBetweenTool, 'rollRandomBetween').mockImplementation(() => {
        const result = expectedResult[call];
        call++;
        return result;
    });
};

describe('detectExploding', () => {
    test('Should detect explosion', () => {
        const number = 1;
        const rolls = [6, 5];

        const result = detectExploding(number, rolls);
        expect(result).toBe(true);
    });

    test('Should not detect explosion', () => {
        const number = 1;
        const rolls = [5];

        const result = detectExploding(number, rolls);
        expect(result).toBe(false);
    });
});

describe('summaryExplodingDie', () => {
    const checkResult = (rolls: Array<number[]>, expectedSummary: number) => {
        const result = summaryExplodingDie(rolls);
        expect(result).toBe(expectedSummary);
    };

    describe('- for 1 die', () => {
        test('Should summary rolls, when there is explosion', () => {
            const rolls = [[6, 6, 4]];
            const expectedSummary = 16;

            checkResult(rolls, expectedSummary);
        });

        test('Should summary rolls, when there is no explosion', () => {
            const rolls = [[4]];
            const expectedSummary = 4;

            checkResult(rolls, expectedSummary);
        });
    });

    describe('- for more than 1 dice', () => {
        test('Should summary rolls, when there is more than 1 explosion', () => {
            const rolls = [[6, 6, 4], [6, 4], [4]];
            const expectedSummary = 30;

            checkResult(rolls, expectedSummary);
        });

        test('Should summary rolls, when there is at least 1 explosion', () => {
            const rolls = [[6, 6, 4], [4]];
            const expectedSummary = 20;

            checkResult(rolls, expectedSummary);
        });

        test('Should summary rolls, when there is no explosion', () => {
            const rolls = [[4], [3]];
            const expectedSummary = 7;

            checkResult(rolls, expectedSummary);
        });
    });
});

describe('explodeDie', () => {
    const max = 6;
    const min = 1;

    const testExplodeDie = (expectedResult: number[]) => {
        spyOnRollRandomBetweenWithIterations(expectedResult);
        const results = explodeDie(min, max, []);
        expect(results).toEqual(expectedResult);
    };

    test('Should prepare results with explodes (exploding 1x)', () => {
        const expectedResult = [max, max - 1];
        testExplodeDie(expectedResult);
    });

    test('Should prepare results with explodes (exploding 3x)', () => {
        const expectedResult = [max, max, max, max - 1];
        testExplodeDie(expectedResult);
    });

    test('Should prepare results without explodes', () => {
        const expectedResult = [max - 1];
        testExplodeDie(expectedResult);
    });
});

describe('rollExplodingDice', () => {
    const max = 6;
    const min = 1;

    describe('- for 1 die', () => {
        const testRollExplodingDice = (mockRandomResults: number[]) => {
            const number = 1;
            const expectedResult = [mockRandomResults];
            spyOnRollRandomBetweenWithIterations(mockRandomResults);

            const result = rollExplodingDice(number, min, max);
            expect(result).toEqual(expectedResult);
        };

        test('Should prepare results with explodes (exploding 3x)', () => {
            const mockRandomResults = [max, max, max, max - 1];
            testRollExplodingDice(mockRandomResults);
        });

        test('Should prepare results with explodes (exploding 1x)', () => {
            const mockRandomResults = [max, max - 1];
            testRollExplodingDice(mockRandomResults);
        });

        test('Should prepare results without explodes', () => {
            const mockRandomResults = [max - 1];
            testRollExplodingDice(mockRandomResults);
        });
    });

    describe('- for 2 dice', () => {
        const number = 2;
        test('Should prepare results with explodes (exploding 3x)', () => {
            const expectedResult = [[max, max, max - 1], [max - 2]];
            const mockRandomResults = expectedResult.flat();
            spyOnRollRandomBetweenWithIterations(mockRandomResults);

            const result = rollExplodingDice(number, min, max);
            expect(result).toEqual(expectedResult);
        });

        test('Should prepare results with explodes (exploding 1x)', () => {
            const expectedResult = [[max, max - 1], [max - 2]];
            const mockRandomResults = expectedResult.flat();
            spyOnRollRandomBetweenWithIterations(mockRandomResults);

            const result = rollExplodingDice(number, min, max);
            expect(result).toEqual(expectedResult);
        });

        test('Should prepare results without explodes', () => {
            const expectedResult = [[max - 1], [max - 2]];
            const mockRandomResults = expectedResult.flat();
            spyOnRollRandomBetweenWithIterations(mockRandomResults);

            const result = rollExplodingDice(number, min, max);
            expect(result).toEqual(expectedResult);
        });
    });
});

export {};
