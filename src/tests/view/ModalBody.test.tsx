import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { TEST_IDS } from '../../defaults';
import { TEXTS_EN } from '../../langs/en';
import { DARK_THEME } from '../../styles';
import { ModalBody } from '../../view/elements/ModInputElement';

const DEFAULT_PROPS = {
    theme: DARK_THEME,
    currentValue: '6',
    translations: TEXTS_EN,
    isCurrentValueOk: true,
    onChange: jest.fn(),
};

describe('ModalBody', () => {
    test('Should render correctly', () => {
        const { getByTestId, getByText, getByPlaceholderText, queryByText } = render(<ModalBody {...DEFAULT_PROPS} />);

        expect(getByTestId(TEST_IDS.MODAL_BODY)).toBeInTheDocument();
        expect(queryByText(DEFAULT_PROPS.translations.MOD_ERROR)).not.toBeInTheDocument();
        expect(getByText(DEFAULT_PROPS.translations.MOD_TIP)).toBeInTheDocument();
        expect(getByPlaceholderText(DEFAULT_PROPS.translations.MOD_PLACEHOLDER)).toBeInTheDocument();
    });

    test('Should render paragraph warning, if value is not ok', () => {
        const { getByText } = render(<ModalBody {...DEFAULT_PROPS} isCurrentValueOk={false} />);
        expect(getByText(DEFAULT_PROPS.translations.MOD_ERROR)).toBeInTheDocument();
    });

    test('Should call on change, when input value is changed', () => {
        const { getByPlaceholderText } = render(<ModalBody {...DEFAULT_PROPS} />);
        const input = getByPlaceholderText(DEFAULT_PROPS.translations.MOD_PLACEHOLDER);
        const value = 'lotr';

        act(() => fireEvent.change(input, { target: { value } }));
        expect(DEFAULT_PROPS.onChange).toBeCalledTimes(1);
        expect(DEFAULT_PROPS.onChange).toBeCalledWith(value);
    });
});

export {};
