import { renderHook } from '@testing-library/react';
import * as modelsTools from '../../context/models';
import * as contextTools from '../../context/AppContext';
import { DEFAULTS } from '../../defaults';
import { useChangeLangElementViewModel } from '../../viewModels';
import { appLangModelMock } from '../mocks/appLangModelMock';
import { TEXTS_EN } from '../../langs/en';
import { TEXTS_PL } from '../../langs/pl';
import { LIGHT_THEME } from '../../styles';
import { AppLangModel } from '../../models/AppLangModel';
import { AppLangs } from '../../types';
import { Observable } from 'rxjs';

const CONTEXT_MOCK = {
    translations: TEXTS_EN,
    theme: LIGHT_THEME,
};

describe('useChangeLangElementViewModel', () => {
    let modelMock: AppLangModel;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        modelMock = appLangModelMock() as any as AppLangModel;

        jest.spyOn(modelsTools, 'getModelByKey').mockReturnValue(modelMock);
        jest.spyOn(contextTools, 'useAppContext').mockReturnValue(CONTEXT_MOCK);
    });

    test('Should return all needed fields', () => {
        const { result } = renderHook(useChangeLangElementViewModel);

        const expectedValue = {
            translations: CONTEXT_MOCK.translations,
            onClickItem: expect.any(Function),
            appLang: DEFAULTS.LANG,
            items: expect.any(Array),
            theme: CONTEXT_MOCK.theme,
        };

        expect(result.current).toEqual(expectedValue);
    });

    test('Should change app lang', () => {
        const lang = AppLangs.PL;
        const { result } = renderHook(useChangeLangElementViewModel);
        result.current.onClickItem({ key: lang } as any);

        expect(modelMock.changeAppLang).toBeCalledWith(lang);
    });

    test('Should prepare items', () => {
        const expectedValue = [
            { key: 'en-EN', label: 'English' },
            { key: 'pl-PL', label: 'Polski' },
        ];
        modelMock.translations = new Observable((observer) => observer.next(TEXTS_PL));
        const { result } = renderHook(useChangeLangElementViewModel);
        modelMock.translations = new Observable((observer) => observer.next(TEXTS_EN));

        expect(result.current.items).toEqual(expectedValue);
    });
});

export {};
