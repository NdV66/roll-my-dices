import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';

import { SwitchButton } from '../../view/elements';
import { act } from 'react-dom/test-utils';

const DEFAULT_PROPS = {
    onChange: jest.fn(),
};

const TEST_ID = 'SwitchButton_testId';

describe('SwitchButton', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<SwitchButton {...DEFAULT_PROPS} />);
        const element = getByTestId(TEST_ID);

        expect(element).toBeInTheDocument();
    });

    test('Should call onChange (after click)', () => {
        const { getByTestId } = render(<SwitchButton {...DEFAULT_PROPS} />);
        const element = getByTestId(TEST_ID);

        act(() => fireEvent.click(element));
        expect(DEFAULT_PROPS.onChange).toBeCalledTimes(1);
    });

    test('Should be antd warning paragraph', () => {
        const { getByTestId } = render(<SwitchButton {...DEFAULT_PROPS} />);
        const element = getByTestId(TEST_ID);

        expect(element).toHaveClass('ant-switch');
    });
});

export {};
