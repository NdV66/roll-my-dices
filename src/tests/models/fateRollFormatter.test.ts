import { FateDieRollFormatter } from '../../models/rolls';
import { FATE_ROLL, FATE_ROLL_EXTENDED_NO_MOD_MOCK, FATE_ROLL_EXTENDED_WITH_MOD_MOCK } from '../models/mocks';
import * as rollsService from '../../services/rolls.service';

describe('FateDieRollFormatter', () => {
    const summary = FATE_ROLL.allRolls.reduce((prev, curr) => prev + curr, 0);
    let model: FateDieRollFormatter;

    beforeEach(() => {
        model = new FateDieRollFormatter();
    });

    describe('prepareRollResult', () => {
        beforeEach(() => {
            jest.spyOn(rollsService, 'rollDices').mockReturnValue(FATE_ROLL.allRolls);
            jest.spyOn(rollsService, 'summaryRolls').mockReturnValue(summary);
        });

        test('Should prepare roll result correctly', () => {
            const result = model.prepareRollResult();

            expect(result.roll).toEqual(FATE_ROLL.roll);
            expect(result.dice).toEqual(FATE_ROLL.dice);
            expect(result.allRolls).toEqual(expect.any(Array));
        });
    });

    describe('prepareExtendedRoll', () => {
        test('Should prepare extended fate roll (no mod)', () => {
            const result = model.prepareExtendedRoll(FATE_ROLL, FATE_ROLL_EXTENDED_NO_MOD_MOCK.mod);
            expect(result).toEqual(FATE_ROLL_EXTENDED_NO_MOD_MOCK);
        });

        test('Should prepare extended fate roll (with mod)', () => {
            const result = model.prepareExtendedRoll(FATE_ROLL, FATE_ROLL_EXTENDED_WITH_MOD_MOCK.mod);
            expect(result).toEqual(FATE_ROLL_EXTENDED_WITH_MOD_MOCK);
        });
    });
});

export {};
