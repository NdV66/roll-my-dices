import { DiceTypes, IDieRollFormatter, TRoll, TRollExtended } from '../../types';
import { TestScheduler } from 'rxjs/testing';
import { DEFAULTS } from '../../defaults';
import { AbstractRollModel } from '../../models/AbstractRollModel';
import { ROLL_EXTENDED_MOCK, ROLL_EXTENDED_NO_MOD_MOCK, ROLL_MOCK } from '../mocks';

class DieRollFormatter implements IDieRollFormatter<TRoll, TRollExtended> {
    prepareExtendedRoll = jest.fn();
    prepareRollResult = jest.fn();
}

class AbstractRollModelMock extends AbstractRollModel<TRoll, TRollExtended> {
    constructor() {
        super(new DieRollFormatter());
    }
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

    test('Should call prepareRollResult(), when rollDice() is called', () => {
        model.rollDice(DiceTypes.D_20);
        expect(model['_dieRollFormatter'].prepareRollResult).toHaveBeenCalled();
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
                (model['_dieRollFormatter'].prepareExtendedRoll as any).mockReturnValue(DEFAULTS.EMPTY_ROLL_RESULT);
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
                (model['_dieRollFormatter'].prepareExtendedRoll as any).mockReturnValue(ROLL_EXTENDED_MOCK);
                model['_rollSource'].next(ROLL_MOCK);
                model['_rollModSource'].next(ROLL_EXTENDED_MOCK.mod);

                (model['_dieRollFormatter'].prepareExtendedRoll as any).mockReturnValue(DEFAULTS.EMPTY_ROLL_RESULT);
                cold('-a').subscribe(() => model.cleanAll());

                expectObservable(model.extendedRollSource).toBe('a(bc)', {
                    a: ROLL_EXTENDED_MOCK,
                    b: DEFAULTS.EMPTY_ROLL_RESULT,
                    c: DEFAULTS.EMPTY_ROLL_RESULT,
                });

                expectObservable(model.rollModSource).toBe('ab', {
                    a: ROLL_EXTENDED_MOCK.mod,
                    b: DEFAULTS.MOD,
                });
            });
        });

        test('- there is only roll (mod is default)', () => {
            testScheduler.run(({ expectObservable, cold }) => {
                (model['_dieRollFormatter'].prepareExtendedRoll as any).mockReturnValue(ROLL_EXTENDED_NO_MOD_MOCK);
                model['_rollSource'].next(ROLL_MOCK);

                (model['_dieRollFormatter'].prepareExtendedRoll as any).mockReturnValue(DEFAULTS.EMPTY_ROLL_RESULT);
                cold('-b').subscribe(() => model.cleanAll());

                expectObservable(model.extendedRollSource).toBe('a(bc)', {
                    a: ROLL_EXTENDED_NO_MOD_MOCK,
                    b: DEFAULTS.EMPTY_ROLL_RESULT,
                    c: DEFAULTS.EMPTY_ROLL_RESULT,
                });

                expectObservable(model.rollModSource).toBe('ab', {
                    a: DEFAULTS.MOD,
                    b: DEFAULTS.MOD,
                });
            });
        });

        test('- there is only mod (roll is default)', () => {
            testScheduler.run(({ expectObservable, cold }) => {
                (model['_dieRollFormatter'].prepareExtendedRoll as any).mockReturnValue(DEFAULTS.EMPTY_ROLL_RESULT);
                model['_rollModSource'].next(ROLL_EXTENDED_MOCK.mod);

                cold('-b').subscribe(() => model.cleanAll());

                expectObservable(model.extendedRollSource).toBe('a(bc)', {
                    a: DEFAULTS.EMPTY_ROLL_RESULT,
                    b: DEFAULTS.EMPTY_ROLL_RESULT,
                    c: DEFAULTS.EMPTY_ROLL_RESULT,
                });

                // expectObservable(model.rollModSource).toBe('ab', {
                //     a: ROLL_EXTENDED_MOCK.mod,
                //     b: DEFAULTS.MOD,
                // });
            });
        });
    });
});

export {};
