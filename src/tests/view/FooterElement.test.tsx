import { render } from '@testing-library/react';
import { DEFAULTS, TEST_IDS } from '../../defaults';
import { TEXTS_EN } from '../../langs/en';
import { DARK_THEME } from '../../styles';
import { AppTheme } from '../../types';

import { FooterElement } from '../../view/page/FooterElement';
import * as viewModel from '../../viewModels/useFooterViewModel';
import * as themeViewModel from '../../viewModels/useThemeButtonElementViewModel';

const VIEW_MODEL_DATA = {
    theme: DARK_THEME,
    translations: TEXTS_EN,
    version: '1.0.0',
};

const THEME_VIEW_MODEL_DATA = {
    appTheme: AppTheme.DARK,
    translations: TEXTS_EN,
    onChangeTheme: jest.fn(),
};

describe('FooterElement', () => {
    test('Should render footer correctly', () => {
        jest.spyOn(viewModel, 'useFooterViewModel').mockReturnValue(VIEW_MODEL_DATA);
        jest.spyOn(themeViewModel, 'useThemeButtonElementViewModel').mockReturnValue(THEME_VIEW_MODEL_DATA);
        const text = `v${VIEW_MODEL_DATA.version}, ${VIEW_MODEL_DATA.translations.AUTHOR} ${new Date().getFullYear()}`;
        const { getByTestId, getByText } = render(<FooterElement />);

        expect(getByTestId(TEST_IDS.FOOTER_ELEMENT)).toBeInTheDocument();
        expect(getByTestId(TEST_IDS.SWITCH_BUTTON)).toBeInTheDocument();
        expect(getByText(text)).toBeInTheDocument();
        expect(getByText(VIEW_MODEL_DATA.translations.REPO)).toBeInTheDocument();
        expect(getByText(VIEW_MODEL_DATA.translations.REPO).closest('a')).toHaveAttribute('href', DEFAULTS.REPO_URL);
    });
});

export {};
