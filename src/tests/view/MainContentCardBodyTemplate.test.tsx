import { render } from '@testing-library/react';

import { MainContentCardBodyTemplate } from '../../view/elements';
import { DARK_THEME } from '../../styles';
import { MainContentTab } from '../../types';
import { AppContext } from '../../context';
import { TEXTS_EN } from '../../langs/en';

const DEFAULT_PROPS = {
    activeMainTab: MainContentTab.CLASSIC_D20,
    theme: DARK_THEME,
};

const TEST_ID = 'MainContentCardBodyTemplate_testId';

const renderComponent = (children: React.ReactNode = null, props: any = {}) =>
    render(
        <AppContext.Provider value={{ theme: DARK_THEME, translations: TEXTS_EN, isLoading: false }}>
            <MainContentCardBodyTemplate {...DEFAULT_PROPS} {...props}>
                {children}
            </MainContentCardBodyTemplate>
        </AppContext.Provider>,
    );

describe('MainContentCardBodyTemplate', () => {
    test('Should render correctly', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId(TEST_ID)).toBeInTheDocument();
    });

    test('Should render clean everything button', () => {
        const { getByText } = renderComponent();
        expect(getByText(TEXTS_EN.CLEAN)).toBeInTheDocument();
    });

    test('Should render children', () => {
        const text = 'lotr';
        const { getByText } = renderComponent(text);

        expect(getByText(text)).toBeInTheDocument();
    });

    test('Should render buttons (open mod modal and clean mod)', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('ModInputModalButtons_testId')).toBeInTheDocument();
    });
});

export {};
