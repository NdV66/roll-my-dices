import * as cookiesService from '../../services/cookies.service';
import { DEFAULTS } from '../../defaults';
import { AppThemeModel } from '../../models/AppThemeModel';
import { DARK_THEME } from '../../styles';
import { AppTheme } from '../../types';

describe('AppThemeModel', () => {
    let model: AppThemeModel;

    beforeEach(() => {
        model = new AppThemeModel();
    });

    const subscribeToAppTheme = (expectedTheme: AppTheme, done: jest.DoneCallback) => {
        model.appTheme.subscribe((data) => {
            expect(data).toEqual(expectedTheme);
            done();
        });
    };

    describe('changeAppTheme', () => {
        test('Should change app theme (short name)', (done) => {
            const expectedTheme = AppTheme.DARK;

            subscribeToAppTheme(expectedTheme, done);
            model.changeAppTheme(expectedTheme);
        });

        test('Should change app theme (full theme)', (done) => {
            const expectedTheme = DARK_THEME;

            model.theme.subscribe((data) => {
                expect(data).toEqual(expectedTheme);
                done();
            });

            model.changeAppTheme(AppTheme.DARK);
        });
    });

    describe('setDefaultValue', () => {
        test('when there is no saved data', (done) => {
            jest.spyOn(cookiesService, 'getFromCookies').mockReturnValue(undefined as any);

            subscribeToAppTheme(DEFAULTS.APP_THEME, done);
            model.setDefaultValue();
        });

        test('when there is a saved data', (done) => {
            const expectedTheme = AppTheme.DARK;
            jest.spyOn(cookiesService, 'getFromCookies').mockReturnValue(expectedTheme as any);

            subscribeToAppTheme(expectedTheme, done);
            model.setDefaultValue();
        });
    });
});

export {};
