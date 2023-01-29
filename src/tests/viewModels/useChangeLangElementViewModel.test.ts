import * as contextTool from '../../../src/context/AppContext';
import * as modelsTools from '../../../src/context/models';
import { TEXTS_PL } from '../../langs/pl';
import { DARK_THEME } from '../../styles';
// import { AppLangs } from '../../types';
import { AppLangModel } from '../../../src/models/AppLangModel';
// import { renderHook } from '@testing-library/react';
// import { useChangeLangElementViewModel } from '../../viewModels';
// import { act } from 'react-dom/test-utils';

const CONTEXT_VALUES_MOCK = {
    translations: TEXTS_PL,
    theme: DARK_THEME,
    changeAppLang: jest.fn(),
} as any;

describe('useChangeLangElementViewModel', () => {
    let appLangModelMock: AppLangModel;

    beforeEach(() => {
        appLangModelMock = new AppLangModel();
        appLangModelMock.setDefaultValue = jest.fn();
        appLangModelMock.changeAppLang = jest.fn();
        appLangModelMock['_saveLangCookieOnChange'] = jest.fn();

        jest.spyOn(contextTool, 'useAppContext').mockReturnValue(CONTEXT_VALUES_MOCK);
        jest.spyOn(modelsTools, 'getModelByKey').mockReturnValue(appLangModelMock);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should return expected object', () => {
        // const { result } = renderHook(() => useChangeLangElementViewModel());
        // const expectedValue = {
        //     translations: CONTEXT_VALUES_MOCK.translations,
        //     onClickItem: expect.any(Function),
        //     appLang: expect.any(String),
        //     items: [],
        //     theme: CONTEXT_VALUES_MOCK.theme,
        // };
        // expect(result.current).toEqual(expectedValue);
    });

    // test('Should call action from context on onClickItem', () => {
    //     const expectedAppLang = AppLangs.EN;
    //     const { result } = renderHook(() => useChangeLangElementViewModel());

    //     result.current.onClickItem({ key: expectedAppLang } as any);
    //     expect(CONTEXT_VALUES_MOCK.changeAppLang).toBeCalledWith(expectedAppLang);
    // });

    // test('Should update items', () => {
    //     const { result } = renderHook(() => useChangeLangElementViewModel());

    //     act(() => {
    //         appLangModelMock.changeAppLang(AppLangs.EN);
    //     });

    //     console.log(result.current.appLang);
    // });
});

export {};
