import { render } from '@testing-library/react';
import { DARK_THEME } from '../../styles';
import { DiceTypes } from '../../types';
import { ExplodingRollResult } from '../../view/elements/RollsElement';

const DEFAULT_PROPS = {
    theme: DARK_THEME,
    displayValues: [],
    allRolls: [],
    isExploding: false,
    calculationResult: 6,
    mod: 2,
    dice: DiceTypes.D_10,
    roll: 4,
};

const TEST_ID = 'ExplodingRollResult_testId';

describe('ExplodingRollResult', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Should render correctly', () => {
        const { getByTestId } = render(<ExplodingRollResult {...DEFAULT_PROPS} />);
        expect(getByTestId(TEST_ID)).toBeInTheDocument();
    });
});

export {};
