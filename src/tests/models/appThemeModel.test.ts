import * as cookiesService from '../../services/cookies.service';
import { AppTheme } from '../../types';
import { TestScheduler } from 'rxjs/testing';
import { DEFAULTS } from '../../defaults';
import { AppThemeModel, selectTheme } from '../../models/AppThemeModel';

const EMIT_PATTERN = '-a';

describe('AppThemeModel', () => {
    let testScheduler: TestScheduler;
    let model: AppThemeModel;

    beforeEach(() => {
        model = new AppThemeModel();
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    describe('changeAppTheme', () => {
        test('Should change app theme (short name)', () => {
            testScheduler.run(({ cold, expectObservable }) => {
                const expectedTheme = AppTheme.DARK;
                cold(EMIT_PATTERN).subscribe(() => model.changeAppTheme(expectedTheme));
                expectObservable(model.appTheme).toBe(EMIT_PATTERN, { a: expectedTheme });
            });
        });

        test('Should change app theme (full translations)', () => {
            testScheduler.run(({ cold, expectObservable }) => {
                const theme = AppTheme.DARK;
                const expectedValue = selectTheme(theme);
                cold(EMIT_PATTERN).subscribe(() => model.changeAppTheme(theme));

                expectObservable(model.theme).toBe(EMIT_PATTERN, { a: expectedValue });
            });
        });
    });

    describe('setDefaultValue', () => {
        test('when there is no saved data', () => {
            const expectedTheme = DEFAULTS.APP_THEME;
            jest.spyOn(cookiesService, 'getFromCookies').mockReturnValue(undefined as any);

            testScheduler.run(({ cold, expectObservable }) => {
                cold(EMIT_PATTERN).subscribe(() => model.setDefaultValue());
                expectObservable(model.appTheme).toBe(EMIT_PATTERN, { a: expectedTheme });
            });
        });

        test('when there is a saved data', () => {
            const expectedTheme = AppTheme.DARK;
            jest.spyOn(cookiesService, 'getFromCookies').mockReturnValue(expectedTheme as any);

            testScheduler.run(({ cold, expectObservable }) => {
                cold(EMIT_PATTERN).subscribe(() => model.setDefaultValue());
                expectObservable(model.appTheme).toBe(EMIT_PATTERN, { a: expectedTheme });
            });
        });
    });
});

export {};
