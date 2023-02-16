import { render } from '@testing-library/react';
import { DEFAULTS } from '../../defaults';
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

const TEST_ID = 'CommonRollResult_testId';
const MOD_TEST_ID = 'RollModCalculation_testId';

describe('CommonRollResult', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<CommonRollResult {...DEFAULT_PROPS} />);
        expect(getByTestId(TEST_ID)).toBeInTheDocument();
    });

    test('Should render roll result if mod is not default', () => {
        const { getByTestId } = render(<CommonRollResult {...DEFAULT_PROPS} />);
        expect(getByTestId(MOD_TEST_ID)).toBeInTheDocument();
    });

    test('Should not render roll result if mod is default', () => {
        const { queryByTestId } = render(<CommonRollResult {...DEFAULT_PROPS} mod={DEFAULTS.MOD} />);
        expect(queryByTestId(MOD_TEST_ID)).not.toBeInTheDocument();
    });
});

export {};
