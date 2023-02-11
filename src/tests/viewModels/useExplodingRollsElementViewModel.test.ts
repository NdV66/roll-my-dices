import * as contextTools from '../../context/AppContext';
import * as modelsTools from '../../context/models';
import * as diceTools from '../../services/dices.service';
import * as mapToMaxRollButtonDataTools from '../../services/mapToMaxRollButtonData.rolls.service';

import { DiceTypes, TAppContext } from '../../types';
import { appRollModelMock, getAppContextMock } from '../mocks';
import { renderHook } from '@testing-library/react';
import { DEFAULTS, DICES_ORDER } from '../../defaults';
import { useRollsElementViewModel } from '../../viewModels';
import { Observable } from 'rxjs';
import { EXPLODING_ROLL_NO_EXPLOSION, EXPLODING_ROLL_WITH_EXPLOSION } from '../models/mocks';
import { AppExplodingRollModel } from '../../models/AppExplodingRollModel';

const sign = 'X';

describe('useExplodingRollsElementViewModel', () => {
    let contextMock: TAppContext;
    let rollModelMock: AppExplodingRollModel;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        contextMock = getAppContextMock() as any as TAppContext;
        rollModelMock = appRollModelMock() as any as AppExplodingRollModel;

        jest.spyOn(contextTools, 'useAppContext').mockReturnValue(contextMock);
        jest.spyOn(modelsTools, 'getModelByKey').mockReturnValue(rollModelMock);
        jest.spyOn(diceTools, 'mapRollToDice').mockReturnValue(sign);
        jest.spyOn(mapToMaxRollButtonDataTools, 'mapToMaxRollButtonData').mockReturnValue([]);
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

        test('Should changed, when extendedRollSource from model is changed (no explosion)', () => {
            (rollModelMock as any).extendedRollSource = new Observable((observer) =>
                observer.next(EXPLODING_ROLL_NO_EXPLOSION),
            );
            const { result } = renderHook(() => useRollsElementViewModel(DICES_ORDER));

            const expectedValue = {
                ...EXPLODING_ROLL_NO_EXPLOSION,
                displayValue: sign,
            };

            expect(result.current.rollInfo).toEqual(expectedValue);
        });

        test('Should changed, when extendedRollSource from model is changed (with explosion)', () => {
            (rollModelMock as any).extendedRollSource = new Observable((observer) =>
                observer.next(EXPLODING_ROLL_WITH_EXPLOSION),
            );
            const { result } = renderHook(() => useRollsElementViewModel(DICES_ORDER));

            const expectedValue = {
                ...EXPLODING_ROLL_WITH_EXPLOSION,
                displayValue: sign,
            };

            expect(result.current.rollInfo).toEqual(expectedValue);
        });
    });

    describe.only('rollsElementData', () => {
        const diceType = DiceTypes.D_4;
        const dicesOrder = [diceType];

        test('Should prepare rollsElementData', () => {
            const expectedValue = [
                {
                    diceType,
                    roll: jest.fn(),
                    displayValue: sign,
                },
            ];
            jest.spyOn(mapToMaxRollButtonDataTools, 'mapToMaxRollButtonData').mockReturnValue(expectedValue);

            const { result } = renderHook(() => useRollsElementViewModel(dicesOrder));
            expect(result.current.rollsElementData).toEqual(expectedValue);
        });

        test('Should call roll from model', () => {
            const expectedValue = [
                {
                    diceType,
                    roll: () => rollModelMock.rollDice(diceType),
                    displayValue: sign,
                },
            ];
            jest.spyOn(mapToMaxRollButtonDataTools, 'mapToMaxRollButtonData').mockReturnValue(expectedValue);

            const { result } = renderHook(() => useRollsElementViewModel(dicesOrder));
            result.current.rollsElementData[0].roll();

            expect(rollModelMock.rollDice).toBeCalledWith(diceType);
        });
    });
});

export {};
