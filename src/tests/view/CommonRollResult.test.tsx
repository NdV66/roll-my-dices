import { render } from '@testing-library/react';
import { DEFAULTS, TEST_IDS } from '../../defaults';
import { DARK_THEME } from '../../styles';
import { DiceTypes } from '../../types';
import { CommonRollResult } from '../../view/elements/RollsElement';

const DEFAULT_PROPS = {
    theme: DARK_THEME,
    displayValue: 'A',
    calculationResult: 8,
    mod: 2,
    dice: DiceTypes.D_10,
    roll: 6,
};

describe('CommonRollResult', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<CommonRollResult {...DEFAULT_PROPS} />);
        expect(getByTestId(TEST_IDS.COMMON_ROLL_RESULT)).toBeInTheDocument();
    });

    test('Should render roll result if mod is not default', () => {
        const { getByTestId } = render(<CommonRollResult {...DEFAULT_PROPS} />);
        expect(getByTestId(TEST_IDS.ROLL_MOD_CALCULATION)).toBeInTheDocument();
    });

    test('Should not render roll result if mod is default', () => {
        const { queryByTestId } = render(<CommonRollResult {...DEFAULT_PROPS} mod={DEFAULTS.MOD} />);
        expect(queryByTestId(TEST_IDS.ROLL_MOD_CALCULATION)).not.toBeInTheDocument();
    });
});

export {};
