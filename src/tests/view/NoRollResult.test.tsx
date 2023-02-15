import { render } from '@testing-library/react';
import { DARK_THEME } from '../../styles';
import { NoRollResult } from '../../view/elements';

const DEFAULT_PROPS = {
    theme: DARK_THEME,
};

const TEST_ID = 'NoRollResult_testId';

describe('NoRollResult', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<NoRollResult {...DEFAULT_PROPS} />);
        expect(getByTestId(TEST_ID)).toBeInTheDocument();
    });
});

export {};
