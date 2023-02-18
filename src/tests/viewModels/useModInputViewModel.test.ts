import * as contextTools from '../../context/AppContext';
import * as modelsTools from '../../context/models';
import { MainContentTab, TAppContext } from '../../types';
import { appRollModelMock, getAppContextMock } from '../mocks';
import { renderHook } from '@testing-library/react';
import { DEFAULTS } from '../../defaults';
import { act } from 'react-dom/test-utils';
import { useModInputViewModel } from '../../viewModels';
import { AppRollModel } from '../../models/AppRollModel';
import { Observable } from 'rxjs';

const OK_VALUE_MOCK = '2';
const OK_VALUE_NUMBER_MOCK = 2;
const WRONG_VALUE_MOCK = 'Narin';

const openOnEnter = (result: any) => {
    act(() => {
        result.current.toggleShowInput();
    });
    expect(result.current.showInput).toBe(true);
};

const setOkValue = (result: any) => {
    act(() => result.current.updateCurrentValue(OK_VALUE_MOCK));
    expect(result.current.currentValue).toBe(OK_VALUE_MOCK);
};

const setWrongValue = (result: any) => {
    act(() => result.current.updateCurrentValue(WRONG_VALUE_MOCK));
    expect(result.current.currentValue).toBe(WRONG_VALUE_MOCK);
};

const setOkValueOnEnter = (result: any) => {
    openOnEnter(result);
    setOkValue(result);
};

const setWrongValueOnEnter = (result: any) => {
    openOnEnter(result);
    setWrongValue(result);
};

describe('useModInputViewModel', () => {
    let contextMock: TAppContext;
    let rollModelMock: AppRollModel;

    beforeEach(() => {
        contextMock = getAppContextMock() as any as TAppContext;
        rollModelMock = appRollModelMock() as any as AppRollModel;

        jest.spyOn(contextTools, 'useAppContext').mockReturnValue(contextMock);
        jest.spyOn(modelsTools, 'getModelByMainTabKey').mockReturnValue(rollModelMock);
    });

    test('Should return data in expected format', () => {
        const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
        const expectedValue = {
            theme: contextMock.theme,
            translations: contextMock.translations,
            toggleShowInput: expect.any(Function),
            showInput: expect.any(Boolean),
            updateCurrentValue: expect.any(Function),
            currentValue: expect.any(String),
            onConfirm: expect.any(Function),
            onRemove: expect.any(Function),
            isCurrentValueOk: expect.any(Boolean),
            currentConfirmedMod: expect.any(Number),
            onCloseModal: expect.any(Function),
        };

        expect(result.current).toEqual(expectedValue);
    });

    test('onRemove', () => {
        const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));

        act(() => result.current.updateCurrentValue(OK_VALUE_MOCK));
        expect(result.current.currentValue).toBe(OK_VALUE_MOCK);

        act(() => result.current.onRemove());
        expect(result.current.currentValue).toBe(DEFAULTS.EMPTY_MOD);
        expect(rollModelMock.updateRollMod).toBeCalledWith(DEFAULTS.MOD);
    });

    describe('currentConfirmedMod', () => {
        test('Should be default value on enter', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            expect(result.current.currentConfirmedMod).toEqual(DEFAULTS.MOD);
        });

        test('Should change value, when source is changed', () => {
            (rollModelMock as any).rollModSource = new Observable((observer) => observer.next(OK_VALUE_NUMBER_MOCK));
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));

            expect(result.current.currentConfirmedMod).toEqual(OK_VALUE_NUMBER_MOCK);
        });
    });

    describe('updateCurrentValue', () => {
        test('Should update current value (as wrong)', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            act(() => result.current.updateCurrentValue(WRONG_VALUE_MOCK));

            expect(result.current.currentValue).toEqual(WRONG_VALUE_MOCK);
        });

        test('Should update current value (as ok)', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            act(() => result.current.updateCurrentValue(OK_VALUE_MOCK));

            expect(result.current.currentValue).toEqual(OK_VALUE_MOCK);
        });

        test('Should update current value (as default)', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            act(() => result.current.updateCurrentValue());

            expect(result.current.currentValue).toEqual(DEFAULTS.EMPTY_MOD);
        });

        test('Should update current value (with trim)', () => {
            const valueWithSpaces = OK_VALUE_MOCK + '   ';
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            act(() => result.current.updateCurrentValue(valueWithSpaces));

            expect(result.current.currentValue).toEqual(OK_VALUE_MOCK);
        });
    });

    describe('isCurrentValueOk', () => {
        test('Should be not ok on enter', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            expect(result.current.isCurrentValueOk).toBe(false);
        });

        test('Should be ok, when current value is ok', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            setOkValueOnEnter(result);

            expect(result.current.isCurrentValueOk).toBe(true);
        });

        test('Should be not ok, when current value is not ok', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            setWrongValueOnEnter(result);

            expect(result.current.isCurrentValueOk).toBe(false);
        });

        test('Should be ok then not ok (value is changed from ok to not ok)', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            openOnEnter(result);

            setOkValue(result);
            expect(result.current.isCurrentValueOk).toBe(true);

            setWrongValue(result);
            expect(result.current.isCurrentValueOk).toBe(false);
        });

        test('Should be not ok then ok (value is changed from not ok to ok)', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            openOnEnter(result);

            setWrongValue(result);
            expect(result.current.isCurrentValueOk).toBe(false);

            setOkValue(result);
            expect(result.current.isCurrentValueOk).toBe(true);
        });
    });

    describe('showInput', () => {
        test('Should be close on enter', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            expect(result.current.showInput).toBe(false);
        });

        test('Should open', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            act(() => result.current.toggleShowInput());

            expect(result.current.showInput).toBe(true);
        });

        test('Should open and then close', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));

            act(() => result.current.toggleShowInput());
            expect(result.current.showInput).toBe(true);

            act(() => result.current.toggleShowInput());
            expect(result.current.showInput).toBe(false);
        });
    });

    describe('onConfirm (modal has to be visible on enter in every case)', () => {
        test('Should update mod with given value', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            setOkValueOnEnter(result);

            act(() => result.current.onConfirm());

            expect(result.current.showInput).toBe(false);
            expect(rollModelMock.updateRollMod).toBeCalledWith(OK_VALUE_NUMBER_MOCK);
        });

        test('Should update mod with default value', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            setWrongValueOnEnter(result);

            act(() => result.current.onConfirm());

            expect(result.current.showInput).toBe(false);
            expect(rollModelMock.updateRollMod).toBeCalledWith(DEFAULTS.MOD);
        });
    });

    describe('onCloseModal (modal has to be visible on enter in every case)', () => {
        test('Should close and clean (value is not ok)', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            setWrongValueOnEnter(result);

            act(() => result.current.onCloseModal());

            expect(result.current.showInput).toBe(false);
            expect(result.current.currentValue).toBe(DEFAULTS.EMPTY_MOD);
        });

        test('Should close and not clean (value is ok)', () => {
            const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
            setOkValueOnEnter(result);

            act(() => result.current.onCloseModal());

            expect(result.current.showInput).toBe(false);
            expect(result.current.currentValue).toBe(OK_VALUE_MOCK);
        });
    });
});

export {};
