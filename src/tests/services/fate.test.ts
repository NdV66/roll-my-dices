import { FATE, NO_DICE_FOUND_ERROR, ROLLS_RESULTS_FONTS } from '../../defaults';
import {
    mapFateToDice,
    mapResultToLeader,
    rollFateDices,
    translateLeaderData,
    translateToFate,
} from '../../services/fate.service';
import { DiceTypes, FateLeader, TTranslateLeaderData } from '../../types';
import * as tools from '../../services/rolls.service';
import { TEXTS_EN } from '../../langs/en';

describe('mapResultToLeader', () => {
    test('Should map result to the Fate leader correctly', () => {
        const result = mapResultToLeader(7);
        expect(result).toEqual(FateLeader.EPIC);
    });

    test('Should return NOT_FOUND, if there is no result from Fate leader', () => {
        const result = mapResultToLeader(66);
        expect(result).toEqual(FateLeader.NOT_FOUND);
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

describe('translateLeaderData', () => {
    test('Should prepare translated leader data', () => {
        const translations = TEXTS_EN;
        const fateLeader = new Map([
            [8, FateLeader.LEGENDARY],
            [7, FateLeader.EPIC],
        ]);
        const expectedResult: TTranslateLeaderData[] = [
            {
                value: 8,
                name: translations.FATE_LEADER.LEGENDARY,
                key: FateLeader.LEGENDARY,
            },
            {
                value: 7,
                name: translations.FATE_LEADER.EPIC,
                key: FateLeader.EPIC,
            },
        ];

        const result = translateLeaderData(translations, fateLeader);
        expect(result).toEqual(expectedResult);
    });
});

export {};
