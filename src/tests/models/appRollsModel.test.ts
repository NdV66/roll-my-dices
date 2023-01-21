import * as cookiesService from '../../services/cookies.service';

import { AppLangs, AppTheme, DiceTypes } from '../../types';
import { AppLangModel, getLangFromManager } from '../../models/AppLangModel';
import { TestScheduler } from 'rxjs/testing';
import { DEFAULTS } from '../../defaults';
import { AppThemeModel, selectTheme } from '../../models/AppThemeModel';
import { AppRollModel } from '../../models/AppRollModel';

const EMIT_PATTERN = '-a';

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

    // test('Should update roll mod', () => {
    //     testScheduler.run(({ expectObservable, cold }) => {
    //         const mod = 6;
    //         cold(EMIT_PATTERN).subscribe(() => model.updateRollMod(mod));

    //         expectObservable(model.rollModSource).toBe(EMIT_PATTERN, { a: mod });
    //     });
    // });
});

export {};
