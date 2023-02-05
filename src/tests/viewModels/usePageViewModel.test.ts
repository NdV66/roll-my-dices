import * as modelsTools from '../../context/models';
import * as contextTools from '../../context/AppContext';
import { AppTheme, TAppContext } from '../../types';
import { getAppContextMock } from '../mocks/appContext';
import { appFateRollModelMock } from '../mocks/appFateRollModelMock';
import { renderHook } from '@testing-library/react';
import { usePageViewModel } from '../../viewModels';
import { Observable } from 'rxjs';
import { AppThemeModel } from '../../models/AppThemeModel';

describe('usePageViewModel', () => {
    let modelMock: AppThemeModel;
    let contextMock: TAppContext;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        contextMock = getAppContextMock() as any as TAppContext;
        modelMock = appFateRollModelMock() as any as AppThemeModel;

        jest.spyOn(modelsTools, 'getModelByKey').mockReturnValue(modelMock);
        jest.spyOn(contextTools, 'useAppContext').mockReturnValue(contextMock);
    });

    test('Should return expected data', () => {
        const appTheme = AppTheme.LIGHT;
        modelMock.appTheme = new Observable((observer) => observer.next(appTheme));
        const { result } = renderHook(usePageViewModel);

        const expectedValue = {
            antdTheme: {
                token: {
                    colorPrimary: contextMock.theme.primary,
                    colorBgBase: contextMock.theme.background,
                    fontSize: contextMock.theme.fontSize,
                    colorTextBase: contextMock.theme.primary,
                    colorInfo: contextMock.theme.primary,
                    colorWarning: contextMock.theme.accent,
                    themeError: contextMock.theme.accent,
                },
            },
            translations: contextMock.translations,
            theme: contextMock.theme,
            appTheme,
        };

        expect(result.current).toEqual(expectedValue);
    });
});

export {};
