import * as modelsTools from '../../context/models';
import * as contextTools from '../../context/AppContext';
import { MainContentTab, TAppContext } from '../../types';
import { getAppContextMock } from '../mocks/appContext';
import { renderHook } from '@testing-library/react';
import { useCleanEverythingModel } from '../../viewModels/useCleanEverythingModel';
import { AppRollModel } from '../../models/AppRollModel';
import { appRollModelMock } from '../mocks/appRollModelMock';
import { Observable } from 'rxjs';
import { ROLL_EXTENDED_MOCK, ROLL_EXTENDED_NO_MOD_MOCK } from '../models/mocks';
import { DEFAULTS } from '../../defaults';

describe('useCleanEverythingModel', () => {
    let modelMock: AppRollModel;
    let contextMock: TAppContext;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        contextMock = getAppContextMock() as any as TAppContext;
        modelMock = appRollModelMock() as any as AppRollModel;

        jest.spyOn(modelsTools, 'getModelByMainTabKey').mockReturnValue(modelMock);
        jest.spyOn(contextTools, 'useAppContext').mockReturnValue(contextMock);
    });

    test('Should return expected data', () => {
        const { result } = renderHook(() => useCleanEverythingModel(MainContentTab.CLASSIC_D20));
        const expectedValue = {
            theme: contextMock.theme,
            onCleanAll: expect.any(Function),
            translations: contextMock.translations,
            disabled: expect.any(Boolean),
        };

        expect(result.current).toEqual(expectedValue);
    });

    test('Should call clean on model, when cleaning', () => {
        const { result } = renderHook(() => useCleanEverythingModel(MainContentTab.CLASSIC_D20));
        result.current.onCleanAll();

        expect(modelMock.cleanAll).toBeCalled();
    });

    describe('Disabled', () => {
        test('- false, if rollModSource is not default and roll is existed', () => {
            modelMock.rollModSource = new Observable((observer) => observer.next(ROLL_EXTENDED_MOCK.mod));
            modelMock.extendedRollSource = new Observable((observer) => observer.next(ROLL_EXTENDED_MOCK));

            const { result } = renderHook(() => useCleanEverythingModel(MainContentTab.CLASSIC_D20));
            expect(result.current.disabled).toBe(false);
        });

        test('- false, if mod is not existed but there is roll', () => {
            modelMock.rollModSource = new Observable((observer) => observer.next(DEFAULTS.MOD));
            modelMock.extendedRollSource = new Observable((observer) => observer.next(ROLL_EXTENDED_NO_MOD_MOCK));

            const { result } = renderHook(() => useCleanEverythingModel(MainContentTab.CLASSIC_D20));
            expect(result.current.disabled).toBe(false);
        });

        test('- false, if roll is not existed but there is mod', () => {
            modelMock.rollModSource = new Observable((observer) => observer.next(ROLL_EXTENDED_MOCK.mod));
            modelMock.extendedRollSource = new Observable((observer) => observer.next(DEFAULTS.EMPTY_ROLL_RESULT));

            const { result } = renderHook(() => useCleanEverythingModel(MainContentTab.CLASSIC_D20));
            expect(result.current.disabled).toBe(false);
        });

        test('- true, if roll and mod are not existed', () => {
            modelMock.rollModSource = new Observable((observer) => observer.next(DEFAULTS.MOD));
            modelMock.extendedRollSource = new Observable((observer) => observer.next(DEFAULTS.EMPTY_ROLL_RESULT));

            const { result } = renderHook(() => useCleanEverythingModel(MainContentTab.CLASSIC_D20));
            expect(result.current.disabled).toBe(true);
        });
    });
});

export {};
