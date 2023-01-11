import * as tools from '../../services/rolls.service';

// jest.mock('../../services/rolls.service', () => ({
//     ...jest.requireActual('../../services/rolls.service'),
//     rollRandomBetween: jest.fn().mockReturnValue(777),
// }));

describe('rollDices', () => {
    const numberRolls = 1;
    const min = 1;
    const max = 6;

    test('Should return given number of rolls', async () => {
        const mockRandom = 3;
        const expectedResult = [mockRandom];

        jest.spyOn(tools, 'rollRandomBetween').mockImplementationOnce(() => {
            console.log('ORANGE STREET');
            return 88;
        });

        const { rollDices } = await import('../../services/rolls.service');
        const result = rollDices(numberRolls, min, max);

        console.log('>>>', result);

        // expect(result).toEqual(expectedResult);
    });
});

export {};
