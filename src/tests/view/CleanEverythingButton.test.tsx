import { render } from '@testing-library/react';
import { TEXTS_EN } from '../../langs/en';
import { DARK_THEME } from '../../styles';
import { MainContentTab } from '../../types';
import { CleanEverythingButton } from '../../view/page/CleanEverytingButton';
import * as viewModel from '../../viewModels/useCleanEverythingModel';

const DEFAULT_PROPS = {
    activeMainTab: MainContentTab.CLASSIC_D20,
};

const VIEW_MODEL_DATA = {
    translations: TEXTS_EN,
    theme: DARK_THEME,
    onCleanAll: jest.fn(),
    disabled: false,
};
const TEST_ID = 'CleanEverythingButton_testId';

const mockViewModelDefault = () => jest.spyOn(viewModel, 'useCleanEverythingModel').mockReturnValue(VIEW_MODEL_DATA);

describe('AppHeader', () => {
    test('Should render correctly', () => {
        mockViewModelDefault();
        const { getByTestId } = render(<CleanEverythingButton {...DEFAULT_PROPS} />);
        expect(getByTestId(TEST_ID)).toBeInTheDocument();
    });

    test('Should display correct text', () => {
        mockViewModelDefault();
        const { getByText } = render(<CleanEverythingButton {...DEFAULT_PROPS} />);
        expect(getByText(TEXTS_EN.CLEAN)).toBeInTheDocument();
    });
});

export {};
