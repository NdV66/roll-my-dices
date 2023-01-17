import * as cookiesService from '../../services/cookies.service';
import { DEFAULTS } from '../../defaults';
import { LangManager } from '../../langs/LangManager';
import { AppLangModel } from '../../models/AppLangModel';
import { AppLangs, TTranslations } from '../../types';

describe('AppLangModel', () => {
    let model: AppLangModel;

    beforeEach(() => {
        model = new AppLangModel();
    });

    const subscribeToAppLang = (expectedLang: AppLangs, done: jest.DoneCallback) => {
        model.appLang.subscribe((data) => {
            expect(data).toEqual(expectedLang);
            done();
        });
    };

    describe('changeAppLang', () => {
        test('Should change app lang (short name)', (done) => {
            const expectedLang = AppLangs.PL;
            subscribeToAppLang(expectedLang, done);
            model.changeAppLang(expectedLang);
        });

        test('Should change app lang (full translations)', (done) => {
            const lang = AppLangs.PL;
            const expectedTranslations = LangManager.getSingleton<TTranslations>(lang);

            model.translations.subscribe((data) => {
                expect(data).toEqual(expectedTranslations);
                done();
            });

            model.changeAppLang(lang);
        });
    });

    describe('setDefaultValue', () => {
        test('when there is no saved data', (done) => {
            const expectedLang = DEFAULTS.LANG;
            jest.spyOn(cookiesService, 'getFromCookies').mockReturnValue(undefined as any);
            subscribeToAppLang(expectedLang, done);
            model.setDefaultValue();
        });

        test('when there is a saved data', (done) => {
            const expectedLang = AppLangs.PL;
            jest.spyOn(cookiesService, 'getFromCookies').mockReturnValue(expectedLang as any);
            subscribeToAppLang(expectedLang, done);
            model.setDefaultValue();
        });
    });
});

export {};
