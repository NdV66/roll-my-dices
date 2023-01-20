import { DiceTypes, TRollExtended } from '../../types';
import { AppRollModel } from '../../models/AppRollModel';
import { DEFAULTS } from '../../defaults';

const ROLL_RESULT_MOCK: TRollExtended = {
    calculationResult: 10,
    mod: 2,
    dice: DiceTypes.D_10,
    roll: 8,
};

describe('AppRollsModel', () => {
    let model: AppRollModel;

    beforeEach(() => {
        model = new AppRollModel();
    });

    const subscribeRollModSource = (expectedValue: number, done?: jest.DoneCallback) =>
        model.rollModSource.subscribe((data) => {
            expect(data).toEqual(expectedValue);
            done?.();
        });

    const subscribeExtendedRollSource = (expectedValue: TRollExtended | null, done?: jest.DoneCallback) =>
        model.extendedRollSource.subscribe((data) => {
            expect(data).toEqual(expectedValue);
            done?.();
        });

    describe('Should clean all', () => {
        test('extendedRollSource', (done) => {
            model.extendedRollSource.next(ROLL_RESULT_MOCK);
            model.cleanAll();
            subscribeExtendedRollSource(DEFAULTS.EMPTY_ROLL_RESULT, done);
        });
    });
});

export {};
