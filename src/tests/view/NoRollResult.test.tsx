import { render } from '@testing-library/react';
import { TEST_IDS } from '../../defaults';
import { DARK_THEME } from '../../styles';
import { NoRollResult } from '../../view/elements';

const DEFAULT_PROPS = {
    theme: DARK_THEME,
};

describe('NoRollResult', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<NoRollResult {...DEFAULT_PROPS} />);
        expect(getByTestId(TEST_IDS.NO_ROLL_RESULT)).toBeInTheDocument();
    });
});

export {};
