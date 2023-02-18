import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { TEST_IDS } from '../../defaults';

import { DARK_THEME } from '../../styles';
import { DiceTypes } from '../../types';
import { DiceButton } from '../../view/elements';

const DEFAULT_PROPS = {
    onClick: jest.fn(),
    displayValue: 'A',
    theme: DARK_THEME,
    diceType: DiceTypes.D_10,
};

describe('DiceButton', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<DiceButton {...DEFAULT_PROPS} />);
        expect(getByTestId(TEST_IDS.DICE_BUTTON)).toBeInTheDocument();
    });

    test('Should call onClick when button is clicked', () => {
        const { getByTestId } = render(<DiceButton {...DEFAULT_PROPS} />);
        const element = getByTestId(TEST_IDS.DICE_BUTTON);

        act(() => fireEvent.click(element));

        expect(DEFAULT_PROPS.onClick).toBeCalledTimes(1);
    });
});

export {};
