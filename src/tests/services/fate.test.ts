import { FATE, NO_DICE_FOUND_ERROR, ROLLS_RESULTS_FONTS } from '../../defaults';
import {
    mapFateToDice,
    mapResultToLadder,
    rollFateDices,
    translateLadderData,
    translateToFate,
} from '../../services/fate.service';
import { DiceTypes, FateLadder, TTranslateLadderData } from '../../types';
import * as tools from '../../services/rolls.service';
import { TEXTS_EN } from '../../langs/en';

describe('mapResultToLadder', () => {
    test('Should map result to the Fate ladder correctly', () => {
        const result = mapResultToLadder(7);
        expect(result).toEqual(FateLadder.EPIC);
    });

    test('Should return NOT_FOUND, if there is no result from Fate ladder', () => {
        const result = mapResultToLadder(66);
        expect(result).toEqual(FateLadder.NOT_FOUND);
    });
});

describe('translateToFate', () => {
    const testCase = (rolls: number[], expectedNumber: number) => {
        for (const roll of rolls) {
            const result = translateToFate(roll);
            expect(result).toEqual(expectedNumber);
        }
    };

    test('Should translate to -1', () => {
        testCase(FATE.TRANSLATE_FOR_MINUS, FATE.MINUS);
    });

    test('Should translate to +1', () => {
        testCase(FATE.TRANSLATE_FOR_PLUS, FATE.PLUS);
    });

    test('Should translate to 0', () => {
        testCase(FATE.TRANSLATE_FOR_NEUTRAL, FATE.NEUTRAL);
    });
});

describe('rollFateDices', () => {
    test('Should roll Fate dice (only -1, 0 and 1 as result)', () => {
        const rolls = [1, 4, 6, 3];
        const expectedResult = [-1, 0, 1, 0];

        jest.spyOn(tools, 'rollDices').mockReturnValue(rolls);
        const result = rollFateDices();
        expect(result).toEqual(expectedResult);
    });
});

describe('mapFateToDice', () => {
    test('Should map Fate result to dice', () => {
        const roll = -1;
        const expectedResult = ROLLS_RESULTS_FONTS[DiceTypes.FATE][0];

        const result = mapFateToDice(roll);
        expect(result).toEqual(expectedResult);
    });

    test('Should throw error if there is no possibility to map result', () => {
        const roll = 66;
        const expectedError = NO_DICE_FOUND_ERROR;

        const callback = () => {
            mapFateToDice(roll);
        };
        expect(callback).toThrow(expectedError);
    });
});

describe('translateLadderData', () => {
    test('Should prepare translated ladder data', () => {
        const translations = TEXTS_EN;
        const fateLadder = new Map([
            [8, FateLadder.LEGENDARY],
            [7, FateLadder.EPIC],
        ]);
        const expectedResult: TTranslateLadderData[] = [
            {
                value: 8,
                name: translations.FATE_LEADER.LEGENDARY,
                key: FateLadder.LEGENDARY,
            },
            {
                value: 7,
                name: translations.FATE_LEADER.EPIC,
                key: FateLadder.EPIC,
            },
        ];

        const result = translateLadderData(translations, fateLadder);
        expect(result).toEqual(expectedResult);
    });
});

export {};
