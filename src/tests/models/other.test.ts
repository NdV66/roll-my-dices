import { Subject, connect } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { AppLangs } from '../../types';
import { AppLangModel } from '../../models/AppLangModel';

describe('Marble Testing', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('test with values', () => {
        testScheduler.run((helpers) => {
            const { cold, expectObservable } = helpers;
            const ss = new Subject<number>();
            cold('-a').subscribe(() => ss.next(22));
            const expected = '-a';

            expectObservable(ss).toBe(expected, { a: 22 });
        });
    });

    it('test with values', () => {
        testScheduler.run((helpers) => {
            const { hot, expectObservable } = helpers;
            const ss = new Subject<AppLangs>();
            const ss2 = ss.pipe(connect(() => ss));

            hot('-a').subscribe(() => ss.next(AppLangs.EN));
            const expected = '-a';

            expectObservable(ss2).toBe(expected, { a: AppLangs.EN });
        });
    });

    it('test with values', () => {
        testScheduler.run((helpers) => {
            const model = new AppLangModel();
            const expected = '-a';
            const { hot, expectObservable } = helpers;

            hot('-a').subscribe(() => model.changeAppLang(AppLangs.PL));

            expectObservable(model.appLang).toBe(expected, { a: AppLangs.PL });
        });
    });
});

export {};
