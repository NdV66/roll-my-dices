import { render } from '@testing-library/react';
import { TEXTS_EN } from '../../langs/en';
import { DARK_THEME } from '../../styles';
import { DiceTypes } from '../../types';
import { RollsHeader } from '../../view/elements/RollsElement';

const displayValue = 'A';

const DEFAULT_PROPS = {
    theme: DARK_THEME,
    rollsElementData: [
        {
            diceType: DiceTypes.D_20,
            roll: jest.fn(),
            displayValue,
        },
    ],
    translations: TEXTS_EN,
};

describe('RollHeader', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Should render correctly', () => {
        const { getByText } = render(<RollsHeader {...DEFAULT_PROPS} />);

        expect(getByText(DEFAULT_PROPS.translations.INFO)).toBeInTheDocument();
        expect(getByText(displayValue)).toBeInTheDocument();
    });
});

export {};
