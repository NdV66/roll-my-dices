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

const ROLL_EXTENDED_MOCK: TRollExtended = {
    ...ROLL_MOCK,
    calculationResult: ROLL_MOCK.roll + 2,
    mod: 2,
};

//First if from BehaviorSubject - return last value on subscribe() immediately

describe('AppRollModel', () => {
    let testScheduler: TestScheduler;
    let model: AppRollModel;

    beforeEach(() => {
        model = new AppRollModel();
        testScheduler = new TestScheduler((actual, expected) => {
            console.log(actual, expected);
            expect(actual).toEqual(expected);
        });
    });

    test('Should get max by dice type', () => {
        const dice = DiceTypes.D_20;
        const max = 20;

        const result = AppRollModel.getMaxByDiceType(dice);
        expect(result).toEqual(max);
    });

    describe('cleanAll', () => {
        test('- there are no values', () => {
            testScheduler.run(({ expectObservable, cold }) => {
                cold('-b').subscribe(() => model.cleanAll());

                expectObservable(model.extendedRollSource).toBe('a(bc)', {
                    a: DEFAULTS.EMPTY_ROLL_RESULT,
                    b: DEFAULTS.EMPTY_ROLL_RESULT,
                    c: DEFAULTS.EMPTY_ROLL_RESULT,
                });

                expectObservable(model.rollModSource).toBe('ab', {
                    a: DEFAULTS.MOD,
                    b: DEFAULTS.MOD,
                });
            });
        });

        // test('- there are values (roll and mod)', () => {
        //     testScheduler.run(({ expectObservable, cold }) => {
        //         jest.spyOn(rollsService, 'rollDices').mockReturnValue([ROLL_MOCK.roll]);
        //         model.rollDice(ROLL_MOCK.dice);
        //         model.updateRollMod(ROLL_EXTENDED_MOCK.mod);

        //         cold('-b').subscribe(() => model.cleanAll());

        //         expectObservable(model.extendedRollSource).toBe('a(bc)', {
        //             a: DEFAULTS.EMPTY_ROLL_RESULT,
        //             b: DEFAULTS.EMPTY_ROLL_RESULT,
        //             c: DEFAULTS.EMPTY_ROLL_RESULT,
        //         });

        //         expectObservable(model.rollModSource).toBe('ab', {
        //             a: DEFAULTS.MOD,
        //             b: DEFAULTS.MOD,
        //         });
        //     });
        // });
    });

    describe('extendedRollSource', () => {
        beforeEach(() => {
            jest.spyOn(rollsService, 'rollDices').mockReturnValue([ROLL_MOCK.roll]);
        });

        test('Should roll a dice (prepare a new result)', () => {
            testScheduler.run(({ expectObservable, cold }) => {
                cold('-b').subscribe(() => model.rollDice(ROLL_MOCK.dice));

                expectObservable(model.extendedRollSource).toBe('ab', {
                    a: DEFAULTS.EMPTY_ROLL_RESULT,
                    b: ROLL_EXTENDED_NO_MOD_MOCK,
                });
            });
        });

        test('Should roll a dice with mode (mod first)', () => {
            testScheduler.run(({ expectObservable, cold }) => {
                cold('-b').subscribe(() => model.rollModSource.next(ROLL_EXTENDED_MOCK.mod));
                cold('-c').subscribe(() => model.rollDice(ROLL_MOCK.dice));

                expectObservable(model.extendedRollSource).toBe('a(bc)', {
                    a: DEFAULTS.EMPTY_ROLL_RESULT,
                    b: null, //because roll is empty yet
                    c: ROLL_EXTENDED_MOCK,
                });
            });
        });

        test('Should roll a dice with mode (roll first)', () => {
            testScheduler.run(({ expectObservable, cold }) => {
                cold('-b').subscribe(() => model.rollDice(ROLL_MOCK.dice));
                cold('-c').subscribe(() => model.rollModSource.next(ROLL_EXTENDED_MOCK.mod));

                expectObservable(model.extendedRollSource).toBe('a(bc)', {
                    a: DEFAULTS.EMPTY_ROLL_RESULT,
                    b: ROLL_EXTENDED_NO_MOD_MOCK,
                    c: ROLL_EXTENDED_MOCK,
                });
            });
        });
    });

    describe('updateRollMod', () => {
        test('Should be default value on enter', () => {
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
    });
});

export {};
