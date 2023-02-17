import { render } from '@testing-library/react';
import { DEFAULTS, TEST_IDS } from '../../defaults';
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

describe('ExplodingRollResult', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<ExplodingRollResult {...DEFAULT_PROPS} />);
        expect(getByTestId(TEST_IDS.EXPLODING_ROLL_RESULT)).toBeInTheDocument();
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
        expect(getByTestId(TEST_IDS.ROLL_MOD_CALCULATION)).toBeInTheDocument();
    });

    test('Should render calculation result if is not exploding, but mod is not default', () => {
        const { getByTestId } = render(<ExplodingRollResult {...DEFAULT_PROPS_NO_EXPLOSION} />);
        expect(getByTestId(TEST_IDS.ROLL_MOD_CALCULATION)).toBeInTheDocument();
    });

    test('Should not render calculation result if is not exploding and mod is default', () => {
        const { queryByTestId } = render(<ExplodingRollResult {...DEFAULT_PROPS_NO_EXPLOSION} mod={DEFAULTS.MOD} />);
        expect(queryByTestId(TEST_IDS.ROLL_MOD_CALCULATION)).not.toBeInTheDocument();
    });
});

export {};
