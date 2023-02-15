import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { DARK_THEME } from '../../styles';
import { DiceTypes } from '../../types';
import { RollsButtons } from '../../view/elements';

const displayValue = 'A';

const DEFAULT_PROPS = {
    theme: DARK_THEME,
    buttons: [
        {
            diceType: DiceTypes.D_20,
            roll: jest.fn(),
            displayValue,
        },
    ],
};

describe('RollsButtons', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Should render correctly', () => {
        const { getByText } = render(<RollsButtons {...DEFAULT_PROPS} />);
        expect(getByText(displayValue)).toBeInTheDocument();
    });

    test('Should call roll, when button is clicked', () => {
        const { getByText } = render(<RollsButtons {...DEFAULT_PROPS} />);

        act(() => fireEvent.click(getByText(displayValue)));
        expect(DEFAULT_PROPS.buttons[0].roll).toBeCalledTimes(1);
    });
});

export {};
