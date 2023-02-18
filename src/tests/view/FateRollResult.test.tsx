import { render } from '@testing-library/react';

import { DARK_THEME } from '../../styles';
import { FateRollResult } from '../../view/elements/FateRollResult';
import { DiceTypes } from '../../types';
import { DEFAULTS, ROLLS_RESULTS_FONTS, TEST_IDS } from '../../defaults';

const DEFAULT_PROPS = {
    allRolls: [1, -1, 0, 1],
    roll: 1,
    dice: DiceTypes.FATE,
    mod: 2,
    calculationResult: 3,
    theme: DARK_THEME,
};

describe('FateRollResult', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<FateRollResult {...DEFAULT_PROPS} />);
        expect(getByTestId(TEST_IDS.FATE_ROLL_RESULT)).toBeInTheDocument();
    });

    test('Should not render mod, if mod is default', () => {
        const { queryByTestId } = render(<FateRollResult {...DEFAULT_PROPS} mod={DEFAULTS.MOD} />);
        expect(queryByTestId(TEST_IDS.ROLL_MOD_CALCULATION)).not.toBeInTheDocument();
    });

    test('Should render mod, if mod is different than default', () => {
        const { getByTestId } = render(<FateRollResult {...DEFAULT_PROPS} />);
        expect(getByTestId(TEST_IDS.ROLL_MOD_CALCULATION)).toBeInTheDocument();
    });

    test('Should render all rolls', () => {
        const { getByText, getAllByText } = render(<FateRollResult {...DEFAULT_PROPS} />);
        const fonts = ROLLS_RESULTS_FONTS[DiceTypes.FATE];

        expect(getByText(fonts[0])).toBeInTheDocument();
        expect(getByText(fonts[1])).toBeInTheDocument();
        expect(getAllByText(fonts[2]).length).toBe(2);
    });
});

export {};
