import * as contextTools from '../../context/AppContext';
import * as modelsTools from '../../context/models';
import { MainContentTab, TAppContext } from '../../types';
import { appRollModelMock, getAppContextMock } from '../mocks';
import { renderHook } from '@testing-library/react';
import { useMainContentViewModel } from '../../viewModels/useMainContentViewModel';
import { TAB_LISTS } from '../../defaults';
import { act } from 'react-dom/test-utils';
import { useModInputViewModel } from '../../viewModels';
import { AbstractRollModel } from '../../models/AbstractRollModel';
import { AppRollModel } from '../../models/AppRollModel';

describe('useModInputViewModel', () => {
    let contextMock: TAppContext;
    let rollModelMock: AppRollModel;

    beforeEach(() => {
        jest.clearAllMocks();
    });

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

    // describe('onCloseModal', () => {
    //     test('Should clean if current value is not ok', () => {
    //         const { result } = renderHook(() => useModInputViewModel(MainContentTab.CLASSIC_D20));
    //     });
    // })
});

export {};
