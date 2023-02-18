import * as modelsTools from '../../context/models';
import * as contextTools from '../../context/AppContext';
import { AppFateRollModel } from '../../models/AppFateRollModel';
import { AppRollModel } from '../../models/AppRollModel';
import { MainContentTab, Models, TAppContext, TTabList } from '../../types';
import { appFateRollModelMock, appRollModelMock, getAppContextMock } from '../mocks';
import { renderHook } from '@testing-library/react';
import { useMainContentViewModel } from '../../viewModels/useMainContentViewModel';
import { TAB_LISTS } from '../../defaults';
import { act } from 'react-dom/test-utils';

describe('useMainContentViewModel', () => {
    let fateModelMock: AppFateRollModel;
    let rollModelMock: AppRollModel;
    let contextMock: TAppContext;

    beforeEach(() => {
        contextMock = getAppContextMock() as any as TAppContext;
        rollModelMock = appRollModelMock() as any as AppRollModel;
        fateModelMock = appFateRollModelMock() as any as AppFateRollModel;

        jest.spyOn(modelsTools, 'getModelByKey').mockImplementation((model: Models) =>
            model === Models.APP_FATE ? fateModelMock : rollModelMock,
        );
        jest.spyOn(contextTools, 'useAppContext').mockReturnValue(contextMock);
    });

    test('Should return data in expected format', () => {
        const { result } = renderHook(() => useMainContentViewModel(TAB_LISTS));
        const expectedValue = {
            theme: contextMock.theme,
            activeTabKey: expect.any(String),
            setActiveTabKey: expect.any(Function),
            translatedTabList: expect.any(Array),
        };

        expect(result.current).toEqual(expectedValue);
    });

    test('Should translate to translatedTabList', () => {
        const tab = 'translatedTabList_test';
        const tabList: TTabList[] = [
            {
                key: MainContentTab.FATE,
                tab,
            },
        ];
        contextMock.translations = { ...contextMock.translations, translatedTabList_test: 'test' };

        const { result } = renderHook(() => useMainContentViewModel(tabList));

        const expectedValue = [
            {
                key: MainContentTab.FATE,
                tab: contextMock.translations[tab],
            },
        ];

        expect(result.current.translatedTabList).toEqual(expectedValue);
    });

    describe('activeTabKeySource', () => {
        test('Should call cleanAll from roll model and from fate model', () => {
            const { result } = renderHook(() => useMainContentViewModel(TAB_LISTS));

            act(() => result.current.setActiveTabKey(MainContentTab.CLASSIC_D20));

            expect(fateModelMock.cleanAll).toBeCalled();
            expect(rollModelMock.cleanAll).toBeCalled();
        });

        test('Should update activeTabKeySource', () => {
            const { result } = renderHook(() => useMainContentViewModel(TAB_LISTS));

            act(() => result.current.setActiveTabKey(MainContentTab.CLASSIC_D20));
            expect(result.current.activeTabKey).toBe(MainContentTab.CLASSIC_D20);

            act(() => result.current.setActiveTabKey(MainContentTab.FATE));
            expect(result.current.activeTabKey).toBe(MainContentTab.FATE);
        });
    });
});

export {};
