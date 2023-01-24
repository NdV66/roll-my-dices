import { FATE } from '../../defaults';
import { mapResultToLeader } from '../../services';
import { FateLeader } from '../../types';

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

describe('prepareExtendedFateRoll', () => {
    test('Should prepare extended fate roll', () => {});
});
