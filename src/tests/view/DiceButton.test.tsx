import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { DARK_THEME } from '../../styles';
import { DiceTypes } from '../../types';
import { DiceButton } from '../../view/elements';

const DEFAULT_PROPS = {
    onClick: jest.fn(),
    displayValue: 'A',
    theme: DARK_THEME,
    diceType: DiceTypes.D_10,
};

const TEST_ID = 'DiceButton_testId';

describe('DiceButton', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<DiceButton {...DEFAULT_PROPS} />);
        expect(getByTestId(TEST_ID)).toBeInTheDocument();
    });

    test('Should call onClick when button is clicked', () => {
        const { getByTestId } = render(<DiceButton {...DEFAULT_PROPS} />);
        const element = getByTestId(TEST_ID);

        act(() => fireEvent.click(element));

        expect(DEFAULT_PROPS.onClick).toBeCalledTimes(1);
    });
});

export {};
