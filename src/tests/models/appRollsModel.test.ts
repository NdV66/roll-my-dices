import * as rollsService from '../../services/rolls.service';

import { TestScheduler } from 'rxjs/testing';
import { DEFAULTS } from '../../defaults';
import { AppRollModel } from '../../models/AppRollModel';
import { ROLL_MOCK, ROLL_EXTENDED_NO_MOD_MOCK, ROLL_EXTENDED_MOCK } from '../mocks';

describe('AppRollModel', () => {
    let testScheduler: TestScheduler;
    let model: AppRollModel;

    beforeEach(() => {
        model = new AppRollModel();
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    describe('rollDice', () => {
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
                cold('-b').subscribe(() => model['_rollModSource'].next(ROLL_EXTENDED_MOCK.mod));
                cold('-c').subscribe(() => model.rollDice(ROLL_MOCK.dice));

                expectObservable(model.extendedRollSource).toBe('a(bc)', {
                    a: null,
                    b: null,
                    c: ROLL_EXTENDED_MOCK,
                });
            });
        });

        test('Should roll a dice with mode (roll first)', () => {
            testScheduler.run(({ expectObservable, cold }) => {
                cold('-b').subscribe(() => model.rollDice(ROLL_MOCK.dice));
                cold('-c').subscribe(() => model['_rollModSource'].next(ROLL_EXTENDED_MOCK.mod));

                expectObservable(model.extendedRollSource).toBe('a(bc)', {
                    a: DEFAULTS.EMPTY_ROLL_RESULT,
                    b: ROLL_EXTENDED_NO_MOD_MOCK,
                    c: ROLL_EXTENDED_MOCK,
                });
            });
        });
    });
});

export {};
