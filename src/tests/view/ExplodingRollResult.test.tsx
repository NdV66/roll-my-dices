import { render } from '@testing-library/react';
import { DEFAULTS } from '../../defaults';
import { DARK_THEME } from '../../styles';
import { DiceTypes } from '../../types';
import { ExplodingRollResult } from '../../view/elements/RollsElement';

const DEFAULT_PROPS = {
    theme: DARK_THEME,
    displayValues: ['A', 'B'],
    allRolls: [[20, 6]],
    isExploding: true,
    calculationResult: 28,
    mod: 2,
    dice: DiceTypes.D_10,
    roll: 26,
};

const DEFAULT_PROPS_NO_EXPLOSION = {
    theme: DARK_THEME,
    displayValues: ['A'],
    allRolls: [[6]],
    isExploding: false,
    calculationResult: 8,
    mod: 2,
    dice: DiceTypes.D_10,
    roll: 6,
};

const TEST_ID = 'ExplodingRollResult_testId';
const MOD_TEST_ID = 'RollModCalculation_testId';

describe('ExplodingRollResult', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<ExplodingRollResult {...DEFAULT_PROPS} />);
        expect(getByTestId(TEST_ID)).toBeInTheDocument();
    });

    test('Should render all available values', () => {
        const { getByText } = render(<ExplodingRollResult {...DEFAULT_PROPS} />);

        expect(getByText(DEFAULT_PROPS.displayValues[0])).toBeInTheDocument();
        expect(getByText(DEFAULT_PROPS.displayValues[1])).toBeInTheDocument();
    });

    test('Should render all available values (no explosion)', () => {
        const { getByText } = render(<ExplodingRollResult {...DEFAULT_PROPS_NO_EXPLOSION} />);
        expect(getByText(DEFAULT_PROPS_NO_EXPLOSION.displayValues[0])).toBeInTheDocument();
    });

    test('Should render calculation result if is exploding', () => {
        const { getByTestId } = render(<ExplodingRollResult {...DEFAULT_PROPS} />);
        expect(getByTestId(MOD_TEST_ID)).toBeInTheDocument();
    });

    test('Should render calculation result if is not exploding, but mod is not default', () => {
        const { getByTestId } = render(<ExplodingRollResult {...DEFAULT_PROPS_NO_EXPLOSION} />);
        expect(getByTestId(MOD_TEST_ID)).toBeInTheDocument();
    });

    test('Should not render calculation result if is not exploding and mod is default', () => {
        const { queryByTestId } = render(<ExplodingRollResult {...DEFAULT_PROPS_NO_EXPLOSION} mod={DEFAULTS.MOD} />);
        expect(queryByTestId(MOD_TEST_ID)).not.toBeInTheDocument();
    });
});

export {};
