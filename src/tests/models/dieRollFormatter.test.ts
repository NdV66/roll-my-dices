import { DEFAULTS } from '../../defaults';
import { DieRollFormatter } from '../../models/rolls/DieRollFormatter';
import { DiceTypes, TRoll, TRollExtended } from '../../types';
import * as rollsService from '../../services/rolls.service';
import { ROLL_MOCK } from '../mocks';

describe('DieRollFormatter', () => {
    let model: DieRollFormatter;

    beforeEach(() => {
        model = new DieRollFormatter();
    });

    describe('prepareRollResult', () => {
        beforeEach(() => {
            jest.spyOn(rollsService, 'rollDices').mockReturnValue([ROLL_MOCK.roll]);
        });

        test('Should prepare roll result correctly', () => {
            const result = model.prepareRollResult(ROLL_MOCK.dice);
            expect(result).toEqual(ROLL_MOCK);
        });
    });

    describe('prepareExtendedRoll', () => {
        const rollModel: TRoll = {
            dice: DiceTypes.D_20,
            roll: 8,
        };

        test('Should return null if there is no roll', () => {
            const result = model.prepareExtendedRoll(null, null);
            expect(result).toBeNull();
        });

        test('Should return expected value (no mod)', () => {
            const expectedValue: TRollExtended = {
                ...rollModel,
                calculationResult: DEFAULTS.MOD + rollModel.roll,
                mod: DEFAULTS.MOD,
            };

            const result = model.prepareExtendedRoll(rollModel, null);
            expect(result).toEqual(expectedValue);
        });

        test('Should return expected value (with mod)', () => {
            const mod = 2;
            const expectedValue: TRollExtended = {
                ...rollModel,
                calculationResult: mod + rollModel.roll,
                mod,
            };

            const result = model.prepareExtendedRoll(rollModel, mod);
            expect(result).toEqual(expectedValue);
        });
    });
});

export {};
