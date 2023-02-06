import * as contextTools from '../../context/AppContext';
import * as modelsTools from '../../context/models';
import * as diceTools from '../../services/dices.service';
import { DiceTypes, TAppContext } from '../../types';
import { appRollModelMock, getAppContextMock } from '../mocks';
import { renderHook } from '@testing-library/react';
import { DEFAULTS, DICES_ORDER } from '../../defaults';
import { act } from 'react-dom/test-utils';
import { useRollsElementViewModel } from '../../viewModels';
import { AppRollModel } from '../../models/AppRollModel';
import { Observable } from 'rxjs';
import { ROLL_EXTENDED_MOCK } from '../models/mocks';

const sign = 'X';

describe('useRollsElementViewModel', () => {
    let contextMock: TAppContext;
    let rollModelMock: AppRollModel;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        contextMock = getAppContextMock() as any as TAppContext;
        rollModelMock = appRollModelMock() as any as AppRollModel;

        jest.spyOn(contextTools, 'useAppContext').mockReturnValue(contextMock);
        jest.spyOn(modelsTools, 'getModelByKey').mockReturnValue(rollModelMock);
        jest.spyOn(diceTools, 'mapRollToDice').mockReturnValue(sign);
    });

    test('Should return data in expected format', () => {
        const { result } = renderHook(() => useRollsElementViewModel(DICES_ORDER));
        const expectedValue = {
            theme: contextMock.theme,
            rollsElementData: expect.any(Array),
            rollInfo: expect.any(Object),
            translations: contextMock.translations,
        };

        expect(result.current).toEqual(expectedValue);
    });

    describe('rollInfo', () => {
        test('Should be default on enter', () => {
            const { result } = renderHook(() => useRollsElementViewModel(DICES_ORDER));
            expect(result.current.rollInfo).toBe(DEFAULTS.EMPTY_ROLL_RESULT);
        });

        test('Should changed, when extendedRollSource from model is changed', () => {
            rollModelMock.extendedRollSource = new Observable((observer) => observer.next(ROLL_EXTENDED_MOCK));
            const { result } = renderHook(() => useRollsElementViewModel(DICES_ORDER));

            const expectedValue = {
                ...ROLL_EXTENDED_MOCK,
                displayValue: sign,
            };

            expect(result.current.rollInfo).toEqual(expectedValue);
        });
    });

    describe('rollsElementData', () => {
        const diceType = DiceTypes.D_4;
        const dicesOrder = [diceType];

        test('Should prepare rollsElementData', () => {
            const { result } = renderHook(() => useRollsElementViewModel(dicesOrder));

            const expectedValue = [
                {
                    diceType,
                    roll: expect.any(Function),
                    displayValue: sign,
                },
            ];

            expect(result.current.rollsElementData).toEqual(expectedValue);
        });

        test('Should call roll from model', () => {
            const { result } = renderHook(() => useRollsElementViewModel(dicesOrder));
            result.current.rollsElementData[0].roll();

            expect(rollModelMock.rollDice).toBeCalledWith(diceType);
        });
    });
});

export {};
