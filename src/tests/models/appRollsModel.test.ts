import * as rollsService from '../../services/rolls.service';

import { DiceTypes, TRoll, TRollExtended } from '../../types';
import { TestScheduler } from 'rxjs/testing';
import { DEFAULTS } from '../../defaults';
import { AppRollModel } from '../../models/AppRollModel';

const EMIT_PATTERN = '-a';

const ROLL_MOCK: TRoll = {
    dice: DiceTypes.D_20,
    roll: 6,
};

const ROLL_EXTENDED_NO_MOD_MOCK: TRollExtended = {
    ...ROLL_MOCK,
    calculationResult: ROLL_MOCK.roll,
    mod: DEFAULTS.MOD,
};

describe('AppRollModel', () => {
    let testScheduler: TestScheduler;
    let model: AppRollModel;

    beforeEach(() => {
        model = new AppRollModel();
        testScheduler = new TestScheduler((actual, expected) => {
            console.log('>>', actual, expected);
            expect(actual).toEqual(expected);
        });
    });

    test('Should get max by dice type', () => {
        const dice = DiceTypes.D_20;
        const max = 20;

        const result = AppRollModel.getMaxByDiceType(dice);
        expect(result).toEqual(max);
    });

    describe('updateRollMod', () => {
        test.skip('Should be default value on enter', () => {
            testScheduler.run(({ expectObservable }) => {
                const mod = DEFAULTS.MOD;
                expectObservable(model.rollModSource).toBe('a', { a: mod });
            });
        });

        test('Should update roll mod', () => {
            testScheduler.run(({ expectObservable, cold }) => {
                const mod = 6;
                cold('-b').subscribe(() => model.updateRollMod(mod));
                expectObservable(model.rollModSource).toBe('ab', { a: DEFAULTS.MOD, b: mod });
            });
        });

        // describe('rollDice', () => {
        //     test('Should roll a dice', () => {
        //         jest.spyOn(rollsService, 'rollDices').mockReturnValue([ROLL_MOCK.roll]);

        //         testScheduler.run(({ expectObservable, cold }) => {
        //             cold('-b').subscribe(() => model.rollDice(ROLL_MOCK.dice));
        //             const x = null;

        //             model.rollDice(ROLL_MOCK.dice);
        //             expectObservable(model.extendedRollSource).toBe('ab', { a: x, b: ROLL_EXTENDED_NO_MOD_MOCK });
        //         });
        //     });
        // });
    });
});

export {};
