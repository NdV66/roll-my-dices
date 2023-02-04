import * as modelsTools from '../../context/models';
import * as contextTools from '../../context/AppContext';
import { AppFateRollModel } from '../../models/AppFateRollModel';
import { TAppContext } from '../../types';
import { getAppContextMock } from '../mocks/appContext';
import { appFateRollModelMock } from '../mocks/appFateRollModel';
import { renderHook } from '@testing-library/react';
import { useFateElementViewModel } from '../../viewModels';
import { Observable } from 'rxjs';
import { ROLL_EXTENDED_NO_MOD_MOCK, FATE_ROLL_EXTENDED_WITH_MOD_MOCK } from '../models/mocks';

describe('useFateElementViewModel', () => {
    let modelMock: AppFateRollModel;
    let contextMock: TAppContext;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        contextMock = getAppContextMock() as any as TAppContext;
        modelMock = appFateRollModelMock() as any as AppFateRollModel;

        jest.spyOn(modelsTools, 'getModelByKey').mockReturnValue(modelMock);
        jest.spyOn(contextTools, 'useAppContext').mockReturnValue(contextMock);
    });

    test('Should return expected data', () => {
        modelMock.extendedRollSource = new Observable((observer) => observer.next(FATE_ROLL_EXTENDED_WITH_MOD_MOCK));

        const { result } = renderHook(useFateElementViewModel);
        const expectedValue = {
            theme: contextMock.theme,
            roll: FATE_ROLL_EXTENDED_WITH_MOD_MOCK,
            translations: contextMock.translations,
            rollDie: expect.any(Function),
        };

        expect(result.current).toEqual(expectedValue);
    });

    test('Should roll die (and use an expected method from the fate model)', () => {
        const { result } = renderHook(useFateElementViewModel);
        result.current.rollDie();

        expect(modelMock.rollDice).toBeCalled();
    });

    test('Should provide a fate result value', () => {
        modelMock.extendedRollSource = new Observable((observer) => observer.next(FATE_ROLL_EXTENDED_WITH_MOD_MOCK));
        const { result } = renderHook(useFateElementViewModel);

        expect(result.current.roll).toEqual(FATE_ROLL_EXTENDED_WITH_MOD_MOCK);
    });
});

export {};
