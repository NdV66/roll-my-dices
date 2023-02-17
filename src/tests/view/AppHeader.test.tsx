import { render } from '@testing-library/react';
import { TEXTS_EN } from '../../langs/en';
import { DARK_THEME } from '../../styles';
import { AppHeader } from '../../view/page/AppHeader';

const DEFAULT_PROPS = {
    theme: DARK_THEME,
    translations: TEXTS_EN,
};

const TEST_ID = 'AppHeader_testId';

describe('AppHeader', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<AppHeader {...DEFAULT_PROPS} />);
        expect(getByTestId(TEST_ID)).toBeInTheDocument();
    });

    test('Should show app name', () => {
        const { getByText } = render(<AppHeader {...DEFAULT_PROPS} />);
        expect(getByText(DEFAULT_PROPS.translations.APP_NAME)).toBeInTheDocument();
    });
});

export {};
