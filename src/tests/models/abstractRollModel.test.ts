//First value - from BehaviorSubject - return last value on subscribe() immediately
import { DiceTypes, TRoll, TRollExtended } from '../../types';
import { TestScheduler } from 'rxjs/testing';
import { DEFAULTS } from '../../defaults';
import { AbstractRollModel } from '../../models/AbstractRollModel';
import { ROLL_EXTENDED_MOCK, ROLL_MOCK } from './mocks';

class AbstractRollModelMock extends AbstractRollModel<TRoll, TRollExtended> {
    protected prepareExtendedRoll = jest.fn();
    protected prepareRollResult = jest.fn();
}

describe('AbstractRollModel', () => {
    let testScheduler: TestScheduler;
    let model: AbstractRollModelMock;

    beforeEach(() => {
        model = new AbstractRollModelMock();
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    test('Should get max by dice type', () => {
        const dice = DiceTypes.D_20;
        const max = 20;

        const result = AbstractRollModelMock.getMaxByDiceType(dice);
        expect(result).toEqual(max);
    });

    test('Should call protected prepareRollResult(), when rollDice() is called', () => {
        model.rollDice(DiceTypes.D_20);
        expect(model['prepareRollResult']).toHaveBeenCalled();
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

    describe('cleanAll', () => {
        test('- there are no values', () => {
            testScheduler.run(({ expectObservable, cold }) => {
                cold('a').subscribe(() => model.cleanAll());

                expectObservable(model.extendedRollSource).toBe('a', {
                    a: DEFAULTS.EMPTY_ROLL_RESULT,
                });

                expectObservable(model.rollModSource).toBe('a', {
                    a: DEFAULTS.MOD,
                });
            });
        });

        test('- there are values (roll and mod)', () => {
            testScheduler.run(({ expectObservable, cold }) => {
                model['_rollSource'].next(ROLL_MOCK);
                model['_rollModSource'].next(ROLL_EXTENDED_MOCK.mod);

                cold('-a').subscribe(() => model.cleanAll());

                expectObservable(model.extendedRollSource).toBe('a', {
                    a: DEFAULTS.EMPTY_ROLL_RESULT,
                });

                expectObservable(model.rollModSource).toBe('ab', {
                    a: ROLL_EXTENDED_MOCK.mod,
                    b: DEFAULTS.MOD,
                });
            });
        });

        test('- there is only roll (mod is default)', () => {
            testScheduler.run(({ expectObservable, cold }) => {
                model['_rollSource'].next(ROLL_MOCK);

                cold('-b').subscribe(() => model.cleanAll());

                expectObservable(model.extendedRollSource).toBe('a', {
                    a: DEFAULTS.EMPTY_ROLL_RESULT,
                });

                expectObservable(model.rollModSource).toBe('ab', {
                    a: DEFAULTS.MOD,
                    b: DEFAULTS.MOD,
                });
            });
        });

        test('- there is only mod (roll is default)', () => {
            testScheduler.run(({ expectObservable, cold }) => {
                model['_rollModSource'].next(ROLL_EXTENDED_MOCK.mod);

                cold('-b').subscribe(() => model.cleanAll());

                expectObservable(model.extendedRollSource).toBe('a', {
                    a: DEFAULTS.EMPTY_ROLL_RESULT,
                });

                expectObservable(model.rollModSource).toBe('ab', {
                    a: ROLL_EXTENDED_MOCK.mod,
                    b: DEFAULTS.MOD,
                });
            });
        });
    });
});

export {};
