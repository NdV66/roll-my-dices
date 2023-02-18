import { render } from '@testing-library/react';
import { TEST_IDS } from '../../defaults';
import { DARK_THEME } from '../../styles';
import { MainContentTab } from '../../types';
import { MainContent } from '../../view/page/MainContent';
import * as viewModel from '../../viewModels/useMainContentViewModel';
import * as getContentListModule from '../../view/page/getContentList';

const VIEW_MODEL_DATA = {
    theme: DARK_THEME,
    activeTabKey: MainContentTab.CLASSIC_D20,
    setActiveTabKey: jest.fn(),
    translatedTabList: [
        {
            tab: 'classicD20',
            key: MainContentTab.CLASSIC_D20,
        },
    ],
};

describe('MainContent', () => {
    test('Should render correctly', () => {
        const text = 'classic';
        jest.spyOn(getContentListModule, 'getContentList').mockReturnValue({
            [MainContentTab.CLASSIC_D20]: <div>{text}</div>,
        });
        jest.spyOn(viewModel, 'useMainContentViewModel').mockReturnValue(VIEW_MODEL_DATA);
        const { getByTestId, getByText } = render(<MainContent />);

        expect(getByTestId(TEST_IDS.MAIN_CONTENT)).toBeInTheDocument();
        expect(getByText(text)).toBeInTheDocument();
    });
});

export {};
