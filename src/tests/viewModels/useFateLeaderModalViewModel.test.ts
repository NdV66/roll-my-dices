import * as contextTools from '../../context/AppContext';
import { TAppContext } from '../../types';
import { getAppContextMock } from '../mocks';
import { renderHook } from '@testing-library/react';
import { useFateLeaderModalViewModel } from '../../viewModels';
import { act } from 'react-dom/test-utils';
import { TEXTS_EN } from '../../langs/en';
import { DEFAULTS } from '../../defaults';

describe('useFateLeaderModalViewModel', () => {
    let contextMock: TAppContext;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        contextMock = getAppContextMock() as any as TAppContext;

        jest.spyOn(contextTools, 'useAppContext').mockReturnValue(contextMock);
    });

    test('Should return expected data', () => {
        const { result } = renderHook(useFateLeaderModalViewModel);
        const expectedValue = {
            theme: contextMock.theme,
            translations: contextMock.translations,
            onOpenModal: expect.any(Function),
            onCloseModal: expect.any(Function),
            showFateLeader: expect.any(Boolean),
            translatedColumns: expect.any(Array),
            translatedLeaderData: expect.any(Object),
        };

        expect(result.current).toEqual(expectedValue);
    });

    test('Should prepare translated columns', () => {
        const translations = TEXTS_EN;
        contextMock.translations = translations;
        const expectedValue = [
            {
                title: translations.FATE_LEADER_HEADER_VALUE,
                dataIndex: 'value',
                key: 'value',
            },
            {
                title: translations.FATE_LEADER_HEADER_NAME,
                dataIndex: 'name',
                key: 'name',
            },
        ];
        const { result } = renderHook(useFateLeaderModalViewModel);

        expect(result.current.translatedColumns).toEqual(expectedValue);
    });

    describe('showFateLeaderSource', () => {
        test('Should be default on enter', () => {
            const { result } = renderHook(useFateLeaderModalViewModel);
            expect(result.current.showFateLeader).toBe(DEFAULTS.SHOW_FATE_LEADER_ON_ENTER);
        });

        test('Show set to open', () => {
            const { result } = renderHook(useFateLeaderModalViewModel);

            act(() => result.current.onOpenModal());

            expect(result.current.showFateLeader).toBe(true);
        });

        test('Show set to close', () => {
            const { result } = renderHook(useFateLeaderModalViewModel);
            act(() => result.current.onCloseModal());

            expect(result.current.showFateLeader).toBe(false);
        });
    });
});

export {};
