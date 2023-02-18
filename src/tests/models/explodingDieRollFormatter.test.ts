import { ExplodingDieRollFormatter } from '../../models/rolls';
import {
    EXPLODING_ROLL_NO_EXPLOSION,
    EXPLODING_ROLL_NO_EXPLOSION_NO_MOD_EXTENDED,
    EXPLODING_ROLL_WITH_EXPLOSION,
    EXPLODING_ROLL_WITH_EXPLOSION_WITH_MOD_EXTENDED,
    EXPLODING_ROLL_WITH_EXPLOSION_NO_MOD_EXTENDED,
    EXPLODING_ROLL_NO_EXPLOSION_WITH_MOD_EXTENDED,
} from '../mocks';
import * as rollsService from '../../services/explodingRolls.rolls.service';

describe('ExplodingDieRollFormatter', () => {
    let model: ExplodingDieRollFormatter;

    beforeEach(() => {
        model = new ExplodingDieRollFormatter();
    });

    describe('prepareRollResult', () => {
        beforeEach(() => {});

        test('Should prepare roll result correctly (no explosion)', () => {
            jest.spyOn(rollsService, 'rollExplodingDice').mockReturnValue(EXPLODING_ROLL_NO_EXPLOSION.allRolls);
            jest.spyOn(rollsService, 'summaryExplodingDie').mockReturnValue(EXPLODING_ROLL_NO_EXPLOSION.roll);

            const result = model.prepareRollResult(EXPLODING_ROLL_NO_EXPLOSION.dice);
            expect(result).toEqual(EXPLODING_ROLL_NO_EXPLOSION);
        });

        test('Should prepare roll result correctly (no explosion)', () => {
            jest.spyOn(rollsService, 'rollExplodingDice').mockReturnValue(EXPLODING_ROLL_NO_EXPLOSION.allRolls);
            jest.spyOn(rollsService, 'summaryExplodingDie').mockReturnValue(EXPLODING_ROLL_NO_EXPLOSION.roll);

            const result = model.prepareRollResult(EXPLODING_ROLL_NO_EXPLOSION.dice);
            expect(result).toEqual(EXPLODING_ROLL_NO_EXPLOSION);
        });
    });

    describe('prepareExtendedRoll', () => {
        test('Should prepare extended explosion roll (no explosion, no mod)', () => {
            const result = model.prepareExtendedRoll(
                EXPLODING_ROLL_NO_EXPLOSION,
                EXPLODING_ROLL_NO_EXPLOSION_NO_MOD_EXTENDED.mod,
            );
            expect(result).toEqual(EXPLODING_ROLL_NO_EXPLOSION_NO_MOD_EXTENDED);
        });

        test('Should prepare extended explosion roll (explosion, no mod)', () => {
            const result = model.prepareExtendedRoll(
                EXPLODING_ROLL_WITH_EXPLOSION,
                EXPLODING_ROLL_WITH_EXPLOSION_NO_MOD_EXTENDED.mod,
            );
            expect(result).toEqual(EXPLODING_ROLL_WITH_EXPLOSION_NO_MOD_EXTENDED);
        });

        test('Should prepare extended explosion roll (explosion, mod)', () => {
            const result = model.prepareExtendedRoll(
                EXPLODING_ROLL_WITH_EXPLOSION,
                EXPLODING_ROLL_WITH_EXPLOSION_WITH_MOD_EXTENDED.mod,
            );
            expect(result).toEqual(EXPLODING_ROLL_WITH_EXPLOSION_WITH_MOD_EXTENDED);
        });

        test('Should prepare extended explosion roll - (no explosion, mod)', () => {
            const result = model.prepareExtendedRoll(
                EXPLODING_ROLL_NO_EXPLOSION,
                EXPLODING_ROLL_NO_EXPLOSION_WITH_MOD_EXTENDED.mod,
            );
            expect(result).toEqual(EXPLODING_ROLL_NO_EXPLOSION_WITH_MOD_EXTENDED);
        });
    });
});

export {};
